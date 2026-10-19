# Revisão pós-prova e feedback imediato

Status: concluída (T1–T4), aguardando commit do usuário · Branch: `feat/correcao-final-prova`

## Objetivo
Hoje, ao finalizar a prova, o usuário só vê se cada questão ficou certa ou errada. Ele não vê qual alternativa era a correta nem qual marcou errado. Esta feature:
1. Cria uma **revisão pós-prova** que mostra a resposta correta e a escolha do usuário em cada questão.
2. Traz de volta, como opção, o **feedback imediato**: o usuário confere cada questão na hora em que responde.

## Critérios de aceite
- **Revisão pós-prova**
  - A tela de resultados tem um botão "Revisar respostas" que abre um modo **só de leitura**, com navegação Anterior/Próxima e painel lateral.
  - Em cada questão aparecem a alternativa correta em verde e a escolha errada do usuário em vermelho ("Sua escolha"). Order e match mostram cada etapa colorida e, quando o usuário errou, "Correta: …".
  - Questões não respondidas também mostram a resposta correta, com o selo "Não respondida". Exemplo: quem finalizou na questão 30 de 65 vê o gabarito das 35 restantes.
  - Há um filtro "Todas / Só erradas e não respondidas". Ele vale para a navegação e para o painel.
  - O painel lateral pinta cada questão de verde (correta), vermelho (incorreta) ou cinza (não respondida).
  - O "Abrir" de cada linha da tabela de resultados leva à revisão daquela questão. Ele não volta mais para a fase `running`, o que acaba com o bug que recriava uma tentativa em andamento e gravava um resultado duplicado.
  - Há um botão para voltar da revisão aos resultados.
- **Feedback imediato**
  - O intro (`exam-intro.tsx`) ganha o toggle "Feedback imediato", desligado por padrão. O preset "prova real" força o toggle para desligado.
  - Com o toggle ligado, cada questão tem o botão "Confirmar resposta". Ele só fica habilitado quando `isQuestionReady()` é true. Ao confirmar, a questão é corrigida, a correta é revelada com o mesmo visual da revisão e a questão fica travada.
  - O painel lateral pinta de verde ou vermelho as questões já confirmadas.
  - A nota final continua vindo de `gradeAttempt()` ao finalizar. Uma questão confirmada não pode ter resultado diferente na nota final.
  - Retomar uma tentativa em andamento (via localStorage) preserva o travamento e a revelação das questões já confirmadas.
- **Explicação:** se `question.explanation` existir, ela aparece abaixo da questão revelada, tanto na revisão quanto no feedback imediato.
- **Excluir questões de requisitos** (adicionado em 2026-10-19):
  - O intro ganha o toggle "Sem questões de correspondência/ordenação" (campo `excludeMatchAndOrder`), desligado por padrão e sem mexer no preset "prova real". Ligado, `buildAttempt` remove as questões `match` e `order` antes de sortear.
  - Se, com o filtro, o banco ficar menor que `examQuestionCount`, a prova usa todas as questões que sobraram.
  - O toggle só aparece quando o simulado tem questões match ou order. Hoje, só o SCS.
- **Largura estável:** o card da questão mantém a mesma largura em todas as questões (`w-full` no wrapper `max-w-3xl`).

## Escopo
Componentes de questão com o modo revelado, fase de revisão no runner, filtro, toggle e fluxo de confirmação, cores no painel e testes.

## Fora de escopo
- Persistir os detalhes da revisão no histórico. A revisão só existe na sessão atual e se perde ao recarregar a página.
- Placar parcial no topo.
- Escrever explicações para as questões.
- Mudanças no backend ou na autenticação.

## Notas técnicas
- O visual de revelação já existiu no commit `4f21f5b`, na prop `revealAnswer` de `options-question.tsx`, `order-question.tsx` e `match-question.tsx`. Pode ser recuperado com `git show 4f21f5b:<arquivo>` e adaptado ao modelo atual, que tem `gradeAttempt` e `isQuestionReady`.
- Revelação e travamento devem ser **uma única prop**, compartilhada pela revisão e pelo feedback imediato, para não duplicar a lógica.
- Estado novo: `ExamConfig.immediateFeedback: boolean` e uma marcação de questão confirmada no `QuestionState` (por exemplo, `locked`). Tentativas antigas salvas no localStorage não têm esses campos e precisam ser tratadas como `false`.
- Nova fase no `exam-runner.tsx`: `review`. Ela não salva nada no localStorage.
- Seguir o `CLAUDE.md` e o `AGENTS.md`: Next 16, ler `node_modules/next/dist/docs/` quando necessário e usar shadcn `base-nova`.

## Tarefas
| # | Responsável | Área | Depende de |
|---|---|---|---|
| T1 | `dev-frontend-ui-ux` | `app/types/simulado.ts`, `app/lib/exam/*`, `app/lib/storage/attempt-storage.ts` (se necessário), `app/components/exam/*` | — |
| T2 | `dev-tester` | Testes unitários de `app/lib/exam/grading.ts` (4 tipos de questão, `gradeAttempt`, `isQuestionReady`) e testes dos componentes de questão no modo revelado e de confirmação | T1 |
| T3 | `dev-frontend-ui-ux` | Filtro de questões de requisitos e `w-full` no wrapper | T1 |
| T4 | `dev-tester` | Instalar o Testing Library (devDeps aprovadas); testes de componente que faltaram na T2 e testes do filtro da T3 | T3 |

Um PR só, na branch `feat/correcao-final-prova`. O commit fica com o usuário.
