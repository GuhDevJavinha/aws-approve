import type { Simulado } from "@/types/simulado";

export const simuladoGithubActions: Simulado = {
  slug: "github-actions",
  title: "GitHub Actions",
  examCode: "GH-200",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 120,
  passingScore: 70,
  questions: [
  {
    "id": "GH-200-1",
    "stem": "Qual declaração está correta em relação ao repasse de permissões para workflows reutilizáveis?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions",
    "options": [
      {
        "id": "A",
        "text": "As permissões do `GITHUB_TOKEN` repassadas do workflow chamador só podem ser reduzidas pelo workflow chamado."
      },
      {
        "id": "B",
        "text": "As permissões do `GITHUB_TOKEN` repassadas do workflow chamador só podem ser elevadas pelo workflow chamado."
      },
      {
        "id": "C",
        "text": "As permissões do `GITHUB_TOKEN` repassadas do workflow chamador podem ser tanto reduzidas quanto elevadas pelo workflow chamado."
      },
      {
        "id": "D",
        "text": "As permissões do `GITHUB_TOKEN` repassadas do workflow chamador não podem ser nem reduzidas nem elevadas pelo workflow chamado."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-2",
    "stem": "Quais são os diferentes níveis de permissão que você pode atribuir ao `GITHUB_TOKEN` no bloco de `permissions`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/tutorials/authenticate-with-github_token",
    "options": [
      {
        "id": "A",
        "text": "none, write, read"
      },
      {
        "id": "B",
        "text": "read, write, delete"
      },
      {
        "id": "C",
        "text": "read, write\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-3",
    "stem": "Você pode usar `permissions` para modificar as permissões do `GITHUB_TOKEN` em:",
    "explanation": "Documentação: https://docs.github.com/en/actions/tutorials/authenticate-with-github_token",
    "options": [
      {
        "id": "A",
        "text": "Nível de workflow"
      },
      {
        "id": "B",
        "text": "Nível de job"
      },
      {
        "id": "C",
        "text": "Nível de etapa"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-4",
    "stem": "Os GitHub Actions são gratuitos para repositórios públicos?",
    "explanation": "Documentação: https://docs.github.com/en/billing/concepts/product-billing/github-actions#how-use-of-github-actions-is-measured",
    "options": [
      {
        "id": "A",
        "text": "Sim, ao usar os runners padrão hospedados pelo GitHub"
      },
      {
        "id": "B",
        "text": "Não, todo uso dos GitHub Actions é cobrado"
      },
      {
        "id": "C",
        "text": "Sim, mas apenas para os primeiros 2.000 minutos por mês"
      },
      {
        "id": "D",
        "text": "Não, somente os runners auto-hospedados são gratuitos para repositórios públicos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-5",
    "stem": "Qual desses não é um evento válido que pode disparar um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "Clonando o repositório"
      },
      {
        "id": "B",
        "text": "Fazendo um commit em um arquivo na branch master"
      },
      {
        "id": "C",
        "text": "Uma branch é criada"
      },
      {
        "id": "D",
        "text": "Adicionando um rótulo a um pull request"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-6",
    "stem": "Qual é verdadeiro sobre os workflows?",
    "explanation": "• \"Workflows são escritos em qualquer um dos formatos `.yaml`, `.json` ou `.toml`\": Workflows só podem ser definidos no formato `.yaml`\n• \"Workflows podem ser compartilhados no GitHub Marketplace\": Actions (não workflows) podem ser compartilhados no GitHub Marketplace\nDocumentação: https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows",
    "options": [
      {
        "id": "A",
        "text": "Workflows podem executar um ou múltiplos jobs ao mesmo tempo"
      },
      {
        "id": "B",
        "text": "Workflows podem ser acionados manualmente, por um evento ou executados em uma programação"
      },
      {
        "id": "C",
        "text": "Workflows precisam ser definidos no diretório `.github/workflows`"
      },
      {
        "id": "D",
        "text": "Workflows só podem ser executados em uma programação"
      },
      {
        "id": "E",
        "text": "Workflow pode executar apenas um job por vez"
      },
      {
        "id": "F",
        "text": "Workflows são escritos em qualquer um dos formatos `.yaml`, `.json` ou `.toml`"
      },
      {
        "id": "G",
        "text": "Workflows podem ser compartilhados no GitHub Marketplace"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-7",
    "stem": "Quais componentes são necessários para um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/about-workflows#workflow-basics",
    "options": [
      {
        "id": "A",
        "text": "Um ou mais eventos que irão acionar o workflow"
      },
      {
        "id": "B",
        "text": "Um ou mais jobs"
      },
      {
        "id": "C",
        "text": "Nome do workflow"
      },
      {
        "id": "D",
        "text": "Branches definidas nas quais o workflow será executado"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-8",
    "stem": "Qual evento é acionado por uma ação de webhook fora do repositório?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "repository_dispatch"
      },
      {
        "id": "B",
        "text": "webhook_dispatch"
      },
      {
        "id": "C",
        "text": "workflow_dispatch"
      },
      {
        "id": "D",
        "text": "remote_dispatch"
      },
      {
        "id": "E",
        "text": "api_dispatch"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-9",
    "stem": "Os Workflows são definidos em qual formato?",
    "options": [
      {
        "id": "A",
        "text": "yaml"
      },
      {
        "id": "B",
        "text": "toml"
      },
      {
        "id": "C",
        "text": "json"
      },
      {
        "id": "D",
        "text": "xml"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-10",
    "stem": "Onde você deve armazenar dados sensíveis, como senhas ou certificados, que serão usados em workflows",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets",
    "options": [
      {
        "id": "A",
        "text": "secrets"
      },
      {
        "id": "B",
        "text": "config variables"
      },
      {
        "id": "C",
        "text": "vault"
      },
      {
        "id": "D",
        "text": "environment variables\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-11",
    "stem": "Em um workflow com múltiplos jobs, o comportamento padrão é:",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs",
    "options": [
      {
        "id": "A",
        "text": "Todos os jobs são executados em paralelo"
      },
      {
        "id": "B",
        "text": "Os jobs são executados em sequência"
      },
      {
        "id": "C",
        "text": "Os jobs são executados com base na ordem em que estão definidos no arquivo do workflow"
      },
      {
        "id": "D",
        "text": "Apenas o primeiro job é executado, os outros requerem aprovação manual"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-12",
    "stem": "Se o job B precisar que o job A seja concluído, você deve:",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs",
    "options": [
      {
        "id": "A",
        "text": "usar a palavra-chave `needs` no job B para criar essa dependência"
      },
      {
        "id": "B",
        "text": "usar a palavra-chave `needs` no job A para criar essa dependência"
      },
      {
        "id": "C",
        "text": "usar a palavra-chave `requires` no job B para criar essa dependência"
      },
      {
        "id": "D",
        "text": "usar a palavra-chave `requires` no job A para criar essa dependência"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-13",
    "stem": "Em um workflow com vários jobs, se o job A falhar, então:",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs",
    "options": [
      {
        "id": "A",
        "text": "os jobs que dependem do job A são ignorados"
      },
      {
        "id": "B",
        "text": "os jobs que dependem do job A falham"
      },
      {
        "id": "C",
        "text": "o workflow cancela imediatamente todos os outros jobs"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-14",
    "stem": "Este código executará 6 jobs diferentes em paralelo usando a estratégia de matriz. Você pode usar a estratégia de matriz para paralelizar fluxos de trabalho inteiros?",
    "code": "jobs:\n  example_matrix:\n    strategy:\n      matrix:\n        version: [10, 12, 14]\n        os: [ubuntu-latest, windows-latest]",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      },
      {
        "id": "C",
        "text": "Somente se os fluxos de trabalho estiverem no mesmo repositório"
      },
      {
        "id": "D",
        "text": "Somente com runners hospedados por conta própria"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-15",
    "stem": "Qual definição de trabalho de matriz é sintaticamente correta?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy",
    "options": [
      {
        "id": "A",
        "code": "jobs:\n  example_matrix:\n    strategy:\n      matrix:\n        version: [10, 12, 14]\n        os: [ubuntu-latest, windows-latest]"
      },
      {
        "id": "B",
        "code": "jobs:\n  example_matrix:\n    matrix:\n      strategy:\n        version: [10, 12, 14]\n        os: [ubuntu-latest, windows-latest]"
      },
      {
        "id": "C",
        "code": "jobs:\n  example_matrix:\n    matrix:\n      version: [10, 12, 14]\n      os: [ubuntu-latest, windows-latest]"
      },
      {
        "id": "D",
        "code": "jobs:\n  matrix:\n    version: [10, 12, 14]\n    os: [ubuntu-latest, windows-latest]"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-16",
    "stem": "Como você acessa variáveis de matriz em um trabalho de estratégia de matriz?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy",
    "options": [
      {
        "id": "A",
        "text": "Usando o contexto `vars`"
      },
      {
        "id": "B",
        "text": "Usando o contexto `matrix`"
      },
      {
        "id": "C",
        "text": "Usando o contexto `job`"
      },
      {
        "id": "D",
        "text": "Usando o contexto `jobs`"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-17",
    "stem": "Ao usar os eventos `pull_request` e `pull_request_target`, como você configura o workflow para ser executado apenas ao direcionar para a branch `prod`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-for-pull-request-events",
    "options": [
      {
        "id": "A",
        "text": "Usando o filtro `branches`"
      },
      {
        "id": "B",
        "text": "Usando o filtro `branch`"
      },
      {
        "id": "C",
        "text": "Você cria o workflow apenas na branch `prod`"
      },
      {
        "id": "D",
        "text": "Usando padrões globais"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-18",
    "stem": "Este workflow será executado em todos os pull requests onde:",
    "code": "on:\n  pull_request:\n    branches:\n      - 'release/**'\n      - '!release/**-alpha'",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches",
    "options": [
      {
        "id": "A",
        "text": "o nome da branch de destino começa com `release`, mas não termina com `-alpha`"
      },
      {
        "id": "B",
        "text": "o nome da branch de destino começa com `release`"
      },
      {
        "id": "C",
        "text": "o nome da branch de origem começa com `release`, mas não termina com `-alpha`"
      },
      {
        "id": "D",
        "text": "o nome da branch de origem começa com `release`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-19",
    "stem": "Preencha o espaço em branco: Ao usar filtros de evento `push`, você pode usar padrões de <____> para direcionar vários branches",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-or-tags-for-push-events",
    "options": [
      {
        "id": "A",
        "text": "glob"
      },
      {
        "id": "B",
        "text": "regex"
      },
      {
        "id": "C",
        "text": "scheme"
      },
      {
        "id": "D",
        "text": "action"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-20",
    "stem": "Qual evento permite que você inicie manualmente um workflow na interface do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow",
    "options": [
      {
        "id": "A",
        "text": "workflow_dispatch"
      },
      {
        "id": "B",
        "text": "manual_dispatch"
      },
      {
        "id": "C",
        "text": "workflow_trigger"
      },
      {
        "id": "D",
        "text": "manual_trigger"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-21",
    "stem": "Quais são os tipos possíveis de uma variável de entrada para um workflow acionado manualmente?",
    "explanation": "Documentação: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputsinput_idtype",
    "options": [
      {
        "id": "A",
        "text": "choice"
      },
      {
        "id": "B",
        "text": "boolean"
      },
      {
        "id": "C",
        "text": "string"
      },
      {
        "id": "D",
        "text": "number"
      },
      {
        "id": "E",
        "text": "environment"
      },
      {
        "id": "F",
        "text": "dropdown"
      },
      {
        "id": "G",
        "text": "select"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "type": "multi",
    "pick": 5
  },
  {
    "id": "GH-200-22",
    "stem": "Um workflow que tem apenas o gatilho de evento `workflow_dispatch` pode ser acionado usando a REST API do GitHub",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputs",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-23",
    "stem": "Para parar a execução de um workflow temporariamente sem modificar o código fonte, você deve",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows",
    "options": [
      {
        "id": "A",
        "text": "Usar a opção `Disable workflow` no GitHub Actions"
      },
      {
        "id": "B",
        "text": "Remover secrets necessários para este workflow"
      },
      {
        "id": "C",
        "text": "Excluir o ambiente necessário para este workflow"
      },
      {
        "id": "D",
        "text": "Impedir novos commits na branch main"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-24",
    "stem": "Para que são utilizados os `activity types` de um evento?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "Limitar a execução de workflows a tipos específicos de atividades usando o filtro `types`"
      },
      {
        "id": "B",
        "text": "Verificar se a atividade vem de um usuário ou de um bot"
      },
      {
        "id": "C",
        "text": "Reagir a nova atividade em um repositório (por exemplo, novo contribuinte)"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-25",
    "stem": "Você deseja criar um workflow reutilizável `CI` que execute algumas verificações de qualidade, linting e testes em alterações de código. Qual evento disparador o workflow `CI` deve definir para permitir seu reuso em outros workflows?",
    "explanation": "• \"workflow_trigger\": Não existe tal evento disparador\n• \"workflow_dispatch\": Este é usado para disparos manuais\n• \"workflow_run\": https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "workflow_call"
      },
      {
        "id": "B",
        "text": "workflow_trigger"
      },
      {
        "id": "C",
        "text": "workflow_dispatch"
      },
      {
        "id": "D",
        "text": "workflow_run"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-26",
    "stem": "Um workflow reutilizável chamado `build` cria artefatos de arquivo zip. Como você passa a localização do arquivo zip para o workflow chamador que está chamando o workflow `build`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    "options": [
      {
        "id": "A",
        "text": "Você define uma saída no nível do workflow no workflow `build`"
      },
      {
        "id": "B",
        "text": "Você define uma saída no nível do job no workflow `build`"
      },
      {
        "id": "C",
        "text": "No workflow `build` você escreve a saída em `$GITHUB_OUTPUT` em um dos passos"
      },
      {
        "id": "D",
        "text": "Todas as saídas são automaticamente passadas para os workflows chamadores"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-27",
    "stem": "Quais são os casos de uso válidos para utilizar **defaults**?",
    "explanation": "• \"Usar defaults.run no nível do step para definir o shell padrão (ex. bash) para aquele único step\": defaults.run só pode ser definido no nível do workflow ou job\n• \"Usar defaults.env no nível do workflow para definir variáveis de ambiente padrão para todo o workflow\": Não existe defaults.env\n• \"Usar defaults.env no nível do job para definir variáveis de ambiente padrão para todos os steps em um único job\": Não existe defaults.env\nDocumentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults",
    "options": [
      {
        "id": "A",
        "text": "Usar defaults.run no nível do workflow para definir o shell padrão (ex. bash) para todo o workflow"
      },
      {
        "id": "B",
        "text": "Usar defaults.run no nível do job para definir o diretório de trabalho padrão para todos os steps em um único job"
      },
      {
        "id": "C",
        "text": "Usar defaults.run no nível do step para definir o shell padrão (ex. bash) para aquele único step"
      },
      {
        "id": "D",
        "text": "Usar defaults.env no nível do workflow para definir variáveis de ambiente padrão para todo o workflow"
      },
      {
        "id": "E",
        "text": "Usar defaults.env no nível do job para definir variáveis de ambiente padrão para todos os steps em um único job"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-28",
    "stem": "Como você pode garantir que um fluxo de trabalho chamado `Deploy Prod` esteja sempre sendo executado no máximo uma vez por vez?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency",
    "options": [
      {
        "id": "A",
        "text": "Use `concurrency` no nível do fluxo de trabalho",
        "code": "concurrency: ${{ github.workflow }}"
      },
      {
        "id": "B",
        "text": "Use `queue` no nível do fluxo de trabalho",
        "code": "queue: ${{ github.workflow }}"
      },
      {
        "id": "C",
        "text": "Use `order` no nível do fluxo de trabalho",
        "code": "order: ${{ github.workflow }}"
      },
      {
        "id": "D",
        "text": "Use `parallel` no nível do fluxo de trabalho",
        "code": "parallel: ${{ github.workflow }}"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-29",
    "stem": "Seu fluxo de trabalho de análise de Pull Request utiliza várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído completamente. Ele é acionado no evento `pull_request` com o filtro `branches` configurado para `master`. Portanto, se um desenvolvedor fizer vários commits em poucos minutos, vários fluxos de trabalho serão executados em paralelo. Como você pode interromper todas as execuções anteriores do fluxo de trabalho e executar apenas aquela com as alterações mais recentes?",
    "explanation": "• \"Use concurrency\": Isso colocaria as execuções na fila para aquele github ref. Não interromperia as execuções anteriores.\n• \"Use activity types filter\": Não existe tal tipo de atividade como `latest` para o evento pull_request.\n• \"Use cancel-in-progress flag para o evento `pull_request`\": `cancel-in-progress` só pode ser usado dentro de um bloco `concurrency`. Não é uma chave válida para `pull_request`.\nDocumentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run",
    "options": [
      {
        "id": "A",
        "text": "Use concurrency com cancel-in-progress",
        "code": "concurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true"
      },
      {
        "id": "B",
        "text": "Use concurrency",
        "code": "concurrency:\n  group: ${{ github.ref }}"
      },
      {
        "id": "C",
        "text": "Use activity types filter",
        "code": "on:\n  pull_request:\n    branches:\n      - master\n    types: [latest]"
      },
      {
        "id": "D",
        "text": "Use cancel-in-progress flag para o evento `pull_request`",
        "code": "on:\n  pull_request:\n    branches:\n      - master\n    cancel-in-progress: true"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-30",
    "stem": "Quando o job3 será executado?",
    "code": "jobs:\n  job1:\n  job2:\n    needs: job1\n  job3:\n    if: ${{ always() }}\n    needs: [job1, job2]",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs",
    "options": [
      {
        "id": "A",
        "text": "job3 será executado após job1 e job2 terem sido concluídos, independentemente de terem sido bem-sucedidos"
      },
      {
        "id": "B",
        "text": "Você não pode usar `if: ${{ always() }}` e `needs` juntos. O workflow falhará na inicialização."
      },
      {
        "id": "C",
        "text": "job3 será executado após job1 e job2 terem sido concluídos com sucesso"
      },
      {
        "id": "D",
        "text": "job3 será executado após job1 e job2 terem falhado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-31",
    "stem": "Qual condicional `jobs.job_id.if` garantirá que o job `production-deploy` seja acionado apenas no repositório `my-org/my-repo`?",
    "code": "jobs:\n  production-deploy:  \n    if: <CONDITION>\n    runs-on: ubuntu-latest\n    steps:\n      ...",
    "explanation": "• \"`if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`\": https://docs.github.com/en/actions/learn-github-actions/contexts#github-context\n• \"`if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`\": https://docs.github.com/en/actions/learn-github-actions/contexts#github-context\nDocumentação: https://docs.github.com/en/actions/learn-github-actions/contexts#github-context",
    "options": [
      {
        "id": "A",
        "text": "`if: github.repository == 'my-org/my-repo'`"
      },
      {
        "id": "B",
        "text": "`if: ${{ github.repository == 'my-org/my-repo' }}`"
      },
      {
        "id": "C",
        "text": "`if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`"
      },
      {
        "id": "D",
        "text": "`if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-32",
    "stem": "Quais tipos de runners hospedados pelo GitHub estão disponíveis para uso?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners",
    "options": [
      {
        "id": "A",
        "text": "Windows"
      },
      {
        "id": "B",
        "text": "Ubuntu Linux"
      },
      {
        "id": "C",
        "text": "macOS"
      },
      {
        "id": "D",
        "text": "Android"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-33",
    "stem": "Esta afirmação é verdadeira? `Not all steps run actions, but all actions run as a step`",
    "explanation": "• \"Falso\": Etapas podem, mas não precisam executar ações (por exemplo, executar um comando run)\nDocumentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-34",
    "stem": "Para qualquer ação publicada no GitHub Marketplace, você pode frequentemente usá-la em várias versões. Qual abordagem é a mais estável e segura?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-versioned-actions",
    "options": [
      {
        "id": "A",
        "text": "Referenciar o commit SHA"
      },
      {
        "id": "B",
        "text": "Referenciar uma tag de versão"
      },
      {
        "id": "C",
        "text": "Referenciar a branch main"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-35",
    "stem": "Para evitar que um job falhe quando um dos steps falhar, você pode incluir:",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    "options": [
      {
        "id": "A",
        "text": "Flag `continue-on-error` no step que falhou",
        "code": "steps:\n    - uses: my-org/failing-action@v1\n      continue-on-error: true"
      },
      {
        "id": "B",
        "text": "Flag `ignore-error` no step que falhou",
        "code": "steps:\n    - uses: my-org/failing-action@v1\n      ignore-error: true"
      },
      {
        "id": "C",
        "text": "Condicional `failure()` no step que falhou",
        "code": "steps:\n    - uses: my-org/failing-action@v1\n      if: failure()"
      },
      {
        "id": "D",
        "text": "Condicional `always()` no step que falhou",
        "code": "steps:\n    - uses: my-org/failing-action@v1\n      if: always()"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-36",
    "stem": "Você definiu um job de matriz `example_matrix`. Como limitar a matriz para executar no máximo 2 jobs ao mesmo tempo?",
    "code": "jobs:\n  example_matrix:\n    strategy:\n      matrix:\n        version: [10, 12, 14]\n        os: [ubuntu-latest, windows-latest]",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel",
    "options": [
      {
        "id": "A",
        "text": "Defina `jobs.example_matrix.strategy.max-parallel` como 2"
      },
      {
        "id": "B",
        "text": "Defina `jobs.example_matrix.strategy.concurrency` como 2"
      },
      {
        "id": "C",
        "text": "Use a REST API do GitHub para verificar se a contagem de jobs é menor que 2"
      },
      {
        "id": "D",
        "text": "Não é possível, uma matriz sempre executará todos os jobs em paralelo, se houver runners disponíveis"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-37",
    "stem": "Qual dessas é uma forma correta de definir um parâmetro de saída `PET` com o valor `DOG` em um `step`.",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    "options": [
      {
        "id": "A",
        "text": "`echo \"PET=DOG\" >> \"$GITHUB_OUTPUT\"`"
      },
      {
        "id": "B",
        "text": "`echo \"DOG=PET\" >> \"$GITHUB_OUTPUT\"`"
      },
      {
        "id": "C",
        "text": "`gh set-output \"DOG=PET\"`"
      },
      {
        "id": "D",
        "text": "`gh set-output \"PET=DOG\"`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-38",
    "stem": "Qual dessas é uma forma de usar `action_state` em `step_two`?",
    "code": "steps:\n  - name: Set the value\n    id: step_one\n    run: |\n      echo \"action_state=yellow\" >> \"$GITHUB_ENV\"\n  - name: Use the value\n    id: step_two\n    run: ?",
    "explanation": "• \"`run: echo \"${{ steps.step_one.outputs.action_state }}\"`\": Isso seria o caso se `action_state` fosse escrito em `$GITHUB_OUTPUT`\nDocumentação: https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-of-writing-an-environment-variable-to-github_env",
    "options": [
      {
        "id": "A",
        "text": "`run: echo \"$action_state\"`"
      },
      {
        "id": "B",
        "text": "`run: echo \"${{ steps.step_one.outputs.action_state }}\"`"
      },
      {
        "id": "C",
        "text": "`run: echo \"$steps.step_one.outputs.action_state\"`"
      },
      {
        "id": "D",
        "text": "`run: echo \"${{ action_state }}\"`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-39",
    "stem": "Esta afirmação é verdadeira? `Workflows can be reused, but a reusable workflow cannot call another reusable workflow.`",
    "explanation": "• \"Verdadeiro\": Reusable workflows podem ser aninhados, mas há limitações https://docs.github.com/en/actions/using-workflows/reusing-workflows#limitations\nDocumentação: https://docs.github.com/en/actions/using-workflows/reusing-workflows#nesting-reusable-workflows",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-40",
    "stem": "No exemplo a seguir, o `workflow A` passa todos os seus secrets para o `workflow B`, utilizando a palavra-chave inherit. Em seguida, o `workflow B` chama o `workflow C`. Qual afirmação sobre os `secrets` é verdadeira para esse exemplo?",
    "code": "jobs:\n  workflowA-calls-workflowB:\n    uses: octo-org/example-repo/.github/workflows/B.yml@main\n    secrets: inherit\n\njobs:\n  workflowB-calls-workflowC:\n    uses: different-org/example-repo/.github/workflows/C.yml@main",
    "explanation": "• \"Todos os secrets da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`\": Nem todos os secrets da organização `octo-org` precisam ser disponibilizados para `octo-org/example-repo`.\n• \"Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e o `workflow C`\": O `workflow B` precisaria adicionar `secrets: inherit` ao chamar o `workflow C`\nDocumentação: https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows",
    "options": [
      {
        "id": "A",
        "text": "Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B`, mas não para o `workflow C`"
      },
      {
        "id": "B",
        "text": "Todos os secrets da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`"
      },
      {
        "id": "C",
        "text": "Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e o `workflow C`"
      },
      {
        "id": "D",
        "text": "Somente os repository e environment secrets disponíveis para o `workflow A` estarão disponíveis para o `workflow B`, mas não para o `workflow C`. Secrets no escopo da organização não podem ser herdados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-41",
    "stem": "Quando você deve usar `caching`?",
    "explanation": "• \"Quando você deseja salvar arquivos produzidos por um job para visualizar depois que uma execução de workflow tiver terminado, como binários compilados ou logs de compilação.\": Para isso, você deve usar artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data\n• \"Quando você deseja salvar binários produzidos por um job de compilação para usar em um job de implantação subsequente para implantar uma nova versão de um aplicativo.\": Para isso, você deve usar artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data\nDocumentação: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching",
    "options": [
      {
        "id": "A",
        "text": "Quando você deseja reutilizar arquivos que não mudam com frequência entre jobs ou execuções de workflows, como dependências de compilação de um sistema de gerenciamento de pacotes."
      },
      {
        "id": "B",
        "text": "Quando você deseja reutilizar arquivos que mudam com frequência entre jobs ou execuções de workflows, como dependências de compilação de um sistema de gerenciamento de pacotes."
      },
      {
        "id": "C",
        "text": "Quando você deseja salvar arquivos produzidos por um job para visualizar depois que uma execução de workflow tiver terminado, como binários compilados ou logs de compilação."
      },
      {
        "id": "D",
        "text": "Quando você deseja salvar binários produzidos por um job de compilação para usar em um job de implantação subsequente para implantar uma nova versão de um aplicativo."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-42",
    "stem": "Quando você deve usar `artifacts`?",
    "explanation": "• \"Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflow, como dependências de build de um sistema de gerenciamento de pacotes.\": O caching deve ser usado para isso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching\n• \"Use artifacts para criar novas versões do seu aplicativo junto com notas de release, menções e/ou contribuidores.\": Esse é um caso de uso para releases, não artifacts.\nDocumentação: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts",
    "options": [
      {
        "id": "A",
        "text": "Use artifacts para salvar arquivos produzidos por um job para visualização após a execução de um workflow ter terminado, como resultados de testes ou logs de build."
      },
      {
        "id": "B",
        "text": "Use artifacts para salvar binários produzidos por um job de build para usar em um job de deploy subsequente para implantar uma nova versão de uma aplicação."
      },
      {
        "id": "C",
        "text": "Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflow, como dependências de build de um sistema de gerenciamento de pacotes."
      },
      {
        "id": "D",
        "text": "Use artifacts para criar novas versões do seu aplicativo junto com notas de release, menções e/ou contribuidores."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-43",
    "stem": "Se um workflow for executado em um branch `feature-a`, ele pode restaurar `caches` criados no branch padrão `main`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache",
    "options": [
      {
        "id": "A",
        "text": "Sim, todos os branches podem restaurar caches criados no branch padrão"
      },
      {
        "id": "B",
        "text": "Sim, todos os caches podem ser acessados por workflows em qualquer branch dentro do mesmo repositório"
      },
      {
        "id": "C",
        "text": "Não, os caches só podem ser restaurados do mesmo branch"
      },
      {
        "id": "D",
        "text": "Sim, mas somente se nenhum arquivo foi alterado no branch `feature-a`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-44",
    "stem": "Para acessar um `artifact` que foi criado em outra execução de workflow previamente acionada, você pode:",
    "explanation": "Documentação: https://github.com/actions/download-artifact?tab=readme-ov-file#download-artifacts-from-other-workflow-runs-or-repositories",
    "options": [
      {
        "id": "A",
        "text": "Você não pode acessar `artifacts` que foram criados em uma execução de workflow diferente"
      },
      {
        "id": "B",
        "text": "Usar a ação `actions/download-artifact` com permissões elevadas."
      },
      {
        "id": "C",
        "text": "Usar a ação `actions/upload-artifact`."
      },
      {
        "id": "D",
        "text": "Usar a ação `actions/download-artifact` e garantir que o artifact não esteja expirado"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-45",
    "stem": "O que você deve usar para armazenar relatórios de cobertura ou capturas de tela geradas durante um workflow que executa testes automatizados para um repositório?",
    "explanation": "• \"Packages\": https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages\n• \"Releases\": https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases\nDocumentação: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching",
    "options": [
      {
        "id": "A",
        "text": "Artifacts"
      },
      {
        "id": "B",
        "text": "Caches"
      },
      {
        "id": "C",
        "text": "Packages"
      },
      {
        "id": "D",
        "text": "Releases"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-46",
    "stem": "Você pode carregar apenas um único arquivo por vez ao usar a ação `actions/upload-artifact`",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      },
      {
        "id": "C",
        "text": "Apenas diretórios podem ser carregados, não arquivos individuais"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-47",
    "stem": "No trabalho `deploy`, se você quiser acessar os binários (contendo sua aplicação) que foram criados no trabalho `build`, você deve",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching",
    "options": [
      {
        "id": "A",
        "text": "carregar os binários como artefatos em `build` e baixá-los em `deploy`"
      },
      {
        "id": "B",
        "text": "carregar os binários como artefatos em `deploy` e baixá-los em `build`"
      },
      {
        "id": "C",
        "text": "armazenar em cache os binários em `build` e ler os arquivos do cache em `deploy`"
      },
      {
        "id": "D",
        "text": "armazenar em cache os binários em `deploy` e ler os arquivos do cache em `build`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-48",
    "stem": "Um trabalho chamado `job2` está usando artefatos criados no `job1`. Portanto, é importante garantir que o `job1` seja concluído antes que o `job2` comece a procurar os artefatos. Como você deve criar essa dependência?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds",
    "options": [
      {
        "id": "A",
        "text": "criar essa dependência usando a palavra-chave `needs` em `job2`"
      },
      {
        "id": "B",
        "text": "essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artefato do `job1`"
      },
      {
        "id": "C",
        "text": "criar essa dependência definindo `job2` após `job1` na definição do `.yaml` do fluxo de trabalho"
      },
      {
        "id": "D",
        "text": "criar essa dependência usando a palavra-chave `concurrency` em `job2`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-49",
    "stem": "Qual é a verdade sobre `Starter Workflows`?",
    "explanation": "• \"`Starter Workflows` são fornecidos prontos para uso e não podem ser modificados ou aprimorados\": https://docs.github.com/en/actions/using-workflows/using-starter-workflows#using-starter-workflows\nDocumentação: https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates",
    "options": [
      {
        "id": "A",
        "text": "Eles permitem que os usuários utilizem templates de workflows prontos para uso (ou que exigem alterações mínimas)"
      },
      {
        "id": "B",
        "text": "O GitHub fornece e mantém `Starter Workflows` para diferentes categorias, linguagens e ferramentas"
      },
      {
        "id": "C",
        "text": "Sua organização pode criar `Starter Workflows` personalizados para usuários dentro da sua organização"
      },
      {
        "id": "D",
        "text": "`Starter Workflows` não podem chamar workflows reutilizáveis"
      },
      {
        "id": "E",
        "text": "`Starter Workflows` são um recurso pago do GitHub"
      },
      {
        "id": "F",
        "text": "`Starter Workflows` são fornecidos prontos para uso e não podem ser modificados ou aprimorados"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-50",
    "stem": "As variáveis de configuração e secrets podem ser aplicadas a:",
    "explanation": "• \"Um ambiente compartilhado entre vários repositórios\": Ambientes não podem ser compartilhados entre repositórios\n• \"Um workflow específico em um repositório\": Variáveis de ambiente podem ser aplicadas a um workflow, variáveis de configuração não podem\n• \"Um job específico em um workflow\": Variáveis de ambiente podem ser aplicadas a um workflow, variáveis de configuração não podem",
    "options": [
      {
        "id": "A",
        "text": "Toda a organização ou repositórios selecionados em uma organização"
      },
      {
        "id": "B",
        "text": "Um único repositório"
      },
      {
        "id": "C",
        "text": "Um ambiente em um repositório"
      },
      {
        "id": "D",
        "text": "Um ambiente compartilhado entre vários repositórios"
      },
      {
        "id": "E",
        "text": "Vários repositórios que não compartilham uma organização/enterprise"
      },
      {
        "id": "F",
        "text": "Um workflow específico em um repositório"
      },
      {
        "id": "G",
        "text": "Um job específico em um workflow"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-51",
    "stem": "Quais são os três tipos de Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/creating-actions/about-custom-actions#types-of-actions",
    "options": [
      {
        "id": "A",
        "text": "`Docker container actions`, `JavaScript Actions`, `Composite Actions`"
      },
      {
        "id": "B",
        "text": "`Python Actions`, `JavaScript Actions`, `Custom Actions`"
      },
      {
        "id": "C",
        "text": "`Docker container Actions`, `JavaScript Actions`, `Custom Actions`"
      },
      {
        "id": "D",
        "text": "`Docker container actions`, `Java Actions`, `Composite Actions`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-52",
    "stem": "Esta afirmação é verdadeira? `As ações de contêiner Docker geralmente são mais lentas que as ações JavaScript`",
    "explanation": "• \"Falso\": Devido à latência para construir e recuperar o contêiner, as ações de contêiner Docker são mais lentas que as ações JavaScript.",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-53",
    "stem": "Ao criar uma GitHub Action personalizada, você precisa armazenar o código-fonte no diretório `.github/workflows`",
    "explanation": "• \"Verdadeiro\": Isso é válido para `workflows`, não para `actions`\nDocumentação: https://docs.github.com/en/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      },
      {
        "id": "C",
        "text": "Apenas se a action for reutilizável"
      },
      {
        "id": "D",
        "text": "Apenas para actions de contêiner Docker"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-54",
    "stem": "Ao criar GitHub Actions personalizadas, em qual arquivo todas as `metadados` da ação devem ser definidos?\n\nExemplos de metadados: nome, descrição, saídas ou entradas obrigatórias",
    "explanation": "• \"No arquivo `README` do repositório\": Embora seja uma boa prática fazer isso, não é um requisito para que a ação funcione\n• \"No arquivo `action.yml` ou `action.yaml` no repositório da ação, mas não é necessário se a ação não for destinada a ser compartilhada e usada pelo público\": Todas as ações requerem o arquivo de metadados.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax",
    "options": [
      {
        "id": "A",
        "text": "No arquivo `action.yml` ou `action.yaml` no repositório da ação"
      },
      {
        "id": "B",
        "text": "No arquivo `README` do repositório"
      },
      {
        "id": "C",
        "text": "É editado na interface do GitHub Marketplace quando publicado para compartilhamento"
      },
      {
        "id": "D",
        "text": "No arquivo `action.yml` ou `action.yaml` no repositório da ação, mas não é necessário se a ação não for destinada a ser compartilhada e usada pelo público"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-55",
    "stem": "Um workflow foi inicialmente executado no `commit A` e falhou. Você corrigiu o workflow com o seguinte `commit B`. Quando você reexecutar esse workflow, ele será executado com o código de qual commit?",
    "explanation": "• \"Ele será executado com o código do `commit B`\": Reexecutar um workflow usa o mesmo SHA do commit e o Git ref do evento original que acionou a execução do workflow.\nDocumentação: https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs",
    "options": [
      {
        "id": "A",
        "text": "Ele será executado com o código do `commit A`"
      },
      {
        "id": "B",
        "text": "Ele será executado com o código do `commit B`"
      },
      {
        "id": "C",
        "text": "Você não pode reexecutar workflows no GitHub Actions. Você precisa acionar um novo workflow que será executado com as alterações mais recentes"
      },
      {
        "id": "D",
        "text": "Ele acionará dois workflows, um com o código do `commit A` e outro com o código do `commit B`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-56",
    "stem": "Como você pode exigir aprovações manuais por um mantenedor se a execução do workflow estiver direcionada para o ambiente `production`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#deployment-protection-rules",
    "options": [
      {
        "id": "A",
        "text": "Usando regras de proteção de implantação"
      },
      {
        "id": "B",
        "text": "Definindo os revisores necessários no workflow `production`"
      },
      {
        "id": "C",
        "text": "Usando regras de proteção de branch"
      },
      {
        "id": "D",
        "text": "Aprovações manuais não são suportadas pelo GitHub Actions"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-57",
    "stem": "O que é verdadeiro sobre ambientes?",
    "explanation": "Documentação: https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments",
    "options": [
      {
        "id": "A",
        "text": "Cada job em um workflow pode referenciar um único ambiente."
      },
      {
        "id": "B",
        "text": "Cada workflow pode referenciar um único ambiente."
      },
      {
        "id": "C",
        "text": "Cada job em um workflow pode referenciar no máximo dois ambientes."
      },
      {
        "id": "D",
        "text": "Cada workflow pode referenciar no máximo dois ambientes."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-58",
    "stem": "Ao usar o GitHub Actions para acessar recursos em um dos provedores de nuvem (como AWS, Azure ou GCP), a maneira mais segura e recomendada de autenticar é",
    "explanation": "• \"Armazenando chaves de acesso em `secrets`\": Não é recomendado usar chaves de acesso de longa duração em caso de vazamentos de segurança ou ataques, como [injeção de script](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)\n• \"Armazenando chaves de acesso em `variables`\": Nenhum valor sensível deve ser armazenado em `variables`\nDocumentação: https://docs.github.com/en/actions/concepts/security/openid-connect",
    "options": [
      {
        "id": "A",
        "text": "Usando OIDC"
      },
      {
        "id": "B",
        "text": "Usando Vault"
      },
      {
        "id": "C",
        "text": "Armazenando chaves de acesso em `secrets`"
      },
      {
        "id": "D",
        "text": "Armazenando chaves de acesso em `variables`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-59",
    "stem": "Seu repositório de código aberto publicamente disponível contém um workflow com um gatilho de evento `pull_request`. Como você pode exigir aprovações para execuções de workflow acionadas a partir de forks do seu repositório?",
    "explanation": "• \"Configurar regras de proteção de implantação para o repositório\": As regras de proteção de implantação são usadas para proteger ambientes.\nDocumentação: https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks",
    "options": [
      {
        "id": "A",
        "text": "Configurar aprovações obrigatórias para execuções de fork no repositório"
      },
      {
        "id": "B",
        "text": "Configurar regras de proteção de implantação para o repositório"
      },
      {
        "id": "C",
        "text": "Configurar regras de proteção de branch para o repositório"
      },
      {
        "id": "D",
        "text": "O workflow não será acionado para forks se estiver usando o evento `pull_request`. Se você quiser fazer isso, deve usar o gatilho de evento `fork_pull_request` com a flag `require-approval`."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-60",
    "stem": "Qual das seguintes variáveis de ambiente padrão contém o nome da pessoa ou aplicativo que iniciou a execução do fluxo de trabalho?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables",
    "options": [
      {
        "id": "A",
        "text": "`GITHUB_USER`"
      },
      {
        "id": "B",
        "text": "`GITHUB_REPOSITORY`"
      },
      {
        "id": "C",
        "text": "`GITHUB_WORKFLOW`"
      },
      {
        "id": "D",
        "text": "`GITHUB_ACTOR`"
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-61",
    "stem": "Quais das seguintes são variáveis de ambiente padrão no GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables",
    "options": [
      {
        "id": "A",
        "text": "`GITHUB_REPOSITORY`"
      },
      {
        "id": "B",
        "text": "`GITHUB_WORKFLOW`"
      },
      {
        "id": "C",
        "text": "`GITHUB_ACTOR`"
      },
      {
        "id": "D",
        "text": "`GITHUB_USER`"
      },
      {
        "id": "E",
        "text": "`GITHUB_ORGANIZATION`"
      },
      {
        "id": "F",
        "text": "`GITHUB_TOKEN`"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-62",
    "stem": "Sua organização define um segredo `SomeSecret`, porém, ao referenciar esse segredo em um workflow usando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser a razão para isso?",
    "explanation": "• \"O segredo `SomeSecret` também está declarado no escopo da enterprise\": Se um segredo com o mesmo nome existir em múltiplos níveis, o segredo no nível mais baixo terá precedência.\nDocumentação: https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets",
    "options": [
      {
        "id": "A",
        "text": "O segredo `SomeSecret` também está declarado no escopo do repositório"
      },
      {
        "id": "B",
        "text": "O segredo `SomeSecret` também está declarado no escopo da enterprise"
      },
      {
        "id": "C",
        "text": "A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos no escopo do repositório"
      },
      {
        "id": "D",
        "text": "Você precisa usar a API do GitHub para acessar segredos no escopo da organização"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-63",
    "stem": "Qual é uma maneira correta de imprimir uma mensagem de depuração?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-setting-a-debug-message",
    "options": [
      {
        "id": "A",
        "text": "`echo \"::debug::Watch out here!\"`"
      },
      {
        "id": "B",
        "text": "`echo \":debug:Watch out here!\"`"
      },
      {
        "id": "C",
        "text": "`echo \"::debug::message=Watch out here!\"`"
      },
      {
        "id": "D",
        "text": "`echo \"Watch out here!\" >> $GITHUB_DEBUG`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-64",
    "stem": "Como as organizações que utilizam o GitHub Enterprise Server podem habilitar a sincronização automática de ações do GitHub hospedadas por terceiros no GitHub.com para sua instância do GitHub Enterprise Server?",
    "explanation": "• \"Usando o GitHub Connect\": Quando ativado, o GitHub Connect será utilizado para estabelecer automaticamente uma conexão segura entre uma instância do GitHub Enterprise Server (GHES) e uma conta do GitHub Enterprise Cloud (GHEC) (GHEC é hospedado no GitHub.com). A conta GHEC serve como uma identidade confiável (autenticada) que o GitHub.com usa para autorizar a instância GHES a acessar ações hospedadas no GitHub.com.\n• \"O GitHub Enterprise Server tem acesso a todas as ações do GitHub.com por padrão\": O GitHub Actions no GitHub Enterprise Server foi projetado para funcionar em ambientes sem acesso total à internet. Por padrão, os workflows não podem usar actions do GitHub.com ou do GitHub Marketplace.\n• \"Usando a ferramenta actions-sync\": Embora a actions-sync possa ser usada para sincronizar repositórios de ações individuais do GitHub.com para uma empresa, essa é uma abordagem manual. Veja a [documentação](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para mais detalhes.\n• \"O GitHub Enterprise Server (GHES) não pode usar ações do GitHub.com devido à sua natureza local e à falta de acesso à internet.\": Embora os workflows localizados em uma instância GHES não possam usar ações do GitHub.com nem ações do GitHub Marketplace por padrão, isso pode ser resolvido com o uso do GitHub Connect ou do actions-sync.\nDocumentação: https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect",
    "options": [
      {
        "id": "A",
        "text": "Usando o GitHub Connect"
      },
      {
        "id": "B",
        "text": "O GitHub Enterprise Server tem acesso a todas as ações do GitHub.com por padrão"
      },
      {
        "id": "C",
        "text": "Usando a ferramenta actions-sync"
      },
      {
        "id": "D",
        "text": "O GitHub Enterprise Server (GHES) não pode usar ações do GitHub.com devido à sua natureza local e à falta de acesso à internet."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-65",
    "stem": "Onde você pode encontrar os registros de conectividade de rede para um self-hosted-runner do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity",
    "options": [
      {
        "id": "A",
        "text": "Na pasta `_diag` diretamente na máquina do runner"
      },
      {
        "id": "B",
        "text": "No GitHub.com na página específica desse Runner"
      },
      {
        "id": "C",
        "text": "Nos logs de execução do trabalho que foi executado nesse Runner"
      },
      {
        "id": "D",
        "text": "Nos logs de execução do trabalho que foi executado nesse Runner com o registro de depuração habilitado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-66",
    "stem": "Como você pode validar que seu GitHub self-hosted-runner pode acessar todos os serviços necessários do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity",
    "options": [
      {
        "id": "A",
        "text": "Usando um script fornecido pelo GitHub na máquina runner"
      },
      {
        "id": "B",
        "text": "Tentando acessar a máquina runner por `ssh` para validar a conectividade de rede"
      },
      {
        "id": "C",
        "text": "Usando o workflow predefinido do GitHub Actions `network-connectivity.yml`"
      },
      {
        "id": "D",
        "text": "O GitHub validará automaticamente a conectividade de rede quando o aplicativo do runner for instalado na máquina runner"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-67",
    "stem": "Qual é a maneira correta de acionar um trabalho apenas se a variável de configuração `MY_VAR` tiver o valor `MY_VALUE`?",
    "explanation": "• \"Criando a seguinte condicional no nível do trabalho\": Incorreto, apenas `vars.MY_VAR` é avaliado dentro de `${{ }}`; isso gera um texto como `some_value == 'MY_VALUE'`, e o GitHub trata essa string não vazia como verdadeira (truthy), em vez de realizar a comparação\nVeja https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals\n• \"Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if`\": Isso é verdadeiro para `secrets`, mas não para variáveis de configuração\n• \"Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if` no nível do trabalho\": Isso é verdadeiro para `secrets`, mas não para variáveis de configuração\nDocumentação: https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context",
    "options": [
      {
        "id": "A",
        "text": "Criando a seguinte condicional no nível do trabalho",
        "code": "my-job:\n  if: ${{ vars.MY_VAR == 'MY_VALUE' }}"
      },
      {
        "id": "B",
        "text": "Criando a seguinte condicional no nível do trabalho",
        "code": "my-job:\n  if: ${{ vars.MY_VAR }} == 'MY_VALUE'"
      },
      {
        "id": "C",
        "text": "Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if`"
      },
      {
        "id": "D",
        "text": "Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if` no nível do trabalho"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-68",
    "stem": "Para executar um `step` apenas se o segredo `MY_SECRET` tiver sido configurado, você pode:",
    "explanation": "• \"Criando a seguinte condicional no nível do job\": segredos não podem ser referenciados diretamente em condicionais if:\n• \"Criando a seguinte condicional no nível do step\": segredos não podem ser referenciados diretamente em condicionais if:\n• \"Criando a seguinte condicional no nível do step\": segredos não podem ser referenciados diretamente em condicionais if:\nDocumentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets",
    "options": [
      {
        "id": "A",
        "text": "Definir o segredo `MY_SECRET` como uma variável de ambiente no nível do job e, em seguida, referenciar essa variável de ambiente para executar condicionalmente aquele step",
        "code": "my-job:\n  runs-on: ubuntu-latest\n  env:\n    my_secret: ${{ secrets.MY_SECRET }}\n  steps:\n    - if: ${{ env.my_secret != '' }}"
      },
      {
        "id": "B",
        "text": "Criando a seguinte condicional no nível do job",
        "code": "my-job:\n  runs-on: ubuntu-latest\n  if: ${{ secrets.MY_SECRET == '' }}"
      },
      {
        "id": "C",
        "text": "Criando a seguinte condicional no nível do step",
        "code": "my-job:\n  runs-on: ubuntu-latest\n  steps:\n    - if: ${{ secrets.MY_SECRET == '' }}"
      },
      {
        "id": "D",
        "text": "Criando a seguinte condicional no nível do step",
        "code": "my-job:\n  runs-on: ubuntu-latest\n  steps:\n    - if: ${{ secrets.MY_SECRET }}"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-69",
    "stem": "Como você pode usar a API do GitHub para baixar os logs de execução do workflow?",
    "explanation": "Documentação: https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#download-workflow-run-logs",
    "options": [
      {
        "id": "A",
        "text": "`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`"
      },
      {
        "id": "B",
        "text": "`POST /repos/{owner}/{repo}/actions/runs/{run_id}/logs`"
      },
      {
        "id": "C",
        "text": "`HEAD /repos/{owner}/{repo}/actions/runs/{run_id}/logs`"
      },
      {
        "id": "D",
        "text": "`PUT /repos/{owner}/{repo}/actions/runs/{run_id}/logs`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-70",
    "stem": "Como você pode usar a GitHub API para criar ou atualizar um segredo de repositório?",
    "explanation": "• \"`POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`\": `POST` não é válido para este endpoint. Somente `PUT` pode criar ou atualizar segredos de repositório.\nDocumentação: https://docs.github.com/en/rest/actions/secrets?create-or-update-a-repository-secret=&apiVersion=2022-11-28#create-or-update-a-repository-secret",
    "options": [
      {
        "id": "A",
        "text": "`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`"
      },
      {
        "id": "B",
        "text": "`POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`"
      },
      {
        "id": "C",
        "text": "`HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`"
      },
      {
        "id": "D",
        "text": "`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-71",
    "stem": "Como você pode substituir um GitHub Secret de nível organizacional `API_KEY` com um valor diferente ao trabalhar dentro de um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/security/secrets",
    "options": [
      {
        "id": "A",
        "text": "Criando um secret do repositório com o mesmo nome `API_KEY`"
      },
      {
        "id": "B",
        "text": "Criando um secret de ambiente com o mesmo nome `API_KEY`"
      },
      {
        "id": "C",
        "text": "Criando um secret da empresa com o mesmo nome `API_KEY`"
      },
      {
        "id": "D",
        "text": "Criando um secret da empresa com o nome `OVERRIDE_API_KEY`"
      },
      {
        "id": "E",
        "text": "Criando um secret do repositório com o nome `OVERRIDE_API_KEY`"
      },
      {
        "id": "F",
        "text": "Criando um secret de ambiente com o nome `OVERRIDE_API_KEY`"
      },
      {
        "id": "G",
        "text": "Criando um secret do repositório com o nome `REPOSITORY_API_KEY`"
      },
      {
        "id": "H",
        "text": "Criando um secret de ambiente com o nome `ENVIRONMENT_API_KEY`"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-72",
    "stem": "Quais componentes podem ser reutilizados dentro de uma Organização no GitHub?",
    "explanation": "• \"Artifacts\": Artifacts são utilizados para preservar dados após a conclusão de um job e/ou compartilhar esses dados com outro job dentro do mesmo workflow.\n• \"Cache\": O Cache pode ser reutilizado entre workflows dentro de um único repositório.\n• \"Variáveis de Ambiente\": Variáveis de ambiente podem ser escopadas para um passo, job ou workflow. Elas não podem ser compartilhadas entre workflows/repositórios ou organizações.",
    "options": [
      {
        "id": "A",
        "text": "Secrets"
      },
      {
        "id": "B",
        "text": "Variáveis de Configuração"
      },
      {
        "id": "C",
        "text": "Self Hosted Runners"
      },
      {
        "id": "D",
        "text": "Modelos de Workflow"
      },
      {
        "id": "E",
        "text": "Artifacts"
      },
      {
        "id": "F",
        "text": "Cache"
      },
      {
        "id": "G",
        "text": "Variáveis de Ambiente"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multi",
    "pick": 4
  },
  {
    "id": "GH-200-73",
    "stem": "Quantos jobs serão executados no seguinte workflow?",
    "code": "jobs:\n  matrix-job:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        pet: [cat, dog]\n        color: [pink, brown]\n        include:\n          - color: white\n            pet: dog\n    steps:\n      - run: echo \"Hello ${{ matrix.color }} ${{ matrix.pet }}\"",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-74",
    "stem": "Qual das seguintes variáveis de ambiente padrão contém o nome completo (por exemplo, `octocat/hello-world`) do repositório onde o workflow está sendo executado?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables",
    "options": [
      {
        "id": "A",
        "text": "`GITHUB_REPOSITORY`"
      },
      {
        "id": "B",
        "text": "`GITHUB_REPOSITORY_ID`"
      },
      {
        "id": "C",
        "text": "`GITHUB_REPOSITORY_OWNER`"
      },
      {
        "id": "D",
        "text": "`GITHUB_REPOSITORY_OWNER_ID`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-75",
    "stem": "Em um workflow que possui vários jobs, todos executados em runners hospedados pelo GitHub, é verdade que todos os jobs estão garantidos a serem executados na mesma máquina runner?",
    "explanation": "• \"Sim\": Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on\n• \"Apenas se forem executados em paralelo\": Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on\n• \"Apenas se usarem o mesmo rótulo `runs-on`\": Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on\nDocumentação: https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      },
      {
        "id": "C",
        "text": "Apenas se forem executados em paralelo"
      },
      {
        "id": "D",
        "text": "Apenas se usarem o mesmo rótulo `runs-on`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-76",
    "stem": "Qual é a quantidade máxima de workflows reutilizáveis que podem ser chamados a partir de um único arquivo de workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations#limitations-of-reusable-workflows",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "50"
      }
    ],
    "answer": [
      "E"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-77",
    "stem": "O que é um self-hosted runner?",
    "explanation": "Documentação: https://docs.github.com/en/actions/concepts/runners/self-hosted-runners",
    "options": [
      {
        "id": "A",
        "text": "Um self-hosted runner é um sistema que você implementa e gerencia para executar jobs do GitHub Actions no GitHub.com"
      },
      {
        "id": "B",
        "text": "Um self-hosted runner é um sistema para enviar código para um servidor privado"
      },
      {
        "id": "C",
        "text": "Um self-hosted runner é um sistema para ser capaz de criar cargas de trabalho automaticamente"
      },
      {
        "id": "D",
        "text": "Um self-hosted runner é um sistema para gerenciar pull requests de usuários da organização"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-78",
    "stem": "Qual das seguintes afirmações sobre GitHub Workflows e Actions está correta?",
    "explanation": "Documentação: https://docs.github.com/en/actions/get-started/understand-github-actions",
    "options": [
      {
        "id": "A",
        "text": "Cada action é composta por um ou mais workflows, que são compostos por um ou mais jobs, e cada job é composto por um ou mais steps"
      },
      {
        "id": "B",
        "text": "Cada workflow é composto por uma ou mais actions, que são compostas por um ou mais jobs, e cada job é composto por um ou mais steps"
      },
      {
        "id": "C",
        "text": "Cada workflow é composto por um ou mais jobs, que são compostos por um ou mais steps, e cada step é uma action ou um script"
      },
      {
        "id": "D",
        "text": "Cada action é composta por um ou mais jobs, que são compostos por um ou mais steps, e cada step é um workflow"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-79",
    "stem": "Em qual commit e branch os workflows agendados são executados no GitHub Actions?",
    "explanation": "• \"Os workflows agendados são executados no commit específico na branch mais recentemente modificada.\": incorreto, tanto commit específico quanto na branch mais recentemente modificada\n• \"Os workflows agendados são executados no commit específico na branch main.\": incorreto, tanto commit específico quanto na branch main\n• \"Os workflows agendados são executados no commit mais recente na branch main.\": commit mais recente está correto, mas a branch main não está correta\nDocumentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule",
    "options": [
      {
        "id": "A",
        "text": "Os workflows agendados são executados no commit específico na branch mais recentemente modificada."
      },
      {
        "id": "B",
        "text": "Os workflows agendados são executados no commit específico na branch main."
      },
      {
        "id": "C",
        "text": "Os workflows agendados são executados no commit mais recente na branch padrão do repositório."
      },
      {
        "id": "D",
        "text": "Os workflows agendados são executados no commit mais recente na branch main."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-80",
    "stem": "Qual é a sintaxe correta para definir o diretório para todos os comandos `run` em um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory",
    "options": [
      {
        "id": "A",
        "text": "definir `working-directory` em `defaults.run`",
        "code": "defaults:\n  run:\n    shell: bash\n    working-directory: ./scripts"
      },
      {
        "id": "B",
        "text": "definir `directory` em `defaults.run`",
        "code": "defaults:\n  run:\n    shell: bash\n    directory: ./scripts"
      },
      {
        "id": "C",
        "text": "definir `working-directory` em `job`",
        "code": "defaults:\n  run:\n    shell: bash\njob:\n  working-directory: ./scripts"
      },
      {
        "id": "D",
        "text": "definir `directory` em `job`",
        "code": "defaults:\n  run:\n    shell: bash\njob:\n  directory: ./scripts"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-81",
    "stem": "Como você pode reutilizar um fluxo de trabalho definido em vários repositórios?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates",
    "options": [
      {
        "id": "A",
        "text": "Copiando o arquivo de fluxo de trabalho para cada repositório"
      },
      {
        "id": "B",
        "text": "Usando modelos de fluxo de trabalho"
      },
      {
        "id": "C",
        "text": "Criando uma ação reutilizável"
      },
      {
        "id": "D",
        "text": "Definindo o fluxo de trabalho em um repositório central"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-82",
    "stem": "Como você pode garantir que um job seja executado apenas em um branch específico?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#using-filters",
    "options": [
      {
        "id": "A",
        "text": "Usando o filtro branches"
      },
      {
        "id": "B",
        "text": "Usando o filtro runs-on"
      },
      {
        "id": "C",
        "text": "Usando o filtro jobs"
      },
      {
        "id": "D",
        "text": "Usando a palavra-chave branch"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-83",
    "stem": "O que a palavra-chave `needs` faz em um workflow do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds",
    "options": [
      {
        "id": "A",
        "text": "Especifica as dependências de um job"
      },
      {
        "id": "B",
        "text": "Define variáveis de ambiente"
      },
      {
        "id": "C",
        "text": "Configura o ambiente"
      },
      {
        "id": "D",
        "text": "Dispara um job com base em um evento\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-84",
    "stem": "Qual palavra-chave permite que você defina variáveis de ambiente em um workflow do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv",
    "options": [
      {
        "id": "A",
        "text": "env"
      },
      {
        "id": "B",
        "text": "vars"
      },
      {
        "id": "C",
        "text": "secrets"
      },
      {
        "id": "D",
        "text": "config"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-85",
    "stem": "Qual é o propósito da palavra-chave `with` em um workflow do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswith",
    "options": [
      {
        "id": "A",
        "text": "Definir variáveis de ambiente"
      },
      {
        "id": "B",
        "text": "Especificar parâmetros de entrada para uma action"
      },
      {
        "id": "C",
        "text": "Configurar dependências"
      },
      {
        "id": "D",
        "text": "Acionar outro workflow\n---"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-86",
    "stem": "Qual das seguintes sintaxes do GitHub Actions é usada para executar múltiplos comandos em uma única etapa?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/workflow-commands-for-github-actions#example-of-a-multiline-string",
    "options": [
      {
        "id": "A",
        "text": "Usar && para encadear comandos"
      },
      {
        "id": "B",
        "text": "Definir comandos em um array"
      },
      {
        "id": "C",
        "text": "Usar uma string multilinha com |"
      },
      {
        "id": "D",
        "text": "Separar comandos com um ponto e vírgula ;"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-87",
    "stem": "Como você pode armazenar em cache dependências para acelerar a execução do workflow?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/caching-dependencies-to-speed-up-workflows#about-caching-workflow-dependencies",
    "options": [
      {
        "id": "A",
        "text": "Usando a palavra-chave cache"
      },
      {
        "id": "B",
        "text": "Usando a action actions/cache"
      },
      {
        "id": "C",
        "text": "Armazenando-as no repositório"
      },
      {
        "id": "D",
        "text": "Usando a palavra-chave store"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-88",
    "stem": "O que a palavra-chave `matrix` faz em um workflow do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations",
    "options": [
      {
        "id": "A",
        "text": "Permite definir várias configurações de trabalho para serem executadas em paralelo"
      },
      {
        "id": "B",
        "text": "Define variáveis de ambiente para o trabalho"
      },
      {
        "id": "C",
        "text": "Aciona workflows com base em um cronograma"
      },
      {
        "id": "D",
        "text": "Define segredos para o workflow"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-89",
    "stem": "Qual das opções a seguir pode ser usada para limitar o número de jobs simultâneos executando em um workflow do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency",
    "options": [
      {
        "id": "A",
        "text": "concurrency"
      },
      {
        "id": "B",
        "text": "limit"
      },
      {
        "id": "C",
        "text": "max-jobs"
      },
      {
        "id": "D",
        "text": "parallelism"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-90",
    "stem": "Qual é o tempo limite padrão para um trabalho do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/limits#existing-system-limits",
    "options": [
      {
        "id": "A",
        "text": "30 minutos"
      },
      {
        "id": "B",
        "text": "60 minutos"
      },
      {
        "id": "C",
        "text": "120 minutos"
      },
      {
        "id": "D",
        "text": "360 minutos"
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-91",
    "stem": "Como você pode especificar o sistema operacional para um trabalho no GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on",
    "options": [
      {
        "id": "A",
        "text": "Usando a palavra-chave os"
      },
      {
        "id": "B",
        "text": "Usando a palavra-chave runs-on"
      },
      {
        "id": "C",
        "text": "Usando a palavra-chave platform"
      },
      {
        "id": "D",
        "text": "Usando a palavra-chave env"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-92",
    "stem": "Em um workflow do GitHub Actions, como você especifica uma versão específica do Node.js para usar em um job?",
    "explanation": "Documentação: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs#specifying-the-nodejs-version",
    "options": [
      {
        "id": "A",
        "code": "uses: actions/setup-node@v4\nwith:\n  node-version: 20"
      },
      {
        "id": "B",
        "code": "uses: actions/node-setup@v4\nwith:\n  node-version: 20"
      },
      {
        "id": "C",
        "code": "uses: setup-node@v4\nwith:\n  version: 20"
      },
      {
        "id": "D",
        "code": "uses: setup-node@v4\nwith:\n  node: 20"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-93",
    "stem": "Como você referencia um segredo armazenado em GitHub Secrets em um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#using-secrets-in-a-workflow",
    "options": [
      {
        "id": "A",
        "text": "${{ secrets.SECRET_NAME }}"
      },
      {
        "id": "B",
        "text": "${{ secret.SECRET_NAME }}"
      },
      {
        "id": "C",
        "text": "${{ env.SECRET_NAME }}"
      },
      {
        "id": "D",
        "text": "${{ config.SECRET_NAME }}"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-94",
    "stem": "Qual é o shell padrão usado pelo GitHub Actions em runners do Windows?",
    "explanation": "Documentação: https://github.blog/changelog/2019-10-17-github-actions-default-shell-on-windows-runners-is-changing-to-powershell/",
    "options": [
      {
        "id": "A",
        "text": "bash"
      },
      {
        "id": "B",
        "text": "sh"
      },
      {
        "id": "C",
        "text": "powershell"
      },
      {
        "id": "D",
        "text": "cmd"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-95",
    "stem": "Quais das seguintes afirmações são verdadeiras sobre adicionar um runner auto-hospedado no GitHub Actions?",
    "explanation": "• \"Você pode adicionar um runner auto-hospedado a um workflow\": Não é possível adicionar no nível de workflow\n• \"Você pode adicionar um runner auto-hospedado a um step\": Não é possível adicionar no nível de step\nDocumentação: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository",
    "options": [
      {
        "id": "A",
        "text": "Você pode adicionar um runner auto-hospedado a um repositório"
      },
      {
        "id": "B",
        "text": "Você pode adicionar um runner auto-hospedado a uma organização"
      },
      {
        "id": "C",
        "text": "Você pode adicionar um runner auto-hospedado a uma enterprise"
      },
      {
        "id": "D",
        "text": "Você pode adicionar um runner auto-hospedado a um workflow"
      },
      {
        "id": "E",
        "text": "Você pode adicionar um runner auto-hospedado a um step"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-96",
    "stem": "Selecione a variável de ambiente padrão que contém o sistema operacional do runner que está executando o trabalho",
    "explanation": "Documentação: https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables",
    "options": [
      {
        "id": "A",
        "text": "`RUNNER_OS`"
      },
      {
        "id": "B",
        "text": "`GITHUB_RUNNER_OS`"
      },
      {
        "id": "C",
        "text": "`RUNNER_ARCH`"
      },
      {
        "id": "D",
        "text": "`RUNNER_NAME`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-97",
    "stem": "Como a ação `actions/cache` no GitHub Actions lida com um cache miss?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches",
    "options": [
      {
        "id": "A",
        "text": "exigindo intervenção manual para criar um novo cache"
      },
      {
        "id": "B",
        "text": "buscando por um cache em outros repositórios"
      },
      {
        "id": "C",
        "text": "criando automaticamente um novo cache se o trabalho for concluído com sucesso"
      },
      {
        "id": "D",
        "text": "encerrando o workflow se ocorrer um cache miss"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-98",
    "stem": "Como você pode especificar o agendamento de um workflow do GitHub Actions para ser executado apenas em dias úteis?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule",
    "options": [
      {
        "id": "A",
        "text": "adicionar uma condição no arquivo YAML do workflow para dias úteis"
      },
      {
        "id": "B",
        "text": "não é possível no GitHub Actions"
      },
      {
        "id": "C",
        "text": "usar o gatilho de evento on: schedule: weekdays"
      },
      {
        "id": "D",
        "text": "usar o gatilho de evento on: schedule: cron"
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-99",
    "stem": "Qual é a abordagem recomendada para armazenar segredos maiores que 48 KB?",
    "explanation": "Documentação: https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets",
    "options": [
      {
        "id": "A",
        "text": "evitar armazenar segredos grandes completamente para garantir a segurança"
      },
      {
        "id": "B",
        "text": "segredos maiores que 48 KB não podem ser armazenados"
      },
      {
        "id": "C",
        "text": "criptografar e armazenar segredos no repositório, mas manter a frase de descriptografia como um segredo"
      },
      {
        "id": "D",
        "text": "armazenar segredos grandes diretamente como segredos do repositório para evitar limitações"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-100",
    "stem": "Selecione as funções de verificação de status no GitHub Actions",
    "explanation": "Documentação: https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions",
    "options": [
      {
        "id": "A",
        "text": "`success()`, `always()`, `cancelled()` e `failure()`"
      },
      {
        "id": "B",
        "text": "`completed()`, `always()`, `cancelled()` e `failure()`"
      },
      {
        "id": "C",
        "text": "`status()`, `always()`, `cancelled()` e `failure()`"
      },
      {
        "id": "D",
        "text": "`state()`, `always()`, `cancelled()` e `failure()`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-101",
    "stem": "Como você garante que a etapa `Upload Failure test report` seja executada apenas se a etapa `Run Tests` falhar?",
    "explanation": "• \"- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: failure() && steps.run-tests.outcome == 'failure'\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html\": `failure()` substitui a verificação de status padrão `success()`, permitindo que a etapa seja executada após uma falha, e a verificação de resultado tem como alvo a etapa específica.\n• \"- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: always()\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html\": `always()` funciona, mas executa a etapa mesmo em caso de cancelamento, o que é mais amplo do que o necessário.\n• \"- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: steps.run-tests.outcome == 'failure'\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html\": Sem uma função de verificação de status como `failure()`, a função implícita `success()` é aplicada, então esta etapa é ignorada após uma falha, mesmo que a verificação de resultado esteja correta.\n• \"- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html\": Nenhuma condição `if` — esta etapa só é executada quando todas as etapas anteriores têm sucesso (comportamento padrão).\nDocumentação: https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions",
    "options": [
      {
        "id": "A",
        "code": "- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: failure() && steps.run-tests.outcome == 'failure'\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html"
      },
      {
        "id": "B",
        "code": "- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: always()\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html"
      },
      {
        "id": "C",
        "code": "- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  if: steps.run-tests.outcome == 'failure'\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html"
      },
      {
        "id": "D",
        "code": "- name: Run Tests\n  id: run-tests\n  run: npm run test\n\n- name: Upload Failure test report\n  uses: actions/upload-artifact@v3\n  with:\n    name: test-report\n    path: test-reports.html"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-102",
    "stem": "Qual contexto contém informações sobre o evento que acionou a execução de um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-event-information",
    "options": [
      {
        "id": "A",
        "text": "`github.event`"
      },
      {
        "id": "B",
        "text": "`github.repository`"
      },
      {
        "id": "C",
        "text": "`github.job`"
      },
      {
        "id": "D",
        "text": "`jobs.<job_id>.result`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-103",
    "stem": "No GitHub Actions, se você definir filtros de `branches` e `paths`, qual será o efeito na execução do workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore",
    "options": [
      {
        "id": "A",
        "text": "o workflow será executado apenas quando ambos os filtros `branches` e `paths` forem satisfeitos"
      },
      {
        "id": "B",
        "text": "o workflow será executado quando qualquer um dos filtros `branches` ou `paths` forem satisfeitos, mas só aplicará o filtro correspondente"
      },
      {
        "id": "C",
        "text": "o workflow será executado quando qualquer um dos filtros `branches` ou `paths` forem satisfeitos"
      },
      {
        "id": "D",
        "text": "o workflow não será executado quando ambos os filtros `branches` e `paths` forem satisfeitos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-104",
    "stem": "Qual é a prática recomendada para tratar variáveis de ambiente no GitHub Actions, independentemente do sistema operacional e shell utilizado?",
    "explanation": "Documentação: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#setting-an-environment-variable",
    "options": [
      {
        "id": "A",
        "text": "tratar variáveis de ambiente como sensíveis a maiúsculas e minúsculas"
      },
      {
        "id": "B",
        "text": "usar apenas letras maiúsculas para nomes de variáveis de ambiente"
      },
      {
        "id": "C",
        "text": "ignorar a sensibilidade a maiúsculas e minúsculas, já que o GitHub Actions lida com isso automaticamente"
      },
      {
        "id": "D",
        "text": "depender do comportamento do sistema operacional em uso"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-105",
    "stem": "Qual das seguintes afirmações descreve com precisão o comportamento dos jobs de workflow que referenciam as regras de proteção de um ambiente?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments",
    "options": [
      {
        "id": "A",
        "text": "os jobs de workflow não começarão até que todas as regras de proteção do ambiente sejam aprovadas"
      },
      {
        "id": "B",
        "text": "os jobs de workflow começarão imediatamente e as regras de proteção serão avaliadas durante a execução"
      },
      {
        "id": "C",
        "text": "os jobs de workflow começarão se pelo menos uma regra de proteção for aprovada"
      },
      {
        "id": "D",
        "text": "os jobs de workflow falharão se as regras de proteção forem configuradas"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-106",
    "stem": "Qual é o propósito do parâmetro `restore-keys` em `actions/cache` no GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches",
    "options": [
      {
        "id": "A",
        "text": "fornecer chaves alternativas para usar em caso de falta de cache"
      },
      {
        "id": "B",
        "text": "indicar se ocorreu um cache hit"
      },
      {
        "id": "C",
        "text": "especificar a localização dos arquivos em cache"
      },
      {
        "id": "D",
        "text": "ativar a funcionalidade de cache entre sistemas operacionais diferentes"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-107",
    "stem": "Qual variável você configuraria como `true` para habilitar o registro detalhado de passo?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging",
    "options": [
      {
        "id": "A",
        "text": "`ACTIONS_STEP_DEBUG`"
      },
      {
        "id": "B",
        "text": "`ACTIONS_JOB_DEBUG`"
      },
      {
        "id": "C",
        "text": "`ACTIONS_RUNNER_DEBUG`"
      },
      {
        "id": "D",
        "text": "`ACTIONS_WORKFLOW_DEBUG`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-108",
    "stem": "Qual configuração é apropriada para acionar um workflow em eventos de webhook relacionados a ações check_run?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run",
    "options": [
      {
        "id": "A",
        "code": "on:\n    check_run:\n        types: [rerequested, completed]"
      },
      {
        "id": "B",
        "code": "on:\n    check_run:\n        types: [started]"
      },
      {
        "id": "C",
        "code": "on:\n    check_run:\n        type: [closed]"
      },
      {
        "id": "D",
        "code": "on:\n    check_run:\n        filter: [requested]"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-109",
    "stem": "Qual é o propósito da palavra-chave `timeout-minutes` em um step?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes",
    "options": [
      {
        "id": "A",
        "text": "limita o tempo de execução de um step individual"
      },
      {
        "id": "B",
        "text": "define o intervalo de tempo para comandos individuais dentro de um step"
      },
      {
        "id": "C",
        "text": "define o tempo limite para aguardar eventos externos antes de prosseguir para o próximo step"
      },
      {
        "id": "D",
        "text": "especifica a duração máxima que um job pode ser executado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-110",
    "stem": "Dave está criando um fluxo de trabalho modelado para sua organização. Onde Dave deve armazenar os arquivos de fluxo de trabalho e os arquivos de metadados associados ao fluxo de trabalho modelado?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates",
    "options": [
      {
        "id": "A",
        "text": "dentro de um diretório chamado `workflow-templates` dentro de um repositório chamado `.github`"
      },
      {
        "id": "B",
        "text": "dentro de um diretório chamado `workflow-templates` dentro do repositório atual"
      },
      {
        "id": "C",
        "text": "dentro de um diretório chamado `.github/org-templates`"
      },
      {
        "id": "D",
        "text": "dentro de um diretório chamado `.github/workflow-templates`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-111",
    "stem": "Dave quer ser notificado quando um comentário for criado em uma issue dentro de um repositório do GitHub. Qual gatilho de evento deve ser usado na configuração do workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#issue_comment",
    "options": [
      {
        "id": "A",
        "text": "`issue_comment`"
      },
      {
        "id": "B",
        "text": "`issues.comment`"
      },
      {
        "id": "C",
        "text": "`issues`"
      },
      {
        "id": "D",
        "text": "`comment`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-112",
    "stem": "Qual nível de acesso é necessário em um repositório GitHub para excluir arquivos de log de execuções de workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs",
    "options": [
      {
        "id": "A",
        "text": "write"
      },
      {
        "id": "B",
        "text": "read"
      },
      {
        "id": "C",
        "text": "admin"
      },
      {
        "id": "D",
        "text": "owner\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-113",
    "stem": "O que é verdadeiro sobre a seguinte configuração de workflow se acionada contra o repositório `octo/my-dev-repo`?",
    "code": "name: deploy-workflow\non: [push]\njobs:\n    production-deploy:\n        if: github.repository == 'octo/my-prod-repo'\n        runs-on: ubuntu-latest\n        steps:\n            - uses: actions/checkout@v4\n            - uses: actions/setup-node@v4\n              with:\n                  node-version: '14'\n            - run: npm install -g bats",
    "options": [
      {
        "id": "A",
        "text": "o job `production-deploy` será marcado como ignorado"
      },
      {
        "id": "B",
        "text": "o job `production-deploy` apresentará erro"
      },
      {
        "id": "C",
        "text": "o job `production-deploy` executará três etapas"
      },
      {
        "id": "D",
        "text": "o job `production-deploy` será executado se o `node-version` for `14`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-114",
    "stem": "Como você pode acessar os valores atuais das variáveis em uma matriz dentro de um trabalho no exemplo abaixo:",
    "code": "jobs:\n    example_matrix:\n        strategy:\n            matrix:\n                version: [10, 12, 14]\n                os: [ubuntu-latest, windows-latest]",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy",
    "options": [
      {
        "id": "A",
        "text": "referencie as variáveis através do contexto `matrix` com a sintaxe como `matrix.version` e `matrix.os`"
      },
      {
        "id": "B",
        "text": "usando a sintaxe `matrix.property`"
      },
      {
        "id": "C",
        "text": "usando a palavra-chave `context` na configuração do trabalho"
      },
      {
        "id": "D",
        "text": "acessando as variáveis diretamente com a sintaxe `version` e `os`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-115",
    "stem": "Qual nível de permissão é necessário para reexecutar os workflows",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs",
    "options": [
      {
        "id": "A",
        "text": "write"
      },
      {
        "id": "B",
        "text": "read"
      },
      {
        "id": "C",
        "text": "admin"
      },
      {
        "id": "D",
        "text": "owner\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-116",
    "stem": "Quando você pode excluir execuções de workflows?",
    "explanation": "• \"Após a execução do workflow ser concluída, independentemente de sua idade.\": No momento da redação, a documentação afirma que o workflow precisa ter pelo menos 14 dias antes de poder ser excluído.\nNo entanto, isso não é verdade, e as execuções de workflows podem ser excluídas imediatamente após a conclusão, independentemente de sua idade.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/delete-a-workflow-run",
    "options": [
      {
        "id": "A",
        "text": "Após a execução do workflow ser concluída, independentemente de sua idade."
      },
      {
        "id": "B",
        "text": "Após a execução do workflow ser concluída e pelo menos 30 dias terem se passado."
      },
      {
        "id": "C",
        "text": "Execuções de workflows podem ser excluídas a qualquer momento, independentemente de seu status ou idade."
      },
      {
        "id": "D",
        "text": "Execuções de workflows não podem ser excluídas, mas podem ser arquivadas."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-117",
    "stem": "Quem pode ignorar as regras de proteção de implantação configuradas para forçar a implantação (por padrão)",
    "explanation": "Documentação: https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#allow-administrators-to-bypass-configured-protection-rules",
    "options": [
      {
        "id": "A",
        "text": "Administradores do repositório"
      },
      {
        "id": "B",
        "text": "Qualquer pessoa com permissão de escrita no repositório"
      },
      {
        "id": "C",
        "text": "Qualquer pessoa com permissão de leitura no repositório"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-118",
    "stem": "Como você pode ignorar a execução do workflow ao realizar um commit ou criar um Pull Request?",
    "code": "name: Build\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    name: Extract artifact version\n...",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs",
    "options": [
      {
        "id": "A",
        "text": "Incluindo qualquer uma das palavras-chave a seguir na mensagem do commit ou no título do Pull Request",
        "code": "[skip ci]\n[ci skip]\n[no ci]\n[skip actions]\n[actions skip]"
      },
      {
        "id": "B",
        "text": "Utilizar `SKIP_WORKFLOW` na mensagem do commit"
      },
      {
        "id": "C",
        "text": "O workflow acima será executado em todos os eventos de push ou pull request em todos os casos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-119",
    "stem": "Como você pode determinar se uma ação é uma container action ao olhar para seu arquivo action.yml?",
    "explanation": "Documentação: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions",
    "options": [
      {
        "id": "A",
        "text": "`runs.using` tem `docker` como valor"
      },
      {
        "id": "B",
        "text": "`runs.using` tem `container` como valor"
      },
      {
        "id": "C",
        "text": "`runs.using` tem `Dockerfile` como valor"
      },
      {
        "id": "D",
        "text": "`runs.main` tem `container` como valor"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-120",
    "stem": "Qual é a sintaxe correta para especificar um script de limpeza em uma ação de container?",
    "explanation": "Documentação: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost-entrypoint",
    "options": [
      {
        "id": "A",
        "code": "runs:\n  using: 'docker'\n  image: 'Dockerfile'\n  entrypoint: 'entrypoint.sh'\n  post-entrypoint: 'cleanup.sh'"
      },
      {
        "id": "B",
        "code": "runs:\n  using: 'docker'\n  image: 'Dockerfile'\n  entrypoint: 'entrypoint.sh'\n  post: 'cleanup.sh'"
      },
      {
        "id": "C",
        "code": "runs:\n  using: 'docker'\n  image: 'Dockerfile'\n  entrypoint: 'entrypoint.sh'\n  after: 'cleanup.sh'"
      },
      {
        "id": "D",
        "code": "runs:\n  using: 'docker'\n  image: 'Dockerfile'\n  entrypoint: 'entrypoint.sh'\n  after-entrypoint: 'cleanup.sh'"
      },
      {
        "id": "E",
        "code": "runs:\n  using: 'docker'\n  image: 'Dockerfile'\n  entrypoint: 'entrypoint.sh'\n  cleanup: 'cleanup.sh'"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-121",
    "stem": "O que é verdade sobre variáveis padrão?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/variables",
    "options": [
      {
        "id": "A",
        "text": "As variáveis de ambiente padrão são definidas pelo GitHub e não no workflow"
      },
      {
        "id": "B",
        "text": "A maioria das variáveis de ambiente padrão tem uma propriedade de contexto correspondente"
      },
      {
        "id": "C",
        "text": "Atualmente, o valor da variável de ambiente padrão CI pode ser sobrescrito, mas não é garantido que isso seja sempre possível"
      },
      {
        "id": "D",
        "text": "Você pode adicionar uma nova variável de ambiente padrão adicionando o prefixo “GITHUB_” a ela"
      },
      {
        "id": "E",
        "text": "Variáveis de ambiente padrão sempre têm o prefixo “GITHUB_”"
      },
      {
        "id": "F",
        "text": "Variáveis de ambiente padrão podem ser acessadas usando o contexto env"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-122",
    "stem": "Quais são os escopos definidos para variáveis personalizadas em um workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow",
    "options": [
      {
        "id": "A",
        "text": "Todo o workflow, usando `env` no nível superior do arquivo de workflow"
      },
      {
        "id": "B",
        "text": "O conteúdo de um job dentro de um workflow, usando `jobs.<job_id>.env`"
      },
      {
        "id": "C",
        "text": "Uma etapa específica dentro de um job, usando `jobs.<job_id>.steps[*].env`"
      },
      {
        "id": "D",
        "text": "Todos os jobs dentro de um workflow, usando `jobs.env`"
      },
      {
        "id": "E",
        "text": "Todo o workflow, usando `custom.env` no nível superior do arquivo de workflow"
      },
      {
        "id": "F",
        "text": "Um ambiente específico no repositório, usando `environment.<environment_id>.env` no nível superior do arquivo de workflow"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-123",
    "stem": "O que deve ser adicionado ao `actions/checkout` se `my-org/my-private-repo` for um repositório privado diferente do que contém o workflow atual?",
    "code": "name: deploy-workflow\non: [push]\njobs:\n    my-job:\n        runs-on: ubuntu-latest\n        steps:\n          - name: \"Checkout GitHub Action\"\n            uses: actions/checkout@v4\n            with:\n               repository: my-org/my-private-repo\n               path: ./.github/actions/my-org/my-private-repo",
    "explanation": "Documentação: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#example-using-an-action-inside-a-different-private-repository-than-the-workflow",
    "options": [
      {
        "id": "A",
        "text": "Criar um segredo do GitHub `MY_ACCESS_TOKEN`",
        "code": "with:\n    repository: my-org/my-private-repo\n    path: ./.github/actions/my-org/my-private-repo\n    token: ${{ secrets.MY_ACCESS_TOKEN }}"
      },
      {
        "id": "B",
        "text": "Criar uma entrada `MY_ACCESS_TOKEN`",
        "code": "with:\n    repository: my-org/my-private-repo\n    path: ./.github/actions/my-org/my-private-repo\n    token: ${{ MY_ACCESS_TOKEN }}"
      },
      {
        "id": "C",
        "text": "A variável de ambiente `GITHUB_TOKEN`",
        "code": "with:\n    repository: my-org/my-private-repo\n    path: ./.github/actions/my-org/my-private-repo\n    token: $GITHUB_TOKEN"
      },
      {
        "id": "D",
        "text": "Deixar como está, pois os tokens de acesso serão passados automaticamente",
        "code": "with:\n    repository: my-org/my-private-repo\n    path: ./.github/actions/my-org/my-private-repo"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-124",
    "stem": "Dada a seguinte configuração, quantos jobs o GitHub Actions executará quando essa matriz for avaliada?",
    "code": "strategy:\n  matrix:\n    os: [ubuntu-latest, windows-latest]\n    node: [14, 16]\n    include:\n      - os: macos-latest\n        node: 18\n      - os: ubuntu-latest\n        node: 14",
    "explanation": "Documentação: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations",
    "options": [
      {
        "id": "A",
        "text": "4 jobs"
      },
      {
        "id": "B",
        "text": "5 jobs"
      },
      {
        "id": "C",
        "text": "6 jobs"
      },
      {
        "id": "D",
        "text": "7 jobs"
      },
      {
        "id": "E",
        "text": "Nenhum job será executado porque a sintaxe é inválida."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-125",
    "stem": "Em quais níveis as variáveis de ambiente podem ser definidas?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables",
    "options": [
      {
        "id": "A",
        "text": "Nível de workflow"
      },
      {
        "id": "B",
        "text": "Nível de job"
      },
      {
        "id": "C",
        "text": "Nível de etapa"
      },
      {
        "id": "D",
        "text": "Nível de ação"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-126",
    "stem": "Como um trabalho dependente deve referenciar o valor `output1` produzido por um trabalho chamado `job1` anteriormente no mesmo workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs",
    "options": [
      {
        "id": "A",
        "text": "`${{needs.job1.outputs.output1}}`"
      },
      {
        "id": "B",
        "text": "`${{job1.outputs.output1}}`"
      },
      {
        "id": "C",
        "text": "`${{needs.job1.output1}}`"
      },
      {
        "id": "D",
        "text": "`${{depends.job1.output1}}`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-127",
    "stem": "Qual sintaxe de comando de fluxo de trabalho define corretamente uma variável de ambiente chamada 'API_VERSION' com o valor '2.1' para etapas subsequentes em um trabalho do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable",
    "options": [
      {
        "id": "A",
        "text": "`echo \"API_VERSION=2.1\" >> \"$GITHUB_ENV\"`"
      },
      {
        "id": "B",
        "text": "`echo \"API_VERSION=2.1\" >> \"$GITHUB_OUTPUT\"`"
      },
      {
        "id": "C",
        "text": "`export API_VERSION=2.1 >> \"$GITHUB_ENV\"`"
      },
      {
        "id": "D",
        "text": "`set-env name=API_VERSION value=2.1`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-128",
    "stem": "Um workflow é acionado quando pull requests são reabertos. Por que isso pode ser a causa?",
    "explanation": "• \"Regras de proteção de branch foram configuradas incorretamente.\": As regras de proteção de branch não determinam quando um workflow é acionado.\n• \"Nenhum tipo de atividade está definido no evento `pull_request`.\": Se nenhum tipo de atividade for explicitamente definido, o evento `pull_request` será acionado em PRs abertos (`opened`), PRs cujo branch de origem foi atualizado desde que o PR foi aberto (`synchronize`) ou PRs reabertos (`reopened`).\n• \"`on: schedule` foi configurado com `pull_requests: [reopened]`\": `schedule` é usado para acionar workflows em determinados horários, não em atividades baseadas no repositório.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request",
    "options": [
      {
        "id": "A",
        "text": "`types: [reopened]` está definido no evento `pull_request`."
      },
      {
        "id": "B",
        "text": "Regras de proteção de branch foram configuradas incorretamente."
      },
      {
        "id": "C",
        "text": "Nenhum tipo de atividade está definido no evento `pull_request`."
      },
      {
        "id": "D",
        "text": "`on: schedule` foi configurado com `pull_requests: [reopened]`"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-129",
    "stem": "`GITHUB_TOKEN` pode ser usado para fazer checkout de qualquer repositório.",
    "explanation": "• \"Falso\": As permissões do `GITHUB_TOKEN` são limitadas ao repositório que contém o workflow que foi acionado.\nPara fazer checkout de outro repositório, outros métodos de token devem ser usados, como um token de acesso pessoal (PAT) ou um token de acesso de instalação.\nDocumentação: https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Apenas com permissões elevadas"
      },
      {
        "id": "C",
        "text": "Falso"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-130",
    "stem": "Quais das opções a seguir são verdadeiras sobre os blocos `outputs` em nível de fluxo de trabalho versus nível de trabalho?",
    "explanation": "• \"Os blocos `outputs` em nível de trabalho devem ser usados apenas em fluxos de trabalho chamadores, não em fluxos de trabalho reutilizáveis.\": Fluxos de trabalho reutilizáveis podem ter blocos `outputs` tanto em nível de trabalho quanto em nível de fluxo de trabalho.\n• \"Um bloco `outputs` em nível de fluxo de trabalho deve ser usado apenas em fluxos de trabalho reutilizáveis, não em fluxos de trabalho chamadores.\": Um bloco `outputs` em nível de \"fluxo de trabalho\" refere-se a um bloco `outputs` que é um filho direto de `workflow_call` em fluxos de trabalho reutilizáveis. Em fluxos de trabalho não reutilizáveis, os blocos `outputs` devem estar presentes apenas em nível de trabalho.\n• \"Um fluxo de trabalho reutilizável pode ter blocos `outputs` em nível de fluxo de trabalho e em nível de trabalho.\": Se for desejado definir uma saída em um fluxo de trabalho reutilizável e passar essa mesma saída para um fluxo de trabalho chamador, devem ser usados tanto um bloco `outputs` em nível de fluxo de trabalho quanto um bloco `outputs` em nível de trabalho.\nConsulte a documentação para mais detalhes https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow\n• \"Um bloco `outputs` em nível de trabalho deve ter a seguinte estrutura:\": Um bloco `outputs` em nível de trabalho usa uma estrutura não aninhada de pares `key=value`. Consulte a documentação oficial (https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job) para mais detalhes.\n• \"Um bloco `outputs` em nível de fluxo de trabalho deve ter a seguinte estrutura:\": Um bloco `outputs` em nível de fluxo de trabalho deve seguir a estrutura acima. A chave `value` é sempre obrigatória. Uma chave opcional `description` também pode ser usada (não apresentada no exemplo acima).\nConsulte a documentação para mais detalhes - https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job",
    "options": [
      {
        "id": "A",
        "text": "Os blocos `outputs` em nível de trabalho devem ser usados apenas em fluxos de trabalho chamadores, não em fluxos de trabalho reutilizáveis."
      },
      {
        "id": "B",
        "text": "Um bloco `outputs` em nível de fluxo de trabalho deve ser usado apenas em fluxos de trabalho reutilizáveis, não em fluxos de trabalho chamadores."
      },
      {
        "id": "C",
        "text": "Um fluxo de trabalho reutilizável pode ter blocos `outputs` em nível de fluxo de trabalho e em nível de trabalho."
      },
      {
        "id": "D",
        "text": "Um bloco `outputs` em nível de trabalho deve ter a seguinte estrutura:",
        "code": "outputs:\n    <output-name>\n        value: ${{ steps.<step-name>.outputs.<output-name> }}"
      },
      {
        "id": "E",
        "text": "Um bloco `outputs` em nível de fluxo de trabalho deve ter a seguinte estrutura:",
        "code": "outputs:\n    <output-name>\n        value: ${{ jobs.<job-name>.outputs.<output-name> }}"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-131",
    "stem": "Quais das seguintes opções são verdadeiras sobre chamar workflows reutilizáveis em comparação com chamar ações compostas?",
    "explanation": "• \"Ações compostas são chamadas referenciando a pasta que contém seu arquivo `action.yml`.\": Como uma ação, as ações compostas devem conter a maior parte de sua lógica dentro de um arquivo `action.yml`. Para chamar a ação composta, aponte para onde seu `action.yml` está localizado (isso inclui a raiz. Ex.: para chamar uma ação composta localizada na raiz do mesmo repositório que o workflow de chamada, a sintaxe `uses: ./` seria usada).\n• \"Workflows reutilizáveis são chamados referenciando a pasta que contém seu arquivo `action.yml`.\": Workflows reutilizáveis são arquivos regulares `.yml` ou `.yaml` que são armazenados em `.github/workflows`. Eles não possuem um arquivo `action.yml`.\n• \"Ações compostas devem ser chamadas como um passo dentro de um job.\": Ações compostas (como qualquer outra ação) são chamadas dentro de um passo de um job de workflow - ou seja, você não precisa de um job de workflow específico apenas para chamar uma ação composta.\n• \"Workflows reutilizáveis devem ser chamados no nível de job do workflow (não no nível de passo).\": Passos dentro de um job de workflow não podem chamar um workflow reutilizável. Um workflow reutilizável deve ser chamado por um job individual dentro do workflow de chamada. Isso pode resultar em um ou mais jobs sendo executados no workflow de chamada (esses jobs podem ser vistos nas execuções de workflow na interface do usuário do GitHub Actions).\n• \"Secrets podem ser passados tanto para workflows reutilizáveis quanto para chamadas de ações compostas através do bloco `uses.secrets`.\": Apenas workflows reutilizáveis podem ser chamados usando o bloco `secrets`. Para passar secrets para uma ação composta, devem ser utilizadas soluções alternativas (como passar o secret como uma entrada).\n• \"Apenas workflows reutilizáveis podem aceitar entradas.\": Tanto workflows reutilizáveis quanto ações compostas podem aceitar entradas.\n• \"Workflows reutilizáveis podem usar um tipo de runner diferente do workflow de chamada, enquanto ações compostas não podem.\": Workflows reutilizáveis possuem jobs como qualquer outro workflow, e esses jobs podem especificar diferentes tipos de runner através da chave `jobs.runs-on`. Ações compostas herdam o ambiente do runner do job do workflow de chamada.\nDocumentação: https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions",
    "options": [
      {
        "id": "A",
        "text": "Ações compostas são chamadas referenciando a pasta que contém seu arquivo `action.yml`."
      },
      {
        "id": "B",
        "text": "Workflows reutilizáveis são chamados referenciando a pasta que contém seu arquivo `action.yml`."
      },
      {
        "id": "C",
        "text": "Ações compostas devem ser chamadas como um passo dentro de um job."
      },
      {
        "id": "D",
        "text": "Workflows reutilizáveis devem ser chamados no nível de job do workflow (não no nível de passo)."
      },
      {
        "id": "E",
        "text": "Secrets podem ser passados tanto para workflows reutilizáveis quanto para chamadas de ações compostas através do bloco `uses.secrets`."
      },
      {
        "id": "F",
        "text": "Apenas workflows reutilizáveis podem aceitar entradas."
      },
      {
        "id": "G",
        "text": "Workflows reutilizáveis podem usar um tipo de runner diferente do workflow de chamada, enquanto ações compostas não podem."
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "G"
    ],
    "type": "multi",
    "pick": 4
  },
  {
    "id": "GH-200-132",
    "stem": "Quais das afirmações a seguir são verdadeiras sobre o GitHub Enterprise Server (GHES)?",
    "explanation": "• \"`actions/actions-sync` é dedicado principalmente à transferência de ações do GitHub.com para uma instância GHES.\": Sincronizar ações do GitHub.com é realizado principalmente via GitHub Connect ou `actions-sync`. A ferramenta `actions/actions-sync` é uma [maneira manual](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) de executar esse processo.\n• \"GHES pode usar versões aprimoradas dos runners hospedados pelo GitHub.\": GHES não tem acesso aos runners hospedados pelo GitHub. Isso é indicado na [documentação do `actions/actions-sync`](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).\n• \"Usando o GitHub Connect, os usuários podem seguir um processo manual para acessar ações do GitHub.com. Esse processo deve ser feito uma vez por ação desejada.\": O GitHub Connect permite acesso automático às ações do GitHub.com. Os usuários devem seguir um processo de configuração, mas geralmente isso só precisa ser feito uma vez. Consulte a [documentação do GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-public-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions) para mais detalhes.\n• \"As instâncias do GitHub Enterprise Server são hospedadas localmente, enquanto o GitHub Enterprise Cloud (GHEC) é hospedado e gerenciado pelo GitHub.\": [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server) é uma versão auto-hospedada da plataforma do GitHub. As instâncias de [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) são hospedadas em um subdomínio dedicado do GHE.com. Todos os subdomínios do GHE.com são hospedados pelo GitHub.\nDocumentação: https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server",
    "options": [
      {
        "id": "A",
        "text": "Os workflows do GHES não podem acessar ações do GitHub.com nem do GitHub Marketplace por padrão."
      },
      {
        "id": "B",
        "text": "`actions/actions-sync` é dedicado principalmente à transferência de ações do GitHub.com para uma instância GHES."
      },
      {
        "id": "C",
        "text": "GHES pode usar versões aprimoradas dos runners hospedados pelo GitHub."
      },
      {
        "id": "D",
        "text": "Usando o GitHub Connect, os usuários podem seguir um processo manual para acessar ações do GitHub.com. Esse processo deve ser feito uma vez por ação desejada."
      },
      {
        "id": "E",
        "text": "As instâncias do GitHub Enterprise Server são hospedadas localmente, enquanto o GitHub Enterprise Cloud (GHEC) é hospedado e gerenciado pelo GitHub."
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-133",
    "stem": "Por que usar um SHA de commit ao invés de uma tag para fixar uma action?",
    "explanation": "• \"SHAs de commit são mais seguros\": SHAs de commit são mais seguros porque atualmente são a única forma de usar uma action como um lançamento imutável.\n• \"SHAs de commit são imutáveis, enquanto tags têm o potencial de serem alteradas\": [Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) apontam para commits específicos. Sua referência pode ser alterada, o que nem sempre é evidente. Vulnerabilidades relacionadas a tags podem ser mitigadas ativando [lançamentos imutáveis](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), mas um SHA de commit sempre apontará para o mesmo commit e é imutável.\nReexecutar um workflow usa o mesmo SHA de commit e referência Git do evento original que acionou a execução do workflow.\n• \"SHAs de commit são mais convenientes de usar em comparação com tags\": Apesar de serem mais seguros, as tags são geralmente mais fáceis de usar.\n• \"SHAs de commit são mais difíceis de rastrear em uma auditoria, dificultando para agentes mal-intencionados determinar como o código de uma action se encaixa nos processos gerais.\": SHAs de commit sempre apontam para o mesmo commit. Ao fixar uma ação em um SHA, o SHA é explicitamente referenciado, o que significa que você pode encontrar o commit correspondente no repositório da action. Esses fatores tornam a auditoria mais fácil.\nTags podem ter suas referências alteradas, e isso nem sempre é evidente. Isso pode resultar em cenários confusos quando a tag aponta para um novo commit, porque o código que referencia a ação aparenta não ter sido modificado. Assim, em cenários de auditoria, será necessário descobrir para qual commit a tag estava apontando e para qual ela está apontando atualmente.\nDocumentação: https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions",
    "options": [
      {
        "id": "A",
        "text": "SHAs de commit são mais seguros"
      },
      {
        "id": "B",
        "text": "SHAs de commit são imutáveis, enquanto tags têm o potencial de serem alteradas"
      },
      {
        "id": "C",
        "text": "SHAs de commit são mais convenientes de usar em comparação com tags"
      },
      {
        "id": "D",
        "text": "SHAs de commit garantem apontar para exatamente o mesmo código todas as vezes, enquanto as tags não"
      },
      {
        "id": "E",
        "text": "SHAs de commit são mais difíceis de rastrear em uma auditoria, dificultando para agentes mal-intencionados determinar como o código de uma action se encaixa nos processos gerais."
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-134",
    "stem": "Como executar scripts JavaScript personalizados diretamente em um workflow do GitHub Actions?",
    "explanation": "• \"Por meio da ação `actions/github-script`\": `actions/github-script` permite que você escreva e utilize JavaScript inline para fazer chamadas de API e acessar o contexto do workflow. Para usar o `actions/github-script`, você o chama como qualquer outra ação, conforme descrito na [documentação](https://github.com/actions/github-script).\n• \"Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório\": Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório.\n• \"Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de uma organização\": Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório. Embora você possa precisar habilitar configurações como 'Allow actions created by Github' nas configurações de Actions de uma organização para usar ações oficiais do GitHub, isso não está relacionado apenas ao `actions/github-script`.\n• \"Escrevendo o conteúdo de um bloco de script na variável ambiental `GITHUB_SCRIPT`\": `GITHUB_SCRIPT` não é uma variável ambiental padrão do GitHub Actions. Uma lista de variáveis ambientais padrão pode ser encontrada na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/variables).\n• \"Em uma ação JavaScript, configure a chave `using` para `'github-script'`\": Ações JavaScript devem ter a chave `using` configurada como `node*`, onde `*` é uma versão do Node.js suportada. Geralmente, ações JavaScript não têm necessidade de utilizar `actions/github-script`.\nDocumentação: https://github.com/marketplace/actions/github-script",
    "options": [
      {
        "id": "A",
        "text": "Por meio da ação `actions/github-script`"
      },
      {
        "id": "B",
        "text": "Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório"
      },
      {
        "id": "C",
        "text": "Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de uma organização"
      },
      {
        "id": "D",
        "text": "Escrevendo o conteúdo de um bloco de script na variável ambiental `GITHUB_SCRIPT`"
      },
      {
        "id": "E",
        "text": "Em uma ação JavaScript, configure a chave `using` para `'github-script'`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-135",
    "stem": "Você bifurcou um repositório para melhorar um fluxo de trabalho que utiliza um secret para acessar um aplicativo de terceiros. Você acionou o fluxo de trabalho antes de editar seu código para obter um resultado inicial, mas descobriu que o fluxo de trabalho falhou. Por que isso ocorreu?",
    "explanation": "• \"Repositórios bifurcados não herdam secrets do repositório original\": Como medida de segurança, (com exceção de `GITHUB_TOKEN`) os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Isso resultará na falha do fluxo de trabalho se ele referenciar um secret do repositório original.\n• \"Ao herdar o secret do repositório original, ocorreu um erro durante a bifurcação que resultou em um secret malformado ou inválido\": Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Portanto, tal malformação não poderia ocorrer.\n• \"O secret herdado tinha um tamanho maior que 48 KB\": Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Portanto, o tamanho não é um fator a ser considerado.\n• \"Repositórios bifurcados herdam apenas secrets de repositórios, então o secret usado no fluxo de trabalho deve ser um secret organizacional ou de ambiente.\": Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Isso se aplica a todos os tipos de secrets (repositório, ambiente e organizacional).\nDocumentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow",
    "options": [
      {
        "id": "A",
        "text": "Repositórios bifurcados não herdam secrets do repositório original"
      },
      {
        "id": "B",
        "text": "Ao herdar o secret do repositório original, ocorreu um erro durante a bifurcação que resultou em um secret malformado ou inválido"
      },
      {
        "id": "C",
        "text": "O secret herdado tinha um tamanho maior que 48 KB"
      },
      {
        "id": "D",
        "text": "Repositórios bifurcados herdam apenas secrets de repositórios, então o secret usado no fluxo de trabalho deve ser um secret organizacional ou de ambiente."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-136",
    "stem": "Você possui um workflow que utiliza a matriz abaixo. Se um trabalho na matriz falhar, como você pode garantir que outros trabalhos em andamento e na fila na matriz não sejam cancelados?",
    "code": "jobs:\n  deploy:\n    strategy:\n      matrix:\n        version: [\"1\", \"1.2\", \"1.3\"]\n        os: [ubuntu-latest, windows-latest]",
    "explanation": "• \"Defina `jobs.<job_id>.strategy.fail-fast` como `false`\": `jobs.<job_id>.strategy.fail-fast` está definido como `true` por padrão, o que significa que, se um trabalho de matriz falhar, outros trabalhos de matriz em andamento e na fila serão cancelados. Você deve definir explicitamente `fail-fast` como `false` para evitar esse comportamento.\n• \"Nada precisa ser feito, já que `jobs.<job_id>.strategy.fail-fast` tem uma configuração padrão como `false`\": `jobs.<job_id>.strategy.fail-fast` está definido como `true` por padrão.\n• \"Defina `jobs.<job_id>.strategy.matrix.fail-fast` como `false`\": Isso está incorreto, `fail-fast` é no nível de `strategy`, não no nível de `matrix`. Se você definir `fail-fast` no nível de `matrix`, funcionará como parte da [configuração do trabalho](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#adding-a-matrix-strategy-to-your-workflow-job) e não afetará o cancelamento/continuação de outros trabalhos de matriz.\n• \"Nada precisa ser feito, já que `jobs.<job_id>.strategy.matrix.fail-fast` tem uma configuração padrão como `false`\": Isso está incorreto, `fail-fast` é no nível de `strategy`, não no nível de `matrix`.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast",
    "options": [
      {
        "id": "A",
        "text": "Defina `jobs.<job_id>.strategy.fail-fast` como `false`"
      },
      {
        "id": "B",
        "text": "Nada precisa ser feito, já que `jobs.<job_id>.strategy.fail-fast` tem uma configuração padrão como `false`"
      },
      {
        "id": "C",
        "text": "Defina `jobs.<job_id>.strategy.matrix.fail-fast` como `false`"
      },
      {
        "id": "D",
        "text": "Nada precisa ser feito, já que `jobs.<job_id>.strategy.matrix.fail-fast` tem uma configuração padrão como `false`"
      },
      {
        "id": "E",
        "text": "Não há como aplicar esse comportamento, não pode ser contornado."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-137",
    "stem": "Quantos trabalhos serão executados na seguinte matriz?",
    "code": "jobs:\n  test_deploy:\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        version: [1, 2]\n        include:\n            - comment-color: \"green\"\n            - error-color: \"red\"\n            - os: \"ubuntu-latest\"\n              comment-color: \"blue\"\n            - os: \"macos-latest\"\n              comment-color: \"yellow\"",
    "explanation": "• \"5\": Esta matriz produz 5 trabalhos com as seguintes combinações na matriz:\n`os:ubuntu-latest,version:1,comment-color:blue,error-color:red`\n`os:ubuntu-latest,version:2,comment-color:blue,error-color:red`\n`os:windows-latest,version:1,comment-color:green,error-color:red`\n`os:windows-latest,version:2,comment-color:green,error-color:red`\n`os:macos-latest,comment-color:yellow`\nUma chave `include` NÃO definida em `strategy.matrix` pode ser adicionada a uma configuração de trabalho desde que não sobrescreva a configuração. Chaves `include` já presentes em `strategy.matrix` criarão um novo trabalho se tiverem um novo valor.\nDocumentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#expanding-or-adding-matrix-configurations",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-138",
    "stem": "Você quer criar um workflow `Post-Deploy` que realiza atividades relacionadas a pós-implantação. Qual evento disparador o workflow `Post-Deploy` deve usar para que ele seja executado automaticamente após um workflow especificado ser concluído?",
    "explanation": "• \"`workflow_run`\": `workflow_run` permite disparar um workflow assim que outros workflows especificados forem concluídos (independentemente do sucesso). Observe que, embora esta pergunta especificamente trate de workflows concluídos, o `workflow_run` também pode ser configurado para disparar um workflow quando outros workflows especificados forem acionados ou iniciados em um runner.\n• \"`workflow_trigger`\": Não existe tal evento disparador.\n• \"`workflow_dispatch`\": `workflow_dispatch` é usado para disparar um workflow manualmente. Veja [a documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch) para mais informações.\n• \"`workflow_call`\": `workflow_call` é usado para que um workflow possa ser chamado a partir de outros workflows ou ações. Veja [a documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call) para mais informações.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run",
    "options": [
      {
        "id": "A",
        "text": "`workflow_run`"
      },
      {
        "id": "B",
        "text": "`workflow_trigger`"
      },
      {
        "id": "C",
        "text": "`workflow_dispatch`"
      },
      {
        "id": "D",
        "text": "`workflow_call`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-139",
    "stem": "De quais maneiras você pode habilitar o registro de diagnóstico do runner?",
    "explanation": "• \"Definindo um segredo ou variável chamada `ACTIONS_RUNNER_DEBUG` como `true`\": Nota: `ACTIONS_RUNNER_DEBUG` pode ser definida como um segredo ou variável no nível da organização ou do repositório.\n• \"Adicionando uma subpasta `runner-diagnostic-logs` ao diretório `_diag` do runner hospedado localmente que está sendo usado\": `runner-diagnostic-logs` é o nome da pasta que o GitHub gera quando `ACTIONS_RUNNER_DEBUG` está habilitado. Para evitar confusão, uma pasta com esse nome não deve ser criada em nenhum outro lugar.\n• \"Renomeando o diretório `_diag` de um runner hospedado localmente para `runner-diagnostic-logs`\": Renomear o diretório `_diag` nunca deve ser feito, pois isso pode afetar potencialmente as atividades de registro.\nDocumentação: https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging",
    "options": [
      {
        "id": "A",
        "text": "Definindo um segredo ou variável chamada `ACTIONS_RUNNER_DEBUG` como `true`"
      },
      {
        "id": "B",
        "text": "Reexecutando um workflow com `Enable debug logging enabled`"
      },
      {
        "id": "C",
        "text": "Adicionando uma pasta de nível superior chamada `ACTIONS_RUNNER_DEBUG` ao repositório do workflow"
      },
      {
        "id": "D",
        "text": "Adicionando uma subpasta `runner-diagnostic-logs` ao diretório `_diag` do runner hospedado localmente que está sendo usado"
      },
      {
        "id": "E",
        "text": "Renomeando o diretório `_diag` de um runner hospedado localmente para `runner-diagnostic-logs`"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-140",
    "stem": "Você está criando um workflow reutilizável que tem `branch-name` como entrada. Como você pode executar condicionalmente uma etapa nesse workflow se o nome da branch começar com 'smoke-test'?",
    "explanation": "• \"Use o método embutido `startsWith` em combinação com `jobs.<job_id>.steps[*].if`\": Você não pode usar encadeamento de métodos com métodos embutidos do GitHub Actions. Quase todos os métodos embutidos são escritos no estilo `methodName(arg1,arg2,...)`\n• \"Use o filtro `branches` em `workflow_call`\": O filtro `branches` não está disponível para o acionador de evento `workflow_call`. Além disso, os acionadores de eventos de workflow não podem ser usados para controlar se uma etapa será executada ou não\n• \"Use condicionais shell em combinação com `jobs.<job_id>.steps[*].if`\": Apenas contextos e expressões suportados pelo GitHub Actions podem ser usados em condicionais de `jobs.<job_id>.steps[*].if`.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith",
    "options": [
      {
        "id": "A",
        "text": "Use o método embutido `startsWith` em combinação com `jobs.<job_id>.steps[*].if`",
        "code": "    if: startsWith(inputs.branch-name, 'smoke-test')"
      },
      {
        "id": "B",
        "text": "Use o método embutido `startsWith` em combinação com `jobs.<job_id>.steps[*].if`",
        "code": "    if: inputs.branch-name.startsWith('smoke-test')"
      },
      {
        "id": "C",
        "text": "Use o filtro `branches` em `workflow_call`",
        "code": "on:\n  workflow_call:\n    branches:\n        - 'smoke-test/**'"
      },
      {
        "id": "D",
        "text": "Use condicionais shell em combinação com `jobs.<job_id>.steps[*].if`",
        "code": "    if: [[ \"${{inputs.branch-name}}\" == \"smoke-test\"* ]]"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-141",
    "stem": "Por que você deve usar `hashFiles` ao utilizar `actions/cache`?",
    "code": "  - uses: actions/cache@v5\n    with:\n      path: ~/.npm\n      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}",
    "explanation": "• \"Se uma chave de cache contém o arquivo de dependências envolvido em `hashFiles`, a chave muda quando o arquivo de dependências é atualizado, o que ajuda a mantê-lo atualizado.\": `hashFiles` é uma função integrada do GitHub que cria um hash do caminho especificado. Utilizá-lo para compor uma chave de cache faz com que o hash seja regenerado, o que, por sua vez, atualiza a chave de cache. A documentação oficial de [Referência de Cache de Dependências](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action) mostra como usar `hashFiles` como parte de uma chave de cache.\n• \"Quando se usa `hashFiles` como parte de uma chave de cache, uma etapa adicional será gerada no fluxo de trabalho chamador. Esta etapa do fluxo de trabalho imprime o valor do hash SHA-256 da chave de cache para fins de referência.\": Criar um hash da chave de cache não seria útil na maioria das situações.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles",
    "options": [
      {
        "id": "A",
        "text": "Se uma chave de cache contém o arquivo de dependências envolvido em `hashFiles`, a chave muda quando o arquivo de dependências é atualizado, o que ajuda a mantê-lo atualizado."
      },
      {
        "id": "B",
        "text": "`hashFiles` é necessário para compatibilidade com runners do Windows."
      },
      {
        "id": "C",
        "text": "Quando se usa `hashFiles` como parte de uma chave de cache, se houver uma falha de cache, `hashFiles` fornece informações adicionais de depuração."
      },
      {
        "id": "D",
        "text": "Quando se usa `hashFiles` como parte de uma chave de cache, uma etapa adicional será gerada no fluxo de trabalho chamador. Esta etapa do fluxo de trabalho imprime o valor do hash SHA-256 da chave de cache para fins de referência."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-142",
    "stem": "Qual das seguintes respostas está correta em relação aos tokens de acesso de instalação?",
    "explanation": "• \"`GITHUB_TOKEN` é um tipo de token de acesso de instalação.\": `GITHUB_TOKEN` é um token de acesso de instalação do GitHub App que é gerado automaticamente para cada execução de workflow. Veja a [documentação](https://docs.github.com/en/actions/concepts/security/github_token) para detalhes adicionais.\n• \"O `actions/create-github-app-token` pode ser chamado dentro de workflows para criar um token de acesso de instalação, mas o token de acesso de instalação só pode ser usado em execuções futuras do workflow.\": Uma vez criado, um token de acesso de instalação pode ser usado imediatamente. Veja a [página oficial desta ação](https://github.com/actions/create-github-app-token) para mais detalhes.\n• \"Os tokens de acesso de instalação não podem ser configurados para atuar em nome do GitHub App associado a eles.\": Os tokens de acesso de instalação são frequentemente configurados para atuar em nome do GitHub App associado a eles. Isso pode ajudar na auditoria de atividades automáticas.\nDocumentação: https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation",
    "options": [
      {
        "id": "A",
        "text": "Os tokens de acesso de instalação são tokens de curta duração ideais para atividades de automação, mas exigem a configuração de um Github App."
      },
      {
        "id": "B",
        "text": "`GITHUB_TOKEN` é um tipo de token de acesso de instalação."
      },
      {
        "id": "C",
        "text": "O `actions/create-github-app-token` pode ser chamado dentro de workflows para criar um token de acesso de instalação disponível para uso imediato."
      },
      {
        "id": "D",
        "text": "O `actions/create-github-app-token` pode ser chamado dentro de workflows para criar um token de acesso de instalação, mas o token de acesso de instalação só pode ser usado em execuções futuras do workflow."
      },
      {
        "id": "E",
        "text": "Os tokens de acesso de instalação não podem ser configurados para atuar em nome do GitHub App associado a eles."
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-143",
    "stem": "Sua organização deseja reduzir o período de retenção para artefatos armazenados, citando preocupações com armazenamento. Como isso pode ser feito em nível organizacional?",
    "explanation": "• \"Usando runners hospedados por conta própria, criando um arquivo `.github/retention-policy.yml` e especificando o valor da chave `artifact-retention-period`\": Personalizar períodos de retenção de artefatos não se limita aos runners hospedados por conta própria.\n• \"Isso não pode ser feito em nível organizacional. Todos os workflows que utilizam `actions/upload-artifact` devem usar a entrada obrigatória `retention-days`.\": Embora a entrada `retention-days` possa ser usada para personalizar o período de retenção de artefatos individuais criados por um workflow, isso é inadequado se for tentar aplicar uma política abrangente em nível organizacional. Além disso, a entrada `retention-days` é [opcional, não obrigatória](https://github.com/actions/upload-artifact#inputs).\n• \"Isso não pode ser feito: os artefatos são estritamente armazenados por 90 dias em todos os sistemas que implementam Github Actions.\": O período padrão de retenção para artefatos é de 90 dias. É possível alterar esse valor em todos os sistemas que implementam Github Actions.\nDocumentação: https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Navegando para as configurações de Actions da organização e editando o valor da configuração \"Retenção de artefatos e logs\""
      },
      {
        "id": "B",
        "text": "Usando runners hospedados por conta própria, criando um arquivo `.github/retention-policy.yml` e especificando o valor da chave `artifact-retention-period`"
      },
      {
        "id": "C",
        "text": "Isso não pode ser feito em nível organizacional. Todos os workflows que utilizam `actions/upload-artifact` devem usar a entrada obrigatória `retention-days`."
      },
      {
        "id": "D",
        "text": "Isso não pode ser feito: os artefatos são estritamente armazenados por 90 dias em todos os sistemas que implementam Github Actions."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-144",
    "stem": "Como você pode alterar o período de retenção para artefatos gerados por um determinado workflow?",
    "explanation": "• \"Utilizando o input `retention-days` em `actions/download-artifact`\": `actions/download-artifact` é usado para baixar artefatos. Portanto, ele não determina por quanto tempo um artefato enviado deve ser retido. Além disso, `retention-days` não é um input para esta ação. Veja [a documentação](https://github.com/actions/download-artifact#inputs) para mais detalhes.\n• \"No repositório do workflow, navegando até as configurações do Actions e editando o valor da configuração \"Artifact and log retention\" para o workflow listado.\": Embora você possa editar a configuração [\"Artifact and log retention\"](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) em um repositório, isso se aplica a todos os workflows desse repositório, e não a um workflow individual. Essa configuração não lista workflows individuais.\n• \"Navegando até as configurações de Actions da organização e editando o valor da configuração \"Artifact and log retention\"\": Embora você possa editar a configuração [\"Artifact and log retention\"](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) em uma organização, isso se aplica a todos os workflows dentro da organização, e não a um workflow individual.\nDocumentação: https://github.com/actions/upload-artifact#inputs",
    "options": [
      {
        "id": "A",
        "text": "Utilizando o input `retention-days` em `actions/upload-artifact`"
      },
      {
        "id": "B",
        "text": "Utilizando o input `retention-days` em `actions/download-artifact`"
      },
      {
        "id": "C",
        "text": "No repositório do workflow, navegando até as configurações do Actions e editando o valor da configuração \"Artifact and log retention\" para o workflow listado."
      },
      {
        "id": "D",
        "text": "Navegando até as configurações de Actions da organização e editando o valor da configuração \"Artifact and log retention\""
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-145",
    "stem": "De quais maneiras é possível baixar um artefato?",
    "explanation": "• \"Baixando artefatos da interface do usuário do GitHub Actions no fluxo de execução do workflow\": Usar a interface oferece uma abordagem prática para baixar artefatos. Consulte a [documentação](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts) para mais detalhes.\n• \"Usando um endpoint específico da API do GitHub\": A API do GitHub possui um endpoint \"Baixar um artefato\". Consulte a [documentação](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact) para mais detalhes.\n• \"Usando a ação `actions/upload-artifact` em um workflow\": `actions/upload-artifact` é usado para enviar artefatos, não para baixá-los\n• \"Acessando remotamente runners auto-hospedados via SSH e acessando o diretório `.github/artifacts`\": Geralmente, artefatos são armazenados usando a infraestrutura do GitHub, não nos runners. Há uma exceção: ao usar o GitHub Enterprise Server (GHES), os artefatos e outros dados gerados por execuções de workflow são armazenados em um armazenamento externo de blobs. Consulte a [documentação](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements) para mais detalhes sobre o armazenamento no GHES.\nDocumentação: https://github.com/actions/upload-artifact#inputs",
    "options": [
      {
        "id": "A",
        "text": "Usando a ação `actions/download-artifact` em um workflow"
      },
      {
        "id": "B",
        "text": "Baixando artefatos da interface do usuário do GitHub Actions no fluxo de execução do workflow"
      },
      {
        "id": "C",
        "text": "Usando um endpoint específico da API do GitHub"
      },
      {
        "id": "D",
        "text": "Usando a ação `actions/upload-artifact` em um workflow"
      },
      {
        "id": "E",
        "text": "Acessando remotamente runners auto-hospedados via SSH e acessando o diretório `.github/artifacts`"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-146",
    "stem": "Quais afirmações são verdadeiras sobre `github.ref` quando o fluxo de trabalho é acionado por um evento `pull_request`?",
    "explanation": "• \"Em pull requests que não foram mesclados, `github.ref` refere-se à ref totalmente formada da branch/tag de merge do pull request.\": Por exemplo, se o número do pull request (aberto) fosse #123, `github.ref` seria `refs/pull/123/merge`. Para mais informações sobre refs, veja a [documentação oficial do Git](https://git-scm.com/book/en/Git-Internals-Git-References).\n• \"Em pull requests que foram mesclados, `github.ref` refere-se à ref totalmente formada da branch na qual foi mesclado.\": Por exemplo, se você estivesse mesclando algo na branch `main`, `github.ref` seria `ref/heads/main` após o pull request ter sido mesclado.\n• \"Em pull requests (independentemente do status de mesclagem), `github.ref` refere-se ao número do pull request.\": Para o evento `pull_request`, o valor de `github.ref` varia dependendo de o pull request ter sido mesclado ou não. Este valor será sempre uma ref, e não o número do pull request.\n• \"Em pull requests (independentemente do status de mesclagem), `github.ref` é o SHA do último commit de mesclagem na branch `GITHUB_REF`.\": `github.sha` é o que aponta para o SHA mais recente na branch de mesclagem (ex. `refs/pull/PULL_REQUEST_NUMBER/merge`). Consulte a [documentação de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) para mais detalhes (procure por `GITHUB_SHA`).\n• \"Em pull requests que não foram mesclados, `github.ref` é a ref totalmente formada do título do pull request.\": As refs não são formadas a partir de títulos de pull requests. `github.event.pull_request.title` contém o título do pull request. Consulte a [documentação](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) para mais detalhes.\n• \"Em pull requests que foram mesclados, `github.ref` é o tipo de ref totalmente formada que acionou a execução do fluxo de trabalho. O valor será `branch`, `tag` ou `null` (se a ref não foi totalmente formada).\": `github.ref_type` é o valor do tipo de ref que acionou a execução do fluxo de trabalho. Ele só pode conter `branch` ou `tag`; `null` não é um valor válido. Consulte o link da documentação nesta pergunta para mais detalhes.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context",
    "options": [
      {
        "id": "A",
        "text": "Em pull requests que não foram mesclados, `github.ref` refere-se à ref totalmente formada da branch/tag de merge do pull request."
      },
      {
        "id": "B",
        "text": "Em pull requests que foram mesclados, `github.ref` refere-se à ref totalmente formada da branch na qual foi mesclado."
      },
      {
        "id": "C",
        "text": "Em pull requests (independentemente do status de mesclagem), `github.ref` refere-se ao número do pull request."
      },
      {
        "id": "D",
        "text": "Em pull requests (independentemente do status de mesclagem), `github.ref` é o SHA do último commit de mesclagem na branch `GITHUB_REF`."
      },
      {
        "id": "E",
        "text": "Em pull requests que não foram mesclados, `github.ref` é a ref totalmente formada do título do pull request."
      },
      {
        "id": "F",
        "text": "Em pull requests que foram mesclados, `github.ref` é o tipo de ref totalmente formada que acionou a execução do fluxo de trabalho. O valor será `branch`, `tag` ou `null` (se a ref não foi totalmente formada)."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-147",
    "stem": "Você tem um segredo codificado em base-64 que você decodifica em um workflow do GitHub Actions. Como você pode garantir que o segredo decodificado não apareça acidentalmente no registro do workflow?",
    "explanation": "• \"Usando o comando `add-mask` no workflow em jobs onde o segredo decodificado pode ser utilizado.\": O uso do `add-mask` irá ocultar os valores que o GitHub Actions não detecta como segredo. Isso precisa ser feito uma vez por valor, por job que utiliza o segredo decodificado.\n• \"Nada precisa ser feito, pois a infraestrutura do GitHub Actions automaticamente oculta segredos decodificados.\": Não é garantido que o GitHub Actions consiga automaticamente detectar e ocultar segredos transformados conforme a [documentação](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information).\n• \"Evitar o uso de instruções de impressão que contenham o segredo decodificado, já que essa é a única maneira do segredo decodificado aparecer no registro do workflow.\": Embora evitar instruções de impressão que contenham segredos decodificados seja recomendado, segredos decodificados podem aparecer em outros lugares no registro do workflow, como em mensagens relacionadas a chamadas de API.\n• \"Usando a função integrada `maskSecret` para ocultar o segredo decodificado em casos onde ele pode ser utilizado.\": `maskSecret` não é uma função integrada fornecida pelo GitHub Actions.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log",
    "options": [
      {
        "id": "A",
        "text": "Usando o comando `add-mask` no workflow em jobs onde o segredo decodificado pode ser utilizado."
      },
      {
        "id": "B",
        "text": "Nada precisa ser feito, pois a infraestrutura do GitHub Actions automaticamente oculta segredos decodificados."
      },
      {
        "id": "C",
        "text": "Evitar o uso de instruções de impressão que contenham o segredo decodificado, já que essa é a única maneira do segredo decodificado aparecer no registro do workflow."
      },
      {
        "id": "D",
        "text": "Usando a função integrada `maskSecret` para ocultar o segredo decodificado em casos onde ele pode ser utilizado."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-148",
    "stem": "Qual afirmação é verdadeira em relação ao `github.ref` quando o workflow é acionado por um evento de push?",
    "explanation": "• \"Em eventos de push, `github.ref` é a referência completamente formada do branch ou tag que foi enviado.\": Para mais informações sobre referências, consulte a documentação oficial do [Git](https://git-scm.com/book/en/Git-Internals-Git-References).\n• \"Em eventos de push, `github.ref` é a mensagem do commit que acionou o workflow.\": `github.event.head_commit.message` contém a última mensagem de commit. Consulte a [documentação](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push) para mais detalhes.\n• \"Em eventos de push, `github.ref` é o SHA do commit que acionou o workflow.\": `github.sha` é o que aponta para o SHA do commit. Consulte a [documentação de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) e o link do documento nesta pergunta para mais detalhes.\n• \"Em eventos de push, `github.ref` é o tipo de referência completamente formada que acionou a execução do workflow. O valor será `branch`, `tag` ou `null` (se a referência não estiver completamente formada).\": `github.ref_type` é o valor do tipo de referência que acionou a execução do workflow. Ele só pode conter `branch` ou `tag`; `null` não é um valor válido. Consulte o link do documento nesta pergunta para mais detalhes.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context",
    "options": [
      {
        "id": "A",
        "text": "Em eventos de push, `github.ref` é a referência completamente formada do branch ou tag que foi enviado."
      },
      {
        "id": "B",
        "text": "Em eventos de push, `github.ref` é a mensagem do commit que acionou o workflow."
      },
      {
        "id": "C",
        "text": "Em eventos de push, `github.ref` é o SHA do commit que acionou o workflow."
      },
      {
        "id": "D",
        "text": "Em eventos de push, `github.ref` é a descrição do commit que acionou o workflow."
      },
      {
        "id": "E",
        "text": "Em eventos de push, `github.ref` é o tipo de referência completamente formada que acionou a execução do workflow. O valor será `branch`, `tag` ou `null` (se a referência não estiver completamente formada)."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-149",
    "stem": "O que escrever em `GITHUB_STEP_SUMMARY` faz?",
    "code": "- name: \"Escrever resultados do conjunto de testes\"\n  run: |\n    echo \"Os resultados do conjunto de testes são:\" >> $GITHUB_STEP_SUMMARY",
    "explanation": "• \"Adiciona esta linha ao resumo da tarefa\": Escrever em `GITHUB_STEP_SUMMARY` adiciona ao resumo da tarefa, que pode ser usado como uma versão simplificada do log do fluxo de trabalho.\n• \"Exibe esta linha como uma mensagem de depuração no nível da etapa\": Para exibir uma mensagem de depuração em uma etapa, você deve usar a sintaxe `::debug::`. Consulte a seção \"Configurando uma mensagem de depuração\" na documentação vinculada.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary",
    "options": [
      {
        "id": "A",
        "text": "Adiciona esta linha ao resumo da tarefa"
      },
      {
        "id": "B",
        "text": "Adiciona esta linha como um subtítulo ao nome da etapa na interface do usuário do GitHub Actions"
      },
      {
        "id": "C",
        "text": "Adiciona esta linha ao artefato embutido `github-steps-summary.md`"
      },
      {
        "id": "D",
        "text": "Exibe esta linha como uma mensagem de depuração no nível da etapa"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-150",
    "stem": "Dorothea está solucionando problemas de um fluxo de trabalho acionado por um evento de push e está interessada em ver detalhes sobre o webhook. Como ela pode visualizar todo o payload do webhook que acionou o fluxo de trabalho?",
    "explanation": "• \"Imprimindo o conteúdo do objeto `github.event` em uma etapa\": `github.event` mostrará o payload completo do webhook do evento. Este payload varia conforme o tipo de evento. Consulte [Eventos e payloads de Webhook](https://docs.github.com/en/webhooks/webhook-events-and-payloads) para mais detalhes.\n• \"Navegando até a seção \"Webhooks\" nas configurações do repositório\": A seção \"Webhooks\" nas configurações do repositório mostrará apenas detalhes para webhooks personalizados, não webhooks de eventos padrão como `push`.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context",
    "options": [
      {
        "id": "A",
        "text": "Imprimindo o conteúdo do objeto `github.event` em uma etapa"
      },
      {
        "id": "B",
        "text": "Marcando a caixa de seleção \"Show event webhook payload\" nas opções de execução do fluxo de trabalho."
      },
      {
        "id": "C",
        "text": "Definindo um segredo ou variável chamada `SHOW_EVENT_PAYLOAD` com valor `true`"
      },
      {
        "id": "D",
        "text": "Navegando até a seção \"Webhooks\" nas configurações do repositório"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-151",
    "stem": "O que você deve usar ao passar informações entre jobs: saídas de job ou `GITHUB_ENV`?",
    "explanation": "• \"Saídas de job, porque o valor das variáveis de ambiente definidas escrevendo para `GITHUB_ENV` se aplica apenas ao job atual.\": Embora `env` possa ser definido no nível do workflow (significando que suas variáveis podem ser referenciadas por múltiplos jobs), isso não significa que alterar o valor da variável de ambiente permaneça além do job que a alterou.\n• \"Saídas de job, porque são mais simples de configurar\": Configurar e referenciar saídas de job é mais complicado do que utilizar `GITHUB_ENV`. Por exemplo, saídas de job exigem configurar um bloco de `outputs`, adicionar um `id` a uma etapa e usar `needs` para indicar dependências.\nDocumentação: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow",
    "options": [
      {
        "id": "A",
        "text": "Saídas de job, porque o valor das variáveis de ambiente definidas escrevendo para `GITHUB_ENV` se aplica apenas ao job atual."
      },
      {
        "id": "B",
        "text": "`GITHUB_ENV`, porque as saídas de job só podem ser definidas e referenciadas dentro do mesmo job."
      },
      {
        "id": "C",
        "text": "Saídas de job, porque são mais simples de configurar"
      },
      {
        "id": "D",
        "text": "`GITHUB_ENV`, porque usá-lo para definir variáveis de ambiente coloca significativamente menos pressão no runner, reduzindo o tempo de execução do workflow."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-152",
    "stem": "Preencha o espaço em branco: Ao usar runners auto-hospedados, o cache de ferramentas ___",
    "explanation": "• \"começa vazio e deve ser populado para salvar ferramentas entre execuções\": Os caches de ferramentas permitem armazenar diferentes versões de ferramentas, o que possibilita uma atividade mais rápida dos runners auto-hospedados. Sem caches de ferramentas, os runners auto-hospedados que usam `actions/setup-*` demoram mais para executar.\n• \"começa da mesma maneira que os runners hospedados pelo GitHub, ou seja, pré-populado com certas ferramentas\": Embora os runners hospedados pelo GitHub venham com algumas ferramentas pré-instaladas, esse não é o caso para os runners auto-hospedados.\nDocumentação: https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access",
    "options": [
      {
        "id": "A",
        "text": "começa vazio e deve ser populado para salvar ferramentas entre execuções"
      },
      {
        "id": "B",
        "text": "começa da mesma maneira que os runners hospedados pelo GitHub, ou seja, pré-populado com certas ferramentas"
      },
      {
        "id": "C",
        "text": "começa com as mesmas ferramentas que os runners hospedados pelo GitHub, além de uma seleção de ferramentas personalizadas para melhorar a gestão de runners auto-hospedados"
      },
      {
        "id": "D",
        "text": "não pode ser populado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-153",
    "stem": "Quais dos seguintes eventos podem acionar um workflow que não foi mesclado no branch padrão?",
    "explanation": "• \"`pull_request`\": Para acionar um workflow via `pull_request`, o branch que contém o workflow deve ser o branch alvo da pull request.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request",
    "options": [
      {
        "id": "A",
        "text": "`push`"
      },
      {
        "id": "B",
        "text": "`pull_request`"
      },
      {
        "id": "C",
        "text": "`repository_dispatch`"
      },
      {
        "id": "D",
        "text": "`star`"
      },
      {
        "id": "E",
        "text": "`issues`"
      },
      {
        "id": "F",
        "text": "`issue_comment`"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-154",
    "stem": "Quando você construiria uma ação de contêiner Docker para compartilhar no GitHub Actions marketplace?",
    "explanation": "• \"As ações de contêiner Docker são uma ação pronta para uso e de baixo custo\": As ações de contêiner Docker não são consideradas de baixo custo, pois exigem o uso de uma imagem (pré-construída ou especificada pelo `Dockerfile`), um script de ponto de entrada e, possivelmente, lógica de pré e pós-ponto de entrada.\n• \"As ações de contêiner Docker têm velocidade de inicialização rápida nos runners do Windows e macOS\": Contêineres Docker só podem ser executados em runners de sistema operacional Linux (`ubuntu-latest` para runners hospedados pelo GitHub). Eles também demoram mais em comparação com ações em JavaScript e compostas.\n• \"As ações de contêiner Docker são um conjunto de etapas dentro de outros workflows que são executados no contexto do workflow/ação que os chamou\": Um \"conjunto reutilizável de etapas\" descreve uma ação composta, não uma ação de contêiner Docker\n• \"As ações de contêiner Docker permitem que você utilize o Docker sem exigir um arquivo `action.yml`\": Todas as ações, independentemente do tipo, devem usar um arquivo `action.yml`\nDocumentação: https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions",
    "options": [
      {
        "id": "A",
        "text": "As ações de contêiner Docker garantem um ambiente de execução consistente e dependências específicas sem que os usuários precisem lidar com esses aspectos por conta própria"
      },
      {
        "id": "B",
        "text": "As ações de contêiner Docker são uma ação pronta para uso e de baixo custo"
      },
      {
        "id": "C",
        "text": "As ações de contêiner Docker têm velocidade de inicialização rápida nos runners do Windows e macOS"
      },
      {
        "id": "D",
        "text": "As ações de contêiner Docker são um conjunto de etapas dentro de outros workflows que são executados no contexto do workflow/ação que os chamou"
      },
      {
        "id": "E",
        "text": "As ações de contêiner Docker permitem que você utilize o Docker sem exigir um arquivo `action.yml`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-155",
    "stem": "Marianne tem um branch de feature que contém seu novo arquivo de workflow, que está configurado para ser acionado às 2h da manhã todos os dias, usando a sintaxe abaixo. No entanto, no dia seguinte, o workflow não é acionado. Qual pode ser o motivo disso?",
    "code": "on:\n    schedule:\n        cron:\n            \"0 2 * * *\"",
    "explanation": "• \"A sintaxe de `cron` não está agendada corretamente\": `\"0 2 * * *\"` na sintaxe CRON significa \"executar todos os dias às 2h da manhã\". Mesmo que a programação estivesse configurada incorretamente, o workflow ainda não seria acionado, pois não está presente no branch padrão.\n• \"A sintaxe `@daily` não foi utilizada\": A sintaxe não padrão do CRON, como `@daily`, não é suportada pelo GitHub Actions.\n• \"O repositório privado que contém o workflow não teve nenhuma atividade no repositório por mais de 60 dias, desativando automaticamente o workflow.\": Essa desativação automática ocorre apenas em repositórios públicos, e não em repositórios privados.\nDocumentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule",
    "options": [
      {
        "id": "A",
        "text": "O arquivo de workflow deve existir no branch padrão para ser acionado pelo evento `schedule`"
      },
      {
        "id": "B",
        "text": "A sintaxe de `cron` não está agendada corretamente"
      },
      {
        "id": "C",
        "text": "`schedule` não pode ser o único evento no workflow. Ele deve ser emparelhado com um evento baseado no repositório, como `push`"
      },
      {
        "id": "D",
        "text": "A sintaxe `@daily` não foi utilizada"
      },
      {
        "id": "E",
        "text": "O repositório privado que contém o workflow não teve nenhuma atividade no repositório por mais de 60 dias, desativando automaticamente o workflow."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-156",
    "stem": "De que maneiras você pode excluir artefatos de fluxo de trabalho?",
    "explanation": "• \"Usando a interface do usuário do GitHub Actions para excluir a execução do fluxo de trabalho que gerou os artefatos\": Excluir uma execução de fluxo de trabalho também exclui os artefatos associados à execução.\n• \"Usando um endpoint específico da API do GitHub\": A API do GitHub possui um endpoint \"Delete an artifact\". Veja a [documentação](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact) para mais detalhes.\n• \"Acessando remotamente runners auto-hospedados via SSH, navegando até o diretório `.github/artifacts` e excluindo os artefatos selecionados\": Em geral, os artefatos são armazenados usando a infraestrutura do GitHub, não os runners.\n• \"Configurando o período de retenção de artefatos para 0 dias\": Períodos de retenção de artefatos não podem ser configurados para 0 dias. Veja a [documentação](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) para mais informações.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts",
    "options": [
      {
        "id": "A",
        "text": "Usando a interface do usuário do GitHub Actions para navegar até uma execução de fluxo de trabalho e excluir os artefatos individualmente"
      },
      {
        "id": "B",
        "text": "Usando a interface do usuário do GitHub Actions para excluir a execução do fluxo de trabalho que gerou os artefatos"
      },
      {
        "id": "C",
        "text": "Usando um endpoint específico da API do GitHub"
      },
      {
        "id": "D",
        "text": "Usando a ação `actions/delete-artifact` em um fluxo de trabalho"
      },
      {
        "id": "E",
        "text": "Acessando remotamente runners auto-hospedados via SSH, navegando até o diretório `.github/artifacts` e excluindo os artefatos selecionados"
      },
      {
        "id": "F",
        "text": "Configurando o período de retenção de artefatos para 0 dias"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-157",
    "stem": "Petra está criando um workflow cujo único job é chamado `post-merge`. Como ela pode configurar o job para ser acionado após um Pull Request ser mesclado?",
    "explanation": "• \"Especificar o tipo de atividade `pull_request` como `closed`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro\": Para acionar um job de workflow quando um Pull Request for mesclado, você deve especificar tanto o tipo de atividade do Pull Request em `on:` quanto configurar uma condicional no nível do job.\n• \"Especificar o tipo de atividade `pull_request` como `merged`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro\": O evento `pull_request` não possui um tipo de atividade `merged`. Veja a seção \"pull_request\" da documentação vinculada para conhecer os tipos de atividade válidos para `pull_request`.\n• \"Especificar o tipo de atividade `pull_request` como `merged` (sem necessidade de condicional no nível do job)\": O evento `pull_request` não possui um tipo de atividade `merged`.\n• \"Especificar o tipo de atividade `pull_request` como `closed` (sem necessidade de condicional no nível do job)\": Pull Requests podem ser fechados sem serem mesclados. Se você não usar uma condicional correspondente no nível do job que verifica se o PR foi mesclado, então o job será acionado toda vez que um PR for fechado, não apenas quando ocorrer a mesclagem.\n• \"Especificar o tipo de atividade `pull_request` como `closed` e usar uma condicional no nível do job para verificar se `github.ref` é igual ao branch de mesclagem do Pull Request.\": Após um Pull Request ser mesclado, `github.ref` será o *ref totalmente formado* do branch de mesclagem (ex. `refs/heads/main`), e não apenas o nome do branch de mesclagem (ex. `main`).\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges",
    "options": [
      {
        "id": "A",
        "text": "Especificar o tipo de atividade `pull_request` como `closed`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro",
        "code": "on:\n    pull_request:\n        types: [closed]\n\njobs:\n    post-merge:\n        if: github.event.pull_request.merged == true"
      },
      {
        "id": "B",
        "text": "Especificar o tipo de atividade `pull_request` como `merged`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro",
        "code": "on:\n    pull_request:\n        types: [merged]\njobs:\n    post-merge:\n        if: github.event.pull_request.merged == true"
      },
      {
        "id": "C",
        "text": "Especificar o tipo de atividade `pull_request` como `merged` (sem necessidade de condicional no nível do job)",
        "code": "on:\n    pull_request:\n        types: [merged]\njobs:\n    post-merge:"
      },
      {
        "id": "D",
        "text": "Especificar o tipo de atividade `pull_request` como `closed` (sem necessidade de condicional no nível do job)",
        "code": "on:\n    pull_request:\n        types: [closed]\njobs:\n    post-merge:"
      },
      {
        "id": "E",
        "text": "Especificar o tipo de atividade `pull_request` como `closed` e usar uma condicional no nível do job para verificar se `github.ref` é igual ao branch de mesclagem do Pull Request.",
        "code": "on:\n    pull_request:\n        types: [closed]\njobs:\n    post-merge: \n        if: ${{ github.ref == github.event.pull_request.base.ref }}"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-158",
    "stem": "Quais das seguintes afirmações são verdadeiras ao comparar os eventos pull_request e pull_request_target?",
    "explanation": "• \"O evento `pull_request` é executado no contexto do commit de merge, enquanto o `pull_request_target` é executado no contexto do branch padrão do repositório base.\": Para mais informações sobre commits de merge, consulte a [documentação](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) do GitHub.\n• \"O `pull_request` deve ser usado com cautela, já que PRs oriundos de forks permitirão que o workflow acesse todos os segredos dentro do repositório devido a estarem associados ao branch padrão.\": Isso é verdadeiro para `pull_request_target`; o `pull_request` não está associado ao branch padrão e, portanto, quando acionado por PRs de forks, o workflow terá acesso limitado a segredos. Veja a seção \"pull_request_target\" na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target) mencionada acima para mais informações.\n• \"O evento `pull_request_target` deve ser usado quando você deseja executar o código contido nos arquivos alterados de um PR, para realizar tarefas como verificações de CI ou executar suítes de testes.\": O `pull_request_target` é executado no contexto do branch padrão do repositório, o que pode levar à execução de código não confiável ao realizar atividades como verificações de CI ou suítes de testes. Consulte a [documentação](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use#mitigating-the-risks-of-untrusted-code-checkout) para mais informações.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request",
    "options": [
      {
        "id": "A",
        "text": "O evento `pull_request` é executado no contexto do commit de merge, enquanto o `pull_request_target` é executado no contexto do branch padrão do repositório base."
      },
      {
        "id": "B",
        "text": "Os workflows não serão executados na atividade `pull_request` se houver um conflito de merge."
      },
      {
        "id": "C",
        "text": "Tanto os eventos `pull_request` quanto `pull_request_target` possuem tipos de atividade padrão: `opened`, `synchronize` e `reopened`."
      },
      {
        "id": "D",
        "text": "O `pull_request` deve ser usado com cautela, já que PRs oriundos de forks permitirão que o workflow acesse todos os segredos dentro do repositório devido a estarem associados ao branch padrão."
      },
      {
        "id": "E",
        "text": "Os workflows não serão executados na atividade `pull_request_target` se houver um conflito de merge."
      },
      {
        "id": "F",
        "text": "O evento `pull_request_target` deve ser usado quando você deseja executar o código contido nos arquivos alterados de um PR, para realizar tarefas como verificações de CI ou executar suítes de testes."
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-159",
    "stem": "Por que você deveria usar OIDC ao conectar um workflow a provedores de nuvem?",
    "explanation": "• \"Provedores de nuvem exigem o uso de OIDC.\": OIDC é opcional e recomendado, mas não estritamente exigido.\n• \"Usar OIDC permite que você contorne a configuração de políticas de confiança com provedores de nuvem\": Você deve configurar políticas de confiança com o provedor de nuvem para usar OIDC\n• \"OIDC gera JSON web tokens (JWTs) que podem ser usados em vários jobs do workflow\": A infraestrutura OIDC envolve a criação de JWTs que são exclusivos para cada job do workflow\n• \"Usar OIDC em um workflow salvará automaticamente os logs desse workflow no armazenamento em nuvem\": OIDC está relacionado à segurança ao conectar-se a provedores de nuvem, não ao armazenamento. Assim, não está envolvido no salvamento de logs de workflow em nenhum lugar.\nDocumentação: https://docs.github.com/en/actions/concepts/security/openid-connect",
    "options": [
      {
        "id": "A",
        "text": "OIDC evita que você tenha que manter credenciais da nuvem como segredos de GitHub de longa duração"
      },
      {
        "id": "B",
        "text": "OIDC envolve a geração e uso de tokens de curta duração, o que é mais seguro"
      },
      {
        "id": "C",
        "text": "Provedores de nuvem exigem o uso de OIDC."
      },
      {
        "id": "D",
        "text": "Usar OIDC permite que você contorne a configuração de políticas de confiança com provedores de nuvem"
      },
      {
        "id": "E",
        "text": "OIDC gera JSON web tokens (JWTs) que podem ser usados em vários jobs do workflow"
      },
      {
        "id": "F",
        "text": "Usar OIDC em um workflow salvará automaticamente os logs desse workflow no armazenamento em nuvem"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-160",
    "stem": "Como os workflows integram-se ao OIDC após o estabelecimento de uma relação de confiança?",
    "explanation": "• \"Um job de workflow solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, que fornece um token OIDC para que o workflow possa acessar recursos na nuvem.\": Os tokens OIDC são solicitados primeiro, e então um token de acesso à nuvem é gerado. Tokens OIDC não podem acessar recursos na nuvem.\n• \"O gatilho de evento `on: OIDC_request` solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem.\": Não existe um gatilho de evento `on: OIDC_request`.\n• \"O gatilho de evento `on: OIDC_request` solicita um token OIDC do provedor OIDC do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem.\": Não existe um gatilho de evento `on: OIDC_request`.\n• \"Após adicionar um workflow à lista de \"workflows permitidos no OIDC\" nas configurações do repositório, os workflows criarão automaticamente tokens OIDC e tokens de acesso à nuvem em seu próprio nome. Esses tokens podem ser usados imediatamente no workflow para interagir com provedores de nuvem.\": Não existe uma configuração de \"workflows permitidos no OIDC\".\nDocumentação: https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions",
    "options": [
      {
        "id": "A",
        "text": "Um job de workflow solicita um token OIDC do provedor OIDC do GitHub. O token OIDC é então validado pelo provedor de nuvem, que fornece um token de acesso à nuvem para que o workflow possa acessar recursos na nuvem."
      },
      {
        "id": "B",
        "text": "Um job de workflow solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, que fornece um token OIDC para que o workflow possa acessar recursos na nuvem."
      },
      {
        "id": "C",
        "text": "O gatilho de evento `on: OIDC_request` solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem."
      },
      {
        "id": "D",
        "text": "O gatilho de evento `on: OIDC_request` solicita um token OIDC do provedor OIDC do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem."
      },
      {
        "id": "E",
        "text": "Após adicionar um workflow à lista de \"workflows permitidos no OIDC\" nas configurações do repositório, os workflows criarão automaticamente tokens OIDC e tokens de acesso à nuvem em seu próprio nome. Esses tokens podem ser usados imediatamente no workflow para interagir com provedores de nuvem."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-161",
    "stem": "Mercedes quer publicar uma action de contêiner Docker criada por ela no GitHub Actions Marketplace. Quais arquivos ela precisa ter, no mínimo, para fazer isso?",
    "explanation": "• \"`action.yml`\": Um arquivo `action.yml` é necessário para que uma action seja publicada no Marketplace, independentemente do tipo.\n• \"Um `Dockerfile`, se a imagem for construída como parte da action durante a execução do workflow\": Actions de contêiner Docker requerem um `Dockerfile` apenas se a imagem precisar ser criada do zero e não puder ser puxada de um registro de imagens. O valor de `runs.image` no `action.yml` deve ser o caminho para o `Dockerfile`.\n• \"Um `Dockerfile`, se a imagem for referenciada a partir de um registro de imagens\": Quando uma imagem é referenciada em um registro de imagens, não é necessário um `Dockerfile`. O valor da chave `runs.image` no `action.yml` deve ser prefixado com `docker://` seguido pelo nome da imagem. Consulte as seções \"runs\" e \"runs.image\" na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage) para mais informações.\n• \"`README.md`\": Embora o arquivo `README.md` seja recomendado pelo GitHub para Actions publicadas no Marketplace, ele não é um requisito obrigatório.\nDocumentação: https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace",
    "options": [
      {
        "id": "A",
        "text": "`action.yml`"
      },
      {
        "id": "B",
        "text": "Um `Dockerfile`, se a imagem for construída como parte da action durante a execução do workflow"
      },
      {
        "id": "C",
        "text": "Um `Dockerfile`, se a imagem for referenciada a partir de um registro de imagens"
      },
      {
        "id": "D",
        "text": "`README.md`"
      },
      {
        "id": "E",
        "text": "`.dockerignore`"
      },
      {
        "id": "F",
        "text": "`CONTRIBUTING.md`"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-162",
    "stem": "Annette precisa escrever um workflow para publicar um pacote `npm` personalizado que será usado apenas pelos membros de sua organização privada. O que o workflow dela deve incluir?",
    "explanation": "• \"Lógica para publicar no GitHub Packages\": GitHub Packages é um registro de pacotes integrado ao GitHub, facilitando o uso quando suas necessidades são específicas ao GitHub (como com actions/workflows). GitHub Packages inclui a capacidade de hospedar pacotes de forma privada.\n• \"Um token com permissões de `write:packages`\": Tokens de acesso pessoal são compatíveis com todos os registros de pacotes do GitHub Packages. Certos registros também suportam o uso de `GITHUB_TOKEN`. Consulte a [documentação](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) para mais informações.\n• \"Lógica de comunicação com o registro correspondente do GitHub Packages `https://npm.pkg.github.com`\": Workflows envolvidos com o GitHub Packages frequentemente envolvem comunicação com o registro de pacotes hospedado no GitHub correspondente, cuja URL tem a sintaxe de `https://<package-type>.pkg.github.com`. Para um exemplo, veja a [documentação sobre o registro npm](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).\n• \"Um evento `on:registry_package` sem tipos de atividade especificados\": O evento `on:registry_package` está relacionado a pacotes, mas um workflow não precisa desse evento para publicar um pacote.\n• \"Um token com permissões de `admin:packages`\": Permissões de `admin:packages` só são necessárias quando você precisa excluir um pacote hospedado pelo GitHub Packages. O princípio de permissões mínimas deve ser seguido; nesse caso, apenas permissões de `write` são necessárias.\n• \"Um evento `on:registry_package` com `types:[published]`\": O evento `on:registry_package` pode ser configurado para acionar um workflow quando um pacote for publicado, mas um workflow não precisa desse evento para publicar um pacote.\nDocumentação: https://docs.github.com/en/packages/learn-github-packages/publishing-a-package",
    "options": [
      {
        "id": "A",
        "text": "Lógica para publicar no GitHub Packages"
      },
      {
        "id": "B",
        "text": "Um token com permissões de `write:packages`"
      },
      {
        "id": "C",
        "text": "Lógica de comunicação com o registro correspondente do GitHub Packages `https://npm.pkg.github.com`"
      },
      {
        "id": "D",
        "text": "Um evento `on:registry_package` sem tipos de atividade especificados"
      },
      {
        "id": "E",
        "text": "Um token com permissões de `admin:packages`"
      },
      {
        "id": "F",
        "text": "Um evento `on:registry_package` com `types:[published]`"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-163",
    "stem": "Em quais níveis o `if:` pode ser usado em workflows?",
    "explanation": "• \"Nível de Workflow\": `if:` não está presente no nível de workflow. Para acionar condicionalmente um workflow inteiro, outros métodos devem ser usados, como especificar tipos de atividade.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax",
    "options": [
      {
        "id": "A",
        "text": "Nível de Job"
      },
      {
        "id": "B",
        "text": "Nível de Step"
      },
      {
        "id": "C",
        "text": "Nível de Workflow"
      },
      {
        "id": "D",
        "text": "Nível de Ambiente"
      },
      {
        "id": "E",
        "text": "Nível de Organização"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-164",
    "stem": "Como o `repository_dispatch` permite que sistemas externos ao GitHub acionem um workflow?",
    "explanation": "• \"O workflow é acionado pela criação de um evento de repository dispatch\": O resultado do \"Create a repository dispatch event\" é um novo evento `repository_dispatch` (webhook), que o `on.repository_dispatch` escuta.\n• \"A chave `on.repository_dispatch.types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes\": `on.repository_dispatch.types` permite que você defina tipos de atividades personalizadas. Consulte a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch) para exemplos de como `on.repository_dispatch.types` e `event_type` se relacionam.\n• \"O sistema externo faz uma solicitação PUT para a API do GitHub para criar um evento de repository dispatch\": O método HTTP correto para o \"Create a repository dispatch event\" é POST.\n• \"O workflow é acionado por uma solicitação POST para o workflow usando o seguinte endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches`\": Este endpoint corresponde à criação de um evento de workflow dispatch, não de um evento de repository dispatch. Além disso, a API do GitHub é onde as solicitações relacionadas ao Actions devem ser feitas—chamadas de API não podem ser feitas diretamente ao próprio workflow.\n• \"A chave `on.repository_dispatch.event_types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes\": Não existe uma chave `on.repository_dispatch.event_types`. É usada `on.repository_dispatch.types`, de forma consistente com a maneira como outros eventos usam `on.<event_name>.types` para filtrar com base na atividade.\nDocumentação: https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event",
    "options": [
      {
        "id": "A",
        "text": "O sistema externo faz uma solicitação POST para a API do GitHub para criar um evento de repository dispatch."
      },
      {
        "id": "B",
        "text": "O workflow é acionado pela criação de um evento de repository dispatch"
      },
      {
        "id": "C",
        "text": "A chave `on.repository_dispatch.types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes"
      },
      {
        "id": "D",
        "text": "O sistema externo faz uma solicitação PUT para a API do GitHub para criar um evento de repository dispatch"
      },
      {
        "id": "E",
        "text": "O workflow é acionado por uma solicitação POST para o workflow usando o seguinte endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches`"
      },
      {
        "id": "F",
        "text": "A chave `on.repository_dispatch.event_types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-165",
    "stem": "Ações JavaScript e `actions/github-script` utilizam JavaScript. Por que você deveria usar `actions/github-script` em vez de criar sua própria ação JavaScript?",
    "explanation": "• \"`actions/github-script` deve ser usado quando você precisar utilizar um ambiente Node.js ajustado com várias dependências específicas\": Embora você possa instalar módulos para que o `actions/github-script` use antes de chamá-lo, se várias dependências forem necessárias, isso resulta em várias etapas no fluxo de trabalho. O `actions/github-script` também não permite alterar a versão do Node.js; você está vinculado à versão que ele define.\n• \"Ações JavaScript devem ser usadas quando você quiser uma solução de baixo custo para fazer chamadas à API do GitHub.\": Ações JavaScript não têm baixo custo; elas exigem a criação de um arquivo `action.yml`, que por sua vez deve ser armazenado em sua própria pasta ou até mesmo em seu próprio repositório, dependendo da abordagem. O `actions/github-script` vem com um cliente pré-autenticado que facilita fazer chamadas à API do GitHub usando uma abordagem baseada em JavaScript.\nDocumentação: https://github.com/actions/github-script",
    "options": [
      {
        "id": "A",
        "text": "`actions/github-script` deve ser usado para scripts curtos em linha"
      },
      {
        "id": "B",
        "text": "`actions/github-script` deve ser usado quando você quiser usar um cliente pré-autenticado para interagir com a API do GitHub."
      },
      {
        "id": "C",
        "text": "Ações JavaScript devem ser usadas quando você quiser uma ação personalizada reutilizável para ser usada em vários repositórios"
      },
      {
        "id": "D",
        "text": "Ações JavaScript devem ser usadas para scripts curtos em linha"
      },
      {
        "id": "E",
        "text": "`actions/github-script` deve ser usado quando você precisar utilizar um ambiente Node.js ajustado com várias dependências específicas"
      },
      {
        "id": "F",
        "text": "Ações JavaScript devem ser usadas quando você quiser uma solução de baixo custo para fazer chamadas à API do GitHub."
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-166",
    "stem": "Hilda precisa acessar um artefato gerado por uma execução recente de workflow, mas o arquivo do workflow foi excluído desde então. Ela ainda conseguirá recuperar o artefato?",
    "explanation": "• \"Sim, porque excluir um workflow não exclui automaticamente suas execuções e artefatos gerados\": As execuções de workflow e seus artefatos gerados não são excluídos automaticamente quando o workflow correspondente é excluído. É necessário excluir a própria execução para remover os artefatos.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#artifacts-from-deleted-workflow-runs",
    "options": [
      {
        "id": "A",
        "text": "Sim, porque excluir um workflow não exclui automaticamente suas execuções e artefatos gerados"
      },
      {
        "id": "B",
        "text": "Não, porque excluir um workflow automaticamente exclui suas execuções e artefatos gerados"
      },
      {
        "id": "C",
        "text": "Sim, mas somente se ela tiver privilégios de administrador"
      },
      {
        "id": "D",
        "text": "Não, porque embora as execuções de workflow permaneçam após a exclusão de um workflow, os artefatos gerados ficam corrompidos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-167",
    "stem": "Quais chaves são necessárias ao criar um arquivo `action.yml`?",
    "explanation": "Documentação: https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax",
    "options": [
      {
        "id": "A",
        "text": "`name`"
      },
      {
        "id": "B",
        "text": "`description`"
      },
      {
        "id": "C",
        "text": "`runs`"
      },
      {
        "id": "D",
        "text": "`author`"
      },
      {
        "id": "E",
        "text": "`inputs`"
      },
      {
        "id": "F",
        "text": "`outputs`"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-168",
    "stem": "Manuela está configurando runners auto-hospedados para sua organização, que possui restrições rigorosas de comunicação com endereços IP. Como ela pode garantir que os runners auto-hospedados possam se comunicar com o GitHub?",
    "explanation": "• \"Adicionar os endereços IP dos runners auto-hospedados à lista de endereços IP permitidos da organização\": Runners auto-hospedados comunicam-se com o GitHub para realizar várias atividades, como visto na [documentação](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication). Para permitir essa comunicação, é necessário adicionar os endereços IP dos runners auto-hospedados à lista de endereços IP permitidos\nDocumentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list",
    "options": [
      {
        "id": "A",
        "text": "Adicionar os endereços IP dos runners auto-hospedados à lista de endereços IP permitidos da organização"
      },
      {
        "id": "B",
        "text": "Adicionar o sistema operacional dos runners auto-hospedados à lista de sistemas operacionais permitidos da organização"
      },
      {
        "id": "C",
        "text": "Adicionar o arquivo `.ip-exception` ao nível superior da estrutura de diretórios do runner auto-hospedado"
      },
      {
        "id": "D",
        "text": "Migrar para runners padrão hospedados no GitHub, já que os runners auto-hospedados serão bloqueados se as listas de endereços IP permitidos estiverem habilitadas"
      },
      {
        "id": "E",
        "text": "Selecionar a caixa de seleção 'Permitir acesso de runners auto-hospedados' nas configurações de lista de endereços IP permitidos da organização"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-169",
    "stem": "Observe os valores na chave `runs-on`, como vistos no job de workflow abaixo. O que é verdadeiro em relação à maneira como o job será executado?",
    "code": "jobs:\n    fire_emblem_deploy:\n        name: \"Deploy da aplicação 'Fire Emblem'\"\n        runs-on: [self-hosted,nes,linux]",
    "explanation": "• \"O job será executado em um runner self-hosted que tenha qualquer um dos rótulos aplicados.\": Os rótulos de runners são aplicados de forma cumulativa; um workflow não será executado em um runner que tenha apenas alguns dos rótulos. Todos são necessários.\n• \"O job ainda poderá ser executado em runners hospedados pelo GitHub, já que eles podem ter rótulos personalizados aplicados a eles.\": Runners hospedados pelo GitHub não podem ter rótulos personalizados aplicados a eles. Eles devem ser referenciados com os [rótulos predefinidos](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories) que lhes foram atribuídos.\n• \"O job será executado em um runner (self-hosted ou hospedado pelo GitHub, o que estiver disponível primeiro) com o nome `self-hosted,nes,linux`.\": `runs-on` aponta para rótulos de runners, não para nomes.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs",
    "options": [
      {
        "id": "A",
        "text": "O job será executado em um runner self-hosted que tenha todos os rótulos aplicados."
      },
      {
        "id": "B",
        "text": "O job será executado em um runner self-hosted que tenha qualquer um dos rótulos aplicados."
      },
      {
        "id": "C",
        "text": "O job ainda poderá ser executado em runners hospedados pelo GitHub, já que eles podem ter rótulos personalizados aplicados a eles."
      },
      {
        "id": "D",
        "text": "O job será executado em um runner (self-hosted ou hospedado pelo GitHub, o que estiver disponível primeiro) com o nome `self-hosted,nes,linux`."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-170",
    "stem": "Por que você reexecutaria um workflow em vez de gerar uma nova execução de workflow?",
    "explanation": "• \"Reexecutar um workflow garante que `GITHUB_TRIGGERING_ACTOR` permaneça inalterado, tornando claro quem originalmente acionou o workflow.\": De acordo com a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), o valor de `GITHUB_TRIGGERING_ACTOR` é atualizado com base em quem reexecutou o workflow.\n• \"Reexecutar um workflow garante que `GITHUB_ACTOR` seja atualizado, tornando claro quem reexecutou o workflow.\": De acordo com a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), o valor de `GITHUB_ACTOR` corresponde a quem originalmente acionou o workflow; ele não muda ao reexecutar um workflow.\n• \"Reexecutar um workflow sobrescreve as execuções de jobs com erro, tornando as execuções mais simples.\": Jobs com erro permanecem quando um job é reexecutado. Usando a interface gráfica, é fácil alternar entre a execução original do job e as reexecuções subsequentes.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs",
    "options": [
      {
        "id": "A",
        "text": "Reexecutar um workflow permite reexecutar jobs de workflow que falharam, diferentemente de gerar uma nova execução, que executará todos os jobs."
      },
      {
        "id": "B",
        "text": "Reexecutar um workflow significa que os jobs de workflow serão executados no mesmo contexto do commit SHA e da referência do git do evento original que acionou o job."
      },
      {
        "id": "C",
        "text": "Reexecutar um workflow permite habilitar logs de depuração adicionais para os job(s) selecionados."
      },
      {
        "id": "D",
        "text": "Reexecutar um workflow garante que `GITHUB_TRIGGERING_ACTOR` permaneça inalterado, tornando claro quem originalmente acionou o workflow."
      },
      {
        "id": "E",
        "text": "Reexecutar um workflow garante que `GITHUB_ACTOR` seja atualizado, tornando claro quem reexecutou o workflow."
      },
      {
        "id": "F",
        "text": "Reexecutar um workflow sobrescreve as execuções de jobs com erro, tornando as execuções mais simples."
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-200-171",
    "stem": "A organização de Ingrid possui um subconjunto de runners Linux auto-hospedados que devem ser usados apenas por determinados repositórios. Qual é a melhor abordagem para ela impor esse comportamento?",
    "explanation": "• \"Criar um novo rótulo de runner, adicionar os rótulos aos runners e garantir que todos os workflows nos repositórios tenham esse rótulo incluído no campo `runs-on`.\": Rótulos não limitam o acesso a runners. Apenas adicionar um rótulo não funcionará; adicionar rótulos ao `runs-on` pode potencialmente afetar o workflow correspondente ao tentar encontrar um runner para executar.\nDocumentação: https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group",
    "options": [
      {
        "id": "A",
        "text": "Criar um novo grupo de runners, adicionar os runners ao grupo e então selecionar quais repositórios terão acesso ao grupo nas configurações do grupo."
      },
      {
        "id": "B",
        "text": "Criar um novo rótulo de runner, adicionar os rótulos aos runners e então selecionar quais repositórios terão acesso ao rótulo nas configurações do rótulo."
      },
      {
        "id": "C",
        "text": "Criar um novo rótulo de runner, adicionar os rótulos aos runners e garantir que todos os workflows nos repositórios tenham esse rótulo incluído no campo `runs-on`."
      },
      {
        "id": "D",
        "text": "Criar um novo grupo de runners, selecionar \"Linux\" como o sistema operacional e usar padrões glob para definir quais repositórios terão acesso nas configurações do grupo."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-172",
    "stem": "Uma organização possui vários repositórios que compartilham um ambiente especializado de Node.js hospedado em uma rede privada. O próximo objetivo da organização envolve a configuração de um software de bloqueio de nós dentro dessa rede. Qual das seguintes opções atenderia melhor às necessidades da organização em relação à execução de workflows?",
    "explanation": "• \"Um self-hosted runner por repositório, configurado no nível do repositório\": Isso seria duplicado e complexo de gerenciar. Os repositórios podem referenciar o mesmo runner no nível da organização, que é a abordagem correta nesta situação.\n• \"GitHub-hosted runners, com todos os workflows utilizando `actions/setup-node`\": GitHub-hosted runners são [efêmeros](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#overview-of-github-hosted-runners), o que significa que uma nova instância do runner é configurada para cada execução de workflow. Isso não funcionaria bem com um software de bloqueio de nós, que permite que o software seja executado apenas em um dispositivo/VM específico. Além disso, embora os GitHub-hosted runners possam ser configurados para acessar redes privadas, isso não é uma funcionalidade padrão.\n• \"GitHub-hosted runners configurados no nível da organização\": GitHub-hosted runners não podem ser configurados dessa forma.\n• \"GitHub-hosted runners, usando `runs-on: [node<version>]` (`<version>` sendo a versão desejada do Node) em todos os workflows.\": `[node<version>]` não aponta para nenhum GitHub-hosted runner.\nDocumentação: https://docs.github.com/en/actions/concepts/runners/self-hosted-runners",
    "options": [
      {
        "id": "A",
        "text": "Self-hosted runners configurados no nível da organização"
      },
      {
        "id": "B",
        "text": "Um self-hosted runner por repositório, configurado no nível do repositório"
      },
      {
        "id": "C",
        "text": "GitHub-hosted runners, com todos os workflows utilizando `actions/setup-node`"
      },
      {
        "id": "D",
        "text": "GitHub-hosted runners configurados no nível da organização"
      },
      {
        "id": "E",
        "text": "GitHub-hosted runners, usando `runs-on: [node<version>]` (`<version>` sendo a versão desejada do Node) em todos os workflows."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-173",
    "stem": "O seguinte workflow chama um workflow reutilizável em um de seus jobs. O workflow reutilizável possui `permissions` definidas no nível do workflow, conforme mostrado abaixo. Qual será o resultado de chamar o workflow reutilizável?",
    "code": "# workflow chamador\non:\n    issues:\n        types: [opened]\n    \n    permissions:\n        contents: write\n\n    jobs:\n        issue_creator:\n            permissions:\n                contents: read\n            uses: ./.github/workflows/issue-creator.yml\n\n# workflow reutilizável (issue-creator.yml)\non:\n    workflow_call:\n\n    permissions:\n        contents: write\n\n    jobs:\n        create_issue:\n            runs-on: ubuntu-latest\n            steps: \n                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    \n                - run: gh issue create --title \"Issue report\" --body \"Hello!\" --repo $GITHUB_REPOSITORY\n",
    "explanation": "• \"O workflow reutilizável retornará um erro, pois o job que o chamou possui apenas permissões de `contents:read`\": Nesse cenário, o workflow chamador é acionado, mas seu job não será executado. Em vez disso, será gerado um erro dizendo que o arquivo de workflow chamador não é válido, pois o workflow reutilizável está solicitando permissões `contents: write`, mas tem apenas permissões `contents: read`.\n• \"O workflow reutilizável criará um issue no repositório com o título `\"Issue Report\"`\": Isso ocorreria se o job `issue_creator` tivesse permissões de `contents:write`, que seriam herdadas pelo workflow reutilizável.\n• \"O workflow reutilizável não será chamado, pois workflows reutilizáveis devem estar em uma subpasta de `.github/workflows`\": Todos os workflows devem estar localizados no diretório `.github/workflows`.\n• \"Tanto o workflow chamador quanto o workflow reutilizável não serão chamados, porque `issues` não é um gatilho válido para GitHub Actions.\": `issues` é um evento padrão de gatilho, conforme visto na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues)\nDocumentação: https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows",
    "options": [
      {
        "id": "A",
        "text": "O workflow reutilizável retornará um erro, pois o job que o chamou possui apenas permissões de `contents:read`"
      },
      {
        "id": "B",
        "text": "O workflow reutilizável criará um issue no repositório com o título `\"Issue Report\"`"
      },
      {
        "id": "C",
        "text": "O workflow reutilizável não será chamado, pois workflows reutilizáveis devem estar em uma subpasta de `.github/workflows`"
      },
      {
        "id": "D",
        "text": "Tanto o workflow chamador quanto o workflow reutilizável não serão chamados, porque `issues` não é um gatilho válido para GitHub Actions."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-174",
    "stem": "Catherine escreve o seguinte trabalho de workflow abaixo. Qual será o resultado do trabalho?",
    "code": "jobs:\n  doc-generate:\n    name: \"Generate Scaffold Doc\"\n    runs-on: ubuntu-latest\n    steps:\n      \n      - name: Setup Python 3.13 \n        uses: actions/setup-python@v6\n        with:\n          python-version: '3.13' \n\n      - name: Grant Execute Permission to Scaffolding Python Script\n        run: chmod +x ./scripts/scaffold-doc.py\n\n      - name: Execute Scaffolding Python Script\n        run: python ./scripts/scaffold-doc.py",
    "explanation": "• \"O script Python não será executado, porque `actions/checkout` não está incluído no workflow.\": `actions/checkout` é necessário para fazer o checkout do código do repositório no sistema de arquivos do runner. Se não for usado, o script Python não será encontrado e, portanto, não será executado.\n• \"O script Python será executado com sucesso, porque o comando `chmod` concede permissão de execução ao script.\": Isso seria verdade se `actions/checkout` fosse usado.\n• \"O script Python não será executado, porque `actions/python-setup` não é a ação correta para configurar o Python.\": A maioria das ações oficiais que configuram linguagens de programação usa a estrutura `actions/setup-<language>`.\nDocumentação: https://github.com/actions/checkout",
    "options": [
      {
        "id": "A",
        "text": "O script Python não será executado, porque `actions/checkout` não está incluído no workflow."
      },
      {
        "id": "B",
        "text": "O script Python será executado com sucesso, porque o comando `chmod` concede permissão de execução ao script."
      },
      {
        "id": "C",
        "text": "O script Python não será executado, porque `runs-on` não tem um valor de `python`."
      },
      {
        "id": "D",
        "text": "O script Python não será executado, porque `actions/python-setup` não é a ação correta para configurar o Python."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-175",
    "stem": "Judith tem um fluxo de trabalho que deve ser acionado sempre que um commit for feito no repositório. O repositório nem sempre é tão ativo, então Judith deseja que o fluxo de trabalho seja executado programaticamente uma vez por semana como uma medida de segurança. Qual combinação de eventos ela deve usar para garantir esse comportamento?",
    "explanation": "• \"`pull_request` (com `types:[closed]`) e `schedule`\": Pull requests podem ser fechados sem serem mesclados, e commits podem ser feitos em um repositório sem um pull request.\n• \"`push` e `workflow_dispatch`\": A palavra \"programmaticamente\" na pergunta significa que o fluxo de trabalho deve ser acionado de forma não manual. Ter usuários acionando manualmente um fluxo de trabalho toda semana não é confiável—isso pode e deve ser automatizado via `schedule`.\n• \"`push` e `weekly`\": `weekly` não é um evento válido. Use `schedule` com a sintaxe `cron` para configurar o fluxo de trabalho para ser executado semanalmente.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "`push` e `schedule`"
      },
      {
        "id": "B",
        "text": "`pull_request` (com `types:[closed]`) e `schedule`"
      },
      {
        "id": "C",
        "text": "`push` e `workflow_dispatch`"
      },
      {
        "id": "D",
        "text": "`push` e `weekly`"
      },
      {
        "id": "E",
        "text": "Isso não é possível: `schedule` não pode ser combinado com outros eventos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-176",
    "stem": "Seu fluxo de trabalho deve iniciar às 00:00 AM toda segunda e sexta-feira. Qual dos trechos a seguir corresponde a esse comportamento?",
    "explanation": "• \"on:\n  schedule:\n    - cron: '0 0 * * 1,5'\": A sintaxe `cron` tem seus itens definidos em ordem de magnitude crescente, com a exceção de que o item \"dia(s) da semana\" é o último item. Consulte a [documentação](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) para mais informações e exemplos.\n• \"on:\n  schedule:\n    - cron: '0 12 * * Mon,Fri'\": O item \"dia(s) da semana\" deve estar no formato numérico. Além disso, os itens \"minuto\" e \"hora\" apontam para 12:00 PM, não 00:00 AM.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule",
    "options": [
      {
        "id": "A",
        "code": "on:\n  schedule:\n    - cron: '0 0 * * 1,5'"
      },
      {
        "id": "B",
        "code": "on:\n  schedule:\n    - cron: '0 12 * * Mon,Fri'"
      },
      {
        "id": "C",
        "code": "on:\n  workflow_schedule:\n    - cron: '0 0 * * 1,5'"
      },
      {
        "id": "D",
        "code": "on:\n  workflow_schedule:\n    - cron: '1,5 * * 0 0'"
      },
      {
        "id": "E",
        "code": "on:\n  workflow_call:\n    - days: [Mon,Fri]\n    - times: [00]"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-200-177",
    "stem": "Você precisa garantir que seu ambiente `prod` exija aprovações manuais antes que os deploys possam prosseguir. Das opções a seguir, quais são verdadeiras sobre como isso é configurado?",
    "explanation": "• \"Se você listar revisores obrigatórios, todos eles precisam aprovar para continuar com o deployment.\": Surpreendentemente, apenas um dos revisores obrigatórios precisa aprovar o job do workflow. Para aplicar esse comportamento, você precisaria criar uma regra de proteção de deployment personalizada via um GitHub App.\n• \"Apenas usuários individuais podem ser atribuídos como revisores obrigatórios, não equipes.\": Tanto usuários individuais quanto equipes podem ser atribuídos como revisores obrigatórios.\n• \"Revisores obrigatórios precisam de acesso pelo menos de `write` ao repositório para aprovar.\": Revisores obrigatórios precisam de acesso pelo menos de `read`.\nDocumentação: https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers",
    "options": [
      {
        "id": "A",
        "text": "Se você listar revisores obrigatórios, apenas um deles precisa aprovar para continuar com o deployment."
      },
      {
        "id": "B",
        "text": "Você pode impedir auto-revisões no caso de a pessoa que deseja fazer o deploy também ser um revisor obrigatório."
      },
      {
        "id": "C",
        "text": "Se você listar revisores obrigatórios, todos eles precisam aprovar para continuar com o deployment."
      },
      {
        "id": "D",
        "text": "Você não pode evitar auto-revisões, mas pode configurar alertas para ver quem disparou o deployment."
      },
      {
        "id": "E",
        "text": "Apenas usuários individuais podem ser atribuídos como revisores obrigatórios, não equipes."
      },
      {
        "id": "F",
        "text": "Revisores obrigatórios precisam de acesso pelo menos de `write` ao repositório para aprovar."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-200-178",
    "stem": "Você está considerando uma ação do Marketplace para utilizar em seu workflow. Quais são alguns aspectos que você pode observar que indicam que a ação é confiável?",
    "explanation": "• \"O código-fonte da ação não foi atualizado há muito tempo, indicando que o desenvolvimento dessa ação foi concluído\": Se o repositório contendo a ação não foi atualizado há muito tempo, dependências e similares podem estar desatualizados, apresentando potenciais riscos de segurança.\nDocumentação: https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions",
    "options": [
      {
        "id": "A",
        "text": "Um selo de 'Verified Creator' na página do Marketplace da ação"
      },
      {
        "id": "B",
        "text": "O README é detalhado, definindo o propósito da ação e como ela funciona"
      },
      {
        "id": "C",
        "text": "O `action.yml` é muito breve"
      },
      {
        "id": "D",
        "text": "A quantidade de estrelas é baixa na página do Marketplace da ação"
      },
      {
        "id": "E",
        "text": "O código-fonte da ação não foi atualizado há muito tempo, indicando que o desenvolvimento dessa ação foi concluído"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "type": "multi",
    "pick": 2
  }
],
};
