import type { Simulado } from "@/types/simulado";

export const simuladoGithubAdministration: Simulado = {
  slug: "github-administration",
  title: "GitHub Administration",
  examCode: "GH-100",
  level: "professional",
  examQuestionCount: 65,
  examDurationMinutes: 120,
  passingScore: 70,
  questions: [
  {
    "id": "GH-100-1",
    "stem": "Como administrador de uma GitHub Organization, você deseja que os usuários se autentiquem usando um provedor de identidade corporativo. Qual das alternativas a seguir é uma maneira de alcançar isso?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-authentication-with-saml-sso",
    "options": [
      {
        "id": "A",
        "text": "Configurar SAML SSO"
      },
      {
        "id": "B",
        "text": "Chaves SSH corporativas"
      },
      {
        "id": "C",
        "text": "Configurar OAuth SSO"
      },
      {
        "id": "D",
        "text": "Configurar MFA"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-2",
    "stem": "O que é o gráfico de dependência do GitHub Dependabot?",
    "options": [
      {
        "id": "A",
        "text": "É uma representação das dependências e dependentes de um repositório."
      },
      {
        "id": "B",
        "text": "Não existe gráfico de dependência."
      },
      {
        "id": "C",
        "text": "É uma ferramenta que propõe automaticamente atualizações de versão para dependências em um repositório."
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
    "id": "GH-100-3",
    "stem": "Qual é o nível mínimo de suporte que oferece ajuda com a instalação e uso do Advanced Security?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server/support/learning-about-github-support/about-github-support#about-github-support",
    "options": [
      {
        "id": "A",
        "text": "GitHub Enterprise Support"
      },
      {
        "id": "B",
        "text": "GitHub Premium Support"
      },
      {
        "id": "C",
        "text": "GitHub Standard Support"
      },
      {
        "id": "D",
        "text": "GitHub Community Support"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-4",
    "stem": "Com quais dos seguintes problemas o Suporte do GitHub pode ajudar a resolver?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server/support/learning-about-github-support/about-github-support#scope-of-support",
    "options": [
      {
        "id": "A",
        "text": "Instalar e usar o GitHub Enterprise Server"
      },
      {
        "id": "B",
        "text": "Identificar e verificar as causas de erros suspeitos"
      },
      {
        "id": "C",
        "text": "Instalar e usar o Advanced Security"
      },
      {
        "id": "D",
        "text": "Assistência com dúvidas sobre contas e cobrança no GitHub"
      },
      {
        "id": "E",
        "text": "Orientação técnica sobre integrações de terceiros, como Jira"
      },
      {
        "id": "F",
        "text": "Ajuda com ferramentas CI/CD externas, como Jenkins"
      },
      {
        "id": "G",
        "text": "Orientação para escrever/depurar novas consultas para CodeQL"
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
    "id": "GH-100-5",
    "stem": "Quais dos seguintes são métodos corretos para gerar e compartilhar um arquivo de diagnóstico para o GitHub Enterprise Server?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files",
    "options": [
      {
        "id": "A",
        "text": "Use o utilitário de linha de comando `ghe-diagnostics` para recuperar os diagnósticos da sua instância."
      },
      {
        "id": "B",
        "text": "Crie um arquivo de diagnóstico a partir do Management Console navegando até a aba Support e clicando em `Download diagnostics info`."
      },
      {
        "id": "C",
        "text": "Use o comando `ghe-support-bundle` para criar e enviar o arquivo de diagnóstico."
      },
      {
        "id": "D",
        "text": "Gere um arquivo de diagnóstico usando o aplicativo móvel do GitHub."
      },
      {
        "id": "E",
        "text": "Execute o comando `ghe-diagnostics -u` para criar e enviar automaticamente o arquivo de diagnóstico para o GitHub Support."
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
    "id": "GH-100-6",
    "stem": "Qual dos procedimentos a seguir é o correto para gerar um pacote de suporte no GitHub Enterprise Server?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles",
    "options": [
      {
        "id": "A",
        "text": "Navegue até a sua instância do GitHub Enterprise Server, selecione a página `Site admin`, depois `Management Console`. Escolha `Support` na barra de navegação superior e clique em `Download support bundle`."
      },
      {
        "id": "B",
        "text": "Gere e baixe um pacote de suporte diretamente para sua máquina local via SSH usando o comando de CLI `ghe-support-bundle -o > support-bundle.tgz`."
      },
      {
        "id": "C",
        "text": "Primeiro, acesse as `Settings` na sua conta corporativa, clique em `License` e, em `GitHub Enterprise Help`, selecione `Upload a support bundle`. Isso gerará e baixará automaticamente o pacote de suporte."
      },
      {
        "id": "D",
        "text": "Clique no seu perfil, depois em `Enterprises`. Na barra lateral da conta corporativa, selecione `Settings` e, em `License`, clique em `Generate a support bundle`. Isso criará e baixará o pacote."
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
    "id": "GH-100-7",
    "stem": "Quais endpoints a GitHub API fornece para administrar sua enterprise?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin",
    "options": [
      {
        "id": "A",
        "text": "Estatísticas de administração"
      },
      {
        "id": "B",
        "text": "Log de auditoria"
      },
      {
        "id": "C",
        "text": "Faturamento"
      },
      {
        "id": "D",
        "text": "Segurança e análise de código"
      },
      {
        "id": "E",
        "text": "Licença"
      },
      {
        "id": "F",
        "text": "SCIM"
      },
      {
        "id": "G",
        "text": "Marketplace"
      },
      {
        "id": "H",
        "text": "Projetos"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "type": "multi",
    "pick": 6
  },
  {
    "id": "GH-100-8",
    "stem": "Quais são as etapas para instalar um GitHub App a partir do GitHub Marketplace para uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations",
    "options": [
      {
        "id": "A",
        "text": "Navegue pelo GitHub Marketplace, selecione o aplicativo, escolha um plano, selecione a organização e, em seguida, revise e instale o aplicativo."
      },
      {
        "id": "B",
        "text": "Acesse as configurações da organização, selecione \"Installed apps\" e, então, adicione manualmente o ID do cliente do aplicativo para instalá-lo."
      },
      {
        "id": "C",
        "text": "Instale o aplicativo usando o GitHub CLI com o comando `gh app install`, especificando o nome da organização."
      },
      {
        "id": "D",
        "text": "Clone o repositório do aplicativo e execute o script de instalação localmente para registrá-lo na sua organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-9",
    "stem": "Quais são os benefícios e riscos de usar apps e ações do GitHub Marketplace?",
    "explanation": "Documentação: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    "options": [
      {
        "id": "A",
        "text": "Os benefícios incluem automação de workflows e funcionalidade aprimorada; os riscos incluem possíveis vulnerabilidades de segurança e dependência de serviços de terceiros."
      },
      {
        "id": "B",
        "text": "Os benefícios se limitam a melhorias na interface do usuário; os riscos incluem altos custos e aumento da complexidade do sistema."
      },
      {
        "id": "C",
        "text": "O único benefício é a facilidade de instalação; os riscos envolvem acesso total ao código-fonte e aos dados."
      },
      {
        "id": "D",
        "text": "Os benefícios incluem suporte oficial do GitHub; os riscos incluem funcionalidade limitada e falta de opções de personalização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-10",
    "stem": "Quais são as principais implicações de habilitar o SAML single sign-on (SSO) para uma organização no GitHub Enterprise Cloud?",
    "options": [
      {
        "id": "A",
        "text": "O SAML SSO permite que os proprietários da organização controlem e protejam o acesso aos recursos da organização."
      },
      {
        "id": "B",
        "text": "Habilitar o SAML SSO provisiona automaticamente novas contas GitHub para todos os usuários do IdP."
      },
      {
        "id": "C",
        "text": "Uma vez que o SAML SSO é habilitado, repositórios públicos tornam-se inacessíveis."
      },
      {
        "id": "D",
        "text": "Habilitar o SAML SSO exige que os membros se autentiquem pelo GitHub, não pelo IdP."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-11",
    "stem": "Qual é a principal diferença entre habilitar o SAML Single Sign-On (SSO) para todas as organizações em uma conta enterprise versus habilitá-lo para uma única organização no GitHub Enterprise Cloud?",
    "options": [
      {
        "id": "A",
        "text": "O SAML SSO para uma única organização permite diferentes IdPs para cada organização, enquanto habilitá-lo para todas as organizações exige um único IdP para toda a conta enterprise."
      },
      {
        "id": "B",
        "text": "Habilitar o SAML SSO para todas as organizações requer autenticação separada para cada organização."
      },
      {
        "id": "C",
        "text": "Habilitar o SAML SSO para todas as organizações limita o acesso ao repositório apenas a colaboradores internos."
      },
      {
        "id": "D",
        "text": "Não há diferença na implementação do SAML SSO entre uma única organização e todas as organizações em uma conta enterprise."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-12",
    "stem": "Qual nível de Suporte do GitHub oferece SLA e suporte escrito em inglês 24/7?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-server/support/learning-about-github-support/about-github-support#about-github-support",
    "options": [
      {
        "id": "A",
        "text": "GitHub Premium Support"
      },
      {
        "id": "B",
        "text": "GitHub Enterprise Support"
      },
      {
        "id": "C",
        "text": "GitHub Standard Support"
      },
      {
        "id": "D",
        "text": "GitHub Community Support"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-13",
    "stem": "Quais são as etapas para habilitar e aplicar SAML SSO para uma única organização?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Navegue até as `Settings` da sua organização, clique em `Authentication security`, selecione `Enable SAML authentication`, configure as definições do IdP, teste a configuração SAML e aplique o SAML SSO."
      },
      {
        "id": "B",
        "text": "Nas `Enterprise account settings`, abra `Security`, habilite SAML SSO e aplique para todas as organizações; depois configure o IdP. (Isso gerencia o SSO em toda a empresa, não para uma única organização.)"
      },
      {
        "id": "C",
        "text": "Na organização, vá para `Settings` → `Member privileges`, habilite `SAML SSO`, adicione os metadados do IdP e aplique sem testar. (SAML é configurado em `Authentication security`, e é necessário testar.)"
      },
      {
        "id": "D",
        "text": "Abra as `Settings` do repositório, escolha `Security`, habilite `SAML SSO`, configure o IdP e aplique. (SAML SSO é configurado no nível da organização, não por repositório.)"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-14",
    "stem": "Qual dos seguintes provedores de identidade (IdPs) NÃO é oficialmente suportado e testado internamente pelo GitHub Enterprise Cloud para SAML SSO?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#supported-identity-providers",
    "options": [
      {
        "id": "A",
        "text": "Google Identity Platform"
      },
      {
        "id": "B",
        "text": "Active Directory Federation Services (AD FS)"
      },
      {
        "id": "C",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "D",
        "text": "Shibboleth"
      },
      {
        "id": "E",
        "text": "Okta"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-15",
    "stem": "Como exigir autenticação de dois fatores (2FA) para uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization#requiring-two-factor-authentication-in-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Nas configurações da organização, em `Security`, selecione `Authentication security` e, em seguida, escolha `Require two-factor authentication for everyone in your organization`."
      },
      {
        "id": "B",
        "text": "Acesse a página da organização, clique em `Members` e configure individualmente o 2FA para cada membro."
      },
      {
        "id": "C",
        "text": "Nas configurações da organização, em `Billing`, selecione `Require two-factor authentication for billing managers only`."
      },
      {
        "id": "D",
        "text": "Envie um e-mail para todos os membros da organização pedindo que ativem manualmente o 2FA em suas contas."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-16",
    "stem": "Quais provedores de identidade (IdPs) oferecem suporte à API SCIM do GitHub Enterprise Cloud para organizações?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations#supported-identity-providers",
    "options": [
      {
        "id": "A",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "B",
        "text": "Okta"
      },
      {
        "id": "C",
        "text": "OneLogin"
      },
      {
        "id": "D",
        "text": "Amazon Cognito"
      },
      {
        "id": "E",
        "text": "Google Identity Platform"
      },
      {
        "id": "F",
        "text": "Auth0"
      },
      {
        "id": "G",
        "text": "Keycloak"
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
    "id": "GH-100-17",
    "stem": "Qual é a função principal dos Enterprise Managed Users no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Gerenciar centralmente a identidade e o acesso dos membros da empresa no GitHub a partir de um provedor de identidade (IdP)."
      },
      {
        "id": "B",
        "text": "Permitir que os usuários gerenciem informações do próprio perfil e o acesso ao repositório de forma independente."
      },
      {
        "id": "C",
        "text": "Permitir que os usuários criem conteúdo público e colaborem com outros usuários no GitHub."
      },
      {
        "id": "D",
        "text": "Fornecer uma plataforma para desenvolvedores individuais gerenciarem seus projetos privados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-18",
    "stem": "Como as contas de usuário são provisionadas com Enterprise Managed Users?",
    "options": [
      {
        "id": "A",
        "text": "As contas de usuário são provisionadas pelo IdP da empresa, com acesso fornecido ao GitHub Enterprise Cloud."
      },
      {
        "id": "B",
        "text": "As contas de usuário são criadas manualmente por cada usuário no GitHub.com."
      },
      {
        "id": "C",
        "text": "As contas de usuário são provisionadas pelo GitHub sem qualquer contribuição do IdP da empresa."
      },
      {
        "id": "D",
        "text": "As contas de usuário são geradas automaticamente com base em endereços de e-mail públicos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-19",
    "stem": "O que é necessário para que um usuário se autentique com uma conta de Enterprise Managed User?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#authenticating-with-a-managed-user-account",
    "options": [
      {
        "id": "A",
        "text": "Os usuários devem se autenticar no IdP da empresa para acessar os recursos no GitHub.com."
      },
      {
        "id": "B",
        "text": "Os usuários se autenticam por meio de uma página de login pública do GitHub sem qualquer interferência da empresa."
      },
      {
        "id": "C",
        "text": "A autenticação é ignorada para Enterprise Managed Users para facilitar o acesso."
      },
      {
        "id": "D",
        "text": "Os usuários fornecem um token de autenticação especial gerenciado pelo GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-20",
    "stem": "Qual afirmação é verdadeira em relação a nomes de usuários e informações de perfil para Enterprise Managed Users?",
    "options": [
      {
        "id": "A",
        "text": "Os nomes de usuários e as informações de perfil são definidos através do IdP da empresa e não podem ser alterados pelos usuários."
      },
      {
        "id": "B",
        "text": "Os usuários podem alterar seus nomes de usuários e informações de perfil a qualquer momento no GitHub."
      },
      {
        "id": "C",
        "text": "Os nomes de usuários e as informações de perfil são definidos pelos próprios usuários durante a configuração da conta no GitHub."
      },
      {
        "id": "D",
        "text": "O GitHub atribui automaticamente nomes de usuários e informações de perfil aleatórios para maior segurança."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-21",
    "stem": "Quais são as implicações de um usuário gerenciado precisar contribuir para recursos fora da empresa?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom",
    "options": [
      {
        "id": "A",
        "text": "Usuários gerenciados não têm permissão para contribuir com recursos públicos e precisam de uma conta pessoal separada para esse propósito."
      },
      {
        "id": "B",
        "text": "Usuários gerenciados podem contribuir livremente com recursos públicos e empresas externas sem restrições."
      },
      {
        "id": "C",
        "text": "Usuários gerenciados devem solicitar permissão especial do GitHub para contribuir com recursos externos."
      },
      {
        "id": "D",
        "text": "Contribuições para recursos externos são gerenciadas automaticamente pelo IdP da empresa."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-22",
    "stem": "O que é SCIM no contexto do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations",
    "options": [
      {
        "id": "A",
        "text": "SCIM, ou System for Cross-domain Identity Management, é um protocolo projetado para automatizar o provisionamento e a gestão de identidades. No GitHub, o SCIM integra-se com Provedores de Identidade (IdPs) externos para gerenciar as associações de organizações do GitHub Enterprise Cloud, usando uma URL base para endpoints SCIM para executar operações como listar, convidar e atualizar identidades de usuários."
      },
      {
        "id": "B",
        "text": "SCIM é um sistema de gestão de usuários exclusivo do GitHub, que permite aos usuários personalizar seus perfis e repositórios. No GitHub, o SCIM funciona fornecendo uma interface específica da plataforma para essas personalizações."
      },
      {
        "id": "C",
        "text": "SCIM significa System for Cross-domain Identity Management. É um protocolo que o GitHub utiliza para gerenciar sistemas de banco de dados internos, com foco principal em proteger dados e informações de usuários sem integração com sistemas externos."
      },
      {
        "id": "D",
        "text": "SCIM é uma ferramenta específica do GitHub usada para melhorar o desempenho da rede dos servidores do GitHub. Ela funciona gerenciando a largura de banda da internet e o tráfego dentro do ecossistema do GitHub, garantindo desempenho ideal para todos os usuários."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-23",
    "stem": "Qual é o propósito do SCIM e da sincronização de equipes no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "A sincronização de equipes conecta equipes do GitHub com grupos do IdP para gerenciamento de membros, baseando-se no SAML single sign-on, enquanto o SCIM automatiza o provisionamento e gerenciamento de identidades entre sistemas, incluindo a criação e atualização de identidades de usuários e acessos."
      },
      {
        "id": "B",
        "text": "A sincronização de equipes é um processo automatizado que permite aos usuários gerenciar seus perfis públicos e repositórios através de uma interface específica do GitHub."
      },
      {
        "id": "C",
        "text": "A sincronização de equipes é usada para segurança interna de dados e gerenciamento de informações do usuário, enquanto o SCIM é uma interface para personalização de perfis de usuários e repositórios."
      },
      {
        "id": "D",
        "text": "Tanto a sincronização de equipes quanto o SCIM no GitHub são usados para serviços de provisionamento de usuários, convidando não-membros a ingressar em organizações e gerenciar perfis públicos e repositórios."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-24",
    "stem": "Quais são os métodos de autenticação válidos disponíveis no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github",
    "options": [
      {
        "id": "A",
        "text": "Nome de usuário e senha (com 2FA opcional)"
      },
      {
        "id": "B",
        "text": "Personal access token (PAT)"
      },
      {
        "id": "C",
        "text": "SSH KEY"
      },
      {
        "id": "D",
        "text": "SAML SSO para contas empresariais"
      },
      {
        "id": "E",
        "text": "Autenticação por Passkey"
      },
      {
        "id": "F",
        "text": "Tokens OAuth para integrações com aplicativos de terceiros"
      },
      {
        "id": "G",
        "text": "Sistema de código QR vinculado a um dispositivo móvel"
      },
      {
        "id": "H",
        "text": "Autenticação via contas de redes sociais como Facebook ou Google"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "type": "multi",
    "pick": 6
  },
  {
    "id": "GH-100-25",
    "stem": "Como o GitHub Enterprise Cloud difere do GitHub Enterprise Server?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-for-enterprises#about-deployment-options",
    "options": [
      {
        "id": "A",
        "text": "O GitHub Enterprise Cloud é hospedado pelo GitHub, enquanto o GitHub Enterprise Server é hospedado em seus próprios servidores ou em um provedor de nuvem."
      },
      {
        "id": "B",
        "text": "O GitHub Enterprise Cloud é hospedado em seus servidores, enquanto o GitHub Enterprise Server é hospedado pelo GitHub"
      },
      {
        "id": "C",
        "text": "O GitHub Enterprise Cloud oferece apenas repositórios públicos, enquanto o GitHub Enterprise Server oferece repositórios privados"
      },
      {
        "id": "D",
        "text": "O GitHub Enterprise Cloud é projetado para uso individual, enquanto o GitHub Enterprise Server é para organizações"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-26",
    "stem": "Quais das seguintes são funcionalidades extras fornecidas pelo GitHub Enterprise Cloud em comparação ao plano GitHub Free?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud",
    "options": [
      {
        "id": "A",
        "text": "Autenticação SAML"
      },
      {
        "id": "B",
        "text": "Minutos adicionais do GitHub Actions"
      },
      {
        "id": "C",
        "text": "Sites GitHub Pages publicados de forma privada"
      },
      {
        "id": "D",
        "text": "Capacidade de restringir notificações por e-mail a domínios verificados"
      },
      {
        "id": "E",
        "text": "Repositórios públicos gratuitos para todos os usuários"
      },
      {
        "id": "F",
        "text": "Repositórios privados ilimitados para usuários individuais"
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
    "id": "GH-100-27",
    "stem": "Qual é o propósito das contas corporativas no GitHub Enterprise Cloud?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud",
    "options": [
      {
        "id": "A",
        "text": "Fornecer aos administradores um único ponto de visibilidade e gerenciamento em várias organizações"
      },
      {
        "id": "B",
        "text": "Fornecer aos usuários individuais repositórios privados ilimitados"
      },
      {
        "id": "C",
        "text": "Oferecer acesso gratuito ao GitHub Enterprise Server"
      },
      {
        "id": "D",
        "text": "Permitir que os usuários gerenciem suas contribuições públicas e privadas separadamente"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-28",
    "stem": "Qual das opções a seguir é uma opção de gerenciamento exclusiva do GitHub Enterprise Cloud?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud",
    "options": [
      {
        "id": "A",
        "text": "Usar Enterprise Managed Users para criar e gerenciar contas de usuários por meio do seu IdP"
      },
      {
        "id": "B",
        "text": "Permitir que os usuários criem e gerenciem suas próprias contas pessoais sem restrições"
      },
      {
        "id": "C",
        "text": "Forçar todos os usuários a adotarem um padrão de codificação uniforme"
      },
      {
        "id": "D",
        "text": "Exigir que todo o código seja revisado pelo GitHub antes de ser publicado"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-29",
    "stem": "Qual é a principal restrição das contas de Usuários Gerenciados pela Empresa no GitHub Enterprise Cloud?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud",
    "options": [
      {
        "id": "A",
        "text": "Elas não podem interagir com repositórios públicos fora de sua empresa."
      },
      {
        "id": "B",
        "text": "Elas estão restritas a uma única organização dentro da conta do GitHub Enterprise."
      },
      {
        "id": "C",
        "text": "Elas exigem aprovação do administrador para criar ou ingressar em organizações fora da empresa."
      },
      {
        "id": "D",
        "text": "O acesso a integrações de terceiros é limitado e deve ser aprovado por um administrador da empresa."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-30",
    "stem": "Para que o GitHub Enterprise Server é principalmente projetado?",
    "options": [
      {
        "id": "A",
        "text": "Uma plataforma autohospedada para desenvolvimento de software dentro da sua empresa"
      },
      {
        "id": "B",
        "text": "Uma plataforma de desenvolvimento de software baseada em nuvem para projetos de código aberto"
      },
      {
        "id": "C",
        "text": "Uma plataforma para desenvolvedores individuais hospedarem projetos pessoais"
      },
      {
        "id": "D",
        "text": "Um serviço para implementar e gerenciar aplicativos containerizados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-31",
    "stem": "Em quais ambientes o GitHub Enterprise Server pode ser implantado?",
    "options": [
      {
        "id": "A",
        "text": "Em centro de dados local ou em um serviço de nuvem pública (por exemplo, AWS, GCP, Azure)"
      },
      {
        "id": "B",
        "text": "Exclusivamente em ambientes de nuvem privada"
      },
      {
        "id": "C",
        "text": "Apenas em servidores gerenciados pelo GitHub"
      },
      {
        "id": "D",
        "text": "Diretamente em dispositivos de computação pessoais"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-32",
    "stem": "Qual das seguintes é uma característica principal do GitHub Enterprise Server?",
    "options": [
      {
        "id": "A",
        "text": "Executa na sua infraestrutura e é governado pelos controles de acesso e segurança que você define"
      },
      {
        "id": "B",
        "text": "Repositórios públicos e privados ilimitados no GitHub.com"
      },
      {
        "id": "C",
        "text": "Acesso gratuito ao GitHub Actions e GitHub Packages"
      },
      {
        "id": "D",
        "text": "Implantação automática para qualquer provedor de serviço em nuvem"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-33",
    "stem": "Como a administração do GitHub Enterprise Server pode ser gerenciada?",
    "options": [
      {
        "id": "A",
        "text": "Via navegador, acesso administrativo SSH, e APIs REST ou GraphQL"
      },
      {
        "id": "B",
        "text": "Apenas por meio de acesso direto ao console do servidor"
      },
      {
        "id": "C",
        "text": "Exclusivamente pela interface web do GitHub.com"
      },
      {
        "id": "D",
        "text": "Somente através de ferramentas de gerenciamento de terceiros"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-34",
    "stem": "O que o GitHub recomenda para proteger contra perda de dados no GitHub Enterprise Server?",
    "options": [
      {
        "id": "A",
        "text": "Estabelecer um plano de recuperação de desastres e configurar backups"
      },
      {
        "id": "B",
        "text": "Usar serviços de armazenamento em nuvem de terceiros para backup"
      },
      {
        "id": "C",
        "text": "Confiar nos serviços automáticos de backup em nuvem do GitHub"
      },
      {
        "id": "D",
        "text": "Backup manual exportando dados para armazenamento local periodicamente"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-35",
    "stem": "Qual é o custo de uso do GitHub Actions para repositórios públicos?",
    "options": [
      {
        "id": "A",
        "text": "O uso do GitHub Actions é gratuito para repositórios públicos."
      },
      {
        "id": "B",
        "text": "O GitHub Actions cobra por cada minuto usado em repositórios públicos."
      },
      {
        "id": "C",
        "text": "Repositórios públicos recebem metade da quantidade de minutos gratuitos em comparação aos repositórios privados."
      },
      {
        "id": "D",
        "text": "O GitHub Actions não está disponível para repositórios públicos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-36",
    "stem": "Como os minutos são calculados para jobs que executam em sistemas operacionais diferentes no GitHub Actions?",
    "options": [
      {
        "id": "A",
        "text": "Jobs em Windows e macOS consomem minutos a uma taxa 2 e 10 vezes maior do que jobs em runners Linux."
      },
      {
        "id": "B",
        "text": "Todos os jobs, independentemente do sistema operacional, consomem minutos à mesma taxa."
      },
      {
        "id": "C",
        "text": "Jobs em Linux consomem minutos a uma taxa 2 e 10 vezes maior do que jobs em runners Windows e macOS."
      },
      {
        "id": "D",
        "text": "Apenas jobs em macOS consomem minutos a uma taxa diferente, 5 vezes maior que Linux e Windows."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-37",
    "stem": "Qual é o limite de gastos padrão para o GitHub Actions em contas faturadas mensalmente?",
    "options": [
      {
        "id": "A",
        "text": "O limite de gastos padrão é US$ 0, impedindo o uso adicional além das quantidades incluídas."
      },
      {
        "id": "B",
        "text": "O limite de gastos padrão é US$ 50, permitindo algum excesso além das quantidades incluídas."
      },
      {
        "id": "C",
        "text": "Não há limite de gastos padrão, e os usuários são cobrados por qualquer uso além da camada gratuita."
      },
      {
        "id": "D",
        "text": "O limite de gastos padrão varia com base no histórico de uso da conta."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-38",
    "stem": "Como o proprietário de uma organização pode encontrar estatísticas sobre o uso de licenças para o GitHub Enterprise Server?",
    "options": [
      {
        "id": "A",
        "text": "Navegando até o painel `Site admin` para visualizar o uso de licenças nas configurações da conta `Enterprise account`."
      },
      {
        "id": "B",
        "text": "Através de solicitações diretas por e-mail ao GitHub Support."
      },
      {
        "id": "C",
        "text": "Verificando a página de perfil público da organização para estatísticas em tempo real."
      },
      {
        "id": "D",
        "text": "Usando a GitHub API para obter dados em tempo real sobre o uso de licenças para o GitHub Enterprise Server."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-39",
    "stem": "Como um administrador de organização pode definir permissões padrão para novos membros em uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization#setting-base-permissions",
    "options": [
      {
        "id": "A",
        "text": "Na seção `Access` das configurações da organização, selecione `Member privileges`, depois, em `Base permissions`, escolha um nível de permissão e confirme a alteração."
      },
      {
        "id": "B",
        "text": "As permissões padrão são determinadas automaticamente pelo GitHub com base na atividade da organização e não podem ser definidas manualmente."
      },
      {
        "id": "C",
        "text": "Configurando permissões individualmente para cada novo membro à medida que são adicionados à organização, sem um nível padrão disponível."
      },
      {
        "id": "D",
        "text": "As permissões padrão para novos membros são definidas através de uma chamada à API do GitHub especificando o nível de permissão base desejado para a organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-40",
    "stem": "Como a sincronização de equipes com o Microsoft Entra ID (anteriormente Azure AD) beneficia as organizações do GitHub Enterprise Cloud?",
    "options": [
      {
        "id": "A",
        "text": "Permite o reflexo automático de alterações de membros no grupo do IdP no GitHub, reduzindo a necessidade de atualizações manuais e scripts personalizados ao sincronizar equipes nas organizações do GitHub com grupos do IdP."
      },
      {
        "id": "B",
        "text": "Permite que o GitHub funcione como um provedor de identidade para o Microsoft Entra ID, simplificando os processos de autenticação de usuários."
      },
      {
        "id": "C",
        "text": "Converte automaticamente as associações de grupos do Microsoft Entra ID em repositórios correspondentes no GitHub, facilitando a alocação de recursos."
      },
      {
        "id": "D",
        "text": "Faz backup dos dados da organização do GitHub nos servidores do Microsoft Entra ID, fornecendo uma camada adicional de redundância de dados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-41",
    "stem": "Qual é o principal objetivo de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations#about-organizations",
    "options": [
      {
        "id": "A",
        "text": "Permitir que empresas e projetos de código aberto colaborem em vários projetos ao mesmo tempo com recursos avançados de segurança e administração."
      },
      {
        "id": "B",
        "text": "Fornecer aos usuários individuais um espaço pessoal para hospedar seus projetos privados."
      },
      {
        "id": "C",
        "text": "Servir como um serviço de backup para repositórios de código."
      },
      {
        "id": "D",
        "text": "Oferecer uma plataforma para blogs pessoais e hospedagem de sites."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-42",
    "stem": "Qual função em uma organização do GitHub tem autoridade para gerenciar o acesso aos recursos da organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Organization owner"
      },
      {
        "id": "B",
        "text": "Team member"
      },
      {
        "id": "C",
        "text": "Outside collaborator"
      },
      {
        "id": "D",
        "text": "Repository contributor\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-43",
    "stem": "Como a gestão de acesso e a colaboração podem ser simplificadas dentro de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations#about-organizations",
    "options": [
      {
        "id": "A",
        "text": "Criando equipes aninhadas que reflitam a estrutura do grupo, com permissões de acesso em cascata."
      },
      {
        "id": "B",
        "text": "Por meio do uso exclusivo de single sign-on (SSO) para todos os membros."
      },
      {
        "id": "C",
        "text": "Concedendo permissões de nível de proprietário a todos os membros."
      },
      {
        "id": "D",
        "text": "Limitando a criação de repositórios apenas aos proprietários da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-44",
    "stem": "Qual plano do GitHub permite usar a varredura de segredos em repositórios privados?",
    "explanation": "Documentação: https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
    "options": [
      {
        "id": "A",
        "text": "Qualquer plano GitHub Enterprise com uma licença GHAS"
      },
      {
        "id": "B",
        "text": "GitHub Enterprise Cloud"
      },
      {
        "id": "C",
        "text": "GitHub Enterprise Server"
      },
      {
        "id": "D",
        "text": "GitHub Pro"
      },
      {
        "id": "E",
        "text": "GitHub Team"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-45",
    "stem": "Qual é a vantagem de ter uma conta empresarial no GitHub Enterprise Cloud para uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-for-enterprises#about-github-for-enterprises",
    "options": [
      {
        "id": "A",
        "text": "Permite que os proprietários gerenciem centralmente políticas e faturamento para múltiplas organizações."
      },
      {
        "id": "B",
        "text": "Oferece repositórios privados ilimitados para usuários individuais."
      },
      {
        "id": "C",
        "text": "Fornece um domínio gratuito para hospedar o site da organização."
      },
      {
        "id": "D",
        "text": "Inscreve automaticamente a organização em um plano de suporte premium."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-46",
    "stem": "Como uma organização pode melhorar a segurança dos seus workflows do GitHub Actions?",
    "options": [
      {
        "id": "A",
        "text": "Adotando práticas de segurança, como o manuseio seguro de secrets e a revisão regular de logs de auditoria para identificar anomalias."
      },
      {
        "id": "B",
        "text": "Exigindo que todos os membros utilizem autenticação biométrica para acessar o GitHub."
      },
      {
        "id": "C",
        "text": "Tornando todos os repositórios dentro da organização públicos para garantir transparência."
      },
      {
        "id": "D",
        "text": "Desativando a criação e o processamento de issues e pull requests para reduzir superfícies de ataque."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-47",
    "stem": "Quais das opções a seguir NÃO são funções reconhecidas dentro de uma organização do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#about-organization-roles",
    "options": [
      {
        "id": "A",
        "text": "Organization owners"
      },
      {
        "id": "B",
        "text": "Organization members"
      },
      {
        "id": "C",
        "text": "Organization moderators"
      },
      {
        "id": "D",
        "text": "Billing managers"
      },
      {
        "id": "E",
        "text": "Security Managers"
      },
      {
        "id": "F",
        "text": "Outside Collaborators"
      },
      {
        "id": "G",
        "text": "GitHub App managers"
      },
      {
        "id": "H",
        "text": "Project managers"
      },
      {
        "id": "I",
        "text": "External Contributors"
      },
      {
        "id": "J",
        "text": "Project Codeowners"
      }
    ],
    "answer": [
      "H",
      "I",
      "J"
    ],
    "type": "multi",
    "pick": 3
  },
  {
    "id": "GH-100-48",
    "stem": "Qual função em uma organização no GitHub possui o nível mais alto de acesso?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Owner"
      },
      {
        "id": "B",
        "text": "Member"
      },
      {
        "id": "C",
        "text": "Admin"
      },
      {
        "id": "D",
        "text": "Billing manager"
      },
      {
        "id": "E",
        "text": "Outside collaborator"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-49",
    "stem": "Quais são as permissões padrão de um membro em uma organização GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Os membros podem criar repositórios privados (sujeito à política da organização) e participar de projetos dentro da organização aos quais eles têm acesso concedido."
      },
      {
        "id": "B",
        "text": "Eles têm a capacidade de excluir a organização."
      },
      {
        "id": "C",
        "text": "Eles podem gerenciar informações de faturamento."
      },
      {
        "id": "D",
        "text": "Os membros não podem interagir com os repositórios da organização até serem promovidos a proprietários."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-50",
    "stem": "Qual é a principal responsabilidade de um gerente de cobrança em uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Gerenciar as configurações de cobrança da organização, incluindo atualização de métodos de pagamento e revisão de faturas."
      },
      {
        "id": "B",
        "text": "Eles podem gerenciar permissões de equipe e configurações de repositório."
      },
      {
        "id": "C",
        "text": "Criar e excluir todos os repositórios dentro da organização."
      },
      {
        "id": "D",
        "text": "Atribuir e remover proprietários da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-51",
    "stem": "Como o papel de um colaborador externo difere do de um membro dentro de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Colaboradores externos recebem acesso por repositório, enquanto os membros podem ter permissões mais amplas dentro da organização, dependendo de seu papel."
      },
      {
        "id": "B",
        "text": "Colaboradores externos têm a capacidade de modificar as configurações da organização."
      },
      {
        "id": "C",
        "text": "Não há distinção nos níveis de acesso entre colaboradores externos e membros."
      },
      {
        "id": "D",
        "text": "Colaboradores externos podem adicionar ou remover membros da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-52",
    "stem": "Como o proprietário de uma organização pode alterar o papel de um membro dentro da organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Navegando até a aba `People` na Organização e ajustando o papel do membro na lista."
      },
      {
        "id": "B",
        "text": "Os membros podem alterar seus próprios papéis nas configurações da organização."
      },
      {
        "id": "C",
        "text": "Excluindo e reinviting o membro com o papel desejado."
      },
      {
        "id": "D",
        "text": "Alterações de papéis dentro de uma organização não são possíveis; uma nova organização deve ser criada."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-53",
    "stem": "Como você pode conceder a um usuário as permissões mínimas necessárias para acessar um repositório específico dentro de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "Adicione o usuário como colaborador externo ao repositório com acesso `Read`, permitindo que ele clone o repositório sem permitir que faça push de alterações."
      },
      {
        "id": "B",
        "text": "Conceda automaticamente a eles acesso como 'Owner' para garantir que possam gerenciar as configurações da organização e o acesso ao repositório."
      },
      {
        "id": "C",
        "text": "Forneça a eles acesso 'Write' a todos os repositórios da organização para garantir que possam contribuir para os projetos."
      },
      {
        "id": "D",
        "text": "Não é possível conceder acesso a repositórios específicos; é necessário dar acesso à organização inteira."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-54",
    "stem": "Quais são os principais recursos e funcionalidades das equipes dentro de uma organização do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "As equipes em organizações do GitHub permitem gerenciar o acesso e as notificações para grupos que refletem a estrutura da empresa, com capacidades de acesso administrativo, leitura ou escrita aos repositories, menções para notificações e o uso de equipes aninhadas para gestão hierárquica."
      },
      {
        "id": "B",
        "text": "As equipes são apenas para networking social dentro do GitHub, permitindo que os membros de uma organização se comuniquem e compartilhem atualizações sem nenhum impacto no acesso aos repositories ou nas notificações organizacionais."
      },
      {
        "id": "C",
        "text": "As equipes do GitHub são idênticas aos membros da organização, sem recursos ou funcionalidades distintas, como gestão de acessos ou notificações."
      },
      {
        "id": "D",
        "text": "As equipes dentro do GitHub podem incluir outside collaborators e são usadas principalmente para comunicação externa, sem qualquer estrutura organizacional interna ou permissões de acesso aos repositories."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-55",
    "stem": "O que diferencia uma equipe visível de uma equipe secreta em uma organização GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "As equipes visíveis podem ser visualizadas e mencionadas por qualquer membro da organização, enquanto as equipes secretas são visíveis apenas para os membros da equipe e os proprietários da organização, aprimorando a privacidade para colaborações sensíveis."
      },
      {
        "id": "B",
        "text": "As equipes visíveis têm acesso a todos os repositórios por padrão, enquanto as equipes secretas não têm acesso a nenhum repositório até que seja explicitamente concedido."
      },
      {
        "id": "C",
        "text": "As equipes secretas podem gerenciar as configurações da organização, ao contrário das equipes visíveis, que só podem gerenciar as configurações do repositório."
      },
      {
        "id": "D",
        "text": "Não há diferença funcional; os termos simplesmente refletem a preferência da equipe para comunicação."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-56",
    "stem": "Como as equipes aninhadas beneficiam a estrutura de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "Equipes aninhadas refletem a hierarquia da organização, herdando permissões de acesso das equipes principais e simplificando a gestão de permissões e a comunicação em vários níveis da organização."
      },
      {
        "id": "B",
        "text": "Equipes aninhadas complicam a estrutura da organização e devem ser evitadas para simplificar a gestão de equipes."
      },
      {
        "id": "C",
        "text": "Equipes filhas podem substituir as permissões de acesso de suas equipes principais, proporcionando flexibilidade no controle de acesso."
      },
      {
        "id": "D",
        "text": "Membros de equipes aninhadas possuem acesso restrito para se comunicar com membros de suas equipes principais, aumentando a segurança."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-57",
    "stem": "O que pode ser encontrado na página de uma equipe dentro de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "Membros da equipe, equipes subordinadas, repositórios da equipe e acesso às configurações da equipe, incluindo a capacidade de atualizar a descrição e a foto de perfil da equipe."
      },
      {
        "id": "B",
        "text": "Um recurso de bate-papo ao vivo que permite comunicação em tempo real entre os membros da equipe."
      },
      {
        "id": "C",
        "text": "Relatórios financeiros relacionados ao uso de recursos da organização pela equipe."
      },
      {
        "id": "D",
        "text": "Links externos para recursos não relacionados ao GitHub usados pela equipe."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-58",
    "stem": "Qual é o papel de um Security Manager dentro de uma organização do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "Um Security Manager tem permissões para visualizar alertas de segurança e gerenciar configurações de segurança de código em toda a organização, além de permissões de leitura para todos os repositórios."
      },
      {
        "id": "B",
        "text": "Security Managers são responsáveis por transações financeiras e segurança das informações de faturamento dentro da organização."
      },
      {
        "id": "C",
        "text": "Eles podem excluir ou transferir a propriedade de qualquer repositório dentro da organização por razões de segurança."
      },
      {
        "id": "D",
        "text": "Security Managers gerenciam exclusivamente as configurações de autenticação em dois fatores para todos os membros da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-59",
    "stem": "Quais permissões um gerente de GitHub App tem dentro de uma organização?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization#about-github-app-managers",
    "options": [
      {
        "id": "A",
        "text": "Os gerentes de GitHub App podem gerenciar as configurações dos registros do GitHub App pertencentes à organização, mas não têm permissões para instalar ou desinstalar aplicativos GitHub."
      },
      {
        "id": "B",
        "text": "Eles podem acessar e modificar o código-fonte de qualquer GitHub App pertencente à organização."
      },
      {
        "id": "C",
        "text": "Os gerentes de GitHub App são os únicos papéis que podem criar novos GitHub Apps dentro da organização."
      },
      {
        "id": "D",
        "text": "Eles têm a capacidade de conceder permissões de instalação de aplicativos a colaboradores externos."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-60",
    "stem": "Quais funções um membro da equipe pode ter dentro de uma equipe no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams",
    "options": [
      {
        "id": "A",
        "text": "Team maintainer, Team member"
      },
      {
        "id": "B",
        "text": "Project manager, Contributor, Viewer"
      },
      {
        "id": "C",
        "text": "Repository owner, Repository collaborator"
      },
      {
        "id": "D",
        "text": "Billing manager, Security manager, App manager"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-61",
    "stem": "Qual função de repositório em uma organização no GitHub é recomendada para colaboradores que precisam gerenciar proativamente issues e pull requests sem ter acesso de escrita?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization",
    "options": [
      {
        "id": "A",
        "text": "Triage"
      },
      {
        "id": "B",
        "text": "Read"
      },
      {
        "id": "C",
        "text": "Write"
      },
      {
        "id": "D",
        "text": "Maintain"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-62",
    "stem": "Quais são os papéis de repositório disponíveis em uma organização do GitHub?",
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
        "text": "Write"
      },
      {
        "id": "D",
        "text": "Maintain"
      },
      {
        "id": "E",
        "text": "Admin"
      },
      {
        "id": "F",
        "text": "Owner"
      },
      {
        "id": "G",
        "text": "Moderator"
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
    "id": "GH-100-63",
    "stem": "Que funcionalidade o log de auditoria oferece aos administradores de organizações dentro de uma organização do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "O log de auditoria permite que os administradores da organização revisem as ações realizadas pelos membros, incluindo detalhes como quem realizou a ação, qual foi a ação e quando foi realizada, auxiliando no monitoramento de segurança e conformidade."
      },
      {
        "id": "B",
        "text": "Ele permite que os administradores da organização modifiquem diretamente as configurações do repositório e imponham regras de proteção de branch."
      },
      {
        "id": "C",
        "text": "O acesso de auditoria concede a capacidade de aprovar ou rejeitar alterações de código antes que sejam mescladas."
      },
      {
        "id": "D",
        "text": "Ele fornece um conjunto de permissões temporárias para realizar ações administrativas dentro de um repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-64",
    "stem": "Quais formatos estão disponíveis para exportar o log de auditoria de uma organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "JSON e CSV."
      },
      {
        "id": "B",
        "text": "PDF e DOCX."
      },
      {
        "id": "C",
        "text": "TXT e RTF."
      },
      {
        "id": "D",
        "text": "ZIP."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-65",
    "stem": "Como um administrador da organização pode pesquisar no log de auditoria por eventos relacionados a modificações de webhooks?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Usando o qualificador `operation` na consulta de pesquisa, como `operation:modify`, para encontrar eventos em que um recurso existente, como um webhook, foi modificado."
      },
      {
        "id": "B",
        "text": "Digitando diretamente 'modificações de webhook' na barra de pesquisa do log de auditoria."
      },
      {
        "id": "C",
        "text": "Filtrando o log de auditoria exclusivamente por intervalo de datas, sem a capacidade de especificar tipos de eventos."
      },
      {
        "id": "D",
        "text": "Usando comandos de voz para solicitar verbalmente uma pesquisa por eventos de modificação de webhook."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-66",
    "stem": "Por que os webhooks podem ser considerados uma alternativa eficiente ao audit log ou à API polling em determinados casos de uso dentro de organizações do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Os webhooks fornecem notificações em tempo real para o seu servidor quando eventos específicos ocorrem, o que pode ser mais eficiente do que buscar no audit log ou fazer polling na API para esses eventos."
      },
      {
        "id": "B",
        "text": "Os webhooks permitem que os administradores da organização revisem e aprovem manualmente cada evento antes que ele seja registrado."
      },
      {
        "id": "C",
        "text": "Eles fornecem um registro de eventos mais detalhado e abrangente do que o audit log."
      },
      {
        "id": "D",
        "text": "Os webhooks são o único método para receber notificações sobre ações em repositórios privados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-67",
    "stem": "Quais ferramentas podem ser usadas para remover dados sensíveis do histórico de um repositório Git?",
    "options": [
      {
        "id": "A",
        "text": "git filter-repo & BFG Repo-Cleaner"
      },
      {
        "id": "B",
        "text": "git revert & git reset --hard"
      },
      {
        "id": "C",
        "text": "git clean & git prune"
      },
      {
        "id": "D",
        "text": "git gc & git reflog expire"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-68",
    "stem": "O que você deve fazer antes de executar git filter-repo ou BFG Repo-Cleaner para remover dados sensíveis do seu repositório?",
    "options": [
      {
        "id": "A",
        "text": "Mesclar ou fechar todas as pull requests abertas"
      },
      {
        "id": "B",
        "text": "Excluir o diretório .git"
      },
      {
        "id": "C",
        "text": "Criar uma nova branch"
      },
      {
        "id": "D",
        "text": "Enviar todas as alterações locais para o GitHub\n---"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-69",
    "stem": "Após remover dados sensíveis do histórico de um repositório usando `git-filter-repo` e enviá-los ao GitHub, qual é um passo necessário para remover completamente os dados do GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#fully-removing-the-data-from-github",
    "options": [
      {
        "id": "A",
        "text": "Contatar o suporte do GitHub para remover visualizações e referências em cache"
      },
      {
        "id": "B",
        "text": "Notificar todos os usuários que fizeram fork do repositório"
      },
      {
        "id": "C",
        "text": "Alterar a visibilidade do repositório para privado"
      },
      {
        "id": "D",
        "text": "Renomear o repositório"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-70",
    "stem": "Quais dessas práticas podem ajudar a evitar o envio acidental de dados ou arquivos sensíveis para um repositório Git?",
    "explanation": "Documentação: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#avoiding-accidental-commits-in-the-future",
    "options": [
      {
        "id": "A",
        "text": "Adicionar arquivos ou padrões sensíveis a um arquivo `.gitignore`"
      },
      {
        "id": "B",
        "text": "Alterar suas senhas regularmente"
      },
      {
        "id": "C",
        "text": "Desabilitar o acesso de push ao repositório"
      },
      {
        "id": "D",
        "text": "Usar `git add .` antes de todos os commits"
      },
      {
        "id": "E",
        "text": "Desabilitar todas as regras `.gitignore` para garantir que todos os arquivos sejam rastreados"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-71",
    "stem": "Qual das opções melhor define as Políticas do GitHub Enterprise?",
    "options": [
      {
        "id": "A",
        "text": "Configurações gerenciadas pelos proprietários do enterprise para controlar aspectos como gestão de repositórios, acesso de equipes e recursos de segurança dentro de suas organizações no GitHub."
      },
      {
        "id": "B",
        "text": "Políticas definidas no nível do enterprise que determinam os detalhes de faturamento e assinatura para todas as organizações em uma conta enterprise."
      },
      {
        "id": "C",
        "text": "Diretrizes sugeridas pelo GitHub para melhorar a colaboração e a produtividade em todas as organizações sem capacidades de aplicação."
      },
      {
        "id": "D",
        "text": "Configurações padrão aplicadas a todos os novos repositórios dentro de uma organização, que podem ser substituídas pelos proprietários da organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-72",
    "stem": "O que são políticas empresariais no contexto do GitHub Enterprise Cloud?",
    "options": [
      {
        "id": "A",
        "text": "Políticas empresariais determinam uma política uniforme para todas as organizações dentro de uma empresa."
      },
      {
        "id": "B",
        "text": "Configurações individuais de usuário que se aplicam apenas a contas pessoais dentro do GitHub Enterprise Cloud, sem relação com a governança organizacional ou empresarial."
      },
      {
        "id": "C",
        "text": "Uma coleção de práticas recomendadas para projetos de código aberto hospedados no GitHub, destinadas a melhorar o engajamento e a contribuição da comunidade."
      },
      {
        "id": "D",
        "text": "Protocolos de segurança que verificam e corrigem automaticamente vulnerabilidades nos códigos-fonte de todos os repositórios dentro da conta empresarial."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-73",
    "stem": "Quais etapas os administradores da organização devem seguir para acessar os registros de auditoria das ações realizadas dentro da organização no GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    "options": [
      {
        "id": "A",
        "text": "Vá para Configurações da Organização > Arquivo > Logs > Registro de auditoria. Em seguida, use o menu Exportar para exportar como JSON ou CSV."
      },
      {
        "id": "B",
        "text": "Envie um e-mail diretamente para o suporte do GitHub solicitando que um registro de auditoria seja enviado mensalmente para o e-mail do administrador da organização."
      },
      {
        "id": "C",
        "text": "Navegue até a página principal do GitHub, use a barra de pesquisa para digitar \"Registros de auditoria da organização\" e aguarde que o GitHub baixe o registro automaticamente."
      },
      {
        "id": "D",
        "text": "Verifique os perfis individuais dos membros para obter um resumo de suas ações, compile esses resumos manualmente e os formate para auditoria."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-74",
    "stem": "Quais dos seguintes são tipos de tokens de acesso suportados pelo GitHub?",
    "explanation": "Documentação: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#githubs-token-formats",
    "options": [
      {
        "id": "A",
        "text": "Personal Access Token (PAT)"
      },
      {
        "id": "B",
        "text": "Installation Access Token for a GitHub App"
      },
      {
        "id": "C",
        "text": "User Access Token for a GitHub App"
      },
      {
        "id": "D",
        "text": "IoT Token for an IoT device"
      },
      {
        "id": "E",
        "text": "Ephemeral Access Token for temporary access"
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
    "id": "GH-100-75",
    "stem": "Qual é o limite primário de taxa para usuários pessoais autenticados que fazem solicitações REST API para o GitHub API?",
    "explanation": "Documentação: https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api#primary-rate-limit-for-authenticated-users",
    "options": [
      {
        "id": "A",
        "text": "5.000 solicitações por hora"
      },
      {
        "id": "B",
        "text": "60 solicitações por hora"
      },
      {
        "id": "C",
        "text": "15.000 solicitações por hora"
      },
      {
        "id": "D",
        "text": "1.000 solicitações por hora"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-76",
    "stem": "Qual é a diferença entre GitHub Apps e OAuth apps?",
    "explanation": "Documentação: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps",
    "options": [
      {
        "id": "A",
        "text": "GitHub Apps oferecem permissões granulares para repositórios específicos, enquanto OAuth Apps solicitam acesso aos dados do usuário em todos os repositórios."
      },
      {
        "id": "B",
        "text": "GitHub Apps e OAuth Apps não diferem; eles oferecem o mesmo nível de permissões."
      },
      {
        "id": "C",
        "text": "OAuth Apps oferecem permissões mais granulares em comparação com GitHub Apps."
      },
      {
        "id": "D",
        "text": "GitHub Apps só podem acessar repositórios públicos, enquanto OAuth Apps podem acessar repositórios públicos e privados."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-77",
    "stem": "Como os GitHub Apps podem reagir a eventos específicos e quais são alguns exemplos desses eventos?",
    "explanation": "Documentação: https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps#subscribing-to-webhook-events",
    "options": [
      {
        "id": "A",
        "text": "Os GitHub Apps se inscrevem em eventos por meio de webhooks, que notificam o aplicativo sobre ações específicas, como abertura de pull requests ou criação de issues."
      },
      {
        "id": "B",
        "text": "Os GitHub Apps utilizam polling para verificar periodicamente novos eventos no GitHub."
      },
      {
        "id": "C",
        "text": "Os GitHub Apps recebem todos os eventos por padrão e devem filtrá-los no código do aplicativo."
      },
      {
        "id": "D",
        "text": "Os GitHub Apps usam uma conexão WebSocket para receber notificações em tempo real de todos os eventos do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-78",
    "stem": "Como as empresas podem acompanhar o uso do GitHub Actions?",
    "explanation": "• \"Utilizando métricas de uso e desempenho do GitHub Actions disponíveis nos níveis da organização e do repositório.\": As métricas do GitHub Actions são acessíveis na aba Insights nos níveis da organização e do repositório, fornecendo dados de uso e desempenho como tempos de execução, tempos de fila e taxas de falha.\nDocumentação: https://docs.github.com/en/enterprise-cloud@latest/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise#tracking-usage",
    "options": [
      {
        "id": "A",
        "text": "Usando webhooks para se inscrever em informações sobre trabalhos e execuções de workflows, e potencialmente utilizando um sistema de arquivamento de dados."
      },
      {
        "id": "B",
        "text": "Utilizando métricas de uso e desempenho do GitHub Actions disponíveis nos níveis da organização e do repositório."
      },
      {
        "id": "C",
        "text": "Contando manualmente as execuções e os trabalhos de workflows em cada repositório no final de cada mês."
      },
      {
        "id": "D",
        "text": "O uso do GitHub Actions não pode ser rastreado; as empresas devem estimar o uso com base no feedback dos desenvolvedores."
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
    "id": "GH-100-79",
    "stem": "Quem pode configurar listas de permissão de IP para uma enterprise no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Proprietários da enterprise"
      },
      {
        "id": "B",
        "text": "Proprietários da organização"
      },
      {
        "id": "C",
        "text": "Gerentes de segurança"
      },
      {
        "id": "D",
        "text": "Moderadores da organização"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-80",
    "stem": "Os proprietários da organização podem gerenciar entradas da lista de permissões de IP herdadas da lista de permissões da conta enterprise?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#about-githubs-ip-allow-list",
    "options": [
      {
        "id": "A",
        "text": "Não, eles não podem gerenciar entradas herdadas da lista de permissões da conta enterprise"
      },
      {
        "id": "B",
        "text": "Sim, eles têm controle total sobre as entradas herdadas"
      },
      {
        "id": "C",
        "text": "Sim, mas somente com aprovação dos proprietários da enterprise"
      },
      {
        "id": "D",
        "text": "Não, apenas o suporte do GitHub pode gerenciar entradas herdadas"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-81",
    "stem": "Quais runners você deve usar com o GitHub Actions quando uma lista de permissões de IP está habilitada na sua enterprise?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#using-github-actions-with-an-ip-allow-list",
    "options": [
      {
        "id": "A",
        "text": "Runners self-hosted ou GitHub-hosted larger runners com intervalos de endereços IP estáticos"
      },
      {
        "id": "B",
        "text": "Somente GitHub-hosted standard runners"
      },
      {
        "id": "C",
        "text": "Qualquer runner sem considerar o endereço IP"
      },
      {
        "id": "D",
        "text": "Somente runners dentro da rede da organização sem restrições de IP"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-82",
    "stem": "Como você pode garantir que os seus runners auto-hospedados ou maiores runners hospedados no GitHub possam se comunicar com o GitHub ao usar uma lista de permissão de IP?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#using-github-actions-with-an-ip-allow-list",
    "options": [
      {
        "id": "A",
        "text": "Adicione o endereço IP ou o intervalo de endereços IP dos seus runners à lista de permissão de IP configurada para a sua empresa"
      },
      {
        "id": "B",
        "text": "Desative a lista de permissão de IP para os runners do GitHub Actions"
      },
      {
        "id": "C",
        "text": "Registre os runners em Enterprise > Network security > Actions settings"
      },
      {
        "id": "D",
        "text": "Use uma VPN para todos os runners para contornar a lista de permissão de IP"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-83",
    "stem": "Quando uma lista de permissões de IP do Enterprise está em vigor, o que acontece quando você tenta publicar seu site do GitHub Pages a partir de um branch em vez de usar um workflow personalizado do GitHub Actions?",
    "explanation": "Documentação: https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#using-github-pages-with-an-ip-allow-list",
    "options": [
      {
        "id": "A",
        "text": "O runner de build terá acesso ao repositório para o site do GitHub Pages por padrão"
      },
      {
        "id": "B",
        "text": "O runner de build será bloqueado de acessar o repositório até ser adicionado manualmente à lista de permissões"
      },
      {
        "id": "C",
        "text": "O GitHub Pages não pode ser criado ou atualizado até que a lista de permissões de IP seja desativada"
      },
      {
        "id": "D",
        "text": "Você deve acionar manualmente os builds para sites do GitHub Pages"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-84",
    "stem": "Quais são alguns vetores potenciais de abuso ao habilitar runners auto-hospedados em repositórios públicos?",
    "explanation": "Documentação: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security",
    "options": [
      {
        "id": "A",
        "text": "Programas maliciosos sendo executados na máquina"
      },
      {
        "id": "B",
        "text": "Escapando do ambiente sandbox do runner"
      },
      {
        "id": "C",
        "text": "Exposição do ambiente de rede"
      },
      {
        "id": "D",
        "text": "Persistência de dados perigosos"
      },
      {
        "id": "E",
        "text": "A limpeza automática do ambiente após a execução do job pode causar perda de dados"
      },
      {
        "id": "F",
        "text": "Menor eficiência computacional devido a medidas de segurança"
      },
      {
        "id": "G",
        "text": "Integração limitada com os serviços hospedados no GitHub"
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
    "id": "GH-100-85",
    "stem": "Como você deve selecionar runners apropriados para atender às cargas de trabalho específicas do seu workflow?",
    "explanation": "Documentação: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#differences-between-github-hosted-and-self-hosted-runners",
    "options": [
      {
        "id": "A",
        "text": "Escolha runners self-hosted para ambientes personalizados ou GitHub-hosted para atualizações automáticas e instâncias limpas."
      },
      {
        "id": "B",
        "text": "Sempre prefira runners GitHub-hosted para todas as cargas de trabalho para garantir segurança máxima."
      },
      {
        "id": "C",
        "text": "Use apenas runners self-hosted, independentemente da complexidade da carga de trabalho, para minimizar custos."
      },
      {
        "id": "D",
        "text": "Restrinja-se a usar runners GitHub-hosted com configurações de hardware personalizadas para melhor desempenho."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-86",
    "stem": "Como adicionar um runner self-hosted a um repositório do GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Navegue até as configurações do repositório, selecione Actions, depois Runners, e siga as instruções para baixar, configurar e executar o aplicativo de runner self-hosted."
      },
      {
        "id": "B",
        "text": "Clone diretamente o repositório para sua máquina local e execute um script específico para adicioná-lo automaticamente como um runner self-hosted."
      },
      {
        "id": "C",
        "text": "Envie um e-mail para o suporte do GitHub solicitando a adição de um runner self-hosted ao seu repositório."
      },
      {
        "id": "D",
        "text": "Use a API do GitHub para enviar uma solicitação para adicionar um runner self-hosted sem nenhuma configuração manual."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-87",
    "stem": "O que é necessário para adicionar um runner auto-hospedado a uma organização no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Acesso como proprietário da organização, navegar até as configurações da organização, selecionar Actions, depois Runners, e seguir as instruções de configuração para o runner auto-hospedado."
      },
      {
        "id": "B",
        "text": "Acesso de membro geral sem permissões especiais, e utilizar uma GitHub Action para registrar automaticamente um runner auto-hospedado."
      },
      {
        "id": "C",
        "text": "Acesso a repositórios públicos dentro da organização e execução manual de scripts no servidor destinado como runner."
      },
      {
        "id": "D",
        "text": "Enviar um formulário no site do GitHub para solicitar que a equipe do GitHub adicione manualmente um runner auto-hospedado à sua organização."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-88",
    "stem": "Como você pode gerenciar o acesso a runners auto-hospedados em uma organização usando grupos de runners?",
    "options": [
      {
        "id": "A",
        "text": "Crie grupos de runners para coletar conjuntos de runners e, em seguida, configure políticas de acesso para repositórios dentro da organização."
      },
      {
        "id": "B",
        "text": "Atribua manualmente cada runner auto-hospedado a repositórios individuais sem usar grupos de runners."
      },
      {
        "id": "C",
        "text": "Use um único grupo de runner padrão para todos os runners e repositórios."
      },
      {
        "id": "D",
        "text": "Criando grupos de runners que são então atribuídos a equipes de pessoas dentro de uma organização. Essas equipes podem então gerenciar esses grupos e atribuir os grupos de runners a repositórios que gerenciam."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-89",
    "stem": "Quais são os passos envolvidos na criação de um grupo de runners auto-hospedados para uma organização no GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Navegue até as configurações da organização, selecione Actions, clique em Runner groups, crie um novo grupo e atribua uma política de acesso ao repositório."
      },
      {
        "id": "B",
        "text": "No repositório `.github`, modifique o arquivo `.gitconfig` para especificar os grupos de runners e as políticas de acesso associadas."
      },
      {
        "id": "C",
        "text": "Entre em contato com o suporte do GitHub para solicitar a criação de um grupo de runners e forneça uma lista de repositórios para configuração de acesso."
      },
      {
        "id": "D",
        "text": "Use um workflow do GitHub Actions para gerar automaticamente grupos de runners com base na atividade e nos padrões de uso do repositório."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-90",
    "stem": "Como alterar quais repositórios podem acessar um grupo de runners específico em uma organização?",
    "options": [
      {
        "id": "A",
        "text": "Nas configurações da organização, navegue até Ações, selecione Grupos de runners, escolha um grupo e modifique as configurações de acesso ao repositório."
      },
      {
        "id": "B",
        "text": "Use o GitHub CLI para executar um comando que reatribua o acesso ao repositório a diferentes grupos de runners dentro da organização."
      },
      {
        "id": "C",
        "text": "Edite o arquivo de configuração do grupo de runners localizado no servidor que hospeda os runners auto-hospedados para atualizar o acesso ao repositório."
      },
      {
        "id": "D",
        "text": "Os repositórios obtêm automaticamente acesso a todos os grupos de runners sem a necessidade de alterações manuais de configuração."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-91",
    "stem": "Como você pode usar cofres de terceiros para gerenciar segredos no GitHub Actions?",
    "explanation": "Documentação: https://developer.hashicorp.com/vault/docs/platform/github-actions",
    "options": [
      {
        "id": "A",
        "text": "Armazene segredos no cofre de terceiros e autentique a partir do seu workflow (via a action/CLI do fornecedor) usando credenciais de acesso armazenadas como segredos do GitHub Actions para recuperá-los em tempo de execução."
      },
      {
        "id": "B",
        "text": "A integração direta com cofres de terceiros é suportada nativamente no GitHub Actions sem necessidade de configuração adicional."
      },
      {
        "id": "C",
        "text": "Cofres de terceiros devem ser acessados incorporando suas chaves de API nos arquivos do workflow e usando a API ou CLI do respectivo fornecedor."
      },
      {
        "id": "D",
        "text": "O GitHub Actions não suporta o uso de cofres de terceiros para gerenciamento de segredos; todos os segredos devem ser armazenados no GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-92",
    "stem": "Quais gerenciadores de pacotes e formatos são compatíveis com o GitHub Packages?",
    "explanation": "Documentação: https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#about-github-packages",
    "options": [
      {
        "id": "A",
        "text": "npm para JavaScript"
      },
      {
        "id": "B",
        "text": "RubyGems para Ruby"
      },
      {
        "id": "C",
        "text": "Maven e Gradle para Java"
      },
      {
        "id": "D",
        "text": "Nuget para .NET"
      },
      {
        "id": "E",
        "text": "Docker e imagens OCI"
      },
      {
        "id": "F",
        "text": "Poetry para Python"
      },
      {
        "id": "G",
        "text": "Cargo para Rust"
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
    "id": "GH-100-93",
    "stem": "Como alguém pode se autenticar no GitHub Packages?",
    "explanation": "Documentação: https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages",
    "options": [
      {
        "id": "A",
        "text": "Autenticando-se usando um PAT com o escopo apropriado"
      },
      {
        "id": "B",
        "text": "O GitHub Packages pode ser acessado e compartilhado publicamente sem qualquer autenticação."
      },
      {
        "id": "C",
        "text": "O acesso ao GitHub Packages é restrito apenas a contas do GitHub Enterprise."
      },
      {
        "id": "D",
        "text": "Utilizando o login padrão do GitHub sem necessidade de tokens de autenticação especiais."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-94",
    "stem": "O que é necessário para baixar ou publicar um GitHub Package em workflows, como com GitHub Actions ou outras ferramentas de CI/CD?",
    "explanation": "Documentação: https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages",
    "options": [
      {
        "id": "A",
        "text": "Use `GITHUB_TOKEN` para publicar pacotes associados ao repositório do workflow, e um PAT para instalar pacotes de repositórios privados."
      },
      {
        "id": "B",
        "text": "GitHub Packages não pode ser usado em workflows do GitHub Actions ou em nenhuma ferramenta de CI/CD."
      },
      {
        "id": "C",
        "text": "Apenas chaves SSH são necessárias para usar o GitHub Packages em workflows."
      },
      {
        "id": "D",
        "text": "É necessário realizar o download e upload manual de pacotes para cada execução do workflow."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-95",
    "stem": "Quais são as diferenças e casos de uso entre o GitHub Packages e releases?",
    "explanation": "Documentação: https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#about-github-packages",
    "options": [
      {
        "id": "A",
        "text": "O GitHub Packages é otimizado para hospedar e gerenciar pacotes, oferecendo gerenciamento integrado de permissões e faturamento, enquanto releases são usadas para distribuir versões de software diretamente vinculadas a tags Git."
      },
      {
        "id": "B",
        "text": "O GitHub Packages e releases são funcionalmente idênticos, sem diferenças em casos de uso."
      },
      {
        "id": "C",
        "text": "Releases são usadas para distribuição de software privado, enquanto o GitHub Packages é exclusivamente para hospedagem pública de pacotes."
      },
      {
        "id": "D",
        "text": "O GitHub Packages requer integração externa de CI/CD para distribuição, ao contrário de releases, que são totalmente gerenciadas dentro do GitHub."
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  },
  {
    "id": "GH-100-96",
    "stem": "Por meio de qual cabeçalho você pode verificar o número de requisições feitas na janela de limite atual ao usar a GitHub REST API?",
    "explanation": "Documentação: https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api#checking-the-status-of-your-rate-limit",
    "options": [
      {
        "id": "A",
        "text": "`x-ratelimit-used`"
      },
      {
        "id": "B",
        "text": "`x-ratelimit-limit`"
      },
      {
        "id": "C",
        "text": "`x-ratelimit-remaining`"
      },
      {
        "id": "D",
        "text": "`x-ratelimit-reset`"
      },
      {
        "id": "E",
        "text": "`x-ratelimit-resource`"
      }
    ],
    "answer": [
      "A"
    ],
    "type": "single"
  }
],
};
