import type { Simulado } from "@/types/simulado";

export const simuladoGithubFoundations: Simulado = {
  slug: "github-foundations",
  title: "GitHub Foundations",
  examCode: "GH-900",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 120,
  passingScore: 70,
  questions: [
  {
    "id": "GH-900-1",
    "stem": "Quais são os tipos possíveis de contas do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts",
    "options": [
      {
        "id": "A",
        "text": "Contas pessoais"
      },
      {
        "id": "B",
        "text": "Contas de organização"
      },
      {
        "id": "C",
        "text": "Contas Enterprise"
      },
      {
        "id": "D",
        "text": "Contas compartilhadas"
      },
      {
        "id": "E",
        "text": "Contas de empresa"
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
    "id": "GH-900-2",
    "stem": "Qual desses recursos do GitHub serve como uma planilha adaptável, quadro de tarefas e roteiro que se integra com issues e pull requests no GitHub para planejar e rastrear seu trabalho de forma eficaz?",
    "options": [
      {
        "id": "A",
        "text": "GitHub Project"
      },
      {
        "id": "B",
        "text": "GitHub Copilot"
      },
      {
        "id": "C",
        "text": "GitHub Repository"
      },
      {
        "id": "D",
        "text": "GitHub Organization"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-3",
    "stem": "Como funciona a sincronização entre projetos do GitHub, issues e pull requests?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects#staying-up-to-date",
    "options": [
      {
        "id": "A",
        "text": "As atualizações nas issues e pull requests serão refletidas automaticamente nos GitHub Projects. Esta integração funciona nos dois sentidos, de modo que, ao alterar as informações sobre uma pull request ou issue em seu projeto, a pull request ou issue reflete essa informação."
      },
      {
        "id": "B",
        "text": "As atualizações nas issues e pull requests não serão refletidas automaticamente nos GitHub Projects, devendo ser acionadas manualmente pelo usuário."
      },
      {
        "id": "C",
        "text": "A sincronização das informações funciona apenas em uma direção - do projeto para as issues e pull requests. As atualizações feitas nas issues e pull requests não serão espelhadas automaticamente nos itens do GitHub Project."
      },
      {
        "id": "D",
        "text": "A sincronização das informações funciona apenas em uma direção - das issues e pull requests para os projetos. As atualizações feitas nos itens do projeto não serão espelhadas automaticamente nas issues e pull requests."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-4",
    "stem": "Qual das seguintes afirmações é verdadeira sobre campos personalizados para itens no GitHub Projects?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects#adding-metadata-to-your-items",
    "options": [
      {
        "id": "A",
        "text": "Campos personalizados permitem a adição de metadados além das opções integradas, como datas-alvo e campos de iteração."
      },
      {
        "id": "B",
        "text": "Campos personalizados são limitados a informações textuais e não podem incluir metadados numéricos ou relacionados a datas."
      },
      {
        "id": "C",
        "text": "Campos personalizados são exclusivamente para modificações estéticas e não adicionam metadados significativos."
      },
      {
        "id": "D",
        "text": "Campos personalizados são limitados a opções predefinidas e não podem incluir metadados definidos pelo usuário."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-5",
    "stem": "Quais são as diferentes opções disponíveis para adicionar issues e pull requests a um GitHub Project board?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#adding-issues-and-pull-requests-to-a-project",
    "options": [
      {
        "id": "A",
        "text": "Individualmente, automaticamente ou em massa."
      },
      {
        "id": "B",
        "text": "Apenas manualmente, uma de cada vez."
      },
      {
        "id": "C",
        "text": "Apenas individualmente ou em massa."
      },
      {
        "id": "D",
        "text": "Apenas automaticamente usando workflows de projeto."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-6",
    "stem": "Quais destes layouts estão disponíveis no GitHub Projects?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view",
    "options": [
      {
        "id": "A",
        "text": "Layout de tabela"
      },
      {
        "id": "B",
        "text": "Layout de quadro"
      },
      {
        "id": "C",
        "text": "Layout de roteiro"
      },
      {
        "id": "D",
        "text": "Layout Scrum"
      },
      {
        "id": "E",
        "text": "Layout Ágil"
      },
      {
        "id": "F",
        "text": "Layout de projeto"
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
    "id": "GH-900-7",
    "stem": "Qual layout do GitHub Project seria mais adequado para servir como um quadro Kanban?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-board-layout#about-the-board-layout",
    "options": [
      {
        "id": "A",
        "text": "Board layout"
      },
      {
        "id": "B",
        "text": "Table layout"
      },
      {
        "id": "C",
        "text": "Roadmap layout"
      },
      {
        "id": "D",
        "text": "Agile layout"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-8",
    "stem": "Quais desses fluxos de trabalho são automações integradas no GitHub Projects?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations",
    "options": [
      {
        "id": "A",
        "text": "Quando issues ou pull requests no seu projeto são fechados, seu status é definido como Concluído."
      },
      {
        "id": "B",
        "text": "Quando pull requests no seu projeto são mesclados, seu status é definido como Concluído."
      },
      {
        "id": "C",
        "text": "Quando issues ou pull requests são abertos no seu projeto, seu status é definido como Concluído."
      },
      {
        "id": "D",
        "text": "Quando um novo colaborador é adicionado a um repositório, as issues não atribuídas são atribuídas a ele."
      },
      {
        "id": "E",
        "text": "Quando um GitHub Action é acionado, cria-se um novo item no seu GitHub Project."
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
    "id": "GH-900-9",
    "stem": "Quais são as diferentes opções que permitem automatizar operações em seu Projeto GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project",
    "options": [
      {
        "id": "A",
        "text": "Fluxos de trabalho de projetos"
      },
      {
        "id": "B",
        "text": "GitHub GraphQL API"
      },
      {
        "id": "C",
        "text": "GitHub Actions"
      },
      {
        "id": "D",
        "text": "GitHub Copilot"
      },
      {
        "id": "E",
        "text": "GitHub Charts"
      },
      {
        "id": "F",
        "text": "GitHub Dependabot"
      },
      {
        "id": "G",
        "text": "Itens do projeto"
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
    "id": "GH-900-10",
    "stem": "Qual é a diferença entre GitHub Projects e GitHub Projects classic?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects",
    "options": [
      {
        "id": "A",
        "text": "GitHub Projects é a nova experiência do GitHub que oferece muitos novos recursos e melhorias em relação ao antigo GitHub Projects classic."
      },
      {
        "id": "B",
        "text": "GitHub Projects classic é a nova experiência do GitHub que oferece muitos novos recursos e melhorias em relação ao antigo GitHub Projects."
      },
      {
        "id": "C",
        "text": "GitHub Projects classic é uma maneira mais simples de gerenciar seus GitHub Projects e é recomendado para iniciantes."
      },
      {
        "id": "D",
        "text": "GitHub Projects classic são as versões aprimoradas que, além do GitHub Projects, oferecem alguns modelos pré-configurados, como roteiros e sprints."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-11",
    "stem": "Quais são os casos de uso para etiquetas?",
    "explanation": "• \"Atribuí-las a releases para que sejam incluídas nas notas de lançamento\": Você não pode atribuir etiquetas a releases\n• \"Atribuir etiquetas a colaboradores do repositório para indicar seu papel e permissões no projeto\": Você não pode atribuir etiquetas a colaboradores\nDocumentação: https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels",
    "options": [
      {
        "id": "A",
        "text": "Categorizar issues e pull requests"
      },
      {
        "id": "B",
        "text": "Categorizar arquivos no repositório"
      },
      {
        "id": "C",
        "text": "Atribuí-las a releases para que sejam incluídas nas notas de lançamento"
      },
      {
        "id": "D",
        "text": "Atribuir etiquetas a colaboradores do repositório para indicar seu papel e permissões no projeto"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-12",
    "stem": "Por que um proprietário de repositório gostaria de usar marcos?",
    "explanation": "• \"Para trazer automação ao repositório\": Para isso serve o GitHub Actions\n• \"Para rastrear as dependências do repositório\": Para isso servem o Dependency graph e o Dependabot\nDocumentação: https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones",
    "options": [
      {
        "id": "A",
        "text": "Para associar issues e pull requests a fases específicas de um projeto"
      },
      {
        "id": "B",
        "text": "Para ter uma visão geral de quanto trabalho resta para completar uma fase do projeto"
      },
      {
        "id": "C",
        "text": "Para trazer automação ao repositório"
      },
      {
        "id": "D",
        "text": "Para comunicar que o repositório está em um estado estável"
      },
      {
        "id": "E",
        "text": "Para rastrear as dependências do repositório"
      },
      {
        "id": "F",
        "text": "Para listar os contribuidores do repositório"
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
    "id": "GH-900-13",
    "stem": "Como você pode atribuir uma pessoa a uma issue ou pull request?",
    "explanation": "Documentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users",
    "options": [
      {
        "id": "A",
        "text": "Usando o campo Assignees na barra lateral"
      },
      {
        "id": "B",
        "text": "Adicionando uma etiqueta com o nome de usuário do GitHub deles à issue ou pull request"
      },
      {
        "id": "C",
        "text": "Mencionando eles na descrição da issue ou pull request"
      },
      {
        "id": "D",
        "text": "Não é possível atribuir uma pessoa a uma issue ou pull request."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-14",
    "stem": "Se você frequentemente se vê escrevendo o mesmo conjunto de comentários em issues ou pull requests, qual funcionalidade do GitHub você usaria para economizar tempo?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/using-saved-replies",
    "options": [
      {
        "id": "A",
        "text": "Saved replies"
      },
      {
        "id": "B",
        "text": "Modelos de comentários"
      },
      {
        "id": "C",
        "text": "Modelos de repositório"
      },
      {
        "id": "D",
        "text": "Labels\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-15",
    "stem": "Quais dessas afirmações sobre `saved replies` são verdadeiras?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/using-saved-replies",
    "options": [
      {
        "id": "A",
        "text": "Você pode criar, editar e excluir no seu perfil do GitHub na seção `Saved replies`."
      },
      {
        "id": "B",
        "text": "Saved replies são comentários que você pode reutilizar em issues e pull requests."
      },
      {
        "id": "C",
        "text": "Quando alguém comenta em sua issue ou pull request, você pode salvar a resposta deles e configurar uma notificação para lembrar de responder mais tarde."
      },
      {
        "id": "D",
        "text": "Saved replies estão disponíveis apenas para proprietários de repositórios, que podem configurar respostas automatizadas para issues e pull requests."
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
    "id": "GH-900-16",
    "stem": "Quais são algumas ações que você pode realizar em relação aos Repository Templates?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template",
    "options": [
      {
        "id": "A",
        "text": "Criar um repository template a partir de um repositório existente"
      },
      {
        "id": "B",
        "text": "Criar um novo repositório a partir de um repository template"
      },
      {
        "id": "C",
        "text": "Criar uma organização a partir de um repository template"
      },
      {
        "id": "D",
        "text": "Excluir todos os repositórios criados a partir de um repository template"
      },
      {
        "id": "E",
        "text": "Excluir todos os repositórios que não utilizam um repository template fornecido pela sua organização"
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
    "id": "GH-900-17",
    "stem": "Qual recurso no GitHub Projects permite que você crie gráficos e diagramas com facilidade para visualizar o status atual e o progresso histórico do seu projeto?",
    "explanation": "• \"Copilot Charts\": Não existe algo como Copilot Charts.\nDocumentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects",
    "options": [
      {
        "id": "A",
        "text": "Project Insights"
      },
      {
        "id": "B",
        "text": "GitHub Actions"
      },
      {
        "id": "C",
        "text": "Milestones"
      },
      {
        "id": "D",
        "text": "Copilot Charts"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-18",
    "stem": "Qual é o nome da plataforma de integração e entrega contínua (CI/CD) do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/actions/get-started/understand-github-actions",
    "options": [
      {
        "id": "A",
        "text": "GitHub Actions"
      },
      {
        "id": "B",
        "text": "GitHub Workflows"
      },
      {
        "id": "C",
        "text": "GitHub Pipelines"
      },
      {
        "id": "D",
        "text": "GitHub Projects"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-19",
    "stem": "Qual destes é um caso de uso comum para GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/actions/get-started/continuous-integration",
    "options": [
      {
        "id": "A",
        "text": "Executar testes automatizados antes de fazer merge de uma pull request"
      },
      {
        "id": "B",
        "text": "Adicionar botão de patrocínio ao seu projeto"
      },
      {
        "id": "C",
        "text": "Processamento e análise de grandes volumes de dados"
      },
      {
        "id": "D",
        "text": "Treinamento de modelos de aprendizado de máquina"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-20",
    "stem": "Os workflows do GitHub Actions são acionados por eventos. Quais destes são eventos válidos que o GitHub Actions suporta?",
    "explanation": "• \"Uma nova vulnerabilidade foi detectada em uma dependência\": Este não é um evento válido que poderia acionar um workflow. É um recurso do Dependabot.\nDocumentação: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows",
    "options": [
      {
        "id": "A",
        "text": "Um commit é enviado (push) para um branch"
      },
      {
        "id": "B",
        "text": "Um pull request é aberto"
      },
      {
        "id": "C",
        "text": "Uma alteração é feita nas configurações do repositório"
      },
      {
        "id": "D",
        "text": "Uma nova vulnerabilidade foi detectada em uma dependência"
      },
      {
        "id": "E",
        "text": "Um novo membro foi adicionado ao repositório"
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
    "id": "GH-900-21",
    "stem": "Onde você pode encontrar GitHub Actions disponíveis publicamente?",
    "explanation": "Documentação: https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace",
    "options": [
      {
        "id": "A",
        "text": "GitHub Marketplace"
      },
      {
        "id": "B",
        "text": "GitHub Public Action Storage"
      },
      {
        "id": "C",
        "text": "GitHub private repositories"
      },
      {
        "id": "D",
        "text": "GitHub Actions Project Boards"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-22",
    "stem": "Qual dessas ferramentas serve como um programador parceiro de IA que oferece sugestões no estilo autocompletar enquanto você codifica?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/quickstart#introduction",
    "options": [
      {
        "id": "A",
        "text": "GitHub Copilot"
      },
      {
        "id": "B",
        "text": "GitHub AI Aid"
      },
      {
        "id": "C",
        "text": "GitHub Partner"
      },
      {
        "id": "D",
        "text": "GitHub Assistant"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-23",
    "stem": "O GitHub Copilot é gratuito para usar?",
    "explanation": "• \"Sim, o GitHub Copilot Free está disponível para todas as contas pessoais do GitHub com uso limitado\": O GitHub Copilot Free está disponível para todas as contas pessoais do GitHub, oferecendo complementos de código e interações de chat limitados por mês.\nDocumentação: https://docs.github.com/en/copilot/get-started/plans",
    "options": [
      {
        "id": "A",
        "text": "Não, é necessário uma assinatura paga"
      },
      {
        "id": "B",
        "text": "Sim, o GitHub Copilot Free está disponível para todas as contas pessoais do GitHub com uso limitado"
      },
      {
        "id": "C",
        "text": "Sim, mas apenas para estudantes, professores e mantenedores de código aberto"
      },
      {
        "id": "D",
        "text": "Sim, mas apenas para indivíduos que trabalham em repositórios públicos"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-24",
    "stem": "Quais são as diferenças entre GitHub Copilot Individual e GitHub Copilot Business?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/get-started/plans",
    "options": [
      {
        "id": "A",
        "text": "GitHub Copilot Individual pode ser usado apenas por contas pessoais e GitHub Copilot Business é utilizado por organizações e empresas"
      },
      {
        "id": "B",
        "text": "GitHub Copilot Individual usa um modelo de IA treinado em código fonte público e GitHub Copilot Business usa um modelo de IA treinado em código fonte privado"
      },
      {
        "id": "C",
        "text": "GitHub Copilot Individual é gratuito e GitHub Copilot Business é um recurso pago"
      },
      {
        "id": "D",
        "text": "GitHub Copilot Individual só pode ser usado ao trabalhar em repositórios públicos e GitHub Copilot Business pode ser usado ao trabalhar em repositórios públicos e privados dentro de uma organização"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-25",
    "stem": "Como você pode começar a usar o GitHub Copilot após ativar a assinatura do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/get-started/quickstart",
    "options": [
      {
        "id": "A",
        "text": "Configure o GitHub Copilot em um dos IDEs suportados, como Visual Studio Code ou JetBrains, e comece a codificar"
      },
      {
        "id": "B",
        "text": "O GitHub Copilot começará automaticamente a fazer sugestões em pull requests e issues no seu repositório"
      },
      {
        "id": "C",
        "text": "Você precisa configurar uma GitHub Action que irá configurar o GitHub Copilot no seu repositório"
      },
      {
        "id": "D",
        "text": "Você precisa editar as configurações do repositório e ativar o GitHub Copilot para o repositório"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-26",
    "stem": "O que é um GitHub Codespace?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces",
    "options": [
      {
        "id": "A",
        "text": "É um ambiente de desenvolvimento pré-configurado especificamente configurado para um repositório. Ele permite que você comece imediatamente a escrever código para um projeto sem precisar configurar um ambiente de desenvolvimento local."
      },
      {
        "id": "B",
        "text": "Um GitHub Codespace é um ambiente de codificação holográfico interativo que necessita de hardware especial para ser usado."
      },
      {
        "id": "C",
        "text": "GitHub Codespace é uma ferramenta de codificação alimentada por IA que gera automaticamente código quase perfeito."
      },
      {
        "id": "D",
        "text": "GitHub Codespace é um evento anual hospedado pelo GitHub onde desenvolvedores podem se encontrar e discutir tópicos de codificação."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-27",
    "stem": "Qual recurso do GitHub permite a criação de ambientes de desenvolvimento pré-configurados onde todas as ferramentas e dependências necessárias para contribuir em um repositório estão instaladas?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/overview#benefits-of-github-codespaces",
    "options": [
      {
        "id": "A",
        "text": "GitHub Codespaces"
      },
      {
        "id": "B",
        "text": "GitHub Docker"
      },
      {
        "id": "C",
        "text": "GitHub Copilot"
      },
      {
        "id": "D",
        "text": "GitHub DevEnv"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-28",
    "stem": "Quais recursos do GitHub permitem que colaboradores do repositório trabalhem em alterações simples de código diretamente pelo navegador web?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/the-githubdev-web-based-editor",
    "options": [
      {
        "id": "A",
        "text": "GitHub Codespaces"
      },
      {
        "id": "B",
        "text": "github.dev editor"
      },
      {
        "id": "C",
        "text": "GitHub Projects"
      },
      {
        "id": "D",
        "text": "GitHub Dependabot"
      },
      {
        "id": "E",
        "text": "GitHub Remote"
      },
      {
        "id": "F",
        "text": "GitHub Online"
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
    "id": "GH-900-29",
    "stem": "Quais são as diferentes fases possíveis do ciclo de vida de um GitHub Codespace?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle",
    "options": [
      {
        "id": "A",
        "text": "Criar, Reconstruir, Parar, Excluir"
      },
      {
        "id": "B",
        "text": "Criar, Excluir"
      },
      {
        "id": "C",
        "text": "Criar, Parar, Excluir"
      },
      {
        "id": "D",
        "text": "Criar, Reconstruir, Excluir"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-30",
    "stem": "Se você parar o ambiente do seu GitHub Codespace, poderá retornar às alterações mais tarde se não as tiver feito commit?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/getting-started/understanding-the-codespace-lifecycle#stopping-a-codespace",
    "options": [
      {
        "id": "A",
        "text": "Sim, esse é o comportamento padrão ao parar e depois iniciar um GitHub Codespace"
      },
      {
        "id": "B",
        "text": "Não, essas alterações serão perdidas. Você precisa fazer commit delas antes de parar o Codespace."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-31",
    "stem": "Quais dessas afirmações sobre o ciclo de vida do GitHub Codespaces são verdadeiras?",
    "explanation": "• \"Se você fechar a aba do navegador onde seu Codespace estava em execução, o Codespace será parado automaticamente.\": Fechar a aba do navegador não para o Codespace e os processos continuam sendo executados. Se você apenas fechou a aba, o Codespace será interrompido após atingir o período de inatividade configurado.\nDocumentação: https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle",
    "options": [
      {
        "id": "A",
        "text": "O ciclo de vida de um Codespace começa quando você cria um Codespace e termina quando você o exclui."
      },
      {
        "id": "B",
        "text": "Você pode parar e reiniciar um Codespace sem perder as alterações feitas no seu projeto."
      },
      {
        "id": "C",
        "text": "Você pode desconectar e reconectar a um Codespace ativo sem afetar seus processos em execução."
      },
      {
        "id": "D",
        "text": "Você pode parar e reiniciar um Codespace sem afetar seus processos em execução."
      },
      {
        "id": "E",
        "text": "Se você criar outro Codespace em um branch que já possui um Codespace em execução, o Codespace original será excluído."
      },
      {
        "id": "F",
        "text": "Se você fechar a aba do navegador onde seu Codespace estava em execução, o Codespace será parado automaticamente."
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
    "id": "GH-900-32",
    "stem": "Seu projeto requer hardware apropriado para ser executado. Você pode personalizar a quantidade de núcleos de CPU que serão alocados para o seu ambiente GitHub Codespace?",
    "explanation": "• \"Não, os GitHub Codespaces são hospedados no Microsoft Azure e não temos controle sobre o hardware que eles utilizam.\": Os GitHub Codespaces são, de fato, hospedados no Microsoft Azure, mas você pode configurar o tipo de máquina a ser usado.\nDocumentação: https://docs.github.com/en/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace",
    "options": [
      {
        "id": "A",
        "text": "Sim, você pode escolher um tipo de máquina alternativo, seja ao criar um codespace ou a qualquer momento após tê-lo criado."
      },
      {
        "id": "B",
        "text": "Não, os GitHub Codespaces são hospedados no Microsoft Azure e não temos controle sobre o hardware que eles utilizam."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-33",
    "stem": "Como você pode personalizar o ambiente que é executado no GitHub Codespaces?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers",
    "options": [
      {
        "id": "A",
        "text": "Criando um arquivo de configuração `.devcontainer/devcontainer.json`"
      },
      {
        "id": "B",
        "text": "Criando um Dockerfile personalizado na raiz do seu repositório"
      },
      {
        "id": "C",
        "text": "Criando um arquivo de configuração `.github/codespaces.yml`"
      },
      {
        "id": "D",
        "text": "Criando imagens de máquina personalizadas com o repositório instalado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-34",
    "stem": "O que é um deep link do GitHub Codespace?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces#configuring-more-options",
    "options": [
      {
        "id": "A",
        "text": "É um link que aponta para uma página específica do GitHub.com que permite criar um novo GitHub Codespace e selecionar uma configuração específica"
      },
      {
        "id": "B",
        "text": "É um link entre o GitHub Codespace e o repositório que mantém o Codespace sincronizado com as alterações no repositório"
      },
      {
        "id": "C",
        "text": "É um link para o GitHub Codespace mais recente que foi criado para o repositório"
      },
      {
        "id": "D",
        "text": "É um link para o GitHub Codespace mais recente que você usou em qualquer repositório"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-35",
    "stem": "Quem deve habilitar a autenticação em dois fatores no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication",
    "options": [
      {
        "id": "A",
        "text": "Todos os usuários do GitHub"
      },
      {
        "id": "B",
        "text": "Não é recomendado usar 2FA no GitHub para ninguém"
      },
      {
        "id": "C",
        "text": "Proprietários de GitHub Organization"
      },
      {
        "id": "D",
        "text": "Usuários do GitHub Enterprise Server"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-36",
    "stem": "O que são Enterprise Managed Users?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-enterprise-managed-users",
    "options": [
      {
        "id": "A",
        "text": "É um recurso do GitHub Enterprise que permite gerenciar o acesso dos usuários a partir de um provedor de identidade externo, como Azure AD ou Okta"
      },
      {
        "id": "B",
        "text": "É um usuário de suporte do GitHub Enterprise que pode ser usado para gerenciar sua Enterprise pelo Suporte do GitHub mediante solicitação"
      },
      {
        "id": "C",
        "text": "É uma conta de usuário compartilhada que pode ser utilizada por vários usuários na sua Enterprise"
      },
      {
        "id": "D",
        "text": "É uma conta de usuário sem acesso à interface web do GitHub, usada apenas para tarefas de automação no seu GitHub Enterprise"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-37",
    "stem": "Quais são os diferentes níveis de permissão para um repositório pertencente a uma conta pessoal?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository",
    "options": [
      {
        "id": "A",
        "text": "proprietário do repositório"
      },
      {
        "id": "B",
        "text": "colaborador"
      },
      {
        "id": "C",
        "text": "gerente de cobrança"
      },
      {
        "id": "D",
        "text": "gerente de segurança"
      },
      {
        "id": "E",
        "text": "proprietário do projeto"
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
    "id": "GH-900-38",
    "stem": "Qual destes NÃO é um papel em uma Organização do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Organization architect"
      },
      {
        "id": "B",
        "text": "Organization owner"
      },
      {
        "id": "C",
        "text": "Organization member"
      },
      {
        "id": "D",
        "text": "Organization moderator"
      },
      {
        "id": "E",
        "text": "Billing manager"
      },
      {
        "id": "F",
        "text": "Security manager"
      },
      {
        "id": "G",
        "text": "GitHub App manager"
      },
      {
        "id": "H",
        "text": "Outside collaborator"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-39",
    "stem": "Você pode desativar a aba de issues em um repositório?",
    "explanation": "• \"Não\": Recursos como issues, wikis ou projetos podem ser desativados em um repositório nas configurações do repositório\nDocumentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-40",
    "stem": "Onde você pode desativar recursos do repositório, como issues, wikis ou projetos, em um repositório que você possui?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository",
    "options": [
      {
        "id": "A",
        "text": "Nas configurações do repositório"
      },
      {
        "id": "B",
        "text": "No arquivo de configuração `.github/settings.yml`"
      },
      {
        "id": "C",
        "text": "Esses recursos não podem ser desativados"
      },
      {
        "id": "D",
        "text": "Nas configurações da sua conta"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-41",
    "stem": "Quais são as diferentes opções de visibilidade do repositório?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility",
    "options": [
      {
        "id": "A",
        "text": "Private, Public e Internal (Enterprise only)"
      },
      {
        "id": "B",
        "text": "Personal, Public e Internal (Enterprise only)"
      },
      {
        "id": "C",
        "text": "Private e Public"
      },
      {
        "id": "D",
        "text": "Personal e Public"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-42",
    "stem": "Qual é o propósito de um arquivo `CODEOWNERS`?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
    "options": [
      {
        "id": "A",
        "text": "O arquivo `CODEOWNERS` permite que você defina indivíduos ou equipes responsáveis por áreas específicas do código ou por sua totalidade."
      },
      {
        "id": "B",
        "text": "O arquivo `CODEOWNERS` contém informações sobre as taxas e condições de licenciamento de software sob as quais o código pode ser utilizado."
      },
      {
        "id": "C",
        "text": "O arquivo `CODEOWNERS` inclui informações sobre a qualidade do código e sua manutenibilidade."
      },
      {
        "id": "D",
        "text": "O arquivo `CODEOWNERS` contém detalhes de contato dos proprietários do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-43",
    "stem": "Como você pode exigir a aprovação das verificações de status antes de mesclar um pull request na branch `main`?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#about-branch-protection-settings",
    "options": [
      {
        "id": "A",
        "text": "Criando uma regra de proteção de branch"
      },
      {
        "id": "B",
        "text": "Usando GitHub Actions"
      },
      {
        "id": "C",
        "text": "Executando testes localmente antes de fazer o push para o repositório remoto"
      },
      {
        "id": "D",
        "text": "Tornando o repositório privado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-44",
    "stem": "Quais dessas ações garantirão que, antes de qualquer envio para a branch `main`, as alterações sejam aprovadas por, pelo menos, duas pessoas?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging",
    "options": [
      {
        "id": "A",
        "text": "Criar uma regra de proteção de branch para a branch `main`"
      },
      {
        "id": "B",
        "text": "Na regra de proteção de branch, exigir um pull request antes de mesclar"
      },
      {
        "id": "C",
        "text": "Na regra de proteção de branch, exigir pelo menos 2 aprovações antes de mesclar um pull request"
      },
      {
        "id": "D",
        "text": "Criar uma regra de proteção de implantação para a branch `main`"
      },
      {
        "id": "E",
        "text": "Na regra de proteção de implantação, exigir pelo menos 2 aprovações antes de mesclar um pull request"
      },
      {
        "id": "F",
        "text": "Configurar um arquivo CODEOWNERS no repositório"
      },
      {
        "id": "G",
        "text": "Garantir que as verificações de status estejam passando antes de mesclar um pull request para a branch `main`"
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
    "id": "GH-900-45",
    "stem": "O que você pode encontrar na aba de segurança de um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository",
    "options": [
      {
        "id": "A",
        "text": "Uma visão geral de segurança daquele repositório, como vulnerabilidades em dependências, resultados de varredura de código e alertas de varredura de segredos"
      },
      {
        "id": "B",
        "text": "Uma lista de todas as GitHub Issues que foram abertas no repositório por razões de segurança"
      },
      {
        "id": "C",
        "text": "Uma lista de todas as melhores práticas que o GitHub recomenda para proteger seu software"
      },
      {
        "id": "D",
        "text": "Informações de contato da equipe de segurança do GitHub"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-46",
    "stem": "O que é CodeQL?",
    "explanation": "Documentação: https://codeql.github.com/",
    "options": [
      {
        "id": "A",
        "text": "Uma ferramenta de análise de código"
      },
      {
        "id": "B",
        "text": "Uma linguagem de programação"
      },
      {
        "id": "C",
        "text": "Um editor de texto"
      },
      {
        "id": "D",
        "text": "Um sistema de controle de versão"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-47",
    "stem": "Qual ferramenta ajuda a manter as dependências do repositório atualizadas?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain",
    "options": [
      {
        "id": "A",
        "text": "Dependabot"
      },
      {
        "id": "B",
        "text": "GitHub Copilot"
      },
      {
        "id": "C",
        "text": "CodeQL"
      },
      {
        "id": "D",
        "text": "GitHub Actions"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-48",
    "stem": "O que são Repository Insights?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/about-repository-graphs",
    "options": [
      {
        "id": "A",
        "text": "É um local onde você pode ver dados sobre o repositório, como frequência de código, lista dos colaboradores mais ativos e mais."
      },
      {
        "id": "B",
        "text": "Repository Insights é um recurso que permite ver os segredos do repositório e os alertas de varredura de código."
      },
      {
        "id": "C",
        "text": "É uma lista de boas práticas a seguir ao administrar um repositório."
      },
      {
        "id": "D",
        "text": "É um recurso que permite ver a visão geral de segurança do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-49",
    "stem": "Quem são os colaboradores de repositório?",
    "explanation": "• \"Colaboradores são pessoas que fizeram contribuições de código para um repositório.\": Isso são contribuidores. Você pode ser um colaborador em um repositório sem ter contribuído para ele. Você também pode contribuir para um repositório sem ser um colaborador, fazendo um fork do repositório e enviando um pull request.\n• \"Colaboradores são pessoas que financiaram um repositório.\": Isso são patrocinadores.\nDocumentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository",
    "options": [
      {
        "id": "A",
        "text": "Colaboradores são pessoas que receberam acesso de escrita a um repositório."
      },
      {
        "id": "B",
        "text": "Colaboradores são pessoas que fizeram contribuições de código para um repositório."
      },
      {
        "id": "C",
        "text": "Colaboradores são pessoas que financiaram um repositório."
      },
      {
        "id": "D",
        "text": "Colaboradores são pessoas que criaram issues ou pull requests em um repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-50",
    "stem": "Como você pode trabalhar junto com um amigo em um repositório que você criou na sua conta pessoal do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository",
    "options": [
      {
        "id": "A",
        "text": "Vá para as configurações do repositório e convide-o como colaborador"
      },
      {
        "id": "B",
        "text": "Adicione-o ao arquivo `CODEOWNERS`"
      },
      {
        "id": "C",
        "text": "Não é possível trabalhar juntos em repositórios pessoais. Você só pode fazer isso em repositórios de organizações."
      },
      {
        "id": "D",
        "text": "Forneça ao seu amigo suas credenciais do GitHub"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-51",
    "stem": "O que são equipes do GitHub?",
    "explanation": "• \"É uma forma de gerenciar o acesso a repositórios pessoais do GitHub para muitos usuários de uma só vez.\": Repositórios pessoais não podem ser compartilhados com equipes, apenas com colaboradores individuais.\nDocumentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "É um grupo de usuários do GitHub da mesma organização."
      },
      {
        "id": "B",
        "text": "É uma versão do Microsoft Teams para o GitHub."
      },
      {
        "id": "C",
        "text": "É uma forma de gerenciar o acesso a repositórios pessoais do GitHub para muitos usuários de uma só vez."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-52",
    "stem": "Qual é o papel de um moderador da organização?",
    "explanation": "• \"Moderadores são membros da organização que têm acesso completo à organização.\": Isso é atribuição dos proprietários da organização\n• \"Moderadores são membros da organização que podem gerenciar as configurações de cobrança para sua organização, como informações de pagamento.\": Isso é atribuição dos gerentes de cobrança\n• \"Moderadores são membros da organização que podem visualizar alertas de segurança e gerenciar configurações de segurança de código em toda a organização, bem como possuem permissões de leitura para todos os repositórios da organização.\": Isso é atribuição dos gerentes de segurança\nDocumentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Moderadores são membros da organização que, além de suas permissões como membros, têm permissão para bloquear e desbloquear colaboradores que não são membros, definir limites de interação e ocultar comentários em repositórios públicos pertencentes à organização."
      },
      {
        "id": "B",
        "text": "Moderadores são membros da organização que têm acesso completo à organização."
      },
      {
        "id": "C",
        "text": "Moderadores são membros da organização que podem gerenciar as configurações de cobrança para sua organização, como informações de pagamento."
      },
      {
        "id": "D",
        "text": "Moderadores são membros da organização que podem visualizar alertas de segurança e gerenciar configurações de segurança de código em toda a organização, bem como possuem permissões de leitura para todos os repositórios da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-53",
    "stem": "Qual é o papel de um gerente de segurança da organização?",
    "explanation": "• \"Os gerentes de segurança são membros da organização que, além de suas permissões como membros, têm permissão para bloquear e desbloquear contribuidores que não são membros, definir limites de interação e ocultar comentários em repositórios públicos pertencentes à organização.\": Esses são os moderadores\n• \"Os gerentes de segurança são membros da organização que têm acesso completo à organização.\": Esses são os proprietários da organização\n• \"Os gerentes de segurança são membros da organização que podem gerenciar as configurações de cobrança da sua organização, como informações de pagamento.\": Esses são os gerentes de cobrança\nDocumentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Os gerentes de segurança são membros da organização que podem visualizar alertas de segurança e gerenciar configurações de segurança de código em toda a organização, bem como permissões de leitura para todos os repositórios na organização."
      },
      {
        "id": "B",
        "text": "Os gerentes de segurança são membros da organização que, além de suas permissões como membros, têm permissão para bloquear e desbloquear contribuidores que não são membros, definir limites de interação e ocultar comentários em repositórios públicos pertencentes à organização."
      },
      {
        "id": "C",
        "text": "Os gerentes de segurança são membros da organização que têm acesso completo à organização."
      },
      {
        "id": "D",
        "text": "Os gerentes de segurança são membros da organização que podem gerenciar as configurações de cobrança da sua organização, como informações de pagamento."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-54",
    "stem": "Qual dessas definições descreve melhor o software de código aberto?",
    "explanation": "Documentação: https://opensource.com/resources/what-open-source",
    "options": [
      {
        "id": "A",
        "text": "É um software com código-fonte que qualquer pessoa pode inspecionar, modificar e melhorar."
      },
      {
        "id": "B",
        "text": "É gratuito para usar para qualquer finalidade, desde que você assine a licença de código aberto."
      },
      {
        "id": "C",
        "text": "É gratuito para uso pessoal, desde que você não obtenha lucro com ele."
      },
      {
        "id": "D",
        "text": "É um software com código-fonte no qual qualquer pessoa pode confiar."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-55",
    "stem": "O que é o programa GitHub Sponsors?",
    "explanation": "Documentação: https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors",
    "options": [
      {
        "id": "A",
        "text": "É uma forma de apoiar financeiramente os desenvolvedores de projetos de código aberto"
      },
      {
        "id": "B",
        "text": "É um grupo de empresas que financiam o GitHub"
      },
      {
        "id": "C",
        "text": "É um programa que ajuda as pessoas a encontrar um emprego na indústria de tecnologia"
      },
      {
        "id": "D",
        "text": "É um programa onde desenvolvedores altamente qualificados se voluntariam para ajudar os estudantes a aprenderem a usar o GitHub"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-56",
    "stem": "No seu painel pessoal do GitHub, você recebeu uma notificação de que o usuário `octocat` criou um novo repositório `octocat/my-repo`. Por que você recebeu essa notificação?",
    "explanation": "Documentação: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community",
    "options": [
      {
        "id": "A",
        "text": "Porque você está seguindo o usuário `octocat`"
      },
      {
        "id": "B",
        "text": "Porque você visitou recentemente o perfil do usuário `octocat`"
      },
      {
        "id": "C",
        "text": "Porque você contribuiu para o repositório `octocat/my-repo`"
      },
      {
        "id": "D",
        "text": "Porque você marcou com estrela o repositório `octocat/my-repo`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-57",
    "stem": "Qual é o efeito de você seguir um usuário no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/quickstart/be-social#following-people",
    "options": [
      {
        "id": "A",
        "text": "Você receberá notificações no seu painel pessoal sobre a atividade pública deles."
      },
      {
        "id": "B",
        "text": "Esse usuário receberá notificações no painel pessoal dele sobre sua atividade pública."
      },
      {
        "id": "C",
        "text": "Você terá acesso aos repositórios privados deles assim que a solicitação de seguimento for aceita."
      },
      {
        "id": "D",
        "text": "Você poderá participar de conversas privadas com eles usando o GitHub Chat."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-58",
    "stem": "O que é o GitHub Marketplace?",
    "explanation": "• \"GitHub Marketplace é um lugar onde você pode patrocinar desenvolvedores de código aberto com base em uma assinatura.\": Isso é o GitHub Sponsors.\nDocumentação: https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps",
    "options": [
      {
        "id": "A",
        "text": "GitHub Marketplace é um lugar onde os desenvolvedores podem encontrar ferramentas que ajudam a construir software diretamente junto com seu código."
      },
      {
        "id": "B",
        "text": "GitHub Marketplace é um lugar onde as empresas podem encontrar desenvolvedores para contratar."
      },
      {
        "id": "C",
        "text": "GitHub Marketplace é um lugar onde os desenvolvedores oferecem a venda de propriedade de seus repositórios."
      },
      {
        "id": "D",
        "text": "GitHub Marketplace é um lugar onde você pode patrocinar desenvolvedores de código aberto com base em uma assinatura."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-59",
    "stem": "O que é InnerSource?",
    "explanation": "Documentação: https://github.com/resources/articles/innersource",
    "options": [
      {
        "id": "A",
        "text": "InnerSource refere-se à prática de aplicar princípios de código aberto dentro de uma organização"
      },
      {
        "id": "B",
        "text": "InnerSource refere-se à prática de aplicar princípios de código aberto em projetos pessoais"
      },
      {
        "id": "C",
        "text": "InnerSource refere-se à base de conhecimento interna de uma organização sobre o projeto em que estão trabalhando."
      },
      {
        "id": "D",
        "text": "InnerSource é uma ferramenta que permite às organizações ver quais projetos de código aberto estão usando em seu código."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-60",
    "stem": "Qual destas é uma prática que incentiva a colaboração, visibilidade e compartilhamento de código entre diferentes equipes dentro de uma organização?",
    "explanation": "Documentação: https://github.com/resources/articles/innersource",
    "options": [
      {
        "id": "A",
        "text": "InnerSource"
      },
      {
        "id": "B",
        "text": "OpenSource"
      },
      {
        "id": "C",
        "text": "Continuous Integration"
      },
      {
        "id": "D",
        "text": "Git Flow\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-61",
    "stem": "O que é um fork no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks",
    "options": [
      {
        "id": "A",
        "text": "Um fork é uma cópia pessoal de um repositório de outro usuário que vive na sua conta."
      },
      {
        "id": "B",
        "text": "Um fork é o lugar onde um branch se divide em pelo menos dois outros branches."
      },
      {
        "id": "C",
        "text": "Um fork é o estado de um repositório quando ele não está atualizado com o repositório remoto."
      },
      {
        "id": "D",
        "text": "Um fork é um branch que não está atualizado com o branch padrão do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-62",
    "stem": "Quais dessas opções podem tornar um repositório mais descobrível?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository",
    "options": [
      {
        "id": "A",
        "text": "Uma coleção bem elaborada de documentos markdown como `README.md`, `CONTRIBUTING.md` e outros."
      },
      {
        "id": "B",
        "text": "Dar ao repositório um nome descritivo"
      },
      {
        "id": "C",
        "text": "Configurar tópicos para o repositório"
      },
      {
        "id": "D",
        "text": "Definir pipelines adequados de CI/CD"
      },
      {
        "id": "E",
        "text": "Cobrir o software do repositório com testes"
      },
      {
        "id": "F",
        "text": "Usar uma ampla gama de GitHub Apps e GitHub Actions"
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
    "id": "GH-900-63",
    "stem": "Como você pode definir protocolos orientadores para usuários que pretendem relatar bugs ou propor novos recursos no seu repositório, para que saibam quais informações preencher?",
    "explanation": "Documentação: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates",
    "options": [
      {
        "id": "A",
        "text": "Criar modelos de issue"
      },
      {
        "id": "B",
        "text": "Adicionar labels às issues que eles criam"
      },
      {
        "id": "C",
        "text": "Configurar GitHub Projects"
      },
      {
        "id": "D",
        "text": "Ter um exemplo de issue no repositório que seja fácil de copiar e que nunca seja fechado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-64",
    "stem": "O que é um modelo de pull request?",
    "explanation": "Documentação: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository",
    "options": [
      {
        "id": "A",
        "text": "O modelo de pull request é um arquivo que define a estrutura padrão do pull request que os contribuidores do projeto verão automaticamente ao abrir um pull request."
      },
      {
        "id": "B",
        "text": "O modelo de pull request é um pull request gerado automaticamente quando um novo branch é criado."
      },
      {
        "id": "C",
        "text": "O modelo de pull request é um pull request escolhido pelo proprietário do repositório como referência ao criar novos pull requests."
      },
      {
        "id": "D",
        "text": "O modelo de pull request é um exemplo de como as alterações no código devem ser apresentadas em um pull request em um determinado repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-65",
    "stem": "Qual destas afirmações descreve melhor um sistema de controle de versão?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-git/about-git#about-version-control-and-git",
    "options": [
      {
        "id": "A",
        "text": "É um sistema que rastreia o histórico de alterações feitas em uma coleção de arquivos."
      },
      {
        "id": "B",
        "text": "É um sistema que utiliza a ferramenta de linha de comando git."
      },
      {
        "id": "C",
        "text": "É um sistema que permite criar uma cópia local do código-fonte de um projeto."
      },
      {
        "id": "D",
        "text": "É um sistema que permite rastrear o que as pessoas instalam em seus computadores."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-66",
    "stem": "Qual é o significado da palavra `distributed` em um sistema de controle de versão distribuído?",
    "explanation": "Documentação: https://about.gitlab.com/topics/version-control/benefits-distributed-version-control-system/",
    "options": [
      {
        "id": "A",
        "text": "Significa que os desenvolvedores podem ter uma cópia completa do repositório e seu histórico em suas máquinas locais."
      },
      {
        "id": "B",
        "text": "Significa que as tarefas entre os membros da equipe que utilizam o sistema são facilmente distribuídas."
      },
      {
        "id": "C",
        "text": "O termo se refere ao compartilhamento ponto a ponto de arquivos de código entre os usuários."
      },
      {
        "id": "D",
        "text": "Significa que a base de código está distribuída entre vários servidores para balanceamento de carga."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-67",
    "stem": "Qual dessas opções descreve melhor o Git?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-git/about-git#about-version-control-and-git",
    "options": [
      {
        "id": "A",
        "text": "Git é um sistema de controle de versão distribuído."
      },
      {
        "id": "B",
        "text": "Git é um sistema de controle de versão centralizado."
      },
      {
        "id": "C",
        "text": "Git é o produto do GitHub que permite controle de versão."
      },
      {
        "id": "D",
        "text": "Git é um sistema de compartilhamento de arquivos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-68",
    "stem": "Qual destas afirmações descreve melhor o que é o GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-git/about-git#how-github-works",
    "options": [
      {
        "id": "A",
        "text": "GitHub é uma plataforma que utiliza o Git como sua tecnologia central e adiciona recursos que facilitam a colaboração e o gerenciamento de código."
      },
      {
        "id": "B",
        "text": "GitHub é um sistema de controle de versão distribuído com recursos que facilitam a colaboração em projetos."
      },
      {
        "id": "C",
        "text": "GitHub é uma plataforma de compartilhamento de arquivos com recursos que facilitam a colaboração em projetos usando controle de versão centralizado."
      },
      {
        "id": "D",
        "text": "GitHub é uma plataforma moderna de CI/CD com recursos que ajudam a impulsionar o desenvolvimento rápido de produtos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-69",
    "stem": "Qual é a relação entre Git e GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-git/about-git",
    "options": [
      {
        "id": "A",
        "text": "Git é um sistema de controle de versão distribuído e o GitHub é uma plataforma que usa o Git como sua tecnologia principal."
      },
      {
        "id": "B",
        "text": "GitHub é um sistema de controle de versão distribuído e o Git é uma plataforma que usa o GitHub como sua tecnologia principal."
      },
      {
        "id": "C",
        "text": "Git é um sistema de compartilhamento de arquivos e o GitHub é uma plataforma que usa o Git como sua tecnologia principal."
      },
      {
        "id": "D",
        "text": "GitHub é um sistema de compartilhamento de arquivos e o Git é uma plataforma que usa o GitHub como sua tecnologia principal."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-70",
    "stem": "O que é um repositório no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories",
    "options": [
      {
        "id": "A",
        "text": "É um lugar onde você pode armazenar seu código, seus arquivos e o histórico de revisões de cada arquivo."
      },
      {
        "id": "B",
        "text": "É um lugar onde você pode armazenar suas imagens Docker ou pacotes NPM."
      },
      {
        "id": "C",
        "text": "É um editor de código visual que permite editar seu código-fonte no navegador."
      },
      {
        "id": "D",
        "text": "Um repositório no GitHub é uma sala de bate-papo onde os desenvolvedores podem discutir questões relacionadas ao código."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-71",
    "stem": "O que é um git commit?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits",
    "options": [
      {
        "id": "A",
        "text": "Um commit é uma captura de um repositório em um momento específico."
      },
      {
        "id": "B",
        "text": "Um commit refere-se a um arquivo novo ou atualizado em um repositório."
      },
      {
        "id": "C",
        "text": "Um commit refere-se às alterações de código feitas em um repositório em um pull request."
      },
      {
        "id": "D",
        "text": "Um commit é um texto legível que descreve as alterações feitas em um repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-72",
    "stem": "Qual recurso do Git permite que os desenvolvedores trabalhem simultaneamente na mesma base de código sem causar conflitos entre si?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches",
    "options": [
      {
        "id": "A",
        "text": "branch"
      },
      {
        "id": "B",
        "text": "commit"
      },
      {
        "id": "C",
        "text": "remote"
      },
      {
        "id": "D",
        "text": "working tree\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-73",
    "stem": "O que é o GitHub Flow?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-github/github-flow",
    "options": [
      {
        "id": "A",
        "text": "Refere-se a um fluxo de trabalho baseado em branches onde os desenvolvedores criam uma branch para cada nova alteração em que estão trabalhando e, em seguida, abrem pull requests para que seu código seja revisado, testado e mesclado na branch principal."
      },
      {
        "id": "B",
        "text": "É uma prática onde, sempre que um commit é enviado para a branch principal, uma nova release é automaticamente criada e implantada."
      },
      {
        "id": "C",
        "text": "É uma prática onde, sempre que um commit é enviado para a branch principal, um conjunto de pipelines de CI/CD é acionado para executar testes e validar as alterações de código."
      },
      {
        "id": "D",
        "text": "Refere-se a um fluxo de trabalho de uma única branch onde os desenvolvedores trabalham em suas funcionalidades na branch `master` e, em seguida, têm seu código de funcionalidade revisado, testado e commitado."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-74",
    "stem": "O que é um plano GitHub Pro?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-pro",
    "options": [
      {
        "id": "A",
        "text": "GitHub Pro é um plano pago para contas pessoais que oferece recursos adicionais em comparação ao plano gratuito."
      },
      {
        "id": "B",
        "text": "GitHub Pro é um plano pago para organizações que oferece recursos adicionais em comparação ao plano gratuito para organizações."
      },
      {
        "id": "C",
        "text": "GitHub Pro é um caminho de certificação após o qual você se torna um GitHub Pro."
      },
      {
        "id": "D",
        "text": "GitHub Pro é um plano pago para empresas hospedarem o GitHub em seus próprios servidores."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-75",
    "stem": "Existe uma versão gratuita do GitHub para organizações?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-free-for-organizations",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-76",
    "stem": "Quais são os diferentes planos de preços do GitHub para contas de organização?",
    "explanation": "Documentação: https://github.com/pricing",
    "options": [
      {
        "id": "A",
        "text": "Free"
      },
      {
        "id": "B",
        "text": "Team"
      },
      {
        "id": "C",
        "text": "Enterprise"
      },
      {
        "id": "D",
        "text": "Pro"
      },
      {
        "id": "E",
        "text": "Personal"
      },
      {
        "id": "F",
        "text": "Business"
      },
      {
        "id": "G",
        "text": "Advanced\n---"
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
    "id": "GH-900-77",
    "stem": "Qual plano de preços do GitHub oferece implantação auto-hospedada do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server@3.8/admin/overview/about-github-enterprise-server",
    "options": [
      {
        "id": "A",
        "text": "Enterprise"
      },
      {
        "id": "B",
        "text": "Pro"
      },
      {
        "id": "C",
        "text": "Team"
      },
      {
        "id": "D",
        "text": "Free"
      },
      {
        "id": "E",
        "text": "Todos eles"
      },
      {
        "id": "F",
        "text": "Nenhum deles"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-78",
    "stem": "Em qual plano de preços do GitHub você pode criar um número ilimitado de repositórios públicos?",
    "explanation": "Documentação: https://github.com/pricing",
    "options": [
      {
        "id": "A",
        "text": "Todos eles"
      },
      {
        "id": "B",
        "text": "Enterprise"
      },
      {
        "id": "C",
        "text": "Pro"
      },
      {
        "id": "D",
        "text": "Team"
      },
      {
        "id": "E",
        "text": "Team e Enterprise"
      },
      {
        "id": "F",
        "text": "Free"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-79",
    "stem": "Quais são as diferentes opções de implantação para o GitHub Enterprise?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-for-enterprises#about-deployment-options",
    "options": [
      {
        "id": "A",
        "text": "GitHub Enterprise Cloud"
      },
      {
        "id": "B",
        "text": "GitHub Enterprise Server"
      },
      {
        "id": "C",
        "text": "GitHub Enterprise Pro"
      },
      {
        "id": "D",
        "text": "GitHub Enterprise Team"
      },
      {
        "id": "E",
        "text": "GitHub Enterprise Free"
      },
      {
        "id": "F",
        "text": "GitHub Enterprise Advanced\n---"
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
    "id": "GH-900-80",
    "stem": "Quais dessas afirmações sobre as opções de implantação do GitHub Enterprise são verdadeiras?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-for-enterprises#about-deployment-options",
    "options": [
      {
        "id": "A",
        "text": "GitHub Enterprise Cloud é um conjunto de funcionalidades avançadas no GitHub.com"
      },
      {
        "id": "B",
        "text": "GitHub Enterprise Server é uma plataforma auto-hospedada que opera na infraestrutura da empresa"
      },
      {
        "id": "C",
        "text": "GitHub Enterprise Server é um conjunto de funcionalidades avançadas no GitHub.com"
      },
      {
        "id": "D",
        "text": "GitHub Enterprise Cloud é uma plataforma hospedada na nuvem que opera na infraestrutura de nuvem da empresa"
      },
      {
        "id": "E",
        "text": "GitHub Enterprise Cloud é uma plataforma auto-hospedada que opera na infraestrutura da empresa"
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
    "id": "GH-900-81",
    "stem": "O que são repositórios fixados no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile",
    "options": [
      {
        "id": "A",
        "text": "Repositórios fixados são repositórios que você fixou no topo do seu perfil do GitHub."
      },
      {
        "id": "B",
        "text": "Repositórios fixados são repositórios que o GitHub promove. Há novos repositórios fixados a cada mês."
      },
      {
        "id": "C",
        "text": "Repositórios fixados são repositórios que foram temporariamente ou indefinidamente suspensos pelo GitHub."
      },
      {
        "id": "D",
        "text": "Repositórios fixados são repositórios que foram marcados como favoritos pelos usuários do GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-82",
    "stem": "Quais desses arquivos podem personalizar seu perfil do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme",
    "options": [
      {
        "id": "A",
        "text": "um arquivo de perfil `README.md`"
      },
      {
        "id": "B",
        "text": "um arquivo de perfil `CONTRIBUTING.md`"
      },
      {
        "id": "C",
        "text": "o perfil não é customizável através de arquivos, mas pelas configurações da conta"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-83",
    "stem": "Qual linguagem é usada para escrever comentários em issues e pull requests no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
    "options": [
      {
        "id": "A",
        "text": "Markdown"
      },
      {
        "id": "B",
        "text": "HTML"
      },
      {
        "id": "C",
        "text": "AsciiDoc"
      },
      {
        "id": "D",
        "text": "reStructuredText"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-84",
    "stem": "Quais são os comandos de barra do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/about-slash-commands",
    "options": [
      {
        "id": "A",
        "text": "É uma forma de inserir rapidamente Markdown complexo em seus comentários e descrições de pull request ou issue."
      },
      {
        "id": "B",
        "text": "É uma forma de automatizar GitHub Actions."
      },
      {
        "id": "C",
        "text": "É outro nome para o GitHub CLI."
      },
      {
        "id": "D",
        "text": "É uma maneira de corrigir rapidamente problemas de formatação de código nas alterações de código do seu pull request."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-85",
    "stem": "Como o GitHub ajuda as pessoas que querem escrever comentários adequados em issues e pull requests, mas não conhecem a sintaxe do Markdown?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github#text-formatting-toolbar",
    "options": [
      {
        "id": "A",
        "text": "Existe uma barra de ferramentas de formatação de texto nos formulários de comentários de issues e pull requests que gera Markdown para você."
      },
      {
        "id": "B",
        "text": "Fornecendo um guia de referência rápida de Markdown."
      },
      {
        "id": "C",
        "text": "O GitHub converte automaticamente HTML em Markdown em comentários de issues e pull requests."
      },
      {
        "id": "D",
        "text": "Os pull requests e issues do GitHub não suportam Markdown."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-86",
    "stem": "O que é o GitHub Desktop?",
    "explanation": "Documentação: https://docs.github.com/en/desktop",
    "options": [
      {
        "id": "A",
        "text": "É um aplicativo GUI para trabalhar com Git e GitHub no seu computador."
      },
      {
        "id": "B",
        "text": "É uma versão auto-hospedada do GitHub que você pode instalar em seus próprios servidores ou computador pessoal."
      },
      {
        "id": "C",
        "text": "É um plano de preços do GitHub para contas pessoais que oferece recursos adicionais além do plano gratuito."
      },
      {
        "id": "D",
        "text": "É um editor online que permite trabalhar no seu repositório diretamente no navegador."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-87",
    "stem": "O que é o GitHub Mobile?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-github/github-mobile",
    "options": [
      {
        "id": "A",
        "text": "É um aplicativo móvel para iOS e Android que permite trabalhar com o GitHub a partir do seu celular."
      },
      {
        "id": "B",
        "text": "É um serviço que permite testar seus aplicativos móveis em dispositivos reais."
      },
      {
        "id": "C",
        "text": "É um serviço de transferência de dados do GitHub para petabytes de dados, onde um carro de propriedade do GitHub irá até sua localização e transferirá os dados para sua rede local."
      },
      {
        "id": "D",
        "text": "É um serviço de telemetria do GitHub que permite rastrear a atividade dos seus usuários em seu site ou aplicativo móvel."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-88",
    "stem": "Como você pode vincular um pull request a uma issue?",
    "explanation": "Documentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue",
    "options": [
      {
        "id": "A",
        "text": "Manualmente, tanto a partir da visualização do pull request quanto da visualização da issue."
      },
      {
        "id": "B",
        "text": "Usando uma palavra-chave na descrição do pull request e referenciando o número da issue."
      },
      {
        "id": "C",
        "text": "Usando uma palavra-chave na descrição do pull request e referenciando o título da issue."
      },
      {
        "id": "D",
        "text": "Incluindo o número da issue nas alterações de código."
      },
      {
        "id": "E",
        "text": "Incluindo o número da issue na mensagem do commit."
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
    "id": "GH-900-89",
    "stem": "Que melhoria os formulários de issue trazem em relação aos templates de issue?",
    "explanation": "Documentação: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms",
    "options": [
      {
        "id": "A",
        "text": "Os formulários de issue permitem que os usuários sejam solicitados a fornecer informações ao criar uma issue e, em seguida, essas informações são adicionadas automaticamente à issue."
      },
      {
        "id": "B",
        "text": "Não existe algo como formulários de issue no GitHub."
      },
      {
        "id": "C",
        "text": "O formulário de issue é um recurso que fecha automaticamente as issues após um determinado período de tempo, proporcionando um gerenciamento de issues mais eficiente em comparação com os templates de issue."
      },
      {
        "id": "D",
        "text": "O formulário de issue é uma ferramenta para criar issues que contém apenas campos de formulário para título e descrição, simplificando o processo, mas não necessariamente melhorando a qualidade das informações em comparação com os templates de issue."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-90",
    "stem": "Qual destes é um recurso de repositório usado como um fórum da comunidade para conversas, perguntas, anúncios e compartilhamento de ideias?",
    "explanation": "Documentação: https://docs.github.com/en/discussions/quickstart#introduction",
    "options": [
      {
        "id": "A",
        "text": "Discussions"
      },
      {
        "id": "B",
        "text": "Wikis"
      },
      {
        "id": "C",
        "text": "Gists"
      },
      {
        "id": "D",
        "text": "Pull requests"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-91",
    "stem": "Qual é o efeito de adicionar a linha `Closes #11` à descrição do pull request?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests#linking-a-pull-request-to-an-issue",
    "options": [
      {
        "id": "A",
        "text": "Assim que esse pull request for mesclado, o issue #11 será fechado automaticamente."
      },
      {
        "id": "B",
        "text": "Assim que esse pull request for mesclado, o pull request #11 será excluído automaticamente."
      },
      {
        "id": "C",
        "text": "Assim que esse pull request for mesclado, o 11º branch será excluído automaticamente."
      },
      {
        "id": "D",
        "text": "Esse pull request será automaticamente mesclado assim que o issue #11 for fechado."
      },
      {
        "id": "E",
        "text": "Esse pull request será automaticamente mesclado no 11º dia desse mês."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-92",
    "stem": "No GitHub, uma proposta para mesclar um conjunto de alterações de uma branch para outra é chamada de:",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "Pull Request"
      },
      {
        "id": "B",
        "text": "Gist"
      },
      {
        "id": "C",
        "text": "Issue"
      },
      {
        "id": "D",
        "text": "Commit"
      },
      {
        "id": "E",
        "text": "A merge branch"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-93",
    "stem": "Você deseja mesclar alterações da branch `feature-a` para a `main` e está criando um pull request. Qual branch deve ser a branch `base` e qual deve ser a branch `compare`?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "`main` é a branch base e `feature-a` é a branch de comparação."
      },
      {
        "id": "B",
        "text": "`feature-a` é a branch base e `main` é a branch de comparação."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-94",
    "stem": "O que são pull requests de rascunho?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "Pull requests de rascunho são pull requests que ainda não estão prontos para serem revisados."
      },
      {
        "id": "B",
        "text": "Pull requests de rascunho são pull requests que já foram revisados, mas não foram mesclados."
      },
      {
        "id": "C",
        "text": "Pull requests de rascunho são pull requests que já foram revisados, mas não foram aprovados."
      },
      {
        "id": "D",
        "text": "Pull requests de rascunho são templates para criar novos pull requests."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-95",
    "stem": "Quais são os status possíveis para a revisão de um pull request?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews#about-pull-request-reviews",
    "options": [
      {
        "id": "A",
        "text": "Comentar"
      },
      {
        "id": "B",
        "text": "Aprovar"
      },
      {
        "id": "C",
        "text": "Solicitar alterações"
      },
      {
        "id": "D",
        "text": "Fechar"
      },
      {
        "id": "E",
        "text": "Recusar"
      },
      {
        "id": "F",
        "text": "Aplaudir"
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
    "id": "GH-900-96",
    "stem": "Qual dessas afirmações sobre as diferenças entre issues e discussions é verdadeira?",
    "explanation": "Documentação: https://docs.github.com/en/discussions/quickstart",
    "options": [
      {
        "id": "A",
        "text": "GitHub Discussions são para conversas que precisam ser transparentes e acessíveis, mas não precisam ser rastreadas em um quadro de projeto e não estão relacionadas ao código, ao contrário das GitHub Issues."
      },
      {
        "id": "B",
        "text": "GitHub Issues são para conversas que precisam ser transparentes e acessíveis, mas não precisam ser rastreadas em um quadro de projeto e não estão relacionadas ao código, ao contrário das GitHub Discussions."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-97",
    "stem": "Qual dos recursos do GitHub serve melhor como uma maneira simples de compartilhar pequenos trechos de código com outras pessoas?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists",
    "options": [
      {
        "id": "A",
        "text": "Gists"
      },
      {
        "id": "B",
        "text": "Wikis"
      },
      {
        "id": "C",
        "text": "Issues"
      },
      {
        "id": "D",
        "text": "Projects"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-98",
    "stem": "O que são os Wikis do GitHub?",
    "explanation": "• \"Wikis é um recurso para hospedar trechos de código.\": Isso são os Gists\nDocumentação: https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis",
    "options": [
      {
        "id": "A",
        "text": "Wikis é um recurso do repositório para hospedar documentação."
      },
      {
        "id": "B",
        "text": "Wikis é a documentação oficial do GitHub."
      },
      {
        "id": "C",
        "text": "Wikis é um recurso para hospedar trechos de código."
      },
      {
        "id": "D",
        "text": "Wikis é um lugar onde você armazena o arquivo `README.md` do projeto."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-99",
    "stem": "Quais são as duas opções disponíveis quando você não precisa mais usar um Projeto?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/closing-and-deleting-your-projects",
    "options": [
      {
        "id": "A",
        "text": "Excluir e arquivar"
      },
      {
        "id": "B",
        "text": "Fechar e excluir"
      },
      {
        "id": "C",
        "text": "Arquivar e fechar"
      },
      {
        "id": "D",
        "text": "Desativar e arquivar"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-100",
    "stem": "É possível alterar um gist de público para secreto após criá-lo?",
    "explanation": "• \"Não\": Após criar um gist, não é possível convertê-lo de público para secreto.\nDocumentação: https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-101",
    "stem": "O que acontece quando você escolhe fechar um Projeto?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/closing-and-deleting-your-projects",
    "options": [
      {
        "id": "A",
        "text": "O projeto é removido permanentemente da plataforma"
      },
      {
        "id": "B",
        "text": "O conteúdo é mantido e você tem a capacidade de reabri-lo posteriormente."
      },
      {
        "id": "C",
        "text": "Os valores associados e os dados de insights são excluídos"
      },
      {
        "id": "D",
        "text": "O Projeto é movido para uma pasta separada"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-102",
    "stem": "Se houver vários arquivos Readme.md em um repositório do GitHub, qual é a ordem de prioridade para mostrá-los?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
    "options": [
      {
        "id": "A",
        "text": "Diretório raiz, diretório `.docs`, diretório `.github`"
      },
      {
        "id": "B",
        "text": "Diretório `.docs`, diretório raiz, diretório `.github`"
      },
      {
        "id": "C",
        "text": "Diretório `.github`, diretório raiz, diretório `.docs`"
      },
      {
        "id": "D",
        "text": "Diretório `.docs`, diretório `.github`, diretório raiz"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-103",
    "stem": "Qual dos seguintes comandos Git permite criar uma nova branch e começar a trabalhar nela em uma única linha?",
    "explanation": "Documentação: https://git-scm.com/docs/git-switch",
    "options": [
      {
        "id": "A",
        "text": "git checkout -b `<new_branch_name>`"
      },
      {
        "id": "B",
        "text": "git branch -c `<new_branch_name>`"
      },
      {
        "id": "C",
        "text": "git switch -c `<new_branch_name>`"
      },
      {
        "id": "D",
        "text": "git merge -m `<new_branch_name>`"
      },
      {
        "id": "E",
        "text": "git switch -m `<new_branch_name>`"
      },
      {
        "id": "F",
        "text": "git checkout -m `<new_branch_name>`"
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
    "id": "GH-900-104",
    "stem": "Se uma GitHub Discussion for convertida em uma Issue e a issue for fechada ou referenciada usando seu número correspondente (#), a discussion será modificada?",
    "explanation": "• \"Sim\": Quando você \"converte\" uma discussion em uma Issue, essencialmente cria-se uma nova issue que é vinculada de forma leve à discussion e pré-preenche as informações da issue. Não há uma conexão maior entre elas.\nDocumentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-discussion",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-105",
    "stem": "Quais informações podem ser encontradas na seção Pulse na aba Insights de um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/using-pulse-to-view-a-summary-of-repository-activity",
    "options": [
      {
        "id": "A",
        "text": "Proporção de Pull Requests abertos/mesclados"
      },
      {
        "id": "B",
        "text": "Resumo da atividade do repositório"
      },
      {
        "id": "C",
        "text": "Quantidade de adições e exclusões de linhas de código"
      },
      {
        "id": "D",
        "text": "Lista de discussões de issues"
      },
      {
        "id": "E",
        "text": "Lista de conversas não resolvidas"
      },
      {
        "id": "F",
        "text": "Quantidade de forks do repositório"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "type": "multi",
    "pick": 4
  },
  {
    "id": "GH-900-106",
    "stem": "Quais são os diferentes níveis da hierarquia organizacional do GitHub?",
    "explanation": "• \"Nível Pessoal\": GitHub Personal é um tipo de conta e não uma hierarquia organizacional no GitHub.\n• \"Nível Pro\": GitHub Pro é um tipo de conta e não uma hierarquia organizacional no GitHub.\nDocumentação: https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/2-what-is-github-administration",
    "options": [
      {
        "id": "A",
        "text": "Nível de Team"
      },
      {
        "id": "B",
        "text": "Nível de Organization"
      },
      {
        "id": "C",
        "text": "Nível Pessoal"
      },
      {
        "id": "D",
        "text": "Nível Pro"
      },
      {
        "id": "E",
        "text": "Nível de Enterprise"
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
    "id": "GH-900-107",
    "stem": "Quem pode configurar cobranças ou atribuir gerentes de cobrança para uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Proprietário do repositório"
      },
      {
        "id": "B",
        "text": "Mantenedor da equipe no nível da equipe"
      },
      {
        "id": "C",
        "text": "Administrador no nível da equipe"
      },
      {
        "id": "D",
        "text": "Gerentes de cobrança no nível da organização"
      },
      {
        "id": "E",
        "text": "Proprietário no nível da organização"
      },
      {
        "id": "F",
        "text": "Proprietário no nível da enterprise"
      }
    ],
    "answer": [
      "D",
      "E",
      "F"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-900-108",
    "stem": "Qual é um dos principais benefícios de usar um Personal Access Token (PAT) em vez de um nome de usuário e senha padrão para autenticação no GitHub?",
    "explanation": "• \"Os PATs podem ser gerenciados pela organização e enterprise.\": Os PATs, como o próprio nome sugere, são pessoais. Organizações e enterprises podem gerenciar outras formas de autenticação, como LDAP, SAML e chaves SSH.\n• \"O PAT é uma camada extra de segurança usada ao fazer login em sites ou aplicativos. Com o PAT, os usuários precisam fazer login com seu nome de usuário e senha e fornecer outra forma de autenticação à qual apenas eles têm acesso.\": Esta é uma descrição de autenticação multifator ou autenticação de dois fatores.\n• \"O PAT permite que você autentique o GitHub Enterprise Server com suas contas existentes e gerencie centralmente o acesso ao repositório.\": Esta é uma descrição dos benefícios do LDAP para o GitHub, não do PAT.\nDocumentação: https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works",
    "options": [
      {
        "id": "A",
        "text": "Os PATs podem ser gerenciados pela organização e enterprise."
      },
      {
        "id": "B",
        "text": "O PAT é uma camada extra de segurança usada ao fazer login em sites ou aplicativos. Com o PAT, os usuários precisam fazer login com seu nome de usuário e senha e fornecer outra forma de autenticação à qual apenas eles têm acesso."
      },
      {
        "id": "C",
        "text": "O PAT pode ser usado para autenticação no GitHub ao usar a API do GitHub ou a linha de comando. Os usuários geram um token por meio da opção de configurações do GitHub e vinculam as permissões do token a um repositório ou organização."
      },
      {
        "id": "D",
        "text": "O PAT permite que você autentique o GitHub Enterprise Server com suas contas existentes e gerencie centralmente o acesso ao repositório."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-109",
    "stem": "Quais são as diferentes formas de autenticação em dois fatores ou multifatores suportadas pelo GitHub?",
    "explanation": "• \"Chamada telefônica\": Embora mensagens de texto sejam suportadas em alguns países, chamadas telefônicas não são\nDocumentação: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication",
    "options": [
      {
        "id": "A",
        "text": "Chave de acesso"
      },
      {
        "id": "B",
        "text": "Mensagem de texto"
      },
      {
        "id": "C",
        "text": "Chamada telefônica"
      },
      {
        "id": "D",
        "text": "E-mail"
      },
      {
        "id": "E",
        "text": "Chave de segurança"
      },
      {
        "id": "F",
        "text": "GitHub mobile"
      },
      {
        "id": "G",
        "text": "Senha única baseada no tempo (TOTP)"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F",
      "G"
    ],
    "type": "multi",
    "pick": 5
  },
  {
    "id": "GH-900-110",
    "stem": "Quais são os diferentes planos de preços do GitHub para contas pessoais?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/githubs-plans",
    "options": [
      {
        "id": "A",
        "text": "Free"
      },
      {
        "id": "B",
        "text": "Team"
      },
      {
        "id": "C",
        "text": "Enterprise"
      },
      {
        "id": "D",
        "text": "Pro"
      },
      {
        "id": "E",
        "text": "Personal"
      },
      {
        "id": "F",
        "text": "Business"
      },
      {
        "id": "G",
        "text": "Advanced\n---"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "type": "multi",
    "pick": 2
  },
  {
    "id": "GH-900-111",
    "stem": "Quais é/são os plano(s) de preços comuns do GitHub para contas pessoais e de organizações?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/githubs-plans",
    "options": [
      {
        "id": "A",
        "text": "Free"
      },
      {
        "id": "B",
        "text": "Team"
      },
      {
        "id": "C",
        "text": "Enterprise"
      },
      {
        "id": "D",
        "text": "Pro"
      },
      {
        "id": "E",
        "text": "Personal"
      },
      {
        "id": "F",
        "text": "Business"
      },
      {
        "id": "G",
        "text": "Advanced"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-112",
    "stem": "Qual é a sintaxe usada no Markdown do GitHub para criar uma lista de tarefas?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/communicate-using-markdown/2-what-is-markdown",
    "options": [
      {
        "id": "A",
        "text": "`- [ ] e - [x]`"
      },
      {
        "id": "B",
        "text": "`# TODO: e # DONE:`"
      },
      {
        "id": "C",
        "text": "`// TODO: e // DONE:`"
      },
      {
        "id": "D",
        "text": "`<task> e <done>`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-113",
    "stem": "Qual elemento do Markdown não está corretamente emparelhado com sua sintaxe?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/communicate-using-markdown/2-what-is-markdown",
    "options": [
      {
        "id": "A",
        "text": "Título - `# Título`"
      },
      {
        "id": "B",
        "text": "Texto em negrito - `**negrito**`"
      },
      {
        "id": "C",
        "text": "Código em linha - `'''código'''`"
      },
      {
        "id": "D",
        "text": "Hiperlink - `[título](https://)`"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-114",
    "stem": "Qual recurso é exclusivo do GitHub Desktop em comparação ao github.com?",
    "explanation": "Documentação: https://docs.github.com/en/desktop/making-changes-in-a-branch/viewing-the-branch-history-in-github-desktop",
    "options": [
      {
        "id": "A",
        "text": "Clonar repositórios para a máquina local"
      },
      {
        "id": "B",
        "text": "Criar novos repositórios"
      },
      {
        "id": "C",
        "text": "Visualizar insights do repositório"
      },
      {
        "id": "D",
        "text": "Visualizar históricos de branch em uma interface gráfica"
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-115",
    "stem": "Qual das seguintes ações não pode ser realizada diretamente no GitHub Desktop?",
    "explanation": "Documentação: https://docs.github.com/en/actions/quickstart#prerequisites",
    "options": [
      {
        "id": "A",
        "text": "Armazenar mudanças em espera (Stashing changes)"
      },
      {
        "id": "B",
        "text": "Gerenciar GitHub Actions"
      },
      {
        "id": "C",
        "text": "Alternar entre branches"
      },
      {
        "id": "D",
        "text": "Confirmar mudanças (Committing changes)"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-116",
    "stem": "Quais são algumas ações que você pode realizar em relação aos Modelos de Projeto na sua organização?",
    "explanation": "• \"Com permissão de escrita, definir um projeto existente como um modelo\": Você precisa de permissões de administrador para definir um projeto existente como um modelo\nDocumentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-project-templates-in-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Com permissão de escrita, definir um projeto existente como um modelo"
      },
      {
        "id": "B",
        "text": "Configurar modelos recomendados para os membros da sua organização"
      },
      {
        "id": "C",
        "text": "Criar um novo modelo para ser usado como base para novos projetos"
      },
      {
        "id": "D",
        "text": "Com permissões de administrador ou de escrita, copiar um projeto existente como um modelo"
      },
      {
        "id": "E",
        "text": "Publicar seus modelos no GitHub Marketplace para que qualquer pessoa possa utilizá-los"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-900-117",
    "stem": "Qual das seguintes afirmações é verdadeira sobre os wikis do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis",
    "options": [
      {
        "id": "A",
        "text": "Wikis em repositórios privados são acessíveis a qualquer pessoa com uma conta no GitHub."
      },
      {
        "id": "B",
        "text": "Você só pode editar wikis diretamente no GitHub; a edição local não é suportada."
      },
      {
        "id": "C",
        "text": "Wikis em repositórios públicos são acessíveis a qualquer pessoa, enquanto aqueles em repositórios privados são acessíveis apenas aos colaboradores do repositório."
      },
      {
        "id": "D",
        "text": "Markdown não pode ser usado para adicionar expressões matemáticas renderizadas, diagramas, mapas e modelos 3D a um wiki."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-118",
    "stem": "Quais dos seguintes papéis estão disponíveis para um repositório no nível da organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#repository-roles-for-organizations",
    "options": [
      {
        "id": "A",
        "text": "Read"
      },
      {
        "id": "B",
        "text": "Triage"
      },
      {
        "id": "C",
        "text": "Delete"
      },
      {
        "id": "D",
        "text": "Admin"
      },
      {
        "id": "E",
        "text": "Write"
      },
      {
        "id": "F",
        "text": "Maintain"
      }
    ],
    "answer": [
      "A",
      "B",
      "D",
      "E",
      "F"
    ],
    "type": "multi",
    "pick": 5
  },
  {
    "id": "GH-900-119",
    "stem": "Qual é o papel mínimo de repositório que um usuário deve ter para enviar commits diretamente a um repositório pertencente a uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Read"
      },
      {
        "id": "B",
        "text": "Triage"
      },
      {
        "id": "C",
        "text": "Write"
      },
      {
        "id": "D",
        "text": "Maintain"
      },
      {
        "id": "E",
        "text": "Admin"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-120",
    "stem": "Qual dessas é uma capacidade de um Gerente de Segurança em relação ao GitHub Actions em uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Eles podem configurar quais actions são permitidas ou bloqueadas em toda a organização."
      },
      {
        "id": "B",
        "text": "Eles podem excluir todas as execuções de workflows de repositórios privados com mais de 90 dias."
      },
      {
        "id": "C",
        "text": "Eles podem desativar as revisões de código para repositórios na organização."
      },
      {
        "id": "D",
        "text": "Eles podem remover a regra de proteção de branch `Require status checks to pass before merging`."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-121",
    "stem": "Qual recurso fornece gráficos ou visualizações pré-construídos para a atividade e saúde do repositório?",
    "explanation": "Documentação: https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/about-repository-graphs",
    "options": [
      {
        "id": "A",
        "text": "Aba Insights"
      },
      {
        "id": "B",
        "text": "GitHub Actions"
      },
      {
        "id": "C",
        "text": "GitHub Projects"
      },
      {
        "id": "D",
        "text": "GitHub Discussions"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-122",
    "stem": "Quais desses recursos o GitHub Copilot para Empresas oferece que o GitHub Copilot para Indivíduos não oferece?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/get-started/plans",
    "options": [
      {
        "id": "A",
        "text": "Gerenciamento de políticas em toda a organização, incluindo a restrição de sugestões do modelo com base em código público"
      },
      {
        "id": "B",
        "text": "Isenção de todas as taxas de uso pago"
      },
      {
        "id": "C",
        "text": "Suporte telefônico 24/7 da equipe do GitHub Copilot"
      },
      {
        "id": "D",
        "text": "Hospedagem local do modelo de IA por trás do GitHub Copilot"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-123",
    "stem": "Qual é a principal diferença entre um membro de uma organização e um colaborador externo para um repositório pertencente a essa organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Colaboradores externos têm acesso ao nível do repositório, mas não fazem parte da organização; membros pertencem à organização e podem ter acessos e funções mais amplos."
      },
      {
        "id": "B",
        "text": "Colaboradores externos podem gerenciar configurações de cobrança, enquanto os membros não podem."
      },
      {
        "id": "C",
        "text": "Membros nunca podem contribuir para repositórios privados, enquanto colaboradores externos podem."
      },
      {
        "id": "D",
        "text": "Colaboradores externos automaticamente se tornam mantenedores de equipes na organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-124",
    "stem": "Quais das seguintes ações você pode realizar em uma GitHub Discussion?",
    "explanation": "Documentação: https://docs.github.com/en/discussions/quickstart#introduction",
    "options": [
      {
        "id": "A",
        "text": "Fixar uma discussão"
      },
      {
        "id": "B",
        "text": "Transferi-la para outra discussão do repositório (se você tiver permissões de administrador)"
      },
      {
        "id": "C",
        "text": "Converter a discussão em um gist secreto"
      },
      {
        "id": "D",
        "text": "Convertê-la em um issue"
      },
      {
        "id": "E",
        "text": "Mesclá-la em um pull request existente"
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
    "id": "GH-900-125",
    "stem": "Qual consulta de pesquisa encontra todas as issues abertas com o rótulo `test` que mencionam 'fix' em seu texto?",
    "explanation": "Documentação: https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "`is:pr is:open label:test \"fix\"`"
      },
      {
        "id": "B",
        "text": "`is:issue in:comments label:test \"fix\"`"
      },
      {
        "id": "C",
        "text": "`is:issue is:open label:test \"fix\"`"
      },
      {
        "id": "D",
        "text": "`type:issue label:test is:open body:\"fix\"`"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-126",
    "stem": "Quais dos seguintes são estados válidos para um pull request no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "Open"
      },
      {
        "id": "B",
        "text": "Draft"
      },
      {
        "id": "C",
        "text": "Merged"
      },
      {
        "id": "D",
        "text": "Closed"
      },
      {
        "id": "E",
        "text": "Pending"
      },
      {
        "id": "F",
        "text": "Abandoned"
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
    "id": "GH-900-127",
    "stem": "Qual afirmativa descreve melhor uma diferença importante entre os novos GitHub Projects e o GitHub Projects Classic?",
    "explanation": "Documentação: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects#differences-from-projects-classic",
    "options": [
      {
        "id": "A",
        "text": "Os novos GitHub Projects oferecem uma interface flexível semelhante a uma planilha, campos personalizados e sincronização bidirecional de issues que não estavam disponíveis no Projects Classic."
      },
      {
        "id": "B",
        "text": "O GitHub Projects Classic possui uma IA integrada que fecha automaticamente pull requests, enquanto os novos GitHub Projects não possuem."
      },
      {
        "id": "C",
        "text": "O GitHub Projects Classic é compatível com a verificação de código e verificação de segredos, enquanto os novos GitHub Projects não são."
      },
      {
        "id": "D",
        "text": "Os novos GitHub Projects permitem apenas gerenciar issues abertas sem suportar pull requests."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-128",
    "stem": "Quais destes você pode personalizar em um arquivo de configuração `.devcontainer/devcontainer.json` do Codespaces?",
    "explanation": "Documentação: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers",
    "options": [
      {
        "id": "A",
        "text": "Sistema operacional ou imagem base"
      },
      {
        "id": "B",
        "text": "Configuração do shell"
      },
      {
        "id": "C",
        "text": "GitHub Actions billing usage"
      },
      {
        "id": "D",
        "text": "Nome de exibição do Codespace"
      },
      {
        "id": "E",
        "text": "Regras de proteção de branch do repositório"
      },
      {
        "id": "F",
        "text": "Políticas no nível da Organização"
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
    "id": "GH-900-129",
    "stem": "Quais funções em uma organização podem visualizar e gerenciar alertas de segurança para repositórios privados?",
    "explanation": "• \"Colaboradores externos\": Colaboradores externos têm permissões específicas para repositórios apenas e não são membros da organização com privilégios de segurança.\n• \"Mantenedores de repositório\": Os mantenedores podem gerenciar certas configurações do repositório, mas não têm acesso padrão a alertas de segurança a nível da organização.\n• \"Proprietários da organização e Gerentes de segurança\": **Correto**. Os proprietários da organização e os gerentes de segurança podem visualizar e gerenciar alertas de segurança, inclusive para repositórios privados.\nDocumentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Colaboradores externos"
      },
      {
        "id": "B",
        "text": "Mantenedores de repositório"
      },
      {
        "id": "C",
        "text": "Proprietários da organização e Gerentes de segurança"
      },
      {
        "id": "D",
        "text": "Gerentes de cobrança"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-130",
    "stem": "Qual dessas afirmações descreve com precisão uma diferença entre contas pessoais e contas de organização no GitHub?",
    "explanation": "• \"Uma conta de organização pode ter vários proprietários e membros, enquanto uma conta pessoal pertence a um único usuário.\": **Correto**. As organizações permitem a gestão colaborativa por várias pessoas, enquanto uma conta pessoal está vinculada a um indivíduo.\n• \"Uma conta de organização só pode ser criada se você tiver um plano GitHub Enterprise.\": As organizações estão disponíveis nos planos Free, Team ou Enterprise.\nDocumentação: https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts",
    "options": [
      {
        "id": "A",
        "text": "Uma conta de organização pode ter vários proprietários e membros, enquanto uma conta pessoal pertence a um único usuário."
      },
      {
        "id": "B",
        "text": "Uma conta pessoal permite repositórios privados ilimitados, mas uma conta de organização permite apenas repositórios públicos."
      },
      {
        "id": "C",
        "text": "Uma conta pessoal só pode ser acessada via chaves SSH, enquanto uma conta de organização só pode ser acessada via senhas."
      },
      {
        "id": "D",
        "text": "Uma conta de organização só pode ser criada se você tiver um plano GitHub Enterprise."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-131",
    "stem": "Qual afirmação descreve melhor a diferença entre clonar um repositório e fazer fork de um repositório?",
    "explanation": "• \"Quando você clona um repositório, as alterações que você envia vão diretamente para o repositório original. Fazer fork exige uma cópia local separada.\": Clonar e fazer fork resultam em cópias locais separadas, mas enviar alterações para um clone exige a permissão correta no repositório original.\n• \"Fazer fork cria uma cópia no seu GitHub, enquanto clonar cria uma cópia local no seu computador sem vincular a propriedade à sua conta.\": **Correto**. Um fork é uma cópia no nível do GitHub que aparece na sua conta, enquanto um clone é apenas uma cópia local.\nDocumentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks",
    "options": [
      {
        "id": "A",
        "text": "Quando você clona um repositório, as alterações que você envia vão diretamente para o repositório original. Fazer fork exige uma cópia local separada."
      },
      {
        "id": "B",
        "text": "Fazer fork cria uma cópia no seu GitHub, enquanto clonar cria uma cópia local no seu computador sem vincular a propriedade à sua conta."
      },
      {
        "id": "C",
        "text": "Clonar sempre transfere a propriedade do repositório, enquanto fazer fork não."
      },
      {
        "id": "D",
        "text": "Somente repositórios privados podem ser objeto de fork, enquanto apenas repositórios públicos podem ser clonados."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-132",
    "stem": "Qual das seguintes afirmações sobre itens fixados no seu perfil do GitHub é verdadeira?",
    "explanation": "• \"Você pode fixar até seis repositórios ou gists no seu perfil para acesso rápido.\": **Correto**. O GitHub permite fixar até seis itens (repositórios ou gists).\nDocumentação: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile",
    "options": [
      {
        "id": "A",
        "text": "Você pode fixar até 10 repositórios no seu perfil."
      },
      {
        "id": "B",
        "text": "Você pode fixar até seis repositórios ou gists no seu perfil para acesso rápido."
      },
      {
        "id": "C",
        "text": "Você só pode fixar repositórios públicos, não privados."
      },
      {
        "id": "D",
        "text": "Fixar um item o exclui da lista de repositórios."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-133",
    "stem": "Qual combinação de operadores de busca avançada você usaria para encontrar repositórios públicos com mais de 100 estrelas que mencionam 'docker' em seu nome?",
    "explanation": "• \"`in:name docker stars:>100 is:public`\": **Correto**. Isso encontrará todos os repositórios públicos que têm 'docker' em seu nome e mais de 100 estrelas.\n• \"`is:public name:docker stars:100`\": Isso está faltando o operador de intervalo (`>`) para estrelas, e `name:docker` não é uma sintaxe válida.\n• \"`topic:docker stars:>100 in:readme`\": Isso pesquisa dentro de tópicos ou readmes, e não no nome do repositório.\nDocumentação: https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories",
    "options": [
      {
        "id": "A",
        "text": "`in:name docker stars:>100 is:public`"
      },
      {
        "id": "B",
        "text": "`docker in:description stars:<100 is:public`"
      },
      {
        "id": "C",
        "text": "`is:public name:docker stars:100`"
      },
      {
        "id": "D",
        "text": "`topic:docker stars:>100 in:readme`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-134",
    "stem": "Qual das opções a seguir descreve melhor o GitHub secret scanning?",
    "explanation": "• \"Um recurso que analisa issues em busca de credenciais não verificadas e as exclui automaticamente.\": O Secret scanning não exclui nada automaticamente; ele detecta segredos potencialmente vazados.\n• \"Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub.\": Os GitHub Actions Encrypted Secrets lidam com a criptografia, mas isso é diferente do Secret scanning.\n• \"Um recurso que busca em repositórios formatos conhecidos de segredos para evitar a exposição acidental de dados sensíveis.\": **Correto**. O Secret scanning detecta tokens, chaves e outras credenciais para ajudar a evitar vazamentos.\nDocumentação: https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning",
    "options": [
      {
        "id": "A",
        "text": "Um recurso que analisa issues em busca de credenciais não verificadas e as exclui automaticamente."
      },
      {
        "id": "B",
        "text": "Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub."
      },
      {
        "id": "C",
        "text": "Um recurso que executa gerenciadores de senhas de terceiros no seu código para armazenar segredos de forma segura."
      },
      {
        "id": "D",
        "text": "Um recurso que busca em repositórios formatos conhecidos de segredos para evitar a exposição acidental de dados sensíveis."
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-135",
    "stem": "Qual dessas afirmações sobre GitHub Pages é correta?",
    "explanation": "• \"O GitHub Pages permite hospedar um site privado gratuitamente, acessível apenas por membros da organização.\": Os sites do GitHub Pages são sempre acessíveis publicamente, a menos que você utilize um site de projeto com regras de firewall empresarial no GitHub Enterprise Server.\n• \"O GitHub Pages permite hospedar sites estáticos a partir de um repositório GitHub.\": **Correto**. O GitHub Pages é especificamente para hospedagem de sites estáticos a partir do seu repositório.\n• \"O GitHub Pages só pode ser usado por contas de organizações.\": Tanto contas pessoais quanto de organizações podem usar o Pages.\nDocumentação: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages",
    "options": [
      {
        "id": "A",
        "text": "O GitHub Pages permite hospedar um site privado gratuitamente, acessível apenas por membros da organização."
      },
      {
        "id": "B",
        "text": "O GitHub Pages permite hospedar sites estáticos a partir de um repositório GitHub."
      },
      {
        "id": "C",
        "text": "O GitHub Pages converte automaticamente arquivos Java em aplicativos web dinâmicos."
      },
      {
        "id": "D",
        "text": "O GitHub Pages só pode ser usado por contas de organizações."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-136",
    "stem": "Qual dos seguintes cenários é um caso de uso comum para um sistema de controle de versão?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches",
    "options": [
      {
        "id": "A",
        "text": "Excluir versões anteriores de um projeto ou arquivo, para que você saiba que está trabalhando apenas com o arquivo ou dados mais recentes."
      },
      {
        "id": "B",
        "text": "Fazer alterações experimentais no seu projeto em um branch isolado."
      },
      {
        "id": "C",
        "text": "Reunir requisitos de funcionalidades para um grande projeto e comunicá-los às partes interessadas."
      },
      {
        "id": "D",
        "text": "Agendar reuniões de equipe e rastrear a presença para atualizações do projeto."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-137",
    "stem": "Qual é outro nome para um sistema de controle de versão?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/using-git/about-git#about-version-control-and-git",
    "options": [
      {
        "id": "A",
        "text": "Software de gerenciamento de versão (VMS)."
      },
      {
        "id": "B",
        "text": "Sistema de gerenciamento de controle de software (SCM)."
      },
      {
        "id": "C",
        "text": "Sistema de gerenciamento de configuração de software (SCM)."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-138",
    "stem": "Qual comando Git fornece informações sobre como usar o Git?",
    "explanation": "Documentação: https://git-scm.com/docs/git#_getting_help",
    "options": [
      {
        "id": "A",
        "text": "git status"
      },
      {
        "id": "B",
        "text": "git init"
      },
      {
        "id": "C",
        "text": "git help"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-139",
    "stem": "Em qual cenário o GitHub Issues seria mais eficaz do que Discussions?",
    "explanation": "Documentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues",
    "options": [
      {
        "id": "A",
        "text": "Ao fazer anúncios e compartilhar novidades com a equipe."
      },
      {
        "id": "B",
        "text": "Ao rastrear tarefas específicas e bugs que exigem resolução."
      },
      {
        "id": "C",
        "text": "Ao buscar opiniões da comunidade sobre ideias e melhorias do projeto."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-140",
    "stem": "Sua equipe está se preparando para implantar um novo recurso usando branches no GitHub. O que deve ser feito para garantir que o branch de recurso esteja pronto para a implantação?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "Submeter todas as alterações diretamente no branch principal sem revisão."
      },
      {
        "id": "B",
        "text": "Excluir o branch de recurso para finalizar o processo de implantação."
      },
      {
        "id": "C",
        "text": "Garantir que todas as alterações sejam revisadas e aprovadas por meio de um pull request antes de mesclá-las no branch principal."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-141",
    "stem": "Qual é a importância da 'commit message' no processo do GitHub flow?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits",
    "options": [
      {
        "id": "A",
        "text": "Ela mescla automaticamente as mudanças no branch principal."
      },
      {
        "id": "B",
        "text": "Ela cria um backup do repositório."
      },
      {
        "id": "C",
        "text": "Ela fornece um resumo das mudanças feitas em um commit, auxiliando no rastreamento do histórico do projeto."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-142",
    "stem": "Por que uma equipe pode escolher GitHub Issues em vez de Discussions para gerenciar relatórios de bugs?",
    "explanation": "Documentação: https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues",
    "options": [
      {
        "id": "A",
        "text": "Discussions oferecem melhor visibilidade e acompanhamento para relatórios de bugs."
      },
      {
        "id": "B",
        "text": "Issues fornecem um formato estruturado para acompanhar e resolver bugs."
      },
      {
        "id": "C",
        "text": "Issues são automaticamente resolvidos quando vinculados a pull requests."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-143",
    "stem": "Quando uma issue no GitHub deve ser usada em vez de uma discussão?",
    "explanation": "Documentação: https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/about-discussions#discussions-and-issues",
    "options": [
      {
        "id": "A",
        "text": "Ao rastrear tarefas ou bugs específicos relacionados a um projeto."
      },
      {
        "id": "B",
        "text": "Ao buscar feedback aberto sobre uma ideia de projeto."
      },
      {
        "id": "C",
        "text": "Ao anunciar marcos do projeto para a equipe."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-144",
    "stem": "Ao trabalhar em uma funcionalidade, você decide criar um novo branch para as alterações. Qual é o principal benefício de usar branches no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches",
    "options": [
      {
        "id": "A",
        "text": "Eles impedem que usuários não autorizados visualizem o repositório."
      },
      {
        "id": "B",
        "text": "Eles implementam automaticamente alterações em ambientes de produção."
      },
      {
        "id": "C",
        "text": "Eles permitem o trabalho de desenvolvimento sem afetar o branch principal."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-145",
    "stem": "Qual é a ação necessária para adicionar um arquivo a um repositório do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Ser proprietário do repositório."
      },
      {
        "id": "B",
        "text": "Ter acesso de leitura ao repositório."
      },
      {
        "id": "C",
        "text": "Ter acesso de escrita ao repositório."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-146",
    "stem": "Qual é a diferença entre Git e GitHub?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/intro-to-git/1-what-is-vc",
    "options": [
      {
        "id": "A",
        "text": "O Git permite que você trabalhe com um ou mais branches locais e envie alterações para um repositório remoto. O GitHub atua como o repositório remoto, acessado por meio de um site ou ferramentas de linha de comando."
      },
      {
        "id": "B",
        "text": "O Git é um sistema de controle de versão distribuído (DVCS) que funciona na nuvem. O GitHub é uma camada de interface que fornece acesso à tecnologia Git."
      },
      {
        "id": "C",
        "text": "O Git é usado por um colaborador individual. O GitHub é usado por vários colaboradores para simplificar o trabalho de desenvolvimento em grupo."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-900-147",
    "stem": "Quais das seguintes funcionalidades estão disponíveis no GitHub Copilot Business, mas não estão disponíveis nos planos individuais do Copilot?",
    "explanation": "• \"Gerenciamento centralizado de cobrança e assentos para uma organização\": O Copilot Business fornece gerenciamento centralizado de cobrança e assentos para organizações.\n• \"Controles de políticas em toda a organização (por exemplo, ativar/desativar recursos para todos os usuários)\": O Copilot Business permite controles de políticas em toda a organização, permitindo que administradores gerenciem a disponibilidade de recursos para todos os usuários.\n• \"Completações de código com IA e Copilot Chat em IDEs compatíveis\": Completações com IA e Copilot Chat estão disponíveis em todos os planos.\n• \"Acesso gratuito para estudantes e professores verificados\": O acesso gratuito para estudantes/professores verificados se aplica a planos individuais, não ao Business.\n• \"Integração com requisitos corporativos de conformidade e auditoria\": Isso está mais alinhado ao Copilot Enterprise, não ao Business.\nDocumentação: https://docs.github.com/en/copilot/get-started/plans",
    "options": [
      {
        "id": "A",
        "text": "Gerenciamento centralizado de cobrança e assentos para uma organização"
      },
      {
        "id": "B",
        "text": "Controles de políticas em toda a organização (por exemplo, ativar/desativar recursos para todos os usuários)"
      },
      {
        "id": "C",
        "text": "Completações de código com IA e Copilot Chat em IDEs compatíveis"
      },
      {
        "id": "D",
        "text": "Acesso gratuito para estudantes e professores verificados"
      },
      {
        "id": "E",
        "text": "Integração com requisitos corporativos de conformidade e auditoria"
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
