import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { AnswerOption, MatchQuestion, OrderQuestion, Question } from "@/types/simulado";

// Fonte: texto do PDF com as linhas em verde (corretas) prefixadas por "✓ "; "Mais votado" também conta como correta.
const SOURCE_PATH = process.argv[2];
const OUTPUT_PATH = resolve(process.cwd(), "app/_data/simulado_ai_practitioner.ts");
const EXAM_CODE = "AIF-C01";

const CORRECT_MARK = "✓ ";
const QUESTION_HEADER = /^(?:✓ )?Pergunta (?:nº )?(\d+)(?: Tópico \d+)?$/;
const OPTION_START = /^(UM|[A-F])\.\s+(.*)$/;
const TRANSLATION_JUNK = /^(?:A\.\s+|\(em inglês\)\.\s*)+/;
const MOST_VOTED = /\s*Mais votado\s*/g;
const CHOOSE = /\(Escolha (duas|três)\.?\)/;
const PICK_BY_WORD: Record<string, number> = { duas: 2, três: 3 };
const NOISE_LINES = new Set(["PONTO DE ATENDIMENTO", "-", "Resposta correta:", "Tópico 1"]);

type DragAndDrop = Pick<MatchQuestion, "type" | "pool" | "prompts"> | Pick<OrderQuestion, "type" | "pool" | "answer">;

// Transcrito à mão das imagens do PDF: nessas questões de arrastar e soltar o gabarito só existe como figura.
const DRAG_AND_DROP: Record<number, DragAndDrop> = {
  114: {
    type: "order",
    pool: ["Implantar o modelo", "Desenvolver o modelo", "Monitorar o modelo", "Definir o objetivo de negócio e enquadrar o problema de ML"],
    answer: [3, 1, 0, 2],
  },
  125: {
    type: "match",
    pool: ["Transformação em lote (batch transform)", "Inferência em tempo real"],
    prompts: [
      { t: "O chatbot da empresa precisa de previsões do LLM para entender a intenção dos usuários com latência mínima.", a: 1 },
      { t: "Um job de processamento de dados precisa consultar o LLM para processar gigabytes de arquivos de texto nos fins de semana.", a: 0 },
      { t: "A equipe de engenharia precisa criar uma API que processe pequenos trechos de texto e forneça previsões de baixa latência.", a: 1 },
    ],
  },
  135: {
    type: "match",
    pool: ["Aprendizado supervisionado", "Aprendizado não supervisionado"],
    prompts: [
      { t: "Classificação binária", a: 0 },
      { t: "Classificação multiclasse", a: 0 },
      { t: "Clustering K-means", a: 1 },
      { t: "Redução de dimensionalidade", a: 1 },
    ],
  },
  143: {
    type: "match",
    pool: ["Chain-of-thought (cadeia de raciocínio)", "Few-shot", "Zero-shot"],
    prompts: [
      { t: '"Classifique o texto a seguir como esportes, política ou entretenimento: [texto de entrada]."', a: 2 },
      { t: '"[imagem 1], [imagem 2] e [imagem 3] são exemplos de [classe alvo]. Classifique a imagem a seguir como [classe alvo]."', a: 1 },
      { t: '"[Pergunta.] [Instruções a seguir.] Pense passo a passo e me explique seu raciocínio."', a: 0 },
    ],
  },
  144: {
    type: "match",
    pool: ["Filtros de conteúdo", "Verificação de fundamentação contextual", "Tópicos negados", "Filtros de palavras"],
    prompts: [
      { t: "Bloquear prompts de entrada ou respostas do modelo com conteúdo nocivo, como ódio, insultos, violência ou má conduta.", a: 0 },
      { t: "Evitar assuntos relacionados a aconselhamento de investimentos ilegais ou aconselhamento jurídico.", a: 2 },
      { t: "Detectar e bloquear termos ofensivos específicos.", a: 3 },
      { t: "Detectar e filtrar informações nas respostas do modelo que não estejam fundamentadas na fonte fornecida.", a: 1 },
    ],
  },
  155: {
    type: "match",
    pool: ["Pré-treinamento contínuo", "Aumento de dados (data augmentation)", "Ajuste fino (fine-tuning)"],
    prompts: [
      { t: "Os modelos precisam aprender uma nova tarefa específica do domínio.", a: 2 },
      { t: "Há uma quantidade limitada de dados rotulados e são necessários mais dados.", a: 1 },
      { t: "Só há dados não rotulados disponíveis.", a: 0 },
    ],
  },
  185: {
    type: "match",
    pool: ["Pré-treinamento contínuo", "Ajuste fino (fine-tuning)"],
    prompts: [
      { t: "A empresa quer melhorar o desempenho do modelo em tarefas e exemplos específicos.", a: 1 },
      { t: "A empresa quer melhorar o conhecimento de domínio do modelo fornecendo documentos específicos.", a: 0 },
      { t: "A empresa quer retreinar o modelo usando mais dados não rotulados ao longo do tempo.", a: 0 },
    ],
  },
  188: {
    type: "match",
    pool: ["Governança", "Privacidade e segurança", "Segurança (safety)", "Transparência"],
    prompts: [
      { t: "Anonimizar informações pessoais durante a preparação dos dados de treinamento.", a: 1 },
      { t: "Projetar o chatbot de atendimento para fornecer decisões explicáveis.", a: 3 },
      { t: "Usar o Amazon Bedrock Guardrails para evitar saídas nocivas e o uso indevido do chatbot.", a: 2 },
    ],
  },
  191: {
    type: "match",
    pool: ["SageMaker Canvas", "SageMaker Feature Store", "SageMaker Ground Truth", "SageMaker JumpStart", "SageMaker Model Monitor"],
    prompts: [
      { t: "Preparar dados por meio de uma interface visual, sem escrever código.", a: 0 },
      { t: "Encontrar e usar uma solução pré-construída para detecção de fraudes.", a: 3 },
      { t: "Criar conjuntos de dados rotulados com intervenção humana.", a: 2 },
    ],
  },
  229: {
    type: "match",
    pool: ["SageMaker Clarify", "SageMaker Model Registry", "SageMaker Serverless Inference"],
    prompts: [
      { t: "Gerenciar diferentes versões do modelo.", a: 1 },
      { t: "Usar o modelo atual para fazer previsões.", a: 2 },
    ],
  },
};

interface DraftOption {
  correct: boolean;
  lines: string[];
}

interface DraftQuestion {
  number: number;
  stem: string[];
  options: DraftOption[];
}

function isNoise(line: string): boolean {
  return NOISE_LINES.has(line) || line.startsWith("[IMG");
}

function clean(text: string): string {
  return text.replace(MOST_VOTED, " ").replace(/\s+/g, " ").trim();
}

function splitQuestions(source: string): DraftQuestion[] {
  const drafts: DraftQuestion[] = [];

  for (const rawLine of source.split(/\r?\n/)) {
    const green = rawLine.startsWith(CORRECT_MARK);
    const correct = green || rawLine.includes("Mais votado");
    const line = (green ? rawLine.slice(CORRECT_MARK.length) : rawLine).trim();
    const header = rawLine.trim().match(QUESTION_HEADER);
    const current = drafts.at(-1);

    if (header) {
      drafts.push({ number: Number(header[1]), stem: [], options: [] });
    } else if (!current || !line || isNoise(line)) {
      continue;
    } else if (OPTION_START.test(line)) {
      current.options.push({ correct, lines: [line.replace(OPTION_START, "$2").replace(TRANSLATION_JUNK, "")] });
    } else if (current.options.length) {
      const option = current.options.at(-1)!;
      option.lines.push(line);
      option.correct ||= correct;
    } else {
      current.stem.push(line);
    }
  }

  return drafts;
}

function toQuestion(draft: DraftQuestion): Question | string {
  const stem = clean(draft.stem.join(" "));
  const id = `${EXAM_CODE}-${draft.number}`;
  const dragAndDrop = DRAG_AND_DROP[draft.number];
  if (dragAndDrop) return { id, stem, ...dragAndDrop };
  if (draft.options.length < 2) return `${draft.number}: sem alternativas (arrastar e soltar)`;

  const options: AnswerOption[] = draft.options.map((option, index) => ({
    id: String.fromCharCode(65 + index),
    text: clean(option.lines.join(" ")),
  }));
  const answer = options.filter((_, index) => draft.options[index].correct).map((option) => option.id);
  if (!answer.length) return `${draft.number}: sem resposta marcada`;

  const choose = stem.match(CHOOSE);
  if (!choose) {
    return answer.length === 1 ? { id, type: "single", stem, options, answer } : `${draft.number}: várias respostas sem "Escolha"`;
  }

  const pick = PICK_BY_WORD[choose[1]];
  if (answer.length !== pick) return `${draft.number}: ${answer.length} respostas marcadas, esperado ${pick}`;
  return { id, type: "multi", pick, stem, options, answer };
}

function renderModule(questions: Question[]): string {
  return `import type { Simulado } from "@/types/simulado";

export const simuladoAiPractitioner: Simulado = {
  slug: "ai-practitioner",
  title: "AWS Certified AI Practitioner",
  examCode: "${EXAM_CODE}",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 90,
  passingScore: 70,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;
}

if (!SOURCE_PATH) throw new Error("Informe o caminho do texto extraído do PDF do AIF-C01");

const results = splitQuestions(readFileSync(SOURCE_PATH, "utf8")).map(toQuestion);
const questions = results.filter((result): result is Question => typeof result !== "string");
const skipped = results.filter((result): result is string => typeof result === "string");

writeFileSync(OUTPUT_PATH, renderModule(questions));
console.log(`${questions.length} questões geradas, ${skipped.length} ignoradas`);
skipped.forEach((reason) => console.log(`  - ${reason}`));
