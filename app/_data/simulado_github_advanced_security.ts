import type { Simulado } from "@/types/simulado";

export const simuladoGithubAdvancedSecurity: Simulado = {
  slug: "github-advanced-security",
  title: "GitHub Advanced Security",
  examCode: "GH-500",
  level: "professional",
  examQuestionCount: 65,
  examDurationMinutes: 120,
  passingScore: 70,
  questions: [
  {
    "id": "GH-500-1",
    "stem": "O que é o CodeQL?",
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
    "id": "GH-500-2",
    "stem": "O que significa `shifting left` no contexto de Segurança?",
    "explanation": "Documentação: https://github.com/readme/guides/github-advanced-security-telus",
    "options": [
      {
        "id": "A",
        "text": "Adotar práticas de segurança cedo no ciclo de desenvolvimento"
      },
      {
        "id": "B",
        "text": "Escrever código em uma linguagem comumente usada"
      },
      {
        "id": "C",
        "text": "Incorporar práticas de segurança logo antes de ir para a produção"
      },
      {
        "id": "D",
        "text": "Escrever código sem se preocupar com segurança\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-3",
    "stem": "O que são os Avisos de Segurança de Repositório?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories",
    "options": [
      {
        "id": "A",
        "text": "Um espaço privado onde os mantenedores do repositório podem discutir vulnerabilidades e questões de segurança dentro da base de código."
      },
      {
        "id": "B",
        "text": "Especialistas em segurança do GitHub que ajudam os usuários do GitHub Enterprise com seus problemas de segurança."
      },
      {
        "id": "C",
        "text": "Uma lista de problemas de segurança que estão disponíveis publicamente para que qualquer pessoa possa ver e evitar."
      },
      {
        "id": "D",
        "text": "Um lugar para reunir e discutir publicamente questões de segurança na comunidade de código aberto."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-4",
    "stem": "Qual ferramenta ajuda a manter as dependências do repositório atualizadas?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain",
    "options": [
      {
        "id": "A",
        "text": "Dependabot"
      },
      {
        "id": "B",
        "text": "Security Advisories"
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
    "id": "GH-500-5",
    "stem": "Qual das opções a seguir é uma lista curada de vulnerabilidades de segurança encontradas em projetos de código aberto?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database",
    "options": [
      {
        "id": "A",
        "text": "GitHub Advisory Database"
      },
      {
        "id": "B",
        "text": "CodeQL"
      },
      {
        "id": "C",
        "text": "Dependabot"
      },
      {
        "id": "D",
        "text": "GitHub Security Journal"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-6",
    "stem": "Quais desses recursos de segurança do GitHub estão disponíveis GRATUITAMENTE para repositórios pessoais públicos e privados?",
    "explanation": "• \"Varredura de código do Dependabot\": O Dependabot não é uma ferramenta de varredura de código; é uma ferramenta para gerenciamento de dependências.\n• \"Varredura de segredos do Dependabot\": O Dependabot não é uma ferramenta de varredura de segredos; é uma ferramenta para gerenciamento de dependências.\n• \"Varredura de segredos\": A varredura de segredos está disponível para repositórios públicos e para organizações com uma licença do GitHub Advanced Security. Não está disponível para repositórios pessoais privados.\n• \"Varredura de código\": A varredura de código está disponível para repositórios públicos e para organizações com uma licença do GitHub Advanced Security. Não está disponível para repositórios pessoais privados.\nDocumentação: https://docs.github.com/en/code-security/getting-started/github-security-features",
    "options": [
      {
        "id": "A",
        "text": "Política de Segurança"
      },
      {
        "id": "B",
        "text": "Avisos de segurança"
      },
      {
        "id": "C",
        "text": "Alertas e atualizações de segurança do Dependabot"
      },
      {
        "id": "D",
        "text": "Atualizações de versão do Dependabot"
      },
      {
        "id": "E",
        "text": "Varredura de código do Dependabot"
      },
      {
        "id": "F",
        "text": "Varredura de segredos do Dependabot"
      },
      {
        "id": "G",
        "text": "Varredura de segredos"
      },
      {
        "id": "H",
        "text": "Varredura de código"
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
    "id": "GH-500-7",
    "stem": "Qual destas opções descreve melhor a varredura de segredos?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning",
    "options": [
      {
        "id": "A",
        "text": "A varredura de segredos verifica seu repositório em busca de segredos, como chaves privadas ou tokens."
      },
      {
        "id": "B",
        "text": "A varredura de segredos verifica seu repositório em busca de possíveis vulnerabilidades de código que possam expor segredos, como chaves privadas ou tokens."
      },
      {
        "id": "C",
        "text": "A varredura de segredos é uma ferramenta para armazenamento e gerenciamento seguro de segredos."
      },
      {
        "id": "D",
        "text": "A varredura de segredos é um git hook que verifica seus commits em busca de segredos, como chaves privadas ou tokens, antes de serem enviados para o GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-8",
    "stem": "Quais partes do repositório são analisadas pela varredura de segredos?",
    "explanation": "• \"Segredos do GitHub Repository\": https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository\n• \"Segredos do GitHub Environment\": https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-environment\nDocumentação: https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning",
    "options": [
      {
        "id": "A",
        "text": "Todo o histórico do git em todos os branches no repositório"
      },
      {
        "id": "B",
        "text": "Títulos, descrições e comentários em issues históricas abertas e fechadas"
      },
      {
        "id": "C",
        "text": "Segredos do GitHub Repository"
      },
      {
        "id": "D",
        "text": "Segredos do GitHub Environment"
      },
      {
        "id": "E",
        "text": "Todo o histórico do git em todos os branches protegidos no repositório"
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
    "id": "GH-500-9",
    "stem": "Qual é o propósito do programa de parceiros de verificação de segredos?",
    "options": [
      {
        "id": "A",
        "text": "Provedores de serviço podem se tornar parceiros do GitHub para que o formato de seus segredos seja reconhecido pela verificação de segredos do GitHub."
      },
      {
        "id": "B",
        "text": "O programa de parceiros do GitHub permite que empresas e organizações com licença do GitHub Advanced Security usem a verificação de segredos do GitHub para escanear seus repositórios."
      },
      {
        "id": "C",
        "text": "O GitHub faz parceria com empresas de segurança externas para fornecer verificação de segredos para repositórios do GitHub."
      },
      {
        "id": "D",
        "text": "É um programa onde profissionais de segurança registrados podem, de boa fé, reportar ao GitHub quaisquer segredos que encontrarem em repositórios do GitHub e receber recompensas por isso."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-10",
    "stem": "Repositórios públicos de usuários pessoais, bem como repositórios públicos de organizações, podem usar a verificação de segredos gratuitamente.",
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
    "id": "GH-500-11",
    "stem": "Como você pode impedir que commits contendo credenciais de provedores de nuvem sejam enviados para o GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Ative uma regra de proteção contra envio na varredura de segredos para seu repositório ou organização."
      },
      {
        "id": "B",
        "text": "Inclua um arquivo `.gitignore` no seu repositório que ignore arquivos contendo segredos."
      },
      {
        "id": "C",
        "text": "Crie uma GitHub Action que analise seus commits em busca de segredos antes de serem enviados para o GitHub."
      },
      {
        "id": "D",
        "text": "Ative uma regra de proteção de branch para seu repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-12",
    "stem": "Qual dessas afirmações é verdadeira sobre o programa de parceiros de verificação de segredos do GitHub?",
    "explanation": "• \"Ele concede ao parceiro acesso à API de varredura de segredos do GitHub para que o provedor de serviço possa escanear repositórios do GitHub em busca de segredos que correspondam ao formato deles.\": O GitHub é sempre responsável por executar a verificação de segredos, e não o parceiro.\n• \"O GitHub tem a capacidade de revogar automaticamente segredos vazados e notificar o provedor de serviço que eles foram invalidados pelo GitHub.\": O GitHub não participa da revogação de segredos vazados; o provedor de serviço tem a opção de fazê-lo.",
    "options": [
      {
        "id": "A",
        "text": "É um programa em que os provedores de serviço podem fornecer ao GitHub os padrões de regex dos segredos que eles emitem para que a verificação de segredos do GitHub possa reconhecê-los."
      },
      {
        "id": "B",
        "text": "Quando o GitHub identifica um segredo de um provedor de serviço parceiro, ele notifica o provedor de serviço sobre o segredo vazado."
      },
      {
        "id": "C",
        "text": "O parceiro pode tomar ações ao receber a notificação do GitHub sobre um segredo vazado, como revogar o segredo e informar o proprietário sobre o segredo comprometido."
      },
      {
        "id": "D",
        "text": "Ele concede ao parceiro acesso à API de varredura de segredos do GitHub para que o provedor de serviço possa escanear repositórios do GitHub em busca de segredos que correspondam ao formato deles."
      },
      {
        "id": "E",
        "text": "O GitHub tem a capacidade de revogar automaticamente segredos vazados e notificar o provedor de serviço que eles foram invalidados pelo GitHub."
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
    "id": "GH-500-13",
    "stem": "Como você pode excluir determinados diretórios ou arquivos da verificação de segredos?",
    "options": [
      {
        "id": "A",
        "text": "Criando um arquivo `secret_scanning.yml` e incluindo os caminhos que não devem ser verificados"
      },
      {
        "id": "B",
        "text": "Não é possível excluir arquivos e/ou diretórios específicos da verificação. Uma vez que você ativar a verificação de segredos para um repositório, todos os arquivos e diretórios serão verificados."
      },
      {
        "id": "C",
        "text": "Incluindo esses arquivos no arquivo `.gitignore`"
      },
      {
        "id": "D",
        "text": "Criando um arquivo `dependabot.yml` e incluindo os caminhos que não devem ser verificados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-14",
    "stem": "Você incluiu alguns segredos falsos no seu código de teste e eles foram captados pela varredura de segredos do GitHub. O que você pode fazer para informar ao GitHub que esses são segredos falsos usados em testes e podem ser ignorados pela varredura de segredos?",
    "options": [
      {
        "id": "A",
        "text": "Criar um arquivo `secret_scanning.yml` no qual você declara os caminhos onde os segredos falsos estão localizados, para que as varreduras os ignorem"
      },
      {
        "id": "B",
        "text": "Fechar o Alerta de Varredura de Segredos com o motivo de fechamento `Used in tests`"
      },
      {
        "id": "C",
        "text": "Nos seus arquivos de teste, adicionar um comentário `#gh_ignore: fake secret` na linha onde o segredo falso está localizado."
      },
      {
        "id": "D",
        "text": "Criar um arquivo `.github/codeql.yml` no qual você declara os caminhos onde os segredos falsos estão localizados, para que as varreduras os ignorem"
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
    "id": "GH-500-15",
    "stem": "Você acidentalmente comprometeu seu token de acesso pessoal do GitHub em um repositório público. Quais ações você deve tomar para evitar que sua conta seja comprometida?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning#securing-compromised-secrets",
    "options": [
      {
        "id": "A",
        "text": "Considere o token comprometido e exclua-o imediatamente"
      },
      {
        "id": "B",
        "text": "Altere as permissões do token para somente leitura"
      },
      {
        "id": "C",
        "text": "Substitua o histórico do git para mascarar o token"
      },
      {
        "id": "D",
        "text": "Verifique se este token é usado em algum de seus aplicativos, se sim - exclua-o."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-16",
    "stem": "Qual é o comportamento quando um novo padrão de segredo é adicionado ou atualizado no programa de parceiros de varredura de segredos do GitHub?",
    "options": [
      {
        "id": "A",
        "text": "O GitHub executará uma varredura de todo o conteúdo de código histórico em repositórios públicos com a varredura de segredos habilitada"
      },
      {
        "id": "B",
        "text": "O GitHub apenas procurará o novo padrão em commits recém-enviados em repositórios com a varredura de segredos habilitada. Se um segredo desse padrão já estava presente no repositório, ele não será detectado."
      },
      {
        "id": "C",
        "text": "O parceiro do GitHub terá que lidar com os segredos anteriormente vazados, e o GitHub apenas verificará novos commits para o novo padrão"
      },
      {
        "id": "D",
        "text": "O GitHub criará um issue em todos os repositórios com a varredura de segredos habilitada, para que os mantenedores possam verificar o repositório em busca de segredos que correspondam ao novo padrão"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-17",
    "stem": "Quem será notificado quando um NOVO segredo for enviado e detectado em um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts#incremental-scans",
    "options": [
      {
        "id": "A",
        "text": "Administradores do Repositório"
      },
      {
        "id": "B",
        "text": "Gerentes de Segurança"
      },
      {
        "id": "C",
        "text": "Usuários com funções personalizadas com acesso de leitura/escrita"
      },
      {
        "id": "D",
        "text": "Proprietários da organização e proprietários da enterprise, mas somente se forem administradores de repositórios onde os segredos foram vazados"
      },
      {
        "id": "E",
        "text": "Autores do commit"
      },
      {
        "id": "F",
        "text": "Todos com acesso de escrita ao repositório"
      },
      {
        "id": "G",
        "text": "Todos os proprietários da organização e proprietários da enterprise"
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
    "id": "GH-500-18",
    "stem": "Quando o GitHub executa uma varredura de segredo em todo o código histórico nos repositórios da empresa, qual é o comportamento de notificação?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts#historical-scans",
    "options": [
      {
        "id": "A",
        "text": "O GitHub notifica os proprietários da empresa e os gerentes de segurança, mesmo que nenhum segredo seja encontrado."
      },
      {
        "id": "B",
        "text": "O GitHub notifica os administradores do repositório, gerentes de segurança e usuários com funções personalizadas com acesso de leitura/escrita sempre que um segredo for detectado em um repositório."
      },
      {
        "id": "C",
        "text": "O GitHub notifica os proprietários da empresa e os gerentes de segurança, apenas se detectar segredos expostos."
      },
      {
        "id": "D",
        "text": "O GitHub notifica os autores dos commits que contêm segredos expostos."
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
    "id": "GH-500-19",
    "stem": "O GitHub usa o mesmo conjunto de padrões de varredura de segredos para alertas de usuários e alertas de proteção de push?",
    "explanation": "• \"Sim, é o mesmo conjunto de padrões de segredos\": Existem três conjuntos diferentes de padrões de varredura de segredos. Eles se sobrepõem, mas não são iguais.\nDocumentação: https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns#about-secret-scanning-patterns",
    "options": [
      {
        "id": "A",
        "text": "Não, são conjuntos diferentes de padrões de segredos"
      },
      {
        "id": "B",
        "text": "Sim, é o mesmo conjunto de padrões de segredos"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-20",
    "stem": "Quais são os três diferentes conjuntos de padrões de verificação de segredos que o GitHub mantém?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns#about-secret-scanning-patterns",
    "options": [
      {
        "id": "A",
        "text": "Padrões de parceiros"
      },
      {
        "id": "B",
        "text": "Padrões de alerta do usuário"
      },
      {
        "id": "C",
        "text": "Padrões de proteção de push"
      },
      {
        "id": "D",
        "text": "Padrões de alerta do Enterprise"
      },
      {
        "id": "E",
        "text": "Padrões de alerta de código aberto"
      },
      {
        "id": "F",
        "text": "Padrões de provedores de nuvem"
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
    "id": "GH-500-21",
    "stem": "Vários repositórios públicos aos quais você está contribuindo não têm a opção de proteção contra push de segredos habilitada. O que você pode fazer para se proteger de acidentalmente enviar segredos para esses repositórios?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/secret-scanning/push-protection-for-users#about-push-protection-for-users",
    "options": [
      {
        "id": "A",
        "text": "Habilitar `Push protection for yourself` nas configurações da sua conta pessoal no GitHub"
      },
      {
        "id": "B",
        "text": "Baixar o plugin web de proteção contra push do GitHub"
      },
      {
        "id": "C",
        "text": "Não é possível, a proteção contra push deve estar habilitada no nível do repositório, organização ou enterprise"
      },
      {
        "id": "D",
        "text": "Adicionar os arquivos contendo segredos ao arquivo `.gitignore` em todos os repositórios"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-22",
    "stem": "Sua empresa possui segredos internos que não devem ser enviados para repositórios do GitHub. O padrão desses segredos não é conhecido pelo GitHub e, portanto, não é detectado pela verificação de segredos. O que as empresas podem fazer para proteger seus desenvolvedores de acidentalmente enviar esses segredos para repositórios na GitHub Organization?",
    "explanation": "• \"A empresa deve aderir ao programa de parceiros do GitHub para que o padrão dos segredos da empresa seja reconhecido.\": O programa de parceiros do GitHub é destinado a provedores de serviços que distribuem segredos fora de sua organização (por exemplo, provedores de nuvem). Ele não é destinado a segredos internos de uma única organização.\n• \"Incluir em todos os repositórios o arquivo `secret_scanning.yml`, que definirá esses segredos personalizados que devem ser verificados.\": O arquivo `secret_scanning.yml` pode ser usado para desativar a verificação de segredos para arquivos ou diretórios específicos.\nDocumentação: https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Definir padrões regex para esses segredos e ativar padrões personalizados para a verificação de segredos na organização."
      },
      {
        "id": "B",
        "text": "A empresa deve aderir ao programa de parceiros do GitHub para que o padrão dos segredos da empresa seja reconhecido."
      },
      {
        "id": "C",
        "text": "Definir workflows personalizados do GitHub Actions para os repositórios da organização que irão verificar esses segredos."
      },
      {
        "id": "D",
        "text": "Incluir em todos os repositórios o arquivo `secret_scanning.yml`, que definirá esses segredos personalizados que devem ser verificados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-23",
    "stem": "Que informações os alertas do Dependabot fornecem?",
    "explanation": "• \"Alertas do Dependabot informam que seu repositório usa uma versão desatualizada de um pacote.\": Dependabot faz isso com atualizações de versão, mas não com alertas.\nDocumentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Alertas do Dependabot informam que seu repositório usa um pacote que é inseguro."
      },
      {
        "id": "B",
        "text": "Alertas do Dependabot informam que seu repositório está sendo usado por outros repositórios públicos."
      },
      {
        "id": "C",
        "text": "Alertas do Dependabot informam que seu repositório usa uma versão não testada de um pacote."
      },
      {
        "id": "D",
        "text": "Alertas do Dependabot informam que seu repositório usa uma versão desatualizada de um pacote."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-24",
    "stem": "O que é o gráfico de dependência do GitHub?",
    "options": [
      {
        "id": "A",
        "text": "É uma representação das dependências e dependentes de um repositório."
      },
      {
        "id": "B",
        "text": "Não existe nada como o gráfico de dependência do GitHub."
      },
      {
        "id": "C",
        "text": "É uma ferramenta que propõe automaticamente atualizações de versão para as dependências em um repositório."
      },
      {
        "id": "D",
        "text": "É uma lista mantida pelo GitHub de vulnerabilidades conhecidas em pacotes de software de código aberto."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-25",
    "stem": "O gráfico de dependências do GitHub está disponível gratuitamente para todos os repositórios?",
    "options": [
      {
        "id": "A",
        "text": "Sim, está disponível gratuitamente para todos os repositórios."
      },
      {
        "id": "B",
        "text": "Não, está disponível gratuitamente apenas para repositórios públicos. Repositórios privados podem usá-lo se tiverem a licença do GitHub Advanced Security."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-26",
    "stem": "Como o GitHub Dependency graph sabe quais dependências seu projeto está usando?",
    "options": [
      {
        "id": "A",
        "text": "O GitHub deriva automaticamente as dependências a partir dos manifests e arquivos de bloqueio (*lock files*) comprometidos no repositório"
      },
      {
        "id": "B",
        "text": "As dependências podem ser adicionadas manualmente usando a Dependency submission API"
      },
      {
        "id": "C",
        "text": "O GitHub verifica o código do repositório em busca de declarações de importação de pacotes externos"
      },
      {
        "id": "D",
        "text": "É necessário adicionar um fluxo de trabalho do GitHub Actions que utiliza a Action oficial `actions/dependency-graph` do GitHub para adicionar dependências ao gráfico sempre que um novo commit é enviado ao repositório"
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
    "id": "GH-500-27",
    "stem": "Quando o gráfico de dependências do GitHub para o seu repositório será atualizado?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security#what-is-the-dependency-graph",
    "options": [
      {
        "id": "A",
        "text": "Quando alguém faz um push de uma alteração para o repositório de uma de suas dependências."
      },
      {
        "id": "B",
        "text": "Quando você faz um push de um commit para o branch padrão do repositório, apenas se isso alterar ou adicionar um arquivo de manifesto/trava suportado."
      },
      {
        "id": "C",
        "text": "Quando você faz um push de qualquer commit para o branch padrão do repositório."
      },
      {
        "id": "D",
        "text": "Quando o seu repositório publica uma nova versão."
      },
      {
        "id": "E",
        "text": "Quando o seu repositório publica um novo tag git."
      },
      {
        "id": "F",
        "text": "Quando o fluxo de trabalho do GitHub Actions que usa a ação do GitHub `actions/dependency-graph` é acionado."
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
    "id": "GH-500-28",
    "stem": "Em que formato você pode exportar o gráfico de dependência do GitHub do seu repositório?",
    "options": [
      {
        "id": "A",
        "text": "SPDX"
      },
      {
        "id": "B",
        "text": "YAML"
      },
      {
        "id": "C",
        "text": "JSON"
      },
      {
        "id": "D",
        "text": "XML"
      },
      {
        "id": "E",
        "text": "CSV"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-29",
    "stem": "Seu repositório pode usar o Dependency Graph sem usar o Dependabot Alerts?",
    "explanation": "• \"Não\": Você pode usar o Dependency Graph sem usar o Dependabot Alerts. No entanto, você não pode usar o Dependabot Alerts com o Dependency Graph desativado.",
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
    "id": "GH-500-30",
    "stem": "Qual recurso é um pré-requisito para usar os Dependabot Alerts em um repositório?",
    "options": [
      {
        "id": "A",
        "text": "Dependency graph"
      },
      {
        "id": "B",
        "text": "Dependency review"
      },
      {
        "id": "C",
        "text": "Dependency security updates"
      },
      {
        "id": "D",
        "text": "Dependency version updates"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-31",
    "stem": "Quais dessas afirmações sobre Dependabot Alerts são verdadeiras?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Eles dependem parcialmente do GitHub Advisory Database"
      },
      {
        "id": "B",
        "text": "Para habilitar Dependabot Alerts, primeiro é necessário ativar o Dependency Graph no seu repositório"
      },
      {
        "id": "C",
        "text": "Quando o GitHub identifica uma dependência vulnerável, ele gera um alerta do Dependabot e o exibe na aba de Segurança do repositório"
      },
      {
        "id": "D",
        "text": "Dependabot Alerts estão ativados por padrão para todos os repositórios"
      },
      {
        "id": "E",
        "text": "Dependabot Alerts estão ativados por padrão para todos os repositórios públicos"
      },
      {
        "id": "F",
        "text": "Dependabot Alerts informam que seu repositório usa uma versão desatualizada de um pacote"
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
    "id": "GH-500-32",
    "stem": "Quais são os principais benefícios do recurso Security Overview no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Visão centralizada de alertas de segurança e gerenciamento de políticas em uma organização"
      },
      {
        "id": "B",
        "text": "Revisão de código automática para cada push"
      },
      {
        "id": "C",
        "text": "Detecção de ameaças em tempo real"
      },
      {
        "id": "D",
        "text": "Atualizações automáticas de dependências"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-33",
    "stem": "O que é o CodeQL?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/code-scanning/codeql",
    "options": [
      {
        "id": "A",
        "text": "Um mecanismo de análise de código desenvolvido pelo GitHub"
      },
      {
        "id": "B",
        "text": "Uma nova linguagem de programação para análise de segurança"
      },
      {
        "id": "C",
        "text": "Um banco de dados usado para armazenar resultados de varredura de código"
      },
      {
        "id": "D",
        "text": "Uma ferramenta de terceiros para análise estática de código"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-34",
    "stem": "O que os alertas do Dependabot indicam no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "A presença de uma dependência vulnerável ou malware em seu repositório"
      },
      {
        "id": "B",
        "text": "Dependências desatualizadas que precisam ser atualizadas"
      },
      {
        "id": "C",
        "text": "Erros nos arquivos de configuração de dependências"
      },
      {
        "id": "D",
        "text": "Conflitos entre diferentes dependências"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-35",
    "stem": "Qual é o propósito da verificação de código no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Identificar vulnerabilidades e erros no código"
      },
      {
        "id": "B",
        "text": "Verificar formatação e estilo do código"
      },
      {
        "id": "C",
        "text": "Revisar pull requests automaticamente"
      },
      {
        "id": "D",
        "text": "Sincronizar o código com servidores de produção"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-36",
    "stem": "A varredura de segredos está disponível para repositórios públicos e privados no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Sim, mas para repositórios privados, é necessário uma licença para GitHub Advanced Security"
      },
      {
        "id": "B",
        "text": "Sim, sem requisitos adicionais"
      },
      {
        "id": "C",
        "text": "Não, está disponível apenas para repositórios públicos"
      },
      {
        "id": "D",
        "text": "Não, está disponível apenas para repositórios privados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-37",
    "stem": "O que a configuração padrão de análise CodeQL no GitHub faz?",
    "explanation": "• \"Requer que os usuários selecionem linguagens e definam um conjunto de consultas personalizado antes que as varreduras possam ser executadas\": Um diálogo de confirmação é exibido ao habilitar a configuração padrão, mas as linguagens e o conjunto de consultas são automaticamente pré-selecionados\n• \"Analisa apenas a linguagem primária do repositório usando o conjunto de consultas estendido\": A configuração padrão verifica todas as linguagens suportadas, não apenas a primária, e usa o conjunto de consultas padrão\n• \"Cria um arquivo de workflow CodeQL no repositório que deve ser mesclado antes que a varredura comece\": Isso descreve a configuração avançada, não a configuração padrão\nDocumentação: https://docs.github.com/en/code-security/concepts/code-scanning/codeql",
    "options": [
      {
        "id": "A",
        "text": "Detecta automaticamente as linguagens, seleciona o conjunto de consultas padrão e configura os gatilhos de varredura"
      },
      {
        "id": "B",
        "text": "Requer que os usuários selecionem linguagens e definam um conjunto de consultas personalizado antes que as varreduras possam ser executadas"
      },
      {
        "id": "C",
        "text": "Analisa apenas a linguagem primária do repositório usando o conjunto de consultas estendido"
      },
      {
        "id": "D",
        "text": "Cria um arquivo de workflow CodeQL no repositório que deve ser mesclado antes que a varredura comece"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-38",
    "stem": "Qual é o principal objetivo de usar o CodeQL CLI?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli#about-the-codeql-cli",
    "options": [
      {
        "id": "A",
        "text": "Gerar uma representação de banco de dados de um código-fonte, um banco de dados CodeQL"
      },
      {
        "id": "B",
        "text": "Gerenciar configurações e permissões do repositório"
      },
      {
        "id": "C",
        "text": "Agendar tarefas regulares de manutenção em um repositório"
      },
      {
        "id": "D",
        "text": "Mesclar automaticamente pull requests"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-39",
    "stem": "Qual das seguintes linguagens NÃO é suportada pelo CodeQL para análise de código?",
    "explanation": "Documentação: https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/#languages-and-compilers",
    "options": [
      {
        "id": "A",
        "text": "PHP"
      },
      {
        "id": "B",
        "text": "JavaScript/TypeScript"
      },
      {
        "id": "C",
        "text": "C/C++"
      },
      {
        "id": "D",
        "text": "Python\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-40",
    "stem": "Como o CodeQL analisa código no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/code-scanning/codeql",
    "options": [
      {
        "id": "A",
        "text": "Ele gera um banco de dados CodeQL e executa consultas para identificar problemas, exibindo os resultados como alertas de varredura de código"
      },
      {
        "id": "B",
        "text": "Ele usa aprendizado de máquina para prever possíveis vulnerabilidades com base em commits anteriores"
      },
      {
        "id": "C",
        "text": "Ele realiza revisões de código manuais enviadas por membros da comunidade do GitHub"
      },
      {
        "id": "D",
        "text": "Ele depende exclusivamente de ferramentas de terceiros para análise de código"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-41",
    "stem": "Como o CodeQL pode ser usado em um sistema de CI externo juntamente com repositórios GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Execute o CodeQL CLI no sistema de CI externo para verificar o código e enviar os resultados para o repositório GitHub"
      },
      {
        "id": "B",
        "text": "CodeQL não pode ser usado em sistemas de CI externos; ele é exclusivo do GitHub Actions"
      },
      {
        "id": "C",
        "text": "Envie o código-fonte para o GitHub para análise e depois baixe os resultados para uso no sistema de CI"
      },
      {
        "id": "D",
        "text": "Execute manualmente o CodeQL localmente e envie os resultados por e-mail para os administradores do repositório GitHub"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-42",
    "stem": "Qual dessas afirmações não é verdadeira sobre a verificação de segredos no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Secret scanning é uma ferramenta para armazenamento e gerenciamento seguro de segredos."
      },
      {
        "id": "B",
        "text": "Secret scanning irá verificar todo o histórico do Git em todos os branches presentes no seu repositório do GitHub em busca de segredos."
      },
      {
        "id": "C",
        "text": "Secret scanning irá verificar títulos, descrições e comentários em issues abertas e fechadas históricas em busca de segredos."
      },
      {
        "id": "D",
        "text": "Secret scanning pode impedir que segredos suportados sejam enviados para sua enterprise, organização ou repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-43",
    "stem": "Quais chaves de nível superior são necessárias no arquivo `dependabot.yml`?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file#about-the-dependabotyml-file",
    "options": [
      {
        "id": "A",
        "text": "`version` e `updates`"
      },
      {
        "id": "B",
        "text": "`version` e `package-ecosystem`"
      },
      {
        "id": "C",
        "text": "`assignees` e `directory`"
      },
      {
        "id": "D",
        "text": "`updates` e `directory`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-44",
    "stem": "Qual GitHub Action pode ser usada para fazer upload de um arquivo SARIF de terceiros?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions",
    "options": [
      {
        "id": "A",
        "text": "`github/codeql-action/upload-sarif`"
      },
      {
        "id": "B",
        "text": "`codeql-upload-sarif`"
      },
      {
        "id": "C",
        "text": "`github/codeql-action`"
      },
      {
        "id": "D",
        "text": "`actions/upload-sarif`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-45",
    "stem": "Qual ferramenta pode ser usada em um sistema de CI de terceiros para enviar os resultados da análise de código para o GitHub?",
    "options": [
      {
        "id": "A",
        "text": "CodeQL CLI"
      },
      {
        "id": "B",
        "text": "CodeQL API"
      },
      {
        "id": "C",
        "text": "GitHub Actions `github/codeql-action`"
      },
      {
        "id": "D",
        "text": "GitHub CLI"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-46",
    "stem": "O que é necessário para um servidor CI enviar resultados SARIF para o GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Um GitHub App ou token de acesso pessoal com permissão de escrita para `security_events`."
      },
      {
        "id": "B",
        "text": "Uma conexão direta com o GitHub Advisory Database."
      },
      {
        "id": "C",
        "text": "Acesso de administrador ao repositório do GitHub."
      },
      {
        "id": "D",
        "text": "Um plugin especial instalado no sistema CI."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-47",
    "stem": "O que acontece quando um segundo arquivo de resultados SARIF é enviado para o GitHub para um único commit?",
    "options": [
      {
        "id": "A",
        "text": "Ele substitui o conjunto de dados original."
      },
      {
        "id": "B",
        "text": "Ele adiciona os resultados ao arquivo existente."
      },
      {
        "id": "C",
        "text": "Ele cria um novo branch no repositório."
      },
      {
        "id": "D",
        "text": "Ele é ignorado pelo GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-48",
    "stem": "Como os usuários podem excluir diretórios específicos de alertas de verificação de segredos no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Configurando um arquivo `secret_scanning.yml` no caminho `.github` no repositório."
      },
      {
        "id": "B",
        "text": "Através da aba `Security` do repositório, no menu `Secret scanning`."
      },
      {
        "id": "C",
        "text": "Através da aba `Settings` do repositório, no menu `Code security and analysis`."
      },
      {
        "id": "D",
        "text": "Editando o arquivo `README.md` do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-49",
    "stem": "Qual chave deve ser usada em um arquivo `secret_scanning.yml` para excluir diretórios dos alertas de verificação de segredos no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "`paths-ignore:`"
      },
      {
        "id": "B",
        "text": "`paths-exclude:`"
      },
      {
        "id": "C",
        "text": "`ignore-directories`"
      },
      {
        "id": "D",
        "text": "`exclude-paths:`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-50",
    "stem": "Qual é o número máximo de padrões personalizados que podem ser definidos para a verificação de segredos no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#about-custom-patterns-for-secret-scanning",
    "options": [
      {
        "id": "A",
        "text": "500 para organizações/enterprises e 100 para repositórios."
      },
      {
        "id": "B",
        "text": "100 para organizações/enterprises e 500 para repositórios."
      },
      {
        "id": "C",
        "text": "100 para organizações, enterprises e repositórios."
      },
      {
        "id": "D",
        "text": "Não há limite para o número de padrões personalizados que você pode definir para a verificação de segredos no GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-51",
    "stem": "Preencha o espaço em branco: `GitHub __________ é um recurso que você pode usar para analisar o código em um repositório do GitHub para encontrar vulnerabilidades de segurança e erros de codificação.`",
    "options": [
      {
        "id": "A",
        "text": "Code Scanning"
      },
      {
        "id": "B",
        "text": "Dependency Graph"
      },
      {
        "id": "C",
        "text": "Security Advisories"
      },
      {
        "id": "D",
        "text": "Vulnerability Detection"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-52",
    "stem": "Qual recurso do GitHub Advanced Security permite que você encontre, classifique e priorize correções para problemas novos e existentes no seu código?",
    "options": [
      {
        "id": "A",
        "text": "Code scanning"
      },
      {
        "id": "B",
        "text": "Dependabot alerts"
      },
      {
        "id": "C",
        "text": "Security policies"
      },
      {
        "id": "D",
        "text": "Security advisories"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-53",
    "stem": "Como você pode ativar a análise de código para um repositório?",
    "options": [
      {
        "id": "A",
        "text": "Vá para a aba de segurança nas configurações do repositório e ative a análise de código com configuração padrão ou avançada."
      },
      {
        "id": "B",
        "text": "Vá para as configurações de usuário e ative a análise de código; você pode optar por ativá-la para todos os repositórios ou apenas para repositórios selecionados."
      },
      {
        "id": "C",
        "text": "Adicione um arquivo de configuração `.github/codeql.yml` ao repositório."
      },
      {
        "id": "D",
        "text": "Vá para a aba de segurança nas configurações do repositório e responda a um questionário sobre o conteúdo do repositório. Com base nas respostas, o GitHub ativará a análise de código com a configuração apropriada."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-54",
    "stem": "Como você pode configurar seu repositório GitHub para executar a análise do CodeQL em um agendamento?",
    "options": [
      {
        "id": "A",
        "text": "Criando um workflow do GitHub Actions com um gatilho `schedule`. O workflow deve utilizar ações do repositório `github/codeql-action`."
      },
      {
        "id": "B",
        "text": "Usando a configuração padrão de análise CodeQL."
      },
      {
        "id": "C",
        "text": "Configurando a propriedade `codeql.trigger` nas configurações do repositório para `schedule`."
      },
      {
        "id": "D",
        "text": "Adicionando uma propriedade `schedule` ao arquivo de configuração `.github/codeql.yml`."
      },
      {
        "id": "E",
        "text": "Solicitando ao suporte do GitHub que ative a análise do CodeQL agendada para o repositório."
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
    "id": "GH-500-55",
    "stem": "Uma organização começou recentemente a usar a análise do CodeQL para todas as pull requests em seus repositórios, bem como a executar a análise em uma programação horária. Desde então, eles estão enfrentando contas do GitHub Actions maiores do que o usual. Qual é a causa mais provável disso?",
    "options": [
      {
        "id": "A",
        "text": "A varredura de código usa o GitHub Actions e a organização está sendo cobrada pelo uso adicional."
      },
      {
        "id": "B",
        "text": "A análise de varredura de código está encontrando mais problemas do que o esperado e está levando mais tempo para ser concluída."
      },
      {
        "id": "C",
        "text": "A varredura de código só pode ser executada em uma programação diária e a organização está sendo cobrada pelo uso adicional."
      },
      {
        "id": "D",
        "text": "Não há correlação entre a varredura de código e a cobrança do GitHub Actions. A organização está sendo cobrada por outros workflows do GitHub Actions."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-56",
    "stem": "Se você não deseja usar o GitHub Actions, pode executar a varredura de código em um sistema CI externo e, em seguida, enviar os resultados para o GitHub.",
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
    "id": "GH-500-57",
    "stem": "Ao usar um sistema de CI de terceiros para executar a verificação de código, qual ferramenta do GitHub você precisa para analisar o código-fonte?",
    "options": [
      {
        "id": "A",
        "text": "Você não precisa especificamente de uma ferramenta do GitHub, qualquer ferramenta de análise estática que possa produzir resultados no formato SARIF funcionará."
      },
      {
        "id": "B",
        "text": "Você precisa instalar a ferramenta GitHub Code Scanning."
      },
      {
        "id": "C",
        "text": "Você precisa instalar CodeQL CLI"
      },
      {
        "id": "D",
        "text": "Você precisa instalar GitHub CLI"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-58",
    "stem": "Ao usar o GitHub Actions como seu sistema de CI e uma ferramenta de terceiros para executar a verificação de código, como você pode enviar os resultados SARIF para o GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions",
    "options": [
      {
        "id": "A",
        "text": "Usando o `github/codeql-action/upload-sarif` GitHub Action"
      },
      {
        "id": "B",
        "text": "Quando se utiliza o GitHub Actions, os resultados SARIF são enviados automaticamente para o GitHub."
      },
      {
        "id": "C",
        "text": "Você só pode usar CodeQL ao executar a verificação de código no GitHub Actions. Ferramentas de terceiros para verificação de código não são suportadas."
      },
      {
        "id": "D",
        "text": "Usando o `actions/upload-artifact` GitHub Action"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-59",
    "stem": "Você pode usar a análise do CodeQL com sistemas de CI de terceiros?",
    "options": [
      {
        "id": "A",
        "text": "Sim, você só precisa usar o CodeQL CLI"
      },
      {
        "id": "B",
        "text": "Não, porque requer o uso do GitHub Action `github/codeql-action`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-60",
    "stem": "Qual dessas afirmações é verdadeira sobre a verificação de código?",
    "explanation": "• \"A verificação de código ajuda a encontrar quaisquer credenciais vazadas no repositório, como chaves de API ou credenciais de nuvem.\": Isso é verificação de segredos\nDocumentação: https://docs.github.com/en/code-security/supply-chain-security/end-to-end-supply-chain/securing-code#scan-your-code-for-vulnerable-patterns",
    "options": [
      {
        "id": "A",
        "text": "A verificação de código ajuda a encontrar padrões de código inseguros que podem ser ignorados em uma revisão de código manual."
      },
      {
        "id": "B",
        "text": "A verificação de código pode ser integrada ao pipeline de CI para encontrar problemas de segurança cedo no processo de desenvolvimento."
      },
      {
        "id": "C",
        "text": "A verificação de código é um substituto para a revisão de código manual."
      },
      {
        "id": "D",
        "text": "A verificação de código ajuda a encontrar quaisquer credenciais vazadas no repositório, como chaves de API ou credenciais de nuvem."
      },
      {
        "id": "E",
        "text": "A verificação de código analisa seu código para pesquisar todas as dependências e suas versões para encontrar quaisquer dependências vulneráveis."
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
    "id": "GH-500-61",
    "stem": "Ao usar a análise do CodeQL no seu fluxo de trabalho do GitHub Actions, com que frequência a varredura é acionada?",
    "options": [
      {
        "id": "A",
        "text": "A varredura de código pode ser acionada por muitos eventos diferentes que acontecem no repositório."
      },
      {
        "id": "B",
        "text": "A varredura de código é acionada a cada push para o repositório."
      },
      {
        "id": "C",
        "text": "A varredura de código é acionada em uma programação configurável."
      },
      {
        "id": "D",
        "text": "A varredura de código pode ser acionada em uma programação configurável ou em pull requests."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-62",
    "stem": "Qual é o efeito de adicionar a palavra-chave `paths-ignore` ao seu fluxo de trabalho de GitHub Actions para varredura de código?",
    "code": ".github/workflows/codeql-analysis.yml\n\non:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**/*.md'\n      - '**/*.txt'\n",
    "options": [
      {
        "id": "A",
        "text": "Evitar análises desnecessárias quando arquivos que não são relevantes para a análise forem alterados."
      },
      {
        "id": "B",
        "text": "Isso diz ao CodeQL para omitir todos os arquivos `*.txt` e `*.md` da análise."
      },
      {
        "id": "C",
        "text": "Impedir que a análise do CodeQL seja executada em pull requests que alterem arquivos com as extensões especificadas."
      },
      {
        "id": "D",
        "text": "As verificações de pull request ignorarão quaisquer vulnerabilidades do CodeQL encontradas em arquivos `*.txt` e `*.md`."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-63",
    "stem": "CodeQL scanning suporta:",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/code-scanning/codeql",
    "options": [
      {
        "id": "A",
        "text": "Tanto linguagens compiladas quanto interpretadas"
      },
      {
        "id": "B",
        "text": "Apenas linguagens compiladas"
      },
      {
        "id": "C",
        "text": "Apenas linguagens interpretadas"
      },
      {
        "id": "D",
        "text": "Todas as linguagens de programação"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-64",
    "stem": "Para que são usadas as consultas CodeQL?",
    "explanation": "Documentação: https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/",
    "options": [
      {
        "id": "A",
        "text": "As consultas CodeQL podem ser executadas contra um banco de dados CodeQL para identificar padrões que podem indicar erros de codificação ou vulnerabilidades de segurança."
      },
      {
        "id": "B",
        "text": "As consultas CodeQL analisam sua base de código e são usadas para criar um banco de dados CodeQL."
      },
      {
        "id": "C",
        "text": "As consultas CodeQL são usadas para fins de revisão de código no GitHub."
      },
      {
        "id": "D",
        "text": "As consultas CodeQL são perguntas baseadas em texto que você pode fazer ao mecanismo CodeQL sobre sua base de código."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-65",
    "stem": "O que é o QL?",
    "explanation": "Documentação: https://codeql.github.com/docs/ql-language-reference/about-the-ql-language/",
    "options": [
      {
        "id": "A",
        "text": "QL é uma linguagem de consulta que fundamenta o CodeQL"
      },
      {
        "id": "B",
        "text": "QL significa Nível de Qualidade e é uma métrica usada pelo CodeQL"
      },
      {
        "id": "C",
        "text": "QL é um produto semelhante ao CodeQL, mas é usado para escanear arquivos de texto em vez de código"
      },
      {
        "id": "D",
        "text": "QL é um pacote npm usado pelo CodeQL para escanear código"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-66",
    "stem": "O que é um conjunto de consultas CodeQL?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#about-codeql-query-suites",
    "options": [
      {
        "id": "A",
        "text": "O conjunto CodeQL é uma coleção de consultas CodeQL"
      },
      {
        "id": "B",
        "text": "O conjunto CodeQL é uma coleção de bancos de dados CodeQL"
      },
      {
        "id": "C",
        "text": "O conjunto CodeQL é uma coleção de resultados CodeQL"
      },
      {
        "id": "D",
        "text": "O conjunto CodeQL é uma coleção de linguagens compatíveis com CodeQL"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-67",
    "stem": "Quais são os diferentes tipos de CodeQL packs?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#about-codeql-packs",
    "options": [
      {
        "id": "A",
        "text": "Query packs"
      },
      {
        "id": "B",
        "text": "Library packs"
      },
      {
        "id": "C",
        "text": "Model packs"
      },
      {
        "id": "D",
        "text": "Code packs"
      },
      {
        "id": "E",
        "text": "Language packs"
      },
      {
        "id": "F",
        "text": "Vulnerability packs"
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
    "id": "GH-500-68",
    "stem": "O que é um pacote de consultas do CodeQL?",
    "explanation": "• \"É uma coleção de consultas CodeQL\": Isso é um conjunto de consultas do CodeQL\nDocumentação: https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#about-codeql-packs",
    "options": [
      {
        "id": "A",
        "text": "É um conjunto de consultas pré-compiladas com todas as dependências transitivas, como bibliotecas e modelos"
      },
      {
        "id": "B",
        "text": "É uma biblioteca usada por consultas CodeQL"
      },
      {
        "id": "C",
        "text": "É uma coleção de consultas CodeQL"
      },
      {
        "id": "D",
        "text": "É um conjunto de resultados gerados no processo de análise de um banco de dados CodeQL"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-69",
    "stem": "Quais são as etapas do fluxo de trabalho de análise do CodeQL?",
    "explanation": "Documentação: https://codeql.github.com/docs/codeql-overview/about-codeql/#codeql-analysis",
    "options": [
      {
        "id": "A",
        "text": "Criar um banco de dados CodeQL -> Executar consultas CodeQL -> Interpretar os resultados"
      },
      {
        "id": "B",
        "text": "Executar consultas CodeQL -> Criar um banco de dados CodeQL -> Interpretar os resultados"
      },
      {
        "id": "C",
        "text": "Executar consultas CodeQL -> Interpretar os resultados"
      },
      {
        "id": "D",
        "text": "Criar um banco de dados CodeQL -> Interpretar os resultados -> Executar consultas CodeQL"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-70",
    "stem": "O que é extração no contexto da análise de código do CodeQL?",
    "explanation": "Documentação: https://codeql.github.com/docs/codeql-overview/about-codeql/#database-creation",
    "options": [
      {
        "id": "A",
        "text": "A extração é o processo de criar uma representação relacional de cada arquivo fonte na base de código."
      },
      {
        "id": "B",
        "text": "A extração é a ação de executar consultas CodeQL em um banco de dados CodeQL e extrair os resultados."
      },
      {
        "id": "C",
        "text": "A extração é o processo de criar consultas CodeQL específicas para a base de código."
      },
      {
        "id": "D",
        "text": "A extração é o processo de exportar dados de um banco de dados CodeQL."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-71",
    "stem": "Quais dessas afirmações são verdadeiras em relação à execução da análise do CodeQL em bases de código com múltiplas linguagens de programação?",
    "explanation": "Documentação: https://codeql.github.com/docs/codeql-overview/about-codeql/#database-creation",
    "options": [
      {
        "id": "A",
        "text": "CodeQL usa um extrator diferente para cada linguagem de programação"
      },
      {
        "id": "B",
        "text": "CodeQL cria bancos de dados separados para cada linguagem de programação"
      },
      {
        "id": "C",
        "text": "CodeQL cria um banco de dados único para todas as linguagens de programação na base de código, desde que sejam suportadas pelo CodeQL"
      },
      {
        "id": "D",
        "text": "O esquema do banco de dados do CodeQL é o mesmo para cada linguagem de programação"
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
    "id": "GH-500-72",
    "stem": "Quais são as diferenças ao executar a criação do banco de dados CodeQL para linguagens compiladas e interpretadas?",
    "explanation": "Documentação: https://codeql.github.com/docs/codeql-overview/about-codeql/#database-creation",
    "options": [
      {
        "id": "A",
        "text": "Para linguagens compiladas, a extração funciona monitorando o processo de compilação. Todas as informações são coletadas cada vez que o compilador é invocado para processar um arquivo-fonte."
      },
      {
        "id": "B",
        "text": "Para linguagens interpretadas, o extrator é executado diretamente no código-fonte."
      },
      {
        "id": "C",
        "text": "Para linguagens interpretadas, a extração funciona monitorando o processo de construção. Todas as informações são coletadas cada vez que o interpretador é invocado para processar um arquivo-fonte."
      },
      {
        "id": "D",
        "text": "Para linguagens compiladas, o extrator é executado diretamente no código-fonte."
      },
      {
        "id": "E",
        "text": "Para linguagens compiladas, o extrator é executado no arquivo executável."
      },
      {
        "id": "F",
        "text": "Para linguagens interpretadas, o extrator é executado no arquivo executável."
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
    "id": "GH-500-73",
    "stem": "Onde você pode ver quando a última análise do CodeQL foi executada ao usar a configuração padrão de varredura de código?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning#evaluating-code-scanning-with-the-tool-status-page",
    "options": [
      {
        "id": "A",
        "text": "Na página de status da ferramenta de varredura de código"
      },
      {
        "id": "B",
        "text": "Em insights do repositório"
      },
      {
        "id": "C",
        "text": "Na aba do Dependabot"
      },
      {
        "id": "D",
        "text": "Você não pode ver essa informação com a configuração padrão"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-74",
    "stem": "Quais das seguintes afirmações sobre a habilitação da configuração padrão do CodeQL scanning são verdadeiras?",
    "explanation": "• \"Você só pode habilitar a configuração padrão em repositórios que contenham pelo menos uma linguagem compatível com CodeQL\": Se você habilitar a configuração padrão em um repositório que não inclui nenhuma linguagem compatível com CodeQL, a configuração padrão não executará nenhuma verificação\n• \"A configuração padrão irá escanear o repositório em um cronograma que você pode configurar. Para varreduras baseadas em eventos, você precisa configurar um workflow do GitHub Action\": A configuração padrão inclui varreduras agendadas e varreduras de pull request / push nos branches padrão e protegidos",
    "options": [
      {
        "id": "A",
        "text": "Você pode habilitar a configuração padrão para todos os repositórios elegíveis em uma organização de uma só vez nas configurações da organização"
      },
      {
        "id": "B",
        "text": "GitHub Actions precisa ser habilitado como um pré-requisito"
      },
      {
        "id": "C",
        "text": "Você pode habilitar a configuração padrão em qualquer repositório, independentemente do conteúdo do repositório"
      },
      {
        "id": "D",
        "text": "Você só pode habilitar a configuração padrão em repositórios que contenham pelo menos uma linguagem compatível com CodeQL"
      },
      {
        "id": "E",
        "text": "A configuração padrão irá escanear o repositório em um cronograma que você pode configurar. Para varreduras baseadas em eventos, você precisa configurar um workflow do GitHub Action"
      },
      {
        "id": "F",
        "text": "Você só pode usar o conjunto de consultas padrão com a configuração padrão do CodeQL scanning"
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
    "id": "GH-500-75",
    "stem": "Como você pode personalizar sua configuração avançada de varredura CodeQL com conjuntos de consultas CodeQL adicionais?",
    "options": [
      {
        "id": "A",
        "text": "Usando um arquivo de configuração personalizado e definindo consultas adicionais nele"
      },
      {
        "id": "B",
        "text": "Definindo as personalizações no workflow do GitHub Actions de análise CodeQL como parâmetros de entrada para a ação `github/codeql-action/init`"
      },
      {
        "id": "C",
        "text": "Usando a CLI do CodeQL com um arquivo de configuração personalizado para executar a análise"
      },
      {
        "id": "D",
        "text": "Definindo as personalizações nas configurações do repositório em Security / Code scanning"
      },
      {
        "id": "E",
        "text": "Usando a Action `github/codeql-customizations` do GitHub"
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
    "id": "GH-500-76",
    "stem": "Ao executar a análise CodeQL no GitHub Actions, quais Actions você deve usar?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-the-codeql-analysis-workflow-and-compiled-languages",
    "options": [
      {
        "id": "A",
        "text": "`github/codeql-action/init`"
      },
      {
        "id": "B",
        "text": "`github/codeql-action/analyze`"
      },
      {
        "id": "C",
        "text": "`github/codeql-action/autobuild` apenas para linguagens de programação compiladas"
      },
      {
        "id": "D",
        "text": "`github/codeql-action/autobuild`"
      },
      {
        "id": "E",
        "text": "`github/codeql-action/init` apenas para linguagens de programação compiladas"
      },
      {
        "id": "F",
        "text": "`github/codeql-action/analyze` apenas para linguagens de programação interpretadas"
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
    "id": "GH-500-77",
    "stem": "Qual é o método mais simples para executar a análise do CodeQL simultaneamente para cada linguagem em um repositório multilíngue usando GitHub Actions?",
    "options": [
      {
        "id": "A",
        "text": "Criando uma matriz de `languages` para o job e, em seguida, referenciando-a no parâmetro de entrada `languages` da ação `github/codeql-action/init`"
      },
      {
        "id": "B",
        "text": "Chamando a ação `github/codeql-action/analyze` em etapas separadas para cada linguagem"
      },
      {
        "id": "C",
        "text": "Criando um workflow separado para cada linguagem"
      },
      {
        "id": "D",
        "text": "Definindo o paralelismo na ação `github/codeql-action/analyze`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-78",
    "stem": "Como você pode usar um arquivo de configuração personalizado do CodeQL em um workflow do GitHub Actions?",
    "options": [
      {
        "id": "A",
        "text": "Fornecendo explicitamente o caminho do arquivo de configuração no parâmetro de entrada `config-file` da ação `github/codeql-action/init`"
      },
      {
        "id": "B",
        "text": "Armazenando a configuração no arquivo `.github/codeql/config-config.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará"
      },
      {
        "id": "C",
        "text": "Fazendo o upload desse arquivo na seção Code Scanning da aba Security no repositório"
      },
      {
        "id": "D",
        "text": "Armazenando a configuração no arquivo `.github/workflows/codeql-analysis.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-79",
    "stem": "Onde você pode especificar as consultas CodeQL a serem executadas em um fluxo de trabalho do GitHub Actions?",
    "options": [
      {
        "id": "A",
        "text": "No parâmetro de entrada `queries` da ação `github/codeql-action/init`"
      },
      {
        "id": "B",
        "text": "Em um arquivo YAML de configuração do CodeQL"
      },
      {
        "id": "C",
        "text": "No parâmetro de entrada `paths` da ação `github/codeql-action/queries`"
      },
      {
        "id": "D",
        "text": "Na seção Code Scanning da aba Security no repositório"
      },
      {
        "id": "E",
        "text": "No campo `codeql` do arquivo `.github/settings.yml`"
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
    "id": "GH-500-80",
    "stem": "Qual é o propósito do parâmetro `external-repository-token` na ação `github/codeql-action/init` do GitHub Action?",
    "options": [
      {
        "id": "A",
        "text": "Ele permite que a ação acesse um repositório privado do GitHub que contém arquivos de configuração, consultas ou pacotes necessários para a análise."
      },
      {
        "id": "B",
        "text": "Ele permite que a ação carregue os resultados da análise para um repositório privado do GitHub."
      },
      {
        "id": "C",
        "text": "Ele permite que a ação acesse um repositório privado do GitHub que contém o código-fonte a ser analisado."
      },
      {
        "id": "D",
        "text": "Ele permite que a ação carregue o banco de dados CodeQL gerado para um repositório privado do GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-81",
    "stem": "Qual comando CodeQL CLI é usado para criar um banco de dados CodeQL?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis#running-codeql-database-create",
    "options": [
      {
        "id": "A",
        "text": "`codeql database create`"
      },
      {
        "id": "B",
        "text": "`gh codeql-database create`"
      },
      {
        "id": "C",
        "text": "`ql database generate`"
      },
      {
        "id": "D",
        "text": "`qlcli database create`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-82",
    "stem": "Qual é o propósito do comando `codeql database analyze` no CodeQL CLI?",
    "explanation": "• \"Analisar um banco de dados CodeQL e carregar os resultados para o GitHub.\": Os resultados não são enviados para o GitHub, um comando separado é usado para isso.\nDocumentação: https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries#running-codeql-database-analyze",
    "options": [
      {
        "id": "A",
        "text": "Analisar um banco de dados CodeQL, produzindo resultados geralmente no formato de um arquivo SARIF."
      },
      {
        "id": "B",
        "text": "Analisar um banco de dados CodeQL, produzindo resultados geralmente no formato de avisos de segurança."
      },
      {
        "id": "C",
        "text": "Analisar o código-fonte, produzindo um banco de dados CodeQL."
      },
      {
        "id": "D",
        "text": "Analisar um banco de dados CodeQL e carregar os resultados para o GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-83",
    "stem": "Como parte do seu pipeline Jenkins CI, você criou e analisou com sucesso um banco de dados CodeQL, produzindo assim um arquivo SARIF. Como você pode fazer o upload do arquivo SARIF para o GitHub?",
    "explanation": "• \"Usando o GitHub Action `github/codeql-action/upload-sarif`\": Você não pode usar GitHub Actions em pipelines Jenkins.\nDocumentação: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning",
    "options": [
      {
        "id": "A",
        "text": "Usando o comando `codeql github upload-results` da CodeQL CLI"
      },
      {
        "id": "B",
        "text": "Usando o endpoint `POST /repos/{owner}/{repo}/code-scanning/sarifs` da GitHub REST API"
      },
      {
        "id": "C",
        "text": "Usando o comando `gh codeql upload-results` da GitHub CLI"
      },
      {
        "id": "D",
        "text": "Ao fazer commit do arquivo SARIF no repositório GitHub"
      },
      {
        "id": "E",
        "text": "Usando o GitHub Action `github/codeql-action/upload-sarif`"
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
    "id": "GH-500-84",
    "stem": "Quais detalhes você pode encontrar em uma página de alerta de verificação de código?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-details",
    "options": [
      {
        "id": "A",
        "text": "Branches afetados pela vulnerabilidade"
      },
      {
        "id": "B",
        "text": "Código vulnerável destacado"
      },
      {
        "id": "C",
        "text": "Gravidade da vulnerabilidade"
      },
      {
        "id": "D",
        "text": "Informação sobre quantas vezes a vulnerabilidade foi explorada"
      },
      {
        "id": "E",
        "text": "Desenvolvedor designado para corrigir a vulnerabilidade"
      },
      {
        "id": "F",
        "text": "ID do banco de dados CodeQL que foi usado para encontrar a vulnerabilidade"
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
    "id": "GH-500-85",
    "stem": "Quais dessas afirmações sobre visualizar os resultados de uma análise do CodeQL são verdadeiras?",
    "options": [
      {
        "id": "A",
        "text": "Você precisa de permissão de gravação para visualizar um resumo de todos os alertas de um repositório na aba Segurança."
      },
      {
        "id": "B",
        "text": "Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de varredura de código nos pull requests."
      },
      {
        "id": "C",
        "text": "Você precisa de permissão de gravação para visualizar anotações de varredura de código nos pull requests."
      },
      {
        "id": "D",
        "text": "Qualquer pessoa com permissão de leitura para um repositório pode visualizar alertas de varredura de código na aba Segurança."
      },
      {
        "id": "E",
        "text": "Apenas o proprietário do repositório pode ver os alertas de varredura de código na aba Segurança."
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
    "id": "GH-500-86",
    "stem": "Quando um workflow do GitHub Actions de análise CodeQL detecta uma nova vulnerabilidade em um pull request, onde você pode encontrar as informações sobre essa vulnerabilidade?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-results-on-pull-requests",
    "options": [
      {
        "id": "A",
        "text": "Diretamente no pull request, na forma de um comentário no PR e uma falha de verificação"
      },
      {
        "id": "B",
        "text": "Na aba de segurança do repositório"
      },
      {
        "id": "C",
        "text": "Nos logs da execução do workflow"
      },
      {
        "id": "D",
        "text": "O workflow de análise CodeQL falhará e produzirá um artefato com os resultados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-87",
    "stem": "Ao visualizar um alerta de varredura de código, para que serve a opção `Show paths`?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository",
    "options": [
      {
        "id": "A",
        "text": "Exibe o caminho através do código que leva ao problema que causa o alerta."
      },
      {
        "id": "B",
        "text": "É usado para mostrar os caminhos para as consultas CodeQL que foram usadas para encontrar a vulnerabilidade."
      },
      {
        "id": "C",
        "text": "Mostrará recomendações sobre como corrigir a vulnerabilidade."
      },
      {
        "id": "D",
        "text": "É usado para mostrar o caminho do arquivo para o banco de dados CodeQL que foi usado para encontrar a vulnerabilidade."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-88",
    "stem": "O que significa descartar um alerta de verificação de código?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#dismissing--alerts",
    "options": [
      {
        "id": "A",
        "text": "Encerrar um alerta que você acredita não precisar ser corrigido"
      },
      {
        "id": "B",
        "text": "Encerrar o alerta após corrigir a vulnerabilidade no código\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-89",
    "stem": "Qual dessas NÃO é uma abordagem válida que se pode adotar para reduzir o tempo que leva para o workflow de análise do CodeQL ser concluído?",
    "options": [
      {
        "id": "A",
        "text": "Executar a análise em todos os eventos de push"
      },
      {
        "id": "B",
        "text": "Usar runners com mais recursos de CPU/RAM"
      },
      {
        "id": "C",
        "text": "Paralelizar a análise para bases de código em várias linguagens"
      },
      {
        "id": "D",
        "text": "Ignorar arquivos e diretórios irrelevantes na análise"
      },
      {
        "id": "E",
        "text": "Reduzir o número de queries que são executadas"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-90",
    "stem": "Qual é o propósito de definir uma categoria SARIF?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#uploading-more-than-one-sarif-file-for-a-commit",
    "options": [
      {
        "id": "A",
        "text": "Usar a categoria para distinguir entre várias análises para a mesma ferramenta ou commit, mas realizadas em diferentes linguagens ou em diferentes partes do código."
      },
      {
        "id": "B",
        "text": "Usar a categoria para distinguir arquivos que foram analisados de arquivos que não foram analisados."
      },
      {
        "id": "C",
        "text": "Usar a categoria para distinguir arquivos que contêm vulnerabilidades de arquivos que não contêm vulnerabilidades."
      },
      {
        "id": "D",
        "text": "Usar uma categoria diferente para cada arquivo analisado para rastrear facilmente as vulnerabilidades até os arquivos que as contêm."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-91",
    "stem": "Como você pode habilitar os recursos do GitHub Advanced Security no GitHub Enterprise Server?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server@3.3/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise",
    "options": [
      {
        "id": "A",
        "text": "Na guia Segurança do console de gerenciamento do administrador do site"
      },
      {
        "id": "B",
        "text": "Conectando-se diretamente à instância do GitHub Enterprise Server por SSH e usando os comandos do shell administrativo `ghe-config`."
      },
      {
        "id": "C",
        "text": "Solicitando uma atualização ao Suporte do GitHub"
      },
      {
        "id": "D",
        "text": "Definindo a opção de configuração `github.advanced_security.enabled` como `true` no arquivo `config.yml` no diretório `/etc/github` na instância do GitHub Enterprise Server."
      },
      {
        "id": "E",
        "text": "Definindo a opção de configuração `github.advanced_security.enabled` como `true` no arquivo `config.yml` no repositório `.github`."
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
    "id": "GH-500-92",
    "stem": "Como habilitar os recursos do GitHub Advanced Security para todos os repositórios em uma organização no GitHub Enterprise Cloud?",
    "explanation": "• \"Conectando-se diretamente à instância do GitHub Enterprise Cloud via SSH e utilizando os comandos do shell administrativo `ghe-config`.\": Essa é uma opção ao usar o GitHub Enterprise Server\nDocumentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories",
    "options": [
      {
        "id": "A",
        "text": "Na seção `Code security and analysis` das configurações da organização"
      },
      {
        "id": "B",
        "text": "Conectando-se diretamente à instância do GitHub Enterprise Cloud via SSH e utilizando os comandos do shell administrativo `ghe-config`."
      },
      {
        "id": "C",
        "text": "Solicitando uma atualização ao suporte do GitHub"
      },
      {
        "id": "D",
        "text": "Na página de administração do site da sua conta Enterprise"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-93",
    "stem": "Como mantenedor de um repositório, onde você deve colocar instruções sobre como relatar uma vulnerabilidade de segurança no seu código?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies",
    "options": [
      {
        "id": "A",
        "text": "No arquivo `SECURITY.md`"
      },
      {
        "id": "B",
        "text": "No arquivo `CONTRIBUTING.md`"
      },
      {
        "id": "C",
        "text": "No arquivo `README.md`"
      },
      {
        "id": "D",
        "text": "No arquivo `CODE_OF_CONDUCT.md`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-94",
    "stem": "O que é uma política de segurança do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies",
    "options": [
      {
        "id": "A",
        "text": "É um documento que instrui os usuários sobre como relatar de forma responsável vulnerabilidades de segurança em um projeto. Ele é normalmente definido em um arquivo `SECURITY.md` em um repositório."
      },
      {
        "id": "B",
        "text": "É uma ferramenta para corrigir automaticamente vulnerabilidades de segurança no seu código."
      },
      {
        "id": "C",
        "text": "É um recurso que permite criptografar seu repositório."
      },
      {
        "id": "D",
        "text": "Uma política de segurança do GitHub é um serviço de assinatura que oferece proteção antivírus para seus projetos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-95",
    "stem": "Como você pode definir uma política padrão de relatório de vulnerabilidades de segurança para todos os repositórios na Organização GitHub `my-org`?",
    "explanation": "Documentação: https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file#supported-file-types",
    "options": [
      {
        "id": "A",
        "text": "Criando um arquivo `SECURITY.md` no repositório `my-org/.github`"
      },
      {
        "id": "B",
        "text": "Configurando uma política de relatório de vulnerabilidades de segurança nas configurações de `Code Security and analysis` da organização"
      },
      {
        "id": "C",
        "text": "Políticas de segurança padrão só podem ser definidas pelo suporte do GitHub"
      },
      {
        "id": "D",
        "text": "Criando um arquivo `SECURITY.md` em cada repositório individual"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-96",
    "stem": "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas do Dependabot para uma enterprise?",
    "explanation": "• \"`GET /orgs/{org}/dependabot/alerts`\": Esse é um endpoint correto para uma organização, mas não para uma enterprise\n• \"`GET /repos/{owner}/{repo}/dependabot/alerts`\": Esse é um endpoint correto para um repositório, mas não para uma enterprise\nDocumentação: https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise",
    "options": [
      {
        "id": "A",
        "text": "`GET /enterprises/{enterprise}/dependabot/alerts`"
      },
      {
        "id": "B",
        "text": "`GET /orgs/{org}/dependabot/alerts`"
      },
      {
        "id": "C",
        "text": "`GET /repos/{owner}/{repo}/dependabot/alerts`"
      },
      {
        "id": "D",
        "text": "`GET /github/{enterprise}/dependabot/alerts`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-97",
    "stem": "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas de varredura de segredos para uma organização?",
    "explanation": "• \"`GET /enterprises/{enterprise}/secret-scanning/alerts`\": Esse é um endpoint correto para uma enterprise, mas não para uma organização\n• \"`GET /repos/{owner}/{repo}/secret-scanning/alerts`\": Esse é um endpoint correto para um repositório, mas não para uma organização\nDocumentação: https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization",
    "options": [
      {
        "id": "A",
        "text": "`GET /orgs/{org}/secret-scanning/alerts`"
      },
      {
        "id": "B",
        "text": "`GET /enterprises/{enterprise}/secret-scanning/alerts`"
      },
      {
        "id": "C",
        "text": "`GET /repos/{owner}/{repo}/secret-scanning/alerts`"
      },
      {
        "id": "D",
        "text": "`GET /github/{org}/secret-scanning/alerts`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-98",
    "stem": "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas de verificação de código em um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/rest/code-scanning/code-scanning?apiVersion=2022-11-28#list-code-scanning-alerts-for-a-repository",
    "options": [
      {
        "id": "A",
        "text": "`GET /repos/{owner}/{repo}/code-scanning/alerts`"
      },
      {
        "id": "B",
        "text": "`GET /orgs/{org}/{repo}/code-scanning/alerts`"
      },
      {
        "id": "C",
        "text": "`GET /{enterprise}/{org}/{repo}/code-scanning/alerts`"
      },
      {
        "id": "D",
        "text": "`GET /github/{repo}/code-scanning/alerts`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-99",
    "stem": "Qual das seguintes afirmações define melhor uma dependência vulnerável?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Uma dependência vulnerável é uma dependência da qual um projeto depende e que contém falhas de segurança que podem potencialmente ser exploradas, comprometendo a segurança do projeto."
      },
      {
        "id": "B",
        "text": "Uma dependência vulnerável é uma dependência da qual um projeto depende e que não foi atualizada há muito tempo."
      },
      {
        "id": "C",
        "text": "Uma dependência vulnerável é uma dependência da qual um projeto depende e que não é amplamente utilizada ou popular."
      },
      {
        "id": "D",
        "text": "Uma dependência vulnerável é uma dependência da qual um projeto depende e que não é verificada pelo GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-100",
    "stem": "O que são atualizações de segurança do Dependabot?",
    "explanation": "• \"É um recurso do Dependabot que cria alertas quando uma vulnerabilidade de segurança é detectada em uma das suas dependências.\": Isso é Dependabot alerts, as atualizações de segurança do Dependabot são baseadas nos alertas do Dependabot.\n• \"É um recurso do Dependabot que cria automaticamente pull requests para atualizar dependências no seu repositório quando uma nova versão é lançada.\": Isso é Dependabot version updates\nDocumentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates",
    "options": [
      {
        "id": "A",
        "text": "É um recurso do Dependabot que cria automaticamente pull requests para atualizar dependências vulneráveis no seu repositório."
      },
      {
        "id": "B",
        "text": "É um recurso do Dependabot que cria uma lista de dependências vulneráveis no seu repositório."
      },
      {
        "id": "C",
        "text": "É um recurso do Dependabot que cria alertas quando uma vulnerabilidade de segurança é detectada em uma das suas dependências."
      },
      {
        "id": "D",
        "text": "É um recurso do Dependabot que cria automaticamente pull requests para atualizar dependências no seu repositório quando uma nova versão é lançada."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-101",
    "stem": "Os alertas do Dependabot estão ativados por padrão em:",
    "explanation": "• \"Apenas repositórios públicos.\": O GitHub detecta dependências vulneráveis em repositórios públicos e exibe o gráfico de dependências, mas não gera alertas do Dependabot por padrão.\nDocumentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Os alertas do Dependabot não estão ativados por padrão em nenhum repositório."
      },
      {
        "id": "B",
        "text": "Apenas repositórios públicos."
      },
      {
        "id": "C",
        "text": "Todos os repositórios."
      },
      {
        "id": "D",
        "text": "Apenas repositórios privados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-102",
    "stem": "Quem pode ativar alertas do Dependabot em um repositório?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Proprietários de repositório e pessoas com acesso de administrador"
      },
      {
        "id": "B",
        "text": "Somente o proprietário do repositório"
      },
      {
        "id": "C",
        "text": "Alertas do Dependabot são ativados em todos os repositórios pelo GitHub e não podem ser desativados ou ativados por nenhum indivíduo."
      },
      {
        "id": "D",
        "text": "Alertas do Dependabot são ativados adicionando uma GitHub Action ao repositório, então qualquer pessoa com acesso de escrita ao repositório pode ativá-los."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-103",
    "stem": "Qual é o nível de acesso mais baixo necessário para ver os alertas do Dependabot em um repositório dentro de uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#access-requirements-for-security-features",
    "options": [
      {
        "id": "A",
        "text": "Write"
      },
      {
        "id": "B",
        "text": "Read"
      },
      {
        "id": "C",
        "text": "Maintain"
      },
      {
        "id": "D",
        "text": "Triage"
      },
      {
        "id": "E",
        "text": "Admin\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-104",
    "stem": "Para ativar os Alertas do Dependabot em todos os repositórios de uma organização, você deve:",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Acesse as configurações de `Code security and analysis` da organização e ative os Alertas do Dependabot para todos os repositórios de uma vez."
      },
      {
        "id": "B",
        "text": "Torne todos os repositórios da organização privados."
      },
      {
        "id": "C",
        "text": "Em todos os repositórios da organização - execute a GitHub Action `actions/enable-ghas` com o parâmetro `alerts` definido como `true`."
      },
      {
        "id": "D",
        "text": "Crie um script que ative os Alertas do Dependabot em todos os repositórios da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-105",
    "stem": "Qual destas é um arquivo de configuração `dependabot.yml` válido?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference",
    "options": [
      {
        "id": "A",
        "code": "version: 2\nupdates:\n  - package-ecosystem: \"npm\"\n    directory: \"/\"\n    schedule:\n      interval: \"daily\""
      },
      {
        "id": "B",
        "code": "version: 2\nconfig:\n  - directory: \"/\"\n    schedule:\n      interval: \"daily\""
      },
      {
        "id": "C",
        "code": "version: 2\nupdates:\n  - package-ecosystem: \"npm\"\n    directory: \"/\"\n    schedule:\n      interval: \"everyday\""
      },
      {
        "id": "D",
        "code": "version: 2\nconfig:\n  - package-ecosystem: \"npm\"\n    directory: \"/\"\n    schedule:\n      interval: \"daily\""
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-106",
    "stem": "Qual destes não é um canal suportado pelo GitHub para receber alertas do Dependabot?",
    "explanation": "• \"GitHub CLI\": Avisos são exibidos como callbacks quando você faz push para repositórios com qualquer dependência insegura\nDocumentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependabot-notifications",
    "options": [
      {
        "id": "A",
        "text": "SMS/Call"
      },
      {
        "id": "B",
        "text": "github.com notification inbox"
      },
      {
        "id": "C",
        "text": "GitHub Mobile"
      },
      {
        "id": "D",
        "text": "GitHub CLI"
      },
      {
        "id": "E",
        "text": "Email"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-107",
    "stem": "Quais são as regras de auto-triagem do Dependabot?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/auto-triage-dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "É um recurso que permite ao Dependabot descartar automaticamente alertas do Dependabot que correspondam a certos critérios."
      },
      {
        "id": "B",
        "text": "As regras de auto-triagem são definidas no arquivo de configuração `dependabot.yml` para especificar quais gerenciadores de pacotes devem ser usados para escanear seu projeto em busca de vulnerabilidades."
      },
      {
        "id": "C",
        "text": "As regras de auto-triagem do Dependabot são usadas para excluir automaticamente dependências antigas em seu projeto."
      },
      {
        "id": "D",
        "text": "As regras de auto-triagem definem com que frequência o Dependabot deve escanear seu projeto em busca de vulnerabilidades."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-108",
    "stem": "Como você pode automatizar a rejeição de alertas de baixa gravidade do Dependabot?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/auto-triage-dependabot-alerts",
    "options": [
      {
        "id": "A",
        "text": "Usando as regras de auto-triagem do Dependabot."
      },
      {
        "id": "B",
        "text": "Configurando o campo `severity` no arquivo `dependabot.yml` como alto"
      },
      {
        "id": "C",
        "text": "Removendo todas as dependências que causam alertas de baixa gravidade"
      },
      {
        "id": "D",
        "text": "Configurando o campo `dismiss-severity` no arquivo `dependabot.yml` como baixo"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-109",
    "stem": "Para habilitar as atualizações de segurança do Dependabot em todos os repositórios de uma organização, você deve:",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories",
    "options": [
      {
        "id": "A",
        "text": "Acesse as configurações de `Code security and analysis` da organização e habilite as Atualizações de Segurança do Dependabot para todos os repositórios de uma vez."
      },
      {
        "id": "B",
        "text": "Torne todos os repositórios da organização privados."
      },
      {
        "id": "C",
        "text": "Execute a GitHub Action `actions/enable-ghas` com o parâmetro `security-updates` definido como `true` em todos os repositórios da organização."
      },
      {
        "id": "D",
        "text": "Crie um script que habilite as Atualizações de Segurança do Dependabot em todos os repositórios da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-110",
    "stem": "A ferramenta que verifica se um pull request introduz dependências com vulnerabilidades de segurança é chamada:",
    "options": [
      {
        "id": "A",
        "text": "Dependency Review"
      },
      {
        "id": "B",
        "text": "Dependabot Alerts"
      },
      {
        "id": "C",
        "text": "Dependabot Security Updates"
      },
      {
        "id": "D",
        "text": "Dependabot Version Updates"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-111",
    "stem": "Você precisa do GitHub Actions habilitado para",
    "explanation": "• \"Todas essas\": GitHub Actions não é necessário para que as atualizações de versão do Dependabot e as atualizações de segurança do Dependabot sejam executadas no GitHub. No entanto, pull requests abertas pelo Dependabot podem acionar workflows que executam ações.\n• \"Nenhuma dessas\": A revisão de dependência utiliza `actions/dependency-review-action` GitHub Action\nDocumentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates",
    "options": [
      {
        "id": "A",
        "text": "Revisão de Dependência"
      },
      {
        "id": "B",
        "text": "Atualizações de Segurança do Dependabot"
      },
      {
        "id": "C",
        "text": "Atualizações de Versão do Dependabot"
      },
      {
        "id": "D",
        "text": "Todas essas"
      },
      {
        "id": "E",
        "text": "Nenhuma dessas"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-112",
    "stem": "O que significa `CVSS`?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels",
    "options": [
      {
        "id": "A",
        "text": "`Common Vulnerability Scoring System`"
      },
      {
        "id": "B",
        "text": "`Code Verification Security System`"
      },
      {
        "id": "C",
        "text": "`Critical Vulnerability Scanning Service`"
      },
      {
        "id": "D",
        "text": "`Cybersecurity Validation Scoring Scheme`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-113",
    "stem": "O que significa `CVE`?",
    "options": [
      {
        "id": "A",
        "text": "`Common Vulnerabilities and Exposures`"
      },
      {
        "id": "B",
        "text": "`Common Virus Elimination`"
      },
      {
        "id": "C",
        "text": "`Cybersecurity Verification Entity`"
      },
      {
        "id": "D",
        "text": "`Code Validation and Enumeration`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-114",
    "stem": "O que significa `CWE`?",
    "explanation": "Documentação: https://cwe.mitre.org/",
    "options": [
      {
        "id": "A",
        "text": "`Common Weakness Enumeration`"
      },
      {
        "id": "B",
        "text": "`Cybersecurity Weakness Enumeration`"
      },
      {
        "id": "C",
        "text": "`Code Wrapping Engine`"
      },
      {
        "id": "D",
        "text": "`Critical Web Elements`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-115",
    "stem": "Qual comando de comentário do Dependabot concluirá com sucesso um pull request?",
    "explanation": "Documentação: https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/manage-dependabot-prs#managing-dependabot-pull-requests-with-comment-commands",
    "options": [
      {
        "id": "A",
        "text": "`@dependabot close`"
      },
      {
        "id": "B",
        "text": "`@dependabot merge`"
      },
      {
        "id": "C",
        "text": "`@dependabot cancel merge`"
      },
      {
        "id": "D",
        "text": "`@dependabot rebase`"
      }
    ],
    "answer": [
      "B"
    ],
    "type": "single"
  },
  {
    "id": "GH-500-116",
    "stem": "Jobs que executam em runners macOS hospedados pelo GitHub consomem minutos a uma taxa __ em comparação com os runners Linux",
    "explanation": "Documentação: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#minute-multipliers",
    "options": [
      {
        "id": "A",
        "text": "a mesma"
      },
      {
        "id": "B",
        "text": "2x"
      },
      {
        "id": "C",
        "text": "5x"
      },
      {
        "id": "D",
        "text": "10x"
      }
    ],
    "answer": [
      "D"
    ],
    "type": "single"
  }
],
};
