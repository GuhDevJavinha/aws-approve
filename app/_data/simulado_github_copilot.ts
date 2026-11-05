import type { Simulado } from "@/types/simulado";

export const simuladoGithubCopilot: Simulado = {
  slug: "github-copilot",
  title: "GitHub Copilot",
  examCode: "GH-300",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 120,
  passingScore: 70,
  questions: [
  {
    "id": "GH-300-1",
    "stem": "O GitHub Copilot é gratuito para todos utilizarem?",
    "explanation": "Documentação: https://github.com/features/copilot/plans",
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
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-2",
    "stem": "Qual opção abaixo NÃO é uma forma possível de conceder acesso ao Copilot para membros de uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access",
    "options": [
      {
        "id": "A",
        "text": "Como membro de uma Organização, você pode habilitar o Copilot diretamente nas configurações da sua conta."
      },
      {
        "id": "B",
        "text": "Através das configurações da sua Enterprise, habilite o GitHub Copilot para organizações selecionadas ou todas as organizações."
      },
      {
        "id": "C",
        "text": "Através das configurações da sua Organização, habilite o GitHub Copilot para equipes ou usuários específicos, ou para toda a organização."
      },
      {
        "id": "D",
        "text": "Você pode usar a REST API do GitHub para conceder acesso ao GitHub Copilot para equipes ou usuários específicos da sua organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-3",
    "stem": "Quais IDEs não são compatíveis com o GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions",
    "options": [
      {
        "id": "A",
        "text": "NetBeans"
      },
      {
        "id": "B",
        "text": "BlueJ"
      },
      {
        "id": "C",
        "text": "Code::Blocks"
      },
      {
        "id": "D",
        "text": "Visual Studio Code"
      },
      {
        "id": "E",
        "text": "Eclipse"
      },
      {
        "id": "F",
        "text": "Xcode"
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
    "id": "GH-300-4",
    "stem": "Qual comando instala o GitHub Copilot CLI?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli",
    "options": [
      {
        "id": "A",
        "text": "`npm install -g @github/copilot`"
      },
      {
        "id": "B",
        "text": "`gh install -g github/copilot-cli`"
      },
      {
        "id": "C",
        "text": "`npm install -g gh-copilot`"
      },
      {
        "id": "D",
        "text": "`gh extension install github/gh-copilot`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-5",
    "stem": "Quais são alguns dos princípios da Engenharia de Prompts?",
    "explanation": "• \"Escreva instruções longas e complexas\": Se você quiser que o Copilot complete uma tarefa complexa ou grande, divida a tarefa em múltiplas tarefas simples e pequenas.\nDocumentação: https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering",
    "options": [
      {
        "id": "A",
        "text": "Foque em uma única tarefa bem definida"
      },
      {
        "id": "B",
        "text": "Certifique-se de que as instruções sejam detalhadas e explícitas"
      },
      {
        "id": "C",
        "text": "Forneça um contexto rico para a IA"
      },
      {
        "id": "D",
        "text": "Escreva instruções longas e complexas"
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
    "id": "GH-300-6",
    "stem": "Como você pode excluir arquivos específicos do GitHub Copilot?",
    "explanation": "• \"Editando o arquivo .gitignore\": .gitignore é usado para excluir o arquivo do git, não do copilot\nDocumentação: https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot",
    "options": [
      {
        "id": "A",
        "text": "Editando o arquivo .gitignore"
      },
      {
        "id": "B",
        "text": "Navegando para as configurações do repositório no GitHub e adicionando os caminhos a serem excluídos"
      },
      {
        "id": "C",
        "text": "Configurando exclusões no arquivo de configuração do Copilot"
      },
      {
        "id": "D",
        "text": "Usando um comando no terminal"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-7",
    "stem": "Qual é a verdade sobre as exclusões de conteúdo do Copilot?",
    "explanation": "• \"Copilot ignora completamente os arquivos excluídos\": Copilot pode usar informações de um arquivo excluído se as informações forem fornecidas pelo IDE.\n• \"As exclusões de conteúdo são aplicadas instantaneamente\": Após adicionar ou alterar exclusões de conteúdo, pode levar até 30 minutos para entrar em vigor\nDocumentação: https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot",
    "options": [
      {
        "id": "A",
        "text": "Exclusões de contexto podem ser configuradas no nível do repositório e da organização"
      },
      {
        "id": "B",
        "text": "Copilot oferece diferentes planos com considerações de privacidade"
      },
      {
        "id": "C",
        "text": "Copilot ignora completamente os arquivos excluídos"
      },
      {
        "id": "D",
        "text": "As exclusões de conteúdo não afetam a conclusão de código"
      },
      {
        "id": "E",
        "text": "As exclusões de conteúdo são aplicadas instantaneamente"
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
    "id": "GH-300-8",
    "stem": "Qual das opções a seguir descreve o arquivo de configuração do Editor do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions",
    "options": [
      {
        "id": "A",
        "text": "Um arquivo JSON com configurações de segurança"
      },
      {
        "id": "B",
        "text": "Um arquivo Markdown com instruções em linguagem natural para personalizar respostas do Copilot Chat"
      },
      {
        "id": "C",
        "text": "Um arquivo YAML com instruções de build"
      },
      {
        "id": "D",
        "text": "Um arquivo XML com configurações de deploy"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-9",
    "stem": "Qual das seguintes opções descreve como usar a API de Produtividade do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/track-usage-and-adoption",
    "options": [
      {
        "id": "A",
        "text": "Para coletar logs de auditoria"
      },
      {
        "id": "B",
        "text": "Para excluir arquivos específicos"
      },
      {
        "id": "C",
        "text": "Para coletar métricas de uso dos membros da organização"
      },
      {
        "id": "D",
        "text": "Para atualizar o Copilot automaticamente\n---"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-10",
    "stem": "Qual das seguintes opções integra o GitHub Copilot Chat com ferramentas externas?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/context/mcp",
    "options": [
      {
        "id": "A",
        "text": "GitHub Copilot Extensions"
      },
      {
        "id": "B",
        "text": "GitHub Copilot Marketplace"
      },
      {
        "id": "C",
        "text": "GitHub Copilot Integrations"
      },
      {
        "id": "D",
        "text": "GitHub Copilot Open"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-11",
    "stem": "Como você pode fornecer contexto ao GitHub Copilot para gerar respostas personalizadas para o seu repositório?",
    "explanation": "• \"Modificando o arquivo `.gitconfig` para incluir instruções personalizadas\": Modificar o arquivo `.gitconfig` não fornece instruções personalizadas ao GitHub Copilot.\n• \"Criando uma issue no GitHub chamada `copilot-instructions` no repositório com o contexto necessário\": Criar uma issue no GitHub não fornece instruções personalizadas ao GitHub Copilot.\nDocumentação: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions",
    "options": [
      {
        "id": "A",
        "text": "Criando um arquivo chamado `.github/copilot-instructions.md` no repositório"
      },
      {
        "id": "B",
        "text": "Enviando um e-mail para o suporte do GitHub com os detalhes do seu projeto"
      },
      {
        "id": "C",
        "text": "Modificando o arquivo `.gitconfig` para incluir instruções personalizadas"
      },
      {
        "id": "D",
        "text": "Criando uma issue no GitHub chamada `copilot-instructions` no repositório com o contexto necessário"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-12",
    "stem": "O GitHub Copilot pode usar informações semânticas de um arquivo que está ignorado pelas exclusões de conteúdo do GitHub Copilot?",
    "explanation": "• \"Não, ele ignorará todas as informações de arquivos excluídos.\": É possível que o Copilot utilize informações semânticas de um arquivo excluído se essas informações forem fornecidas indiretamente pelo IDE. Exemplos de tal conteúdo incluem informações de tipo e definições exibidas ao passar o mouse sobre símbolos usados no código, bem como propriedades gerais do projeto, como informações de configuração de build.\nDocumentação: https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#limitations-of-content-exclusions",
    "options": [
      {
        "id": "A",
        "text": "Sim, se as informações forem fornecidas indiretamente pelo IDE."
      },
      {
        "id": "B",
        "text": "Não, ele ignorará todas as informações de arquivos excluídos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-13",
    "stem": "O que acontece quando você exclui conteúdo do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#about-content-exclusions-for-copilot",
    "options": [
      {
        "id": "A",
        "text": "O preenchimento de código não estará disponível nos arquivos afetados."
      },
      {
        "id": "B",
        "text": "O conteúdo nos arquivos afetados não influenciará as sugestões de preenchimento de código em outros arquivos."
      },
      {
        "id": "C",
        "text": "O conteúdo nos arquivos afetados continuará a influenciar as respostas do GitHub Copilot Chat."
      },
      {
        "id": "D",
        "text": "O preenchimento de código não será afetado nos arquivos afetados."
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
    "id": "GH-300-14",
    "stem": "Qual é a maneira mais fácil de começar a usar o GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/get-started/quickstart",
    "options": [
      {
        "id": "A",
        "text": "Solicitar acesso ao suporte do GitHub e esperar pela aprovação antes de usar o GitHub Copilot."
      },
      {
        "id": "B",
        "text": "Usar o site do Copilot e colar seu código ao pedir sugestões."
      },
      {
        "id": "C",
        "text": "Instalar a extensão do Copilot no ambiente de sua preferência, como o Visual Studio Code."
      },
      {
        "id": "D",
        "text": "Criar um novo repositório público no GitHub e habilitar o Copilot para analisar seu código e fornecer sugestões."
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-15",
    "stem": "O que o GitHub Copilot analisa para oferecer sugestões relevantes enquanto você desenvolve um novo código?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot#guide-copilot-towards-helpful-outputs",
    "options": [
      {
        "id": "A",
        "text": "Analisa o contexto em todos os arquivos dentro do repositório."
      },
      {
        "id": "B",
        "text": "Analisa o contexto no arquivo atual e em arquivos relacionados."
      },
      {
        "id": "C",
        "text": "Analisa apenas o contexto dentro do arquivo atual."
      },
      {
        "id": "D",
        "text": "Analisa apenas o contexto dentro da linha de código atual."
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-16",
    "stem": "Qual das opções a seguir descreve melhor o GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/get-started/what-is-github-copilot",
    "options": [
      {
        "id": "A",
        "text": "Um assistente de codificação com IA que ajuda os desenvolvedores sugerindo código e completando trechos de código."
      },
      {
        "id": "B",
        "text": "Um sistema de controle de versão que rastreia e gerencia mudanças em uma base de código."
      },
      {
        "id": "C",
        "text": "Um editor de código que fornece recursos de depuração e verificação de erros."
      },
      {
        "id": "D",
        "text": "Uma ferramenta que testa e implanta automaticamente código em ambientes de produção."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-17",
    "stem": "Como o GitHub Copilot lida com a retenção de dados para sugestões de código no IDE?",
    "explanation": "Documentação: https://learn.github.com/learning-pathways/github-copilot",
    "options": [
      {
        "id": "A",
        "text": "As sugestões são mantidas temporariamente na memória e descartadas após o uso, sem serem gravadas no disco"
      },
      {
        "id": "B",
        "text": "Todas as sugestões são armazenadas permanentemente em um banco de dados local para referência futura"
      },
      {
        "id": "C",
        "text": "As sugestões são automaticamente salvas em repositórios do GitHub para controle de versão"
      },
      {
        "id": "D",
        "text": "Trechos de código são armazenados em cache no disco por 30 dias antes de serem excluídos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-18",
    "stem": "Quais etapas ocorrem quando o serviço de proxy do GitHub Copilot processa um prompt?",
    "explanation": "Documentação: https://learn.github.com/learning-pathways/github-copilot",
    "options": [
      {
        "id": "A",
        "text": "Testes para linguagem inadequada, verificações de relevância e detecção de tentativas de hack de prompt"
      },
      {
        "id": "B",
        "text": "Tradução para várias linguagens de programação e validação de sintaxe"
      },
      {
        "id": "C",
        "text": "Compilação e execução automática de código em um ambiente sandbox"
      },
      {
        "id": "D",
        "text": "Transmissão direta para repositórios públicos para verificação de referência"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-19",
    "stem": "Quais princípios representam corretamente os seis princípios-chave da Microsoft para IA Responsável que orientam o desenvolvimento do GitHub Copilot?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai",
    "options": [
      {
        "id": "A",
        "text": "Justiça, Confiabilidade e Segurança, Privacidade e Segurança, Inclusão, Transparência e Responsabilidade"
      },
      {
        "id": "B",
        "text": "Eficiência, Velocidade, Precisão, Inovação, Confiabilidade e Segurança"
      },
      {
        "id": "C",
        "text": "Privacidade, Desempenho, Acessibilidade, Escalabilidade, Manutenibilidade e Teste"
      },
      {
        "id": "D",
        "text": "Segurança, Desenvolvimento, Operações, Manutenção, Suporte e Documentação"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-20",
    "stem": "Qual dos seguintes é um benefício potencial de usar o GitHub Copilot para melhorar os fluxos de trabalho dos desenvolvedores?",
    "explanation": "Documentação: https://docs.github.com/en/copilot",
    "options": [
      {
        "id": "A",
        "text": "Ele pode sugerir trechos de código para aumentar a produtividade dos desenvolvedores."
      },
      {
        "id": "B",
        "text": "Ele substitui completamente a necessidade de revisão de código em todos os projetos."
      },
      {
        "id": "C",
        "text": "Ele mescla automaticamente os pull requests sem aprovação humana."
      },
      {
        "id": "D",
        "text": "Ele funciona apenas com software escrito em uma única linguagem de programação."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-21",
    "stem": "Qual afirmação descreve corretamente o GitHub Copilot CLI?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli",
    "options": [
      {
        "id": "A",
        "text": "Ele permite que você use o Copilot a partir do seu terminal para responder perguntas, escrever e depurar código, e interagir com o GitHub.com"
      },
      {
        "id": "B",
        "text": "Ele é limitado à geração de aliases de shell para `gh copilot suggest` e `gh copilot explain`"
      },
      {
        "id": "C",
        "text": "Ele funciona apenas dentro da interface web do GitHub e não pode acessar arquivos de projetos locais"
      },
      {
        "id": "D",
        "text": "Ele executa automaticamente todos os comandos de shell sugeridos sem pedir aprovação"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-22",
    "stem": "Qual é o principal objetivo do comando '/tests' do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/tutorials/write-tests",
    "options": [
      {
        "id": "A",
        "text": "Ele gera um conjunto de testes unitários para o arquivo atualmente aberto, usando o contexto de arquivos de teste existentes, se disponível"
      },
      {
        "id": "B",
        "text": "Ele executa todos os testes unitários existentes no projeto sem gerar novos"
      },
      {
        "id": "C",
        "text": "Ele apenas valida a sintaxe de arquivos de teste existentes sem criar novos testes"
      },
      {
        "id": "D",
        "text": "Ele remove permanentemente todos os arquivos de teste existentes para começar do zero"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-23",
    "stem": "Como é calculado o uso de assentos para o GitHub Copilot no nível empresarial durante um ciclo de cobrança?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/view-license-usage",
    "options": [
      {
        "id": "A",
        "text": "Número de assentos × (Dias decorridos / Total de dias no ciclo de cobrança)"
      },
      {
        "id": "B",
        "text": "Número total de commits × Número de desenvolvedores ativos"
      },
      {
        "id": "C",
        "text": "Número de sugestões de código × Número de conclusões aceitas"
      },
      {
        "id": "D",
        "text": "Tamanho total do repositório × Número de organizações"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-24",
    "stem": "Como funciona o recurso de correspondência de código público do GitHub Copilot?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/how-tos/get-code-suggestions/find-matching-code",
    "options": [
      {
        "id": "A",
        "text": "Ele busca correspondências comparando sugestões de código com um índice de repositórios públicos do GitHub, que é atualizado a cada poucos meses"
      },
      {
        "id": "B",
        "text": "Ele realiza buscas em tempo real em todos os repositórios do GitHub, incluindo os privados"
      },
      {
        "id": "C",
        "text": "Ele só corresponde códigos de repositórios que foram criados nas últimas 24 horas"
      },
      {
        "id": "D",
        "text": "Ele verifica código em plataformas externas de hospedagem de código fora do GitHub"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-25",
    "stem": "Quais são as verificações de pós-processamento realizadas nas respostas do GitHub Copilot?",
    "explanation": "Documentação: https://learn.github.com/learning-pathways/github-copilot",
    "options": [
      {
        "id": "A",
        "text": "Linguagem tóxica, relevância, qualidade do código (incluindo vulnerabilidades de segurança), identificadores únicos e correspondência opcional de código público"
      },
      {
        "id": "B",
        "text": "Apenas validação de sintaxe e verificações de formatação de código"
      },
      {
        "id": "C",
        "text": "Benchmarking de desempenho e otimização de uso de memória"
      },
      {
        "id": "D",
        "text": "Apenas verificação de erros de compilação e exceções de tempo de execução"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-26",
    "stem": "Quais elementos o GitHub Copilot pode usar como contexto ao gerar sugestões?",
    "explanation": "Documentação: https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot#using-context-in-github-copilot",
    "options": [
      {
        "id": "A",
        "text": "Conteúdo no arquivo atual, arquivos vizinhos, URLs do repositório, caminhos de arquivos e interações de chat anteriores"
      },
      {
        "id": "B",
        "text": "Apenas a linha de código atual sendo editada sem nenhum contexto ao redor"
      },
      {
        "id": "C",
        "text": "Exclusivamente documentação externa da internet"
      },
      {
        "id": "D",
        "text": "Somente o arquivo README do projeto e nada mais"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-27",
    "stem": "Qual dos seguintes NÃO é um modo selecionável no GitHub Copilot Chat?",
    "explanation": "Documentação: https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes#_builtin-chat-modes",
    "options": [
      {
        "id": "A",
        "text": "Perguntar"
      },
      {
        "id": "B",
        "text": "Planejar"
      },
      {
        "id": "C",
        "text": "Traduzir"
      },
      {
        "id": "D",
        "text": "Agente"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-28",
    "stem": "Ao adicionar contexto no chat, é possível adicionar arquivos individuais, mas não pastas inteiras. Essa afirmação é:",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/get-started-github-copilot/10-examine-chat-view-features",
    "options": [
      {
        "id": "A",
        "text": "Falsa"
      },
      {
        "id": "B",
        "text": "Verdadeira"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-29",
    "stem": "Quais dos seguintes podem ser adicionados como contexto para o seu prompt no GitHub Copilot Chat?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/get-started-github-copilot/10-examine-chat-view-features",
    "options": [
      {
        "id": "A",
        "text": "Símbolos"
      },
      {
        "id": "B",
        "text": "Saída de comandos do terminal"
      },
      {
        "id": "C",
        "text": "Falhas nos testes"
      },
      {
        "id": "D",
        "text": "Repositórios externos"
      },
      {
        "id": "E",
        "text": "Variáveis de ambiente (como PATH)"
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
    "id": "GH-300-30",
    "stem": "O que são smart actions?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/get-started-github-copilot/11-examine-inline-chat-smart-actions-quick-chat",
    "options": [
      {
        "id": "A",
        "text": "Smart actions são tarefas comuns e predefinidas, como explicar código, corrigir código ou gerar testes e documentos, que podem ser realizadas pelo GitHub Copilot Chat sem a necessidade de redigir um prompt para elas."
      },
      {
        "id": "B",
        "text": "Smart actions é uma modalidade avançada do GitHub Copilot usada para depuração e correção de testes com falha."
      },
      {
        "id": "C",
        "text": "Smart actions são tarefas predefinidas projetadas para ajudar com tarefas comuns de codificação dentro de uma organização, que podem ser configuradas no nível do repositório e da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-31",
    "stem": "Quais recursos estão disponíveis no GitHub Copilot e no GitHub Copilot Chat?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/develop-code-features-using-github-copilot-tools/2-examine-code-development-features-github-copilot",
    "options": [
      {
        "id": "A",
        "text": "Completações de linha de código, chat inline, visão de chat, chat rápido, ações inteligentes"
      },
      {
        "id": "B",
        "text": "Completações de linha de código, chat inline, visão de chat, ações inteligentes, pesquisa de código"
      },
      {
        "id": "C",
        "text": "Completações de linha de código, chat inline, contêiner de código, chat rápido"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-32",
    "stem": "Qual das frases está correta?",
    "explanation": "• \"Participantes do chat só podem ser usados para marcar outros membros na mesma organização.\": Participantes do chat como `@workspace` ou `@vscode` são projetados para fornecer contexto sobre a base de código, domínio ou tecnologia, e não para marcar outras pessoas.\nDocumentação: https://learn.microsoft.com/en-us/training/modules/develop-code-features-using-github-copilot-tools/3-examine-github-copilot-best-practices",
    "options": [
      {
        "id": "A",
        "text": "Participantes do chat (como `@workspace` ou `@vscode`) podem ser usados para fornecer contexto adicional sobre a base de código, um domínio ou tecnologia específicos."
      },
      {
        "id": "B",
        "text": "Comandos de barra (como `/tests`, `/fix` ou `/explain`) são uma forma concisa de indicar o que você deseja alcançar com o prompt."
      },
      {
        "id": "C",
        "text": "Não é possível combinar participantes do chat, comandos e variáveis do chat em um único prompt."
      },
      {
        "id": "D",
        "text": "Participantes do chat só podem ser usados para marcar outros membros na mesma organização."
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
    "id": "GH-300-33",
    "stem": "Para que serve um alias ao usar o GitHub Copilot?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/5-git-hub-copilot-for-the-command-line",
    "options": [
      {
        "id": "A",
        "text": "Usar um alias permite que o GitHub Copilot CLI execute automaticamente comandos na linha de comando."
      },
      {
        "id": "B",
        "text": "Usar um alias permite indicar nos commits do Git que o GitHub Copilot realizou alterações."
      },
      {
        "id": "C",
        "text": "Usar um alias permite que o GitHub revise e crie pull requests em seu nome."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-34",
    "stem": "Quais afirmações estão corretas sobre o GitHub Copilot CLI?",
    "explanation": "• \"Tanto os prompts quanto as análises de uso são retidos por padrão.\": Os prompts não são retidos por padrão.\nDocumentação: https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/5-git-hub-copilot-for-the-command-line",
    "options": [
      {
        "id": "A",
        "text": "Os prompts não são retidos, enquanto as análises de uso são retidas por padrão."
      },
      {
        "id": "B",
        "text": "É possível optar por não participar das análises de uso opcionais."
      },
      {
        "id": "C",
        "text": "As respostas geradas pelo Copilot CLI podem ser revisadas após cada sugestão."
      },
      {
        "id": "D",
        "text": "Tanto os prompts quanto as análises de uso são retidos por padrão."
      },
      {
        "id": "E",
        "text": "Não é possível optar por não participar das análises de uso opcionais porque são anonimizadas."
      },
      {
        "id": "F",
        "text": "O GitHub Copilot CLI pode apenas explicar ou sugerir comandos, mas não executá-los em nome do usuário."
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
    "id": "GH-300-35",
    "stem": "Você está desenvolvendo um aplicativo em Kotlin. O que você deve levar em consideração ao usar o GitHub Copilot?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/2-code-completion-with-git-hub-copilot",
    "options": [
      {
        "id": "A",
        "text": "Kotlin não está incluído nos idiomas onde o GitHub Copilot oferece suporte avançado. Como resultado, as sugestões de código podem não ter a mesma qualidade que as sugestões em um idioma com melhor suporte, como Ruby, Java ou C#."
      },
      {
        "id": "B",
        "text": "Kotlin não está incluído nos idiomas onde o GitHub Copilot oferece suporte avançado. Como resultado, o GitHub Copilot não será capaz de explicar ou corrigir o código."
      },
      {
        "id": "C",
        "text": "Kotlin não está incluído nos idiomas onde o GitHub Copilot oferece suporte avançado. Como resultado, o GitHub Copilot ainda poderá explicar ou corrigir o código, mas não será capaz de fornecer sugestões de código."
      },
      {
        "id": "D",
        "text": "Nenhuma das opções está correta, pois Kotlin está incluído nos idiomas onde o GitHub Copilot oferece suporte avançado."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-36",
    "stem": "Onde você pode encontrar informações sobre preocupações relacionadas à segurança, propriedade intelectual e privacidade em relação ao uso do GitHub Copilot?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/github-copilot-management-and-customizations/3-github-copilot-contractual-protections-disabling-matching-public-code",
    "options": [
      {
        "id": "A",
        "text": "GitHub Copilot Trust Center"
      },
      {
        "id": "B",
        "text": "GitHub Copilot Compliance Center"
      },
      {
        "id": "C",
        "text": "GitHub Copilot Compliance Hub"
      },
      {
        "id": "D",
        "text": "GitHub Copilot Legal Center"
      },
      {
        "id": "E",
        "text": "GitHub Copilot Legal and Trust Center"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-37",
    "stem": "Quais planos de assinatura do GitHub Copilot suportam instruções personalizadas no nível da organização?",
    "explanation": "• \"Copilot Business e Copilot Enterprise\": As instruções personalizadas da organização são configuradas nas configurações da organização e exigem um plano Copilot Business ou Enterprise. Instruções personalizadas no nível do repositório estão disponíveis em todos os planos.\nDocumentação: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions",
    "options": [
      {
        "id": "A",
        "text": "Todos os planos que incluem GitHub Copilot"
      },
      {
        "id": "B",
        "text": "Copilot Pro+ e acima"
      },
      {
        "id": "C",
        "text": "Copilot Business e Copilot Enterprise"
      },
      {
        "id": "D",
        "text": "Apenas Copilot Enterprise"
      }
    ],
    "answer": [
      "C"
    ],
    "type": "single"
  },
  {
    "id": "GH-300-38",
    "stem": "Quais afirmações estão corretas em relação ao uso de @workspace e #codebase?",
    "explanation": "Documentação: https://learn.microsoft.com/en-us/training/modules/generate-documentation-using-github-copilot-tools/3-examine-github-copilot-prompts-keywords",
    "options": [
      {
        "id": "A",
        "text": "Embora `@workspace` e `#codebase` permitam fazer perguntas sobre todo o codebase, é recomendado o uso de `#codebase`."
      },
      {
        "id": "B",
        "text": "A palavra-chave `#codebase` pode ser usada em todos os modos de chat."
      },
      {
        "id": "C",
        "text": "A palavra-chave `@workspace` pode ser usada em todos os modos de chat."
      },
      {
        "id": "D",
        "text": "A palavra-chave `@workspace` é responsável pelo prompt do usuário e pode, portanto, usar outras ferramentas."
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
