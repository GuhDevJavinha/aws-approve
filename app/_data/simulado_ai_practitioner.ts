import type { Simulado } from "@/types/simulado";

export const simuladoAiPractitioner: Simulado = {
  slug: "ai-practitioner",
  title: "AWS Certified AI Practitioner",
  examCode: "AIF-C01",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 90,
  passingScore: 70,
  questions: [
  {
    "id": "AIF-C01-1",
    "type": "single",
    "stem": "Uma empresa faz previsões trimestrais para decidir como otimizar as operações e atender à demanda esperada. A empresa utiliza modelos de ML para fazer essas previsões. Um profissional de IA está escrevendo um relatório sobre os modelos de ML treinados para fornecer transparência e explicabilidade às partes interessadas da empresa. O que o profissional de IA deve incluir no relatório para atender aos requisitos de transparência e explicabilidade?",
    "options": [
      {
        "id": "A",
        "text": "Código para treinamento de modelo"
      },
      {
        "id": "B",
        "text": "Gráficos de dependência parcial (PDPs)"
      },
      {
        "id": "C",
        "text": "Dados de amostra para treinamento"
      },
      {
        "id": "D",
        "text": "Tabelas de convergência de modelos"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-2",
    "type": "single",
    "stem": "Um escritório de advocacia deseja desenvolver uma aplicação de IA utilizando grandes modelos de linguagem (LLMs). A aplicação lerá documentos jurídicos e extrairá pontos-chave deles. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um sistema automático de reconhecimento de entidades nomeadas."
      },
      {
        "id": "B",
        "text": "Crie um mecanismo de recomendação."
      },
      {
        "id": "C",
        "text": "Desenvolva um chatbot de resumo."
      },
      {
        "id": "D",
        "text": "Desenvolver um sistema de tradução multilíngue."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-3",
    "type": "single",
    "stem": "Uma empresa deseja classificar genes humanos em 20 categorias com base em características genéticas. A empresa precisa de um algoritmo de ML para documentar como o mecanismo interno do modelo afeta o resultado. Qual algoritmo de ML atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Árvores de decisão"
      },
      {
        "id": "B",
        "text": "Regressão linear"
      },
      {
        "id": "C",
        "text": "Regressão logística"
      },
      {
        "id": "D",
        "text": "Redes neurais"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-4",
    "type": "single",
    "stem": "Uma empresa criou um modelo de classificação de imagens para prever doenças em plantas a partir de fotos de folhas. A empresa quer avaliar quantas imagens o modelo classificou corretamente. Qual métrica de avaliação a empresa deve usar para medir o desempenho do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação R-quadrado"
      },
      {
        "id": "B",
        "text": "Precisão"
      },
      {
        "id": "C",
        "text": "Erro quadrático médio (RMSE)"
      },
      {
        "id": "D",
        "text": "Taxa de aprendizagem"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-5",
    "type": "single",
    "stem": "Uma empresa está usando um modelo de linguagem de grande porte (LLM) pré-treinado para criar um chatbot para recomendações de produtos. A empresa precisa que os resultados do LLM sejam curtos e escritos em uma linguagem específica. Qual solução alinhará a qualidade da resposta do LLM com as expectativas da empresa?",
    "options": [
      {
        "id": "A",
        "text": "Ajuste o prompt."
      },
      {
        "id": "B",
        "text": "Escolha um LLM de tamanho diferente."
      },
      {
        "id": "C",
        "text": "Aumente a temperatura."
      },
      {
        "id": "D",
        "text": "Aumente o valor do Top K."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-6",
    "type": "single",
    "stem": "Uma empresa usa o Amazon SageMaker para seu pipeline de ML em um ambiente de produção. A empresa tem grandes tamanhos de dados de entrada de até 1 GB e tempos de processamento de até 1 hora. A empresa precisa de latência em tempo real. Qual opção de inferência do SageMaker atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Inferência em tempo real"
      },
      {
        "id": "B",
        "text": "Inferência sem servidor"
      },
      {
        "id": "C",
        "text": "Inferência assíncrona"
      },
      {
        "id": "D",
        "text": "Transformação em lote"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-7",
    "type": "single",
    "stem": "Uma empresa está usando modelos específicos de domínio. A empresa quer evitar a criação de novos modelos desde o início. Em vez disso, a empresa quer adaptar modelos pré- treinados para criar modelos para novas tarefas relacionadas. Qual estratégia de ML atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumentar o número de épocas."
      },
      {
        "id": "B",
        "text": "Use o aprendizado de transferência."
      },
      {
        "id": "C",
        "text": "Diminuir o número de épocas."
      },
      {
        "id": "D",
        "text": "Use o aprendizado não supervisionado."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-8",
    "type": "single",
    "stem": "Uma empresa está construindo uma solução para gerar imagens para óculos de proteção. A solução deve ter alta precisão e deve minimizar o risco de anotações incorretas. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Validação do Human-in-the-loop usando o Amazon SageMaker Ground Truth Plus"
      },
      {
        "id": "B",
        "text": "Aumento de dados usando uma base de conhecimento do Amazon Bedrock"
      },
      {
        "id": "C",
        "text": "Reconhecimento de imagem usando o Amazon Rekognition"
      },
      {
        "id": "D",
        "text": "Resumição de dados usando o Amazon QuickSight Q"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-9",
    "type": "single",
    "stem": "Uma empresa quer criar um chatbot usando um modelo de fundação (FM) no Amazon Bedrock. O FM precisa acessar dados criptografados armazenados em um bucket do Amazon S3. Os dados são criptografados com chaves gerenciadas do Amazon S3 (SSE-S3). O FM encontra uma falha ao tentar acessar os dados do bucket S3. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Certifique-se de que a função que o Amazon Bedrock assume tenha permissão para descriptografar dados com a chave de criptografia correta."
      },
      {
        "id": "B",
        "text": "Defina as permissões de acesso para os buckets do S3 para permitir o acesso público para habilitar o acesso pela Internet."
      },
      {
        "id": "C",
        "text": "Use técnicas de engenharia imediata para informar o modelo para procurar informações no Amazon S3."
      },
      {
        "id": "D",
        "text": "Certifique-se de que os dados do S3 não contenham informações sensíveis."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-10",
    "type": "single",
    "stem": "Uma empresa quer usar modelos de linguagem para criar um aplicativo para inferência em dispositivos de borda. A inferência deve ter a menor latência possível. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implante modelos de linguagem pequenos (SLMs) otimizados em dispositivos de borda."
      },
      {
        "id": "B",
        "text": "Implante modelos de linguagem grandes otimizados (LLMs) em dispositivos de borda."
      },
      {
        "id": "C",
        "text": "Incorpore uma API centralizada de pequeno modelo de linguagem (SLM) para comunicação assíncrona com dispositivos de borda."
      },
      {
        "id": "D",
        "text": "Incorporar um modelo de linguagem grande centralizada (LLM) para comunicação assíncrona com dispositivos de borda."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-11",
    "type": "single",
    "stem": "Uma empresa quer construir um modelo de ML usando o Amazon SageMaker. A empresa precisa compartilhar e gerenciar variáveis para o desenvolvimento de modelos em várias equipes. Qual recurso do SageMaker atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Loja de recursos do Amazon SageMaker."
      },
      {
        "id": "B",
        "text": "Baixar Amazon SageMaker Data Wrangler"
      },
      {
        "id": "C",
        "text": "Baixar Amazon SageMaker Clarify, versão:"
      },
      {
        "id": "D",
        "text": "Cartões do Amazon SageMaker"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-12",
    "type": "single",
    "stem": "Uma empresa deseja usar IA generativa para aumentar a produtividade dos desenvolvedores e o desenvolvimento de software. A empresa deseja usar o Amazon Q Developer. O que o Amazon Q Developer pode fazer para ajudar a empresa a atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie snippets de software, rastreamento de referência e rastreamento de licenças de código aberto."
      },
      {
        "id": "B",
        "text": "Execute um aplicativo sem provisionar ou gerenciar servidores."
      },
      {
        "id": "C",
        "text": "Habilite comandos de voz para codificação e forneça pesquisa em linguagem natural."
      },
      {
        "id": "D",
        "text": "Converta arquivos de áudio em documentos de texto usando modelos de ML."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-13",
    "type": "single",
    "stem": "Uma instituição financeira está usando o Amazon Bedrock para desenvolver uma aplicação de IA. A aplicação está hospedada em uma VPC. Para atender aos padrões de conformidade regulatória, a VPC não tem permissão para acessar nenhum tráfego de internet. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Link privado da AWS"
      },
      {
        "id": "B",
        "text": "Amazon Macie"
      },
      {
        "id": "C",
        "text": "Amazon CloudFront"
      },
      {
        "id": "D",
        "text": "Gateway de internet"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-14",
    "type": "single",
    "stem": "Uma empresa quer desenvolver um jogo educativo em que os usuários respondam a perguntas como: \"Um pote contém seis bolinhas vermelhas, quatro verdes e três amarelas. Qual é a probabilidade de escolher uma bolinha verde do pote?\" Qual solução atende a esses requisitos com MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Use o aprendizado supervisionado para criar um modelo de regressão que irá prever a probabilidade."
      },
      {
        "id": "B",
        "text": "Use o aprendizado por reforço para treinar um modelo para retornar a probabilidade."
      },
      {
        "id": "C",
        "text": "Use um código que calculará a probabilidade usando regras e cálculos simples."
      },
      {
        "id": "D",
        "text": "Use o aprendizado não supervisionado para criar um modelo que estimará a densidade de probabilidade"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-15",
    "type": "single",
    "stem": "Qual métrica mede a eficiência do tempo de execução dos modelos operacionais de IA?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação de satisfação do cliente (CSAT)"
      },
      {
        "id": "B",
        "text": "Tempo de treinamento para cada época"
      },
      {
        "id": "C",
        "text": "Tempo médio de resposta"
      },
      {
        "id": "D",
        "text": "Número de instâncias de treinamento"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-16",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de contact center e deseja obter insights das conversas com os clientes. A empresa deseja analisar e extrair informações importantes do áudio das chamadas dos clientes. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um chatbot conversacional usando o Amazon Lex."
      },
      {
        "id": "B",
        "text": "Transcreva gravações de chamadas usando o Amazon Transcribe."
      },
      {
        "id": "C",
        "text": "Extraia informações de gravações de chamadas usando o Amazon SageMaker Model Monitor."
      },
      {
        "id": "D",
        "text": "Crie rótulos de classificação usando o Amazon Comprehend."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-17",
    "type": "single",
    "stem": "Uma empresa possui petabytes de dados de clientes não rotulados para usar em uma campanha publicitária. A empresa deseja classificar seus clientes em níveis para anunciar e promover seus produtos. Qual metodologia a empresa deve usar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem supervisionada"
      },
      {
        "id": "B",
        "text": "Aprendizagem não supervisionada"
      },
      {
        "id": "C",
        "text": "Aprendizagem por reforço"
      },
      {
        "id": "D",
        "text": "Aprendizagem por reforço a partir do feedback humano (RLHF)"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-18",
    "type": "single",
    "stem": "Um profissional de IA deseja usar um modelo de base (FM) para projetar um aplicativo de busca. O aplicativo de busca deve lidar com consultas que contenham texto e imagens. Que tipo de FM o profissional de IA deve usar para impulsionar o aplicativo de pesquisa?",
    "options": [
      {
        "id": "A",
        "text": "Modelo de incorporação multimodal"
      },
      {
        "id": "B",
        "text": "Modelo de incorporação de texto"
      },
      {
        "id": "C",
        "text": "Modelo de geração multimodal"
      },
      {
        "id": "D",
        "text": "Modelo de geração de imagem"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-19",
    "type": "single",
    "stem": "Uma empresa utiliza um modelo de base (FM) da Amazon Bedrock para uma ferramenta de busca de IA. A empresa deseja aprimorar o modelo para torná-lo mais preciso usando os dados da empresa. Qual estratégia ajustará o modelo com sucesso?",
    "options": [
      {
        "id": "A",
        "text": "Forneça dados rotulados com o campo de prompt e o campo de conclusão."
      },
      {
        "id": "B",
        "text": "Prepare o conjunto de dados de treinamento criando um arquivo .txt que contenha várias linhas no formato .csv."
      },
      {
        "id": "C",
        "text": "Adquira throughput provisionado para o Amazon Bedrock."
      },
      {
        "id": "D",
        "text": "Treine o modelo em periódicos e livros didáticos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-20",
    "type": "single",
    "stem": "Uma empresa deseja usar IA para proteger seu aplicativo contra ameaças. A solução de IA precisa verificar se um endereço IP é de uma fonte suspeita. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um sistema de reconhecimento de fala."
      },
      {
        "id": "B",
        "text": "Crie um sistema de reconhecimento de entidades nomeadas com processamento de linguagem natural (PLN)."
      },
      {
        "id": "C",
        "text": "Desenvolver um sistema de detecção de anomalias."
      },
      {
        "id": "D",
        "text": "Crie um sistema de previsão de fraudes."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-21",
    "type": "single",
    "stem": "Qual recurso do Amazon OpenSearch Service dá às empresas a capacidade de criar aplicativos de banco de dados vetoriais?",
    "options": [
      {
        "id": "A",
        "text": "Integração com Amazon S3 para armazenamento de objetos"
      },
      {
        "id": "B",
        "text": "Suporte para indexação e consultas geoespaciais"
      },
      {
        "id": "C",
        "text": "Gerenciamento de índice escalável e capacidade de pesquisa do vizinho mais próximo"
      },
      {
        "id": "D",
        "text": "Capacidade de realizar análises em tempo real em dados de streaming"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-22",
    "type": "single",
    "stem": "Qual opção é um caso de uso para modelos de IA generativa?",
    "options": [
      {
        "id": "A",
        "text": "Melhorando a segurança da rede usando sistemas de detecção de intrusão"
      },
      {
        "id": "B",
        "text": "Criação de imagens fotorrealistas a partir de descrições de texto para marketing digital"
      },
      {
        "id": "C",
        "text": "Melhorando o desempenho do banco de dados usando indexação otimizada"
      },
      {
        "id": "D",
        "text": "Analisando dados financeiros para prever tendências do mercado de ações"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-23",
    "type": "single",
    "stem": "Uma empresa deseja desenvolver um aplicativo de IA generativa usando o Amazon Bedrock e precisa escolher um modelo de base (FM). A empresa quer saber quanta informação cabe em um prompt. Que consideração influenciará a decisão da empresa?",
    "options": [
      {
        "id": "A",
        "text": "Temperatura"
      },
      {
        "id": "B",
        "text": "Janela de contexto"
      },
      {
        "id": "C",
        "text": "Tamanho do lote"
      },
      {
        "id": "D",
        "text": "Tamanho do modelo"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-24",
    "type": "single",
    "stem": "Uma empresa quer criar um chatbot para ajudar os clientes. O chatbot ajudará a resolver problemas técnicos sem intervenção humana. A empresa escolheu um modelo de base (FM) para o chatbot. O chatbot precisa produzir respostas que estejam de acordo com o tom da empresa. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Defina um limite baixo para o número de tokens que o FM pode produzir."
      },
      {
        "id": "B",
        "text": "Use inferência em lote para processar respostas detalhadas."
      },
      {
        "id": "C",
        "text": "Experimente e refine o prompt até que o FM produza as respostas desejadas."
      },
      {
        "id": "D",
        "text": "Defina um número maior para o parâmetro de temperatura."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-25",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de linguagem de grande porte (LLM) no Amazon Bedrock para análise de sentimentos. A empresa deseja classificar o sentimento de trechos de texto como positivo ou negativo. Qual estratégia de engenharia rápida atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Forneça exemplos de passagens de texto com rótulos positivos ou negativos correspondentes no prompt, seguidos pela nova passagem de texto a ser classificada."
      },
      {
        "id": "B",
        "text": "Forneça uma explicação detalhada da análise de sentimentos e de como os LLMs funcionam no prompt."
      },
      {
        "id": "C",
        "text": "Forneça o novo trecho de texto a ser classificado sem nenhum contexto ou exemplo adicional."
      },
      {
        "id": "D",
        "text": "Forneça ao novo trecho de texto alguns exemplos de tarefas não relacionadas, como resumo de texto ou resposta a perguntas."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-26",
    "type": "single",
    "stem": "Uma empresa de segurança está usando o Amazon Bedrock para executar modelos de base (FMs). A empresa quer garantir que apenas usuários autorizados invoquem os modelos. A empresa precisa identificar quaisquer tentativas de acesso não autorizado para definir políticas e funções adequadas do AWS Identity and Access Management (IAM) para futuras iterações dos FMs. Qual serviço da AWS a empresa deve usar para identificar usuários não autorizados que estão tentando acessar o Amazon Bedrock?",
    "options": [
      {
        "id": "A",
        "text": "Gerente de Auditoria da AWS"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Detector de fraudes da Amazon"
      },
      {
        "id": "D",
        "text": "Consultor confiável da AWS"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-27",
    "type": "single",
    "stem": "Uma empresa desenvolveu um modelo de ML para classificação de imagens. A empresa deseja implantá-lo em produção para que um aplicativo web possa utilizá-lo. A empresa precisa implementar uma solução para hospedar o modelo e fornecer previsões sem gerenciar nenhuma infraestrutura subjacente. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon SageMaker Serverless Inference para implantar o modelo."
      },
      {
        "id": "B",
        "text": "Use o Amazon CloudFront para implantar o modelo."
      },
      {
        "id": "C",
        "text": "Use o Amazon API Gateway para hospedar o modelo e fornecer previsões."
      },
      {
        "id": "D",
        "text": "Use o AWS Batch para hospedar o modelo e fornecer previsões."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-28",
    "type": "single",
    "stem": "Uma empresa de IA avalia periodicamente seus sistemas e processos com a ajuda de fornecedores independentes de software (ISVs). A empresa precisa receber notificações por e-mail quando os relatórios de conformidade de um ISV estiverem disponíveis. Qual serviço da AWS a empresa pode usar para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Gerente de Auditoria da AWS"
      },
      {
        "id": "B",
        "text": "Artefato AWS"
      },
      {
        "id": "C",
        "text": "Consultor confiável da AWS"
      },
      {
        "id": "D",
        "text": "Troca de dados da AWS"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-29",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de linguagem de grande porte (LLM) para desenvolver um agente conversacional. A empresa precisa evitar que o LLM seja manipulado com técnicas comuns de engenharia de prompts para realizar ações indesejadas ou expor informações confidenciais. Que ação reduzirá esses riscos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo de prompt que ensine o LLM a detectar padrões de ataque."
      },
      {
        "id": "B",
        "text": "Aumente o parâmetro de temperatura nas solicitações de invocação ao LLM."
      },
      {
        "id": "C",
        "text": "Evite usar LLMs que não estejam listados no Amazon SageMaker."
      },
      {
        "id": "D",
        "text": "Diminua o número de tokens de entrada nas invocações do LLM."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-30",
    "type": "single",
    "stem": "Uma empresa está usando a Matriz de Escopo de Segurança de IA Generativa para avaliar as responsabilidades de segurança de suas soluções. A empresa identificou quatro escopos de soluções diferentes com base na matriz. Qual escopo de solução dá à empresa a MAIOR responsabilidade de segurança?",
    "options": [
      {
        "id": "A",
        "text": "Usando um aplicativo empresarial de terceiros que tenha recursos de IA generativa incorporados."
      },
      {
        "id": "B",
        "text": "Criação de um aplicativo usando um modelo de base de IA generativa (FM) de terceiros existente."
      },
      {
        "id": "C",
        "text": "Refinando um modelo de base de IA generativa (FM) de terceiros existente, ajustando o modelo usando dados específicos do negócio."
      },
      {
        "id": "D",
        "text": "Criar e treinar um modelo de IA generativo do zero usando dados específicos de propriedade do cliente."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-31",
    "type": "single",
    "stem": "Um profissional de IA possui um banco de dados de fotos de animais. Ele deseja identificar e categorizar automaticamente os animais nas fotos, sem esforço humano manual. Qual estratégia atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Detecção de objetos"
      },
      {
        "id": "B",
        "text": "Detecção de anomalias"
      },
      {
        "id": "C",
        "text": "Reconhecimento de entidade nomeada"
      },
      {
        "id": "D",
        "text": "Pintura interna"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-32",
    "type": "single",
    "stem": "Uma empresa deseja criar um aplicativo usando o Amazon Bedrock. A empresa tem um orçamento limitado e prefere flexibilidade sem compromisso de longo prazo. Qual modelo de preços do Amazon Bedrock atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Sob demanda"
      },
      {
        "id": "B",
        "text": "Personalização do modelo"
      },
      {
        "id": "C",
        "text": "Taxa de transferência provisionada"
      },
      {
        "id": "D",
        "text": "Instância Spot"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-33",
    "type": "single",
    "stem": "Qual serviço ou recurso da AWS pode ajudar uma equipe de desenvolvimento de IA a implantar e consumir rapidamente um modelo de base (FM) dentro da VPC da equipe?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Personalize"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "C",
        "text": "PartyRock, um playground de base rochosa na Amazônia"
      },
      {
        "id": "D",
        "text": "Pontos de extremidade do Amazon SageMaker"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-34",
    "type": "single",
    "stem": "Como as empresas podem usar grandes modelos de linguagem (LLMs) com segurança no Amazon Bedrock?",
    "options": [
      {
        "id": "A",
        "text": "Crie prompts claros e específicos. Configure funções e políticas do AWS Identity and Access Management (IAM) usando o acesso com privilégios mínimos."
      },
      {
        "id": "B",
        "text": "Habilite o AWS Audit Manager para trabalhos de avaliação automática de modelos."
      },
      {
        "id": "C",
        "text": "Habilite trabalhos de avaliação automática de modelos do Amazon Bedrock."
      },
      {
        "id": "D",
        "text": "Use o Amazon CloudWatch Logs para tornar os modelos explicáveis e monitorar vieses."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-35",
    "type": "single",
    "stem": "Uma empresa possui terabytes de dados em um banco de dados que pode usar para análises de negócios. A empresa deseja desenvolver um aplicativo baseado em IA que possa gerar uma consulta SQL a partir do texto fornecido pelos funcionários. Os funcionários têm pouca experiência com tecnologia. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Transformadores pré-treinados generativos (GPT)"
      },
      {
        "id": "B",
        "text": "Rede neural residual"
      },
      {
        "id": "C",
        "text": "Máquina de vetores de suporte"
      },
      {
        "id": "D",
        "text": "Rede de ondas"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-36",
    "type": "single",
    "stem": "Uma empresa criou um modelo de aprendizado profundo para detecção de objetos e implantou o modelo em produção. Qual processo de IA ocorre quando o modelo analisa uma nova imagem para identificar objetos?",
    "options": [
      {
        "id": "A",
        "text": "Treinamento"
      },
      {
        "id": "B",
        "text": "Inferência"
      },
      {
        "id": "C",
        "text": "Implantação do modelo"
      },
      {
        "id": "D",
        "text": "Correção de viés"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-37",
    "type": "single",
    "stem": "Um profissional de IA está construindo um modelo para gerar imagens de humanos em diversas profissões. O profissional de IA descobriu que os dados de entrada são tendenciosos e que atributos específicos afetam a geração da imagem e criam viés no modelo. Qual técnica resolverá o problema?",
    "options": [
      {
        "id": "A",
        "text": "Aumento de dados para classes desbalanceadas"
      },
      {
        "id": "B",
        "text": "Monitoramento de modelo para distribuição de classes"
      },
      {
        "id": "C",
        "text": "Geração Aumentada de Recuperação (RAG)"
      },
      {
        "id": "D",
        "text": "Detecção de marca d'água para imagens"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-38",
    "type": "single",
    "stem": "Uma empresa está implementando o modelo de base (FM) do Amazon Titan usando o Amazon Bedrock. A empresa precisa complementar o modelo usando dados relevantes de suas fontes de dados privadas. Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Use um FM diferente."
      },
      {
        "id": "B",
        "text": "Escolha um valor de temperatura mais baixo."
      },
      {
        "id": "C",
        "text": "Crie uma base de conhecimento do Amazon Bedrock."
      },
      {
        "id": "D",
        "text": "Habilitar registro de invocação de modelo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-39",
    "type": "single",
    "stem": "Uma empresa médica está personalizando um modelo de base (FM) para fins diagnósticos. A empresa precisa que o modelo seja transparente e explicável para atender aos requisitos regulatórios. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure a segurança e a conformidade usando o Amazon Inspector."
      },
      {
        "id": "B",
        "text": "Gere métricas, relatórios e exemplos simples usando o Amazon SageMaker Clarify."
      },
      {
        "id": "C",
        "text": "Criptografe e proteja os dados de treinamento usando o Amazon Macie."
      },
      {
        "id": "D",
        "text": "Reúna mais dados. Use o Amazon Rekognition para adicionar rótulos personalizados aos dados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-40",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa deseja implantar um chatbot conversacional para responder às perguntas dos clientes. O chatbot é baseado em um modelo aprimorado do Amazon SageMaker JumpStart. A aplicação deve estar em conformidade com diversas estruturas regulatórias. Quais capacidades a empresa pode demonstrar conformidade? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Pontos de extremidade de inferência de dimensionamento automático"
      },
      {
        "id": "B",
        "text": "Detecção de ameaças"
      },
      {
        "id": "C",
        "text": "Proteção de dados"
      },
      {
        "id": "D",
        "text": "Otimização de custos"
      },
      {
        "id": "E",
        "text": "Microsserviços fracamente acoplados"
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "AIF-C01-41",
    "type": "single",
    "stem": "Uma empresa está treinando um modelo de base (FM). A empresa deseja aumentar a precisão do modelo até um nível de aceitação específico. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Diminua o tamanho do lote."
      },
      {
        "id": "B",
        "text": "Aumentar as épocas."
      },
      {
        "id": "C",
        "text": "Diminua as épocas."
      },
      {
        "id": "D",
        "text": "Aumentar o parâmetro de temperatura."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-42",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um chatbot de resposta a perguntas com base em um modelo de linguagem de grande porte (LLM). A empresa deseja reduzir o número de ações que os funcionários do call center precisam realizar para responder às perguntas dos clientes. Qual objetivo de negócio a empresa deve usar para avaliar o efeito do chatbot LLM?",
    "options": [
      {
        "id": "A",
        "text": "Taxa de engajamento do site"
      },
      {
        "id": "B",
        "text": "Duração média da chamada"
      },
      {
        "id": "C",
        "text": "Responsabilidade social corporativa"
      },
      {
        "id": "D",
        "text": "Conformidade regulatória"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-43",
    "type": "single",
    "stem": "Qual funcionalidade o Amazon SageMaker Clarify fornece?",
    "options": [
      {
        "id": "A",
        "text": "Integra um fluxo de trabalho de geração aumentada de recuperação (RAG)"
      },
      {
        "id": "B",
        "text": "Monitora a qualidade dos modelos de ML em produção"
      },
      {
        "id": "C",
        "text": "Documenta detalhes críticos sobre modelos de ML"
      },
      {
        "id": "D",
        "text": "Identifica possíveis vieses durante a preparação dos dados"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-44",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um novo modelo para prever os preços de itens específicos. O modelo apresentou bom desempenho no conjunto de dados de treinamento. Quando a empresa implementou o modelo em produção, seu desempenho caiu significativamente. O que a empresa deve fazer para mitigar esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Reduza o volume de dados usados no treinamento."
      },
      {
        "id": "B",
        "text": "Adicione hiperparâmetros ao modelo."
      },
      {
        "id": "C",
        "text": "Aumente o volume de dados usados no treinamento."
      },
      {
        "id": "D",
        "text": "Aumente o tempo de treinamento do modelo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-45",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa de comércio eletrônico quer criar uma solução para determinar os sentimentos dos clientes com base em avaliações escritas de produtos feitas por clientes. Quais serviços da AWS atendem a esses requisitos? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon Lex"
      },
      {
        "id": "B",
        "text": "Amazon Comprehend"
      },
      {
        "id": "C",
        "text": "Amazon Polly"
      },
      {
        "id": "D",
        "text": "Base rochosa da Amazônia"
      },
      {
        "id": "E",
        "text": "Amazon Rekognition"
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "AIF-C01-46",
    "type": "single",
    "stem": "Uma empresa deseja usar modelos de linguagem de grande porte (LLMs) com o Amazon Bedrock para desenvolver uma interface de bate-papo para os manuais de produtos da empresa. Os manuais são armazenados como arquivos PDF. Qual solução atende a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Use a engenharia de prompts para adicionar um arquivo PDF como contexto ao prompt do usuário quando o prompt for enviado ao Amazon Bedrock."
      },
      {
        "id": "B",
        "text": "Use a engenharia de prompt para adicionar todos os arquivos PDF como contexto ao prompt do usuário quando o prompt for enviado ao Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Use todos os documentos PDF para ajustar um modelo com o Amazon Bedrock. Use o modelo ajustado para processar solicitações do usuário."
      },
      {
        "id": "D",
        "text": "Carregue documentos PDF para uma base de conhecimento da Amazon Bedrock. Use a base de conhecimento para fornecer contexto quando os usuários enviarem solicitações à Amazon Bedrock."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-47",
    "type": "single",
    "stem": "Uma empresa de mídia social deseja usar um modelo de linguagem de grande porte (LLM) para moderação de conteúdo. A empresa deseja avaliar os resultados do LLM em busca de viés e potencial discriminação contra grupos ou indivíduos específicos. Qual fonte de dados a empresa deve usar para avaliar os resultados do LLM com MENOR esforço administrativo?",
    "options": [
      {
        "id": "A",
        "text": "Conteúdo gerado pelo usuário"
      },
      {
        "id": "B",
        "text": "Registros de moderação"
      },
      {
        "id": "C",
        "text": "Diretrizes de moderação de conteúdo"
      },
      {
        "id": "D",
        "text": "Conjuntos de dados de referência"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-48",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de IA generativa pré-treinado para gerar conteúdo para suas campanhas de marketing. A empresa precisa garantir que o conteúdo gerado esteja alinhado com a voz e os requisitos de mensagem da marca. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Otimize a arquitetura e os hiperparâmetros do modelo para melhorar o desempenho geral do modelo."
      },
      {
        "id": "B",
        "text": "Aumente a complexidade do modelo adicionando mais camadas à arquitetura do modelo."
      },
      {
        "id": "C",
        "text": "Crie prompts eficazes que forneçam instruções claras e contexto para orientar a geração do modelo."
      },
      {
        "id": "D",
        "text": "Selecione um conjunto de dados grande e diversificado para pré-treinar um novo modelo generativo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-49",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa de empréstimos está desenvolvendo uma solução generativa baseada em IA para oferecer descontos a novos solicitantes com base em critérios comerciais específicos. A empresa deseja desenvolver e usar um modelo de IA de forma responsável para minimizar vieses que possam afetar negativamente alguns clientes. Que ações a empresa deve tomar para atender a esses requisitos? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Detectar desequilíbrios ou disparidades nos dados."
      },
      {
        "id": "B",
        "text": "Certifique-se de que o modelo seja executado com frequência."
      },
      {
        "id": "C",
        "text": "Avalie o comportamento do modelo para que a empresa possa fornecer transparência às partes interessadas."
      },
      {
        "id": "D",
        "text": "Utilize a técnica Recall-Oriented Understudy for Gisting Evaluation (ROUGE) para garantir que o modelo seja 100% preciso."
      },
      {
        "id": "E",
        "text": "Certifique-se de que o tempo de inferência do modelo esteja dentro dos limites aceitos."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "AIF-C01-50",
    "type": "single",
    "stem": "Uma empresa está usando um modelo base do Amazon Bedrock para resumir documentos para um caso de uso interno. A empresa treinou um modelo personalizado para melhorar a qualidade do resumo. Qual ação a empresa deve tomar para usar o modelo personalizado por meio do Amazon Bedrock?",
    "options": [
      {
        "id": "A",
        "text": "Adquira o throughput provisionado para o modelo personalizado."
      },
      {
        "id": "B",
        "text": "Implante o modelo personalizado em um endpoint do Amazon SageMaker para inferência em tempo real."
      },
      {
        "id": "C",
        "text": "Registre o modelo no Amazon SageMaker Model Registry."
      },
      {
        "id": "D",
        "text": "Conceda acesso ao modelo personalizado no Amazon Bedrock."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-51",
    "type": "single",
    "stem": "Uma empresa precisa escolher um modelo da Amazon Bedrock para usar internamente. A empresa deve identificar um modelo que gere respostas no estilo que seus funcionários preferem. O que a empresa deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Avalie os modelos usando conjuntos de dados de prompt integrados."
      },
      {
        "id": "B",
        "text": "Avalie os modelos usando uma força de trabalho humana e conjuntos de dados de prompts personalizados."
      },
      {
        "id": "C",
        "text": "Use tabelas de classificação de modelos públicos para identificar o modelo."
      },
      {
        "id": "D",
        "text": "Use as métricas de tempo de execução do modelo InvocationLatency no Amazon CloudWatch ao testar modelos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-52",
    "type": "single",
    "stem": "Um estudante universitário está copiando conteúdo de IA generativa para escrever redações. Que desafio da IA generativa responsável esse cenário representa?",
    "options": [
      {
        "id": "A",
        "text": "Toxicidade"
      },
      {
        "id": "B",
        "text": "Alucinações"
      },
      {
        "id": "C",
        "text": "Plágio"
      },
      {
        "id": "D",
        "text": "Privacidade"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-53",
    "type": "single",
    "stem": "Uma empresa precisa construir seu próprio modelo de linguagem de grande porte (LLM) com base apenas em seus dados privados. A empresa está preocupada com o impacto ambiental do processo de treinamento. Qual tipo de instância do Amazon EC2 tem MENOR efeito ambiental ao treinar LLMs?",
    "options": [
      {
        "id": "A",
        "text": "Série Amazon EC2 C"
      },
      {
        "id": "B",
        "text": "Série Amazon EC2 G"
      },
      {
        "id": "C",
        "text": "Série Amazon EC2 P"
      },
      {
        "id": "D",
        "text": "Série Amazon EC2 Trn"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-54",
    "type": "single",
    "stem": "Uma empresa deseja criar um aplicativo interativo para crianças que gere novas histórias baseadas em contos clássicos. A empresa deseja usar o Amazon Bedrock e precisa garantir que os resultados e os temas sejam apropriados para crianças. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Rekognition"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock playgrounds"
      },
      {
        "id": "C",
        "text": "Guardrails for Amazon Bedrock"
      },
      {
        "id": "D",
        "text": "Agents for Amazon Bedrock"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-55",
    "type": "single",
    "stem": "Uma empresa está criando um aplicativo que precisa gerar dados sintéticos baseados em dados existentes. Que tipo de modelo a empresa pode usar para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Rede adversária generativa (GAN)"
      },
      {
        "id": "B",
        "text": "XGBoost"
      },
      {
        "id": "C",
        "text": "Rede neural residual"
      },
      {
        "id": "D",
        "text": "Rede de ondas"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-56",
    "type": "single",
    "stem": "Uma empresa de dispositivos digitais deseja prever a demanda dos clientes por hardware de memória. A empresa não possui experiência em codificação nem conhecimento de algoritmos de ML e precisa desenvolver um modelo preditivo baseado em dados. A empresa precisa realizar análises de dados internos e externos. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Armazene os dados no Amazon S3. Crie modelos de ML e previsões de demanda usando algoritmos integrados do Amazon SageMaker que utilizam os dados do Amazon S3."
      },
      {
        "id": "B",
        "text": "Importe os dados para o Amazon SageMaker Data Wrangler. Crie modelos de ML e previsões de demanda usando algoritmos integrados do SageMaker."
      },
      {
        "id": "C",
        "text": "Importe os dados para o Amazon SageMaker Data Wrangler. Crie modelos de ML e previsões de demanda usando uma receita do Amazon Personalize Trending-Now."
      },
      {
        "id": "D",
        "text": "Importe os dados para o Amazon SageMaker Canvas. Crie modelos de ML e previsões de demanda selecionando os valores nos dados do SageMaker Canvas."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-57",
    "type": "single",
    "stem": "Uma empresa instalou uma câmera de segurança. A empresa utiliza um modelo de aprendizado de máquina para avaliar as imagens da câmera de segurança em busca de possíveis roubos. A empresa descobriu que o modelo sinaliza desproporcionalmente pessoas que pertencem a um grupo étnico específico. Que tipo de viés está afetando a saída do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Viés de medição"
      },
      {
        "id": "B",
        "text": "Viés de amostragem"
      },
      {
        "id": "C",
        "text": "Viés do observador"
      },
      {
        "id": "D",
        "text": "Viés de confirmação"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-58",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um chatbot de atendimento ao cliente. A empresa deseja que o chatbot aprimore suas respostas aprendendo com interações anteriores e recursos online. Qual estratégia de aprendizado de IA fornece essa capacidade de autoaperfeiçoamento?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem supervisionada com um conjunto de dados manualmente selecionado de respostas boas e ruins"
      },
      {
        "id": "B",
        "text": "Aprendizagem por reforço com recompensas por feedback positivo do cliente"
      },
      {
        "id": "C",
        "text": "Aprendizagem não supervisionada para encontrar grupos de consultas de clientes semelhantes"
      },
      {
        "id": "D",
        "text": "Aprendizagem supervisionada com um banco de dados de perguntas frequentes atualizado continuamente"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-59",
    "type": "single",
    "stem": "Um profissional de IA construiu um modelo de aprendizado profundo para classificar os tipos de materiais em imagens. Agora, ele quer medir o desempenho do modelo. Qual métrica ajudará o profissional de IA a avaliar o desempenho do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Matriz de confusão"
      },
      {
        "id": "B",
        "text": "Matriz de correlação"
      },
      {
        "id": "C",
        "text": "Pontuação R2"
      },
      {
        "id": "D",
        "text": "Erro quadrático médio (MSE)"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-60",
    "type": "single",
    "stem": "Uma empresa criou um chatbot que responde a perguntas em linguagem natural com imagens. A empresa quer garantir que o chatbot não retorne imagens inapropriadas ou indesejadas. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implementar APIs de moderação."
      },
      {
        "id": "B",
        "text": "Retreine o modelo com um conjunto de dados público geral."
      },
      {
        "id": "C",
        "text": "Executar validação do modelo."
      },
      {
        "id": "D",
        "text": "Automatize a integração do feedback do usuário."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-61",
    "type": "single",
    "stem": "Um profissional de IA está usando um modelo base do Amazon Bedrock para resumir conversas de sessão do departamento de atendimento ao cliente. O profissional de IA deseja armazenar logs de invocação para monitorar os dados de entrada e saída do modelo. Qual estratégia o profissional de IA deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Configure o AWS CloudTrail como o destino de logs para o modelo."
      },
      {
        "id": "B",
        "text": "Habilite o registro de invocação no Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Configure o AWS Audit Manager como o destino de logs para o modelo."
      },
      {
        "id": "D",
        "text": "Configure o registro de invocação de modelo no Amazon EventBridge."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-62",
    "type": "single",
    "stem": "Uma empresa está construindo um modelo de ML para analisar dados arquivados. A empresa precisa realizar inferências em grandes conjuntos de dados com vários GBs de tamanho. A empresa não precisa acessar as previsões do modelo imediatamente. Qual opção de inferência do Amazon SageMaker atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Transformação em lote"
      },
      {
        "id": "B",
        "text": "Inferência em tempo real"
      },
      {
        "id": "C",
        "text": "Inferência sem servidor"
      },
      {
        "id": "D",
        "text": "Inferência assíncrona"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-63",
    "type": "single",
    "stem": "Qual termo descreve as representações numéricas de objetos e conceitos do mundo real que os modelos de IA e processamento de linguagem natural (PLN) usam para melhorar a compreensão de informações textuais?",
    "options": [
      {
        "id": "A",
        "text": "Incorporações"
      },
      {
        "id": "B",
        "text": "Fichas"
      },
      {
        "id": "C",
        "text": "Modelos"
      },
      {
        "id": "D",
        "text": "Binários"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-64",
    "type": "single",
    "stem": "Uma empresa de pesquisa implementou um chatbot usando um modelo de base (FM) da Amazon Bedrock. O chatbot busca respostas para perguntas em um grande banco de dados de artigos de pesquisa. Após várias tentativas rápidas de engenharia, a empresa percebe que o FM está apresentando baixo desempenho devido aos termos científicos complexos nos artigos de pesquisa. Como a empresa pode melhorar o desempenho do chatbot?",
    "options": [
      {
        "id": "A",
        "text": "Use instruções de poucas frases para definir como o FM pode responder às perguntas."
      },
      {
        "id": "B",
        "text": "Use o ajuste fino de adaptação de domínio para adaptar o FM a termos científicos complexos."
      },
      {
        "id": "C",
        "text": "Alterar os parâmetros de inferência de FM."
      },
      {
        "id": "D",
        "text": "Limpe os dados do artigo de pesquisa para remover termos científicos complexos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-65",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de linguagem de grande porte (LLM) no Amazon Bedrock para análise de sentimentos. A empresa precisa do LLM para produzir respostas mais consistentes ao mesmo prompt de entrada. Qual ajuste em um parâmetro de inferência a empresa deve fazer para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Diminua o valor da temperatura."
      },
      {
        "id": "B",
        "text": "Aumentar o valor da temperatura."
      },
      {
        "id": "C",
        "text": "Diminua o comprimento dos tokens de saída."
      },
      {
        "id": "D",
        "text": "Aumentar o comprimento máximo de geração."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-66",
    "type": "single",
    "stem": "Uma empresa deseja desenvolver uma aplicação de modelo de linguagem grande (LLM) usando o Amazon Bedrock e dados de clientes enviados para o Amazon S3. A política de segurança da empresa determina que cada equipe pode acessar os dados apenas dos seus próprios clientes. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma função de serviço personalizada do Amazon Bedrock para cada equipe que tenha acesso somente aos dados do cliente da equipe."
      },
      {
        "id": "B",
        "text": "Crie uma função de serviço personalizada com acesso ao Amazon S3. Peça às equipes que especifiquem o nome do cliente em cada solicitação do Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Edite dados pessoais no Amazon S3. Atualize a política de bucket do S3 para permitir que a equipe acesse os dados do cliente."
      },
      {
        "id": "D",
        "text": "Crie uma função do Amazon Bedrock com acesso total ao Amazon S3. Crie funções do IAM para cada equipe que tenham acesso apenas às pastas de clientes de cada equipe."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-67",
    "type": "single",
    "stem": "Uma empresa médica implantou um modelo de detecção de doenças no Amazon Bedrock. Para cumprir as políticas de privacidade, a empresa deseja impedir que o modelo inclua informações pessoais de pacientes em suas respostas. A empresa também deseja receber notificações quando ocorrerem violações de política. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Macie para verificar a saída do modelo em busca de dados confidenciais e configurar alertas para possíveis violações."
      },
      {
        "id": "B",
        "text": "Configure o AWS CloudTrail para monitorar as respostas do modelo e criar alertas para qualquer informação pessoal detectada."
      },
      {
        "id": "C",
        "text": "Use o Guardrails para Amazon Bedrock para filtrar conteúdo. Configure alarmes do Amazon CloudWatch para notificação de violações de políticas."
      },
      {
        "id": "D",
        "text": "Implemente o Amazon SageMaker Model Monitor para detectar desvios de dados e receber alertas quando a qualidade do modelo diminuir."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-68",
    "type": "single",
    "stem": "Uma empresa analisa manualmente todos os currículos enviados em formato PDF. À medida que a empresa cresce, espera-se que o volume de currículos exceda sua capacidade de análise. A empresa precisa de um sistema automatizado para converter os currículos em PDF para o formato de texto simples para processamento adicional. Qual serviço da AWS atende a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Textract"
      },
      {
        "id": "B",
        "text": "Amazon Personalize"
      },
      {
        "id": "C",
        "text": "Amazon Lex"
      },
      {
        "id": "D",
        "text": "Amazon Transcrição"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-69",
    "type": "single",
    "stem": "Um provedor de educação está desenvolvendo um aplicativo de perguntas e respostas que utiliza um modelo de IA generativa para explicar conceitos complexos. O provedor de educação deseja alterar automaticamente o estilo da resposta do modelo, dependendo de quem está fazendo a pergunta. O provedor de educação informará ao modelo a faixa etária do usuário que fez a pergunta. Qual solução atende a esses requisitos com MENOR esforço de implementação?",
    "options": [
      {
        "id": "A",
        "text": "Ajuste o modelo usando dados de treinamento adicionais que sejam representativos das diversas faixas etárias que o aplicativo suportará."
      },
      {
        "id": "B",
        "text": "Adicione uma descrição de função ao contexto do prompt que instrua o modelo sobre a faixa etária que a resposta deve atingir."
      },
      {
        "id": "C",
        "text": "Use o raciocínio em cadeia de pensamento para deduzir o estilo e a complexidade corretos para uma resposta adequada para aquele usuário."
      },
      {
        "id": "D",
        "text": "Resuma o texto de resposta dependendo da idade do usuário para que usuários mais jovens recebam respostas mais curtas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-70",
    "type": "single",
    "stem": "Qual estratégia avalia a precisão de um modelo de fundação (FM) usado em tarefas de classificação de imagens?",
    "options": [
      {
        "id": "A",
        "text": "Calcule o custo total dos recursos utilizados pelo modelo."
      },
      {
        "id": "B",
        "text": "Meça a precisão do modelo em relação a um conjunto de dados de referência predefinido."
      },
      {
        "id": "C",
        "text": "Conte o número de camadas na rede neural."
      },
      {
        "id": "D",
        "text": "Avalie a precisão das cores das imagens processadas pelo modelo."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-71",
    "type": "multi",
    "pick": 2,
    "stem": "Um escritório de contabilidade deseja implementar um modelo de linguagem de grande porte (LLM) para automatizar o processamento de documentos. O escritório deve proceder com responsabilidade para evitar possíveis danos. O que a empresa deve fazer ao desenvolver e implantar o LLM? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Incluir métricas de justiça para avaliação do modelo."
      },
      {
        "id": "B",
        "text": "Ajuste o parâmetro de temperatura do modelo."
      },
      {
        "id": "C",
        "text": "Modifique os dados de treinamento para mitigar o viés."
      },
      {
        "id": "D",
        "text": "Evite overfitting nos dados de treinamento."
      },
      {
        "id": "E",
        "text": "Aplique técnicas de engenharia imediatas."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "AIF-C01-72",
    "type": "single",
    "stem": "Uma empresa está construindo um modelo de ML. A empresa coletou novos dados e os analisou criando uma matriz de correlação, calculando estatísticas e visualizando os dados. Em qual estágio do pipeline de ML a empresa está atualmente?",
    "options": [
      {
        "id": "A",
        "text": "Pré-processamento de dados"
      },
      {
        "id": "B",
        "text": "Engenharia de recursos"
      },
      {
        "id": "C",
        "text": "Análise exploratória de dados"
      },
      {
        "id": "D",
        "text": "Ajuste de hiperparâmetros"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-73",
    "type": "single",
    "stem": "Uma empresa possui documentos com algumas palavras faltando devido a um erro no banco de dados. A empresa deseja construir um modelo de ML que possa sugerir palavras em potencial para preencher o texto ausente. Que tipo de modelo atende a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Modelagem de tópicos"
      },
      {
        "id": "B",
        "text": "Modelos de agrupamento"
      },
      {
        "id": "C",
        "text": "Modelos de ML prescritivos"
      },
      {
        "id": "D",
        "text": "Modelos baseados em BERT"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-74",
    "type": "single",
    "stem": "Uma empresa quer exibir o total de vendas de seus produtos mais vendidos em vários locais de varejo nos últimos 12 meses. Qual solução da AWS a empresa deve usar para automatizar a geração de gráficos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Q no Amazon EC2"
      },
      {
        "id": "B",
        "text": "Desenvolvedor Amazon Q"
      },
      {
        "id": "C",
        "text": "Amazon Q no Amazon QuickSight"
      },
      {
        "id": "D",
        "text": "Amazon Q no chatbot da AWS"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-75",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um chatbot para melhorar a experiência do usuário. A empresa está usando um modelo de linguagem de grande porte (LLM) da Amazon Bedrock para detecção de intenções. A empresa deseja usar o aprendizado de poucas tentativas para melhorar a precisão da detecção de intenções. Quais dados adicionais a empresa precisa para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Pares de respostas do chatbot e intenções corretas do usuário"
      },
      {
        "id": "B",
        "text": "Pares de mensagens do usuário e respostas corretas do chatbot"
      },
      {
        "id": "C",
        "text": "Pares de mensagens do usuário e intenções corretas do usuário"
      },
      {
        "id": "D",
        "text": "Pares de intenções do usuário e respostas corretas do chatbot"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-76",
    "type": "single",
    "stem": "Uma empresa está usando prompts de poucos disparos em um modelo base hospedado na Amazon Bedrock. O modelo atualmente usa 10 exemplos no prompt. O modelo é invocado uma vez por dia e está apresentando bom desempenho. A empresa deseja reduzir o custo mensal. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Personalize o modelo usando o ajuste fino."
      },
      {
        "id": "B",
        "text": "Diminua o número de tokens no prompt."
      },
      {
        "id": "C",
        "text": "Aumente o número de tokens no prompt."
      },
      {
        "id": "D",
        "text": "Use taxa de transferência provisionada."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-77",
    "type": "single",
    "stem": "Um profissional de IA está usando um modelo de linguagem de grande porte (LLM) para criar conteúdo para campanhas de marketing. O conteúdo gerado parece plausível e factual, mas está incorreto. Qual problema o LLM está enfrentando?",
    "options": [
      {
        "id": "A",
        "text": "Vazamento de dados"
      },
      {
        "id": "B",
        "text": "Alucinação"
      },
      {
        "id": "C",
        "text": "Sobreajuste"
      },
      {
        "id": "D",
        "text": "Subajuste"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-78",
    "type": "single",
    "stem": "Um profissional de IA treinou um modelo personalizado no Amazon Bedrock usando um conjunto de dados de treinamento que contém dados confidenciais. O profissional de IA quer garantir que o modelo personalizado não gere respostas de inferência com base em dados confidenciais. Como o profissional de IA deve evitar respostas baseadas em dados confidenciais?",
    "options": [
      {
        "id": "A",
        "text": "Exclua o modelo personalizado. Remova os dados confidenciais do conjunto de dados de treinamento. Retreine o modelo personalizado."
      },
      {
        "id": "B",
        "text": "Mascare os dados confidenciais nas respostas de inferência usando o mascaramento dinâmico de dados."
      },
      {
        "id": "C",
        "text": "Criptografe os dados confidenciais nas respostas de inferência usando o Amazon SageMaker."
      },
      {
        "id": "D",
        "text": "Criptografe os dados confidenciais no modelo personalizado usando o AWS Key Management Service (AWS KMS)."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-79",
    "type": "single",
    "stem": "Uma empresa desenvolveu uma solução utilizando IA generativa. A solução utiliza modelos de linguagem de grande porte (LLMs) para traduzir manuais de treinamento do inglês para outros idiomas. A empresa deseja avaliar a precisão da solução examinando o texto gerado para os manuais. Qual estratégia de avaliação de modelo atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Estudante de Avaliação Bilíngue (BLEU)"
      },
      {
        "id": "B",
        "text": "Erro quadrático médio (RMSE)"
      },
      {
        "id": "C",
        "text": "Subestudo orientado à recordação para avaliação de conhecimento (ROUGE)"
      },
      {
        "id": "D",
        "text": "Pontuação da F1"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-80",
    "type": "single",
    "stem": "Um grande varejista recebe milhares de consultas de suporte ao cliente sobre produtos todos os dias. As consultas precisam ser processadas e respondidas rapidamente. A empresa deseja implementar Agentes para a Amazon Bedrock. Quais são os principais benefícios de usar agentes da Amazon Bedrock que podem ajudar este varejista?",
    "options": [
      {
        "id": "A",
        "text": "Geração de modelos de base personalizados (FMs) para prever as necessidades do cliente"
      },
      {
        "id": "B",
        "text": "Automação de tarefas repetitivas e orquestração de fluxos de trabalho complexos"
      },
      {
        "id": "C",
        "text": "Chamando automaticamente vários modelos de base (FMs) e consolidando os resultados"
      },
      {
        "id": "D",
        "text": "Seleção do modelo de fundação (FM) com base em critérios e métricas predefinidos"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-81",
    "type": "single",
    "stem": "Qual opção é um benefício do pré-treinamento contínuo ao ajustar um modelo de base (FM)?",
    "options": [
      {
        "id": "A",
        "text": "Ajuda a diminuir a complexidade do modelo"
      },
      {
        "id": "B",
        "text": "Melhora o desempenho do modelo ao longo do tempo"
      },
      {
        "id": "C",
        "text": "Diminui a necessidade de tempo de treinamento"
      },
      {
        "id": "D",
        "text": "Otimiza o tempo de inferência do modelo"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-82",
    "type": "single",
    "stem": "O que são tokens no contexto de modelos de IA generativos?",
    "options": [
      {
        "id": "A",
        "text": "Tokens são as unidades básicas de entrada e saída nas quais um modelo de IA generativa opera, representando palavras, subpalavras ou outras unidades linguísticas."
      },
      {
        "id": "B",
        "text": "Tokens são representações matemáticas de palavras ou conceitos usados em modelos de IA generativos."
      },
      {
        "id": "C",
        "text": "Os tokens são pesos pré-treinados de um modelo de IA generativo que são ajustados para tarefas específicas."
      },
      {
        "id": "D",
        "text": "Tokens são instruções ou prompts específicos fornecidos a um modelo de IA generativa para gerar saída."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-83",
    "type": "single",
    "stem": "Uma empresa deseja avaliar os custos associados ao uso de um modelo de linguagem de grande porte (LLM) para gerar inferências. A empresa deseja usar o Amazon Bedrock para desenvolver aplicativos de IA generativa. Qual fator determinará os custos de inferência?",
    "options": [
      {
        "id": "A",
        "text": "Número de tokens consumidos"
      },
      {
        "id": "B",
        "text": "Valor da temperatura"
      },
      {
        "id": "C",
        "text": "Quantidade de dados usados para treinar o LLM"
      },
      {
        "id": "D",
        "text": "Tempo total de treinamento"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-84",
    "type": "single",
    "stem": "Uma empresa está usando notebooks do Amazon SageMaker Studio para criar e treinar modelos de ML. A empresa armazena os dados em um bucket do Amazon S3. A empresa precisa gerenciar o fluxo de dados do Amazon S3 para os notebooks do SageMaker Studio. Qual solução atenderá a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Inspector para monitorar o SageMaker Studio."
      },
      {
        "id": "B",
        "text": "Use o Amazon Macie para monitorar o SageMaker Studio."
      },
      {
        "id": "C",
        "text": "Configure o SageMaker para usar uma VPC com um endpoint S3."
      },
      {
        "id": "D",
        "text": "Configure o SageMaker para usar o S3 Glacier Deep Archive."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-85",
    "type": "single",
    "stem": "Uma empresa possui um modelo de base (FM) personalizado usando o Amazon Bedrock para responder às consultas dos clientes sobre produtos. A empresa deseja validar as respostas do modelo a novos tipos de consultas. A empresa precisa carregar um novo conjunto de dados que o Amazon Bedrock possa usar para validação. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Loja de blocos elásticos da Amazon (Amazon EBS)"
      },
      {
        "id": "C",
        "text": "Sistema de arquivos elástico da Amazon (Amazon EFS)"
      },
      {
        "id": "D",
        "text": "AWS Snowcone"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-86",
    "type": "single",
    "stem": "Qual ataque de prompt expõe diretamente o comportamento configurado de um grande modelo de linguagem (LLM)?",
    "options": [
      {
        "id": "A",
        "text": "Mudanças de persona solicitadas"
      },
      {
        "id": "B",
        "text": "Explorando a simpatia e a confiança"
      },
      {
        "id": "C",
        "text": "Ignorando o modelo de prompt"
      },
      {
        "id": "D",
        "text": "Extraindo o modelo de prompt"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-87",
    "type": "single",
    "stem": "Uma empresa deseja usar o Amazon Bedrock. Ela precisa revisar quais aspectos de segurança são de sua responsabilidade ao usar o Amazon Bedrock. Por qual aspecto de segurança a empresa será responsável?",
    "options": [
      {
        "id": "A",
        "text": "Aplicação de patches e atualização das versões do Amazon Bedrock"
      },
      {
        "id": "B",
        "text": "Protegendo a infraestrutura que hospeda o Amazon Bedrock"
      },
      {
        "id": "C",
        "text": "Protegendo os dados da empresa em trânsito e em repouso"
      },
      {
        "id": "D",
        "text": "Provisionamento do Amazon Bedrock na rede da empresa"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-88",
    "type": "single",
    "stem": "Uma empresa de mídia social deseja usar um modelo de linguagem de grande porte (LLM) para resumir mensagens. A empresa escolheu alguns LLMs disponíveis no Amazon SageMaker JumpStart. A empresa deseja comparar a toxicidade dos resultados gerados por esses modelos. Qual estratégia dá à empresa a capacidade de avaliar os LLMs com MENOR sobrecarga operacional?",
    "options": [
      {
        "id": "A",
        "text": "Avaliação de crowdsourcing"
      },
      {
        "id": "B",
        "text": "Avaliação automática de modelos"
      },
      {
        "id": "C",
        "text": "Avaliação de modelos com trabalhadores humanos"
      },
      {
        "id": "D",
        "text": "Aprendizagem por reforço a partir do feedback humano (RLHF)"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-89",
    "type": "single",
    "stem": "Uma empresa está testando a segurança de um modelo de fundação (FM). Durante os testes, a empresa quer contornar os recursos de segurança e criar conteúdo prejudicial. De qual técnica de segurança isso é um exemplo?",
    "options": [
      {
        "id": "A",
        "text": "Fuzzing de dados de treinamento para encontrar vulnerabilidades"
      },
      {
        "id": "B",
        "text": "Negação de serviço (DoS)"
      },
      {
        "id": "C",
        "text": "Teste de penetração com autorização"
      },
      {
        "id": "D",
        "text": "Fuga de presos"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-90",
    "type": "single",
    "stem": "Uma empresa precisa usar o Amazon SageMaker para treinamento e inferência de modelos. A empresa deve cumprir os requisitos regulatórios para executar tarefas do SageMaker em um ambiente isolado e sem acesso à internet. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Execute o treinamento e a inferência do SageMaker usando o SageMaker Experiments."
      },
      {
        "id": "B",
        "text": "Execute o treinamento e a inferência do SageMaker usando isolamento de rede."
      },
      {
        "id": "C",
        "text": "Criptografe os dados em repouso usando criptografia para recursos geoespaciais do SageMaker."
      },
      {
        "id": "D",
        "text": "Associe funções apropriadas do AWS Identity and Access Management (IAM) aos trabalhos do SageMaker."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-91",
    "type": "single",
    "stem": "Uma equipe de pesquisa de ML desenvolve modelos de ML personalizados. Os artefatos do modelo são compartilhados com outras equipes para integração em produtos e serviços. A equipe de ML retém o código e os dados de treinamento do modelo. A equipe de ML deseja construir um mecanismo que a equipe de ML possa usar para auditar modelos. Qual solução a equipe de ML deve usar ao publicar os modelos de ML personalizados?",
    "options": [
      {
        "id": "A",
        "text": "Crie documentos com as informações relevantes. Armazene os documentos no Amazon S3."
      },
      {
        "id": "B",
        "text": "Use os AWS AI Service Cards para transparência e compreensão dos modelos."
      },
      {
        "id": "C",
        "text": "Crie cartões de modelo do Amazon SageMaker com usos pretendidos e detalhes de treinamento e inferência."
      },
      {
        "id": "D",
        "text": "Crie scripts de treinamento de modelo. Envie os scripts de treinamento de modelo para um repositório Git."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-92",
    "type": "single",
    "stem": "Uma empresa de software cria ferramentas para clientes. A empresa quer usar IA para aumentar a produtividade no desenvolvimento de software. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use um modelo de classificação binária para gerar revisões de código."
      },
      {
        "id": "B",
        "text": "Instale um software de recomendação de código nas ferramentas de desenvolvedor da empresa."
      },
      {
        "id": "C",
        "text": "Instale uma ferramenta de previsão de código para prever possíveis problemas de código."
      },
      {
        "id": "D",
        "text": "Use uma ferramenta de processamento de linguagem natural (PLN) para gerar código."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-93",
    "type": "single",
    "stem": "Uma loja de varejo quer prever a demanda de um produto específico para as próximas semanas usando o algoritmo de previsão Amazon SageMaker DeepAR. Que tipo de dados atenderão a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Dados de texto"
      },
      {
        "id": "B",
        "text": "Dados de imagem"
      },
      {
        "id": "C",
        "text": "Dados de séries temporais"
      },
      {
        "id": "D",
        "text": "Dados binários"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-94",
    "type": "single",
    "stem": "Um grande banco de varejo quer desenvolver um sistema de ML para ajudar a equipe de gerenciamento de risco a decidir sobre alocações de empréstimos para diferentes grupos demográficos. O que o banco deve fazer para desenvolver um modelo de ML imparcial?",
    "options": [
      {
        "id": "A",
        "text": "Reduza o tamanho do conjunto de dados de treinamento."
      },
      {
        "id": "B",
        "text": "Certifique-se de que as previsões do modelo de ML sejam consistentes com os resultados históricos."
      },
      {
        "id": "C",
        "text": "Crie um modelo de ML diferente para cada grupo demográfico."
      },
      {
        "id": "D",
        "text": "Meça o desequilíbrio de classes no conjunto de dados de treinamento. Adapte o processo de treinamento conforme necessário."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-95",
    "type": "single",
    "stem": "Qual técnica de prompt pode proteger contra ataques de injeção rápida?",
    "options": [
      {
        "id": "A",
        "text": "Incitação adversarial"
      },
      {
        "id": "B",
        "text": "Solicitação de tiro zero"
      },
      {
        "id": "C",
        "text": "Menor para maior solicitação"
      },
      {
        "id": "D",
        "text": "Indução de cadeia de pensamento"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-96",
    "type": "single",
    "stem": "Uma empresa aprimorou um modelo de linguagem de grande porte (LLM) para responder a perguntas de um help desk. A empresa deseja determinar se o ajuste fino melhorou a precisão do modelo. Qual métrica a empresa deve usar para a avaliação?",
    "options": [
      {
        "id": "A",
        "text": "Precisão"
      },
      {
        "id": "B",
        "text": "Tempo para o primeiro token"
      },
      {
        "id": "C",
        "text": "Pontuação da F1"
      },
      {
        "id": "D",
        "text": "Taxa de erro de palavras"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-97",
    "type": "single",
    "stem": "Uma empresa está usando o Retrieval Augmented Generation (RAG) com o Amazon Bedrock e o Stable Diffusion para gerar imagens de produtos com base em descrições de texto. Os resultados geralmente são aleatórios e carecem de detalhes específicos. A empresa deseja aumentar a especificidade das imagens geradas. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aumentar o número de etapas de geração."
      },
      {
        "id": "B",
        "text": "Use a opção de origem da máscara MASK_IMAGE_BLACK."
      },
      {
        "id": "C",
        "text": "Aumentar a escala de orientação livre de classificador (CFG)."
      },
      {
        "id": "D",
        "text": "Aumentar a força do prompt."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-98",
    "type": "single",
    "stem": "Uma empresa deseja implementar um chatbot baseado em modelo de linguagem de grande porte (LLM) para fornecer aos agentes de atendimento ao cliente respostas contextuais em tempo real às consultas dos clientes. A empresa utilizará suas políticas como base de conhecimento. Qual solução atenderá a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Retreine o LLM sobre os dados da política da empresa."
      },
      {
        "id": "B",
        "text": "Ajuste o LLM nos dados da política da empresa."
      },
      {
        "id": "C",
        "text": "Implemente a Geração Aumentada de Recuperação (RAG) para respostas em contexto."
      },
      {
        "id": "D",
        "text": "Use pré-treinamento e aumento de dados nos dados de políticas da empresa."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-99",
    "type": "single",
    "stem": "Uma empresa deseja criar uma nova solução usando o AWS Glue. A empresa tem pouca experiência em programação com o AWS Glue. Qual serviço da AWS pode ajudar a empresa a usar o AWS Glue?",
    "options": [
      {
        "id": "A",
        "text": "Desenvolvedor Amazon Q"
      },
      {
        "id": "B",
        "text": "Configuração da AWS"
      },
      {
        "id": "C",
        "text": "Amazon Personalize"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-100",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de ML para dispositivos móveis que usa a câmera de um celular para diagnosticar e tratar picadas de insetos. A empresa quer treinar um modelo de classificação de imagens usando um conjunto de dados diversificado de fotos de picadas de insetos de diferentes gêneros, etnias e localizações geográficas ao redor do mundo. Qual princípio de IA responsável a empresa demonstra neste cenário?",
    "options": [
      {
        "id": "A",
        "text": "Justiça"
      },
      {
        "id": "B",
        "text": "Explicabilidade"
      },
      {
        "id": "C",
        "text": "Governança"
      },
      {
        "id": "D",
        "text": "Transparência"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-101",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um modelo de ML para aprovação de empréstimos. A empresa precisa implementar uma solução para detectar vieses no modelo. A empresa também precisa ser capaz de explicar as previsões do modelo. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SageMaker Clarify"
      },
      {
        "id": "B",
        "text": "Gerenciador de dados do Amazon SageMaker"
      },
      {
        "id": "C",
        "text": "Cartões de modelo do Amazon SageMaker"
      },
      {
        "id": "D",
        "text": "Cartões de serviço de IA da AWS"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-102",
    "type": "single",
    "stem": "Uma empresa desenvolveu um modelo de sumarização de texto generativo utilizando o Amazon Bedrock. A empresa utilizará os recursos de avaliação automática de modelos do Amazon Bedrock. Qual métrica a empresa deve usar para avaliar a precisão do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação da Área Sob a Curva ROC (AUC)"
      },
      {
        "id": "B",
        "text": "Pontuação da F1"
      },
      {
        "id": "C",
        "text": "Pontuação BERTS"
      },
      {
        "id": "D",
        "text": "Pontuação de conhecimento do mundo real (RWK)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-103",
    "type": "single",
    "stem": "Um praticante de IA quer prever a classificação de flores com base no comprimento das pétalas, largura das pétalas, comprimento das sépalas e largura das sépalas. Qual algoritmo atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "K-vizinhos mais próximos (k-NN)"
      },
      {
        "id": "B",
        "text": "K-média"
      },
      {
        "id": "C",
        "text": "Média Móvel Integrada Autorregressiva (ARIMA)"
      },
      {
        "id": "D",
        "text": "Regressão linear"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-104",
    "type": "single",
    "stem": "Uma empresa está usando modelos personalizados no Amazon Bedrock para uma aplicação de IA generativa. A empresa deseja usar uma chave de criptografia gerenciada pela empresa para criptografar os artefatos de modelo criados pelas tarefas de personalização de modelo. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Serviço de gerenciamento de chaves da AWS (AWS KMS)"
      },
      {
        "id": "B",
        "text": "Inspetor da Amazon"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "Gerenciador de segredos da AWS"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-105",
    "type": "single",
    "stem": "Uma empresa deseja usar grandes modelos de linguagem (LLMs) para produzir código a partir de comentários de código em linguagem natural. Qual recurso do LLM atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Resumo de texto"
      },
      {
        "id": "B",
        "text": "Geração de texto"
      },
      {
        "id": "C",
        "text": "Completação de texto"
      },
      {
        "id": "D",
        "text": "Classificação de texto"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-106",
    "type": "single",
    "stem": "Uma empresa está lançando um aplicativo móvel que ajuda os usuários a aprender línguas estrangeiras. O aplicativo torna o texto mais coerente ao chamar um modelo de linguagem de grande porte (LLM). A empresa coletou um conjunto diversificado de dados de texto e o complementou com exemplos de versões mais legíveis. A empresa deseja que o resultado do LLM seja semelhante aos exemplos fornecidos. Qual métrica a empresa deve usar para avaliar se o LLM atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Valor da função de perda"
      },
      {
        "id": "B",
        "text": "Robustez semântica"
      },
      {
        "id": "C",
        "text": "Pontuação do Subestudo Orientado à Recordação para Avaliação de Conhecimento (ROUGE)"
      },
      {
        "id": "D",
        "text": "Latência da geração de texto"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-107",
    "type": "single",
    "stem": "Uma empresa percebe que seu modelo de base (FM) gera imagens não relacionadas aos prompts. A empresa deseja modificar as técnicas de prompt para reduzir o número de imagens não relacionadas. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use prompts de tiro zero."
      },
      {
        "id": "B",
        "text": "Use prompts negativos."
      },
      {
        "id": "C",
        "text": "Use dicas positivas."
      },
      {
        "id": "D",
        "text": "Use prompts ambíguos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-108",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de linguagem abrangente (LLM) para gerar descrições concisas e específicas de recursos para os produtos da empresa. Qual técnica de engenharia rápida atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um prompt que abranja todos os produtos. Edite as respostas para torná-las mais específicas, concisas e adaptadas a cada produto."
      },
      {
        "id": "B",
        "text": "Crie prompts para cada categoria de produto que destaquem os principais recursos. Inclua o formato de saída e o comprimento desejados para cada resposta do prompt."
      },
      {
        "id": "C",
        "text": "Inclua uma gama diversificada de recursos de produtos em cada prompt para gerar descrições criativas e exclusivas."
      },
      {
        "id": "D",
        "text": "Forneça instruções detalhadas e específicas do produto para garantir descrições precisas e personalizadas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-109",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um modelo de ML para prever a rotatividade de clientes. O modelo apresenta bom desempenho no conjunto de dados de treinamento, mas não prevê com precisão a rotatividade de novos dados. Qual solução resolverá esse problema?",
    "options": [
      {
        "id": "A",
        "text": "Diminua o parâmetro de regularização para aumentar a complexidade do modelo."
      },
      {
        "id": "B",
        "text": "Aumente o parâmetro de regularização para diminuir a complexidade do modelo."
      },
      {
        "id": "C",
        "text": "Adicione mais recursos aos dados de entrada."
      },
      {
        "id": "D",
        "text": "Treine o modelo para mais épocas."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-110",
    "type": "single",
    "stem": "Uma empresa está implementando agentes inteligentes para fornecer experiências de pesquisa conversacional aos seus clientes. A empresa precisa de um serviço de banco de dados que suporte o armazenamento e as consultas de embeddings de um modelo de IA generativo como vetores no banco de dados. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazona Atena"
      },
      {
        "id": "B",
        "text": "Amazon Aurora PostgreSQL"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon EMR"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-111",
    "type": "single",
    "stem": "Uma instituição financeira está desenvolvendo uma solução de IA para tomar decisões de aprovação de empréstimos usando um modelo de base (FM). Para fins de segurança e auditoria, a empresa precisa que as decisões da solução de IA sejam explicáveis. Qual fator se relaciona com a explicabilidade das decisões da solução de IA?",
    "options": [
      {
        "id": "A",
        "text": "Complexidade do modelo"
      },
      {
        "id": "B",
        "text": "Tempo de treinamento"
      },
      {
        "id": "C",
        "text": "Número de hiperparâmetros"
      },
      {
        "id": "D",
        "text": "Tempo de implantação"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-112",
    "type": "single",
    "stem": "Uma empresa farmacêutica quer analisar avaliações de usuários de novos medicamentos e fornecer uma visão geral concisa de cada medicamento. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Crie um modelo de previsão de séries temporais para analisar as avaliações de medicamentos usando o Amazon Personalize."
      },
      {
        "id": "B",
        "text": "Crie resumos de revisão de medicamentos usando modelos de linguagem grande (LLMs) do Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Crie um modelo de classificação que categorize os medicamentos em diferentes grupos usando o Amazon SageMaker."
      },
      {
        "id": "D",
        "text": "Crie resumos de revisão de medicamentos usando o Amazon Rekognition."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-113",
    "type": "single",
    "stem": "Uma empresa deseja criar um aplicativo de priorização de leads para que seus funcionários entrem em contato com clientes em potencial. O aplicativo deve permitir que os funcionários visualizem e ajustem os pesos atribuídos a diferentes variáveis no modelo com base no conhecimento e na experiência do setor. Qual tipo de modelo de ML atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Modelo de regressão logística"
      },
      {
        "id": "B",
        "text": "Modelo de aprendizagem profunda construído em componentes principais"
      },
      {
        "id": "C",
        "text": "Modelo de K-vizinhos mais próximos (k-NN)"
      },
      {
        "id": "D",
        "text": "Rede neural"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-115",
    "type": "single",
    "stem": "Qual estratégia determinará se um modelo de base (FM) atende efetivamente aos objetivos de negócios?",
    "options": [
      {
        "id": "A",
        "text": "Avalie o desempenho do modelo em conjuntos de dados de referência."
      },
      {
        "id": "B",
        "text": "Analise a arquitetura e os hiperparâmetros do modelo."
      },
      {
        "id": "C",
        "text": "Avalie o alinhamento do modelo com casos de uso específicos."
      },
      {
        "id": "D",
        "text": "Meça os recursos computacionais necessários para a implantação do modelo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-116",
    "type": "single",
    "stem": "Uma empresa precisa treinar um modelo de ML para classificar imagens de diferentes tipos de animais. A empresa possui um grande conjunto de dados de imagens rotuladas e não rotulará mais dados. Que tipo de aprendizado a empresa deve usar para treinar o modelo?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem supervisionada"
      },
      {
        "id": "B",
        "text": "Aprendizagem não supervisionada"
      },
      {
        "id": "C",
        "text": "Aprendizagem por reforço"
      },
      {
        "id": "D",
        "text": "Aprendizagem ativa"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-117",
    "type": "single",
    "stem": "Qual fase do ciclo de vida do ML determina a conformidade e os requisitos regulatórios?",
    "options": [
      {
        "id": "A",
        "text": "Engenharia de recursos"
      },
      {
        "id": "B",
        "text": "Treinamento de modelo"
      },
      {
        "id": "C",
        "text": "Coleta de dados"
      },
      {
        "id": "D",
        "text": "Identificação de objetivos de negócios"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-118",
    "type": "single",
    "stem": "Uma empresa de serviços alimentícios deseja desenvolver um modelo de ML para ajudar a reduzir o desperdício diário de alimentos e aumentar a receita de vendas. A empresa precisa aprimorar continuamente a precisão do modelo. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon SageMaker e itere com dados mais recentes."
      },
      {
        "id": "B",
        "text": "Use o Amazon Personalize e itere com dados históricos."
      },
      {
        "id": "C",
        "text": "Use o Amazon CloudWatch para analisar pedidos de clientes."
      },
      {
        "id": "D",
        "text": "Use o Amazon Rekognition para otimizar o modelo."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-119",
    "type": "single",
    "stem": "Uma empresa desenvolveu um modelo de ML para prever preços de venda de imóveis. A empresa deseja implementar o modelo para fazer previsões sem gerenciar servidores ou infraestrutura. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Implante o modelo em uma instância do Amazon EC2."
      },
      {
        "id": "B",
        "text": "Implante o modelo em um cluster do Amazon Elastic Kubernetes Service (Amazon EKS)."
      },
      {
        "id": "C",
        "text": "Implante o modelo usando o Amazon CloudFront com uma integração com o Amazon S3."
      },
      {
        "id": "D",
        "text": "Implante o modelo usando um endpoint do Amazon SageMaker."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-120",
    "type": "single",
    "stem": "Uma empresa quer desenvolver um aplicativo de IA para ajudar seus funcionários a verificar reivindicações de clientes em aberto, identificar detalhes de uma reivindicação específica e acessar documentos de uma reivindicação. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use agentes para Amazon Bedrock com Amazon Fraud Detector para criar o aplicativo."
      },
      {
        "id": "B",
        "text": "Use agentes para Amazon Bedrock com bases de conhecimento do Amazon Bedrock para criar o aplicativo."
      },
      {
        "id": "C",
        "text": "Use o Amazon Personalize com bases de conhecimento do Amazon Bedrock para criar o aplicativo."
      },
      {
        "id": "D",
        "text": "Use o Amazon SageMaker para criar o aplicativo treinando um novo modelo de ML."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-121",
    "type": "single",
    "stem": "Uma empresa de manufatura usa IA para inspecionar produtos e encontrar danos ou defeitos. Que tipo de aplicação de IA a empresa está usando?",
    "options": [
      {
        "id": "A",
        "text": "Sistema de recomendação"
      },
      {
        "id": "B",
        "text": "Processamento de linguagem natural (PLN)"
      },
      {
        "id": "C",
        "text": "Visão computacional"
      },
      {
        "id": "D",
        "text": "Processamento de imagem"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-122",
    "type": "single",
    "stem": "Uma empresa deseja criar um modelo de ML para prever a satisfação do cliente. A empresa precisa de um ajuste de modelo totalmente automatizado. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Personalize"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker"
      },
      {
        "id": "C",
        "text": "Amazona Atena"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-123",
    "type": "single",
    "stem": "Qual técnica uma empresa pode usar para reduzir o viés e a toxicidade em aplicações de IA generativa durante o ciclo de vida de ML pós-processamento?",
    "options": [
      {
        "id": "A",
        "text": "Humano no circuito"
      },
      {
        "id": "B",
        "text": "Aumento de dados"
      },
      {
        "id": "C",
        "text": "Engenharia de recursos"
      },
      {
        "id": "D",
        "text": "Treinamento Adversarial"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-124",
    "type": "single",
    "stem": "Um banco aprimorou um modelo de linguagem de grande porte (LLM) para agilizar o processo de aprovação de empréstimos. Durante uma auditoria externa do modelo, a empresa descobriu que ele estava aprovando empréstimos em um ritmo mais rápido para um grupo demográfico específico do que para outros grupos demográficos. Como o banco pode resolver esse problema da forma MAIS econômica possível?",
    "options": [
      {
        "id": "A",
        "text": "Inclua dados de treinamento mais diversos. Ajuste o modelo novamente usando os novos dados."
      },
      {
        "id": "B",
        "text": "Use a Geração Aumentada de Recuperação (RAG) com o modelo ajustado."
      },
      {
        "id": "C",
        "text": "Use as verificações do AWS Trusted Advisor para eliminar vieses."
      },
      {
        "id": "D",
        "text": "Pré-treine um novo LLM com dados de treinamento mais diversos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-126",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa precisa registrar todas as solicitações feitas à sua API Amazon Bedrock. A empresa deve manter os registros com segurança por 5 anos ao menor custo possível. Qual combinação de serviço da AWS e classe de armazenamento atende a esses requisitos? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "Gerente de Auditoria da AWS"
      },
      {
        "id": "D",
        "text": "Amazon S3 Intelligent-Tiering"
      },
      {
        "id": "E",
        "text": "Amazon S3 Padrão"
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "AIF-C01-127",
    "type": "single",
    "stem": "Uma empresa de comércio eletrônico deseja melhorar as recomendações de mecanismos de busca personalizando os resultados para cada usuário da plataforma de comércio eletrônico da empresa. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Personalize"
      },
      {
        "id": "B",
        "text": "Amazon Kendra"
      },
      {
        "id": "C",
        "text": "Reconhecimento da Amazon"
      },
      {
        "id": "D",
        "text": "Amazon Transcrição"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-128",
    "type": "single",
    "stem": "Um hospital está desenvolvendo um sistema de IA para auxiliar médicos no diagnóstico de doenças com base em registros de pacientes e imagens médicas. Para cumprir as normas, os dados sensíveis dos pacientes não devem sair do país onde estão localizados. Qual estratégia de governança de dados garantirá a conformidade e protegerá a privacidade do paciente?",
    "options": [
      {
        "id": "A",
        "text": "Residência de dados"
      },
      {
        "id": "B",
        "text": "Qualidade dos dados"
      },
      {
        "id": "C",
        "text": "Descoberta de dados"
      },
      {
        "id": "D",
        "text": "Enriquecimento de dados"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-129",
    "type": "single",
    "stem": "Uma empresa precisa monitorar o desempenho de seus sistemas de ML usando um serviço da AWS altamente escalável. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Consultor confiável da AWS"
      },
      {
        "id": "D",
        "text": "Configuração da AWS"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-130",
    "type": "single",
    "stem": "Um profissional de IA está desenvolvendo um prompt para um modelo do Amazon Titan. O modelo está hospedado no Amazon Bedrock. O profissional de IA está usando o modelo para resolver desafios de raciocínio numérico. O profissional de IA adiciona a seguinte frase ao final do prompt: \"Peça ao modelo para mostrar seu funcionamento, explicando seu raciocínio passo a passo.\" Qual técnica de engenharia rápida o profissional de IA está usando?",
    "options": [
      {
        "id": "A",
        "text": "Indução de cadeia de pensamento"
      },
      {
        "id": "B",
        "text": "Injeção rápida"
      },
      {
        "id": "C",
        "text": "Solicitação de poucos disparos"
      },
      {
        "id": "D",
        "text": "Modelo de prompt"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-131",
    "type": "single",
    "stem": "Qual serviço da AWS disponibiliza modelos de base (FMs) para ajudar os usuários a criar e dimensionar aplicativos de IA generativa?",
    "options": [
      {
        "id": "A",
        "text": "Desenvolvedor Amazon Q"
      },
      {
        "id": "B",
        "text": "Base rochosa da Amazônia"
      },
      {
        "id": "C",
        "text": "Amazon Kendra"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-132",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo móvel para usuários com deficiência visual. O aplicativo precisa ser capaz de ouvir o que os usuários dizem e fornecer respostas de voz. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use uma rede neural de aprendizado profundo para realizar o reconhecimento de fala."
      },
      {
        "id": "B",
        "text": "Crie modelos de ML para procurar padrões em dados numéricos."
      },
      {
        "id": "C",
        "text": "Use o resumo de IA generativa para gerar texto semelhante ao humano."
      },
      {
        "id": "D",
        "text": "Crie modelos personalizados para classificação e reconhecimento de imagens."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-133",
    "type": "single",
    "stem": "Uma empresa deseja aprimorar a qualidade da resposta para um modelo de linguagem de grande porte (LLM) para tarefas complexas de resolução de problemas. As tarefas exigem raciocínio detalhado e um processo de explicação passo a passo. Qual técnica de engenharia rápida atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Solicitação de poucos disparos"
      },
      {
        "id": "B",
        "text": "Solicitação de tiro zero"
      },
      {
        "id": "C",
        "text": "Indução de estímulo direcional"
      },
      {
        "id": "D",
        "text": "Indução de cadeia de pensamento"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-134",
    "type": "single",
    "stem": "Uma empresa deseja manter seu modelo de base (FM) relevante utilizando os dados mais recentes. A empresa deseja implementar uma estratégia de treinamento de modelo que inclua atualizações regulares do FM. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem em lote"
      },
      {
        "id": "B",
        "text": "Pré-treinamento contínuo"
      },
      {
        "id": "C",
        "text": "Treinamento estático"
      },
      {
        "id": "D",
        "text": "Treinamento latente"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-136",
    "type": "single",
    "stem": "Qual opção é uma característica das estruturas de governança de IA para construir confiança e implantar tecnologias de IA centradas no ser humano?",
    "options": [
      {
        "id": "A",
        "text": "Expandir iniciativas em todas as unidades de negócios para criar valor comercial de longo prazo"
      },
      {
        "id": "B",
        "text": "Garantir o alinhamento com os padrões de negócios, metas de receita e expectativas das partes interessadas"
      },
      {
        "id": "C",
        "text": "Superando desafios para impulsionar a transformação e o crescimento dos negócios"
      },
      {
        "id": "D",
        "text": "Desenvolver políticas e diretrizes para dados, transparência, IA responsável e conformidade"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-137",
    "type": "single",
    "stem": "Uma empresa de e-commerce está usando um chatbot de IA generativa para responder às consultas dos clientes. A empresa deseja mensurar o impacto financeiro do chatbot em suas operações. Qual métrica a empresa deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Número de consultas de clientes atendidas"
      },
      {
        "id": "B",
        "text": "Custo de treinamento de modelos de IA"
      },
      {
        "id": "C",
        "text": "Custo para cada conversa com o cliente"
      },
      {
        "id": "D",
        "text": "Tempo médio de processamento (AHT)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-138",
    "type": "single",
    "stem": "Uma empresa quer encontrar grupos para seus clientes com base na demografia e nos padrões de compra dos clientes. Qual algoritmo a empresa deve usar para atender a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "K-vizinhos mais próximos (k-NN)"
      },
      {
        "id": "B",
        "text": "K-means"
      },
      {
        "id": "C",
        "text": "Árvore de decisão"
      },
      {
        "id": "D",
        "text": "Máquina de vetores de suporte"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-139",
    "type": "single",
    "stem": "O grande modelo de linguagem (LLM) de uma empresa está tendo alucinações. Como a empresa pode diminuir as alucinações?",
    "options": [
      {
        "id": "A",
        "text": "Configure agentes para o Amazon Bedrock para supervisionar o treinamento do modelo."
      },
      {
        "id": "B",
        "text": "Use o pré-processamento de dados e remova quaisquer dados que causem alucinações."
      },
      {
        "id": "C",
        "text": "Diminua o parâmetro de inferência de temperatura para o modelo."
      },
      {
        "id": "D",
        "text": "Use um modelo de base (FM) treinado para não ter alucinações."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-140",
    "type": "single",
    "stem": "Uma empresa está usando um modelo de linguagem de grande porte (LLM) no Amazon Bedrock para criar um chatbot. O chatbot processa solicitações de suporte ao cliente. Para resolver uma solicitação, o cliente e o chatbot precisam interagir algumas vezes. Qual solução dá ao LLM a capacidade de usar conteúdo de mensagens anteriores de clientes?",
    "options": [
      {
        "id": "A",
        "text": "Ative o registro de invocação de modelo para coletar mensagens."
      },
      {
        "id": "B",
        "text": "Adicione mensagens ao prompt do modelo."
      },
      {
        "id": "C",
        "text": "Use o Amazon Personalize para salvar o histórico de conversas."
      },
      {
        "id": "D",
        "text": "Use a taxa de transferência provisionada para o LLM."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-141",
    "type": "single",
    "stem": "Os funcionários de uma empresa fornecem descrições de produtos e recomendações aos clientes quando estes ligam para a central de atendimento. Essas recomendações são baseadas na localização dos clientes. A empresa deseja usar modelos de base (FMs) para automatizar esse processo. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "Amazon Transcrição"
      },
      {
        "id": "C",
        "text": "Base rochosa da Amazônia"
      },
      {
        "id": "D",
        "text": "Amazon Textract"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-142",
    "type": "single",
    "stem": "Uma empresa deseja enviar e-mails de atendimento ao cliente para o Amazon S3 para desenvolver um aplicativo de análise de negócios. Às vezes, as mensagens contêm dados confidenciais. A empresa deseja receber um alerta sempre que informações confidenciais forem encontradas. Qual solução automatiza totalmente o processo de detecção de informações confidenciais com MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Configure o Amazon Macie para detectar informações confidenciais nos documentos enviados ao Amazon S3."
      },
      {
        "id": "B",
        "text": "Use os endpoints do Amazon SageMaker para implantar um modelo de linguagem grande (LLM) para redigir dados confidenciais."
      },
      {
        "id": "C",
        "text": "Desenvolva vários padrões regex para detectar dados confidenciais. Exponha os padrões regex em um notebook do Amazon SageMaker."
      },
      {
        "id": "D",
        "text": "Peça aos clientes que evitem compartilhar informações confidenciais em suas mensagens de e-mail."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-143",
    "stem": "Uma empresa está treinando seus funcionários sobre como estruturar prompts para modelos de base. Selecione a técnica de engenharia de prompt correta na lista a seguir para cada modelo de prompt. Cada técnica de engenharia de prompt deve ser selecionada uma vez.",
    "type": "match",
    "pool": [
      "Chain-of-thought (cadeia de raciocínio)",
      "Few-shot",
      "Zero-shot"
    ],
    "prompts": [
      {
        "t": "\"Classifique o texto a seguir como esportes, política ou entretenimento: [texto de entrada].\"",
        "a": 2
      },
      {
        "t": "\"[imagem 1], [imagem 2] e [imagem 3] são exemplos de [classe alvo]. Classifique a imagem a seguir como [classe alvo].\"",
        "a": 1
      },
      {
        "t": "\"[Pergunta.] [Instruções a seguir.] Pense passo a passo e me explique seu raciocínio.\"",
        "a": 0
      }
    ]
  },
  {
    "id": "AIF-C01-144",
    "stem": "Uma empresa está usando um modelo de IA generativa para desenvolver um assistente digital. As respostas do modelo ocasionalmente incluem conteúdo indesejado e potencialmente prejudicial. Selecione a política de filtro correta do Amazon Bedrock na lista a seguir para cada ação de mitigação. Cada política de filtro deve ser selecionada uma vez.",
    "type": "match",
    "pool": [
      "Filtros de conteúdo",
      "Verificação de fundamentação contextual",
      "Tópicos negados",
      "Filtros de palavras"
    ],
    "prompts": [
      {
        "t": "Bloquear prompts de entrada ou respostas do modelo com conteúdo nocivo, como ódio, insultos, violência ou má conduta.",
        "a": 0
      },
      {
        "t": "Evitar assuntos relacionados a aconselhamento de investimentos ilegais ou aconselhamento jurídico.",
        "a": 2
      },
      {
        "t": "Detectar e bloquear termos ofensivos específicos.",
        "a": 3
      },
      {
        "t": "Detectar e filtrar informações nas respostas do modelo que não estejam fundamentadas na fonte fornecida.",
        "a": 1
      }
    ]
  },
  {
    "id": "AIF-C01-145",
    "type": "single",
    "stem": "Qual opção é um benefício de usar os cartões de modelo do Amazon SageMaker para documentar modelos de IA?",
    "options": [
      {
        "id": "A",
        "text": "Fornecer um resumo visualmente atraente dos recursos de um modo."
      },
      {
        "id": "B",
        "text": "Padronizar informações sobre a finalidade, o desempenho e as limitações de um modelo."
      },
      {
        "id": "C",
        "text": "Reduzindo os requisitos computacionais gerais de um modelo."
      },
      {
        "id": "D",
        "text": "Armazenamento físico de modelos para fins de arquivamento."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-146",
    "type": "single",
    "stem": "O que uma pontuação F1 mede no contexto do desempenho do modelo de base (FM)?",
    "options": [
      {
        "id": "A",
        "text": "Precisão e recall do modelo"
      },
      {
        "id": "B",
        "text": "Velocidade do modelo na geração de respostas"
      },
      {
        "id": "C",
        "text": "Custo financeiro da operação do modelo"
      },
      {
        "id": "D",
        "text": "Eficiência energética dos cálculos do modelo"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-147",
    "type": "single",
    "stem": "Uma empresa implantou uma solução de IA/ML para ajudar agentes de atendimento ao cliente a responder a perguntas frequentes. As perguntas podem mudar com o tempo. A empresa deseja oferecer aos agentes de atendimento ao cliente a capacidade de fazer perguntas e receber respostas geradas automaticamente para perguntas comuns dos clientes. Qual estratégia atenderá a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Ajuste o modelo regularmente."
      },
      {
        "id": "B",
        "text": "Treine o modelo usando dados de contexto."
      },
      {
        "id": "C",
        "text": "Pré-treine e compare o modelo usando dados de contexto."
      },
      {
        "id": "D",
        "text": "Use a Geração Aumentada de Recuperação (RAG) com técnicas de engenharia imediatas."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-148",
    "type": "single",
    "stem": "Uma empresa desenvolveu um sistema de triagem de currículos com tecnologia de IA. A empresa utilizou um grande conjunto de dados para treinar o modelo. O conjunto de dados continha currículos que não eram representativos de todos os dados demográficos. Qual dimensão central da IA responsável esse cenário apresenta?",
    "options": [
      {
        "id": "A",
        "text": "Justiça"
      },
      {
        "id": "B",
        "text": "Explicabilidade"
      },
      {
        "id": "C",
        "text": "Privacidade e segurança"
      },
      {
        "id": "D",
        "text": "Transparência"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-149",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa financeira global desenvolveu um aplicativo de ML para analisar dados do mercado de ações e fornecer tendências do mercado. A empresa deseja monitorar continuamente as fases de desenvolvimento do aplicativo e garantir que as políticas da empresa e os regulamentos do setor sejam seguidos. Quais serviços da AWS ajudarão a empresa a avaliar os requisitos de conformidade? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Gerente de Auditoria da AWS"
      },
      {
        "id": "B",
        "text": "Configuração da AWS"
      },
      {
        "id": "C",
        "text": "Inspetor da Amazon"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "E",
        "text": "AWS CloudTrail"
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": "AIF-C01-150",
    "type": "single",
    "stem": "Uma empresa deseja melhorar a precisão das respostas de uma aplicação de IA generativa. A aplicação utiliza um modelo de base (FM) no Amazon Bedrock. Qual solução atende a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Ajuste fino do FM."
      },
      {
        "id": "B",
        "text": "Retreine o FM."
      },
      {
        "id": "C",
        "text": "Treine um novo FM."
      },
      {
        "id": "D",
        "text": "Utilize engenharia rápida."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-151",
    "type": "single",
    "stem": "Uma empresa deseja identificar linguagem ofensiva na seção de comentários de postagens em redes sociais usando um modelo de ML. A empresa não usará dados rotulados para treinar o modelo. Qual estratégia a empresa deve usar para identificar linguagem prejudicial?",
    "options": [
      {
        "id": "A",
        "text": "Use a moderação do Amazon Rekognition."
      },
      {
        "id": "B",
        "text": "Use a detecção de toxicidade do Amazon Comprehend."
      },
      {
        "id": "C",
        "text": "Use algoritmos integrados do Amazon SageMaker para treinar o modelo."
      },
      {
        "id": "D",
        "text": "Use o Amazon Polly para monitorar comentários."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-152",
    "type": "single",
    "stem": "Uma empresa de mídia deseja analisar o comportamento e a demografia do espectador para recomendar conteúdo personalizado. A empresa deseja implantar um modelo de ML personalizado em seu ambiente de produção. A empresa também deseja observar se a qualidade do modelo varia ao longo do tempo. Qual serviço ou recurso da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Reconhecimento da Amazon"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker Clarify"
      },
      {
        "id": "C",
        "text": "Amazon Comprehend"
      },
      {
        "id": "D",
        "text": "Monitor de modelo do Amazon SageMaker"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-153",
    "type": "single",
    "stem": "Uma empresa está implantando modelos de IA/ML usando serviços da AWS. A empresa deseja oferecer transparência nos processos de tomada de decisão dos modelos e fornecer explicações para os resultados dos modelos. Qual serviço ou recurso da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Cartões de modelo do Amazon SageMaker"
      },
      {
        "id": "B",
        "text": "Reconhecimento da Amazon"
      },
      {
        "id": "C",
        "text": "Amazon Comprehend"
      },
      {
        "id": "D",
        "text": "Amazon Lex"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-154",
    "type": "single",
    "stem": "Uma empresa de manufatura deseja criar descrições de produtos em vários idiomas. Qual serviço da AWS automatizará essa tarefa?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Tradutor"
      },
      {
        "id": "B",
        "text": "Amazon Transcrição"
      },
      {
        "id": "C",
        "text": "Amazon Kendra"
      },
      {
        "id": "D",
        "text": "Amazon Polly"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-155",
    "stem": "Uma empresa quer respostas mais personalizadas aos prompts de seus modelos de IA generativa. Selecione a metodologia de personalização correta na lista a seguir para cada caso de uso. Cada caso de uso deve ser selecionado uma vez.",
    "type": "match",
    "pool": [
      "Pré-treinamento contínuo",
      "Aumento de dados (data augmentation)",
      "Ajuste fino (fine-tuning)"
    ],
    "prompts": [
      {
        "t": "Os modelos precisam aprender uma nova tarefa específica do domínio.",
        "a": 2
      },
      {
        "t": "Há uma quantidade limitada de dados rotulados e são necessários mais dados.",
        "a": 1
      },
      {
        "t": "Só há dados não rotulados disponíveis.",
        "a": 0
      }
    ]
  },
  {
    "id": "AIF-C01-156",
    "type": "single",
    "stem": "Qual recurso da AWS registra detalhes sobre dados de instância de ML para governança e relatórios?",
    "options": [
      {
        "id": "A",
        "text": "Cartões de modelo do Amazon SageMaker"
      },
      {
        "id": "B",
        "text": "Depurador Amazon SageMaker"
      },
      {
        "id": "C",
        "text": "Monitor de modelo do Amazon SageMaker"
      },
      {
        "id": "D",
        "text": "Amazon SageMaker JumpStart"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-157",
    "type": "single",
    "stem": "Uma empresa financeira está usando ML para ajudar em algumas tarefas da empresa. Qual opção é o uso de modelos de IA generativos?",
    "options": [
      {
        "id": "A",
        "text": "Resumindo reclamações de clientes"
      },
      {
        "id": "B",
        "text": "Classificação de clientes com base no uso do produto"
      },
      {
        "id": "C",
        "text": "Segmentação de clientes com base no tipo de investimento"
      },
      {
        "id": "D",
        "text": "Previsão de receita para determinados produtos"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-158",
    "type": "single",
    "stem": "Uma empresa médica quer desenvolver um aplicativo de IA que possa acessar registros estruturados de pacientes, extrair informações relevantes e gerar resumos concisos. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Comprehend Medical para extrair entidades e relacionamentos médicos relevantes. Aplique lógica baseada em regras para estruturar e formatar resumos."
      },
      {
        "id": "B",
        "text": "Use o Amazon Personalize para analisar os padrões de engajamento dos pacientes. Integre os resultados com uma ferramenta de resumo de texto de uso geral."
      },
      {
        "id": "C",
        "text": "Use o Amazon Textract para converter documentos digitalizados em texto digital. Crie um sistema de extração de palavras-chave para gerar resumos."
      },
      {
        "id": "D",
        "text": "Implemente o Amazon Kendra para fornecer um índice pesquisável para registros médicos. Use um sistema baseado em modelos para formatar resumos."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-159",
    "type": "single",
    "stem": "Qual opção descreve incorporações no contexto da IA?",
    "options": [
      {
        "id": "A",
        "text": "Um método para compactar grandes conjuntos de dados"
      },
      {
        "id": "B",
        "text": "Um método de criptografia para proteger dados confidenciais"
      },
      {
        "id": "C",
        "text": "Um método para visualizar dados de alta dimensão"
      },
      {
        "id": "D",
        "text": "Um método numérico para representação de dados em um espaço de dimensionalidade reduzida"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-160",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de IA para resumir livros de tamanhos variados. Durante os testes, o aplicativo não conseguiu resumir alguns livros. Por que o aplicativo não consegue resumir alguns livros?",
    "options": [
      {
        "id": "A",
        "text": "A temperatura está muito alta."
      },
      {
        "id": "B",
        "text": "O modelo selecionado não suporta ajuste fino."
      },
      {
        "id": "C",
        "text": "O valor P superior é muito alto."
      },
      {
        "id": "D",
        "text": "Os tokens de entrada excedem o tamanho do contexto do modelo."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-161",
    "type": "single",
    "stem": "Uma companhia aérea deseja criar um assistente de IA conversacional para responder a perguntas de clientes sobre horários de voos, reservas e pagamentos. A empresa deseja usar modelos de linguagem de grande porte (LLMs) e uma base de conhecimento para criar uma interface de chatbot baseada em texto. Qual solução atenderá a esses requisitos com MENOR esforço de desenvolvimento?",
    "options": [
      {
        "id": "A",
        "text": "Treine modelos no Amazon SageMaker Autopilot."
      },
      {
        "id": "B",
        "text": "Desenvolva um agente de Geração Aumentada de Recuperação (RAG) usando o Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Crie um aplicativo Python usando o Amazon Q Developer."
      },
      {
        "id": "D",
        "text": "Ajuste modelos no Amazon SageMaker Jumpstart."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-162",
    "type": "single",
    "stem": "Para que a tokenização é usada no processamento de linguagem natural (PLN)?",
    "options": [
      {
        "id": "A",
        "text": "Para criptografar dados de texto"
      },
      {
        "id": "B",
        "text": "Para compactar arquivos de texto"
      },
      {
        "id": "C",
        "text": "Para dividir o texto em unidades menores para processamento"
      },
      {
        "id": "D",
        "text": "Para traduzir texto entre idiomas"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-163",
    "type": "single",
    "stem": "Qual opção é uma característica dos modelos de linguagem baseados em transformadores?",
    "options": [
      {
        "id": "A",
        "text": "Modelos de linguagem baseados em transformadores usam camadas convolucionais para aplicar filtros em uma entrada para capturar padrões locais por meio de visualizações filtradas."
      },
      {
        "id": "B",
        "text": "Modelos de linguagem baseados em transformadores podem processar apenas dados de texto."
      },
      {
        "id": "C",
        "text": "Modelos de linguagem baseados em transformadores usam mecanismos de autoatenção para capturar relacionamentos contextuais."
      },
      {
        "id": "D",
        "text": "Modelos de linguagem baseados em transformadores processam sequências de dados, um elemento de cada vez, em iterações cíclicas."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-164",
    "type": "single",
    "stem": "Uma empresa financeira utiliza sistemas de IA para obter pontuações de crédito de clientes como parte do processo de solicitação de empréstimo. A empresa deseja expandir para um novo mercado em uma área geográfica diferente. A empresa precisa garantir que possa operar nessa área geográfica. Quais leis de conformidade a empresa deve revisar?",
    "options": [
      {
        "id": "A",
        "text": "Leis locais de proteção de dados de saúde"
      },
      {
        "id": "B",
        "text": "Leis locais de proteção de dados de cartões de pagamento"
      },
      {
        "id": "C",
        "text": "Leis locais de privacidade na educação"
      },
      {
        "id": "D",
        "text": "Leis locais de responsabilização por algoritmos"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-165",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa utiliza o Amazon Bedrock para sua aplicação de IA generativa. A empresa deseja usar o Amazon Bedrock Guardrails para detectar e filtrar entradas de usuários prejudiciais e saídas geradas por modelos. Quais categorias de conteúdo os guardrails podem filtrar? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Odiar"
      },
      {
        "id": "B",
        "text": "Política"
      },
      {
        "id": "C",
        "text": "Violência"
      },
      {
        "id": "D",
        "text": "Jogatina"
      },
      {
        "id": "E",
        "text": "Religião"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "AIF-C01-166",
    "type": "single",
    "stem": "Qual cenário descreve um risco potencial e uma limitação da engenharia rápida no contexto de um modelo de IA generativa?",
    "options": [
      {
        "id": "A",
        "text": "A engenharia rápida não garante que o modelo sempre produza saídas consistentes e determinísticas, eliminando a necessidade de validação."
      },
      {
        "id": "B",
        "text": "A engenharia rápida pode expor o modelo a vulnerabilidades, como ataques de injeção rápida."
      },
      {
        "id": "C",
        "text": "Prompts projetados corretamente reduzem, mas não eliminam, o risco de envenenamento de dados ou sequestro de modelo."
      },
      {
        "id": "D",
        "text": "A engenharia rápida não garante que o modelo gerará consistentemente saídas altamente confiáveis ao trabalhar com dados do mundo real."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-167",
    "type": "multi",
    "pick": 2,
    "stem": "Uma editora desenvolveu uma solução baseada em Geração Aumentada de Recuperação (RAG) para oferecer aos seus usuários a capacidade de interagir com o conteúdo publicado. Novos conteúdos são publicados diariamente. A empresa deseja proporcionar uma experiência quase em tempo real aos usuários. Quais etapas no pipeline do RAG a empresa deve implementar usando o processamento em lote offline para atender a esses requisitos? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Geração de embeddings de conteúdo"
      },
      {
        "id": "B",
        "text": "Geração de embeddings para consultas de usuários"
      },
      {
        "id": "C",
        "text": "Criação do índice de pesquisa"
      },
      {
        "id": "D",
        "text": "Recuperação de conteúdo relevante"
      },
      {
        "id": "E",
        "text": "Geração de resposta para o usuário"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "AIF-C01-168",
    "type": "single",
    "stem": "Qual técnica divide uma tarefa complexa em subtarefas menores que são enviadas sequencialmente para um grande modelo de linguagem (LLM)?",
    "options": [
      {
        "id": "A",
        "text": "Solicitação única"
      },
      {
        "id": "B",
        "text": "Encadeamento de prompts"
      },
      {
        "id": "C",
        "text": "Árvore dos pensamentos"
      },
      {
        "id": "D",
        "text": "Geração Aumentada de Recuperação (RAG)"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-169",
    "type": "single",
    "stem": "Um profissional de IA precisa aprimorar a precisão de um modelo de geração de linguagem natural. O modelo utiliza dados de inventário que mudam rapidamente. Qual técnica melhorará a precisão do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem por transferência"
      },
      {
        "id": "B",
        "text": "Aprendizagem federada"
      },
      {
        "id": "C",
        "text": "Geração Aumentada de Recuperação (RAG)"
      },
      {
        "id": "D",
        "text": "Solicitação única"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-170",
    "type": "single",
    "stem": "Uma empresa deseja colaborar com diversos institutos de pesquisa para desenvolver um modelo de IA. A empresa precisa de documentação padronizada do rastreamento de versões do modelo e de um registro do desenvolvimento do modelo. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Acompanhe as alterações do modelo usando o Git."
      },
      {
        "id": "B",
        "text": "Acompanhe as alterações do modelo usando o Amazon Fraud Detector."
      },
      {
        "id": "C",
        "text": "Acompanhe as alterações do modelo usando os cartões de modelo do Amazon SageMaker"
      },
      {
        "id": "D",
        "text": "Acompanhe as alterações do modelo usando o Amazon Comprehend."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-171",
    "type": "single",
    "stem": "Uma empresa que usa vários modelos de ML deseja identificar alterações na qualidade do modelo original para que a empresa possa resolver quaisquer problemas. Qual serviço ou recurso da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker HyperPod"
      },
      {
        "id": "C",
        "text": "Gerenciador de dados do Amazon SageMaker"
      },
      {
        "id": "D",
        "text": "Monitor de modelo do Amazon SageMaker"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-172",
    "type": "single",
    "stem": "Qual é o propósito do chunking no Retrieval Augmented Generation (RAG)?",
    "options": [
      {
        "id": "A",
        "text": "Para evitar limitações de armazenamento de banco de dados para documentos de texto grandes, armazenando partes ou blocos do texto"
      },
      {
        "id": "B",
        "text": "Para melhorar a eficiência evitando a necessidade de converter textos grandes em embeddings vetoriais"
      },
      {
        "id": "C",
        "text": "Para melhorar a relevância contextual dos resultados recuperados do índice vetorial"
      },
      {
        "id": "D",
        "text": "Para diminuir o custo de armazenamento, armazenando partes ou pedaços do texto"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-173",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um aplicativo de assistente editorial que utiliza IA generativa. Durante a fase piloto, o uso é baixo e o desempenho do aplicativo não é uma preocupação. A empresa não consegue prever o uso do aplicativo após sua implantação completa e deseja minimizar os custos. Qual solução atenderá a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use instâncias do Amazon EC2 com GPU."
      },
      {
        "id": "B",
        "text": "Use o Amazon Bedrock com taxa de transferência provisionada."
      },
      {
        "id": "C",
        "text": "Use o Amazon Bedrock com taxa de transferência sob demanda."
      },
      {
        "id": "D",
        "text": "Use o Amazon SageMaker JumpStart."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-174",
    "type": "single",
    "stem": "Uma empresa implantou um aplicativo de Geração Aumentada de Recuperação (RAG) no Amazon Bedrock, que coleta notícias financeiras para distribuir em boletins informativos diários. Usuários relataram recentemente ideias com influência política nos boletins informativos. Qual guardrail do Amazon Bedrock pode identificar e filtrar esse conteúdo?",
    "options": [
      {
        "id": "A",
        "text": "Filtros de palavras"
      },
      {
        "id": "B",
        "text": "Tópicos negados"
      },
      {
        "id": "C",
        "text": "Filtros de informações sensíveis"
      },
      {
        "id": "D",
        "text": "Filtros de conteúdo"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-175",
    "type": "single",
    "stem": "Uma empresa financeira está desenvolvendo um sistema de detecção de fraudes que sinaliza potenciais casos de fraude em transações com cartão de crédito. Os funcionários avaliarão os casos de fraude sinalizados. A empresa deseja minimizar o tempo que os funcionários gastam analisando casos de fraude sinalizados que não são realmente fraudulentos. Qual métrica de avaliação atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Lembrar"
      },
      {
        "id": "B",
        "text": "Precisão"
      },
      {
        "id": "C",
        "text": "Precisão"
      },
      {
        "id": "D",
        "text": "Gráfico de elevação"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-176",
    "type": "single",
    "stem": "Uma empresa projetou um agente com tecnologia de IA para responder às perguntas dos clientes com base nos manuais dos produtos. Qual estratégia pode melhorar os níveis de confiança do cliente nas respostas do agente com tecnologia de IA?",
    "options": [
      {
        "id": "A",
        "text": "Escrevendo o nível de confiança na resposta"
      },
      {
        "id": "B",
        "text": "Incluindo links de manuais de produtos referenciados na resposta"
      },
      {
        "id": "C",
        "text": "Projetando um avatar de agente que se parece com um computador"
      },
      {
        "id": "D",
        "text": "Treinar o agente para responder no estilo de linguagem da empresa"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-177",
    "type": "single",
    "stem": "Um hospital desenvolveu um sistema de IA para fornecer recomendações de tratamento personalizadas aos pacientes. O sistema de IA deve fornecer a justificativa por trás das recomendações e tornar os insights acessíveis a médicos e pacientes. Qual princípio de design centrado no ser humano esse cenário apresenta?",
    "options": [
      {
        "id": "A",
        "text": "Explicabilidade"
      },
      {
        "id": "B",
        "text": "Privacidade e segurança"
      },
      {
        "id": "C",
        "text": "Justiça"
      },
      {
        "id": "D",
        "text": "Governança de dados"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-178",
    "type": "single",
    "stem": "Qual afirmação apresenta uma vantagem do uso da Geração Aumentada de Recuperação (RAG) para tarefas de processamento de linguagem natural (PLN)?",
    "options": [
      {
        "id": "A",
        "text": "O RAG pode usar fontes externas de conhecimento para gerar respostas mais precisas e informativas."
      },
      {
        "id": "B",
        "text": "O RAG foi projetado para melhorar a velocidade do treinamento do modelo de linguagem."
      },
      {
        "id": "C",
        "text": "O RAG é usado principalmente para tarefas de reconhecimento de fala."
      },
      {
        "id": "D",
        "text": "RAG é uma técnica para aumento de dados em tarefas de visão computacional."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-179",
    "type": "single",
    "stem": "Uma empresa criou um modelo personalizado ajustando um modelo de linguagem de grande porte (LLM) existente da Amazon Bedrock. A empresa deseja implantar o modelo em produção e usá-lo para lidar com uma taxa constante de solicitações por minuto. Qual solução atende a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Implante o modelo usando uma instância otimizada para computação do Amazon EC2."
      },
      {
        "id": "B",
        "text": "Use o modelo com taxa de transferência sob demanda no Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Armazene o modelo no Amazon S3 e hospede-o usando o AWS Lambda."
      },
      {
        "id": "D",
        "text": "Compre o Provisioned Throughput para o modelo na Amazon Bedrock."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-180",
    "type": "single",
    "stem": "Qual técnica envolve treinar modelos de IA em conjuntos de dados rotulados para adaptar os modelos à terminologia e aos requisitos específicos do setor?",
    "options": [
      {
        "id": "A",
        "text": "Aumento de dados"
      },
      {
        "id": "B",
        "text": "Afinação"
      },
      {
        "id": "C",
        "text": "Quantização do modelo"
      },
      {
        "id": "D",
        "text": "Pré-treinamento contínuo"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-181",
    "type": "single",
    "stem": "Uma empresa está criando um agente para sua aplicação usando o Amazon Bedrock Agents. O agente está apresentando bom desempenho, mas a empresa deseja melhorar sua precisão fornecendo alguns exemplos específicos. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Modifique os prompts avançados do agente para incluir os exemplos."
      },
      {
        "id": "B",
        "text": "Crie uma proteção para o agente que inclua os exemplos."
      },
      {
        "id": "C",
        "text": "Use o Amazon SageMaker Ground Truth para rotular os exemplos."
      },
      {
        "id": "D",
        "text": "Execute um script no AWS Lambda que adicione os exemplos ao conjunto de dados de treinamento."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-182",
    "type": "single",
    "stem": "Qual opção é um benefício do uso de infraestrutura como código (IaC) em operações de aprendizado de máquina (MLOps)?",
    "options": [
      {
        "id": "A",
        "text": "O IaC elimina a necessidade de ajuste de hiperparâmetros."
      },
      {
        "id": "B",
        "text": "O IaC sempre provisiona instâncias de computação poderosas, contribuindo para o treinamento de modelos mais precisos."
      },
      {
        "id": "C",
        "text": "O IaC simplifica a implantação de cargas de trabalho de ML escaláveis e consistentes em ambientes de nuvem."
      },
      {
        "id": "D",
        "text": "O IaC minimiza as despesas gerais implantando apenas instâncias de baixo custo."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-183",
    "type": "single",
    "stem": "Uma empresa deseja refinar um modelo de base (FM) para responder a perguntas sobre um domínio específico. A empresa deseja usar o ajuste fino baseado em instruções. Como a empresa deve preparar os dados de treinamento?",
    "options": [
      {
        "id": "A",
        "text": "Reúna documentos internos da empresa e materiais específicos do setor. Mescle os documentos e materiais em um único arquivo."
      },
      {
        "id": "B",
        "text": "Colete avaliações externas de empresas de diversas fontes online. Identifique manualmente cada avaliação como positiva ou negativa."
      },
      {
        "id": "C",
        "text": "Crie pares de perguntas e respostas que abordem especificamente tópicos relacionados ao setor da empresa."
      },
      {
        "id": "D",
        "text": "Crie prompts de poucas etapas para instruir o modelo a responder somente sobre conhecimento de domínio."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-184",
    "type": "single",
    "stem": "Qual técnica de ML garante a conformidade e a privacidade dos dados ao treinar modelos de IA na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem por reforço"
      },
      {
        "id": "B",
        "text": "Aprendizagem por transferência"
      },
      {
        "id": "C",
        "text": "Aprendizagem federada"
      },
      {
        "id": "D",
        "text": "Aprendizagem não supervisionada"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-185",
    "stem": "Uma empresa precisa personalizar um modelo base hospedado no Amazon Bedrock. Selecione o método de personalização de modelo correto na lista de requisitos da empresa a seguir. Cada método de personalização de modelo deve ser selecionado uma ou mais vezes.",
    "type": "match",
    "pool": [
      "Pré-treinamento contínuo",
      "Ajuste fino (fine-tuning)"
    ],
    "prompts": [
      {
        "t": "A empresa quer melhorar o desempenho do modelo em tarefas e exemplos específicos.",
        "a": 1
      },
      {
        "t": "A empresa quer melhorar o conhecimento de domínio do modelo fornecendo documentos específicos.",
        "a": 0
      },
      {
        "t": "A empresa quer retreinar o modelo usando mais dados não rotulados ao longo do tempo.",
        "a": 0
      }
    ]
  },
  {
    "id": "AIF-C01-186",
    "type": "single",
    "stem": "Uma empresa de manufatura possui um aplicativo que coleta reclamações de consumidores de fontes públicas. O aplicativo utiliza uma lógica complexa e codificada para processar as reclamações. A empresa deseja expandir essa lógica para todos os mercados e linhas de produtos. Qual vantagem os modelos de IA generativa oferecem para esse cenário?",
    "options": [
      {
        "id": "A",
        "text": "Previsibilidade de saídas"
      },
      {
        "id": "B",
        "text": "Adaptabilidade"
      },
      {
        "id": "C",
        "text": "Menor sensibilidade a mudanças nas entradas"
      },
      {
        "id": "D",
        "text": "Explicabilidade"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-187",
    "type": "single",
    "stem": "Uma empresa financeira deseja sinalizar todas as atividades de cartão de crédito como possivelmente fraudulentas ou não fraudulentas com base nos dados da transação. Que tipo de modelo de ML atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Regressão"
      },
      {
        "id": "B",
        "text": "Difusão"
      },
      {
        "id": "C",
        "text": "Classificação binária"
      },
      {
        "id": "D",
        "text": "Classificação multiclasse"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-188",
    "stem": "Uma empresa está projetando um chatbot de atendimento ao cliente utilizando um modelo de linguagem de grande porte (LLM) ajustado. A empresa deseja garantir que o chatbot utilize características de IA responsáveis. Selecione a característica de IA responsável correta na lista a seguir para cada ação de design do aplicativo. Cada característica de IA responsável deve ser selecionada uma vez ou não ser selecionada.",
    "type": "match",
    "pool": [
      "Governança",
      "Privacidade e segurança",
      "Segurança (safety)",
      "Transparência"
    ],
    "prompts": [
      {
        "t": "Anonimizar informações pessoais durante a preparação dos dados de treinamento.",
        "a": 1
      },
      {
        "t": "Projetar o chatbot de atendimento para fornecer decisões explicáveis.",
        "a": 3
      },
      {
        "t": "Usar o Amazon Bedrock Guardrails para evitar saídas nocivas e o uso indevido do chatbot.",
        "a": 2
      }
    ]
  },
  {
    "id": "AIF-C01-189",
    "type": "single",
    "stem": "Um hospital quer usar uma solução de IA generativa com funcionalidade de conversão de fala em texto para ajudar a melhorar as habilidades dos funcionários no ditado de notas clínicas. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Desenvolvedor Amazon Q"
      },
      {
        "id": "B",
        "text": "Amazon Polly"
      },
      {
        "id": "C",
        "text": "Reconhecimento da Amazon"
      },
      {
        "id": "D",
        "text": "AWS HealthScribe"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-190",
    "type": "single",
    "stem": "Que tipo de modelo de IA faz previsões numéricas?",
    "options": [
      {
        "id": "A",
        "text": "Difusão"
      },
      {
        "id": "B",
        "text": "Regressão"
      },
      {
        "id": "C",
        "text": "Transformador"
      },
      {
        "id": "D",
        "text": "Multimodal"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-191",
    "stem": "Uma empresa deseja usar os recursos do Amazon SageMaker para vários casos de uso. Selecione o recurso correto do SageMaker na lista a seguir para cada caso de uso. Cada recurso do SageMaker deve ser selecionado apenas uma vez ou não ser selecionado.",
    "type": "match",
    "pool": [
      "SageMaker Canvas",
      "SageMaker Feature Store",
      "SageMaker Ground Truth",
      "SageMaker JumpStart",
      "SageMaker Model Monitor"
    ],
    "prompts": [
      {
        "t": "Preparar dados por meio de uma interface visual, sem escrever código.",
        "a": 0
      },
      {
        "t": "Encontrar e usar uma solução pré-construída para detecção de fraudes.",
        "a": 3
      },
      {
        "t": "Criar conjuntos de dados rotulados com intervenção humana.",
        "a": 2
      }
    ]
  },
  {
    "id": "AIF-C01-192",
    "type": "single",
    "stem": "Qual é o propósito dos embeddings vetoriais em um modelo de linguagem grande (LLM)?",
    "options": [
      {
        "id": "A",
        "text": "Dividir texto em pedaços de dados gerenciáveis"
      },
      {
        "id": "B",
        "text": "Agrupar um conjunto de caracteres a serem tratados como uma única unidade"
      },
      {
        "id": "C",
        "text": "Fornecer a capacidade de comparar textos matematicamente"
      },
      {
        "id": "D",
        "text": "Fornecendo a contagem de cada palavra na entrada"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-193",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa deseja aprimorar um modelo de base (FM) utilizando os serviços da AWS. A empresa precisa garantir que seus dados permaneçam privados, seguros e protegidos na região de origem da AWS onde estão armazenados. Qual combinação de etapas atenderá a esses requisitos de forma MAIS econômica? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Hospede o modelo no local usando o AWS Outposts."
      },
      {
        "id": "B",
        "text": "Use a API do Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Use o AWS PrivateLink e uma VPC."
      },
      {
        "id": "D",
        "text": "Hospede a API do Amazon Bedrock no local."
      },
      {
        "id": "E",
        "text": "Use logs e métricas do Amazon CloudWatch."
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "AIF-C01-194",
    "type": "single",
    "stem": "Uma empresa financeira utiliza a AWS para hospedar seus modelos de IA generativa. A empresa precisa gerar relatórios para comprovar a adesão às regulamentações internacionais para o tratamento de dados confidenciais de clientes. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "Artefato AWS"
      },
      {
        "id": "C",
        "text": "Gerenciador de segredos da AWS"
      },
      {
        "id": "D",
        "text": "Configuração da AWS"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-195",
    "type": "single",
    "stem": "Uma empresa médica deseja modernizar seu aplicativo de processamento de informações no local. A empresa deseja usar IA generativa para responder a perguntas médicas de pacientes. Qual serviço da AWS a empresa deve usar para garantir IA responsável para o aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "Guarda-corpos para leito rochoso da Amazônia"
      },
      {
        "id": "B",
        "text": "Inspetor da Amazon"
      },
      {
        "id": "C",
        "text": "Reconhecimento da Amazon"
      },
      {
        "id": "D",
        "text": "Consultor confiável da AWS"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-196",
    "type": "single",
    "stem": "Qual métrica é usada para avaliar o desempenho de modelos de base (FMs) para tarefas de sumarização de texto?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação da F1"
      },
      {
        "id": "B",
        "text": "Pontuação do Aluno de Avaliação Bilíngue (BLEU)"
      },
      {
        "id": "C",
        "text": "Precisão"
      },
      {
        "id": "D",
        "text": "Erro quadrático médio (MSE)"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-197",
    "type": "single",
    "stem": "Qual é o benefício de ajustar um modelo de fundação (FM)?",
    "options": [
      {
        "id": "A",
        "text": "O ajuste fino reduz o tamanho e a complexidade do FM e permite inferências mais lentas."
      },
      {
        "id": "B",
        "text": "O ajuste fino usa dados de treinamento específicos para retreinar o FM do zero para se adaptar a um caso de uso específico."
      },
      {
        "id": "C",
        "text": "O ajuste fino mantém o conhecimento do FM atualizado por meio do pré-treinamento do FM com dados mais recentes."
      },
      {
        "id": "D",
        "text": "O ajuste fino melhora o desempenho do FM em uma tarefa específica por meio do treinamento adicional do FM em novos dados rotulados."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-198",
    "type": "single",
    "stem": "Uma empresa deseja aprimorar as respostas do seu chatbot para corresponder ao tom desejado pela empresa. A empresa possui 100 exemplos de conversas de alta qualidade entre agentes de atendimento ao cliente e clientes. A empresa deseja usar esses dados para incorporar o tom da empresa às respostas do chatbot. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use o Amazon Personalize para gerar respostas."
      },
      {
        "id": "B",
        "text": "Crie uma tarefa de pré-treinamento do Amazon SageMaker HyperPod."
      },
      {
        "id": "C",
        "text": "Hospede o modelo usando o Amazon SageMaker. Use o TensorRT para implantação de modelos de linguagem grande (LLM)."
      },
      {
        "id": "D",
        "text": "Crie uma tarefa de ajuste fino do Amazon Bedrock."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-199",
    "type": "single",
    "stem": "Uma empresa de e-commerce está usando um chatbot para automatizar o processo de envio de pedidos dos clientes. O chatbot é alimentado por IA e está disponível para os clientes diretamente no site da empresa, 24 horas por dia, 7 dias por semana. Qual opção é uma vulnerabilidade de entrada do sistema de IA que a empresa precisa resolver antes que o chatbot seja disponibilizado?",
    "options": [
      {
        "id": "A",
        "text": "Vazamento de dados"
      },
      {
        "id": "B",
        "text": "Injeção rápida"
      },
      {
        "id": "C",
        "text": "Alucinações do modelo de linguagem ampla (LLM)"
      },
      {
        "id": "D",
        "text": "Desvio de conceito"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-200",
    "type": "single",
    "stem": "Uma empresa de mídia social quer impedir que usuários publiquem conteúdo discriminatório em seu aplicativo. A empresa quer usar o Amazon Bedrock como parte da solução. Como a empresa pode usar o Amazon Bedrock para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Dê aos usuários a capacidade de interagir com base em suas preferências."
      },
      {
        "id": "B",
        "text": "Bloqueie interações relacionadas a tópicos predefinidos."
      },
      {
        "id": "C",
        "text": "Restrinja as conversas dos usuários a tópicos predefinidos."
      },
      {
        "id": "D",
        "text": "Forneça uma variedade de respostas para selecionar para o engajamento do usuário."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-201",
    "type": "single",
    "stem": "Uma empresa de educação, a Waftion. O aplicativo permitirá que os usuários insiram texto ou forneçam uma imagem de uma pergunta. O aplicativo responderá com uma resposta escrita e uma explicação da resposta escrita. Que tipo de modelo atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Modelo de visão computacional"
      },
      {
        "id": "B",
        "text": "Grande modelo de linguagem multimodal"
      },
      {
        "id": "C",
        "text": "Modelo de difusão"
      },
      {
        "id": "D",
        "text": "Modelo de conversão de texto em fala"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-202",
    "type": "single",
    "stem": "Em qual estágio do ciclo de vida do modelo de IA generativa os testes são realizados para examinar a precisão do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Implantação"
      },
      {
        "id": "B",
        "text": "Seleção de dados"
      },
      {
        "id": "C",
        "text": "Afinação"
      },
      {
        "id": "D",
        "text": "Avaliação"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-203",
    "type": "single",
    "stem": "Qual afirmação descreve corretamente as incorporações na IA generativa?",
    "options": [
      {
        "id": "A",
        "text": "Os embeddings representam dados como vetores de alta dimensão que capturam relacionamentos semânticos."
      },
      {
        "id": "B",
        "text": "Embeddings é uma técnica que pesquisa dados para encontrar as informações mais úteis para responder perguntas em linguagem natural."
      },
      {
        "id": "C",
        "text": "Os embeddings reduzem os requisitos de hardware de um modelo usando um tipo de dados menos preciso para os pesos e ativações."
      },
      {
        "id": "D",
        "text": "Os embeddings fornecem a capacidade de armazenar e recuperar dados para aplicações de IA generativa."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-204",
    "type": "single",
    "stem": "Uma empresa deseja adicionar funcionalidade de IA generativa ao seu aplicativo integrando um modelo de linguagem de grande porte (LLM). As respostas do LLM devem ser o mais determinísticas e estáveis possível. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Configure o aplicativo para definir automaticamente o parâmetro de temperatura como 0 ao enviar o prompt ao LLM."
      },
      {
        "id": "B",
        "text": "Configure o aplicativo para adicionar automaticamente \"tornar sua resposta determinística\" no final do prompt antes de enviá-lo ao LLM."
      },
      {
        "id": "C",
        "text": "Configure o aplicativo para adicionar automaticamente \"tornar sua resposta determinística\" no início do prompt antes de enviá-lo ao LLM."
      },
      {
        "id": "D",
        "text": "Configure o aplicativo para definir automaticamente o parâmetro de temperatura como 1 ao enviar o prompt ao LLM."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-205",
    "type": "single",
    "stem": "Uma empresa precisa selecionar um modelo de IA generativa para construir um aplicativo. O aplicativo deve fornecer respostas aos usuários em tempo real. Qual característica do modelo a empresa deve considerar para atender a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Complexidade do modelo"
      },
      {
        "id": "B",
        "text": "Velocidade da inovação"
      },
      {
        "id": "C",
        "text": "Velocidade de inferência"
      },
      {
        "id": "D",
        "text": "Tempo de treinamento"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-206",
    "type": "single",
    "stem": "Qual termo se refere às instruções dadas aos modelos de base (FMs) para que os FMs forneçam uma resposta mais precisa a uma pergunta?",
    "options": [
      {
        "id": "A",
        "text": "prompt"
      },
      {
        "id": "B",
        "text": "Direção"
      },
      {
        "id": "C",
        "text": "Diálogo"
      },
      {
        "id": "D",
        "text": "Tradução"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-207",
    "type": "single",
    "stem": "Uma empresa de varejo deseja desenvolver um modelo de ML para recomendar produtos aos clientes. A empresa deseja construir o modelo com base em práticas responsáveis. Qual prática a empresa deve aplicar ao coletar dados para diminuir o viés do modelo?",
    "options": [
      {
        "id": "A",
        "text": "Use dados somente de clientes que correspondam aos dados demográficos da base geral de clientes da empresa."
      },
      {
        "id": "B",
        "text": "Colete dados de clientes que tenham histórico de compras anteriores."
      },
      {
        "id": "C",
        "text": "Garanta que os dados sejam equilibrados e coletados de um grupo diverso."
      },
      {
        "id": "D",
        "text": "Certifique-se de que os dados sejam de um conjunto de dados disponível publicamente."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-208",
    "type": "single",
    "stem": "Uma empresa está desenvolvendo um modelo de ML para prever a rotatividade de clientes. Qual métrica de avaliação avaliará o desempenho do modelo em uma tarefa de classificação binária, como a previsão de rotatividade?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação da F1"
      },
      {
        "id": "B",
        "text": "Erro quadrático médio (MSE)"
      },
      {
        "id": "C",
        "text": "R-quadrado"
      },
      {
        "id": "D",
        "text": "Tempo usado para treinar o modelo"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-209",
    "type": "single",
    "stem": "Um profissional de IA está avaliando o desempenho de um modelo do Amazon SageMaker. O profissional de IA deve escolher uma métrica de desempenho. A métrica deve mostrar a razão entre o número de itens classificados corretamente e o número total de itens classificados correta e incorretamente. Qual métrica atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Precisão"
      },
      {
        "id": "B",
        "text": "Precisão"
      },
      {
        "id": "C",
        "text": "Pontuação da F1"
      },
      {
        "id": "D",
        "text": "Lembrar"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-210",
    "type": "single",
    "stem": "Uma empresa de comércio eletrônico recebe vários gigabytes de dados de clientes diariamente. A empresa usa os dados para treinar um modelo de ML para prever a demanda futura de produtos. A empresa precisa de uma solução que realize inferências uma vez por dia. Que tipo de inferência atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Inferência em lote"
      },
      {
        "id": "B",
        "text": "Inferência assíncrona"
      },
      {
        "id": "C",
        "text": "Inferência em tempo real"
      },
      {
        "id": "D",
        "text": "Inferência sem servidor"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-211",
    "type": "single",
    "stem": "Uma empresa desenvolveu um modelo de IA generativa para segmentação de clientes. O modelo vem sendo implantado no ambiente de produção da empresa há bastante tempo. Recentemente, a empresa notou alguma inconsistência nas respostas do modelo. A empresa deseja avaliar o viés e o desvio do modelo. Qual serviço ou recurso da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Monitor de modelo do Amazon SageMaker"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker Clarify"
      },
      {
        "id": "C",
        "text": "Cartões de modelo do Amazon SageMaker"
      },
      {
        "id": "D",
        "text": "Loja de recursos do Amazon SageMaker"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-212",
    "type": "single",
    "stem": "Uma empresa se inscreveu para obter acesso ao Amazon Bedrock para desenvolver aplicativos. A empresa deseja restringir o acesso dos funcionários a modelos específicos disponíveis no Amazon Bedrock. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use as políticas do AWS Identity and Access Management (IAM) para restringir o acesso ao modelo."
      },
      {
        "id": "B",
        "text": "Use o AWS Security Token Service (AWS STS) para gerar credenciais temporárias para uso do modelo."
      },
      {
        "id": "C",
        "text": "Use as funções de serviço do AWS Identity and Access Management (IAM) para restringir a assinatura do modelo."
      },
      {
        "id": "D",
        "text": "Use o Amazon Inspector para monitorar o acesso ao modelo."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-213",
    "type": "single",
    "stem": "Qual técnica de ML usa dados de treinamento rotulados com os valores de saída corretos?",
    "options": [
      {
        "id": "A",
        "text": "Aprendizagem supervisionada"
      },
      {
        "id": "B",
        "text": "Aprendizagem não supervisionada"
      },
      {
        "id": "C",
        "text": "Aprendizagem por reforço"
      },
      {
        "id": "D",
        "text": "Aprendizagem por transferência"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-214",
    "type": "single",
    "stem": "Qual parâmetro do modelo de grande linguagem (LLM) controla o número de possíveis próximas palavras ou tokens considerados em cada etapa do processo de geração de texto?",
    "options": [
      {
        "id": "A",
        "text": "Tokens máximos"
      },
      {
        "id": "B",
        "text": "Top K"
      },
      {
        "id": "C",
        "text": "Temperatura"
      },
      {
        "id": "D",
        "text": "Tamanho do lote"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-215",
    "type": "single",
    "stem": "Uma empresa está criando um chatbot. O chatbot utiliza o Amazon Lex e o Amazon OpenSearch Service. O chatbot utiliza os dados privados da empresa para responder a perguntas. A empresa precisa converter os dados em uma representação vetorial antes de armazená-los em um banco de dados. Que tipo de modelo de fundação (FM) atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Modelo de preenchimento de texto"
      },
      {
        "id": "B",
        "text": "Instrução seguindo modelo"
      },
      {
        "id": "C",
        "text": "Modelo de incorporação de texto"
      },
      {
        "id": "D",
        "text": "Modelo de geração de imagem"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-216",
    "type": "single",
    "stem": "Uma empresa deseja usar um modelo de linguagem de grande porte (LLM) para gerar descrições de produtos. A empresa deseja fornecer descrições de exemplo do modelo que sigam um formato. Qual técnica de engenharia de prompt gerará descrições que correspondem ao formato?",
    "options": [
      {
        "id": "A",
        "text": "Solicitação de tiro zero"
      },
      {
        "id": "B",
        "text": "Indução de cadeia de pensamento"
      },
      {
        "id": "C",
        "text": "Solicitação única"
      },
      {
        "id": "D",
        "text": "Solicitação de poucos disparos"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-217",
    "type": "single",
    "stem": "Um banco está ajustando um modelo de linguagem de grande porte (LLM) no Amazon Bedrock para auxiliar os clientes com dúvidas sobre seus empréstimos. O banco quer garantir que o modelo não revele nenhum dado privado do cliente. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Use guarda-corpos Amazon Bedrock."
      },
      {
        "id": "B",
        "text": "Remova informações de identificação pessoal (PII) dos dados do cliente antes de ajustar o LLM."
      },
      {
        "id": "C",
        "text": "Aumente o parâmetro Top-K do LLM."
      },
      {
        "id": "D",
        "text": "Armazene os dados do cliente no Amazon S3. Criptografe os dados antes de ajustar o LLM."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-218",
    "type": "single",
    "stem": "Um supermercado quer criar um chatbot para ajudar os clientes a encontrar produtos na loja. O chatbot deve verificar o estoque em tempo real e informar a localização do produto na loja. Qual técnica de engenharia de prompt a loja deve usar para criar o chatbot?",
    "options": [
      {
        "id": "A",
        "text": "Solicitação de tiro zero"
      },
      {
        "id": "B",
        "text": "Solicitação de poucos disparos"
      },
      {
        "id": "C",
        "text": "Menor para maior solicitação"
      },
      {
        "id": "D",
        "text": "Incentivo ao raciocínio e à ação (ReAct)"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "AIF-C01-219",
    "type": "single",
    "stem": "Uma empresa utiliza um modelo de terceiros no Amazon Bedrock para analisar documentos confidenciais. A empresa está preocupada com a privacidade dos dados. Qual afirmação descreve como a Amazon Bedrock protege a privacidade dos dados?",
    "options": [
      {
        "id": "A",
        "text": "As entradas do usuário e as saídas do modelo são anonimizadas e compartilhadas com provedores de modelos terceirizados."
      },
      {
        "id": "B",
        "text": "As entradas do usuário e as saídas do modelo não são compartilhadas com nenhum fornecedor de modelo terceirizado."
      },
      {
        "id": "C",
        "text": "As entradas do usuário são mantidas confidenciais, mas as saídas do modelo são compartilhadas com fornecedores terceirizados de modelos."
      },
      {
        "id": "D",
        "text": "As entradas do usuário e as saídas do modelo são editadas antes que as entradas e saídas sejam compartilhadas com provedores de modelos terceirizados."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-220",
    "type": "single",
    "stem": "Uma empresa de animação quer fornecer legendas para seu conteúdo. Qual serviço da AWS atende a esse requisito?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Comprehend"
      },
      {
        "id": "B",
        "text": "Amazon Polly"
      },
      {
        "id": "C",
        "text": "Amazon Transcrição"
      },
      {
        "id": "D",
        "text": "Amazon Tradutor"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-221",
    "type": "single",
    "stem": "Uma empresa de comércio eletrônico deseja agrupar clientes com base em seu histórico de compras e preferências para personalizar a experiência do usuário no aplicativo da empresa. Qual técnica de ML a empresa deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Classificação"
      },
      {
        "id": "B",
        "text": "Agrupamento"
      },
      {
        "id": "C",
        "text": "Regressão"
      },
      {
        "id": "D",
        "text": "Geração de conteúdo"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-222",
    "type": "single",
    "stem": "Uma empresa deseja controlar o acesso dos funcionários aos modelos de fundação (FMs) disponíveis publicamente. Qual solução atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Analise relatórios de custo e uso no AWS Cost Explorer."
      },
      {
        "id": "B",
        "text": "Baixe documentos de segurança e conformidade da AWS em AWS Artifact."
      },
      {
        "id": "C",
        "text": "Configure o Amazon SageMaker JumpStart para restringir FMs detectáveis."
      },
      {
        "id": "D",
        "text": "Crie uma solução de pesquisa híbrida usando o Amazon OpenSearch Service."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-223",
    "type": "single",
    "stem": "Uma empresa criou uma ferramenta de tradução para ajudar sua equipe de atendimento ao cliente a lidar com problemas de clientes em todo o mundo. A empresa deseja avaliar o desempenho da ferramenta de tradução. A empresa cria um processo de dados paralelo que compara as respostas da ferramenta com as respostas de pessoas reais. Ambos os conjuntos de respostas são gerados no mesmo conjunto de documentos. Qual estratégia a empresa deve usar para avaliar a ferramenta de tradução?",
    "options": [
      {
        "id": "A",
        "text": "Use a pontuação do Bilingual Evaluation Understudy (BLEU) para estimar a qualidade absoluta da tradução dos dois métodos."
      },
      {
        "id": "B",
        "text": "Use a pontuação do Bilingual Evaluation Understudy (BLEU) para estimar a qualidade relativa da tradução dos dois métodos."
      },
      {
        "id": "C",
        "text": "Use o BERTScore para estimar a qualidade absoluta da tradução dos dois métodos."
      },
      {
        "id": "D",
        "text": "Use o BERTScore para estimar a qualidade relativa da tradução dos dois métodos."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-224",
    "type": "single",
    "stem": "Um profissional de IA deseja gerar resultados mais diversos e criativos a partir de um grande modelo de linguagem (LLM). Como o profissional de IA deve ajustar o parâmetro de inferência?",
    "options": [
      {
        "id": "A",
        "text": "Aumentar o valor da temperatura."
      },
      {
        "id": "B",
        "text": "Diminua o valor do Top K."
      },
      {
        "id": "C",
        "text": "Aumente o comprimento da resposta."
      },
      {
        "id": "D",
        "text": "Diminua o comprimento do prompt."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-225",
    "type": "single",
    "stem": "Uma empresa desenvolveu modelos de visão computacional personalizados. A empresa precisa de uma interface amigável para a rotulagem de dados, a fim de minimizar erros de modelagem em novos dados do mundo real. Qual serviço, recurso ou ferramenta da AWS atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SageMaker Ground Truth"
      },
      {
        "id": "B",
        "text": "Tela do Amazon SageMaker"
      },
      {
        "id": "C",
        "text": "Parque infantil Amazon Bedrock"
      },
      {
        "id": "D",
        "text": "Agentes da Amazon Bedrock"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-226",
    "type": "multi",
    "pick": 2,
    "stem": "Uma empresa está integrando IA à sua solução de recrutamento e contratação de funcionários. A empresa deseja mitigar riscos de viés e garantir práticas de IA responsáveis, priorizando decisões de contratação equitativas. Quais dimensões principais da IA responsável a empresa deve considerar? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Justiça"
      },
      {
        "id": "B",
        "text": "Tolerância"
      },
      {
        "id": "C",
        "text": "Flexibilidade"
      },
      {
        "id": "D",
        "text": "Código aberto"
      },
      {
        "id": "E",
        "text": "Transparência"
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "AIF-C01-227",
    "type": "single",
    "stem": "Uma empresa financeira implementou um modelo de ML para prever a rotatividade de clientes. O modelo está em produção há 1 semana. A empresa deseja avaliar a precisão da previsão da rotatividade em comparação com o comportamento real do cliente. Qual métrica atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Erro quadrático médio (RMSE)"
      },
      {
        "id": "B",
        "text": "Retorno sobre o investimento (ROI)"
      },
      {
        "id": "C",
        "text": "Pontuação da F1"
      },
      {
        "id": "D",
        "text": "Pontuação do Aluno de Avaliação Bilíngue (BLEU)"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "AIF-C01-228",
    "type": "single",
    "stem": "Uma empresa possui um aplicativo de IA generativa que utiliza um modelo de base (FM) pré-treinado no Amazon Bedrock. A empresa deseja que o FM inclua mais contexto usando informações da empresa. Qual solução atende a esses requisitos de forma MAIS econômica?",
    "options": [
      {
        "id": "A",
        "text": "Use as bases de conhecimento do Amazon Bedrock."
      },
      {
        "id": "B",
        "text": "Escolha uma FM diferente na Amazon Bedrock."
      },
      {
        "id": "C",
        "text": "Use os agentes Amazon Bedrock."
      },
      {
        "id": "D",
        "text": "Implante um modelo personalizado no Amazon Bedrock."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-229",
    "stem": "Uma empresa está usando o Amazon SageMaker para desenvolver modelos de IA. Selecione o recurso ou recurso correto do SageMaker na lista a seguir para cada etapa do fluxo de trabalho do ciclo de vida do modelo de IA. Cada recurso ou recurso do SageMaker deve ser selecionado uma vez ou não ser selecionado.",
    "type": "match",
    "pool": [
      "SageMaker Clarify",
      "SageMaker Model Registry",
      "SageMaker Serverless Inference"
    ],
    "prompts": [
      {
        "t": "Gerenciar diferentes versões do modelo.",
        "a": 1
      },
      {
        "t": "Usar o modelo atual para fazer previsões.",
        "a": 2
      }
    ]
  },
  {
    "id": "AIF-C01-230",
    "type": "single",
    "stem": "Uma empresa de serviços alimentícios deseja coletar um conjunto de dados para prever as preferências alimentares dos clientes. A empresa deseja garantir que as preferências alimentares de todos os grupos demográficos sejam incluídas nos dados. Que característica do conjunto de dados esse cenário apresenta?",
    "options": [
      {
        "id": "A",
        "text": "Precisão"
      },
      {
        "id": "B",
        "text": "Diversidade"
      },
      {
        "id": "C",
        "text": "Viés de atualidade"
      },
      {
        "id": "D",
        "text": "Confiabilidade"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-231",
    "type": "single",
    "stem": "Uma empresa deseja criar um chatbot que responda a perguntas sobre políticas de recursos humanos. A empresa utiliza um modelo de linguagem de grande porte (LLM) e possui uma extensa base de documentação digital. Qual técnica a empresa deve usar para otimizar as respostas geradas?",
    "options": [
      {
        "id": "A",
        "text": "Use a Geração Aumentada de Recuperação (RAG)."
      },
      {
        "id": "B",
        "text": "Utilize o prompt de poucas tentativas."
      },
      {
        "id": "C",
        "text": "Ajuste a temperatura para 1."
      },
      {
        "id": "D",
        "text": "Diminua o tamanho do token."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "AIF-C01-232",
    "type": "single",
    "stem": "Uma empresa de educação está desenvolvendo um chatbot cujo público-alvo são adolescentes. A empresa está treinando um modelo de linguagem amplo (LLM) personalizado. A empresa quer que o chatbot fale no estilo de linguagem do público-alvo, usando ortografia criativa e palavras mais curtas. Qual métrica avaliará o desempenho do LLM?",
    "options": [
      {
        "id": "A",
        "text": "Pontuação da F1"
      },
      {
        "id": "B",
        "text": "Pontuação BERTS"
      },
      {
        "id": "C",
        "text": "Subestudo orientado à recordação para avaliação de conhecimento (ROUGE)"
      },
      {
        "id": "D",
        "text": "Pontuação do Aluno de Avaliação Bilíngue (BLEU)"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-233",
    "type": "single",
    "stem": "Uma equipe de atendimento ao cliente está desenvolvendo um aplicativo para analisar o feedback dos clientes e classificá-lo automaticamente em diferentes categorias. As categorias incluem qualidade do produto, atendimento ao cliente e experiência de entrega. Qual conceito A1 esse cenário apresenta?",
    "options": [
      {
        "id": "A",
        "text": "Visão computacional"
      },
      {
        "id": "B",
        "text": "Processamento de linguagem natural (PLN)"
      },
      {
        "id": "C",
        "text": "Sistemas de recomendação"
      },
      {
        "id": "D",
        "text": "Detecção de fraude"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "AIF-C01-114",
    "stem": "Uma empresa quer criar um aplicativo de ML. Selecione e ordene as etapas corretas da lista a seguir para desenvolver uma carga de trabalho de ML bem arquitetada. Cada etapa deve ser selecionada uma vez.",
    "type": "order",
    "pool": [
      "Implantar o modelo",
      "Desenvolver o modelo",
      "Monitorar o modelo",
      "Definir o objetivo de negócio e enquadrar o problema de ML"
    ],
    "answer": [
      3,
      1,
      0,
      2
    ]
  },
  {
    "id": "AIF-C01-125",
    "stem": "Uma empresa desenvolveu um modelo de linguagem de grande porte (LLM) e deseja disponibilizá-lo para diversas equipes internas. A empresa precisa selecionar o modo de inferência apropriado para cada equipe. Selecione o modo de inferência correto na lista a seguir para cada caso de uso. Cada modo de inferência deve ser selecionado uma ou mais vezes.",
    "type": "match",
    "pool": [
      "Transformação em lote (batch transform)",
      "Inferência em tempo real"
    ],
    "prompts": [
      {
        "t": "O chatbot da empresa precisa de previsões do LLM para entender a intenção dos usuários com latência mínima.",
        "a": 1
      },
      {
        "t": "Um job de processamento de dados precisa consultar o LLM para processar gigabytes de arquivos de texto nos fins de semana.",
        "a": 0
      },
      {
        "t": "A equipe de engenharia precisa criar uma API que processe pequenos trechos de texto e forneça previsões de baixa latência.",
        "a": 1
      }
    ]
  },
  {
    "id": "AIF-C01-135",
    "stem": "Uma empresa quer desenvolver aplicativos de ML para melhorar as operações e a eficiência dos negócios. Selecione o paradigma de ML correto na lista a seguir para cada caso de uso. Cada paradigma de ML deve ser selecionado uma ou mais vezes.",
    "type": "match",
    "pool": [
      "Aprendizado supervisionado",
      "Aprendizado não supervisionado"
    ],
    "prompts": [
      {
        "t": "Classificação binária",
        "a": 0
      },
      {
        "t": "Classificação multiclasse",
        "a": 0
      },
      {
        "t": "Clustering K-means",
        "a": 1
      },
      {
        "t": "Redução de dimensionalidade",
        "a": 1
      }
    ]
  }
],
};
