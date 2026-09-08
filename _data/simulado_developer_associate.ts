import type { Simulado } from "@/types/simulado";

export const simuladoDeveloperAssociate: Simulado = {
  slug: "developer-associate",
  title: "AWS Certified Developer – Associate",
  examCode: "DVA-C02",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 130,
  passingScore: 72,
  questions: [
  {
    "id": "DVA-C02-1",
    "type": "single",
    "stem": "Uma empresa está implementando uma aplicação em instâncias do Amazon EC2. A aplicação precisa processar transações de entrada. Quando a aplicação detecta uma transação inválida, ela deve enviar uma mensagem de chat para a equipe de suporte da empresa. Para enviar a mensagem, a aplicação precisa recuperar o token de acesso para autenticação usando a API de chat.Um desenvolvedor precisa implementar uma solução para armazenar o token de acesso. O token de acesso deve ser criptografado em repouso e em trânsito.",
    "ask": "O token de acesso também deve ser acessível a partir de outras contas da AWS.Qual solução atenderá a esses requisitos com a MENOR sobrecarga de gerenciamento?",
    "options": [
      {
        "id": "A",
        "text": "Use um parâmetro SecureString do AWS Systems Manager Parameter Store que utiliza uma chave gerenciada pela AWS do AWS Key Management Service (AWS KMS) para armazenar o token de acesso. Adicione uma política baseada em recursos ao parâmetro para permitir o acesso de outras contas. Atualize a função do IAM das instâncias do EC2 com permissões de acesso ao Parameter Store. Recupere o token do Parameter Store com o sinalizador de descriptografia habilitado. Use o token de acesso descriptografado para enviar a mensagem ao chat."
      },
      {
        "id": "B",
        "text": "Criptografe o token de acesso usando uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Armazene o token de acesso em uma tabela do Amazon DynamoDB. Atualize a função do IAM das instâncias do EC2 com permissões para acessar o DynamoDB e o AWS KMS. Recupere o token do DynamoD. Descriptografe o token usando o AWS KMS nas instâncias do EC2. Use o token de acesso descriptografado para enviar a mensagem para o chat."
      },
      {
        "id": "C",
        "text": "Use o AWS Secrets Manager com uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS) para armazenar o token de acesso. Adicione uma política baseada em recursos ao segredo para permitir o acesso de outras contas. Atualize a função do IAM das instâncias do EC2 com permissões para acessar o Secrets Manager. Recupere o token do Secrets Manager. Use o token de acesso descriptografado para enviar a mensagem para o chat."
      },
      {
        "id": "D",
        "text": "Criptografe o token de acesso usando uma chave gerenciada pela AWS do AWS Key Management Service (AWS KMS). Armazene o token de acesso em um bucket do Amazon S3. Adicione uma política de bucket ao bucket do S3 para permitir o acesso de outras contas. Atualize a função do IAM das instâncias do EC2 com permissões para acessar o Amazon S3 e o AWS KMS. Recupere o token do bucket do S3. Descriptografe o token usando o AWS KMS nas instâncias do EC2. Use o token de acesso descriptografado para enviar a mensagem para o chat."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-2",
    "type": "single",
    "stem": "Uma empresa está executando instâncias do Amazon EC2 em várias contas da AWS. Um desenvolvedor precisa implementar uma aplicação que colete todos os eventos de ciclo de vida das instâncias do EC2.",
    "ask": "A aplicação precisa armazenar os eventos de ciclo de vida em uma única fila do Amazon Simple Queue Service (Amazon SQS) na conta principal da AWS da empresa para processamento posterior.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o Amazon EC2 para entregar os eventos de ciclo de vida da instância do EC2 de todas as contas ao barramento de eventos do Amazon EventBridge da conta principal. Adicione uma regra do EventBridge ao barramento de eventos da conta principal que corresponda a todos os eventos de ciclo de vida da instância do EC2. Adicione a fila do SQS como destino da regra."
      },
      {
        "id": "B",
        "text": "Use as políticas de recursos da fila SQS na conta principal para conceder a cada conta permissões para gravar nessa fila SQS. Adicione ao barramento de eventos do Amazon EventBridge de cada conta uma regra do EventBridge que corresponda a todos os eventos de ciclo de vida da instância do EC2. Adicione a fila SQS na conta principal como alvo da regra."
      },
      {
        "id": "C",
        "text": "Escreva uma função do AWS Lambda que examine todas as instâncias do EC2 nas contas da empresa para detectar alterações no ciclo de vida das instâncias do EC2. Configure a função do Lambda para enviar uma mensagem de notificação para a fila do SQS na conta principal se a função detectar uma alteração no ciclo de vida das instâncias do EC2. Adicione uma regra agendada do Amazon EventBridge que invoque a função do Lambda a cada minuto."
      },
      {
        "id": "D",
        "text": "Configure as permissões no barramento de eventos da conta principal para receber eventos de todas as contas. Crie uma regra do Amazon EventBridge em cada conta para enviar todos os eventos de ciclo de vida da instância do EC2 para o barramento de eventos da conta principal. Adicione uma regra do EventBridge ao barramento de eventos da conta principal que corresponda a todos os eventos de ciclo de vida da instância do EC2. Defina a fila do SQS como destino para a regra."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-3",
    "type": "single",
    "stem": "Um aplicativo utiliza pools de usuários e pools de identidades do Amazon Cognito para acesso seguro. Um desenvolvedor deseja integrar os recursos de upload e download de arquivos específicos do usuário no aplicativo com o Amazon S3. O desenvolvedor deve garantir que os arquivos sejam salvos e recuperados de forma segura e que os usuários possam acessar apenas seus próprios arquivos.",
    "ask": "Os tamanhos dos arquivos variam de 3 KB a 300 MB.Qual opção atenderá a esses requisitos com o nível MAIS ALTO de segurança?",
    "options": [
      {
        "id": "A",
        "text": "Use as notificações de eventos do S3 para validar as solicitações de upload e download de arquivos e atualizar a interface do usuário (IU)."
      },
      {
        "id": "B",
        "text": "Salve os detalhes dos arquivos enviados em uma tabela separada do Amazon DynamoDB. Filtre a lista de arquivos na interface do usuário (IU) comparando o ID do usuário atual com o ID do usuário associado ao arquivo na tabela."
      },
      {
        "id": "C",
        "text": "Use o Amazon API Gateway e uma função do AWS Lambda para carregar e baixar arquivos. Valide cada solicitação na função do Lambda antes de executar a operação solicitada."
      },
      {
        "id": "D",
        "text": "Use uma política do IAM dentro do prefixo de identidade do Amazon Cognito para restringir os usuários a usar suas próprias pastas no Amazon S3."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-4",
    "type": "single",
    "stem": "Uma empresa está construindo uma solução escalável de gerenciamento de dados utilizando serviços da AWS para aumentar a velocidade e a agilidade do desenvolvimento. A solução ingerirá grandes volumes de dados de diversas fontes e os processará por meio de múltiplas regras de negócios e transformações.A solução exige que as regras de negócios sejam executadas em sequência e que o reprocessamento dos dados seja realizado caso ocorram erros durante a execução das regras de negócios.",
    "ask": "A empresa precisa que a solução seja escalável e exija o mínimo de manutenção possível.Qual serviço da AWS a empresa deve usar para gerenciar e automatizar a orquestração dos fluxos de dados para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Lote AWS"
      },
      {
        "id": "B",
        "text": "Funções de etapa da AWS"
      },
      {
        "id": "C",
        "text": "Cola AWS"
      },
      {
        "id": "D",
        "text": "AWS Lambda"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-5",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda escrita em Python. A função Lambda lê dados de objetos no Amazon S3 e os grava em uma tabela do Amazon DynamoDB. A função é invocada com sucesso a partir de uma notificação de evento do S3 quando um objeto é criado.",
    "ask": "No entanto, a função falha ao tentar gravar na tabela do DynamoDB.Qual é a causa MAIS provável desse problema?",
    "options": [
      {
        "id": "A",
        "text": "O limite de simultaneidade da função Lambda foi excedido."
      },
      {
        "id": "B",
        "text": "A tabela do DynamoDB requer um índice secundário global (GSI) para dar suporte a gravações."
      },
      {
        "id": "C",
        "text": "A função Lambda não tem permissões do IAM para gravar no DynamoDB."
      },
      {
        "id": "D",
        "text": "A tabela do DynamoDB não está sendo executada na mesma Zona de Disponibilidade que a função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-6",
    "type": "single",
    "stem": "Um desenvolvedor está criando um modelo do AWS CloudFormation para implantar instâncias do Amazon EC2 em várias contas da AWS.",
    "ask": "O desenvolvedor deve escolher as instâncias do EC2 em uma lista de tipos de instância aprovados.Como o desenvolvedor pode incorporar a lista de tipos de instância aprovados no modelo do CloudFormation?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo CloudFormation separado para cada tipo de instância EC2 na lista."
      },
      {
        "id": "B",
        "text": "Na seção Recursos do modelo CloudFormation, crie recursos para cada tipo de instância EC2 na lista."
      },
      {
        "id": "C",
        "text": "No modelo CloudFormation, crie um parâmetro separado para cada tipo de instância EC2 na lista."
      },
      {
        "id": "D",
        "text": "No modelo CloudFormation, crie um parâmetro com a lista de tipos de instância do EC2 como AllowedValues."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-7",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor tem uma aplicação que faz solicitações em lote diretamente para o Amazon DynamoDB usando a operação de API de baixo nível BatchGetItem.",
    "ask": "As respostas frequentemente retornam valores no elemento UnprocessedKeys.Quais ações o desenvolvedor deve tomar para aumentar a resiliência da aplicação quando a resposta em lote inclui valores em UnprocessedKeys?",
    "options": [
      {
        "id": "A",
        "text": "Repita a operação em lote imediatamente."
      },
      {
        "id": "B",
        "text": "Repita a operação em lote com recuo exponencial e atraso aleatório."
      },
      {
        "id": "C",
        "text": "Atualize o aplicativo para usar um kit de desenvolvimento de software da AWS (AWS SDK) para fazer as solicitações."
      },
      {
        "id": "D",
        "text": "Aumente a capacidade de leitura provisionada das tabelas do DynamoDB que a operação acessa."
      },
      {
        "id": "E",
        "text": "Aumente a capacidade de gravação provisionada das tabelas do DynamoDB que a operação acessa."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-8",
    "type": "single",
    "stem": "Uma empresa está executando um aplicativo personalizado em um conjunto de servidores Linux locais acessados pelo Amazon API Gateway.",
    "ask": "O rastreamento do AWS X-Ray foi habilitado na fase de testes da API.Como um desenvolvedor pode habilitar o rastreamento do X-Ray nos servidores locais com o MÍNIMO de configuração?",
    "options": [
      {
        "id": "A",
        "text": "Instale e execute o X-Ray SDK nos servidores locais para capturar e retransmitir os dados para o serviço X-Ray."
      },
      {
        "id": "B",
        "text": "Instale e execute o daemon X-Ray nos servidores locais para capturar e retransmitir os dados para o serviço X-Ray."
      },
      {
        "id": "C",
        "text": "Capture solicitações de entrada no local e configure uma função do AWS Lambda para extrair, processar e retransmitir dados relevantes para o X-Ray usando a chamada de API PutTraceSegments."
      },
      {
        "id": "D",
        "text": "Capture solicitações de entrada no local e configure uma função do AWS Lambda para extrair, processar e retransmitir dados relevantes para o X-Ray usando a chamada de API PutTelemetryRecords."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-9",
    "type": "single",
    "stem": "Uma empresa deseja compartilhar informações com terceiros. O terceiro possui um endpoint de API HTTP que a empresa pode usar para compartilhar as informações. A empresa possui a chave de API necessária para acessar a API HTTP.A empresa precisa de uma maneira de gerenciar a chave de API usando código.",
    "ask": "A integração da chave de API com o código do aplicativo não pode afetar o desempenho do aplicativo.Qual solução atenderá a esses requisitos com MAIS segurança?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais da API no AWS Secrets Manager. Recupere as credenciais da API em tempo de execução usando o AWS SDK. Use as credenciais para fazer a chamada da API."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais da API em uma variável de código local. Envie o código para um repositório Git seguro. Use a variável de código local em tempo de execução para fazer a chamada da API."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais da API como um objeto em um bucket privado do Amazon S3. Restrinja o acesso ao objeto S3 usando políticas do IAM. Recupere as credenciais da API em tempo de execução usando o SDK da AWS. Use as credenciais para fazer a chamada da API."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais da API em uma tabela do Amazon DynamoDB. Restrinja o acesso à tabela usando políticas baseadas em recursos. Recupere as credenciais da API em tempo de execução usando o SDK da AWS. Use as credenciais para fazer a chamada da API."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-10",
    "type": "single",
    "stem": "Um desenvolvedor está implantando uma nova aplicação no Amazon Elastic Container Service (Amazon ECS). O desenvolvedor precisa armazenar e recuperar com segurança diferentes tipos de variáveis. Essas variáveis incluem informações de autenticação para uma API remota, a URL da API e credenciais.",
    "ask": "As informações de autenticação e a URL da API devem estar disponíveis para todas as versões atuais e futuras implantadas da aplicação nos ambientes de desenvolvimento, teste e produção.Como o desenvolvedor deve recuperar as variáveis com o MENOR número de alterações na aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o aplicativo para recuperar as variáveis do AWS Systems Manager Parameter Store. Use caminhos exclusivos no Parameter Store para cada variável em cada ambiente. Armazene as credenciais no AWS Secrets Manager em cada ambiente."
      },
      {
        "id": "B",
        "text": "Atualize o aplicativo para recuperar as variáveis do AWS Key Management Service (AWS KMS). Armazene a URL da API e as credenciais como chaves exclusivas para cada ambiente."
      },
      {
        "id": "C",
        "text": "Atualize o aplicativo para recuperar as variáveis de um arquivo criptografado armazenado com o aplicativo. Armazene a URL da API e as credenciais em arquivos exclusivos para cada ambiente."
      },
      {
        "id": "D",
        "text": "Atualize o aplicativo para recuperar as variáveis de cada um dos ambientes implantados. Defina as informações de autenticação e a URL da API na definição da tarefa do ECS como nomes exclusivos durante o processo de implantação."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-11",
    "type": "single",
    "stem": "Uma empresa está migrando aplicativos internos legados para a AWS. A liderança deseja reescrever o diretório interno de funcionários para usar os serviços nativos da AWS.",
    "ask": "Um desenvolvedor precisa criar uma solução para armazenar os dados de contato dos funcionários e fotos em alta resolução para uso com o novo aplicativo.Qual solução permitirá a busca e a recuperação dos dados individuais e fotos em alta resolução de cada funcionário usando as APIs da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Codifique as informações de contato e fotos de cada funcionário usando Base64. Armazene as informações em uma tabela do Amazon DynamoDB usando uma chave de classificação."
      },
      {
        "id": "B",
        "text": "Armazene as informações de contato de cada funcionário em uma tabela do Amazon DynamoDB junto com as chaves de objeto para as fotos armazenadas no Amazon S3."
      },
      {
        "id": "C",
        "text": "Use pools de usuários do Amazon Cognito para implementar o diretório de funcionários em um método de software como serviço (SaaS) totalmente gerenciado."
      },
      {
        "id": "D",
        "text": "Armazene as informações de contato dos funcionários em uma instância do Amazon RDS DB com as fotos armazenadas no Amazon Elastic File System (Amazon EFS)."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-12",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo que permitirá aos usuários armazenar fotos de seus celulares na nuvem. O aplicativo precisa suportar dezenas de milhares de usuários. O aplicativo utiliza uma API REST do Amazon API Gateway integrada às funções do AWS Lambda para processar as fotos. O aplicativo armazena detalhes sobre as fotos no Amazon DynamoDB.Os usuários precisam criar uma conta para acessar o aplicativo. No aplicativo, os usuários devem poder fazer upload de fotos e recuperar fotos enviadas anteriormente.",
    "ask": "O tamanho das fotos varia de 300 KB a 5 MB.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Use os pools de usuários do Amazon Cognito para gerenciar contas de usuário. Crie um autorizador de pool de usuários do Amazon Cognito no API Gateway para controlar o acesso à API. Use a função Lambda para armazenar fotos e detalhes na tabela do DynamoDB. Recupere fotos enviadas anteriormente diretamente da tabela do DynamoDB."
      },
      {
        "id": "B",
        "text": "Use os pools de usuários do Amazon Cognito para gerenciar contas de usuário. Crie um autorizador de pool de usuários do Amazon Cognito no API Gateway para controlar o acesso à API. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere fotos enviadas anteriormente consultando o DynamoDB para obter a chave S3."
      },
      {
        "id": "C",
        "text": "Crie um usuário do IAM para cada usuário do aplicativo durante o processo de inscrição. Use a autenticação do IAM para acessar a API do API Gateway. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere fotos enviadas anteriormente consultando o DynamoDB para obter a chave S3."
      },
      {
        "id": "D",
        "text": "Crie uma tabela de usuários no DynamoDB. Use a tabela para gerenciar contas de usuários. Crie um autorizador Lambda que valide as credenciais do usuário em relação à tabela de usuários. Integre o autorizador Lambda ao API Gateway para controlar o acesso à API. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere fotos enviadas anteriormente consultando o DynamoDB para obter a chave S3."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-13",
    "type": "single",
    "stem": "Uma empresa recebe pedidos de comida de vários parceiros. A empresa possui um aplicativo de microsserviços que utiliza APIs do Amazon API Gateway com integração com o AWS Lambda. Cada parceiro envia pedidos chamando uma API personalizada que é exposta por meio do API Gateway. A chamada da API invoca uma função Lambda compartilhada para processar os pedidos.Os parceiros precisam ser notificados após a função Lambda processar os pedidos. Cada parceiro deve receber atualizações apenas dos seus próprios pedidos.",
    "ask": "A empresa deseja adicionar novos parceiros no futuro com o menor número possível de alterações de código.Qual solução atenderá a esses requisitos da forma MAIS escalável?",
    "options": [
      {
        "id": "A",
        "text": "Crie um tópico diferente do Amazon Simple Notification Service (Amazon SNS) para cada parceiro. Configure a função Lambda para publicar mensagens para cada parceiro no tópico do SNS do parceiro."
      },
      {
        "id": "B",
        "text": "Crie uma função Lambda diferente para cada parceiro. Configure a função Lambda para notificar diretamente o endpoint de serviço de cada parceiro."
      },
      {
        "id": "C",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Configure a função Lambda para publicar mensagens com atributos específicos no tópico do SNS. Inscreva cada parceiro no tópico do SNS. Aplique a política de filtro apropriada às assinaturas de tópicos."
      },
      {
        "id": "D",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva todos os parceiros no tópico do SNS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-14",
    "type": "single",
    "stem": "Uma empresa financeira deve armazenar registros originais de clientes por 10 anos por motivos legais. Um registro completo contém informações de identificação pessoal (PII). De acordo com as regulamentações locais, as PII estão disponíveis apenas para determinadas pessoas na empresa e não devem ser compartilhadas com terceiros. A empresa precisa disponibilizar os registros a organizações terceirizadas para análise estatística sem compartilhar as PII.Um desenvolvedor deseja armazenar o registro imutável original no Amazon S3. Dependendo de quem acessa o documento S3, o documento deve ser retornado como está ou com todas as PII removidas. O desenvolvedor escreveu uma função do AWS Lambda para remover as PII do documento.",
    "ask": "A função é chamada removePii.O que o desenvolvedor deve fazer para que a empresa possa atender aos requisitos de PII mantendo apenas uma cópia do documento?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma notificação de evento do S3 que invoque a função removePii quando uma solicitação GET do S3 for feita. Chame o Amazon S3 usando uma solicitação GET para acessar o objeto sem PII."
      },
      {
        "id": "B",
        "text": "Configure uma notificação de evento do S3 que invoque a função removePii quando uma solicitação PUT do S3 for feita. Chame o Amazon S3 usando uma solicitação PUT para acessar o objeto sem PII."
      },
      {
        "id": "C",
        "text": "Crie um ponto de acesso do S3 Object Lambda no console do S3. Selecione a função removePii. Use os pontos de acesso do S3 para acessar o objeto sem PII."
      },
      {
        "id": "D",
        "text": "Crie um ponto de acesso S3 a partir do console S3. Use o nome do ponto de acesso para chamar a função GetObjectLegalHold da API S3. Passe o nome da função removePii para acessar o objeto sem PII."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-15",
    "type": "single",
    "stem": "Um desenvolvedor está implantando uma função do AWS Lambda.",
    "ask": "Ele deseja poder retornar a versões mais antigas da função de forma rápida e integrada.Como ele pode atingir esse objetivo com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS OpsWorks para executar implantações azuis/verdes."
      },
      {
        "id": "B",
        "text": "Use um alias de função com versões diferentes."
      },
      {
        "id": "C",
        "text": "Manter pacotes de implantação para versões mais antigas no Amazon S3."
      },
      {
        "id": "D",
        "text": "Use o AWS CodePipeline para implantações e reversões."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-16",
    "type": "single",
    "stem": "Um desenvolvedor escreveu uma função do AWS Lambda. A função é dependente da CPU.",
    "ask": "O desenvolvedor quer garantir que a função retorne respostas rapidamente.Como o desenvolvedor pode melhorar o desempenho da função?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a contagem de núcleos de CPU da função."
      },
      {
        "id": "B",
        "text": "Aumentar a memória da função."
      },
      {
        "id": "C",
        "text": "Aumente a simultaneidade reservada da função."
      },
      {
        "id": "D",
        "text": "Aumente o tempo limite da função."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-17",
    "type": "single",
    "stem": "Para uma implantação usando o AWS Code Deploy, qual é a ordem de execução dos ganchos para implantações no local?",
    "options": [
      {
        "id": "A",
        "text": "Antes da instalação -> Parar aplicativo -> Iniciar aplicativo -> Depois da instalação"
      },
      {
        "id": "B",
        "text": "ApplicationStop -> Antes da instalação -> Depois da instalação -> Início do aplicativo"
      },
      {
        "id": "C",
        "text": "Antes de instalar -> ApplicationStop -> ValidateService -> ApplicationStart"
      },
      {
        "id": "D",
        "text": "ApplicationStop -> BeforeInstall -> ValidateService -> ApplicationStart"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-18",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação serverless na AWS. A aplicação utiliza uma função Lambda da AWS para processar pedidos de clientes 24 horas por dia, 7 dias por semana. A função Lambda chama a API HTTP de um fornecedor externo para processar pagamentos.Durante os testes de carga, um desenvolvedor descobre que a API de processamento de pagamentos do fornecedor externo ocasionalmente expira e retorna erros. A empresa espera que algumas chamadas à API de processamento de pagamentos retornem erros.A empresa deseja que a equipe de suporte receba notificações quase em tempo real somente quando a taxa de erros da API externa de processamento de pagamentos exceder 5% do número total de transações em uma hora.",
    "ask": "Os desenvolvedores precisam usar um tópico existente do Amazon Simple Notification Service (Amazon SNS) configurado para notificar a equipe de suporte.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Escreva os resultados das chamadas da API de processamento de pagamentos para o Amazon CloudWatch. Use o Amazon CloudWatch Logs Insights para consultar os logs do CloudWatch. Agende a função Lambda para verificar os logs do CloudWatch e notificar o tópico SNS existente."
      },
      {
        "id": "B",
        "text": "Publique métricas personalizadas no CloudWatch que registrem as falhas das chamadas da API de processamento de pagamentos externos. Configure um alarme do CloudWatch para notificar o tópico SNS existente quando a taxa de erros exceder a taxa especificada."
      },
      {
        "id": "C",
        "text": "Publique os resultados das chamadas da API de processamento de pagamentos externos em um novo tópico do Amazon SNS. Inscreva os membros da equipe de suporte no novo tópico do SNS."
      },
      {
        "id": "D",
        "text": "Escreva os resultados das chamadas da API de processamento de pagamentos externos para o Amazon S3. Agende uma consulta do Amazon Athena para ser executada em intervalos regulares. Configure o Athena para enviar notificações ao tópico SNS existente quando a taxa de erro exceder a taxa especificada."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-19",
    "type": "single",
    "stem": "Uma empresa oferece APIs como serviço pela internet para fornecer acesso de leitura não autenticado a informações estatísticas atualizadas diariamente. A empresa utiliza o Amazon API Gateway e o AWS Lambda para desenvolver as APIs.",
    "ask": "O serviço se tornou popular e a empresa deseja aprimorar a responsividade das APIs.Que ações podem ajudar a empresa a atingir esse objetivo?",
    "options": [
      {
        "id": "A",
        "text": "Habilite o cache de API no API Gateway."
      },
      {
        "id": "B",
        "text": "Configure o API Gateway para usar um endpoint VPC de interface."
      },
      {
        "id": "C",
        "text": "Habilite o compartilhamento de recursos entre origens (CORS) para as APIs."
      },
      {
        "id": "D",
        "text": "Configure planos de uso e chaves de API no API Gateway."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-20",
    "type": "single",
    "stem": "Um desenvolvedor quer armazenar informações sobre filmes. Cada filme tem um título, ano de lançamento e gênero. As informações do filme também podem incluir propriedades adicionais sobre o elenco e a equipe de produção. Essas informações adicionais são inconsistentes entre os filmes.",
    "ask": "Por exemplo, um filme pode ter um diretor assistente e outro pode ter um treinador de animais.O desenvolvedor precisa implementar uma solução para dar suporte aos seguintes casos de uso:Para um determinado título e ano de lançamento, obtenha todos os detalhes sobre o filme que tem esse título e ano de lançamento.Para um determinado título, obtenha todos os detalhes sobre todos os filmes que têm esse título.Para um determinado gênero, obtenha todos os detalhes sobre todos os filmes desse gênero.Qual configuração de armazenamento de dados atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma tabela do Amazon DynamoDB. Configure a tabela com uma chave primária que consiste no título como chave de partição e o ano de lançamento como chave de classificação. Crie um índice secundário global que use o gênero como chave de partição e o título como chave de classificação."
      },
      {
        "id": "B",
        "text": "Crie uma tabela do Amazon DynamoDB. Configure a tabela com uma chave primária que consiste no gênero como chave de partição e no ano de lançamento como chave de classificação. Crie um índice secundário global que use o título como chave de partição."
      },
      {
        "id": "C",
        "text": "Em uma instância de banco de dados do Amazon RDS, crie uma tabela que contenha colunas para título, ano de lançamento e gênero. Configure o título como chave primária."
      },
      {
        "id": "D",
        "text": "Em uma instância de banco de dados do Amazon RDS, crie uma tabela em que a chave primária seja o título e todos os outros dados sejam codificados no formato JSON como uma coluna adicional."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-21",
    "type": "single",
    "stem": "Um desenvolvedor mantém uma API REST do Amazon API Gateway. Os clientes usam a API por meio de uma interface de usuário front-end e autenticação do Amazon Cognito.O desenvolvedor possui uma nova versão da API que contém novos endpoints e alterações de interface incompatíveis com versões anteriores.",
    "ask": "O desenvolvedor precisa fornecer acesso beta a outros desenvolvedores da equipe sem afetar os clientes.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Defina um estágio de desenvolvimento na API do API Gateway. Instrua os outros desenvolvedores a apontar os endpoints para o estágio de desenvolvimento."
      },
      {
        "id": "B",
        "text": "Defina uma nova API do API Gateway que aponte para o novo código do aplicativo API. Instrua os outros desenvolvedores a apontar os endpoints para a nova API."
      },
      {
        "id": "C",
        "text": "Implemente um parâmetro de consulta no código do aplicativo da API que determine qual versão do código chamar."
      },
      {
        "id": "D",
        "text": "Especifique novos pontos de extremidade do API Gateway para os pontos de extremidade da API que o desenvolvedor deseja adicionar."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-22",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo que armazenará informações pessoais de saúde (PHI). As PHI precisam ser criptografadas o tempo todo. Uma instância criptografada do Amazon RDS para MySQL está armazenando os dados.",
    "ask": "O desenvolvedor deseja aumentar o desempenho do aplicativo armazenando em cache os dados acessados com frequência e, ao mesmo tempo, adicionando a capacidade de classificar ou classificar os conjuntos de dados armazenados em cache.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma instância do Amazon ElastiCache para Redis. Habilite a criptografia de dados em trânsito e em repouso. Armazene os dados acessados com frequência no cache."
      },
      {
        "id": "B",
        "text": "Crie uma instância do Amazon ElastiCache para Memcached. Habilite a criptografia de dados em trânsito e em repouso. Armazene os dados acessados com frequência no cache."
      },
      {
        "id": "C",
        "text": "Crie uma réplica de leitura do Amazon RDS para MySQL. Conecte-se à réplica de leitura usando SSL. Configure a réplica de leitura para armazenar dados acessados com frequência."
      },
      {
        "id": "D",
        "text": "Crie uma tabela do Amazon DynamoDB e um cluster do DynamoDB Accelerator (DAX) para a tabela. Armazene os dados acessados com frequência na tabela do DynamoDB."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-23",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo Windows legado com vários nós, executado localmente. O aplicativo usa uma pasta compartilhada na rede como um repositório de configuração centralizado para armazenar arquivos de configuração no formato .xml. A empresa está migrando o aplicativo para instâncias do Amazon EC2.",
    "ask": "Como parte da migração para a AWS, um desenvolvedor deve identificar uma solução que ofereça alta disponibilidade para o repositório.Qual solução atenderá a esse requisito com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Monte um volume do Amazon Elastic Block Store (Amazon EBS) em uma das instâncias do EC2. Implante um sistema de arquivos no volume EBS. Use o sistema operacional do host para compartilhar uma pasta. Atualize o código do aplicativo para ler e gravar arquivos de configuração da pasta compartilhada."
      },
      {
        "id": "B",
        "text": "Implante uma microinstância do EC2 com um volume de armazenamento de instância. Use o sistema operacional do host para compartilhar uma pasta. Atualize o código do aplicativo para ler e gravar arquivos de configuração da pasta compartilhada."
      },
      {
        "id": "C",
        "text": "Crie um bucket do Amazon S3 para hospedar o repositório. Migre os arquivos .xml existentes para o bucket do S3. Atualize o código do aplicativo para usar o SDK da AWS para ler e gravar arquivos de configuração do Amazon S3."
      },
      {
        "id": "D",
        "text": "Crie um bucket do Amazon S3 para hospedar o repositório. Migre os arquivos .xml existentes para o bucket do S3. Monte o bucket do S3 nas instâncias do EC2 como um volume local. Atualize o código do aplicativo para ler e gravar arquivos de configuração do disco."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-24",
    "type": "single",
    "stem": "Uma empresa deseja implantar e manter sites estáticos na AWS. O código-fonte de cada site é hospedado em um dos diversos sistemas de controle de versão, incluindo AWS CodeCommit, Bitbucket e GitHub.A empresa deseja implementar lançamentos em fases usando ambientes de desenvolvimento, staging, testes de aceitação do usuário e produção na Nuvem AWS. As implantações em cada ambiente devem ser iniciadas por mesclagens de código na ramificação Git relevante. A empresa deseja usar HTTPS para todas as trocas de dados.",
    "ask": "A empresa precisa de uma solução que não exija que os servidores funcionem continuamente.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Hospede cada site usando o AWS Amplify com um backend sem servidor. Conecte as ramificações do repositório que correspondem a cada um dos ambientes desejados. Inicie as implantações mesclando as alterações de código em uma ramificação desejada."
      },
      {
        "id": "B",
        "text": "Hospede cada site no AWS Elastic Beanstalk com múltiplos ambientes. Use a CLI do EB para vincular cada branch do repositório. Integre o AWS CodePipeline para automatizar implantações a partir de mesclagens de código de controle de versão."
      },
      {
        "id": "C",
        "text": "Hospede cada site em diferentes buckets do Amazon S3 para cada ambiente. Configure o AWS CodePipeline para extrair o código-fonte do controle de versão. Adicione um estágio do AWS CodeBuild para copiar o código-fonte para o Amazon S3."
      },
      {
        "id": "D",
        "text": "Hospede cada site em sua própria instância do Amazon EC2. Escreva um script de implantação personalizado para agrupar os ativos estáticos de cada site. Copie os ativos para o Amazon EC2. Configure um fluxo de trabalho para executar o script quando o código for mesclado."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-25",
    "type": "single",
    "stem": "Uma empresa está migrando um banco de dados local para o Amazon RDS para MySQL. A empresa possui cargas de trabalho com alta demanda de leitura.",
    "ask": "Ela deseja refatorar o código para obter o desempenho ideal de leitura para consultas.Qual solução atenderá a esse requisito com MENOS esforço atual e futuro?",
    "options": [
      {
        "id": "A",
        "text": "Use uma implantação multi-AZ do Amazon RDS. Aumente o número de conexões que o código faz com o banco de dados ou aumente o tamanho do pool de conexões, se um pool de conexões estiver em uso."
      },
      {
        "id": "B",
        "text": "Use uma implantação multi-AZ do Amazon RDS. Modifique o código para que as consultas acessem a instância secundária do RDS."
      },
      {
        "id": "C",
        "text": "Implante o Amazon RDS com uma ou mais réplicas de leitura. Modifique o código do aplicativo para que as consultas usem a URL das réplicas de leitura."
      },
      {
        "id": "D",
        "text": "Use um software de replicação de código aberto para criar uma cópia do banco de dados MySQL em uma instância do Amazon EC2. Modifique o código do aplicativo para que as consultas usem o endereço IP da instância do EC2."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-26",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo que será implantado em dispositivos IoT. O aplicativo enviará dados para uma API RESTful implantada como uma função do AWS Lambda. O aplicativo atribuirá a cada solicitação de API um identificador exclusivo. O volume de solicitações de API do aplicativo pode aumentar aleatoriamente a qualquer hora do dia.Durante períodos de limitação de solicitações, o aplicativo pode precisar repetir as solicitações.",
    "ask": "A API deve ser capaz de lidar com solicitações duplicadas sem inconsistências ou perda de dados.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma instância de banco de dados do Amazon RDS para MySQL. Armazene o identificador exclusivo de cada solicitação em uma tabela do banco de dados. Modifique a função Lambda para verificar a tabela em busca do identificador antes de processar a solicitação."
      },
      {
        "id": "B",
        "text": "Crie uma tabela do Amazon DynamoDB. Armazene o identificador exclusivo de cada solicitação na tabela. Modifique a função Lambda para verificar o identificador na tabela antes de processar a solicitação."
      },
      {
        "id": "C",
        "text": "Crie uma tabela do Amazon DynamoDB. Armazene o identificador exclusivo de cada solicitação na tabela. Modifique a função Lambda para retornar uma resposta de erro do cliente quando a função receber uma solicitação duplicada."
      },
      {
        "id": "D",
        "text": "Crie uma instância do Amazon ElastiCache para Memcached. Armazene o identificador exclusivo de cada solicitação no cache. Modifique a função Lambda para verificar o cache em busca do identificador antes de processar a solicitação."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-27",
    "type": "single",
    "stem": "Um desenvolvedor deseja expandir uma aplicação para execução em várias regiões da AWS. O desenvolvedor deseja copiar as Imagens de Máquina da Amazon (AMIs) com as alterações mais recentes e criar uma nova pilha de aplicações na região de destino. De acordo com os requisitos da empresa, todas as AMIs devem ser criptografadas em todas as regiões.",
    "ask": "No entanto, nem todas as AMIs que a empresa utiliza são criptografadas.Como o desenvolvedor pode expandir a aplicação para execução na região de destino e, ao mesmo tempo, atender ao requisito de criptografia?",
    "options": [
      {
        "id": "A",
        "text": "Crie novas AMIs e especifique os parâmetros de criptografia. Copie as AMIs criptografadas para a região de destino. Exclua as AMIs não criptografadas."
      },
      {
        "id": "B",
        "text": "Use o AWS Key Management Service (AWS KMS) para habilitar a criptografia nas AMIs não criptografadas. Copie as AMIs criptografadas para a região de destino."
      },
      {
        "id": "C",
        "text": "Use o Gerenciador de Certificados da AWS (ACM) para habilitar a criptografia nas AMIs não criptografadas. Copie as AMIs criptografadas para a região de destino."
      },
      {
        "id": "D",
        "text": "Copie as AMIs não criptografadas para a região de destino. Habilite a criptografia por padrão na região de destino."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-28",
    "type": "single",
    "stem": "Uma empresa hospeda uma aplicação web do lado do cliente para uma de suas subsidiárias no Amazon S3. A aplicação web pode ser acessada pelo Amazon CloudFront em https://www.example.com. Após uma implementação bem-sucedida, a empresa deseja hospedar mais três aplicações web do lado do cliente para suas subsidiárias restantes em três buckets S3 separados.Para atingir esse objetivo, um desenvolvedor move todos os arquivos JavaScript e fontes web comuns para um bucket S3 central que atende às aplicações web.",
    "ask": "No entanto, durante os testes, o desenvolvedor percebe que o navegador bloqueia os arquivos JavaScript e as fontes web.O que o desenvolvedor deve fazer para evitar que o navegador bloqueie os arquivos JavaScript e as fontes web?",
    "options": [
      {
        "id": "A",
        "text": "Crie quatro pontos de acesso que permitam acesso ao bucket central do S3. Atribua um ponto de acesso a cada bucket de aplicativo web."
      },
      {
        "id": "B",
        "text": "Crie uma política de bucket que permita acesso ao bucket central do S3. Anexe a política de bucket ao bucket central do S3."
      },
      {
        "id": "C",
        "text": "Crie uma configuração de compartilhamento de recursos entre origens (CORS) que permita acesso ao bucket central do S3. Adicione a configuração CORS ao bucket central do S3."
      },
      {
        "id": "D",
        "text": "Crie um cabeçalho Content-MD5 que forneça uma verificação de integridade da mensagem para o bucket central do S3. Insira o cabeçalho Content-MD5 para cada solicitação de aplicativo web."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-29",
    "type": "multi",
    "pick": 2,
    "stem": "Um aplicativo está processando dados de fluxo de cliques usando o Amazon Kinesis. O fluxo de dados de fluxo de cliques no Kinesis sofre picos periódicos.",
    "ask": "A chamada da API PutRecords falha ocasionalmente e os logs mostram que a chamada com falha retorna a resposta mostrada abaixo:Quais técnicas ajudarão a mitigar essa exceção?",
    "options": [
      {
        "id": "A",
        "text": "Implementar novas tentativas com recuo exponencial."
      },
      {
        "id": "B",
        "text": "Use uma API PutRecord em vez de PutRecords."
      },
      {
        "id": "C",
        "text": "Reduza a frequência e/ou o tamanho das solicitações."
      },
      {
        "id": "D",
        "text": "Use o Amazon SNS em vez do Kinesis."
      },
      {
        "id": "E",
        "text": "Reduzir o número de consumidores de KCL."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-30",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que utiliza pools de usuários do Amazon Cognito como provedor de identidade. A empresa precisa proteger o acesso aos registros dos usuários. A empresa configurou a autenticação multifator (MFA).",
    "ask": "A empresa também deseja enviar uma notificação de atividade de login por e-mail sempre que um usuário fizer login.Qual é a solução operacional MAIS eficiente que atende a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda que utilize o Amazon Simple Email Service (Amazon SES) para enviar a notificação por e-mail. Adicione uma API do Amazon API Gateway para invocar a função. Chame a API do lado do cliente quando a confirmação de login for recebida."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda que use o Amazon Simple Email Service (Amazon SES) para enviar a notificação por e-mail. Adicione um gatilho Lambda de pós-autenticação do Amazon Cognito para a função."
      },
      {
        "id": "C",
        "text": "Crie uma função do AWS Lambda que use o Amazon Simple Email Service (Amazon SES) para enviar a notificação por e-mail. Crie um filtro de assinatura de log do Amazon CloudWatch Logs para invocar a função com base no status de login."
      },
      {
        "id": "D",
        "text": "Configure o Amazon Cognito para transmitir todos os logs para o Amazon Kinesis Data Firehose. Crie uma função do AWS Lambda para processar os logs transmitidos e enviar notificações por e-mail com base no status de login de cada usuário."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-31",
    "type": "single",
    "stem": "Um desenvolvedor possui um aplicativo que armazena dados em um bucket do Amazon S3. O aplicativo utiliza uma API HTTP para armazenar e recuperar objetos.",
    "ask": "Quando a operação da API PutObject adiciona objetos ao bucket do S3, o desenvolvedor deve criptografar esses objetos em repouso usando criptografia do lado do servidor com chaves gerenciadas do Amazon S3 (SSE-S3).Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma chave do AWS Key Management Service (AWS KMS). Atribua a chave KMS ao bucket do S3."
      },
      {
        "id": "B",
        "text": "Defina o cabeçalho x-amz-server-side-encryption ao invocar a operação da API PutObject."
      },
      {
        "id": "C",
        "text": "Forneça a chave de criptografia no cabeçalho HTTP de cada solicitação."
      },
      {
        "id": "D",
        "text": "Aplique TLS para criptografar o tráfego para o bucket S3."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-32",
    "type": "single",
    "stem": "Um desenvolvedor precisa realizar testes de carga geográfica de uma API.",
    "ask": "Ele precisa implantar recursos em diversas regiões da AWS para dar suporte aos testes de carga da API.Como o desenvolvedor pode atender a esses requisitos sem código de aplicativo adicional?",
    "options": [
      {
        "id": "A",
        "text": "Crie e implante uma função do AWS Lambda em cada região desejada. Configure a função do Lambda para criar uma pilha a partir de um modelo do AWS CloudFormation nessa região quando a função for invocada."
      },
      {
        "id": "B",
        "text": "Crie um modelo do AWS CloudFormation que defina os recursos de teste de carga. Use o comando create-stack-set da AWS CLI para criar um conjunto de pilhas nas regiões desejadas."
      },
      {
        "id": "C",
        "text": "Crie um documento do AWS Systems Manager que defina os recursos. Use o documento para criar os recursos nas regiões desejadas."
      },
      {
        "id": "D",
        "text": "Crie um modelo do AWS CloudFormation que defina os recursos de teste de carga. Use o comando \"deploy\" da AWS CLI para criar uma pilha a partir do modelo em cada região."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-33",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que inclui uma API REST do Amazon API Gateway na região us-east-2. O desenvolvedor deseja usar o Amazon CloudFront e um nome de domínio personalizado para a API.",
    "ask": "O desenvolvedor adquiriu um certificado SSL/TLS para o domínio de um provedor terceirizado.Como o desenvolvedor deve configurar o domínio personalizado para a aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Importe o certificado SSL/TLS para o Gerenciador de Certificados da AWS (ACM) na mesma região da API. Crie um registro DNS A para o domínio personalizado."
      },
      {
        "id": "B",
        "text": "Importe o certificado SSL/TLS para o CloudFront. Crie um registro DNS CNAME para o domínio personalizado."
      },
      {
        "id": "C",
        "text": "Importe o certificado SSL/TLS para o Gerenciador de Certificados da AWS (ACM) na mesma região da API. Crie um registro DNS CNAME para o domínio personalizado."
      },
      {
        "id": "D",
        "text": "Importe o certificado SSL/TLS para o Gerenciador de Certificados da AWS (ACM) na região us-east-1. Crie um registro DNS CNAME para o domínio personalizado."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-34",
    "type": "single",
    "stem": "Um desenvolvedor está criando um modelo que usa o AWS CloudFormation para implantar uma aplicação.",
    "ask": "A aplicação é serverless e utiliza o Amazon API Gateway, o Amazon DynamoDB e o AWS Lambda.Qual serviço ou ferramenta da AWS o desenvolvedor deve usar para definir recursos serverless em YAML?",
    "options": [
      {
        "id": "A",
        "text": "Funções intrínsecas sem servidor do CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "Modelo de aplicativo sem servidor da AWS (AWS SAM)"
      },
      {
        "id": "D",
        "text": "Kit de desenvolvimento em nuvem da AWS (AWS CDK)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-35",
    "type": "single",
    "stem": "Um desenvolvedor deseja inserir um registro em uma tabela do Amazon DynamoDB assim que um novo arquivo for adicionado a um bucket do Amazon S3.Qual conjunto de etapas seria necessário para isso?",
    "options": [
      {
        "id": "A",
        "text": "Crie um evento com o Amazon EventBridge que monitorará o bucket do S3 e, em seguida, inserirá os registros no DynamoDB."
      },
      {
        "id": "B",
        "text": "Configure um evento S3 para invocar uma função do AWS Lambda que insere registros no DynamoDB."
      },
      {
        "id": "C",
        "text": "Crie uma função do AWS Lambda que pesquisará o bucket do S3 e, em seguida, inserirá os registros no DynamoDB."
      },
      {
        "id": "D",
        "text": "Crie uma tarefa cron que será executada em um horário agendado e insira os registros no DynamoDB."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-36",
    "type": "multi",
    "pick": 2,
    "stem": "Uma equipe de desenvolvimento mantém uma aplicação web usando um único modelo do AWS CloudFormation. O modelo define servidores web e um banco de dados Amazon RDS. A equipe usa o modelo do Cloud Formation para implantar a pilha do Cloud Formation em diferentes ambientes.Durante uma implantação recente da aplicação, um desenvolvedor fez com que o banco de dados de desenvolvimento principal fosse removido e recriado. O resultado desse incidente foi a perda de dados.",
    "ask": "A equipe precisa evitar a exclusão acidental do banco de dados no futuro.Quais soluções atenderão a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um atributo CloudFormation Deletion Policy com o valor Retain ao recurso de banco de dados."
      },
      {
        "id": "B",
        "text": "Atualize a política de pilha do CloudFormation para impedir atualizações no banco de dados."
      },
      {
        "id": "C",
        "text": "Modifique o banco de dados para usar uma implantação Multi-AZ."
      },
      {
        "id": "D",
        "text": "Crie um conjunto de pilhas do CloudFormation para implantações de aplicativos web e bancos de dados."
      },
      {
        "id": "E",
        "text": "Adicione um atributo Cloud Formation DeletionPolicy com o valor Retain à pilha."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-37",
    "type": "single",
    "stem": "Uma empresa possui um bucket do Amazon S3 que contém dados confidenciais. Os dados precisam ser criptografados em trânsito e em repouso. A empresa criptografa os dados no bucket do S3 usando uma chave do AWS Key Management Service (AWS KMS).",
    "ask": "Um desenvolvedor precisa conceder a várias outras contas da AWS a permissão para usar a operação GetObject do S3 para recuperar os dados do bucket do S3.Como o desenvolvedor pode garantir que todas as solicitações de recuperação de dados forneçam criptografia em trânsito?",
    "options": [
      {
        "id": "A",
        "text": "Defina uma política baseada em recursos no bucket S3 para negar acesso quando uma solicitação atender à condição “aws:SecureTransport”: “false”."
      },
      {
        "id": "B",
        "text": "Defina uma política baseada em recursos no bucket S3 para permitir acesso quando uma solicitação atender à condição “aws:SecureTransport”: “false”."
      },
      {
        "id": "C",
        "text": "Defina uma política baseada em funções nas funções das outras contas para negar acesso quando uma solicitação atender à condição de “aws:SecureTransport”: “false”."
      },
      {
        "id": "D",
        "text": "Defina uma política baseada em recursos na chave KMS para negar acesso quando uma solicitação atende à condição de “aws:SecureTransport”: “false”."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-38",
    "type": "single",
    "stem": "Um aplicativo hospedado em uma instância do Amazon EC2 precisa acessar arquivos armazenados em um bucket do Amazon S3. O aplicativo lista os objetos armazenados no bucket do S3 e exibe uma tabela para o usuário.",
    "ask": "Durante os testes, um desenvolvedor descobre que o aplicativo não exibe nenhum objeto na lista.Qual é a maneira MAIS segura de resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o perfil da instância do IAM anexado à instância do EC2 para incluir a permissão S3:* para o bucket S3."
      },
      {
        "id": "B",
        "text": "Atualize o perfil da instância do IAM anexado à instância do EC2 para incluir a permissão S3:ListBucket para o bucket S3."
      },
      {
        "id": "C",
        "text": "Atualize as permissões de usuário do desenvolvedor para incluir a permissão S3:ListBucket para o bucket S3."
      },
      {
        "id": "D",
        "text": "Atualize a política do bucket S3 incluindo a permissão S3:ListBucket e definindo o elemento Principal para especificar o número da conta da instância do EC2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-39",
    "type": "single",
    "stem": "Uma empresa está planejando gerenciar com segurança chaves de licença fixas e únicas na AWS.",
    "ask": "A equipe de desenvolvimento da empresa precisa acessar as chaves de licença em scripts automatizados executados em instâncias do Amazon EC2 e em pilhas do AWS CloudFormation.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 com arquivos criptografados prefixados com “config”"
      },
      {
        "id": "B",
        "text": "Segredos do AWS Secrets Manager com uma tag chamada SecretString"
      },
      {
        "id": "C",
        "text": "Parâmetros SecureString do AWS Systems Manager Parameter Store"
      },
      {
        "id": "D",
        "text": "Parâmetros NoEcho do CloudFormation"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-40",
    "type": "single",
    "stem": "Uma empresa implantou infraestrutura na AWS. Uma equipe de desenvolvimento deseja criar uma função do AWS Lambda que recuperará dados de um banco de dados Amazon Aurora. O banco de dados Amazon Aurora está em uma sub-rede privada na VPC da empresa. A VPC é denominada VPC1. Os dados são relacionais por natureza.",
    "ask": "A função Lambda precisa acessar os dados com segurança.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie a função Lambda. Configure o acesso VPC1 para a função. Anexe um grupo de segurança chamado SG1 à função Lambda e ao banco de dados. Configure as regras de entrada e saída do grupo de segurança para permitir tráfego TCP na porta 3306."
      },
      {
        "id": "B",
        "text": "Crie e execute uma função Lambda em uma nova sub-rede pública que esteja em uma nova VPC chamada VPC2. Crie uma conexão de peering entre VPC1 e VPC2."
      },
      {
        "id": "C",
        "text": "Crie a função Lambda. Configure o acesso à VPC1 para a função. Atribua um grupo de segurança chamado SG1 à função Lambda. Atribua um segundo grupo de segurança chamado SG2 ao banco de dados. Adicione uma regra de entrada ao SG1 para permitir o tráfego TCP da porta 3306."
      },
      {
        "id": "D",
        "text": "Exporte os dados do banco de dados Aurora para o Amazon S3. Crie e execute uma função Lambda na VPC1. Configure a função Lambda para consultar os dados do Amazon S3."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-41",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando uma aplicação web que usa o Amazon API Gateway para expor uma função do AWS Lambda para processar solicitações de clientes.",
    "ask": "Durante o teste, o desenvolvedor percebe que o API Gateway atinge o tempo limite, mesmo que a função Lambda termine dentro do limite de tempo definido.Qual das seguintes métricas do API Gateway no Amazon CloudWatch pode ajudar o desenvolvedor a solucionar o problema?",
    "options": [
      {
        "id": "A",
        "text": "CacheHitCount"
      },
      {
        "id": "B",
        "text": "IntegraçãoLatência"
      },
      {
        "id": "C",
        "text": "Contagem de Perdas de Cache"
      },
      {
        "id": "D",
        "text": "Latência"
      },
      {
        "id": "E",
        "text": "Conde"
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-42",
    "type": "single",
    "stem": "Uma equipe de desenvolvimento deseja construir um pipeline de integração/entrega contínua (CI/CD). A equipe está usando o AWS CodePipeline para automatizar a compilação e a implantação do código.",
    "ask": "A equipe deseja armazenar o código do programa para prepará-lo para o pipeline de CI/CD.Qual serviço da AWS a equipe deve usar para armazenar o código do programa?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "B",
        "text": "AWS CodeArtifact"
      },
      {
        "id": "C",
        "text": "AWS CodeCommit"
      },
      {
        "id": "D",
        "text": "Amazon CodeGuru"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-43",
    "type": "single",
    "stem": "Um desenvolvedor está projetando uma função do AWS Lambda que cria arquivos temporários com menos de 10 MB durante a invocação. Os arquivos temporários serão acessados e modificados diversas vezes durante a invocação.",
    "ask": "O desenvolvedor não precisa salvar ou recuperar esses arquivos no futuro.Onde os arquivos temporários devem ser armazenados?",
    "options": [
      {
        "id": "A",
        "text": "o diretório /tmp"
      },
      {
        "id": "B",
        "text": "Sistema de arquivos elástico da Amazon (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "Loja de blocos elásticos da Amazon (Amazon EBS)"
      },
      {
        "id": "D",
        "text": "Amazon S3"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-44",
    "type": "single",
    "stem": "Um desenvolvedor está projetando uma aplicação sem servidor com duas funções do AWS Lambda para processar fotos. Uma função do Lambda armazena objetos em um bucket do Amazon S3 e os metadados associados em uma tabela do Amazon DynamoDB. A outra função do Lambda busca os objetos no bucket do S3 usando os metadados da tabela do DynamoDB.",
    "ask": "Ambas as funções do Lambda usam a mesma biblioteca Python para realizar cálculos complexos e estão se aproximando do limite máximo de tamanho dos pacotes de implantação compactados.O que o desenvolvedor deve fazer para reduzir o tamanho dos pacotes de implantação do Lambda com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Empacote cada biblioteca Python em seu próprio arquivo .zip. Implante cada função Lambda com sua própria cópia da biblioteca."
      },
      {
        "id": "B",
        "text": "Crie uma camada Lambda com a biblioteca Python necessária. Use a camada Lambda em ambas as funções Lambda."
      },
      {
        "id": "C",
        "text": "Combine as duas funções Lambda em uma única função Lambda. Implante a função Lambda como um único arquivo .zip."
      },
      {
        "id": "D",
        "text": "Baixe a biblioteca Python para um bucket S3. Programe as funções Lambda para referenciar as URLs dos objetos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-45",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma função do AWS Lambda. O desenvolvedor deseja registrar eventos importantes que ocorrem durante a execução da função do Lambda. O desenvolvedor deseja incluir um identificador exclusivo para associar os eventos a uma invocação de função específica.",
    "ask": "O desenvolvedor adiciona o seguinte código à função do Lambda:Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Obtenha o identificador da solicitação no campo \"ID da solicitação da AWS\" no objeto de contexto. Configure o aplicativo para gravar logs na saída padrão."
      },
      {
        "id": "B",
        "text": "Obtenha o identificador da solicitação no campo \"ID da solicitação da AWS\" no objeto de evento. Configure o aplicativo para gravar logs em um arquivo."
      },
      {
        "id": "C",
        "text": "Obtenha o identificador da solicitação no campo \"ID da solicitação da AWS\" no objeto de evento. Configure o aplicativo para gravar logs na saída padrão."
      },
      {
        "id": "D",
        "text": "Obtenha o identificador da solicitação no campo ID da solicitação da AWS no objeto de contexto. Configure o aplicativo para gravar logs em um arquivo."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-46",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma aplicação sem servidor que precisa processar alterações em uma tabela do Amazon DynamoDB com uma função do AWS Lambda.Como o desenvolvedor deve configurar a função do Lambda para detectar alterações na tabela do DynamoDB?",
    "options": [
      {
        "id": "A",
        "text": "Crie um fluxo de dados do Amazon Kinesis e anexe-o à tabela do DynamoDB. Crie um gatilho para conectar o fluxo de dados à função Lambda."
      },
      {
        "id": "B",
        "text": "Crie uma regra do Amazon EventBridge para invocar a função Lambda regularmente. Conecte-se à tabela do DynamoDB a partir da função Lambda para detectar alterações."
      },
      {
        "id": "C",
        "text": "Habilite os fluxos do DynamoDB na tabela. Crie um gatilho para conectar o fluxo do DynamoDB à função do Lambda."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de entrega do Amazon Kinesis Data Firehose e anexe-o à tabela do DynamoDB. Configure o destino do fluxo de entrega como a função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-47",
    "type": "multi",
    "pick": 2,
    "stem": "Um aplicativo utiliza um grupo de Auto Scaling do Amazon EC2. Um desenvolvedor observa que as instâncias do EC2 estão demorando muito para ficarem disponíveis durante eventos de expansão. O script UserData está demorando muito para ser executado.O desenvolvedor deve implementar uma solução para reduzir o tempo decorrido até que uma instância do EC2 fique disponível. A solução deve disponibilizar a versão mais recente do aplicativo o tempo todo e aplicar todas as atualizações de segurança disponíveis. A solução também deve minimizar o número de imagens criadas.",
    "ask": "As imagens devem ser validadas.Qual combinação de etapas o desenvolvedor deve adotar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o EC2 Image Builder para criar uma Amazon Machine Image (AMI). Instale todos os patches e agentes necessários para gerenciar e executar o aplicativo. Atualize a configuração de inicialização do grupo de Auto Scaling para usar a AMI."
      },
      {
        "id": "B",
        "text": "Use o EC2 Image Builder para criar uma Amazon Machine Image (AMI). Instale a versão mais recente do aplicativo e todos os patches e agentes necessários para gerenciar e executar o aplicativo. Atualize a configuração de inicialização do grupo de Auto Scaling para usar a AMI."
      },
      {
        "id": "C",
        "text": "Configure o AWS CodeDeploy para implantar a versão mais recente do aplicativo em tempo de execução."
      },
      {
        "id": "D",
        "text": "Configure o AWS CodePipeline para implantar a versão mais recente do aplicativo em tempo de execução."
      },
      {
        "id": "E",
        "text": "Remova quaisquer comandos que executem patches no sistema operacional do script UserData."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-48",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que precisa de credenciais para se conectar a um banco de dados Amazon RDS para MySQL. Um bucket do Amazon S3 armazena as credenciais. O desenvolvedor precisa aprimorar a solução existente implementando a rotação de credenciais e o armazenamento seguro.",
    "ask": "O desenvolvedor também precisa fornecer integração com a função do Lambda.Qual solução o desenvolvedor deve usar para armazenar e recuperar as credenciais com a MENOR sobrecarga de gerenciamento?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais no AWS Systems Manager Parameter Store. Selecione o banco de dados que o parâmetro acessará. Use a chave padrão do AWS Key Management Service (AWS KMS) para criptografar o parâmetro. Habilite a rotação automática para o parâmetro. Use o parâmetro do Parameter Store na função Lambda para se conectar ao banco de dados."
      },
      {
        "id": "B",
        "text": "Criptografe as credenciais com a chave padrão do AWS Key Management Service (AWS KMS). Armazene as credenciais como variáveis de ambiente para a função Lambda. Crie uma segunda função Lambda para gerar novas credenciais e rotacioná-las atualizando as variáveis de ambiente da primeira função Lambda. Invoque a segunda função Lambda usando uma regra do Amazon EventBridge executada conforme uma programação. Atualize o banco de dados para usar as novas credenciais. Na primeira função Lambda, recupere as credenciais das variáveis de ambiente. Descriptografe as credenciais usando o AWS KMS. Conecte-se ao banco de dados."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais no AWS Secrets Manager. Defina o tipo de segredo como \"Credenciais para o banco de dados Amazon RDS\". Selecione o banco de dados que o segredo acessará. Use a chave padrão do AWS Key Management Service (AWS KMS) para criptografar o segredo. Habilite a rotação automática do segredo. Use o segredo do Secrets Manager na função Lambda para se conectar ao banco de dados."
      },
      {
        "id": "D",
        "text": "Criptografe as credenciais usando o AWS Key Management Service (AWS KMS). Armazene as credenciais em uma tabela do Amazon DynamoDB. Crie uma segunda função do Lambda para rotacionar as credenciais. Invoque a segunda função do Lambda usando uma regra do Amazon EventBridge executada conforme uma programação. Atualize a tabela do DynamoDB. Atualize o banco de dados para usar as credenciais geradas. Recupere as credenciais do DynamoDB com a primeira função do Lambda. Conecte-se ao banco de dados."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-49",
    "type": "single",
    "stem": "Um desenvolvedor escreveu a seguinte política do IAM para fornecer acesso a um bucket do Amazon S3:Qual acesso a política permite em relação às ações s3:GetObject e s3:PutObject?",
    "options": [
      {
        "id": "A",
        "text": "Acesso em todos os buckets, exceto o bucket “DOC-EXAMPLE-BUCKET”"
      },
      {
        "id": "B",
        "text": "Acesso em todos os buckets que começam com “DOC-EXAMPLE-BUCKET”, exceto o bucket “DOC-EXAMPLE-BUCKET/secrets”"
      },
      {
        "id": "C",
        "text": "Acesso a todos os objetos no bucket “DOC-EXAMPLE-BUCKET” juntamente com acesso a todas as ações do S3 para objetos no bucket “DOC-EXAMPLE-BUCKET” que começam com “secrets”"
      },
      {
        "id": "D",
        "text": "Acesso a todos os objetos no bucket “DOC-EXAMPLE-BUCKET”, exceto aos objetos que começam com “secrets”"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-50",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo móvel que chama um serviço de back-end usando uma API REST do Amazon API Gateway.",
    "ask": "Para testes de integração durante a fase de desenvolvimento, o desenvolvedor deseja simular diferentes respostas de back-end sem invocar o serviço de back-end.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda. Use a integração de proxy do API Gateway para retornar respostas HTTP constantes."
      },
      {
        "id": "B",
        "text": "Crie uma instância do Amazon EC2 que atenda à API REST de backend usando um modelo do AWS CloudFormation."
      },
      {
        "id": "C",
        "text": "Personalize o estágio do API Gateway para selecionar um tipo de resposta com base na solicitação."
      },
      {
        "id": "D",
        "text": "Use um modelo de mapeamento de solicitação para selecionar a resposta de integração simulada."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-51",
    "type": "single",
    "stem": "Um desenvolvedor possui um aplicativo legado hospedado localmente. Outros aplicativos hospedados na AWS dependem do aplicativo local para funcionar corretamente.",
    "ask": "Em caso de erros no aplicativo, o desenvolvedor deseja poder usar o Amazon CloudWatch para monitorar e solucionar problemas de todos os aplicativos em um só lugar.Como o desenvolvedor pode fazer isso?",
    "options": [
      {
        "id": "A",
        "text": "Instale um SDK da AWS no servidor local para enviar logs automaticamente para o CloudWatch."
      },
      {
        "id": "B",
        "text": "Baixe o agente do CloudWatch para o servidor local. Configure o agente para usar credenciais de usuário do IAM com permissões para o CloudWatch."
      },
      {
        "id": "C",
        "text": "Carregue os arquivos de log do servidor local para o Amazon S3 e faça com que o CloudWatch leia os arquivos."
      },
      {
        "id": "D",
        "text": "Carregue arquivos de log do servidor local para uma instância do Amazon EC2 e faça com que a instância encaminhe os logs para o CloudWatch."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-52",
    "type": "single",
    "stem": "Um fluxo de entrega do Amazon Kinesis Data Firehose está recebendo dados de clientes que contêm informações de identificação pessoal.",
    "ask": "Um desenvolvedor precisa remover identificadores de clientes baseados em padrões dos dados e armazenar os dados modificados em um bucket do Amazon S3.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implemente a transformação de dados do Kinesis Data Firehose como uma função do AWS Lambda. Configure a função para remover os identificadores de clientes. Defina um bucket do Amazon S3 como destino do fluxo de entrega."
      },
      {
        "id": "B",
        "text": "Inicie uma instância do Amazon EC2. Defina a instância do EC2 como destino do fluxo de entrega. Execute uma aplicação na instância do EC2 para remover os identificadores do cliente. Armazene os dados transformados em um bucket do Amazon S3."
      },
      {
        "id": "C",
        "text": "Crie uma instância do Amazon OpenSearch Service. Defina a instância do OpenSearch Service como destino do fluxo de entrega. Use a função de busca e substituição para remover os identificadores de clientes. Exporte os dados para um bucket do Amazon S3."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de trabalho do AWS Step Functions para remover os identificadores de clientes. Como última etapa do fluxo de trabalho, armazene os dados transformados em um bucket do Amazon S3. Defina o fluxo de trabalho como o destino do fluxo de entrega."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-53",
    "type": "single",
    "stem": "Um desenvolvedor está usando uma função do AWS Lambda para gerar avatares para fotos de perfil que são carregadas em um bucket do Amazon S3. A função Lambda é invocada automaticamente para fotos de perfil salvas sob o prefixo /original/ do S3. O desenvolvedor percebe que algumas fotos fazem com que a função Lambda expire.",
    "ask": "O desenvolvedor deseja implementar um mecanismo de fallback usando outra função do Lambda que redimensione a foto de perfil.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Defina a função Lambda de redimensionamento de imagem como destino da função Lambda do gerador de avatar para os eventos que falham no processamento."
      },
      {
        "id": "B",
        "text": "Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Defina a fila do SQS como destino com uma condição de falha para a função Lambda do gerador de avatar. Configure a função Lambda de redimensionamento de imagem para pesquisar a partir da fila do SQS."
      },
      {
        "id": "C",
        "text": "Crie uma máquina de estados do AWS Step Functions que invoque a função Lambda do gerador de avatar e use a função Lambda de redimensionamento de imagem como fallback. Crie uma regra do Amazon EventBridge que corresponda a eventos do bucket do S3 para invocar a máquina de estados."
      },
      {
        "id": "D",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Defina o tópico do SNS como destino com uma condição de falha para a função Lambda do gerador de avatar. Assine a função Lambda de redimensionamento de imagem ao tópico do SNS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-54",
    "type": "single",
    "stem": "Um desenvolvedor precisa migrar um aplicativo de varejo online para a AWS para lidar com um aumento previsto no tráfego. O aplicativo atualmente é executado em dois servidores: um servidor para o aplicativo web e outro servidor para o banco de dados. O servidor web renderiza páginas web e gerencia o estado da sessão na memória. O servidor de banco de dados hospeda um banco de dados MySQL que contém detalhes do pedido. Quando o tráfego para o aplicativo é intenso, o uso de memória do servidor web se aproxima de 100% e o aplicativo fica consideravelmente lento.O desenvolvedor descobriu que a maior parte do aumento de memória e da redução de desempenho está relacionada à carga de gerenciamento de sessões de usuário adicionais.",
    "ask": "Para a migração do servidor web, o desenvolvedor usará instâncias do Amazon EC2 com um grupo de Auto Scaling por trás de um Application Load Balancer.Qual conjunto adicional de alterações o desenvolvedor deve fazer no aplicativo para melhorar o desempenho do aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "Use uma instância EC2 para hospedar o banco de dados MySQL. Armazene os dados da sessão e os dados do aplicativo no banco de dados MySQL."
      },
      {
        "id": "B",
        "text": "Use o Amazon ElastiCache para Memcached para armazenar e gerenciar os dados da sessão. Use uma instância de banco de dados do Amazon RDS para MySQL para armazenar os dados do aplicativo."
      },
      {
        "id": "C",
        "text": "Use o Amazon ElastiCache para Memcached para armazenar e gerenciar os dados da sessão e os dados do aplicativo."
      },
      {
        "id": "D",
        "text": "Use o repositório de instâncias do EC2 para gerenciar os dados da sessão. Use uma instância de banco de dados do Amazon RDS para MySQL para armazenar os dados do aplicativo."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-55",
    "type": "single",
    "stem": "Uma aplicação usa funções Lambda para extrair metadados de arquivos enviados para um bucket do S3; os metadados são armazenados no Amazon DynamoDB.",
    "ask": "A aplicação começa a apresentar comportamento inesperado e o desenvolvedor deseja examinar os logs do código da função Lambda em busca de erros.Com base nessa configuração do sistema, onde o desenvolvedor encontraria os logs?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "Amazon DynamoDB"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-56",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está usando uma função do AWS Lambda para processar registros de um fluxo de dados do Amazon Kinesis. A empresa observou recentemente um processamento lento dos registros.",
    "ask": "Um desenvolvedor observa que a métrica de idade do iterador para a função está aumentando e que a duração da execução do Lambda está constantemente acima do normal.Quais ações o desenvolvedor deve tomar para aumentar a velocidade de processamento?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o número de fragmentos do fluxo de dados do Kinesis."
      },
      {
        "id": "B",
        "text": "Diminua o tempo limite da função Lambda."
      },
      {
        "id": "C",
        "text": "Aumente a memória alocada para a função Lambda."
      },
      {
        "id": "D",
        "text": "Diminua o número de fragmentos do fluxo de dados do Kinesis."
      },
      {
        "id": "E",
        "text": "Aumente o tempo limite da função Lambda."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-57",
    "type": "single",
    "stem": "Uma empresa precisa fortalecer suas imagens de contêiner antes que elas entrem em execução. O aplicativo da empresa usa o Amazon Elastic Container Registry (Amazon ECR) como registro de imagens, o Amazon Elastic Kubernetes Service (Amazon EKS) para computação e um pipeline do AWS CodePipeline que orquestra um fluxo de trabalho de integração e entrega contínuas (CI/CD).Os testes dinâmicos de segurança de aplicativos ocorrem no estágio final do pipeline, após a implantação de uma nova imagem em um namespace de desenvolvimento no cluster EKS.",
    "ask": "Um desenvolvedor precisa criar um estágio de análise antes dessa implantação para analisar a imagem do contêiner mais cedo no pipeline de CI/CD.Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie a imagem do contêiner e execute o comando docker scan localmente. Mitigue quaisquer descobertas antes de enviar as alterações para o repositório de código-fonte. Escreva um hook de pré-commit que imponha o uso deste fluxo de trabalho antes do commit."
      },
      {
        "id": "B",
        "text": "Crie um novo estágio do CodePipeline que ocorre após a criação da imagem do contêiner. Configure a varredura básica de imagens do ECR para varrer no envio da imagem. Use uma função do AWS Lambda como provedor de ações. Configure a função do Lambda para verificar os resultados da varredura e para falhar o pipeline se houver descobertas."
      },
      {
        "id": "C",
        "text": "Crie uma nova etapa do CodePipeline que ocorre após o código-fonte ser recuperado do repositório. Execute um scanner de segurança na revisão mais recente do código-fonte. Reprove o pipeline se houver descobertas."
      },
      {
        "id": "D",
        "text": "Adicione uma ação à etapa de implantação do pipeline para que ela ocorra antes da implantação no cluster EKS. Configure a varredura básica de imagens do ECR para varredura no envio de imagens. Use uma função do AWS Lambda como provedor de ações. Configure a função do Lambda para verificar os resultados da varredura e para reprovar o pipeline caso haja descobertas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-58",
    "type": "single",
    "stem": "Um desenvolvedor está testando um novo aplicativo de armazenamento de arquivos que usa uma distribuição do Amazon CloudFront para servir conteúdo de um bucket do Amazon S3. A distribuição acessa o bucket do S3 usando uma identidade de acesso de origem (OAI). As permissões do bucket do S3 negam explicitamente o acesso a todos os outros usuários.O aplicativo solicita que os usuários se autentiquem em uma página de login e, em seguida, usa cookies assinados para permitir que eles acessem seus diretórios de armazenamento pessoais. O desenvolvedor configurou a distribuição para usar seu comportamento de cache padrão com acesso de visualizador restrito e definiu a origem para apontar para o bucket do S3. No entanto, quando o desenvolvedor tenta navegar para a página de login, ele recebe um erro 403 Proibido.O desenvolvedor precisa implementar uma solução para permitir acesso não autenticado à página de login.",
    "ask": "A solução também deve manter todo o conteúdo privado seguro.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um segundo comportamento de cache à distribuição com a mesma origem do comportamento de cache padrão. Defina o padrão de caminho para o segundo comportamento de cache como o caminho da página de login e torne o acesso do visualizador irrestrito. Mantenha as configurações do comportamento de cache padrão inalteradas."
      },
      {
        "id": "B",
        "text": "Adicione um segundo comportamento de cache à distribuição com a mesma origem do comportamento de cache padrão. Defina o padrão de caminho para o segundo comportamento de cache como * e restrinja o acesso do visualizador. Altere o padrão de caminho do comportamento de cache padrão para o caminho da página de login e restrinja o acesso do visualizador."
      },
      {
        "id": "C",
        "text": "Adicione uma segunda origem como origem de failover ao comportamento de cache padrão. Aponte a origem de failover para o bucket S3. Defina o padrão de caminho para a origem primária como * e restrinja o acesso do visualizador. Defina o padrão de caminho para a origem de failover como o caminho da página de login e restrinja o acesso do visualizador."
      },
      {
        "id": "D",
        "text": "Adicione uma política de bucket ao bucket do S3 para permitir acesso de leitura. Defina o recurso na política como o Nome de Recurso da Amazon (ARN) do objeto da página de login no bucket do S3. Adicione uma função do CloudFront ao comportamento de cache padrão para redirecionar solicitações não autorizadas para a URL do S3 da página de login."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-59",
    "type": "single",
    "stem": "Um desenvolvedor está usando o AWS Amplify Hosting para criar e implantar um aplicativo. O desenvolvedor está recebendo um número crescente de relatórios de bugs de usuários.",
    "ask": "O desenvolvedor deseja adicionar testes de ponta a ponta ao aplicativo para eliminar o máximo de bugs possível antes que eles cheguem à produção.Qual solução o desenvolvedor deve implementar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Execute o comando amplify add test na CLI do Amplify."
      },
      {
        "id": "B",
        "text": "Crie testes unitários no aplicativo. Implante os testes unitários usando o comando amplify push na CLI do Amplify."
      },
      {
        "id": "C",
        "text": "Adicione uma fase de teste às configurações de compilação do amplify.yml para o aplicativo."
      },
      {
        "id": "D",
        "text": "Adicione uma fase de teste ao arquivo aws-exports.js para o aplicativo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-60",
    "type": "single",
    "stem": "Uma empresa de comércio eletrônico está usando uma função do AWS Lambda por trás do Amazon API Gateway como sua camada de aplicação. Para processar pedidos durante a finalização da compra, a aplicação chama uma API POST do frontend. A API POST invoca a função Lambda de forma assíncrona. Em raras situações, a aplicação não processou pedidos.",
    "ask": "Os logs da aplicação Lambda não mostram erros ou falhas.O que um desenvolvedor deve fazer para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Inspecione os logs do frontend em busca de falhas de API. Chame a API POST manualmente usando as solicitações do arquivo de log."
      },
      {
        "id": "B",
        "text": "Crie e inspecione a fila de mensagens mortas do Lambda. Solucione os problemas das funções com falha. Reprocesse os eventos."
      },
      {
        "id": "C",
        "text": "Inspecione os logs do Lambda no Amazon CloudWatch em busca de possíveis erros. Corrija os erros."
      },
      {
        "id": "D",
        "text": "Certifique-se de que o cache esteja desabilitado para a API POST no API Gateway."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-61",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação web na AWS. Quando um cliente envia uma solicitação, a aplicação gera relatórios e os disponibiliza ao cliente em até uma hora. Os relatórios devem ficar acessíveis ao cliente por 8 horas. Alguns relatórios têm mais de 1 MB. Cada relatório é exclusivo para o cliente.",
    "ask": "A aplicação deve excluir todos os relatórios com mais de 2 dias.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Gere os relatórios e armazene-os como itens do Amazon DynamoDB com um TTL especificado. Gere uma URL que recupere os relatórios do DynamoDB. Forneça a URL aos clientes por meio do aplicativo web."
      },
      {
        "id": "B",
        "text": "Gere os relatórios e armazene-os em um bucket do Amazon S3 que use criptografia do lado do servidor. Anexe os relatórios a uma mensagem do Amazon Simple Notification Service (Amazon SNS). Inscreva o cliente para receber notificações por e-mail do Amazon SNS."
      },
      {
        "id": "C",
        "text": "Gere os relatórios e armazene-os em um bucket do Amazon S3 que use criptografia do lado do servidor. Gere uma URL pré-assinada com uma data de validade. Forneça a URL aos clientes por meio do aplicativo web. Adicione regras de configuração do ciclo de vida do S3 ao bucket do S3 para excluir relatórios antigos."
      },
      {
        "id": "D",
        "text": "Gere os relatórios e armazene-os em um banco de dados Amazon RDS com um carimbo de data. Gere uma URL que recupere os relatórios do banco de dados RDS. Forneça a URL aos clientes por meio do aplicativo web. Agende uma função AWS Lambda de hora em hora para excluir registros do banco de dados com carimbos de data expirados."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-62",
    "type": "single",
    "stem": "Uma empresa implantou uma aplicação no AWS Elastic Beanstalk. A empresa configurou o grupo de Auto Scaling associado ao ambiente do Elastic Beanstalk para ter cinco instâncias do Amazon EC2. Se a capacidade for inferior a quatro instâncias do EC2 durante a implantação, o desempenho da aplicação será prejudicado.",
    "ask": "A empresa está usando a política de implantação \"tudo de uma vez\".Qual é a maneira MAIS econômica de resolver o problema de implantação?",
    "options": [
      {
        "id": "A",
        "text": "Altere o grupo Dimensionamento Automático para seis instâncias desejadas."
      },
      {
        "id": "B",
        "text": "Altere a política de implantação para divisão de tráfego. Especifique um tempo de avaliação de 1 hora."
      },
      {
        "id": "C",
        "text": "Altere a política de implantação para contínua com lote adicional. Especifique um tamanho de lote de 1."
      },
      {
        "id": "D",
        "text": "Altere a política de implantação para contínua. Especifique um tamanho de lote de 2."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-63",
    "type": "single",
    "stem": "Um desenvolvedor está incorporando o AWS X-Ray a um aplicativo que processa informações de identificação pessoal (PII). O aplicativo está hospedado em instâncias do Amazon EC2. As mensagens de rastreamento do aplicativo incluem PII criptografadas e vão para o Amazon CloudWatch.",
    "ask": "O desenvolvedor precisa garantir que nenhuma PII saia das instâncias do EC2.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Instrumente manualmente o X-Ray SDK no código do aplicativo."
      },
      {
        "id": "B",
        "text": "Utilize o agente de autoinstrumentação de raios X."
      },
      {
        "id": "C",
        "text": "Use o Amazon Macie para detectar e ocultar PII. Chame a API X-Ray do AWS Lambda."
      },
      {
        "id": "D",
        "text": "Use o AWS Distro para Open Telemetry."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-64",
    "type": "single",
    "stem": "Um desenvolvedor está migrando alguns recursos de um aplicativo monolítico legado para usar funções do AWS Lambda. Atualmente, o aplicativo armazena dados em um cluster de banco de dados do Amazon Aurora executado em sub-redes privadas em uma VPC. A conta da AWS possui uma VPC implantada.",
    "ask": "As funções do Lambda e o cluster de banco de dados estão implantados na mesma região da AWS e na mesma conta da AWS.O desenvolvedor precisa garantir que as funções do Lambda possam acessar o cluster de banco de dados com segurança sem atravessar a internet pública.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a configuração de acesso público do cluster de banco de dados como Sim."
      },
      {
        "id": "B",
        "text": "Configure um proxy de banco de dados Amazon RDS para as funções do Lambda."
      },
      {
        "id": "C",
        "text": "Configure um gateway NAT e um grupo de segurança para as funções do Lambda."
      },
      {
        "id": "D",
        "text": "Configure a VPC, as sub-redes e um grupo de segurança para as funções do Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-65",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma nova aplicação na AWS. A aplicação utiliza uma função do AWS Lambda que recupera informações de uma tabela do Amazon DynamoDB. O desenvolvedor codificou o nome da tabela do DynamoDB no código da função do Lambda. O nome da tabela pode mudar com o tempo.",
    "ask": "O desenvolvedor não deseja modificar o código do Lambda se o nome da tabela mudar.Qual solução atenderá a esses requisitos com MAIS eficiência?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma variável de ambiente Lambda para armazenar o nome da tabela. Use o método padrão da linguagem de programação para recuperar a variável."
      },
      {
        "id": "B",
        "text": "Armazene o nome da tabela em um arquivo. Armazene o arquivo na pasta /tmp. Use o SDK da linguagem de programação para recuperar o nome da tabela."
      },
      {
        "id": "C",
        "text": "Crie um arquivo para armazenar o nome da tabela. Compacte o arquivo e carregue-o na camada Lambda. Use o SDK da linguagem de programação para recuperar o nome da tabela."
      },
      {
        "id": "D",
        "text": "Crie uma variável global que esteja fora do manipulador na função Lambda para armazenar o nome da tabela."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-66",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo crítico na AWS. O aplicativo expõe uma API HTTP usando o Amazon API Gateway. A API é integrada a uma função do AWS Lambda. O aplicativo armazena dados em uma instância de banco de dados do Amazon RDS para MySQL com 2 CPUs virtuais (vCPUs) e 64 GB de RAM.Clientes relataram que algumas chamadas de API retornam respostas HTTP 500 Internal Server Error. O Amazon CloudWatch Logs mostra erros de \"conexões excessivas\". Os erros ocorrem durante horários de pico de uso, que são imprevisíveis.A empresa precisa tornar o aplicativo resiliente.",
    "ask": "O banco de dados não pode ficar inativo fora do horário de manutenção programada.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Diminua o número de vCPUs para a instância do banco de dados. Aumente a configuração max_connections."
      },
      {
        "id": "B",
        "text": "Use o Amazon RDS Proxy para criar um proxy que se conecte à instância do banco de dados. Atualize a função Lambda para se conectar ao proxy."
      },
      {
        "id": "C",
        "text": "Adicione um alarme do CloudWatch que altera a classe da instância do banco de dados quando o número de conexões aumenta para mais de 1.000."
      },
      {
        "id": "D",
        "text": "Adicione uma regra do Amazon EventBridge que aumente a configuração max_connections da instância do banco de dados quando a utilização da CPU estiver acima de 75%."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-67",
    "type": "single",
    "stem": "Uma empresa instalou medidores inteligentes em todos os locais de seus clientes. Os medidores inteligentes medem o consumo de energia em intervalos de 1 minuto e enviam as leituras de consumo para um ponto de extremidade remoto para coleta. A empresa precisa criar um ponto de extremidade que receberá as leituras dos medidores inteligentes e as armazenará em um banco de dados. A empresa deseja armazenar o ID do local e as informações de registro de data e hora.A empresa deseja fornecer aos seus clientes acesso de baixa latência ao seu consumo atual e histórico sob demanda. A empresa espera que a demanda aumente significativamente.",
    "ask": "A solução não deve afetar o desempenho nem incluir tempo de inatividade durante o escalonamento.Qual solução atenderá a esses requisitos com a MAIOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as leituras do medidor inteligente em um banco de dados Amazon RDS. Crie um índice com base nas colunas \"ID do local\" e \"carimbo de data/hora\". Use as colunas para filtrar os dados dos clientes."
      },
      {
        "id": "B",
        "text": "Armazene as leituras do medidor inteligente em uma tabela do Amazon DynamoDB. Crie uma chave composta usando as colunas de ID do local e carimbo de data/hora. Use as colunas para filtrar os dados dos clientes."
      },
      {
        "id": "C",
        "text": "Armazene as leituras do medidor inteligente no Amazon ElastiCache para Redis. Crie uma chave SortedSet usando as colunas de ID de localização e carimbo de data/hora. Use as colunas para filtrar os dados dos clientes."
      },
      {
        "id": "D",
        "text": "Armazene as leituras do medidor inteligente no Amazon S3. Particione os dados usando as colunas de ID de localização e carimbo de data/hora. Use o Amazon Athena para filtrar os dados dos clientes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-68",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação sem servidor que utiliza funções do AWS Lambda. A empresa precisa criar um conjunto de eventos de teste para testar funções do Lambda em um ambiente de desenvolvimento. Os eventos de teste serão criados uma vez e, em seguida, usados por todos os desenvolvedores em um grupo de desenvolvedores do IAM.",
    "ask": "Os eventos de teste devem ser editáveis por qualquer um dos usuários do IAM no grupo de desenvolvedores do IAM.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie e armazene os eventos de teste no Amazon S3 como objetos JSON. Permita acesso ao bucket do S3 a todos os usuários do IAM."
      },
      {
        "id": "B",
        "text": "Crie os eventos de teste. Configure as configurações de compartilhamento de eventos para torná-los compartilháveis."
      },
      {
        "id": "C",
        "text": "Crie e armazene os eventos de teste no Amazon DynamoDB. Permita o acesso ao DynamoDB usando funções do IAM."
      },
      {
        "id": "D",
        "text": "Crie os eventos de teste. Configure as configurações de compartilhamento de eventos para torná-los privados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-69",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está configurando o ambiente de implantação de um aplicativo no AWS CodePipeline. O código do aplicativo está armazenado em um repositório do GitHub. O desenvolvedor quer garantir que os testes unitários do pacote do repositório sejam executados no novo ambiente de implantação.",
    "ask": "O desenvolvedor já definiu o provedor de origem do pipeline como GitHub e especificou o repositório e a ramificação a serem usados na implantação.Qual combinação de etapas o desenvolvedor deve seguir para atender a esses requisitos com a MENOR sobrecarga?",
    "options": [
      {
        "id": "A",
        "text": "Crie um projeto do AWS CodeCommit. Adicione os comandos build e test do pacote do repositório ao buildspec do projeto."
      },
      {
        "id": "B",
        "text": "Crie um projeto AWS CodeBuild. Adicione os comandos build e test do pacote de repositório ao buildspec do projeto."
      },
      {
        "id": "C",
        "text": "Crie um projeto do AWS CodeDeploy. Adicione os comandos build e test do pacote do repositório ao buildspec do projeto."
      },
      {
        "id": "D",
        "text": "Adicione uma ação ao estágio de origem. Especifique o projeto recém-criado como o provedor da ação. Especifique o artefato de compilação como o artefato de entrada da ação."
      },
      {
        "id": "E",
        "text": "Adicione um novo estágio ao pipeline após o estágio de origem. Adicione uma ação ao novo estágio. Especifique o projeto recém-criado como o provedor da ação. Especifique o artefato de origem como o artefato de entrada da ação."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-70",
    "type": "single",
    "stem": "Um engenheiro criou um teste A/B de um novo recurso em um projeto do Amazon CloudWatch Evidently. O engenheiro configurou duas variações do recurso (Variação A e Variação B) para o teste. O engenheiro deseja trabalhar exclusivamente com a Variação A.",
    "ask": "Ele precisa fazer atualizações para que a Variação A seja a única variação exibida quando o engenheiro acessa o endpoint do aplicativo.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma substituição ao recurso. Defina o identificador da substituição como o ID de usuário do engenheiro. Defina a variação como Variação A."
      },
      {
        "id": "B",
        "text": "Adicione uma substituição ao recurso. Defina o identificador da substituição como Variação A. Defina a variação como 100%."
      },
      {
        "id": "C",
        "text": "Adicione um experimento ao projeto. Defina o identificador do experimento como Variação B. Defina a variação como 0%."
      },
      {
        "id": "D",
        "text": "Adicione um experimento ao projeto. Defina o identificador do experimento como a conta I da conta da AWS. Defina a variação como Variação A."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-71",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um aplicativo existente que usa o Amazon DynamoDB como armazenamento de dados. A tabela do DynamoDB possui os seguintes atributos: partNumber (chave de partição), vendor (chave de classificação), description, productFamily e productType.",
    "ask": "Ao analisar os padrões de uso, o desenvolvedor percebe que há módulos do aplicativo que frequentemente procuram uma lista de produtos com base nos atributos productFamily e productType.O desenvolvedor deseja fazer alterações no aplicativo para melhorar o desempenho das operações de consulta.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um índice secundário global (GSI) com productFamily como a chave de partição e productType como a chave de classificação."
      },
      {
        "id": "B",
        "text": "Crie um índice secundário local (LSI) com productFamily como a chave de partição e productType como a chave de classificação."
      },
      {
        "id": "C",
        "text": "Recrie a tabela. Adicione partNumber como chave de partição e vendor como chave de classificação. Durante a criação da tabela, adicione um índice secundário local (LSI) com productFamily como chave de partição e productType como chave de classificação."
      },
      {
        "id": "D",
        "text": "Atualize as consultas para usar operações de digitalização com productFamily como a chave de partição e productType como a chave de classificação."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-72",
    "type": "single",
    "stem": "Um desenvolvedor cria uma VPC chamada VPC-A que possui sub-redes públicas e privadas. O desenvolvedor também cria um banco de dados Amazon RDS dentro da sub-rede privada da VPC-A. Para realizar algumas consultas, o desenvolvedor cria uma função do AWS Lambda na VPC padrão. A função Lambda possui código para acessar o banco de dados RDS.",
    "ask": "Quando a função Lambda é executada, uma mensagem de erro indica que a função não consegue se conectar ao banco de dados RDS.Como o desenvolvedor pode resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Modifique o grupo de segurança RDS. Adicione uma regra para permitir tráfego de todas as portas do bloco CIDR da VPC."
      },
      {
        "id": "B",
        "text": "Reimplante a função Lambda na mesma sub-rede da instância do RDS. Certifique-se de que o grupo de segurança do RDS permita o tráfego da função Lambda."
      },
      {
        "id": "C",
        "text": "Crie um grupo de segurança para a função Lambda. Adicione uma nova regra no grupo de segurança RDS para permitir o tráfego do novo grupo de segurança Lambda."
      },
      {
        "id": "D",
        "text": "Crie uma função do IAM. Anexe uma política que permita acesso ao banco de dados RDS. Anexe a função à função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-73",
    "type": "single",
    "stem": "Uma empresa executa um aplicativo na AWS. A empresa implantou o aplicativo em instâncias do Amazon EC2. O aplicativo armazena dados no Amazon Aurora.O aplicativo registrou recentemente vários erros DECRYP_ERROR personalizados específicos do aplicativo nos logs do Amazon CloudWatch. A empresa só detectou o problema quando os testes automatizados, executados a cada 30 minutos, falharam.",
    "ask": "Um desenvolvedor deve implementar uma solução que monitore os erros personalizados e alerte a equipe de desenvolvimento em tempo real quando eles ocorrerem no ambiente de produção.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure o aplicativo para criar uma métrica personalizada e enviá-la ao CloudWatch. Crie um alarme do AWS CloudTrail. Configure o alarme do CloudTrail para usar um tópico do Amazon Simple Notification Service (Amazon SNS) para enviar notificações."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para ser executada a cada 5 minutos e verificar os logs do CloudWatch em busca da palavra-chave DECRYP_ERROR. Configure a função do Lambda para usar o Amazon Simple Notification Service (Amazon SNS) para enviar uma notificação."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudWatch Logs para criar um filtro de métrica com um padrão para DECRYP_ERROR. Crie um alarme do CloudWatch com base nessa métrica para um limite >=1. Configure o alarme para enviar notificações do Amazon Simple Notification Service (Amazon SNS)."
      },
      {
        "id": "D",
        "text": "Instale o agente unificado do CloudWatch na instância do EC2. Configure o aplicativo para gerar uma métrica para os erros da palavra-chave DECRYP_ERROR. Configure o agente para enviar notificações do Amazon Simple Notification Service (Amazon SNS)."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-74",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda que acessa recursos em uma VPC. A função Lambda consulta uma fila do Amazon Simple Queue Service (Amazon SQS) em busca de novas mensagens por meio de um endpoint da VPC. Em seguida, a função calcula uma média móvel dos valores numéricos contidos nas mensagens.",
    "ask": "Após os testes iniciais da função Lambda, o desenvolvedor descobriu que o valor da média móvel retornado pela função não era preciso.Como o desenvolvedor pode garantir que a função calcule uma média móvel precisa?",
    "options": [
      {
        "id": "A",
        "text": "Defina a simultaneidade reservada da função como 1. Calcule a média móvel na função. Armazene a média móvel calculada no Amazon ElastiCache."
      },
      {
        "id": "B",
        "text": "Modifique a função para armazenar os valores no Amazon ElastiCache. Quando a função for inicializada, use os valores anteriores do cache para calcular a média móvel."
      },
      {
        "id": "C",
        "text": "Defina a simultaneidade provisionada da função como 1. Calcule a média móvel na função. Armazene a média móvel calculada no Amazon ElastiCache."
      },
      {
        "id": "D",
        "text": "Modifique a função para armazenar os valores em suas camadas. Quando a função for inicializada, use os valores armazenados anteriormente para calcular a média móvel."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-75",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo testes unitários para uma nova aplicação que será implantada na AWS. O desenvolvedor deseja validar todas as solicitações de pull com testes unitários e mesclar o código com a ramificação principal somente quando todos os testes forem aprovados.O desenvolvedor armazena o código no AWS CodeCommit e configura o AWS CodeBuild para executar os testes unitários. O desenvolvedor cria uma função do AWS Lambda para iniciar a tarefa CodeBuild.",
    "ask": "O desenvolvedor precisa identificar os eventos do CodeCommit em um evento do Amazon EventBridge que pode invocar a função do Lambda quando uma solicitação de pull é criada ou atualizada.Qual evento do CodeCommit atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "code": "{\n    \"source\": [\"aws.codecommit\"],\n    \"detail\": {\n        \"event\": [\"pullRequestMergeStatusUpdated\"]\n    }\n}"
      },
      {
        "id": "B",
        "code": "{\n    \"source\": [\"aws.codecommit\"],\n    \"detail\": {\n        \"event\": [\"pullRequestApprovalRuleCreated\"]\n    }\n}"
      },
      {
        "id": "C",
        "code": "{\n    \"source\": [\"aws.codecommit\"],\n    \"detail\": {\n        \"event\": [\"pullRequestSourceBranchUpdated\", \"pullRequestCreated\"]\n    }\n}"
      },
      {
        "id": "D",
        "code": "{\n    \"source\": [\"aws.codecommit\"],\n    \"detail\": {\n        \"event\": [\"pullRequestUpdated\", \"pullRequestSourceBranchCreated\"]\n    }\n}"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-76",
    "type": "single",
    "stem": "Um desenvolvedor implantou uma aplicação em uma instância do Amazon EC2.",
    "ask": "A aplicação precisa saber o endereço IPv4 público da instância.Como a aplicação pode encontrar essa informação?",
    "options": [
      {
        "id": "A",
        "text": "Consulte os metadados da instância em http://169.254.169.254/latest/meta-data/."
      },
      {
        "id": "B",
        "text": "Consulte os dados do usuário da instância em http://169.254.169.254/latest/user-data/."
      },
      {
        "id": "C",
        "text": "Consulte as informações da Amazon Machine Image (AMI) em http://169.254.169.254/latest/meta-data/ami/."
      },
      {
        "id": "D",
        "text": "Verifique o arquivo hosts do sistema operacional."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-77",
    "type": "single",
    "stem": "Um aplicativo em desenvolvimento precisa armazenar centenas de arquivos de vídeo.",
    "ask": "Os dados devem ser criptografados no aplicativo antes do armazenamento, com uma chave exclusiva para cada arquivo de vídeo.Como o desenvolvedor deve codificar o aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "Use a API KMS Encrypt para criptografar os dados. Armazene a chave de dados e os dados criptografados."
      },
      {
        "id": "B",
        "text": "Use uma biblioteca de criptografia para gerar uma chave de criptografia para o aplicativo. Use a chave de criptografia para criptografar os dados. Armazene os dados criptografados."
      },
      {
        "id": "C",
        "text": "Use a API GenerateDataKey do KMS para obter uma chave de dados. Criptografe os dados com a chave de dados. Armazene a chave de dados criptografada e os dados."
      },
      {
        "id": "D",
        "text": "Carregue os dados para um bucket S3 usando criptografia do lado do servidor com uma chave AWS KMS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-78",
    "type": "single",
    "stem": "Uma empresa está planejando implantar uma aplicação na AWS por meio de um Elastic Load Balancer.",
    "ask": "A aplicação utiliza um listener HTTP/HTTPS e precisa acessar os endereços IP dos clientes.Qual solução de balanceamento de carga atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use um Application Load Balancer e os cabeçalhos X-Forwarded-For."
      },
      {
        "id": "B",
        "text": "Use um balanceador de carga de rede (NLB). Habilite o suporte ao protocolo proxy no NLB e no aplicativo de destino."
      },
      {
        "id": "C",
        "text": "Use um balanceador de carga de aplicativo. Registre os destinos pelo ID da instância."
      },
      {
        "id": "D",
        "text": "Use um balanceador de carga de rede e os cabeçalhos X-Forwarded-For."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-79",
    "type": "single",
    "stem": "Um desenvolvedor deseja depurar um aplicativo pesquisando e filtrando dados de log. Os logs do aplicativo são armazenados no Amazon CloudWatch Logs. O desenvolvedor cria um novo filtro de métrica para contar exceções nos logs do aplicativo.",
    "ask": "No entanto, nenhum resultado é retornado dos logs.Por que nenhum resultado filtrado está sendo retornado?",
    "options": [
      {
        "id": "A",
        "text": "Uma configuração do endpoint da VPC da interface do Amazon CloudWatch é necessária para filtrar os logs do CloudWatch na VPC."
      },
      {
        "id": "B",
        "text": "O CloudWatch Logs publica apenas dados métricos para eventos que ocorrem após a criação do filtro."
      },
      {
        "id": "C",
        "text": "O grupo de logs do CloudWatch Logs deve ser primeiro transmitido para o Amazon OpenSearch Service antes que a filtragem de métricas retorne os resultados."
      },
      {
        "id": "D",
        "text": "Os pontos de dados métricos para grupos de logs podem ser filtrados somente após serem exportados para um bucket do Amazon S3."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-80",
    "type": "single",
    "stem": "Uma empresa planeja usar o AWS CodeDeploy para implantar um aplicativo no Amazon Elastic Container Service (Amazon ECS). Durante a implantação de uma nova versão do aplicativo, a empresa deve inicialmente expor apenas 10% do tráfego ativo para a nova versão do aplicativo implantado.",
    "ask": "Em seguida, após 15 minutos, a empresa deve rotear todo o tráfego ativo restante para a nova versão do aplicativo implantado.Qual configuração predefinida do CodeDeploy atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "CodeDeployDefault.ECSCanary10Percent15Minutos"
      },
      {
        "id": "B",
        "text": "CodeDeployDefault.LambdaCanary10Percent5Minutos"
      },
      {
        "id": "C",
        "text": "CodeDeployDefault.LambdaCanary10Percentl15Minutos"
      },
      {
        "id": "D",
        "text": "CodeDeployDefault.ECSLinear10PercentEvery1Minutes"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-81",
    "type": "single",
    "stem": "Uma empresa hospeda uma aplicação de processamento em lote no AWS Elastic Beanstalk com instâncias que executam a versão mais recente do Amazon Linux. A aplicação classifica e processa grandes conjuntos de dados.Nas últimas semanas, o desempenho da aplicação caiu significativamente durante um período de pico de tráfego. Um desenvolvedor suspeita que os problemas da aplicação estejam relacionados ao uso de memória.",
    "ask": "O desenvolvedor verifica o console do Elastic Beanstalk e percebe que o uso de memória não está sendo rastreado.Como o desenvolvedor deve coletar mais informações sobre os problemas de desempenho da aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Configure o agente do Amazon CloudWatch para enviar logs para o Amazon CloudWatch Logs usando a porta 443."
      },
      {
        "id": "B",
        "text": "Configure o diretório .ebextensions do Elastic Beanstalk para rastrear o uso de memória das instâncias."
      },
      {
        "id": "C",
        "text": "Configure o agente do Amazon CloudWatch para rastrear o uso de memória das instâncias."
      },
      {
        "id": "D",
        "text": "Configure um painel do Amazon CloudWatch para rastrear o uso de memória das instâncias."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-82",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo de saúde altamente seguro usando componentes sem servidor.",
    "ask": "Este aplicativo requer a gravação de dados temporários no armazenamento /tmp em uma função do AWS Lambda.Como o desenvolvedor deve criptografar esses dados?",
    "options": [
      {
        "id": "A",
        "text": "Habilite a criptografia de volume do Amazon EBS com uma chave AWS KMS na configuração da função Lambda para que todo o armazenamento anexado à função Lambda seja criptografado."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda com uma função e uma política de chave para acessar uma chave do AWS KMS. Use a chave para gerar uma chave de dados usada para criptografar todos os dados antes da gravação no armazenamento /tmp."
      },
      {
        "id": "C",
        "text": "Use o OpenSSL para gerar uma chave de criptografia simétrica na inicialização do Lambda. Use essa chave para criptografar os dados antes de gravá-los em /tmp."
      },
      {
        "id": "D",
        "text": "Use um módulo de segurança de hardware (HSM) local para gerar chaves, onde a função Lambda solicita uma chave de dados do HSM e a usa para criptografar dados em todas as solicitações à função."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-83",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda para fornecer notificações por meio do Amazon Simple Notification Service (Amazon SNS) sempre que um arquivo maior que 50 MB for carregado no Amazon S3. O desenvolvedor implantou e testou a função do Lambda usando a CLI.",
    "ask": "No entanto, quando a notificação de evento é adicionada ao bucket do S3 e um arquivo de 3.000 MB é carregado, a função do Lambda não é iniciada.Qual das seguintes opções é um possível motivo para a impossibilidade de inicialização da função do Lambda?",
    "options": [
      {
        "id": "A",
        "text": "A notificação de eventos do S3 não é ativada para arquivos maiores que 1.000 MB."
      },
      {
        "id": "B",
        "text": "A política baseada em recursos para a função Lambda não tem as permissões necessárias para ser invocada pelo Amazon S3."
      },
      {
        "id": "C",
        "text": "As funções Lambda não podem ser invocadas diretamente de um evento S3."
      },
      {
        "id": "D",
        "text": "O bucket S3 precisa se tornar público."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-84",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação Ruby e precisa automatizar a implantação, o escalonamento e o gerenciamento de um ambiente sem precisar conhecer a infraestrutura subjacente.Qual serviço realizaria melhor essa tarefa?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS OpsWorks"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk M"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-85",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui uma aplicação web implantada na AWS. A aplicação utiliza uma API do Amazon API Gateway e uma função do AWS Lambda como backend.A aplicação demonstrou recentemente um comportamento inesperado. Um desenvolvedor examina o código da função Lambda, encontra um erro e modifica o código para resolver o problema. Antes de implantar a alteração na produção, o desenvolvedor precisa executar testes para validar se a aplicação funciona corretamente.A aplicação possui apenas um ambiente de produção disponível. O desenvolvedor deve criar um novo ambiente de desenvolvimento para testar as alterações no código.",
    "ask": "O desenvolvedor também deve impedir que outros desenvolvedores sobrescrevam essas alterações durante o ciclo de testes.Qual combinação de etapas atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo recurso no estágio atual. Crie um novo método com integração com proxy Lambda. Selecione a função Lambda. Adicione o alias do hotfix. Reimplante o estágio atual. Teste o backend."
      },
      {
        "id": "B",
        "text": "Atualize a função Lambda na solicitação de integração da API do API Gateway para usar o alias de hotfix. Implante a API do API Gateway em um novo estágio chamado hotfix. Teste o backend."
      },
      {
        "id": "C",
        "text": "Modifique a função Lambda corrigindo o código. Teste a função Lambda. Crie o hotfix do alias. Aponte o alias para a versão $LATEST."
      },
      {
        "id": "D",
        "text": "Modifique a função Lambda corrigindo o código. Teste a função Lambda. Quando a função Lambda estiver funcionando conforme o esperado, publique-a como uma nova versão. Crie o hotfix do alias. Aponte o alias para a nova versão."
      },
      {
        "id": "E",
        "text": "Crie uma nova API do API Gateway para o ambiente de desenvolvimento. Adicione um recurso e um método com integração com o Lambda. Escolha a função do Lambda e o alias do hotfix. Implante em um novo estágio. Teste o backend."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-86",
    "type": "single",
    "stem": "Um desenvolvedor está implementando um aplicativo sem servidor do AWS Cloud Development Kit (AWS CDK). O desenvolvedor provisionará diversas funções do AWS Lambda e APIs do Amazon API Gateway durante a criação da pilha do AWS CloudFormation.",
    "ask": "A estação de trabalho do desenvolvedor possui o AWS Serverless Application Model (AWS SAM) e o AWS CDK instalados localmente.Como o desenvolvedor pode testar uma função específica do Lambda localmente?",
    "options": [
      {
        "id": "A",
        "text": "Execute os comandos sam package e sam deploy. Crie um evento de teste do Lambda no Console de Gerenciamento da AWS. Teste a função do Lambda."
      },
      {
        "id": "B",
        "text": "Execute os comandos cdk synth e cdk deploy. Crie um evento de teste do Lambda no Console de Gerenciamento da AWS. Teste a função do Lambda."
      },
      {
        "id": "C",
        "text": "Execute os comandos cdk synth e sam local invoke com o identificador de construção de função e o caminho para o modelo CloudFormation sintetizado."
      },
      {
        "id": "D",
        "text": "Execute os comandos cdk synth e sam local start-lambda com o identificador de construção de função e o caminho para o modelo CloudFormation sintetizado."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-87",
    "type": "single",
    "stem": "O novo aplicativo móvel de uma empresa utiliza o Amazon API Gateway.",
    "ask": "À medida que a equipe de desenvolvimento conclui uma nova versão de suas APIs, um desenvolvedor precisa implementar a alteração na API com segurança e transparência.Qual é a solução MAIS SIMPLES para o desenvolvedor implementar a nova versão da API para um número limitado de usuários por meio do API Gateway?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma nova API no API Gateway. Direcione parte do tráfego para a nova API usando uma política de roteamento ponderado do Amazon Route 53."
      },
      {
        "id": "B",
        "text": "Valide a nova versão da API e promova-a para produção durante a janela de menor utilização esperada."
      },
      {
        "id": "C",
        "text": "Implemente um alarme do Amazon CloudWatch para acionar uma reversão se a taxa de código de status HTTP 500 observada exceder um limite predeterminado."
      },
      {
        "id": "D",
        "text": "Use a opção de implantação da versão canary no API Gateway. Direcione uma porcentagem do tráfego da API usando a configuração canarySettings."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-88",
    "type": "single",
    "stem": "Uma empresa armazena em cache informações de sessão de um aplicativo web em uma tabela do Amazon DynamoDB.",
    "ask": "A empresa deseja uma maneira automatizada de excluir itens antigos da tabela.Qual é a maneira mais simples de fazer isso?",
    "options": [
      {
        "id": "A",
        "text": "Escreva um script que exclua registros antigos; agende o script como uma tarefa cron em uma instância do Amazon EC2."
      },
      {
        "id": "B",
        "text": "Adicione um atributo com o tempo de expiração; habilite o recurso Tempo de Vida com base nesse atributo."
      },
      {
        "id": "C",
        "text": "A cada dia, crie uma nova tabela para armazenar os dados da sessão; exclua a tabela do dia anterior."
      },
      {
        "id": "D",
        "text": "Adicione um atributo com o tempo de expiração; nomeie o atributo ItemExpiration."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-89",
    "type": "single",
    "stem": "Uma empresa está usando um endpoint da API REST do Amazon API Gateway como um webhook para publicar eventos de um sistema de gerenciamento de controle de origem (SCM) local no Amazon EventBridge. A empresa configurou uma regra do EventBridge para monitorar os eventos e controlar a implantação de aplicativos em uma conta central da AWS.",
    "ask": "A empresa precisa receber os mesmos eventos em várias contas receptoras da AWS.Como um desenvolvedor pode atender a esses requisitos sem alterar a configuração do sistema SCM?",
    "options": [
      {
        "id": "A",
        "text": "Implante a API REST do API Gateway em todas as contas AWS necessárias. Use o mesmo nome de domínio personalizado para todos os endpoints do gateway, para que um único webhook do SCM possa ser usado para todos os eventos de todas as contas."
      },
      {
        "id": "B",
        "text": "Implante a API REST do API Gateway em todas as contas AWS receptoras. Crie tantos webhooks SCM quanto o número de contas AWS."
      },
      {
        "id": "C",
        "text": "Conceda permissão à conta central da AWS para que o EventBridge acesse as contas da AWS receptoras. Adicione um barramento de eventos do EventBridge nas contas da AWS receptoras como alvos para a regra existente do EventBridge."
      },
      {
        "id": "D",
        "text": "Converta o tipo de API Gateway de REST API para HTTP API."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-90",
    "type": "single",
    "stem": "Uma empresa moveu alguns de seus arquivos seguros para um bucket privado do Amazon S3 sem acesso público.",
    "ask": "A empresa deseja desenvolver um aplicativo sem servidor que permita aos seus funcionários efetuar login e compartilhar os arquivos com segurança com outros usuários.Qual recurso da AWS a empresa deve usar para compartilhar e acessar os arquivos com segurança?",
    "options": [
      {
        "id": "A",
        "text": "Pool de usuários do Amazon Cognito"
      },
      {
        "id": "B",
        "text": "URLs pré-assinadas S3"
      },
      {
        "id": "C",
        "text": "Política de bucket S3"
      },
      {
        "id": "D",
        "text": "Pool de identidades do Amazon Cognito"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-91",
    "type": "single",
    "stem": "Uma empresa precisa desenvolver uma prova de conceito para um aplicativo de serviço web. O aplicativo exibirá a previsão do tempo para um dos escritórios da empresa. O aplicativo fornecerá um endpoint REST que os clientes podem acessar. Sempre que possível, o aplicativo deve usar recursos de cache fornecidos pela AWS para limitar o número de solicitações ao serviço de backend.",
    "ask": "O backend do aplicativo receberá uma pequena quantidade de tráfego apenas durante os testes.Qual abordagem o desenvolvedor deve adotar para fornecer o endpoint REST da forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma imagem de contêiner. Implante a imagem de contêiner usando o Amazon Elastic Kubernetes Service (Amazon EKS). Exponha a funcionalidade usando o Amazon API Gateway."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda usando o AWS Serverless Application Model (AWS SAM). Exponha a funcionalidade do Lambda usando o Amazon API Gateway."
      },
      {
        "id": "C",
        "text": "Crie uma imagem de contêiner. Implante a imagem de contêiner usando o Amazon Elastic Container Service (Amazon ECS). Exponha a funcionalidade usando o Amazon API Gateway."
      },
      {
        "id": "D",
        "text": "Crie uma aplicação de microsserviços. Implante a aplicação no AWS Elastic Beanstalk. Exponha a funcionalidade do AWS Lambda usando um Application Load Balancer."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-92",
    "type": "single",
    "stem": "Um aplicativo web de e-commerce que compartilha o estado da sessão localmente está sendo migrado para a AWS.",
    "ask": "O aplicativo deve ser tolerante a falhas, nativamente altamente escalável e qualquer interrupção de serviço não deve afetar a experiência do usuário.Qual é a melhor opção para armazenar o estado da sessão?",
    "options": [
      {
        "id": "A",
        "text": "Armazene o estado da sessão no Amazon ElastiCache."
      },
      {
        "id": "B",
        "text": "Armazene o estado da sessão no Amazon CloudFront."
      },
      {
        "id": "C",
        "text": "Armazene o estado da sessão no Amazon S3."
      },
      {
        "id": "D",
        "text": "Habilite a aderência da sessão usando balanceadores de carga elásticos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-93",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que utiliza o Amazon DynamoDB.",
    "ask": "Ele deseja recuperar vários itens específicos do banco de dados com uma única chamada de API.Qual chamada de API do DynamoDB atenderá a esses requisitos com o MÍNIMO impacto no banco de dados?",
    "options": [
      {
        "id": "A",
        "text": "BatchGetItem"
      },
      {
        "id": "B",
        "text": "ObterItem"
      },
      {
        "id": "C",
        "text": "Digitalizar"
      },
      {
        "id": "D",
        "text": "Consulta"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-94",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação que roda em instâncias do Amazon EC2.",
    "ask": "O desenvolvedor está adicionando a funcionalidade de gravação de objetos em um bucket do Amazon S3 para a aplicação.Qual política o desenvolvedor deve modificar para permitir que as instâncias gravem esses objetos?",
    "options": [
      {
        "id": "A",
        "text": "A política do IAM anexada à função de perfil da instância do EC2"
      },
      {
        "id": "B",
        "text": "A política de sessão que é aplicada à sessão de função da instância EC2"
      },
      {
        "id": "C",
        "text": "A política de chave do AWS Key Management Service (AWS KMS) anexada à função de perfil da instância do EC2"
      },
      {
        "id": "D",
        "text": "A política de endpoint da Amazon VPC"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-95",
    "type": "single",
    "stem": "Um desenvolvedor está utilizando uma conexão VPN da AWS baseada no Border Gateway Protocol (BGP) para se conectar localmente a instâncias do Amazon EC2 na conta do desenvolvedor.",
    "ask": "O desenvolvedor consegue acessar uma instância do EC2 na sub-rede A, mas não consegue acessar uma instância do EC2 na sub-rede B na mesma VPC.Quais logs o desenvolvedor pode usar para verificar se o tráfego está chegando à sub-rede B?",
    "options": [
      {
        "id": "A",
        "text": "Registros de VPN"
      },
      {
        "id": "B",
        "text": "Registros BGP"
      },
      {
        "id": "C",
        "text": "Registros de fluxo de VPC"
      },
      {
        "id": "D",
        "text": "Registros do AWS CloudTrail"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-96",
    "type": "single",
    "stem": "Um desenvolvedor está criando um serviço que usa um bucket do Amazon S3 para uploads de imagens. O serviço usará uma função do AWS Lambda para criar uma miniatura de cada imagem. Cada vez que uma imagem é carregada, o serviço precisa enviar uma notificação por e-mail e criar a miniatura.",
    "ask": "O desenvolvedor precisa configurar o processamento de imagens e as notificações por e-mail.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Configure notificações de eventos do S3 com um destino do tópico do SNS. Assine a função Lambda ao tópico do SNS. Crie uma assinatura de notificação por e-mail para o tópico do SNS."
      },
      {
        "id": "B",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Configure notificações de eventos do S3 com um destino do tópico do SNS. Inscreva a função Lambda no tópico do SNS. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Inscreva a fila do SQS no tópico do SNS. Crie uma assinatura de notificação por e-mail na fila do SQS."
      },
      {
        "id": "C",
        "text": "Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Configure notificações de eventos do S3 com destino na fila do SQS. Inscreva a função Lambda na fila do SQS. Crie uma assinatura de notificação por e-mail na fila do SQS."
      },
      {
        "id": "D",
        "text": "Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Envie notificações de eventos do S3 para o Amazon EventBridge. Crie uma regra do EventBridge que execute a função Lambda quando as imagens forem carregadas no bucket do S3. Crie uma regra do EventBridge que envie notificações para a fila do SQS. Crie uma assinatura de notificação por e-mail para a fila do SQS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-97",
    "type": "single",
    "stem": "Um desenvolvedor projetou uma aplicação para armazenar dados recebidos como arquivos JSON em objetos do Amazon S3. Uma lógica de negócios personalizada em uma função do AWS Lambda transforma os objetos, e a função do Lambda carrega os dados em uma tabela do Amazon DynamoDB. Recentemente, a carga de trabalho sofreu mudanças repentinas e significativas no tráfego.",
    "ask": "O fluxo de dados para a tabela do DynamoDB está ficando mais limitado.O desenvolvedor precisa implementar uma solução para eliminar a limitação e carregar os dados na tabela do DynamoDB de forma mais consistente.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Refatore a função Lambda em duas funções. Configure uma função para transformar os dados e outra para carregar os dados na tabela do DynamoDB. Crie uma fila do Amazon Simple Queue Service (Amazon SQS) entre as funções para armazenar os itens como mensagens e invocar a segunda função."
      },
      {
        "id": "B",
        "text": "Ative o dimensionamento automático para a tabela do DynamoDB. Use o Amazon CloudWatch para monitorar as métricas de capacidade de leitura e gravação da tabela e para rastrear a capacidade consumida."
      },
      {
        "id": "C",
        "text": "Crie um alias para a função Lambda. Configure a simultaneidade provisionada para uso pelo aplicativo."
      },
      {
        "id": "D",
        "text": "Refatore a função Lambda em duas funções. Configure uma função para armazenar os dados na tabela do DynamoDB. Configure a segunda função para processar os dados e atualizar os itens após o armazenamento dos dados no DynamoDB. Crie um fluxo do DynamoDB para invocar a segunda função após o armazenamento dos dados."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-98",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda no modo VPC. Um evento do Amazon S3 invocará a função do Lambda quando um objeto for carregado em um bucket do S3. A função do Lambda processará o objeto e produzirá alguns resultados analíticos que serão registrados em um arquivo. Cada objeto processado também gerará uma entrada de log que será registrada em um arquivo.Outras funções do Lambda, serviços da AWS e recursos locais devem ter acesso aos arquivos de resultados e ao arquivo de log. Cada entrada de log também deve ser anexada ao mesmo arquivo de log compartilhado.",
    "ask": "O desenvolvedor precisa de uma solução que possa compartilhar arquivos e anexar resultados a um arquivo existente.Qual solução o desenvolvedor deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS). Monte o sistema de arquivos EFS no Lambda. Armazene os arquivos de resultado e o arquivo de log no ponto de montagem. Anexe as entradas de log ao arquivo de log."
      },
      {
        "id": "B",
        "text": "Crie um volume habilitado para Multi-Attach do Amazon Elastic Block Store (Amazon EBS). Anexe o volume EBS a todas as funções do Lambda. Atualize o código da função do Lambda para baixar o arquivo de log, anexar as entradas de log e carregar o arquivo de log modificado para o Amazon EBS."
      },
      {
        "id": "C",
        "text": "Crie uma referência ao diretório local /tmp. Armazene os arquivos de resultado e o arquivo de log usando a referência de diretório. Anexe a entrada de log ao arquivo de log."
      },
      {
        "id": "D",
        "text": "Crie uma referência ao diretório de armazenamento /opt. Armazene os arquivos de resultado e o arquivo de log usando a referência de diretório. Anexe a entrada de log ao arquivo de log."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-99",
    "type": "single",
    "stem": "Uma empresa possui uma função Lambda no AWS que processa solicitações recebidas de uma API do Amazon API Gateway. A API chama a função Lambda usando um alias do Lambda. Um desenvolvedor atualizou o código da função Lambda para lidar com mais detalhes relacionados às solicitações recebidas.",
    "ask": "O desenvolvedor deseja implantar a nova função Lambda para mais testes por outros desenvolvedores, sem impacto para os clientes que usam a API.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma nova versão da função Lambda. Crie um novo estágio no API Gateway com integração à nova versão do Lambda. Use o novo estágio do API Gateway para testar a função Lambda."
      },
      {
        "id": "B",
        "text": "Atualize o alias do Lambda existente usado pelo API Gateway para um alias ponderado. Adicione a nova versão do Lambda como uma função Lambda adicional com peso de 10%. Use o estágio atual do API Gateway para testes."
      },
      {
        "id": "C",
        "text": "Crie uma nova versão da função Lambda. Crie e implante uma segunda função Lambda para filtrar solicitações recebidas do API Gateway. Se a função Lambda de filtragem detectar uma solicitação de teste, ela invocará a nova versão do código Lambda. Para outras solicitações, a função Lambda de filtragem invocará a versão antiga do Lambda. Atualize a API do API Gateway para usar a função Lambda de filtragem."
      },
      {
        "id": "D",
        "text": "Crie uma nova versão da função Lambda. Crie uma nova API do API Gateway para fins de teste. Atualize a integração da nova API com a nova versão do Lambda. Use a nova API para testes."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-100",
    "type": "single",
    "stem": "Uma empresa utiliza funções do AWS Lambda e um gatilho do Amazon S3 para processar imagens em um bucket do S3. Uma equipe de desenvolvimento configurou vários ambientes em uma única conta da AWS.Após uma implantação recente em produção, a equipe de desenvolvimento observou que os buckets do S3 de desenvolvimento invocavam as funções do Lambda do ambiente de produção. Essas invocações causavam a execução indesejada de arquivos do S3 de desenvolvimento usando funções do Lambda de produção. A equipe de desenvolvimento deve impedir essas invocações.",
    "ask": "A equipe deve seguir as práticas recomendadas de segurança.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atualize a função de execução do Lambda para a função de produção do Lambda para adicionar uma política que permita que a função de execução leia somente do bucket S3 do ambiente de produção."
      },
      {
        "id": "B",
        "text": "Mova os ambientes de desenvolvimento e produção para contas AWS separadas. Adicione uma política de recursos a cada função do Lambda para permitir que apenas buckets do S3 que estejam na mesma conta invoquem a função."
      },
      {
        "id": "C",
        "text": "Adicione uma política de recursos à função Lambda de produção para permitir que somente o bucket S3 do ambiente de produção invoque a função."
      },
      {
        "id": "D",
        "text": "Mova os ambientes de desenvolvimento e produção para contas AWS separadas. Atualize a função de execução do Lambda para cada função para adicionar uma política que permita que a função de execução leia do bucket do S3 que está na mesma conta."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-101",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo.",
    "ask": "Novos usuários do aplicativo devem poder criar uma conta e se registrar usando suas próprias contas de mídia social.Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Função IAM"
      },
      {
        "id": "B",
        "text": "Pools de identidade do Amazon Cognito"
      },
      {
        "id": "C",
        "text": "Pools de usuários do Amazon Cognito"
      },
      {
        "id": "D",
        "text": "Serviço de diretório da AWS"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-102",
    "type": "single",
    "stem": "Um aplicativo de mídia social usa o AWS SDK para JavaScript no front-end para obter credenciais de usuário do AWS Security Token Service (AWS STS). O aplicativo armazena seus ativos em um bucket do Amazon S3. O aplicativo disponibiliza seu conteúdo usando uma distribuição do Amazon CloudFront com a origem definida para o bucket do S3.As credenciais para a função que o aplicativo assume para fazer as chamadas do SDK são armazenadas em texto simples em um arquivo JSON dentro do código do aplicativo.",
    "ask": "O desenvolvedor precisa implementar uma solução que permita que o aplicativo obtenha credenciais de usuário sem ter nenhuma credencial codificada no código do aplicativo.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma função Lambda@Edge à distribuição. Invoque a função mediante solicitação do visualizador. Adicione permissões à função de execução para permitir que ela acesse o AWS STS. Mova todas as chamadas do SDK do frontend para a função."
      },
      {
        "id": "B",
        "text": "Adicione uma função do CloudFront à distribuição. Invoque a função mediante solicitação do visualizador. Adicione permissões à função de execução para permitir que ela acesse o AWS STS. Mova todas as chamadas do SDK do frontend para a função."
      },
      {
        "id": "C",
        "text": "Adicione uma função Lambda@Edge à distribuição. Invoque a função mediante solicitação do visualizador. Mova as credenciais do arquivo JSON para a função. Mova todas as chamadas do SDK do frontend para a função."
      },
      {
        "id": "D",
        "text": "Adicione uma função do CloudFront à distribuição. Invoque a função mediante solicitação do visualizador. Mova as credenciais do arquivo JSON para a função. Mova todas as chamadas do SDK do frontend para a função."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-103",
    "type": "single",
    "stem": "Um site de comércio eletrônico utiliza uma função do AWS Lambda e um banco de dados Amazon RDS para MySQL para um serviço de atendimento de pedidos. O serviço precisa retornar a confirmação do pedido imediatamente.Durante uma campanha de marketing que causou um aumento no número de pedidos, a equipe de operações do site notou erros de \"conexões excessivas\" do Amazon RDS. No entanto, as métricas do cluster do banco de dados RDS estão saudáveis.",
    "ask": "A capacidade de CPU e memória ainda está disponível.O que um desenvolvedor deve fazer para resolver os erros?",
    "options": [
      {
        "id": "A",
        "text": "Inicialize a conexão com o banco de dados fora da função do manipulador. Aumente o valor max_user_connections no grupo de parâmetros do cluster de banco de dados. Reinicie o cluster de banco de dados."
      },
      {
        "id": "B",
        "text": "Inicialize a conexão com o banco de dados fora da função do manipulador. Use o RDS Proxy em vez de conectar-se diretamente ao cluster do banco de dados."
      },
      {
        "id": "C",
        "text": "Use as filas FIFO do Amazon Simple Queue Service (Amazon SQS) para enfileirar os pedidos. Ingira os pedidos no banco de dados. Defina a simultaneidade da função Lambda para um valor igual ao número de conexões disponíveis ao banco de dados."
      },
      {
        "id": "D",
        "text": "Use as filas FIFO do Amazon Simple Queue Service (Amazon SQS) para enfileirar os pedidos. Ingira os pedidos no banco de dados. Defina a simultaneidade da função Lambda para um valor menor que o número de conexões disponíveis ao banco de dados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-104",
    "type": "single",
    "stem": "Uma empresa armazena seus dados em tabelas de dados em uma série de buckets do Amazon S3. A empresa recebeu um alerta de que informações de cartão de crédito de um cliente podem ter sido expostas em uma tabela de dados em um dos aplicativos públicos da empresa.",
    "ask": "Um desenvolvedor precisa identificar todas as exposições potenciais no ambiente do aplicativo.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Athena para executar um trabalho nos buckets do S3 que contêm os dados afetados. Filtre as descobertas usando o tipo de descoberta SensitiveData:S3Object/Personal."
      },
      {
        "id": "B",
        "text": "Use o Amazon Macie para executar uma tarefa nos buckets do S3 que contêm os dados afetados. Filtre as descobertas usando o tipo de descoberta SensitiveData:S3Object/Financial."
      },
      {
        "id": "C",
        "text": "Use o Amazon Macie para executar uma tarefa nos buckets do S3 que contêm os dados afetados. Filtre as descobertas usando o tipo de descoberta SensitiveData:S3Object/Personal."
      },
      {
        "id": "D",
        "text": "Use o Amazon Athena para executar um trabalho nos buckets do S3 que contêm os dados afetados. Filtre as descobertas usando o tipo de descoberta SensitiveData:S3Object/Financial."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-105",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa de software está lançando um aplicativo multimídia. O aplicativo permitirá que usuários convidados acessem amostras de conteúdo antes de decidirem se desejam criar uma conta para obter acesso total. A empresa deseja implementar um processo de autenticação que identifique os usuários que já criaram uma conta.",
    "ask": "A empresa também precisa monitorar o número de usuários convidados que eventualmente criam uma conta.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um pool de usuários do Amazon Cognito. Configure o pool de usuários para permitir usuários não autenticados. Troque tokens de usuário por credenciais temporárias que permitam que usuários autenticados assumam uma função."
      },
      {
        "id": "B",
        "text": "Crie um pool de identidades do Amazon Cognito. Configure o pool de identidades para permitir usuários não autenticados. Troque identidades exclusivas por credenciais temporárias que permitam que todos os usuários assumam uma função."
      },
      {
        "id": "C",
        "text": "Crie uma distribuição do Amazon CloudFront. Configure a distribuição para permitir usuários não autenticados. Troque tokens de usuário por credenciais temporárias que permitam que todos os usuários assumam uma função."
      },
      {
        "id": "D",
        "text": "Crie uma função para usuários autenticados que permita acesso a todo o conteúdo. Crie uma função para usuários não autenticados que permita acesso apenas ao conteúdo de amostra."
      },
      {
        "id": "E",
        "text": "Permita que todos os usuários acessem o conteúdo de exemplo por padrão. Crie uma função para usuários autenticados que permita acesso ao restante do conteúdo."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-106",
    "type": "single",
    "stem": "Uma empresa está atualizando um aplicativo para migrar o backend de instâncias do Amazon EC2 para um modelo sem servidor. O aplicativo utiliza uma instância de banco de dados do Amazon RDS para MySQL e é executado em uma única VPC na AWS.",
    "ask": "O aplicativo e a instância de banco de dados são implantados em uma sub-rede privada na VPC.A empresa precisa conectar funções do AWS Lambda à instância de banco de dados.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie funções Lambda dentro da VPC com a política AWSLambdaBasicExecutionRole anexada à função de execução do Lambda. Modifique o grupo de segurança do RDS para permitir acesso de entrada do grupo de segurança do Lambda."
      },
      {
        "id": "B",
        "text": "Crie funções Lambda dentro da VPC com a política AWSLambdaVPCAccessExecutionRole anexada à função de execução do Lambda. Modifique o grupo de segurança do RDS para permitir acesso de entrada do grupo de segurança do Lambda."
      },
      {
        "id": "C",
        "text": "Crie funções do Lambda com a política AWSLambdaBasicExecutionRole anexada à função de execução do Lambda. Crie um endpoint de VPC de interface para as funções do Lambda. Configure a política de endpoint de interface para permitir a ação lambda:InvokeFunclion para o Nome de Recurso da Amazon (ARN) de cada função do Lambda."
      },
      {
        "id": "D",
        "text": "Crie funções Lambda com a política AWSLambdaVPCAccessExecutionRole anexada à função de execução do Lambda. Crie um endpoint de VPC de interface para as funções Lambda. Configure a política de endpoint de interface para permitir a ação lambda:InvokeFunction para o Nome de Recurso da Amazon (ARN) de cada função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-107",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo web executado em instâncias do Amazon EC2 com uma Imagem de Máquina da Amazon (AMI) personalizada. A empresa utiliza o AWS CloudFormation para provisionar o aplicativo. O aplicativo é executado na região us-east-1, e a empresa precisa implantá-lo na região us-west-1.Uma tentativa de criar a pilha do AWS CloudFormation em us-west-1 falha. Uma mensagem de erro informa que o ID da AMI não existe.",
    "ask": "Um desenvolvedor deve resolver esse erro com uma solução que utilize a menor sobrecarga operacional possível.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Altere os modelos do AWS CloudFormation para us-east-1 e us-west-1 para usar uma AMI da AWS. Reinicie a pilha para ambas as regiões."
      },
      {
        "id": "B",
        "text": "Copie a AMI personalizada de us-east-1 para us-west-1. Atualize o modelo do AWS CloudFormation para us-west-1 para se referir ao ID da AMI copiada. Reinicie a pilha."
      },
      {
        "id": "C",
        "text": "Crie a AMI personalizada em us-west-1. Crie um novo modelo do AWS CloudFormation para iniciar a pilha em us-west-1 com o novo ID da AMI."
      },
      {
        "id": "D",
        "text": "Implante manualmente o aplicativo fora do AWS CloudFormation em us-west-1."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-108",
    "type": "single",
    "stem": "Um desenvolvedor está atualizando várias funções do AWS Lambda e percebe que todas elas compartilham as mesmas bibliotecas personalizadas.",
    "ask": "O desenvolvedor deseja centralizar todas as bibliotecas, atualizá-las de forma conveniente e mantê-las versionadas.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie um repositório AWS CodeArtifact que contenha todas as bibliotecas personalizadas."
      },
      {
        "id": "B",
        "text": "Crie uma imagem de contêiner personalizada para as funções do Lambda para salvar todas as bibliotecas personalizadas."
      },
      {
        "id": "C",
        "text": "Crie uma camada Lambda que contenha todas as bibliotecas personalizadas."
      },
      {
        "id": "D",
        "text": "Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS) para armazenar todas as bibliotecas personalizadas."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-109",
    "type": "single",
    "stem": "Um desenvolvedor deseja usar o AWS Elastic Beanstalk para testar uma nova versão de um aplicativo em um ambiente de teste.Qual método de implantação oferece a implantação MAIS RÁPIDA?",
    "options": [
      {
        "id": "A",
        "text": "Imutável"
      },
      {
        "id": "B",
        "text": "Rolando"
      },
      {
        "id": "C",
        "text": "Laminação com lote adicional"
      },
      {
        "id": "D",
        "text": "De repente"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-110",
    "type": "single",
    "stem": "Uma empresa fornece acesso de leitura a objetos em um bucket do Amazon S3 para diferentes clientes. A empresa usa permissões do IAM para restringir o acesso ao bucket do S3.",
    "ask": "Os clientes podem acessar apenas seus próprios arquivos.Devido a uma exigência regulatória, a empresa precisa aplicar criptografia em trânsito para interações com o Amazon S3.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma política de bucket ao bucket S3 para negar ações do S3 quando a condição aws:SecureTransport for igual a false."
      },
      {
        "id": "B",
        "text": "Adicione uma política de bucket ao bucket S3 para negar ações S3 quando a condição s3:x-amz-acl for igual a public-read."
      },
      {
        "id": "C",
        "text": "Adicione uma política do IAM aos usuários do IAM para impor o uso do AWS SDK."
      },
      {
        "id": "D",
        "text": "Adicione uma política do IAM aos usuários do IAM que permita ações do S3 quando a condição s3:x-amz-acl for igual a bucket-owner-read."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-111",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo web de armazenamento de imagens executado na AWS. A empresa hospeda o aplicativo em instâncias do Amazon EC2 em um grupo de Auto Scaling. O grupo de Auto Scaling atua como grupo-alvo para um Application Load Balancer (ALB) e usa um bucket do Amazon S3 para armazenar as imagens para venda.A empresa deseja desenvolver um recurso para testar solicitações do sistema.",
    "ask": "O recurso direcionará as solicitações para um grupo-alvo separado que hospeda uma nova versão beta do aplicativo.Qual solução atenderá a esse requisito com o MENOR esforço?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo grupo de Dimensionamento Automático e um grupo de destino para a versão beta do aplicativo. Atualize a regra de roteamento ALB com uma condição que procure um cookie chamado \"version\" com o valor \"beta\". Atualize o código do sistema de teste para usar esse cookie para testar a versão beta do aplicativo."
      },
      {
        "id": "B",
        "text": "Crie um novo ALB, um grupo de Auto Scaling e um grupo de destino para a versão beta do aplicativo. Configure um registro alternativo do Amazon Route 53 para o novo endpoint do ALB. Use o endpoint alternativo do Route 53 nas solicitações do sistema de teste para testar a versão beta do aplicativo."
      },
      {
        "id": "C",
        "text": "Crie um novo ALB, um grupo de Auto Scaling e um grupo de destino para a versão beta do aplicativo. Use o Amazon CloudFront com o Lambda@Edge para determinar qual solicitação específica será direcionada ao novo ALB. Use o endpoint do CloudFront para enviar as solicitações do sistema de teste para testar a versão beta do aplicativo."
      },
      {
        "id": "D",
        "text": "Crie um novo grupo de Auto Scaling e um grupo de destino para a versão beta do aplicativo. Atualize a regra de roteamento do ALB com uma condição que procure um cookie chamado \"version\" com o valor \"beta\". Use o Amazon CloudFront com o Lambda@Edge para atualizar as solicitações do sistema de teste e adicionar o cookie necessário quando as solicitações forem para o ALB."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-112",
    "type": "multi",
    "pick": 2,
    "stem": "Uma equipe está desenvolvendo uma aplicação implantada em instâncias do Amazon EC2. Durante os testes, a equipe recebe um erro.",
    "ask": "As instâncias do EC2 não conseguem acessar um bucket do Amazon S3.Quais etapas a equipe deve seguir para solucionar esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Verifique se a política atribuída à função do IAM anexada às instâncias do EC2 concede acesso ao Amazon S3."
      },
      {
        "id": "B",
        "text": "Verifique a política do bucket S3 para validar as permissões de acesso para o bucket S3."
      },
      {
        "id": "C",
        "text": "Verifique se a política atribuída ao usuário do IAM anexado às instâncias do EC2 concede acesso ao Amazon S3."
      },
      {
        "id": "D",
        "text": "Verifique a política do ciclo de vida do S3 para validar as permissões atribuídas ao bucket do S3."
      },
      {
        "id": "E",
        "text": "Verifique os grupos de segurança atribuídos às instâncias do EC2. Certifique-se de que nenhuma regra esteja bloqueando o acesso ao Amazon S3."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-113",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um site de comércio eletrônico. Ele deseja revisar os logs do servidor sem precisar efetuar login em cada um dos servidores de aplicação individualmente.",
    "ask": "O site é executado em várias instâncias do Amazon EC2, é escrito em Python e precisa ter alta disponibilidade.Como o desenvolvedor pode atualizar a aplicação para atender a esses requisitos com o MÍNIMO de alterações?",
    "options": [
      {
        "id": "A",
        "text": "Reescreva o aplicativo para que seja nativo da nuvem e seja executado no AWS Lambda, onde os logs podem ser revisados no Amazon CloudWatch."
      },
      {
        "id": "B",
        "text": "Configure o registro centralizado usando o Amazon OpenSearch Service, o Logstash e o OpenSearch Dashboards."
      },
      {
        "id": "C",
        "text": "Reduza a escala do aplicativo para uma instância EC2 maior, onde apenas uma instância esteja gravando logs."
      },
      {
        "id": "D",
        "text": "Instale o agente unificado do Amazon CloudWatch nas instâncias do EC2. Configure o agente para enviar os logs do aplicativo para o CloudWatch."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-114",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está criando uma aplicação que processa arquivos .csv do Amazon S3. Um desenvolvedor criou um bucket do S3.",
    "ask": "O desenvolvedor também criou uma função do AWS Lambda para processar os arquivos .csv do bucket do S3.Qual combinação de etapas invocará a função do Lambda quando um arquivo .csv for carregado no Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma regra do Amazon EventBridge. Configure a regra com um padrão que corresponda ao evento de criação do objeto S3."
      },
      {
        "id": "B",
        "text": "Agende uma regra do Amazon EventBridge para executar uma nova função do Lambda para escanear o bucket do S3."
      },
      {
        "id": "C",
        "text": "Adicione um gatilho à função Lambda existente. Defina o tipo de gatilho como EventBridge. Selecione a regra Amazon EventBridge."
      },
      {
        "id": "D",
        "text": "Crie uma nova função Lambda para escanear o bucket S3 em busca de objetos S3 adicionados recentemente."
      },
      {
        "id": "E",
        "text": "Adicione regras do ciclo de vida do S3 para invocar a função Lambda existente."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-115",
    "type": "single",
    "stem": "Um desenvolvedor precisa criar um modelo do AWS CloudFormation que preencha automaticamente a variável de região da AWS que implanta o modelo do CloudFormation.Qual é a maneira operacional MAIS eficiente de determinar a região na qual o modelo está sendo implantado?",
    "options": [
      {
        "id": "A",
        "text": "Use o pseudoparâmetro AWS::Region."
      },
      {
        "id": "B",
        "text": "Exigir a Região como um parâmetro do CloudFormation."
      },
      {
        "id": "C",
        "text": "Encontre a região do pseudoparâmetro AWS::StackId usando a função intrínseca Fn::Split."
      },
      {
        "id": "D",
        "text": "Importe dinamicamente a região referenciando o parâmetro relevante no AWS Systems Manager Parameter Store."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-116",
    "type": "single",
    "stem": "Uma empresa possui centenas de funções do AWS Lambda que a equipe de QA precisa testar usando as URLs das funções do Lambda.",
    "ask": "Um desenvolvedor precisa configurar a autenticação das funções do Lambda para permitir o acesso, permitindo que o grupo de QA IAM possa invocar as funções do Lambda usando as URLs públicas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um script CLI que execute um loop nas funções do Lambda para adicionar uma URL de função do Lambda com o tipo de autenticação AWS_IAM. Execute outro script para criar uma política baseada em identidade do IAM que permita a ação lambda:InvokeFunctionUrl a todos os Nomes de Recursos da Amazon (ARNs) das funções do Lambda. Anexe a política ao grupo QA do IAM."
      },
      {
        "id": "B",
        "text": "Crie um script CLI que execute um loop nas funções do Lambda para adicionar uma URL de função do Lambda com o tipo de autenticação NONE. Execute outro script para criar uma política baseada em recursos do IAM que permita a ação lambda:InvokeFunctionUrl a todos os Nomes de Recursos da Amazon (ARNs) das funções do Lambda. Anexe a política ao grupo QA do IAM."
      },
      {
        "id": "C",
        "text": "Crie um script CLI que execute um loop nas funções do Lambda para adicionar uma URL de função do Lambda com o tipo de autenticação AWS_IAM. Execute outro script para executar um loop nas funções do Lambda e criar uma política baseada em identidade do IAM que permita a ação lambda:InvokeFunctionUrl do Nome de Recurso da Amazon (ARN) do grupo do IAM de QA."
      },
      {
        "id": "D",
        "text": "Crie um script CLI que execute um loop nas funções do Lambda para adicionar uma URL de função do Lambda com o tipo de autenticação NONE. Execute outro script para executar um loop nas funções do Lambda e criar uma política baseada em recursos do IAM que permita a ação lambda:InvokeFunctionUrl do Nome de Recurso da Amazon (ARN) do grupo do IAM de QA."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-117",
    "type": "single",
    "stem": "Um desenvolvedor mantém uma aplicação empresarial crítica que utiliza o Amazon DynamoDB como armazenamento de dados principal. A tabela do DynamoDB contém milhões de documentos e recebe de 30 a 60 solicitações por minuto.",
    "ask": "O desenvolvedor precisa processar os documentos quase em tempo real quando eles são adicionados ou atualizados na tabela do DynamoDB.Como o desenvolvedor pode implementar esse recurso com o MÍNIMO de alterações no código da aplicação existente?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma tarefa cron em uma instância do Amazon EC2. Execute um script a cada hora para consultar a tabela em busca de alterações e processar os documentos."
      },
      {
        "id": "B",
        "text": "Habilite um fluxo do DynamoDB na tabela. Invoque uma função do AWS Lambda para processar os documentos."
      },
      {
        "id": "C",
        "text": "Atualize o aplicativo para enviar uma solicitação PutEvents ao Amazon EventBridge. Crie uma regra do EventBridge para invocar uma função do AWS Lambda para processar os documentos."
      },
      {
        "id": "D",
        "text": "Atualize o aplicativo para processar os documentos de forma síncrona diretamente após a gravação do DynamoDB."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-118",
    "type": "single",
    "stem": "Um desenvolvedor está desenvolvendo uma aplicação para uma empresa. A aplicação será implantada no Amazon EC2 e utilizará um banco de dados Amazon RDS para Microsoft SQL Server.",
    "ask": "A equipe de segurança da empresa exige que as credenciais do banco de dados sejam rotacionadas pelo menos uma vez por semana.Como o desenvolvedor deve configurar as credenciais do banco de dados para esta aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Crie um usuário de banco de dados. Armazene o nome de usuário e a senha em um parâmetro de string segura do AWS Systems Manager Parameter Store. Habilite a rotação da chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro."
      },
      {
        "id": "B",
        "text": "Habilite a autenticação do IAM para o banco de dados. Crie um usuário do banco de dados para uso com a autenticação do IAM. Habilite a rotação de senhas."
      },
      {
        "id": "C",
        "text": "Crie um usuário de banco de dados. Armazene o nome de usuário e a senha em um segredo do AWS Secrets Manager com rotação diária habilitada."
      },
      {
        "id": "D",
        "text": "Use os dados do usuário do EC2 para criar um usuário de banco de dados. Forneça o nome de usuário e a senha nas variáveis de ambiente do aplicativo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-119",
    "type": "multi",
    "pick": 2,
    "stem": "Um aplicativo de mensagens em tempo real utiliza APIs WebSocket do Amazon API Gateway com serviço HTTP de back-end. Um desenvolvedor precisa criar um recurso no aplicativo para identificar um cliente que se conecta e desconecta constantemente da conexão WebSocket.",
    "ask": "O desenvolvedor também precisa ter a capacidade de remover o cliente.Qual combinação de alterações o desenvolvedor deve fazer no aplicativo para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Mude para APIs HTTP no serviço de backend."
      },
      {
        "id": "B",
        "text": "Mude para APIs REST no serviço de backend."
      },
      {
        "id": "C",
        "text": "Use o URL de retorno de chamada para desconectar o cliente do serviço de backend."
      },
      {
        "id": "D",
        "text": "Adicione código para rastrear o status do cliente no Amazon ElastiCache no serviço de backend."
      },
      {
        "id": "E",
        "text": "Implemente as rotas $connect e $disconnect no serviço de backend."
      }
    ],
    "answer": [
      "D",
      "E"
    ]
  },
  {
    "id": "DVA-C02-120",
    "type": "single",
    "stem": "Um desenvolvedor escreveu um código para um aplicativo e deseja compartilhá-lo com outros desenvolvedores da equipe para receber feedback.",
    "ask": "O código do aplicativo compartilhado precisa ser armazenado a longo prazo, com múltiplas versões e rastreamento de alterações em lote.Qual serviço da AWS o desenvolvedor deve usar?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeBuild"
      },
      {
        "id": "B",
        "text": "Amazon S3"
      },
      {
        "id": "C",
        "text": "AWS CodeCommit"
      },
      {
        "id": "D",
        "text": "AWS Cloud9"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-121",
    "type": "single",
    "stem": "Um desenvolvedor de uma empresa está criando um site estático para ser implantado no Amazon S3 em um ambiente de produção. O site se integra a um banco de dados Amazon Aurora PostgreSQL usando uma função do AWS Lambda. O site implantado em produção usará um alias do Lambda que aponta para uma versão específica da função do Lambda.A empresa deve rotacionar as credenciais do banco de dados a cada 2 semanas.",
    "ask": "As funções do Lambda implantadas anteriormente pela empresa devem ser capazes de usar as credenciais mais recentes.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais do banco de dados no AWS Secrets Manager. Ative a rotação. Escreva o código na função Lambda para recuperar as credenciais do Secrets Manager."
      },
      {
        "id": "B",
        "text": "Inclua as credenciais do banco de dados como parte do código da função Lambda. Atualize as credenciais periodicamente e implante a nova função Lambda."
      },
      {
        "id": "C",
        "text": "Use variáveis de ambiente Lambda. Atualize as variáveis de ambiente quando novas credenciais estiverem disponíveis."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ative a rotação. Escreva o código na função Lambda para recuperar as credenciais do Systems Manager Parameter Store."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-122",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está desenvolvendo uma aplicação que utiliza solicitações assinadas (Signature Versão 4) para chamar outros serviços da AWS.",
    "ask": "O desenvolvedor criou uma solicitação canônica, criou a string a ser assinada e calculou as informações de assinatura.Quais métodos o desenvolvedor poderia usar para concluir uma solicitação assinada?",
    "options": [
      {
        "id": "A",
        "text": "Adicione a assinatura a um cabeçalho HTTP chamado Autorização."
      },
      {
        "id": "B",
        "text": "Adicione a assinatura a um cookie de sessão."
      },
      {
        "id": "C",
        "text": "Adicione a assinatura a um cabeçalho HTTP chamado Autenticação."
      },
      {
        "id": "D",
        "text": "Adicione a assinatura a um parâmetro de string de consulta chamado X-Amz-Signature."
      },
      {
        "id": "E",
        "text": "Adicione a assinatura a um cabeçalho HTTP chamado WWW-Authenticate."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-123",
    "type": "single",
    "stem": "Uma empresa deve implantar todas as suas instâncias de banco de dados do Amazon RDS usando modelos do AWS CloudFormation como parte da automação de integração e entrega contínua (CI/CD) do AWS CodePipeline.",
    "ask": "A senha principal para a instância de banco de dados deve ser gerada automaticamente como parte do processo de implantação.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie um recurso personalizado do CloudFormation com suporte do AWS Lambda. Escreva um código Lambda que gere uma string segura. Retorne o valor da string segura como um campo de dados do objeto de resposta do recurso personalizado. Use a função intrínseca Fn::GetAtt do CloudFormation para obter o valor da string segura. Use o valor para criar a instância do banco de dados."
      },
      {
        "id": "B",
        "text": "Use a ação AWS CodeBuild do CodePipeline para gerar uma string segura usando o seguinte comando da AWS CLI: aws secretsmanager get-random-password. Passe a string segura gerada como um parâmetro do CloudFormation com o atributo NoEcho definido como true. Use a referência de parâmetro para criar a instância do banco de dados."
      },
      {
        "id": "C",
        "text": "Crie um recurso personalizado do CloudFormation com suporte do AWS Lambda. Escreva um código Lambda que gere uma string segura. Retorne o valor da string segura como um campo de dados do objeto de resposta do recurso personalizado. Use a função intrínseca Fn::GetAtt do CloudFormation para obter o valor da string segura. Crie segredos no AWS Secrets Manager. Use a referência dinâmica secretsmanager para usar o valor armazenado no segredo para criar a instância do banco de dados."
      },
      {
        "id": "D",
        "text": "Use o recurso AWS::SecretsManager::Secret para gerar uma string segura. Armazene a string segura como um segredo no AWS Secrets Manager. Use a referência dinâmica secretsmanager para usar o valor armazenado no segredo para criar a instância do banco de dados."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-124",
    "type": "single",
    "stem": "Uma organização armazena arquivos grandes no Amazon S3 e está desenvolvendo uma aplicação web para exibir metadados sobre os arquivos aos usuários finais. Com base nos metadados, um usuário seleciona um objeto para baixar.",
    "ask": "A organização precisa de um mecanismo para indexar os arquivos e fornecer recuperação de latência de um dígito em milissegundos para os metadados.Qual serviço da AWS deve ser usado para isso?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "AWS Lambda"
      },
      {
        "id": "D",
        "text": "Amazon RDS"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-125",
    "type": "single",
    "stem": "Um desenvolvedor está criando um modelo do AWS Serverless Application Model (AWS SAM). O modelo do AWS SAM contém a definição de várias funções do AWS Lambda, um bucket do Amazon S3 e uma distribuição do Amazon CloudFront. Uma das funções do Lambda é executada no Lambda@Edge na distribuição do CloudFront.",
    "ask": "O bucket do S3 está configurado como origem para a distribuição do CloudFront.Quando o desenvolvedor implanta o modelo do AWS SAM na região eu-west-1, a criação da pilha falha.Qual das seguintes opções pode ser a causa desse problema?",
    "options": [
      {
        "id": "A",
        "text": "As distribuições do CloudFront podem ser criadas somente na região us-east-1."
      },
      {
        "id": "B",
        "text": "As funções Lambda@Edge podem ser criadas somente na região us-east-1."
      },
      {
        "id": "C",
        "text": "Um único modelo do AWS SAM não pode conter várias funções do Lambda."
      },
      {
        "id": "D",
        "text": "A distribuição do CloudFront e o bucket do S3 não podem ser criados na mesma região."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-126",
    "type": "single",
    "stem": "Um desenvolvedor está integrando o Amazon ElastiCache a uma aplicação. O cache armazenará dados de um banco de dados.",
    "ask": "Os dados em cache devem preencher painéis em tempo real.Qual estratégia de cache atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Um cache de leitura"
      },
      {
        "id": "B",
        "text": "Um cache de gravação posterior"
      },
      {
        "id": "C",
        "text": "Um cache de carregamento lento"
      },
      {
        "id": "D",
        "text": "Um cache de gravação"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-127",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda. A função do Lambda precisa de uma biblioteca externa para se conectar a uma solução de terceiros. A biblioteca externa é uma coleção de arquivos com um tamanho total de 100 MB.",
    "ask": "O desenvolvedor precisa disponibilizar a biblioteca externa para o ambiente de execução do Lambda e reduzir o espaço do pacote Lambda.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma camada Lambda para armazenar a biblioteca externa. Configure a função Lambda para usar a camada."
      },
      {
        "id": "B",
        "text": "Crie um bucket do Amazon S3. Carregue a biblioteca externa no bucket do S3. Monte a pasta do bucket do S3 na função Lambda. Importe a biblioteca usando a pasta apropriada no ponto de montagem."
      },
      {
        "id": "C",
        "text": "Carregue a biblioteca externa no diretório /tmp da função Lambda durante a implantação do pacote Lambda. Importe a biblioteca do diretório /tmp."
      },
      {
        "id": "D",
        "text": "Crie um volume do Amazon Elastic File System (Amazon EFS). Carregue a biblioteca externa para o volume EFS. Monte o volume EFS na função Lambda. Importe a biblioteca usando a pasta apropriada no ponto de montagem."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-128",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação front-end executada em quatro instâncias do Amazon EC2 por trás de um Elastic Load Balancer (ELB) em um ambiente de produção provisionado pelo AWS Elastic Beanstalk. Um desenvolvedor precisa implantar e testar o código do novo aplicativo enquanto atualiza a plataforma Elastic Beanstalk da versão atual para uma versão mais recente do Node.js.",
    "ask": "A solução deve resultar em tempo de inatividade zero para a aplicação.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Clone o ambiente de produção para uma versão diferente da plataforma. Implante o novo código do aplicativo e teste-o. Troque as URLs do ambiente após a verificação."
      },
      {
        "id": "B",
        "text": "Implante o novo código do aplicativo em uma implantação completa nas instâncias EC2 existentes. Teste o código. Reimplante o código anterior se a verificação falhar."
      },
      {
        "id": "C",
        "text": "Execute uma atualização imutável para implantar o novo código do aplicativo em novas instâncias do EC2. Envie tráfego para as novas instâncias após elas passarem pelas verificações de integridade."
      },
      {
        "id": "D",
        "text": "Use uma implantação contínua para o novo código do aplicativo. Aplique o código a um subconjunto de instâncias do EC2 até que os testes sejam aprovados. Reimplantar o código anterior se os testes falharem."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-129",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda. A função Lambda consumirá mensagens de uma fila do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "O desenvolvedor deseja integrar testes unitários como parte do processo de integração e entrega contínua (CI/CD) da função.Como o desenvolvedor pode testar a unidade da função?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo do AWS CloudFormation que crie uma fila SQS e implante a função Lambda. Crie uma pilha a partir do modelo durante o processo de CI/CD. Invoque a função implantada. Verifique a saída."
      },
      {
        "id": "B",
        "text": "Crie um evento SQS para testes. Use um teste que consuma mensagens da fila SQS durante o processo Cl/CD da função."
      },
      {
        "id": "C",
        "text": "Crie uma fila SQS para testes. Use essa fila SQS no teste unitário do aplicativo. Execute os testes unitários durante o processo de CI/CD."
      },
      {
        "id": "D",
        "text": "Use o comando aws lambda invoke com um evento de teste durante o processo CIICD."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-130",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma aplicação web que utiliza o Amazon DynamoDB como armazenamento de dados. A aplicação possui duas tabelas do DynamoDB: uma tabela denominada \"artists\" e uma tabela denominada \"songs\". A tabela \"artists\" possui \"artistName\" como chave de partição. A tabela \"songs\" possui \"songName\" como chave de partição e \"artistName\" como chave de classificação.Os padrões de uso da tabela incluem a recuperação de múltiplas músicas e artistas em uma única operação de banco de dados a partir da página web.",
    "ask": "O desenvolvedor precisa de uma maneira de recuperar essas informações com o mínimo de tráfego de rede e o desempenho ideal da aplicação.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Execute uma operação BatchGetltem que retorne itens das duas tabelas. Use a lista de chaves songName/artistName para a tabela songs e a lista de chaves artistName para a tabela artists."
      },
      {
        "id": "B",
        "text": "Crie um índice secundário local (LSI) na tabela de músicas que use artistName como chave de partição. Execute uma consulta para cada artistName na tabela de músicas que filtre pela lista de songName. Execute uma consulta para cada artistName na tabela de artistas."
      },
      {
        "id": "C",
        "text": "Execute uma operação BatchGetitem na tabela songs que usa as chaves songName/artistName. Execute uma operação BatchGetltem na tabela artists que usa artistName como chave."
      },
      {
        "id": "D",
        "text": "Execute uma operação de verificação em cada tabela que filtre pela lista de songName/artistName na tabela de músicas e pela lista de artistName na tabela de artistas."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-131",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de e-commerce que utiliza as APIs do Amazon API Gateway. O aplicativo utiliza o AWS Lambda como backend.",
    "ask": "A empresa precisa testar o código em um ambiente de teste dedicado e monitorado antes de liberá-lo para o ambiente de produção.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use um único estágio no API Gateway. Crie uma função Lambda para cada ambiente. Configure os clientes da API para enviar um parâmetro de consulta que indique o ambiente e a função Lambda específica."
      },
      {
        "id": "B",
        "text": "Use vários estágios no API Gateway. Crie uma única função Lambda para todos os ambientes. Adicione diferentes blocos de código para diferentes ambientes na função Lambda com base nas variáveis de ambiente do Lambda."
      },
      {
        "id": "C",
        "text": "Use vários estágios no API Gateway. Crie uma função Lambda para cada ambiente. Configure variáveis de estágio do API Gateway para rotear o tráfego para a função Lambda em diferentes ambientes."
      },
      {
        "id": "D",
        "text": "Use um único estágio no API Gateway. Configure os clientes da API para enviar um parâmetro de consulta que indique o ambiente. Adicione diferentes blocos de código para diferentes ambientes na função Lambda para corresponder ao valor do parâmetro de consulta."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-132",
    "type": "single",
    "stem": "Um desenvolvedor cria uma função do AWS Lambda que recupera e agrupa dados de vários endpoints de API pública. A função do Lambda foi atualizada e configurada para se conectar à sub-rede privada de uma VPC. Um gateway de internet está conectado à VPC. A VPC usa a ACL de rede padrão e as configurações de grupo de segurança.O desenvolvedor descobre que a função do Lambda não consegue mais acessar a API pública.",
    "ask": "O desenvolvedor garantiu que a API pública está acessível, mas a função do Lambda não consegue se conectar à API.Como o desenvolvedor deve corrigir o problema de conexão?",
    "options": [
      {
        "id": "A",
        "text": "Certifique-se de que a ACL da rede permite tráfego de saída para a Internet pública."
      },
      {
        "id": "B",
        "text": "Certifique-se de que o grupo de segurança permita tráfego de saída para a Internet pública."
      },
      {
        "id": "C",
        "text": "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um gateway NAT público."
      },
      {
        "id": "D",
        "text": "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um novo gateway de internet."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-133",
    "type": "single",
    "stem": "Um desenvolvedor precisa armazenar variáveis de configuração para um aplicativo. Ele precisa definir uma data e hora de expiração para a configuração.",
    "ask": "Ele deseja receber notificações antes que a configuração expire.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification."
      },
      {
        "id": "B",
        "text": "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Crie uma função do AWS Lambda para expirar a configuração e enviar notificações do Amazon Simple Notification Service (Amazon SNS)."
      },
      {
        "id": "C",
        "text": "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification."
      },
      {
        "id": "D",
        "text": "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Crie uma instância do Amazon EC2 com uma tarefa cron para expirar a configuração e enviar notificações."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-134",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação serverless que consiste em várias funções do AWS Lambda por trás das APIs do Amazon API Gateway. Um desenvolvedor precisa automatizar a implantação do código da função Lambda. O desenvolvedor implantará funções Lambda atualizadas com o AWS CodeDeploy. A implantação deve minimizar a exposição dos usuários finais a possíveis erros.",
    "ask": "Quando a aplicação está em produção, ela não pode sofrer tempo de inatividade fora da janela de manutenção especificada.Qual configuração de implantação atenderá a esses requisitos com o MENOR tempo de implantação?",
    "options": [
      {
        "id": "A",
        "text": "Use a configuração de implantação local do AWS CodeDeploy para as funções do Lambda. Transfira todo o tráfego imediatamente após a implantação."
      },
      {
        "id": "B",
        "text": "Use a configuração de implantação linear do AWS CodeDeploy para deslocar 10% do tráfego a cada minuto."
      },
      {
        "id": "C",
        "text": "Use a configuração de implantação completa do AWS CodeDeploy para transferir todo o tráfego para as versões atualizadas imediatamente."
      },
      {
        "id": "D",
        "text": "Use a configuração de implantação canário predefinida do AWS CodeDeploy para deslocar 10% do tráfego imediatamente e deslocar o tráfego restante após 5 minutos."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-135",
    "type": "single",
    "stem": "Uma empresa criou quatro funções do AWS Lambda que se conectam a um servidor de banco de dados relacional executado em uma instância do Amazon RDS.",
    "ask": "Uma equipe de segurança exige que a empresa altere automaticamente a senha do banco de dados a cada 30 dias.Qual solução atenderá a esses requisitos com MAIS segurança?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais do banco de dados nas variáveis de ambiente da função Lambda. Implante a função Lambda com as novas credenciais a cada 30 dias."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais do banco de dados no AWS Secrets Manager. Configure um cronograma de rotação de 30 dias para as credenciais."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais do banco de dados nas strings seguras do AWS Systems Manager Parameter Store. Configure um cronograma de 30 dias para as strings seguras."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais do banco de dados em um bucket do Amazon S3 que use criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente (SSE-C). Configure um cronograma de rotação de chaves de 30 dias para a chave do cliente."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-136",
    "type": "single",
    "stem": "Um desenvolvedor está configurando um pipeline de implantação. O pipeline inclui uma etapa de compilação do AWS CodeBuild que requer acesso a um banco de dados para executar testes de integração. O desenvolvedor está usando um arquivo buildspec.yml para configurar a conexão com o banco de dados.",
    "ask": "A política da empresa exige a rotação automática de todas as credenciais do banco de dados.Qual solução manipulará as credenciais do banco de dados com MAIS segurança?",
    "options": [
      {
        "id": "A",
        "text": "Recupere as credenciais de variáveis codificadas no arquivo buildspec.yml. Configure uma função do AWS Lambda para rotacionar as credenciais."
      },
      {
        "id": "B",
        "text": "Recupere as credenciais de uma variável de ambiente vinculada a um parâmetro SecureString no AWS Systems Manager Parameter Store. Configure o Parameter Store para rotação automática."
      },
      {
        "id": "C",
        "text": "Recupere as credenciais de uma variável de ambiente vinculada a um segredo do AWS Secrets Manager. Configure o Secrets Manager para rotação automática."
      },
      {
        "id": "D",
        "text": "Recupere as credenciais de uma variável de ambiente que contenha a string de conexão em texto simples. Configure um evento do Amazon EventBridge para rotacionar as credenciais."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-137",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação multicamadas sem servidor na AWS. A empresa construirá a camada lógica sem servidor usando o Amazon API Gateway e o AWS Lambda.Enquanto a empresa constrói a camada lógica, um desenvolvedor que trabalha no frontend da aplicação deve desenvolver testes de integração.",
    "ask": "Os testes devem abranger cenários positivos e negativos, dependendo dos códigos de status HTTP de sucesso e erro.Qual solução atenderá a esses requisitos com o MENOR esforço?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma integração simulada para métodos de API no API Gateway. Na solicitação de integração da Execução de Método, adicione uma lógica simples para retornar um sucesso ou um erro com base no código de status HTTP. Na resposta de integração, adicione mensagens que correspondam aos códigos de status HTTP."
      },
      {
        "id": "B",
        "text": "Crie dois recursos de integração simulados para métodos de API no API Gateway. Na solicitação de integração, retorne um código de status HTTP de sucesso para um recurso e um código de status HTTP de erro para o outro. Na resposta de integração, adicione mensagens que correspondam aos códigos de status HTTP."
      },
      {
        "id": "C",
        "text": "Crie funções Lambda para realizar testes. Adicione lógica simples para retornar sucesso ou erro, com base nos códigos de status HTTP. Crie uma integração Lambda com o API Gateway. Selecione as funções Lambda apropriadas que correspondam aos códigos de status HTTP."
      },
      {
        "id": "D",
        "text": "Crie uma função Lambda para realizar testes. Adicione lógica simples para retornar códigos de status HTTP baseados em sucesso ou erro. Crie uma integração simulada no API Gateway. Selecione a função Lambda que corresponde aos códigos de status HTTP."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-138",
    "type": "single",
    "stem": "Usuários estão relatando erros em um aplicativo.",
    "ask": "O aplicativo consiste em vários microsserviços implantados no Amazon Elastic Container Service (Amazon ECS) com o AWS Fargate.Qual combinação de etapas um desenvolvedor deve seguir para corrigir os erros?",
    "options": [
      {
        "id": "A",
        "text": "Implante o AWS X-Ray como um contêiner sidecar para os microsserviços. Atualize a política de função da tarefa para permitir acesso à API do X-Ray."
      },
      {
        "id": "B",
        "text": "Implante o AWS X-Ray como um daemonset no cluster Fargate. Atualize a política de função de serviço para permitir acesso à API do X-Ray."
      },
      {
        "id": "C",
        "text": "Instrumente o aplicativo usando o SDK do AWS X-Ray. Atualize o aplicativo para usar a chamada da API PutXrayTrace para se comunicar com a API do X-Ray."
      },
      {
        "id": "D",
        "text": "Instrumente o aplicativo usando o SDK do AWS X-Ray. Atualize o aplicativo para se comunicar com o daemon do X-Ray."
      },
      {
        "id": "E",
        "text": "Instrumente a tarefa do ECS para enviar a saída stdout e stderr para o Amazon CloudWatch Logs. Atualize a política de função da tarefa para permitir a ação cloudwatch:PullLogs."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-139",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo para uma empresa. O aplicativo precisa ler o arquivo doc.txt, que está localizado na pasta raiz de um bucket do Amazon S3 denominado DOC-EXAMPLE-BUCKET.",
    "ask": "A equipe de segurança da empresa exige que o princípio do menor privilégio seja aplicado à política de IAM do aplicativo.Qual declaração de política de IAM atenderá a esses requisitos de segurança?",
    "options": [
      {
        "id": "A",
        "code": "{\n  \"Action\": [\"s3:GetObject\"],\n  \"Effect\": \"Allow\",\n  \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt\"\n}"
      },
      {
        "id": "B",
        "code": "{\n  \"Action\": [\"s3:*\"],\n  \"Effect\": \"Allow\",\n  \"Resource\": \"*\"\n}"
      },
      {
        "id": "C",
        "code": "{\n  \"Action\": [\"s3:GetObject\"],\n  \"Effect\": \"Allow\",\n  \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"\n}"
      },
      {
        "id": "D",
        "code": "{\n  \"Action\": [\"s3:*\"],\n  \"Effect\": \"Allow\",\n  \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt\"\n}"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-140",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação que utiliza o AWS CodePipeline para automatizar seu fluxo de trabalho de integração e entrega contínuas (CI/CD). A aplicação utiliza o AWS CodeCommit para controle de versão. Um desenvolvedor que estava trabalhando em uma das tarefas não extraiu as alterações mais recentes da ramificação principal.",
    "ask": "Uma semana depois, o desenvolvedor notou conflitos de mesclagem.Como o desenvolvedor pode resolver os conflitos de mesclagem na sua ramificação com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Clone o repositório. Crie uma nova ramificação. Atualize a ramificação com as alterações."
      },
      {
        "id": "B",
        "text": "Crie uma nova ramificação. Aplique as alterações da ramificação anterior."
      },
      {
        "id": "C",
        "text": "Use a visualização do Visualizador de Commits para comparar os commits quando um recurso foi adicionado. Corrija os conflitos de mesclagem."
      },
      {
        "id": "D",
        "text": "Interrompa a migração do branch principal para o branch de recursos. Rebase o branch de recursos a partir do branch principal."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-141",
    "type": "single",
    "stem": "Um desenvolvedor deseja adicionar validação de solicitações a uma API do Amazon API Gateway em ambiente de produção. O desenvolvedor precisa testar as alterações antes que a API seja implantada no ambiente de produção.",
    "ask": "Para o teste, o desenvolvedor enviará solicitações de teste à API por meio de uma ferramenta de teste.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Exporte a API existente para um arquivo OpenAPI. Crie uma nova API. Importe o arquivo OpenAPI. Modifique a nova API para adicionar validação de solicitação. Execute os testes. Modifique a API existente para adicionar validação de solicitação. Implante a API existente em produção."
      },
      {
        "id": "B",
        "text": "Modifique a API existente para adicionar validação de solicitação. Implante a API atualizada em um novo estágio do API Gateway. Execute os testes. Implante a API atualizada no estágio de produção do API Gateway."
      },
      {
        "id": "C",
        "text": "Criar uma nova API. Adicionar os recursos e métodos necessários, incluindo a nova validação de requisições. Executar os testes. Modificar a API existente para adicionar a validação de requisições. Implantar a API existente na produção."
      },
      {
        "id": "D",
        "text": "Clonar a API existente. Modificar a nova API para adicionar validação de solicitação. Executar os testes. Modificar a API existente para adicionar validação de solicitação. Implantar a API existente em produção."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-142",
    "type": "single",
    "stem": "Uma empresa de alimentos online fornece uma API HTTP do Amazon API Gateway para receber pedidos de parceiros. A API é integrada a uma função do AWS Lambda. A função Lambda armazena os pedidos em uma tabela do Amazon DynamoDB.A empresa espera integrar mais parceiros. Alguns parceiros exigem funções Lambda adicionais para receber pedidos. A empresa criou um bucket do Amazon S3.",
    "ask": "A empresa precisa armazenar todos os pedidos e atualizações no bucket do S3 para análises futuras.Como o desenvolvedor pode garantir que todos os pedidos e atualizações sejam armazenados no Amazon S3 com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma nova função Lambda e um novo endpoint de API do API Gateway. Configure a nova função Lambda para gravar no bucket do S3. Modifique a função Lambda original para publicar atualizações no novo endpoint de API."
      },
      {
        "id": "B",
        "text": "Use o Amazon Kinesis Data Streams para criar um novo fluxo de dados. Modifique a função Lambda para publicar pedidos no fluxo de dados. Configure o fluxo de dados para gravar no bucket do S3."
      },
      {
        "id": "C",
        "text": "Habilite os fluxos do DynamoDB na tabela do DynamoDB. Crie uma nova função do Lambda. Associe o nome de recurso da Amazon (ARN) do fluxo à função do Lambda. Configure a função do Lambda para gravar no bucket do S3 conforme os registros aparecem no fluxo da tabela."
      },
      {
        "id": "D",
        "text": "Modifique a função Lambda para publicar em um novo tópico do Amazon Simple Notification Service (Amazon SNS) conforme a função Lambda recebe pedidos. Inscreva uma nova função Lambda no tópico. Configure a nova função Lambda para gravar no bucket do S3 conforme as atualizações chegam pelo tópico."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-143",
    "type": "multi",
    "pick": 2,
    "stem": "O site de uma empresa é executado em uma instância do Amazon EC2 e usa o Auto Scaling para escalar o ambiente durante os horários de pico.",
    "ask": "Usuários do site em todo o mundo estão enfrentando alta latência devido ao conteúdo estático na instância do EC2, mesmo fora dos horários de pico.Qual combinação de etapas resolverá o problema de latência?",
    "options": [
      {
        "id": "A",
        "text": "Duplique o número máximo de servidores do grupo de dimensionamento automático."
      },
      {
        "id": "B",
        "text": "Hospede o código do aplicativo no AWS Lambda."
      },
      {
        "id": "C",
        "text": "Escale verticalmente redimensionando as instâncias do EC2."
      },
      {
        "id": "D",
        "text": "Crie uma distribuição do Amazon CloudFront para armazenar em cache o conteúdo estático."
      },
      {
        "id": "E",
        "text": "Armazene o conteúdo estático do aplicativo no Amazon S3."
      }
    ],
    "answer": [
      "D",
      "E"
    ]
  },
  {
    "id": "DVA-C02-144",
    "type": "single",
    "stem": "Uma empresa possui um bucket S3 da Amazon contendo conteúdo premium que pretende disponibilizar apenas para assinantes pagos de seu site.",
    "ask": "Atualmente, o bucket S3 possui permissões padrão de privacidade para todos os objetos, a fim de evitar a exposição inadvertida do conteúdo premium a visitantes não pagantes do site.Como a empresa pode limitar a capacidade de baixar um arquivo de conteúdo premium no bucket S3 apenas para assinantes pagos?",
    "options": [
      {
        "id": "A",
        "text": "Aplique uma política de bucket que permita que usuários anônimos baixem o conteúdo do bucket S3."
      },
      {
        "id": "B",
        "text": "Gere uma URL de objeto pré-assinada para o arquivo de conteúdo principal quando um assinante pago solicitar um download."
      },
      {
        "id": "C",
        "text": "Adicione uma política de bucket que exija autenticação multifator para solicitações de acesso aos objetos de bucket do S3."
      },
      {
        "id": "D",
        "text": "Habilite a criptografia do lado do servidor no bucket S3 para proteção de dados contra visitantes de sites não pagantes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-145",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que busca itens em uma tabela do Amazon DynamoDB que contém informações de contato do cliente. Os itens da tabela do DynamoDB têm o endereço de e-mail do cliente como chave de partição e propriedades adicionais, como customer_type, name e job_title.A função do Lambda é executada sempre que um usuário digita um novo caractere na entrada de texto customer_type. O desenvolvedor deseja que a busca retorne correspondências parciais de todas as propriedades email_address de um customer_type específico.",
    "ask": "O desenvolvedor não deseja recriar a tabela do DynamoDB.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um índice secundário global (GSI) à tabela do DynamoDB com customer_type como chave de partição e email_address como chave de classificação. Execute uma operação de consulta no GSI usando a expressão de condição da chave begin_with com a propriedade email_address."
      },
      {
        "id": "B",
        "text": "Adicione um índice secundário global (GSI) à tabela do DynamoDB com email_address como chave de partição e customer_type como chave de classificação. Execute uma operação de consulta no GSI usando a expressão de condição da chave begin_with com a propriedade email_address."
      },
      {
        "id": "C",
        "text": "Adicione um índice secundário local (LSI) à tabela do DynamoDB com customer_type como chave de partição e email_address como chave de classificação. Execute uma operação de consulta no LSI usando a expressão de condição da chave begin_with com a propriedade email_address."
      },
      {
        "id": "D",
        "text": "Adicione um índice secundário local (LSI) à tabela do DynamoDB com job_title como chave de partição e email_address como chave de classificação. Execute uma operação de consulta no LSI usando a expressão de condição da chave begin_with com a propriedade email_address."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-146",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que utiliza APIs do AWS API Gateway, funções do AWS Lambda e tabelas do AWS DynamoDB. O desenvolvedor utiliza o AWS Serverless Application Model (AWS SAM) para criar e executar aplicações sem servidor na AWS.",
    "ask": "Cada vez que o desenvolvedor envia alterações apenas para as funções do Lambda, todos os artefatos da aplicação são reconstruídos.O desenvolvedor deseja implementar o AWS SAM Accelerate executando um comando para reimplantar apenas as funções do Lambda que foram alteradas.Qual comando atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "sam deploy --force-upload"
      },
      {
        "id": "B",
        "text": "sam implantar --no-execute-changeset"
      },
      {
        "id": "D",
        "text": "sam sync --watch"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-147",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo que permite aos usuários visualizar contas bancárias de diversas fontes em um único painel. O desenvolvedor automatizou o processo de recuperação de credenciais de API para essas fontes.",
    "ask": "O processo invoca uma função do AWS Lambda associada a um recurso personalizado do AWS CloudFormation.O desenvolvedor deseja uma solução que armazene as credenciais de API com o mínimo de sobrecarga operacional.Qual solução atenderá a esses requisitos da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um recurso GenerateSecretString do AWS Secrets Manager ao modelo do CloudFormation. Defina o valor para referenciar novas credenciais para o recurso do CloudFormation."
      },
      {
        "id": "B",
        "text": "Use a operação ssm:PutParameter do AWS SDK na função Lambda do recurso personalizado existente para armazenar as credenciais como um parâmetro. Defina o valor do parâmetro para referenciar as novas credenciais. Defina o tipo de parâmetro como SecureString."
      },
      {
        "id": "C",
        "text": "Adicione um recurso do AWS Systems Manager Parameter Store ao modelo do CloudFormation. Defina o valor do recurso do CloudFormation para referenciar as novas credenciais. Defina o atributo NoEcho do recurso como verdadeiro."
      },
      {
        "id": "D",
        "text": "Use a operação ssm:PutParameter do AWS SDK na função Lambda do recurso personalizado existente para armazenar as credenciais como um parâmetro. Defina o valor do parâmetro para referenciar as novas credenciais. Defina o atributo NoEcho do parâmetro como true."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-148",
    "type": "single",
    "stem": "Um desenvolvedor está tentando obter dados de uma tabela do Amazon DynamoDB chamada demoman-table.",
    "ask": "O desenvolvedor configurou a AWS CLI para usar as credenciais de um usuário específico do IAM e executou o seguinte comando:aws dynamodb get-item --table-name demoman-table --key '{\"id\": {\"N\":\"1993\"}}'O comando retornou erros e nenhuma linha foi retornada.Qual é a causa MAIS provável desses problemas?",
    "options": [
      {
        "id": "A",
        "text": "O comando está incorreto; ele deve ser reescrito para usar put-item com um argumento de string."
      },
      {
        "id": "B",
        "text": "O desenvolvedor precisa registrar um tíquete no Suporte da AWS para habilitar o acesso à tabela demoman."
      },
      {
        "id": "C",
        "text": "O Amazon DynamoDB não pode ser acessado pela AWS CLI e precisa ser chamado por meio da API REST."
      },
      {
        "id": "D",
        "text": "O usuário do IAM precisa de uma política associada com acesso de leitura à tabela demoman."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-149",
    "type": "multi",
    "pick": 2,
    "stem": "Uma organização está usando o Amazon CloudFront para garantir que seus usuários tenham acesso de baixa latência ao seu aplicativo web.",
    "ask": "A organização identificou a necessidade de criptografar todo o tráfego entre os usuários e o CloudFront, bem como todo o tráfego entre o CloudFront e o aplicativo web.Como esses requisitos podem ser atendidos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS KMS para criptografar o tráfego entre o CloudFront e o aplicativo web."
      },
      {
        "id": "B",
        "text": "Defina a Política de Protocolo de Origem como “Somente HTTPS”."
      },
      {
        "id": "C",
        "text": "Defina a porta HTTP da origem como 443."
      },
      {
        "id": "D",
        "text": "Defina a Política de Protocolo do Visualizador como “Somente HTTPS” ou “Redirecionar HTTP para HTTPS”."
      },
      {
        "id": "E",
        "text": "Habilite a opção Restringir acesso do visualizador do CloudFront."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-150",
    "type": "single",
    "stem": "Um desenvolvedor está planejando migrar dados corporativos locais para o Amazon S3. Os dados devem ser criptografados e as chaves de criptografia devem suportar rotação anual automática.",
    "ask": "A empresa deve usar o AWS Key Management Service (AWS KMS) para criptografar os dados.Que tipo de chaves o desenvolvedor deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Chaves gerenciadas pelo Amazon S3"
      },
      {
        "id": "B",
        "text": "Chaves gerenciadas pelo cliente simétricas com material de chave gerado pela AWS"
      },
      {
        "id": "C",
        "text": "Chaves assimétricas gerenciadas pelo cliente com material de chave gerado pela AWS"
      },
      {
        "id": "D",
        "text": "Chaves gerenciadas pelo cliente simétricas com material de chave importado"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-151",
    "type": "single",
    "stem": "Uma equipe de desenvolvedores está usando um pipeline do AWS CodePipeline como um mecanismo de integração e entrega contínuas (CI/CD) para uma aplicação web. Um desenvolvedor escreveu testes unitários para testar programaticamente a funcionalidade do código da aplicação. Os testes unitários produzem um relatório de teste que mostra os resultados de cada verificação individual.",
    "ask": "O desenvolvedor agora deseja executar esses testes automaticamente durante o processo de CI/CD.Qual solução atenderá a esse requisito com o MENOR esforço operacional?",
    "options": [
      {
        "id": "A",
        "text": "Escreva um hook de pré-commit do Git que execute os testes antes de cada commit. Certifique-se de que cada desenvolvedor que esteja trabalhando no projeto tenha o hook de pré-commit instalado localmente. Revise o relatório de teste e resolva quaisquer problemas antes de enviar as alterações para o AWS CodeCommit."
      },
      {
        "id": "B",
        "text": "Adicione um novo estágio ao pipeline. Use o AWS CodeBuild como provedor. Adicione o novo estágio após o estágio que implanta as revisões de código no ambiente de teste. Escreva um buildspec que falhe no estágio do CodeBuild caso algum teste não seja aprovado. Use o recurso de relatórios de teste do CodeBuild para integrar o relatório ao console do CodeBuild. Visualize os resultados dos testes no CodeBuild. Resolva quaisquer problemas."
      },
      {
        "id": "C",
        "text": "Adicione um novo estágio ao pipeline. Use o AWS CodeBuild como provedor. Adicione o novo estágio antes do estágio que implanta as revisões de código no ambiente de teste. Escreva um buildspec que falhe no estágio do CodeBuild caso algum teste não seja aprovado. Use o recurso de relatórios de teste do CodeBuild para integrar o relatório ao console do CodeBuild. Visualize os resultados dos testes no CodeBuild. Resolva quaisquer problemas."
      },
      {
        "id": "D",
        "text": "Adicione um novo estágio ao pipeline. Use o Jenkins como provedor. Configure o CodePipeline para usar o Jenkins para executar os testes unitários. Escreva um arquivo Jenkins que falhe no estágio caso algum teste não seja aprovado. Use o plugin de relatório de teste do Jenkins para integrar o relatório ao painel do Jenkins. Visualize os resultados dos testes no Jenkins. Resolva quaisquer problemas."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-152",
    "type": "single",
    "stem": "Uma empresa possui vários endpoints da Amazon VPC na mesma VPC.",
    "ask": "Um desenvolvedor precisa configurar uma política de bucket do Amazon S3 para que os usuários possam acessar um bucket S3 apenas usando esses endpoints da VPC.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie várias políticas de bucket do S3 usando cada ID de endpoint da VPC que tenha o valor aws:SourceVpce na condição StringNotEquals."
      },
      {
        "id": "B",
        "text": "Crie uma única política de bucket do S3 que tenha o valor aws:SourceVpc e na condição StringNotEquals para usar o ID da VPC."
      },
      {
        "id": "C",
        "text": "Crie uma única política de bucket do S3 que tenha o valor aws:SourceVpce e na condição StringNotEquals para usar vpce*."
      },
      {
        "id": "D",
        "text": "Crie uma única política de bucket do S3 com vários valores aws:sourceVpce na condição StringNotEquals. Repita o processo para todos os IDs de endpoint da VPC."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-153",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa utiliza uma cadeia de certificados de autoridade certificadora raiz personalizada (Certificado de CA Raiz) com 10 KB de tamanho para gerar certificados SSL para seus endpoints HTTPS locais. Um dos aplicativos baseados em nuvem da empresa possui centenas de funções do AWS Lambda que extraem dados desses endpoints. Um desenvolvedor atualizou o repositório de confiança do ambiente de execução do Lambda para usar o Certificado de CA Raiz quando o ambiente de execução do Lambda for inicializado. O desenvolvedor incluiu o Certificado de CA Raiz como um arquivo de texto no pacote de implantação do Lambda.Após 3 meses de desenvolvimento, o Certificado de CA Raiz não é mais válido e precisa ser atualizado. O desenvolvedor precisa de uma solução mais eficiente para atualizar o Certificado de CA Raiz para todas as funções do Lambda implantadas. A solução não deve incluir a reconstrução ou atualização de todas as funções do Lambda que usam o Certificado de CA Raiz. A solução também deve funcionar para todos os ambientes de desenvolvimento, teste e produção.",
    "ask": "Cada ambiente é gerenciado em uma conta AWS separada.Qual combinação de etapas o desenvolvedor deve adotar para atender a esses requisitos da forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Armazene o certificado da CA raiz como um segredo no AWS Secrets Manager. Crie uma política baseada em recursos. Adicione usuários do IAM para permitir acesso ao segredo."
      },
      {
        "id": "B",
        "text": "Armazene o certificado da CA raiz como um parâmetro SecureString no AWS Systems Manager Parameter Store. Crie uma política baseada em recursos. Adicione usuários do IAM para permitir acesso à política."
      },
      {
        "id": "C",
        "text": "Armazene o certificado da CA raiz em um bucket do Amazon S3. Crie uma política baseada em recursos para permitir o acesso ao bucket."
      },
      {
        "id": "D",
        "text": "Refatore o código do Lambda para carregar o certificado da CA raiz a partir do local do certificado da CA raiz. Modifique o repositório de confiança em tempo de execução dentro do manipulador de funções do Lambda."
      },
      {
        "id": "E",
        "text": "Refatore o código do Lambda para carregar o certificado da CA raiz a partir do local do certificado. Modifique o armazenamento confiável de tempo de execução fora do manipulador de funções do Lambda."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "DVA-C02-154",
    "type": "single",
    "stem": "Um desenvolvedor mantém aplicativos que armazenam vários segredos no AWS Secrets Manager. Os aplicativos usam segredos que mudaram ao longo do tempo. O desenvolvedor precisa identificar os segredos necessários que ainda estão em uso.",
    "ask": "O desenvolvedor não quer causar inatividade no aplicativo.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a entrega de um arquivo de log do AWS CloudTrail para um bucket do Amazon S3. Crie um alarme do Amazon CloudWatch para as solicitações de operação da API GetSecretValue do Secrets Manager."
      },
      {
        "id": "B",
        "text": "Crie uma regra gerenciada do AWS Config chamada secretsmanager-secret-unused. Crie uma regra do Amazon EventBridge para iniciar notificações quando a regra gerenciada do AWS Config for atendida."
      },
      {
        "id": "C",
        "text": "Desative os segredos dos aplicativos e monitore temporariamente os logs de erros dos aplicativos."
      },
      {
        "id": "D",
        "text": "Configure o AWS X-Ray para os aplicativos. Crie uma regra de amostragem para corresponder às solicitações de operação da API GetSecretValue do Secrets Manager."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-155",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação sem servidor que requer a invocação de uma função do AWS Lambda a cada 10 minutos.Qual é uma maneira automatizada e sem servidor de invocar a função?",
    "options": [
      {
        "id": "A",
        "text": "Implante uma instância do Amazon EC2 baseada no Linux e edite seu arquivo /etc/crontab adicionando um comando para invocar periodicamente a função Lambda."
      },
      {
        "id": "B",
        "text": "Configure uma variável de ambiente chamada PERIOD para a função Lambda. Defina o valor como 600."
      },
      {
        "id": "C",
        "text": "Crie uma regra do Amazon EventBridge que seja executada em uma programação regular para invocar a função Lambda."
      },
      {
        "id": "D",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS) que tenha uma assinatura da função Lambda com um temporizador de 600 segundos."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-156",
    "type": "single",
    "stem": "Uma empresa está usando o Amazon OpenSearch Service para implementar um sistema de monitoramento de auditoria. Um desenvolvedor precisa criar um recurso personalizado do AWS CloudFormation associado a uma função do AWS Lambda para configurar o domínio do OpenSearch Service.",
    "ask": "A função do Lambda deve acessar o domínio do OpenSearch Service usando as credenciais de usuário mestre internas do OpenSearch Service.Qual é a maneira MAIS segura de passar essas credenciais para a função do Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Use um parâmetro do CloudFormation para passar as credenciais do usuário mestre na implantação para as MasterUserOptions do domínio do OpenSearch Service e a variável de ambiente da função Lambda. Defina o atributo NoEcho como true."
      },
      {
        "id": "B",
        "text": "Use um parâmetro do CloudFormation para passar as credenciais do usuário mestre na implantação para o MasterUserOptions do domínio do OpenSearch Service e para criar um parâmetro no AWS Systems Manager Parameter Store. Defina o atributo NoEcho como true. Crie uma função do IAM com a permissão ssm:GetParameter. Atribua a função à função do Lambda. Armazene o nome do parâmetro como a variável de ambiente da função do Lambda. Resolva o valor do parâmetro em tempo de execução."
      },
      {
        "id": "C",
        "text": "Use um parâmetro do CloudFormation para passar as credenciais do usuário mestre na implantação para as MasterUserOptions do domínio do OpenSearch Service e a variável de ambiente da função Lambda. Criptografe o valor do parâmetro usando o comando encrypt do AWS Key Management Service (AWS KMS)."
      },
      {
        "id": "D",
        "text": "Use o CloudFormation para criar um segredo do AWS Secrets Manager. Use uma referência dinâmica do CloudFormation para recuperar o valor do segredo para MasterUserOptions do domínio do OpenSearch Service. Crie uma função do IAM com a permissão secretsmanager:GetSecretValue. Atribua a função à função do Lambda. Armazene o nome do segredo como a variável de ambiente da função do Lambda. Resolva o valor do segredo em tempo de execução."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-157",
    "type": "single",
    "stem": "Um aplicativo é executado em várias instâncias do EC2 por trás de um ELB.Onde os dados da sessão são melhor gravados para que possam ser atendidos de forma confiável em várias solicitações?",
    "options": [
      {
        "id": "A",
        "text": "Grave dados no Amazon ElastiCache."
      },
      {
        "id": "B",
        "text": "Grave dados no Amazon Elastic Block Store."
      },
      {
        "id": "C",
        "text": "Grave dados no Amazon EC2 Instance Store."
      },
      {
        "id": "D",
        "text": "Grave dados no sistema de arquivos raiz."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-158",
    "type": "single",
    "stem": "Um aplicativo de e-commerce está sendo executado por trás de um Application Load Balancer. Um desenvolvedor observa uma carga inesperada no aplicativo fora do horário de pico.",
    "ask": "O desenvolvedor deseja analisar padrões para os endereços IP dos clientes que usam o aplicativo.Qual cabeçalho HTTP o desenvolvedor deve usar para essa análise?",
    "options": [
      {
        "id": "A",
        "text": "O cabeçalho X-Forwarded-Proto"
      },
      {
        "id": "B",
        "text": "O cabeçalho X-Forwarded-Host"
      },
      {
        "id": "C",
        "text": "O cabeçalho X-Forwarded-For"
      },
      {
        "id": "D",
        "text": "O cabeçalho X-Forwarded-Port"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-159",
    "type": "single",
    "stem": "Um desenvolvedor migrou um aplicativo legado para uma função do AWS Lambda. A função usa um serviço de terceiros para extrair dados com uma série de chamadas de API ao final de cada mês. A função então processa os dados para gerar os relatórios mensais. A função tem funcionado sem problemas até o momento.O serviço de terceiros emitiu recentemente uma restrição para permitir um número fixo de chamadas de API a cada minuto e a cada dia. Se as chamadas de API excederem o limite para cada minuto ou a cada dia, o serviço produzirá erros. A API também fornece o limite de minutos e o limite diário no cabeçalho de resposta.",
    "ask": "Essa restrição pode estender o processo geral para vários dias, pois o processo está consumindo mais chamadas de API do que o limite disponível.Qual é a maneira operacional MAIS eficiente de refatorar o aplicativo sem servidor para acomodar essa mudança?",
    "options": [
      {
        "id": "A",
        "text": "Use uma máquina de estados do AWS Step Functions para monitorar falhas de API. Use o estado Wait para atrasar a chamada da função Lambda."
      },
      {
        "id": "B",
        "text": "Use uma fila do Amazon Simple Queue Service (Amazon SQS) para armazenar as chamadas de API. Configure a função Lambda para consultar a fila dentro dos limites da API."
      },
      {
        "id": "C",
        "text": "Use uma métrica do Amazon CloudWatch Logs para contar o número de chamadas de API. Configure um alarme do Amazon CloudWatch que interrompa a instância em execução da função Lambda quando a métrica exceder os limites da API."
      },
      {
        "id": "D",
        "text": "Use o Amazon Kinesis Data Firehose para agrupar as chamadas de API e entregá-las a um bucket do Amazon S3 com uma notificação de evento para invocar a função Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-160",
    "type": "single",
    "stem": "Um desenvolvedor deve analisar problemas de desempenho com aplicativos distribuídos em produção, escritos como funções do AWS Lambda.",
    "ask": "Esses aplicativos Lambda distribuídos invocam outros componentes que os compõem.Como o desenvolvedor deve identificar e solucionar a causa raiz dos problemas de desempenho em produção?",
    "options": [
      {
        "id": "A",
        "text": "Adicione instruções de registro às funções do Lambda e use o Amazon CloudWatch para visualizar os registros."
      },
      {
        "id": "B",
        "text": "Use o AWS CloudTrail e examine os logs."
      },
      {
        "id": "C",
        "text": "Use o AWS X-Ray e examine os segmentos e erros."
      },
      {
        "id": "D",
        "text": "Execute agentes do Amazon Inspector e analise o desempenho."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-161",
    "type": "single",
    "stem": "Um desenvolvedor deseja implantar uma nova versão de uma aplicação do AWS Elastic Beanstalk. Durante a implantação, a aplicação deve manter a capacidade máxima e evitar a interrupção do serviço.",
    "ask": "Além disso, o desenvolvedor deve minimizar o custo dos recursos adicionais que dão suporte à implantação.Qual método de implantação o desenvolvedor deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "De repente"
      },
      {
        "id": "B",
        "text": "Laminação com lote adicional"
      },
      {
        "id": "C",
        "text": "Azul/verde"
      },
      {
        "id": "D",
        "text": "Imutável"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-162",
    "type": "single",
    "stem": "Um desenvolvedor observou um aumento de bugs nas funções do AWS Lambda que uma equipe de desenvolvimento implantou em seu aplicativo Node.js. Para minimizar esses bugs, o desenvolvedor deseja implementar testes automatizados de funções do Lambda em um ambiente que simule de perto o ambiente do Lambda.O desenvolvedor precisa permitir que outros desenvolvedores executem os testes localmente.",
    "ask": "O desenvolvedor também precisa integrar os testes ao pipeline de integração e entrega contínua (CI/CD) da equipe antes da implantação do AWS Cloud Development Kit (AWS CDK).Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie eventos de exemplo com base na documentação do Lambda. Crie scripts de teste automatizados que usem o comando cdk local invoke para invocar as funções do Lambda. Verifique a resposta. Documente os scripts de teste para os outros desenvolvedores da equipe. Atualize o pipeline de CI/CD para executar os scripts de teste."
      },
      {
        "id": "B",
        "text": "Instale um framework de teste unitário que reproduza o ambiente de execução do Lambda. Crie eventos de exemplo com base na documentação do Lambda. Invoque a função do manipulador usando um framework de teste unitário. Verifique a resposta. Documente como executar o framework de teste unitário para os outros desenvolvedores da equipe. Atualize o pipeline de CI/CD para executar o framework de teste unitário."
      },
      {
        "id": "C",
        "text": "Instale a ferramenta CLI do AWS Serverless Application Model (AWS SAM). Use o comando sam local generate-event para gerar eventos de exemplo para os testes automatizados. Crie scripts de teste automatizados que usem o comando sam local invoke para invocar as funções do Lambda. Verifique a resposta. Documente os scripts de teste para os outros desenvolvedores da equipe. Atualize o pipeline de CI/CD para executar os scripts de teste."
      },
      {
        "id": "D",
        "text": "Crie eventos de exemplo com base na documentação do Lambda. Crie um contêiner Docker a partir da imagem base do Node.js para invocar as funções do Lambda. Verifique a resposta. Documente como executar o contêiner Docker para os outros desenvolvedores da equipe. Atualize o pipeline de CI/CD para executar o contêiner Docker."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-163",
    "type": "single",
    "stem": "Um desenvolvedor está solucionando problemas de um aplicativo que usa o Amazon DynamoDB na região us-west-2. O aplicativo está implantado em uma instância do Amazon EC2. O aplicativo requer permissões somente leitura para uma tabela chamada Cars.",
    "ask": "A instância do EC2 possui uma função do IAM anexada que contém a seguinte política do IAM:Quando o aplicativo tenta ler a tabela Cars, ocorre um erro de acesso negado.Como o desenvolvedor pode resolver esse erro?",
    "options": [
      {
        "id": "A",
        "text": "Modifique o recurso de política do IAM para ser “arn:aws:dynamodb:us-west-2:account-id:table/*”."
      },
      {
        "id": "B",
        "text": "Modifique a política do IAM para incluir a ação dynamodb:*."
      },
      {
        "id": "C",
        "text": "Crie uma política de confiança que especifique o principal do serviço EC2. Associe a função à política."
      },
      {
        "id": "D",
        "text": "Crie uma relação de confiança entre a função e dynamodb.amazonaws.com."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-164",
    "type": "single",
    "stem": "Ao usar o AWS Encryption SDK, como o desenvolvedor controla as chaves de criptografia de dados usadas para criptografar dados?",
    "options": [
      {
        "id": "A",
        "text": "O desenvolvedor deve controlar manualmente as chaves de criptografia de dados usadas para cada objeto de dados."
      },
      {
        "id": "B",
        "text": "O SDK criptografa a chave de criptografia de dados e a armazena (criptografada) como parte do texto cifrado retornado."
      },
      {
        "id": "C",
        "text": "O SDK armazena as chaves de criptografia de dados automaticamente no Amazon S3."
      },
      {
        "id": "D",
        "text": "A chave de criptografia de dados é armazenada nos dados do usuário para a instância do EC2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-165",
    "type": "single",
    "stem": "Uma aplicação executada no AWS Lambda requer acesso a objetos específicos altamente confidenciais em um bucket do Amazon S3.",
    "ask": "De acordo com o princípio do privilégio mínimo, uma empresa concede acesso ao bucket do S3 usando apenas credenciais temporárias.Como um desenvolvedor pode configurar o acesso ao bucket do S3 da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Codifique as credenciais necessárias para acessar os objetos S3 no código do aplicativo. Use as credenciais para acessar os objetos S3 necessários."
      },
      {
        "id": "B",
        "text": "Crie uma chave de acesso secreta e um ID de chave de acesso com permissão para acessar o bucket do S3. Armazene a chave e o ID de chave no AWS Secrets Manager. Configure o aplicativo para recuperar o segredo do Secrets Manager e usar as credenciais para acessar os objetos do S3."
      },
      {
        "id": "C",
        "text": "Crie uma função de execução do Lambda. Anexe uma política à função que conceda acesso a objetos específicos no bucket do S3."
      },
      {
        "id": "D",
        "text": "Crie uma chave de acesso secreta e um ID de chave de acesso com permissão para acessar o bucket do S3. Armazene a chave e o ID da chave como variáveis de ambiente no Lambda. Use as variáveis de ambiente para acessar os objetos do S3 necessários."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-166",
    "type": "single",
    "stem": "Um desenvolvedor possui um código armazenado em um bucket do Amazon S3. O código deve ser implantado como uma função do AWS Lambda em várias contas na mesma região da AWS que o bucket do S3.",
    "ask": "Um modelo do AWS CloudFormation executado para cada conta implantará a função do Lambda.Qual é a maneira MAIS segura de permitir que o CloudFormation acesse o código do Lambda no bucket do S3?",
    "options": [
      {
        "id": "A",
        "text": "Conceda à função de serviço CloudFormation as permissões ListBucket e GetObject do S3. Adicione uma política de bucket ao Amazon S3 com o principal \"AWS\": [números de conta]."
      },
      {
        "id": "B",
        "text": "Conceda à função de serviço do CloudFormation a permissão S3 GetObject. Adicione uma política de bucket ao Amazon S3 com o principal \"*\"."
      },
      {
        "id": "C",
        "text": "Use um link baseado em serviço para conceder à função Lambda as permissões S3 ListBucket e GetObject adicionando explicitamente o número da conta do bucket S3 no recurso."
      },
      {
        "id": "D",
        "text": "Use um link baseado em serviço para conceder à função Lambda a permissão S3 GetObject. Adicione um recurso de \"*\" para permitir acesso ao bucket S3."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-167",
    "type": "single",
    "stem": "Um desenvolvedor em uma empresa precisa criar um pequeno aplicativo que faça a mesma chamada de API uma vez por dia, em um horário específico.",
    "ask": "A empresa ainda não possui infraestrutura na Nuvem AWS, mas deseja implementar essa funcionalidade na AWS.Qual solução atende a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Use uma tarefa cron do Kubernetes executada no Amazon Elastic Kubernetes Service (Amazon EKS)."
      },
      {
        "id": "B",
        "text": "Use um trabalho agendado do crontab do Amazon Linux que seja executado no Amazon EC2."
      },
      {
        "id": "C",
        "text": "Use uma função do AWS Lambda que é invocada por um evento agendado do Amazon EventBridge."
      },
      {
        "id": "D",
        "text": "Use um trabalho do AWS Batch que é enviado para uma fila de trabalhos do AWS Batch."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-168",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação sem servidor baseada no AWS Lambda.",
    "ask": "O desenvolvedor inicializa o kit de desenvolvimento de software (SDK) da AWS fora da função do manipulador do Lambda.Qual é o PRINCIPAL benefício dessa ação?",
    "options": [
      {
        "id": "A",
        "text": "Melhora a legibilidade e a convenção estilística"
      },
      {
        "id": "B",
        "text": "Aproveita a reutilização do ambiente de execução"
      },
      {
        "id": "C",
        "text": "Oferece melhor tratamento de erros"
      },
      {
        "id": "D",
        "text": "Cria uma nova instância do SDK para cada invocação"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-169",
    "type": "single",
    "stem": "Uma empresa utiliza o Amazon RDS como banco de dados de back-end para seu aplicativo. Após uma recente campanha de marketing, um aumento repentino nas solicitações de leitura ao banco de dados aumentou a latência na recuperação de dados. A empresa decidiu implementar uma camada de cache na frente do banco de dados.",
    "ask": "O conteúdo armazenado em cache deve ser criptografado e ter alta disponibilidade.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "Amazon ElastiCache para Memcached"
      },
      {
        "id": "C",
        "text": "Amazon ElastiCache para Redis em modo cluster"
      },
      {
        "id": "D",
        "text": "Acelerador Amazon DynamoDB (DAX)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-170",
    "type": "single",
    "stem": "Um desenvolvedor em uma empresa criou recentemente um aplicativo sem servidor para processar e exibir dados de relatórios de negócios. A interface do usuário (IU) do aplicativo permite que os usuários selecionem e iniciem o processamento dos arquivos. A IU exibe uma mensagem quando o resultado está disponível para visualização. O aplicativo usa o AWS Step Functions com funções do AWS Lambda para processar os arquivos. O desenvolvedor usou o Amazon API Gateway e funções do Lambda para criar uma API para dar suporte à IU.A equipe de IU da empresa relata que a solicitação para processar um arquivo frequentemente retorna erros de tempo limite devido ao tamanho ou à complexidade dos arquivos. A equipe de IU deseja que a API forneça uma resposta imediata para que a IU possa exibir uma mensagem enquanto os arquivos estão sendo processados.",
    "ask": "O processo de back-end invocado pela API precisa enviar uma mensagem de e-mail quando o processamento do relatório for concluído.O que o desenvolvedor deve fazer para configurar a API para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Altere a rota do API Gateway para adicionar um cabeçalho X-Amz-Invocation-Type com um valor estático de \"Evento\" na solicitação de integração. Implante o estágio do API Gateway para aplicar as alterações."
      },
      {
        "id": "B",
        "text": "Altere a configuração da função Lambda que implementa a solicitação para processar um arquivo. Configure a idade máxima do evento para que a função Lambda seja executada de forma assíncrona."
      },
      {
        "id": "C",
        "text": "Altere o valor de tempo limite do API Gateway para corresponder ao valor de tempo limite da função Lambda. Implante o estágio do API Gateway para aplicar as alterações."
      },
      {
        "id": "D",
        "text": "Altere a rota do API Gateway para adicionar um cabeçalho X-Amz-Target com o valor estático \"Async\" na solicitação de integração. Implante o estágio do API Gateway para aplicar as alterações."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-171",
    "type": "single",
    "stem": "Um desenvolvedor possui uma aplicação composta por diversas funções diferentes do AWS Lambda. Todas as funções do Lambda utilizam algumas das mesmas dependências. Para evitar problemas de segurança, o desenvolvedor atualiza constantemente as dependências de todas as funções do Lambda.",
    "ask": "O resultado é um esforço duplicado para cada função.Como o desenvolvedor pode manter as dependências das funções do Lambda atualizadas com o MÍNIMO de complexidade adicional?",
    "options": [
      {
        "id": "A",
        "text": "Defina uma janela de manutenção para as funções do Lambda para garantir que as funções recebam cópias atualizadas das dependências."
      },
      {
        "id": "B",
        "text": "Atualize as funções do Lambda para a versão de tempo de execução mais recente."
      },
      {
        "id": "C",
        "text": "Defina uma camada Lambda que contenha todas as dependências compartilhadas."
      },
      {
        "id": "D",
        "text": "Use um repositório do AWS CodeCommit para hospedar as dependências em um local centralizado."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-172",
    "type": "single",
    "stem": "Um aplicativo móvel armazena postagens de blog em uma tabela do Amazon DynamoDB. Milhões de postagens são adicionadas todos os dias, e cada postagem representa um único item na tabela. O aplicativo móvel requer apenas postagens recentes.",
    "ask": "Qualquer postagem com mais de 48 horas pode ser removida.Qual é a maneira MAIS econômica de excluir postagens com mais de 48 horas?",
    "options": [
      {
        "id": "A",
        "text": "Para cada item, adicione um novo atributo do tipo String com um carimbo de data/hora definido como o horário de criação da postagem do blog. Crie um script para encontrar postagens antigas com uma varredura de tabela e remover postagens com mais de 48 horas usando a operação da API BatchWriteItem. Agende uma tarefa cron em uma instância do Amazon EC2 a cada hora para iniciar o script."
      },
      {
        "id": "B",
        "text": "Para cada item, adicione um novo atributo do tipo String com um timestamp definido como o horário de criação da publicação do blog. Crie um script para encontrar publicações antigas com uma varredura de tabela e remover publicações com mais de 48 horas usando a operação da API BatchWriteItem. Coloque o script em uma imagem de contêiner. Agende uma tarefa do Amazon Elastic Container Service (Amazon ECS) no AWS Fargate que invoque o contêiner a cada 5 minutos."
      },
      {
        "id": "C",
        "text": "Para cada item, adicione um novo atributo do tipo Data com um carimbo de data/hora definido como 48 horas após a criação da postagem do blog. Crie um índice secundário global (GSI) que use o novo atributo como chave de classificação. Crie uma função do AWS Lambda que faça referência ao GSI e remova itens expirados usando a operação da API BatchWriteItem. Agende a função com um evento do Amazon CloudWatch a cada minuto."
      },
      {
        "id": "D",
        "text": "Para cada item, adicione um novo atributo do tipo Número com um carimbo de data/hora definido como 48 horas após a criação da postagem do blog. Configure a tabela do DynamoDB com um TTL que faça referência ao novo atributo."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-173",
    "type": "single",
    "stem": "Um desenvolvedor está modificando uma função existente do AWS Lambda. Ao verificar o código, o desenvolvedor observa valores de parâmetros codificados para um nome de usuário, senha, banco de dados, host e porta do Amazon RDS para SQL Server. Há também valores de parâmetros codificados para uma tabela do Amazon DynamoDB, um bucket do Amazon S3 e um tópico do Amazon Simple Notification Service (Amazon SNS).O desenvolvedor deseja armazenar os valores de parâmetros com segurança fora do código, em um formato criptografado, e deseja ativar a rotação das credenciais.",
    "ask": "O desenvolvedor também deseja poder reutilizar os valores de parâmetros de outros aplicativos e atualizá-los sem modificar o código.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie um segredo de banco de dados RDS no AWS Secrets Manager. Defina o nome de usuário, a senha, o banco de dados, o host e a porta. Ative a rotação de segredos. Crie variáveis de ambiente Lambda criptografadas para a tabela do DynamoDB, o bucket do S3 e o tópico do SNS."
      },
      {
        "id": "B",
        "text": "Crie um segredo de banco de dados RDS no AWS Secrets Manager. Defina o nome de usuário, a senha, o banco de dados, o host e a porta. Ative a rotação de segredos. Crie parâmetros SecureString no AWS Systems Manager Parameter Store para a tabela do DynamoDB, o bucket do S3 e o tópico do SNS."
      },
      {
        "id": "C",
        "text": "Crie parâmetros de banco de dados RDS no AWS Systems Manager Parameter Store para nome de usuário, senha, banco de dados, host e porta. Crie variáveis de ambiente Lambda criptografadas para a tabela do DynamoDB, o bucket do S3 e o tópico do SNS. Crie uma função Lambda e defina a lógica para a tarefa de rotação de credenciais. Agende a tarefa de rotação de credenciais no Amazon EventBridge."
      },
      {
        "id": "D",
        "text": "Crie parâmetros de banco de dados RDS no AWS Systems Manager Parameter Store para nome de usuário, senha, banco de dados, host e porta. Armazene a tabela do DynamoDB, o bucket do S3 e o tópico do SNS no Amazon S3. Crie uma função Lambda e defina a lógica para a rotação de credenciais. Invoque a função Lambda conforme uma programação."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-174",
    "type": "single",
    "stem": "Um desenvolvedor acessa o AWS CodeCommit via SSH.",
    "ask": "As chaves SSH configuradas para acessar o AWS CodeCommit estão vinculadas a um usuário com as seguintes permissões:O desenvolvedor precisa criar/excluir branches.Quais permissões específicas do IAM precisam ser adicionadas, com base no princípio do privilégio mínimo?",
    "options": [
      {
        "id": "A",
        "text": "\"codecommit:CreateBranch\"\"codecommit:DeleteBranch\""
      },
      {
        "id": "B",
        "text": "\"codecommit:Put*\""
      },
      {
        "id": "C",
        "text": "\"codecommit:Update*\""
      },
      {
        "id": "D",
        "text": "\"codecommit:*\""
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-175",
    "type": "multi",
    "pick": 2,
    "stem": "Um aplicativo implantado no Amazon EC2 utiliza o Amazon DynamoDB. O aplicativo chama a API REST do DynamoDB.",
    "ask": "Periodicamente, o aplicativo recebe um erro ProvisionedThroughputExceededException ao gravar em uma tabela do DynamoDB.Quais soluções mitigarão esse erro de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Modifique o código do aplicativo para executar o backoff exponencial quando o erro for recebido."
      },
      {
        "id": "B",
        "text": "Modifique o aplicativo para usar os SDKs da AWS para DynamoDB."
      },
      {
        "id": "C",
        "text": "Aumente a taxa de transferência de leitura e gravação da tabela do DynamoDB."
      },
      {
        "id": "D",
        "text": "Crie um cluster do DynamoDB Accelerator (DAX) para a tabela do DynamoDB."
      },
      {
        "id": "E",
        "text": "Crie uma segunda tabela do DynamoDB. Distribua as leituras e gravações entre as duas tabelas."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-176",
    "type": "single",
    "stem": "Quando um desenvolvedor tenta executar um projeto do AWS CodeBuild, ele gera um erro porque o comprimento de todas as variáveis de ambiente excede o limite máximo combinado de caracteres.Qual é a solução recomendada?",
    "options": [
      {
        "id": "A",
        "text": "Adicione o comando export LC_ALL=\"en_US.utf8\" à seção pre_build para garantir a localização POSIX."
      },
      {
        "id": "B",
        "text": "Use o Amazon Cognito para armazenar pares de chave-valor para um grande número de variáveis de ambiente."
      },
      {
        "id": "C",
        "text": "Atualize as configurações do projeto de compilação para usar um bucket do Amazon S3 para um grande número de variáveis de ambiente."
      },
      {
        "id": "D",
        "text": "Use o AWS Systems Manager Parameter Store para armazenar um grande número de variáveis de ambiente."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-177",
    "type": "single",
    "stem": "Uma empresa está expandindo a compatibilidade de seu aplicativo móvel de compartilhamento de fotos para centenas de dispositivos adicionais com dimensões e resoluções de tela exclusivas. As fotos são armazenadas no Amazon S3 em seu formato e resolução originais. A empresa usa uma distribuição do Amazon CloudFront para disponibilizar as fotos.",
    "ask": "O aplicativo inclui a dimensão e a resolução da tela como parâmetros GET em cada solicitação.Um desenvolvedor precisa implementar uma solução que otimize as fotos disponibilizadas em cada dispositivo para reduzir o tempo de carregamento e aumentar a qualidade das fotos.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Use as Operações em Lote do S3 para invocar uma função do AWS Lambda e criar novas variantes das fotos com as dimensões e resoluções necessárias. Crie uma origem dinâmica do CloudFront que mapeie automaticamente a solicitação de cada dispositivo para a variante de foto correspondente."
      },
      {
        "id": "B",
        "text": "Use as Operações em Lote do S3 para invocar uma função do AWS Lambda e criar novas variantes das fotos com as dimensões e resoluções necessárias. Crie uma função Lambda@Edge para encaminhar solicitações para a variante da foto correspondente usando cabeçalhos de solicitação."
      },
      {
        "id": "C",
        "text": "Crie uma função Lambda@Edge que otimize as fotos mediante solicitação e as retorne como resposta. Altere a política de cache TTL do CloudFront para o valor máximo possível."
      },
      {
        "id": "D",
        "text": "Crie uma função Lambda@Edge que otimize as fotos mediante solicitação e as retorne como resposta. Na mesma função, armazene uma cópia das fotos processadas no Amazon S3 para solicitações subsequentes."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-178",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo para negociação de ações. O aplicativo precisa de latência inferior a um milissegundo para processar solicitações de negociação. A empresa usa o Amazon DynamoDB para armazenar todos os dados de negociação usados para processar cada solicitação de negociação.Uma equipe de desenvolvimento realiza testes de carga no aplicativo e constata que o tempo de recuperação de dados é maior do que o esperado.",
    "ask": "A equipe de desenvolvimento precisa de uma solução que reduza o tempo de recuperação de dados com o mínimo esforço possível.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione índices secundários locais (LSIs) para os dados de negociação."
      },
      {
        "id": "B",
        "text": "Armazene os dados de negociação no Amazon S3 e use o S3 Transfer Acceleration."
      },
      {
        "id": "C",
        "text": "Adicione novas tentativas com recuo exponencial para consultas do DynamoDB."
      },
      {
        "id": "D",
        "text": "Use o DynamoDB Accelerator (DAX) para armazenar em cache os dados de negociação."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-179",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está trabalhando em uma aplicação Python executada em instâncias do Amazon EC2.",
    "ask": "O desenvolvedor deseja habilitar o rastreamento de solicitações da aplicação para depurar problemas de desempenho no código.Qual combinação de ações o desenvolvedor deve realizar para atingir esse objetivo?",
    "options": [
      {
        "id": "A",
        "text": "Instale o agente do Amazon CloudWatch nas instâncias do EC2."
      },
      {
        "id": "B",
        "text": "Instale o daemon do AWS X-Ray nas instâncias do EC2."
      },
      {
        "id": "C",
        "text": "Configure o aplicativo para gravar logs no formato JSON em /var/log/cloudwatch."
      },
      {
        "id": "D",
        "text": "Configure o aplicativo para gravar dados de rastreamento em /var/log/xray."
      },
      {
        "id": "E",
        "text": "Instale e configure o AWS X-Ray SDK para Python no aplicativo."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-180",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que é executado como uma série de funções do AWS Lambda.",
    "ask": "Cada função do Lambda recebe dados de um tópico do Amazon Simple Notification Service (Amazon SNS) e os grava em uma instância de banco de dados do Amazon Aurora.Para cumprir uma política de segurança da informação, a empresa deve garantir que todas as funções do Lambda utilizem uma única string de conexão de banco de dados criptografada com segurança para acessar o Aurora.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use a autenticação de banco de dados IAM para Aurora para habilitar conexões seguras de banco de dados para todas as funções do Lambda."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais e leia as credenciais de uma instância criptografada do Amazon RDS DB."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais no AWS Systems Manager Parameter Store como um parâmetro de string seguro."
      },
      {
        "id": "D",
        "text": "Use variáveis de ambiente Lambda com uma chave compartilhada do AWS Key Management Service (AWS KMS) para criptografia."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-181",
    "type": "single",
    "stem": "Um desenvolvedor está solucionando problemas em uma API do Amazon API Gateway.",
    "ask": "Os clientes estão recebendo erros de resposta HTTP 400 ao tentar acessar um endpoint da API.Como o desenvolvedor pode determinar a causa desses erros?",
    "options": [
      {
        "id": "A",
        "text": "Crie um fluxo de entrega do Amazon Kinesis Data Firehose para receber logs de chamadas de API do API Gateway. Configure o Amazon CloudWatch Logs como destino do fluxo de entrega."
      },
      {
        "id": "B",
        "text": "Ative o AWS CloudTrail Insights e crie uma trilha. Especifique o Nome de Recurso da Amazon (ARN) da trilha para o estágio da API."
      },
      {
        "id": "C",
        "text": "Ative o AWS X-Ray para o estágio de API. Crie um grupo de logs do Amazon CloudWatch Logs. Especifique o Nome de Recurso da Amazon (ARN) do grupo de logs para o estágio de API."
      },
      {
        "id": "D",
        "text": "Ative o registro de execução e o registro de acesso no Amazon CloudWatch Logs para o estágio da API. Crie um grupo de logs do CloudWatch Logs. Especifique o Nome de Recurso da Amazon (ARN) do grupo de logs para o estágio da API."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-182",
    "type": "single",
    "stem": "Uma empresa desenvolveu uma aplicação de API na AWS usando o Amazon CloudFront, o Amazon API Gateway e o AWS Lambda. A API recebe no mínimo quatro solicitações por segundo. Um desenvolvedor observa que muitos usuários da API executam a mesma consulta usando o método POST.",
    "ask": "O desenvolvedor deseja armazenar em cache a solicitação POST para otimizar os recursos da API.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o cache do CloudFront. Atualize o aplicativo para retornar conteúdo em cache com base nos cabeçalhos de solicitação padrão."
      },
      {
        "id": "B",
        "text": "Substituir o método de cache no estágio selecionado do API Gateway. Selecione o método POST."
      },
      {
        "id": "C",
        "text": "Salve a resposta da solicitação mais recente no diretório /tmp do Lambda. Atualize a função Lambda para verificar o diretório /tmp."
      },
      {
        "id": "D",
        "text": "Salve a solicitação mais recente no AWS Systems Manager Parameter Store. Modifique a função Lambda para obter a resposta da solicitação mais recente do Parameter Store."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-183",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está desenvolvendo uma aplicação de microsserviços que consiste em diversas funções do AWS Lambda. A equipe de desenvolvimento deseja usar os modelos do AWS Serverless Application Model (AWS SAM) para testar automaticamente as funções do Lambda.",
    "ask": "A equipe de desenvolvimento planeja testar uma pequena porcentagem do tráfego direcionado a novas atualizações antes de se comprometer com a implantação completa da aplicação.Qual combinação de etapas atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Use os comandos da CLI do AWS SAM no AWS CodeDeploy para invocar as funções do Lambda para testar a implantação."
      },
      {
        "id": "B",
        "text": "Declare o EventInvokeConfig nas funções do Lambda nos modelos do AWS SAM com as configurações OnSuccess e OnFailure."
      },
      {
        "id": "C",
        "text": "Habilite implantações graduais por meio de modelos do AWS SAM."
      },
      {
        "id": "D",
        "text": "Defina o tipo de preferência de implantação como Canary10Percent30Minutes. Use ganchos para testar a implantação."
      },
      {
        "id": "E",
        "text": "Defina o tipo de preferência de implantação como Linear10PercentEvery10Minutes. Use ganchos para testar a implantação."
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "DVA-C02-184",
    "type": "single",
    "stem": "Uma empresa está usando o AWS CloudFormation para implantar um aplicativo de duas camadas. O aplicativo usará o Amazon RDS como banco de dados de back-end. A empresa deseja uma solução que gere aleatoriamente a senha do banco de dados durante a implantação.",
    "ask": "A solução também deve rotacionar automaticamente a senha do banco de dados sem exigir alterações no aplicativo.Qual é a solução operacional MAIS eficiente que atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use uma função do AWS Lambda como um recurso personalizado do CloudFormation para gerar e rotacionar a senha."
      },
      {
        "id": "B",
        "text": "Use um recurso do AWS Systems Manager Parameter Store com o tipo de dados SecureString para gerar e girar a senha."
      },
      {
        "id": "C",
        "text": "Use um daemon cron no host do aplicativo para gerar e rotacionar a senha."
      },
      {
        "id": "D",
        "text": "Use um recurso do AWS Secrets Manager para gerar e rotacionar a senha."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-185",
    "type": "single",
    "stem": "Um desenvolvedor foi solicitado a criar uma função do AWS Lambda que seja invocada sempre que forem feitas atualizações em itens de uma tabela do Amazon DynamoDB. A função foi criada e as permissões apropriadas foram adicionadas à função de execução do Lambda.",
    "ask": "Os fluxos do Amazon DynamoDB foram habilitados para a tabela, mas a função ainda não está sendo invocada.Qual opção permitiria que as atualizações da tabela do DynamoDB invocassem a função do Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Altere o valor do parâmetro StreamViewType para NEW_AND_OLD_IMAGES para a tabela do DynamoDB."
      },
      {
        "id": "B",
        "text": "Configure o mapeamento da origem do evento para a função Lambda."
      },
      {
        "id": "C",
        "text": "Mapeie um tópico do Amazon Simple Notification Service (Amazon SNS) para os fluxos do DynamoDB."
      },
      {
        "id": "D",
        "text": "Aumente a configuração de tempo máximo de execução (tempo limite) da função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-186",
    "type": "single",
    "stem": "Um desenvolvedor precisa implantar uma aplicação em execução no AWS Fargate usando o Amazon ECS.",
    "ask": "A aplicação possui variáveis de ambiente que devem ser passadas para um contêiner para que a aplicação seja inicializada.Como as variáveis de ambiente devem ser passadas para o contêiner?",
    "options": [
      {
        "id": "A",
        "text": "Defina uma matriz que inclua as variáveis de ambiente sob o parâmetro environment dentro da definição de serviço."
      },
      {
        "id": "B",
        "text": "Defina uma matriz que inclua as variáveis de ambiente sob o parâmetro environment dentro da definição da tarefa."
      },
      {
        "id": "C",
        "text": "Defina uma matriz que inclua as variáveis de ambiente sob o parâmetro entryPoint dentro da definição da tarefa."
      },
      {
        "id": "D",
        "text": "Defina uma matriz que inclua as variáveis de ambiente sob o parâmetro entryPoint dentro da definição de serviço."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-187",
    "type": "multi",
    "pick": 2,
    "stem": "Uma equipe de desenvolvimento mantém uma aplicação web usando um único modelo do AWS RDS. O modelo define servidores web e um banco de dados do Amazon RDS. A equipe usa o modelo do CloudFormation para implantar a pilha do CloudFormation em diferentes ambientes.Durante uma implantação recente de aplicação, um desenvolvedor fez com que o banco de dados de desenvolvimento principal fosse descartado e recriado. O resultado desse incidente foi a perda de dados.",
    "ask": "A equipe precisa evitar a exclusão acidental do banco de dados no futuro.Quais soluções atenderão a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um atributo CloudFormation DeletionPolicy com o valor Retain ao recurso de banco de dados."
      },
      {
        "id": "B",
        "text": "Atualize a política de pilha do CloudFormation para impedir atualizações no banco de dados."
      },
      {
        "id": "C",
        "text": "Modifique o banco de dados para usar uma implantação Multi-AZ."
      },
      {
        "id": "D",
        "text": "Crie um conjunto de pilhas do CloudFormation para implantações de aplicativos web e bancos de dados."
      },
      {
        "id": "E",
        "text": "Adicione um atributo CloudFormation DeletionPolicy com o valor Retain à pilha."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-188",
    "type": "single",
    "stem": "Um desenvolvedor está armazenando dados confidenciais gerados por uma aplicação no Amazon S3. O desenvolvedor deseja criptografar os dados em repouso.",
    "ask": "Uma política da empresa exige uma trilha de auditoria de quando a chave do AWS Key Management Service (AWS KMS) foi usada e por quem.Qual opção de criptografia atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3)"
      },
      {
        "id": "B",
        "text": "Criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS)"
      },
      {
        "id": "C",
        "text": "Criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C)"
      },
      {
        "id": "D",
        "text": "Criptografia do lado do servidor com chaves autogerenciadas"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-189",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de e-commerce. Para rastrear avaliações de produtos, a equipe de desenvolvimento da empresa utiliza uma tabela do Amazon DynamoDB.Cada registro inclui o seguinte:• Um ID de Avaliação, um identificador universalmente exclusivo (UUID) de 16 dígitos• Um ID de Produto e um ID de Usuário, UUIDs de 16 dígitos que referenciam outras tabelas• Uma Classificação do Produto em uma escala de 1 a 5• Um comentário opcional do usuárioA chave de partição da tabela é o ID da Avaliação.",
    "ask": "A consulta mais realizada na tabela é para encontrar as 10 avaliações com a classificação mais alta para um determinado produto.Qual índice fornecerá a resposta MAIS RÁPIDA para esta consulta?",
    "options": [
      {
        "id": "A",
        "text": "Um índice secundário global (GSI) com ID do produto como chave de partição e classificação do produto como chave de classificação"
      },
      {
        "id": "B",
        "text": "Um índice secundário global (GSI) com ID do produto como chave de partição e ID da revisão como chave de classificação"
      },
      {
        "id": "C",
        "text": "Um índice secundário local (LSI) com ID do produto como chave de partição e Classificação do produto como chave de classificação"
      },
      {
        "id": "D",
        "text": "Um índice secundário local (LSI) com ID de revisão como chave de partição e ID do produto como chave de classificação"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-190",
    "type": "single",
    "stem": "Uma empresa precisa distribuir atualizações de firmware para seus clientes em todo o mundo.Qual serviço permitirá o controle fácil e seguro do acesso aos downloads com o menor custo?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon CloudFront com URLs assinadas para o Amazon S3."
      },
      {
        "id": "B",
        "text": "Crie uma distribuição dedicada do Amazon CloudFront para cada cliente."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudFront com o AWS Lambda@Edge."
      },
      {
        "id": "D",
        "text": "Use o Amazon API Gateway e o AWS Lambda para controlar o acesso a um bucket do S3."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-191",
    "type": "single",
    "stem": "Um desenvolvedor está testando um aplicativo que invoca uma função do AWS Lambda de forma assíncrona.",
    "ask": "Durante a fase de testes, a função do Lambda falha ao ser processada após duas tentativas.Como o desenvolvedor pode solucionar a falha?",
    "options": [
      {
        "id": "A",
        "text": "Configure o registro do AWS CloudTrail para investigar as falhas de invocação."
      },
      {
        "id": "B",
        "text": "Configure Dead Letter Queues enviando eventos ao Amazon SQS para investigação."
      },
      {
        "id": "C",
        "text": "Configure o Amazon Simple Workflow Service para processar quaisquer eventos diretos não processados."
      },
      {
        "id": "D",
        "text": "Configure o AWS Config para processar quaisquer eventos diretos não processados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-192",
    "type": "single",
    "stem": "Uma empresa está migrando seu banco de dados PostgreSQL para a Nuvem AWS. A empresa deseja usar um banco de dados que proteja e rotacione regularmente as credenciais do banco de dados.",
    "ask": "A empresa deseja uma solução que não exija sobrecarga de programação adicional.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Aurora PostgreSQL para o banco de dados. Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ative a rotação."
      },
      {
        "id": "B",
        "text": "Use o Amazon Aurora PostgreSQL para o banco de dados. Armazene as credenciais do banco de dados no AWS Secrets Manager. Ative a rotação."
      },
      {
        "id": "C",
        "text": "Use o Amazon DynamoDB para o banco de dados. Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ative a rotação."
      },
      {
        "id": "D",
        "text": "Use o Amazon DynamoDB para o banco de dados. Armazene as credenciais do banco de dados no AWS Secrets Manager. Ative a rotação."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-193",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo móvel que não exigirá que os usuários façam login.Qual é o método MAIS eficiente para conceder aos usuários acesso aos recursos da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Use um provedor de identidade para autenticar com segurança o aplicativo."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para criar um usuário do IAM quando um usuário acessa o aplicativo."
      },
      {
        "id": "C",
        "text": "Crie credenciais usando o AWS KMS e aplique essas credenciais aos usuários ao usar o aplicativo."
      },
      {
        "id": "D",
        "text": "Use o Amazon Cognito para associar usuários não autenticados a uma função do IAM que tenha acesso limitado aos recursos."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-194",
    "type": "single",
    "stem": "Uma empresa desenvolveu uma nova aplicação sem servidor usando funções do AWS Lambda que será implantada usando a CLI do AWS Serverless Application Model (AWS SAM).Qual etapa o desenvolvedor deve concluir antes de implantar a aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Compacte o aplicativo em um arquivo .zip e carregue-o no AWS Lambda."
      },
      {
        "id": "B",
        "text": "Teste a nova função do AWS Lambda rastreando-a primeiro no AWS X-Ray."
      },
      {
        "id": "C",
        "text": "Empacote o aplicativo sem servidor usando um pacote SAM."
      },
      {
        "id": "D",
        "text": "Crie o ambiente do aplicativo usando o comando eb create my-env."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-195",
    "type": "single",
    "stem": "Uma empresa deseja automatizar parte de seu processo de implantação. Um desenvolvedor precisa automatizar o processo de verificação e exclusão de recursos não utilizados que suportavam pilhas implantadas anteriormente, mas que não são mais utilizados.A empresa possui um aplicativo central que utiliza o AWS Cloud Development Kit (AWS CDK) para gerenciar todas as pilhas de implantação. As pilhas estão distribuídas em várias contas.",
    "ask": "A solução do desenvolvedor deve se integrar da forma mais perfeita possível ao processo de implantação atual.Qual solução atenderá a esses requisitos com a MENOR quantidade de configuração?",
    "options": [
      {
        "id": "A",
        "text": "No aplicativo central do AWS CDK, escreva uma função de manipulador no código que use chamadas do AWS SDK para verificar e excluir recursos não utilizados. Crie um modelo do AWS CloudFormation a partir de um arquivo JSON. Use o modelo para anexar o código da função a uma função do AWS Lambda e para invocá-la quando a pilha de implantação for executada."
      },
      {
        "id": "B",
        "text": "No aplicativo central do AWS CDK, escreva uma função de manipulador no código que utilize chamadas do AWS SDK para verificar e excluir recursos não utilizados. Crie um recurso personalizado do AWS CDK. Use o recurso personalizado para anexar o código da função a uma função do AWS Lambda e para invocá-la quando a pilha de implantação for executada."
      },
      {
        "id": "C",
        "text": "No CDK central da AWS, escreva uma função de manipulador no código que use chamadas do SDK da AWS para verificar e excluir recursos não utilizados. Crie uma API no AWS Amplify. Use a API para anexar o código da função a uma função do AWS Lambda e para invocar a função do Lambda quando a pilha de implantação for executada."
      },
      {
        "id": "D",
        "text": "No console do AWS Lambda, escreva uma função de manipulador no código que use chamadas do AWS SDK para verificar e excluir recursos não utilizados. Crie um recurso personalizado do AWS CDK. Use o recurso personalizado para importar a função do Lambda para a pilha e invocá-la quando a pilha de implantação for executada."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-196",
    "type": "single",
    "stem": "Uma empresa desenvolveu um novo aplicativo na Nuvem AWS. A empresa automatizou o bootstrap de novos recursos com um grupo de Auto Scaling usando modelos do AWS CloudFormation.",
    "ask": "Os scripts de bootstrap contêm dados confidenciais.A empresa precisa de uma solução integrada ao CloudFormation para gerenciar os dados confidenciais nos scripts de bootstrap.Qual solução atenderá a esses requisitos da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Insira os dados confidenciais em um parâmetro do CloudFormation. Criptografe os modelos do CloudFormation usando uma chave do AWS Key Management Service (AWS KMS)."
      },
      {
        "id": "B",
        "text": "Coloque os dados confidenciais em um bucket do Amazon S3. Atualize os modelos do CloudFormation para baixar o objeto do Amazon S3 durante o bootstrap."
      },
      {
        "id": "C",
        "text": "Insira os dados confidenciais no AWS Systems Manager Parameter Store como um parâmetro de string seguro. Atualize os modelos do CloudFormation para usar referências dinâmicas para especificar valores de modelo."
      },
      {
        "id": "D",
        "text": "Insira os dados confidenciais no Amazon Elastic File System (Amazon EFS). Aplique a criptografia EFS após a criação do sistema de arquivos. Atualize os modelos do CloudFormation para recuperar dados do Amazon EFS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-197",
    "type": "single",
    "stem": "Uma empresa precisa configurar credenciais de banco de dados seguras para todos os seus recursos da Nuvem AWS. Os recursos da empresa incluem instâncias de banco de dados do Amazon RDS, clusters do Amazon DocumentDB e instâncias de banco de dados do Amazon Aurora.",
    "ask": "A política de segurança da empresa exige que as credenciais do banco de dados sejam criptografadas em repouso e rotacionadas em intervalos regulares.Qual solução atenderá a esses requisitos com MAIS segurança?",
    "options": [
      {
        "id": "A",
        "text": "Configure a autenticação do banco de dados IAM para acesso baseado em tokens. Gere tokens de usuário para fornecer acesso centralizado a instâncias de banco de dados RDS, clusters do Amazon DocumentDB e instâncias de banco de dados Aurora."
      },
      {
        "id": "B",
        "text": "Crie parâmetros para as credenciais do banco de dados no AWS Systems Manager Parameter Store. Defina o parâmetro Type como SecureString. Configure a rotação automática dos parâmetros."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais de acesso ao banco de dados como um objeto criptografado do Amazon S3 em um bucket do S3. Bloqueie todo o acesso público no bucket do S3. Use a criptografia do lado do servidor do S3 para configurar a rotação automática da chave de criptografia."
      },
      {
        "id": "D",
        "text": "Crie uma função do AWS Lambda usando o modelo SecretsManagerRotationTemplate no console do AWS Secrets Manager. Crie segredos para as credenciais do banco de dados no Secrets Manager. Configure a rotação de segredos de acordo com um cronograma."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-198",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda que realiza consultas a uma instância de banco de dados MySQL do Amazon Aurora.",
    "ask": "Quando o desenvolvedor realiza um teste, a instância de banco de dados exibe um erro devido ao excesso de conexões.Qual solução atenderá a esses requisitos com o MENOR esforço operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma réplica de leitura para a instância do banco de dados. Consulte a instância do banco de dados réplica em vez da instância do banco de dados primária."
      },
      {
        "id": "B",
        "text": "Migre os dados para um banco de dados Amazon DynamoDB."
      },
      {
        "id": "C",
        "text": "Configure a instância do Amazon Aurora MySQL DB para implantação Multi-AZ."
      },
      {
        "id": "D",
        "text": "Crie um proxy no Amazon RDS Proxy. Consulte o proxy em vez da instância do banco de dados."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-199",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma nova API REST usando o Amazon API Gateway e o AWS Lambda.",
    "ask": "A equipe de desenvolvimento testa a API e valida as respostas para os casos de uso conhecidos antes de implantá-la no ambiente de produção.O desenvolvedor deseja disponibilizar a API REST para testes usando o API Gateway localmente.Qual subcomando da AWS Serverless Application Model Command Line Interface (AWS SAM CLI) atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "sam local invoke"
      },
      {
        "id": "B",
        "text": "sam local generate-event"
      },
      {
        "id": "C",
        "text": "sam local start-lambda"
      },
      {
        "id": "D",
        "text": "sam local start-api"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-200",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação serverless na AWS que utiliza uma frota de funções do AWS Lambda com aliases. A empresa publica regularmente novas funções do Lambda usando uma solução de implantação interna. A empresa deseja aprimorar o processo de lançamento e utilizar o redirecionamento de tráfego.",
    "ask": "Uma versão de função recém-publicada deve, inicialmente, ser disponibilizada apenas para uma porcentagem fixa de usuários de produção.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o roteamento no alias da nova função usando um alias ponderado."
      },
      {
        "id": "B",
        "text": "Configure um tipo de implantação canário para Lambda."
      },
      {
        "id": "C",
        "text": "Configure o roteamento nas novas versões usando variáveis de ambiente."
      },
      {
        "id": "D",
        "text": "Configure um tipo de implantação linear para o Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-201",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que armazena dados em instâncias do Amazon RDS. O aplicativo sofre periodicamente picos de tráfego que causam problemas de desempenho. Durante períodos de pico de tráfego, um desenvolvedor percebe uma redução na velocidade de consulta em todas as consultas ao banco de dados.O líder técnico da equipe determina que uma solução de cache multithread e escalável deve ser usada para aliviar o tráfego intenso de leitura.",
    "ask": "A solução precisa melhorar o desempenho.Qual solução atenderá a esses requisitos com a MENOR complexidade?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon ElastiCache para Memcached para descarregar solicitações de leitura do banco de dados principal."
      },
      {
        "id": "B",
        "text": "Replique os dados para o Amazon DynamoDConfigure um cluster do DynamoDB Accelerator (DAX)."
      },
      {
        "id": "C",
        "text": "Configure as instâncias do Amazon RDS para usar a implantação Multi-AZ com uma instância em espera. Descarregue as solicitações de leitura do banco de dados principal para a instância em espera."
      },
      {
        "id": "D",
        "text": "Use o Amazon ElastiCache for Redis para descarregar solicitações de leitura do banco de dados principal."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-202",
    "type": "single",
    "stem": "Um desenvolvedor deve fornecer uma chave de API para uma função do AWS Lambda para autenticação em um sistema de terceiros. A função do Lambda será executada conforme um cronograma.",
    "ask": "O desenvolvedor precisa garantir que a chave de API permaneça criptografada em repouso.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene a chave de API como uma variável de ambiente do Lambda usando uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS)."
      },
      {
        "id": "B",
        "text": "Configure o aplicativo para solicitar que o usuário forneça a senha para a função Lambda na primeira execução."
      },
      {
        "id": "C",
        "text": "Armazene a chave da API como um valor no código do aplicativo."
      },
      {
        "id": "D",
        "text": "Use Lambda@Edge e comunique-se somente pelo protocolo HTTPS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-203",
    "type": "single",
    "stem": "Um departamento de TI usa o Amazon S3 para armazenar imagens sensíveis. Após mais de 1 ano, a empresa move as imagens para um armazenamento de arquivo. A empresa raramente acessa as imagens, mas deseja uma solução de armazenamento que maximize a resiliência.",
    "ask": "O departamento de TI precisa acessar as imagens que foram movidas para o armazenamento de arquivo em até 24 horas.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Use o S3 Standard-Infrequent Access (S3 Standard-IA) para armazenar as imagens. Use o S3 Glacier Deep Archive com recuperação padrão para armazenar e recuperar imagens arquivadas."
      },
      {
        "id": "B",
        "text": "Use o S3 Standard-Infrequent Access (S3 Standard-IA) para armazenar as imagens. Use o S3 Glacier Deep Archive com recuperação em massa para armazenar e recuperar imagens arquivadas."
      },
      {
        "id": "C",
        "text": "Use o S3 Intelligent-Tiering para armazenar as imagens. Use o S3 Glacier Deep Archive com recuperação padrão para armazenar e recuperar imagens arquivadas."
      },
      {
        "id": "D",
        "text": "Use o S3 One Zone-Infrequent Access (S3 One Zone-IA) para armazenar as imagens. Use o S3 Glacier Deep Archive com recuperação em massa para armazenar e recuperar imagens arquivadas."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-204",
    "type": "single",
    "stem": "Um desenvolvedor está construindo uma aplicação serverless usando o AWS Serverless Application Model (AWS SAM). O desenvolvedor está testando a aplicação em um ambiente de desenvolvimento.",
    "ask": "Quando a aplicação estiver quase pronta, o desenvolvedor precisará configurar ambientes adicionais de teste e preparação para uma equipe de garantia de qualidade.O desenvolvedor deseja usar um recurso do AWS SAM para configurar implantações em múltiplos ambientes.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um arquivo de configuração no formato TOML para agrupar as entradas de configuração para cada ambiente. Adicione uma tabela para cada ambiente de teste e preparação. Implante atualizações nos ambientes usando o comando sam deploy e o sinalizador --config-env correspondente a cada ambiente."
      },
      {
        "id": "B",
        "text": "Crie modelos adicionais do AWS SAM para cada ambiente de teste e preparação. Escreva um script de shell personalizado que use o comando sam deploy e o sinalizador --template-file para implantar atualizações nos ambientes."
      },
      {
        "id": "C",
        "text": "Crie um arquivo de configuração do AWS SAM com parâmetros padrão. Execute atualizações nos ambientes de teste e preparação usando o sinalizador --parameter-overrides na CLI do AWS SAM e os parâmetros que as atualizações substituirão."
      },
      {
        "id": "D",
        "text": "Use o modelo AWS SAM existente. Adicione parâmetros adicionais para configurar atributos específicos para a função sem servidor e os recursos de tabela de banco de dados presentes em cada ambiente. Implante atualizações nos ambientes de teste e preparo usando o comando sam deploy."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-205",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma aplicação que processa dados operacionais de dispositivos IoT. Cada dispositivo IoT carrega um arquivo de dados a cada hora para um bucket do Amazon S3. O desenvolvedor deseja processar cada arquivo de dados imediatamente quando este for carregado para o Amazon S3.O desenvolvedor usará uma função do AWS Lambda para processar os arquivos de dados do Amazon S3. A função Lambda é configurada com as informações do bucket do S3 para onde os arquivos são carregados.",
    "ask": "O desenvolvedor deseja configurar a função Lambda para ser invocada imediatamente após o upload de cada arquivo de dados.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma invocação assíncrona à função Lambda. Selecione o bucket S3 como origem."
      },
      {
        "id": "B",
        "text": "Adicione um evento do Amazon EventBridge à função Lambda. Selecione o bucket S3 como origem."
      },
      {
        "id": "C",
        "text": "Adicione um gatilho à função Lambda. Selecione o bucket S3 como origem."
      },
      {
        "id": "D",
        "text": "Adicione uma camada à função Lambda. Selecione o bucket S3 como origem."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-206",
    "type": "single",
    "stem": "Um desenvolvedor está configurando a infraestrutura usando o AWS CloudFormation. Se ocorrer um erro ao provisionar os recursos descritos no modelo do Cloud Formation, os recursos provisionados com sucesso deverão ser preservados.",
    "ask": "O desenvolvedor deve provisionar e atualizar a pilha do CloudFormation usando a CLI da AWS.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma opção de linha de comando --enable-termination-protection ao comando create-stack e ao comando update-stack."
      },
      {
        "id": "B",
        "text": "Adicione uma opção de linha de comando --disable-rollback ao comando create-stack e ao comando update-stack."
      },
      {
        "id": "C",
        "text": "Adicione uma opção de linha de comando --parameters ParameterKey=PreserveResources,ParameterValue=True ao comando create-stack e ao comando update-stack."
      },
      {
        "id": "D",
        "text": "Adicione uma opção de linha de comando --tags Key=PreserveResources,Value=True ao comando create-stack e ao comando update-stack."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-207",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação sem servidor que se conecta a um banco de dados Amazon Aurora PostgreSQL. A aplicação sem servidor consiste em centenas de funções do AWS Lambda. Durante cada expansão horizontal de uma função Lambda, uma nova conexão com o banco de dados é estabelecida, o que aumenta o consumo de recursos do banco de dados.O desenvolvedor precisa diminuir o número de conexões feitas com o banco de dados.",
    "ask": "A solução não deve afetar a escalabilidade das funções Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a simultaneidade provisionada para cada função do Lambda definindo o parâmetro ProvisionedConcurrentExecutions como 10."
      },
      {
        "id": "B",
        "text": "Habilite o gerenciamento de cache do cluster para o Aurora PostgreSQL. Altere a string de conexão de cada função Lambda para apontar para o gerenciamento de cache do cluster."
      },
      {
        "id": "C",
        "text": "Use o Amazon RDS Proxy para criar um pool de conexões para gerenciar as conexões do banco de dados. Altere a string de conexão de cada função do Lambda para fazer referência ao proxy."
      },
      {
        "id": "D",
        "text": "Configure a simultaneidade reservada para cada função Lambda definindo o parâmetro ReservedConcurrentExecutions como 10."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-208",
    "type": "single",
    "stem": "Um desenvolvedor está se preparando para iniciar o desenvolvimento de uma nova versão de um aplicativo. A versão anterior do aplicativo é implantada em um ambiente de produção. O desenvolvedor precisa implantar correções e atualizações na versão atual durante o desenvolvimento da nova versão do aplicativo.",
    "ask": "O código da nova versão do aplicativo é armazenado no AWS CodeCommit.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "A partir do branch principal, crie um branch de recursos para correções de bugs de produção. Crie um segundo branch de recursos a partir do branch principal para o desenvolvimento da nova versão."
      },
      {
        "id": "B",
        "text": "Crie uma tag Git para o código que está atualmente implantado em produção. Crie uma tag Git para o desenvolvimento da nova versão. Envie as duas tags para o repositório do CodeCommit."
      },
      {
        "id": "C",
        "text": "A partir da ramificação principal, crie uma ramificação do código que está atualmente implantado em produção. Aplique uma política do IAM que garanta que nenhum outro usuário possa enviar ou mesclar para a ramificação."
      },
      {
        "id": "D",
        "text": "Crie um novo repositório CodeCommit para o desenvolvimento da nova versão do aplicativo. Crie uma tag Git para o desenvolvimento da nova versão."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-209",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma pilha do AWS CloudFormation. A pilha contém recursos do IAM com nomes personalizados.",
    "ask": "Ao tentar implantar a pilha, o desenvolvedor recebe um erro \"InsufficientCapabilities\".O que o desenvolvedor deve fazer para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Especifique o recurso CAPABILITY_AUTO_EXPAND na pilha do CloudFormation."
      },
      {
        "id": "B",
        "text": "Use uma função de administrador para implantar recursos do IAM com o CloudFormation."
      },
      {
        "id": "C",
        "text": "Especifique o recurso CAPABILITY_IAM na pilha do CloudFormation."
      },
      {
        "id": "D",
        "text": "Especifique o recurso CAPABILITY_NAMED_IAM na pilha do CloudFormation."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-210",
    "type": "single",
    "stem": "Uma empresa usa o Amazon API Gateway para expor um conjunto de APIs aos clientes. As APIs têm o cache habilitado no API Gateway.",
    "ask": "Os clientes precisam de uma maneira de invalidar o cache de cada API ao testá-la.O que um desenvolvedor deve fazer para que os clientes possam invalidar o cache da API?",
    "options": [
      {
        "id": "A",
        "text": "Peça aos clientes que usem credenciais da AWS para chamar a operação da API InvalidateCache."
      },
      {
        "id": "B",
        "text": "Anexe uma política InvalidateCache à função de execução do IAM que os clientes usam para invocar a API. Peça aos clientes que enviem uma solicitação contendo o cabeçalho HTTP Cache-Control:max-age=0 ao fazerem uma chamada à API."
      },
      {
        "id": "C",
        "text": "Peça aos clientes que usem a classe AWS SDK API Gateway para invocar a operação da API InvalidateCache."
      },
      {
        "id": "D",
        "text": "Anexe uma política InvalidateCache à função de execução do IAM que os clientes usam para invocar a API. Peça aos clientes que adicionem o parâmetro de string de consulta INVALIDATE_CACHE ao fazerem uma chamada à API."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-211",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que gerará e exportará um arquivo. A função requer 100 MB de armazenamento temporário para arquivos temporários durante a execução.",
    "ask": "Esses arquivos não serão mais necessários após a conclusão da função.Como o desenvolvedor pode lidar com os arquivos temporários da forma mais eficiente possível?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os arquivos no Amazon Elastic Block Store (Amazon EBS) e exclua os arquivos no final da função Lambda."
      },
      {
        "id": "B",
        "text": "Copie os arquivos para o Amazon Elastic File System (Amazon EFS) e exclua os arquivos no final da função Lambda."
      },
      {
        "id": "C",
        "text": "Armazene os arquivos no diretório /tmp e exclua os arquivos no final da função Lambda."
      },
      {
        "id": "D",
        "text": "Copie os arquivos para um bucket do Amazon S3 com uma política de ciclo de vida para excluir os arquivos."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-212",
    "type": "single",
    "stem": "Uma empresa utiliza o Amazon DynamoDB como repositório de dados para seu sistema de gerenciamento de pedidos. O aplicativo front-end da empresa armazena pedidos em uma tabela do DynamoDB. A tabela do DynamoDB está configurada para enviar eventos de alteração para um fluxo do DynamoDB. A empresa utiliza uma função do AWS Lambda para registrar e processar os pedidos recebidos com base nos dados do fluxo do DynamoDB.Uma análise operacional revela que a quantidade de pedidos recebidos às vezes é definida como 0.",
    "ask": "Um desenvolvedor precisa criar um painel que mostre quantos clientes exclusivos esse problema afeta a cada dia.O que o desenvolvedor deve fazer para implementar o painel?",
    "options": [
      {
        "id": "A",
        "text": "Conceda permissões de função de execução à função Lambda para enviar logs para o Amazon CloudWatch Logs. Implemente uma consulta do CloudWatch Logs Insights que selecione o número de clientes únicos para pedidos com quantidade igual a 0 e agrupe os resultados em períodos de 1 dia. Adicione a consulta do CloudWatch Logs Insights a um painel do CloudWatch."
      },
      {
        "id": "B",
        "text": "Use o Amazon Athena para consultar os logs da API do AWS CloudTrail em busca de chamadas de API. Implemente uma consulta do Athena que selecione o número de clientes únicos para pedidos com quantidade igual a 0 e agrupe os resultados em períodos de 1 dia. Adicione a consulta do Athena a um painel do Amazon CloudWatch."
      },
      {
        "id": "C",
        "text": "Configure a função Lambda para enviar eventos ao Amazon EventBridge. Crie uma regra do EventBridge que agrupe o número de clientes únicos para pedidos com quantidade de pedido igual a 0 em períodos de 1 dia. Adicione um painel do CloudWatch como alvo da regra."
      },
      {
        "id": "D",
        "text": "Ative métricas personalizadas do Amazon CloudWatch para o fluxo do DynamoDB da tabela do DynamoDB. Crie um alarme do CloudWatch que agrupe o número de clientes únicos para pedidos com quantidade igual a 0 em períodos de 1 dia. Adicione o alarme do CloudWatch a um painel do CloudWatch."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-213",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor precisa solucionar problemas de uma função do AWS Lambda em um ambiente de desenvolvimento. A função do Lambda está configurada no modo VPC e precisa se conectar a uma instância de banco de dados existente do Amazon RDS para SQL Server.",
    "ask": "A instância de banco de dados é implantada em uma sub-rede privada e aceita conexões usando a porta 1433.Quando o desenvolvedor testa a função, ela relata um erro ao tentar se conectar ao banco de dados.Qual combinação de etapas o desenvolvedor deve seguir para diagnosticar esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Verifique se o grupo de segurança da função tem acesso de saída na porta 1433 para o grupo de segurança da instância de banco de dados. Verifique se o grupo de segurança da instância de banco de dados tem acesso de entrada na porta 1433 do grupo de segurança da função."
      },
      {
        "id": "B",
        "text": "Verifique se o grupo de segurança da função tem acesso de entrada na porta 1433 do grupo de segurança da instância do banco de dados. Verifique se o grupo de segurança da instância do banco de dados tem acesso de saída na porta 1433 para o grupo de segurança da função."
      },
      {
        "id": "C",
        "text": "Verifique se a VPC está configurada para um gateway NAT. Verifique se a instância do banco de dados tem a opção de acesso público ativada."
      },
      {
        "id": "D",
        "text": "Verifique se as permissões de função de execução da função incluem rds:DescribeDBInstances, rds:ModifyDBInstance e rds:DescribeDBSecurityGroups para a instância do banco de dados."
      },
      {
        "id": "E",
        "text": "Verifique se as permissões de função de execução da função incluem ec2:CreateNetworkInterface, ec2:DescribeNetworkInterfaces e ec2:DeleteNetworkInterface."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "DVA-C02-214",
    "type": "single",
    "stem": "Um desenvolvedor precisa iniciar uma nova instância do Amazon EC2 usando a CLI da AWS.Qual comando da CLI da AWS o desenvolvedor deve usar para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "instância do pacote aws ec2"
      },
      {
        "id": "B",
        "text": "instâncias de inicialização do AWS EC2"
      },
      {
        "id": "C",
        "text": "aws ec2 confirm-product-instance"
      },
      {
        "id": "D",
        "text": "instâncias de execução do AWS EC2"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-215",
    "type": "single",
    "stem": "Um desenvolvedor precisa gerenciar a infraestrutura da AWS como código e deve ser capaz de implantar várias cópias idênticas da infraestrutura, realizar alterações e reverter para versões anteriores.Qual abordagem atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use relatórios de alocação de custos e o AWS OpsWorks para implantar e gerenciar a infraestrutura."
      },
      {
        "id": "B",
        "text": "Use métricas e alertas do Amazon CloudWatch junto com marcação de recursos para implantar e gerenciar a infraestrutura."
      },
      {
        "id": "C",
        "text": "Use o AWS Elastic Beanstalk e o AWS CodeCommit para implantar e gerenciar a infraestrutura."
      },
      {
        "id": "D",
        "text": "Use o AWS CloudFormation e o AWS CodeCommit para implantar e gerenciar a infraestrutura."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-216",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma função do AWS Lambda que acessa o Amazon DynamoDB. A função Lambda deve recuperar um item e atualizar alguns de seus atributos, ou criar o item se ele não existir.",
    "ask": "A função Lambda tem acesso à chave primária.Quais permissões do IAM o desenvolvedor deve solicitar para que a função Lambda alcance essa funcionalidade?",
    "options": [
      {
        "id": "A",
        "text": "dynamodb:DeleleItemdynamodb:GetItemdynamodb:PutItem"
      },
      {
        "id": "B",
        "text": "dynamodb:UpdateItemdynamodb:GetItemdynamodb:DescribeTable"
      },
      {
        "id": "C",
        "text": "dynamodb: Obter registrosdynamodb: Colocar itemdynamodb: Atualizar tabela"
      },
      {
        "id": "D",
        "text": "dynamodb:UpdateItemdynamodb:GetItemdynamodb:PutItem"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-217",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação de mercado que armazena dados de preços no Amazon DynamoDB com o Amazon ElastiCache como front-end. Os preços dos itens no mercado mudam com frequência.",
    "ask": "Os vendedores começaram a reclamar que, após atualizarem o preço de um item, o preço não muda na listagem do produto.O que pode estar causando esse problema?",
    "options": [
      {
        "id": "A",
        "text": "O cache não é invalidado quando o preço do item é alterado."
      },
      {
        "id": "B",
        "text": "O preço do item está sendo recuperado usando um cluster ElastiCache de gravação."
      },
      {
        "id": "C",
        "text": "A tabela do DynamoDB foi provisionada com capacidade de leitura insuficiente."
      },
      {
        "id": "D",
        "text": "A tabela do DynamoDB foi provisionada com capacidade de gravação insuficiente."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-218",
    "type": "single",
    "stem": "Uma empresa exige que todos os aplicativos em execução no Amazon EC2 usem funções do IAM para obter acesso aos serviços da AWS. Um desenvolvedor está modificando um aplicativo que atualmente depende de chaves de acesso de usuário do IAM armazenadas em variáveis de ambiente para acessar tabelas do Amazon DynamoDB usando o boto, o SDK da AWS para Python.O desenvolvedor associou uma função com as mesmas permissões do usuário do IAM à instância do EC2 e, em seguida, excluiu o usuário do IAM. Quando o aplicativo foi reiniciado, as mensagens \"AWS AccessDeniedException\" começaram a aparecer nos logs do aplicativo.",
    "ask": "O desenvolvedor conseguiu usar sua conta pessoal no servidor para executar comandos da API do DynamoDB usando a CLI da AWS.Qual é a causa MAIS provável da exceção?",
    "options": [
      {
        "id": "A",
        "text": "As políticas do IAM podem levar alguns minutos para serem propagadas aos recursos."
      },
      {
        "id": "B",
        "text": "Credenciais de variáveis de ambiente desabilitadas ainda estão sendo usadas pelo aplicativo."
      },
      {
        "id": "C",
        "text": "O AWS SDK não oferece suporte a credenciais obtidas usando uma função de instância."
      },
      {
        "id": "D",
        "text": "O grupo de segurança da instância não permite acesso a http://169.254.169.254."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-219",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo existente com credenciais de banco de dados codificadas. Um desenvolvedor precisa modificar o aplicativo existente. O aplicativo está implantado em duas regiões da AWS com uma configuração de failover ativo-passivo para atender à estratégia de recuperação de desastres da empresa.O desenvolvedor precisa de uma solução para armazenar as credenciais fora do código.",
    "ask": "A solução deve estar em conformidade com a estratégia de recuperação de desastres da empresa.Qual solução atenderá a esses requisitos da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais no AWS Secrets Manager na região primária. Habilite a replicação de segredos para a região secundária. Atualize o aplicativo para usar o Amazon Resource Name (ARN) com base na região."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais no AWS Systems Manager Parameter Store na região primária. Habilite a replicação de parâmetros para a região secundária. Atualize o aplicativo para usar o Amazon Resource Name (ARN) com base na região."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais em um arquivo de configuração. Carregue o arquivo de configuração em um bucket do S3 na região primária. Habilite a Replicação Entre Regiões (CRR) em um bucket do S3 na região secundária. Atualize o aplicativo para acessar o arquivo de configuração do bucket do S3, com base na região."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais em um arquivo de configuração. Carregue o arquivo de configuração em um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Atualize o aplicativo para usar os endpoints regionais do sistema de arquivos do Amazon EFS para acessar o arquivo de configuração nas regiões primária e secundária."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-220",
    "type": "single",
    "stem": "Um desenvolvedor está recebendo erros HTTP 400: ThrottlingException intermitentemente ao chamar a API do Amazon CloudWatch.",
    "ask": "Quando uma chamada falha, nenhum dado é recuperado.Qual prática recomendada deve ser aplicada primeiro para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Entre em contato com o Suporte da AWS para obter um aumento de limite."
      },
      {
        "id": "B",
        "text": "Use a AWS CLI para obter as métricas."
      },
      {
        "id": "C",
        "text": "Analise os aplicativos e remova a chamada de API."
      },
      {
        "id": "D",
        "text": "Repita a chamada com recuo exponencial."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-221",
    "type": "single",
    "stem": "Uma aplicação precisa usar o endereço IP do cliente em seu processamento. A aplicação foi movida para a AWS e colocada atrás de um Balanceador de Carga de Aplicação (ALB). No entanto, todos os endereços IP do cliente agora parecem ser os mesmos.",
    "ask": "A aplicação deve manter a capacidade de escalar horizontalmente.Com base nesse cenário, qual é a solução MAIS econômica para esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Remova o aplicativo do ALB. Exclua o ALB e altere o Amazon Route 53 para direcionar o tráfego para a instância que executa o aplicativo."
      },
      {
        "id": "B",
        "text": "Remova o aplicativo do AL. Crie um Balanceador de Carga Clássico em seu lugar. Direcione o tráfego para o aplicativo usando o protocolo HTTP."
      },
      {
        "id": "C",
        "text": "Altere o código do aplicativo para inspecionar o cabeçalho X-Forwarded-For. Certifique-se de que o código funcione corretamente se uma lista de endereços IP for passada no cabeçalho."
      },
      {
        "id": "D",
        "text": "Altere o código do aplicativo para inspecionar um cabeçalho personalizado. Altere o código do cliente para passar o endereço IP no cabeçalho personalizado."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-222",
    "type": "single",
    "stem": "Um desenvolvedor está projetando um aplicativo sem servidor que os clientes usam para selecionar assentos para um local de concerto. Os clientes enviam as solicitações de ingressos para uma API do Amazon API Gateway com uma função do AWS Lambda que reconhece o pedido e gera um ID de pedido. O aplicativo inclui duas funções Lambda adicionais: uma para gerenciamento de estoque e outra para processamento de pagamento. Essas duas funções Lambda são executadas em paralelo e gravam o pedido em uma tabela do Amazon Dynamo DB.O aplicativo deve fornecer assentos aos clientes de acordo com os seguintes requisitos. Se um assento for vendido acidentalmente mais de uma vez, o primeiro pedido recebido pelo aplicativo deve obtê-lo. Nesses casos, o aplicativo deve processar o pagamento apenas do primeiro pedido. No entanto, se o primeiro pedido for rejeitado durante o processamento do pagamento, o segundo pedido deve obter o assento.",
    "ask": "Nesses casos, o aplicativo deve processar o pagamento do segundo pedido.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Envie o ID do pedido para um tópico FIFO do Amazon Simple Notification Service (Amazon SNS) que se espalha para uma fila FIFO do Amazon Simple Queue Service (Amazon SQS) para gerenciamento de estoque e outra fila FIFO do SQS para processamento de pagamento."
      },
      {
        "id": "B",
        "text": "Altere a função Lambda que gera o ID do pedido para iniciar a função Lambda para gerenciamento de estoque. Em seguida, inicie a função Lambda para processamento de pagamentos."
      },
      {
        "id": "C",
        "text": "Envie o ID do pedido para um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva as funções do Lambda para gerenciamento de estoque e processamento de pagamentos no tópico."
      },
      {
        "id": "D",
        "text": "Entregue o ID do pedido a uma fila do Amazon Simple Queue Service (Amazon SQS). Configure as funções do Lambda para gerenciamento de estoque e processamento de pagamentos para consultar a fila."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-223",
    "type": "single",
    "stem": "Um aplicativo usa o AWS X-Ray para gerar uma grande quantidade de dados de rastreamento por hora.",
    "ask": "Um desenvolvedor deseja usar expressões de filtro para limitar os resultados retornados por meio de atributos personalizados especificados pelo usuário.Como o desenvolvedor deve usar expressões de filtro para filtrar os resultados no X-Ray?",
    "options": [
      {
        "id": "A",
        "text": "Adicione atributos personalizados como anotações no documento do segmento."
      },
      {
        "id": "B",
        "text": "Adicione atributos personalizados como metadados no documento do segmento."
      },
      {
        "id": "C",
        "text": "Adicione atributos personalizados como novos campos de segmento no documento de segmento."
      },
      {
        "id": "D",
        "text": "Crie novas regras de amostragem baseadas em atributos personalizados."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-224",
    "type": "single",
    "stem": "Uma aplicação web está usando o Amazon Kinesis Data Streams para dados de fluxo de cliques que podem não ser consumidos por até 12 horas.Como o desenvolvedor pode implementar criptografia em repouso para dados dentro do Kinesis Data Streams?",
    "options": [
      {
        "id": "A",
        "text": "Habilite conexões SSL para o Kinesis."
      },
      {
        "id": "B",
        "text": "Use a biblioteca de consumidores do Amazon Kinesis."
      },
      {
        "id": "C",
        "text": "Criptografe os dados quando estiverem em repouso com uma função Lambda."
      },
      {
        "id": "D",
        "text": "Habilite a criptografia do lado do servidor no Kinesis Data Streams."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-225",
    "type": "single",
    "stem": "Uma aplicação está processando milhões de eventos em tempo real recebidos por meio de uma API.Qual serviço poderia ser usado para permitir que vários consumidores processassem os dados simultaneamente e com o MELHOR custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SNS com fanout para uma fila SQS para cada aplicativo"
      },
      {
        "id": "B",
        "text": "Amazon SNS com fanout para uma fila FIFO (primeiro a entrar, primeiro a sair) SQS para cada aplicativo"
      },
      {
        "id": "C",
        "text": "Mangueira de incêndio Amazon Kinesis"
      },
      {
        "id": "D",
        "text": "Fluxos de dados do Amazon Kinesis"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-226",
    "type": "single",
    "stem": "Dado o seguinte modelo do AWS CloudFormation:Qual é a maneira MAIS eficiente de referenciar o novo bucket do Amazon S3 de outro modelo do AWS CloudFormation?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma declaração Export à seção Saídas do modelo original e use ImportValue em outros modelos."
      },
      {
        "id": "B",
        "text": "Adicione Exported: true ao Content.Bucket no modelo original e use ImportResource em outros modelos."
      },
      {
        "id": "C",
        "text": "Crie um recurso personalizado do AWS CloudFormation que obtenha o nome do bucket do recurso ContentBucket da primeira pilha."
      },
      {
        "id": "D",
        "text": "Use Fn::Include para incluir o modelo existente em outros modelos e usar o recurso ContentBucket diretamente."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-227",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor criou uma aplicação que insere dados em uma tabela do Amazon DynamoDB. A tabela está configurada para usar capacidade provisionada. A aplicação está implantada em uma instância nano expansível do Amazon EC2.",
    "ask": "Os logs da aplicação mostram que a aplicação está falhando devido a um erro ProvisionedThroughputExceededException.Quais ações o desenvolvedor deve tomar para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Mova o aplicativo para uma instância EC2 maior."
      },
      {
        "id": "B",
        "text": "Aumente o número de unidades de capacidade de leitura (RCUs) provisionadas para a tabela do DynamoDB."
      },
      {
        "id": "C",
        "text": "Reduza a frequência de solicitações ao DynamoDB implementando o backoff exponencial."
      },
      {
        "id": "D",
        "text": "Aumente a frequência de solicitações ao DynamoDB diminuindo o atraso de nova tentativa."
      },
      {
        "id": "E",
        "text": "Altere o modo de capacidade da tabela do DynamoDB de provisionado para sob demanda."
      }
    ],
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": "DVA-C02-228",
    "type": "single",
    "stem": "Uma empresa está organizando um workshop para usuários externos e deseja compartilhar os documentos de referência com eles por 7 dias.",
    "ask": "A empresa armazena os documentos de referência em um bucket do Amazon S3 de sua propriedade.Qual é a maneira MAIS segura de compartilhar os documentos com os usuários externos?",
    "options": [
      {
        "id": "A",
        "text": "Use URLs predefinidas do S3 para compartilhar os documentos com usuários externos. Defina um prazo de validade de 7 dias."
      },
      {
        "id": "B",
        "text": "Mova os documentos para uma pasta do Amazon WorkDocs. Compartilhe os links da pasta WorkDocs com os usuários externos."
      },
      {
        "id": "C",
        "text": "Crie usuários temporários do IAM com acesso somente leitura ao bucket do S3. Compartilhe as chaves de acesso com os usuários externos. Expire as credenciais após 7 dias."
      },
      {
        "id": "D",
        "text": "Crie uma função com acesso somente leitura ao bucket do S3. Compartilhe o Nome de Recurso da Amazon (ARN) dessa função com os usuários externos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-229",
    "type": "single",
    "stem": "Um desenvolvedor planeja usar um Amazon API Gateway e o AWS Lambda para fornecer uma API REST.",
    "ask": "O desenvolvedor terá três ambientes distintos para gerenciar: desenvolvimento, teste e produção.Como a aplicação deve ser implantada, minimizando o número de recursos a serem gerenciados?",
    "options": [
      {
        "id": "A",
        "text": "Crie um API Gateway separado e uma função Lambda separada para cada ambiente na mesma região."
      },
      {
        "id": "B",
        "text": "Atribua uma região para cada ambiente e implante o API Gateway e o Lambda em cada região."
      },
      {
        "id": "C",
        "text": "Crie um API Gateway com vários estágios com uma função Lambda com vários aliases."
      },
      {
        "id": "D",
        "text": "Crie um API Gateway e uma função Lambda e use um parâmetro REST para identificar o ambiente."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-230",
    "type": "single",
    "stem": "Um desenvolvedor registrou uma função do AWS Lambda como destino para um Application Load Balancer (ALB) usando um comando CLI.",
    "ask": "No entanto, a função do Lambda não está sendo invocada quando o cliente envia solicitações pelo ALB.Por que a função do Lambda não está sendo invocada?",
    "options": [
      {
        "id": "A",
        "text": "Uma função Lambda não pode ser registrada como um alvo para um ALB."
      },
      {
        "id": "B",
        "text": "Uma função Lambda pode ser registrada com um ALB usando somente o AWS Management Console."
      },
      {
        "id": "C",
        "text": "As permissões para invocar a função Lambda estão faltando."
      },
      {
        "id": "D",
        "text": "Cross-zone não está habilitado no ALB."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-231",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que se conectará a uma instância do Amazon RDS para MySQL. O desenvolvedor deseja armazenar as credenciais do banco de dados.",
    "ask": "As credenciais do banco de dados precisam ser criptografadas e a senha do banco de dados precisa ser rotacionada automaticamente.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais do banco de dados como variáveis de ambiente para a função Lambda. Configure as variáveis de ambiente para rotação automática."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais do banco de dados no AWS Secrets Manager. Configure a rotação gerenciada nas credenciais do banco de dados."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store como parâmetros de string seguros. Configure a rotação gerenciada dos parâmetros."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais do banco de dados no parâmetro X-Amz-Security-Token. Configure a rotação gerenciada no parâmetro."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-232",
    "type": "single",
    "stem": "Um desenvolvedor deseja reduzir os riscos ao implantar uma nova versão de uma função existente do AWS Lambda.",
    "ask": "Para testar a função do Lambda, o desenvolvedor precisa dividir o tráfego entre a versão existente e a nova versão da função do Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma política de roteamento ponderada no Amazon Route 53. Associe as versões da função Lambda à política de roteamento ponderada."
      },
      {
        "id": "B",
        "text": "Crie um alias de função. Configure o alias para dividir o tráfego entre as duas versões da função Lambda."
      },
      {
        "id": "C",
        "text": "Crie um Application Load Balancer (ALB) que use a função Lambda como destino. Configure o ALB para dividir o tráfego entre as duas versões da função Lambda."
      },
      {
        "id": "D",
        "text": "Crie a nova versão da função Lambda como uma camada Lambda na versão existente. Configure a função para dividir o tráfego entre as duas camadas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-233",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor criou uma função grande do AWS Lambda. A implantação da função está falhando devido a um erro InvalidParameterValueException.",
    "ask": "A mensagem de erro indica que o tamanho descompactado da função excede o valor máximo suportado.Quais ações o desenvolvedor pode tomar para resolver esse erro?",
    "options": [
      {
        "id": "A",
        "text": "Envie uma solicitação de aumento de cota ao Suporte da AWS para aumentar a função para o tamanho necessário."
      },
      {
        "id": "B",
        "text": "Use um algoritmo de compressão que seja mais eficiente que o ZIP."
      },
      {
        "id": "C",
        "text": "Divida a função em várias funções menores."
      },
      {
        "id": "D",
        "text": "Compacte o arquivo .zip duas vezes para compactá-lo ainda mais."
      },
      {
        "id": "E",
        "text": "Mova bibliotecas comuns, dependências de funções e tempos de execução personalizados para camadas do Lambda."
      }
    ],
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": "DVA-C02-234",
    "type": "single",
    "stem": "Um desenvolvedor está solucionando problemas de um aplicativo em um ambiente de integração. No aplicativo, uma fila do Amazon Simple Queue Service (Amazon SQS) consome mensagens e, em seguida, uma função do AWS Lambda as processa. A função do Lambda transforma as mensagens e faz uma chamada de API para um serviço de terceiros.Houve um aumento no uso do aplicativo. A API de terceiros frequentemente retorna a mensagem de erro HTTP 429 \"Too Many Requests\".",
    "ask": "A mensagem de erro impede que um número significativo de mensagens seja processado com sucesso.Como o desenvolvedor pode resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a configuração do tamanho do lote da origem do evento SQS."
      },
      {
        "id": "B",
        "text": "Configure a simultaneidade provisionada para a função Lambda com base nos limites de taxa documentados da API de terceiros."
      },
      {
        "id": "C",
        "text": "Aumente as tentativas de repetição e a idade máxima do evento na configuração assíncrona da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a simultaneidade máxima na origem do evento SQS com base nos limites de taxa documentados do serviço de terceiros."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-235",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de três camadas implantado no Amazon Elastic Container Service (Amazon ECS). O aplicativo utiliza uma instância de banco de dados do Amazon RDS para MySQL. O aplicativo realiza mais leituras do que gravações no banco de dados.Durante os períodos de pico de uso, o desempenho do aplicativo diminui.",
    "ask": "Quando essa queda de desempenho ocorre, a métrica ReadLatency da instância de banco de dados no Amazon CloudWatch aumenta repentinamente.Como um desenvolvedor deve modificar o aplicativo para melhorar o desempenho?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon ElastiCache para armazenar em cache os resultados da consulta."
      },
      {
        "id": "B",
        "text": "Dimensione o cluster do ECS para conter mais instâncias do ECS."
      },
      {
        "id": "C",
        "text": "Adicione unidades de capacidade de leitura (RCUs) à instância do banco de dados."
      },
      {
        "id": "D",
        "text": "Modifique a definição da tarefa do ECS para aumentar a memória da tarefa."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-236",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo web online que inclui um catálogo de produtos. O catálogo é armazenado em um bucket do Amazon S3 denominado DOC-EXAMPLE-BUCKET.",
    "ask": "O aplicativo deve ser capaz de listar os objetos no bucket do S3 e baixar objetos por meio de uma política do IAM.Qual política permite acesso MÍNIMO para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:GetObject\"],\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"\n    }\n  ]\n}"
      },
      {
        "id": "B",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:*\"],\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"\n    }\n  ]\n}"
      },
      {
        "id": "C",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:GetObject\", \"s3:PutObject\", \"s3:DeleteObject\"],\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"\n    }\n  ]\n}"
      },
      {
        "id": "D",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET\"\n    },\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": [\"s3:GetObject\"],\n      \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"\n    }\n  ]\n}"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-237",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação para criptografar arquivos fora da AWS antes de carregá-los em um bucket do Amazon S3.",
    "ask": "A criptografia deve ser simétrica e realizada dentro da aplicação.Como o desenvolvedor pode implementar a criptografia na aplicação para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma chave de dados no AWS Key Management Service (AWS KMS). Use o AWS Encryption SDK para criptografar os arquivos."
      },
      {
        "id": "B",
        "text": "Crie uma chave de código de autenticação de mensagem baseada em hash (HMAC) no AWS Key Management Service (AWS KMS). Use o AWS Encryption SDK para criptografar os arquivos."
      },
      {
        "id": "C",
        "text": "Crie um par de chaves de dados no AWS Key Management Service (AWS KMS). Use a AWS CLI para criptografar os arquivos."
      },
      {
        "id": "D",
        "text": "Crie uma chave de dados no AWS Key Management Service (AWS KMS). Use a AWS CLI para criptografar os arquivos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-238",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma aplicação implantada em uma instância do Amazon EC2.",
    "ask": "O desenvolvedor precisa de uma solução que transfira arquivos da aplicação para um bucket do Amazon S3 com segurança.O que o desenvolvedor deve fazer para atender a esses requisitos da maneira MAIS segura possível?",
    "options": [
      {
        "id": "A",
        "text": "Crie um usuário do IAM. Crie uma chave de acesso para o usuário do IAM. Armazene a chave de acesso nas variáveis de ambiente do aplicativo."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM. Crie uma chave de acesso para a função do IAM. Armazene a chave de acesso nas variáveis de ambiente do aplicativo."
      },
      {
        "id": "C",
        "text": "Crie uma função do IAM. Configure a função do IAM para acessar as chamadas de API específicas do Amazon S3 exigidas pelo aplicativo. Associe a função do IAM à instância do EC2."
      },
      {
        "id": "D",
        "text": "Configure uma política de bucket do S3 para o bucket do S3. Configure a política de bucket do S3 para permitir acesso ao ID da instância do EC2."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-239",
    "type": "single",
    "stem": "Um desenvolvedor criou uma API web que recebe solicitações usando um Application Load Balancer (ALB) voltado para a Internet com um listener HTTPS.",
    "ask": "O desenvolvedor configura um pool de usuários do Amazon Cognito e deseja garantir que todas as solicitações à API sejam autenticadas pelo Amazon Cognito.O que o desenvolvedor deve fazer para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma regra de ouvinte ao ouvinte para retornar uma resposta fixa caso o cabeçalho de Autorização esteja ausente. Defina a resposta fixa como 401 Não Autorizado."
      },
      {
        "id": "B",
        "text": "Crie uma ação de autenticação para as regras de escuta do AL. Defina o tipo de ação da regra como authenticate-cognito. Defina o campo OnUnauthenticatedRequest como \"recusar\"."
      },
      {
        "id": "C",
        "text": "Crie uma API do Amazon API Gateway. Configure todos os métodos da API para serem encaminhados ao endpoint ALB. Crie um autorizador do tipo COGNITO_USER_POOLS. Configure todos os métodos da API para usar esse autorizador."
      },
      {
        "id": "D",
        "text": "Crie um novo grupo-alvo que inclua um alvo de função do AWS Lambda que valide o cabeçalho de autorização usando o Amazon Cognito. Associe o grupo-alvo ao ouvinte."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-240",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa implantou recentemente uma função do AWS Lambda.",
    "ask": "Um desenvolvedor notou um aumento nas métricas de limitação de funções no Amazon CloudWatch.Quais são as soluções operacionalmente MAIS eficientes para reduzir a limitação de funções?",
    "options": [
      {
        "id": "A",
        "text": "Migre a função para o Amazon Elastic Kubernetes Service (Amazon EKS)."
      },
      {
        "id": "B",
        "text": "Aumentar a idade máxima dos eventos no Lambda."
      },
      {
        "id": "C",
        "text": "Aumente a simultaneidade reservada da função."
      },
      {
        "id": "D",
        "text": "Adicione a ação lambda:GetFunctionConcurrency à função de execução."
      },
      {
        "id": "E",
        "text": "Solicite uma alteração na cota de serviço para aumentar a simultaneidade."
      }
    ],
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": "DVA-C02-241",
    "type": "single",
    "stem": "Uma empresa está criando um serviço REST usando um Amazon API Gateway com integração com AWS Lambda.",
    "ask": "O serviço precisa executar diferentes versões para fins de teste.Qual seria a MELHOR maneira de fazer isso?",
    "options": [
      {
        "id": "A",
        "text": "Use um cabeçalho X-Version para indicar qual versão está sendo chamada e passe esse cabeçalho para a(s) função(ões) do Lambda."
      },
      {
        "id": "B",
        "text": "Crie um autorizador Lambda do API Gateway para rotear clientes de API para a versão correta de API."
      },
      {
        "id": "C",
        "text": "Crie uma política de recursos do API Gateway para isolar versões e fornecer contexto para as funções do Lambda."
      },
      {
        "id": "D",
        "text": "Implante as versões da API como estágios exclusivos com pontos de extremidade exclusivos e use variáveis de estágio para fornecer mais contexto."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-242",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está usando o AWS CodePipeline para entregar um de seus aplicativos. O pipeline de entrega é acionado por alterações na ramificação principal de um repositório do AWS CodeCommit e usa o AWS CodeBuild para implementar as etapas de teste e compilação do processo e o AWS CodeDeploy para implantar o aplicativo.O pipeline está operando com sucesso há vários meses e não houve modificações.",
    "ask": "Após uma alteração recente no código-fonte do aplicativo, o AWS CodeDeploy não implantou o aplicativo atualizado conforme o esperado.Quais são as possíveis causas?",
    "options": [
      {
        "id": "A",
        "text": "A alteração não foi feita no branch principal do repositório do AWS CodeCommit."
      },
      {
        "id": "B",
        "text": "Um dos estágios anteriores do pipeline falhou e o pipeline foi encerrado."
      },
      {
        "id": "C",
        "text": "Uma das instâncias do Amazon EC2 no cluster AWS CodePipeline da empresa está inativa."
      },
      {
        "id": "D",
        "text": "O AWS CodePipeline está configurado incorretamente e não está invocando o AWS CodeDeploy."
      },
      {
        "id": "E",
        "text": "O AWS CodePipeline não tem permissões para acessar o AWS CodeCommit."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-243",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação sem servidor usando o AWS Serverless Application Model (AWS SAM) em várias funções do AWS Lambda. Quando a aplicação é implantada, o desenvolvedor deseja transferir 10% do tráfego para a nova implantação durante os primeiros 10 minutos após a implantação.",
    "ask": "Se não houver problemas, todo o tráfego deve migrar para a nova versão.Qual alteração no modelo do AWS SAM atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina o Tipo de Preferência de Implantação como Canary10Percent10Minutes. Defina a propriedade AutoPublishAlias como o alias do Lambda."
      },
      {
        "id": "B",
        "text": "Defina o Tipo de Preferência de Implantação como Linear10PercentEvery10Minutes. Defina a propriedade AutoPublishAlias como o alias do Lambda."
      },
      {
        "id": "C",
        "text": "Defina o Tipo de Preferência de Implantação como Canary10Percent10Minutes. Defina as propriedades PreTraffic e PostTraffic como o alias do Lambda."
      },
      {
        "id": "D",
        "text": "Defina o Tipo de Preferência de Implantação como Linear10PercentEvery10Minutes. Defina as propriedades PreTraffic e PostTraffic como o alias do Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-244",
    "type": "single",
    "stem": "Uma função do AWS Lambda está em execução na conta compartilhada da AWS de uma empresa. A função precisa executar uma ação adicional ec2:DescribeInstances direcionada às contas de desenvolvimento da empresa.",
    "ask": "Um desenvolvedor deve configurar as permissões necessárias em todas as contas.Como o desenvolvedor deve configurar as permissões para aderir ao princípio do privilégio mínimo?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do IAM na conta compartilhada. Adicione a permissão ec2:DescribeInstances à função. Estabeleça uma relação de confiança entre as contas de desenvolvimento para esta função. Atualize a função do IAM da função Lambda na conta compartilhada adicionando a permissão ec2:DescribeInstances à função."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM nas contas de desenvolvimento. Adicione a permissão ec2:DescribeInstances à função. Estabeleça uma relação de confiança com a conta compartilhada para esta função. Atualize a função do IAM da função Lambda na conta compartilhada adicionando as permissões iam:AssumeRole."
      },
      {
        "id": "C",
        "text": "Crie uma função do IAM na conta compartilhada. Adicione a permissão ec2:DescribeInstances à função. Estabeleça uma relação de confiança entre as contas de desenvolvimento para esta função. Atualize a função do IAM da função Lambda na conta compartilhada adicionando as permissões iam:AssumeRole."
      },
      {
        "id": "D",
        "text": "Crie uma função do IAM nas contas de desenvolvimento. Adicione a permissão ec2:DescribeInstances à função. Estabeleça uma relação de confiança com a conta compartilhada para esta função. Atualize a função do IAM da função Lambda na conta compartilhada adicionando a permissão ec2:DescribeInstances à função."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-245",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está construindo uma nova aplicação que será implantada na AWS. O desenvolvedor criou um repositório AWS CodeCommit para a aplicação. O desenvolvedor inicializou um novo projeto para a aplicação invocando o comando cdk init do AWS Cloud Development Kit (AWS CDK).O desenvolvedor deve escrever testes unitários para os modelos de infraestrutura como código (IaC) gerados pelo AWS CDK.",
    "ask": "O desenvolvedor também deve executar uma ferramenta de validação em todas as construções da aplicação CDK para garantir que as configurações críticas de segurança sejam ativadas.Qual combinação de ações atenderá a esses requisitos com a MENOR sobrecarga de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Use uma estrutura de teste unitário para escrever testes unitários personalizados no arquivo cdk.out gerado pelo AWS CDK. Execute os testes unitários em um pipeline de integração e entrega contínua (CI/CD) que é invocado após qualquer confirmação no repositório."
      },
      {
        "id": "B",
        "text": "Use o módulo de asserções do CDK para integrar testes unitários à aplicação. Execute os testes unitários em um pipeline de integração e entrega contínuas (CI/CD) que é invocado após qualquer confirmação no repositório."
      },
      {
        "id": "C",
        "text": "Use o contexto de tempo de execução do CDK para definir pares de chave-valor que devem estar presentes no arquivo cdk.out gerado pelo AWS CDK. Reprovar a síntese da pilha se houver alguma violação."
      },
      {
        "id": "D",
        "text": "Escreva um script que pesquise no aplicativo por strings de configuração de chave específicas. Configure o script para gerar um relatório sobre quaisquer violações de segurança."
      },
      {
        "id": "E",
        "text": "Use a classe Aspectos do CDK para criar regras personalizadas a serem aplicadas ao aplicativo CDK. Desative a síntese da pilha se houver alguma violação."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-246",
    "type": "single",
    "stem": "Uma empresa de vendas online está desenvolvendo uma aplicação sem servidor que roda na AWS. A aplicação utiliza uma função Lambda da AWS que calcula as taxas de sucesso dos pedidos e armazena os dados em uma tabela do Amazon DynamoDB.",
    "ask": "Um desenvolvedor deseja uma maneira eficiente de invocar a função Lambda a cada 15 minutos.Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma regra do Amazon EventBridge com uma expressão de taxa que executará a regra a cada 15 minutos. Adicione a função Lambda como alvo da regra do EventBridge."
      },
      {
        "id": "B",
        "text": "Crie um documento do AWS Systems Manager com um script que invocará a função Lambda no Amazon EC2. Use uma tarefa de execução de comando do Systems Manager para executar o script de shell a cada 15 minutos."
      },
      {
        "id": "C",
        "text": "Crie uma máquina de estados do AWS Step Functions. Configure a máquina de estados para invocar a função de execução do Lambda em um intervalo especificado usando um estado de espera. Defina o intervalo para 15 minutos."
      },
      {
        "id": "D",
        "text": "Provisione uma pequena instância do Amazon EC2. Configure uma tarefa cron que invoque a função Lambda a cada 15 minutos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-247",
    "type": "single",
    "stem": "Uma empresa implanta um aplicativo de processamento de fotos em uma instância do Amazon EC2. O aplicativo precisa processar cada foto em menos de 5 segundos.",
    "ask": "Se o processamento demorar mais de 5 segundos, a equipe de desenvolvimento da empresa deverá receber uma notificação.Como um desenvolvedor pode implementar a medição de tempo e a notificação necessárias com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma métrica personalizada do Amazon CloudWatch. Sempre que uma foto for processada, publique o tempo de processamento como um valor de métrica. Crie um alarme do CloudWatch com base em um limite estático de 5 segundos. Notifique a equipe de desenvolvimento usando um tópico do Amazon Simple Notification Service (Amazon SNS)."
      },
      {
        "id": "B",
        "text": "Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Sempre que uma foto for processada, publique o tempo de processamento na fila. Crie um aplicativo para consumir da fila e determinar se algum valor é superior a 5 segundos. Notifique a equipe de desenvolvimento usando um tópico do Amazon Simple Notification Service (Amazon SNS)."
      },
      {
        "id": "C",
        "text": "Crie uma métrica personalizada do Amazon CloudWatch. Sempre que uma foto for processada, publique o tempo de processamento como um valor de métrica. Crie um alarme do CloudWatch que entre no estado ALARME se a média dos valores for superior a 5 segundos. Notifique a equipe de desenvolvimento enviando uma mensagem do Amazon Simple Email Service (Amazon SES)."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de dados do Amazon Kinesis. Sempre que uma foto for processada, publique o tempo de processamento no fluxo de dados. Crie um alarme do Amazon CloudWatch que entre no estado ALARME se algum valor for superior a 5 segundos. Notifique a equipe de desenvolvimento usando um tópico do Amazon Simple Notification Service (Amazon SNS)."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-248",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está usando o AWS Elastic Beanstalk para gerenciar aplicações web em execução em instâncias do Amazon EC2. Um desenvolvedor precisa fazer alterações na configuração.",
    "ask": "O desenvolvedor deve implantar as alterações apenas em novas instâncias.Quais tipos de implantação o desenvolvedor pode usar para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "De repente"
      },
      {
        "id": "B",
        "text": "Imutável"
      },
      {
        "id": "C",
        "text": "Rolamento"
      },
      {
        "id": "D",
        "text": "Azul/verde"
      },
      {
        "id": "E",
        "text": "Laminação com lote adicional"
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-249",
    "type": "single",
    "stem": "Um desenvolvedor precisa usar o Amazon DynamoDB para armazenar pedidos de clientes.",
    "ask": "A empresa do desenvolvedor exige que todos os dados dos clientes sejam criptografados em repouso com uma chave gerada pela empresa.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie a tabela do DynamoDB com a criptografia definida como Nenhuma. Programe o aplicativo para usar a chave para descriptografar os dados quando o aplicativo ler a tabela. Programe o aplicativo para usar a chave para criptografar os dados quando o aplicativo gravar na tabela."
      },
      {
        "id": "B",
        "text": "Armazene a chave usando o AWS Key Management Service (AWS KMS). Escolha uma chave gerenciada pelo cliente do AWS KMS durante a criação da tabela do DynamoDB. Forneça o Amazon Resource Name (ARN) da chave do AWS KMS."
      },
      {
        "id": "C",
        "text": "Armazene a chave usando o AWS Key Management Service (AWS KMS). Crie a tabela do DynamoDB com criptografia padrão. Inclua o parâmetro kms:Encrypt com o Amazon Resource Name (ARN) da chave do AWS KMS ao usar o kit de desenvolvimento de software (SDK) do DynamoDB."
      },
      {
        "id": "D",
        "text": "Armazene a chave usando o AWS Key Management Service (AWS KMS). Escolha uma chave gerenciada pela AWS KMS durante a criação da tabela do DynamoDB. Forneça o Nome de Recurso da Amazon (ARN) da chave do AWS KMS."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-250",
    "type": "single",
    "stem": "Uma empresa utiliza o AWS CloudFormation para implantar uma aplicação que utiliza uma API REST do Amazon API Gateway com integração de funções do AWS Lambda. A aplicação utiliza o Amazon DynamoDB para persistência de dados. A aplicação possui três estágios: desenvolvimento, teste e produção. Cada estágio utiliza sua própria tabela do DynamoDB.A empresa encontrou problemas inesperados ao promover alterações no estágio de produção. As alterações foram bem-sucedidas nos estágios de desenvolvimento e teste. Um desenvolvedor precisa rotear 20% do tráfego para a nova API do estágio de produção com a próxima versão de produção. O desenvolvedor precisa rotear os 80% restantes do tráfego para o estágio de produção existente.",
    "ask": "A solução deve minimizar o número de erros que qualquer cliente enfrenta.Qual abordagem o desenvolvedor deve adotar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atualize 20% das alterações planejadas para a fase de produção. Implante a nova fase de produção. Monitore os resultados. Repita esse processo cinco vezes para testar todas as alterações planejadas."
      },
      {
        "id": "B",
        "text": "Atualize a entrada do registro DNS do Amazon Route 53 para a API da fase de produção para usar uma política de roteamento ponderada. Defina o peso como 80. Adicione um segundo registro para o nome de domínio de produção. Altere a segunda política de roteamento para uma política de roteamento ponderada. Defina o peso da segunda política para 20. Altere o alias da segunda política para usar a API da fase de teste."
      },
      {
        "id": "C",
        "text": "Implante um Application Load Balancer (ALB) antes da API REST. Altere o registro do Amazon Route 53 da API de produção para direcionar o tráfego para o ALB. Registre os estágios de produção e teste como alvos do ALB com pesos de 80% e 20%, respectivamente."
      },
      {
        "id": "D",
        "text": "Configurar as configurações do Canary para a API do estágio de produção. Alterar a porcentagem de tráfego direcionado à implantação do Canary para 20%. Fazer as atualizações planejadas para o estágio de produção. Implantar as alterações."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-251",
    "type": "single",
    "stem": "Um desenvolvedor criou um aplicativo de coleta de dados que utiliza o Amazon API Gateway, o AWS Lambda e o Amazon S3. Os usuários do aplicativo carregam arquivos de dados periodicamente e aguardam que o status da validação seja refletido em um painel de processamento. O processo de validação é complexo e demorado para arquivos grandes.Alguns usuários carregam dezenas de arquivos grandes e precisam aguardar e atualizar o painel de processamento para verificar se os arquivos foram validados.",
    "ask": "O desenvolvedor deve refatorar o aplicativo para atualizar imediatamente o resultado da validação no painel do usuário, sem precisar recarregar o painel completo.Qual é a solução operacional MAIS eficiente que atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Integre o cliente a uma API WebSocket do API Gateway. Salve os arquivos enviados pelo usuário com o ID de conexão do WebSocket. Envie o status de validação para o ID de conexão quando o processamento for concluído para iniciar uma atualização da interface do usuário."
      },
      {
        "id": "B",
        "text": "Inicie uma microinstância do Amazon EC2 e configure um servidor WebSocket. Envie o arquivo carregado pelo usuário e os detalhes do usuário para a instância do EC2 após o usuário carregar o arquivo. Use o servidor WebSocket para enviar atualizações para a interface do usuário quando o arquivo carregado for processado."
      },
      {
        "id": "C",
        "text": "Salve o endereço de e-mail do usuário junto com o arquivo enviado por ele. Quando o processo de validação for concluído, envie uma notificação por e-mail pelo Amazon Simple Notification Service (Amazon SNS) ao usuário que enviou o arquivo."
      },
      {
        "id": "D",
        "text": "Salve o arquivo enviado pelo usuário e os detalhes do usuário no Amazon DynamoDB. Use o Amazon DynamoDB Streams com notificações push do Amazon Simple Notification Service (Amazon SNS) para enviar atualizações ao navegador e atualizar a interface do usuário."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-252",
    "type": "single",
    "stem": "Um desenvolvedor de uma empresa está criando um aplicativo que utiliza o Amazon API Gateway. A empresa deseja garantir que apenas usuários do departamento de Vendas possam usar o aplicativo. Os usuários se autenticam no aplicativo usando credenciais federadas de um provedor de identidade (IdP) de terceiros por meio do Amazon Cognito. O desenvolvedor configurou um mapeamento de atributos para mapear um atributo denominado Departamento e passá-lo a um autorizador personalizado do AWS Lambda.Para testar a limitação de acesso, o desenvolvedor define seu departamento como Engenharia no IdP e tenta efetuar login no aplicativo. O acesso é negado ao desenvolvedor. Em seguida, o desenvolvedor atualiza seu departamento para Vendas no IdP e tenta efetuar login. Novamente, o acesso é negado ao desenvolvedor.",
    "ask": "O desenvolvedor verifica os logs e descobre que o acesso está sendo negado porque o token de acesso do desenvolvedor tem o valor de departamento Engenharia.Qual das seguintes opções é um possível motivo para o departamento do desenvolvedor ainda ser relatado como Engenharia em vez de Vendas?",
    "options": [
      {
        "id": "A",
        "text": "O cache de autorização é habilitado no autorizador Lambda personalizado."
      },
      {
        "id": "B",
        "text": "O cache de autorização está habilitado no pool de usuários do Amazon Cognito."
      },
      {
        "id": "C",
        "text": "A função do IAM para o autorizador Lambda personalizado não tem uma tag Departamento."
      },
      {
        "id": "D",
        "text": "A função do IAM para o pool de usuários do Amazon Cognito não tem uma tag Departamento."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-253",
    "type": "single",
    "stem": "Uma empresa migrou uma aplicação para instâncias do Amazon EC2. O escalonamento automático está funcionando bem para a interface de usuário da aplicação. No entanto, o processo de entrega de solicitações de remessa à equipe de depósito da empresa está apresentando problemas. Solicitações de remessa duplicadas estão chegando, e algumas solicitações são perdidas ou chegam fora de ordem.A empresa deve evitar solicitações de remessa duplicadas e processá-las na ordem em que chegam. As solicitações nunca ultrapassam 250 KB e levam de 5 a 10 minutos para serem processadas.",
    "ask": "Um desenvolvedor precisa reestruturar a aplicação para melhorar a confiabilidade da entrega e do processamento das solicitações.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um fluxo de entrega do Amazon Kinesis Data Firehose para processar as solicitações. Crie um fluxo de dados do Amazon Kinesis. Modifique o aplicativo para gravar as solicitações no fluxo de dados do Kinesis."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para processar as solicitações. Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Assine a função do Lambda no tópico do SNS. Modifique o aplicativo para gravar as solicitações no tópico do SNS."
      },
      {
        "id": "C",
        "text": "Crie uma função do AWS Lambda para processar as solicitações. Crie uma fila padrão do Amazon Simple Queue Service (Amazon SQS). Defina a fila do SQS como uma fonte de eventos para a função do Lambda. Modifique o aplicativo para gravar as solicitações na fila do SQS."
      },
      {
        "id": "D",
        "text": "Crie uma função do AWS Lambda para processar as solicitações. Crie uma fila FIFO do Amazon Simple Queue Service (Amazon SQS). Defina a fila do SQS como uma fonte de eventos para a função do Lambda. Modifique o aplicativo para gravar as solicitações na fila do SQS."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-254",
    "type": "single",
    "stem": "Um desenvolvedor está criando um pipeline de aprendizado de máquina (ML) no AWS Step Functions que contém funções do AWS Lambda. O desenvolvedor configurou uma fila do Amazon Simple Queue Service (Amazon SQS) para fornecer parâmetros de modelo de ML ao pipeline para treinar modelos de ML.",
    "ask": "O desenvolvedor carrega os modelos treinados para um bucket do Amazon S3.O desenvolvedor precisa de uma solução que possa testar localmente o pipeline de ML sem precisar fazer chamadas de integração de serviços para o Amazon SQS e o Amazon S3.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon CodeGuru Profiler para analisar as funções Lambda usadas no pipeline do AWS Step Functions."
      },
      {
        "id": "B",
        "text": "Use a imagem local do Docker do AWS Step Functions para executar e testar localmente as funções do Lambda."
      },
      {
        "id": "C",
        "text": "Use a CLI do AWS Serverless Application Model (AWS SAM) para executar e testar localmente as funções do Lambda."
      },
      {
        "id": "D",
        "text": "Use o AWS Step Functions Local com integrações de serviços simuladas."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-255",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação de processamento em lote utilizando funções do AWS Lambda e APIs do Amazon API Gateway, com etapas de implantação para desenvolvimento, testes de aceitação do usuário e produção.",
    "ask": "Uma equipe de desenvolvimento precisa configurar as APIs nas etapas de implantação para se conectar a endpoints de serviços de terceiros.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os endpoints de serviço de terceiros em camadas Lambda que correspondem ao estágio."
      },
      {
        "id": "B",
        "text": "Armazene os pontos de extremidade de serviço de terceiros nas variáveis de estágio do API Gateway que correspondem ao estágio."
      },
      {
        "id": "C",
        "text": "Codifique os pontos de extremidade de serviço de terceiros como parâmetros de consulta na URL de solicitação do API Gateway."
      },
      {
        "id": "D",
        "text": "Armazene o ponto de extremidade de serviço de terceiros para cada ambiente no AWS AppConfig."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-256",
    "type": "single",
    "stem": "Um desenvolvedor está construindo uma aplicação serverless que roda na AWS. O desenvolvedor quer criar um fluxo de trabalho de desenvolvimento acelerado que implemente alterações incrementais na AWS para testes.",
    "ask": "O desenvolvedor quer implementar as alterações incrementais, mas não quer implementar a aplicação inteira na AWS para cada commit de código.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Serverless Application Model (AWS SAM) para criar o aplicativo. Use o comando sam sync para implantar as alterações incrementais."
      },
      {
        "id": "B",
        "text": "Use o AWS Serverless Application Model (AWS SAM) para criar o aplicativo. Use o comando sam init para implantar as alterações incrementais."
      },
      {
        "id": "C",
        "text": "Use o AWS Cloud Development Kit (AWS CDK) para criar o aplicativo. Use o comando cdk synth para implantar as alterações incrementais."
      },
      {
        "id": "D",
        "text": "Use o AWS Cloud Development Kit (AWS CDK) para criar o aplicativo. Use o comando cdk bootstrap para implantar as alterações incrementais."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-257",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que utilizará uma API do Amazon API Gateway com um backend do AWS Lambda. A equipe que desenvolverá o frontend precisa de acesso imediato aos endpoints da API para criar a interface do usuário (UI). Para preparar a aplicação de backend para integração, o desenvolvedor precisa configurar endpoints. Os endpoints precisam retornar códigos de status HTTP predefinidos e respostas JSON para a equipe do frontend.",
    "ask": "O desenvolvedor cria um método para um recurso de API.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina o tipo de integração como AWS_PROXY. Provisione funções Lambda para retornar dados JSON codificados."
      },
      {
        "id": "B",
        "text": "Defina o tipo de integração como MOCK. Configure a solicitação de integração e a resposta de integração do método para associar respostas JSON a códigos de status HTTP específicos."
      },
      {
        "id": "C",
        "text": "Defina o tipo de integração como HTTP_PROXY. Configure o API Gateway para passar todas as solicitações para uma API externa de espaço reservado, que a equipe criará."
      },
      {
        "id": "D",
        "text": "Defina o tipo de integração como MOCK. Use uma solicitação de método para definir códigos de status HTTP. Use uma solicitação de integração para definir respostas JSON."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-258",
    "type": "single",
    "stem": "Um desenvolvedor está migrando uma aplicação para o Amazon Elastic Kubernetes Service (Amazon EKS). O desenvolvedor migra a aplicação para o Amazon Elastic Container Registry (Amazon ECR) com um cluster EKS. Como parte da migração da aplicação para um novo backend, o desenvolvedor cria uma nova conta AWS. O desenvolvedor faz alterações de configuração na aplicação para direcioná-la para a nova conta AWS e usar novos recursos de backend. O desenvolvedor testa as alterações na aplicação com sucesso, implantando o pipeline.A criação da imagem do Docker e a implantação do pipeline são bem-sucedidas, mas a aplicação ainda está se conectando ao backend antigo.",
    "ask": "O desenvolvedor descobre que a configuração da aplicação ainda está referenciando o cluster EKS original e não os novos recursos de backend.Qual motivo pode explicar por que a aplicação não está se conectando aos novos recursos?",
    "options": [
      {
        "id": "A",
        "text": "O desenvolvedor não criou com sucesso a nova conta da AWS."
      },
      {
        "id": "B",
        "text": "O desenvolvedor adicionou uma nova tag à imagem do Docker."
      },
      {
        "id": "C",
        "text": "O desenvolvedor não atualizou a tag de imagem do Docker para uma nova versão."
      },
      {
        "id": "D",
        "text": "O desenvolvedor enviou as alterações para uma nova tag de imagem do Docker."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-259",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que lê e grava em vários buckets do Amazon S3. A aplicação será implantada em uma instância do Amazon EC2. O desenvolvedor deseja fazer solicitações de API seguras a partir das instâncias do EC2 sem precisar gerenciar as credenciais de segurança da aplicação.",
    "ask": "O desenvolvedor precisa aplicar o princípio do privilégio mínimo.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um usuário do IAM. Crie chaves de acesso e chaves secretas para o usuário. Associe o usuário a uma política do IAM que conceda permissões s3:*."
      },
      {
        "id": "B",
        "text": "Associe a instância do EC2 a uma função do IAM que tenha uma política do IAM que permita permissões s3:ListBucket e s3:*Object para buckets específicos do S3."
      },
      {
        "id": "C",
        "text": "Associe a instância do EC2 a uma função do IAM que tenha uma política gerenciada pela AWS AmazonS3FullAccess."
      },
      {
        "id": "D",
        "text": "Crie uma política de bucket no bucket S3 que conceda permissões s3:ListBucket e s3:*Object para a instância EC2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-260",
    "type": "single",
    "stem": "Um desenvolvedor está desenvolvendo um aplicativo que recuperará dados confidenciais de um sistema de terceiros. O aplicativo formatará os dados em um arquivo PDF. O arquivo PDF pode ter mais de 1 MB. O aplicativo criptografará os dados em disco usando o AWS Key Management Service (AWS KMS). O aplicativo descriptografará o arquivo quando um usuário solicitar o download. As partes de recuperação e formatação do aplicativo foram concluídas.O desenvolvedor precisa usar a API GenerateDataKey para criptografar o arquivo PDF para que ele possa ser descriptografado posteriormente.",
    "ask": "O desenvolvedor precisa usar uma chave simétrica gerenciada pelo cliente do AWS KMS para criptografia.Quais soluções atenderão a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Grave a chave criptografada da API GenerateDataKey no disco para uso posterior. Use a chave de texto simples da API GenerateDataKey e um algoritmo de criptografia simétrica para criptografar o arquivo."
      },
      {
        "id": "B",
        "text": "Grave a chave de texto simples da API GenerateDataKey no disco para uso posterior. Use a chave criptografada da API GenerateDataKey e um algoritmo de criptografia simétrica para criptografar o arquivo."
      },
      {
        "id": "C",
        "text": "Grave a chave criptografada da API GenerateDataKey no disco para uso posterior. Use a chave de texto simples da API GenerateDataKey para criptografar o arquivo usando a API KMS Encrypt."
      },
      {
        "id": "D",
        "text": "Grave a chave de texto simples da API GenerateDataKey no disco para uso posterior. Use a chave criptografada da API GenerateDataKey para criptografar o arquivo usando a API KMS Encrypt."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-261",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação em instâncias do Amazon EC2. As instâncias do EC2 abrem conexões com um banco de dados do Amazon RDS para SQL Server. Um desenvolvedor precisa armazenar e acessar as credenciais e deseja rotacioná-las automaticamente.",
    "ask": "O desenvolvedor não deseja armazenar as credenciais do banco de dados no código.Qual solução atenderá a esses requisitos da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do IAM com permissões para acessar o banco de dados. Anexe a função do IAM às instâncias do EC2."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais como segredos no AWS Secrets Manager. Crie uma função do AWS Lambda para atualizar os segredos e o banco de dados. Recupere as credenciais do Secrets Manager conforme necessário."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais em um arquivo de texto criptografado em um bucket do Amazon S3. Configure o modelo de inicialização da instância do EC2 para baixar as credenciais do Amazon S3 conforme a instância é inicializada. Crie uma função do AWS Lambda para atualizar os segredos e o banco de dados."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais em uma tabela do Amazon DynamoDB. Configure uma regra do Amazon CloudWatch Events para invocar uma função do AWS Lambda e atualizar periodicamente os segredos e o banco de dados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-262",
    "type": "single",
    "stem": "Uma empresa deseja testar seu aplicativo web com mais frequência. A empresa implanta o aplicativo usando uma pilha separada do AWS CloudFormation para cada ambiente. A empresa implanta o mesmo modelo do CloudFormation em cada pilha à medida que o aplicativo avança no ciclo de vida de desenvolvimento.Um desenvolvedor precisa criar notificações para a equipe de garantia de qualidade (QA).",
    "ask": "O desenvolvedor deseja que as notificações ocorram para novas implantações no ambiente de pré-produção final.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva a equipe de QA no tópico do Amazon SNS. Atualize as opções da pilha do CloudFormation para apontar para o tópico do SNS no ambiente de pré-produção."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda que notifique a equipe de controle de qualidade. Crie uma regra do Amazon EventBridge para invocar a função do Lambda no barramento de eventos padrão. Filtre os eventos no serviço CloudFormation e na pilha do CloudFormation, nome do recurso da Amazon (ARN)."
      },
      {
        "id": "C",
        "text": "Crie um alarme do Amazon CloudWatch que monitore as métricas do CloudFormation. Filtre as métricas com base no nome e no status da pilha. Configure o alarme do CloudWatch para notificar a equipe de QA."
      },
      {
        "id": "D",
        "text": "Crie uma função do AWS Lambda que notifique a equipe de QA. Configure o mapeamento da fonte de eventos para receber eventos do CloudFormation. Especifique os valores de filtragem para limitar as invocações à pilha desejada do CloudFormation."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-263",
    "type": "single",
    "stem": "Um desenvolvedor gerencia três contas da AWS. Cada conta contém uma instância de banco de dados do Amazon RDS em uma sub-rede privada. O desenvolvedor precisa definir usuários em cada banco de dados de forma consistente.",
    "ask": "Ele deve garantir que os mesmos usuários sejam criados e atualizados posteriormente nas três contas.Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo do AWS CloudFormation. Declare os usuários no modelo. Anexe os usuários ao banco de dados. Implante o modelo em cada conta."
      },
      {
        "id": "B",
        "text": "Crie um modelo do AWS CloudFormation que contenha um recurso personalizado para criar os usuários no banco de dados. Implante o modelo em cada conta."
      },
      {
        "id": "C",
        "text": "Escreva um script que crie os usuários. Implante uma instância do Amazon EC2 em cada conta para executar o script nos bancos de dados. Execute o script em cada conta."
      },
      {
        "id": "D",
        "text": "Implemente uma função do AWS Lambda que crie os usuários no banco de dados. Forneça à função os detalhes das três contas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-264",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um novo aplicativo que roda na AWS e usa o Amazon API Gateway para expor APIs. Equipes de desenvolvedores estão trabalhando em componentes separados do aplicativo em paralelo.",
    "ask": "A empresa deseja publicar uma API sem um backend integrado para que as equipes que dependem do backend do aplicativo possam continuar o trabalho de desenvolvimento antes que o desenvolvimento do backend da API seja concluído.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie recursos do API Gateway e defina o valor do tipo de integração como MOCK. Configure a solicitação de integração do método e a resposta de integração para associar uma resposta a um código de status HTTP. Crie um estágio do API Gateway e implante a API."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda que retorne respostas simuladas e vários códigos de status HTTP. Crie recursos do API Gateway e defina o valor do tipo de integração como AWS_PROXY. Implante a API."
      },
      {
        "id": "C",
        "text": "Crie uma aplicação EC2 que retorne respostas HTTP simuladas. Crie recursos do API Gateway e defina o valor do tipo de integração como AWS. Crie um estágio do API Gateway e implante a API."
      },
      {
        "id": "D",
        "text": "Crie recursos do API Gateway e defina o valor do tipo de integração como HTTP_PROXY. Adicione modelos de mapeamento e implante a API. Crie uma camada do AWS Lambda que retorne vários códigos de status HTTP. Associe a camada do Lambda à implantação da API."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-265",
    "type": "single",
    "stem": "Um aplicativo executado na AWS recebe mensagens de uma fila do Amazon Simple Queue Service (Amazon SQS) e as processa em lotes. O aplicativo envia os dados para outra fila do SQS para serem consumidos por outro aplicativo legado. O sistema legado pode levar até 5 minutos para processar alguns dados de transações.Um desenvolvedor deseja garantir que não haja atualizações fora de ordem no sistema legado.",
    "ask": "O desenvolvedor não pode alterar o comportamento do sistema legado.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use uma fila FIFO do SQS. Configure o valor do tempo limite de visibilidade."
      },
      {
        "id": "B",
        "text": "Use uma fila padrão SQS com um tipo de dado SendMessageBatchRequestEntry. Configure os valores de DelaySeconds."
      },
      {
        "id": "C",
        "text": "Use uma fila padrão SQS com um tipo de dado SendMessageBatchRequestEntry. Configure o valor de tempo limite de visibilidade."
      },
      {
        "id": "D",
        "text": "Use uma fila FIFO do SQS. Configure o valor DelaySeconds."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-266",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação com uso intensivo de computação que será executada em uma frota de instâncias do Amazon EC2. A aplicação utiliza volumes do Amazon Elastic Block Store (Amazon EBS) anexados para armazenar dados. Os volumes do Amazon EBS serão criados no momento da implantação inicial. A aplicação processará informações confidenciais. Todos os dados devem ser criptografados.",
    "ask": "A solução não deve afetar o desempenho da aplicação.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a frota de instâncias do EC2 para usar volumes EBS criptografados para armazenar dados."
      },
      {
        "id": "B",
        "text": "Configure o aplicativo para gravar todos os dados em um bucket criptografado do Amazon S3."
      },
      {
        "id": "C",
        "text": "Configure um algoritmo de criptografia personalizado para o aplicativo que criptografará e descriptografará todos os dados."
      },
      {
        "id": "D",
        "text": "Configure uma Amazon Machine Image (AMI) que tenha um volume raiz criptografado e armazene os dados em discos efêmeros."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-267",
    "type": "single",
    "stem": "Um desenvolvedor está atualizando a versão de produção de uma função do AWS Lambda para corrigir um defeito. O desenvolvedor testou o código atualizado em um ambiente de teste. O desenvolvedor deseja implementar gradualmente as atualizações para um pequeno subconjunto de usuários de produção antes de implementar as alterações para todos os usuários.",
    "ask": "Apenas 10% dos usuários devem ser expostos inicialmente ao novo código em produção.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o código do Lambda e crie uma nova versão da função Lambda. Crie um gatilho para a função Lambda. Configure os pesos de tráfego no gatilho entre as duas versões da função Lambda. Envie 90% do tráfego para a versão de produção e 10% para a nova versão."
      },
      {
        "id": "B",
        "text": "Crie uma nova função Lambda que use o código atualizado. Crie um alias Lambda para a função Lambda de produção. Configure o alias Lambda para enviar 90% do tráfego para a função Lambda de produção e 10% para a função Lambda de teste."
      },
      {
        "id": "C",
        "text": "Atualize o código do Lambda e crie uma nova versão da função Lambda. Crie uma integração com o proxy do Lambda. Configure o proxy do Lambda para dividir o tráfego entre as duas versões da função Lambda. Envie 90% do tráfego para a versão de produção e 10% para a nova versão."
      },
      {
        "id": "D",
        "text": "Atualize o código do Lambda e crie uma nova versão da função Lambda. Crie um alias para a função Lambda. Configure os pesos de tráfego no alias do Lambda entre as duas versões da função Lambda. Envie 90% do tráfego para a versão de produção e 10% para a nova versão."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-268",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que consome mensagens de uma fila padrão do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "O desenvolvedor observa que a função do Lambda processa algumas mensagens várias vezes.Como o desenvolvedor pode resolver esse problema da forma MAIS econômica possível?",
    "options": [
      {
        "id": "A",
        "text": "Altere a fila padrão do Amazon SQS para uma fila FIFO do Amazon SQS usando o ID de desduplicação de mensagens do Amazon SQS."
      },
      {
        "id": "B",
        "text": "Configure uma fila de mensagens mortas."
      },
      {
        "id": "C",
        "text": "Defina o limite máximo de simultaneidade da função AWS Lambda como 1."
      },
      {
        "id": "D",
        "text": "Altere o processamento de mensagens para usar o Amazon Kinesis Data Streams em vez do Amazon SQS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-269",
    "type": "single",
    "stem": "Um desenvolvedor está otimizando uma função do AWS Lambda e deseja testar as alterações em produção em uma pequena porcentagem de todo o tráfego. A função Lambda atende a solicitações para uma API RE ST no Amazon API Gateway.",
    "ask": "O desenvolvedor precisa implantar as alterações e realizar um teste em produção sem alterar a URL do API Gateway.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina uma versão de função para a função Lambda de produção implantada atualmente. Atualize o endpoint do API Gateway para referenciar a nova versão da função Lambda. Carregue e publique o código otimizado da função Lambda. No estágio de produção do API Gateway, defina uma versão canário e defina a porcentagem de tráfego a ser direcionada para essa versão. Atualize o endpoint do API Gateway para usar a versão $LATEST da função Lambda. Publique a API no estágio canário."
      },
      {
        "id": "B",
        "text": "Defina uma versão da função para a função Lambda de produção implantada atualmente. Atualize o endpoint do API Gateway para referenciar a nova versão da função Lambda. Carregue e publique o código otimizado da função Lambda. Atualize o endpoint do API Gateway para usar a versão $LATEST da função Lambda. Implante um novo estágio do API Gateway."
      },
      {
        "id": "C",
        "text": "Defina um alias na versão $LATEST da função Lambda. Atualize o endpoint do API Gateway para referenciar o novo alias da função Lambda. Carregue e publique o código otimizado da função Lambda. Na etapa de produção do API Gateway, defina uma versão canário e defina a porcentagem de tráfego a ser direcionada para a versão canário. Atualize o endpoint do API Gateway para usar a versão $LATEST da função Lambda. Publique na etapa canário."
      },
      {
        "id": "D",
        "text": "Defina uma versão da função para a função Lambda de produção implantada atualmente. Atualize o endpoint do API Gateway para referenciar a nova versão da função Lambda. Carregue e publique o código otimizado da função Lambda. Atualize o endpoint do API Gateway para usar a versão $LATEST da função Lambda. Implante a API no estágio de produção do API Gateway."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-270",
    "type": "single",
    "stem": "Uma empresa percebe que as credenciais que utiliza para se conectar a um fornecedor externo de software como serviço (SaaS) estão armazenadas em um arquivo de configuração como texto simples.O desenvolvedor precisa proteger as credenciais da API e aplicar a rotação automática de credenciais trimestralmente.Qual solução atenderá a esses requisitos com MAIS segurança?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Key Management Service (AWS KMS) para criptografar o arquivo de configuração. Descriptografe o arquivo de configuração quando os usuários fizerem chamadas de API para o fornecedor de SaaS. Habilite a rotação."
      },
      {
        "id": "B",
        "text": "Recupere credenciais temporárias do AWS Security Token Service (AWS STS) a cada 15 minutos. Use as credenciais temporárias quando os usuários fizerem chamadas de API para o fornecedor de SaaS."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais no AWS Secrets Manager e habilite a rotação. Configure a API para ter acesso ao Secrets Manager."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais no AWS Systems Manager Parameter Store e habilite a rotação. Recupere as credenciais quando os usuários fizerem chamadas de API para o fornecedor de SaaS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-271",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui uma aplicação hospedada em instâncias do Amazon EC2. A aplicação armazena objetos em um bucket do Amazon S3 e permite que os usuários baixem objetos desse bucket. Um desenvolvedor ativa o Bloqueio de Acesso Público do S3 para o bucket do S3. Após essa alteração, os usuários relatam erros ao tentar baixar objetos.",
    "ask": "O desenvolvedor precisa implementar uma solução para que apenas usuários conectados à aplicação possam acessar os objetos no bucket do S3.Qual combinação de etapas atenderá a esses requisitos da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Crie um perfil e uma função de instância EC2 com uma política apropriada. Associe a função às instâncias EC2."
      },
      {
        "id": "B",
        "text": "Crie um usuário do IAM com uma política apropriada. Armazene o ID da chave de acesso e a chave de acesso secreta nas instâncias do EC2."
      },
      {
        "id": "C",
        "text": "Modifique o aplicativo para usar a chamada de API S3 GeneratePresignedUrl."
      },
      {
        "id": "D",
        "text": "Modifique o aplicativo para usar a chamada da API S3 GetObject e retornar o identificador do objeto ao usuário."
      },
      {
        "id": "E",
        "text": "Modifique o aplicativo para delegar solicitações ao bucket S3."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-272",
    "type": "single",
    "stem": "Uma fila do Amazon Simple Queue Service (Amazon SQS) serve como fonte de eventos para uma função do AWS Lambda. Na fila do SQS, cada item corresponde a um arquivo de vídeo que a função Lambda deve converter para uma resolução menor.",
    "ask": "A função Lambda está atingindo o tempo limite em arquivos de vídeo mais longos, mas o tempo limite da função Lambda já está configurado para o valor máximo.O que um desenvolvedor deve fazer para evitar os tempos limite sem alterações adicionais no código?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a configuração de memória da função Lambda."
      },
      {
        "id": "B",
        "text": "Aumente o tempo limite de visibilidade na fila SQS."
      },
      {
        "id": "C",
        "text": "Aumente o tamanho da instância do host que executa a função Lambda."
      },
      {
        "id": "D",
        "text": "Use multithreading para a conversão."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-273",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo na AWS. O backend do aplicativo inclui uma API REST do Amazon API Gateway. Os desenvolvedores de aplicativos frontend da empresa não podem continuar trabalhando até que a API de backend esteja pronta para integração.",
    "ask": "A empresa precisa de uma solução que permita que os desenvolvedores de aplicativos frontend continuem seu trabalho.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Configure integrações simuladas para métodos de API do API Gateway."
      },
      {
        "id": "B",
        "text": "Integre uma função Lambda com o API Gateway e retorne uma resposta simulada."
      },
      {
        "id": "C",
        "text": "Adicione novos endpoints de API ao estágio do API Gateway e retorne uma resposta simulada."
      },
      {
        "id": "D",
        "text": "Configure um recurso de proxy para métodos de API do API Gateway."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-274",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está se preparando para migrar uma aplicação para o seu primeiro ambiente AWS.",
    "ask": "Antes dessa migração, um desenvolvedor está criando uma aplicação de prova de conceito para validar um modelo de construção e implantação de aplicações baseadas em contêineres na AWS.Qual combinação de etapas o desenvolvedor deve seguir para implantar a aplicação de prova de conceito em contêineres com o MENOR esforço operacional?",
    "options": [
      {
        "id": "A",
        "text": "Empacote o aplicativo em um arquivo .zip usando uma ferramenta de linha de comando. Carregue o pacote no Amazon S3."
      },
      {
        "id": "B",
        "text": "Empacote o aplicativo em uma imagem de contêiner usando a CLI do Docker. Carregue a imagem no Amazon Elastic Container Registry (Amazon ECR)."
      },
      {
        "id": "C",
        "text": "Implante o aplicativo em uma instância do Amazon EC2 usando o AWS CodeDeploy."
      },
      {
        "id": "D",
        "text": "Implante o aplicativo no Amazon Elastic Kubernetes Service (Amazon EKS) no AWS Fargate."
      },
      {
        "id": "E",
        "text": "Implante o aplicativo no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-275",
    "type": "single",
    "stem": "Um desenvolvedor oferece suporte a uma aplicação que acessa dados em uma tabela do Amazon DynamoDB. Um dos atributos do item é expirationDate no formato timestamp. A aplicação usa esse atributo para localizar itens, arquivá-los e removê-los da tabela com base no valor do timestamp.A aplicação será descontinuada em breve e o desenvolvedor precisa encontrar outra maneira de implementar essa funcionalidade.",
    "ask": "O desenvolvedor precisa de uma solução que exija o mínimo de código para ser escrita.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Habilite o TTL no atributo expirationDate na tabela. Crie um fluxo do DynamoDB. Crie uma função do AWS Lambda para processar os itens excluídos. Crie um gatilho do DynamoDB para a função do Lambda."
      },
      {
        "id": "B",
        "text": "Crie duas funções do AWS Lambda: uma para excluir os itens e outra para processá-los. Crie um fluxo do DynamoDB. Use a operação da API DeleteItem para excluir os itens com base no atributo expirationDate. Use a operação da API GetRecords para obter os itens do fluxo do DynamoDB e processá-los."
      },
      {
        "id": "C",
        "text": "Crie duas funções do AWS Lambda: uma para excluir os itens e outra para processá-los. Crie uma regra agendada do Amazon EventBridge para invocar as funções do Lambda. Use a operação da API DeleteItem para excluir os itens com base no atributo expirationDate. Use a operação da API GetRecords para obter os itens da tabela do DynamoDB e processá-los."
      },
      {
        "id": "D",
        "text": "Habilite o TTL no atributo expirationDate na tabela. Especifique uma fila de mensagens mortas do Amazon Simple Queue Service (Amazon SQS) como destino para a exclusão dos itens. Crie uma função do AWS Lambda para processar os itens."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-276",
    "type": "single",
    "stem": "Um desenvolvedor precisa implementar uma biblioteca personalizada de aprendizado de máquina (ML) em um aplicativo. O tamanho da biblioteca é de 15 GB. O tamanho da biblioteca está aumentando. O aplicativo utiliza funções do AWS Lambda.",
    "ask": "Todas as funções do Lambda devem ter acesso à biblioteca.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Salve a biblioteca em camadas do Lambda. Anexe as camadas a todas as funções do Lambda."
      },
      {
        "id": "B",
        "text": "Salve a biblioteca no Amazon S3. Baixe a biblioteca do Amazon S3 dentro da função Lambda."
      },
      {
        "id": "C",
        "text": "Salve a biblioteca como uma imagem de contêiner do Lambda. Reimplantar as funções do Lambda com a nova imagem."
      },
      {
        "id": "D",
        "text": "Salve a biblioteca em um sistema de arquivos Amazon Elastic File System (Amazon EFS). Monte o sistema de arquivos EFS em todas as funções do Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-277",
    "type": "single",
    "stem": "Um desenvolvedor está projetando uma aplicação sem servidor para um jogo em que os usuários se registram e efetuam login por meio de um navegador web. A aplicação realiza requisições em nome dos usuários a um conjunto de funções do AWS Lambda executadas por trás de uma API HTTP do Amazon API Gateway.O desenvolvedor precisa implementar uma solução para registrar e efetuar login de usuários na página de login da aplicação.",
    "ask": "A solução deve minimizar a sobrecarga operacional e o gerenciamento contínuo das identidades dos usuários.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie pools de usuários do Amazon Cognito para provedores de identidade social externos. Configure funções do IAM para os pools de identidade."
      },
      {
        "id": "B",
        "text": "Programe a página de login para criar grupos IAM de usuários com as funções IAM anexadas aos grupos."
      },
      {
        "id": "C",
        "text": "Crie uma instância de banco de dados do Amazon RDS para SQL Server para armazenar os usuários e gerenciar as permissões para os recursos de back-end na AWS."
      },
      {
        "id": "D",
        "text": "Configure a página de login para registrar e armazenar os usuários e suas senhas em uma tabela do Amazon DynamoDB com uma política do IAM anexada."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-278",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação web hospedada em instâncias do Amazon EC2. As instâncias do EC2 estão configuradas para transmitir logs para o Amazon CloudWatch Logs.",
    "ask": "A empresa precisa receber uma notificação do Amazon Simple Notification Service (Amazon SNS) quando o número de mensagens de erro da aplicação exceder um limite definido em um período de 5 minutos.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Reescreva o código do aplicativo para transmitir logs do aplicativo para o Amazon SNS. Configure um tópico do SNS para enviar uma notificação quando o número de erros exceder o limite definido em um período de 5 minutos."
      },
      {
        "id": "B",
        "text": "Configure um filtro de assinatura no grupo de logs do CloudWatch Logs. Configure o filtro para enviar uma notificação do SNS quando o número de erros exceder o limite definido em um período de 5 minutos."
      },
      {
        "id": "C",
        "text": "Instale e configure o agente do Amazon Inspector nas instâncias do EC2 para monitorar erros. Configure o Amazon Inspector para enviar uma notificação do SNS quando o número de erros exceder o limite definido em um período de 5 minutos."
      },
      {
        "id": "D",
        "text": "Crie um filtro de métrica do CloudWatch para corresponder ao padrão de erro do aplicativo nos dados de log. Configure um alarme do CloudWatch com base na nova métrica personalizada. Configure o alarme para enviar uma notificação do SNS quando o número de erros exceder o limite definido em um período de 5 minutos."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-279",
    "type": "single",
    "stem": "Um aplicativo de compartilhamento de fotos usa o Amazon S3 para armazenar arquivos de imagem. Todas as imagens do usuário são auditadas manualmente por uma empresa terceirizada em busca de conteúdo impróprio. As auditorias são concluídas de 1 a 24 horas após o upload do usuário e os resultados são gravados em uma tabela do Amazon DynamoDB, que usa a chave do objeto S3 como chave primária.",
    "ask": "Os itens do banco de dados podem ser consultados usando uma API REST criada pela empresa terceirizada.Um desenvolvedor de aplicativos precisa implementar um processo automatizado para marcar todos os objetos S3 com os resultados da auditoria de conteúdo.O que o desenvolvedor deve fazer para atender a esses requisitos da maneira MAIS eficiente possível em termos operacionais?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda para ser executada em resposta ao evento s3:ObjectCreated. Grave a chave S3 em uma fila do Amazon Simple Queue Service (Amazon SQS) com um tempo limite de visibilidade de 24 horas. Crie e configure uma segunda função do Lambda para ler itens da fila. Recupere os resultados de cada item da tabela do DynamoDB. Marque cada objeto S3 adequadamente."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para ser executada em resposta ao evento s3:ObjectCreated. Integre a função a um fluxo de trabalho padrão do AWS Step Functions. Defina um estado de espera do AWS Step Functions e defina o valor como 24 horas. Crie e configure uma segunda função do Lambda para recuperar os resultados da auditoria e marcar os objetos do S3 adequadamente após o término do estado de espera."
      },
      {
        "id": "C",
        "text": "Crie uma função do AWS Lambda para carregar todos os objetos S3 não marcados. Recupere os resultados de cada item da API REST e marque cada objeto S3 adequadamente. Crie e configure uma regra do Amazon EventBridge para ser executada em intervalos regulares. Defina a função do Lambda como destino para a regra do EventBridge."
      },
      {
        "id": "D",
        "text": "Inicie uma instância do Amazon EC2. Implante um script na instância do EC2 para usar os resultados do banco de dados externo e marcar os objetos do S3 adequadamente. Configure um arquivo crontab para executar o script em intervalos regulares."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-280",
    "type": "single",
    "stem": "Uma empresa desenvolveu uma função do AWS Lambda para converter arquivos de imagem grandes em arquivos de saída que podem ser usados em um aplicativo visualizador de terceiros. A empresa adicionou recentemente um novo módulo à função para melhorar a saída dos arquivos gerados.",
    "ask": "No entanto, o novo módulo aumentou o tamanho do pacote e o tempo necessário para implementar as alterações no código da função.Como um desenvolvedor pode aumentar a velocidade de implementação da função Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS CodeDeploy para implantar o código da função."
      },
      {
        "id": "B",
        "text": "Use camadas Lambda para empacotar e carregar dependências."
      },
      {
        "id": "C",
        "text": "Aumente o tamanho da memória da função."
      },
      {
        "id": "D",
        "text": "Use o Amazon S3 para hospedar as dependências de função."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-281",
    "type": "single",
    "stem": "Um desenvolvedor cria um site estático para seu departamento. O desenvolvedor implanta os ativos estáticos do site em um bucket do Amazon S3 e os disponibiliza com o Amazon CloudFront. O desenvolvedor usa o controle de acesso à origem (OAC) na distribuição do CloudFront para acessar o bucket do S3.O desenvolvedor observa que os usuários podem acessar a URL raiz e páginas específicas, mas não podem acessar diretórios sem especificar um nome de arquivo. Por exemplo, /products/index.html funciona, mas /products/ retorna um erro.",
    "ask": "O desenvolvedor precisa habilitar o acesso a diretórios sem especificar um nome de arquivo, sem expor o bucket do S3 publicamente.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atualize as configurações de distribuição do CloudFront para index.html, pois o objeto raiz padrão está definido."
      },
      {
        "id": "B",
        "text": "Atualize as configurações do bucket do Amazon S3 e habilite a hospedagem de sites estáticos. Especifique index.html como o documento Index. Atualize a política do bucket do S3 para habilitar o acesso. Atualize a origem da distribuição do CloudFront para usar o endpoint do site do S3."
      },
      {
        "id": "C",
        "text": "Crie uma função do CloudFront que examine a URL da solicitação e anexe index.html quando os diretórios estiverem sendo acessados. Adicione a função como uma função do CloudFront de solicitação do visualizador ao comportamento da distribuição do CloudFront."
      },
      {
        "id": "D",
        "text": "Crie uma resposta de erro personalizada na distribuição do CloudFront com o código de erro HTTP definido como HTTP 404 Not Found e o caminho da página de resposta como /index.html. Defina o código de resposta HTTP como HTTP 200 OK."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-282",
    "type": "single",
    "stem": "Um desenvolvedor está testando uma aplicação RESTful implantada usando o Amazon API Gateway e o AWS Lambda. Ao testar o login do usuário usando credenciais inválidas, o desenvolvedor recebe o erro HTTP 405: METHOD_NOT_ALLOWED.",
    "ask": "O desenvolvedor verificou que o teste está enviando a solicitação correta para o recurso.Qual erro HTTP a aplicação deve retornar em resposta à solicitação?",
    "options": [
      {
        "id": "A",
        "text": "HTTP 401"
      },
      {
        "id": "B",
        "text": "HTTP 404"
      },
      {
        "id": "C",
        "text": "HTTP 503"
      },
      {
        "id": "D",
        "text": "HTTP 505"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-283",
    "type": "single",
    "stem": "Um desenvolvedor deve usar autenticação multifator (MFA) para acessar dados em um bucket do Amazon S3 que está em outra conta da AWS.Qual operação da API do AWS Security Token Service (AWS STS) o desenvolvedor deve usar com as informações de MFA para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Assuma a função com identidade da Web"
      },
      {
        "id": "B",
        "text": "ObterToken de Federação"
      },
      {
        "id": "C",
        "text": "Assuma a função com SAML"
      },
      {
        "id": "D",
        "text": "Assuma a Função"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-284",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor projetou uma aplicação em uma instância do Amazon EC2.",
    "ask": "A aplicação faz solicitações de API para objetos em um bucket do Amazon S3.Qual combinação de etapas garantirá que a aplicação faça as solicitações de API da maneira MAIS segura?",
    "options": [
      {
        "id": "A",
        "text": "Crie um usuário do IAM com permissões para o bucket do S3. Adicione o usuário a um grupo do IAM."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM que tenha permissões para o bucket do S3."
      },
      {
        "id": "C",
        "text": "Adicione a função do IAM a um perfil de instância. Anexe o perfil de instância à instância do EC2."
      },
      {
        "id": "D",
        "text": "Crie uma função do IAM com permissões para o bucket do S3. Atribua a função a um grupo do IAM."
      },
      {
        "id": "E",
        "text": "Armazene as credenciais do usuário do IAM nas variáveis de ambiente na instância do EC2."
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "DVA-C02-285",
    "type": "single",
    "stem": "Uma função do AWS Lambda requer acesso de leitura a um bucket do Amazon S3 e acesso de leitura/gravação a uma tabela do Amazon DynamoDB.",
    "ask": "A política de IAM correta já existe.Qual é a maneira MAIS segura de conceder à função Lambda acesso ao bucket do S3 e à tabela do DynamoDB?",
    "options": [
      {
        "id": "A",
        "text": "Anexe a política do IAM existente à função Lambda."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM para a função do Lambda. Anexe a política do IAM existente à função. Anexe a função à função do Lambda."
      },
      {
        "id": "C",
        "text": "Crie um usuário do IAM com acesso programático. Anexe a política do IAM existente ao usuário. Adicione o ID da chave de acesso do usuário e a chave de acesso secreta como variáveis de ambiente na função Lambda."
      },
      {
        "id": "D",
        "text": "Adicione o ID da chave de acesso do usuário root da conta da AWS e a chave de acesso secreta como variáveis de ambiente criptografadas na função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-286",
    "type": "single",
    "stem": "Um desenvolvedor está usando o AWS Step Functions para automatizar um fluxo de trabalho. O fluxo de trabalho define cada etapa como uma tarefa de função do AWS Lambda. O desenvolvedor observa que as execuções da máquina de estados do Step Functions falham na tarefa GetResource com um erro IllegalArgumentException ou um erro TooManyRequestsException.O desenvolvedor deseja que a máquina de estados pare de executar quando encontrar um erro IllegalArgumentException. A máquina de estados precisa tentar a tarefa GetResource novamente mais uma vez após 10 segundos se encontrar um erro TooManyRequestsException.",
    "ask": "Se a segunda tentativa falhar, o desenvolvedor deseja que a máquina de estados pare de executar.Como o desenvolvedor pode implementar a funcionalidade de nova tentativa do Lambda sem adicionar complexidade desnecessária à máquina de estados?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma tarefa de atraso após a tarefa GetResource. Adicione um catcher à tarefa GetResource. Configure o catcher com um tipo de erro TooManyRequestsException. Configure a próxima etapa como a tarefa de atraso. Configure a tarefa de atraso para aguardar um intervalo de 10 segundos. Configure a próxima etapa como a tarefa GetResource."
      },
      {
        "id": "B",
        "text": "Adicione um catcher à tarefa GetResource. Configure o catcher com um tipo de erro TooManyRequestsException, um intervalo de 10 segundos e um valor máximo de tentativas de 1. Configure a próxima etapa como a tarefa GetResource."
      },
      {
        "id": "C",
        "text": "Adicione um recuperador à tarefa GetResource. Configure o recuperador com um tipo de erro TooManyRequestsException, um intervalo de 10 segundos e um valor máximo de tentativas de 1."
      },
      {
        "id": "D",
        "text": "Duplique a tarefa GetResource. Renomeie a nova tarefa GetResource para TryAgain. Adicione um catcher à tarefa GetResource original. Configure o catcher com um tipo de erro TooManyRequestsException. Configure a próxima etapa como TryAgain."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-287",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação sem servidor que utiliza uma função do AWS Lambda. O desenvolvedor usará o AWS CloudFormation para implantar a aplicação. A aplicação gravará logs no Amazon CloudWatch Logs. O desenvolvedor criou um grupo de logs em um modelo do CloudFormation para a aplicação usar.",
    "ask": "O desenvolvedor precisa modificar o modelo do CloudFormation para disponibilizar o nome do grupo de logs para a aplicação em tempo de execução.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Use a transformação AWS::Include no CloudFormation para fornecer o nome do grupo de logs ao aplicativo."
      },
      {
        "id": "B",
        "text": "Passe o nome do grupo de logs para o aplicativo na seção de dados do usuário do modelo do CloudFormation."
      },
      {
        "id": "C",
        "text": "Use a seção Mapeamentos do modelo CloudFormation para especificar o nome do grupo de logs para o aplicativo."
      },
      {
        "id": "D",
        "text": "Passe o Amazon Resource Name (ARN) do grupo de logs como uma variável de ambiente para a função Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-288",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma tabela do Amazon DynamoDB usando a CLI da AWS.",
    "ask": "A tabela do DynamoDB deve usar criptografia do lado do servidor com uma chave de criptografia de propriedade da AWS.Como o desenvolvedor deve criar a tabela do DynamoDB para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Forneça o Nome de Recurso da Amazon (ARN) da chave no parâmetro KMSMasterKeyId durante a criação da tabela do DynamoDB."
      },
      {
        "id": "B",
        "text": "Crie uma chave gerenciada pela AWS do AWS Key Management Service (AWS KMS). Forneça o Nome de Recurso da Amazon (ARN) da chave no parâmetro KMSMasterKeyId durante a criação da tabela do DynamoDB."
      },
      {
        "id": "C",
        "text": "Crie uma chave de propriedade da AWS. Forneça o Nome de Recurso da Amazon (ARN) da chave no parâmetro KMSMasterKeyId durante a criação da tabela do DynamoDB."
      },
      {
        "id": "D",
        "text": "Crie a tabela do DynamoDB com as opções de criptografia padrão."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-289",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo executado em várias regiões da AWS. O aplicativo está apresentando problemas de desempenho em intervalos irregulares.",
    "ask": "Um desenvolvedor precisa usar o AWS X-Ray para implementar o rastreamento distribuído no aplicativo e solucionar a causa raiz dos problemas de desempenho.O que o desenvolvedor deve fazer para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Use o console do X-Ray para adicionar anotações para serviços da AWS e serviços definidos pelo usuário."
      },
      {
        "id": "B",
        "text": "Use a anotação de região que o X-Ray adiciona automaticamente para serviços da AWS. Adicione a anotação de região para serviços definidos pelo usuário."
      },
      {
        "id": "C",
        "text": "Use o daemon X-Ray para adicionar anotações para serviços da AWS e serviços definidos pelo usuário."
      },
      {
        "id": "D",
        "text": "Use a anotação de região que o X-Ray adiciona automaticamente para serviços definidos pelo usuário. Configure o X-Ray para adicionar anotação de região para serviços da AWS."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-290",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação na AWS. A aplicação utiliza uma função do AWS Lambda configurada com uma fila do Amazon Simple Queue Service (Amazon SQS), chamada fila de alta prioridade, como fonte de eventos. Um desenvolvedor está atualizando a função do Lambda com outra fila do SQS, chamada fila de baixa prioridade, como fonte de eventos. A função do Lambda deve sempre ler até 10 mensagens simultâneas da fila de alta prioridade antes de processar mensagens da fila de baixa prioridade.",
    "ask": "A função do Lambda deve ser limitada a 100 invocações simultâneas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina o tamanho do lote de mapeamento da origem do evento como 10 para a fila de alta prioridade e como 90 para a fila de baixa prioridade."
      },
      {
        "id": "B",
        "text": "Defina o atraso de entrega como 0 segundos para a fila de alta prioridade e como 10 segundos para a fila de baixa prioridade."
      },
      {
        "id": "C",
        "text": "Defina a simultaneidade máxima do mapeamento da origem do evento como 10 para a fila de alta prioridade e como 90 para a fila de baixa prioridade."
      },
      {
        "id": "D",
        "text": "Defina a janela do lote de mapeamento da origem do evento como 10 para a fila de alta prioridade e como 90 para a fila de baixa prioridade."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-291",
    "type": "single",
    "stem": "Uma empresa de visualização de dados deseja fortalecer a segurança de seus principais aplicativos. Os aplicativos são implantados na AWS em seus ambientes de desenvolvimento, preparação, pré-produção e produção. A empresa precisa criptografar todas as suas credenciais confidenciais armazenadas. As credenciais confidenciais precisam ser rotacionadas automaticamente.",
    "ask": "Uma versão das credenciais confidenciais precisa ser armazenada para cada ambiente.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Configure versões do AWS Secrets Manager para armazenar cópias diferentes das mesmas credenciais em vários ambientes."
      },
      {
        "id": "B",
        "text": "Crie uma nova versão de parâmetro no AWS Systems Manager Parameter Store para cada ambiente. Armazene as credenciais específicas do ambiente na versão de parâmetro."
      },
      {
        "id": "C",
        "text": "Configure as variáveis de ambiente no código do aplicativo. Use nomes diferentes para cada tipo de ambiente."
      },
      {
        "id": "D",
        "text": "Configure o AWS Secrets Manager para criar um novo segredo para cada tipo de ambiente. Armazene as credenciais específicas do ambiente no segredo."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-292",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está investigando um problema em parte do aplicativo de uma empresa. No aplicativo, as mensagens são enviadas para uma fila do Amazon Simple Queue Service (Amazon SQS). A função do AWS Lambda consulta mensagens da fila do SQS e envia e-mails usando o Amazon Simple Email Service (Amazon SES).",
    "ask": "Os usuários têm recebido mensagens de e-mail duplicadas durante períodos de alto tráfego.Quais motivos podem explicar a duplicação de mensagens de e-mail?",
    "options": [
      {
        "id": "A",
        "text": "As filas SQS padrão oferecem suporte à entrega de mensagens pelo menos uma vez."
      },
      {
        "id": "B",
        "text": "As filas SQS padrão suportam processamento exatamente único, portanto, as mensagens de e-mail duplicadas ocorrem devido a erro do usuário."
      },
      {
        "id": "C",
        "text": "O Amazon SES tem a autenticação DomainKeys Identified Mail (DKIM) configurada incorretamente."
      },
      {
        "id": "D",
        "text": "O tempo limite de visibilidade da fila SQS é menor ou igual ao tempo limite da função Lambda."
      },
      {
        "id": "E",
        "text": "A métrica de taxa de rejeição do Amazon SES é muito alta."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-293",
    "type": "single",
    "stem": "Um desenvolvedor está implantando a aplicação de uma empresa em instâncias do Amazon EC2. A aplicação gera gigabytes de arquivos de dados todos os dias. Os arquivos raramente são acessados, mas devem estar disponíveis para os usuários da aplicação em poucos minutos após uma solicitação durante o primeiro ano de armazenamento.",
    "ask": "A empresa deve reter os arquivos por 7 anos.Como o desenvolvedor pode implementar a aplicação para atender a esses requisitos da forma MAIS econômica possível?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os arquivos em um bucket do Amazon S3. Use a classe de armazenamento S3 Glacier Instant Retrieval. Crie uma política de ciclo de vida do S3 para transferir os arquivos para a classe de armazenamento S3 Glacier Deep Archive após 1 ano."
      },
      {
        "id": "B",
        "text": "Armazene os arquivos em um bucket do Amazon S3. Use a classe de armazenamento S3 Standard. Crie uma política de ciclo de vida do S3 para transferir os arquivos para a classe de armazenamento S3 Glacier Flexible Retrieval após 1 ano."
      },
      {
        "id": "C",
        "text": "Armazene os arquivos em um volume do Amazon Elastic Block Store (Amazon EBS). Use o Amazon Data Lifecycle Manager (Amazon DLM) para criar snapshots dos volumes EBS e armazená-los no Amazon S3."
      },
      {
        "id": "D",
        "text": "Armazene os arquivos em uma montagem do Amazon Elastic File System (Amazon EFS). Configure o gerenciamento do ciclo de vida do EFS para transferir os arquivos para a classe de armazenamento EFS Standard-Infrequent Access (Standard-IA) após 1 ano."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-294",
    "type": "single",
    "stem": "Um desenvolvedor de uma empresa implantou um aplicativo na AWS usando o AWS CloudFormation. A pilha do CloudFormation inclui parâmetros no AWS Systems Manager Parameter Store que o aplicativo usa como definições de configuração. O aplicativo pode modificar os valores dos parâmetros.Quando o desenvolvedor atualizou a pilha para criar recursos adicionais com tags, ele observou que os valores dos parâmetros foram redefinidos e que os valores ignoraram as alterações mais recentes feitas pelo aplicativo. O desenvolvedor precisa mudar a maneira como a empresa implanta a pilha do CloudFormation.",
    "ask": "O desenvolvedor também precisa evitar a redefinição dos valores dos parâmetros fora da pilha.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Modifique a pilha do CloudFormation para definir a política de exclusão como Reter para os parâmetros do Parameter Store."
      },
      {
        "id": "B",
        "text": "Crie uma tabela do Amazon DynamoDB como um recurso na pilha do CloudFormation para armazenar dados de configuração do aplicativo. Migre os parâmetros que o aplicativo está modificando do Parameter Store para a tabela do DynamoDB."
      },
      {
        "id": "C",
        "text": "Crie uma instância de banco de dados do Amazon RDS como um recurso na pilha do CloudFormation. Crie uma tabela no banco de dados para configuração de parâmetros. Migre os parâmetros que o aplicativo está modificando do Parameter Store para a tabela de configuração."
      },
      {
        "id": "D",
        "text": "Modifique a política de pilha do CloudFormation para negar atualizações nos parâmetros do Parameter Store."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-295",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de mídia social que recebe grande volume de tráfego. As postagens e interações dos usuários são atualizadas continuamente em um banco de dados do Amazon RDS. Os dados mudam com frequência e os tipos de dados podem ser complexos. O aplicativo precisa atender às solicitações de leitura com latência mínima.A arquitetura atual do aplicativo tem dificuldades para entregar essas atualizações rápidas de dados com eficiência.",
    "ask": "A empresa precisa de uma solução para melhorar o desempenho do aplicativo.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon DynamoDB Accelerator (DAX) na frente do banco de dados RDS para fornecer uma camada de cache para o alto volume de dados que mudam rapidamente."
      },
      {
        "id": "B",
        "text": "Configure o Amazon S3 Transfer Acceleration no banco de dados RDS para aumentar a velocidade de transferência de dados dos bancos de dados para o aplicativo."
      },
      {
        "id": "C",
        "text": "Adicione uma distribuição do Amazon CloudFront na frente do banco de dados RDS para fornecer uma camada de cache para o alto volume de dados que mudam rapidamente."
      },
      {
        "id": "D",
        "text": "Crie um cluster do Amazon ElastiCache para Redis. Atualize o código do aplicativo para usar uma estratégia de cache write-through e ler os dados do Redis."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-296",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda que executa uma série de operações envolvendo vários serviços da AWS. O tempo de duração da função é maior que o normal.",
    "ask": "Para determinar a causa do problema, o desenvolvedor deve investigar o tráfego entre os serviços sem alterar o código da função.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Habilite o rastreamento ativo do AWS X-Ray na função Lambda. Revise os logs no X-Ray."
      },
      {
        "id": "B",
        "text": "Configurar o AWS CloudTrail. Visualize os logs de trilha associados à função Lambda."
      },
      {
        "id": "C",
        "text": "Revise os logs da AWS Config no Amazon CloudWatch."
      },
      {
        "id": "D",
        "text": "Revise os logs do Amazon CloudWatch associados à função Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-297",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui data centers locais que executam um serviço de processamento de imagens. O serviço consiste em aplicativos em contêineres executados em clusters do Kubernetes. Todos os aplicativos têm acesso ao mesmo compartilhamento NFS para armazenamento de arquivos e dados.A empresa está ficando sem capacidade NFS nos data centers e precisa migrar para a AWS o mais rápido possível.",
    "ask": "Os clusters do Kubernetes precisam ter alta disponibilidade na AWS.Qual combinação de ações atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Transfira as informações contidas no compartilhamento NFS para um volume do Amazon Elastic Block Store (Amazon EBS). Carregue as imagens do contêiner no Amazon Elastic Container Registry (Amazon ECR)."
      },
      {
        "id": "B",
        "text": "Transfira as informações contidas no compartilhamento NFS para um volume do Amazon Elastic File System (Amazon EFS). Carregue as imagens do contêiner no Amazon Elastic Container Registry (Amazon ECR)."
      },
      {
        "id": "C",
        "text": "Crie um cluster do Amazon Elastic Container Service (Amazon ECS) para executar os aplicativos. Configure cada nó do cluster para montar o volume do Amazon Elastic Block Store (Amazon EBS) no caminho necessário para as imagens do contêiner."
      },
      {
        "id": "D",
        "text": "Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) para executar os aplicativos. Configure cada nó do cluster para montar o volume do Amazon Elastic Block Store (Amazon EBS) no caminho necessário para as imagens de contêiner."
      },
      {
        "id": "E",
        "text": "Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) para executar os aplicativos. Configure cada nó do cluster para montar o volume do Amazon Elastic File System (Amazon EFS) no caminho necessário para as imagens de contêiner."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-298",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de análise que utiliza uma função do AWS Lambda para processar dados de transações de forma assíncrona. Um desenvolvedor observa que invocações assíncronas da função Lambda às vezes falham.",
    "ask": "Quando ocorrem falhas nas invocações da função Lambda, o desenvolvedor deseja invocar uma segunda função Lambda para tratar erros e registrar detalhes.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure um destino de função Lambda com uma condição de falha. Especifique a função Lambda como o tipo de destino. Especifique o Nome de Recurso da Amazon (ARN) da função Lambda de tratamento de erros como o recurso."
      },
      {
        "id": "B",
        "text": "Habilite o rastreamento ativo do AWS X-Ray na função Lambda inicial. Configure o X-Ray para capturar rastreamentos de pilha das invocações com falha. Invoque a função Lambda de tratamento de erros incluindo os rastreamentos de pilha no objeto de evento."
      },
      {
        "id": "C",
        "text": "Configure um gatilho de função Lambda com uma condição de falha. Especifique a função Lambda como o tipo de destino. Especifique o Nome de Recurso da Amazon (ARN) da função Lambda de tratamento de erros como o recurso."
      },
      {
        "id": "D",
        "text": "Crie um alarme de verificação de status na função Lambda inicial. Configure o alarme para invocar a função Lambda de tratamento de erros quando o alarme for iniciado. Certifique-se de que o alarme transmita o rastreamento de pilha no objeto de evento."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-299",
    "type": "single",
    "stem": "Uma empresa introduziu um novo recurso que deveria ser acessível apenas a um grupo específico de clientes premium. Um desenvolvedor precisa ter a capacidade de ativar e desativar o recurso em resposta ao desempenho e ao feedback.",
    "ask": "O desenvolvedor precisa de uma solução para validar e implantar essas configurações rapidamente, sem causar interrupções.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS AppConfig para gerenciar a configuração do recurso e validar e implantar alterações. Use sinalizadores de recurso para ativar e desativar o recurso."
      },
      {
        "id": "B",
        "text": "Use o AWS Secrets Manager para gerenciar e validar com segurança as configurações de recursos. Habilite regras de ciclo de vida para ativar e desativar o recurso."
      },
      {
        "id": "C",
        "text": "Use o AWS Config para gerenciar a configuração e a validação dos recursos. Configure regras do AWS Config para ativar e desativar o recurso com base em condições predefinidas."
      },
      {
        "id": "D",
        "text": "Use o AWS Systems Manager Parameter Store para armazenar e validar as configurações do recurso. Habilite regras de ciclo de vida para ativar e desativar o recurso."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-300",
    "type": "single",
    "stem": "Um desenvolvedor precisa da aprovação de um proprietário do produto antes de poder implantar o código de um aplicativo em produção. O desenvolvedor usa o AWS CodePipeline para implantar o aplicativo.",
    "ask": "O desenvolvedor configura um tópico do Amazon Simple Notification Service (Amazon SNS) para enviar notificações ao proprietário do produto.Qual solução é a maneira operacional MAIS eficiente para o desenvolvedor receber a aprovação do proprietário do produto?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um novo estágio ao CodePipeline antes da implantação de produção. Adicione uma ação de aprovação manual ao novo estágio. Adicione uma nova regra de notificação nas configurações do pipeline. Especifique a aprovação manual como o evento que inicia a notificação. Especifique o Nome de Recurso da Amazon (ARN) do tópico do SNS para notificar o proprietário do produto."
      },
      {
        "id": "B",
        "text": "Desenvolver uma máquina de estados do AWS Step Functions que envie uma notificação ao proprietário do produto e aceite uma aprovação. Adicionar um novo estágio ao CodePipeline antes da implantação em produção. Adicionar a máquina de estados como uma ação do Step Functions ao novo estágio."
      },
      {
        "id": "C",
        "text": "Adicione uma ação de aprovação manual ao estágio de implantação de produção existente no CodePipeline. Especifique o Nome de Recurso da Amazon (ARN) do tópico do SNS ao configurar a nova ação de aprovação manual."
      },
      {
        "id": "D",
        "text": "Edite as configurações no CodePipeline. Crie uma nova regra de notificação. Especifique a aprovação manual como o evento que inicia a notificação. Crie um novo destino de notificação. Especifique o tópico do SNS para notificar o proprietário do produto. Salve a regra de notificação."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-301",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação sem servidor na AWS para um fluxo de trabalho que processa altos volumes de dados. No fluxo de trabalho, uma máquina de estados do AWS Step Functions invoca diversas funções do AWS Lambda.Uma das funções do Lambda falha ocasionalmente devido a erros de tempo limite durante períodos de alta demanda.",
    "ask": "O desenvolvedor deve garantir que o fluxo de trabalho tente novamente a invocação da função com falha automaticamente caso ocorra um erro de tempo limite.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um campo \"Repetir\" na definição da máquina de estados do Step Functions. Configure a máquina de estados com o número máximo de tentativas de repetição e o tipo de erro de tempo limite para a repetição."
      },
      {
        "id": "B",
        "text": "Adicione um campo de tempo limite na definição da máquina de estados do Step Functions. Configure a máquina de estados com o número máximo de tentativas de repetição."
      },
      {
        "id": "C",
        "text": "Adicione um estado de falha à definição da máquina de estados do Step Functions. Configure a máquina de estados com o número máximo de tentativas de repetição."
      },
      {
        "id": "D",
        "text": "Atualize a máquina de estados do Step Functions para passar a solicitação de invocação para um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva uma função Lambda no tópico do SNS. Configure a função Lambda com o número máximo de tentativas de repetição para um erro do tipo timeout."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-302",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação serverless na AWS. A aplicação inclui uma função Lambda da AWS. A função Lambda processa dados e os armazena em um banco de dados Amazon RDS para PostgreSQL. Um desenvolvedor criou credenciais de usuário no banco de dados para a aplicação.O desenvolvedor precisa usar o AWS Secrets Manager para gerenciar as credenciais de usuário. A senha deve ser rotacionada regularmente.",
    "ask": "A solução precisa garantir alta disponibilidade e nenhum tempo de inatividade para a aplicação durante a rotação de senhas.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a rotação gerenciada com a estratégia de rotação de usuário único."
      },
      {
        "id": "B",
        "text": "Configure a rotação gerenciada com a estratégia de rotação de usuários alternados."
      },
      {
        "id": "C",
        "text": "Configure a rotação automática com a estratégia de rotação de usuário único."
      },
      {
        "id": "D",
        "text": "Configure a rotação automática com a estratégia de rotação de usuários alternados."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-303",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação na AWS. A aplicação consiste em um site estático hospedado no Amazon S3. A aplicação inclui APIs do Amazon API Gateway que invocam funções do AWS Lambda. Durante um período de alto tráfego na aplicação, os usuários relataram que ela estava lenta em intervalos irregulares.",
    "ask": "Não houve requisições com falha.Um desenvolvedor precisa encontrar as execuções lentas em todas as funções do Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Execute uma consulta em todos os grupos de logs de funções do Lambda usando o Amazon CloudWatch Logs Insights. Filtre por tipo de relatório e classifique em ordem decrescente pela duração da execução da função do Lambda."
      },
      {
        "id": "B",
        "text": "Habilite o AWS CloudTrail Insights na conta onde as funções do Lambda estão em execução. Após a conclusão do processamento do CloudTrail Insights, revise-o para encontrar as funções anômalas."
      },
      {
        "id": "C",
        "text": "Habilite o AWS X-Ray para todas as funções do Lambda. Configure um insight do X-Ray em um novo grupo que inclua todas as funções do Lambda. Após a conclusão do processamento do insight do X-Ray, revise os logs do X-Ray."
      },
      {
        "id": "D",
        "text": "Configure o AWS Glue para rastrear os logs no Amazon CloudWatch Logs para as funções do Lambda. Configure uma tarefa do AWS Glue para transformar os logs em um formato estruturado e gerá-los no Amazon S3. Use o painel do Amazon CloudWatch para visualizar as funções mais lentas com base na duração."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-304",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação serverless na AWS. A aplicação utiliza o Amazon API Gateway e o AWS Lambda.",
    "ask": "A empresa deseja implantar a aplicação em seus ambientes de desenvolvimento, teste e produção.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Use variáveis de estágio do API Gateway e crie aliases do Lambda para referenciar recursos específicos do ambiente."
      },
      {
        "id": "B",
        "text": "Use o Amazon Elastic Container Service (Amazon ECS) para implantar o aplicativo nos ambientes."
      },
      {
        "id": "C",
        "text": "Duplique o código para cada ambiente. Implante o código em um estágio separado do API Gateway."
      },
      {
        "id": "D",
        "text": "Use o AWS Elastic Beanstalk para implantar o aplicativo nos ambientes."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-305",
    "type": "single",
    "stem": "Um desenvolvedor usa o AWS CloudFormation para implantar uma API do Amazon API Gateway e uma máquina de estados do AWS Step Functions. A máquina de estados deve referenciar a API do API Gateway após a implantação do modelo do CloudFormation.",
    "ask": "O desenvolvedor precisa de uma solução que utilize a máquina de estados para referenciar o endpoint do API Gateway.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Configure o modelo CloudFormation para referenciar o ponto de extremidade da API na propriedade DefinitionSubstitutions para o recurso AWS::StepFunctions::StateMachine."
      },
      {
        "id": "B",
        "text": "Configure o modelo do CloudFormation para armazenar o endpoint da API em uma variável de ambiente para o recurso AWS::StepFunctions::StateMachine. Configure a máquina de estados para referenciar a variável de ambiente."
      },
      {
        "id": "C",
        "text": "Configure o modelo do CloudFormation para armazenar o endpoint da API em um recurso padrão AWS::SecretsManager::Secret. Configure a máquina de estados para referenciar o recurso."
      },
      {
        "id": "D",
        "text": "Configure o modelo do CloudFormation para armazenar o endpoint da API em um recurso padrão AWS::AppConfig::ConfigurationProfile. Configure a máquina de estados para referenciar o recurso."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-306",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação na AWS. A aplicação inclui uma função do AWS Lambda que processa mensagens de uma fila do Amazon Simple Queue Service (Amazon SQS).A função Lambda às vezes falha ou expira.",
    "ask": "O desenvolvedor precisa descobrir por que a função Lambda falha ao processar algumas mensagens.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o tempo limite máximo da função Lambda para 15 minutos. Verifique o histórico de eventos do AWS CloudTrail para obter detalhes sobre os erros."
      },
      {
        "id": "B",
        "text": "Aumente o tempo limite de visibilidade da fila SQS. Verifique os logs no Amazon CloudWatch Logs para obter detalhes sobre os erros."
      },
      {
        "id": "C",
        "text": "Crie uma fila de mensagens mortas. Configure a função Lambda para enviar as mensagens com falha para a fila de mensagens mortas."
      },
      {
        "id": "D",
        "text": "Crie uma tabela do Amazon DynamoDB. Atualize a função Lambda para enviar as mensagens com falha para a tabela do DynamoDB."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-307",
    "type": "single",
    "stem": "Um desenvolvedor precisa implantar uma aplicação em três regiões da AWS usando o AWS CloudFormation. Cada região usará um ambiente do AWS Elastic Beanstalk com um Application Load Balancer (ALB).",
    "ask": "O desenvolvedor deseja usar o AWS Certificate Manager (ACM) para implantar certificados SSL em cada ALB.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um certificado no ACM em qualquer uma das regiões. Importe o certificado para o ALB de cada região."
      },
      {
        "id": "B",
        "text": "Crie um certificado global no ACM. Atualize o modelo do CloudFormation para implantar o certificado global em cada ALB."
      },
      {
        "id": "C",
        "text": "Crie um certificado no ACM para cada região. Importe o certificado para o ALB de cada região."
      },
      {
        "id": "D",
        "text": "Crie um certificado no ACM na região us-east-1. Atualize o modelo do CloudFormation para implantar o certificado em cada ALB."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-308",
    "type": "single",
    "stem": "Uma empresa precisa implantar todos os seus recursos de nuvem usando modelos do AWS CloudFormation. Um desenvolvedor deve criar uma notificação automática do Amazon Simple Notification Service (Amazon SNS) para ajudar a aplicar essa regra.",
    "ask": "O desenvolvedor cria um tópico do SNS e inscreve o endereço de e-mail da equipe de segurança da empresa no tópico.A equipe de segurança deve receber uma notificação imediatamente se uma função do IAM for criada sem o uso do CloudFormation.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda para filtrar eventos do CloudTrail se uma função tiver sido criada sem o CloudFormation. Configure a função do Lambda para publicar no tópico do SNS. Crie uma programação do Amazon EventBridge para invocar a função do Lambda a cada 15 minutos."
      },
      {
        "id": "B",
        "text": "Crie uma tarefa do AWS Fargate no Amazon Elastic Container Service (Amazon ECS) para filtrar eventos do CloudTrail caso uma função tenha sido criada sem o CloudFormation. Configure a tarefa do Fargate para publicar no tópico do SNS. Crie uma programação do Amazon EventBridge para executar a tarefa do Fargate a cada 15 minutos."
      },
      {
        "id": "C",
        "text": "Inicie uma instância do Amazon EC2 que inclua um script para filtrar eventos do CloudTrail caso uma função tenha sido criada sem o CloudFormation. Configure o script para publicar no tópico do SNS. Crie uma tarefa cron para executar o script na instância do EC2 a cada 15 minutos."
      },
      {
        "id": "D",
        "text": "Crie uma regra do Amazon EventBridge para filtrar eventos do CloudTrail caso uma função tenha sido criada sem o CloudFormation. Especifique o tópico do SNS como alvo da regra do EventBridge."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-309",
    "type": "single",
    "stem": "Uma empresa está adotando a computação sem servidor para alguns de seus novos serviços. Uma equipe de desenvolvimento precisa criar uma infraestrutura sem servidor usando o AWS Serverless Application Model (AWS SAM).",
    "ask": "Toda a infraestrutura deve ser implantada usando modelos do AWS CloudFormation.O que a equipe de desenvolvimento deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma seção Recursos aos modelos do CloudFormation que contenham recursos AWS::Lambda::Function."
      },
      {
        "id": "B",
        "text": "Adicione uma seção Mapeamentos aos modelos do CloudFormation que contenham AWS::Serverless::Function e AWS::Serverless::API."
      },
      {
        "id": "C",
        "text": "Adicione uma seção Transform aos modelos do CloudFormation. Use a sintaxe do AWS SAM para definir os recursos."
      },
      {
        "id": "D",
        "text": "Adicione uma seção Parâmetros aos modelos do CloudFormation que especifique a seção AWS SAM Globals relevante."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-310",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que invoca funções do AWS Lambda de forma assíncrona para processar eventos. O desenvolvedor percebe que uma função do Lambda falha ao processar alguns eventos em momentos aleatórios.",
    "ask": "O desenvolvedor precisa investigar os eventos com falha e capturar os eventos que a função do Lambda não consegue processar.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma regra do Amazon EventBridge para a função Lambda. Configure a regra do EventBridge para reagir a eventos com falha e armazená-los em uma tabela do Amazon DynamoDB."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda com uma fila de mensagens mortas baseada no Amazon Kinesis. Atualize a função de execução da função Lambda com as permissões necessárias."
      },
      {
        "id": "C",
        "text": "Configure a função Lambda com uma fila de mensagens mortas do Amazon Simple Queue Service (Amazon SQS). Atualize a função de execução da função Lambda com as permissões necessárias."
      },
      {
        "id": "D",
        "text": "Configure a função Lambda com uma fila de mensagens mortas FIFO do Amazon Simple Queue Service (Amazon SQS). Atualize a função de execução da função Lambda com as permissões necessárias."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-311",
    "type": "single",
    "stem": "Uma empresa desenvolveu um aplicativo sem servidor para seu site de comércio eletrônico. O aplicativo inclui uma API REST no Amazon API Gateway que invoca uma função do AWS Lambda. A função Lambda processa dados e os armazena na tabela do Amazon DynamoDB. A função Lambda chama uma API de aplicativo de ações de terceiros para processar o pedido. Após o processamento do pedido, a função Lambda retorna um código de status HTTP 200 sem corpo para o cliente.Durante o pico de uso, quando as chamadas da API excedem um determinado limite, o aplicativo de ações de terceiros às vezes falha ao processar os dados e responde com mensagens de erro.",
    "ask": "A empresa precisa de uma solução que não sobrecarregue o aplicativo de ações de terceiros.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a API REST no API Gateway para gravar as solicitações diretamente no DynamoDB. Configure uma função intrínseca do DynamoDB para realizar a transformação. Configure um fluxo do DynamoDB para chamar a API do aplicativo de terceiros a cada nova linha. Exclua a função Lambda."
      },
      {
        "id": "B",
        "text": "Configure a API REST no API Gateway para gravar as solicitações diretamente em uma fila do Amazon Simple Queue Service (Amazon SQS). Configure a função Lambda com uma simultaneidade reservada igual ao limite do aplicativo de terceiros. Configure a função Lambda para processar as mensagens da fila SQS."
      },
      {
        "id": "C",
        "text": "Configure a API REST no API Gateway para gravar as solicitações diretamente em um tópico do Amazon Simple Notification Service (Amazon SNS). Configure a função Lambda com uma simultaneidade provisionada igual ao limite do aplicativo de terceiros. Configure a função Lambda para processar as mensagens do tópico do SNS."
      },
      {
        "id": "D",
        "text": "Configure a API REST no API Gateway para gravar as solicitações diretamente no Amazon Athena. Configure a transformação dos dados usando SQL com vários locais de resultados de consulta configurados para apontar para a tabela do DynamoDB e a API do aplicativo de atendimento de estoque de terceiros. Exclua a função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-312",
    "type": "single",
    "stem": "Uma empresa hospeda seu aplicativo na AWS. O aplicativo é executado em um cluster do Amazon Elastic Container Service (Amazon ECS) que utiliza o AWS Fargate. O cluster é executado por trás de um Application Load Balancer. O aplicativo armazena dados em um banco de dados Amazon Aurora.",
    "ask": "Um desenvolvedor criptografa e gerencia as credenciais do banco de dados dentro do aplicativo.A empresa deseja usar um método de armazenamento de credenciais mais seguro e implementar a rotação periódica de credenciais.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Migre as credenciais secretas para os grupos de parâmetros do Amazon RDS. Criptografe o parâmetro usando uma chave do AWS Key Management Service (AWS KMS). Ative a rotação de segredos. Use as políticas e funções do IAM para conceder permissões do AWS KMS para acessar o Amazon RDS."
      },
      {
        "id": "B",
        "text": "Migre as credenciais para o AWS Systems Manager Parameter Store. Criptografe o parâmetro usando uma chave do AWS Key Management Service (AWS KMS). Ative a rotação de segredos. Use as políticas e funções do IAM para conceder permissões do Amazon ECS Fargate para acessar o AWS Secrets Manager."
      },
      {
        "id": "C",
        "text": "Migre as credenciais para as variáveis de ambiente do ECS Fargate. Criptografe as credenciais usando uma chave do AWS Key Management Service (AWS KMS). Ative a rotação de segredos. Use as políticas e funções do IAM para conceder permissões ao Amazon ECS Fargate para acessar o AWS Secrets Manager."
      },
      {
        "id": "D",
        "text": "Migre as credenciais para o AWS Secrets Manager. Criptografe as credenciais usando uma chave do AWS Key Management Service (AWS KMS). Ative a rotação de segredos. Use as políticas e funções do IAM para conceder permissões do Amazon ECS Fargate para acessar o AWS Secrets Manager usando chaves."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-313",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo móvel. O aplicativo inclui uma API REST do Amazon API Gateway que invoca funções do AWS Lambda. As funções do Lambda processam dados do aplicativo.A empresa precisa testar funções do Lambda atualizadas que contenham novos recursos. A empresa deve realizar esses testes com um subconjunto de usuários antes da implantação.",
    "ask": "Os testes não devem afetar outros usuários do aplicativo.Qual solução atenderá a esses requisitos com o MENOR esforço operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma nova versão de cada função Lambda com um alias ponderado. Configure um valor de peso para cada versão da função Lambda. Atualize o novo alias ponderado Amazon Resource Name (ARN) na API REST."
      },
      {
        "id": "B",
        "text": "Crie uma nova API REST no API Gateway. Configure uma integração com proxy Lambda para conectar-se a várias funções Lambda. Habilite as configurações de canário na fase de implantação. Especifique uma porcentagem menor do tráfego da API para a nova versão da função Lambda."
      },
      {
        "id": "C",
        "text": "Crie uma nova versão de cada função do Lambda. Integre uma implantação canário predefinida no AWS CodeDeploy para transferir o tráfego para as novas versões de forma gradual e automática."
      },
      {
        "id": "D",
        "text": "Crie uma nova API REST no API Gateway. Configure uma integração sem proxy do Lambda para se conectar a várias funções do Lambda. Especifique os parâmetros e propriedades necessários no API Gateway. Habilite as configurações do canário na fase de implantação. Especifique uma porcentagem menor do tráfego da API para a nova versão da função do Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-314",
    "type": "single",
    "stem": "Um desenvolvedor trabalha para uma empresa que possui apenas uma conta de pré-produção na AWS com uma pilha do AWS CloudFormation Serverless Application Model (AWS SAM). O desenvolvedor fez alterações em uma função existente do AWS Lambda especificada no modelo do AWS SAM e em tópicos adicionais do Amazon Simple Notification Service (Amazon SNS).O desenvolvedor deseja realizar uma implantação única das alterações para testar se elas estão funcionando.",
    "ask": "O desenvolvedor não deseja impactar o aplicativo de pré-produção existente que está sendo usado por outros membros da equipe como parte do pipeline de lançamento.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use a CLI do AWS SAM para empacotar e implantar o aplicativo SAM na conta da AWS de pré-produção. Especifique o parâmetro de depuração."
      },
      {
        "id": "B",
        "text": "Use a CLI do AWS SAM para empacotar e criar um conjunto de alterações na conta da AWS de pré-produção. Execute o conjunto de alterações em uma nova conta da AWS designada para um ambiente de desenvolvimento."
      },
      {
        "id": "C",
        "text": "Use a CLI do AWS SAM para empacotar e implantar o aplicativo SAM em uma nova conta da AWS designada para um ambiente de desenvolvimento."
      },
      {
        "id": "D",
        "text": "Atualize a pilha do CloudFormation na conta de pré-produção. Adicione um estágio separado que aponte para uma nova conta da AWS designada para um ambiente de desenvolvimento."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-315",
    "type": "single",
    "stem": "Uma empresa criou uma plataforma de eventos online. Para cada evento, a empresa organiza questionários e gera tabelas de classificação com base nas pontuações dos questionários. A empresa armazena os dados da tabela de classificação no Amazon DynamoDB e os retém por 30 dias após a conclusão do evento. Em seguida, a empresa usa uma tarefa agendada para excluir os dados antigos da tabela de classificação.A tabela do DynamoDB é configurada com uma capacidade de gravação fixa.",
    "ask": "Durante os meses em que ocorrem muitos eventos, as solicitações da API de gravação do DynamoDB são limitadas quando a tarefa de exclusão agendada é executada.Um desenvolvedor deve criar uma solução de longo prazo que exclua os dados antigos da tabela de classificação e otimize a taxa de transferência de gravação.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure um atributo TTL para os dados da tabela de classificação."
      },
      {
        "id": "B",
        "text": "Use o DynamoDB Streams para agendar e excluir os dados da tabela de classificação."
      },
      {
        "id": "C",
        "text": "Use o AWS Step Functions para agendar e excluir os dados da tabela de classificação."
      },
      {
        "id": "D",
        "text": "Defina uma capacidade de gravação maior quando o trabalho de exclusão agendado for executado."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-316",
    "type": "single",
    "stem": "Uma empresa utiliza uma função do AWS Lambda que lê mensagens de uma fila padrão do Amazon Simple Queue Service (Amazon SQS). A função do Lambda faz uma chamada HTTP para uma API de terceiros para cada mensagem.",
    "ask": "A empresa deseja garantir que a função do Lambda não sobrecarregue a API de terceiros com mais de duas solicitações simultâneas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma simultaneidade provisionada de dois na função Lambda."
      },
      {
        "id": "B",
        "text": "Configure um tamanho de lote de dois no mapeamento de origem de eventos do Amazon SQS para a função Lambda."
      },
      {
        "id": "C",
        "text": "Configure a filtragem de eventos do Lambda para processar duas mensagens do Amazon SQS em cada invocação."
      },
      {
        "id": "D",
        "text": "Configure uma simultaneidade máxima de dois no mapeamento de origem de eventos do Amazon SQS para a função Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-317",
    "type": "single",
    "stem": "Uma empresa está usando o Amazon API Gateway para desenvolver uma API para seu aplicativo na AWS. Um desenvolvedor precisa testar e gerar respostas da API.",
    "ask": "Outras equipes precisam testar a API imediatamente.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma solicitação de integração simulada no API Gateway. Configure a solicitação de integração e a resposta de integração do método para associar uma resposta a um código de status específico."
      },
      {
        "id": "B",
        "text": "Configure os validadores de solicitação no arquivo de definição OpenAPI da API. Importe as definições OpenAPI para o API Gateway para testar a API."
      },
      {
        "id": "C",
        "text": "Configure uma resposta de gateway para a API no API Gateway. Configure cabeçalhos de resposta com códigos de status HTTP e respostas codificados."
      },
      {
        "id": "D",
        "text": "Configure um autorizador Lambda baseado em parâmetros de solicitação para controlar o acesso à API. Configure a função Lambda com o modelo de mapeamento necessário."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-318",
    "type": "single",
    "stem": "Uma empresa está lançando um novo recurso. Os usuários podem solicitar acesso antecipado ao novo recurso usando um formulário de inscrição. A empresa espera um aumento repentino nas solicitações quando o formulário estiver disponível. Cada solicitação será armazenada como um item em uma tabela do Amazon DynamoDB.Cada item conterá o nome de usuário, a data de envio e o status de validação UNVALIDATED, VALID ou NOT VALID. Cada item também conterá a classificação do usuário sobre o processo em uma escala de 1 a 5.Cada usuário pode enviar uma solicitação.",
    "ask": "Para a tabela do DynamoDB, o desenvolvedor deve escolher uma chave de partição que forneça à carga de trabalho registros bem distribuídos entre as partições.Qual atributo do DynamoDB atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Nome de usuário"
      },
      {
        "id": "B",
        "text": "Data de submissão"
      },
      {
        "id": "C",
        "text": "Status de validação"
      },
      {
        "id": "D",
        "text": "Classificação do processo em uma escala de 1 a 5"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-319",
    "type": "single",
    "stem": "Um desenvolvedor está criando um site corporativo acessível ao público, composto apenas por ativos estáticos. O desenvolvedor está hospedando o site no Amazon S3 e disponibilizando-o aos usuários por meio de uma distribuição do Amazon CloudFront. Os usuários deste aplicativo não devem conseguir acessar o conteúdo do aplicativo diretamente de um bucket do S3.",
    "ask": "Todo o conteúdo deve ser disponibilizado por meio da distribuição do Amazon CloudFront.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo controle de acesso de origem (OAC) no CloudFront. Configure a origem da distribuição do CloudFront para usar o novo OAC. Atualize a política de bucket do S3 para permitir que o OAC do CloudFront com acesso de leitura e gravação acesse o Amazon S3 como origem."
      },
      {
        "id": "B",
        "text": "Atualize as configurações do bucket do S3. Habilite a configuração \"Bloquear todo o acesso público\" no Amazon S3. Configure as distribuições do CloudFront com o Amazon S3 como origem. Atualize a política do bucket do S3 para permitir acesso de gravação do CloudFront."
      },
      {
        "id": "C",
        "text": "Atualize as configurações do site estático do bucket S3. Habilite a hospedagem de sites estáticos e especifique documentos de índice e erro. Atualize a origem do CloudFront para usar o endpoint do site do bucket S3."
      },
      {
        "id": "D",
        "text": "Atualize a origem da distribuição do CloudFront para enviar um cabeçalho personalizado. Atualize a política do bucket do S3 com uma condição usando a chave aws:RequestTag/tag-key. Configure a tag-key como o nome do cabeçalho personalizado, e o valor correspondente será o valor do cabeçalho."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-320",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação que chama uma API externa para obter dados, processa os dados e salva o resultado no Amazon S3. O desenvolvedor criou uma imagem de contêiner com todas as dependências necessárias para executar a aplicação como um contêiner.A aplicação é executada localmente e requer recursos mínimos de CPU e RAM. O desenvolvedor criou um cluster do Amazon ECS.",
    "ask": "O desenvolvedor precisa executar a aplicação de hora em hora no Amazon Elastic Container Service (Amazon ECS).Qual solução atenderá a esses requisitos com a MENOR sobrecarga de gerenciamento de infraestrutura?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um provedor de capacidade para gerenciar instâncias."
      },
      {
        "id": "B",
        "text": "Adicione uma instância do Amazon EC2 que execute o aplicativo."
      },
      {
        "id": "C",
        "text": "Defina uma definição de tarefa com um tipo de inicialização do AWS Fargate."
      },
      {
        "id": "D",
        "text": "Crie um cluster do Amazon ECS e adicione o recurso de grupos de nós gerenciados para executar o aplicativo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-321",
    "type": "single",
    "stem": "Uma empresa administra seu website na AWS. A empresa publica enquetes diárias em seu website e publica os resultados no dia seguinte. O website armazena as respostas dos usuários em uma tabela do Amazon DynamoDB. Após a publicação dos resultados da enquete, a empresa não precisa mais manter as respostas dos usuários.Um desenvolvedor precisa implementar uma solução que remova automaticamente as respostas antigas dos usuários da tabela do DynamoDB. O desenvolvedor adiciona um novo atributo expiration_date à tabela do DynamoDB.",
    "ask": "O desenvolvedor planeja usar o atributo expiration_date para a automação.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda para excluir respostas antigas de usuários com base no atributo expiration_date. Crie uma programação do Amazon EventBridge para executar a função do Lambda diariamente."
      },
      {
        "id": "B",
        "text": "Crie uma tarefa do AWS Fargate no Amazon Elastic Container Service (Amazon ECS) para excluir respostas antigas de usuários com base no atributo expiration_date. Crie uma programação do Amazon EventBridge para executar a tarefa do Fargate diariamente."
      },
      {
        "id": "C",
        "text": "Crie uma tarefa do AWS Glue para excluir respostas antigas de usuários com base no atributo expiration_date. Crie um agendamento de gatilho do AWS Glue para executar a tarefa diariamente."
      },
      {
        "id": "D",
        "text": "Habilite o TTL na tabela do DynamoDB e especifique o atributo expiration_date. Expire respostas antigas de usuários usando o TTL do DynamoDB."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-322",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma demonstração simples de prova de conceito usando as funções do AWS CloudFormation e do AWS Lambda. A demonstração usará um modelo do CloudFormation para implantar uma função do Lambda existente. A função do Lambda usa pacotes de implantação e dependências armazenados no Amazon S3. O desenvolvedor definiu um recurso AWS::Lambda::Function em um modelo do CloudFormation.",
    "ask": "O desenvolvedor precisa adicionar o bucket do S3 ao modelo do CloudFormation.O que o desenvolvedor deve fazer para atender a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Adicione o código da função no modelo CloudFormation inline como a propriedade de código."
      },
      {
        "id": "B",
        "text": "Adicione o código da função no modelo CloudFormation como a propriedade ZipFile."
      },
      {
        "id": "C",
        "text": "Encontre a chave S3 para a função Lambda. Adicione a chave S3 como propriedade ZipFile no modelo CloudFormation."
      },
      {
        "id": "D",
        "text": "Adicione a chave e o bucket relevantes às propriedades S3Bucket e S3Key no modelo CloudFormation."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-323",
    "type": "single",
    "stem": "Um desenvolvedor está construindo uma aplicação baseada em microsserviços usando Python na AWS e diversos serviços da AWS. O desenvolvedor precisa usar o AWS X-Ray. O desenvolvedor visualiza o mapa de serviços usando o console para visualizar as dependências dos serviços.",
    "ask": "Durante os testes, o desenvolvedor percebe que alguns serviços estão faltando no mapa.O que o desenvolvedor pode fazer para garantir que todos os serviços apareçam no mapa de serviços do X-Ray?",
    "options": [
      {
        "id": "A",
        "text": "Modifique a configuração do agente X-Ray Python em cada serviço para aumentar a taxa de amostragem."
      },
      {
        "id": "B",
        "text": "Instrumente o aplicativo usando o SDK X-Ray para Python. Instale o SDK X-Ray para todos os serviços que o aplicativo utiliza."
      },
      {
        "id": "C",
        "text": "Habilite a agregação de dados do X-Ray no Amazon CloudWatch Logs para todos os serviços que o aplicativo usa."
      },
      {
        "id": "D",
        "text": "Aumente o valor do tempo limite do mapa do serviço X-Ray no console do X-Ray."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-324",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando um aplicativo em contêiner na AWS. O aplicativo se comunica com um serviço de terceiros usando chaves de API.",
    "ask": "O desenvolvedor precisa de uma maneira segura de armazenar as chaves de API e passá-las para o aplicativo em contêiner.Quais soluções atenderão a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as chaves de API como um parâmetro SecureString no AWS Systems Manager Parameter Store. Conceda ao aplicativo acesso para recuperar o valor do Parameter Store."
      },
      {
        "id": "B",
        "text": "Armazene as chaves de API em modelos do AWS CloudFormation usando codificação base64. Passe as chaves de API para o aplicativo por meio de variáveis de ambiente de definição de contêiner."
      },
      {
        "id": "C",
        "text": "Adicione um novo parâmetro do AWS CloudFormation ao modelo do CloudFormation. Passe as chaves de API para o aplicativo usando as variáveis de ambiente de definição do contêiner."
      },
      {
        "id": "D",
        "text": "Incorpore as chaves de API no aplicativo. Crie a imagem do contêiner localmente. Carregue a imagem do contêiner no Amazon Elastic Container Registry (Amazon ECR)."
      },
      {
        "id": "E",
        "text": "Armazene as chaves de API como um parâmetro SecretString no AWS Secrets Manager. Conceda ao aplicativo acesso para recuperar o valor do Secrets Manager."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "DVA-C02-325",
    "type": "single",
    "stem": "Uma empresa executa um aplicativo na AWS. O aplicativo armazena dados em uma tabela do Amazon DynamoDB. Algumas consultas estão demorando muito para serem executadas. Essas consultas lentas envolvem um atributo que não é a chave de partição ou a chave de classificação da tabela.Espera-se que a quantidade de dados que o aplicativo armazena na tabela do DynamoDB aumente significativamente.",
    "ask": "Um desenvolvedor precisa aumentar o desempenho das consultas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o tamanho da página para cada solicitação definindo o parâmetro Limite como um valor maior que o padrão. Configure o aplicativo para tentar novamente qualquer solicitação que exceda a taxa de transferência provisionada."
      },
      {
        "id": "B",
        "text": "Crie um índice secundário global (GSI). Defina o atributo de consulta como a chave de partição do índice."
      },
      {
        "id": "C",
        "text": "Execute uma operação de varredura paralela emitindo solicitações de varredura individuais. Nos parâmetros, especifique o segmento para as solicitações de varredura e o número total de segmentos para a varredura paralela."
      },
      {
        "id": "D",
        "text": "Ative o dimensionamento automático da capacidade de leitura para a tabela do DynamoDB. Aumente as unidades de capacidade máxima de leitura (RCUs)."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-326",
    "type": "single",
    "stem": "Uma empresa executa um aplicativo de pagamento em instâncias do Amazon EC2 por trás de um Balanceamento de Carga de Aplicativo. As instâncias do EC2 são executadas em um grupo de Auto Scaling em várias Zonas de Disponibilidade. O aplicativo precisa recuperar segredos do aplicativo durante a inicialização e exportá-los como variáveis de ambiente.",
    "ask": "Esses segredos devem ser criptografados em repouso e precisam ser rotacionados mensalmente.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Salve os segredos em um arquivo de texto e armazene-o no Amazon S3. Provisione uma chave gerenciada pelo cliente. Use a chave para criptografia de segredos no Amazon S3. Leia o conteúdo do arquivo de texto e a exportação como variáveis de ambiente. Configure o S3 Object Lambda para rotacionar o arquivo de texto mensalmente."
      },
      {
        "id": "B",
        "text": "Salve os segredos como strings no AWS Systems Manager Parameter Store e use a chave padrão do AWS Key Management Service (AWS KMS). Configure um script de dados de usuário do Amazon EC2 para recuperar os segredos durante a inicialização e exportá-los como variáveis de ambiente. Configure uma função do AWS Lambda para rotacionar os segredos no Parameter Store mensalmente."
      },
      {
        "id": "C",
        "text": "Salve os segredos como variáveis de ambiente codificadas em base64 nas propriedades do aplicativo. Recupere os segredos durante a inicialização do aplicativo. Referencie os segredos no código do aplicativo. Escreva um script para rotacionar os segredos salvos como variáveis de ambiente."
      },
      {
        "id": "D",
        "text": "Armazene os segredos no AWS Secrets Manager. Provisione uma nova chave mestra do cliente. Use a chave para criptografar os segredos. Habilite a rotação automática. Configure um script de dados de usuário do Amazon EC2 para recuperar programaticamente os segredos durante a inicialização e exportá-los como variáveis de ambiente."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-327",
    "type": "single",
    "stem": "Uma empresa está usando o Amazon API Gateway para invocar uma nova função do AWS Lambda. A empresa possui versões da função Lambda em seus ambientes PROD e DEV. Em cada ambiente, há um alias de função Lambda apontando para a versão correspondente da função Lambda.",
    "ask": "O API Gateway possui um estágio configurado para apontar para o alias PROD.A empresa deseja configurar o API Gateway para permitir que as versões da função Lambda PROD e DEV estejam disponíveis simultaneamente e de forma distinta.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Habilite um autorizador Lambda para o alias da função Lambda no API Gateway. Republique PROD e crie um novo estágio para DEV. Crie variáveis de estágio do API Gateway para os estágios PROD e DEV. Aponte cada variável de estágio para o autorizador Lambda PROD e para o autorizador Lambda DEV."
      },
      {
        "id": "B",
        "text": "Configure uma resposta de gateway no API Gateway para o alias da função Lambda. Republique PROD e crie um novo estágio para DEV. Crie respostas de gateway no API Gateway para os aliases Lambda PROD e DEV."
      },
      {
        "id": "C",
        "text": "Use uma variável de ambiente para o alias da função Lambda no API Gateway. Republique PROD e crie um novo estágio para desenvolvimento. Crie variáveis de ambiente do API Gateway para os estágios PROD e DEV. Aponte cada variável de estágio para o alias da função Lambda PROD e para o alias da função Lambda DEV."
      },
      {
        "id": "D",
        "text": "Use uma variável de estágio do API Gateway para configurar o alias da função Lambda. Republique PROD e crie um novo estágio para desenvolvimento. Crie variáveis de estágio do API Gateway para os estágios PROD e DEV. Aponte cada variável de estágio para o alias da função Lambda PROD e para o alias da função Lambda DEV."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-328",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma plataforma de e-commerce que se comunica com diversas APIs de processamento de pagamentos de terceiros. Os serviços de pagamento de terceiros não oferecem um ambiente de teste.O desenvolvedor precisa validar a integração da plataforma de e-commerce com as APIs de processamento de pagamentos de terceiros.",
    "ask": "O desenvolvedor deve testar o código de integração da API sem invocar as APIs de processamento de pagamentos de terceiros.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma API REST do Amazon API Gateway com uma resposta de gateway configurada para o código de status 200. Adicione modelos de resposta que contenham respostas de amostra capturadas da API real de terceiros."
      },
      {
        "id": "B",
        "text": "Configure uma API GraphQL do AWS AppSync com uma fonte de dados configurada para cada API de terceiros. Especifique um tipo de integração como Simulado. Configure as respostas de integração usando exemplos de respostas capturados da API de terceiros real."
      },
      {
        "id": "C",
        "text": "Crie uma função do AWS Lambda para cada API de terceiros. Incorpore respostas capturadas da API de terceiros real. Configure o Amazon Route 53 Resolver com um endpoint de entrada para o Amazon Resource Name (ARN) de cada função do Lambda."
      },
      {
        "id": "D",
        "text": "Configure uma API REST do Amazon API Gateway para cada API de terceiros. Especifique um tipo de solicitação de integração como \"Simulada\". Configure as respostas de integração usando exemplos de respostas capturados da API de terceiros real."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-329",
    "type": "single",
    "stem": "Um desenvolvedor está armazenando muitos objetos em um único bucket do Amazon S3.",
    "ask": "Ele precisa otimizar o bucket do S3 para altas taxas de solicitação.Como o desenvolvedor deve armazenar os objetos para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os objetos usando o S3 Intelligent-Tiering."
      },
      {
        "id": "B",
        "text": "Armazene os objetos na raiz do bucket S3."
      },
      {
        "id": "C",
        "text": "Armazene os objetos usando nomes de chaves de objetos distribuídos em vários prefixos."
      },
      {
        "id": "D",
        "text": "Armazene cada objeto com uma tag de objeto chamada \"prefixo\" que contém um valor exclusivo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-330",
    "type": "single",
    "stem": "Uma empresa implanta um novo aplicativo na AWS. A empresa está transmitindo logs do aplicativo para o Amazon CloudWatch Logs. A equipe de desenvolvimento da empresa deve receber uma notificação por e-mail quando a palavra \"ERROR\" aparecer em qualquer linha de log.",
    "ask": "Um desenvolvedor configura um tópico do Amazon Simple Notification Service (Amazon SNS) e inscreve a equipe de desenvolvimento no tópico.O que o desenvolvedor deve fazer em seguida para atender aos requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Selecione o grupo de logs apropriado. Crie um filtro de métrica do CloudWatch com \"ERRO\" como termo de pesquisa. Crie um alarme para essa métrica que notifique o tópico do SNS quando a métrica for 1 ou superior."
      },
      {
        "id": "B",
        "text": "No CloudWatch Logs Insights, selecione o grupo de logs apropriado. Crie uma consulta de métrica para procurar o termo \"ERRO\" nos logs. Crie um alarme para essa métrica que notifique o tópico do SNS quando a métrica for 1 ou superior."
      },
      {
        "id": "C",
        "text": "Selecione o grupo de logs apropriado. Crie um filtro de assinatura do SNS com \"ERRO\" como padrão de filtro. Selecione o tópico do SNS como destino."
      },
      {
        "id": "D",
        "text": "Crie um alarme do CloudWatch que inclua \"ERRO\" como um padrão de filtro, uma dimensão de grupo de logs que defina o grupo de logs apropriado e um destino que notifique o tópico do SNS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-331",
    "type": "single",
    "stem": "Uma empresa utiliza o Amazon Simple Queue Service (Amazon SQS) para desacoplar sua arquitetura de microsserviços. Algumas mensagens em uma fila SQS contêm informações confidenciais.",
    "ask": "Um desenvolvedor precisa implementar uma solução que criptografe todos os dados em repouso.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Habilite a criptografia do lado do servidor para a fila SQS usando uma chave de criptografia gerenciada pelo SQS (SSE-SQS)."
      },
      {
        "id": "B",
        "text": "Use a condição aws:SecureTransport na política de fila para garantir que somente HTTPS (TLS) seja usado para todas as solicitações à fila SQS."
      },
      {
        "id": "C",
        "text": "Use o Gerenciador de Certificados da AWS (ACM) para gerar um certificado SSL/TLS. Faça referência ao certificado quando as mensagens forem enviadas para a fila."
      },
      {
        "id": "D",
        "text": "Defina um atributo de mensagem na solicitação SendMessage do SQS para mensagens enviadas à fila. Defina o Nome como ENCRYPT. Defina o Valor como TRUE."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-332",
    "type": "single",
    "stem": "Uma empresa implantou recentemente um novo portal de usuário sem servidor. Usuários relataram que parte do portal está lenta. A análise inicial encontrou um único endpoint do Amazon API Gateway responsável pelos problemas de desempenho. O endpoint se integra a uma função do AWS Lambda.",
    "ask": "No entanto, a função do Lambda interage com outras APIs e serviços da AWS.Como um desenvolvedor pode encontrar a origem do aumento no tempo de resposta usando as melhores práticas operacionais?",
    "options": [
      {
        "id": "A",
        "text": "Atualize a função Lambda adicionando instruções de registro com carimbos de data/hora de alta precisão antes e depois de cada solicitação externa. Implante a função Lambda atualizada. Após acumular dados de uso suficientes, examine os logs do Amazon CloudWatch para a função Lambda a fim de determinar as prováveis causas do aumento no tempo de resposta."
      },
      {
        "id": "B",
        "text": "Instrumente a função Lambda com o SDK do AWS X-Ray. Adicione interceptadores HTTP e HTTPS e manipuladores de cliente do SDK. Implante a função Lambda atualizada. Ative o rastreamento do X-Ray. Após acumular dados de uso suficientes, use o mapa de serviço do X-Ray para examinar os tempos médios de resposta e determinar as prováveis fontes."
      },
      {
        "id": "C",
        "text": "Revise as métricas do Amazon CloudWatch da função Lambda usando o explorador de métricas. Aplique a detecção de anomalias às métricas Duração e Limitações. Revise as anomalias para determinar as prováveis fontes."
      },
      {
        "id": "D",
        "text": "Use o Amazon CloudWatch Synthetics para criar um novo canário. Ative o rastreamento do AWS X-Ray no canário. Configure o canário para escanear o portal do usuário. Após acumular dados de uso suficientes, use o painel do canário do CloudWatch Synthetics para visualizar as métricas do canário."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-333",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação orientada a eventos usando AWS Lambda e Amazon EventBridge. A função Lambda precisa enviar eventos para um barramento de eventos EventBridge. O desenvolvedor usa um SDK para executar a ação PutEvents EventBridge e não especifica credenciais no código.",
    "ask": "Após implantar a função Lambda, o desenvolvedor percebe que a função está falhando e há erros AccessDeniedException nos logs.Como o desenvolvedor deve resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma conexão de peering de VPC entre a função Lambda e o EventBridge."
      },
      {
        "id": "B",
        "text": "Modifique suas credenciais da AWS para incluir permissões para a ação PutEvents EventBridge."
      },
      {
        "id": "C",
        "text": "Modifique a função de execução da função Lambda para incluir permissões para a ação PutEvents EventBridge."
      },
      {
        "id": "D",
        "text": "Adicione uma política baseada em recursos à função Lambda para incluir permissões para a ação PutEvents EventBridge."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-334",
    "type": "single",
    "stem": "O aplicativo de uma empresa possui uma função AWS Lambda que processa mensagens de dispositivos IoT. A empresa deseja monitorar a função Lambda para garantir que ela esteja atendendo ao acordo de nível de serviço (SLA) exigido.Um desenvolvedor deve implementar uma solução para determinar a taxa de transferência do aplicativo quase em tempo real. A taxa de transferência deve ser baseada no número de mensagens que a função Lambda recebe e processa em um determinado período.",
    "ask": "A função Lambda executa etapas de inicialização e pós-processamento que não devem ser consideradas na medição da taxa de transferência.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use a métrica ConcurrentExecutions da função Lambda no Amazon CloudWatch para medir a taxa de transferência."
      },
      {
        "id": "B",
        "text": "Modifique o aplicativo para registrar a taxa de transferência calculada no Amazon CloudWatch Logs. Use o Amazon EventBridge para invocar uma função Lambda separada para processar os logs de acordo com uma programação."
      },
      {
        "id": "C",
        "text": "Modifique o aplicativo para publicar métricas personalizadas do Amazon CloudWatch quando a função Lambda receber e processar cada mensagem. Use as métricas para calcular a taxa de transferência."
      },
      {
        "id": "D",
        "text": "Use a métrica Invocações e a métrica Duração da função Lambda para calcular a taxa de transferência no Amazon CloudWatch."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-335",
    "type": "single",
    "stem": "Um desenvolvedor está usando um pipeline do AWS CodePipeline para fornecer suporte de integração e entrega contínuas (CI/CD) para uma aplicação Java. O desenvolvedor precisa atualizar o pipeline para suportar a introdução de um novo arquivo .jar de dependência da aplicação.",
    "ask": "O pipeline deve iniciar uma compilação quando uma nova versão do arquivo .jar estiver disponível.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um bucket do Amazon S3 para armazenar o arquivo .jar de dependência. Publique o arquivo .jar de dependência no bucket do S3. Use uma notificação do Amazon Simple Notification Service (Amazon SNS) para iniciar a compilação de um pipeline do CodePipeline."
      },
      {
        "id": "B",
        "text": "Crie um repositório privado do Amazon Elastic Container Registry (Amazon ECR). Publique o arquivo .jar de dependência no repositório. Use uma ação de origem do ECR para iniciar a compilação de um pipeline do CodePipeline."
      },
      {
        "id": "C",
        "text": "Crie um repositório privado do Amazon Elastic Container Registry (Amazon ECR). Publique o arquivo .jar de dependência no repositório. Use uma notificação do Amazon Simple Notification Service (Amazon SNS) para iniciar a compilação de um pipeline do CodePipeline."
      },
      {
        "id": "D",
        "text": "Crie um repositório AWS CodeArtifact. Publique o arquivo .jar de dependência no repositório. Use uma regra do Amazon EventBridge para iniciar a compilação do pipeline do CodePipeline."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-336",
    "type": "single",
    "stem": "Uma empresa com várias filiais possui um aplicativo de análise e relatórios. Cada filial envia um relatório de vendas para um bucket compartilhado do Amazon S3 em um horário predefinido todos os dias. A empresa desenvolveu uma função do AWS Lambda que analisa os relatórios de todas as filiais em uma única etapa.",
    "ask": "A função do Lambda armazena os resultados em um banco de dados.A empresa precisa iniciar a análise uma vez por dia, em um horário específico.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma notificação de evento S3 para invocar a função Lambda quando uma filial carrega um relatório de vendas."
      },
      {
        "id": "B",
        "text": "Crie uma máquina de estado do AWS Step Functions que invoque a função Lambda uma vez por dia no horário predefinido."
      },
      {
        "id": "C",
        "text": "Configure a função Lambda para ser executada continuamente e iniciar a análise somente no horário predefinido de cada dia."
      },
      {
        "id": "D",
        "text": "Crie uma regra agendada do Amazon EventBridge que invoque a função Lambda uma vez por dia no horário predefinido."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-337",
    "type": "single",
    "stem": "Um desenvolvedor tem uma aplicação que invoca de forma assíncrona uma função do AWS Lambda.",
    "ask": "O desenvolvedor deseja armazenar mensagens que resultaram em invocações malsucedidas da função do Lambda para que a aplicação possa tentar a chamada novamente mais tarde.O que o desenvolvedor deve fazer para atingir esse objetivo com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure grupos de logs do Amazon CloudWatch Logs para filtrar e armazenar as mensagens em um bucket do Amazon S3. Importe as mensagens para o Lambda. Execute a função do Lambda novamente."
      },
      {
        "id": "B",
        "text": "Configure o Amazon EventBridge para enviar as mensagens ao Amazon Simple Notification Service (Amazon SNS) para iniciar a função Lambda novamente."
      },
      {
        "id": "C",
        "text": "Implemente uma fila de mensagens mortas para mensagens descartadas. Defina a fila de mensagens mortas como uma fonte de eventos para a função Lambda."
      },
      {
        "id": "D",
        "text": "Envie eventos do Amazon EventBridge para uma fila do Amazon Simple Queue Service (Amazon SQS). Configure a função Lambda para extrair mensagens da fila do SQS. Execute a função Lambda novamente."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-338",
    "type": "single",
    "stem": "Uma empresa está usando modelos do AWS CloudFormation para implantar recursos da AWS.",
    "ask": "A empresa precisa atualizar uma de suas pilhas do AWS CloudFormation.O que a empresa pode fazer para descobrir como as alterações afetarão os recursos em execução?",
    "options": [
      {
        "id": "A",
        "text": "Investigue os conjuntos de alterações."
      },
      {
        "id": "B",
        "text": "Investigue as políticas de pilha."
      },
      {
        "id": "C",
        "text": "Investigue a seção Metadados."
      },
      {
        "id": "D",
        "text": "Investigue a seção Recursos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-339",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa armazena todas as informações de identificação pessoal (PII) em uma tabela do Amazon DynamoDB chamada PII na Conta A. Os desenvolvedores estão trabalhando em um aplicativo em execução em instâncias do Amazon EC2 na Conta B. O aplicativo na Conta B requer acesso à tabela PII.Um administrador na Conta A cria uma função do IAM chamada AccessPII, que tem permissão para acessar a tabela PII.",
    "ask": "O administrador também cria uma política de confiança que especifica a Conta B como uma entidade principal que pode assumir a função.Qual combinação de etapas os desenvolvedores devem seguir na Conta B para permitir que seu aplicativo acesse a tabela PII?",
    "options": [
      {
        "id": "A",
        "text": "Conceda à função EC2 IAM a permissão para assumir a função AccessPII."
      },
      {
        "id": "B",
        "text": "Conceda à função do EC2 IAM a permissão para acessar a tabela PII."
      },
      {
        "id": "C",
        "text": "Inclua a API da AWS na lógica do código do aplicativo para obter credenciais temporárias da função do EC2 IAM para acessar a tabela PII."
      },
      {
        "id": "D",
        "text": "Inclua a operação da API AssumeRole na lógica do código do aplicativo para obter credenciais temporárias para acessar a tabela PII."
      },
      {
        "id": "E",
        "text": "Inclua a operação da API GetSessionToken na lógica do código do aplicativo para obter credenciais temporárias para acessar a tabela PII."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-340",
    "type": "multi",
    "pick": 2,
    "stem": "Um site de jogos oferece aos usuários a possibilidade de trocar itens de jogos entre si na plataforma. A plataforma exige que os registros de ambos os usuários sejam atualizados e persistidos em uma única transação.",
    "ask": "Se alguma atualização falhar, a transação deverá ser revertida.Quais soluções da AWS podem fornecer a capacidade transacional necessária para esse recurso?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB com operações feitas com o parâmetro ConsistentRead definido como verdadeiro"
      },
      {
        "id": "B",
        "text": "Amazon ElastiCache para Memcached com operações feitas dentro de um bloco de transação"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB com leituras e gravações feitas usando operações Transact*"
      },
      {
        "id": "D",
        "text": "Amazon Aurora MySQL com operações feitas dentro de um bloco de transação"
      },
      {
        "id": "E",
        "text": "Amazon Athena com operações feitas dentro de um bloco de transação"
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "DVA-C02-341",
    "type": "single",
    "stem": "Um desenvolvedor está implantando um aplicativo na Nuvem AWS usando o AWS CloudFormation. O aplicativo se conectará a um banco de dados Amazon RDS existente. O nome do host do banco de dados RDS é armazenado no AWS Systems Manager Parameter Store como um valor de texto simples.",
    "ask": "O desenvolvedor precisa incorporar o nome do host do banco de dados ao modelo do CloudFormation para inicializar o aplicativo quando a pilha for criada.Como o desenvolvedor deve referenciar o parâmetro que contém o nome do host do banco de dados?",
    "options": [
      {
        "id": "A",
        "text": "Use a referência dinâmica ssm."
      },
      {
        "id": "B",
        "text": "Use a função intrínseca Ref."
      },
      {
        "id": "C",
        "text": "Use a função intrínseca Fn::ImportValue."
      },
      {
        "id": "D",
        "text": "Use a referência dinâmica ssm-secure."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-342",
    "type": "single",
    "stem": "Uma empresa utiliza uma função do AWS Lambda para chamar um serviço de terceiros. O serviço de terceiros tem um limite de solicitações por minuto.",
    "ask": "Se o número de solicitações exceder o limite, o serviço de terceiros retornará erros de limitação de taxa.Um desenvolvedor precisa configurar a função do Lambda para evitar receber erros de limitação de taxa do serviço de terceiros.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina a simultaneidade reservada na função Lambda para corresponder ao número de solicitações simultâneas que o serviço de terceiros permite."
      },
      {
        "id": "B",
        "text": "Diminua a memória alocada para a função Lambda."
      },
      {
        "id": "C",
        "text": "Defina a simultaneidade provisionada na função Lambda para corresponder ao número de solicitações simultâneas que o serviço de terceiros permite."
      },
      {
        "id": "D",
        "text": "Aumente o valor de tempo limite especificado na função Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-343",
    "type": "single",
    "stem": "Um desenvolvedor está criando um novo aplicativo em contêiner usando o AWS Copilot. O desenvolvedor usa a interface de linha de comando (CLI) do AWS Copilot para implantar o aplicativo durante o desenvolvimento. O desenvolvedor enviou o código do aplicativo para um novo repositório do AWS CodeCommit.",
    "ask": "O desenvolvedor deve criar um processo de implantação automatizado antes de lançar o novo aplicativo para produção.O que o desenvolvedor deve fazer para atender a esses requisitos da maneira MAIS eficiente possível em termos operacionais?",
    "options": [
      {
        "id": "A",
        "text": "Crie um arquivo buildspec que invoque os comandos da CLI do AWS Copilot para compilar e implantar o aplicativo. Use a CLI do AWS Copilot para criar um AWS CodePipeline que use o repositório CodeCommit na fase de origem e o AWS CodeBuild na fase de compilação."
      },
      {
        "id": "B",
        "text": "Use a CLI do AWS Serverless Application Model (AWS SAM) para inicializar e inicializar uma configuração do AWS CodePipeline. Use o repositório CodeCommit como fonte. Invoque a CLI do AWS Copilot para compilar e implantar o aplicativo."
      },
      {
        "id": "C",
        "text": "Use a CLI do AWS Copilot para definir o pipeline do AWS Copilot e implantar o AWS CodePipeline. Selecione CodeCommit como a origem do AWS CodePipeline."
      },
      {
        "id": "D",
        "text": "Defina um modelo do AWS CloudFormation para um AWS CodePipeline com CodeCommit como origem. Configure o modelo como um complemento da CLI do AWS Copilot. Use a CLI do AWS Copilot para implantar o aplicativo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-344",
    "type": "single",
    "stem": "Um desenvolvedor está criando um novo aplicativo para uma loja de animais. O aplicativo gerenciará os pontos de recompensa dos clientes. O desenvolvedor usará o Amazon DynamoDB para armazenar os dados do aplicativo.",
    "ask": "O desenvolvedor precisa otimizar o desempenho das consultas e limitar a sobrecarga das partições antes da análise de desempenho propriamente dita.Qual opção o desenvolvedor deve usar para uma chave de partição que atenda a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Um identificador universalmente único (UUID) gerado aleatoriamente"
      },
      {
        "id": "B",
        "text": "Nome completo do cliente"
      },
      {
        "id": "C",
        "text": "A data em que o cliente se inscreveu no programa de recompensas"
      },
      {
        "id": "D",
        "text": "O nome do animal de estimação do cliente"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-345",
    "type": "single",
    "stem": "Um desenvolvedor usa o AWS IAM Identity Center (AWS Single Sign-On) para interagir com a CLI da AWS e os SDKs da AWS em uma estação de trabalho local. As chamadas de API para os serviços da AWS estavam funcionando quando o acesso SSO foi configurado pela primeira vez. No entanto, o desenvolvedor agora está recebendo erros de acesso negado.",
    "ask": "O desenvolvedor não alterou nenhum arquivo de configuração ou script que estava funcionando anteriormente na estação de trabalho.Qual é a causa MAIS provável do problema de acesso do desenvolvedor?",
    "options": [
      {
        "id": "A",
        "text": "As permissões de acesso ao arquivo binário da AWS CLI do desenvolvedor foram alteradas."
      },
      {
        "id": "B",
        "text": "O conjunto de permissões assumido pelo IAM Identity Center não tem as permissões necessárias para concluir a chamada de API."
      },
      {
        "id": "C",
        "text": "As credenciais da função federada do IAM Identity Center expiraram."
      },
      {
        "id": "D",
        "text": "O desenvolvedor está tentando fazer chamadas de API para a conta incorreta da AWS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-346",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo sem servidor. O aplicativo usa uma chave de API para autenticação com um aplicativo de terceiros. A empresa deseja armazenar a chave de API externa como parte de uma configuração do AWS Lambda.",
    "ask": "A empresa precisa ter controle total sobre as chaves do AWS Key Management Service (AWS KMS), que criptografarão a chave de API e devem ser visíveis apenas para entidades autorizadas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene a chave de API no AWS Systems Manager Parameter Store como um parâmetro de string. Use a chave KMS padrão fornecida pela AWS para criptografar a chave de API."
      },
      {
        "id": "B",
        "text": "Armazene a chave de API em variáveis de ambiente do AWS Lambda. Crie uma chave gerenciada pelo cliente do AWS KMS para criptografar a chave de API."
      },
      {
        "id": "C",
        "text": "Armazene a chave de API no repositório de código. Use uma chave gerenciada pela AWS para criptografar o repositório de código."
      },
      {
        "id": "D",
        "text": "Armazene a chave de API como um registro de tabela do Amazon DynamoDB. Use uma chave gerenciada pela AWS para criptografar a chave de API."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-347",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação para analisar o tráfego para uma frota de instâncias do Amazon EC2. As instâncias do EC2 são executadas por trás de um Application Load Balancer (ALB) público. Um servidor HTTP é executado em cada uma das instâncias do EC2, registrando todas as solicitações em um arquivo de log.O desenvolvedor deseja capturar os endereços IP públicos do cliente.",
    "ask": "O desenvolvedor analisa os arquivos de log e observa apenas o endereço IP do ALB.O que o desenvolvedor deve fazer para capturar os endereços IP públicos do cliente no arquivo de log?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um cabeçalho de Host ao arquivo de configuração de log do servidor HTTP."
      },
      {
        "id": "B",
        "text": "Instale o agente Amazon CloudWatch Logs em cada instância do EC2. Configure o agente para gravar no arquivo de log."
      },
      {
        "id": "C",
        "text": "Instale o daemon AWS X-Ray em cada instância do EC2. Configure o daemon para gravar no arquivo de log."
      },
      {
        "id": "D",
        "text": "Adicione um cabeçalho X-Forwarded-For ao arquivo de configuração de log do servidor HTTP."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-348",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação sem servidor usando funções do AWS Lambda. Uma das funções do Lambda precisa acessar uma instância de banco de dados do Amazon RDS. A instância de banco de dados está em uma sub-rede privada dentro de uma VPC.A empresa cria uma função que inclui as permissões necessárias para acessar a instância de banco de dados. Em seguida, a empresa atribui a função à função do Lambda.",
    "ask": "Um desenvolvedor deve tomar medidas adicionais para conceder à função do Lambda acesso à instância de banco de dados.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atribua um endereço IP público à instância do banco de dados. Modifique o grupo de segurança da instância do banco de dados para permitir tráfego de entrada do endereço IP da função Lambda."
      },
      {
        "id": "B",
        "text": "Configure uma conexão AWS Direct Connect entre a função Lambda e a instância do banco de dados."
      },
      {
        "id": "C",
        "text": "Configure uma distribuição do Amazon CloudFront para criar uma conexão segura entre a função Lambda e a instância do banco de dados."
      },
      {
        "id": "D",
        "text": "Configure a função Lambda para se conectar às sub-redes privadas na VPC. Adicione regras de grupo de segurança para permitir o tráfego da função Lambda para a instância do banco de dados."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-349",
    "type": "single",
    "stem": "Um desenvolvedor precisa de acesso temporário aos recursos de uma segunda conta.Qual é a maneira MAIS segura de conseguir isso?",
    "options": [
      {
        "id": "A",
        "text": "Use os pools de usuários do Amazon Cognito para obter credenciais de curta duração para a segunda conta."
      },
      {
        "id": "B",
        "text": "Crie uma chave de acesso IAM dedicada para a segunda conta e envie-a por e-mail."
      },
      {
        "id": "C",
        "text": "Crie uma função de acesso entre contas e use a API sts:AssumeRole para obter credenciais de curta duração."
      },
      {
        "id": "D",
        "text": "Estabeleça confiança e adicione uma chave SSH para a segunda conta do usuário do IAM."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-350",
    "type": "single",
    "stem": "Uma empresa deseja migrar aplicativos de seus servidores locais para a AWS. Como primeiro passo, a empresa está modificando e migrando um aplicativo não crítico para uma única instância do Amazon EC2. O aplicativo armazenará informações em um bucket do Amazon S3.",
    "ask": "A empresa precisa seguir as melhores práticas de segurança ao implantar o aplicativo na AWS.Qual abordagem a empresa deve adotar para permitir que o aplicativo interaja com o Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do IAM com acesso administrativo à AWS. Anexe a função à instância do EC2."
      },
      {
        "id": "B",
        "text": "Crie um usuário do IAM. Anexe a política AdministratorAccess. Copie a chave de acesso e a chave secreta geradas. No código do aplicativo, use a chave de acesso e a chave secreta, juntamente com o SDK da AWS, para se comunicar com o Amazon S3."
      },
      {
        "id": "C",
        "text": "Crie uma função do IAM que tenha o acesso necessário ao Amazon S3. Anexe a função à instância do EC2."
      },
      {
        "id": "D",
        "text": "Crie um usuário do IAM. Anexe uma política que forneça o acesso necessário ao Amazon S3. Copie a chave de acesso e a chave secreta geradas. No código do aplicativo, use a chave de acesso e a chave secreta, juntamente com o SDK da AWS, para se comunicar com o Amazon S3."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-351",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui um site interno que contém dados sensíveis. A empresa deseja tornar o site público. A empresa deve garantir que apenas funcionários que se autenticam por meio do provedor de identidade (IdP) OpenID Connect (OIDC) da empresa possam acessar o site.",
    "ask": "Um desenvolvedor precisa implementar a autenticação sem editar o site.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um balanceador de carga de rede público."
      },
      {
        "id": "B",
        "text": "Crie um Application Load Balancer público."
      },
      {
        "id": "C",
        "text": "Configure um ouvinte para o balanceador de carga que escuta na porta HTTPS 443. Adicione uma ação de autenticação padrão fornecendo a configuração do IdP do OIDC."
      },
      {
        "id": "D",
        "text": "Configure um ouvinte para o balanceador de carga que escuta na porta HTTP 80. Adicione uma ação de autenticação padrão fornecendo a configuração do IdP do OIDC."
      },
      {
        "id": "E",
        "text": "Configure um ouvinte para o balanceador de carga que escuta na porta HTTPS 443. Adicione uma ação padrão do AWS Lambda fornecendo um Nome de Recurso da Amazon (ARN) para uma função de autenticação do Lambda."
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "DVA-C02-352",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em uma aplicação web que requer ativação seletiva de recursos específicos.",
    "ask": "O desenvolvedor deseja manter os recursos ocultos dos usuários finais até que estejam disponíveis para acesso público.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um perfil de configuração de sinalizador de recurso no AWS AppSync. Armazene os valores do sinalizador de recurso no perfil de configuração. Ative e desative os sinalizadores de recurso conforme necessário."
      },
      {
        "id": "B",
        "text": "Armazene dados de pré-lançamento em uma tabela do Amazon DynamoDB. Habilite o Amazon DynamoDB Streams na tabela. Alterne entre os estados oculto e visível usando o DynamoDB Streams."
      },
      {
        "id": "C",
        "text": "Crie um perfil de configuração de sinalizador de recurso no AWS AppConfig. Armazene os valores do sinalizador de recurso no perfil de configuração. Ative e desative os sinalizadores de recurso conforme necessário."
      },
      {
        "id": "D",
        "text": "Store prerelease data in AWS Amplify DataStore. Toggle between hidden and visible states by using Amplify DataStore cloud synchronization."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-353",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor em uma empresa cria um modelo do AWS CloudFormation. O modelo se refere a sub-redes criadas por um modelo separado do AWS CloudFormation, criado pela equipe de rede da empresa.",
    "ask": "Quando o desenvolvedor tenta iniciar a pilha pela primeira vez, a inicialização falha.Quais erros de codificação do modelo podem ter causado essa falha?",
    "options": [
      {
        "id": "A",
        "text": "O modelo do desenvolvedor não usa a função intrínseca Ref para se referir às sub-redes."
      },
      {
        "id": "B",
        "text": "O modelo do desenvolvedor não usa a função intrínseca ImportValue para se referir às sub-redes."
      },
      {
        "id": "C",
        "text": "A seção Mapeamentos do modelo do desenvolvedor não faz referência às sub-redes."
      },
      {
        "id": "D",
        "text": "O modelo da equipe de rede não exporta as sub-redes na seção Saídas."
      },
      {
        "id": "E",
        "text": "O modelo da equipe de rede não exporta as sub-redes na seção Mapeamentos."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "DVA-C02-354",
    "type": "single",
    "stem": "Um desenvolvedor está executando uma aplicação em uma instância do Amazon EC2. Ao tentar ler um bucket do Amazon S3, a aplicação falha. O desenvolvedor percebe que a função do IAM associada não possui a permissão de leitura do S3.",
    "ask": "O desenvolvedor precisa conceder à aplicação a capacidade de ler o bucket do S3.Qual solução atenderá a esse requisito com a MENOR interrupção da aplicação?",
    "options": [
      {
        "id": "A",
        "text": "Adicione a permissão à função. Encerre a instância EC2 existente. Inicie uma nova instância EC2."
      },
      {
        "id": "B",
        "text": "Adicione a permissão à função para que a alteração entre em vigor automaticamente."
      },
      {
        "id": "C",
        "text": "Adicione a permissão à função. Hiberne e reinicie a instância EC2 existente."
      },
      {
        "id": "D",
        "text": "Adicione a permissão ao bucket S3. Reinicie a instância EC2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-355",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está escrevendo uma aplicação web que é implantada em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB) voltado para a Internet. O desenvolvedor deve adicionar uma distribuição do Amazon CloudFront antes do ALB.",
    "ask": "O desenvolvedor também deve garantir que os dados do cliente de fora da VPC sejam criptografados em trânsito.Qual combinação de configurações do CloudFront o desenvolvedor deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Restrinja o acesso do visualizador usando URLs assinadas."
      },
      {
        "id": "B",
        "text": "Defina a configuração da Política de Protocolo de Origem como Match Viewer."
      },
      {
        "id": "C",
        "text": "Habilite a criptografia em nível de campo."
      },
      {
        "id": "D",
        "text": "Habilite a compactação automática de objetos."
      },
      {
        "id": "E",
        "text": "Defina a configuração da Política de Protocolo do Visualizador como Redirecionar HTTP para HTTPS."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-356",
    "type": "single",
    "stem": "Um desenvolvedor está implementando uma função do AWS Lambda que será invocada quando um objeto for carregado no Amazon S3.",
    "ask": "O desenvolvedor deseja testar a função do Lambda em uma máquina de desenvolvimento local antes de publicá-la em uma conta de produção da AWS.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Carregue um objeto no Amazon S3 usando o comando CLI aws s3api put-object. Aguarde a invocação local do Lambda a partir do evento do S3."
      },
      {
        "id": "B",
        "text": "Crie um arquivo de texto JSON de exemplo para um evento S3 de inserção de objeto. Invoque a função Lambda localmente. Use o comando CLI aws lambda invoke com o arquivo JSON e o nome da função Lambda como argumentos."
      },
      {
        "id": "C",
        "text": "Use o comando CLI sam local start-lambda para iniciar o Lambda. Use o comando CLI sam local generate-event s3 put para criar o arquivo JSON de teste do Lambda. Use o comando CLI sam local invoke com o arquivo JSON como argumento para invocar a função do Lambda."
      },
      {
        "id": "D",
        "text": "Crie uma string JSON para o evento S3 \"put object\". No Console de Gerenciamento da AWS, use a string JSON para criar um evento de teste para a função Lambda local. Execute o teste."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-357",
    "type": "single",
    "stem": "Um desenvolvedor está publicando dados de log críticos em um grupo de logs no Amazon CloudWatch Logs. O grupo de logs foi criado há 2 meses.",
    "ask": "O desenvolvedor precisa criptografar os dados de log usando uma chave do AWS Key Management Service (AWS KMS) para que dados futuros possam ser criptografados em conformidade com a política de segurança da empresa.Qual solução atenderá a esse requisito com o MENOR esforço?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Encryption SDK para criptografar e descriptografar os dados antes de gravá-los no grupo de logs."
      },
      {
        "id": "B",
        "text": "Use o console do AWS KMS para associar a chave do KMS ao grupo de logs."
      },
      {
        "id": "C",
        "text": "Use o comando aws logs create-log-group da AWS CLI e especifique o nome do recurso da Amazon (ARN) da chave."
      },
      {
        "id": "D",
        "text": "Use o comando aws logs associate-kms-key da AWS CLI e especifique o nome do recurso da Amazon (ARN) da chave. Ma"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-358",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um aplicativo para uma empresa que usa uma tabela do Amazon DynamoDB chamada Orders para armazenar pedidos de clientes. A tabela usa OrderID como chave de partição e não há chave de classificação. A tabela contém mais de 100.000 registros.",
    "ask": "O desenvolvedor precisa adicionar uma funcionalidade que recupere todos os registros de Orders que contenham um atributo OrderSource com o valor MobileApp.Qual solução melhorará a experiência do usuário da maneira MAIS eficiente?",
    "options": [
      {
        "id": "A",
        "text": "Execute uma operação de varredura na tabela Orders. Forneça uma condição QueryFilter para filtrar apenas os itens cujo atributo OrderSource seja igual ao valor MobileApp."
      },
      {
        "id": "B",
        "text": "Crie um índice secundário local (LSI) com OrderSource como chave de partição. Execute uma operação de consulta usando MobileApp como chave."
      },
      {
        "id": "C",
        "text": "Crie um índice secundário global (GSI) com OrderSource como chave de classificação. Execute uma operação de consulta usando MobileApp como chave."
      },
      {
        "id": "D",
        "text": "Crie um índice secundário global (GSI) com OrderSource como chave de partição. Execute uma operação de consulta usando MobileApp como chave."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-359",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que utiliza uma função do AWS Lambda para processar dados. Um desenvolvedor precisa implementar criptografia em trânsito para todos os dados de configuração confidenciais, como chaves de API, armazenados no aplicativo.",
    "ask": "O desenvolvedor cria uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS).O que o desenvolvedor deve fazer em seguida para atender ao requisito de criptografia?",
    "options": [
      {
        "id": "A",
        "text": "Crie parâmetros do tipo String no AWS Systems Manager Parameter Store. Para cada parâmetro, especifique o ID da chave KMS para criptografar o parâmetro em trânsito. Faça referência à chamada da API GetParameter nas variáveis de ambiente do Lambda."
      },
      {
        "id": "B",
        "text": "Crie segredos no AWS Secrets Manager usando a chave KMS gerenciada pelo cliente. Crie uma nova função Lambda e configure uma camada Lambda. Configure a camada Lambda para recuperar os valores do Secrets Manager."
      },
      {
        "id": "C",
        "text": "Crie objetos no Amazon S3 para cada campo de dados confidenciais. Especifique a chave KMS gerenciada pelo cliente para criptografar o objeto. Configure a função Lambda para recuperar os objetos do Amazon S3 durante o processamento de dados."
      },
      {
        "id": "D",
        "text": "Crie variáveis de ambiente Lambda criptografadas. Especifique a chave KMS gerenciada pelo cliente para criptografar as variáveis. Habilite assistentes de criptografia para criptografia em trânsito. Conceda permissão à função de execução do Lambda para acessar a chave KMS."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-360",
    "type": "single",
    "stem": "Um desenvolvedor está construindo uma aplicação de e-commerce. Quando há um evento de venda, a aplicação precisa chamar simultaneamente três sistemas de terceiros para registrar a venda. O desenvolvedor escreveu três funções do AWS Lambda. Há uma função Lambda para cada sistema de terceiros, que contém uma lógica de integração complexa.Essas funções Lambda são todas independentes.",
    "ask": "O desenvolvedor precisa projetar a aplicação de forma que cada função Lambda seja executada independentemente do sucesso ou fracasso das outras.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique o evento de venda do aplicativo em uma fila do Amazon Simple Queue Service (Amazon SQS). Configure as três funções do Lambda para consultar a fila."
      },
      {
        "id": "B",
        "text": "Publique o evento de venda do aplicativo em um tópico do Amazon Simple Notification Service (Amazon SNS). Assine as três funções Lambda a serem acionadas pelo tópico do SNS."
      },
      {
        "id": "C",
        "text": "Publique o evento de venda do aplicativo em um Balanceador de Carga de Aplicativo (ALB). Adicione as três funções Lambda como alvos do ALB."
      },
      {
        "id": "D",
        "text": "Publique o evento de venda do aplicativo em uma máquina de estados do AWS Step Functions. Mova a lógica das três funções Lambda para a máquina de estados do Step Functions."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-361",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação que armazena dados em uma tabela do Amazon DynamoDB. O desenvolvedor deseja consultar a tabela do DynamoDB usando a chave de partição e um valor de chave de classificação diferente.",
    "ask": "O desenvolvedor precisa dos dados mais recentes com todas as operações de gravação recentes.Como o desenvolvedor deve escrever a consulta do DynamoDB?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um índice secundário local (LSI) durante a criação da tabela. Consulte o LSI usando leituras eventualmente consistentes."
      },
      {
        "id": "B",
        "text": "Adicione um índice secundário local (LSI) durante a criação da tabela. Consulte o LSI usando leituras fortemente consistentes."
      },
      {
        "id": "C",
        "text": "Adicione um índice secundário global (GSI) durante a criação da tabela. Consulte o GSI usando leituras eventualmente consistentes."
      },
      {
        "id": "D",
        "text": "Adicione um índice secundário global (GSI) durante a criação da tabela. Consulte o GSI usando leituras fortemente consistentes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-362",
    "type": "single",
    "stem": "Um desenvolvedor gerencia uma aplicação que grava pedidos de clientes em uma tabela do Amazon DynamoDB. Os pedidos usam customer_id como chave de partição, order_id como chave de classificação e order_date como atributo. Um novo padrão de acesso requer o acesso aos dados por order_date e order_id.",
    "ask": "O desenvolvedor precisa implementar uma nova função do AWS Lambda para oferecer suporte ao novo padrão de acesso.Como o desenvolvedor deve oferecer suporte ao novo padrão de acesso da maneira MAIS eficiente possível em termos operacionais?",
    "options": [
      {
        "id": "A",
        "text": "Adicione um novo índice secundário local (LSI) à tabela do DynamoDB que especifique order_date como chave de partição e order_id como chave de classificação. Escreva a nova função Lambda para consultar o novo índice LSI."
      },
      {
        "id": "B",
        "text": "Escreva a nova função Lambda para escanear a tabela do DynamoDB. Na função Lambda, escreva um método para recuperar e combinar resultados por order_date e order_id."
      },
      {
        "id": "C",
        "text": "Adicione um novo índice secundário global (GSI) à tabela do DynamoDB que especifique order_date como chave de partição e order_id como chave de classificação. Escreva a nova função Lambda para consultar o novo índice GSI."
      },
      {
        "id": "D",
        "text": "Habilite os fluxos do DynamoDB na tabela. Selecione as informações das imagens novas e antigas para gravar no fluxo do DynamoDB. Escreva a nova função Lambda para consultar o fluxo do DynamoDB."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-363",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação web para uma escola que armazena dados no Amazon DynamoDB. A tabela ExamScores possui os seguintes atributos: student_id, subject_name e top_score.Cada item na tabela ExamScores é identificado com student_id como chave de partição e subject_name como chave de classificação. A aplicação web precisa exibir o student_id para as notas mais altas de cada disciplina escolar.",
    "ask": "O desenvolvedor precisa aumentar a velocidade das consultas para recuperar o student_id do aluno com maior nota em cada disciplina escolar.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um índice secundário local (LSI) com subject_name como a chave de partição e top_score como a chave de classificação."
      },
      {
        "id": "B",
        "text": "Crie um índice secundário local (LSI) com top_score como a chave de partição e student_id como a chave de classificação."
      },
      {
        "id": "C",
        "text": "Crie um índice secundário global (GSI) com subject_name como a chave de partição e top_score como a chave de classificação."
      },
      {
        "id": "D",
        "text": "Crie um índice secundário global (GSI) com subject_name como a chave de partição e student_id como a chave de classificação."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-364",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação que utiliza uma função do AWS Lambda para gerar vídeos curtos de forma assíncrona com base em solicitações de clientes. Essa geração de vídeos pode levar até 10 minutos. Após a geração do vídeo, uma URL para download é enviada ao navegador do cliente.",
    "ask": "O cliente deve conseguir acessar esses vídeos por pelo menos 3 horas após a geração.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene o vídeo na pasta /tmp dentro do ambiente de execução do Lambda. Envie uma URL de função do Lambda para o cliente."
      },
      {
        "id": "B",
        "text": "Armazene o vídeo em um sistema de arquivos Amazon Elastic File System (Amazon EFS) anexado à função. Gere uma URL pré-assinada para o objeto de vídeo e envie a URL para o cliente."
      },
      {
        "id": "C",
        "text": "Armazene o vídeo no Amazon S3. Gere uma URL pré-assinada para o objeto de vídeo e envie a URL ao cliente."
      },
      {
        "id": "D",
        "text": "Armazene o vídeo em uma distribuição do Amazon CloudFront. Gere uma URL pré-assinada para o objeto de vídeo e envie a URL para o cliente."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-365",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que é invocada por mensagens enviadas para um tópico do Amazon Simple Notification Service (Amazon SNS). As mensagens representam atualizações de dados do cliente de um sistema de gerenciamento de relacionamento com o cliente (CRM).O desenvolvedor deseja que a função do Lambda processe apenas as mensagens referentes a alterações de endereço de e-mail.",
    "ask": "Assinantes adicionais do tópico do SNS processarão quaisquer outras mensagens.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Use a filtragem de eventos do Lambda para permitir que apenas mensagens relacionadas a alterações de endereço de e-mail invoquem a função do Lambda."
      },
      {
        "id": "B",
        "text": "Use uma política de filtro SNS na assinatura da função Lambda para permitir que apenas mensagens relacionadas a alterações de endereço de e-mail invoquem a função Lambda."
      },
      {
        "id": "C",
        "text": "Inscreva uma fila do Amazon Simple Queue Service (Amazon SQS) no tópico do SNS. Configure a fila do SQS com uma política de filtro para permitir apenas mensagens relacionadas a alterações de endereço de e-mail.Conecte a fila do SQS à função Lambda."
      },
      {
        "id": "D",
        "text": "Configure o código Lambda para verificar a mensagem recebida. Se a mensagem não estiver relacionada a uma alteração de endereço de e-mail, configure a função Lambda para publicar a mensagem de volta no tópico do SNS para que os outros assinantes a processem."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-366",
    "type": "single",
    "stem": "Um desenvolvedor está projetando um ambiente tolerante a falhas onde as sessões do cliente serão salvas.Como o desenvolvedor pode garantir que nenhuma sessão seja perdida se uma instância do Amazon EC2 falhar?",
    "options": [
      {
        "id": "A",
        "text": "Use sessões persistentes com um grupo de destino do Elastic Load Balancer."
      },
      {
        "id": "B",
        "text": "Use o Amazon SQS para salvar dados de sessão."
      },
      {
        "id": "C",
        "text": "Use o Amazon DynamoDB para executar o tratamento de sessão escalável."
      },
      {
        "id": "D",
        "text": "Use a drenagem de conexão do Elastic Load Balancer para parar de enviar solicitações para instâncias com falha."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-367",
    "type": "single",
    "stem": "Um desenvolvedor está criando modelos do AWS CloudFormation para gerenciar a implantação de uma aplicação no Amazon Elastic Container Service (Amazon ECS) por meio do AWS CodeDeploy.",
    "ask": "O desenvolvedor deseja implantar automaticamente novas versões da aplicação para uma porcentagem de usuários antes que a nova versão seja disponibilizada para todos.Como o desenvolvedor deve gerenciar a implantação da nova versão?",
    "options": [
      {
        "id": "A",
        "text": "Modifique o modelo CloudFormation para incluir uma seção Transform e o gancho AWS::CodeDeploy::BlueGreen."
      },
      {
        "id": "B",
        "text": "Implante a nova versão em uma nova pilha do CloudFormation. Após a conclusão dos testes, atualize os registros DNS do aplicativo para a nova pilha."
      },
      {
        "id": "C",
        "text": "Execute atualizações da pilha do CloudFormation na pilha de aplicativos para implantar novas versões do aplicativo quando estiverem disponíveis."
      },
      {
        "id": "D",
        "text": "Crie uma pilha aninhada para a nova versão. Inclua uma seção Transform e o hook AWS::CodeDeploy::BlueGreen."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-368",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor escreveu uma aplicação distribuída que utiliza microsserviços. Os microsserviços estão sendo executados em instâncias do Amazon EC2. Devido ao volume de mensagens, o desenvolvedor não consegue associar a saída de log de cada microsserviço a uma transação específica.",
    "ask": "O desenvolvedor precisa analisar o fluxo de mensagens para depurar a aplicação.Qual combinação de etapas o desenvolvedor deve seguir para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Baixe o daemon do AWS X-Ray. Instale o daemon em uma instância do EC2. Certifique-se de que a instância do EC2 permita tráfego UDP na porta 2000."
      },
      {
        "id": "B",
        "text": "Configure um ponto de extremidade de VPC de interface para permitir que o tráfego chegue ao daemon global do AWS X-Ray na porta TCP 2000."
      },
      {
        "id": "C",
        "text": "Habilite o AWS X-Ray. Configure o Amazon CloudWatch para enviar logs ao X-Ray."
      },
      {
        "id": "D",
        "text": "Adicione o kit de desenvolvimento de software (SDK) do AWS X-Ray aos microsserviços. Use o X-Ray para rastrear as solicitações feitas por cada microsserviço."
      },
      {
        "id": "E",
        "text": "Configure fluxos de métricas do Amazon CloudWatch para coletar dados de streaming dos microsserviços."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-369",
    "type": "single",
    "stem": "Uma empresa está trabalhando em uma nova aplicação sem servidor. Um desenvolvedor precisa encontrar uma maneira automatizada de implantar funções do AWS Lambda e a infraestrutura dependente com o mínimo de esforço de codificação.",
    "ask": "A aplicação também precisa ser confiável.Qual método atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie o aplicativo usando scripts de shell para criar arquivos .zip para cada função do Lambda. Carregue manualmente os arquivos .zip para o Console de Gerenciamento da AWS."
      },
      {
        "id": "B",
        "text": "Crie o aplicativo usando o AWS Serverless Application Model (AWS SAM). Use um pipeline de integração e entrega contínuas (CI/CD) e a CLI do SAM para implantar as funções do Lambda."
      },
      {
        "id": "C",
        "text": "Crie a aplicação usando scripts de shell para criar arquivos .zip para cada função do Lambda. Carregue os arquivos .zip. Implante os arquivos .zip como funções do Lambda usando a AWS CLI em um pipeline de integração e entrega contínuas (CI/CD)."
      },
      {
        "id": "D",
        "text": "Crie um contêiner para cada função do Lambda. Armazene as imagens do contêiner no AWS CodeArtifact. Implante os contêineres como funções do Lambda usando a CLI da AWS em um pipeline de integração e entrega contínuas (CI/CD)."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-370",
    "type": "single",
    "stem": "Um desenvolvedor precisa modificar a arquitetura de uma aplicação para atender a novos requisitos funcionais. Os dados da aplicação são armazenados no Amazon DynamoDB e processados para análise em um lote noturno.",
    "ask": "Os analistas de sistema não querem esperar até o dia seguinte para visualizar os dados processados e solicitaram que eles estivessem disponíveis quase em tempo real.Qual padrão de arquitetura de aplicação permitiria que os dados fossem processados à medida que são recebidos?",
    "options": [
      {
        "id": "A",
        "text": "Orientado por eventos"
      },
      {
        "id": "B",
        "text": "Orientado a cliente-servidor"
      },
      {
        "id": "C",
        "text": "Acionado por fan-out"
      },
      {
        "id": "D",
        "text": "Orientado por cronograma"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-371",
    "type": "single",
    "stem": "Uma empresa hospeda seu aplicativo na região us-west-1. A empresa deseja adicionar redundância na região us-east-1.Os segredos do aplicativo são armazenados no AWS Secrets Manager em us-west-1.",
    "ask": "Um desenvolvedor precisa replicar os segredos para us-east-1.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Configure a replicação de segredos para cada segredo. Adicione us-east-1 como região de replicação. Escolha uma chave do AWS Key Management Service (AWS KMS) em us-east-1 para criptografar os segredos replicados."
      },
      {
        "id": "B",
        "text": "Crie um novo segredo em us-east-1 para cada segredo. Configure a replicação do segredo em us-east-1. Defina a origem como o segredo correspondente em us-west-1. Escolha uma chave do AWS Key Management Service (AWS KMS) em us-west-1 para criptografar os segredos replicados."
      },
      {
        "id": "C",
        "text": "Crie uma regra de replicação para cada segredo. Defina us-east-1 como a região de destino. Configure a regra para ser executada durante a rotação de segredos. Escolha uma chave do AWS Key Management Service (AWS KMS) em us-east-1 para criptografar os segredos replicados."
      },
      {
        "id": "D",
        "text": "Crie uma regra de ciclo de vida do Secrets Manager para replicar cada segredo para um novo bucket do Amazon S3 em us-west-1. Configure uma regra de replicação do S3 para replicar os segredos para us-east-1."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-372",
    "type": "single",
    "stem": "Uma empresa executa um aplicativo de comércio eletrônico na AWS. O aplicativo armazena dados em um banco de dados Amazon Aurora.Um desenvolvedor está adicionando uma camada de cache ao aplicativo.",
    "ask": "A estratégia de cache deve garantir que o aplicativo sempre use o valor mais recente para cada item de dados.Qual estratégia de cache atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implemente uma estratégia TTL para cada item salvo no cache."
      },
      {
        "id": "B",
        "text": "Implemente uma estratégia de gravação para cada item criado e atualizado."
      },
      {
        "id": "C",
        "text": "Implemente uma estratégia de carregamento lento para cada item carregado."
      },
      {
        "id": "D",
        "text": "Implemente uma estratégia de leitura para cada item carregado."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-373",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação serverless que utiliza o Amazon API Gateway com integração de proxy AWS Lambda. A empresa está desenvolvendo diversas APIs de back-end.",
    "ask": "Ela precisa de uma landing page para fornecer uma visão geral da navegação nas APIs.Um desenvolvedor cria um novo recurso /LandingPage e um novo método GET que utiliza integração simulada.O que o desenvolvedor deve fazer em seguida para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o modelo de mapeamento de solicitação de integração com o Content-Type text/html e o statusCode 200. Configure o modelo de mapeamento de resposta de integração com o Content-Type application/json. No modelo de mapeamento de resposta de integração, inclua o código HTML da LandingPage que faz referência às APIs."
      },
      {
        "id": "B",
        "text": "Configure o modelo de mapeamento de solicitação de integração com o Content-Type application/json. No modelo de mapeamento de solicitação de integração, inclua o código HTML da LandingPage que faz referência às APIs. Configure o modelo de mapeamento de resposta de integração com o Content-Type text/html e o statusCode 200."
      },
      {
        "id": "C",
        "text": "Configure o modelo de mapeamento de solicitação de integração com o Content-Type application/json e o statusCode 200. Configure o modelo de mapeamento de resposta de integração com o Content-Type text/html. No modelo de mapeamento de resposta de integração, inclua o código HTML da LandingPage que faz referência às APIs."
      },
      {
        "id": "D",
        "text": "Configure o modelo de mapeamento de solicitação de integração com o Content-Type text/html. No modelo de mapeamento de solicitação de integração, inclua o código HTML da LandingPage que faz referência às APIs. Configure o modelo de mapeamento de resposta de integração com o Content-Type application/json e o statusCode 200."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-374",
    "type": "single",
    "stem": "Um desenvolvedor cria uma função do AWS Lambda escrita em Java. Durante os testes, a função do Lambda não funciona como o desenvolvedor esperava.",
    "ask": "O desenvolvedor deseja usar recursos de rastreamento para solucionar o problema.Qual serviço da AWS o desenvolvedor deve usar para atingir esse objetivo?",
    "options": [
      {
        "id": "A",
        "text": "Consultor confiável da AWS"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "Raio X da AWS"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-375",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação que será acessada por meio da API REST do Amazon API Gateway. Usuários registrados devem ser os únicos que podem acessar determinados recursos dessa API.",
    "ask": "O token utilizado deve expirar automaticamente e precisa ser atualizado periodicamente.Como um desenvolvedor pode atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um pool de identidades do Amazon Cognito, configure o Autorizador do Amazon Cognito no API Gateway e use as credenciais temporárias geradas pelo pool de identidades."
      },
      {
        "id": "B",
        "text": "Crie e mantenha um registro de banco de dados para cada usuário com um token correspondente e use um autorizador do AWS Lambda no API Gateway."
      },
      {
        "id": "C",
        "text": "Crie um pool de usuários do Amazon Cognito, configure o Autorizador do Cognito no API Gateway e use o token de identidade ou acesso."
      },
      {
        "id": "D",
        "text": "Crie um usuário do IAM para cada usuário da API, anexe uma política de permissões de invocação à API e use um autorizador do IAM no API Gateway."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-376",
    "type": "single",
    "stem": "Uma empresa utilizou a AWS para desenvolver um aplicativo para clientes. O aplicativo inclui uma API do Amazon API Gateway que invoca funções do AWS Lambda.",
    "ask": "As funções do Lambda processam dados e os armazenam em tabelas do Amazon DynamoDB.A empresa precisa monitorar todo o aplicativo para identificar possíveis gargalos na arquitetura que possam afetar negativamente os clientes.Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Instrumente o aplicativo com o AWS X-Ray. Inspecione o mapa de serviços para identificar erros e problemas."
      },
      {
        "id": "B",
        "text": "Configure exceções do Lambda e registros adicionais no Amazon CloudWatch. Use o CloudWatch Logs Insights para consultar os registros."
      },
      {
        "id": "C",
        "text": "Configure o API Gateway para registrar respostas no Amazon CloudWatch. Crie um filtro de métrica para a mensagem de erro TooManyRequestsException."
      },
      {
        "id": "D",
        "text": "Use as métricas do Amazon CloudWatch para as tabelas do DynamoDB para identificar todas as mensagens de erro ProvisionedThroughputExceededException."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-377",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa lançou um portal online para anunciar um novo produto que será lançado em 6 meses. O portal solicita que os usuários insiram um endereço de e-mail para receber comunicações sobre o produto. A empresa precisa criar uma API REST que armazenará os endereços de e-mail no Amazon DynamoDB.Um desenvolvedor criou uma função do AWS Lambda que pode armazenar os endereços de e-mail. O desenvolvedor implantará a função do Lambda usando o AWS Serverless Application Model (AWS SAM).",
    "ask": "O desenvolvedor deve fornecer acesso à função do Lambda via HTTP.Quais soluções atenderão a esses requisitos com MENOS configurações adicionais?",
    "options": [
      {
        "id": "A",
        "text": "Exponha a função Lambda usando URLs de função."
      },
      {
        "id": "B",
        "text": "Exponha a função Lambda usando um balanceador de carga de gateway."
      },
      {
        "id": "C",
        "text": "Exponha a função Lambda usando um balanceador de carga de rede."
      },
      {
        "id": "D",
        "text": "Exponha a função Lambda usando o AWS Global Accelerator."
      },
      {
        "id": "E",
        "text": "Exponha a função Lambda usando o Amazon API Gateway."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "DVA-C02-378",
    "type": "single",
    "stem": "Uma empresa possui um website que exibe um boletim informativo diário. Quando um usuário visita o website, uma função do AWS Lambda processa a solicitação do navegador e consulta o banco de dados local da empresa para obter o boletim informativo atual. Os boletins são armazenados em inglês. A função do Lambda utiliza a operação da API TranslateText do Amazon Translate para traduzir os boletins, e a tradução é exibida ao usuário.Devido ao aumento da popularidade, o tempo de resposta do website diminuiu. O banco de dados está sobrecarregado.",
    "ask": "A empresa não pode alterar o banco de dados e precisa de uma solução que melhore o tempo de resposta da função do Lambda.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Mudança para invocação de função Lambda assíncrona."
      },
      {
        "id": "B",
        "text": "Armazene em cache os boletins traduzidos no diretório Lambda/tmp."
      },
      {
        "id": "C",
        "text": "Habilite o cache da API TranslateText."
      },
      {
        "id": "D",
        "text": "Altere a função Lambda para usar processamento paralelo."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-379",
    "type": "single",
    "stem": "Um desenvolvedor está monitorando uma aplicação executada em uma instância do Amazon EC2. O desenvolvedor configurou uma métrica personalizada do Amazon CloudWatch com granularidade de dados de 1 segundo.",
    "ask": "Caso ocorra algum problema, o desenvolvedor deseja ser notificado em até 30 segundos pelo Amazon Simple Notification Service (Amazon SNS).O que o desenvolvedor deve fazer para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Configure um alarme CloudWatch de alta resolução."
      },
      {
        "id": "B",
        "text": "Configure um painel personalizado do CloudWatch."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudWatch Logs Insights."
      },
      {
        "id": "D",
        "text": "Alterar para uma métrica padrão do CloudWatch."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-380",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo web que contém uma API REST do Amazon API Gateway. Um desenvolvedor criou um modelo do AWS CloudFormation para a implantação inicial do aplicativo. O desenvolvedor implantou o aplicativo com sucesso como parte de um processo de integração e entrega contínua (CI/CD) do AWS CodePipeline. Todos os recursos e métodos estão disponíveis por meio do endpoint do estágio implantado.O modelo do CloudFormation contém os seguintes tipos de recursos:• AWS::ApiGateway::RestApi• AWS::ApiGateway::Resource• AWS::ApiGateway::Method• AWS::ApiGateway::Stage• AWS::ApiGateway::DeploymentO desenvolvedor adiciona um novo recurso à API REST com métodos adicionais e reimplanta o modelo. O CloudFormation relata que a implantação foi bem-sucedida e que a pilha está no estado UPDATE_COMPLETE.",
    "ask": "No entanto, as chamadas para todos os novos métodos estão retornando erros 404 (Não Encontrado).O que o desenvolvedor deve fazer para disponibilizar os novos métodos?",
    "options": [
      {
        "id": "A",
        "text": "Especifique a opção disable-rollback durante a operação update-stack."
      },
      {
        "id": "B",
        "text": "Desative as opções de falha da pilha do CloudFormation."
      },
      {
        "id": "C",
        "text": "Adicione um estágio do AWS CodeBuild ao CodePipeline para executar o comando aws apigateway create-deployment da AWS CLI."
      },
      {
        "id": "D",
        "text": "Adicione uma ação ao CodePipeline para executar o comando aws cloudfront create-invalidation da AWS CLI."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-381",
    "type": "single",
    "stem": "Um desenvolvedor atualiza uma função do AWS Lambda utilizada por uma API do Amazon API Gateway. A API é o backend de uma aplicação web.O desenvolvedor precisa testar a função do Lambda atualizada antes de implantá-la em produção.",
    "ask": "O teste não deve afetar nenhum usuário de produção da aplicação web.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma implantação de versão canário para o estágio de API existente. Implante a API no estágio existente. Teste a função Lambda atualizada usando a URL existente."
      },
      {
        "id": "B",
        "text": "Atualize o tipo de endpoint da API do API Gateway para privado. Implante as alterações no estágio da API existente. Teste a API usando a URL existente."
      },
      {
        "id": "C",
        "text": "Crie um novo estágio de API de teste no API Gateway. Adicione variáveis de estágio para implantar a função Lambda atualizada apenas no estágio de teste. Teste a função Lambda atualizada usando a nova URL do estágio."
      },
      {
        "id": "D",
        "text": "Crie uma nova pilha do AWS CloudFormation para implantar uma cópia completa da API de produção e da função Lambda. Use a URL da API da pilha para testar a função Lambda atualizada."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-382",
    "type": "single",
    "stem": "Um desenvolvedor deseja ter a capacidade de reverter para uma versão anterior de uma função do AWS Lambda em caso de erros causados por uma nova implantação.Como o desenvolvedor pode conseguir isso com o MÍNIMO impacto nos usuários?",
    "options": [
      {
        "id": "A",
        "text": "Altere o aplicativo para usar um alias que aponte para a versão atual. Implante a nova versão do código. Atualize o alias para usar a versão recém-implantada. Se muitos erros forem encontrados, aponte o alias de volta para a versão anterior."
      },
      {
        "id": "B",
        "text": "Altere o aplicativo para usar um alias que aponte para a versão atual. Implante a nova versão do código. Atualize o alias para direcionar 10% dos usuários para a versão recém-implantada. Se muitos erros forem encontrados, envie 100% do tráfego para a versão anterior."
      },
      {
        "id": "C",
        "text": "Não faça nenhuma alteração no aplicativo. Implante a nova versão do código. Se muitos erros forem encontrados, aponte o aplicativo de volta para a versão anterior usando o número da versão no Nome de Recurso da Amazon (ARN)."
      },
      {
        "id": "D",
        "text": "Crie três aliases: novo, existente e roteador. Aponte o alias existente para a versão atual. Faça com que o alias do roteador direcione 100% dos usuários para o alias existente. Atualize o aplicativo para usar o alias do roteador. Implante a nova versão do código. Aponte o novo alias para esta versão. Atualize o alias do roteador para direcionar 10% dos usuários para o novo alias. Se muitos erros forem encontrados, envie 100% do tráfego para o alias existente."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-383",
    "type": "single",
    "stem": "Uma empresa mantém um serviço REST usando o Amazon API Gateway e a validação de chave de API nativa do API Gateway. A empresa lançou recentemente uma nova página de registro, que permite que os usuários se inscrevam no serviço. A página de registro cria uma nova chave de API usando CreateApiKey e a envia ao usuário. Quando o usuário tenta chamar a API usando essa chave, recebe o erro 403 \"Forbidden\".",
    "ask": "Usuários existentes não são afetados e ainda podem chamar a API.Quais atualizações de código concederão a esses novos usuários acesso à API?",
    "options": [
      {
        "id": "A",
        "text": "O método createDeployment deve ser chamado para que a API possa ser reimplantada para incluir a chave de API recém-criada."
      },
      {
        "id": "B",
        "text": "O método updateAuthorizer deve ser chamado para atualizar o autorizador da API para incluir a chave de API recém-criada."
      },
      {
        "id": "C",
        "text": "O método importApiKeys deve ser chamado para importar todas as chaves de API recém-criadas para o estágio atual da API."
      },
      {
        "id": "D",
        "text": "O método createUsagePlanKey deve ser chamado para associar a chave de API recém-criada ao plano de uso correto."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-384",
    "type": "single",
    "stem": "Uma empresa utiliza um modelo do AWS CloudFormation para implantar e gerenciar sua infraestrutura na AWS. O modelo do CloudFormation cria grupos de segurança da Amazon VPC e grupos de segurança do Amazon EC2.Um gerente descobre que alguns engenheiros modificaram os grupos de segurança de algumas instâncias do EC2 para fins de teste.",
    "ask": "Um desenvolvedor precisa determinar quais modificações ocorreram.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma instrução de seção \"Condições\" no arquivo YAML de origem do modelo. Execute a pilha do CloudFormation."
      },
      {
        "id": "B",
        "text": "Execute uma operação de detecção de desvio na pilha do CloudFormation."
      },
      {
        "id": "C",
        "text": "Execute um conjunto de alterações para a pilha do CloudFormation."
      },
      {
        "id": "D",
        "text": "Use o Amazon Detective para detectar as modificações."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-385",
    "type": "single",
    "stem": "Uma função do IAM está vinculada a uma instância do Amazon EC2 que nega explicitamente o acesso a todas as ações da API do Amazon S3.",
    "ask": "O arquivo de credenciais da instância do EC2 especifica a chave de acesso do IAM e a chave de acesso secreta, que permitem acesso administrativo completo.Considerando que há vários modos de acesso do IAM para esta instância do EC2, qual das seguintes opções está correta?",
    "options": [
      {
        "id": "A",
        "text": "A instância do EC2 só poderá listar os buckets do S3."
      },
      {
        "id": "B",
        "text": "A instância do EC2 só poderá listar o conteúdo de um bucket S3 por vez."
      },
      {
        "id": "C",
        "text": "A instância do EC2 poderá executar todas as ações em qualquer bucket do S3."
      },
      {
        "id": "D",
        "text": "A instância do EC2 não poderá executar nenhuma ação do S3 em nenhum bucket do S3."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-386",
    "type": "single",
    "stem": "Uma empresa utiliza uma função do AWS Lambda para transferir arquivos de um bucket do Amazon S3 para o servidor SFTP da empresa. A função Lambda se conecta ao servidor SFTP usando credenciais como nome de usuário e senha.",
    "ask": "A empresa utiliza variáveis de ambiente do Lambda para armazenar essas credenciais.Um desenvolvedor precisa implementar credenciais de nome de usuário e senha criptografadas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Remova as credenciais do usuário do ambiente Lambda. Implemente a autenticação do banco de dados IAM."
      },
      {
        "id": "B",
        "text": "Mova as credenciais do usuário das variáveis de ambiente do Lambda para o AWS Systems Manager Parameter Store."
      },
      {
        "id": "C",
        "text": "Mova as credenciais do usuário das variáveis de ambiente do Lambda para o AWS Key Management Service (AWS KMS)."
      },
      {
        "id": "D",
        "text": "Mova as credenciais do usuário do ambiente Lambda para um arquivo .txt criptografado. Armazene o arquivo em um bucket do S3."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-387",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma nova aplicação em lote que será executada em uma instância do Amazon EC2. A aplicação requer acesso de leitura a um bucket do Amazon S3.",
    "ask": "O desenvolvedor precisa seguir as práticas recomendadas de segurança para conceder acesso de leitura do S3 à aplicação.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione as permissões a uma política do IAM. Anexe a política a uma função. Anexe a função ao perfil da instância do EC2."
      },
      {
        "id": "B",
        "text": "Adicione as permissões em linha a um grupo do IAM. Anexe o grupo ao perfil da instância do EC2."
      },
      {
        "id": "C",
        "text": "Adicione as permissões a uma política do IAM. Anexe a política a um usuário. Anexe o usuário ao perfil da instância do EC2."
      },
      {
        "id": "D",
        "text": "Adicione as permissões a uma política do IAM. Use a federação de identidades da Web do IAM para acessar o bucket do S3 com a política."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-388",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui um aplicativo que recebe lotes de pedidos de parceiros todos os dias.",
    "ask": "O aplicativo utiliza uma função do AWS Lambda para processar os lotes.Se um lote não contiver pedidos, a função do Lambda deverá publicar em um tópico do Amazon Simple Notification Service (Amazon SNS) o mais rápido possível.Qual combinação de etapas atenderá a esse requisito com o MENOR esforço de implementação?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o código da função Lambda existente para enviar uma métrica personalizada do Amazon CloudWatch para o número de pedidos em um lote para cada parceiro."
      },
      {
        "id": "B",
        "text": "Crie uma nova função Lambda como consumidora de fluxo de dados do Amazon Kinesis. Configure a nova função Lambda para rastrear pedidos e publicar no tópico do SNS quando um lote não contiver pedidos."
      },
      {
        "id": "C",
        "text": "Configure um alarme do Amazon CloudWatch que enviará uma notificação ao tópico do SNS quando o valor da métrica personalizada for 0."
      },
      {
        "id": "D",
        "text": "Agende uma nova função Lambda para analisar as métricas do Amazon CloudWatch a cada 24 horas e identificar lotes sem pedidos. Configure a função Lambda para publicar no tópico do SNS."
      },
      {
        "id": "E",
        "text": "Modifique a função Lambda existente para registrar pedidos em um fluxo de dados do Amazon Kinesis."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-389",
    "type": "single",
    "stem": "Um desenvolvedor possui um aplicativo que utiliza uma tabela do Amazon DynamoDB com um índice secundário local (LSI) configurado. Durante os testes do aplicativo, as métricas da tabela do DynamoDB relatam uma mensagem de erro ProvisionedThroughputExceededException.",
    "ask": "O número de solicitações feitas pelo conjunto de testes não excedeu os limites de capacidade provisionados da tabela.Qual é a causa desse problema?",
    "options": [
      {
        "id": "A",
        "text": "Os dados na coluna de chave de partição da tabela não estão distribuídos uniformemente."
      },
      {
        "id": "B",
        "text": "A capacidade do LSI é diferente da capacidade da tabela."
      },
      {
        "id": "C",
        "text": "O aplicativo não está implementando a lógica de repetição de espera exponencial ao interagir com a API do DynamoDB."
      },
      {
        "id": "D",
        "text": "O aplicativo tem permissão do IAM para consultar a tabela do DynamoDB, mas não para consultar o LSI."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-390",
    "type": "single",
    "stem": "Um desenvolvedor gerencia um site que distribui seu conteúdo usando o Amazon CloudFront. Os artefatos estáticos do site são armazenados em um bucket do Amazon S3.O desenvolvedor implementa algumas alterações e pode ver os novos artefatos no bucket do S3.",
    "ask": "No entanto, as alterações não aparecem na página da web que a distribuição do CloudFront entrega.Como o desenvolvedor deve resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Configure o S3 Object Lock para atualizar para a versão mais recente dos arquivos sempre que um objeto S3 for atualizado."
      },
      {
        "id": "B",
        "text": "Configure o bucket S3 para limpar todos os objetos antigos do bucket antes que novos artefatos sejam carregados."
      },
      {
        "id": "C",
        "text": "Configure o CloudFront para invalidar o cache depois que os artefatos forem implantados no Amazon S3."
      },
      {
        "id": "D",
        "text": "Configure o CloudFront para modificar a origem da distribuição após os artefatos serem implantados no Amazon S3."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-391",
    "type": "single",
    "stem": "Uma empresa possui uma equipe de desenvolvimento que utiliza o AWS CodeCommit para controle de versões. A equipe de desenvolvimento possui repositórios do CodeCommit em diversas contas da AWS.",
    "ask": "A equipe está se expandindo para incluir desenvolvedores que trabalham em diversos locais.A empresa precisa garantir que os desenvolvedores tenham acesso seguro aos repositórios.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Configure funções do IAM para cada desenvolvedor e conceda acesso individualmente."
      },
      {
        "id": "B",
        "text": "Configure conjuntos de permissões no AWS IAM Identity Center para conceder acesso às contas."
      },
      {
        "id": "C",
        "text": "Compartilhe as chaves de acesso da AWS com a equipe de desenvolvimento para acesso direto ao repositório."
      },
      {
        "id": "D",
        "text": "Use chaves SSH públicas para autenticação nos repositórios do CodeCommit."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-392",
    "type": "single",
    "stem": "Um desenvolvedor recebeu a seguinte mensagem de erro durante uma implantação do AWS CloudFormation:DELETE_FAILED (Os seguintes recursos falharam ao serem excluídos: [ASGInstanceRole12345678].)Qual ação o desenvolvedor deve tomar para resolver esse erro?",
    "options": [
      {
        "id": "A",
        "text": "Entre em contato com o Suporte da AWS para relatar um problema com o serviço Auto Scaling Groups (ASG)."
      },
      {
        "id": "B",
        "text": "Adicione um atributo DependsOn ao recurso ASGInstanceRole12345678 no modelo CloudFormation. Em seguida, exclua a pilha."
      },
      {
        "id": "C",
        "text": "Modifique o modelo do CloudFormation para manter o recurso ASGInstanceRole12345678. Em seguida, exclua manualmente o recurso após a implantação."
      },
      {
        "id": "D",
        "text": "Adicione um parâmetro force ao chamar CloudFormation com o role-arn de ASGInstanceRole12345678."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-393",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação crítica no Amazon Elastic Container Service (Amazon ECS) usando instâncias do Amazon EC2. A empresa precisa migrar a aplicação para o Amazon ECS no AWS Fargate.",
    "ask": "Um desenvolvedor está configurando o Fargate e os provedores de capacidade do ECS para fazer a mudança.Qual solução atenderá a esses requisitos com o MENOR tempo de inatividade durante a migração?",
    "options": [
      {
        "id": "A",
        "text": "Use a operação da API PutClusterCapacityProviders para associar o cluster ECS às estratégias de provedores de capacidade FARGATE e FARGATE_SPOT. Use FARGATE como Provedor 1 com um valor base. Use FARGATE_SPOT como Provedor 2 para failover."
      },
      {
        "id": "B",
        "text": "Use a operação da API CreateCapacityProvider para associar o cluster ECS às estratégias de provedores de capacidade FARGATE e FARGATE_SPOT. Use FARGATE como Provedor 1 com um valor base. Use FARGATE_SPOT como Provedor 2 para failover."
      },
      {
        "id": "C",
        "text": "Use a operação da API PutClusterCapacityProviders para associar o cluster ECS às estratégias de provedores de capacidade FARGATE e FARGATE_SPOT. Use FARGATE_SPOT como Provedor 1 com um valor base. Use FARGATE como Provedor 2 para failover."
      },
      {
        "id": "D",
        "text": "Use a operação da API CreateCapacityProvider para associar o cluster ECS às estratégias de provedores de capacidade FARGATE e FARGATE_SPOT. Use FARGATE_SPOT como Provedor 1 com um valor base. Use FARGATE como Provedor 2 para failover."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-394",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui uma aplicação web hospedada na AWS. A aplicação está por trás de uma distribuição do Amazon CloudFront.",
    "ask": "Um desenvolvedor precisa de um painel para monitorar as taxas de erros e anomalias da distribuição do CloudFront com a maior frequência possível.Qual combinação de etapas o desenvolvedor deve seguir para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Transmita os logs de distribuição do CloudFront para um bucket do Amazon S3. Detecte anomalias e taxas de erro usando o Amazon Athena."
      },
      {
        "id": "B",
        "text": "Habilite logs em tempo real na distribuição do CloudFront. Crie um fluxo de dados no Amazon Kinesis Data Streams."
      },
      {
        "id": "C",
        "text": "Configure o Amazon Kinesis Data Streams para enviar os logs ao Amazon OpenSearch Service usando uma função do AWS Lambda. Crie um painel no OpenSearch Dashboards."
      },
      {
        "id": "D",
        "text": "Transmita os logs de distribuição do CloudFront para o Amazon Kinesis Data Firehose."
      },
      {
        "id": "E",
        "text": "Configure o Amazon Kinesis Data Firehose para enviar os logs para o AWS CloudTrail. Crie métricas, alarmes e painéis do CloudTrail."
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "DVA-C02-395",
    "type": "single",
    "stem": "Um desenvolvedor cria uma tabela do Amazon DynamoDB. A tabela tem OrderID como chave de partição e NumberOfItemsPurchased como chave de classificação. O tipo de dado da chave de partição e da chave de classificação é Number.Quando o desenvolvedor consulta a tabela, os resultados são classificados por NumberOfItemsPurchased em ordem crescente.",
    "ask": "O desenvolvedor precisa que os resultados da consulta sejam classificados por NumberOfItemsPurchased em ordem decrescente.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie um índice secundário local (LSI) na chave de classificação NumberOfItemsPurchased."
      },
      {
        "id": "B",
        "text": "Altere a chave de classificação de NumberOfItemsPurchased para NumberOfItemsPurchasedDescending."
      },
      {
        "id": "C",
        "text": "Na operação Consulta, defina o parâmetro ScanIndexForward como falso."
      },
      {
        "id": "D",
        "text": "Na operação Query, defina o parâmetro KeyConditionExpression como false."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-396",
    "type": "single",
    "stem": "Um desenvolvedor precisa usar um modelo de código para criar uma implantação automatizada de uma aplicação em instâncias do Amazon EC2. O modelo deve ser configurado para repetir a implantação, a instalação e as atualizações de recursos da aplicação.",
    "ask": "O modelo deve ser capaz de criar ambientes idênticos e reverter para versões anteriores.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Amplify para modelos de implantação automática. Use uma implantação com divisão de tráfego para copiar quaisquer implantações. Modifique quaisquer recursos criados pelo Amplify, se necessário."
      },
      {
        "id": "B",
        "text": "Use o AWS CodeBuild para implantação automática. Carregue o modelo de arquivo AppSpec necessário. Salve o arquivo appspec.yml na pasta raiz da revisão. Especifique o grupo de implantação que inclui as instâncias do EC2 para a implantação."
      },
      {
        "id": "C",
        "text": "Use o AWS CloudFormation para criar um modelo de infraestrutura em formato JSON para implantar as instâncias do EC2. Use os scripts auxiliares do CloudFormation para instalar o software necessário e iniciar o aplicativo. Chame os scripts diretamente do modelo."
      },
      {
        "id": "D",
        "text": "Use o AWS AppSync para implantar o aplicativo. Carregue o modelo como um esquema GraphQL. Especifique as instâncias do EC2 para implantação do aplicativo. Use resolvedores como mecanismo de controle de versão e para fazer atualizações nas implantações."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-397",
    "type": "single",
    "stem": "Um desenvolvedor possui um pipeline de integração e entrega contínua (CI/CD) que utiliza o AWS CodeArtifact e o AWS CodeBuild. Os artefatos de compilação têm entre 0,5 GB e 1,5 GB de tamanho. As compilações ocorrem com frequência e recuperam muitas dependências do CodeArtifact a cada vez.As compilações têm sido lentas devido ao tempo necessário para transferir dependências.",
    "ask": "O desenvolvedor precisa melhorar o desempenho da compilação reduzindo o número de dependências recuperadas para cada compilação.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Especifique um cache do Amazon S3 no CodeBuild. Adicione o caminho da pasta de cache do S3 ao arquivo buildspec.yaml para o projeto de compilação."
      },
      {
        "id": "B",
        "text": "Especifique um cache local no CodeBuild. Adicione o nome do repositório CodeArtifact ao arquivo buildspec.yaml para o projeto de compilação."
      },
      {
        "id": "C",
        "text": "Especifique um cache local no CodeBuild. Adicione o caminho da pasta de cache ao arquivo buildspec.yaml para o projeto de compilação."
      },
      {
        "id": "D",
        "text": "Recupere o arquivo buildspec.yaml diretamente do CodeArtifact. Adicione o nome do repositório do CodeArtifact ao arquivo buildspec.yaml para o projeto de compilação."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-398",
    "type": "single",
    "stem": "Uma empresa com um grande negócio online utiliza uma tabela do Amazon DynamoDB para armazenar dados de vendas. A empresa habilitou o Amazon DynamoDB Streams na tabela. O status da transação de cada venda é armazenado em um atributo TransactionStatus na tabela. O valor do atributo TransactionStatus deve ser \"failed\", \"pendential\" ou \"completed\".A empresa deseja ser notificada sobre vendas com falha em que o atributo \"Preço\" esteja acima de um limite específico.",
    "ask": "Um desenvolvedor precisa configurar a notificação para as vendas com falha.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie um mapeamento de origem de eventos entre o DynamoDB Streams e uma função do AWS Lambda. Use a filtragem de eventos do Lambda para acionar a função do Lambda somente se as vendas falharem quando o preço estiver acima do limite especificado. Configure a função do Lambda para publicar os dados em um tópico do Amazon Simple Notification Service (Amazon SNS)."
      },
      {
        "id": "B",
        "text": "Crie um mapeamento de origem de eventos entre o DynamoDB Streams e uma função do AWS Lambda. Configure o código do manipulador da função do Lambda para publicar em um tópico do Amazon Simple Notification Service (Amazon SNS) caso as vendas falhem quando o preço estiver acima do limite especificado."
      },
      {
        "id": "C",
        "text": "Crie um mapeamento de origem de eventos entre o DynamoDB Streams e um tópico do Amazon Simple Notification Service (Amazon SNS). Use a filtragem de eventos para publicar no tópico do SNS caso as vendas falhem quando o preço estiver acima do limite especificado."
      },
      {
        "id": "D",
        "text": "Crie um alarme do Amazon CloudWatch para monitorar os dados de vendas do DynamoDB Streams. Configure o alarme para publicar em um tópico do Amazon Simple Notification Service (Amazon SNS) caso as vendas falhem quando o preço estiver acima do limite especificado."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-399",
    "type": "single",
    "stem": "Uma função do AWS Lambda é invocada de forma assíncrona para processar eventos. Ocasionalmente, a função do Lambda é responsável por processar eventos.",
    "ask": "Um desenvolvedor precisa coletar e analisar esses eventos com falha para corrigir o problema.O que o desenvolvedor deve fazer para atender a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Adicione instruções de registro para todos os eventos na função Lambda. Filtre os logs do AWS CloudTrail em busca de erros."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda para iniciar um fluxo de trabalho do AWS Step Functions com novas tentativas para eventos com falha."
      },
      {
        "id": "C",
        "text": "Adicione uma fila de mensagens mortas para enviar mensagens para uma fila padrão do Amazon Simple Queue Service (Amazon SQS)."
      },
      {
        "id": "D",
        "text": "Adicione uma fila de mensagens mortas para enviar mensagens para um tópico FIFO do Amazon Simple Notification Service (Amazon SNS)."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-400",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui um aplicativo que utiliza um bucket do Amazon S3 para armazenamento de objetos. Um desenvolvedor precisa configurar a criptografia em trânsito para o bucket do S3.",
    "ask": "Todos os objetos do S3 que contêm dados pessoais precisam ser criptografados em repouso com chaves do AWS Key Management Service (AWS KMS), que podem ser rotacionadas sob demanda.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Escreva uma política de bucket do S3 para permitir apenas conexões criptografadas via HTTPS usando o limite de permissões."
      },
      {
        "id": "B",
        "text": "Configure uma política de bucket do S3 para habilitar a criptografia do lado do cliente para os objetos que contêm dados pessoais usando uma chave gerenciada pelo cliente do AWS KMS."
      },
      {
        "id": "C",
        "text": "Configure o aplicativo para criptografar os objetos usando uma chave gerenciada pelo cliente do AWS KMS antes de carregar os objetos que contêm dados pessoais no Amazon S3."
      },
      {
        "id": "D",
        "text": "Escreva uma política de bucket S3 para permitir apenas conexões criptografadas via HTTPS usando a condição aws:SecureTransport."
      },
      {
        "id": "E",
        "text": "Configure as definições de Bloqueio de Acesso Público do S3 para o bucket do S3 para permitir somente conexões criptografadas via HTTPS."
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "DVA-C02-401",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo desktop monolítico que processa imagens. Um desenvolvedor está convertendo o aplicativo em uma função Lambda da AWS usando Python. Atualmente, o aplicativo desktop é executado a cada 5 minutos para processar a imagem mais recente de um bucket do Amazon S3. O aplicativo desktop conclui a tarefa de processamento de imagem em 1 minuto.Durante os testes na AWS, o desenvolvedor observa que a função Lambda é executada no intervalo especificado de 5 minutos. No entanto, a função Lambda leva mais de 2 minutos para concluir a tarefa de processamento de imagem.",
    "ask": "O desenvolvedor precisa de uma solução que melhore o desempenho da função Lambda.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o tipo de instância da função Lambda para uma instância otimizada para computação com pelo menos oito CPUs virtuais (vCPUs)."
      },
      {
        "id": "B",
        "text": "Atualize a configuração da função Lambda para usar o tempo de execução mais recente do Python."
      },
      {
        "id": "C",
        "text": "Aumente a memória alocada para a função Lambda."
      },
      {
        "id": "D",
        "text": "Configure uma simultaneidade reservada na função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-402",
    "type": "single",
    "stem": "Uma empresa usa modelos do AWS CloudFormation para gerenciar a infraestrutura de um aplicativo público em seus ambientes de desenvolvimento, pré-produção e produção. A empresa precisa escalar para atender à crescente demanda dos clientes. Um desenvolvedor precisa atualizar o tipo de instância do Amazon RDS DB para uma instância maior.O desenvolvedor implanta uma atualização na pilha do CloudFormation com a alteração do tamanho da instância no ambiente de pré-produção.",
    "ask": "O desenvolvedor percebe que a pilha está em um estado UPDATE_ROLLBACK_FAILED no CloudFormation.Qual opção está causando esse problema?",
    "options": [
      {
        "id": "A",
        "text": "O novo tipo de instância especificado no modelo CloudFormation é inválido"
      },
      {
        "id": "B",
        "text": "O banco de dados foi excluído ou modificado manualmente fora da pilha do CloudFormation"
      },
      {
        "id": "C",
        "text": "Há um erro de sintaxe no modelo CloudFormation"
      },
      {
        "id": "D",
        "text": "O desenvolvedor não tem permissões de IAM suficientes para provisionar uma instância do tipo especificado"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-403",
    "type": "single",
    "stem": "Um desenvolvedor precisa armazenar arquivos em um bucket do Amazon S3 para o aplicativo de uma empresa. Cada objeto S3 pode ter várias versões.",
    "ask": "Os objetos devem ser removidos permanentemente 1 ano após sua criação.O desenvolvedor cria um bucket S3 com versionamento habilitado.O que o desenvolvedor deve fazer em seguida para atender aos requisitos de retenção de dados?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma regra de ciclo de vida do S3 no bucket do S3. Configure a regra para expirar as versões atuais dos objetos e excluir permanentemente as versões não atuais 1 ano após a criação do objeto."
      },
      {
        "id": "B",
        "text": "Crie uma notificação de evento para todos os eventos de criação de objetos no bucket do S3. Configure a notificação de evento para invocar uma função do AWS Lambda. Programe a função do Lambda para verificar a data de criação do objeto e excluí-lo se ele tiver mais de 1 ano."
      },
      {
        "id": "C",
        "text": "Crie uma notificação de evento para todos os eventos de remoção de objetos no bucket do S3. Configure a notificação de evento para invocar uma função do AWS Lambda. Programe a função do Lambda para verificar a data de criação do objeto e excluí-lo se ele tiver mais de 1 ano."
      },
      {
        "id": "D",
        "text": "Crie uma regra de ciclo de vida do S3 no bucket do S3. Configure a regra para excluir marcadores de exclusão de objetos expirados e excluir permanentemente versões desatualizadas 1 ano após a criação do objeto."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-404",
    "type": "single",
    "stem": "Uma empresa usa o AWS X-Ray para monitorar um aplicativo sem servidor. Os componentes do aplicativo têm diferentes taxas de solicitação. As interações e transações do usuário são importantes para rastrear, mas seu volume é baixo. Os processos em segundo plano, como verificações de integridade do aplicativo, pesquisas e manutenção de conexão, geram altos volumes de solicitações somente leitura.Atualmente, as regras de amostragem padrão do X-Ray são universais para todas as solicitações. Apenas a primeira solicitação por segundo e algumas solicitações adicionais são registradas. Essa configuração não está ajudando a empresa a revisar as solicitações com base no serviço ou tipo de solicitação.Um desenvolvedor deve configurar regras para rastrear solicitações com base nas propriedades do serviço ou da solicitação.",
    "ask": "O desenvolvedor deve rastrear as interações e transações do usuário sem desperdiçar esforços registrando pequenas tarefas em segundo plano.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Desabilite a amostragem para solicitações somente leitura de alto volume. Use uma taxa de amostragem menor para todas as solicitações que lidam com interações ou transações do usuário."
      },
      {
        "id": "B",
        "text": "Desabilite a amostragem e rastreie todas as solicitações que lidam com interações ou transações do usuário. Amostragem de solicitações somente leitura de alto volume em uma taxa mais alta."
      },
      {
        "id": "C",
        "text": "Desabilite a amostragem e rastreie todas as solicitações que lidam com interações ou transações do usuário. Amostragem de solicitações somente leitura de alto volume em uma taxa menor."
      },
      {
        "id": "D",
        "text": "Desabilite a amostragem para solicitações somente leitura de alto volume. Aumente a amostragem para todas as solicitações que lidam com interações ou transações do usuário."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-405",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor usa uma função do AWS Lambda em um aplicativo para editar as fotos enviadas pelos usuários.",
    "ask": "O desenvolvedor precisa atualizar o código da função Lambda e testar as atualizações.Para testar, o desenvolvedor deve dividir o tráfego de usuários entre a versão original e a nova versão da função Lambda.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique uma versão da função Lambda original. Faça as alterações necessárias no código Lambda. Publique uma nova versão da função Lambda."
      },
      {
        "id": "B",
        "text": "Use o AWS CodeBuild para detectar atualizações na função Lambda. Configure o CodeBuild para transferir incrementalmente o tráfego da versão original da função Lambda para a nova versão."
      },
      {
        "id": "C",
        "text": "Atualize a versão original da função Lambda para adicionar uma URL de função. Faça as alterações necessárias no código Lambda. Publique outra URL de função para o código Lambda atualizado."
      },
      {
        "id": "D",
        "text": "Crie um alias que aponte para a versão original da função Lambda. Configure o alias como um alias ponderado que também inclua a nova versão da função Lambda. Divida o tráfego entre as duas versões."
      },
      {
        "id": "E",
        "text": "Crie um alias que aponte para a URL da função original. Configure o alias como um alias ponderado que também inclua a URL da função adicional. Divida o tráfego entre as duas URLs da função."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-406",
    "type": "single",
    "stem": "Uma empresa tinha uma instância de banco de dados do Amazon RDS para MySQL chamada mysql-db.",
    "ask": "A instância de banco de dados foi excluída nos últimos 90 dias.Um desenvolvedor precisa descobrir qual usuário ou função do IAM excluiu a instância de banco de dados no ambiente da AWS.Qual solução fornecerá essas informações?",
    "options": [
      {
        "id": "A",
        "text": "Recupere os eventos do AWS CloudTrail para o recurso mysql-db cujo nome é DeleteDBInstance. Inspecione cada evento."
      },
      {
        "id": "B",
        "text": "Recupere os eventos de log do Amazon CloudWatch do fluxo de log mais recente dentro do grupo de logs rds/mysql-db. Inspecione os eventos de log."
      },
      {
        "id": "C",
        "text": "Recupere os resumos de rastreamento do AWS X-Ray. Filtre por serviços com o nome mysql-db. Inspecione os valores de ErrorRootCauses em cada resumo."
      },
      {
        "id": "D",
        "text": "Recupere o inventário de exclusões do AWS Systems Manager. Filtre o inventário por exclusões cujo valor TypeName seja RDS. Inspecione os detalhes da exclusão."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-407",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo web de comércio eletrônico que utiliza um banco de dados MySQL local como armazenamento de dados. A empresa migra o banco de dados MySQL local para o Amazon RDS para MySQL.Um desenvolvedor precisa configurar o acesso do aplicativo ao banco de dados RDS para MySQL.",
    "ask": "A solução do desenvolvedor não deve usar credenciais de longo prazo.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Habilite a autenticação do banco de dados IAM na instância do RDS para MySQL. Crie uma função do IAM com as permissões mínimas necessárias. Atribua a função ao aplicativo."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais do MySQL como segredos no AWS Secrets Manager. Crie uma função do IAM com as permissões mínimas necessárias para recuperar os segredos. Atribua a função ao aplicativo."
      },
      {
        "id": "C",
        "text": "Configure as credenciais do MySQL como variáveis de ambiente que estão disponíveis em tempo de execução para o aplicativo."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais do MySQL como parâmetros SecureString no AWS Systems Manager Parameter Store. Crie uma função do IAM com as permissões mínimas necessárias para recuperar os parâmetros. Atribua a função ao aplicativo."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-408",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que precisa transferir itens expirados do Amazon DynamoDB para o Amazon S3. O desenvolvedor configura a tabela do DynamoDB para excluir itens automaticamente após um TTL específico. A aplicação precisa processar os itens no DynamoDB e, em seguida, armazená-los no Amazon S3.",
    "ask": "Todo o processo, incluindo o processamento e o armazenamento dos itens no Amazon S3, levará 5 minutos.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure o DynamoDB Accelerator (DAX) para consultar itens expirados com base no TTL. Salve os resultados no Amazon S3."
      },
      {
        "id": "B",
        "text": "Configure o DynamoDB Streams para invocar uma função do AWS Lambda. Programe a função do Lambda para processar os itens e armazenar os itens expirados no Amazon S3."
      },
      {
        "id": "C",
        "text": "Implante um aplicativo personalizado em um cluster do Amazon Elastic Container Service (Amazon ECS) em instâncias do Amazon EC2. Programe o aplicativo personalizado para processar os itens e armazenar os itens expirados no Amazon S3."
      },
      {
        "id": "D",
        "text": "Crie uma regra do Amazon EventBridge para invocar uma função do AWS Lambda. Programe a função do Lambda para processar os itens e armazenar os itens expirados no Amazon S3."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-409",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor possui uma aplicação que utiliza APIs WebSocket no Amazon API Gateway.",
    "ask": "O desenvolvedor deseja usar um autorizador Lambda do API Gateway para controlar o acesso à aplicação.O desenvolvedor precisa adicionar cache de credenciais e reduzir o uso repetido de chaves secretas e tokens de autorização em cada solicitação.Qual combinação de etapas o desenvolvedor deve seguir para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use um autorizador Lambda baseado em token."
      },
      {
        "id": "B",
        "text": "Use um autorizador Lambda baseado em parâmetros de solicitação."
      },
      {
        "id": "C",
        "text": "Configure um modelo de mapeamento de solicitação de integração para referenciar o mapa de contexto do autorizador do APIGateway Lambda."
      },
      {
        "id": "D",
        "text": "Configure um modelo de mapeamento de solicitação de integração para referenciar o valor da chave de API de identidade do autorizador do API Gateway Lambda."
      },
      {
        "id": "E",
        "text": "Use políticas de endpoint de VPC para as APIs do WebSocket."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-410",
    "type": "single",
    "stem": "Um desenvolvedor cria uma aplicação serverless na AWS usando o Amazon API Gateway, funções do AWS Lambda e o Amazon Route 53.",
    "ask": "Durante os testes, o desenvolvedor percebe erros, mas não consegue localizar imediatamente a causa raiz.Para identificar os erros, o desenvolvedor precisa pesquisar todos os logs da aplicação.O que o desenvolvedor deve fazer para atender a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure verificações de integridade do API Gateway para monitorar a disponibilidade do aplicativo. Use a operação da API PutMetricData do Amazon CloudWatch para publicar os logs no CloudWatch. Pesquise e consulte os logs usando o Amazon Athena."
      },
      {
        "id": "B",
        "text": "Configure verificações de integridade do Route 53 para monitorar a disponibilidade do aplicativo. Ative os logs do AWS CloudTrail para todos os serviços da AWS que o aplicativo utiliza. Envie os logs para um bucket específico do Amazon S3. Use o Amazon Athena para consultar os arquivos de log diretamente do Amazon S3."
      },
      {
        "id": "C",
        "text": "Configure todos os serviços AWS do aplicativo para publicar um feed em tempo real de eventos de log em um fluxo de entrega do Amazon Kinesis Data Firehose. Configure o fluxo de entrega para publicar todos os logs em um bucket do Amazon S3. Use o Amazon OpenSearch Service para pesquisar e analisar os logs."
      },
      {
        "id": "D",
        "text": "Configure verificações de integridade do Route 53 para monitorar a disponibilidade do aplicativo. Ative o Amazon CloudWatch Logs para que os estágios do API Gateway registrem solicitações de API com um formato de log JSON. Use o CloudWatch Logs Insights para pesquisar e analisar os logs dos serviços da AWS que o aplicativo utiliza."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-411",
    "type": "single",
    "stem": "Um desenvolvedor precisa congelar as alterações em um repositório do AWS CodeCommit antes de uma versão de produção. O desenvolvedor trabalhará em novos recursos enquanto uma equipe de garantia de qualidade (QA) testa a versão.Os testes de QA e todas as correções de bugs devem ocorrer separadamente da ramificação principal.",
    "ask": "Após a versão, o desenvolvedor deve integrar todas as correções de bugs à ramificação principal.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma ramificação de lançamento a partir do último commit do Git que estará na versão. Aplique correções à ramificação de lançamento. Continue desenvolvendo novos recursos e mescle-os na ramificação principal. Mescle a ramificação de lançamento na ramificação principal após o lançamento."
      },
      {
        "id": "B",
        "text": "Crie uma tag Git no último commit do Git que estará na versão. Continue desenvolvendo novos recursos e mescle-os na ramificação principal. Aplique correções na ramificação principal. Atualize a tag Git da versão para que ela esteja na última confirmação na ramificação principal."
      },
      {
        "id": "C",
        "text": "Crie uma ramificação de lançamento a partir do último commit do Git que estará na versão. Aplique correções à ramificação de lançamento. Continue desenvolvendo novos recursos e mescle-os na ramificação principal. Rebase a ramificação principal na ramificação de lançamento após o lançamento."
      },
      {
        "id": "D",
        "text": "Crie uma tag Git no último commit do Git que estará na versão. Continue desenvolvendo novos recursos e mescle-os na ramificação principal. Aplique os commits do Git para correções à tag Git da versão."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-412",
    "type": "single",
    "stem": "Um desenvolvedor está configurando o AWS CodePipeline para uma nova aplicação.",
    "ask": "Durante cada compilação, o desenvolvedor deve gerar um relatório de teste.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie um projeto de build do AWS CodeBuild que execute testes. Configure o arquivo buildspec com as informações do relatório de teste."
      },
      {
        "id": "B",
        "text": "Crie uma implantação do AWS CodeDeploy que execute testes. Configure o arquivo AppSpec com as informações do relatório de teste."
      },
      {
        "id": "C",
        "text": "Execute as compilações em uma instância do Amazon EC2 que tenha o AWS Systems Manager Agent (SSM Agent) instalado e ativado."
      },
      {
        "id": "D",
        "text": "Crie um repositório no AWS CodeArtifact. Selecione o modelo de relatório de teste."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-413",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação utilizando múltiplas funções do AWS Lambda. As funções do Lambda precisam acessar dados de configuração dinâmica em tempo de execução. Os dados são mantidos como um documento JSON de 6 KB no AWS AppConfig.",
    "ask": "Os dados de configuração precisam ser atualizados sem exigir a reimplantação da aplicação.O desenvolvedor precisa de uma solução que permita que as funções do Lambda acessem os dados de configuração dinâmica.O que o desenvolvedor deve fazer para atender a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Migre o documento do AWS AppConfig para uma variável de ambiente do Lambda. Leia o documento em tempo de execução."
      },
      {
        "id": "B",
        "text": "Configure a extensão Lambda do Agente AWS AppConfig. Acesse os dados de configuração dinâmica chamando a extensão em um host local."
      },
      {
        "id": "C",
        "text": "Use o SDK do AWS X-Ray para chamar as APIs do AWS AppConfig. Recupere o arquivo de configuração em tempo de execução."
      },
      {
        "id": "D",
        "text": "Migre o arquivo de configuração para um pacote de implantação do Lambda. Leia o arquivo do sistema de arquivos em tempo de execução."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-414",
    "type": "single",
    "stem": "Um desenvolvedor possui funções do AWS Lambda que precisam acessar as bibliotecas internas de ciência de dados e os dados de referência de uma empresa. Equipes separadas gerenciam as bibliotecas e os dados. As equipes devem ser capazes de atualizar e enviar novos dados de forma independente.",
    "ask": "As funções do Lambda estão conectadas à VPC central da empresa.Qual solução fornecerá às funções do Lambda acesso às bibliotecas e aos dados?",
    "options": [
      {
        "id": "A",
        "text": "Anexe um volume do Amazon Elastic Block Store (Amazon EBS) às funções do Lambda usando o EBS Multi-Attach na VPC central. Atualize as funções de execução das funções do Lambda para que as funções acessem o volume do EBS. Atualize o código da função do Lambda para referenciar os arquivos no volume do EBS."
      },
      {
        "id": "B",
        "text": "Compacte as bibliotecas e os dados de referência em uma pasta /tmp do Lambda. Atualize o código da função do Lambda para referenciar os arquivos na pasta /tmp."
      },
      {
        "id": "C",
        "text": "Configurar um sistema de arquivos do Amazon Elastic File System (Amazon EFS) com destinos de montagem na VP central. Configurar as funções do Lambda para montar o sistema de arquivos EFS. Atualize as funções de execução das funções do Lambda para permitir que as funções acessem o sistema de arquivos EFS."
      },
      {
        "id": "D",
        "text": "Configure um sistema de arquivos do Amazon FSx para Windows File Server com destinos de montagem na VPC central. Configure as funções do Lambda para montar o sistema de arquivos do Amazon FSx. Atualize as funções de execução da função do Lambda para permitir que as funções acessem o sistema de arquivos do Amazon FSx."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-415",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que utiliza uma função do AWS Lambda para consumir mensagens de uma fila do Amazon Simple Queue Service (Amazon SQS). A fila do SQS está configurada com uma fila de mensagens mortas. Devido a um defeito no aplicativo, o AWS Lambda não conseguiu processar algumas mensagens.",
    "ask": "Um desenvolvedor corrigiu o bug e deseja processar as mensagens com falha novamente.Como o desenvolvedor deve resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Use a API SendMessageBatch para enviar mensagens da fila de mensagens mortas para a fila SQS original."
      },
      {
        "id": "B",
        "text": "Use a API ChangeMessageVisibility para configurar mensagens na fila de mensagens mortas para que fiquem visíveis na fila SQS original."
      },
      {
        "id": "C",
        "text": "Use a API StartMessageMoveTask para mover mensagens da fila de mensagens mortas para a fila SQS original."
      },
      {
        "id": "D",
        "text": "Use a API PurgeQueue para remover mensagens da fila de mensagens mortas e retorná-las à fila SQS original."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-416",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um aplicativo que será implantado na AWS. Ele precisa testar e depurar o código localmente.",
    "ask": "O código é empacotado e armazenado em um bucket do Amazon S3.Como o desenvolvedor pode testar e depurar o código localmente com o MÍNIMO de configuração?",
    "options": [
      {
        "id": "A",
        "text": "Crie um aplicativo e um grupo de implantação no AWS CodeDeploy. Para a plataforma de computação, especifique a máquina local como a instância individual para a implantação. Para o tipo de repositório, especifique que o aplicativo está armazenado no Amazon S3. Inicie a implantação para testar na máquina local."
      },
      {
        "id": "B",
        "text": "Crie um repositório no AWS CodeArtifact. Publique o pacote de código do aplicativo no repositório. Antes da implantação, crie um repositório upstream para testar e validar o código."
      },
      {
        "id": "C",
        "text": "Crie um projeto de build no AWS CodeBuild. No AWS CodePipeline, adicione uma ação de teste do CodeBuild adicionando um estágio e uma ação. Para o provedor de ação, especifique um teste do CodeBuild e o projeto de build. Consulte o log de build para ver os resultados do teste."
      },
      {
        "id": "D",
        "text": "Instale o agente do AWS CodeDeploy localmente para validar o pacote de implantação. Execute o comando codedeploy-local. Especifique o bucket do S3 onde o pacote de código está localizado usando a opção --bundle-location."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-417",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação no Amazon Elastic Container Service (Amazon ECS). O desenvolvedor precisa configurar os parâmetros da aplicação. Ele deve definir limites para o número máximo de conexões simultâneas e o número máximo de transações por segundo da aplicação.O número máximo de conexões e transações pode mudar no futuro.",
    "ask": "O desenvolvedor precisa de uma solução que possa implementar essas alterações automaticamente na aplicação, conforme necessário, sem causar tempo de inatividade.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Faça as alterações de configuração do aplicativo. Use o AWS CodeDeploy para criar uma configuração de implantação. Especifique uma implantação local para implementar as alterações."
      },
      {
        "id": "B",
        "text": "Inicialize o aplicativo para usar o AWS Cloud Development Kit (AWS CDK) e faça as alterações de configuração. Especifique o tipo de inicialização ECSCanary10Percent15Minutes na seção de propriedades do recurso ECS. Implante o aplicativo usando o AWS CDK para implementar as alterações."
      },
      {
        "id": "C",
        "text": "Instale o agente AWS AppConfig no Amazon ECS. Configure uma função do IAM com acesso ao AWS AppConfig. Faça as alterações de implantação usando o AWS AppConfig. Especifique Canary10Percent20Minutes como estratégia de implantação."
      },
      {
        "id": "D",
        "text": "Crie uma função do AWS Lambda para fazer as alterações de configuração. Crie um alarme do Amazon CloudWatch que monitore a função do Lambda a cada 5 minutos para verificar se ela foi atualizada. Quando a função do Lambda for atualizada, implante as alterações usando o AWS CodeDeploy."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-418",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação em execução no AWS Lambda usando o AWS Serverless Application Model (AWS SAM).Qual é a sequência correta de etapas para implantar a aplicação com sucesso?",
    "options": [
      {
        "id": "A",
        "text": "1. Crie o modelo SAM no Amazon EC2.2. Empacote o modelo SAM no armazenamento do Amazon EBS.3. Implante o modelo SAM do Amazon EBS."
      },
      {
        "id": "B",
        "text": "1. Crie o modelo SAM localmente.2. Empacote o modelo SAM no Amazon S3.3. Implante o modelo SAM do Amazon S3."
      },
      {
        "id": "C",
        "text": "1. Crie o modelo SAM localmente.2. Implante o modelo SAM do Amazon S3.3. Empacote o modelo SAM para uso."
      },
      {
        "id": "D",
        "text": "1. Crie o modelo SAM localmente.2. Empacote o modelo SAM do AWS CodeCommit.3. Implante o modelo SAM no CodeCommit."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-419",
    "type": "single",
    "stem": "Um desenvolvedor precisa implantar o código de uma nova aplicação em uma função do AWS Lambda.",
    "ask": "A aplicação precisa de um arquivo de dependência de 500 MB para executar a lógica de negócios.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Compacte o código do aplicativo e as dependências em um arquivo .zip. Carregue o arquivo .zip diretamente como um pacote de implantação para a função Lambda em vez de copiar o código."
      },
      {
        "id": "B",
        "text": "Compacte o código do aplicativo e as dependências em um arquivo .zip. Carregue o arquivo .zip em um bucket do Amazon S3. Configure a função Lambda para executar o código do arquivo .zip no bucket do S3."
      },
      {
        "id": "C",
        "text": "Empacote o código do aplicativo e as dependências em uma imagem de contêiner. Carregue a imagem em um bucket do Amazon S3. Configure a função Lambda para executar o código na imagem."
      },
      {
        "id": "D",
        "text": "Empacote o código do aplicativo e as dependências em uma imagem de contêiner. Envie a imagem para um repositório do Amazon Elastic Container Registry (Amazon ECR). Implante a imagem na função Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-420",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de página única acessível ao público. O aplicativo faz chamadas de um navegador web do cliente para serviços de back-end a fim de fornecer uma interface de usuário aos clientes. O aplicativo depende de um serviço web de terceiros exposto como uma API HTTP. O cliente web deve fornecer uma chave de API ao serviço web de terceiros usando o cabeçalho HTTP como parte da solicitação HTTP.",
    "ask": "A chave de API da empresa não deve ser exposta aos usuários do aplicativo web.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon API Gateway para criar uma API REST privada. Crie uma integração HTTP para integração com a API HTTP de terceiros. Adicione a chave de API da empresa à lista de cabeçalhos HTTP da configuração da solicitação de integração."
      },
      {
        "id": "B",
        "text": "Use o Amazon API Gateway para criar uma API REST privada. Crie uma integração de proxy com o AWS Lambda. Faça chamadas para a API HTTP de terceiros a partir da função Lambda. Passe a chave de API da empresa como um cabeçalho de solicitação HTTP."
      },
      {
        "id": "C",
        "text": "Use o Amazon API Gateway para criar uma API REST. Crie uma integração HTTP para integração com a API HTTP de terceiros. Adicione a chave de API da empresa à lista de cabeçalhos HTTP da configuração da solicitação de integração."
      },
      {
        "id": "D",
        "text": "Use o Amazon API Gateway para criar uma API REST. Crie uma integração de proxy com o AWS Lambda. Faça chamadas para a API HTTP de terceiros a partir da função Lambda. Passe a chave de API da empresa como um cabeçalho de solicitação HTTP."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-421",
    "type": "single",
    "stem": "Um desenvolvedor está configurando a implantação de pilhas de aplicativos em novos ambientes de teste usando o AWS Cloud Development Kit (AWS CDK). O aplicativo contém o código para diversas funções do AWS Lambda que serão implantadas como ativos. Cada função do Lambda é definida usando a biblioteca de construção Lambda do AWS CDK.O desenvolvedor já implantou com sucesso as pilhas de aplicativos no ambiente alfa na primeira conta usando o comando cdk deploy da CLI do AWS CDK. O desenvolvedor está se preparando para implantar no ambiente beta em uma segunda conta pela primeira vez.",
    "ask": "O desenvolvedor não faz alterações significativas no código do CDK entre as implantações, mas a implantação inicial na segunda conta não é bem-sucedida e retorna um erro NoSuchBucket.Qual comando o desenvolvedor deve executar antes da reimplantação para resolver esse erro?",
    "options": [
      {
        "id": "B",
        "text": "cdk bootstrap"
      },
      {
        "id": "C",
        "text": "cdk init"
      },
      {
        "id": "D",
        "text": "cdk destruir"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-422",
    "type": "single",
    "stem": "Um desenvolvedor está automatizando a implantação de um novo aplicativo com o AWS Serverless Application Model (AWS SAM). O novo aplicativo possui uma função do AWS Lambda e um bucket do Amazon S3.",
    "ask": "A função do Lambda precisa acessar o bucket do S3 para ler apenas objetos.Como o desenvolvedor deve configurar o AWS SAM para conceder o privilégio de leitura necessário ao bucket do S3?",
    "options": [
      {
        "id": "A",
        "text": "Faça referência a uma segunda função de autorizador do Lambda."
      },
      {
        "id": "B",
        "text": "Adicione uma política de bucket S3 personalizada à função Lambda."
      },
      {
        "id": "C",
        "text": "Crie um tópico do Amazon Simple Queue Service (SQS) apenas para leituras de objetos do S3. Faça referência ao tópico no modelo."
      },
      {
        "id": "D",
        "text": "Adicione o modelo S3ReadPolicy à função de execução da função Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-423",
    "type": "multi",
    "pick": 2,
    "stem": "Uma equipe de desenvolvimento deseja compilar e implantar um aplicativo imediatamente sempre que houver uma alteração no código-fonte.Quais abordagens poderiam ser usadas para acionar a implantação?",
    "options": [
      {
        "id": "A",
        "text": "Armazene o código-fonte em um bucket do Amazon S3. Configure o AWS CodePipeline para iniciar sempre que um arquivo no bucket for alterado."
      },
      {
        "id": "B",
        "text": "Armazene o código-fonte em um volume criptografado do Amazon EBS. Configure o AWS CodePipeline para iniciar sempre que um arquivo no volume for alterado."
      },
      {
        "id": "C",
        "text": "Armazene o código-fonte em um repositório do AWS CodeCommit. Configure o AWS CodePipeline para iniciar sempre que uma alteração for confirmada no repositório."
      },
      {
        "id": "D",
        "text": "Armazene o código-fonte em um bucket do Amazon S3. Configure o AWS CodePipeline para iniciar a cada 15 minutos."
      },
      {
        "id": "E",
        "text": "Armazene o código-fonte no armazenamento temporário de uma instância do Amazon EC2. Configure a instância para iniciar o AWS CodePipeline sempre que houver alterações no código-fonte."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-424",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que integra um Amazon API Gateway com uma função do AWS Lambda. Ao chamar a API, o desenvolvedor recebe o seguinte erro:Qua, 8 de nov.",
    "ask": "de 2017, 01:13:00 UTC: Método concluído com status: 502.O que o desenvolvedor deve fazer para resolver o erro?",
    "options": [
      {
        "id": "A",
        "text": "Altere o ponto de extremidade HTTP da API para um ponto de extremidade HTTPS."
      },
      {
        "id": "B",
        "text": "Altere o formato do payload enviado ao API Gateway."
      },
      {
        "id": "C",
        "text": "Altere o formato da resposta da função Lambda para a chamada da API."
      },
      {
        "id": "D",
        "text": "Altere o cabeçalho de autorização na chamada da API para acessar a função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-425",
    "type": "single",
    "stem": "Um desenvolvedor está criando vários microsserviços para uma aplicação que será executada em instâncias do Amazon EC2.",
    "ask": "O desenvolvedor precisa monitorar a visão de ponta a ponta das solicitações entre os microsserviços e depurar quaisquer problemas nos diversos microsserviços.O que o desenvolvedor deve fazer para realizar essas tarefas?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon CloudWatch para agregar os logs e métricas dos microsserviços e criar o painel de monitoramento."
      },
      {
        "id": "B",
        "text": "Use o AWS CloudTrail para agregar os logs e métricas dos microsserviços e criar o painel de monitoramento."
      },
      {
        "id": "C",
        "text": "Use o AWS X-Ray SDK para adicionar instrumentação em todos os microsserviços e monitorar usando o mapa de serviço do X-Ray."
      },
      {
        "id": "D",
        "text": "Use o AWS Health para monitorar a integridade de todos os microsserviços."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-426",
    "type": "single",
    "stem": "Um desenvolvedor está criando um microsserviço que usa o AWS Lambda para processar mensagens de uma fila padrão do Amazon Simple Queue Service (Amazon SQS). A função Lambda chama APIs externas para enriquecer os dados das mensagens do SQS antes de carregá-los em um data warehouse do Amazon Redshift. A fila do SQS deve processar no máximo 1.000 mensagens por segundo.Durante os testes iniciais, a função Lambda inseriu repetidamente dados duplicados na tabela do Amazon Redshift. Os dados duplicados causaram um problema na análise de dados.",
    "ask": "Todas as mensagens duplicadas foram enviadas para a fila com um intervalo de 1 minuto entre si.Como o desenvolvedor deve resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma fila FIFO do SQS. Habilite a desduplicação de mensagens na fila FIFO do SQS."
      },
      {
        "id": "B",
        "text": "Reduza a simultaneidade máxima do Lambda que a fila SQS pode invocar."
      },
      {
        "id": "C",
        "text": "Use o armazenamento temporário do Lambda para rastrear os identificadores de mensagens processadas"
      },
      {
        "id": "D",
        "text": "Configure um ID de grupo de mensagens para cada mensagem enviada. Habilite a desduplicação de mensagens na fila padrão do SQS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-427",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que utiliza uma API do Amazon API Gateway para invocar uma função do AWS Lambda.",
    "ask": "O aplicativo é sensível à latência.Um desenvolvedor precisa configurar a função do Lambda para reduzir o tempo de inicialização a frio associado ao dimensionamento padrão.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique uma nova versão da função Lambda. Configure a simultaneidade provisionada. Defina o limite de simultaneidade provisionada para atender aos requisitos da empresa."
      },
      {
        "id": "B",
        "text": "Aumente a memória da função Lambda para a quantidade máxima. Aumente o limite de simultaneidade reservado da função Lambda."
      },
      {
        "id": "C",
        "text": "Aumente a simultaneidade reservada da função Lambda para um número que corresponda à carga de produção atual."
      },
      {
        "id": "D",
        "text": "Use Cotas de Serviço para solicitar um aumento no limite de simultaneidade da função Lambda para a conta da AWS onde a função está implantada."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-428",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está implantando um aplicativo em instâncias do Amazon EC2 executadas na Conta A.",
    "ask": "O aplicativo precisa ler dados de um fluxo de dados existente do Amazon Kinesis na Conta B.Quais ações o desenvolvedor deve tomar para fornecer ao aplicativo acesso ao fluxo?",
    "options": [
      {
        "id": "A",
        "text": "Atualize a função de perfil da instância na Conta A com permissões de leitura de fluxo."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM com permissões de leitura de fluxo na Conta B."
      },
      {
        "id": "C",
        "text": "Adicione uma política de confiança à função de perfil de instância e à função do IAM na Conta B para permitir que a função de perfil de instância assuma a função do IAM."
      },
      {
        "id": "D",
        "text": "Adicione uma política de confiança à função de perfil de instância e à função do IAM na Conta B para permitir leituras do fluxo."
      },
      {
        "id": "E",
        "text": "Adicione uma política baseada em recursos na Conta B para permitir acesso de leitura da função de perfil da instância."
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "DVA-C02-429",
    "type": "single",
    "stem": "Uma startup de e-commerce está se preparando para um evento anual de vendas.",
    "ask": "À medida que o tráfego para o aplicativo da empresa aumenta, a equipe de desenvolvimento quer ser notificada quando a utilização da CPU da instância do Amazon EC2 ultrapassar 80%.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie um alarme personalizado do Amazon CloudWatch que envie uma notificação para um tópico do Amazon SNS quando a utilização da CPU exceder 80%."
      },
      {
        "id": "B",
        "text": "Crie um alarme personalizado do AWS CloudTrail que envie uma notificação para um tópico do Amazon SNS quando a utilização da CPU exceder 80%."
      },
      {
        "id": "C",
        "text": "Crie uma tarefa cron na instância do EC2 que invoque o comando --describe-instance-information na instância do host a cada 15 minutos e envie os resultados para um tópico do Amazon SNS."
      },
      {
        "id": "D",
        "text": "Crie uma função do AWS Lambda que consulte os logs do AWS CloudTrail para a métrica CPUUtilization a cada 15 minutos e envie uma notificação para um tópico do Amazon SNS quando a utilização da CPU exceder 80%."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-430",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo implantado no AWS Elastic Beanstalk. O aplicativo gera PDFs específicos para o usuário e os armazena em um bucket do Amazon S3. O aplicativo então utiliza o Amazon Simple Email Service (Amazon SES) para enviar os PDFs por e-mail aos assinantes.Os usuários não acessam mais os PDFs 90 dias após a geração.",
    "ask": "O bucket do S3 não é versionado e contém muitos PDFs obsoletos.Um desenvolvedor deve reduzir o número de arquivos no bucket do S3 removendo PDFs com mais de 90 dias.Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o código do aplicativo. No código, adicione uma regra para verificar todos os objetos no bucket S3 todos os dias e excluir objetos após 90 dias."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda. Programe a função do Lambda para verificar todos os objetos no bucket do S3 todos os dias e excluí-los após 90 dias."
      },
      {
        "id": "C",
        "text": "Crie uma regra de ciclo de vida do S3 para que o bucket do S3 expire objetos após 90 dias."
      },
      {
        "id": "D",
        "text": "Particione os objetos S3 com um//prefixo de chave. Crie uma função do AWS Lambda para remover objetos cujos prefixos atingiram a data de expiração."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-431",
    "type": "single",
    "stem": "Um desenvolvedor está solucionando problemas em um aplicativo. O aplicativo inclui várias funções do AWS Lambda que invocam uma API do Amazon API Gateway. A solicitação de método do API Gateway está configurada para usar um autorizador do Amazon Cognito para autenticação.Todas as funções do Lambda passam o ID do usuário como parte do cabeçalho Authorization para a API do API Gateway.",
    "ask": "A API do API Gateway retorna um código de status 403 para todas as solicitações GET.Como o desenvolvedor deve resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Modifique a solicitação GET do cliente para incluir uma chave de API válida no cabeçalho de autorização."
      },
      {
        "id": "B",
        "text": "Modifique a solicitação GET do cliente para incluir um token válido no cabeçalho de autorização."
      },
      {
        "id": "C",
        "text": "Atualize a política de recursos da API do API Gateway para permitir a ação execute-api:Invoke."
      },
      {
        "id": "D",
        "text": "Modifique o cliente para enviar uma solicitação de pré-voo OPTIONS antes da solicitação GET."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-432",
    "type": "single",
    "stem": "Uma empresa processa documentos recebidos de um bucket do Amazon S3. Os usuários carregam documentos para um bucket do S3 usando uma interface de usuário web.",
    "ask": "Ao receber arquivos no S3, uma função do AWS Lambda é invocada para processá-los, mas a função do Lambda atinge o tempo limite intermitentemente.Se a função do Lambda estiver configurada com as configurações padrão, o que acontecerá com o evento do S3 quando houver uma exceção de tempo limite?",
    "options": [
      {
        "id": "A",
        "text": "A notificação de um evento S3 com falha é enviada como um e-mail pelo Amazon SNS."
      },
      {
        "id": "B",
        "text": "O evento S3 é enviado para a Dead Letter Queue padrão."
      },
      {
        "id": "C",
        "text": "O evento S3 é processado até ser bem-sucedido."
      },
      {
        "id": "D",
        "text": "O evento S3 é descartado após ser tentado novamente duas vezes."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-433",
    "type": "single",
    "stem": "Um desenvolvedor usa as Notificações de Eventos do Amazon S3 para invocar funções do AWS Lambda. As funções do Lambda processam imagens após o upload delas para os buckets do S3. O desenvolvedor configurou um bucket do S3 de desenvolvimento, um bucket do S3 de produção, uma função do Lambda de desenvolvimento e uma função do Lambda de produção na mesma conta da AWS.O desenvolvedor percebe que os uploads para o bucket do S3 de desenvolvimento invocam incorretamente a função do Lambda de produção.",
    "ask": "O desenvolvedor deve impedir que os dados de desenvolvimento afetem a função do Lambda de produção.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Atualize a função de execução para a função Lambda de produção. Adicione uma política que permita que a função de execução leia apenas o bucket S3 de produção."
      },
      {
        "id": "B",
        "text": "Atualize a política do bucket S3 para o bucket S3 de produção para invocar a função Lambda de produção. Atualize a política do bucket S3 para o bucket S3 de desenvolvimento para invocar a função Lambda de desenvolvimento."
      },
      {
        "id": "C",
        "text": "Separe o ambiente de desenvolvimento e o ambiente de produção em suas próprias contas AWS. Atualize a função de execução para cada função do Lambda. Adicione uma política que permita que a função de execução leia apenas o bucket S3 que está na mesma conta."
      },
      {
        "id": "D",
        "text": "Separe o ambiente de desenvolvimento e o ambiente de produção em suas próprias contas AWS. Adicione uma política de recursos às funções do Lambda para permitir que apenas eventos de bucket do S3 na mesma conta invoquem as funções."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-434",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está escrevendo uma aplicação que será executada em instâncias do Amazon EC2 em um grupo de Auto Scaling.",
    "ask": "O desenvolvedor deseja externalizar o estado da sessão para oferecer suporte à aplicação.Quais serviços ou recursos da AWS o desenvolvedor pode usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Cognito"
      },
      {
        "id": "C",
        "text": "Amazon ElastiCache"
      },
      {
        "id": "D",
        "text": "Balanceador de carga de aplicação"
      },
      {
        "id": "E",
        "text": "Serviço de fila simples da Amazon (Amazon SQS)"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-435",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa possui uma aplicação serverless que utiliza uma API do Amazon API Gateway para invocar uma função do AWS Lambda. Um desenvolvedor cria uma correção para um defeito no código da função Lambda.",
    "ask": "O desenvolvedor deseja implantar essa correção no ambiente de produção.Para testar as alterações, o desenvolvedor precisa enviar 10% do tráfego de produção ativo para a versão atualizada da função Lambda.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique uma nova versão da função Lambda que contenha o código atualizado."
      },
      {
        "id": "B",
        "text": "Configurar um novo estágio no API Gateway com uma nova versão da função Lambda. Habilite o roteamento ponderado nos estágios do API Gateway."
      },
      {
        "id": "C",
        "text": "Crie um alias para a função Lambda. Configure o roteamento ponderado no alias. Especifique um peso de 10% para a nova versão da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure uma política de roteamento em um balanceador de carga de rede. Configure 10% do tráfego para ir para a nova versão da função Lambda."
      },
      {
        "id": "E",
        "text": "Configure uma política de roteamento ponderada usando o Amazon Route 53. Configure 10% do tráfego para ir para a nova versão da função Lambda."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-436",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo de busca de vídeos para uma empresa global. Os arquivos de vídeo têm um tamanho médio de 2,5 TB. O sistema de armazenamento de vídeo deve fornecer acesso instantâneo aos arquivos de vídeo durante os primeiros 90 dias.",
    "ask": "Após os primeiros 90 dias, os arquivos de vídeo podem levar mais de 10 minutos para carregar.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Carregue os arquivos de vídeo para a classe de armazenamento Standard do Amazon Elastic File System (Amazon EFS) durante os primeiros 90 dias. Após 90 dias, transfira os arquivos de vídeo para a classe de armazenamento Standard-Infrequent Access (Standard-IA) do EFS."
      },
      {
        "id": "B",
        "text": "Carregue os arquivos de vídeo no Amazon S3. Use a classe de armazenamento Glacier Deep Archive do S3 pelos primeiros 90 dias. Após 90 dias, transfira o arquivo de vídeo para a classe de armazenamento S3 Glacier Flexible Retrieval."
      },
      {
        "id": "C",
        "text": "Use o Amazon Elastic Block Store (Amazon EBS) para armazenar os arquivos de vídeo pelos primeiros 90 dias. Após 90 dias, transfira os arquivos de vídeo para a classe de armazenamento Glacier Deep Archive do Amazon S3."
      },
      {
        "id": "D",
        "text": "Carregue os arquivos de vídeo no Amazon S3. Use a classe de armazenamento S3 Glacier Instant Retrieval pelos primeiros 90 dias. Após 90 dias, transfira os arquivos de vídeo para a classe de armazenamento S3 Glacier Flexible Retrieval."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-437",
    "type": "single",
    "stem": "Uma empresa possui uma plataforma de e-commerce. Um desenvolvedor está projetando uma tabela do Amazon DynamoDB para armazenar dados de pedidos de clientes para a plataforma. A tabela usa o ID do pedido como chave de partição.O desenvolvedor precisa modificar a tabela para obter todos os IDs de pedidos associados a um determinado endereço de e-mail de cliente em uma única consulta.",
    "ask": "A solução deve permitir que o desenvolvedor consulte os IDs de pedidos por outros atributos de item no futuro.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a chave de partição para usar o endereço de e-mail do cliente como a chave de classificação."
      },
      {
        "id": "B",
        "text": "Atualize a tabela para usar o endereço de e-mail do cliente como a chave de partição."
      },
      {
        "id": "C",
        "text": "Crie um índice secundário local (LSI) com o endereço de e-mail do cliente como chave de classificação."
      },
      {
        "id": "D",
        "text": "Crie um índice secundário global (GSI) com o endereço de e-mail do cliente como chave de partição."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-438",
    "type": "single",
    "stem": "Uma empresa possui um jogo de realidade virtual (RV). O jogo possui um backend sem servidor composto por Amazon API Gateway, AWS Lambda e Amazon DynamoDB. Recentemente, a empresa notou um aumento repentino de novos usuários em todo o mundo.",
    "ask": "A empresa também notou atrasos na recuperação de dados dos usuários.Qual serviço ou recurso da AWS a empresa pode usar para reduzir o tempo de resposta do banco de dados para microssegundos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon ElastiCache"
      },
      {
        "id": "B",
        "text": "Acelerador DynamoDB (DAX)"
      },
      {
        "id": "C",
        "text": "Dimensionamento automático do DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-439",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando uma solução para rastrear os buckets do Amazon S3 de uma conta ao longo do tempo. O desenvolvedor criou uma função do AWS Lambda que será executada conforme um cronograma. A função listará os buckets do S3 da conta e armazenará a lista em uma tabela do Amazon DynamoDB.",
    "ask": "O desenvolvedor recebe um erro de permissão ao executar a função com a política gerenciada da AWS \"AWSLambdaBasicExecutionRole\".Qual combinação de permissões o desenvolvedor deve usar para resolver esse erro?",
    "options": [
      {
        "id": "A",
        "text": "Função IAM entre contas"
      },
      {
        "id": "B",
        "text": "Permissão para a função Lambda listar buckets no Amazon S3"
      },
      {
        "id": "C",
        "text": "Permissão para a função Lambda escrever no DynamoDB"
      },
      {
        "id": "D",
        "text": "Permissão para o Amazon S3 invocar a função Lambda"
      },
      {
        "id": "E",
        "text": "Permissão para o DynamoDB invocar a função Lambda"
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "DVA-C02-440",
    "type": "single",
    "stem": "Uma empresa utiliza a AWS para executar seu aplicativo de sistema de gestão de aprendizagem (LMS). O aplicativo é executado em instâncias do Amazon EC2 por meio de um Balanceador de Carga de Aplicativos (ALB). O nome de domínio do aplicativo é gerenciado no Amazon Route 53.",
    "ask": "O aplicativo é implantado em uma única região da AWS, mas a empresa deseja melhorar o desempenho do aplicativo para usuários em todo o mundo.Qual solução melhorará o desempenho global com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma distribuição do Amazon CloudFront que use o ALB como servidor de origem. Configure o Route 53 para criar um registro de alias DNS que aponte o nome de domínio do aplicativo para a URL de distribuição do CloudFront."
      },
      {
        "id": "B",
        "text": "Inicie mais instâncias do EC2 atrás do AL. Configure o ALB para usar afinidade de sessão (sessões persistentes). Crie um registro de alias do Route 53 para o ALB usando uma política de roteamento de geolocalização."
      },
      {
        "id": "C",
        "text": "Crie um endpoint de VPN do cliente AWS no VP. Instrua os usuários a se conectarem à VPN para acessar o aplicativo. Crie um registro de alias do Route 53 para o endpoint da VPN. Configure o Route 53 para usar uma política de roteamento por geolocalização."
      },
      {
        "id": "D",
        "text": "Implante o aplicativo em várias regiões do mundo. Crie um registro de alias do Route 53 para o ALB usando uma política de roteamento baseada em latência."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-441",
    "type": "single",
    "stem": "Um desenvolvedor hospeda um site estático no Amazon S3 e conecta o site a uma distribuição do Amazon CloudFront. O site usa um nome de domínio personalizado que aponta para a URL do CloudFront.O desenvolvedor configurou um pipeline de integração e entrega contínuas (CI/CD). O pipeline é executado automaticamente quando ocorrem alterações em um repositório do AWS CodeCommit. O pipeline tem um estágio de origem e, em seguida, um estágio de compilação. O estágio de compilação invoca um projeto do AWS CodeBuild que faz referência a um arquivo buildspec.yml. O arquivo buildspec.yml compila o código e implanta os arquivos estáticos no bucket do S3.O pipeline é executado com sucesso e os arquivos mais recentes do site ficam visíveis no bucket do S3 e na URL do site do S3.",
    "ask": "No entanto, quando o desenvolvedor acessa o site por meio do domínio do CloudFront, as atualizações não são refletidas no site.O que o desenvolvedor deve configurar no arquivo buildspec.yml para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Sincronize corretamente os objetos no bucket S3 com novos arquivos do estágio de origem."
      },
      {
        "id": "B",
        "text": "Exclua os arquivos do site anterior no bucket S3 e reimplante os arquivos do site."
      },
      {
        "id": "C",
        "text": "Invalidar os caches de arquivo para a distribuição primária do CloudFront."
      },
      {
        "id": "D",
        "text": "Modifique a política de compartilhamento de recursos entre origens (CORS) do bucket S3 e reimplante os arquivos do site."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-442",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um aplicativo de e-commerce que armazena dados em um cluster do Amazon RDS para MySQL.",
    "ask": "O desenvolvedor precisa implementar uma camada de cache para que o aplicativo recupere informações sobre os produtos mais visualizados.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Edite o cluster do RDS para MySQL adicionando um nó de cache. Configure o ponto de extremidade de cache em vez do ponto de extremidade do cluster no aplicativo."
      },
      {
        "id": "B",
        "text": "Crie um cluster do Amazon ElastiCache para Redis. Atualize o código do aplicativo para usar o endpoint do cluster do ElastiCache para Redis."
      },
      {
        "id": "C",
        "text": "Crie um cluster do Amazon DynamoDB Accelerator (DAX) na frente do cluster do RDS para MySQL. Configure o aplicativo para se conectar ao endpoint do DAX em vez do endpoint do RDS."
      },
      {
        "id": "D",
        "text": "Configure o cluster do RDS para MySQL para adicionar uma instância standby em uma Zona de Disponibilidade diferente. Configure o aplicativo para ler os dados da instância standby."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-443",
    "type": "single",
    "stem": "Um aplicativo de jogo armazena as pontuações dos jogadores em uma tabela do Amazon DynamoDB que possui quatro atributos: user_id, user_name, user_score e user_rank. Os usuários têm permissão para atualizar apenas seus nomes.",
    "ask": "Um usuário é autenticado pela federação de identidades da web.Qual conjunto de condições deve ser adicionado à política anexada à função para a chamada da API dynamodb:PutItem?",
    "options": [
      {
        "id": "A",
        "code": "\"Condition\": {\n  \"ForAllValues:StringEquals\": {\n    \"dynamodb:LeadingKeys\": [\"${www.amazon.com:user_id}\"],\n    \"dynamodb:Attributes\": [\"user_name\"]\n  }\n}"
      },
      {
        "id": "B",
        "code": "\"Condition\": {\n  \"ForAllValues:StringEquals\": {\n    \"dynamodb:LeadingKeys\": [\"${www.amazon.com:user_name}\"],\n    \"dynamodb:Attributes\": [\"user_id\"]\n  }\n}"
      },
      {
        "id": "C",
        "code": "\"Condition\": {\n  \"ForAllValues:StringEquals\": {\n    \"dynamodb:LeadingKeys\": [\"${www.amazon.com:user_id}\"],\n    \"dynamodb:Attributes\": [\"user_name\", \"user_id\"]\n  }\n}"
      },
      {
        "id": "D",
        "code": "\"Condition\": {\n  \"ForAllValues:StringEquals\": {\n    \"dynamodb:LeadingKeys\": [\"${www.amazon.com:user_name}\"],\n    \"dynamodb:Attributes\": [\"user_name\", \"user_id\"]\n  }\n}"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-444",
    "type": "single",
    "stem": "Um desenvolvedor está criando um banco de dados de produtos. Consultas para produtos acessados com frequência devem ter tempos de recuperação de microssegundos.",
    "ask": "Para garantir a consistência dos dados, o cache do aplicativo deve ser atualizado sempre que produtos forem adicionados, alterados ou excluídos.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure um banco de dados Amazon DynamoDB e um cluster DynamoDB Accelerator (DAX)."
      },
      {
        "id": "B",
        "text": "Configurar um banco de dados Amazon RDS e um cluster Amazon ElastiCache para Redis. Implementar uma estratégia de cache de carregamento lento com o ElastiCache."
      },
      {
        "id": "C",
        "text": "Configurar um banco de dados Amazon DynamoDB com cache na memória. Implementar uma estratégia de cache de carregamento lento na aplicação."
      },
      {
        "id": "D",
        "text": "Configure um banco de dados Amazon RDS e um cluster do Amazon DynamoDB Accelerator (DAX). Especifique uma configuração de TTL para o cluster DAX."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-445",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando um script para automatizar o processo de implantação de uma aplicação sem servidor.",
    "ask": "O desenvolvedor deseja usar um modelo existente do AWS Serverless Application Model (AWS SAM) para a aplicação.O que o desenvolvedor deve usar para o projeto?",
    "options": [
      {
        "id": "A",
        "text": "Chame aws cloudformation package para criar o pacote de implantação. Chame aws cloudformation deploy para implantar o pacote posteriormente."
      },
      {
        "id": "B",
        "text": "Chame sam package para criar o pacote de implantação. Chame sam deploy para implantar o pacote posteriormente."
      },
      {
        "id": "C",
        "text": "Chame aws s3 cp para carregar o modelo do AWS SAM no Amazon S3. Chame aws lambda update-function-code para criar o aplicativo."
      },
      {
        "id": "D",
        "text": "Crie um pacote ZIP localmente e chame aws serverlessrepo create-application para criar o aplicativo."
      },
      {
        "id": "E",
        "text": "Crie um pacote ZIP e carregue-o no Amazon S3. Chame aws cloudformation create-stack para criar o aplicativo."
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "DVA-C02-446",
    "type": "single",
    "stem": "Um desenvolvedor adiciona novas dependências a uma função existente do AWS Lambda. O desenvolvedor não consegue implantar a função Lambda porque o pacote de implantação descompactado excede a cota máxima de tamanho para a função Lambda.",
    "ask": "A arquitetura do conjunto de instruções da função Lambda é x86_64.O desenvolvedor deve implementar uma solução para implantar a função Lambda com as novas dependências.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um snapshot de todas as dependências. Configure a função Lambda para usar o snapshot."
      },
      {
        "id": "B",
        "text": "Altere a arquitetura do conjunto de instruções da função Lambda para usar uma arquitetura arm64."
      },
      {
        "id": "C",
        "text": "Associe um volume do Amazon Elastic Block Store (Amazon EBS) à função Lambda. Armazene todas as dependências no volume EBS."
      },
      {
        "id": "D",
        "text": "Crie e implante uma imagem de contêiner Lambda com todas as dependências."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-447",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um projeto que exige atualizações regulares no código de back-end de uma aplicação web. O código é armazenado no AWS CodeCommit. A política da empresa determina que todo o código deve passar por testes unitários completos e que os resultados dos testes devem estar disponíveis para acesso.O desenvolvedor precisa implementar uma solução que leve cada alteração ao repositório de código, compile o código e execute os testes unitários.",
    "ask": "A solução também deve fornecer um relatório detalhado dos resultados dos testes.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o AWS CodeDeploy para implantar código do CodeCommit e executar testes unitários. Envie os resultados dos testes para o Amazon CloudWatch Metrics para visualizar relatórios."
      },
      {
        "id": "B",
        "text": "Configure o Amazon CodeWhisperer para criar o código e executar testes unitários. Salve os resultados dos testes em um bucket do Amazon S3 para gerar relatórios."
      },
      {
        "id": "C",
        "text": "Configure o AWS CodeBuild para compilar o código e executar testes unitários. Use os relatórios de teste no CodeBuild para gerar e visualizar relatórios."
      },
      {
        "id": "D",
        "text": "Crie funções do AWS Lambda que sejam executadas quando alterações forem feitas no CodeCommit. Programe as funções do Lambda para compilar o código, executar testes unitários e salvar os resultados dos testes em uma camada do Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-448",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação na AWS. A aplicação possui uma API do Amazon API Gateway que envia solicitações para uma função do AWS Lambda.",
    "ask": "A API está apresentando latência aumentada porque a função do Lambda tem CPU disponível limitada para atender às solicitações.Antes de implantar a API em produção, o desenvolvedor precisa configurar a função do Lambda para ter mais CPU.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a cota de núcleos de CPU virtual (vCPU) da função Lambda."
      },
      {
        "id": "B",
        "text": "Aumente a quantidade de memória alocada para a função Lambda."
      },
      {
        "id": "C",
        "text": "Aumente o tamanho do armazenamento efêmero da função Lambda."
      },
      {
        "id": "D",
        "text": "Aumente o valor de tempo limite da função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-449",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação web para carregar e armazenar dados privados. A aplicação criptografará os dados privados e, em seguida, os carregará para um bucket do Amazon S3.O desenvolvedor precisa implementar uma solução para encontrar automaticamente quaisquer dados privados não criptografados no bucket do S3.",
    "ask": "A solução deve monitorar a segurança e o controle de acesso do bucket do S3 e fornecer uma notificação caso haja algum problema de segurança.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Step Functions para executar consultas no Amazon Athena. Configure o Athena para encontrar dados privados não criptografados e monitorar problemas de segurança no bucket do S3. Inicie as consultas quando novos objetos forem adicionados ao bucket do S3. Configure o Athena para emitir uma notificação caso sejam detectados problemas de segurança."
      },
      {
        "id": "B",
        "text": "Habilite o Amazon Macie para o bucket do S3. Configure critérios personalizados para encontrar dados privados não criptografados no bucket do S3. Configure as Notificações de Usuário da AWS para emitir uma notificação quando o Macie detectar problemas de segurança."
      },
      {
        "id": "C",
        "text": "Habilite o Amazon Inspector para a conta da AWS. Use o Amazon Inspector para verificar o bucket do S3 e encontrar dados privados não criptografados e monitorar problemas de segurança. Configure o Amazon EventBridge para emitir uma notificação quando o Amazon Inspector detectar problemas de segurança."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de dados do Amazon Kinesis. Configure o Amazon S3 para enviar notificações de novos objetos ao fluxo. Crie uma função do AWS Lambda que seja executada a cada 10 minutos para verificar se há dados privados não criptografados no fluxo e monitorar problemas de segurança. Programe a função do Lambda para emitir uma notificação quando problemas de segurança forem detectados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-450",
    "type": "single",
    "stem": "Um desenvolvedor possui um aplicativo que utiliza funções do AWS Lambda e modelos do AWS CloudFormation. O uso do aplicativo aumentou. Como resultado, as funções do Lambda estão encontrando erros de limite de taxa ao recuperar dados.As funções do Lambda recuperam um parâmetro avançado do AWS Systems Manager Parameter Store em cada chamada. O parâmetro muda apenas durante novas implantações.",
    "ask": "Como o uso do aplicativo é imprevisível, o desenvolvedor precisa de uma maneira de evitar a limitação de taxa.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Configure as funções do Lambda para usar a simultaneidade reservada que é igual ao número médio de invocações simultâneas do último mês."
      },
      {
        "id": "B",
        "text": "Adicione um mecanismo de nova tentativa com backoff exponencial à chamada para o Parameter Store."
      },
      {
        "id": "C",
        "text": "Solicite um aumento de cota de serviço para operações da API GetParameter do Parameter Store para corresponder ao uso esperado das funções do Lambda."
      },
      {
        "id": "D",
        "text": "Adicione uma referência dinâmica SSM como uma variável de ambiente ao recurso de funções do Lambda nos modelos do CloudFormation."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-451",
    "type": "single",
    "stem": "Um desenvolvedor está usando uma função do AWS Lambda para processar dados. Ele precisa extrair métricas personalizadas sobre os tempos de processamento dos logs do Lambda.",
    "ask": "Ele precisa analisar as métricas, definir alarmes e detectar problemas em tempo real.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique dados de métricas personalizadas no AWS CloudTrail usando a operação da API PutMetricData. Classifique e colete as métricas. Crie gráficos e alarmes no CloudTrail para as métricas personalizadas."
      },
      {
        "id": "B",
        "text": "Use as bibliotecas de cliente de código aberto fornecidas pela Amazon para gerar os logs no formato de métricas incorporadas do Amazon CloudWatch. Use o CloudWatch para criar os gráficos e alarmes necessários para as métricas personalizadas."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudWatch Logs Insights para criar métricas personalizadas consultando os logs provenientes da função Lambda. Use o CloudWatch para criar os gráficos e alarmes necessários para as métricas personalizadas."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de dados do Amazon Kinesis para transmitir eventos de log em tempo real do Lambda. Especifique um bucket do Amazon S3 como destino para o fluxo de dados do Kinesis. Use o Amazon CloudWatch para visualizar os dados de log e definir alarmes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-452",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor precisa corrigir uma implantação do AWS CodeDeploy que falhou. Durante a implantação com falha, o desenvolvedor recebeu a seguinte mensagem de erro:\"A implantação geral falhou porque muitas instâncias individuais falharam na implantação, poucas instâncias íntegras estão disponíveis para implantação ou algumas instâncias no seu grupo de implantação estão com problemas.",
    "ask": "(Código do erro: HEALTH-CONSTRAINTS)\".Quais são as possíveis causas da falha na implantação?",
    "options": [
      {
        "id": "A",
        "text": "O agente do CodeDeploy não estava em execução nas instâncias nas quais o CodeDeploy estava tentando implantar."
      },
      {
        "id": "B",
        "text": "O agente unificado do Amazon CloudWatch não estava em execução nas instâncias nas quais o CodeDeploy estava tentando implantar."
      },
      {
        "id": "C",
        "text": "A função IAM do desenvolvedor não tinha as permissões necessárias para executar a implantação de código nas instâncias."
      },
      {
        "id": "D",
        "text": "O CodeDeploy estava tentando implantar em instâncias que estavam anexadas a um perfil de instância do IAM que não tinha as permissões necessárias."
      },
      {
        "id": "E",
        "text": "O CodeDeploy estava tentando implantar em instâncias que não foram configuradas com verificações de integridade corretas do CodeDeploy."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "DVA-C02-453",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação sem servidor que requer o armazenamento de chaves de API sensíveis como variáveis de ambiente para diversos serviços.",
    "ask": "A aplicação requer a rotação automática das chaves de criptografia anualmente.Qual solução atenderá a esses requisitos sem nenhum esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Criptografe as variáveis de ambiente usando o AWS Secrets Manager. Configure a rotação automática no Secrets Manager."
      },
      {
        "id": "B",
        "text": "Criptografe as variáveis de ambiente usando chaves gerenciadas pelo cliente do AWS Key Management Service (AWS KMS). Habilite a rotação automática de chaves."
      },
      {
        "id": "C",
        "text": "Criptografe as variáveis de ambiente usando as chaves gerenciadas pela AWS do AWS Key Management Service (AWS KMS). Configure uma função personalizada do AWS Lambda para automatizar a rotação de chaves."
      },
      {
        "id": "D",
        "text": "Criptografe as variáveis de ambiente usando o AWS Systems Manager Parameter Store. Configure a rotação automática no Parameter Store."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-454",
    "type": "single",
    "stem": "Um desenvolvedor criou uma aplicação que utiliza funções do AWS Lambda para processar imagens.",
    "ask": "O desenvolvedor deseja melhorar o tempo de processamento de imagens ao longo do dia.Ele precisa criar uma consulta do Amazon CloudWatch Logs Insights que mostre o tempo de processamento médio, o mais lento e o mais rápido em intervalos de 1 minuto.Qual consulta atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "code": "filter @type = \"REPORT\" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(1m)"
      },
      {
        "id": "B",
        "code": "filter @type = \"DISPLAY\" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(5m)"
      },
      {
        "id": "C",
        "code": "filter @type = \"STATS\" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(5m)"
      },
      {
        "id": "D",
        "code": "filter @type = \"PATTERN\" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(1m)"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-455",
    "type": "single",
    "stem": "Um aplicativo armazena dados de usuários em buckets do Amazon S3 em várias regiões da AWS. Um desenvolvedor precisa implementar uma solução que analise os dados de usuários nos buckets do S3 para encontrar informações confidenciais.",
    "ask": "Os resultados da análise de todos os buckets do S3 devem estar disponíveis na região eu-west-2.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda para gerar descobertas. Programe a função do Lambda para enviar as descobertas para outro bucket do S3 em eu-west-2."
      },
      {
        "id": "B",
        "text": "Configure o Amazon Macie para gerar descobertas. Use o Amazon EventBridge para criar regras que copiem as descobertas para eu-west-2."
      },
      {
        "id": "C",
        "text": "Configure o Amazon Inspector para gerar descobertas. Use o Amazon EventBridge para criar regras que copiem as descobertas para eu-west-2."
      },
      {
        "id": "D",
        "text": "Configure o Amazon Macie para gerar descobertas e publicá-las no AWS CloudTrail. Use uma trilha do CloudTrail para copiar os resultados para eu-west-2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-456",
    "type": "single",
    "stem": "Um aplicativo ingere dados de um fluxo de dados do Amazon Kinesis. Os fragmentos no fluxo de dados estão configurados para tráfego normal.Durante os testes de pico de tráfego, o aplicativo ingere dados lentamente.",
    "ask": "Um desenvolvedor precisa ajustar o fluxo de dados para lidar com o pico de tráfego.O que o desenvolvedor deve fazer para atender a esse requisito da forma MAIS econômica possível?",
    "options": [
      {
        "id": "A",
        "text": "Instale a Kinesis Producer Library (KPL) para ingerir dados no fluxo de dados."
      },
      {
        "id": "B",
        "text": "Alterne para o modo de capacidade sob demanda para o fluxo de dados. Especifique uma chave de partição ao gravar dados no fluxo de dados."
      },
      {
        "id": "C",
        "text": "Diminua o tempo que os dados são mantidos no fluxo de dados usando a operação de API DecreaseStreamRetentionPeriod."
      },
      {
        "id": "D",
        "text": "Aumente a contagem de fragmentos no fluxo de dados usando a operação da API UpdateShardCount."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-457",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que utiliza uma função do AWS Lambda para processar dados. A aplicação requer latência mínima. A função do Lambda deve ter horários de início previsíveis.",
    "ask": "Todas as atividades de configuração do ambiente de execução devem ocorrer antes da invocação da função do Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a memória da função Lambda ao máximo. Configure uma regra do Amazon EventBridge para agendar invocações da função Lambda a cada minuto para manter o ambiente de execução ativo."
      },
      {
        "id": "B",
        "text": "Otimize o código de inicialização estática executado quando um novo ambiente de execução é preparado pela primeira vez. Reduza e compacte o tamanho do pacote de funções do Lambda e das bibliotecas e dependências importadas."
      },
      {
        "id": "C",
        "text": "Aumente a simultaneidade reservada da função Lambda para o valor máximo para simultaneidade de conta não reservada. Execute todas as atividades de configuração manualmente antes da invocação inicial da função Lambda."
      },
      {
        "id": "D",
        "text": "Publique uma nova versão da função Lambda. Configure a simultaneidade provisionada para a função Lambda com o número mínimo necessário de ambientes de execução."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-458",
    "type": "single",
    "stem": "Uma empresa implementou um pipeline no AWS CodePipeline. A empresa utiliza uma única conta AWS e não utiliza o AWS Organizations.",
    "ask": "A empresa precisa testar seus modelos do AWS CloudFormation em sua região principal da AWS e em uma região de recuperação de desastres.Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?",
    "options": [
      {
        "id": "A",
        "text": "No pipeline do CodePipeline, implemente uma ação do AWS CodeDeploy para cada região para implantar e testar os modelos do CloudFormation. Atualize o CodePipeline e o AWS CodeBuild com as permissões apropriadas."
      },
      {
        "id": "B",
        "text": "Configure o CodePipeline para implantar e testar os modelos do CloudFormation. Use o CloudFormation StackSets para iniciar a implantação em ambas as regiões."
      },
      {
        "id": "C",
        "text": "Configure o CodePipeline para invocar o AWS CodeBuild para implantar e testar os modelos do CloudFormation em cada região. Atualize o CodeBuild e o CloudFormation com as permissões apropriadas."
      },
      {
        "id": "D",
        "text": "Use a ação Snyk no CodePipeline para implantar e testar os modelos do CloudFormation em cada região."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-459",
    "type": "single",
    "stem": "Uma empresa possui uma API REST do Amazon API Gateway que se integra a uma função do AWS Lambda.",
    "ask": "O estágio de desenvolvimento da API faz referência a um alias de desenvolvimento da função Lambda chamado dev.Um desenvolvedor precisa disponibilizar um alias de produção da função Lambda chamado prod por meio da API.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo método na API. Nomeie o método como \"production\". Configure o método para incluir uma variável de estágio que aponte para o alias da função Lambda \"prod\"."
      },
      {
        "id": "B",
        "text": "Crie um novo método na API. Nomeie o método como \"production\". Configure uma solicitação de integração no estágio de desenvolvimento da API que aponte para o alias da função Lambda \"prod\"."
      },
      {
        "id": "C",
        "text": "Implante a API em um novo estágio denominado produção. Configure o estágio para incluir uma variável de estágio que aponte para o alias da função Lambda prod."
      },
      {
        "id": "D",
        "text": "Implante a API em um novo estágio denominado produção. Configure uma solicitação de integração no estágio de produção da API que aponte para o alias da função Lambda prod."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-460",
    "type": "single",
    "stem": "Um desenvolvedor está implementando uma aplicação sem servidor usando o AWS CloudFormation para provisionar a hospedagem web do Amazon S3, o Amazon API Gateway e as funções do AWS Lambda. O código-fonte da função Lambda é compactado e carregado em um bucket do S3.",
    "ask": "A chave do objeto S3 do código-fonte compactado é especificada no recurso Lambda no modelo do CloudFormation.O desenvolvedor observa que não há alterações na função Lambda sempre que a pilha do CloudFormation é atualizada.Como o desenvolvedor pode resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo alias de função Lambda antes de atualizar a pilha do CloudFormation."
      },
      {
        "id": "B",
        "text": "Altere a chave do objeto S3 ou a versão S3 no modelo do CloudFormation antes de atualizar a pilha do CloudFormation."
      },
      {
        "id": "C",
        "text": "Carregue o código-fonte compactado para outro bucket do S3 antes de atualizar a pilha do CioudFormation."
      },
      {
        "id": "D",
        "text": "Associe uma configuração de assinatura cade à função Lambda antes de atualizar a pilha do CloudFormation."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-461",
    "type": "single",
    "stem": "Um desenvolvedor publicou uma alteração em uma nova versão de uma função do AWS Lambda.",
    "ask": "Para testar a alteração, o desenvolvedor deve rotear 50% do tráfego para a nova versão e 60% para a versão atual.Qual é a maneira operacional MAIS eficiente de atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Crie dois registros do Amazon Route 53 que usem uma política de roteamento simples para rotear o tráfego para as diferentes versões da função Lambda. Crie outro registro do Route 53 que use uma política de roteamento ponderada para rotear 50% do tráfego para cada registro de roteamento simples. Teste a função Lambda usando o registro de roteamento ponderado."
      },
      {
        "id": "B",
        "text": "Crie uma API do Amazon API Gateway com um método POST integrado à função Lambda. Adicione uma variável de estágio que inclua a versão da função Lambda. Adicione uma versão canary que substituirá a variável de versão em 50% dos casos. Implante e teste a função Lambda por meio do estágio do API Gateway."
      },
      {
        "id": "C",
        "text": "Crie um alias para a função Lambda. Defina o peso como 50% para a versão atual e 50% para a nova versão. Defina os mapeamentos de origem do evento para a função Lambda apontarem para o alias."
      },
      {
        "id": "D",
        "text": "Atualize os mapeamentos de origem do evento para a função Lambda. Nos mapeamentos, defina o peso como 50% para a versão atual e 50% para a nova versão."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-462",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que processa um fluxo de dados fornecidos pelo usuário. O fluxo de dados deve ser consumido por vários aplicativos de processamento baseados no Amazon EC2 em paralelo e em tempo real. Cada processador deve ser capaz de retomar a operação sem perda de dados em caso de interrupção do serviço.",
    "ask": "O arquiteto da aplicação planeja adicionar outros processadores em um futuro próximo e deseja minimizar a duplicação de dados envolvida.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Publique os dados no Amazon Simple Queue Service (Amazon SQS)."
      },
      {
        "id": "B",
        "text": "Publique os dados no Amazon Data Firehose."
      },
      {
        "id": "C",
        "text": "Publique os dados no Amazon EventBridge."
      },
      {
        "id": "D",
        "text": "Publique os dados no Amazon Kinesis Data Streams."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-463",
    "type": "single",
    "stem": "Um aplicativo está apresentando problemas de desempenho devido ao aumento da demanda. Esse aumento se deve a registros históricos somente leitura extraídos de um banco de dados hospedado no Amazon RDS com visualizações e consultas personalizadas.",
    "ask": "Um desenvolvedor precisa melhorar o desempenho sem alterar a estrutura do banco de dados.Qual abordagem melhorará o desempenho e MINIMIZARÁ a sobrecarga de gerenciamento?",
    "options": [
      {
        "id": "A",
        "text": "Implante o Amazon DynamoDB, mova todos os dados e aponte para o DynamoDB."
      },
      {
        "id": "B",
        "text": "Implante o Amazon ElastiCache (Redis OSS) e armazene em cache os dados do aplicativo."
      },
      {
        "id": "C",
        "text": "Implante o Memcached no Amazon EC2 e armazene em cache os dados do aplicativo."
      },
      {
        "id": "D",
        "text": "Implante o Amazon DynamoDB Accelerator (DAX) no Amazon RDS para melhorar o desempenho do cache."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-464",
    "type": "single",
    "stem": "Um desenvolvedor está usando o AWS CloudFormation para implantar uma função do AWS Lambda. O desenvolvedor precisa definir o valor de tempo limite da função Lambda com base no parâmetro de ambiente do modelo. O modelo contém mapeamentos de EnvironmentData para o valor de tempo limite de cada ambiente.",
    "ask": "Os mapeamentos de parâmetros de ambiente e EnvironmentData são os seguintes:Parâmetro de ambiente:Mapeamentos de EnvironmentData:Qual instrução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Tempo limite: !GetAtt [EnvironmentData, !Ref Ambiente, Tempo limite]"
      },
      {
        "id": "B",
        "text": "Tempo limite: !FindInMap [EnvironmentData, !Ref Ambiente, Tempo limite]"
      },
      {
        "id": "C",
        "text": "Tempo limite: !Selecione [Dados do ambiente, !Ref Ambiente, Tempo limite]"
      },
      {
        "id": "D",
        "text": "Tempo limite: !ForEach[EnvironmentData, !Ref Environment, Tempo limite]"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-465",
    "type": "single",
    "stem": "As contas da AWS de uma empresa estão em uma organização no AWS Organizations. Um aplicativo na Conta A usa variáveis de ambiente armazenadas como parâmetros no AWS Systems Manager Parameter Store.",
    "ask": "Um desenvolvedor está criando um novo aplicativo na Conta B que precisa usar as mesmas variáveis de ambiente.O aplicativo na Conta B precisa acessar os parâmetros da Conta A sem duplicá-los na Conta B.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure o aplicativo na Conta B para usar credenciais para um usuário do IAM na Conta A que tenha acesso aos parâmetros."
      },
      {
        "id": "B",
        "text": "Crie uma função do IAM assumível na Conta A. Conceda à função a permissão para acessar os parâmetros."
      },
      {
        "id": "C",
        "text": "Configure o compartilhamento de recursos entre contas para os parâmetros usando o AWS Resource Access Manager (AWS RAM)."
      },
      {
        "id": "D",
        "text": "Escreva um script que armazene os valores dos parâmetros em um bucket privado do Amazon S3 que ambas as contas possam acessar."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-466",
    "type": "single",
    "stem": "Em uma transição para o uso de microsserviços, a equipe de gestão de uma empresa solicitou a todas as equipes de desenvolvimento que construíssem seus serviços de forma que as solicitações de API dependessem apenas do armazenamento de dados desse serviço. Uma equipe está construindo um serviço de Pagamentos que possui seu próprio banco de dados; o serviço precisa de dados originados no banco de dados de Contas.",
    "ask": "Ambas utilizam o Amazon DynamoDB.Qual abordagem resultará no método mais simples, desacoplado e confiável para obter atualizações quase em tempo real do banco de dados de Contas?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Glue para executar atualizações frequentes de ETL do banco de dados de contas para o banco de dados de pagamentos."
      },
      {
        "id": "B",
        "text": "Use o Amazon ElastiCache em Pagamentos, com o cache atualizado por gatilhos no banco de dados de Contas."
      },
      {
        "id": "C",
        "text": "Use o Amazon Data Firehose para entregar todas as alterações do banco de dados de contas para o banco de dados de pagamentos."
      },
      {
        "id": "D",
        "text": "Use o Amazon DynamoDB Streams para entregar todas as alterações do banco de dados de contas para o banco de dados de pagamentos."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-467",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor compila uma função do AWS Lambda e empacota o resultado como um arquivo .zip. O desenvolvedor usa a página Funções no console do Lambda para tentar carregar o arquivo .zip empacotado localmente.",
    "ask": "Ao enviar o pacote para o Lambda, o console retorna o seguinte erro:Quais soluções o desenvolvedor pode usar para publicar o código?",
    "options": [
      {
        "id": "A",
        "text": "Carregue o pacote na Amazon 3. Use a página Funções no console do Lambda para carregar o pacote do local do S3."
      },
      {
        "id": "B",
        "text": "Crie um tíquete de suporte da AWS para aumentar o tamanho máximo do pacote."
      },
      {
        "id": "C",
        "text": "Use o comando update-function-code da AWS CLI. Passe o parâmetro --publish."
      },
      {
        "id": "D",
        "text": "Reempacote a função Lambda como uma imagem de contêiner Docker. Carregue a imagem no Amazon Elastic Container Registry (Amazon ECR). Crie uma nova função Lambda usando o console do Lambda. Faça referência à imagem implantada no Amazon ECR."
      },
      {
        "id": "E",
        "text": "Assine o arquivo .zip digitalmente. Crie uma nova função Lambda usando o console do Lambda. Atualize a configuração da nova função Lambda para incluir o Nome de Recurso da Amazon (ARN) da configuração de assinatura de código."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-468",
    "type": "single",
    "stem": "Uma empresa executa uma aplicação em instâncias do Amazon EC2 em um grupo de Auto Scaling. A aplicação sofre cargas variáveis ao longo do dia.A empresa precisa coletar métricas detalhadas das instâncias do EC2 para dimensioná-las corretamente.",
    "ask": "A empresa também deseja monitorar métricas personalizadas da aplicação para garantir que ela esteja funcionando com eficiência.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Instale o agente AWS X-Ray nas instâncias. Configure o agente para coletar as métricas da instância do EC2 e as métricas personalizadas do aplicativo."
      },
      {
        "id": "B",
        "text": "Instale o agente do Amazon CloudWatch nas instâncias. Configure o agente para coletar as métricas da instância do EC2 e as métricas personalizadas do aplicativo."
      },
      {
        "id": "C",
        "text": "Instale o SDK da AWS no diretório do aplicativo. Atualize o aplicativo para usar o SDK da AWS para coletar e publicar as métricas da instância do EC2 e as métricas personalizadas do aplicativo."
      },
      {
        "id": "D",
        "text": "Configure o AWS CloudTrail para capturar e analisar as métricas da instância do EC2 e as métricas do aplicativo personalizado."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-469",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que utiliza uma tabela do Amazon DynamoDB. O desenvolvedor precisa desenvolver um código que leia todos os registros adicionados à tabela no dia anterior, crie relatórios em HTML e envie os relatórios para um armazenamento de terceiros. O tamanho do item varia de 1 KB a 4 KB, e a estrutura do índice é definida com a data.",
    "ask": "O desenvolvedor precisa minimizar a capacidade de leitura que a aplicação exige da tabela do DynamoDB.Qual operação da API do DynamoDB o desenvolvedor deve usar no código para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Consulta"
      },
      {
        "id": "B",
        "text": "Digitalização"
      },
      {
        "id": "C",
        "text": "ObterItem em Lote"
      },
      {
        "id": "D",
        "text": "ObterItem"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-470",
    "type": "single",
    "stem": "Uma empresa está lançando um recurso que utiliza uma API HTTP desenvolvida com o Amazon API Gateway e o AWS Lambda. Um endpoint do API Gateway executa diversas tarefas independentes que são executadas em uma função Lambda. A execução das tarefas independentes pode levar até 10 minutos no total.Usuários relatam que o endpoint às vezes retorna um código de status HTTP 604.",
    "ask": "As invocações da função Lambda são bem-sucedidas.Qual solução impedirá que o endpoint retorne o código de status HTTP 504?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o valor de tempo limite da função Lambda."
      },
      {
        "id": "B",
        "text": "Aumente a simultaneidade reservada da função Lambda."
      },
      {
        "id": "C",
        "text": "Aumente a memória disponível para a função Lambda."
      },
      {
        "id": "D",
        "text": "Refatore a função Lambda para iniciar uma máquina de estado do AWS Step Functions."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-471",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que utiliza um pool de usuários do Amazon Cognito para autenticação.",
    "ask": "Um desenvolvedor precisa adicionar uma nova API REST que utilizará o pool de usuários para autenticar solicitações.Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma nova chave de API e um novo plano de uso. Associe a chave de API e a API REST ao plano de uso."
      },
      {
        "id": "B",
        "text": "Crie um autorizador Cognito para o pool de usuários correto. Faça referência ao cabeçalho que contém o token Cognito."
      },
      {
        "id": "C",
        "text": "Crie um autorizador de token do AWS Lambda. Faça referência ao token de autorização no payload do evento. Autentique as solicitações com base no valor do token."
      },
      {
        "id": "D",
        "text": "Crie um autorizador de solicitações do AWS Lambda. Faça referência ao cabeçalho de autorização no payload do evento. Autentique as solicitações usando o valor do cabeçalho em uma solicitação à API do Cognito."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-472",
    "type": "single",
    "stem": "Um desenvolvedor está testando uma função do AWS Lambda que tem como fonte de eventos uma fila do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "O desenvolvedor observa que algumas das mensagens processadas pela função Lambda reaparecem na fila enquanto as mensagens estão sendo processadas.O desenvolvedor precisa corrigir esse comportamento.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o tempo limite da função Lambda."
      },
      {
        "id": "B",
        "text": "Aumente o tempo limite de visibilidade da fila SQS."
      },
      {
        "id": "C",
        "text": "Aumente a alocação de memória da função Lambda."
      },
      {
        "id": "D",
        "text": "Aumente o tamanho do lote no mapeamento da origem do evento."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-473",
    "type": "single",
    "stem": "Um desenvolvedor criou um código reutilizável que diversas funções do AWS Lambda precisam usar. O desenvolvedor compilou o código em um arquivo zip.",
    "ask": "O desenvolvedor precisa implantar o código na AWS e atualizar as funções do Lambda para usá-lo.Qual solução atenderá a esse requisito da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Carregue o arquivo zip no Amazon S3. Configure um caminho de importação nas funções do Lambda para apontar para o arquivo zip."
      },
      {
        "id": "B",
        "text": "Crie uma nova função Lambda que contenha e execute o código compartilhado. Atualize as funções Lambda existentes para invocar a nova função Lambda de forma síncrona."
      },
      {
        "id": "C",
        "text": "Crie uma camada Lambda que contenha o arquivo zip. Anexe a camada Lambda às funções Lambda."
      },
      {
        "id": "D",
        "text": "Crie uma imagem de contêiner do Lambda que inclua o código compartilhado. Use a imagem do contêiner como imagem base do Lambda para todas as funções."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-474",
    "type": "single",
    "stem": "Uma equipe possui uma API REST do Amazon API Gateway que consiste em um único recurso e um método GET suportado por uma integração com o AWS Lambda.Um desenvolvedor faz uma alteração na função do Lambda e a implementa como uma nova versão. O desenvolvedor precisa configurar um processo para testar a nova versão da função antes de usá-la em produção.",
    "ask": "Os testes não devem afetar a API REST de produção.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie um novo recurso na API REST. Adicione um método GET ao novo recurso e adicione uma integração Lambda à versão atualizada da função Lambda. Implante a nova versão."
      },
      {
        "id": "B",
        "text": "Crie um novo estágio para a API REST. Crie uma variável de estágio. Atribua a variável de estágio à função Lambda. Defina o nome da função Lambda integrada ao API Gateway para a variável de estágio. Implante a nova versão."
      },
      {
        "id": "C",
        "text": "Crie uma nova API REST. Adicione um recurso que tenha um único método GET integrado à versão atualizada da função Lambda."
      },
      {
        "id": "D",
        "text": "Atualize a integração do método GET existente com o Lambda para apontar para a versão atualizada da função Lambda. Implante a nova versão."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-475",
    "type": "single",
    "stem": "Um desenvolvedor gerencia chaves de criptografia no AWS Key Management Service (AWS KMS). O desenvolvedor deve garantir que todas as chaves de criptografia possam ser excluídas imediatamente quando não forem mais necessárias.",
    "ask": "O desenvolvedor deseja uma solução de alta disponibilidade que não exija gerenciamento manual da infraestrutura computacional.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use chaves gerenciadas pelo AWS KMS. Quando as chaves não forem mais necessárias, agende-as para exclusão imediata."
      },
      {
        "id": "B",
        "text": "Use chaves gerenciadas pelo cliente com material de chaves importado. Quando as chaves não forem mais necessárias, exclua o material de chaves importado."
      },
      {
        "id": "C",
        "text": "Use chaves gerenciadas pelo cliente. Quando as chaves não forem mais necessárias, exclua o material da chave."
      },
      {
        "id": "D",
        "text": "Use chaves gerenciadas pelo cliente e um repositório de chaves do AWS CloudHSM. Quando as chaves não forem mais necessárias, agende a exclusão imediata delas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-476",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de e-commerce. A API do aplicativo envia dados de pedidos para uma fila do Amazon Simple Queue Service (Amazon SOS).",
    "ask": "Um desenvolvedor precisa modificar o aplicativo para enriquecer os dados do pedido antes que o aplicativo os envie para um sistema de atendimento.Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função do AWS Lambda para consultar a fila do SOS, enriquecer os dados da mensagem e enviá-los ao sistema de atendimento. Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva a função do Lambda no tópico do SNS."
      },
      {
        "id": "B",
        "text": "Crie uma máquina de estados do AWS Step Functions. Configure uma regra do Amazon EventBridge para executar a máquina de estados quando um pedido for publicado na fila do SQS. Mapeie os pedidos para uma função do AWS Lambda. Programe a função do Lambda para realizar o enriquecimento de dados e invocar a máquina de estados. Configure a última etapa da máquina de estados para enviar os dados enriquecidos para o sistema de atendimento."
      },
      {
        "id": "C",
        "text": "Crie um cluster do Amazon EMR para ler mensagens da fila do SQS. Configure uma tarefa do EMR para enriquecer os dados do pedido. Crie e configure um bucket do Amazon S3 como local de saída. Ajuste o sistema de atendimento de pedidos para recuperar os arquivos enriquecidos do bucket do S3."
      },
      {
        "id": "D",
        "text": "Crie um pipeline do Amazon EventBridge que utilize enriquecimento de eventos. Configure a fila do SQS como origem para o pipeline. Defina o sistema de atendimento como destino do pipeline."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-477",
    "type": "single",
    "stem": "Um aplicativo interage com o Amazon Aurora para armazenar e rastrear informações de clientes. O banco de dados primário é configurado com várias réplicas de leitura para melhorar o desempenho das consultas de leitura.",
    "ask": "No entanto, uma das réplicas do Aurora está recebendo a maior parte ou todo o tráfego, enquanto a outra réplica do Aurora permanece ociosa.Como esse problema pode ser resolvido?",
    "options": [
      {
        "id": "A",
        "text": "Desabilite o cache de DNS no nível do aplicativo."
      },
      {
        "id": "B",
        "text": "Habilite o cache de DNS no nível do aplicativo."
      },
      {
        "id": "C",
        "text": "Habilitar o pool de aplicativos"
      },
      {
        "id": "D",
        "text": "Desabilitar o pool de aplicativos"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-478",
    "type": "single",
    "stem": "Uma empresa executa pipelines de integração/entrega contínua (CI/CD) para sua aplicação no AWS CodePipeline.",
    "ask": "Um desenvolvedor deve escrever testes unitários e executá-los como parte dos pipelines antes de preparar os artefatos para teste.Como o desenvolvedor deve incorporar testes unitários como parte dos pipelines de CI/CD?",
    "options": [
      {
        "id": "A",
        "text": "Crie um pipeline separado do CodePipeline para executar testes unitários."
      },
      {
        "id": "B",
        "text": "Atualize a especificação de compilação do AWS CodeBuild para incluir uma fase para execução de testes unitários."
      },
      {
        "id": "C",
        "text": "Instale o agente do AWS CodeDeploy em uma instância do Amazon EC2 para executar testes de unidade."
      },
      {
        "id": "D",
        "text": "Crie uma ramificação de teste em um repositório git para os pipelines executarem testes unitários."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-479",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está solucionando problemas de um aplicativo de três camadas, implantado em instâncias do Amazon EC2.",
    "ask": "Há um problema de conectividade entre os servidores do aplicativo e os servidores do banco de dados.Quais serviços ou ferramentas da AWS devem ser usados para identificar o componente com defeito?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Consultor confiável da AWS"
      },
      {
        "id": "C",
        "text": "Registros de fluxo do Amazon VPC"
      },
      {
        "id": "D",
        "text": "Listas de controle de acesso à rede"
      },
      {
        "id": "E",
        "text": "Regras de configuração da AWS"
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "DVA-C02-480",
    "type": "single",
    "stem": "Uma empresa executa uma nova aplicação no AWS Elastic Beanstalk. A empresa precisa implantar atualizações na aplicação.",
    "ask": "As atualizações não devem causar tempo de inatividade para os usuários da aplicação.A implantação deve encaminhar uma porcentagem específica do tráfego de entrada do cliente para uma nova versão da aplicação durante um período de avaliação.Qual tipo de implantação atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "rolando"
      },
      {
        "id": "B",
        "text": "divisão de tráfego"
      },
      {
        "id": "C",
        "text": "no local"
      },
      {
        "id": "D",
        "text": "imutável"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-481",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está fazendo alterações em um aplicativo personalizado que usa o AWS Elastic Beanstalk.Quais soluções atualizarão o ambiente do Elastic Beanstalk com a nova versão do aplicativo após o desenvolvedor concluir as alterações?",
    "options": [
      {
        "id": "A",
        "text": "Compacte o código do aplicativo em um arquivo zip. Use o Console de Gerenciamento da AWS para carregar o arquivo .zip e implantar o aplicativo compactado."
      },
      {
        "id": "B",
        "text": "Empacote o código do aplicativo em um arquivo .tar. Use o Console de Gerenciamento da AWS para criar uma nova versão do aplicativo a partir do arquivo .tar. Atualize o ambiente usando a CLI da AWS."
      },
      {
        "id": "C",
        "text": "Empacote o código do aplicativo em um arquivo .tar. Use o Console de Gerenciamento da AWS para carregar o arquivo .tar e implantar o aplicativo empacotado."
      },
      {
        "id": "D",
        "text": "Empacote o código do aplicativo em um arquivo .zip. Use a AWS CL para criar uma nova versão do aplicativo a partir do arquivo .zip e atualizar o ambiente."
      },
      {
        "id": "E",
        "text": "Empacote o código do aplicativo em um arquivo .zip. Use o Console de Gerenciamento da AWS para criar uma nova versão do aplicativo a partir do arquivo .zip. Reconstrua o ambiente usando a CLI da AWS."
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "DVA-C02-482",
    "type": "single",
    "stem": "Um desenvolvedor precisa escrever um modelo do AWS CloudFormation em uma máquina local e implantar uma pilha do CloudFormation na AWS.O que o desenvolvedor deve fazer para concluir essas tarefas?",
    "options": [
      {
        "id": "A",
        "text": "Instale a AWS CLI. Configure a AWS CLI usando um nome de usuário e uma senha do IAM."
      },
      {
        "id": "B",
        "text": "Instale a AWS CLI. Configure a AWS CLI usando uma chave SSH."
      },
      {
        "id": "C",
        "text": "Instale a AWS CLI, configure a AWS CLI usando uma chave de acesso de usuário e uma chave secreta do IAM."
      },
      {
        "id": "D",
        "text": "Instale um kit de desenvolvimento de software (SDK) da AWS. Configure o SDK usando um certificado X.509."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-483",
    "type": "single",
    "stem": "Um desenvolvedor está atualizando uma API REST do Amazon API Gateway para ter um endpoint simulado.",
    "ask": "O desenvolvedor deseja atualizar o modelo de mapeamento de solicitação de integração para que o endpoint responda a solicitações de integração simuladas com códigos de status HTTP específicos com base em diversas condições.Qual instrução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "code": "#if( $input.params('integration') == \"mock\" )\n    \"statusCode\": 404\n#else\n    \"statusCode\": 500\n#end"
      },
      {
        "id": "B",
        "code": "#if( $input.params('scope') == \"internal\" )\n    \"statusCode\": 200\n#else\n    \"statusCode\": 500\n#end"
      },
      {
        "id": "C",
        "code": "#if( $input.path(\"integration\") )\n    \"statusCode\": 200\n#else\n    \"statusCode\": 404\n#end"
      },
      {
        "id": "D",
        "code": "#if( $context.integration.status)\n    \"statusCode\": 200\n#else\n    \"statusCode\": 500\n#end"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-484",
    "type": "single",
    "stem": "Uma grande empresa tem seus componentes de aplicação distribuídos em várias contas da AWS.",
    "ask": "A empresa precisa coletar e visualizar dados de rastreamento nessas contas.O que deve ser usado para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Raio X da AWS"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "Registros de fluxo do Amazon VPC"
      },
      {
        "id": "D",
        "text": "Serviço Amazon OpenSearch"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-485",
    "type": "single",
    "stem": "Um desenvolvedor deve armazenar em cache artefatos dependentes do Maven Central, um repositório público de pacotes, como parte do pipeline de compilação de um aplicativo. O pipeline de compilação possui um repositório AWS CodeArtifact onde os artefatos da compilação são publicados.",
    "ask": "O desenvolvedor precisa de uma solução que exija o mínimo de alterações no pipeline de compilação.Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Modifique o repositório CodeAriifact existente para associar um repositório upstream ao repositório de pacotes público."
      },
      {
        "id": "B",
        "text": "Crie um novo repositório CodeAtfact que tenha uma conexão externa com o repositório de pacotes público."
      },
      {
        "id": "C",
        "text": "Crie um novo domínio CodeAifact que contenha um novo repositório que tenha uma conexão externa com o repositório de pacotes público."
      },
      {
        "id": "D",
        "text": "Modifique a política de recursos do repositório CodeAnifact para permitir que artefatos sejam obtidos do repositório de pacotes público."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-486",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma máquina de estados do AWS Step Functions para gerenciar um fluxo de trabalho de processamento de pedidos. Quando a máquina de estados recebe um pedido, ela pausa até que o pedido seja confirmado.",
    "ask": "Um registro adicionado a uma tabela do Amazon DynamoDB por outro serviço confirma cada pedido.O desenvolvedor deve concluir o fluxo de trabalho de processamento de pedidos.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Atualize a máquina de estados para consultar a tabela do DynamoDB usando o estado GetItem do DynamoDB para determinar se um registro existe. Se o registro existir, passe para o próximo estado. Se o registro não existir, aguarde 5 minutos e verifique novamente."
      },
      {
        "id": "B",
        "text": "Inscreva uma função do AWS Lambda em um fluxo de tabela do DynamoDB. Configure a função do Lambda para ser executada quando um novo registro for adicionado à tabela. Quando a função do Lambda receber o registro apropriado, execute o comando de execução \"redrive\" na máquina de estado em execução."
      },
      {
        "id": "C",
        "text": "Inscreva uma função do AWS Lambda no fluxo de tabelas do DynamoDB. Configure a função do Lambda para ser executada quando um novo registro for adicionado à tabela. Quando a função do Lambda receber o registro apropriado, interrompa a invocação da máquina de estado atual e inicie uma nova invocação."
      },
      {
        "id": "D",
        "text": "Invoque uma função do AWS Lambda a partir da máquina de estados. Configure a função Lambda para pesquisar continuamente a tabela do DynamoDB em busca do registro apropriado e retornar quando um registro existir. Continue a invocação da máquina de estados quando a função Lambda retornar. Se o tempo limite da função Lambda expirar, a máquina de estados falhará."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-487",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação web que precisa compartilhar documentos seguros com os usuários finais. Os documentos são armazenados em um bucket privado do Amazon S3.",
    "ask": "A aplicação precisa permitir que apenas usuários autenticados baixem documentos específicos quando solicitados e por apenas 15 minutos.Como o desenvolvedor pode atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Copie os documentos para um bucket S3 separado que tenha uma política de ciclo de vida para exclusão após 15 minutos."
      },
      {
        "id": "B",
        "text": "Crie uma URL S3 pré-assinada usando o AWS SDK com um tempo de expiração de 15 minutos."
      },
      {
        "id": "C",
        "text": "Use a criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS) e baixe os documentos usando HTTPS."
      },
      {
        "id": "D",
        "text": "Modifique a política do bucket S3 para permitir que apenas usuários específicos baixem os documentos. Reverta a alteração após 15 minutos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-488",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um conjunto de funções do AWS Lambda para processar dados. As funções do Lambda precisam usar uma biblioteca de terceiros comum como dependência. A biblioteca é atualizada frequentemente com novos recursos e correções de bugs.",
    "ask": "A empresa deseja garantir que as funções do Lambda sempre usem a versão mais recente da biblioteca.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Armazene a dependência e o código da função em um bucket do Amazon S3."
      },
      {
        "id": "B",
        "text": "Crie uma camada Lambda que inclua a biblioteca. Anexe a camada a cada função Lambda."
      },
      {
        "id": "C",
        "text": "Instale a dependência em um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Anexe o sistema de arquivos a cada função do Lambda."
      },
      {
        "id": "D",
        "text": "Crie uma nova função Lambda para carregar a biblioteca. Configure as funções Lambda existentes para invocar a nova função Lambda quando as funções existentes precisarem usar a biblioteca."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-489",
    "type": "single",
    "stem": "O aplicativo de uma empresa inclui uma tabela do Amazon DynamoDB para pedidos de produtos. A tabela tem uma chave de partição primária de orderId e não possui chave de classificação.",
    "ask": "A empresa está adicionando um novo recurso que exige que o aplicativo consulte a tabela usando o atributo customerId.Qual solução fornecerá essa funcionalidade de consulta?",
    "options": [
      {
        "id": "A",
        "text": "Altere a chave primária existente definindo customerId como a chave de classificação."
      },
      {
        "id": "B",
        "text": "Crie um novo índice secundário global (GSI) na tabela com uma chave de partição de customerId."
      },
      {
        "id": "C",
        "text": "Crie um novo índice secundário local (LSI) na tabela com uma chave de partição de customerId."
      },
      {
        "id": "D",
        "text": "Crie um novo índice secundário local (LSI) na tabela com uma chave de partição orderId e uma chave de classificação customerId."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-490",
    "type": "single",
    "stem": "Uma empresa hospeda aplicativos localmente. Os servidores locais geram logs de auditoria que são disponibilizados por meio de um endpoint HTTP.A empresa precisa de uma solução automatizada para ingerir e armazenar regularmente grandes volumes de dados de auditoria dos servidores locais.",
    "ask": "A empresa também precisa realizar consultas nos dados de auditoria.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Exporte os logs de auditoria. Carregue os logs no Amazon S3. Importe os logs para uma instância de banco de dados do Amazon RDS."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para chamar o endpoint HTTP e buscar logs de auditoria. Configure uma regra agendada do Amazon EventBridge para invocar a função do Lambda. Configure a função do Lambda para enviar os logs para o AWS CloudTrail Lake."
      },
      {
        "id": "C",
        "text": "Use o AWS DataSync para transferir logs de auditoria para um bucket do Amazon S3. Carregue os logs em um bucket do Amazon S3. Use o Amazon Athena para consultar o bucket."
      },
      {
        "id": "D",
        "text": "Instale o agente do Amazon CloudWatch nos servidores locais. Conceda ao agente a capacidade de enviar logs de auditoria para o CloudWatch. Use o CloudWatch Insights para consultar os logs."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-491",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que inclui uma função do AWS Lambda escrita em .NET Core. O código da função Lambda precisa interagir com tabelas do Amazon DynamoDB e buckets do Amazon S3.",
    "ask": "O desenvolvedor deve minimizar o tempo de implantação e a duração da invocação da função Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a memória da função Lambda."
      },
      {
        "id": "B",
        "text": "Inclua todo o AWS SDK para .NET no pacote de implantação da função Lambda."
      },
      {
        "id": "C",
        "text": "Inclua apenas os módulos do AWS SDK para .NET para DynamoDB e Amazon S3 no pacote de implantação da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a função Lambda para baixar o AWS SDK para .NET de um bucket S3 em tempo de execução."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-492",
    "type": "single",
    "stem": "Uma equipe de desenvolvimento possui uma API REST do Amazon API Gateway suportada por uma função do AWS Lambda.Usuários relataram problemas de desempenho com a função do Lambda. A equipe de desenvolvimento identificou a origem dos problemas como uma inicialização a frio da função do Lambda.",
    "ask": "A equipe de desenvolvimento precisa reduzir o tempo de inicialização da função do Lambda.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Altere a simultaneidade do Lambda para simultaneidade reservada."
      },
      {
        "id": "B",
        "text": "Aumente o tempo limite da função Lambda."
      },
      {
        "id": "C",
        "text": "Aumente a alocação de memória da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a simultaneidade provisionada para a função Lambda."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-493",
    "type": "single",
    "stem": "Uma empresa de streaming de vídeo possui um pipe no Amazon EventBridge Pipes que utiliza uma fila do Amazon Simple Queue Service (Amazon SQS) como fonte de eventos. O pipe publica todos os eventos de origem em um barramento de eventos do EventBridge de destino.",
    "ask": "Antes da publicação dos eventos, o pipe utiliza uma função do AWS Lambda para recuperar o status do fluxo de cada evento de um banco de dados e adiciona o status do fluxo a cada evento de origem.A empresa deseja que o pipe publique eventos no barramento de eventos somente se o fluxo de vídeo estiver com o status pronto.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma etapa de filtro ao pipe que corresponderá ao status do fluxo pronto."
      },
      {
        "id": "B",
        "text": "Atualize a função Lambda para retornar apenas fluxos de vídeo com status pronto."
      },
      {
        "id": "C",
        "text": "Inclua um filtro para o status pronto em todas as regras do EventBridge que assinam o barramento de eventos."
      },
      {
        "id": "D",
        "text": "Adicione um transformador de entrada à saída do pipe que filtra fluxos com status pronto."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-494",
    "type": "single",
    "stem": "Um desenvolvedor precisa criar um fluxo de trabalho para processar mensagens enviadas para uma fila do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "Quando uma mensagem chega à fila, o fluxo de trabalho deve implementar um atraso antes de invocar uma função do AWS Lambda para processá-la.Qual solução atenderá a esse requisito da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma máquina de estados do AWS Step Functions para processar a fila do SQS. Use um estado de espera para atrasar o processamento da função Lambda pelo número necessário de segundos após a entrega da mensagem à fila do SQS. Use o Amazon EventBridge para invocar a máquina de estados a cada 5 minutos."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda para consultar a fila SQS. Atualize o código Lambda para republicar cada mensagem com um atributo personalizado que contenha um horário futuro em que a mensagem deverá ser totalmente processada. Atualize o código Lambda para processar totalmente as mensagens quando o horário futuro do atributo personalizado tiver passado."
      },
      {
        "id": "C",
        "text": "Defina o valor DelaySeconds da fila SQS como o número de segundos necessários para atrasar a entrega das mensagens. Adicione um mapeamento de origem de evento para a função Lambda. Especifique a fila SQS como origem."
      },
      {
        "id": "D",
        "text": "Defina o valor de Tempo Limite de Visibilidade da fila SQS como o número de segundos necessários para atrasar a entrega das mensagens. Adicione um mapeamento de origem de evento para a função Lambda. Especifique a fila SQS como origem."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-495",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma aplicação para aceitar dados de clientes. Os dados devem ser criptografados em repouso e em trânsito.A aplicação utiliza uma API do Amazon API Gateway que se resolve em funções do AWS Lambda. As funções do Lambda armazenam os dados em um cluster de banco de dados MySQL do Amazon Aurora. A aplicação funcionou corretamente durante os testes.Um desenvolvedor configurou uma distribuição do Amazon CloudFront com criptografia em nível de campo que utiliza uma chave do AWS Key Management Service (AWS KMS). Após a configuração da distribuição, a aplicação apresentou um comportamento inesperado.",
    "ask": "Todos os dados no banco de dados passaram de texto simples para texto cifrado.O desenvolvedor deve garantir que os dados não sejam armazenados no banco de dados como texto cifrado da criptografia em nível de campo do CloudFront.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Altere a política de protocolo do CloudFront Viewer de “HTTP e HTTPS” para “Somente HTTPS”."
      },
      {
        "id": "B",
        "text": "Adicione uma função Lambda que use a chave KMS para descriptografar os campos de dados antes de salvar os dados no banco de dados."
      },
      {
        "id": "C",
        "text": "Habilite a criptografia no cluster de banco de dados usando a mesma chave KMS usada no CloudFront."
      },
      {
        "id": "D",
        "text": "Solicite e implante um novo certificado SSL para usar com a distribuição do CloudFront."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-496",
    "type": "single",
    "stem": "Uma empresa oferece um serviço de software B2B executado em uma infraestrutura dedicada implantada na conta AWS de cada cliente. Antes do lançamento de um recurso, a empresa precisa executar testes de integração em uma infraestrutura de teste real da AWS. A infraestrutura de teste consiste em instâncias do Amazon EC2 e um banco de dados Amazon RDS.Um desenvolvedor deve configurar um processo de entrega contínua que provisionará a infraestrutura de teste nas diferentes contas AWS.",
    "ask": "Em seguida, o desenvolvedor deve executar os testes de integração.Qual solução atenderá a esses requisitos com o MENOR esforço administrativo?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS CodeDeploy com o AWS CloudFormation StackSets para implantar a infraestrutura. Use o Amazon CodeGuru para executar os testes."
      },
      {
        "id": "B",
        "text": "Use o AWS CodePipeline com o AWS CloudFormation StackSets para implantar a infraestrutura. Use o AWS CodeBuild para executar os testes."
      },
      {
        "id": "C",
        "text": "Use o AWS CodePipeline com conjuntos de alterações do AWS CloudFormation para implantar a infraestrutura. Use um recurso personalizado do CloudFormation para executar os testes."
      },
      {
        "id": "D",
        "text": "Use os modelos do AWS Serverless Application Model (AWS SAM) com os conjuntos de alterações do AWS CloudFormation para implantar a infraestrutura. Use o AWS CodeDeploy para executar os testes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-497",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando uma aplicação que utiliza uma função do AWS Lambda para transformar e carregar dados de um bucket do Amazon S3. Ao testar a aplicação, o desenvolvedor constata que algumas invocações da função Lambda são mais lentas do que outras.O desenvolvedor precisa atualizar a função Lambda para que ela tenha durações de invocação previsíveis e com baixa latência.",
    "ask": "Quaisquer atividades de inicialização, como carregamento de bibliotecas e instanciação de clientes, devem ser executadas durante o tempo de alocação, e não durante as invocações reais da função.Qual combinação de etapas atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um grupo de agendamento no Amazon EventBridge Scheduler para invocar a função Lambda."
      },
      {
        "id": "B",
        "text": "Configure a simultaneidade provisionada para que a função Lambda tenha o número necessário de ambientes de execução."
      },
      {
        "id": "C",
        "text": "Use a versão $LATEST da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a simultaneidade reservada para que a função Lambda tenha o número necessário de ambientes de execução."
      },
      {
        "id": "E",
        "text": "Implante as alterações e publique uma nova versão da função Lambda."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "DVA-C02-498",
    "type": "single",
    "stem": "Um desenvolvedor criou uma função do AWS Lambda chamada ProcessMessages. A função Lambda é invocada de forma assíncrona quando uma mensagem é publicada em um tópico do Amazon Simple Notification Service (Amazon SNS) chamado InputTopic.",
    "ask": "O desenvolvedor usa um segundo tópico do SNS chamado ErrorTopic para lidar com alertas de falhas em outros serviços.O desenvolvedor deseja receber notificações do tópico do SNS ErrorTopic quando a função do Lambda ProcessMessages falha ao processar uma mensagem.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma assinatura para o tópico SNS ErrorTopic. Configure uma política de filtro para falhas. Especifique a função Lambda ProcessMessages como endpoint."
      },
      {
        "id": "B",
        "text": "Configure um destino de falha para a função Lambda ProcessMessages. Especifique o Nome de Recurso da Amazon (ARN) do tópico SNS ErrorTopic como o ARN de destino."
      },
      {
        "id": "C",
        "text": "Configure um gatilho para a função Lambda ProcessMessages. Especifique o tópico SNS ErrorTopic como o tópico do gatilho. Configure uma política de filtro no tópico para falhas."
      },
      {
        "id": "D",
        "text": "Configure uma política de entrega no tópico SNS ErrorTopic. Configure uma política de filtragem para falhas. Especifique a função Lambda como ponto de extremidade de entrada."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-499",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo uma nova aplicação que utiliza recursos do Amazon EC2, Amazon S3 e AWS Lambda. A empresa deseja permitir que os funcionários acessem o Console de Gerenciamento da AWS usando credenciais existentes que a empresa armazena e gerencia em um Microsoft Active Directory local.",
    "ask": "Cada funcionário deve ter um nível específico de acesso aos recursos da AWS, com base em sua função.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure o AWS Directory Service para criar um Active Directory no AWS Directory Service para o Microsoft Active Directory. Estabeleça uma relação de confiança com o Active Directory local. Configure funções do IAM e políticas de confiança para conceder aos funcionários acesso aos recursos da AWS."
      },
      {
        "id": "B",
        "text": "Use o LDAP para integrar diretamente o Active Directory local com o AWS Identity and Access Management (IAM). Mapeie grupos do Active Directory para funções do IAM para controlar o acesso aos recursos da AWS."
      },
      {
        "id": "C",
        "text": "Implemente um agente de identidade personalizado para autenticar usuários no Active Directory local. Configure o agente de identidade para usar o AWS Security Token Service (AWS STS) para conceder aos usuários autorizados acesso baseado em função do IAM aos recursos da AWS."
      },
      {
        "id": "D",
        "text": "Configure o Amazon Cognito para federar usuários no Active Directory local. Use os pools de usuários do Cognito para gerenciar identidades de usuários e o acesso dos usuários aos recursos da AWS."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-500",
    "type": "single",
    "stem": "Uma empresa possui uma tabela do Amazon DynamoDB que contém registros de usuários que se inscreveram para um teste do produto da empresa. A empresa está usando uma planilha para rastrear dados sobre o teste do produto.",
    "ask": "A empresa precisa garantir que a planilha seja atualizada automaticamente com as informações mais recentes quando os testes individuais começarem, forem atualizados ou terminarem.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um cluster do DynamoDB Accelerator (DAX) a partir da tabela. Defina o tipo de visualização como \"imagem antiga\". Crie uma função do AWS Lambda que use os dados do cluster para atualizar a planilha. Inscreva a função do Lambda no cluster."
      },
      {
        "id": "B",
        "text": "Crie um cluster do DynamoDB Accelerator (DAX) a partir da tabela. Defina o tipo de visualização como \"nova imagem\". Crie uma função do AWS Lambda que use os dados do cluster para atualizar a planilha. Inscreva a função do Lambda no cluster."
      },
      {
        "id": "C",
        "text": "Habilite um fluxo do DynamoDB para a tabela. Defina o tipo de visualização como nova imagem. Crie uma função do AWS Lambda que use os dados do fluxo para atualizar a planilha. Assine a função do Lambda ao fluxo."
      },
      {
        "id": "D",
        "text": "Habilite um fluxo do DynamoDB para a tabela. Defina o tipo de visualização como imagem antiga. Crie uma função do AWS Lambda que use os dados do fluxo para atualizar a planilha. Assine a função do Lambda ao fluxo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-501",
    "type": "single",
    "stem": "Um desenvolvedor está lançando um aplicativo global que fornece conteúdo para vários países. O desenvolvedor precisa fornecer conteúdo específico com base no país e no idioma principal de cada usuário.",
    "ask": "O desenvolvedor deve garantir que o conteúdo seja fornecido de forma confiável e com baixa latência.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma API REST do Amazon API Gateway. Crie um acelerador padrão do AWS Global Accelerator para resolver solicitações à API. Configure grupos de endpoints no acelerador. Anexe ouvintes para cada país e idioma."
      },
      {
        "id": "B",
        "text": "Armazene o conteúdo em um bucket centralizado do Amazon S3. Habilite a Aceleração de Transferência do S3 no bucket. Crie uma zona hospedada do Amazon Route 53 que inclua o endpoint para o bucket do S3. Crie registros no Route 53 que utilizem políticas de roteamento de geoproximidade e geolocalização."
      },
      {
        "id": "C",
        "text": "Crie uma API REST do Amazon API Gateway. Conecte a API REST ao AWS WAF. Use instruções de correspondência geográfica e de expressão regular para permitir ou negar solicitações com base nos rótulos retornados das avaliações de solicitações da web."
      },
      {
        "id": "D",
        "text": "Configure uma distribuição do Amazon CloudFront que use o aplicativo como origem. Configure a distribuição para encaminhar os cabeçalhos Accept-Language e CloudFront-Viewer-Country para a origem."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-502",
    "type": "single",
    "stem": "Uma empresa gera certificados SSL de um provedor terceirizado. A empresa importa os certificados para o AWS Certificate Manager (ACM) para uso com aplicações web públicas.Um desenvolvedor deve implementar uma solução para notificar a equipe de segurança da empresa 90 dias antes da expiração de um certificado importado. A empresa já configurou uma fila do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "A empresa também configurou um tópico do Amazon Simple Notification Service (Amazon SNS) que tem o endereço de e-mail da equipe de segurança como assinante.Qual solução fornecerá à equipe de segurança a notificação necessária sobre os certificados?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma regra do Amazon EventBridge que especifique o tipo de evento \"Certificado ACM Aproximando-se da Expiração\". Defina o tópico do SNS como o destino da regra do EventBridge."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para pesquisar todos os certificados com vencimento em 90 dias. Programe a função do Lambda para enviar o Nome de Recurso da Amazon (ARN) de cada certificado identificado em uma mensagem para a fila do SQS."
      },
      {
        "id": "C",
        "text": "Crie um fluxo de trabalho do AWS Step Functions que seja invocado pela notificação de expiração de cada certificado do AWS CloudTrail. Crie uma função do AWS Lambda para enviar o Nome de Recurso da Amazon (ARN) de cada certificado em uma mensagem para a fila do SQS."
      },
      {
        "id": "D",
        "text": "Configure o AWS Config com a regra gerenciada acm-certificate-expiration-check para execução a cada 24 horas. Crie uma regra do Amazon EventBridge que inclua um padrão de evento que especifique o tipo de detalhe \"Alteração de Conformidade das Regras de Configuração\" e a regra configurada. Defina o tópico do SNS como o destino da regra do EventBridge."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-503",
    "type": "single",
    "stem": "Um desenvolvedor tem uma função do AWS Lambda que precisa acessar uma tabela do Amazon DynamoDB chamada DailyOrders. A função do Lambda deve ser capaz de realizar operações de leitura na tabela.",
    "ask": "A função do Lambda não deve ser capaz de realizar operações de gravação na tabela.O desenvolvedor precisa criar uma política do IAM para associar à função de execução da função do Lambda.Qual declaração de política do IAM atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Action\": [\n      \"dynamodb:BatchGetItem\",\n      \"dynamodb:GetItem\",\n      \"dynamodb:Query\",\n      \"dynamodb:Scan\",\n      \"dynamodb:BatchWriteItem\",\n      \"dynamodb:PutItem\",\n      \"dynamodb:UpdateItem\"\n    ],\n    \"Resource\": \"arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders\"\n  }]\n}"
      },
      {
        "id": "B",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Action\": [\n      \"dynamodb:GetItem\",\n      \"dynamodb:PutItem\",\n      \"dynamodb:Query\",\n      \"dynamodb:Scan\"\n    ],\n    \"Resource\": \"arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders\"\n  }]\n}"
      },
      {
        "id": "C",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Deny\",\n    \"Action\": [\n      \"dynamodb:Query\",\n      \"dynamodb:Scan\",\n      \"dynamodb:PutItem\",\n      \"dynamodb:UpdateItem\"\n    ],\n    \"Resource\": \"arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders\"\n  }]\n}"
      },
      {
        "id": "D",
        "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Action\": [\n      \"dynamodb:BatchGetItem\",\n      \"dynamodb:GetItem\",\n      \"dynamodb:Query\",\n      \"dynamodb:Scan\"\n    ],\n    \"Resource\": \"arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders\"\n  }]\n}"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-504",
    "type": "single",
    "stem": "Um desenvolvedor está trabalhando em um novo mecanismo de autorização para uma aplicação. O desenvolvedor deve criar uma API do Amazon API Gateway e testar a autorização do JSON Web Token (JWT) na API.O desenvolvedor deve usar o autorizador integrado e evitar o gerenciamento do código com lógica personalizada.",
    "ask": "O desenvolvedor precisa definir uma rota de API disponível em /auth para testar a configuração do autorizador.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma API WebSocket e a rota /auth. Configure e anexe o autorizador JWT à API. Implante a API."
      },
      {
        "id": "B",
        "text": "Crie uma API WebSocket e a rota /auth. Crie e configure um autorizador do AWS Lambda. Anexe o autorizador do Lambda à API. Implante a API."
      },
      {
        "id": "C",
        "text": "Crie uma API HTTP e a rota /auth. Crie e configure um autorizador do AWS Lambda. Anexe o autorizador do Lambda à rota /auth. Implante a API."
      },
      {
        "id": "D",
        "text": "Crie uma API HTTP e a rota /auth. Configure o autorizador JWT. Anexe o autorizador JWT à rota /auth. Implante a API."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-505",
    "type": "single",
    "stem": "Uma empresa está criando um novo aplicativo que permite aos usuários enviar e compartilhar arquivos de vídeo curtos. O tamanho médio dos arquivos de vídeo é de 10 MB. Após o usuário enviar um arquivo, uma mensagem precisa ser colocada em uma fila do Amazon Simple Queue Service (Amazon SQS) para que o arquivo possa ser processado.",
    "ask": "Os arquivos precisam estar disponíveis para processamento em até 5 minutos.Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
    "options": [
      {
        "id": "A",
        "text": "Grave os arquivos no Amazon S3 Glacier Deep Archive. Adicione o local S3 dos arquivos à fila SQS."
      },
      {
        "id": "B",
        "text": "Grave os arquivos no Amazon S3 Standard. Adicione o local S3 dos arquivos à fila SQS."
      },
      {
        "id": "C",
        "text": "Grave os arquivos em um volume SSD de uso geral do Amazon Elastic Block Store (Amazon EBS). Adicione o local EBS dos arquivos à fila SQS."
      },
      {
        "id": "D",
        "text": "Escreva mensagens que contenham o conteúdo dos arquivos enviados para a fila do SQS."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-506",
    "type": "single",
    "stem": "Um desenvolvedor está atualizando o código de uma função do AWS Lambda para adicionar novos recursos. A função do Lambda possui aliases de versão para ambientes de produção e desenvolvimento que executam versões separadas da função.",
    "ask": "O desenvolvedor precisa configurar um ambiente de preparação para a função do Lambda para lidar com invocações tanto para a versão de desenvolvimento quanto para a versão de produção.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um alias ponderado que faça referência à versão de produção da função e à versão atualizada da função."
      },
      {
        "id": "B",
        "text": "Adicione um balanceador de carga de rede. Adicione a versão de produção da função e a versão atualizada da função como alvos."
      },
      {
        "id": "C",
        "text": "Use o AWS CodeDeploy para criar uma implantação de deslocamento de tráfego linear"
      },
      {
        "id": "D",
        "text": "Crie uma tag para a função Lambda que contenha a versão de produção e a versão atualizada do código."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-507",
    "type": "single",
    "stem": "Um desenvolvedor implementou uma função do AWS Lambda que insere novos clientes em um banco de dados Amazon RDS. A função deve ser executada centenas de vezes por hora. A função e o banco de dados RDS estão na mesma VPC.",
    "ask": "A função está configurada para usar 512 MB de RAM e se baseia no seguinte pseudocódigo:Após testar a função várias vezes com sucesso, o desenvolvedor percebe que o tempo de execução é maior do que o esperado.O que o desenvolvedor deve fazer para melhorar o desempenho?",
    "options": [
      {
        "id": "A",
        "text": "Aumente a simultaneidade reservada da função Lambda."
      },
      {
        "id": "B",
        "text": "Aumentar o tamanho do banco de dados RDS para facilitar um número maior de conexões de banco de dados a cada hora."
      },
      {
        "id": "C",
        "text": "Mova a conexão com o banco de dados e feche a instrução para fora do manipulador. Coloque a conexão no espaço global."
      },
      {
        "id": "D",
        "text": "Substitua o Amazon RDS pelo Amazon DynamoDB para implementar o controle sobre o número de gravações por segundo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-508",
    "type": "single",
    "stem": "Um desenvolvedor está solucionando problemas de permissões de um aplicativo que precisa fazer alterações em um banco de dados do Amazon RDS.",
    "ask": "O desenvolvedor tem acesso à função do IAM que o aplicativo está usando.Qual estrutura de comando o desenvolvedor deve usar para testar as permissões da função?",
    "options": [
      {
        "id": "A",
        "text": "aws sts assumem função"
      },
      {
        "id": "B",
        "text": "aws iam anexar-função-política"
      },
      {
        "id": "C",
        "text": "aws ssm currículo-sessão"
      },
      {
        "id": "D",
        "text": "aws rds adicionar-função-ao-cluster-de-banco-de-dados"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-509",
    "type": "single",
    "stem": "Uma empresa de jogos implantou um portal web no AWS Elastic Beanstalk. Às vezes, a empresa precisa implantar novas versões três ou quatro vezes por dia. A empresa precisa implantar novos recursos para todos os usuários o mais rápido possível.",
    "ask": "A solução deve minimizar o impacto no desempenho e maximizar a disponibilidade.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use uma política de implantação contínua para implantar em instâncias do Amazon EC2."
      },
      {
        "id": "B",
        "text": "Use uma política de implantação imutável para implantar em instâncias do Amazon EC2."
      },
      {
        "id": "C",
        "text": "Use uma política de implantação única para implantar em instâncias do Amazon EC2."
      },
      {
        "id": "D",
        "text": "Use a estratégia de implantação a-canary para implantar alterações em instâncias do Amazon EC2."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-510",
    "type": "single",
    "stem": "Uma função do AWS Lambda gera um arquivo JSON de 3 MB e o carrega diariamente em um bucket do Amazon S3.",
    "ask": "O arquivo contém informações confidenciais, portanto, o desenvolvedor deve garantir que ele esteja criptografado antes de carregá-lo no bucket.Qual das seguintes modificações o desenvolvedor deve fazer para garantir que os dados sejam criptografados antes de carregá-los no bucket?",
    "options": [
      {
        "id": "A",
        "text": "Use a chave padrão do AWS Key Management Service (AWS KMS) para o Amazon S3 no código da função Lambda."
      },
      {
        "id": "B",
        "text": "Use a chave gerenciada pelo S3 e chame a API GenerateDataKey para criptografar o arquivo."
      },
      {
        "id": "C",
        "text": "Use a API GenerateDataKey e, em seguida, use essa chave de dados para criptografar o arquivo no código da função Lambda."
      },
      {
        "id": "D",
        "text": "Use uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS) para o Amazon S3 no código da função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-511",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de mídia social. Um desenvolvedor está modificando uma função do AWS Lambda que atualiza um banco de dados com dados que rastreiam a atividade online de cada usuário. Um servidor de aplicativos web usa o AWS SDK para invocar a função do Lambda.O desenvolvedor testou o novo código do Lambda e está pronto para implantá-lo em produção.",
    "ask": "No entanto, o desenvolvedor deseja permitir que apenas uma pequena porcentagem das invocações do AWS SDK chame o novo código.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma versão do Lambda que tenha um valor de peso específico para a função Lambda atualizada."
      },
      {
        "id": "B",
        "text": "Crie um alias para a função Lambda. Configure um valor de peso específico para a versão atualizada."
      },
      {
        "id": "C",
        "text": "Crie um Balanceador de Carga de Aplicação. Especifique grupos-alvo ponderados para a função Lambda original e a função Lambda atualizada."
      },
      {
        "id": "D",
        "text": "Crie um balanceador de carga de rede. Especifique grupos-alvo ponderados para a função Lambda original e a função Lambda atualizada."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-512",
    "type": "single",
    "stem": "Um fluxo de entrega do Amazon Data Firehose está recebendo dados de clientes que contêm informações de identificação pessoal.",
    "ask": "Um desenvolvedor precisa remover identificadores de clientes baseados em padrões dos dados e armazenar os dados modificados em um bucket do Amazon S3.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implemente a transformação de dados do Firehose como uma função do AWS Lambda. Configure a função para remover os identificadores de clientes. Defina um bucket do Amazon S3 como destino do fluxo de entrega."
      },
      {
        "id": "B",
        "text": "Inicie uma instância do Amazon EC2. Defina a instância do EC2 como destino do fluxo de entrega. Execute uma aplicação na instância do EC2 para remover os identificadores do cliente. Armazene os dados transformados em um bucket do Amazon S3."
      },
      {
        "id": "C",
        "text": "Crie uma instância do Amazon OpenSearch Service. Defina a instância do OpenSearch Service como destino do fluxo de entrega. Use a função de busca e substituição para remover os identificadores de clientes. Exporte os dados para um bucket do Amazon S3."
      },
      {
        "id": "D",
        "text": "Crie um fluxo de trabalho do AWS Step Functions para remover os identificadores de clientes. Como última etapa do fluxo de trabalho, armazene os dados transformados em um bucket do Amazon S3. Defina o fluxo de trabalho como o destino do fluxo de entrega."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-513",
    "type": "single",
    "stem": "Um desenvolvedor está construindo uma aplicação web de três camadas que deve ser capaz de lidar com no mínimo 5.000 requisições por minuto.",
    "ask": "Os requisitos determinam que a camada web deve ser completamente sem estado, enquanto a aplicação mantém o estado da sessão para os usuários.Como os dados da sessão podem ser externalizados, mantendo a latência no valor MAIS BAIXO possível?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma instância do Amazon RDS e implemente o tratamento de sessão no nível do aplicativo para aproveitar um banco de dados dentro da instância do banco de dados RDS para armazenamento de dados de sessão."
      },
      {
        "id": "B",
        "text": "Implemente uma solução de sistema de arquivos compartilhado entre as instâncias subjacentes do Amazon EC2 e, em seguida, implemente o tratamento de sessão no nível do aplicativo para aproveitar o sistema de arquivos compartilhado para armazenamento de dados de sessão."
      },
      {
        "id": "C",
        "text": "Crie um cluster do Amazon ElastiCache (Memcached) e implemente o tratamento de sessão no nível do aplicativo para aproveitar o cluster para armazenamento de dados de sessão."
      },
      {
        "id": "D",
        "text": "Crie uma tabela do Amazon DynamoDB e implemente o tratamento de sessão no nível do aplicativo para aproveitar a tabela para armazenamento de dados de sessão."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-514",
    "type": "single",
    "stem": "Um desenvolvedor implantou uma função do AWS Lambda inscrita em um tópico do Amazon Simple Notification Service (Amazon SNS).",
    "ask": "O desenvolvedor deve implementar uma solução para adicionar um registro de cada invocação de função do Lambda a uma fila do Amazon Simple Queue Service (Amazon SQS).Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Configure a fila SQS como uma fila de mensagens mortas para a função Lambda."
      },
      {
        "id": "B",
        "text": "Crie um código que use o SDK da AWS para chamar a operação SendMessage do SQS e adicionar os detalhes da invocação à fila do SQS. Adicione o código ao final da função Lambda."
      },
      {
        "id": "C",
        "text": "Adicione dois destinos de invocação assíncrona à função Lambda: um destino para invocações bem-sucedidas e um destino para invocações com falha. Configure a fila SQS como destino para cada tipo. Crie um alarme do Amazon CloudWatch com base na métrica DestinationDeliveryFailures para capturar qualquer mensagem que não possa ser entregue."
      },
      {
        "id": "D",
        "text": "Adicione um único destino de invocação assíncrona à função Lambda para capturar invocações bem-sucedidas. Configure a fila SQS como destino. Crie um alarme do Amazon CloudWatch com base na métrica DestinationDeliveryFailures para capturar qualquer mensagem que não possa ser entregue."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-515",
    "type": "single",
    "stem": "Uma função do AWS Lambda que processa solicitações de aplicativos usa o mecanismo de registro padrão do Lambda para registrar o registro de data e hora, o tempo de processamento e o status das solicitações.Um desenvolvedor precisa criar métricas do Amazon CloudWatch com base nos registros.",
    "ask": "O desenvolvedor precisa gravar as métricas em um namespace de métricas personalizado do CloudWatch.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon CloudWatch Logs Insights para gerar métricas personalizadas a partir dos logs usando o formato de métrica incorporada (EMF) do CloudWatch."
      },
      {
        "id": "B",
        "text": "Use o Amazon CloudWatch RUM para gerar métricas personalizadas dos logs usando o formato de métrica incorporada (EMF) do CloudWatch."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudWatch Logs Insights para gerar métricas personalizadas dos logs usando o formato JSON."
      },
      {
        "id": "D",
        "text": "Use o formato de métrica incorporada (EMF) do CloudWatch para a estrutura das instruções de log para gerar métricas personalizadas do CloudWatch."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-516",
    "type": "single",
    "stem": "Um desenvolvedor precisa configurar uma função do AWS Lambda para fazer solicitações HTTP POST a um aplicativo interno. O aplicativo está na mesma conta da AWS que hospeda a função.",
    "ask": "O aplicativo interno é executado em instâncias do Amazon EC2 em uma sub-rede privada dentro de uma VPC.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure um endpoint da VPC para se conectar à sub-rede privada. Anexe o endpoint à função Lambda."
      },
      {
        "id": "B",
        "text": "Anexe a função Lambda à VPC e à sub-rede privada."
      },
      {
        "id": "C",
        "text": "Configure uma conexão VPN entre a função Lambda e a sub-rede privada. Conecte a VPN à função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a tabela de rotas da VPC para incluir o endereço IP da função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-517",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo que processa arquivos de áudio para diferentes departamentos. Quando os arquivos de áudio são salvos em um bucket do Amazon S3, uma função do AWS Lambda recebe uma notificação de evento e processa a entrada de áudio.Um desenvolvedor precisa atualizar a solução para que o aplicativo possa processar os arquivos de áudio de cada departamento de forma independente.",
    "ask": "O aplicativo deve publicar o local do arquivo de áudio de cada departamento na fila existente do Amazon Simple Queue Service (Amazon SQS) de cada departamento.Qual solução atenderá a esses requisitos sem alterações no código da função do Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Configure o bucket do S3 para enviar notificações de eventos para um tópico do Amazon Simple Notification Service (Amazon SNS). Inscreva a fila SQS de cada departamento no tópico do SNS. Configure políticas de filtro de assinatura."
      },
      {
        "id": "B",
        "text": "Atualize a função Lambda para gravar o local do arquivo em uma única fila SQS compartilhada. Configure a fila SQS compartilhada para enviar a referência do arquivo para a fila SQS de cada departamento."
      },
      {
        "id": "C",
        "text": "Atualize a função Lambda para enviar o local do arquivo para a fila SQS de cada departamento."
      },
      {
        "id": "D",
        "text": "Configure o bucket S3 para enviar notificações de eventos para a fila SQS de cada departamento."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-518",
    "type": "single",
    "stem": "Dois microsserviços em contêineres estão hospedados no Amazon EC2 ECS.",
    "ask": "O primeiro microsserviço lê uma instância do banco de dados Aurora do Amazon RDS e o segundo microsserviço lê uma tabela do Amazon DynamoDB.Como cada microsserviço pode receber os privilégios mínimos?",
    "options": [
      {
        "id": "A",
        "text": "Defina ECS_ENABLE_TASK_IAM_ROLE como falso na inicialização da instância EC2 no arquivo de configuração do agente ECS. Execute o primeiro microsserviço com uma função IAM para tarefas ECS com acesso somente leitura para o banco de dados Aurora. Execute o segundo microsserviço com uma função IAM para tarefas ECS com acesso somente leitura para o DynamoDB."
      },
      {
        "id": "B",
        "text": "Defina ECS_ENABLE_TASK_IAM ROLE como falso na inicialização da instância EC2 no arquivo de configuração do agente ECS. Conceda à função de perfil da instância acesso somente leitura ao banco de dados Aurora e ao DynamoDB."
      },
      {
        "id": "C",
        "text": "Defina ECS_ENABLE_TASK_IAM ROLE como verdadeiro na inicialização da instância EC2 no arquivo de configuração do agente ECS. Execute o primeiro microsserviço com uma função IAM para tarefas ECS com acesso somente leitura para o banco de dados Aurora. Execute o segundo microsserviço com uma função IAM para tarefas ECS com acesso somente leitura para o DynamoDB."
      },
      {
        "id": "D",
        "text": "Defina ECS_ENABLE_TASK_IAM_ROLE como verdadeiro na inicialização da instância EC2 no arquivo de configuração do agente ECS. Conceda à função de perfil da instância acesso somente leitura ao banco de dados Aurora e ao DynamoDB."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-519",
    "type": "single",
    "stem": "Um desenvolvedor está desenvolvendo um aplicativo móvel que permite aos usuários visualizar imagens de um bucket S3.",
    "ask": "Os usuários precisam conseguir fazer login com o login da Amazon e com as contas de mídia social compatíveis.Como o desenvolvedor pode fornecer essa funcionalidade de autenticação?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Cognito com federação de identidade da web."
      },
      {
        "id": "B",
        "text": "Use o Amazon Cognito com federação de identidade baseada em SAML."
      },
      {
        "id": "C",
        "text": "Use chaves de acesso do IAM e chaves secretas no código do aplicativo para permitir Get* no bucket S3."
      },
      {
        "id": "D",
        "text": "Use AWS STS AssumeRole no código do aplicativo e assuma uma função com permissões Get* no bucket S3."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-520",
    "type": "single",
    "stem": "Um aplicativo em execução em instâncias do Amazon EC2 armazena dados em um bucket do Amazon S3.",
    "ask": "Todos os dados devem ser criptografados em trânsito.Como um desenvolvedor pode garantir que todo o tráfego para o bucket do S3 seja criptografado?",
    "options": [
      {
        "id": "A",
        "text": "Instale certificados nas instâncias do EC2."
      },
      {
        "id": "B",
        "text": "Crie um endpoint VPC privado."
      },
      {
        "id": "C",
        "text": "Configure o bucket S3 com criptografia do lado do servidor com chaves de criptografia gerenciadas pelo AWS KMS (SSE-KMS)."
      },
      {
        "id": "D",
        "text": "Crie uma política de bucket S3 que negue tráfego quando o valor da chave de condição aws:SecureTransport for falso."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-521",
    "type": "single",
    "stem": "Uma empresa hospeda uma API REST do Amazon AP! Gateway que chama uma única função do AWS Lambda.",
    "ask": "A função raramente é invocada por vários clientes simultaneamente.O desempenho do código é ótimo, mas a empresa deseja otimizar o tempo de inicialização da função.O que um desenvolvedor pode fazer para otimizar a inicialização da função?",
    "options": [
      {
        "id": "A",
        "text": "Habilite o cache do API Gateway para a API REST."
      },
      {
        "id": "B",
        "text": "Configure a simultaneidade provisionada para a função Lambda."
      },
      {
        "id": "C",
        "text": "Use a integração do proxy Lambda para a API REST."
      },
      {
        "id": "D",
        "text": "Configure o AWS Global Accelerator para a função Lambda."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-522",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação de três camadas com um Application Load Balancer (ALB), instâncias do Amazon EC2 e Amazon RDS. Há um registro de alias no Amazon Route 53 que aponta para o ALB.",
    "ask": "Quando o desenvolvedor tenta acessar o ALB de um laptop, a solicitação expira.Quais logs o desenvolvedor deve investigar para verificar se a solicitação está chegando à rede AWS?",
    "options": [
      {
        "id": "A",
        "text": "Registros de fluxo de VPC"
      },
      {
        "id": "B",
        "text": "Registros da Rota 53 da Amazônia"
      },
      {
        "id": "C",
        "text": "Registros do agente do AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "Registros do agente Amazon CloudWatch"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-523",
    "type": "single",
    "stem": "Um desenvolvedor possui um aplicativo que utiliza o AWS Security Token Service (AWS STS). O aplicativo chama a operação da API AssumeRole do STS para fornecer credenciais de segurança temporárias a usuários confiáveis. O aplicativo chama o AWS STS no endpoint padrão do serviço: https://sts.amazonaws.com.O aplicativo está implantado em uma região da AWS na Ásia-Pacífico.",
    "ask": "O aplicativo está apresentando erros relacionados à latência intermitente ao chamar o AWS STS.O que o desenvolvedor deve fazer para resolver esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Atualize o aplicativo para usar a operação da API GetSessionToken."
      },
      {
        "id": "B",
        "text": "Atualize o aplicativo para usar a operação da API AssumeRoleWithSAML."
      },
      {
        "id": "C",
        "text": "Atualize o aplicativo para usar um ponto de extremidade STS regional que esteja mais próximo da implantação do aplicativo."
      },
      {
        "id": "D",
        "text": "Atualize o aplicativo para usar a operação da API AssumeRoleWithWebldentity. Mova o endpoint do STS para um endpoint global."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-524",
    "type": "single",
    "stem": "Uma empresa está lançando um aplicativo de compartilhamento de fotos na AWS. Os usuários usam o aplicativo para enviar imagens para um bucket do Amazon S3. Quando os usuários enviam imagens, uma função do AWS Lambda cria versões em miniatura das imagens e as armazena em outro bucket do S3.Durante o desenvolvimento, um desenvolvedor percebe que a função do Lambda leva mais de 2 minutos para concluir o processo de miniatura.",
    "ask": "A empresa precisa que todas as imagens sejam processadas em menos de 30 segundos.O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumente as CPUs virtuais (vCPUs) para que a função Lambda use 10 vCPUs."
      },
      {
        "id": "B",
        "text": "Altere o tipo de instância da função Lambda para usar m6a.4xlarge."
      },
      {
        "id": "C",
        "text": "Configure a função Lambda para aumentar a quantidade de memória."
      },
      {
        "id": "D",
        "text": "Configure o desempenho expansível para a função Lambda."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-525",
    "type": "multi",
    "pick": 2,
    "stem": "Uma equipe de desenvolvimento está projetando um aplicativo móvel que requer autenticação multifator.Quais etapas devem ser seguidas para atingir esse objetivo?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Cognito para criar um pool de usuários e criar usuários no pool de usuários."
      },
      {
        "id": "B",
        "text": "Envie códigos de texto de autenticação multifator aos usuários com a chamada da API de publicação do Amazon SNS no código do aplicativo."
      },
      {
        "id": "C",
        "text": "Habilite a autenticação multifator para o pool de usuários do Amazon Cognito."
      },
      {
        "id": "D",
        "text": "Use o AWS IAM para criar usuários do IAM."
      },
      {
        "id": "E",
        "text": "Habilite a autenticação multifator para os usuários criados no AWS IAM."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-526",
    "type": "multi",
    "pick": 2,
    "stem": "Um desenvolvedor está criando uma aplicação que processará mensagens de uma fila padrão do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "A aplicação precisa processar as mensagens em uma tarefa do Amazon Elastic Container Service (Amazon ECS).Quais ações resultarão no processamento MAIS econômico das mensagens?",
    "options": [
      {
        "id": "A",
        "text": "Use a pesquisa longa para consultar a fila em busca de novas mensagens."
      },
      {
        "id": "B",
        "text": "Use a pesquisa curta para consultar a fila em busca de novas mensagens."
      },
      {
        "id": "C",
        "text": "Use o processamento em lote de mensagens para recuperar mensagens da fila."
      },
      {
        "id": "D",
        "text": "Use o Amazon ElastiCache para armazenar em cache mensagens na fila."
      },
      {
        "id": "E",
        "text": "Use uma fila FIFO do SQS para gerenciar as mensagens."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "DVA-C02-527",
    "type": "single",
    "stem": "Um desenvolvedor está escrevendo uma aplicação no AWS Lambda.",
    "ask": "Para simplificar os testes e as implantações, o desenvolvedor precisa que a string de conexão do banco de dados seja facilmente alterada sem modificar o código do Lambda.Como esse requisito pode ser atendido?",
    "options": [
      {
        "id": "A",
        "text": "Armazene a string de conexão como um segredo no AWS Secrets Manager."
      },
      {
        "id": "B",
        "text": "Armazene a string de conexão em uma conta de usuário do IAM."
      },
      {
        "id": "C",
        "text": "Armazene a string de conexão no AWS KMS."
      },
      {
        "id": "D",
        "text": "Armazene a string de conexão como uma camada Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-528",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação de e-commerce que utiliza diversas funções do AWS Lambda.",
    "ask": "Cada função executa uma etapa específica no fluxo de trabalho de um pedido de cliente, como processamento de pedidos e gerenciamento de estoque.O desenvolvedor deve garantir que as funções do Lambda sejam executadas em uma ordem específica.Qual solução atenderá a esse requisito com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma fila do Amazon Simple Queue Service (Amazon SQS) para conter mensagens sobre cada etapa que uma função deve executar. Configure as funções Lambda para serem executadas sequencialmente com base na ordem das mensagens na fila do SQS."
      },
      {
        "id": "B",
        "text": "Configure um tópico do Amazon Simple Notification Service (Amazon SNS) para conter notificações sobre cada etapa que uma função deve executar. Assine as funções do Lambda ao tópico do SNS. Use filtros de assinatura com base na etapa que cada função deve executar."
      },
      {
        "id": "C",
        "text": "Configure uma máquina de estado do AWS Step Functions para invocar as funções do Lambda em uma ordem específica."
      },
      {
        "id": "D",
        "text": "Configure os agendamentos do Amazon EventBridge Scheduler para invocar as funções do Lambda em uma ordem específica."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-529",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo de processamento de imagens que inclui uma função do AWS Lambda. A função do Lambda move imagens de um serviço da AWS para outro para processamento.",
    "ask": "Para imagens maiores que 2 MB, a função do Lambda retorna o seguinte erro: \"Tempo limite da tarefa excedido após 3,01 segundos\".O desenvolvedor precisa resolver o erro sem modificar o código da função do Lambda.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumente o valor de tempo limite da função Lambda."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda para não mover imagens maiores que 2 MB."
      },
      {
        "id": "C",
        "text": "Solicite um aumento de cota de simultaneidade para a função Lambda."
      },
      {
        "id": "D",
        "text": "Configure a simultaneidade provisionada para a função Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-531",
    "type": "single",
    "stem": "Uma empresa possui uma aplicação executada em instâncias do Amazon EC2. A aplicação precisa utilizar sinalizadores de recursos dinâmicos que serão compartilhados com outras aplicações. A aplicação deve consultar, em intervalos regulares, novos valores de sinalizadores de recursos.",
    "ask": "Os valores devem ser armazenados em cache ao serem recuperados.Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os valores dos sinalizadores de recurso no AWS Secrets Manager. Configure um nó do Amazon ElastiCache para armazenar os valores em cache usando uma estratégia de carregamento lento na aplicação. Atualize a aplicação para consultar os valores em um intervalo do ElastiCache."
      },
      {
        "id": "B",
        "text": "Armazene os valores dos sinalizadores de recurso em uma tabela do Amazon DynamoDB. Configure o DynamoDB Accelerator (DAX) para armazenar os valores em cache usando uma estratégia de carregamento lento no aplicativo. Atualize o aplicativo para consultar os valores em um intervalo do DynamoDB."
      },
      {
        "id": "C",
        "text": "Armazene os valores dos sinalizadores de recurso no AWS AppConfig. Configure o Agente AWS AppConfig nas instâncias do EC2 para consultar os valores em um intervalo. Atualize o aplicativo para recuperar os valores do endpoint do host local do Agente AppConfig."
      },
      {
        "id": "D",
        "text": "Armazene os valores dos sinalizadores de recurso no AWS Systems Manager Parameter Store. Configure o aplicativo para consultar em um intervalo. Configure o aplicativo para usar o AWS SDK para recuperar os valores do Parameter Store e armazená-los na memória."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-532",
    "type": "single",
    "stem": "Uma equipe implanta um modelo do AWS CloudFormation para atualizar uma pilha que já incluía uma tabela do Amazon DynamoDB. No entanto, antes da implantação da atualização, a equipe alterou o nome da tabela do DynamoDB no modelo por engano.",
    "ask": "O atributo DeletionPolicy para todos os recursos tem o valor padrão.Qual será o resultado desse erro?",
    "options": [
      {
        "id": "A",
        "text": "O CloudFormation criará uma nova tabela e excluirá a tabela existente."
      },
      {
        "id": "B",
        "text": "O CloudFormation criará uma nova tabela e manterá a tabela existente."
      },
      {
        "id": "C",
        "text": "O CloudFormation substituirá a tabela existente e a renomeará."
      },
      {
        "id": "D",
        "text": "O CloudFormation manterá a tabela existente e não criará uma nova tabela."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-533",
    "type": "single",
    "stem": "Um desenvolvedor está implantando uma aplicação em um cluster do Amazon Elastic Container Service (Amazon ECS) que utiliza o AWS Fargate. O desenvolvedor está usando um contêiner Docker com uma imagem do Ubuntu.O desenvolvedor precisa implementar uma solução para armazenar dados da aplicação disponíveis em várias tarefas do ECS.",
    "ask": "Os dados da aplicação devem permanecer acessíveis após o encerramento do contêiner.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Anexe um volume do Amazon FSx for Windows File Server à definição do contêiner."
      },
      {
        "id": "B",
        "text": "Especifique o parâmetro DockerVolumeConfiguration na definição de tarefa do ECS para anexar um volume do Docker."
      },
      {
        "id": "C",
        "text": "Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS). Especifique os atributos mountPoints e efsVolumeConfiguration na definição da tarefa do ECS."
      },
      {
        "id": "D",
        "text": "Crie um volume do Amazon Elastic Block Store (Amazon EBS). Especifique a configuração do ponto de montagem na definição da tarefa do ECS."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-534",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma função do AWS Lambda que precisa de acesso à rede para recursos privados em uma VPC.Qual solução fornecerá esse acesso com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Anexe a função Lambda à VPC por meio de sub-redes privadas. Crie um grupo de segurança que permita o acesso de rede aos recursos privados. Associe o grupo de segurança à função Lambda."
      },
      {
        "id": "B",
        "text": "Configure a função Lambda para rotear o tráfego por meio de uma conexão VPN. Crie um grupo de segurança que permita o acesso à rede para os recursos privados. Associe o grupo de segurança à função Lambda."
      },
      {
        "id": "C",
        "text": "Configure uma conexão de endpoint da VPC para a função Lambda. Configure o endpoint da VPC para rotear o tráfego por meio de um gateway NAT."
      },
      {
        "id": "D",
        "text": "Configure um endpoint do AWS PrivateLink para os recursos privados. Configure a função Lambda para referenciar o endpoint do PrivateLink."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-535",
    "type": "single",
    "stem": "Um desenvolvedor precisa automatizar implantações para uma carga de trabalho sem servidor e baseada em eventos. Ele precisa criar modelos padronizados para definir a infraestrutura e testar a funcionalidade da carga de trabalho localmente antes da implantação.O desenvolvedor já utiliza um pipeline no AWS CodePipeline.",
    "ask": "O desenvolvedor precisa incorporar quaisquer outras alterações de infraestrutura ao pipeline existente.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo de Aplicativo Sem Servidor da AWS (AWS SAM). Configure os estágios do pipeline no CodePipeline para executar os comandos CLI do AWS SAM necessários para implantar a carga de trabalho sem servidor."
      },
      {
        "id": "B",
        "text": "Crie um modelo de fluxo de trabalho do AWS Step Functions com base na infraestrutura usando a Amazon States Language. Inicie a máquina de estados do Step Functions a partir do pipeline existente."
      },
      {
        "id": "C",
        "text": "Crie um modelo do AWS CloudFormation. Use o fluxo de trabalho de pipeline existente para criar um pipeline para as pilhas do AWS CloudFormation."
      },
      {
        "id": "D",
        "text": "Crie um modelo de aplicativo sem servidor da AWS (AWS SAM). Use um script automatizado para implantar a carga de trabalho sem servidor usando o comando de implantação da CLI do AWS SAM."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-536",
    "type": "single",
    "stem": "Um desenvolvedor está criando um aplicativo de negociação de ações. Ele precisa de uma solução que envie mensagens de texto aos usuários do aplicativo para confirmar a conclusão de uma negociação.A solução deve entregar as mensagens na ordem em que o usuário realiza negociações de ações.",
    "ask": "A solução não deve enviar mensagens duplicadas.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o aplicativo para publicar mensagens em um fluxo de entrega do Amazon Data Firehose. Configure o fluxo de entrega para ter como destino o número de celular de cada usuário informado na mensagem de confirmação da transação."
      },
      {
        "id": "B",
        "text": "Crie uma fila FIFO do Amazon Simple Queue Service (Amazon SQS). Use a chamada da API SendMessageIn para enviar as mensagens de confirmação de negociação para a fila. Use a API SendMessageOut para enviar as mensagens aos usuários usando as informações fornecidas na mensagem de confirmação de negociação."
      },
      {
        "id": "C",
        "text": "Configure um pipe no Amazon EventBridge Pipes. Conecte o aplicativo ao pipe como origem. Configure o pipe para usar o número de celular de cada usuário como destino. Configure o pipe para enviar eventos de entrada aos usuários."
      },
      {
        "id": "D",
        "text": "Crie um tópico FIFO do Amazon Simple Notification Service (SNS). Configure o aplicativo para usar o SDK da AWS para publicar notificações no tópico do SNS e enviar mensagens SMS aos usuários. Ma"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-537",
    "type": "single",
    "stem": "Um desenvolvedor está implantando uma nova função Node.js do AWS Lambda que não está conectada a uma VPC. A função Lambda precisa se conectar e consultar um banco de dados Amazon Aurora que não é acessível publicamente.",
    "ask": "O desenvolvedor espera picos imprevisíveis no tráfego do banco de dados.O que o desenvolvedor deve fazer para conceder à função Lambda acesso ao banco de dados?",
    "options": [
      {
        "id": "A",
        "text": "Configure a função Lambda para usar um proxy Amazon RDS."
      },
      {
        "id": "B",
        "text": "Configurar um gateway NAT. Conecte o gateway NAT à função Lambda."
      },
      {
        "id": "C",
        "text": "Habilite o acesso público no banco de dados Aurora. Configure um grupo de segurança no banco de dados para permitir acesso de saída para a porta do mecanismo do banco de dados."
      },
      {
        "id": "D",
        "text": "Habilite o acesso à VPC para a função Lambda. Anexe a função Lambda a um novo grupo de segurança que não tenha regras."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-538",
    "type": "single",
    "stem": "Uma empresa gera certificados SSL de um provedor terceirizado. A empresa importa os certificados para o AWS Certificate Manager (ACM) para uso com aplicações web públicas.Um desenvolvedor deve implementar uma solução para notificar a equipe de segurança da empresa 90 dias antes da expiração de um certificado importado. A empresa já configurou uma fila do Amazon Simple Queue Service (Amazon SQS).",
    "ask": "A empresa também configurou um tópico do Amazon Simple Notification Service (Amazon SNS) que tem o endereço de e-mail da equipe de segurança como assinante.Qual solução fornecerá à equipe de segurança a notificação necessária sobre os certificados?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma regra do Amazon EventBridge que especifique o tipo de evento \"Certificado ACM Aproximando-se da Expiração\". Defina o tópico do SNS como o destino da regra do EventBridge."
      },
      {
        "id": "B",
        "text": "Crie uma função do AWS Lambda para pesquisar todos os certificados com vencimento em 90 dias. Programe a função do Lambda para enviar o Nome de Recurso da Amazon (ARN) de cada certificado identificado em uma mensagem para a fila do SQS."
      },
      {
        "id": "C",
        "text": "Crie um fluxo de trabalho do AWS Step Functions que seja invocado pela notificação de expiração de cada certificado do AWS CloudTrail. Crie uma função do AWS Lambda para enviar o Nome de Recurso da Amazon (ARN) de cada certificado em uma mensagem para a fila do SQS."
      },
      {
        "id": "D",
        "text": "Configure o AWS Config com a regra gerenciada acm-certificate-expiration-check para execução a cada 24 horas. Crie uma regra do Amazon EventBridge que inclua um padrão de evento que especifique o tipo de detalhe \"Alteração de Conformidade das Regras de Configuração\" e a regra configurada. Defina o tópico do SNS como o destino da regra do EventBridge."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-539",
    "type": "single",
    "stem": "Uma empresa utiliza duas contas da AWS: produção e desenvolvimento. A empresa armazena dados em um bucket do Amazon S3 que está na conta de produção. Os dados são criptografados com uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). A empresa planeja copiar os dados para outro bucket do S3 que está na conta de desenvolvimento.Um desenvolvedor precisa usar uma chave do KMS para criptografar os dados no bucket do S3 que está na conta de desenvolvimento.",
    "ask": "A chave do KMS na conta de desenvolvimento deve ser acessível a partir da conta de produção.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Replique a chave KMS gerenciada pelo cliente da conta de produção para a conta de desenvolvimento. Especifique a conta de produção na política de chaves."
      },
      {
        "id": "B",
        "text": "Crie uma nova chave KMS gerenciada pelo cliente na conta de desenvolvimento. Especifique a conta de produção na política de chaves."
      },
      {
        "id": "C",
        "text": "Crie uma nova chave KMS gerenciada pela AWS para o Amazon S3 na conta de desenvolvimento. Especifique a conta de produção na política de chaves."
      },
      {
        "id": "D",
        "text": "Replique a chave KMS padrão gerenciada pela AWS para o Amazon S3 da conta de produção para a conta de desenvolvimento. Especifique a conta de produção na política de chaves."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-540",
    "type": "single",
    "stem": "Um desenvolvedor está usando o AWS CodeDeploy para iniciar uma aplicação em instâncias do Amazon EC2. A implantação da aplicação falha durante os testes.",
    "ask": "O desenvolvedor observa um código de erro IAM_ROLE_PERMISSIONS nos logs do Amazon CloudWatch.O que o desenvolvedor deve fazer para resolver o erro?",
    "options": [
      {
        "id": "A",
        "text": "Certifique-se de que o grupo de implantação esteja usando o nome de função correto para a função de serviço do CodeDeploy."
      },
      {
        "id": "B",
        "text": "Anexe a política AWSCodeDeployRoleECS à função de serviço CodeDeploy."
      },
      {
        "id": "C",
        "text": "Anexe a política AWSCodeDeployRole à função de serviço CodeDeploy."
      },
      {
        "id": "D",
        "text": "Certifique-se de que o agente CodeDeploy esteja instalado e em execução em todas as instâncias no grupo de implantação."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-541",
    "type": "single",
    "stem": "Uma empresa deseja enviar notificações aos clientes para anunciar uma promoção em seus produtos.",
    "ask": "A empresa precisa usar tópicos FIFO do Amazon Simple Notification Service (Amazon SNS).A empresa precisa analisar a taxa de envio de notificações e a latência com que os tópicos enviam notificações.Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS X-Ray. Habilite o rastreamento ativo para o Amazon SNS."
      },
      {
        "id": "B",
        "text": "Use a métrica NumberOfNotificationsFailed do Amazon CloudWatch."
      },
      {
        "id": "C",
        "text": "Use o AWS CloudTrail para registrar todas as chamadas de API do Amazon SNS."
      },
      {
        "id": "D",
        "text": "Use o Amazon GuardDuty. Habilite o monitoramento de tempo de execução."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-542",
    "type": "single",
    "stem": "Uma empresa de vigilância por vídeo baseada em nuvem está desenvolvendo um aplicativo que analisa arquivos de vídeo. Após a análise dos arquivos pelo aplicativo, a empresa pode descartá-los.A empresa armazena os arquivos em um bucket do Amazon S3. Os arquivos têm, em média, 1 GB de tamanho. Nenhum arquivo é maior que 2 GB. Uma função do AWS Lambda será executada uma vez para cada arquivo de vídeo processado.",
    "ask": "O processamento exige muita E/S, e o aplicativo precisa ler cada arquivo várias vezes.Qual solução atenderá a esses requisitos da maneira MAIS otimizada em termos de desempenho?",
    "options": [
      {
        "id": "A",
        "text": "Anexe um volume do Amazon Elastic Block Store (Amazon EBS) maior que 1 GB à função Lambda. Copie os arquivos do bucket do S3 para o volume do EBS."
      },
      {
        "id": "B",
        "text": "Conecte um Adaptador de Rede Elástica (ENA) à função Lambda. Use o ENA para ler os arquivos de vídeo do bucket S3."
      },
      {
        "id": "C",
        "text": "Aumente o tamanho do armazenamento temporário para 2 GB. Copie os arquivos do bucket S3 para o diretório /tmp da função Lambda."
      },
      {
        "id": "D",
        "text": "Configure o código da função Lambda para ler os arquivos de vídeo diretamente do bucket S3."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-543",
    "type": "single",
    "stem": "Uma empresa possui uma máquina de estados do AWS Step Functions chamada myStateMachine.",
    "ask": "A empresa configurou uma função de serviço para o Step Functions.O desenvolvedor deve garantir que somente a máquina de estados myStateMachine possa assumir a função de serviço.Qual instrução o desenvolvedor deve adicionar à política de confiança para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "code": "\"Condition\": {\n  \"ArnLike\": {\n    \"aws:SourceArn\": \"arn:aws:states:ap-south-1:111111111111:stateMachine:myStateMachine\"\n  }\n}"
      },
      {
        "id": "B",
        "code": "\"Condition\": {\n  \"ArnLike\": {\n    \"aws:SourceArn\": \"arn:aws:states:ap-south-1:*:stateMachine:myStateMachine\"\n  }\n}"
      },
      {
        "id": "C",
        "code": "\"Condition\": {\n  \"StringEquals\": {\n    \"aws:SourceAccount\": \"111111111111\"\n  }\n}"
      },
      {
        "id": "D",
        "code": "\"Condition\": {\n  \"StringNotEquals\": {\n    \"aws:SourceArn\": \"arn:aws:states:ap-south-1:111111111111:stateMachine:myStateMachine\"\n  }\n}"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-544",
    "type": "single",
    "stem": "Uma empresa armazena relatórios de crédito de clientes em um bucket do Amazon S3.",
    "ask": "Um serviço de análise usa solicitações GET padrão do Amazon S3 para acessar os relatórios.Um desenvolvedor deve implementar uma solução para remover informações de identificação pessoal (PII) dos relatórios antes que eles cheguem ao serviço de análise.Qual solução atenderá a esse requisito com a MAIOR eficiência operacional?",
    "options": [
      {
        "id": "A",
        "text": "Carregue os objetos S3 no Amazon Redshift usando um comando COPY. Implemente o mascaramento dinâmico de dados. Refatore o serviço de análise para ler do Amazon Redshift."
      },
      {
        "id": "B",
        "text": "Configure uma função S3 Object Lambda. Anexe a função a um Ponto de Acesso S3 Object Lambda. Programe a função para chamar uma API de redação de PII."
      },
      {
        "id": "C",
        "text": "Use o AWS Key Management Service (AWS KMS) para implementar a criptografia no bucket do S3. Recarregue todos os objetos S3 existentes. Conceda a permissão kms:Decrypt ao serviço de análise."
      },
      {
        "id": "D",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Implemente a proteção de dados das mensagens. Refatore o serviço de análise para publicar solicitações de acesso a dados no tópico do SNS."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-545",
    "type": "single",
    "stem": "Uma empresa está usando o AWS Serverless Application Model (AWS SAM) para desenvolver um aplicativo de mídia social. Um desenvolvedor precisa de uma maneira rápida de testar funções do AWS Lambda localmente usando payloads de eventos de teste.",
    "ask": "O desenvolvedor precisa que a estrutura desses payloads de eventos de teste corresponda aos eventos reais criados pelos serviços da AWS.Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Crie eventos de teste do Lambda compartilháveis. Use esses eventos de teste do Lambda para testes locais."
      },
      {
        "id": "B",
        "text": "Armazene localmente os payloads de eventos de teste criados manualmente. Use o comando sam local invoke com o caminho do arquivo para os payloads."
      },
      {
        "id": "C",
        "text": "Armazene os payloads de eventos de teste criados manualmente em um bucket do Amazon S3. Use o comando sam local invoke com o caminho S3 para os payloads."
      },
      {
        "id": "D",
        "text": "Use o comando sam local generate-event para criar cargas de teste para testes locais."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-546",
    "type": "single",
    "stem": "Um desenvolvedor está criando o mecanismo de autenticação para um novo aplicativo móvel.",
    "ask": "Os usuários precisam poder se cadastrar, fazer login e acessar recursos de backend seguros da AWS.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o AWS Identity and Access Management Access Analyzer para gerar políticas do IAM. Crie uma função do IAM. Anexe as políticas à função. Integre a função do IAM a um provedor de identidade usado pelo aplicativo móvel."
      },
      {
        "id": "B",
        "text": "Crie uma política do IAM que conceda acesso aos recursos de back-end. Crie uma função do IAM. Anexe a política à função. Crie um endpoint do Amazon API Gateway. Anexe a função ao endpoint. Integre o endpoint ao aplicativo móvel."
      },
      {
        "id": "C",
        "text": "Crie um pool de identidades do Amazon Cognito. Configure as permissões escolhendo uma função padrão do IAM para usuários autenticados ou convidados no pool de identidades. Associe o pool de identidades a um provedor de identidade. Integre o pool de identidades ao aplicativo móvel."
      },
      {
        "id": "D",
        "text": "Crie um pool de usuários do Amazon Cognito. Configure os requisitos de segurança escolhendo uma política de senha, requisitos de autenticação multifator (MFA) e opções de recuperação de conta de usuário. Crie um cliente de aplicativo. Integre o cliente de aplicativo ao aplicativo móvel."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-547",
    "type": "single",
    "stem": "Um desenvolvedor está projetando uma arquitetura orientada a eventos. Uma função do AWS Lambda que processa dados precisa enviar os dados processados para um subconjunto de quatro funções Lambda consumidoras.",
    "ask": "Os dados devem ser roteados com base no valor de um campo nos dados.Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma fila do Amazon Simple Queue Service (Amazon SQS) e um mapeamento de origem de eventos para cada função Lambda consumidora. Adicione lógica de roteamento de mensagens à função Lambda de processamento de dados."
      },
      {
        "id": "B",
        "text": "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Assine as quatro funções Lambda do consumidor ao tópico. Adicione lógica de filtragem de mensagens a cada função Lambda do consumidor. Assine a função Lambda de processamento de dados ao tópico do SNS."
      },
      {
        "id": "C",
        "text": "Crie um tópico e uma assinatura separados do Amazon Simple Notification Service (Amazon SNS) para cada função Lambda do consumidor. Adicione lógica de roteamento de mensagens à função Lambda de processamento de dados para publicar no tópico apropriado."
      },
      {
        "id": "D",
        "text": "Crie um único tópico do Amazon Simple Notification Service (Amazon SNS). Assine as quatro funções do consumidor do Lambda ao tópico. Adicione políticas de filtro de assinatura do SNS a cada assinatura. Configure a função do Lambda de processamento de dados para publicar no tópico."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-548",
    "type": "single",
    "stem": "Um desenvolvedor está criando um novo aplicativo que permitirá aos usuários enviar documentos para o Amazon S3.",
    "ask": "O conteúdo dos documentos não deve ser acessível a terceiros.Qual tipo de criptografia atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Criptografia do lado do cliente usando o cliente de criptografia S3 com uma chave de encapsulamento RSA bruta armazenada no dispositivo do usuário"
      },
      {
        "id": "B",
        "text": "Criptografia do lado do servidor com chaves gerenciadas S3 (SSE-S3)"
      },
      {
        "id": "C",
        "text": "Criptografia do lado do servidor com chaves AWS KMS (SSE-KMS)"
      },
      {
        "id": "D",
        "text": "Criptografia de camada dupla do lado do servidor com chaves AWS KMS (DSSE-KMS)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-549",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que consiste em diversas funções do AWS Lambda. As funções do Lambda se conectam a um único banco de dados Amazon RDS.O desenvolvedor precisa implementar uma solução para armazenar as credenciais do banco de dados com segurança.",
    "ask": "Quando as credenciais são atualizadas, as funções do Lambda devem ser capazes de usar as novas credenciais sem a necessidade de atualização de código ou configuração.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene as credenciais como um segredo no AWS Secrets Manager. Acesse o segredo em tempo de execução a partir das funções do Lambda."
      },
      {
        "id": "B",
        "text": "Armazene as credenciais como um segredo no AWS Secrets Manager. Acesse as credenciais em variáveis de ambiente usando os elementos containerDefinitions e valueFrom em referência ao valor do segredo."
      },
      {
        "id": "C",
        "text": "Armazene as credenciais como um parâmetro SecureString no AWS Systems Manager Parameter Store. Adicione um gatilho para passar as credenciais para as funções do Lambda quando elas forem executadas."
      },
      {
        "id": "D",
        "text": "Armazene as credenciais como um parâmetro SecureString no AWS Systems Manager Parameter Store. Adicione uma referência ao parâmetro em uma variável de ambiente nas funções do Lambda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-550",
    "type": "single",
    "stem": "Um desenvolvedor está criando uma aplicação que armazena dados sensíveis do usuário. A aplicação inclui uma distribuição do Amazon CloudFront e diversas funções do AWS Lambda que processam solicitações do usuário.As solicitações do usuário contêm mais de 20 campos de dados. Cada transação da aplicação contém dados sensíveis que devem ser criptografados.",
    "ask": "Apenas partes específicas da aplicação precisam ter a capacidade de descriptografar os dados.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Associe a distribuição do CloudFront a uma função do Lambda@Edge. Configure a função para executar criptografia assimétrica em nível de campo usando uma chave pública RSA definida pelo usuário, armazenada no AWS Key Management Service (AWS KMS)."
      },
      {
        "id": "B",
        "text": "Integre o AWS WAF ao CloudFront para proteger os dados confidenciais. Use uma função Lambda e chaves autogerenciadas para executar os processos de criptografia e descriptografia."
      },
      {
        "id": "C",
        "text": "Configure a distribuição do CloudFront para usar WebSockets, encaminhando todos os cabeçalhos de solicitação do visualizador para a origem. Crie uma chave AWS KMS assimétrica. Configure a distribuição do CloudFront para usar criptografia em nível de campo. Use a chave AWS KMS."
      },
      {
        "id": "D",
        "text": "Configure o comportamento do cache na distribuição do CloudFront para exigir HTTPS para comunicação entre os visualizadores e o CloudFront. Configure o GoudFront para exigir que os usuários acessem os arquivos usando URLs assinadas ou cookies assinados."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-551",
    "type": "single",
    "stem": "Uma aplicação inclui uma tabela do Amazon DynamoDB chamada orders. A tabela tem uma chave de partição primária de id e um índice secundário global (GSI) chamado accountIndex.",
    "ask": "O GSI tem uma chave de partição de accountId e uma chave de classificação de orderDateTime.Um desenvolvedor precisa criar uma função do AWS Lambda para recuperar os pedidos com accountId de 100.Qual solução atenderá a esse requisito usando a MENOR capacidade de leitura?",
    "options": [
      {
        "id": "A",
        "text": "Defina uma solicitação de API do DynamoDB para a ação GetItem com os seguintes parâmetros:"
      },
      {
        "id": "B",
        "text": "Defina uma solicitação de API do DynamoDB para a ação BatchGetItem com os seguintes parâmetros:"
      },
      {
        "id": "C",
        "text": "Defina uma solicitação de API do DynamoDB para a ação Scan com os seguintes parâmetros:"
      },
      {
        "id": "D",
        "text": "Defina uma solicitação de API do DynamoDB para a ação Consulta com os seguintes parâmetros:"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "DVA-C02-552",
    "type": "single",
    "stem": "Uma empresa armazena dados em um bucket do Amazon S3. Os dados são atualizados várias vezes ao dia a partir de um aplicativo executado em um servidor no data center local da empresa.A empresa habilita o Versionamento S3 no bucket do S3.",
    "ask": "Após algum tempo, a empresa observa várias versões dos mesmos objetos no bucket do S3.A empresa precisa que o bucket do S3 mantenha a versão atual de cada objeto e a versão imediatamente anterior à versão atual.Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma política de bucket do S3 para reter uma versão mais recente e não atual dos objetos."
      },
      {
        "id": "B",
        "text": "Configure uma regra do ciclo de vida do S3 para reter uma versão mais recente e não atual dos objetos."
      },
      {
        "id": "C",
        "text": "Habilite o Bloqueio de Objetos do S3. Configure uma política de Bloqueio de Objetos do S3 para manter uma versão mais recente e não atual dos objetos."
      },
      {
        "id": "D",
        "text": "Suspenda o controle de versão do S3. Modifique o código do aplicativo para verificar o número de versões do objeto antes de atualizá-lo."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-553",
    "type": "single",
    "stem": "Uma empresa está criando um novo recurso para um software existente. Antes de lançar uma nova versão completa do software, a empresa deseja testar o recurso.A empresa precisa coletar feedback sobre o recurso de um pequeno grupo de usuários enquanto a versão atual do software permanece implantada.",
    "ask": "Se o teste validar o recurso, a empresa precisa implantar a nova versão do software para todos os outros usuários simultaneamente.Qual estratégia de implantação atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implantação tudo de uma vez"
      },
      {
        "id": "B",
        "text": "Implantação Canary"
      },
      {
        "id": "C",
        "text": "Implantação no local"
      },
      {
        "id": "D",
        "text": "Implantação linear"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "DVA-C02-554",
    "type": "single",
    "stem": "Um desenvolvedor tem um aplicativo executado na Conta A da AWS. O aplicativo deve recuperar um segredo do AWS Secrets Manager criptografado por uma chave do AWS Key Management Service (AWS KMS) da Conta B da AWS. A função do aplicativo tem permissões para acessar o segredo na Conta B.O desenvolvedor deve adicionar uma instrução à política de chaves da chave KMS para permitir que a função na Conta A use a chave KMS na Conta B.",
    "ask": "As permissões devem conceder acesso com privilégios mínimos à função.Quais permissões atenderão a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "kms:Decrypt e kms:DescribeKey"
      },
      {
        "id": "B",
        "text": "secretsmanager:DescribeSecret e secretsmanager:GetSecretValue"
      },
      {
        "id": "C",
        "text": "kms:*"
      },
      {
        "id": "D",
        "text": "secretsmanager:*"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-555",
    "type": "single",
    "stem": "Um desenvolvedor criou várias funções do AWS Lambda que gravam dados em um único bucket do Amazon S3. O desenvolvedor configurou todas as funções do Lambda para enviar logs e métricas para o Amazon CloudWatch.O desenvolvedor recebe relatórios de que uma das funções do Lambda grava dados no bucket muito lentamente.",
    "ask": "O desenvolvedor precisa medir a latência entre a função do Lambda problemática e o bucket do S3.Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Habilite o AWS X-Ray na função Lambda. No mapa de rastreamento gerado, selecione a linha entre o Lambda e o Amazon S3."
      },
      {
        "id": "B",
        "text": "Consulte o arquivo de log da função Lambda no Amazon CloudWatch Logs Insights. Retorne a média do campo @duration descoberto automaticamente."
      },
      {
        "id": "C",
        "text": "Habilite o CloudWatch Lambda Insights na função. Visualize o gráfico de latência fornecido pelo CloudWatch Lambda Insights."
      },
      {
        "id": "D",
        "text": "Habilite o AWS X-Ray na função Lambda. Selecione Amazon S3 no gráfico de latência para visualizar o histograma de latência."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "DVA-C02-556",
    "type": "single",
    "stem": "Um desenvolvedor de uma empresa precisa ativar o Amazon CloudWatch Logs Insights para as funções do AWS Lambda de um aplicativo. A empresa usa um modelo do AWS Serverless Application Model (AWS SAM) para implantar o aplicativo.",
    "ask": "O modelo do SAM inclui um recurso lógico chamado CloudWatchLogGroup.Como o desenvolvedor deve modificar o modelo do SAM para ativar o CloudWatch Logs Insights para as funções do Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Adicione uma saída chamada CloudWatchinsightRule que contenha um valor do Nome de Recurso da Amazon (ARN) para o recurso CloudWatchLogGroup."
      },
      {
        "id": "B",
        "text": "Adicione um parâmetro chamado CloudWatchLogGroupNamePrefix que contenha um valor do nome do aplicativo. Referencie o novo parâmetro no recurso CloudWatchLogGroup."
      },
      {
        "id": "C",
        "text": "Para cada função do Lambda, adicione a camada para a extensão Lambda Insights e a política gerenciada pela AWS CloudWatchLambdaInsightsExecutionRolePolicy."
      },
      {
        "id": "D",
        "text": "Para cada função do Lambda, defina o Modo de rastreamento como Ativo e adicione a política gerenciada pela AWS CloudWatchLambdaInsightsExecutionRolePolicy."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "DVA-C02-557",
    "type": "single",
    "stem": "Um desenvolvedor está projetando um jogo que armazena dados em uma tabela do Amazon DynamoDB. A chave de partição da tabela é o país do jogador.",
    "ask": "Após um aumento repentino no número de jogadores em um país específico, o desenvolvedor percebe erros do tipo ProvisionedThroughputExceededException.O que o desenvolvedor deve fazer para resolver esses erros?",
    "options": [
      {
        "id": "A",
        "text": "Use leituras de tabela fortemente consistentes."
      },
      {
        "id": "B",
        "text": "Revise a chave primária para usar identificadores mais exclusivos."
      },
      {
        "id": "C",
        "text": "Use a paginação para reduzir o tamanho dos itens que as consultas retornam."
      },
      {
        "id": "D",
        "text": "Use a operação Scan para recuperar os dados."
      }
    ],
    "answer": [
      "B"
    ]
  }
],
};
