export type SectionLink = { label: string; href: `#${string}` };

export type Feature = { title: string; description: string };

export type Step = { title: string; description: string };

export type ProviderStat = {
  id: string;
  name: string;
  count: number | null;
  examples: readonly string[];
  moreCount?: number;
  note?: string;
  featured?: boolean;
};

export type FaqItem = { question: string; answer: string; defaultOpen?: boolean };

export type FooterLink = { label: string; href: string };

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Simulados", href: "#simulados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
] as const satisfies readonly SectionLink[];

export const NAV_SECTION_IDS: readonly string[] = NAV_LINKS.map((link) => link.href.slice(1));

export const MARQUEE_PROVIDERS = ["AWS", "Google Cloud", "Microsoft Azure", "GitHub"] as const;

export const FEATURES = [
  {
    title: "Prova real",
    description: "Quantidade oficial de questões, cronômetro e nota de corte. Ao zerar o tempo, a prova termina.",
  },
  {
    title: "Gabarito na hora",
    description: "Ative o feedback imediato: confirme a resposta e veja o certo e a explicação na mesma tela.",
  },
  {
    title: "4 formatos de questão",
    description: "Escolha única, múltipla, ordenação e correspondência, como na prova.",
  },
  {
    title: "Pause e continue",
    description: "Saiu no meio? A tentativa fica salva e você retoma de onde parou.",
  },
  {
    title: "Revisão completa",
    description: "Filtre erros e acertos e reveja cada questão depois de terminar.",
  },
  {
    title: "Catálogo organizado",
    description: "35 certificações por provedor e nível, com link para o guia oficial.",
  },
] as const satisfies readonly Feature[];

export const STEPS = [
  {
    title: "Crie sua conta",
    description: "Leva menos de um minuto: e-mail, senha e o código de confirmação.",
  },
  {
    title: "Escolha a certificação",
    description: "AWS, Google Cloud ou GitHub, organizadas por nível.",
  },
  {
    title: "Faça o simulado",
    description: "Modo treino com gabarito na hora, ou prova real contra o relógio.",
  },
] as const satisfies readonly Step[];

export const PROVIDER_STATS = [
  {
    id: "aws",
    name: "AWS",
    count: 8,
    examples: ["Developer Associate", "Solutions Architect Professional", "Security Specialty"],
    moreCount: 5,
    featured: true,
  },
  {
    id: "github",
    name: "GitHub",
    count: 5,
    examples: ["Actions", "Copilot", "Foundations"],
    moreCount: 2,
  },
  {
    id: "gcp",
    name: "Google Cloud",
    count: 1,
    examples: ["Cloud Digital Leader"],
  },
  {
    id: "azure",
    name: "Azure",
    count: null,
    examples: [],
    note: "7 certificações no catálogo, simulados a caminho.",
  },
] as const satisfies readonly ProviderStat[];

export const FAQ_ITEMS = [
  {
    question: "É grátis?",
    answer: "Sim. Você cria a conta e faz todos os simulados sem pagar nada.",
  },
  // TODO: confirmar com o autor que as questões não são as da prova oficial (spec: [CONFIRMAR])
  {
    question: "As questões são as da prova oficial?",
    answer: "Não. São questões de prática no estilo e nos domínios cobrados pela prova.",
    defaultOpen: true,
  },
  {
    question: "Funciona no celular?",
    answer: "Sim, a prova roda no navegador do celular e do computador.",
  },
  {
    question: "Meu progresso fica salvo?",
    answer: "A tentativa em andamento e o histórico ficam salvos neste navegador.",
  },
  {
    question: "Quais certificações vêm a seguir?",
    answer: "Novas provas entram aos poucos no catálogo, sem data definida.",
  },
] as const satisfies readonly FaqItem[];

export const FOOTER_LINKS = [
  { label: "Simulados", href: "#simulados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Entrar", href: "/login" },
  { label: "Criar conta", href: "/cadastro" },
] as const satisfies readonly FooterLink[];

export const DISCLAIMER = "Não afiliado à AWS, Google, Microsoft ou GitHub.";
