1- Uma empresa precisa arquitetar uma solução de DNS híbrida. Essa solução usará uma zona privada hospedada do Amazon Route 53 para o domínio cloud.example.com para os recursos armazenados em VPCs.\
A empresa possui os seguintes requisitos de resolução de DNS:\
Os sistemas locais devem ser capazes de resolver e se conectar a cloud.example.com.\
Todas as VPCs devem ser capazes de resolver cloud.example.com.\
Já existe uma conexão AWS Direct Connect entre a rede corporativa local e o AWS Transit Gateway.\
Qual arquitetura a empresa deve usar para atender a esses requisitos com o MÁXIMO desempenho?

A. Associe a zona privada hospedada a todas as VPCs. Crie um resolvedor de entrada do Route 53 na VPC de serviços compartilhados. Anexe todas as VPCs ao gateway de trânsito e crie regras de encaminhamento no servidor DNS local para cloud.example.com que apontem para o resolvedor de entrada. **Mais votado**

B. Associe a zona privada hospedada a todas as VPCs. Implante um encaminhador condicional do Amazon EC2 na VPC de serviços compartilhados. Anexe todas as VPCs ao gateway de trânsito e crie regras de encaminhamento no servidor DNS local para cloud.example.com que apontem para o encaminhador condicional.

C. Associe a zona hospedada privada ao VPC de serviços compartilhados. Crie um resolvedor de saída do Route 53 no VPC de serviços compartilhados. Anexe todos os VPCs ao gateway de trânsito e crie regras de encaminhamento no servidor DNS local para cloud.example.com que apontem para o resolvedor de saída.

D. Associe a zona privada hospedada à VPC de serviços compartilhados. Crie um resolvedor de entrada do Route 53 na VPC de serviços compartilhados. Anexe a VPC de serviços compartilhados ao gateway de trânsito e crie regras de encaminhamento no servidor DNS local para cloud.example.com que apontem para o resolvedor de entrada.

2- Uma empresa fornece dados meteorológicos por meio de uma API REST para diversos clientes. A API é hospedada pelo Amazon API Gateway e integrada a diferentes funções do AWS Lambda para cada operação da API. A empresa utiliza o Amazon Route 53 para DNS e criou um registro de recurso chamado weather.example.com. A empresa armazena dados para a API em tabelas do Amazon DynamoDB. A empresa precisa de uma solução que permita à API realizar failover para uma região diferente da AWS.\
Qual solução atenderá a esses requisitos?

A. Implante um novo conjunto de funções Lambda em uma nova região. Atualize a API do API Gateway para usar um endpoint de API otimizado para edge com funções Lambda de ambas as regiões como alvos. Converta as tabelas do DynamoDB em tabelas globais.

B. Implante uma nova API do API Gateway e funções Lambda em outra região. Altere o registro DNS do Route 53 para uma resposta multivalor. Adicione ambas as APIs do API Gateway à resposta. Habilite o monitoramento de integridade do destino. Converta as tabelas do DynamoDB em tabelas globais.

C. Implante uma nova API do API Gateway e funções Lambda em outra região. Altere o registro DNS do Route 53 para um registro de failover. Habilite o monitoramento de integridade do destino. Converta as tabelas do DynamoDB em tabelas globais. **Mais votado**

D. Implante uma nova API do API Gateway em uma nova região. Altere as funções do Lambda para funções globais. Altere o registro DNS do Route 53 para uma resposta multivalor. Adicione as duas APIs do API Gateway à resposta. Habilite o monitoramento de integridade do destino. Converta as tabelas do DynamoDB em tabelas globais.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/)

3- Uma empresa utiliza o AWS Organizations com uma única UO denominada Produção para gerenciar várias contas. Todas as contas são membros da UO Produção. Os administradores utilizam SCPs de lista de negação na raiz da organização para gerenciar o acesso a serviços restritos.\
A empresa adquiriu recentemente uma nova unidade de negócios e convidou a conta AWS existente dessa unidade para a organização. Após a integração, os administradores da nova unidade de negócios descobriram que não conseguiam atualizar as regras existentes do AWS Config para atender às políticas da empresa.\
Qual opção permitirá que os administradores façam alterações e continuem aplicando as políticas atuais sem a necessidade de manutenção adicional de longo prazo?

A. Remova os SCPs raiz da organização que limitam o acesso ao AWS Config. Crie produtos do AWS Service Catalog para as regras padrão do AWS Config da empresa e implante-os em toda a organização, incluindo a nova conta.

B. Crie uma UO temporária chamada Integração para a nova conta. Aplique um SCP à UO Integração para permitir ações do AWS Config. Mova a nova conta para a UO Produção quando os ajustes no AWS Config forem concluídos.

C. Converta os SCPs raiz da organização de SCPs da lista de negação para SCPs da lista de permissão, permitindo apenas os serviços necessários. Aplique temporariamente um SCP à raiz da organização que permita ações do AWS Config apenas para entidades na nova conta.

D. Crie uma UO temporária chamada Integração para a nova conta. Aplique um SCP à UO Integração para permitir ações do AWS Config. Mova o SCP raiz da organização para a UO Produção. Mova a nova conta para a UO Produção quando os ajustes no AWS Config forem concluídos. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/)

4- Uma empresa está executando um aplicativo web de duas camadas em um data center local. A camada de aplicação consiste em um único servidor executando um aplicativo com estado. O aplicativo se conecta a um banco de dados PostgreSQL executado em um servidor separado. A base de usuários do aplicativo deve crescer significativamente, por isso a empresa está migrando o aplicativo e o banco de dados para a AWS. A solução utilizará o Amazon Aurora PostgreSQL, o Amazon EC2 Auto Scaling e o Elastic Load Balancing.\
Qual solução proporcionará uma experiência de usuário consistente que permitirá o escalonamento das camadas do aplicativo e do banco de dados?

A. Habilite o dimensionamento automático do Aurora para réplicas do Aurora. Use um balanceador de carga de rede com o algoritmo de roteamento de menos solicitações pendentes e sessões persistentes habilitadas.

B. Habilite o Auto Scaling do Aurora para escritores do Aurora. Use um Application Load Balancer com o algoritmo de roteamento round robin e sessões persistentes habilitados.

C. Habilite o dimensionamento automático do Aurora para réplicas do Aurora. Use um balanceador de carga de aplicação com roteamento round robin e sessões persistentes habilitados. **Mais votado**

D. Habilite o escalonamento do Aurora para escritores do Aurora. Use um balanceador de carga de rede com o algoritmo de roteamento de solicitações menos pendentes e sessões persistentes habilitadas.

5- Uma empresa utiliza um serviço para coletar metadados de aplicativos hospedados localmente. Dispositivos de consumo, como TVs e rádios de internet, acessam os aplicativos. Muitos dispositivos mais antigos não oferecem suporte a determinados cabeçalhos HTTP e exibem erros quando esses cabeçalhos estão presentes nas respostas. A empresa configurou um balanceador de carga local para remover os cabeçalhos não suportados das respostas enviadas a dispositivos mais antigos, identificados pela empresa pelos cabeçalhos User-Agent.\
A empresa deseja migrar o serviço para a AWS, adotar tecnologias sem servidor e manter a capacidade de oferecer suporte aos dispositivos mais antigos. A empresa já migrou os aplicativos para um conjunto de funções do AWS Lambda.\
Qual solução atenderá a esses requisitos?

A. Crie uma distribuição do Amazon CloudFront para o serviço de metadados. Crie um Application Load Balancer (ALB). Configure a distribuição do CloudFront para encaminhar solicitações ao ALB. Configure o ALB para invocar a função Lambda correta para cada tipo de solicitação. Crie uma função do CloudFront para remover os cabeçalhos problemáticos com base no valor do cabeçalho User-Agent. **Mais votado**

B. Crie uma API REST do Amazon API Gateway para o serviço de metadados. Configure o API Gateway para invocar a função Lambda correta para cada tipo de solicitação. Modifique as respostas do gateway padrão para remover os cabeçalhos problemáticos com base no valor do cabeçalho User-Agent.

C. Crie uma API HTTP do Amazon API Gateway para o serviço de metadados. Configure o API Gateway para invocar a função Lambda correta para cada tipo de solicitação. Crie um modelo de mapeamento de resposta para remover os cabeçalhos problemáticos com base no valor do User-Agent. Associe o mapeamento de dados de resposta à API HTTP.

D. Crie uma distribuição do Amazon CloudFront para o serviço de metadados. Crie um Application Load Balancer (ALB). Configure a distribuição do CloudFront para encaminhar solicitações ao ALB. Configure o ALB para invocar a função Lambda correta para cada tipo de solicitação. Crie uma função Lambda@Edge que removerá os cabeçalhos problemáticos em resposta às solicitações do visualizador com base no valor do cabeçalho User-Agent.

6- Uma empresa varejista precisa fornecer uma série de arquivos de dados para outra empresa, que é sua parceira de negócios. Esses arquivos são salvos em um bucket do Amazon S3 na Conta A, que pertence à empresa varejista. A empresa parceira de negócios deseja que um de seus usuários do IAM, User_DataProcessor, acesse os arquivos de sua própria conta da AWS (Conta B).\
Qual combinação de etapas as empresas devem seguir para que User_DataProcessor possa acessar o bucket do S3 com sucesso? (Escolha duas.)

A. Ative o recurso de compartilhamento de recursos entre origens (CORS) para o bucket do S3 na Conta A.

B. Na Conta A, defina a política de bucket do S3 como o seguinte:

C. Na Conta A, defina a política de bucket do S3 como o seguinte:\
**Mais votado**

D. Na Conta B, defina as permissões do User_DataProcessor para o seguinte:

E. Na Conta B, defina as permissões do User_DataProcessor para o seguinte:

7- Uma empresa está executando uma aplicação web tradicional em instâncias do Amazon EC2. A empresa precisa refatorar a aplicação como microsserviços executados em contêineres. Versões separadas da aplicação existem em dois ambientes distintos: produção e teste. A carga da aplicação é variável, mas a carga mínima e a carga máxima são conhecidas. Um arquiteto de soluções precisa projetar a aplicação atualizada com uma arquitetura sem servidor que minimize a complexidade operacional.\
Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Carregue as imagens do contêiner no AWS Lambda como funções. Configure um limite de simultaneidade para as funções Lambda associadas para lidar com o pico de carga esperado. Configure duas integrações Lambda separadas no Amazon API Gateway: uma para produção e outra para testes.

B. Carregue as imagens do contêiner no Amazon Elastic Container Registry (Amazon ECR). Configure dois clusters do Amazon Elastic Container Service (Amazon ECS) com dimensionamento automático e o tipo de inicialização Fargate para lidar com a carga esperada. Implante tarefas a partir das imagens do ECR. Configure dois Application Load Balancers separados para direcionar o tráfego para os clusters do ECS. **Mais votado**

C. Carregue as imagens do contêiner no Amazon Elastic Container Registry (Amazon ECR). Configure dois clusters do Amazon Elastic Kubernetes Service (Amazon EKS) com dimensionamento automático e o tipo de inicialização Fargate para lidar com a carga esperada. Implante tarefas a partir das imagens do ECR. Configure dois Application Load Balancers separados para direcionar o tráfego para os clusters EKS.

D. Carregue as imagens do contêiner no AWS Elastic Beanstalk. No Elastic Beanstalk, crie ambientes e implantações separados para produção e testes. Configure dois Application Load Balancers separados para direcionar o tráfego para as implantações do Elastic Beanstalk.

8- Uma empresa possui um aplicativo web multicamadas executado em uma frota de instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). As instâncias estão em um grupo de Auto Scaling. O ALB e o grupo de Auto Scaling são replicados em uma região de backup da AWS. Os valores mínimo e máximo para o grupo de Auto Scaling são definidos como zero. Uma instância de banco de dados Multi-AZ do Amazon RDS armazena os dados do aplicativo. A instância de banco de dados tem uma réplica de leitura na região de backup. O aplicativo apresenta um endpoint aos usuários finais usando um registro do Amazon Route 53.\
A empresa precisa reduzir seu RTO para menos de 15 minutos, permitindo que o aplicativo realize failover automaticamente para a região de backup. A empresa não possui um orçamento grande o suficiente para uma estratégia ativa-ativa.\
O que um arquiteto de soluções deve recomendar para atender a esses requisitos?

A. Reconfigure o registro do Route 53 do aplicativo com uma política de roteamento baseada em latência que balanceie a carga do tráfego entre os dois ALBs. Crie uma função do AWS Lambda na região de backup para promover a réplica de leitura e modificar os valores do grupo de Auto Scaling. Crie um alarme do Amazon CloudWatch baseado na métrica HTTPCode_Target_5XX_Count para o ALB na região primária. Configure o alarme do CloudWatch para invocar a função do Lambda.

B. Crie uma função do AWS Lambda na região de backup para promover a réplica de leitura e modificar os valores do grupo de Auto Scaling. Configure o Route 53 com uma verificação de integridade que monitore o aplicativo web e envie uma notificação do Amazon Simple Notification Service (Amazon SNS) para a função Lambda quando o status da verificação de integridade for "não íntegro". Atualize o registro do Route 53 do aplicativo com uma política de failover que roteie o tráfego para o ALB na região de backup quando ocorrer uma falha na verificação de integridade. **Mais votado**

C. Configure o grupo de Auto Scaling na região de backup para ter os mesmos valores que o grupo de Auto Scaling na região primária. Reconfigure o registro do Route 53 do aplicativo com uma política de roteamento baseada em latência que balanceie a carga do tráfego entre os dois ALBs. Remova a réplica de leitura. Substitua a réplica de leitura por uma instância de banco de dados RDS autônoma. Configure a replicação entre regiões entre as instâncias de banco de dados RDS usando snapshots e o Amazon S3.

D. Configure um endpoint no AWS Global Accelerator com os dois ALBs como alvos de ponderação igual. Crie uma função do AWS Lambda na região de backup para promover a réplica de leitura e modificar os valores do grupo de Auto Scaling. Crie um alarme do Amazon CloudWatch baseado na métrica HTTPCode_Target_5XX_Count para o ALB na região primária. Configure o alarme do CloudWatch para invocar a função do Lambda.

9- Uma empresa hospeda uma aplicação crítica em uma única instância do Amazon EC2. A aplicação utiliza um cluster de nó único do Amazon ElastiCache for Redis para um armazenamento de dados na memória. A aplicação utiliza uma instância do Amazon RDS for MariaDB para um banco de dados relacional. Para que a aplicação funcione, cada parte da infraestrutura deve estar íntegra e em estado ativo.\
Um arquiteto de soluções precisa aprimorar a arquitetura da aplicação para que a infraestrutura possa se recuperar automaticamente de falhas com o menor tempo de inatividade possível.\
Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Use um Elastic Load Balancer para distribuir o tráfego entre várias instâncias do EC2. Certifique-se de que as instâncias do EC2 façam parte de um grupo de Dimensionamento Automático com capacidade mínima de duas instâncias. **Mais votado**

B. Use um Elastic Load Balancer para distribuir o tráfego entre várias instâncias do EC2. Certifique-se de que as instâncias do EC2 estejam configuradas no modo ilimitado.

C. Modifique a instância do banco de dados para criar uma réplica de leitura na mesma Zona de Disponibilidade. Promova a réplica de leitura para ser a instância primária do banco de dados em cenários de falha.

D. Modifique a instância do banco de dados para criar uma implantação Multi-AZ que se estenda por duas Zonas de Disponibilidade. **Mais votado**

E. Crie um grupo de replicação para o cluster do ElastiCache para Redis. Configure o cluster para usar um grupo de Dimensionamento Automático com capacidade mínima de duas instâncias.

F. Crie um grupo de replicação para o cluster do ElastiCache para Redis. Habilite o Multi-AZ no cluster. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/)

10- Uma empresa de varejo opera seu aplicativo de comércio eletrônico na AWS. O aplicativo é executado em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). A empresa usa uma instância de banco de dados do Amazon RDS como backend do banco de dados. O Amazon CloudFront está configurado com uma origem que aponta para o ALB. O conteúdo estático é armazenado em cache. O Amazon Route 53 é usado para hospedar todas as zonas públicas.\
Após uma atualização do aplicativo, o ALB ocasionalmente retorna um erro de código de status 502 (Bad Gateway). A causa raiz são cabeçalhos HTTP malformados que são retornados ao ALB. A página da web retorna com sucesso quando um arquiteto de soluções a recarrega imediatamente após a ocorrência do erro.\
Enquanto a empresa trabalha no problema, o arquiteto de soluções precisa fornecer aos visitantes uma página de erro personalizada em vez da página de erro padrão do ALB.\
Qual combinação de etapas atenderá a esse requisito com a MENOR sobrecarga operacional? (Escolha duas.)

A. Crie um bucket do Amazon S3. Configure o bucket do S3 para hospedar uma página da web estática. Carregue as páginas de erro personalizadas para o Amazon S3. **Mais votado**

B. Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda se a resposta de verificação de integridade do ALB Target.FailedHealthChecks for maior que 0. Configure a função do Lambda para modificar a regra de encaminhamento no ALB para apontar para um servidor web acessível publicamente.

C. Modifique os registros existentes do Amazon Route 53 adicionando verificações de integridade. Configure um destino de fallback caso a verificação de integridade falhe. Modifique os registros DNS para que apontem para uma página da web de acesso público.

D. Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda se a resposta de verificação de integridade do ALB Elb.InternalError for maior que 0. Configure a função do Lambda para modificar a regra de encaminhamento no ALB para apontar para um servidor web acessível ao público.

E. Adicione uma resposta de erro personalizada configurando uma página de erro personalizada do CloudFront. Modifique os registros DNS para apontar para uma página da web acessível publicamente. **Mais votado**

11- Uma empresa possui muitas contas da AWS e usa o AWS Organizations para gerenciar todas elas. Um arquiteto de soluções deve implementar uma solução que permita à empresa compartilhar uma rede comum entre várias contas.\
A equipe de infraestrutura da empresa possui uma conta de infraestrutura dedicada com uma VPC. A equipe de infraestrutura deve usar essa conta para gerenciar a rede. Contas individuais não podem gerenciar suas próprias redes. No entanto, contas individuais devem ser capazes de criar recursos da AWS em sub-redes.\
Qual combinação de ações o arquiteto de soluções deve executar para atender a esses requisitos? (Escolha duas.)

A. Crie um gateway de trânsito na conta de infraestrutura.

B. Habilite o compartilhamento de recursos da conta de gerenciamento do AWS Organizations. **Mais votado**

C. Crie VPCs em cada conta da AWS dentro da organização no AWS Organizations. Configure as VPCs para compartilhar o mesmo intervalo CIDR e sub-redes que a VPC na conta de infraestrutura. Pareie as VPCs em cada conta individual com a VPC na conta de infraestrutura.

D. Crie um compartilhamento de recursos no AWS Resource Access Manager na conta de infraestrutura. Selecione a UO específica do AWS Organizations que usará a rede compartilhada. Selecione cada sub-rede para associar ao compartilhamento de recursos. **Mais votado**

E. Crie um compartilhamento de recursos no AWS Resource Access Manager na conta de infraestrutura. Selecione a UO específica do AWS Organizations que usará a rede compartilhada. Selecione cada lista de prefixos para associar ao compartilhamento de recursos.

12- Uma empresa deseja utilizar um aplicativo de software como serviço (SaaS) de terceiros. O aplicativo SaaS de terceiros é consumido por meio de diversas chamadas de API. O aplicativo SaaS de terceiros também é executado na AWS dentro de uma VPC.\
A empresa consumirá o aplicativo SaaS de terceiros de dentro de uma VPC. A empresa possui políticas de segurança internas que exigem o uso de conectividade privada que não atravessa a internet. Nenhum recurso executado na VPC da empresa pode ser acessado de fora da VPC da empresa. Todas as permissões devem estar em conformidade com os princípios do privilégio mínimo.\
Qual solução atende a esses requisitos?

A. Crie um endpoint VPC com interface AWS PrivateLink. Conecte esse endpoint ao serviço de endpoint fornecido pelo aplicativo SaaS de terceiros. Crie um grupo de segurança para limitar o acesso ao endpoint. Associe o grupo de segurança ao endpoint. **Mais votado**

B. Crie uma conexão VPN Site-to-Site da AWS entre o aplicativo SaaS de terceiros e a VPC da empresa. Configure ACLs de rede para limitar o acesso pelos túneis VPN.

C. Crie uma conexão de peering de VPC entre o aplicativo SaaS de terceiros e as tabelas de rotas do VPUpdate da empresa adicionando as rotas necessárias para a conexão de peering.

D. Crie um serviço de endpoint do AWS PrivateLink. Peça ao provedor de SaaS terceirizado para criar um endpoint de VPC de interface para este serviço de endpoint. Conceda permissões para o serviço de endpoint à conta específica do provedor de SaaS terceirizado.

13- Uma empresa precisa implementar um processo de aplicação de patches em seus servidores. Os servidores locais e as instâncias do Amazon EC2 utilizam diversas ferramentas para aplicar patches. A gerência exige um único relatório mostrando o status dos patches de todos os servidores e instâncias.\
Qual conjunto de ações um arquiteto de soluções deve adotar para atender a esses requisitos?

A. Use o AWS Systems Manager para gerenciar patches nos servidores locais e instâncias do EC2. Use o Systems Manager para gerar relatórios de conformidade de patches. **Mais votado**

B. Use o AWS OpsWorks para gerenciar patches nos servidores locais e instâncias do EC2. Use a integração do Amazon QuickSight com o OpsWorks para gerar relatórios de conformidade de patches.

C. Use uma regra do Amazon EventBridge para aplicar patches agendando uma tarefa de correção de patches no AWS Systems Manager. Use o Amazon Inspector para gerar relatórios de conformidade de patches.

D. Use o AWS OpsWorks para gerenciar patches nos servidores locais e instâncias do EC2. Use o AWS X-Ray para publicar o status do patch no AWS Systems Manager OpsCenter para gerar relatórios de conformidade de patches.

14- Uma empresa está executando uma aplicação em várias instâncias do Amazon EC2 em um grupo de Auto Scaling por trás de um Application Load Balancer. A carga na aplicação varia ao longo do dia, e as instâncias do EC2 são dimensionadas vertical e horizontalmente regularmente. Os arquivos de log das instâncias do EC2 são copiados para um bucket central do Amazon S3 a cada 15 minutos. A equipe de segurança descobre que os arquivos de log estão ausentes em algumas das instâncias do EC2 encerradas.\
Qual conjunto de ações garantirá que os arquivos de log sejam copiados para o bucket central do S3 a partir das instâncias do EC2 encerradas?

A. Crie um script para copiar arquivos de log para o Amazon S3 e armazene-o em um arquivo na instância do EC2. Crie um gancho de ciclo de vida do Auto Scaling e uma regra do Amazon EventBridge para detectar eventos de ciclo de vida do grupo de Auto Scaling. Invoque uma função do AWS Lambda na transição autoscaling:EC2_INSTANCE_TERMINATING para enviar ABANDON para o grupo de Auto Scaling a fim de impedir o encerramento, execute o script para copiar os arquivos de log e encerrar a instância usando o SDK da AWS.

B. Crie um documento do AWS Systems Manager com um script para copiar arquivos de log para o Amazon S3. Crie um gancho de ciclo de vida do Auto Scaling e uma regra do Amazon EventBridge para detectar eventos de ciclo de vida do grupo de Auto Scaling. Invoque uma função do AWS Lambda na transição autoscaling:EC2_INSTANCE_TERMINATING para chamar a operação SendCommand da API do AWS Systems Manager para executar o documento e copiar os arquivos de log e enviar CONTINUE para o grupo de Auto Scaling para encerrar a instância. **Mais votado**

C. Altere a taxa de entrega de logs para a cada 5 minutos. Crie um script para copiar os arquivos de log para o Amazon S3 e adicione-o aos dados do usuário da instância do EC2. Crie uma regra do Amazon EventBridge para detectar o encerramento da instância do EC2. Invoque uma função do AWS Lambda a partir da regra do EventBridge que use a CLI da AWS para executar o script de dados do usuário para copiar os arquivos de log e encerrar a instância.

D. Crie um documento do AWS Systems Manager com um script para copiar arquivos de log para o Amazon S3. Crie um gancho de ciclo de vida de Auto Scaling que publique uma mensagem em um tópico do Amazon Simple Notification Service (Amazon SNS). A partir da notificação do SNS, chame a operação SendCommand da API do AWS Systems Manager para executar o documento e copiar os arquivos de log e enviar ABANDON para o grupo de Auto Scaling para encerrar a instância.

15- Uma empresa utiliza várias contas da AWS. Os registros DNS estão armazenados em uma zona privada hospedada para o Amazon Route 53 na Conta A. Os aplicativos e bancos de dados da empresa estão em execução na Conta B.\
Um arquiteto de soluções implantará um aplicativo de duas camadas em uma nova VPC. Para simplificar a configuração, o conjunto de registros CNAME db.example.com para o endpoint do Amazon RDS foi criado em uma zona privada hospedada para o Amazon Route 53.\
Durante a implantação, o aplicativo falhou ao iniciar. A solução de problemas revelou que db.example.com não pode ser resolvido na instância do Amazon EC2. O arquiteto de soluções confirmou que o conjunto de registros foi criado corretamente no Route 53.\
Qual combinação de etapas o arquiteto de soluções deve seguir para resolver esse problema? (Escolha duas.)

A. Implante o banco de dados em uma instância EC2 separada na nova VPC. Crie um conjunto de registros para o IP privado da instância na zona hospedada privada.

B. Use SSH para se conectar à instância EC2 da camada de aplicação. Adicione um endereço IP de endpoint RDS ao arquivo /etc/resolv.conf.

C. Crie uma autorização para associar a zona privada hospedada na Conta A à nova VPC na Conta B. **Mais votado**

D. Crie uma zona hospedada privada para o domínio com de exemplo na Conta B. Configure a replicação do Route 53 entre contas da AWS.

E. Associe uma nova VPC na Conta B a uma zona hospedada na Conta A. Exclua a autorização de associação na Conta A. **Mais**

16- Uma empresa utilizou instâncias do Amazon EC2 para implantar uma frota web para hospedar um blog. As instâncias do EC2 estão atrás de um Application Load Balancer (ALB) e configuradas em um grupo de Auto Scaling. A aplicação web armazena todo o conteúdo do blog em um volume do Amazon EFS.\
A empresa adicionou recentemente um recurso para que blogueiros adicionem vídeos às suas postagens, atraindo 10 vezes mais tráfego de usuários do que antes. Em horários de pico, os usuários relatam problemas de buffer e tempo limite ao tentar acessar o site ou assistir a vídeos.\
Qual é a implantação MAIS econômica e escalável que resolverá os problemas para os usuários?

A. Reconfigure o Amazon EFS para habilitar o máximo de E/S.

B. Atualize o site do blog para usar volumes de armazenamento de instâncias. Copie o conteúdo do site para os volumes na inicialização e para o Amazon S3 no encerramento.

C. Configure uma distribuição do Amazon CloudFront. Aponte a distribuição para um bucket do S3 e migre os vídeos do EFS para o Amazon S3. **Mais votado**

D. Configure uma distribuição do Amazon CloudFront para todo o conteúdo do site e aponte a distribuição para o ALB.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/2/)

17- Uma empresa com escritórios globais possui uma única conexão AWS Direct Connect de 1 Gbps com uma única região da AWS. A rede local da empresa utiliza essa conexão para se comunicar com os recursos da empresa na Nuvem AWS. A conexão possui uma única interface virtual privada que se conecta a uma única VPC.\
Um arquiteto de soluções deve implementar uma solução que adicione uma conexão Direct Connect redundante na mesma região. A solução também deve fornecer conectividade com outras regiões por meio do mesmo par de conexões Direct Connect à medida que a empresa se expande para outras regiões.\
Qual solução atende a esses requisitos?

A. Provisione um gateway Direct Connect. Exclua a interface virtual privada existente da conexão existente. Crie a segunda conexão Direct Connect. Crie uma nova interface virtual privada em cada conexão e conecte ambas as interfaces virtuais privadas ao gateway Direct Connect. Conecte o gateway Direct Connect à VPC única. **Mais votado**

B. Mantenha a interface virtual privada existente. Crie a segunda conexão Direct Connect. Crie uma nova interface virtual privada na nova conexão e conecte-a à VPC única.

C. Mantenha a interface virtual privada existente. Crie a segunda conexão Direct Connect. Crie uma nova interface virtual pública na nova conexão e conecte-a à VPC única.

D. Provisione um gateway de trânsito. Exclua a interface virtual privada existente da conexão existente. Crie a segunda conexão Direct Connect. Crie uma nova interface virtual privada em cada conexão e conecte ambas as interfaces virtuais privadas ao gateway de trânsito. Associe o gateway de trânsito à VPC única.

18- Uma empresa possui uma aplicação web que permite aos usuários enviar vídeos curtos. Os vídeos são armazenados em volumes do Amazon EBS e analisados por um software de reconhecimento personalizado para categorização.\
O site contém conteúdo estático com tráfego variável, com picos em determinados meses. A arquitetura consiste em instâncias do Amazon EC2 em execução em um grupo de Auto Scaling para a aplicação web e instâncias do EC2 em execução em um grupo de Auto Scaling para processar uma fila do Amazon SQS. A empresa deseja reestruturar a aplicação para reduzir a sobrecarga operacional usando serviços gerenciados da AWS sempre que possível e eliminar dependências de software de terceiros.\
Qual solução atende a esses requisitos?

A. Use contêineres do Amazon ECS para o aplicativo web e instâncias Spot para o grupo de Auto Scaling que processa a fila SQS. Substitua o software personalizado pelo Amazon Rekognition para categorizar os vídeos.

B. Armazene os vídeos enviados no Amazon EFS e monte o sistema de arquivos nas instâncias do EC2 para o aplicativo web. Processe a fila SQS com uma função do AWS Lambda que chama a API do Amazon Rekognition para categorizar os vídeos.

C. Hospede o aplicativo web no Amazon S3. Armazene os vídeos enviados no Amazon S3. Use a notificação de eventos do S3 para publicar eventos na fila do SQS. Processe a fila do SQS com uma função do AWS Lambda que chama a API do Amazon Rekognition para categorizar os vídeos. **Mais votado**

D. Use o AWS Elastic Beanstalk para iniciar instâncias do EC2 em um grupo de Auto Scaling para a aplicação web e iniciar um ambiente de trabalho para processar a fila SQS. Substitua o software personalizado pelo Amazon Rekognition para categorizar os vídeos.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/2/)

19- Uma empresa possui uma aplicação sem servidor composta pelas funções Amazon CloudFront, Amazon API Gateway e AWS Lambda. O processo atual de implantação do código da aplicação consiste em criar uma nova versão da função Lambda e executar um script da CLI da AWS para atualizar. Se a nova versão da função apresentar erros, outro script da CLI reverte a situação, implantando a versão anterior funcional da função. A empresa gostaria de reduzir o tempo de implantação de novas versões da lógica da aplicação fornecida pelas funções Lambda e também o tempo de detecção e reversão quando erros são identificados.\
Como isso pode ser feito?

A. Crie e implante pilhas aninhadas do AWS CloudFormation com a pilha pai composta pela distribuição do AWS CloudFront e pelo API Gateway, e a pilha filha contendo a função Lambda. Para alterações no Lambda, crie um conjunto de alterações do AWS CloudFormation e implante; se ocorrerem erros, reverta o conjunto de alterações do AWS CloudFormation para a versão anterior.

B. Use o AWS SAM e o AWS CodeDeploy integrado para implantar a nova versão do Lambda, transferir gradualmente o tráfego para a nova versão e usar funções de teste pré e pós-tráfego para verificar o código. Reverta se os alarmes do Amazon CloudWatch forem acionados. **Mais votado**

C. Refatore os scripts da AWS CLI em um único script que implemente a nova versão do Lambda. Após a conclusão da implantação, os testes de script são executados. Se forem detectados erros, reverta para a versão anterior do Lambda.

D. Crie e implante uma pilha do AWS CloudFormation que consiste em um novo endpoint do API Gateway que faz referência à nova versão do Lambda. Altere a origem do CloudFront para o novo endpoint do API Gateway, monitore erros e, se detectados, altere a origem do AWS CloudFront para o endpoint do API Gateway anterior.

20- Uma empresa planeja armazenar um grande número de documentos arquivados e disponibilizá-los aos funcionários por meio da intranet corporativa. Os funcionários acessarão o sistema conectando-se por meio de um serviço VPN cliente conectado a uma VPC. Os dados não devem ser acessíveis ao público.\
Os documentos que a empresa está armazenando são cópias de dados armazenados em mídia física em outro local. O número de solicitações será baixo. A disponibilidade e a velocidade de recuperação não são preocupações da empresa.\
Qual solução atenderá a esses requisitos com o MENOR custo?

A. Crie um bucket do Amazon S3. Configure o bucket do S3 para usar a classe de armazenamento S3 One Zone-Infrequent Access (S3 One Zone-IA) como padrão. Configure o bucket do S3 para hospedagem de sites. Crie um endpoint de interface do S3. Configure o bucket do S3 para permitir acesso somente por meio desse endpoint. **Mais votado**

B. Inicie uma instância do Amazon EC2 que execute um servidor web. Anexe um sistema de arquivos do Amazon Elastic File System (Amazon EFS) para armazenar os dados arquivados na classe de armazenamento EFS One Zone-Infrequent Access (EFS One Zone-IA). Configure os grupos de segurança da instância para permitir acesso apenas de redes privadas.

C. Inicie uma instância do Amazon EC2 que execute um servidor web. Anexe um volume do Amazon Elastic Block Store (Amazon EBS) para armazenar os dados arquivados. Use o tipo de volume Cold HDD (sc1). Configure os grupos de segurança da instância para permitir acesso apenas de redes privadas.

D. Crie um bucket do Amazon S3. Configure o bucket do S3 para usar a classe de armazenamento S3 Glacier Deep Archive como padrão. Configure o bucket do S3 para hospedagem de sites. Crie um endpoint de interface S3. Configure o bucket do S3 para permitir acesso apenas por meio desse endpoint.

21- Uma empresa está usando um serviço local do Active Directory para autenticação de usuários. A empresa deseja usar o mesmo serviço de autenticação para fazer login nas contas da AWS da empresa, que usam o AWS Organizations. A conectividade VPN Site-to-Site da AWS já existe entre o ambiente local e todas as contas da AWS da empresa.\
A política de segurança da empresa exige acesso condicional às contas com base em grupos e funções de usuários. As identidades dos usuários devem ser gerenciadas em um único local.\
Qual solução atenderá a esses requisitos?

A. Configure o AWS IAM Identity Center (AWS Single Sign-On) para se conectar ao Active Directory usando SAML 2.0. Habilite o provisionamento automático usando o protocolo System for Cross-domain Identity Management (SCIM) v2.0. Conceda acesso às contas da AWS usando controles de acesso baseados em atributos (ABACs). **Mais votado**

B. Configure o AWS IAM Identity Center (AWS Single Sign-On) usando o IAM Identity Center como fonte de identidade. Habilite o provisionamento automático usando o protocolo System for Cross-domain Identity Management (SCIM) v2.0. Conceda acesso às contas da AWS usando os conjuntos de permissões do IAM Identity Center.

C. Em uma das contas da AWS da empresa, configure o AWS Identity and Access Management (IAM) para usar um provedor de identidade SAML 2.0. Provisione usuários do IAM mapeados para os usuários federados. Conceda acesso correspondente aos grupos apropriados no Active Directory. Conceda acesso às contas da AWS necessárias usando usuários do IAM entre contas.

D. Em uma das contas da AWS da empresa, configure o AWS Identity and Access Management (IAM) para usar um provedor de identidade OpenID Connect (OIDC). Provisione funções do IAM que concedam acesso à conta da AWS para os usuários federados que correspondem aos grupos apropriados no Active Directory. Conceda acesso às contas da AWS necessárias usando funções do IAM entre contas.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/3/)

22- Uma empresa de software implantou uma aplicação que consome uma API REST usando o Amazon API Gateway, funções do AWS Lambda e uma tabela do Amazon DynamoDB. A aplicação está apresentando um aumento no número de erros durante solicitações PUT. A maioria das chamadas PUT vem de um pequeno número de clientes autenticados com chaves de API específicas.\
Um arquiteto de soluções identificou que um grande número de solicitações PUT se origina de um único cliente. A API não é crítica e os clientes podem tolerar novas tentativas de chamadas malsucedidas. No entanto, os erros são exibidos aos clientes e estão prejudicando a reputação da API.\
O que o arquiteto de soluções deve recomendar para melhorar a experiência do cliente?

A. Implementar lógica de repetição com backoff exponencial e variação irregular no aplicativo cliente. Garantir que os erros sejam detectados e tratados com mensagens de erro descritivas.

B. Implemente a limitação de API por meio de um plano de uso no nível do API Gateway. Certifique-se de que o aplicativo cliente processe as respostas do código 429 sem erros. **Mais votado**

C. Ative o cache da API para melhorar a capacidade de resposta na fase de produção. Execute testes de carga de 10 minutos. Verifique se a capacidade do cache é adequada para a carga de trabalho.

D. Implemente a simultaneidade reservada no nível da função Lambda para fornecer os recursos necessários durante aumentos repentinos no tráfego.

23- Uma empresa está executando um aplicativo com uso intensivo de dados na AWS. O aplicativo é executado em um cluster de centenas de instâncias do Amazon EC2. Um sistema de arquivos compartilhado também é executado em várias instâncias do EC2 que armazenam 200 TB de dados. O aplicativo lê e modifica os dados no sistema de arquivos compartilhado e gera um relatório. A tarefa é executada uma vez por mês, lê um subconjunto dos arquivos do sistema de arquivos compartilhado e leva cerca de 72 horas para ser concluída. As instâncias de computação são escalonadas em um grupo de Auto Scaling, mas as instâncias que hospedam o sistema de arquivos compartilhado são executadas continuamente. As instâncias de computação e armazenamento estão todas na mesma região da AWS.\
Um arquiteto de soluções precisa reduzir custos substituindo as instâncias do sistema de arquivos compartilhado. O sistema de arquivos deve fornecer acesso de alto desempenho aos dados necessários durante a execução de 72 horas.\
Qual solução proporcionará a MAIOR redução geral de custos, atendendo a esses requisitos?

A. Migre os dados do sistema de arquivos compartilhado existente para um bucket do Amazon S3 que use a classe de armazenamento S3 Intelligent-Tiering. Antes da execução do trabalho mensal, use o Amazon FSx for Lustre para criar um novo sistema de arquivos com os dados do Amazon S3 usando o carregamento lento. Use o novo sistema de arquivos como armazenamento compartilhado durante o trabalho. Exclua o sistema de arquivos quando o trabalho for concluído. **Mais votado**

B. Migre os dados do sistema de arquivos compartilhado existente para um grande volume do Amazon Elastic Block Store (Amazon EBS) com Multi-Attach habilitado. Anexe o volume EBS a cada uma das instâncias usando um script de dados do usuário no modelo de inicialização do grupo de Auto Scaling. Use o volume EBS como armazenamento compartilhado durante o trabalho. Desanexe o volume EBS quando o trabalho for concluído.

C. Migre os dados do sistema de arquivos compartilhado existente para um bucket do Amazon S3 que use a classe de armazenamento S3 Standard. Antes da execução do trabalho mensal, use o Amazon FSx for Lustre para criar um novo sistema de arquivos com os dados do Amazon S3 usando o carregamento em lote. Use o novo sistema de arquivos como armazenamento compartilhado durante o trabalho. Exclua o sistema de arquivos quando o trabalho for concluído.

D. Migre os dados do sistema de arquivos compartilhado existente para um bucket do Amazon S3. Antes da execução do trabalho mensal, use o AWS Storage Gateway para criar um gateway de arquivos com os dados do Amazon S3. Use o gateway de arquivos como armazenamento compartilhado para o trabalho. Exclua o gateway de arquivos quando o trabalho for concluído.

24- Uma empresa está desenvolvendo um novo serviço que será acessado via TCP em uma porta estática. Um arquiteto de soluções deve garantir que o serviço tenha alta disponibilidade, redundância entre as Zonas de Disponibilidade e seja acessível usando o nome DNS my.service.com, que é de acesso público. O serviço deve usar atribuições de endereços fixas para que outras empresas possam adicionar os endereços às suas listas de permissões.\
Supondo que os recursos sejam implantados em várias Zonas de Disponibilidade em uma única Região, qual solução atenderá a esses requisitos?

A. Crie instâncias do Amazon EC2 com um endereço IP elástico para cada instância. Crie um Balanceador de Carga de Rede (NLB) e exponha a porta TCP estática. Registre as instâncias do EC2 no NLB. Crie um novo conjunto de registros de servidor de nomes chamado my.service.com e atribua os endereços IP elásticos das instâncias do EC2 a esse conjunto. Forneça os endereços IP elásticos das instâncias do EC2 às outras empresas para que adicionem às suas listas de permissões.

B. Crie um cluster do Amazon ECS e uma definição de serviço para o aplicativo. Crie e atribua endereços IP públicos para o cluster do ECS. Crie um Balanceador de Carga de Rede (NLB) e exponha a porta TCP. Crie um grupo de destino e atribua o nome do cluster do ECS ao NLC. Crie um novo conjunto de registros A chamado my.service.com e atribua os endereços IP públicos do cluster do ECS a esse conjunto. Forneça os endereços IP públicos do cluster do ECS às outras empresas para que adicionem às suas listas de permissões.

C. Crie instâncias do Amazon EC2 para o serviço. Crie um endereço IP elástico para cada Zona de Disponibilidade. Crie um Balanceador de Carga de Rede (NLB) e exponha a porta TCP atribuída. Atribua os endereços IP elásticos ao NLB para cada Zona de Disponibilidade. Crie um grupo de destino e registre as instâncias do EC2 no NLB. Crie um novo conjunto de registros A (alias) denominado my.service.com e atribua o nome DNS do NLB ao conjunto de registros. **Mais votado**

D. Crie um cluster do Amazon ECS e uma definição de serviço para a aplicação. Crie e atribua um endereço IP público para cada host no cluster. Crie um Application Load Balancer (ALB) e exponha a porta TCP estática. Crie um grupo de destino e atribua o nome da definição de serviço do ECS ao ALB. Crie um novo conjunto de registros CNAME e associe os endereços IP públicos a ele. Forneça os endereços IP elásticos das instâncias do Amazon EC2 às outras empresas para que adicionem às suas listas de permissões.

25- Uma empresa utiliza uma plataforma de análise de dados local. O sistema possui alta disponibilidade em uma configuração totalmente redundante em 12 servidores no data center da empresa.\
O sistema executa tarefas agendadas, tanto por hora quanto por dia, além de solicitações pontuais de usuários. As tarefas agendadas podem levar de 20 minutos a 2 horas para serem concluídas e têm SLAs rigorosos. As tarefas agendadas representam 65% do uso do sistema. As tarefas do usuário geralmente terminam de ser executadas em menos de 5 minutos e não têm SLA. As tarefas do usuário representam 35% do uso do sistema. Durante falhas do sistema, as tarefas agendadas devem continuar a cumprir os SLAs. No entanto, as tarefas do usuário podem ser atrasadas.\
Um arquiteto de soluções precisa migrar o sistema para instâncias do Amazon EC2 e adotar um modelo baseado em consumo para reduzir custos sem compromissos de longo prazo. A solução deve manter alta disponibilidade e não deve afetar os SLAs.\
Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Divida as 12 instâncias em duas Zonas de Disponibilidade na região da AWS escolhida. Execute duas instâncias em cada Zona de Disponibilidade como Instâncias On-Demand com Reservas de Capacidade. Execute quatro instâncias em cada Zona de Disponibilidade como Instâncias Spot.

B. Divida as 12 instâncias em três Zonas de Disponibilidade na região da AWS escolhida. Em uma das Zonas de Disponibilidade, execute todas as quatro instâncias como Instâncias On-Demand com Reservas de Capacidade. Execute as instâncias restantes como Instâncias Spot.

C. Divida as 12 instâncias em três Zonas de Disponibilidade na região da AWS escolhida. Execute duas instâncias em cada Zona de Disponibilidade como Instâncias On-Demand com um Savings Plan. Execute duas instâncias em cada Zona de Disponibilidade como Instâncias Spot.

D. Divida as 12 instâncias em três Zonas de Disponibilidade na região da AWS escolhida. Execute três instâncias em cada Zona de Disponibilidade como Instâncias On-Demand com Reservas de Capacidade. Execute uma instância em cada Zona de Disponibilidade como uma Instância Spot. **Mais votado**

26- Um engenheiro de segurança determinou que um aplicativo existente recupera credenciais para um banco de dados Amazon RDS para MySQL a partir de um arquivo criptografado no Amazon S3. Para a próxima versão do aplicativo, o engenheiro de segurança deseja implementar as seguintes alterações no design do aplicativo para melhorar a segurança:\
O banco de dados deve usar senhas fortes, geradas aleatoriamente, armazenadas em um serviço gerenciado seguro da AWS.\
Os recursos do aplicativo devem ser implantados por meio do AWS CloudFormation.\
O aplicativo deve rotacionar as credenciais do banco de dados a cada 90 dias.\
Um arquiteto de soluções gerará um modelo do CloudFormation para implantar o aplicativo.\
Quais recursos especificados no modelo do CloudFormation atenderão aos requisitos do engenheiro de segurança com a MENOR sobrecarga operacional?

A. Gere a senha do banco de dados como um recurso secreto usando o AWS Secrets Manager. Crie um recurso de função do AWS Lambda para rotacionar a senha do banco de dados. Especifique um recurso RotationSchedule do Secrets Manager para rotacionar a senha do banco de dados a cada 90 dias. **Mais votado**

B. Gere a senha do banco de dados como um tipo de parâmetro SecureString usando o AWS Systems Manager Parameter Store. Crie um recurso de função do AWS Lambda para rotacionar a senha do banco de dados. Especifique um recurso Parameter Store RotationSchedule para rotacionar a senha do banco de dados a cada 90 dias.

C. Gere a senha do banco de dados como um recurso secreto usando o AWS Secrets Manager. Crie um recurso de função do AWS Lambda para rotacionar a senha do banco de dados. Crie um recurso de regra agendada do Amazon EventBridge para acionar a rotação de senhas da função Lambda a cada 90 dias.

D. Gere a senha do banco de dados como um tipo de parâmetro SecureString usando o AWS Systems Manager Parameter Store. Especifique um recurso AWS AppSync DataSource para rotacionar automaticamente a senha do banco de dados a cada 90 dias.

27- Uma empresa está armazenando dados em diversas tabelas do Amazon DynamoDB. Um arquiteto de soluções deve usar uma arquitetura sem servidor para tornar os dados acessíveis publicamente por meio de uma API simples via HTTPS. A solução deve escalar automaticamente em resposta à demanda.\
Quais soluções atendem a esses requisitos? (Escolha duas.)

A. Crie uma API REST do Amazon API Gateway. Configure essa API com integrações diretas ao DynamoDB usando o tipo de integração AWS do API Gateway. **Mais votado**

B. Crie uma API HTTP do Amazon API Gateway. Configure essa API com integrações diretas ao Dynamo DB usando o tipo de integração AWS do API Gateway.

C. Crie uma API HTTP do Amazon API Gateway. Configure essa API com integrações às funções do AWS Lambda que retornam dados das tabelas do DynamoDB. **Mais votado**

D. Crie um acelerador no AWS Global Accelerator. Configure este acelerador com integrações de funções do AWS Lambda@Edge que retornam dados das tabelas do DynamoDB.

E. Crie um balanceador de carga de rede. Configure regras de ouvinte para encaminhar solicitações às funções apropriadas do AWS Lambda.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/3/)

28- Uma empresa registrou 10 novos nomes de domínio. A empresa utiliza os domínios para marketing online. A empresa precisa de uma solução que redirecione os visitantes online para uma URL específica para cada domínio. Todos os domínios e URLs de destino são definidos em um documento JSON. Todos os registros DNS são gerenciados pelo Amazon Route 53.\
Um arquiteto de soluções deve implementar um serviço de redirecionamento que aceite solicitações HTTP e HTTPS.\
Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos com o MENOR esforço operacional? (Escolha três.)

A. Crie uma página web dinâmica que seja executada em uma instância do Amazon EC2. Configure a página web para usar o documento JSON em combinação com a mensagem do evento para pesquisar e responder com uma URL de redirecionamento.

B. Crie um Application Load Balancer que inclua ouvintes HTTP e HTTPS.

C. Crie uma função do AWS Lambda que use o documento JSON em combinação com a mensagem do evento para consultar e responder com uma URL de redirecionamento. **Mais votado**

D. Use uma API do Amazon API Gateway com um domínio personalizado para publicar uma função do AWS Lambda.

E. Crie uma distribuição do Amazon CloudFront. Implante uma função Lambda@Edge. **Mais votado**

F. Crie um certificado SSL usando o Gerenciador de Certificados da AWS (ACM). Inclua os domínios como Nomes Alternativos de Assunto.

29- Uma empresa com várias contas na AWS utiliza o AWS Organizations. As contas na AWS da empresa hospedam VPCs, instâncias do Amazon EC2 e contêineres.\
A equipe de conformidade da empresa implantou uma ferramenta de segurança em cada VPC onde a empresa possui implantações. As ferramentas de segurança são executadas em instâncias do EC2 e enviam informações para a conta da AWS dedicada à equipe de conformidade. A empresa marcou todos os recursos relacionados à conformidade com a chave "costCenter" e o valor "compliance".\
A empresa deseja identificar o custo das ferramentas de segurança em execução nas instâncias do EC2 para poder cobrar da conta da equipe de conformidade na AWS. O cálculo de custo deve ser o mais preciso possível.\
O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Na conta de gerenciamento da organização, ative a tag definida pelo usuário costCenter. Configure os Relatórios mensais de Custo e Uso da AWS para salvar em um bucket do Amazon S3 na conta de gerenciamento. Use o detalhamento de tags no relatório para obter o custo total dos recursos marcados com costCenter. **Mais votado**

B. Nas contas de membro da organização, ative a tag costCenter definida pelo usuário. Configure os Relatórios de Custo e Uso mensais da AWS para salvá-los em um bucket do Amazon S3 na conta de gerenciamento. Agende uma função mensal do AWS Lambda para recuperar os relatórios e calcular o custo total dos recursos marcados com costCenter.

C. Nas contas de membro da organização, ative a tag definida pelo usuário do costCenter. Na conta de gerenciamento, agende um Relatório de Custo e Uso mensal da AWS. Use o detalhamento das tags no relatório para calcular o custo total dos recursos marcados com o costCenter.

D. Crie um relatório personalizado na visualização da organização no AWS Trusted Advisor. Configure o relatório para gerar um resumo de faturamento mensal para os recursos marcados como costCenter na conta da equipe de conformidade na AWS.

30- Uma empresa possui 50 contas da AWS que são membros de uma organização no AWS Organizations. Cada conta contém várias VPCs. A empresa deseja usar o AWS Transit Gateway para estabelecer conectividade entre as VPCs em cada conta membro. Cada vez que uma nova conta membro é criada, a empresa deseja automatizar o processo de criação de uma nova VPC e de um anexo de gateway de trânsito.\
Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Na conta de gerenciamento, compartilhe o gateway de trânsito com contas de membros usando o AWS Resource Access Manager. **Mais votado**

B. Na conta de gerenciamento, compartilhe o gateway de trânsito com contas de membros usando um SCP do AWS Organizations.

C. Inicie um conjunto de pilhas do AWS CloudFormation a partir da conta de gerenciamento que cria automaticamente uma nova VPC e um anexo de gateway de trânsito da VPC em uma conta de membro. Associe o anexo ao gateway de trânsito na conta de gerenciamento usando o ID do gateway de trânsito. **Mais votado**

D. Inicie um conjunto de pilhas do AWS CloudFormation a partir da conta de gerenciamento que cria automaticamente uma nova VPC e um anexo de gateway de trânsito de peering em uma conta de membro. Compartilhe o anexo com o gateway de trânsito na conta de gerenciamento usando uma função vinculada ao serviço do gateway de trânsito.

E. Na conta de gerenciamento, compartilhe o gateway de trânsito com contas de membros usando o AWS Service Catalog.

31- Uma empresa deseja permitir que seus desenvolvedores adquiram software de terceiros por meio do AWS Marketplace. A empresa utiliza uma estrutura de contas do AWS Organizations com todos os recursos habilitados e possui uma conta de serviços compartilhados em cada unidade organizacional (UO) que será usada pelos gerentes de compras. A política da equipe de compras indica que os desenvolvedores devem poder obter software de terceiros apenas de uma lista aprovada e usar o Private Marketplace no AWS Marketplace para atender a esse requisito. A equipe de compras deseja que a administração do Private Marketplace seja restrita a uma função denominada procurement-manager-role, que pode ser assumida pelos gerentes de compras. Outros usuários, grupos, funções e administradores de contas do IAM na empresa devem ter acesso administrativo negado ao Private Marketplace.\
Qual é a maneira MAIS eficiente de projetar uma arquitetura que atenda a esses requisitos?

A. Crie uma função do IAM chamada procurement-manager-role em todas as contas da AWS na organização. Adicione a política gerenciada PowerUserAccess à função. Aplique uma política em linha a todos os usuários e funções do IAM em cada conta da AWS para negar permissões na política gerenciada AWSPrivateMarketplaceAdminFullAccess.

B. Crie uma função do IAM chamada procurement-manager-role em todas as contas da AWS na organização. Adicione a política gerenciada AdministratorAccess à função. Defina um limite de permissões com a política gerenciada AWSPrivateMarketplaceAdminFullAccess e anexe-a a todas as funções de desenvolvedor.

C. Crie uma função do IAM chamada procurement-manager-role em todas as contas de serviços compartilhados da organização. Adicione a política gerenciada AWSPrivateMarketplaceAdminFullAccess à função. Crie um SCP de nível raiz da organização para negar permissões de administração do Private Marketplace a todos, exceto à função chamada procurement-manager-role. Crie outro SCP de nível raiz da organização para negar permissões de criação de uma função do IAM chamada procurement-manager-role a todos na organização. **Mais votado**

D. Crie uma função do IAM chamada procurement-manager-role em todas as contas da AWS que serão usadas pelos desenvolvedores. Adicione a política gerenciada AWSPrivateMarketplaceAdminFullAccess à função. Crie um SCP em Organizações para negar permissões de administração do Private Marketplace a todos, exceto à função chamada procurement-manager-role. Aplique o SCP a todas as contas de serviços compartilhados na organização.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/4/)

32- Uma empresa está implementando o AWS Organizations para restringir seus desenvolvedores a usar apenas Amazon EC2, Amazon S3 e Amazon DynamoDB. A conta de desenvolvedores reside em uma unidade organizacional (UO) dedicada. O arquiteto de soluções implementou o seguinte SCP na conta de desenvolvedores:\

Quando esta política é implantada, os usuários do IAM na conta de desenvolvedores ainda podem usar serviços da AWS que não estão listados na política.\
O que o arquiteto de soluções deve fazer para impedir que os desenvolvedores usem serviços fora do escopo desta política?

A. Crie uma declaração de negação explícita para cada serviço da AWS que deve ser restringido.

B. Remova o SCP FullAWSAccess da UO da conta de desenvolvedores. **Mais votado**

C. Modifique o SCP FullAWSAccess para negar explicitamente todos os serviços.

D. Adicione uma declaração de negação explícita usando um curinga ao final do SCP.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/4/)

33- Uma empresa hospeda uma API REST monolítica para um aplicativo móvel em cinco instâncias do Amazon EC2 em sub-redes públicas de uma VPC. Clientes móveis se conectam à API usando um nome de domínio hospedado no Amazon Route 53. A empresa criou uma política de roteamento de resposta multivalor do Route 53 com os endereços IP de todas as instâncias do EC2. Recentemente, o aplicativo foi sobrecarregado por aumentos grandes e repentinos de tráfego. O aplicativo não tem conseguido acompanhar o tráfego.\
Um arquiteto de soluções precisa implementar uma solução para que o aplicativo possa lidar com a carga nova e variável.\
Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Separe a API em funções individuais do AWS Lambda. Configure uma API REST do Amazon API Gateway com integração com Lambda para o backend. Atualize o registro do Route 53 para apontar para a API do API Gateway. **Mais votado**

B. Conteinerize a lógica da API. Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). Execute os contêineres no cluster usando o Amazon EC2. Crie uma entrada no Kubernetes. Atualize o registro do Route 53 para apontar para a entrada no Kubernetes.

C. Crie um grupo de Auto Scaling. Coloque todas as instâncias do EC2 no grupo de Auto Scaling. Configure o grupo de Auto Scaling para executar ações de escalonamento com base na utilização da CPU. Crie uma função do AWS Lambda que reaja às alterações do grupo de Auto Scaling e atualize o registro do Route 53.

D. Crie um Application Load Balancer (ALB) na frente da API. Mova as instâncias do EC2 para sub-redes privadas na VPC. Adicione as instâncias do EC2 como alvos para o ALB. Atualize o registro do Route 53 para apontar para o ALB.

34- Uma empresa criou uma UO no AWS Organizations para cada uma de suas equipes de engenharia. Cada UO possui várias contas da AWS. A organização possui centenas de contas da AWS.\
Um arquiteto de soluções deve projetar uma solução para que cada UO possa visualizar um detalhamento dos custos de uso em suas contas da AWS.\
Qual solução atende a esses requisitos?

A. Crie um Relatório de Custo e Uso (CUR) da AWS para cada UO usando o AWS Resource Access Manager. Permita que cada equipe visualize o CUR por meio de um painel do Amazon QuickSight.

B. Crie um Relatório de Custo e Uso (CUR) da AWS a partir da conta de gerenciamento do AWS Organizations. Permita que cada equipe visualize o CUR por meio de um painel do Amazon QuickSight. **Mais votado**

C. Crie um Relatório de Custo e Uso (CUR) da AWS em cada conta de membro do AWS Organizations. Permita que cada equipe visualize o CUR por meio de um painel do Amazon QuickSight.

D. Crie um Relatório de Custo e Uso (CUR) da AWS usando o AWS Systems Manager. Permita que cada equipe visualize o CUR por meio dos painéis do OpsCenter do Systems Manager.

35- Uma empresa está armazenando dados localmente em um servidor de arquivos Windows. A empresa produz 5 GB de novos dados diariamente.\
A empresa migrou parte de sua carga de trabalho baseada em Windows para a AWS e precisa que os dados estejam disponíveis em um sistema de arquivos na nuvem. A empresa já estabeleceu uma conexão AWS Direct Connect entre a rede local e a AWS.\
Qual estratégia de migração de dados a empresa deve usar?

A. Use a opção de gateway de arquivos no AWS Storage Gateway para substituir o servidor de arquivos do Windows existente e apontar o compartilhamento de arquivos existente para o novo gateway de arquivos.

B. Use o AWS DataSync para agendar uma tarefa diária para replicar dados entre o servidor de arquivos Windows local e o Amazon FSx. **Mais votado**

C. Use o AWS Data Pipeline para agendar uma tarefa diária para replicar dados entre o servidor de arquivos Windows local e o Amazon Elastic File System (Amazon EFS).

D. Use o AWS DataSync para agendar uma tarefa diária para replicar dados entre o servidor de arquivos Windows local e o Amazon Elastic File System (Amazon EFS).

36- O arquiteto de soluções de uma empresa está analisando uma aplicação web executada na AWS. A aplicação faz referência a ativos estáticos em um bucket do Amazon S3 na região us-east-1. A empresa precisa de resiliência em várias regiões da AWS. A empresa já criou um bucket do S3 em uma segunda região.\
Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Configure o aplicativo para gravar cada objeto em ambos os buckets do S3. Configure uma zona pública hospedada do Amazon Route 53 com um conjunto de registros usando uma política de roteamento ponderada para cada bucket do S3. Configure o aplicativo para referenciar os objetos usando o nome DNS do Route 53.

B. Crie uma função do AWS Lambda para copiar objetos do bucket do S3 em us-east-1 para o bucket do S3 na segunda região. Invoque a função do Lambda sempre que um objeto for gravado no bucket do S3 em us-east-1. Configure uma distribuição do Amazon CloudFront com um grupo de origem que contenha os dois buckets do S3 como origens.

C. Configure a replicação no bucket do S3 em us-east-1 para replicar objetos para o bucket do S3 na segunda região. Configure uma distribuição do Amazon CloudFront com um grupo de origem que contenha os dois buckets do S3 como origens. **Mais votado**

D. Configure a replicação no bucket S3 em us-east-1 para replicar objetos para o bucket S3 na segunda região. Se o failover for necessário, atualize o código do aplicativo para carregar objetos S3 do bucket S3 na segunda região.

37- Uma empresa hospeda uma aplicação web de três camadas em um ambiente local. Devido a um recente aumento repentino no tráfego, que resultou em tempo de inatividade e impacto financeiro significativo, a gerência da empresa ordenou que a aplicação fosse migrada para a AWS. A aplicação é escrita em .NET e depende de um banco de dados MySQL. Um arquiteto de soluções deve projetar uma solução escalável e altamente disponível para atender à demanda de 200.000 usuários diários.\
Quais etapas o arquiteto de soluções deve seguir para projetar uma solução adequada?

A. Use o AWS Elastic Beanstalk para criar uma nova aplicação com um ambiente de servidor web e uma instância de banco de dados Multi-AZ do Amazon RDS MySQL. O ambiente deve iniciar um Balanceador de Carga de Rede (NLB) na frente de um grupo de Auto Scaling do Amazon EC2 em várias Zonas de Disponibilidade. Use um registro de alias do Amazon Route 53 para rotear o tráfego do domínio da empresa para o NLB.

B. Use o AWS CloudFormation para iniciar uma pilha contendo um Application Load Balancer (ALB) em frente a um grupo de Auto Scaling do Amazon EC2 abrangendo três Zonas de Disponibilidade. A pilha deve iniciar uma implantação Multi-AZ de um cluster de banco de dados MySQL do Amazon Aurora com uma política de exclusão Retain. Use um registro de alias do Amazon Route 53 para rotear o tráfego do domínio da empresa para o ALB. **Mais votado**

C. Use o AWS Elastic Beanstalk para criar um ambiente de servidor web com escalonamento automático que abrange duas regiões distintas com um Application Load Balancer (ALB) em cada região. Crie uma implantação Multi-AZ de um cluster de banco de dados MySQL do Amazon Aurora com uma réplica de leitura entre regiões. Use o Amazon Route 53 com uma política de roteamento de geoproximidade para rotear o tráfego entre as duas regiões.

D. Use o AWS CloudFormation para iniciar uma pilha contendo um Application Load Balancer (ALB) na frente de um cluster do Amazon ECS de instâncias Spot abrangendo três Zonas de Disponibilidade. A pilha deve iniciar uma instância de banco de dados MySQL do Amazon RDS com uma política de exclusão de Snapshot. Use um registro de alias do Amazon Route 53 para rotear o tráfego do domínio da empresa para o ALB.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/4/)

38- Uma empresa está usando o AWS Organizations para gerenciar várias contas da AWS. Por motivos de segurança, a empresa exige a criação de um tópico do Amazon Simple Notification Service (Amazon SNS) que permita a integração com um sistema de alerta de terceiros em todas as contas de membros do Organizations.\
Um arquiteto de soluções usou um modelo do AWS CloudFormation para criar o tópico do SNS e os conjuntos de pilhas para automatizar a implantação das pilhas do CloudFormation. O acesso confiável foi habilitado no Organizations.\
O que o arquiteto de soluções deve fazer para implantar os StackSets do CloudFormation em todas as contas da AWS?

A. Crie um conjunto de pilhas nas contas de membros da organização. Use permissões gerenciadas pelo serviço. Defina opções de implantação para implantar em uma organização. Use a detecção de desvios do CloudFormation StackSets.

B. Crie pilhas nas contas de membros da organização. Use permissões de autoatendimento. Defina opções de implantação para implantar em uma organização. Habilite a implantação automática do CloudFormation StackSets.

C. Crie um conjunto de pilhas na conta de gerenciamento da Organização. Use permissões gerenciadas pelo serviço. Defina opções de implantação para implantar na organização. Habilite a implantação automática do CloudFormation StackSets. **Mais votado**

D. Crie pilhas na conta de gerenciamento da Organização. Use permissões gerenciadas pelo serviço. Defina opções de implantação para implantar na organização. Habilite a detecção de desvios do CloudFormation StackSets.

39- Uma empresa deseja migrar suas cargas de trabalho locais para a AWS. As cargas de trabalho são executadas em Linux e Windows. A empresa possui uma grande infraestrutura local composta por máquinas físicas e VMs que hospedam diversos aplicativos.\

A empresa deve coletar detalhes sobre a configuração do sistema, o desempenho do sistema, os processos em execução e as conexões de rede de suas cargas de trabalho locais. A empresa também deve dividir os aplicativos locais em grupos para migrações para a AWS. A empresa precisa de recomendações para tipos de instância do Amazon EC2 para que possa executar suas cargas de trabalho na AWS da maneira mais econômica possível.\

Qual combinação de etapas um arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Avalie os aplicativos existentes instalando o AWS Application Discovery Agent nas máquinas físicas e VMs. **Mais votado**

B. Avalie os aplicativos existentes instalando o AWS Systems Manager Agent nas máquinas físicas e VMs.

C. Agrupe servidores em aplicativos para migração usando o AWS Systems Manager Application Manager.

D. Agrupe servidores em aplicativos para migração usando o AWS Migration Hub. **Mais votado**

E. Gere tipos de instância recomendados e custos associados usando o AWS Migration Hub. **Mais votado**

F. Importe dados sobre tamanhos de servidores para o AWS Trusted Advisor. Siga as recomendações para otimização de custos.

40- Uma empresa hospeda um serviço de processamento de imagens na AWS em uma VPC. A VPC se estende por duas Zonas de Disponibilidade. Cada Zona de Disponibilidade contém uma sub-rede pública e uma sub-rede privada.\

O serviço é executado em instâncias do Amazon EC2 nas sub-redes privadas. Um Application Load Balancer nas sub-redes públicas está à frente do serviço. O serviço precisa se comunicar com a internet e o faz por meio de dois gateways NAT. O serviço usa o Amazon S3 para armazenamento de imagens. As instâncias do EC2 recuperam aproximadamente 1 TB de dados de um bucket S3 por dia.\

A empresa promoveu o serviço como altamente seguro. Um arquiteto de soluções deve reduzir os gastos com nuvem o máximo possível sem comprometer a postura de segurança do serviço ou aumentar o tempo gasto em operações contínuas.\

Qual solução atenderá a esses requisitos?

A. Substitua os gateways NAT por instâncias NAT. Na tabela de rotas da VPC, crie uma rota das sub-redes privadas para as instâncias NAT.

B. Mova as instâncias do EC2 para as sub-redes públicas. Remova os gateways NAT.

C. Configure um ponto de extremidade VPC do gateway S3 no VPAnexe uma política de ponto de extremidade ao ponto de extremidade para permitir as ações necessárias no bucket S3. **Mais votado**

D. Anexe um volume do Amazon Elastic File System (Amazon EFS) às instâncias do EC2. Hospede as imagens no volume EFS.

41- Uma empresa implantou recentemente uma aplicação na AWS. A aplicação utiliza o Amazon DynamoDB. A empresa mediu a carga da aplicação e configurou as RCUs e WCUs na tabela do DynamoDB para corresponder ao pico de carga esperado. O pico de carga ocorre uma vez por semana, durante um período de 4 horas, e é o dobro da carga média. A carga da aplicação está próxima da carga média para o restante da semana. O padrão de acesso inclui muito mais gravações na tabela do que leituras.\

Um arquiteto de soluções precisa implementar uma solução para minimizar o custo da tabela.\

Qual solução atenderá a esses requisitos?

A. Use o AWS Application Auto Scaling para aumentar a capacidade durante o período de pico. Compre RCUs e WCUs reservadas para corresponder à carga média. **Mais votado**

B. Configure o modo de capacidade sob demanda para a tabela.

C. Configure o DynamoDB Accelerator (DAX) na frente da tabela. Reduza a capacidade de leitura provisionada para corresponder ao novo pico de carga na tabela.

D. Configure o DynamoDB Accelerator (DAX) na frente da tabela. Configure o modo de capacidade sob demanda para a tabela.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/5/)

42- Um arquiteto de soluções precisa aconselhar uma empresa sobre como migrar seu aplicativo de processamento de dados local para a Nuvem AWS. Atualmente, os usuários carregam arquivos de entrada por meio de um portal web. O servidor web armazena os arquivos carregados no NAS e envia mensagens ao servidor de processamento por meio de uma fila de mensagens. Cada arquivo de mídia pode levar até 1 hora para ser processado. A empresa constatou que o número de arquivos de mídia aguardando processamento é significativamente maior durante o horário comercial, com o número de arquivos diminuindo rapidamente após o horário comercial.\

Qual é a recomendação de migração MAIS econômica?

A. Crie uma fila usando o Amazon SQS. Configure o servidor web existente para publicar na nova fila. Quando houver mensagens na fila, invoque uma função do AWS Lambda para extrair solicitações da fila e processar os arquivos. Armazene os arquivos processados em um bucket do Amazon S3.

B. Crie uma fila usando o Amazon MQ. Configure o servidor web existente para publicar na nova fila. Quando houver mensagens na fila, crie uma nova instância do Amazon EC2 para extrair solicitações da fila e processar os arquivos. Armazene os arquivos processados no Amazon EFS. Encerre a instância do EC2 após a conclusão da tarefa.

C. Crie uma fila usando o Amazon MQ. Configure o servidor web existente para publicar na nova fila. Quando houver mensagens na fila, invoque uma função do AWS Lambda para extrair solicitações da fila e processar os arquivos. Armazene os arquivos processados no Amazon EFS.

D. Crie uma fila usando o Amazon SQS. Configure o servidor web existente para publicar na nova fila. Use instâncias do Amazon EC2 em um grupo de Auto Scaling do EC2 para extrair solicitações da fila e processar os arquivos. Escale as instâncias do EC2 com base no tamanho da fila do SQS. Armazene os arquivos processados em um bucket do Amazon S3.

[Revelar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/5/)

43- Uma empresa utiliza o Amazon OpenSearch Service para analisar dados. A empresa carrega dados em um cluster do OpenSearch Service com 10 nós de dados a partir de um bucket do Amazon S3 que utiliza o armazenamento S3 Standard. Os dados permanecem no cluster por 1 mês para análise somente leitura. Após 1 mês, a empresa exclui do cluster o índice que contém os dados. Para fins de conformidade, a empresa deve manter uma cópia de todos os dados de entrada.\

A empresa está preocupada com os custos contínuos e solicita a um arquiteto de soluções que recomende uma nova solução.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Substitua todos os nós de dados por nós UltraWarm para lidar com a capacidade esperada. Transfira os dados de entrada do S3 Standard para o S3 Glacier Deep Archive quando a empresa carregar os dados no cluster.

B. Reduza o número de nós de dados no cluster para 2. Adicione nós UltraWarm para lidar com a capacidade esperada. Configure os índices para fazer a transição para o UltraWarm quando o OpenSearch Service ingerir os dados. Transite os dados de entrada para o S3 Glacier Deep Archive após 1 mês usando uma política de ciclo de vida do S3. **Mais votado**

C. Reduza o número de nós de dados no cluster para 2. Adicione nós UltraWarm para lidar com a capacidade esperada. Configure os índices para fazer a transição para o UltraWarm quando o OpenSearch Service ingerir os dados. Adicione nós de armazenamento a frio ao cluster. Faça a transição dos índices do UltraWarm para o armazenamento a frio. Exclua os dados de entrada do bucket do S3 após 1 mês usando uma política de ciclo de vida do S3.

D. Reduza o número de nós de dados no cluster para 2. Adicione nós de dados suportados por instância para lidar com a capacidade esperada. Transfira os dados de entrada do S3 Standard para o S3 Glacier Deep Archive quando a empresa carregar os dados no cluster.

44- Uma empresa possui 10 contas que fazem parte de uma organização no AWS Organizations. O AWS Config está configurado em cada conta. Todas as contas pertencem à UO Prod ou à UO NonProd.\

A empresa configurou uma regra do Amazon EventBridge em cada conta da AWS para notificar um tópico do Amazon Simple Notification Service (Amazon SNS) quando uma regra de entrada do grupo de segurança do Amazon EC2 é criada com 0.0.0.0/0 como origem. A equipe de segurança da empresa está inscrita no tópico do SNS.\

Para todas as contas na UO NonProd, a equipe de segurança precisa remover a capacidade de criar uma regra de entrada do grupo de segurança que inclua 0.0.0.0/0 como origem.\

Qual solução atenderá a esse requisito com a MENOR sobrecarga operacional?

A. Modifique a regra do EventBridge para invocar uma função do AWS Lambda para remover a regra de entrada do grupo de segurança e publicar no tópico do SNS. Implante a regra atualizada na UO NonProd.

B. Adicione a regra gerenciada vpc-sg-open-only-to-authorized-ports do AWS Config à UO NonProd.

C. Configure um SCP para permitir a ação ec2:AuthorizeSecurityGroupIngress quando o valor da chave de condição aws:SourceIp não for 0.0.0.0/0. Aplique o SCP à UO NonProd.

D. Configure um SCP para negar a ação ec2:AuthorizeSecurityGroupIngress quando o valor da chave de condição aws:SourceIp for 0.0.0.0/0. Aplique o SCP à UO NonProd. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/5/)

45- Uma empresa hospeda um repositório Git em um data center local. A empresa usa webhooks para invocar funcionalidades executadas na Nuvem AWS. A empresa hospeda a lógica do webhook em um conjunto de instâncias do Amazon EC2 em um grupo de Auto Scaling que a empresa definiu como destino para um Balanceador de Carga de Aplicativo (ALB). O servidor Git chama o ALB para os webhooks configurados. A empresa deseja migrar a solução para uma arquitetura sem servidor.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Para cada webhook, crie e configure uma URL de função do AWS Lambda. Atualize os servidores Git para chamar as URLs individuais das funções do Lambda.

B. Crie uma API HTTP do Amazon API Gateway. Implemente cada lógica de webhook em uma função separada do AWS Lambda. Atualize os servidores Git para chamar o endpoint do API Gateway. **Mais votado**

C. Implante a lógica do webhook no AWS App Runner. Crie um ALB e defina o App Runner como destino. Atualize os servidores Git para chamar o endpoint do ALB.

D. Conteinerize a lógica do webhook. Crie um cluster do Amazon Elastic Container Service (Amazon ECS) e execute a lógica do webhook no AWS Fargate. Crie uma API REST do Amazon API Gateway e defina o Fargate como destino. Atualize os servidores Git para chamar o endpoint do API Gateway.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/5/)

46- Uma empresa planeja migrar 1.000 servidores locais para a AWS. Os servidores são executados em vários clusters VMware no data center da empresa. Como parte do plano de migração, a empresa deseja coletar métricas do servidor, como detalhes da CPU, uso de RAM, informações do sistema operacional e processos em execução. Em seguida, a empresa deseja consultar e analisar os dados.\

Qual solução atenderá a esses requisitos?

A. Implante e configure o dispositivo virtual do AWS Agentless Discovery Connector nos hosts locais. Configure a Exploração de Dados no AWS Migration Hub. Use o AWS Glue para executar uma tarefa de ETL nos dados. Consulte os dados usando o Amazon S3 Select.

B. Exporte apenas as informações de desempenho da VM dos hosts locais. Importe os dados necessários diretamente para o AWS Migration Hub. Atualize as informações ausentes no Migration Hub. Consulte os dados usando o Amazon QuickSight.

C. Crie um script para coletar automaticamente as informações do servidor dos hosts locais. Use a CLI da AWS para executar o comando put-resource-attributes e armazenar os dados detalhados do servidor no AWS Migration Hub. Consulte os dados diretamente no console do Migration Hub.

D. Implante o Agente de Descoberta de Aplicativos da AWS em cada servidor local. Configure a Exploração de Dados no AWS Migration Hub. Use o Amazon Athena para executar consultas predefinidas nos dados do Amazon S3. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/5/)

47- Uma empresa está desenvolvendo uma aplicação serverless que roda em uma função do AWS Lambda anexada a uma VPC. A empresa precisa integrar a aplicação a um novo serviço de um provedor externo. O provedor externo suporta apenas solicitações provenientes de endereços IPv4 públicos que estejam em uma lista de permissões.\

A empresa deve fornecer um único endereço IP público ao provedor externo antes que a aplicação possa começar a usar o novo serviço.\

Qual solução dará à aplicação a capacidade de acessar o novo serviço?

A. Implante um gateway NAT. Associe um endereço IP elástico ao gateway NAT. Configure a VPC para usar o gateway NAT. **Mais votado**

B. Implante um gateway de internet somente de saída. Associe um endereço IP elástico ao gateway de internet somente de saída. Configure a interface de rede elástica na função Lambda para usar o gateway de internet somente de saída.

C. Implante um gateway de internet. Associe um endereço IP elástico ao gateway de internet. Configure a função Lambda para usar o gateway de internet.

D. Implante um gateway de internet. Associe um endereço IP elástico ao gateway de internet. Configure a rota padrão na tabela de rotas da VPC pública para usar o gateway de internet.

48- Um arquiteto de soluções desenvolveu uma aplicação web que utiliza um endpoint regional do Amazon API Gateway e uma função AWS Lambda. Os consumidores da aplicação web estão todos próximos da região da AWS onde a aplicação será implantada. A função Lambda consulta apenas um banco de dados MySQL do Amazon Aurora. O arquiteto de soluções configurou o banco de dados para ter três réplicas de leitura.\

Durante os testes, a aplicação não atendeu aos requisitos de desempenho. Sob alta carga, a aplicação abre um grande número de conexões com o banco de dados. O arquiteto de soluções deve melhorar o desempenho da aplicação.\

Quais ações o arquiteto de soluções deve tomar para atender a esses requisitos? (Escolha duas.)

A. Use o ponto de extremidade do cluster do banco de dados Aurora.

B. Use o RDS Proxy para configurar um pool de conexões com o ponto de extremidade do leitor do banco de dados Aurora. **Mais votado**

C. Use o recurso Lambda Provisioned Concurrency.

D. Mova o código para abrir a conexão com o banco de dados na função Lambda para fora do manipulador de eventos. **Mais votado**

E. Altere o ponto de extremidade do API Gateway para um ponto de extremidade otimizado para borda.

49- Uma empresa planeja hospedar uma aplicação web na AWS e deseja balancear o tráfego em um grupo de instâncias do Amazon EC2. Um dos requisitos de segurança é habilitar a criptografia de ponta a ponta no trânsito entre o cliente e o servidor web.\

Qual solução atenderá a esse requisito?

A. Coloque as instâncias do EC2 atrás de um Application Load Balancer (ALB). Provisione um certificado SSL usando o AWS Certificate Manager (ACM) e associe o certificado SSL ao ALB. Exporte o certificado SSL e instale-o em cada instância do EC2. Configure o ALB para escutar na porta 443 e encaminhar o tráfego para a porta 443 nas instâncias.

B. Associe as instâncias do EC2 a um grupo-alvo. Provisione um certificado SSL usando o AWS Certificate Manager (ACM). Crie uma distribuição do Amazon CloudFront e configure-a para usar o certificado SSL. Configure o CloudFront para usar o grupo-alvo como servidor de origem.

C. Coloque as instâncias do EC2 atrás de um Application Load Balancer (ALB). Provisione um certificado SSL usando o AWS Certificate Manager (ACM) e associe o certificado SSL ao ALB. Provisione um certificado SSL de terceiros e instale-o em cada instância do EC2. Configure o ALB para escutar na porta 443 e encaminhar o tráfego para a porta 443 nas instâncias. **Mais votado**

D. Coloque as instâncias do EC2 atrás de um Balanceador de Carga de Rede (NLB). Provisione um certificado SSL de terceiros e instale-o no NLB e em cada instância do EC2. Configure o NLB para escutar na porta 443 e encaminhar o tráfego para a porta 443 nas instâncias.

50- Uma empresa deseja migrar seu ambiente de análise de dados local para a AWS. O ambiente consiste em dois aplicativos Node.js simples. Um dos aplicativos coleta dados de sensores e os carrega em um banco de dados MySQL. O outro aplicativo agrega os dados em relatórios. Quando os trabalhos de agregação são executados, alguns dos trabalhos de carregamento não são executados corretamente.\

A empresa precisa resolver o problema de carregamento de dados. A empresa também precisa que a migração ocorra sem interrupções ou alterações para os clientes.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Configure um banco de dados MySQL do Amazon Aurora como destino de replicação para o banco de dados local. Crie uma réplica do Aurora para o banco de dados MySQL do Aurora e mova os trabalhos de agregação para execução na réplica do Aurora. Configure os endpoints de coleta como funções do AWS Lambda por trás de um Balanceador de Carga de Rede (NLB) e use o Proxy do Amazon RDS para gravar no banco de dados MySQL do Aurora. Quando os bancos de dados estiverem sincronizados, desabilite o trabalho de replicação e reinicie a réplica do Aurora como instância primária. Aponte o registro DNS do coletor para o NLB.

B. Configure um banco de dados MySQL do Amazon Aurora. Use o AWS Database Migration Service (AWS DMS) para executar a replicação contínua de dados do banco de dados local para o Aurora. Mova os trabalhos de agregação para execução no banco de dados MySQL do Aurora. Configure endpoints de coleta atrás de um Application Load Balancer (ALB) como instâncias do Amazon EC2 em um grupo de Auto Scaling. Quando os bancos de dados estiverem sincronizados, aponte o registro DNS do coletor para o AL. Desative a tarefa de sincronização do AWS DMS após a transição do local para a AWS.

C. Configure um banco de dados MySQL do Amazon Aurora. Use o AWS Database Migration Service (AWS DMS) para executar a replicação contínua de dados do banco de dados local para o Aurora. Crie uma réplica do Aurora para o banco de dados MySQL do Aurora e mova os trabalhos de agregação para execução nessa réplica. Configure os endpoints de coleta como funções do AWS Lambda por trás de um Application Load Balancer (ALB) e use o Amazon RDS Proxy para gravar no banco de dados MySQL do Aurora. Quando os bancos de dados estiverem sincronizados, aponte o registro DNS do coletor para o ALB. Desative a tarefa de sincronização do AWS DMS após a transição do local para a AWS. **Mais votado**

D. Configure um banco de dados MySQL do Amazon Aurora. Crie uma réplica do Aurora para o banco de dados MySQL do Aurora e mova os trabalhos de agregação para execução na réplica do Aurora. Configure os endpoints de coleta como um fluxo de dados do Amazon Kinesis. Use o Amazon Kinesis Data Firehose para replicar os dados para o banco de dados MySQL do Aurora. Quando os bancos de dados estiverem sincronizados, desabilite o trabalho de replicação e reinicie a réplica do Aurora como instância primária. Aponte o registro DNS do coletor para o fluxo de dados do Kinesis.

[Ocultar solução](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/2/)

51- Uma seguradora de saúde armazena informações de identificação pessoal (PII) em um bucket do Amazon S3. A empresa usa criptografia do lado do servidor com chaves de criptografia gerenciadas pelo S3 (SSE-S3) para criptografar os objetos. De acordo com um novo requisito, todos os objetos atuais e futuros no bucket do S3 devem ser criptografados com chaves gerenciadas pela equipe de segurança da empresa. O bucket do S3 não possui controle de versão habilitado.\

Qual solução atenderá a esses requisitos?

A. Nas propriedades do bucket S3, altere a criptografia padrão para SSE-S3 com uma chave gerenciada pelo cliente. Use a CLI da AWS para reenviar todos os objetos no bucket S3. Defina uma política de bucket S3 para negar solicitações PutObject não criptografadas.

B. Nas propriedades do bucket do S3, altere a criptografia padrão para criptografia do lado do servidor com chaves de criptografia gerenciadas pelo AWS KMS (SSE-KMS). Defina uma política de bucket do S3 para negar solicitações PutObject não criptografadas. Use a AWS CLI para reenviar todos os objetos no bucket do S3. **Mais votado**

C. Nas propriedades do bucket S3, altere a criptografia padrão para criptografia do lado do servidor com chaves de criptografia gerenciadas pelo AWS KMS (SSE-KMS). Defina uma política de bucket S3 para criptografar objetos automaticamente em solicitações GetObject e PutObject.

D. Nas propriedades do bucket do S3, altere a criptografia padrão para AES-256 com uma chave gerenciada pelo cliente. Anexe uma política para negar solicitações PutObject não criptografadas a qualquer entidade que acesse o bucket do S3. Use a AWS CLI para reenviar todos os objetos no bucket do S3.

52- Uma empresa está executando uma aplicação web na Nuvem AWS. A aplicação consiste em conteúdo dinâmico criado em um conjunto de instâncias do Amazon EC2. As instâncias do EC2 são executadas em um grupo de Auto Scaling configurado como grupo de destino para um Balanceador de Carga de Aplicação (ALB).\

A empresa está usando uma distribuição do Amazon CloudFront para distribuir a aplicação globalmente. A distribuição do CloudFront usa o ALB como origem. A empresa usa o Amazon Route 53 para DNS e criou um registro A de [www.example.com](https://www.example.com) para a distribuição do CloudFront.\

Um arquiteto de soluções deve configurar a aplicação para que ela seja altamente disponível e tolerante a falhas.\

Qual solução atende a esses requisitos?

A. Provisione uma implantação secundária completa do aplicativo em uma região diferente da AWS. Atualize o registro A do Route 53 para um registro de failover. Adicione ambas as distribuições do CloudFront como valores. Crie verificações de integridade do Route 53.

B. Provisione um ALB, um grupo de Auto Scaling e instâncias do EC2 em uma região diferente da AWS. Atualize a distribuição do CloudFront e crie uma segunda origem para o novo ALC. Crie um grupo de origem para as duas origens. Configure uma origem como primária e a outra como secundária. **Mais votado**

C. Provisione um grupo de Auto Scaling e instâncias do EC2 em uma região diferente da AWS. Crie um segundo destino para o novo grupo de Auto Scaling no ALB. Configure o algoritmo de roteamento de failover no ALB.

D. Provisione uma implantação completa e secundária do aplicativo em uma região diferente da AWS. Crie uma segunda distribuição do CloudFront e adicione a nova configuração do aplicativo como origem. Crie um acelerador do AWS Global Accelerator. Adicione ambas as distribuições do CloudFront como endpoints.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/6/)

53- Uma empresa possui uma organização no AWS Organizations com um grande número de contas da AWS. Uma das contas da AWS é designada como conta de trânsito e possui um gateway de trânsito compartilhado com todas as outras contas da AWS. As conexões VPN Site-to-Site da AWS são configuradas entre todos os escritórios globais da empresa e a conta de trânsito. A empresa possui o AWS Config habilitado em todas as suas contas.\

A equipe de rede da empresa precisa gerenciar centralmente uma lista de intervalos de endereços IP internos pertencentes aos escritórios globais. Os desenvolvedores consultarão essa lista para obter acesso seguro aos seus aplicativos.\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um arquivo JSON hospedado no Amazon S3 que liste todos os intervalos de endereços IP internos. Configure um tópico do Amazon Simple Notification Service (Amazon SNS) em cada uma das contas que podem ser invocadas quando o arquivo JSON for atualizado. Inscreva uma função do AWS Lambda no tópico do SNS para atualizar todas as regras de grupo de segurança relevantes com os intervalos de endereços IP atualizados.

B. Crie uma nova regra gerenciada do AWS Config que contenha todos os intervalos de endereços IP internos. Use a regra para verificar os grupos de segurança em cada uma das contas e garantir a conformidade com a lista de intervalos de endereços IP. Configure a regra para corrigir automaticamente qualquer grupo de segurança não compatível detectado.

C. Na conta de trânsito, crie uma lista de prefixos de VPC com todos os intervalos de endereços IP internos. Use o AWS Resource Access Manager para compartilhar a lista de prefixos com todas as outras contas. Use a lista de prefixos compartilhada para configurar regras de grupos de segurança nas outras contas. **Mais votado**

D. Na conta de trânsito, crie um grupo de segurança com todos os intervalos de endereços IP internos. Configure os grupos de segurança nas outras contas para referenciar o grupo de segurança da conta de trânsito usando uma referência de grupo de segurança aninhada de "/sg-1a2b3c4d”.

54- Uma empresa executa uma nova aplicação como um site estático no Amazon S3. A empresa implantou a aplicação em uma conta de produção da AWS e usa o Amazon CloudFront para entregar o site. O site chama uma API REST do Amazon API Gateway. Uma função do AWS Lambda suporta cada método da API.\

A empresa deseja criar um relatório CSV a cada 2 semanas para mostrar a memória configurada recomendada para cada função do API Lambda, o custo recomendado e a diferença de preço entre as configurações atuais e as recomendações. A empresa armazenará os relatórios em um bucket do S3.\

Qual solução atenderá a esses requisitos com o MENOR tempo de desenvolvimento?

A. Crie uma função Lambda que extraia dados de métricas para cada função Lambda da API do Amazon CloudWatch Logs para o período de 2 semanas. Reúna os dados em formato tabular. Armazene os dados como um arquivo .csv em um bucket do S3. Crie uma regra do Amazon EventBridge para agendar a execução da função Lambda a cada 2 semanas.

B. Inscreva-se no AWS Compute Optimizer. Crie uma função Lambda que chame a operação ExportLambdaFunctionRecommendations. Exporte o arquivo .csv para um bucket do S3. Crie uma regra do Amazon EventBridge para agendar a execução da função Lambda a cada 2 semanas. **Mais votado**

C. Inscreva-se no AWS Compute Optimizer. Configure métricas de infraestrutura aprimoradas. No console do Compute Optimizer, agende uma tarefa para exportar as recomendações do Lambda para um arquivo .csv. Armazene o arquivo em um bucket do S3 a cada 2 semanas.

D. Adquira o plano AWS Business Support para a conta de produção. Inscreva-se no AWS Compute Optimizer para as verificações do AWS Trusted Advisor. No console do Trusted Advisor, agende uma tarefa para exportar as verificações de otimização de custos para um arquivo .csv. Armazene o arquivo em um bucket do S3 a cada 2 semanas.

55- Os aplicativos de fábrica e automação de uma empresa são executados em uma única VPC. Mais de 20 aplicativos são executados em uma combinação de Amazon EC2, Amazon Elastic Container Service (Amazon ECS) e Amazon RDS.\

A empresa possui engenheiros de software distribuídos em três equipes. Uma das três equipes é proprietária de cada aplicativo e, em cada equipe, é responsável pelo custo e desempenho de todos os seus aplicativos. Os recursos da equipe têm tags que representam seu aplicativo e sua equipe. As equipes usam o acesso do IAM para atividades diárias.\

A empresa precisa determinar quais custos na fatura mensal da AWS são atribuíveis a cada aplicativo ou equipe. A empresa também deve ser capaz de criar relatórios para comparar os custos dos últimos 12 meses e ajudar a prever os custos para os próximos 12 meses. Um arquiteto de soluções deve recomendar uma solução de Faturamento e Gerenciamento de Custos da AWS que forneça esses relatórios de custos.\

Qual combinação de ações atenderá a esses requisitos? (Escolha três.)

A. Ative as tags de alocação de custos definidas pelo usuário que representam o aplicativo e a equipe. **Mais votado**

B. Ative as tags de alocação de custos geradas pela AWS que representam o aplicativo e a equipe.

C. Crie uma categoria de custo para cada aplicativo no Faturamento e Gerenciamento de Custos. **Mais votado**

D. Ative o acesso do IAM ao Faturamento e Gerenciamento de Custos.

E. Crie um orçamento de custos.

F. Habilite o Cost Explorer. **Mais votado**

56- Um cliente da AWS possui uma aplicação web executada localmente. A aplicação web busca dados de uma API de terceiros protegida por firewall. A terceira parte aceita apenas um bloco CIDR público na lista de permissões de cada cliente.\

O cliente deseja migrar sua aplicação web para a Nuvem AWS. A aplicação será hospedada em um conjunto de instâncias do Amazon EC2, atrás de um Balanceador de Carga de Aplicativos (ALB) em uma VPC. O ALB está localizado em sub-redes públicas. As instâncias do EC2 estão localizadas em sub-redes privadas. Gateways NAT fornecem acesso à internet para as sub-redes privadas.\

Como um arquiteto de soluções deve garantir que a aplicação web possa continuar a chamar a API de terceiros após a migração?

A. Associe um bloco de endereços IP públicos de propriedade do cliente à VPC. Habilite o endereçamento IP público para sub-redes públicas na VPC.

B. Registre um bloco de endereços IP públicos de propriedade do cliente na conta da AWS. Crie endereços IP elásticos a partir do bloco de endereços e atribua-os aos gateways NAT na VPC. **Mais votado**

C. Crie endereços IP elásticos a partir do bloco de endereços IP de propriedade do cliente. Atribua os endereços IP elásticos estáticos ao ALB.

D. Registre um bloco de endereços IP públicos de propriedade do cliente na conta da AWS. Configure o AWS Global Accelerator para usar endereços IP elásticos do bloco de endereços. Defina o ALB como o endpoint do acelerador.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/6/)

57- Uma empresa com várias contas da AWS está usando o AWS Organizations e políticas de controle de serviço (SCPs). Um administrador criou o seguinte SCP e o anexou a uma unidade organizacional (UO) que contém a conta da AWS 1111-1111-1111:\



Os desenvolvedores que trabalham na conta 1111-1111-1111 reclamam que não conseguem criar buckets do Amazon S3. Como o administrador deve resolver esse problema?

A. Adicione s3:CreateBucket com efeito “Permitir” ao SCP.

B. Remova a conta da UO e anexe o SCP diretamente à conta 1111-1111-1111.

C. Instrua os desenvolvedores a adicionar permissões do Amazon S3 às suas entidades do IAM. **Mais votado**

D. Remova o SCP da conta 1111-1111-1111.

58- Uma empresa possui um aplicativo monolítico crítico para os negócios da empresa. A empresa hospeda o aplicativo em uma instância do Amazon EC2 que executa o Amazon Linux 2. A equipe de aplicativos da empresa recebe uma instrução do departamento jurídico para fazer backup dos dados do volume criptografado do Amazon Elastic Block Store (Amazon EBS) da instância para um bucket do Amazon S3. A equipe de aplicativos não possui o par de chaves SSH administrativas para a instância. O aplicativo precisa continuar atendendo aos usuários.\

Qual solução atenderá a esses requisitos?

A. Atribua uma função à instância com permissão para gravar no Amazon S3. Use a opção Gerenciador de Sessões do AWS Systems Manager para obter acesso à instância e executar comandos para copiar dados para o Amazon S3. **Mais votado**

B. Crie uma imagem da instância com a opção de reinicialização ativada. Inicie uma nova instância do EC2 a partir da imagem. Atribua uma função à nova instância com permissão para gravar no Amazon S3. Execute um comando para copiar dados para o Amazon S3.

C. Faça um snapshot do volume do EBS usando o Amazon Data Lifecycle Manager (Amazon DLM). Copie os dados para o Amazon S3.

D. Crie uma imagem da instância. Inicie uma nova instância do EC2 a partir da imagem. Atribua uma função à nova instância com permissão para gravar no Amazon S3. Execute um comando para copiar dados para o Amazon S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/6/)

59- Um arquiteto de soluções precisa copiar dados de um bucket do Amazon S3 em uma conta da AWS para um novo bucket do S3 em uma nova conta da AWS. O arquiteto de soluções deve implementar uma solução que utilize a CLI da AWS.\

Qual combinação de etapas copiará os dados com sucesso? (Escolha três.)

A. Crie uma política de bucket para permitir que o bucket de origem liste seu conteúdo e coloque objetos e defina ACLs de objetos no bucket de destino. Anexe a política de bucket ao bucket de destino.

B. Crie uma política de bucket para permitir que um usuário na conta de destino liste o conteúdo do bucket de origem e leia os objetos do bucket de origem. Anexe a política de bucket ao bucket de origem. **Mais votado**

C. Crie uma política do IAM na conta de origem. Configure a política para permitir que um usuário na conta de origem liste conteúdos e obtenha objetos no bucket de origem, e liste conteúdos, insira objetos e defina ACLs de objetos no bucket de destino. Anexe a política ao usuário.

D. Crie uma política do IAM na conta de destino. Configure a política para permitir que um usuário na conta de destino liste conteúdos e obtenha objetos no bucket de origem, e liste conteúdos, insira objetos e defina objectACLs no bucket de destino. Anexe a política ao usuário. **Mais votado**

E. Execute o comando aws s3 sync como um usuário na conta de origem. Especifique os buckets de origem e destino para copiar os dados.

F. Execute o comando aws s3 sync como um usuário na conta de destino. Especifique os buckets de origem e destino para copiar os dados. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/6/)

60- Uma empresa desenvolveu uma aplicação baseada no AWS Lambda, implantada em uma pilha do AWS CloudFormation. A última versão de produção da aplicação web apresentou um problema que resultou em uma interrupção de vários minutos. Um arquiteto de soluções precisa ajustar o processo de implantação para oferecer suporte a uma versão canário.\

Qual solução atenderá a esses requisitos?

A. Crie um alias para cada nova versão implantada da função Lambda. Use o comando update-alias da AWS CLI com o parâmetro routing-config para distribuir a carga. **Mais votado**

B. Implante o aplicativo em uma nova pilha do CloudFormation. Use uma política de roteamento ponderado do Amazon Route 53 para distribuir a carga.

C. Crie uma versão para cada nova função do Lambda implantada. Use o comando update-function-configuration da AWS CLI com o parâmetro routing-config para distribuir a carga.

D. Configure o AWS CodeDeploy e use CodeDeployDefault.OneAtATime na configuração de implantação para distribuir a carga.

61- Uma empresa financeira hospeda um data lake no Amazon S3. A empresa recebe registros de dados financeiros via SFTP todas as noites de diversos terceiros. A empresa executa seu próprio servidor SFTP em uma instância do Amazon EC2 em uma sub-rede pública de uma VPC. Após o upload dos arquivos, eles são movidos para o data lake por uma tarefa cron executada na mesma instância. O servidor SFTP pode ser acessado pelo DNS sftp.example.com por meio do Amazon Route 53.\

O que um arquiteto de soluções deve fazer para melhorar a confiabilidade e a escalabilidade da solução SFTP?

A. Mova a instância do EC2 para um grupo de Dimensionamento Automático. Coloque a instância do EC2 atrás de um Balanceador de Carga de Aplicação (ALB). Atualize o registro DNS sftp.example.com no Route 53 para apontar para o ALB.

B. Migre o servidor SFTP para o AWS Transfer for SFTP. Atualize o registro DNS sftp.example.com no Route 53 para apontar para o nome do host do endpoint do servidor. **Mais votado**

C. Migre o servidor SFTP para um gateway de arquivos no AWS Storage Gateway. Atualize o registro DNS sftp.example.com no Route 53 para apontar para o endpoint do gateway de arquivos.

D. Coloque a instância EC2 atrás de um Balanceador de Carga de Rede (NLB). Atualize o registro DNS sftp.example.com no Route 53 para apontar para o NLB.

62- Uma empresa deseja migrar uma aplicação da VMware Infrastructure para o Amazon EC2, executada em um data center local. Um arquiteto de soluções deve preservar o software e as configurações durante a migração.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Configure o agente AWS DataSync para iniciar a replicação do armazenamento de dados para o Amazon FSx for Windows File Server. Use o compartilhamento SMB para hospedar o armazenamento de dados VMware. Use o VM Import/Export para mover as VMs para o Amazon EC2.

B. Use o cliente VMware vSphere para exportar o aplicativo como uma imagem no formato Open Virtualization Format (OVF). Crie um bucket do Amazon S3 para armazenar a imagem na região da AWS de destino. Crie e aplique uma função do IAM para importação de VM. Use a CLI da AWS para executar o comando de importação do EC2. **Mais votado**

C. Configure o serviço AWS Storage Gateway para arquivos para exportar um compartilhamento do Common Internet File System (CIFS). Crie uma cópia de backup para a pasta compartilhada. Faça login no AWS Management Console e crie uma AMI a partir da cópia de backup. Inicie uma instância do EC2 baseada na AMI.

D. Crie uma ativação de instância gerenciada para um ambiente híbrido no AWS Systems Manager. Baixe e instale o Agente do Systems Manager na VM local. Registre a VM no Systems Manager para que ela se torne uma instância gerenciada. Use o AWS Backup para criar um snapshot da VM e uma AMI. Inicie uma instância do EC2 baseada na AMI.

63- Uma empresa de processamento de vídeo possui um aplicativo que baixa imagens de um bucket do Amazon S3, processa as imagens, armazena uma imagem transformada em um segundo bucket do S3 e atualiza os metadados sobre a imagem em uma tabela do Amazon DynamoDB. O aplicativo é escrito em Node.js e executado usando uma função do AWS Lambda. A função Lambda é invocada quando uma nova imagem é carregada no Amazon S3.\

O aplicativo foi executado sem incidentes por um tempo. No entanto, o tamanho das imagens aumentou significativamente. A função Lambda agora está falhando frequentemente com erros de tempo limite. O tempo limite da função está definido para seu valor máximo. Um arquiteto de soluções precisa refatorar a arquitetura do aplicativo para evitar falhas de invocação. A empresa não deseja gerenciar a infraestrutura subjacente.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha duas.)

A. Modifique a implantação do aplicativo criando uma imagem Docker que contenha o código do aplicativo. Publique a imagem no Amazon Elastic Container Registry (Amazon ECR). **Mais votado**

B. Crie uma nova definição de tarefa do Amazon Elastic Container Service (Amazon ECS) com um tipo de compatibilidade do AWS Fargate. Configure a definição de tarefa para usar a nova imagem no Amazon Elastic Container Registry (Amazon ECR). Ajuste a função Lambda para invocar uma tarefa do ECS usando a definição de tarefa do ECS quando um novo arquivo chegar ao Amazon S3. **Mais votado**

C. Crie uma máquina de estados do AWS Step Functions com um estado Parallel para invocar a função Lambda. Aumente a simultaneidade provisionada da função Lambda.

D. Crie uma nova definição de tarefa do Amazon Elastic Container Service (Amazon ECS) com um tipo de compatibilidade do Amazon EC2. Configure a definição de tarefa para usar a nova imagem no Amazon Elastic Container Registry (Amazon ECR). Ajuste a função Lambda para invocar uma tarefa do ECS usando a definição de tarefa do ECS quando um novo arquivo chegar ao Amazon S3.

E. Modifique o aplicativo para armazenar imagens no Amazon Elastic File System (Amazon EFS) e armazenar metadados em uma instância de banco de dados do Amazon RDS. Ajuste a função Lambda para montar o compartilhamento de arquivos EFS.

64- Uma empresa possui uma organização no AWS Organizations. A empresa está usando o AWS Control Tower para implantar uma landing zone para a organização. A empresa deseja implementar governança e aplicação de políticas. A empresa precisa implementar uma política que detecte instâncias de banco de dados do Amazon RDS que não estejam criptografadas em repouso na UO de produção da empresa.\

Qual solução atenderá a esse requisito?

A. Ative as proteções obrigatórias na AWS Control Tower. Aplique as proteções obrigatórias à UO de produção.

B. Habilite a proteção apropriada na lista de proteções altamente recomendadas na AWS Control Tower. Aplique a proteção à UO de produção. **Mais votado**

C. Use o AWS Config para criar uma nova proteção obrigatória. Aplique a regra a todas as contas na UO de produção.

D. Crie um SCP personalizado na AWS Control Tower. Aplique o SCP à UO de produção.

65- Uma startup hospeda uma frota de instâncias do Amazon EC2 em sub-redes privadas usando a AMI mais recente do Amazon Linux 2. Os engenheiros da empresa dependem fortemente do acesso SSH às instâncias para solução de problemas.\

A arquitetura existente da empresa inclui o seguinte:\

• Uma VPC com sub-redes privadas e públicas e um gateway NAT.\
• VPN site a site para conectividade com o ambiente local.\
• Grupos de segurança do EC2 com acesso SSH direto do ambiente local.\

A empresa precisa aumentar os controles de segurança em torno do acesso SSH e fornecer auditoria dos comandos executados pelos engenheiros.\

Qual estratégia um arquiteto de soluções deve usar?

A. Instale e configure o EC2 Instance Connect na frota de instâncias do EC2. Remova todas as regras de grupo de segurança anexadas às instâncias do EC2 que permitem TCP de entrada na porta 22. Oriente os engenheiros a acessarem remotamente as instâncias usando a CLI do EC2 Instance Connect.

B. Atualize os grupos de segurança do EC2 para permitir apenas TCP de entrada na porta 22 para os endereços IP dos dispositivos do engenheiro. Instale o agente do Amazon CloudWatch em todas as instâncias do EC2 e envie logs de auditoria do sistema operacional para o CloudWatch Logs.

C. Atualize os grupos de segurança do EC2 para permitir apenas TCP de entrada na porta 22 para os endereços IP dos dispositivos do engenheiro. Habilite o AWS Config para alterações nos recursos do grupo de segurança do EC2. Habilite o AWS Firewall Manager e aplique uma política de grupo de segurança que corrija automaticamente as alterações nas regras.

D. Crie uma função do IAM com a política gerenciada AmazonSSMManagedInstanceCore anexada. Anexe a função do IAM a todas as instâncias do EC2. Remova todas as regras de grupo de segurança anexadas às instâncias do EC2 que permitem TCP de entrada na porta 22. Peça aos engenheiros que instalem o plugin do Gerenciador de Sessões do AWS Systems Manager em seus dispositivos e acessem remotamente as instâncias usando a chamada de API start-session do Systems Manager. **Mais votado**

66- Uma empresa que utiliza o AWS Organizations permite que desenvolvedores experimentem na AWS. Como parte da landing zone implantada pela empresa, os desenvolvedores usam seus endereços de e-mail corporativos para solicitar uma conta. A empresa quer garantir que os desenvolvedores não estejam lançando serviços caros ou executando serviços desnecessariamente. A empresa deve fornecer aos desenvolvedores um orçamento mensal fixo para limitar seus custos com a AWS.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Crie um SCP para definir um limite fixo de uso mensal da conta. Aplique o SCP às contas de desenvolvedor.

B. Use os orçamentos da AWS para criar um orçamento mensal fixo para a conta de cada desenvolvedor como parte do processo de criação da conta. **Mais votado**

C. Crie um SCP para negar acesso a serviços e componentes caros. Aplique o SCP às contas de desenvolvedor. **Mais votado**

D. Crie uma política de IAM para negar acesso a serviços e componentes caros. Aplique a política de IAM às contas de desenvolvedor.

E. Crie uma ação de alerta do AWS Budgets para encerrar serviços quando o valor orçado for atingido. Configure a ação para encerrar todos os serviços.

F. Crie uma ação de alerta do AWS Budgets para enviar uma notificação do Amazon Simple Notification Service (Amazon SNS) quando o valor orçado for atingido. Invoque uma função do AWS Lambda para encerrar todos os serviços. **Mais votado**

67- Uma empresa possui aplicativos em uma conta da AWS chamada Source. A conta está em uma organização no AWS Organizations. Um dos aplicativos usa funções do AWS Lambda e armazena dados de inventário em um banco de dados Amazon Aurora. O aplicativo implanta as funções do Lambda usando um pacote de implantação. A empresa configurou backups automatizados para o Aurora.\

A empresa deseja migrar as funções do Lambda e o banco de dados Aurora para uma nova conta da AWS chamada Target. O aplicativo processa dados críticos, portanto, a empresa precisa minimizar o tempo de inatividade.\

Qual solução atenderá a esses requisitos?

A. Baixe o pacote de implantação da função Lambda da conta de origem. Use o pacote de implantação e crie novas funções Lambda na conta de destino. Compartilhe o snapshot automatizado do cluster do Aurora DB com a conta de destino.

B. Baixe o pacote de implantação da função Lambda da conta de origem. Use o pacote de implantação e crie novas funções Lambda na conta de destino. Compartilhe o cluster do Aurora DB com a conta de destino usando o AWS Resource Access Manager (AWS RAM). Conceda à conta de destino permissão para clonar o cluster do Aurora DB. **Mais votado**

C. Use o AWS Resource Access Manager (AWS RAM) para compartilhar as funções do Lambda e o cluster do Aurora DB com a conta de destino. Conceda à conta de destino permissão para clonar o cluster do Aurora DB.

D. Use o AWS Resource Access Manager (AWS RAM) para compartilhar as funções do Lambda com a conta de destino. Compartilhe o snapshot automatizado do cluster do Aurora DB com a conta de destino.

68- Uma empresa executa um script Python em uma instância do Amazon EC2 para processar dados. O script é executado a cada 10 minutos. O script ingere arquivos de um bucket do Amazon S3 e os processa. Em média, o script leva aproximadamente 5 minutos para processar cada arquivo. O script não reprocessará um arquivo que já tenha processado.\

A empresa analisou as métricas do Amazon CloudWatch e notou que a instância do EC2 fica ociosa por aproximadamente 40% do tempo devido à velocidade de processamento dos arquivos. A empresa deseja tornar a carga de trabalho altamente disponível e escalável. A empresa também deseja reduzir a sobrecarga de gerenciamento a longo prazo.\

Qual solução atenderá a esses requisitos com a MAIOR relação custo-benefício?

A. Migre o script de processamento de dados para uma função do AWS Lambda. Use uma notificação de evento do S3 para invocar a função do Lambda e processar os objetos quando a empresa fizer upload deles. **Mais votado**

B. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Configure o Amazon S3 para enviar notificações de eventos para a fila do SQS. Crie um grupo de Auto Scaling do EC2 com tamanho mínimo de uma instância. Atualize o script de processamento de dados para consultar a fila do SQS. Processe os objetos do S3 que a mensagem do SQS identifica.

C. Migre o script de processamento de dados para uma imagem de contêiner. Execute o contêiner de processamento de dados em uma instância do EC2. Configure o contêiner para consultar o bucket do S3 em busca de novos objetos e processar os objetos resultantes.

D. Migre o script de processamento de dados para uma imagem de contêiner executada no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate. Crie uma função do AWS Lambda que chame a operação RunTaskAPI do Fargate quando o contêiner processar o arquivo. Use uma notificação de evento do S3 para invocar a função do Lambda.

69- Uma empresa de serviços financeiros na América do Norte planeja lançar um novo aplicativo web online para seus clientes na AWS. A empresa lançará o aplicativo na região us-east-1 em instâncias do Amazon EC2. O aplicativo deve ter alta disponibilidade e escalar dinamicamente para atender ao tráfego de usuários. A empresa também deseja implementar um ambiente de recuperação de desastres para o aplicativo na região us-west-1 usando failover ativo-passivo.\

Qual solução atenderá a esses requisitos?

A. Crie uma VPC em us-east-1 e uma VPC em us-west-1. Configure o peering de VPC. Na VPC us-east-1, crie um Application Load Balancer (ALB) que se estenda por várias Zonas de Disponibilidade em ambas as VPCs. Crie um grupo de Dimensionamento Automático que implante as instâncias do EC2 nas várias Zonas de Disponibilidade em ambas as VPCs. Coloque o grupo de Dimensionamento Automático atrás do ALB.

B. Crie uma VPC em us-east-1 e uma VPC em us-west-1. Na VPC us-east-1, crie um Application Load Balancer (ALB) que se estenda por várias Zonas de Disponibilidade nessa VPC. Crie um grupo de Auto Scaling que implante as instâncias do EC2 nas várias Zonas de Disponibilidade da VPC us-east-1. Coloque o grupo de Auto Scaling atrás do AL. Configure a mesma configuração na VPC us-west-1. Crie uma zona hospedada do Amazon Route 53. Crie registros separados para cada AL. Habilite verificações de integridade para garantir alta disponibilidade entre as regiões.

C. Crie uma VPC em us-east-1 e uma VPC em us-west-1. Na VPC us-east-1, crie um Application Load Balancer (ALB) que se estenda por várias Zonas de Disponibilidade nessa VPC. Crie um grupo de Auto Scaling que implante as instâncias do EC2 nas várias Zonas de Disponibilidade da VPC us-east-1. Coloque o grupo de Auto Scaling atrás do ALB. Defina a mesma configuração na VPC us-west-1. Crie uma zona hospedada do Amazon Route 53. Crie registros separados para cada ALB. Habilite verificações de integridade e configure uma política de roteamento de failover para cada registro. **Mais votado**

D. Crie uma VPC em us-east-1 e uma VPC em us-west-1. Configure o peering de VPC. Na VPC us-east-1, crie um Application Load Balancer (ALB) que se estenda por várias Zonas de Disponibilidade em ambas as VPCs. Crie um grupo de Auto Scaling que implante as instâncias do EC2 nas várias Zonas de Disponibilidade em ambas as VPCs. Coloque o grupo de Auto Scaling atrás do ALB. Crie uma zona hospedada do Amazon Route 53. Crie um registro para o ALB.

70- Uma empresa possui um ambiente com uma única conta na AWS. Um arquiteto de soluções está revisando o ambiente para recomendar o que a empresa poderia melhorar especificamente em termos de acesso ao Console de Gerenciamento da AWS. Os profissionais de suporte de TI da empresa atualmente acessam o console para tarefas administrativas, autenticando-se com usuários do IAM nomeados que foram mapeados para suas funções.\

Os profissionais de suporte de TI não desejam mais manter suas contas de usuário do Active Directory e do IAM. Eles desejam acessar o console usando suas credenciais existentes do Active Directory. O arquiteto de soluções está usando o AWS IAM Identity Center (AWS Single Sign-On) para implementar essa funcionalidade.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie uma organização no AWS Organizations. Ative o recurso do IAM Identity Center no Organizations. Crie e configure um diretório no AWS Directory Service para Microsoft Active Directory (AWS Managed Microsoft AD) com uma relação de confiança bidirecional com o Active Directory local da empresa. Configure o IAM Identity Center e defina o diretório do AWS Managed Microsoft AD como a fonte de identidade. Crie conjuntos de permissões e mapeie-os para os grupos existentes no diretório do AWS Managed Microsoft AD.

B. Crie uma organização no AWS Organizations. Ative o recurso do IAM Identity Center no Organizations. Crie e configure um Conector do AD para se conectar ao Active Directory local da empresa. Configure o IAM Identity Center e selecione o Conector do AD como a fonte de identidade. Crie conjuntos de permissões e mapeie-os para os grupos existentes no Active Directory da empresa.

C. Crie uma organização no AWS Organizations. Ative todos os recursos da organização. Crie e configure um diretório no AWS Directory Service para Microsoft Active Directory (AWS Managed Microsoft AD) com uma relação de confiança bidirecional com o Active Directory local da empresa. Configure o IAM Identity Center e selecione o diretório do AWS Managed Microsoft AD como a fonte de identidade. Crie conjuntos de permissões e mapeie-os para os grupos existentes no diretório do AWS Managed Microsoft AD.

D. Crie uma organização no AWS Organizations. Ative todos os recursos da organização. Crie e configure um Conector do AD para se conectar ao Active Directory local da empresa. Configure o IAM Identity Center e defina o Conector do AD como a fonte de identidade. Crie conjuntos de permissões e mapeie-os para os grupos existentes no Active Directory da empresa. **Mais votado**

71- Uma empresa de streaming de vídeo lançou recentemente um aplicativo móvel para compartilhamento de vídeos. O aplicativo carrega vários arquivos para um bucket do Amazon S3 na região us-east-1. Os arquivos variam de 1 GB a 10 GB.\

Usuários que acessam o aplicativo da Austrália têm enfrentado longos períodos de upload. Às vezes, os arquivos não são carregados completamente para esses usuários. Um arquiteto de soluções deve aprimorar o desempenho do aplicativo para esses uploads.\

Quais soluções atenderão a esses requisitos? (Escolha duas.)

A. Habilite o S3 Transfer Acceleration no bucket S3. Configure o aplicativo para usar o endpoint do Transfer Acceleration para uploads. **Mais votado**

B. Configure um bucket S3 em cada região para receber os uploads. Use a Replicação entre Regiões do S3 para copiar os arquivos para o bucket S3 de distribuição.

C. Configure o Amazon Route 53 com roteamento baseado em latência para rotear os uploads para a região do bucket S3 mais próxima.

D. Configure o aplicativo para dividir os arquivos de vídeo em partes. Use um upload multipartes para transferir os arquivos para o Amazon S3. **Mais votado**

E. Modifique o aplicativo para adicionar prefixos aleatórios aos arquivos antes do upload.

72- Um aplicativo está usando uma instância de banco de dados Multi-AZ do Amazon RDS para MySQL na região us-east-1. Após um teste de failover, o aplicativo perdeu as conexões com o banco de dados e não conseguiu restabelecê-las. Após a reinicialização do aplicativo, ele restabeleceu as conexões.\

Um arquiteto de soluções deve implementar uma solução para que o aplicativo possa restabelecer as conexões com o banco de dados sem a necessidade de reinicialização.\

Qual solução atenderá a esses requisitos?

A. Crie uma instância de banco de dados Amazon Aurora MySQL Serverless v1. Migre a instância de banco de dados RDS para a instância de banco de dados Aurora Serverless v1. Atualize as configurações de conexão no aplicativo para apontar para o endpoint do leitor Aurora.

B. Crie um proxy RDS. Configure o endpoint RDS existente como destino. Atualize as configurações de conexão no aplicativo para apontar para o endpoint do proxy RDS. **Mais votado**

C. Crie um cluster de banco de dados MySQL do Amazon Aurora com dois nós. Migre a instância do banco de dados RDS para o cluster de banco de dados Aurora. Crie um proxy RDS. Configure o endpoint RDS existente como destino. Atualize as configurações de conexão no aplicativo para apontar para o endpoint do proxy RDS.

D. Crie um bucket do Amazon S3. Exporte o banco de dados para o Amazon S3 usando o AWS Database Migration Service (AWS DMS). Configure o Amazon Athena para usar o bucket do S3 como armazenamento de dados. Instale o driver ODBC (Open Database Connectivity) mais recente para o aplicativo. Atualize as configurações de conexão no aplicativo para apontar para o endpoint do Athena.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/8/)

73- Uma empresa está desenvolvendo uma solução na Nuvem AWS. Milhares de dispositivos se conectarão à solução e enviarão dados. Cada dispositivo precisa ser capaz de enviar e receber dados em tempo real pelo protocolo MQTT. Cada dispositivo deve se autenticar usando um certificado X.509 exclusivo.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Configure o AWS IoT Core. Para cada dispositivo, crie uma fila correspondente do Amazon MQ e provisione um certificado. Conecte cada dispositivo ao Amazon MQ.

B. Crie um Balanceador de Carga de Rede (NLB) e configure-o com um autorizador do AWS Lambda. Execute um broker MQTT em instâncias do Amazon EC2 em um grupo de Auto Scaling. Defina o grupo de Auto Scaling como destino para o NL. Conecte cada dispositivo ao NLB.

C. Configure o AWS IoT Core. Para cada dispositivo, crie um objeto AWS IoT correspondente e provisione um certificado. Conecte cada dispositivo ao AWS IoT Core. **Mais votado**

D. Configurar uma API HTTP do Amazon API Gateway e um Balanceador de Carga de Rede (NLB). Criar integração entre o API Gateway e o NLB. Configurar um autorizador de certificado TLS mútuo na API HTTP. Executar um broker MQTT em uma instância do Amazon EC2 direcionada pelo NLB. Conectar cada dispositivo ao NLB.

74- Uma empresa está executando várias cargas de trabalho em uma única conta da AWS. Uma nova política da empresa determina que os engenheiros podem provisionar apenas recursos aprovados e que devem usar o AWS CloudFormation para provisionar esses recursos. Um arquiteto de soluções precisa criar uma solução para impor a nova restrição à função do IAM que os engenheiros usam para acesso.\

O que o arquiteto de soluções deve fazer para criar a solução?

A. Carregue modelos do AWS CloudFormation que contenham recursos aprovados para um bucket do Amazon S3. Atualize a política do IAM para a função de IAM dos engenheiros para permitir acesso apenas ao Amazon S3 e ao AWS CloudFormation. Use modelos do AWS CloudFormation para provisionar recursos.

B. Atualize a política do IAM para a função de IAM dos engenheiros com permissões para permitir apenas o provisionamento de recursos aprovados e do AWS CloudFormation. Use modelos do AWS CloudFormation para criar pilhas com recursos aprovados.

C. Atualize a política do IAM para a função de IAM dos engenheiros com permissões para permitir apenas ações do AWS CloudFormation. Crie uma nova política do IAM com permissão para provisionar recursos aprovados e atribua a política a uma nova função de serviço do IAM. Atribua a função de serviço do IAM ao AWS CloudFormation durante a criação da pilha. **Mais votado**

D. Provisione recursos em pilhas do AWS CloudFormation. Atualize a política do IAM para a função de IAM dos engenheiros para permitir acesso apenas à sua própria pilha do AWS CloudFormation.

75- Um arquiteto de soluções está projetando a arquitetura de armazenamento e recuperação de dados para um novo aplicativo que uma empresa lançará em breve. O aplicativo foi projetado para ingerir milhões de pequenos registros por minuto de dispositivos em todo o mundo. Cada registro tem menos de 4 KB e precisa ser armazenado em um local durável, onde possa ser recuperado com baixa latência. Os dados são efêmeros e a empresa precisa armazená-los por apenas 120 dias, após os quais podem ser excluídos.\

O arquiteto de soluções calcula que, ao longo de um ano, os requisitos de armazenamento seriam de cerca de 10 a 15 TB.\

Qual estratégia de armazenamento é a MAIS econômica e atende aos requisitos do projeto?

A. Projete o aplicativo para armazenar cada registro recebido como um único arquivo .csv em um bucket do Amazon S3 para permitir a recuperação indexada. Configure uma política de ciclo de vida para excluir dados com mais de 120 dias.

B. Projete o aplicativo para armazenar cada registro recebido em uma tabela do Amazon DynamoDB configurada corretamente para a escala. Configure o recurso Time to Live (TTL) do DynamoDB para excluir registros com mais de 120 dias. **Mais votado**

C. Projete o aplicativo para armazenar cada registro recebido em uma única tabela em um banco de dados MySQL do Amazon RDS. Execute um cron job noturno que execute uma consulta para excluir quaisquer registros com mais de 120 dias.

D. Projete o aplicativo para agrupar os registros recebidos antes de gravá-los em um bucket do Amazon S3. Atualize os metadados do objeto para conter a lista de registros no lote e use o recurso de pesquisa de metadados do Amazon S3 para recuperar os dados. Configure uma política de ciclo de vida para excluir os dados após 120 dias.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/8/)

76- Uma empresa de varejo hospeda um site de comércio eletrônico na AWS em diversas regiões da AWS. A empresa deseja que o site esteja sempre operacional para compras online. O site armazena dados em uma instância do Amazon RDS para MySQL.\

Qual solução proporcionará a MAIOR disponibilidade para o banco de dados?

A. Configure backups automatizados no Amazon RDS. Em caso de interrupção, promova um backup automatizado para uma instância de banco de dados autônoma. Direcione o tráfego do banco de dados para a instância de banco de dados promovida. Crie uma réplica de leitura de substituição que tenha a instância de banco de dados promovida como origem.

B. Configurar tabelas globais e réplicas de leitura no Amazon RDS. Ative o escopo entre regiões. Em caso de interrupção, use o AWS Lambda para copiar as réplicas de leitura de uma região para outra.

C. Configure tabelas globais e backups automatizados no Amazon RDS. Em caso de interrupção, use o AWS Lambda para copiar as réplicas de leitura de uma região para outra.

D. Configurar réplicas de leitura no Amazon RDS. Em caso de interrupção, promova uma réplica de leitura e inter-região para uma instância de banco de dados autônoma. Direcione o tráfego do banco de dados para a instância de banco de dados promovida. Crie uma réplica de leitura de substituição que tenha a instância de banco de dados promovida como origem. **Mais votado**

77- A Example Corp. possui um data center local e uma VPC chamada VPC A na conta AWS da Example Corp. A rede local se conecta à VPC A por meio de uma VPN Site-to-Site da AWS. Os servidores locais podem acessar a VPC A corretamente. A Example Corp. acaba de adquirir a AnyCompany, que possui uma VPC chamada VPC B. Não há sobreposição de endereços IP entre essas redes. A Example Corp. emparelhou a VPC A e a VPC B.\

A Example Corp. deseja se conectar a partir de seus servidores locais à VPC B. A Example Corp. configurou corretamente a ACL de rede e os grupos de segurança.\

Qual solução atenderá a esse requisito com o MENOR esforço operacional?

A. Crie um gateway de trânsito. Conecte a VPN Site-to-Site, a VPC A e a VPC B ao gateway de trânsito. Atualize as tabelas de rotas do gateway de trânsito para todas as redes para adicionar rotas de intervalo de IP para todas as outras redes. **Mais votado**

B. Crie um gateway de trânsito. Crie uma conexão VPN Site-to-Site entre a rede local e a VPC B e conecte a conexão VPN ao gateway de trânsito. Adicione uma rota para direcionar o tráfego para as VPCs pareadas e adicione uma regra de autorização para conceder aos clientes acesso às VPCs A e B.

C. Atualize as tabelas de rotas da VPN Site-to-Site e de ambas as VPCs para as três redes. Configure a propagação do BGP para as três redes. Aguarde até 5 minutos para que a propagação do BGP seja concluída.

D. Modifique a definição do gateway privado virtual da VPN Site-to-Site para incluir a VPC A e a VPC B. Divida os dois roteadores do gateway privado virtual entre as duas VPCs.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/8/)

78- Uma empresa concluiu recentemente a migração de um data center local para a Nuvem AWS usando uma estratégia de replataforma. Um dos servidores migrados está executando um serviço SMTP (Simple Mail Transfer Protocol) legado do qual depende um aplicativo crítico. O aplicativo envia mensagens de e-mail de saída para os clientes da empresa. O servidor SMTP legado não oferece suporte à criptografia TLS e usa a porta TCP 25. O aplicativo pode usar apenas SMTP.\

A empresa decide usar o Amazon Simple Email Service (Amazon SES) e desativar o servidor SMTP legado. A empresa criou e validou o domínio SES. A empresa removeu os limites do SES.\

O que a empresa deve fazer para modificar o aplicativo para enviar mensagens de e-mail do Amazon SES?

A. Configure o aplicativo para se conectar ao Amazon SES usando o TLS Wrapper. Crie uma função do IAM com as permissões ses:SendEmail e ses:SendRawEmail. Anexe a função do IAM a uma instância do Amazon EC2.

B. Configure o aplicativo para se conectar ao Amazon SES usando STARTTLS. Obtenha as credenciais SMTP do Amazon SES. Use as credenciais para autenticar no Amazon SES. **Mais votado**

C. Configure o aplicativo para usar a API do SES para enviar mensagens de e-mail. Crie uma função do IAM com as permissões ses:SendEmail e ses:SendRawEmail. Use a função do IAM como uma função de serviço para o Amazon SES.

D. Configure o aplicativo para usar os SDKs da AWS para enviar mensagens de e-mail. Crie um usuário do IAM para o Amazon SES. Gere chaves de acesso à API. Use as chaves de acesso para autenticação no Amazon SES.

79- Uma empresa adquiriu recentemente várias outras empresas. Cada empresa possui uma conta AWS separada com um método de faturamento e geração de relatórios diferente. A empresa adquirente consolidou todas as contas em uma única organização no AWS Organizations. No entanto, a empresa adquirente encontrou dificuldades para gerar um relatório de custos que contivesse grupos significativos para todas as equipes.\

A equipe financeira da empresa adquirente precisa de uma solução para reportar os custos de todas as empresas por meio de um aplicativo autogerenciado.\

Qual solução atenderá a esses requisitos?

A. Crie um Relatório de Custo e Uso da AWS para a organização. Defina tags e categorias de custo no relatório. Crie uma tabela no Amazon Athena. Crie um conjunto de dados do Amazon QuickSight com base na tabela do Athena. Compartilhe o conjunto de dados com a equipe financeira. **Mais votado**

B. Crie um Relatório de Custo e Uso da AWS para a organização. Defina tags e categorias de custo no relatório. Crie um modelo especializado no AWS Cost Explorer que o departamento financeiro usará para criar relatórios.

C. Crie um conjunto de dados do Amazon QuickSight que receba informações de gastos da API de Consulta de Lista de Preços da AWS. Compartilhe o conjunto de dados com a equipe financeira.

D. Use a API de Consulta de Lista de Preços da AWS para coletar informações sobre gastos da conta. Crie um modelo especializado no AWS Cost Explorer que o departamento financeiro usará para gerar relatórios.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/8/)

80- Uma empresa opera uma plataforma de IoT na AWS. Sensores de IoT em vários locais enviam dados para os servidores de API Node.js da empresa em instâncias do Amazon EC2 executadas por trás de um Application Load Balancer. Os dados são armazenados em uma instância de banco de dados MySQL do Amazon RDS que utiliza um volume SSD de uso geral de 4 TB.\

O número de sensores que a empresa implantou em campo aumentou ao longo do tempo e espera-se que cresça significativamente. Os servidores de API estão constantemente sobrecarregados e as métricas do RDS mostram alta latência de gravação.\

Qual das seguintes etapas, em conjunto, resolverá os problemas permanentemente e permitirá o crescimento à medida que novos sensores são provisionados, mantendo a plataforma com boa relação custo-benefício? (Escolha duas.)

A. Redimensione o armazenamento SSD de uso geral do MySQL para 6 TB para melhorar o IOPS do volume.

B. Reestruturar a camada do banco de dados para usar o Amazon Aurora em vez de uma instância do RDS MySQL DB e adicionar réplicas de leitura.

C. Aproveite o Amazon Kinesis Data Streams e o AWS Lambda para ingerir e processar os dados brutos. **Mais votado**

D. Use o AWS X-Ray para analisar e depurar problemas de aplicativos e adicionar mais servidores de API para corresponder à carga.

E. Reorganize a camada do banco de dados para usar o Amazon DynamoDB em vez de uma instância do RDS MySQL DB. **Ma**

81- Uma empresa está construindo um sistema eletrônico de gerenciamento de documentos no qual os usuários carregam seus documentos. A pilha de aplicativos é totalmente serverless e roda na AWS na região eu-central-1. O sistema inclui um aplicativo web que usa uma distribuição do Amazon CloudFront para entrega com o Amazon S3 como origem. O aplicativo web se comunica com os endpoints regionais do Amazon API Gateway. As APIs do API Gateway chamam funções do AWS Lambda que armazenam metadados em um banco de dados serverless do Amazon Aurora e colocam os documentos em um bucket do S3.\
A empresa está crescendo de forma constante e concluiu uma prova de conceito com seu maior cliente. A empresa precisa melhorar a latência fora da Europa.\

Qual combinação de ações atenderá a esses requisitos? (Escolha duas.)

A. Habilite o Transfer Acceleration S3 no bucket S3. Certifique-se de que o aplicativo web utilize as URLs assinadas do Transfer Acceleration. **Mais votado**

B. Crie um acelerador no AWS Global Accelerator. Anexe o acelerador à distribuição do CloudFront.

C. Altere os pontos de extremidade regionais do API Gateway para pontos de extremidade otimizados para borda. **Mais votado**

D. Provisione toda a pilha em dois outros locais espalhados pelo mundo. Use bancos de dados globais no cluster Aurora Serverless.

E. Adicione um proxy Amazon RDS entre as funções do Lambda e o banco de dados Aurora Serverless.

82- Uma empresa de aventura lançou um novo recurso em seu aplicativo móvel. Os usuários podem usar o recurso para enviar suas fotos e vídeos de caminhadas e rafting a qualquer momento. As fotos e vídeos são armazenados no armazenamento Amazon S3 Standard em um bucket S3 e são disponibilizados pelo Amazon CloudFront.\

A empresa precisa otimizar o custo do armazenamento. Um arquiteto de soluções descobre que a maioria das fotos e vídeos enviados são acessados com pouca frequência após 30 dias. No entanto, algumas das fotos e vídeos enviados são acessados com frequência após 30 dias. O arquiteto de soluções precisa implementar uma solução que mantenha a disponibilidade de recuperação de fotos e vídeos em milissegundos ao menor custo possível.\

Qual solução atenderá a esses requisitos?

A. Configure o S3 Intelligent-Tiering no bucket do S3. **Mais votado**

B. Configure uma política de ciclo de vida do S3 para fazer a transição de objetos de imagem e de vídeo do S3 Standard para o S3 Glacier Deep Archive após 30 dias.

C. Substitua o Amazon S3 por um sistema de arquivos Amazon Elastic File System (Amazon EFS) montado em instâncias do Amazon EC2.

D. Adicione um cabeçalho Cache-Control: max-age aos objetos de imagem e vídeo do S3. Defina o cabeçalho como 30 dias.

83- Uma empresa usa o Amazon S3 para armazenar arquivos e imagens em diversas classes de armazenamento. Os custos do S3 da empresa aumentaram substancialmente no último ano.\

Um arquiteto de soluções precisa revisar as tendências de dados dos últimos 12 meses e identificar a classe de armazenamento apropriada para os objetos.\

Qual solução atenderá a esses requisitos?

A. Baixe os relatórios de custo e uso da AWS referentes aos últimos 12 meses de uso do S3. Consulte as recomendações do AWS Trusted Advisor para economizar custos.

B. Use a análise de classe de armazenamento S3. Importe tendências de dados para um painel do Amazon QuickSight para analisar tendências de armazenamento.

C. Use o Amazon S3 Storage Lens. Atualize o painel padrão para incluir métricas avançadas para tendências de armazenamento. **Mais votado**

D. Use o Access Analyzer para S3. Baixe o relatório do Access Analyzer para S3 dos últimos 12 meses. Importe o arquivo .csv para um painel do Amazon QuickSight.

84- Uma empresa possui sua infraestrutura de nuvem na AWS. Um arquiteto de soluções precisa definir a infraestrutura como código. A infraestrutura está atualmente implantada em uma região da AWS. O plano de expansão de negócios da empresa inclui implantações em várias regiões e em várias contas da AWS.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Use modelos do AWS CloudFormation. Adicione políticas do IAM para controlar as diversas contas e implante os modelos nas diversas regiões.

B. Use o AWS Organizations. Implante modelos do AWS CloudFormation a partir da conta de gerenciamento. Use o AWS Control Tower para gerenciar implantações entre contas.

C. Use AWS Organizations e AWS CloudFormation StackSets. Implante um modelo do Cloud Formation a partir de uma conta que tenha as permissões de IAM necessárias. **Mais votado**

D. Use pilhas aninhadas com modelos do AWS CloudFormation. Altere a região usando pilhas aninhadas.

85- Uma empresa possui sua infraestrutura de nuvem na AWS. Um arquiteto de soluções precisa definir a infraestrutura como código. A infraestrutura está atualmente implantada em uma região da AWS. O plano de expansão de negócios da empresa inclui implantações em várias regiões e em várias contas da AWS.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Use modelos do AWS CloudFormation. Adicione políticas do IAM para controlar as diversas contas e implante os modelos nas diversas regiões.

B. Use o AWS Organizations. Implante modelos do AWS CloudFormation a partir da conta de gerenciamento. Use o AWS Control Tower para gerenciar implantações entre contas.

C. Use AWS Organizations e AWS CloudFormation StackSets. Implante um modelo do Cloud Formation a partir de uma conta que tenha as permissões de IAM necessárias. **Mais votado**

D. Use pilhas aninhadas com modelos do AWS CloudFormation. Altere a região usando pilhas aninhadas.

86- Uma empresa planeja refatorar uma aplicação monolítica em um design de aplicação moderno implantado na AWS. O pipeline de CI/CD precisa ser atualizado para suportar o design moderno da aplicação, com os seguintes requisitos:\

• Deve permitir que as alterações sejam lançadas várias vezes a cada hora.\
• Deve ser capaz de reverter as alterações o mais rápido possível.\

Qual design atenderá a esses requisitos?

A. Implante um pipeline de CI/CD que incorpore AMIs para conter a aplicação e suas configurações. Implante a aplicação substituindo instâncias do Amazon EC2.

B. Especifique o AWS Elastic Beanstalk para preparação em um ambiente secundário como destino de implantação para o pipeline de CI/CD da aplicação. Para implementar, troque as URLs dos ambientes de preparação e produção. **Mais votado**

C. Use o AWS Systems Manager para reprovisionar a infraestrutura para cada implantação. Atualize os dados do usuário do Amazon EC2 para extrair o artefato de código mais recente do Amazon S3 e use o roteamento ponderado do Amazon Route 53 para apontar para o novo ambiente.

D. Implemente as atualizações do aplicativo como parte de um evento de Dimensionamento Automático usando AMIs pré-criadas. Use novas versões das AMIs para adicionar instâncias e elimine gradualmente todas as instâncias que usam a versão anterior da AMI com a política de encerramento configurada durante um evento de implantação.

87- Uma empresa possui uma aplicação executada em instâncias do Amazon EC2. Um arquiteto de soluções está projetando uma infraestrutura de VPC em uma região da AWS onde a aplicação precisa acessar um cluster de banco de dados do Amazon Aurora. Todas as instâncias do EC2 estão associadas ao mesmo grupo de segurança. O cluster de banco de dados está associado ao seu próprio grupo de segurança.\

O arquiteto de soluções precisa adicionar regras aos grupos de segurança para fornecer à aplicação acesso com privilégios mínimos ao cluster de banco de dados.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Adicione uma regra de entrada ao grupo de segurança das instâncias do EC2. Especifique o grupo de segurança do cluster de banco de dados como a origem na porta padrão do Aurora.

B. Adicione uma regra de saída ao grupo de segurança das instâncias do EC2. Especifique o grupo de segurança do cluster de banco de dados como destino na porta padrão do Aurora. **Mais votado**

C. Adicione uma regra de entrada ao grupo de segurança do cluster de banco de dados. Especifique o grupo de segurança das instâncias do EC2 como a origem na porta padrão do Aurora. **Mais votado**

D. Adicione uma regra de saída ao grupo de segurança do cluster de banco de dados. Especifique o grupo de segurança das instâncias do EC2 como destino na porta padrão do Aurora.

E. Adicione uma regra de saída ao grupo de segurança do cluster de banco de dados. Especifique o grupo de segurança das instâncias do EC2 como destino nas portas efêmeras.

88- Uma empresa deseja alterar sua estratégia interna de cobrança de nuvem para cada uma de suas unidades de negócios. Atualmente, a equipe de governança de nuvem compartilha relatórios sobre os gastos gerais com nuvem com o chefe de cada unidade de negócios. A empresa usa o AWS Organizations para gerenciar as contas da AWS separadas para cada unidade de negócios. O padrão de marcação existente no Organizations inclui o aplicativo, o ambiente e o proprietário. A equipe de governança de nuvem deseja uma solução centralizada para que cada unidade de negócios receba relatórios mensais sobre seus gastos com nuvem. A solução também deve enviar notificações para qualquer gasto com nuvem que exceda um limite definido.\

Qual solução é a maneira MAIS econômica de atender a esses requisitos?

A. Configure os Orçamentos da AWS em cada conta e configure alertas de orçamento agrupados por aplicação, ambiente e proprietário. Adicione cada unidade de negócios a um tópico do Amazon SNS para cada alerta. Use o Cost Explorer em cada conta para criar relatórios mensais para cada unidade de negócios.

B. Configure os Orçamentos da AWS na conta de gerenciamento da organização e configure alertas de orçamento agrupados por aplicativo, ambiente e proprietário. Adicione cada unidade de negócios a um tópico do Amazon SNS para cada alerta. Use o Cost Explorer na conta de gerenciamento da organização para criar relatórios mensais para cada unidade de negócios. **Mais votado**

C. Configure os orçamentos da AWS em cada conta e configure alertas de orçamento agrupados por aplicação, ambiente e proprietário. Adicione cada unidade de negócios a um tópico do Amazon SNS para cada alerta. Use o painel de gerenciamento de custos e faturamento da AWS em cada conta para criar relatórios mensais para cada unidade de negócios.

D. Habilite os Relatórios de Custo e Uso da AWS na conta de gerenciamento da organização e configure os relatórios agrupados por aplicativo, ambiente e proprietário. Crie uma função do AWS Lambda que processe os Relatórios de Custo e Uso da AWS, envie alertas de orçamento e relatórios mensais para a lista de e-mails de cada unidade de negócios.

89- Uma empresa está usando o AWS CloudFormation para implantar sua infraestrutura. A empresa está preocupada com a possibilidade de, se uma pilha de produção do CloudFormation for excluída, dados importantes armazenados em bancos de dados do Amazon RDS ou volumes do Amazon EBS também serem excluídos.\

Como a empresa pode evitar que os usuários excluam dados acidentalmente dessa forma?

A. Modifique os modelos do CloudFormation para adicionar um atributo DeletionPolicy aos recursos do RDS e do EBS. **Mais votado**

B. Configure uma política de pilha que não permita a exclusão de recursos do RDS e do EBS.

C. Modifique as políticas do IAM para impedir a exclusão de recursos do RDS e do EBS marcados com uma tag "aws:cloudformation:stack-name".

D. Use as regras do AWS Config para evitar a exclusão de recursos do RDS e do EBS.

90- Uma empresa possui logs de fluxo de VPC habilitados para seu gateway NAT. A empresa está recebendo a mensagem Action = ACCEPT para o tráfego de entrada proveniente do endereço IP público 198.51.100.2 com destino a uma instância privada do Amazon EC2.\

Um arquiteto de soluções deve determinar se o tráfego representa conexões de entrada não solicitadas da Internet. Os dois primeiros octetos do bloco CIDR da VPC são 203.0.\

Qual conjunto de etapas o arquiteto de soluções deve seguir para atender a esses requisitos?

A. Abra o console do AWS CloudTrail. Selecione o grupo de logs que contém a interface de rede elástica do gateway NAT e o entrelaçamento de rede elástica da instância privada. Execute uma consulta para filtrar com o endereço de destino definido como "como 203.0" e o endereço de origem definido como "como 198.51.100.2". Execute o comando stats para filtrar a soma de bytes transferidos pelo endereço de origem e pelo endereço de destino.

B. Abra o console do Amazon CloudWatch. Selecione o grupo de logs que contém a interface de rede elástica do gateway NAT e a interface de rede elástica da instância privada. Execute uma consulta para filtrar com o endereço de destino definido como "como 203.0" e o endereço de origem definido como "como 198.51.100.2". Execute o comando stats para filtrar a soma de bytes transferidos pelo endereço de origem e pelo endereço de destino. **Mais votado**

C. Abra o console do AWS CloudTrail. Selecione o grupo de logs que contém a interface de rede elástica do gateway NAT e a interface de rede elástica da instância privada. Execute uma consulta para filtrar com o endereço de destino definido como "como 198.51.100.2" e o endereço de origem definido como "como 203.0". Execute o comando stats para filtrar a soma de bytes transferidos pelo endereço de origem e pelo endereço de destino.

D. Abra o console do Amazon CloudWatch. Selecione o grupo de logs que contém a interface de rede elástica do gateway NAT e a interface de rede elástica da instância privada. Execute uma consulta para filtrar com o endereço de destino definido como "como 198.51.100.2" e o endereço de origem definido como "como 203.0". Execute o comando stats para filtrar a soma de bytes transferidos pelo endereço de origem e pelo endereço de destino.

91- Uma empresa consiste em duas unidades de negócios distintas. Cada unidade de negócios possui sua própria conta na AWS dentro de uma única organização no AWS Organizations. As unidades de negócios compartilham regularmente documentos confidenciais entre si. Para facilitar o compartilhamento, a empresa criou um bucket do Amazon S3 em cada conta e configurou a replicação de baixo custo entre os buckets do S3. Os buckets do S3 possuem milhões de objetos.\

Recentemente, uma auditoria de segurança identificou que nenhum dos buckets do S3 possui criptografia em repouso habilitada. A política da empresa exige que todos os documentos sejam armazenados com criptografia em repouso. A empresa deseja implementar a criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3).\

Qual é a solução operacional MAIS eficiente que atende a esses requisitos?

A. Ative o SSE-S3 em ambos os buckets S3. Use as Operações em Lote do S3 para copiar e criptografar os objetos no mesmo local. **Mais votado**

B. Crie uma chave do AWS Key Management Service (AWS KMS) em cada conta. Ative a criptografia do lado do servidor com chaves do AWS KMS (SSE-KMS) em cada bucket do S3 usando a chave do KMS correspondente naquela conta da AWS. Criptografe os objetos existentes usando um comando de cópia do S3 na CLI da AWS.

C. Ative o SSE-S3 em ambos os buckets do S3. Criptografe os objetos existentes usando um comando de cópia do S3 na CLI da AWS.

D. Crie uma chave do AWS Key Management Service (AWS KMS) em cada conta. Ative a criptografia do lado do servidor com chaves do AWS KMS (SSE-KMS) em cada bucket do S3 usando a chave do KMS correspondente naquela conta da AWS. Use as Operações em Lote do S3 para copiar os objetos para o mesmo local.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/10/)

92- Uma empresa está executando um aplicativo na Nuvem AWS. O aplicativo coleta e armazena uma grande quantidade de dados não estruturados em um bucket do Amazon S3. O bucket do S3 contém vários terabytes de dados e usa a classe de armazenamento S3 Standard. O tamanho dos dados aumenta em vários gigabytes todos os dias.\

A empresa precisa consultar e analisar os dados. A empresa não acessa dados com mais de 1 ano. No entanto, a empresa deve reter todos os dados indefinidamente por motivos de conformidade.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Use o S3 Select para consultar os dados. Crie uma política de ciclo de vida do S3 para transferir dados com mais de 1 ano para o S3 Glacier Deep Archive.

B. Use o Amazon Redshift Spectrum para consultar os dados. Crie uma política de ciclo de vida do S3 para fazer a transição de dados com mais de 1 ano para o S3 Glacier Deep Archive.

C. Use um Catálogo de Dados do AWS Glue e o Amazon Athena para consultar os dados. Crie uma política de ciclo de vida do S3 para transferir dados com mais de 1 ano para o S3 Glacier Deep Archive. **Mais votado**

D. Use o Amazon Redshift Spectrum para consultar os dados. Crie uma política de ciclo de vida do S3 para migrar dados com mais de 1 ano para o S3 Intelligent-Tiering.

93- Uma empresa de processamento de vídeo deseja construir um modelo de aprendizado de máquina (ML) utilizando 600 TB de dados compactados, armazenados como milhares de arquivos no sistema de armazenamento conectado à rede local da empresa. A empresa não possui os recursos computacionais necessários para experimentos de ML e deseja usar a AWS.\

A empresa precisa concluir a transferência de dados para a AWS em até 3 semanas. A transferência de dados será única. Os dados devem ser criptografados durante o transporte. A velocidade de upload medida da conexão de internet da empresa é de 100 Mbps, e vários departamentos compartilham a conexão.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Encomende vários dispositivos AWS Snowball Edge Storage Optimized usando o Console de Gerenciamento da AWS. Configure os dispositivos com um bucket S3 de destino. Copie os dados para os dispositivos. Envie os dispositivos de volta para a AWS. **Mais votado**

B. Configure uma conexão AWS Direct Connect de 10 Gbps entre a empresa e a região AWS mais próxima. Transfira os dados por uma conexão VPN para a região para armazená-los no Amazon S3.

C. Crie uma conexão VPN entre o armazenamento conectado à rede local e a região da AWS mais próxima. Transfira os dados pela conexão VPN.

D. Implante um gateway de arquivos do AWS Storage Gateway no local. Configure o gateway de arquivos com um bucket S3 de destino. Copie os dados para o gateway de arquivos.

94- Uma empresa migrou seu aplicativo de processamento de formulários para a AWS. Quando os usuários interagem com o aplicativo, eles carregam formulários digitalizados como arquivos por meio de um aplicativo web. Um banco de dados armazena metadados do usuário e referências a arquivos armazenados no Amazon S3. O aplicativo web é executado em instâncias do Amazon EC2 e em um banco de dados Amazon RDS para PostgreSQL.\

Quando os formulários são carregados, o aplicativo envia notificações para uma equipe por meio do Amazon Simple Notification Service (Amazon SNS). Um membro da equipe então efetua login e processa cada formulário. O membro da equipe realiza a validação de dados no formulário e extrai os dados relevantes antes de inserir as informações em outro sistema que utiliza uma API.\

Um arquiteto de soluções precisa automatizar o processamento manual dos formulários. A solução deve fornecer extração precisa de formulários, minimizar o tempo de lançamento no mercado e minimizar a sobrecarga operacional de longo prazo.\

Qual solução atenderá a esses requisitos?

A. Desenvolver bibliotecas personalizadas para realizar o reconhecimento óptico de caracteres (OCR) nos formulários. Implantar as bibliotecas em um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) como uma camada de aplicação. Usar essa camada para processar os formulários quando eles forem carregados. Armazenar a saída no Amazon S3. Analisar essa saída extraindo os dados para uma tabela do Amazon DynamoDB. Enviar os dados para a APL do sistema de destino. Hospedar a nova camada de aplicação em instâncias do EC2.

B. Expanda o sistema com uma camada de aplicação que utilize AWS Step Functions e AWS Lambda. Configure essa camada para usar modelos de inteligência artificial e aprendizado de máquina (IA/ML) treinados e hospedados em uma instância do EC2 para realizar o reconhecimento óptico de caracteres (OCR) nos formulários quando eles forem carregados. Armazene a saída no Amazon S3. Analise essa saída extraindo os dados necessários na camada de aplicação. Envie os dados para a API do sistema de destino.

C. Hospede uma nova camada de aplicação em instâncias do EC2. Use essa camada para chamar endpoints que hospedam modelos de inteligência artificial e de agrupamento de máquinas (IA/ML) treinados e hospedados no Amazon SageMaker para realizar reconhecimento óptico de caracteres (OCR) nos formulários. Armazene a saída no Amazon ElastiCache. Analise essa saída extraindo os dados necessários na camada de aplicação. Envie os dados para a API do sistema de destino.

D. Expanda o sistema com uma camada de aplicação que utilize AWS Step Functions e AWS Lambda. Configure essa camada para usar o Amazon Textract e o Amazon Comprehend para realizar o reconhecimento óptico de caracteres (OCR) nos formulários quando estes forem carregados. Armazene a saída no Amazon S3. Analise essa saída extraindo os dados necessários na camada de aplicação. Envie os dados para a API do sistema de destino. **Mais votado**

95- Uma empresa está refatorando sua plataforma de processamento de pedidos on-premises na Nuvem AWS. A plataforma inclui um front-end web hospedado em uma frota de VMs, o RabbitMQ para conectar o front-end ao back-end e um cluster Kubernetes para executar um sistema de back-end em contêineres para processar os pedidos. A empresa não deseja fazer grandes alterações no aplicativo.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma AMI da VM do servidor web. Crie um grupo de Auto Scaling do Amazon EC2 que use a AMI e um Application Load Balancer. Configure o Amazon MQ para substituir a fila de mensagens local. Configure o Amazon Elastic Kubernetes Service (Amazon EKS) para hospedar o backend de processamento de pedidos. **Mais votado**

B. Crie um tempo de execução personalizado do AWS Lambda para simular o ambiente do servidor web. Crie uma API do Amazon API Gateway para substituir os servidores web front-end. Configure o Amazon MQ para substituir a fila de mensagens local. Configure o Amazon Elastic Kubernetes Service (Amazon EKS) para hospedar o back-end de processamento de pedidos.

C. Crie uma AMI da VM do servidor web. Crie um grupo de Auto Scaling do Amazon EC2 que use a AMI e um Application Load Balancer. Configure o Amazon MQ para substituir a fila de mensagens local. Instale o Kubernetes em uma frota de instâncias EC2 diferentes para hospedar o backend de processamento de pedidos.

D. Crie uma AMI da VM do servidor web. Crie um grupo de Auto Scaling do Amazon EC2 que use a AMI e um Application Load Balancer. Configure uma fila do Amazon Simple Queue Service (Amazon SQS) para substituir a fila de mensagens local. Configure o Amazon Elastic Kubernetes Service (Amazon EKS) para hospedar o backend de processamento de pedidos.

96- Um arquiteto de soluções precisa implementar um mecanismo de criptografia do lado do cliente para objetos que serão armazenados em um novo bucket do Amazon S3. O arquiteto de soluções criou uma CMK armazenada no AWS Key Management Service (AWS KMS) para essa finalidade.\

O arquiteto de soluções criou a seguinte política do IAM e a anexou a uma função do IAM:\



Durante os testes, o arquiteto de soluções conseguiu obter com sucesso os objetos de teste existentes no bucket do S3. No entanto, as tentativas de carregar um novo objeto resultaram em uma mensagem de erro. A mensagem de erro informava que a ação era proibida.\

Qual ação o arquiteto de soluções deve adicionar à política do IAM para atender a todos os requisitos?

A. kms:GenerateDataKey **Mais votado**

B. kms:GetKeyPolicy

C. kms:ObterChavePública

D. kms:Sinal

97- Uma empresa desenvolveu uma aplicação web. A empresa está hospedando a aplicação em um grupo de instâncias do Amazon EC2 por trás de um Application Load Balancer. A empresa deseja aprimorar a segurança da aplicação e planeja usar ACLs da web do AWS WAF. A solução não deve afetar negativamente o tráfego legítimo para a aplicação.\

Como um arquiteto de soluções deve configurar as ACLs da web para atender a esses requisitos?

A. Defina a ação das regras da ACL da Web como Contagem. Habilite o registro em log do AWS WAF. Analise as solicitações em busca de falsos positivos. Modifique as regras para evitar falsos positivos. Com o tempo, altere a ação das regras da ACL da Web de Contagem para Bloqueio. **Mais votado**

B. Use apenas regras baseadas em taxa nas ACLs da web e defina o limite de aceleração o mais alto possível. Bloqueie temporariamente todas as solicitações que excederem o limite. Defina regras aninhadas para restringir o escopo do rastreamento de taxa.

C. Defina a ação das regras da ACL da Web como Bloquear. Use apenas grupos de regras gerenciados pela AWS nas ACLs da Web. Avalie os grupos de regras usando métricas do Amazon CloudWatch com solicitações amostradas do AWS WAF ou logs do AWS WAF.

D. Use apenas grupos de regras personalizados nas ACLs da Web e defina a ação como Permitir. Habilite o registro em log do AWS WAF. Analise as solicitações em busca de falsos positivos. Modifique as regras para evitar falsos positivos. Com o tempo, altere a ação das regras da ACL da Web de Permitir para Bloquear.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/10/)

98- Uma empresa possui uma organização com muitas contas da AWS no AWS Organizations. Um arquiteto de soluções deve aprimorar a forma como a empresa gerencia regras comuns de grupos de segurança para as contas da AWS na organização.\

A empresa possui um conjunto comum de intervalos de CIDR de IP em uma lista de permissões em cada conta da AWS para permitir o acesso de e para a rede local da empresa. Os desenvolvedores em cada conta são responsáveis por adicionar novos intervalos de CIDR de IP aos seus grupos de segurança. A equipe de segurança possui sua própria conta da AWS. Atualmente, a equipe de segurança notifica os proprietários das outras contas da AWS quando são feitas alterações na lista de permissões.\

O arquiteto de soluções deve projetar uma solução que distribua o conjunto comum de intervalos de CIDR entre todas as contas.\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Configure um tópico do Amazon Simple Notification Service (Amazon SNS) na conta da AWS da equipe de segurança. Implante uma função do AWS Lambda em cada conta da AWS. Configure a função do Lambda para ser executada sempre que um tópico do SNS receber uma mensagem. Configure a função do Lambda para receber um endereço IP como entrada e adicioná-lo a uma lista de grupos de segurança na conta. Instrua a equipe de segurança a distribuir as alterações publicando mensagens em seu tópico do SNS.

B. Crie novas listas de prefixos gerenciadas pelo cliente em cada conta da AWS dentro da organização. Preencha as listas de prefixos em cada conta com todos os intervalos CIDR internos. Notifique o proprietário de cada conta da AWS para permitir os novos IDs de lista de prefixos gerenciados pelo cliente em suas contas em seus grupos de segurança. Instrua a equipe de segurança a compartilhar atualizações com cada proprietário de conta da AWS.

C. Crie uma nova lista de prefixos gerenciada pelo cliente na conta da AWS da equipe de segurança. Preencha a lista de prefixos gerenciada pelo cliente com todos os intervalos CIDR internos. Compartilhe a lista de prefixos gerenciada pelo cliente com a organização usando o AWS Resource Access Manager. Notifique o proprietário de cada conta da AWS para permitir o novo ID da lista de prefixos gerenciada pelo cliente em seus grupos de segurança. **Mais votado**

D. Crie uma função do IAM em cada conta da organização. Conceda permissões para atualizar grupos de segurança. Implante uma função do AWS Lambda na conta da AWS da equipe de segurança. Configure a função do Lambda para receber uma lista de endereços IP internos como entrada, assumir uma função em cada conta da organização e adicionar a lista de endereços IP aos grupos de segurança de cada conta.

99- Uma empresa introduziu uma nova política que permite que os funcionários trabalhem remotamente de suas casas, desde que se conectem por meio de uma VPN. A empresa hospeda aplicativos internos com VPCs em várias contas da AWS. Atualmente, os aplicativos podem ser acessados a partir da rede local da empresa por meio de uma conexão VPN Site-to-Site da AWS. A VPC na conta principal da AWS da empresa possui conexões de peering estabelecidas com VPCs em outras contas da AWS.\

Um arquiteto de soluções deve projetar uma solução de VPN de cliente da AWS escalável para os funcionários usarem enquanto trabalham em casa.\

Qual é a solução MAIS econômica que atende a esses requisitos?

A. Crie um endpoint de VPN do cliente em cada conta da AWS. Configure o roteamento necessário que permite acesso a aplicativos internos.

B. Crie um endpoint de VPN do cliente na conta principal da AWS. Configure o roteamento necessário que permite acesso a aplicativos internos.

C. Crie um endpoint de VPN do cliente na conta principal da AWS. Provisione um gateway de trânsito conectado a cada conta da AWS. Configure o roteamento necessário que permite acesso a aplicativos internos. **Mais votado**

D. Crie um endpoint de VPN do cliente na conta principal da AWS. Estabeleça a conectividade entre o endpoint de VPN do cliente e a VPN Site-to-Site da AWS.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/10/)

100- Uma empresa está executando um aplicativo na Nuvem AWS. Métricas recentes do aplicativo mostram tempos de resposta inconsistentes e um aumento significativo nas taxas de erros. Chamadas para serviços de terceiros estão causando os atrasos. Atualmente, o aplicativo chama serviços de terceiros de forma síncrona, invocando diretamente uma função do AWS Lambda.\

Um arquiteto de soluções precisa desacoplar as chamadas de serviços de terceiros e garantir que todas as chamadas sejam concluídas.\

Qual solução atenderá a esses requisitos?

A. Use uma fila do Amazon Simple Queue Service (Amazon SQS) para armazenar eventos e invocar a função Lambda. **Mais votado**

B. Use uma máquina de estado do AWS Step Functions para passar eventos para a função Lambda.

C. Use uma regra do Amazon EventBridge para passar eventos para a função Lambda.

D. Use um tópico do Amazon Simple Notification Service (Amazon SNS) para armazenar eventos e invocar a função Lambda.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/10/)

101- Uma empresa está executando aplicativos na AWS em um ambiente com várias contas. As equipes de vendas e de marketing da empresa usam contas AWS separadas no AWS Organizations.\

A equipe de vendas armazena petabytes de dados em um bucket do Amazon S3. A equipe de marketing usa o Amazon QuickSight para visualizações de dados. A equipe de marketing precisa acessar os dados que a equipe de estados armazena no bucket do S3. A empresa criptografou o bucket do S3 com uma chave do AWS Key Management Service (AWS KMS). A equipe de marketing já criou a função de serviço do IAM para o QuickSight para fornecer acesso ao QuickSight na conta de marketing da AWS. A empresa precisa de uma solução que forneça acesso seguro aos dados no bucket do S3 em todas as contas da AWS.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um novo bucket S3 na conta de marketing. Crie uma regra de replicação S3 na conta de vendas para copiar os objetos para o novo bucket S3 na conta de marketing. Atualize as permissões do QuickSight na conta de marketing para conceder acesso ao novo bucket S3.

B. Crie um SCP para conceder acesso ao bucket S3 para a conta de marketing. Use o AWS Resource Access Manager (AWS RAM) para compartilhar a chave KMS da conta de estados com a conta de marketing. Atualize as permissões do QuickSight na conta de marketing para conceder acesso ao bucket S3.

C. Atualize a política do bucket S3 na conta de marketing para conceder acesso à função QuickSight. Crie uma concessão KMS para a chave de criptografia usada no bucket S3. Conceda acesso de descriptografia à função QuickSight. Atualize as permissões do QuickSight na conta de marketing para conceder acesso ao bucket S3.

D. Crie uma função do IAM na conta de vendas e conceda acesso ao bucket do S3. Na conta de marketing, assuma a função do IAM na conta de vendas para acessar o bucket do S3. Atualize a função do QuickSight para criar uma relação de confiança com a nova função do IAM na conta de vendas. **M**

102- Uma empresa planeja migrar seus aplicativos críticos de um data center local para a AWS. A empresa possui uma instalação local de um cluster Always On do Microsoft SQL Server. A empresa deseja migrar para um serviço de banco de dados gerenciado pela AWS. Um arquiteto de soluções deve projetar uma migração de banco de dados heterogêneo na AWS.\

Qual solução atenderá a esses requisitos?

A. Migre os bancos de dados do SQL Server para o Amazon RDS para MySQL usando utilitários de backup e restauração.

B. Use um dispositivo otimizado para AWS Snowball Edge Storage para transferir dados para o Amazon S3. Configure o Amazon RDS para MySQL. Use a integração do S3 com recursos do SQL Server, como BULK INSERT.

C. Use a AWS Schema Conversion Tool para traduzir o esquema do banco de dados para o Amazon RDS para MySQL. Em seguida, use o AWS Database Migration Service (AWS DMS) para migrar os dados dos bancos de dados locais para o Amazon RDS. **Mais votado**

D. Use o AWS DataSync para migrar dados pela rede entre o armazenamento local e o Amazon S3. Configure o Amazon RDS para MySQL. Use a integração do S3 com recursos do SQL Server, como BULK INSERT.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/11/)

103- A equipe de design de uma editora atualiza os ícones e outros ativos estáticos utilizados por um aplicativo web de e-commerce. A empresa disponibiliza os ícones e ativos de um bucket do Amazon S3 hospedado na conta de produção da empresa. A empresa também utiliza uma conta de desenvolvimento, acessível aos membros da equipe de design.\

Após testar os ativos estáticos na conta de desenvolvimento, a equipe de design precisa carregá-los no bucket do S3 da conta de produção. Um arquiteto de soluções deve fornecer à equipe de design acesso à conta de produção sem expor outras partes do aplicativo web ao risco de alterações indesejadas.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Na conta de produção, crie uma nova política do IAM que permita acesso de leitura e gravação ao bucket do S3. **Mais votado**

B. Na conta de desenvolvimento, crie uma nova política do IAM que permita acesso de leitura e gravação ao bucket do S3.

C. Na conta de produção, crie uma função. Anexe a nova política à função. Defina a conta de desenvolvimento como uma entidade confiável. **Mais votado**

D. Na conta de desenvolvimento, crie uma função. Anexe a nova política à função. Defina a conta de produção como uma entidade confiável.

E. Na conta de desenvolvimento, crie um grupo que contenha todos os usuários do IAM da equipe de design. Anexe uma política do IAM diferente ao grupo para permitir a ação sts:AssumeRole na função na conta de produção. **Mais votado**

F. Na conta de desenvolvimento, crie um grupo que contenha todos os usuários do IAM da equipe de design. Anexe uma política do IAM diferente ao grupo para permitir a ação sts:AssumeRole na função na conta de desenvolvimento.

104- Uma empresa desenvolveu uma aplicação piloto utilizando o AWS Elastic Beanstalk e Java. Para economizar custos durante o desenvolvimento, a equipe de desenvolvimento da empresa implantou a aplicação em um ambiente de instância única. Testes recentes indicam que a aplicação consome mais CPU do que o esperado. A utilização da CPU é frequentemente superior a 85%, o que causa alguns gargalos de desempenho.\

Um arquiteto de soluções deve mitigar os problemas de desempenho antes que a empresa lance a aplicação para produção.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma nova aplicação Elastic Beanstalk. Selecione um tipo de ambiente com balanceamento de carga. Selecione todas as Zonas de Disponibilidade. Adicione uma regra de escalonamento horizontal que será executada se a utilização máxima da CPU for superior a 85% por 5 minutos.

B. Crie um segundo ambiente do Elastic Beanstalk. Aplique a política de implantação de divisão de tráfego. Especifique uma porcentagem do tráfego de entrada para direcionar para o novo ambiente caso a utilização média da CPU seja superior a 85% por 5 minutos.

C. Modifique a configuração de capacidade do ambiente existente para usar um tipo de ambiente com balanceamento de carga. Selecione todas as Zonas de Disponibilidade. Adicione uma regra de escalonamento horizontal que será executada se a utilização média da CPU for superior a 85% por 5 minutos. **Mais votado**

D. Selecione a ação "Reconstruir ambiente" com a opção de balanceamento de carga. Selecione uma Zona de Disponibilidade. Adicione uma regra de escalonamento horizontal que será executada se a utilização total da CPU for superior a 85% por 5 minutos.

105- Uma empresa financeira está executando seu aplicativo crítico para os negócios em instâncias Linux EC2 da geração atual. O aplicativo inclui um banco de dados MySQL autogerenciado que executa operações pesadas de E/S. O aplicativo está funcionando bem para lidar com um volume moderado de tráfego durante o mês. No entanto, ele apresenta lentidão nos últimos três dias de cada mês devido aos relatórios de fim de mês, mesmo com a empresa utilizando Elastic Load Balancers e Auto Scaling em sua infraestrutura para atender ao aumento da demanda.\

Qual das seguintes ações permitiria que o banco de dados lidasse com a carga do fim do mês com o MENOR impacto no desempenho?

A. Pré-aquecimento de Elastic Load Balancers, usando um tipo de instância maior, alterando todos os volumes do Amazon EBS para volumes GP2.

B. Executar uma migração única do cluster de banco de dados para o Amazon RDS e criar várias réplicas de leitura adicionais para lidar com a carga durante o final do mês. **Mais votado**

C. Usando o Amazon CloudWatch com o AWS Lambda para alterar o tipo, tamanho ou IOPS dos volumes do Amazon EBS no cluster com base em uma métrica específica do CloudWatch.

D. Substituir todos os volumes existentes do Amazon EBS por novos volumes PIOPS que tenham o tamanho máximo de armazenamento disponível e E/S por segundo, tirando instantâneos antes do final do mês e revertendo depois.

106- Uma empresa executa um aplicativo Java com dependências complexas em VMs localizadas em seu data center. O aplicativo é estável, mas a empresa deseja modernizar a pilha de tecnologia. A empresa deseja migrar o aplicativo para a AWS e minimizar a sobrecarga administrativa para manter os servidores.\

Qual solução atenderá a esses requisitos com MENOS alterações no código?

A. Migre a aplicação para o Amazon Elastic Container Service (Amazon ECS) no AWS Fargate usando o AWS App2Container. Armazene imagens de contêiner no Amazon Elastic Container Registry (Amazon ECR). Conceda à função de execução de tarefas do ECS a permissão 10 para acessar o repositório de imagens do ECR. Configure o Amazon ECS para usar um Application Load Balancer (ALB). Use o ALB para interagir com a aplicação. **Mais votado**

B. Migre o código do aplicativo para um contêiner executado no AWS Lambda. Crie uma API REST do Amazon API Gateway com integração ao Lambda. Use o API Gateway para interagir com o aplicativo.

C. Migre a aplicação para o Amazon Elastic Kubernetes Service (Amazon EKS) em grupos de nós gerenciados pelo EKS usando o AWS App2Container. Armazene imagens de contêiner no Amazon Elastic Container Registry (Amazon ECR). Conceda aos nós do EKS permissão para acessar o repositório de imagens do ECR. Use o Amazon API Gateway para interagir com a aplicação.

D. Migre o código do aplicativo para um contêiner executado no AWS Lambda. Configure o Lambda para usar um Balanceador de Carga de Aplicativo (ALB). Use o ALB para interagir com o aplicativo.

107- Uma empresa possui uma aplicação HTTP assíncrona hospedada como uma função do AWS Lambda. Um endpoint público do Amazon API Gateway invoca a função Lambda. A função Lambda e o endpoint do API Gateway residem na região us-east-1. Um arquiteto de soluções precisa redesenhar a aplicação para suportar failover para outra região da AWS.\

Qual solução atenderá a esses requisitos?

A. Crie um endpoint do API Gateway na região us-west-2 para direcionar o tráfego para a função Lambda em us-east-1. Configure o Amazon Route 53 para usar uma política de roteamento de failover para rotear o tráfego para os dois endpoints do API Gateway.

B. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Configure o API Gateway para direcionar o tráfego para a fila do SQS em vez da função Lambda. Configure a função Lambda para extrair mensagens da fila para processamento.

C. Implante a função Lambda na região us-west-2. Crie um endpoint do API Gateway em us-west-2 para direcionar o tráfego para a função Lambda em us-west-2. Configure o AWS Global Accelerator e um Application Load Balancer para gerenciar o tráfego entre os dois endpoints do API Gateway.

D. Implante a função Lambda e um endpoint do API Gateway na região us-west-2. Configure o Amazon Route 53 para usar uma política de roteamento de failover para rotear o tráfego para os dois endpoints do API Gateway. **M**

108- Uma empresa de varejo estruturou suas contas da AWS para fazerem parte de uma organização no AWS Organizations. A empresa configurou o faturamento consolidado e mapeou seus departamentos para as seguintes UOs: Finanças, Vendas, Recursos Humanos (RH), Marketing e Operações. Cada UO tem várias contas da AWS, uma para cada ambiente dentro de um departamento. Esses ambientes são desenvolvimento, teste, pré-produção e produção.\

O departamento de RH está lançando um novo sistema que será lançado em 3 meses. Em preparação, o departamento de RH adquiriu várias Instâncias Reservadas (IRs) em sua conta de produção da AWS. O departamento de RH instalará o novo aplicativo nessa conta. O departamento de RH quer garantir que outros departamentos não possam compartilhar os descontos de IR.\

Qual solução atenderá a esses requisitos?

A. No console do AWS Billing and Cost Management da conta de produção do departamento de RH, desative o compartilhamento de RI.

B. Remova a conta de produção da AWS do departamento de RH da organização. Adicione a conta 10 apenas à configuração de faturamento consolidado.

C. No console do AWS Billing and Cost Management, use a conta de gerenciamento da organização 10. Desative o Compartilhamento de RI para a conta de produção da AWS dos departamentos de RH. **Mais votado**

D. Crie um SCP na organização para restringir o acesso às RIs. Aplique o SCP às UOs dos outros departamentos.

109- Uma grande empresa está executando um aplicativo web popular. O aplicativo é executado em várias instâncias do Amazon EC2 Linux em um grupo de Auto Scaling em uma sub-rede privada. Um Application Load Balancer está direcionando as instâncias no grupo de Auto Scaling na sub-rede privada. O AWS Systems Manager Session Manager está configurado e o AWS Systems Manager Agent está em execução em todas as instâncias do EC2.\

A empresa lançou recentemente uma nova versão do aplicativo. Algumas instâncias do EC2 estão sendo marcadas como não íntegras e estão sendo encerradas. Como resultado, o aplicativo está sendo executado com capacidade reduzida. Um arquiteto de soluções tenta determinar a causa raiz analisando os logs do Amazon CloudWatch coletados do aplicativo, mas os logs são inconclusivos.\

Como o arquiteto de soluções deve obter acesso a uma instância do EC2 para solucionar o problema?

A. Suspenda o processo de escalonamento HealthCheck do grupo de Dimensionamento Automático. Use o Gerenciador de Sessões para efetuar login em uma instância marcada como não íntegra.

B. Habilite a proteção contra encerramento de instância do EC2. Use o Gerenciador de Sessões para efetuar login em uma instância marcada como não íntegra.

C. Defina a política de encerramento como OldestInstance no grupo de Dimensionamento Automático. Use o Gerenciador de Sessões para efetuar login em uma instância marcada como não íntegra.

D. Suspenda o processo de Encerramento do grupo de Dimensionamento Automático. Use o Gerenciador de Sessões para efetuar login em uma instância marcada como não íntegra. **Mais votado**

110- Uma empresa deseja implantar uma solução AWS WAF para gerenciar regras do AWS WAF em várias contas da AWS. As contas são gerenciadas em diferentes UOs no AWS Organizations.\

Os administradores devem poder adicionar ou remover contas ou UOs de conjuntos de regras do AWS WAF gerenciados, conforme necessário. Os administradores também devem ter a capacidade de atualizar e corrigir automaticamente regras do AWS WAF não compatíveis em todas as contas.\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Use o AWS Firewall Manager para gerenciar regras do AWS WAF em todas as contas da organização. Use um parâmetro do AWS Systems Manager Parameter Store para armazenar números de contas e UOs a serem gerenciadas. Atualize o parâmetro conforme necessário para adicionar ou remover contas ou UOs. Use uma regra do Amazon EventBridge para identificar quaisquer alterações no parâmetro e invocar uma função do AWS Lambda para atualizar a política de segurança na conta administrativa do Firewall Manager. **Mais votado**

B. Implante uma regra do AWS Config em toda a organização que exija que todos os recursos nas UOs selecionadas associem as regras do AWS WAF. Implante ações de correção automatizadas usando o AWS Lambda para corrigir recursos não compatíveis. Implante regras do AWS WAF usando um conjunto de pilhas do AWS CloudFormation para direcionar as mesmas UOs onde a regra do AWS Config é aplicada.

C. Crie regras do AWS WAF na conta de gerenciamento da organização. Use variáveis de ambiente do AWS Lambda para armazenar números de contas e UOs a serem gerenciadas. Atualize as variáveis de ambiente conforme necessário para adicionar ou remover contas ou UOs. Crie funções do IAM entre contas em contas de membros. Assuma as funções usando o AWS Security Token Service (AWS STS) na função do Lambda para criar e atualizar regras do AWS WAF nas contas de membros.

D. Use o AWS Control Tower para gerenciar regras do AWS WAF em todas as contas da organização. Use o AWS Key Management Service (AWS KMS) para armazenar números de contas e UOs a serem gerenciadas. Atualize o AWS KMS conforme necessário para adicionar ou remover contas ou UOs. Crie usuários do IAM em contas de membro. Permita que o AWS Control Tower na conta de gerenciamento use a chave de acesso e a chave de acesso secreta para criar e atualizar regras do AWS WAF nas contas de membro.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/11/)

111- Um arquiteto de soluções está auditando a configuração de segurança ou uma função do AWS Lambda para uma empresa. A função Lambda recupera as alterações mais recentes de um banco de dados Amazon Aurora. A função Lambda e o banco de dados são executados na mesma VPC. As variáveis de ambiente do Lambda fornecem as credenciais do banco de dados para a função Lambda.\

A função Lambda agrega dados e os disponibiliza em um bucket do Amazon S3 configurado para criptografia do lado do servidor com chaves de criptografia gerenciadas pelo AWS KMS (SSE-KMS). Os dados não devem trafegar pela internet. Se alguma credencial do banco de dados for comprometida, a empresa precisa de uma solução que minimize o impacto do comprometimento.\

O que o arquiteto de soluções deve recomendar para atender a esses requisitos?

A. Habilite a autenticação do banco de dados do IAM no cluster do Aurora DB. Altere a função do IAM para a função Lambda para permitir que a função acesse o banco de dados usando a autenticação do banco de dados do IAM. Implante um endpoint da VPC de gateway para o Amazon S3 na VPC. **Mais votado**

B. Habilite a autenticação do banco de dados IAM no cluster do Aurora DB. Altere a função IAM da função Lambda para permitir que a função acesse o banco de dados usando a autenticação do banco de dados IAM. Aplique HTTPS na conexão com o Amazon S3 durante as transferências de dados.

C. Salve as credenciais do banco de dados no AWS Systems Manager Parameter Store. Configure a rotação de senhas nas credenciais no Parameter Store. Altere a função do IAM da função Lambda para permitir que ela acesse o Parameter Store. Modifique a função Lambda para recuperar as credenciais do Parameter Store. Implante um endpoint de VPC de gateway para o Amazon S3 na VPC.

D. Salve as credenciais do banco de dados no AWS Secrets Manager. Configure a rotação de senhas nas credenciais no Secrets Manager. Altere a função do IAM da função Lambda para permitir que ela acesse o Secrets Manager. Modifique a função Lambda para recuperar as credenciais do Secrets Manager. Aplique HTTPS na conexão com o Amazon S3 durante as transferências de dados.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

112- Uma grande empresa de jogos para dispositivos móveis migrou com sucesso toda a sua infraestrutura local para a Nuvem AWS. Um arquiteto de soluções está revisando o ambiente para garantir que ele foi construído de acordo com o projeto e que está sendo executado em alinhamento com o Well-Architected Framework.\

Ao revisar os custos mensais anteriores no Cost Explorer, o arquiteto de soluções percebe que a criação e o encerramento subsequente de vários tipos de instâncias grandes representam uma alta proporção dos custos. O arquiteto de soluções descobre que os desenvolvedores da empresa estão lançando novas instâncias do Amazon EC2 como parte de seus testes e que os desenvolvedores não estão usando os tipos de instância apropriados.\

O arquiteto de soluções deve implementar um mecanismo de controle para limitar os tipos de instância que somente os desenvolvedores podem lançar.\

Qual solução atenderá a esses requisitos?

A. Crie uma regra gerenciada para o tipo de instância desejado no AWS Config. Configure a regra com os tipos de instância permitidos. Anexe a regra a um evento para ser executado sempre que uma nova instância do EC2 for iniciada.

B. No console do EC2, crie um modelo de inicialização que especifique os tipos de instância permitidos. Atribua o modelo de inicialização às contas do IAM dos desenvolvedores.

C. Crie uma nova política do IAM. Especifique os tipos de instância permitidos. Anexe a política a um grupo do IAM que contenha as contas do IAM para os desenvolvedores. **Mais votado**

D. Use o EC2 Image Builder para criar um pipeline de imagens para os desenvolvedores e ajudá-los na criação de uma imagem ideal.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

113- Uma empresa está desenvolvendo e hospedando diversos projetos na Nuvem AWS. Os projetos são desenvolvidos em várias contas da AWS sob a mesma organização no AWS Organizations. A empresa exige que o custo da infraestrutura em nuvem seja alocado ao projeto proprietário. A equipe responsável por todas as contas da AWS descobriu que várias instâncias do Amazon EC2 não possuem a tag "Project" usada para alocação de custos.\

Quais ações um arquiteto de soluções deve tomar para resolver o problema e evitar que ele aconteça no futuro? (Escolha três.)

A. Crie uma regra de configuração da AWS em cada conta para encontrar recursos com tags ausentes. **Mais votado**

B. Crie um SCP na organização com uma ação de negação para ec2:RunInstances se a tag Projeto estiver ausente. **Mais votado**

C. Use o Amazon Inspector na organização para encontrar recursos com tags ausentes.

D. Crie uma política do IAM em cada conta com uma ação de negação para ec2:RunInstances se a tag Projeto estiver ausente.

E. Crie um agregador AWS Config para a organização coletar uma lista de instâncias do EC2 com a tag Project ausente. **Mais votado**

F. Use o AWS Security Hub para agregar uma lista de instâncias do EC2 com a tag Project ausente.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

114- Uma empresa possui uma solução de monitoramento local que utiliza um banco de dados PostgreSQL para persistência de eventos. O banco de dados não consegue escalar devido à ingestão excessiva e frequentemente fica sem espaço de armazenamento.\

A empresa deseja criar uma solução híbrida e já configurou uma conexão VPN entre sua rede e a AWS. A solução deve incluir os seguintes atributos:\
• Serviços gerenciados da AWS para minimizar a complexidade operacional.\
• Um buffer que escala automaticamente para corresponder à taxa de transferência de dados e não requer administração contínua.\
• Uma ferramenta de visualização para criar painéis e observar eventos quase em tempo real.\
• Suporte para dados JSON semiestruturados e esquemas dinâmicos.\

Qual combinação de componentes permitirá à empresa criar uma solução de monitoramento que atenda a esses requisitos? (Escolha duas.)

A. Use o Amazon Kinesis Data Firehose para armazenar eventos em buffer. Crie uma função do AWS Lambda para processar e transformar eventos. **Mais votado**

B. Crie um fluxo de dados do Amazon Kinesis para armazenar eventos em buffer. Crie uma função do AWS Lambda para processar e transformar eventos.

C. Configure um cluster de banco de dados PostgreSQL do Amazon Aurora para receber eventos. Use o Amazon QuickSight para ler o banco de dados e criar visualizações e painéis quase em tempo real.

D. Configure o Amazon Elasticsearch Service (Amazon ES) para receber eventos. Use o endpoint do Kibana implantado com o Amazon ES para criar visualizações e painéis quase em tempo real. **Mais votado**

E. Configure uma instância de banco de dados do Amazon Neptune para receber eventos. Use o Amazon QuickSight para ler o banco de dados e criar visualizações e painéis quase em tempo real.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

115- Uma equipe coleta e roteia dados comportamentais de uma empresa inteira. A empresa administra um ambiente VPC Multi-AZ com sub-redes públicas, sub-redes privadas e um gateway de internet. Cada sub-rede pública também contém um gateway NAT. A maioria dos aplicativos da empresa lê e grava no Amazon Kinesis Data Streams. A maioria das cargas de trabalho é executada em sub-redes privadas.\

Um arquiteto de soluções deve revisar a infraestrutura. O arquiteto de soluções precisa reduzir custos e manter a funcionalidade dos aplicativos. O arquiteto de soluções usa o Cost Explorer e observa que o custo na categoria EC2-Other é consistentemente alto. Uma análise mais aprofundada mostra que as cobranças por NatGateway-Bytes estão aumentando o custo na categoria EC2-Other.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Habilite os Logs de Fluxo da VPC. Use o Amazon Athena para analisar os logs em busca de tráfego que pode ser removido. Certifique-se de que os grupos de segurança estejam bloqueando o tráfego responsável por altos custos.

B. Adicione um endpoint de VPC de interface para o Kinesis Data Streams à VPC. Certifique-se de que os aplicativos tenham as permissões corretas do IAM para usar o endpoint de VPC de interface.

\-

C. Habilite os VPC Flow Logs e o Amazon Detective. Revise as descobertas do Detective para tráfego não relacionado ao Kinesis Data Streams. Configure grupos de segurança para bloquear esse tráfego.

D. Adicione um endpoint de VPC de interface para o Kinesis Data Streams à VPC. Certifique-se de que a política de endpoint de VPC permita o tráfego dos aplicativos. **Mais votado**

116- Uma empresa de varejo possui um data center local na Europa. A empresa também possui presença multirregional na AWS, incluindo as regiões eu-west-1 e us-east-1. A empresa deseja rotear o tráfego de rede de sua infraestrutura local para VPCs em qualquer uma dessas regiões. A empresa também precisa oferecer suporte ao tráfego roteado diretamente entre VPCs nessas regiões. Não pode haver pontos únicos de falha na rede.\

A empresa já criou duas conexões AWS Direct Connect de 1 Gbps a partir de seu data center local. Cada conexão vai para um local Direct Connect separado na Europa para alta disponibilidade. Esses dois locais são denominados DX-A e DX-B, respectivamente. Cada região tem um único AWS Transit Gateway configurado para rotear todo o tráfego entre VPCs dentro dessa região.\

Qual solução atenderá a esses requisitos?

A. Crie um VIF privado da conexão DX-A para um gateway Direct Connect. Crie um VIF privado da conexão DX-B para o mesmo gateway Direct Connect para alta disponibilidade. Associe os gateways de trânsito eu-west-1 e us-east-1 ao gateway Direct Connect. Pareie os gateways de trânsito entre si para oferecer suporte ao roteamento entre regiões.

B. Crie um VIF de trânsito da conexão DX-A para um gateway Direct Connect. Associe o gateway de trânsito eu-west-1 a este gateway Direct Connect. Crie um VIF de trânsito da conexão DX-8 para um gateway Direct Connect separado. Associe o gateway de trânsito us-east-1 a este gateway Direct Connect separado. Pareie os gateways Direct Connect entre si para oferecer suporte a alta disponibilidade e roteamento entre regiões.

C. Crie um VIF de trânsito da conexão DX-A para um gateway Direct Connect. Crie um VIF de trânsito da conexão DX-B para o mesmo gateway Direct Connect para alta disponibilidade. Associe os gateways de trânsito eu-west-1 e us-east-1 a este gateway Direct Connect. Configure o gateway Direct Connect para rotear o tráfego entre os gateways de trânsito.

D. Crie um VIF de trânsito da conexão DX-A para um gateway Direct Connect. Crie um VIF de trânsito da conexão DX-B para o mesmo gateway Direct Connect para alta disponibilidade. Associe os gateways de trânsito eu-west-1 e us-east-1 a este gateway Direct Connect. Pareie os gateways de trânsito entre si para oferecer suporte ao roteamento entre regiões. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

117- Uma empresa está executando um aplicativo na Nuvem AWS. A equipe de segurança da empresa precisa aprovar a criação de todos os novos usuários do IAM. Quando um novo usuário do IAM é criado, todo o acesso para ele precisa ser removido automaticamente. A equipe de segurança precisa então receber uma notificação para aprovar o usuário. A empresa possui uma trilha multirregional do AWS CloudTrail na conta AWS.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events). Defina um padrão com o valor detail-type definido como Chamada de API da AWS via CloudTrail e um eventName de CreateUser. **Mais votado**

B. Configure o CloudTrail para enviar uma notificação do evento CreateUser para um tópico do Amazon Simple Notification Service (Amazon SNS).

C. Invoque um contêiner executado no Amazon Elastic Container Service (Amazon ECS) com a tecnologia AWS Fargate para remover o acesso.

D. Invoque uma máquina de estado do AWS Step Functions para remover o acesso. **Mais votado**

E. Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe de segurança. **Mais votado**

F. Use o Amazon Pinpoint para notificar a equipe de segurança.

118- Uma empresa deseja migrar para a AWS. A empresa deseja usar uma estrutura multicontas com acesso gerenciado centralmente a todas as contas e aplicativos. A empresa também deseja manter o tráfego em uma rede privada. A autenticação multifator (MFA) é necessária no login, e funções específicas são atribuídas a grupos de usuários.\

A empresa deve criar contas separadas para desenvolvimento, preparação, produção e rede compartilhada. A conta de produção e a conta de rede compartilhada devem ter conectividade com todas as contas. A conta de desenvolvimento e a conta de preparação devem ter acesso apenas uma à outra.\

Qual combinação de etapas um arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha três.)

A. Implante um ambiente de landing zone usando a AWS Control Tower. Registre contas e convide as contas existentes para a organização resultante no AWS Organizations. **Mais votado**

B. Habilite o AWS Security Hub em todas as contas para gerenciar o acesso entre contas. Colete descobertas por meio do AWS CloudTrail para forçar o login MFA.

C. Crie gateways de trânsito e anexos de VPC de gateway de trânsito em cada conta. Configure as tabelas de rotas apropriadas. **Mais votado**

D. Configure e habilite o AWS IAM Identity Center (AWS Single Sign-On). Crie conjuntos de permissões apropriados com a MFA necessária para contas existentes. **Mais votado**

E. Habilite a AWS Control Tower em todas as contas para gerenciar o roteamento entre contas. Colete descobertas por meio do AWS CloudTrail para forçar o login MFA.

F. Crie usuários e grupos do IAM. Configure a MFA para todos os usuários. Configure pools de usuários e pools de identidade do Amazon Cognoto para gerenciar o acesso a contas e entre contas.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

119- Uma empresa executa seu aplicativo na região eu-west-1 e possui uma conta para cada um de seus ambientes: desenvolvimento, teste e produção. Todos os ambientes funcionam 24 horas por dia, 7 dias por semana, usando instâncias com estado do Amazon EC2 e bancos de dados Amazon RDS para MySQL. Os bancos de dados têm entre 500 GB e 800 GB de tamanho.\

As equipes de desenvolvimento e teste trabalham em dias úteis durante o horário comercial, mas o ambiente de produção opera 24 horas por dia, 7 dias por semana. A empresa deseja reduzir custos. Todos os recursos são marcados com uma tag de ambiente com desenvolvimento, teste ou produção como chave.\

O que um arquiteto de soluções deve fazer para reduzir custos com o MENOR esforço operacional?

A. Crie uma regra do Amazon EventBridge que seja executada uma vez por dia. Configure a regra para invocar uma função do AWS Lambda que inicie ou execute instâncias com base na tag me, no dia e na hora.

B. Crie uma regra do Amazon EventBridge que seja executada todos os dias úteis à noite. Configure a regra para invocar uma função do AWS Lambda que interrompa instâncias com base na tag. Crie uma segunda regra do EventBridge que seja executada todos os dias úteis pela manhã. Configure a segunda regra para invocar outra função do Lambda que inicie instâncias com base na tag. **Mais votado**

C. Crie uma regra do Amazon EventBridge que seja executada todos os dias úteis à noite. Configure a regra para invocar uma função do AWS Lambda que encerre instâncias com base no atraso. Crie uma segunda regra do EventBridge que seja executada todos os dias úteis pela manhã. Configure a segunda regra para invocar outra função do Lambda que restaure as instâncias do último backup com base na tag.

D. Crie uma regra do Amazon EventBridge que seja executada a cada hora. Configure a regra para invocar uma função do AWS Lambda que encerre ou restaure instâncias do último backup com base na tag, dia e hora.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

120- Uma empresa está desenvolvendo uma solução de software como serviço (SaaS) na AWS. A empresa implantou uma API REST do Amazon API Gateway com integração com o AWS Lambda em várias regiões da AWS e na mesma conta de produção.\

A empresa oferece preços em camadas que permitem aos clientes pagar pela capacidade de realizar um determinado número de chamadas de API por segundo. A camada premium oferece até 3.000 chamadas por segundo, e os clientes são identificados por uma chave de API exclusiva. Vários clientes da camada premium em várias regiões relatam que recebem respostas de erro de "429 Too Many Requests" (429 Muitas Solicitações) de vários métodos de API durante os horários de pico de uso. Os logs indicam que a função Lambda nunca é invocada.\

Qual poderia ser a causa das mensagens de erro para esses clientes?

A. A função Lambda atingiu seu limite de simultaneidade.

B. A função Lambda e seu limite de região para simultaneidade.

C. A empresa atingiu o limite de chamadas por segundo da sua conta API Gateway. **Mais votado**

D. A empresa atingiu o limite padrão do API Gateway para chamadas por segundo.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/12/)

121- Uma empresa financeira está planejando migrar seu aplicativo web local para a AWS. A empresa usa uma ferramenta de segurança de terceiros para monitorar o tráfego de entrada no aplicativo. A empresa usa a ferramenta de segurança há 15 anos e não possui soluções em nuvem disponíveis de seu fornecedor. A equipe de segurança da empresa está preocupada em como integrar a ferramenta de segurança à tecnologia da AWS.\

A empresa planeja implantar a migração do aplicativo para a AWS em instâncias do Amazon EC2. As instâncias do EC2 serão executadas em um grupo de Auto Scaling em uma VPC dedicada. A empresa precisa usar a ferramenta de segurança para inspecionar todos os pacotes que entram e saem da VPC. Essa inspeção deve ocorrer em tempo real e não deve afetar o desempenho do aplicativo. Um arquiteto de soluções deve projetar uma arquitetura de destino na AWS que seja altamente disponível em uma região da AWS.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha duas.)

A. Implante a ferramenta de segurança em instâncias do EC2 em um novo grupo de dimensionamento automático na VPC existente **Mais votado**

B. Implantar o aplicativo da web por trás de um balanceador de carga de rede

C. Implantar um Application Load Balancer na frente das instâncias da ferramenta de segurança

D. Provisione um balanceador de carga de gateway para cada zona de disponibilidade para redirecionar o tráfego para a ferramenta de segurança **Mais votado**

E. Provisione um gateway de trânsito para facilitar a comunicação entre VPCs.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/13/)

122- Uma empresa adquiriu dispositivos de diferentes fornecedores. Todos os dispositivos possuem sensores de IoT. Os sensores enviam informações de status nos formatos proprietários dos fornecedores para um aplicativo legado que analisa as informações em JSON. A análise é simples, mas cada fornecedor possui um formato exclusivo. Uma vez por dia, o aplicativo analisa todos os registros JSON e os armazena em um banco de dados relacional para análise.\

A empresa precisa projetar uma nova solução de análise de dados que possa gerar resultados mais rápidos e otimizar custos.\

Qual solução atenderá a esses requisitos?

A. Conecte os sensores de IoT ao AWS IoT Core. Defina uma regra para invocar uma função do AWS Lambda para analisar as informações e salvar um arquivo .csv na Amazon. Use o AWS Glue para catalogar os arquivos. Use o Amazon Athena e o Amazon QuickSight para análise. **Mais votado**

B. Migre o servidor de aplicativos para o AWS Fargate, que receberá as informações dos sensores de IoT e as analisará em um formato relacional. Salve as informações analisadas no Amazon Redshift para análise.

C. Crie um servidor AWS Transfer for SFTP. Atualize o código do sensor IoT para enviar as informações como um arquivo .csv via SFTP para o servidor. Use o AWS Glue para catalogar os arquivos. Use o Amazon Athena para análise.

D. Use o AWS Snowball Edge para coletar dados dos sensores de IoT diretamente para realizar análises locais. Colete os dados periodicamente no Amazon Redshift para realizar análises globais.

123- Uma empresa está migrando alguns de seus aplicativos para a AWS. A empresa deseja migrar e modernizar os aplicativos rapidamente após finalizar as estratégias de rede e segurança. A empresa configurou uma conexão AWS Direct Connect em uma conta de rede central.\

A empresa espera ter centenas de contas e VPCs da AWS em um futuro próximo. A rede corporativa deve ser capaz de acessar os recursos na AWS perfeitamente e também deve ser capaz de se comunicar com todas as VPCs. A empresa também deseja rotear seus recursos de nuvem para a internet por meio de seu data center local.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Crie um gateway Direct Connect na conta central. Em cada uma das contas, crie uma proposta de associação usando o gateway Direct Connect e o ID da conta de cada gateway privado virtual.

B. Crie um gateway Direct Connect e um gateway de trânsito na conta de rede central. Conecte o gateway de trânsito ao gateway Direct Connect usando um VIF de trânsito. **Mais votado**

C. Provisionar um gateway de internet. Conectar o gateway de internet às sub-redes. Permitir tráfego de internet através do gateway.

D. Compartilhe o gateway de trânsito com outras contas. Anexe VPCs ao gateway de trânsito. **Mais votado**

E. Provisione o peering de VPC conforme necessário.

F. Provisione apenas sub-redes privadas. Abra a rota necessária no gateway de trânsito e no gateway do cliente para permitir que o tráfego de internet de saída da AWS flua pelos serviços NAT executados no data center. **Mais votad**

124- Uma empresa possui centenas de contas na AWS. A empresa implementou recentemente um processo interno centralizado para a compra de novas Instâncias Reservadas e a modificação das Instâncias Reservadas existentes. Esse processo exige que todas as unidades de negócios que desejam comprar ou modificar Instâncias Reservadas enviem solicitações a uma equipe dedicada para aquisição. Anteriormente, as unidades de negócios compravam ou modificavam Instâncias Reservadas diretamente em suas respectivas contas na AWS, de forma autônoma.\

Um arquiteto de soluções precisa implementar o novo processo da maneira mais segura possível.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha duas.)

A. Certifique-se de que todas as contas da AWS façam parte de uma organização no AWS Organizations com todos os recursos habilitados. **Mais votado**

B. Use o AWS Config para relatar a anexação de uma política do IAM que nega acesso à ação ec2:PurchaseReservedInstancesOffering e à ação ec2:ModifyReservedInstances.

C. Em cada conta da AWS, crie uma política do IAM que negue a ação ec2:PurchaseReservedInstancesOffering e a ação ec2:ModifyReservedInstances.

D. Crie um SCP que negue as ações ec2:PurchaseReservedInstancesOffering e ec2:ModifyReservedInstances. Anexe o SCP a cada UO da organização. **Mais votado**

E. Certifique-se de que todas as contas da AWS façam parte de uma organização no AWS Organizations que usa o recurso de faturamento consolidado.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/13/)

125- Uma empresa está executando um aplicativo crítico que utiliza um banco de dados Amazon RDS para MySQL para armazenar dados. A instância do banco de dados RDS está implantada no modo Multi-AZ.\

Um teste recente de failover do banco de dados RDS causou uma interrupção de 40 segundos no aplicativo. Um arquiteto de soluções precisa projetar uma solução para reduzir o tempo de interrupção para menos de 20 segundos.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Use o Amazon ElastiCache para Memcached na frente do banco de dados

B. Use o Amazon ElastiCache para Redis na frente do banco de dados

C. Use o RDS Proxy na frente do banco de dados. **Mais votado**

D. Migre o banco de dados para o Amazon Aurora MySQL. **Mais votado**

E. Crie uma réplica do Amazon Aurora. **Mais votado**

F. Crie uma réplica de leitura do RDS para MySQL

126- Uma empresa parceira da AWS está criando um serviço no AWS Organizations usando sua organização chamada org1. Este serviço exige que a empresa parceira tenha acesso aos recursos da AWS em uma conta de cliente, que está em uma organização separada chamada org2. A empresa deve estabelecer acesso de segurança com privilégios mínimos usando uma API ou ferramenta de linha de comando para a conta do cliente.\

Qual é a maneira MAIS segura de permitir que a org1 acesse recursos na org2?

R. O cliente deve fornecer à empresa parceira suas chaves de acesso à conta da AWS para efetuar login e executar as tarefas necessárias.

B. O cliente deve criar um usuário do IAM e atribuir as permissões necessárias a ele. Em seguida, o cliente deve fornecer as credenciais à empresa parceira para efetuar login e executar as tarefas necessárias.

C. O cliente deve criar uma função do IAM e atribuir as permissões necessárias a ela. A empresa parceira deve então usar o Nome de Recurso da Amazon (ARN) da função do IAM ao solicitar acesso para executar as tarefas necessárias.

D. O cliente deve criar uma função do IAM e atribuir as permissões necessárias a ela. A empresa parceira deve então usar o Nome de Recurso da Amazon (ARN) da função do IAM, incluindo o ID externo na política de confiança da função do IAM, ao solicitar acesso para executar as tarefas necessárias. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/13/)

127- Uma empresa de entregas precisa migrar seu aplicativo de planejamento de rotas de terceiros para a AWS. O terceiro fornece uma imagem Docker compatível a partir de um registro público. A imagem pode ser executada em quantos contêineres forem necessários para gerar o mapa de rotas.\

A empresa dividiu a área de entrega em seções com centros de suprimentos para que os motoristas de entrega percorram a menor distância possível dos centros até os clientes. Para reduzir o tempo necessário para gerar mapas de rotas, cada seção usa seu próprio conjunto de contêineres Docker com uma configuração personalizada que processa pedidos apenas na área da seção.\

A empresa precisa ser capaz de alocar recursos de forma econômica com base no número de contêineres em execução.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) no Amazon EC2. Use a CLI do Amazon EKS para iniciar o aplicativo de planejamento em pods usando a opção --tags para atribuir uma tag personalizada ao pod.

B. Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) no AWS Fargate. Use a CLI do Amazon EKS para iniciar o aplicativo de planejamento. Use a chamada de API tag-resource da CLI da AWS para atribuir uma tag personalizada ao pod.

C. Crie um cluster do Amazon Elastic Container Service (Amazon ECS) no Amazon EC2. Use a CLI da AWS com run-tasks definido como true para iniciar o aplicativo de planejamento usando a opção --tags para atribuir uma tag personalizada à tarefa.

D. Crie um cluster do Amazon Elastic Container Service (Amazon ECS) no AWS Fargate. Use o comando run-task da AWS CLI e defina enableECSManagedTags como true para iniciar o aplicativo de planejamento. Use a opção --tags para atribuir uma tag personalizada à tarefa. **M**

128- Uma empresa de software hospeda um aplicativo na AWS com recursos em várias contas e regiões da AWS. O aplicativo é executado em um grupo de instâncias do Amazon EC2 em uma VPC de aplicativo localizada na região us-east-1 com um bloco CIDR IPv4 de 10.10.0.0/16. Em outra conta da AWS, uma VPC de serviços compartilhados está localizada na região us-east-2 com um bloco CIDR IPv4 de 10.10.10.0/24. Quando um engenheiro de nuvem usa o AWS CloudFormation para tentar parear a VPC de aplicativo com a VPC de serviços compartilhados, uma mensagem de erro indica uma falha de pareamento.\

Quais fatores podem causar esse erro? (Escolha duas opções.)

A. Os intervalos CIDR IPv4 das duas VPCs se sobrepõem **Mais votado**

B. As VPCs não estão na mesma região

C. Uma ou ambas as contas não têm acesso a um gateway de Internet

D. Uma das VPCs não foi compartilhada pelo AWS Resource Access Manager

E. A função do IAM na conta do aceitador de pares não tem as permissões corretas **Mais votado**

129- Uma auditoria externa de um aplicativo serverless de uma empresa revela políticas de IAM que concedem permissões em excesso. Essas políticas estão vinculadas às funções de execução do AWS Lambda da empresa. Centenas de funções Lambda da empresa têm permissões de acesso amplas, como acesso total aos buckets do Amazon S3 e às tabelas do Amazon DynamoDB. A empresa deseja que cada função tenha apenas as permissões mínimas necessárias para concluir sua tarefa.\

Um arquiteto de soluções deve determinar quais permissões cada função Lambda precisa.\

O que o arquiteto de soluções deve fazer para atender a esse requisito com o MENOR esforço?

A. Configure o Amazon CodeGuru para criar o perfil das funções do Lambda e pesquisar chamadas de API da AWS. Crie um inventário das chamadas de API e dos recursos necessários para cada função do Lambda. Crie novas políticas de acesso do IAM para cada função do Lambda. Revise as novas políticas para garantir que atendam aos requisitos de negócios da empresa.

B. Ative o registro em log do AWS CloudTrail para a conta da AWS. Use o AWS Identity and Access Management Access Analyzer para gerar políticas de acesso do IAM com base na atividade registrada no registro do CloudTrail. Revise as políticas geradas para garantir que atendam aos requisitos de negócios da empresa. **Mais votado**

C. Ative o registro em log do AWS CloudTrail para a conta da AWS. Crie um script para analisar o registro do CloudTrail, pesquisar chamadas de API da AWS por função de execução do Lambda e gerar um relatório resumido. Revise o relatório. Crie políticas de acesso do IAM que forneçam permissões mais restritivas para cada função do Lambda.

D. Ative o registro em log do AWS CloudTrail para a conta da AWS. Exporte os logs do CloudTrail para o Amazon S3. Use o Amazon EMR para processar os logs do CloudTrail no Amazon S3 e gerar um relatório de chamadas de API e recursos utilizados por cada função de execução. Crie uma nova política de acesso do IAM para cada função. Exporte as funções geradas para um bucket do S3. Revise as políticas geradas para garantir que atendam aos requisitos de negócios da empresa.

130- Um arquiteto de soluções deve analisar as instâncias do Amazon EC2 e os volumes do Amazon Elastic Block Store (Amazon EBS) de uma empresa para determinar se a empresa está usando os recursos de forma eficiente. A empresa está executando várias instâncias grandes do EC2 com alta memória para hospedar clusters de banco de dados implantados em configurações ativas/passivas. A utilização dessas instâncias do EC2 varia de acordo com os aplicativos que utilizam os bancos de dados, e a empresa não identificou um padrão.\

O arquiteto de soluções deve analisar o ambiente e tomar medidas com base nas descobertas.\

Qual solução atende a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um painel usando o AWS Systems Manager OpsCenter. Configure visualizações para métricas do Amazon CloudWatch associadas às instâncias do EC2 e seus volumes EBS. Revise o painel periodicamente e identifique padrões de uso. Redimensione as instâncias do EC2 com base nos picos nas métricas.

B. Ative o monitoramento detalhado do Amazon CloudWatch para as instâncias do EC2 e seus volumes EBS. Crie e revise um painel com base nas métricas. Identifique padrões de uso. Redimensione as instâncias do EC2 com base nos picos nas métricas.

C. Instale o agente do Amazon CloudWatch em cada uma das instâncias do EC2. Ative o AWS Compute Optimizer e deixe-o em execução por pelo menos 12 horas. Revise as recomendações do Compute Optimizer e dimensione corretamente as instâncias do EC2 conforme as instruções. **Mais votado**

D. Inscreva-se no plano AWS Enterprise Support. Ative o AWS Trusted Advisor. Aguarde 12 horas. Revise as recomendações do Trusted Advisor e redimensione as instâncias do EC2 conforme as instruções.

131- Uma empresa usa o AWS Organizations para uma configuração de várias contas na Nuvem AWS. A empresa usa o AWS Control Tower para governança e o AWS Transit Gateway para conectividade VPC entre contas.\

Em uma conta de aplicativo da AWS, a equipe de aplicativos da empresa implantou um aplicativo web que usa o AWS Lambda e o Amazon RDS. Os administradores de banco de dados da empresa têm uma conta de administrador de banco de dados separada e a usam para gerenciar centralmente todos os bancos de dados da organização. Os administradores de banco de dados usam uma instância do Amazon EC2 implantada na conta de administrador de banco de dados para acessar um banco de dados RDS implantado na conta de aplicativo.\

A equipe de aplicativos armazenou as credenciais do banco de dados como segredos no AWS Secrets Manager na conta de aplicativo. A equipe de aplicativos está compartilhando manualmente os segredos com os administradores de banco de dados. Os segredos são criptografados pela chave padrão gerenciada pela AWS para o Secrets Manager na conta de aplicativo. Um arquiteto de soluções precisa implementar uma solução que conceda aos administradores de banco de dados acesso ao banco de dados e elimine a necessidade de compartilhar os segredos manualmente.\

Qual solução atenderá a esses requisitos?

A. Use o AWS Resource Access Manager (AWS RAM) para compartilhar os segredos da conta do aplicativo com a conta do administrador de banco de dados. Na conta do administrador de banco de dados, crie uma função do IAM chamada DBA-Admin. Conceda à função as permissões necessárias para acessar os segredos compartilhados. Anexe a função DBA-Admin à instância do EC2 para acessar os segredos entre contas.

B. Na conta do aplicativo, crie uma função do IAM chamada DBA-Secret. Conceda à função as permissões necessárias para acessar os segredos. Na conta do DBA, crie uma função do IAM chamada DBA-Admin. Conceda à função DBA-Admin as permissões necessárias para assumir a função DBA-Secret na conta do aplicativo. Anexe a função DBA-Admin à instância do EC2 para acessar os segredos entre contas. **Mais votado**

C. Na conta do DBA, crie uma função do IAM chamada DBA-Admin. Conceda à função as permissões necessárias para acessar os segredos e a chave padrão gerenciada pela AWS na conta do aplicativo. Na conta do aplicativo, anexe políticas baseadas em recursos à chave para permitir o acesso da conta do DBA. Anexe a função DBA-Admin à instância do EC2 para acessar os segredos entre contas.

D. Na conta DBA, crie uma função do IAM chamada DBA-Admin. Conceda à função as permissões necessárias para acessar os segredos na conta do aplicativo. Anexe um SCP à conta do aplicativo para permitir o acesso aos segredos da conta DBA. Anexe a função DBA-Admin à instância do EC2 para acessar os segredos entre contas.

132- Uma empresa gerencia várias contas da AWS usando o AWS Organizations. Na UO raiz, a empresa possui duas UOs: Pesquisa e DataOps.\

Devido a requisitos regulatórios, todos os recursos que a empresa implanta na organização devem residir na região ap-northeast-1. Além disso, as instâncias do EC2 que a empresa implanta na UO DataOps devem usar uma lista predefinida de tipos de instância.\

Um arquiteto de soluções deve implementar uma solução que aplique essas restrições. A solução deve maximizar a eficiência operacional e minimizar a manutenção contínua.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Crie uma função do IAM em uma conta na UO DataOps. Use a chave de condição ec2:InstanceType em uma política inline na função para restringir o acesso a um tipo de instância específico.

B. Crie um usuário do IAM em todas as contas na UO raiz. Use a chave de condição aws:RequestedRegion em uma política inline em cada usuário para restringir o acesso a todas as regiões da AWS, exceto ap-northeast-1.

C. Crie um SCP. Use a chave de condição aws:RequestedRegion para restringir o acesso a todas as regiões da AWS, exceto ap-northeast-1. Aplique o SCP à UO raiz. **Mais votado**

D. Crie um SCP. Use a chave de condição ec2:Region para restringir o acesso a todas as regiões da AWS, exceto ap-northeast-1. Aplique o SCP à UO raiz, à UO DataOps e à UO Research.

E. Crie um SCP. Use a chave de condição ec2:InstanceType para restringir o acesso a tipos de instância específicos. Aplique o SCP à UO DataOps. **Mais votado**

133- Uma empresa executa um aplicativo sem servidor em uma única região da AWS. O aplicativo acessa URLs externas e extrai metadados desses sites. A empresa usa um tópico do Amazon Simple Notification Service (Amazon SNS) para publicar URLs em uma fila do Amazon Simple Queue Service (Amazon SQS). Uma função do AWS Lambda usa a fila como uma origem de eventos e processa as URLs da fila. Os resultados são salvos em um bucket do Amazon S3.\

A empresa deseja processar cada URL em outras regiões para comparar possíveis diferenças na localização do site. As URLs devem ser publicadas da região existente. Os resultados devem ser gravados no bucket do S3 existente na região atual.\

Qual combinação de alterações produzirá uma implantação multirregional que atenda a esses requisitos? (Escolha duas.)

A. Implante a fila SQS com a função Lambda em outras regiões. **Mais votado**

B. Inscreva o tópico SNS em cada região na fila SQS.

C. Assine a fila SQS em cada região no tópico SNS. **Mais votado**

D. Configure a fila do SQS para publicar URLs para tópicos do SNS em cada região.

E. Implante o tópico SNS e a função Lambda em outras regiões.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/14/)

134- Uma empresa executa uma aplicação ETL proprietária e sem estado em uma instância Linux do Amazon EC2. A aplicação é um binário Linux e o código-fonte não pode ser modificado. A aplicação é single-threaded, usa 2 GB de RAM e exige muita CPU. A aplicação está programada para ser executada a cada 4 horas e por até 20 minutos. Um arquiteto de soluções deseja revisar a arquitetura da solução.\

Qual estratégia o arquiteto de soluções deve usar?

A. Use o AWS Lambda para executar o aplicativo. Use o Amazon CloudWatch Logs para invocar a função Lambda a cada 4 horas.

B. Use o AWS Batch para executar o aplicativo. Use uma máquina de estados do AWS Step Functions para invocar o job do AWS Batch a cada 4 horas.

C. Use o AWS Fargate para executar o aplicativo. Use o Amazon EventBridge (Amazon CloudWatch Events) para invocar a tarefa do Fargate a cada 4 horas. **Mais votado**

D. Use instâncias spot do Amazon EC2 para executar o aplicativo. Use o AWS CodeDeploy para implantar e executar o aplicativo a cada 4 horas.

135- Uma empresa está criando uma sequência para um jogo online popular. Um grande número de usuários do mundo inteiro jogará o jogo na primeira semana após o lançamento. Atualmente, o jogo consiste nos seguintes componentes implantados em uma única região da AWS:\

• Um bucket do Amazon S3 que armazena os ativos do jogo\
• Uma tabela do Amazon DynamoDB que armazena as pontuações dos jogadores.\

Um arquiteto de soluções precisa projetar uma solução multirregional que reduza a latência, melhore a confiabilidade e exija o mínimo de esforço para ser implementada.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma distribuição do Amazon CloudFront para servir ativos do bucket do S3. Configure a replicação entre regiões do S3. Crie uma nova tabela do DynamoDB em uma nova região. Use a nova tabela como destino de réplica para tabelas globais do DynamoDB.

B. Crie uma distribuição do Amazon CloudFront para servir ativos do bucket do S3. Configure a replicação na mesma região do S3. Crie uma nova tabela do DynamoDB em uma nova região. Configure a replicação assíncrona entre as tabelas do DynamoDB usando o AWS Database Migration Service (AWS DMS) com captura de dados alterados (CDC).

C. Crie outro bucket do S3 em uma nova região e configure a replicação entre regiões do S3 entre os buckets. Crie uma distribuição do Amazon CloudFront e configure o failover de origem com duas origens acessando os buckets do S3 em cada região. Configure as tabelas globais do DynamoDB habilitando o Amazon DynamoDB Streams e adicione uma tabela de réplica em uma nova região. **Mais votado**

D. Crie outro bucket do S3 na região senoidal e configure a replicação S3 na mesma região entre os buckets. Crie uma distribuição do Amazon CloudFront e configure o failover de origem com duas origens acessando os buckets do S3. Crie uma nova tabela do DynamoDB em uma nova região. Use a nova tabela como um destino de réplica para as tabelas globais do DynamoDB.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/14/)

136- Uma empresa possui um aplicativo de site local que fornece informações imobiliárias para potenciais locatários e compradores. O site utiliza um backend Java e um banco de dados NoSQL MongoDB para armazenar os dados dos assinantes.\

A empresa precisa migrar todo o aplicativo para a AWS com uma estrutura semelhante. O aplicativo deve ser implantado para alta disponibilidade e a empresa não pode fazer alterações nele.\

Qual solução atenderá a esses requisitos?

A. Use um cluster do Amazon Aurora DB como banco de dados para os dados do assinante. Implante instâncias do Amazon EC2 em um grupo de Auto Scaling em várias Zonas de Disponibilidade para o aplicativo de back-end Java.

B. Use o MongoDB em instâncias do Amazon EC2 como banco de dados para os dados do assinante. Implante instâncias do EC2 em um grupo de Auto Scaling em uma única Zona de Disponibilidade para o aplicativo de back-end Java.

C. Configurar o Amazon DocumentDB (compatível com MongoDB) com instâncias de tamanho apropriado em várias Zonas de Disponibilidade como banco de dados para os dados do assinante. Implantar instâncias do Amazon EC2 em um grupo de Auto Scaling em várias Zonas de Disponibilidade para o aplicativo de backend Java. **Mais votado**

D. Configurar o Amazon DocumentDB (compatível com MongoDB) no modo de capacidade sob demanda em várias Zonas de Disponibilidade como banco de dados para os dados do assinante. Implantar instâncias do Amazon EC2 em um grupo de Auto Scaling em várias Zonas de Disponibilidade para o aplicativo de backend Java.

137- Uma empresa de marketing digital possui várias contas da AWS pertencentes a diferentes equipes. A equipe de criação usa um bucket do Amazon S3 em sua conta da AWS para armazenar com segurança imagens e arquivos de mídia que são usados como conteúdo para as campanhas de marketing da empresa. A equipe de criação deseja compartilhar o bucket do S3 com a equipe de estratégia para que esta possa visualizar os objetos.\

Um arquiteto de soluções criou uma função do IAM chamada strategy_reviewer na conta da Strategy. O arquiteto de soluções também configurou uma chave personalizada do AWS Key Management Service (AWS KMS) na conta da Creative e a associou ao bucket do S3. No entanto, quando usuários da conta da Strategy assumem a função do IAM e tentam acessar objetos no bucket do S3, recebem um erro de acesso negado.\

O arquiteto de soluções deve garantir que os usuários da conta da Strategy possam acessar o bucket do S3. A solução deve fornecer a esses usuários apenas as permissões mínimas necessárias.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha três.)

A. Crie uma política de bucket que inclua permissões de leitura para o bucket do S3. Defina o principal da política de bucket como o ID da conta do Strategy. **Mais votado**

B. Atualize a função strategy_reviewer do IAM para conceder permissões totais para o bucket S3 e conceder permissões de descriptografia para a chave KMS personalizada.

C. Atualize a política de chave KMS personalizada na conta Creative para conceder permissões de descriptografia à função do IAM strategy_reviewer. **Mais votado**

D. Crie uma política de bucket que inclua permissões de leitura para o bucket do S3. Defina o principal da política de bucket como um usuário anônimo.

E. Atualize a política de chave KMS personalizada na conta Creative para conceder permissões de criptografia à função do IAM strategy_reviewer.

F. Atualize a função strategy_reviewer do IAM para conceder permissões de leitura para o bucket S3 e para conceder permissões de descriptografia para a chave KMS personalizada. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/14/)

138- Uma empresa de ciências biológicas está usando uma combinação de ferramentas de código aberto para gerenciar fluxos de trabalho de análise de dados e contêineres Docker em execução em servidores em seu data center local para processar dados genômicos. Os dados de sequenciamento são gerados e armazenados em uma rede de área de armazenamento local (SAN) e, em seguida, os dados são processados. As equipes de pesquisa e desenvolvimento estão enfrentando problemas de capacidade e decidiram reestruturar sua plataforma de análise genômica na AWS para escalar com base nas demandas de carga de trabalho e reduzir o tempo de resposta de semanas para dias.\

A empresa possui uma conexão AWS Direct Connect de alta velocidade. Os sequenciadores gerarão cerca de 200 GB de dados para cada genoma, e tarefas individuais podem levar várias horas para processar os dados com capacidade computacional ideal. O resultado final será armazenado no Amazon S3. A empresa espera de 10 a 15 solicitações de tarefas por dia.\

Qual solução atende a esses requisitos?

A. Use dispositivos AWS Snowball Edge agendados regularmente para transferir os dados de sequenciamento para a AWS. Quando a AWS receber o dispositivo Snowball Edge e os dados forem carregados no Amazon S3, use eventos do S3 para acionar uma função do AWS Lambda para processar os dados.

B. Use o AWS Data Pipeline para transferir os dados de sequenciamento para o Amazon S3. Use eventos do S3 para acionar um grupo de dimensionamento automático do Amazon EC2 para iniciar instâncias EC2 AMI personalizadas executando os contêineres do Docker para processar os dados.

C. Use o AWS DataSync para transferir os dados de sequenciamento para o Amazon S3. Use eventos do S3 para acionar uma função do AWS Lambda que inicia um fluxo de trabalho do AWS Step Functions. Armazene as imagens do Docker no Amazon Elastic Container Registry (Amazon ECR) e acione o AWS Batch para executar o contêiner e processar os dados de sequenciamento. **Mais votado**

D. Use um gateway de arquivos do AWS Storage Gateway para transferir os dados de sequenciamento para o Amazon S3. Use eventos do S3 para acionar um trabalho do AWS Batch que é executado em instâncias do Amazon EC2 que executam os contêineres do Docker para processar os dados.

139- Uma empresa executa um aplicativo de gerenciamento de conteúdo em uma única instância do Amazon EC2 do Windows em um ambiente de desenvolvimento. O aplicativo lê e grava conteúdo estático em um volume de 2 TB do Amazon Elastic Block Store (Amazon EBS) que está conectado à instância como dispositivo raiz. A empresa planeja implantar esse aplicativo em produção como uma solução altamente disponível e tolerante a falhas, executada em pelo menos três instâncias do EC2 em várias Zonas de Disponibilidade.\

Um arquiteto de soluções deve projetar uma solução que una todas as instâncias que executam o aplicativo a um domínio do Active Directory. A solução também deve implementar ACLs do Windows para controlar o acesso ao conteúdo dos arquivos. O aplicativo deve sempre manter exatamente o mesmo conteúdo em todas as instâncias em execução a qualquer momento.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga de gerenciamento?

A. Crie um compartilhamento de arquivos do Amazon Elastic File System (Amazon EFS). Crie um grupo de Auto Scaling que se estenda por três Zonas de Disponibilidade e mantenha um tamanho mínimo de três instâncias. Implemente um script de dados do usuário para instalar o aplicativo, associar a instância ao domínio do AD e montar o compartilhamento de arquivos do EFS.

B. Crie uma nova AMI a partir da instância EC2 atual em execução. Crie um sistema de arquivos do Amazon FSx para Lustre. Crie um grupo de Auto Scaling que se estenda por três Zonas de Disponibilidade e mantenha um tamanho mínimo de três instâncias. Implemente um script de dados do usuário para associar a instância ao domínio do AD e montar o sistema de arquivos do FSx para Lustre.

C. Crie um sistema de arquivos do Amazon FSx para Windows File Server. Crie um grupo de Auto Scaling que se estenda por três Zonas de Disponibilidade e mantenha um tamanho mínimo de três instâncias. Implemente um script de dados do usuário para instalar o aplicativo e montar o sistema de arquivos do FSx para Windows File Server. Execute uma associação de domínio contínua para associar a instância ao domínio do AD. **Mais votado**

D. Crie uma nova AMI a partir da instância atual do EC2 em execução. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Crie um grupo de Auto Scaling que se estenda por três Zonas de Disponibilidade e mantenha um tamanho mínimo de três Instâncias. Execute uma junção de domínio contínua para unir a instância ao domínio do AD.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/14/)

140- Uma empresa de software como serviço (SaaS) fornece uma solução de gerenciamento de casos para a parte A3 da solução para clientes. A empresa utiliza um servidor SMTP (Simple Mail Transfer Protocol) autônomo para enviar mensagens de e-mail a partir de um aplicativo. O aplicativo também armazena um modelo de e-mail para mensagens de confirmação que preenchem os dados do cliente antes que o aplicativo envie a mensagem ao cliente.\

A empresa planeja migrar essa funcionalidade de mensagens para a Nuvem AWS e precisa minimizar a sobrecarga operacional.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Configure um servidor SMTP em instâncias do Amazon EC2 usando uma AMI do AWS Marketplace. Armazene o modelo de e-mail em um bucket do Amazon S3. Crie uma função do AWS Lambda para recuperar o modelo do bucket do S3 e mesclar os dados do cliente do aplicativo com o modelo. Use um SDK na função do Lambda para enviar a mensagem de e-mail.

B. Configure o Amazon Simple Email Service (Amazon SES) para enviar mensagens de e-mail. Armazene o modelo de e-mail em um bucket do Amazon S3. Crie uma função do AWS Lambda para recuperar o modelo do bucket do S3 e mesclar os dados do cliente do aplicativo com o modelo. Use um SDK na função do Lambda para enviar a mensagem de e-mail.

C. Configure um servidor SMTP em instâncias do Amazon EC2 usando uma AMI do AWS Marketplace. Armazene o modelo de e-mail no Amazon Simple Email Service (Amazon SES) com parâmetros para os dados do cliente. Crie uma função do AWS Lambda para chamar o modelo do SES e passar os dados do cliente para substituir os parâmetros. Use o servidor SMTP do AWS Marketplace para enviar a mensagem de e-mail.

D. Configure o Amazon Simple Email Service (Amazon SES) para enviar mensagens de e-mail. Armazene o modelo de e-mail no Amazon SES com parâmetros para os dados do cliente. Crie uma função do AWS Lambda para chamar a operação da API SendTemplatedEmail e passar os dados do cliente para substituir os parâmetros e o destino do e-mail. **Mais votado**

141- Uma empresa está processando vídeos na Nuvem AWS usando instâncias do Amazon EC2 em um grupo de Auto Scaling. O processamento de um vídeo leva 30 minutos. Várias instâncias do EC2 aumentam e diminuem de escala dependendo do número de vídeos em uma fila do Amazon Simple Queue Service (Amazon SQS).\

A empresa configurou a fila do SQS com uma política de redirecionamento que especifica uma fila de mensagens mortas de destino e um maxReceiveCount de 1. A empresa definiu o tempo limite de visibilidade para a fila do SQS para 1 hora. A empresa configurou um alarme do Amazon CloudWatch para notificar a equipe de desenvolvimento quando houver mensagens na fila de mensagens mortas.\

Várias vezes ao dia, a equipe de desenvolvimento recebe uma notificação de que as mensagens estão na fila de mensagens mortas e que os vídeos não foram processados corretamente. Uma investigação não encontra erros nos logs do aplicativo.\

Como a empresa pode resolver esse problema?

A. Ative a proteção de encerramento para as instâncias EC2

B. Atualizar o tempo limite de visibilidade da fila SQS para 3 horas

C. Configurar proteção de redução de escala para as instâncias durante o processamento **Mais votado**

D. Atualize a política de redirecionamento e defina maxReceiveCount como 0.

142- Uma empresa desenvolveu APIs que utilizam o Amazon API Gateway com endpoints regionais. As APIs chamam funções do AWS Lambda que utilizam mecanismos de autenticação do API Gateway. Após uma revisão de design, um arquiteto de soluções identifica um conjunto de APIs que não exigem acesso público.\

O arquiteto de soluções deve projetar uma solução que torne o conjunto de APIs acessível apenas a partir de uma VPC. Todas as APIs precisam ser chamadas com um usuário autenticado.\

Qual solução atenderá a esses requisitos com o MENOR esforço?

A. Crie um Application Load Balancer (ALB) interno. Crie um grupo-alvo. Selecione a função Lambda a ser chamada. Use o nome DNS do ALB para chamar a API da VPC.

B. Remova a entrada DNS associada à API no API Gateway. Crie uma zona hospedada no Amazon Route 53. Crie um registro CNAME na zona hospedada. Atualize a API no API Gateway com o registro CNAME. Use o registro CNAME para chamar a API da VPC.

C. Atualize o endpoint da API de Regional para privado no API Gateway. Crie um endpoint da VPC de interface na VPC, crie uma política de recursos e anexe-a à API. Use o endpoint da VPC para chamar a API a partir da VPC. **Mais votado**

D. Implante as funções do Lambda dentro da VPC. Provisione uma instância do EC2 e instale um servidor Apache. No servidor Apache, chame as funções do Lambda. Use o registro CNAME interno da instância do EC2 para chamar a API da VPC.

143- Um serviço meteorológico fornece mapas meteorológicos de alta resolução a partir de um aplicativo web hospedado na AWS na região eu-west-1. Os mapas meteorológicos são atualizados com frequência e armazenados no Amazon S3, juntamente com conteúdo HTML estático. O aplicativo web é hospedado pelo Amazon CloudFront.\

A empresa expandiu recentemente para atender usuários na região us-east-1, e esses novos usuários relatam que a visualização de seus respectivos mapas meteorológicos fica lenta de tempos em tempos.\

Qual combinação de etapas resolverá os problemas de desempenho do us-east-1? (Escolha duas.)

A. Configure o endpoint do AWS Global Accelerator para o bucket S3 em eu-west-1. Configure grupos de endpoints para as portas TCP 80 e 443 em us-east-1.

B. Crie um novo bucket S3 em us-east-1. Configure a replicação entre regiões do S3 para sincronizar a partir do bucket S3 em eu-west-1. **Mais votado**

C. Use o Lambda@Edge para modificar solicitações da América do Norte para usar o ponto de extremidade do S3 Transfer Acceleration em us-east-1.

D. Use o Lambda@Edge para modificar solicitações da América do Norte para usar o bucket S3 em us-east-1. **Mais votado**

E. Configure o endpoint do AWS Global Accelerator para us-east-1 como origem na distribuição do CloudFront. Use o Lambda@Edge para modificar solicitações da América do Norte para usar a nova origem.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/15/)

144- Um arquiteto de soluções está investigando um problema no qual uma empresa não consegue estabelecer novas sessões no Amazon Workspaces. Uma análise inicial indica que o problema envolve perfis de usuário. O ambiente do Amazon Workspaces está configurado para usar o Amazon FSx for Windows File Server como armazenamento de compartilhamento de perfis. O sistema de arquivos do FSx for Windows File Server está configurado com 10 TB de armazenamento.\

O arquiteto de soluções descobre que o sistema de arquivos atingiu sua capacidade máxima. O arquiteto de soluções deve garantir que os usuários possam recuperar o acesso. A solução também deve evitar que o problema ocorra novamente.\

Qual solução atenderá a esses requisitos?

A. Remova perfis de usuário antigos para liberar espaço. Migre os perfis de usuário para um sistema de arquivos Amazon FSx for Lustre.

B. Aumente a capacidade usando o comando update-file-system. Implemente uma métrica do Amazon CloudWatch que monitore o espaço livre. Use o Amazon EventBridge para invocar uma função do AWS Lambda e aumentar a capacidade conforme necessário. **Mais votado**

C. Monitore o sistema de arquivos usando a métrica FreeStorageCapacity no Amazon CloudWatch. Use o AWS Step Functions para aumentar a capacidade conforme necessário.

D. Remova perfis de usuário antigos para liberar espaço. Crie um sistema de arquivos adicional do FSx para Windows File Server. Atualize o redirecionamento de perfil de usuário para que 50% dos usuários usem o novo sistema de arquivos.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/15/)

145- Uma empresa de entregas internacional hospeda um sistema de gerenciamento de entregas na AWS. Os motoristas usam o sistema para enviar a confirmação de entrega. A confirmação inclui a assinatura do destinatário ou uma foto do pacote com o destinatário. O dispositivo portátil do motorista envia assinaturas e fotos via FTP para uma única instância do Amazon EC2. Cada dispositivo portátil salva um arquivo em um diretório com base no usuário conectado, e o nome do arquivo corresponde ao número da entrega. A instância do EC2 adiciona metadados ao arquivo após consultar um banco de dados central para obter informações de entrega. O arquivo é então armazenado no Amazon S3 para arquivamento.\

À medida que a empresa se expande, os motoristas relatam que o sistema está rejeitando conexões. O servidor FTP está com problemas devido a quedas de conexão e problemas de memória. Em resposta a esses problemas, um engenheiro de sistemas agenda uma tarefa cron para reinicializar a instância do EC2 a cada 30 minutos. A equipe de cobrança relata que os arquivos nem sempre estão no arquivo e que o sistema central nem sempre é atualizado.\

Um arquiteto de soluções precisa projetar uma solução que maximize a escalabilidade para garantir que o arquivo sempre receba os arquivos e que os sistemas estejam sempre atualizados. Os dispositivos portáteis não podem ser modificados, portanto, a empresa não pode implementar um novo aplicativo.\

Qual solução atenderá a esses requisitos?

A. Crie uma AMI da instância EC2 existente. Crie um grupo de Dimensionamento Automático de instâncias EC2 por trás de um Balanceador de Carga de Aplicação. Configure o grupo de Dimensionamento Automático para ter no mínimo três instâncias.

B. Use o AWS Transfer Family para criar um servidor FTP que armazena os arquivos no Amazon Elastic File System (Amazon EFS). Monte o volume EFS na instância EC2 existente. Aponte a instância EC2 para o novo caminho para processamento de arquivos.

C. Use o AWS Transfer Family para criar um servidor FTP que armazena os arquivos no Amazon S3. Use uma notificação de evento do S3 por meio do Amazon Simple Notification Service (Amazon SNS) para invocar uma função do AWS Lambda. Configure a função do Lambda para adicionar os metadados e atualizar o sistema de entrega. **Mais votado**

D. Atualize os dispositivos portáteis para que eles coloquem os arquivos diretamente no Amazon S3. Use uma notificação de evento do S3 por meio do Amazon Simple Queue Service (Amazon SQS) para invocar uma função do AWS Lambda. Configure a função do Lambda para adicionar os metadados e atualizar o sistema de entrega.

146- Uma empresa está executando um aplicativo na Nuvem AWS. O aplicativo é executado em contêineres em um cluster do Amazon Elastic Container Service (Amazon ECS). As tarefas do ECS usam o tipo de inicialização Fargate. Os dados do aplicativo são relacionais e armazenados no Amazon Aurora MySQL. Para atender aos requisitos regulatórios, o aplicativo deve ser capaz de se recuperar para uma região separada da AWS em caso de falha. Em caso de falha, nenhum dado pode ser perdido.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Provisione uma réplica do Aurora em uma região diferente. **Mais votado**

B. Configure o AWS DataSync para replicação contínua dos dados para uma região diferente.

C. Configure o AWS Database Migration Service (AWS DMS) para executar uma replicação contínua dos dados para uma região diferente.

D. Use o Amazon Data Lifecycle Manager (Amazon DLM) para agendar um snapshot a cada 5 minutos.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/15/)

147- Uma empresa de serviços financeiros recebe um feed de dados regular de seu parceiro de serviços de cartão de crédito. Aproximadamente 5.000 registros são enviados a cada 15 minutos em texto simples, entregues via HTTPS diretamente para um bucket do Amazon S3 com criptografia no lado do servidor. Esse feed contém dados confidenciais do número da conta principal (PAN) do cartão de crédito. A empresa precisa mascarar automaticamente o PAN antes de enviar os dados para outro bucket do S3 para processamento interno adicional. A empresa também precisa remover e mesclar campos específicos e, em seguida, transformar o registro em formato JSON. Além disso, feeds extras provavelmente serão adicionados no futuro, portanto, qualquer design precisa ser facilmente expansível.\

Quais soluções atenderão a esses requisitos?

A. Invoque uma função do AWS Lambda na entrega do arquivo que extrai cada registro e o grava em uma fila do Amazon SQS. Invoque outra função do Lambda quando novas mensagens chegam na fila do SQS para processar os registros, gravando os resultados em um local temporário no Amazon S3. Invoque uma função do Lambda final quando a fila do SQS estiver vazia para transformar os registros em formato JSON e enviar os resultados para outro bucket do S3 para processamento interno.

B. Invoque uma função do AWS Lambda na entrega do arquivo que extraia cada registro e o grave em uma fila do Amazon SQS. Configure um aplicativo de contêiner do AWS Fargate para escalar automaticamente para uma única instância quando a fila do SQS contiver mensagens. Faça com que o aplicativo processe cada registro e transforme-o em formato JSON. Quando a fila estiver vazia, envie os resultados para outro bucket do S3 para processamento interno e reduza a escala da instância do AWS Fargate.

C. Crie um rastreador e um classificador personalizado do AWS Glue com base nos formatos de feed de dados e crie uma definição de tabela correspondente. Invoque uma função do AWS Lambda na entrega do arquivo para iniciar uma tarefa ETL do AWS Glue e transformar todo o registro de acordo com os requisitos de processamento e transformação. Defina o formato de saída como JSON. Após a conclusão, faça com que a tarefa ETL envie os resultados para outro bucket do S3 para processamento interno. **Mais votado**

D. Crie um rastreador e um classificador personalizado do AWS Glue com base nos formatos de feed de dados e crie uma definição de tabela correspondente. Execute uma consulta no Amazon Athena na entrega do arquivo para iniciar um trabalho ETL do Amazon EMR e transformar todo o registro de acordo com os requisitos de processamento e transformação. Defina o formato de saída como JSON. Após a conclusão, envie os resultados para outro bucket do S3 para processamento interno e reduza a escala do cluster EMR.

148- Uma empresa deseja usar a AWS para criar uma solução de continuidade de negócios caso o principal aplicativo local da empresa falhe. O aplicativo é executado em servidores físicos que também executam outros aplicativos. O aplicativo local que a empresa planeja migrar usa um banco de dados MySQL como armazenamento de dados. Todos os aplicativos locais da empresa usam sistemas operacionais compatíveis com o Amazon EC2.\

Qual solução atingirá a meta da empresa com a MENOR sobrecarga operacional?

A. Instale o Agente de Replicação da AWS nos servidores de origem, incluindo os servidores MySQL. Configure a replicação para todos os servidores. Inicie instâncias de teste para simulações regulares. Passe para as instâncias de teste para executar failover da carga de trabalho em caso de falha.

B. Instale o Agente de Replicação da AWS nos servidores de origem, incluindo os servidores MySQL. Inicialize o AWS Elastic Disaster Recovery na região da AWS de destino. Defina as configurações de inicialização. Execute failover e fallback com frequência a partir do ponto mais recente. **Mais votado**

C. Crie servidores de replicação do AWS Database Migration Service (AWS DMS) e um cluster de banco de dados MySQL do Amazon Aurora de destino para hospedar o banco de dados. Crie uma tarefa de replicação do DMS para copiar os dados existentes para o cluster de banco de dados de destino. Crie uma tarefa local de captura de dados alterados (CDC) da AWS Schema Conversion Tool (AWS SCT) para manter os dados sincronizados. Instale o restante do software em instâncias do EC2, começando com uma AMI base compatível.

D. Implante um Gateway de Volume do AWS Storage Gateway no local. Monte volumes em todos os servidores locais. Instale o aplicativo e o banco de dados MySQL nos novos volumes. Tire snapshots regularmente. Instale todo o software em instâncias do EC2, começando com uma AMI base compatível. Inicie um Gateway de Volume em uma instância do EC2. Restaure os volumes a partir do snapshot mais recente. Monte os novos volumes nas instâncias do EC2 em caso de falha.

149- Uma empresa está sujeita a auditorias regulatórias de suas informações financeiras. Auditores externos que utilizam uma única conta na AWS precisam acessar a conta da empresa na AWS. Um arquiteto de soluções deve fornecer aos auditores acesso seguro e somente leitura à conta da empresa na AWS. A solução deve estar em conformidade com as práticas recomendadas de segurança da AWS.\

Qual solução atenderá a esses requisitos?

A. Na conta AWS da empresa, crie políticas de recursos para todos os recursos da conta para conceder acesso à conta AWS dos auditores. Atribua um ID externo exclusivo à política de recursos.

B. Na conta AWS da empresa, crie uma função do IAM que confie na conta AWS dos auditores. Crie uma política do IAM com as permissões necessárias. Anexe a política à função. Atribua um ID externo exclusivo à política de confiança da função. **Mais votado**

C. Na conta AWS da empresa, crie um usuário do IAM. Anexe as políticas do IAM necessárias ao usuário do IAM. Crie chaves de acesso à API para o usuário do IAM. Compartilhe as chaves de acesso com os auditores.

D. Na conta AWS da empresa, crie um grupo do IAM com as permissões necessárias. Crie um usuário do IAM na conta da empresa para cada auditor. Adicione os usuários do IAM ao grupo do IAM.

150- Uma empresa possui uma plataforma de negociação sensível à latência que utiliza o Amazon DynamoDB como backend de armazenamento. A empresa configurou a tabela do DynamoDB para usar o modo de capacidade sob demanda. Um arquiteto de soluções precisa projetar uma solução para melhorar o desempenho da plataforma de negociação. A nova solução deve garantir alta disponibilidade para a plataforma de negociação.\

Qual solução atenderá a esses requisitos com a MENOR latência?

A. Crie um cluster do DynamoDB Accelerator (DAX) de dois nós. Configure um aplicativo para ler e gravar dados usando o DAX.

B. Crie um cluster do DynamoDB Accelerator (DAX) de três nós. Configure um aplicativo para ler dados usando o DAX e gravá-los diretamente na tabela do DynamoDB. **Mais votado**

C. Crie um cluster do DynamoDB Accelerator (DAX) de três nós. Configure um aplicativo para ler dados diretamente da tabela do DynamoDB e gravar dados usando o DAX.

D. Crie um cluster do DynamoDB Accelerator (DAX) de nó único. Configure um aplicativo para ler dados usando o DAX e gravá-los diretamente na tabela do DynamoDB.

151- Uma empresa migrou um aplicativo local para a AWS. O front-end do aplicativo é um site estático executado em duas instâncias do Amazon EC2, atrás de um Application Load Balancer (ALB). O back-end do aplicativo é um aplicativo Python executado em três instâncias do EC2, atrás de outro ALB. As instâncias do EC2 são instâncias sob demanda grandes e de uso geral, dimensionadas para atender às especificações locais para pico de uso do aplicativo.\

O aplicativo recebe, em média, centenas de milhares de solicitações por mês. No entanto, o aplicativo é usado principalmente durante o horário de almoço e recebe tráfego mínimo durante o restante do dia.\

Um arquiteto de soluções precisa otimizar o custo de infraestrutura do aplicativo sem afetar negativamente a disponibilidade do aplicativo.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Altere todas as instâncias do EC2 para calcular instâncias otimizadas que tenham o mesmo número de núcleos que as instâncias do EC2 existentes.

B. Mova o frontend do aplicativo para um site estático hospedado no Amazon S3. **Mais votado**

C. Implante o frontend do aplicativo usando o AWS Elastic Beanstalk. Use o mesmo tipo de instância para os nós.

D. Altere todas as instâncias EC2 de backend para instâncias Spot.

E. Implante o aplicativo Python de backend em instâncias EC2 burstable de uso geral que tenham o mesmo número de núcleos que as instâncias EC2 existentes. **Mais votado**

152- Uma empresa opera uma plataforma de venda de ingressos para eventos na AWS e deseja otimizar a relação custo-benefício da plataforma. A plataforma está implantada no Amazon Elastic Kubernetes Service (Amazon EKS) com Amazon EC2 e é suportada por uma instância de banco de dados Amazon RDS para MySQL. A empresa está desenvolvendo novos recursos de aplicativos para execução no Amazon EKS com AWS Fargate.\

A plataforma apresenta picos de demanda esporádicos. Os picos de demanda dependem das datas dos eventos.\

Qual solução proporcionará a configuração MAIS econômica para a plataforma?

A. Adquira Instâncias Reservadas Padrão para as instâncias EC2 que o cluster EKS usa em sua carga de base. Escale o cluster com Instâncias Spot para lidar com picos. Adquira Instâncias Reservadas Antecipadas de 1 ano para que o banco de dados atenda ao pico de carga previsto para o ano.

B. Adquira Planos de Economia de Computação para a carga média prevista do cluster EKS. Escale o cluster com Reservas de Capacidade Sob Demanda com base nas datas dos eventos para picos. Adquira Instâncias Reservadas Sem Início por 1 ano para que o banco de dados atenda à carga base prevista. Escale temporariamente as réplicas de leitura do banco de dados durante os picos. **Mais votado**

C. Adquira Planos de Economia de Instâncias do EC2 para a carga base prevista do cluster EKS. Escale o cluster com Instâncias Spot para lidar com picos. Adquira Instâncias Reservadas Antecipadas de 1 ano para o banco de dados, a fim de atender à carga base prevista. Escale temporariamente a instância do banco de dados manualmente durante os picos.

D. Adquira Planos de Economia de Computação para a carga base prevista do cluster EKS. Escale o cluster com Instâncias Spot para lidar com picos. Adquira Instâncias Reservadas Antecipadas de 1 ano para que o banco de dados atenda à carga base prevista. Escale temporariamente a instância do banco de dados manualmente durante os picos.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

153- Uma empresa implantou uma aplicação no AWS Elastic Beanstalk. A aplicação utiliza o Amazon Aurora para a camada de banco de dados. Uma distribuição do Amazon CloudFront atende a solicitações da web e inclui o nome de domínio do Elastic Beanstalk como servidor de origem. A distribuição é configurada com um nome de domínio alternativo que os visitantes usam ao acessar a aplicação.\

A cada semana, a empresa retira a aplicação de serviço para manutenção de rotina. Durante o período em que a aplicação estiver indisponível, a empresa deseja que os visitantes recebam uma mensagem informativa em vez de uma mensagem de erro do CloudFront.\

Um arquiteto de soluções cria um bucket do Amazon S3 como a primeira etapa do processo.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender aos requisitos? (Escolha três.)

A. Carregue conteúdo informativo estático para o bucket do S3. **Mais votado**

B. Crie uma nova distribuição do CloudFront. Defina o bucket do S3 como origem.

C. Defina o bucket do S3 como uma segunda origem na distribuição original do CloudFront. Configure a distribuição e o bucket do S3 para usar uma identidade de acesso à origem (OAI). **Mais votado**

D. Durante a manutenção semanal, edite o comportamento padrão do cache para usar a origem S3. Reverta a alteração quando a manutenção for concluída. **Mais votado**

E. Durante a manutenção semanal, crie um comportamento de cache para a origem S3 na nova distribuição. Defina o padrão de caminho como \\ Defina a precedência como 0. Exclua o comportamento de cache quando a manutenção for concluída.

F. Durante a manutenção semanal, configure o Elastic Beanstalk para atender ao tráfego do bucket S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

154- Uma empresa oferece aos usuários a capacidade de carregar imagens de um aplicativo personalizado. O processo de carregamento invoca uma função do AWS Lambda que processa e armazena a imagem em um bucket do Amazon S3. O aplicativo invoca a função Lambda usando um ARN de versão de função específico.\

A função Lambda aceita parâmetros de processamento de imagem usando variáveis de ambiente. A empresa frequentemente ajusta as variáveis de ambiente da função Lambda para obter a saída ideal de processamento de imagem. A empresa testa diferentes parâmetros e publica uma nova versão da função com as variáveis de ambiente atualizadas após a validação dos resultados. Esse processo de atualização também requer alterações frequentes no aplicativo personalizado para invocar o ARN da nova versão da função. Essas alterações causam interrupções para os usuários.\

Um arquiteto de soluções precisa simplificar esse processo para minimizar a interrupção para os usuários.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Modifique diretamente as variáveis de ambiente da versão publicada da função Lambda. Use a versão SLATEST para testar os parâmetros de processamento de imagem.

B. Crie uma tabela do Amazon DynamoDB para armazenar os parâmetros de processamento de imagem. Modifique a função Lambda para recuperar os parâmetros de processamento de imagem da tabela do DynamoDB.

C. Codifique os parâmetros de processamento de imagem diretamente na função Lambda e remova as variáveis de ambiente. Publique uma nova versão da função quando a empresa atualizar os parâmetros.

D. Crie um alias para a função Lambda. Modifique o aplicativo cliente para usar o ARN do alias da função. Reconfigure o alias do Lambda para apontar para novas versões da função quando a empresa concluir os testes. **Mais votado**

155- Uma empresa global de mídia está planejando a implantação de um aplicativo em várias regiões. As tabelas globais do Amazon DynamoDB apoiarão a implantação para manter a experiência do usuário consistente nos dois continentes onde os usuários estão concentrados. Cada implantação terá um Application Load Balancer (ALB) público. A empresa gerencia o DNS público internamente. A empresa deseja disponibilizar o aplicativo por meio de um domínio Apex.\

Qual solução atenderá a esses requisitos com o MENOR esforço?

A. Migre o DNS público para o Amazon Route 53. Crie registros CNAME para o domínio Apex apontar para o ALB. Use uma política de roteamento de geolocalização para rotear o tráfego com base na localização do usuário.

B. Coloque um Balanceador de Carga de Rede (NLB) antes do DNS público ALMigrate para o Amazon Route 53. Crie um registro CNAME para o domínio Apex para apontar para o endereço IP estático do NLB. Use uma política de roteamento de geolocalização para rotear o tráfego com base na localização do usuário.

C. Crie um acelerador do AWS Global Accelerator com vários grupos de endpoints que tenham como alvo endpoints em regiões AWS apropriadas. Use o endereço IP estático do acelerador para criar um registro no DNS público para o domínio Apex. **Mais votado**

D. Crie uma API do Amazon API Gateway com suporte do AWS Lambda em uma das regiões da AWS. Configure uma função do Lambda para rotear o tráfego para implantações de aplicativos usando o método round robin. Crie registros CNAME para o domínio apex para apontar para a URL da API.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

156- Uma empresa está desenvolvendo uma nova API sem servidor usando o Amazon API Gateway e o AWS Lambda. A empresa integrou as funções do Lambda ao API Gateway para usar diversas bibliotecas compartilhadas e classes personalizadas.\

Um arquiteto de soluções precisa simplificar a implantação da solução e otimizar a reutilização de código.\

Qual solução atenderá a esses requisitos?

A. Implante as bibliotecas compartilhadas e as classes personalizadas em uma imagem do Docker. Armazene a imagem em um bucket do S3. Crie uma camada Lambda que use a imagem do Docker como fonte. Implante as funções Lambda da API como pacotes Zip. Configure os pacotes para usar a camada Lambda.

B. Implante as bibliotecas compartilhadas e as classes personalizadas em uma imagem do Docker. Carregue a imagem no Amazon Elastic Container Registry (Amazon ECR). Crie uma camada Lambda que use a imagem do Docker como fonte. Implante as funções Lambda da API como pacotes Zip. Configure os pacotes para usar a camada Lambda.

C. Implante as bibliotecas compartilhadas e classes personalizadas em um contêiner Docker no Amazon Elastic Container Service (Amazon ECS) usando o tipo de inicialização AWS Fargate. Implante as funções Lambda da API como pacotes Zip. Configure os pacotes para usar o contêiner implantado como uma camada Lambda.

D. Implante as bibliotecas compartilhadas, classes personalizadas e código para as funções Lambda da API em uma imagem do Docker. Carregue a imagem no Amazon Elastic Container Registry (Amazon ECR). Configure as funções Lambda da API para usar a imagem do Docker como pacote de implantação. **Mais votado**

157- Uma empresa de manufatura está desenvolvendo uma solução de inspeção para sua fábrica. A empresa possui câmeras IP no final de cada linha de montagem. A empresa utilizou o Amazon SageMaker para treinar um modelo de aprendizado de máquina (ML) para identificar defeitos comuns a partir de imagens estáticas.\

A empresa deseja fornecer feedback local aos trabalhadores da fábrica quando um defeito for detectado. A empresa deve ser capaz de fornecer esse feedback mesmo se a conectividade com a internet da fábrica estiver inativa. A empresa possui um servidor Linux local que hospeda uma API que fornece feedback local aos trabalhadores.\

Como a empresa deve implantar o modelo de ML para atender a esses requisitos?

A. Configure um fluxo de vídeo do Amazon Kinesis de cada câmera IP para a AWS. Use instâncias do Amazon EC2 para capturar imagens estáticas dos fluxos. Carregue as imagens em um bucket do Amazon S3. Implante um endpoint do SageMaker com o modelo de ML. Invoque uma função do AWS Lambda para chamar o endpoint de inferência quando novas imagens forem carregadas. Configure a função do Lambda para chamar a API local quando um defeito for detectado.

B. Implante o AWS IoT Greengrass no servidor local. Implante o modelo de ML no servidor Greengrass. Crie um componente Greengrass para capturar imagens estáticas das câmeras e executar inferências. Configure o componente para chamar a API local quando um defeito for detectado. **Mais votado**

C. Encomende um dispositivo AWS Snowball. Implante um endpoint do SageMaker, o modelo de ML e uma instância do Amazon EC2 no dispositivo Snowball. Capture imagens estáticas das câmeras. Execute inferência a partir da instância do EC2. Configure a instância para chamar a API local quando um defeito for detectado.

D. Implante dispositivos Amazon Monitron em cada câmera IP. Implante um Gateway Amazon Monitron no local. Implante o modelo de ML nos dispositivos Amazon Monitron. Use os alarmes de estado de integridade do Amazon Monitron para chamar a API local a partir de uma função do AWS Lambda quando um defeito for detectado.

158- Um arquiteto de soluções deve criar um business case para a migração do data center local de uma empresa para a Nuvem AWS. O arquiteto de soluções utilizará uma exportação de um banco de dados de gerenciamento de configuração (CMDB) de todos os servidores da empresa para criar o business case.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Use o AWS Well-Architected Tool para importar os dados do CMDB para executar uma análise e gerar recomendações.

B. Use o Migration Evaluator para realizar uma análise. Use o modelo de importação de dados para carregar os dados da exportação do CMDB. **Mais votado**

C. Implementar regras de correspondência de recursos. Use a exportação do CMDB e a API de Lista de Preços da AWS em Massa para consultar dados do CMDB em serviços da AWS em massa.

D. Use o AWS Application Discovery Service para importar os dados do CMDB para executar uma análise.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

159- Uma empresa possui um site que roda em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). As instâncias estão em um grupo de Auto Scaling. O ALB está associado a uma ACL da Web do AWS WAF.\

O site frequentemente sofre ataques na camada de aplicação. Os ataques produzem aumentos repentinos e significativos no tráfego no servidor de aplicação. Os logs de acesso mostram que cada ataque se origina de endereços IP diferentes. Um arquiteto de soluções precisa implementar uma solução para mitigar esses ataques.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um alarme do Amazon CloudWatch que monitore o acesso ao servidor. Defina um limite com base no acesso por endereço IP. Configure uma ação de alarme que adicione o endereço IP à lista de negação da ACL da Web.

B. Implante o AWS Shield Advanced além do AWS WAF. Adicione o ALB como um recurso protegido. **Mais votado**

C. Crie um alarme do Amazon CloudWatch que monitore os endereços IP dos usuários. Defina um limite com base no acesso por endereço IP. Configure o alarme para invocar uma função do AWS Lambda e adicionar uma regra de negação na tabela de rotas de sub-rede do servidor de aplicativos para quaisquer endereços IP que ativem o alarme.

D. Inspecione os logs de acesso para encontrar um padrão de endereços IP que iniciaram os ataques. Use uma política de roteamento de geolocalização do Amazon Route 53 para negar tráfego dos países que hospedam esses endereços IP.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

160- Uma empresa possui um aplicativo crítico no qual a camada de dados está implantada em uma única região da AWS. A camada de dados utiliza uma tabela do Amazon DynamoDB e um cluster de banco de dados do Amazon Aurora MySQL. A versão atual do mecanismo Aurora MySQL oferece suporte a um banco de dados global. A camada de aplicativo já está implantada em duas regiões.\

A política da empresa determina que os aplicativos críticos devem ter componentes da camada de aplicativo e componentes da camada de dados implantados em duas regiões. O RTO e o RPO não devem durar mais do que alguns minutos cada. Um arquiteto de soluções deve recomendar uma solução para tornar a camada de dados compatível com a política da empresa.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Adicionar outra região ao cluster Aurora MySQL DB **Mais votado**

B. Adicione outra região a cada tabela no cluster Aurora MySQL DB

C. Configurar backups agendados entre regiões para a tabela do DynamoDB e o cluster do Aurora MySQL DB

D. Converta a tabela DynamoDB existente em uma tabela global adicionando outra Região à sua configuração **Mais votado**

E. Use o Amazon Route 53 Application Recovery Controller para automatizar o backup e a recuperação do banco de dados para a região secundária

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/16/)

161- Uma empresa de telecomunicações está executando um aplicativo na AWS. A empresa configurou uma conexão AWS Direct Connect entre o data center local da empresa e a AWS. A empresa implantou o aplicativo em instâncias do Amazon EC2 em várias Zonas de Disponibilidade atrás de um Balanceador de Carga de Aplicativo (ALB) interno. Os clientes da empresa se conectam da rede local usando HTTPS. O TLS termina no ALB. A empresa tem vários grupos-alvo e usa roteamento baseado em caminho para encaminhar solicitações com base no caminho da URL.\

A empresa está planejando implantar um dispositivo de firewall local com uma lista de permissões baseada em endereço IP. Um arquiteto de soluções deve desenvolver uma solução para permitir o fluxo de tráfego para a AWS a partir da rede local para que os clientes possam continuar acessando o aplicativo.\

Qual solução atenderá a esses requisitos?

A. Configure o ALB existente para usar endereços IP estáticos. Atribua endereços IP em várias Zonas de Disponibilidade ao ALB. Adicione os endereços IP do ALB ao dispositivo de firewall.

B. Crie um Balanceador de Carga de Rede (NLB). Associe o NLB a um endereço IP estático em várias Zonas de Disponibilidade. Crie um grupo de destino do tipo ALB para o NLB e adicione o AL existente. Adicione os endereços IP do NLB ao dispositivo de firewall. Atualize os clientes para se conectarem ao NLB. **Mais votado**

C. Crie um Balanceador de Carga de Rede (NLB). Associe o LNB a um endereço IP estático em várias Zonas de Disponibilidade. Adicione os grupos de destino existentes ao NLB. Atualize os clientes para se conectarem ao NLB. Exclua o ALB. Adicione os endereços IP do NLB ao dispositivo de firewall.

D. Crie um Gateway Load Balancer (GWLB). Atribua endereços IP estáticos ao GWLB em várias Zonas de Disponibilidade. Crie um grupo de destino do tipo ALB para o GWLB e adicione o ALB existente. Adicione os endereços IP do GWLB ao dispositivo de firewall. Atualize os clientes para se conectarem ao GWLB.

162- Uma empresa executa uma aplicação em uma frota de instâncias do Amazon EC2 localizadas em sub-redes privadas, atrás de um Application Load Balancer (ALB) voltado para a Internet. O ALB é a origem de uma distribuição do Amazon CloudFront. Uma ACL da Web do AWS WAF, que contém várias regras gerenciadas pela AWS, está associada à distribuição do CloudFront.\

A empresa precisa de uma solução que impeça o tráfego da Internet de acessar diretamente o ALB.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma nova ACL da Web que contenha as mesmas regras da ACL da Web existente. Associe a nova ACL da Web ao ALB.

B. Associe a ACL da Web existente ao ALB.

C. Adicione uma regra de grupo de segurança ao ALB para permitir tráfego da lista de prefixos gerenciados pela AWS somente para o CloudFront. **Mais votado**

D. Adicione uma regra de grupo de segurança ao ALB para permitir apenas os vários intervalos de endereços IP do CloudFront.

163- Uma empresa está executando uma aplicação que utiliza um cluster do Amazon ElastiCache para Redis como camada de cache. Uma auditoria de segurança recente revelou que a empresa configurou a criptografia em repouso para o ElastiCache. No entanto, a empresa não configurou o ElastiCache para usar criptografia em trânsito. Além disso, os usuários podem acessar o cache sem autenticação.\

Um arquiteto de soluções deve fazer alterações para exigir autenticação do usuário e garantir que a empresa esteja usando criptografia de ponta a ponta.\

Qual solução atenderá a esses requisitos?

A. Crie um token AUTH. Armazene o token no AWS System Manager Parameter Store como um parâmetro criptografado. Crie um novo cluster com AUTH e configure a criptografia em trânsito. Atualize o aplicativo para recuperar o token AUTH do Parameter Store quando necessário e para usar o token AUTH para autenticação.

B. Crie um token AUTH. Armazene o token no AWS Secrets Manager. Configure o cluster existente para usar o token AUTH e configure a criptografia em trânsito. Atualize o aplicativo para recuperar o token AUTH do Secrets Manager quando necessário e para usar o token AUTH para autenticação. **Mais votado**

C. Crie um certificado SSL. Armazene o certificado no AWS Secrets Manager. Crie um novo cluster e configure a criptografia em trânsito. Atualize o aplicativo para recuperar o certificado SSL do Secrets Manager quando necessário e para usar o certificado para autenticação.

D. Crie um certificado SSL. Armazene o certificado no AWS Systems Manager Parameter Store como um parâmetro avançado criptografado. Atualize o cluster existente para configurar a criptografia em trânsito. Atualize o aplicativo para recuperar o certificado SSL do Parameter Store quando necessário e para usar o certificado para autenticação.

164- Uma empresa está executando uma carga de trabalho de computação usando instâncias spot do Amazon EC2 que estão em um grupo de Auto Scaling. O modelo de inicialização usa dois grupos de posicionamento e um único tipo de instância.\

Recentemente, um sistema de monitoramento relatou falhas na inicialização de instâncias de Auto Scaling, que se correlacionaram com tempos de espera mais longos para os usuários do sistema. A empresa precisa melhorar a confiabilidade geral da carga de trabalho.\

Qual solução atenderá a esse requisito?

A. Substitua o modelo de inicialização por uma configuração de inicialização para usar um grupo de dimensionamento automático que usa seleção de tipo de instância baseada em atributos.

B. Crie uma nova versão do modelo de inicialização que use a seleção de tipo de instância baseada em atributos. Configure o grupo de Dimensionamento Automático para usar a nova versão do modelo de inicialização. **Mais votado**

C. Atualize o grupo de dimensionamento automático do modelo de lançamento para aumentar o número de grupos de posicionamento.

D. Atualize o modelo de inicialização para usar um tipo de instância maior.

165- Uma empresa está migrando uma carga de trabalho de processamento de documentos para a AWS. A empresa atualizou diversos aplicativos para usar nativamente a API do Amazon S3 para armazenar, recuperar e modificar documentos gerados por um servidor de processamento a uma taxa de aproximadamente 5 documentos por segundo. Após a conclusão do processamento dos documentos, os clientes podem baixá-los diretamente do Amazon S3.\

Durante a migração, a empresa descobriu que não conseguia atualizar imediatamente o servidor de processamento, que gera muitos documentos, para oferecer suporte à API do S3. O servidor é executado em Linux e requer acesso local rápido aos arquivos gerados e modificados. Quando o servidor conclui o processamento, os arquivos devem estar disponíveis ao público para download em até 30 minutos.\

Qual solução atenderá a esses requisitos com o MENOR esforço?

A. Migre o aplicativo para uma função do AWS Lambda. Use o AWS SDK para Java para gerar, modificar e acessar os arquivos que a empresa armazena diretamente no Amazon S3.

B. Configure um Gateway de Arquivos do Amazon S3 e configure um compartilhamento de arquivos vinculado ao repositório de documentos. Monte o compartilhamento de arquivos em uma instância do Amazon EC2 usando NFS. Quando ocorrerem alterações no Amazon S3, inicie uma chamada de API RefreshCache para atualizar o Gateway de Arquivos do S3. **Mais votado**

C. Configure o Amazon FSx para Lustre com uma política de importação e exportação. Vincule o novo sistema de arquivos a um bucket do S3. Instale o cliente Lustre e monte o repositório de documentos em uma instância do Amazon EC2 usando NFS.

D. Configure o AWS DataSync para se conectar a uma instância do Amazon EC2. Configure uma tarefa para sincronizar os arquivos gerados de e para o Amazon S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/17/)

166- Uma empresa de entregas está executando uma solução sem servidor na Nuvem AWS. A solução gerencia dados do usuário, informações de entrega e detalhes de compras anteriores. A solução consiste em vários microsserviços. O serviço central do usuário armazena dados confidenciais em uma tabela do Amazon DynamoDB. Vários outros microsserviços armazenam uma cópia de partes dos dados confidenciais em diferentes serviços de armazenamento.\

A empresa precisa ter a capacidade de excluir informações do usuário mediante solicitação. Assim que o serviço central do usuário exclui um usuário, todos os outros microsserviços também devem excluir suas cópias dos dados imediatamente.\

Qual solução atenderá a esses requisitos?

A. Ative os fluxos do DynamoDB na tabela do DynamoDB. Crie um gatilho do AWS Lambda para o fluxo do DynamoDB que publicará eventos sobre a exclusão de usuários em uma fila do Amazon Simple Queue Service (Amazon SQS). Configure cada microsserviço para consultar a fila e excluir o usuário da tabela do DynamoDB.

B. Configure notificações de eventos do DynamoDB na tabela do DynamoDB. Crie um tópico do Amazon Simple Notification Service (Amazon SNS) como destino para a notificação de eventos do DynamoDB. Configure cada microsserviço para assinar o tópico do SNS e excluir o usuário da tabela do DynamoDB.

C. Configure o serviço central de usuário para publicar um evento em um barramento de eventos personalizado do Amazon EventBridge quando a empresa excluir um usuário. Crie uma regra do EventBridge para cada microsserviço para corresponder ao padrão de evento de exclusão de usuário e invoque a lógica no microsserviço para excluir o usuário da tabela do DynamoDB. **Mais votado**

D. Configure o serviço de usuário central para publicar uma mensagem em uma fila do Amazon Simple Queue Service (Amazon SQS) quando a empresa excluir um usuário. Configure cada microsserviço para criar um filtro de eventos na fila do SQS e excluir o usuário da tabela do DynamoDB.

167- Uma empresa está executando uma aplicação web em uma VPC. A aplicação web é executada em um grupo de instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). O ALB utiliza o AWS WAF.\

Um cliente externo precisa se conectar à aplicação web. A empresa deve fornecer endereços IP a todos os clientes externos.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Substitua o ALB por um Balanceador de Carga de Rede (NLB). Atribua um endereço IP elástico ao NLB.

B. Alocar um endereço IP elástico. Atribuir o endereço IP elástico ao AL. Fornecer o endereço IP elástico ao cliente.

C. Crie um acelerador padrão do AWS Global Accelerator. Especifique o ALB como o endpoint do acelerador. Forneça os endereços IP do acelerador ao cliente. **Mais votado**

D. Configurar uma distribuição do Amazon CloudFront. Definir o ALB como origem. Executar ping no nome DNS da distribuição para determinar o endereço IP público da distribuição. Forneça o endereço IP ao cliente.

168- Uma empresa possui algumas contas na AWS para desenvolvimento e deseja migrar seu aplicativo de produção para a AWS. A empresa precisa aplicar a criptografia do Amazon Elastic Block Store (Amazon EBS) em repouso apenas para contas de produção atuais e futuras. A empresa precisa de uma solução que inclua blueprints e guardrails integrados.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Use o AWS CloudFormation StackSets para implantar regras do AWS Config em contas de produção.

B. Crie uma nova landing zone da AWS Control Tower em uma conta de desenvolvedor existente. Crie UOs para as contas. Adicione contas de produção e desenvolvimento às UOs de produção e desenvolvimento, respectivamente.

C. Crie uma nova landing zone da AWS Control Tower na conta de gerenciamento da empresa. Adicione contas de produção e desenvolvimento às UOs de produção e desenvolvimento, respectivamente. **Mais votado**

D. Convide contas existentes para ingressar na organização no AWS Organizations. Crie SCPs para garantir a conformidade. **Mais votado**

E. Crie um guardrail da conta de gerenciamento para detectar a criptografia do EBS.

F. Crie uma proteção para a UO de produção para detectar a criptografia do EBS.

169- Uma empresa está executando uma aplicação web crítica com estado em duas instâncias Linux do Amazon EC2, atrás de um Application Load Balancer (ALB) com um banco de dados Amazon RDS para MySQL. A empresa hospeda os registros DNS da aplicação no Amazon Route 53. Um arquiteto de soluções deve recomendar uma solução para melhorar a resiliência da aplicação.\

A solução deve atender aos seguintes objetivos:\

• Camada da aplicação: RPO de 2 minutos. RTO de 30 minutos.\
• Camada do banco de dados: RPO de 5 minutos. RTO de 30 minutos.\

A empresa não deseja fazer alterações significativas na arquitetura da aplicação existente. A empresa deve garantir latência ideal após um failover.\

Qual solução atenderá a esses requisitos?

A. Configure as instâncias do EC2 para usar o AWS Elastic Disaster Recovery. Crie uma réplica de leitura entre regiões para a instância do RDS DB. Crie um ALB em uma segunda região da AWS. Crie um endpoint do AWS Global Accelerator e associe-o aos ALBs. Atualize os registros DNS para que apontem para o endpoint do Global Accelerator. **Mais votado**

B. Configurar as instâncias do EC2 para usar o Amazon Data Lifecycle Manager (Amazon DLM) para capturar snapshots dos volumes do EBS. Configurar backups automatizados do RDS. Configurar a replicação de backup para uma segunda região da AWS. Criar um ALB na segunda região. Criar um endpoint do AWS Global Accelerator e associá-lo aos ALBs. Atualizar os registros DNS para que apontem para o endpoint do Global Accelerator.

C. Crie um plano de backup no AWS Backup para as instâncias do EC2 e do RDS DB. Configure a replicação de backup para uma segunda região da AWS. Crie um ALB na segunda região. Configure uma distribuição do Amazon CloudFront na frente do ALB. Atualize os registros DNS para apontar para o CloudFront.

D. Configure as instâncias do EC2 para usar o Amazon Data Lifecycle Manager (Amazon DLM) para capturar snapshots dos volumes do EBS. Crie uma réplica de leitura entre regiões para a instância do RDS DB. Crie um ALB em uma segunda região da AWS. Crie um endpoint do AWS Global Accelerator e associe-o aos ALBs.

170- Um arquiteto de soluções deseja otimizar custos e dimensionar adequadamente instâncias do Amazon EC2 em uma única conta da AWS. O arquiteto de soluções deseja garantir que as instâncias sejam otimizadas com base nas métricas de CPU, memória e rede.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha duas.)

A. Adquira o AWS Business Support ou o AWS Enterprise Support para a conta.

B. Ative o AWS Trusted Advisor e revise todas as recomendações de “Instâncias do Amazon EC2 de baixa utilização”.

C. Instale o agente do Amazon CloudWatch e configure a coleta de métricas de memória nas instâncias do EC2. **Mais votado**

D. Configure o AWS Compute Optimizer na conta da AWS para receber descobertas e recomendações de otimização. **Mais votado**

E. Crie um Plano de Economia de Instância do EC2 para as regiões da AWS, famílias de instâncias e sistemas operacionais de interesse.

171- Uma empresa utiliza um repositório do AWS CodeCommit. A empresa precisa armazenar uma cópia de backup dos dados contidos no repositório em uma segunda região da AWS.\

Qual solução atenderá a esses requisitos?

A. Configure o AWS Elastic Disaster Recovery para replicar os dados do repositório do CodeCommit para a segunda região.

B. Use o AWS Backup para fazer backup do repositório do CodeCommit de hora em hora. Crie uma cópia entre regiões na segunda região.

C. Crie uma regra do Amazon EventBridge para invocar o AWS CodeBuild quando a empresa enviar o código para o repositório. Use o CodeBuild para clonar o repositório. Crie um arquivo .zip do conteúdo. Copie o arquivo para um bucket do S3 na segunda região. **Mais votado**

D. Crie um fluxo de trabalho do AWS Step Functions com base em uma programação horária para tirar um snapshot do repositório do CodeCommit. Configure o fluxo de trabalho para copiar o snapshot para um bucket do S3 na segunda região.

172- Uma empresa possui várias unidades de negócios, cada uma com contas separadas na AWS. Cada unidade de negócios gerencia sua própria rede com várias VPCs com intervalos CIDR sobrepostos. A equipe de marketing da empresa criou um novo aplicativo interno e deseja torná-lo acessível a todas as outras unidades de negócios. A solução deve usar apenas endereços IP privados.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Instrua cada unidade de negócios a adicionar um intervalo CIDR secundário exclusivo à VPC da unidade de negócios. Faça o peering das VPCs e use um gateway NAT privado no intervalo secundário para rotear o tráfego para a equipe de marketing.

B. Crie uma instância do Amazon EC2 para servir como um dispositivo virtual na VPC da conta de marketing. Crie uma conexão VPN AWS Site-to-Site entre a equipe de marketing e a VPC de cada unidade de negócios. Execute NAT quando necessário.

C. Crie um serviço de endpoint AWS PrivateLink para compartilhar o aplicativo de marketing. Conceda permissão a contas específicas da AWS para se conectarem ao serviço. Crie endpoints de VPC de interface em outras contas para acessar o aplicativo usando endereços IP privados. **Mais votado**

D. Crie um Balanceador de Carga de Rede (NLB) na frente do aplicativo de marketing em uma sub-rede privada. Crie uma API do API Gateway. Use a integração privada do Amazon API Gateway para conectar a API ao NLB. Ative a autorização do IAM para a API. Conceda acesso às contas das outras unidades de negócios.

173- Uma empresa precisa auditar a postura de segurança de uma conta AWS recém-adquirida. A equipe de segurança de dados da empresa exige uma notificação apenas quando um bucket do Amazon S3 se torna público. A empresa já criou um tópico do Amazon Simple Notification Service (Amazon SNS) que possui o endereço de e-mail da equipe de segurança de dados cadastrado.\

Qual solução atenderá a esses requisitos?

A. Crie uma notificação de evento do S3 em todos os buckets do S3 para o evento isPublic. Selecione o tópico do SNS como alvo para as notificações de evento.

B. Crie um analisador no AWS Identity and Access Management Access Analyzer. Crie uma regra do Amazon EventBridge para o tipo de evento "Access Analyzer Finding" com um filtro para "isPublic: true". Selecione o tópico do SNS como destino da regra do EventBridge. **Mais votado**

C. Crie uma regra do Amazon EventBridge para o tipo de evento “Chamada de API em nível de bucket via CloudTrail” com um filtro para “PutBucketPolicy”. Selecione o tópico do SNS como o destino da regra do EventBridge.

D. Ative o AWS Config e adicione a regra cloudtrail-s3-dataevents-enabled. Crie uma regra do Amazon EventBridge para o tipo de evento "Status de Reavaliação das Regras de Configuração" com um filtro para "NÃO_COMPLIANTE". Selecione o tópico do SNS como destino da regra do EventBridge.

174- Um arquiteto de soluções precisa avaliar o portfólio de aplicativos e bancos de dados de uma empresa recém-adquirida. O arquiteto de soluções deve criar um business case para migrar o portfólio para a AWS. A empresa recém-adquirida executa aplicativos em um data center local. O data center não é bem documentado. O arquiteto de soluções não consegue determinar imediatamente quantos aplicativos e bancos de dados existem. O tráfego para os aplicativos é variável. Alguns aplicativos são processos em lote executados ao final de cada mês.\

O arquiteto de soluções deve compreender melhor o portfólio antes de iniciar a migração para a AWS.\

Qual solução atenderá a esses requisitos?

A. Use o AWS Server Migration Service (AWS SMS) e o AWS Database Migration Service (AWS DMS) para avaliar a migração. Use o AWS Service Catalog para entender as dependências de aplicativos e bancos de dados.

B. Utilize o AWS Application Migration Service. Execute agentes na infraestrutura local. Gerencie os agentes usando o AWS Migration Hub. Utilize o AWS Storage Gateway para avaliar as necessidades de armazenamento local e as dependências do banco de dados.

C. Use o Migration Evaluator para gerar uma lista de servidores. Crie um relatório para um caso de negócios. Use o AWS Migration Hub para visualizar o portfólio. Use o AWS Application Discovery Service para entender as dependências dos aplicativos. **Mais votado**

D. Use a AWS Control Tower na conta de destino para gerar um portfólio de aplicativos. Use o AWS Server Migration Service (AWS SMS) para gerar relatórios mais detalhados e um caso de negócios. Use uma landing zone para contas e recursos principais.

175- Uma empresa possui uma aplicação executada como um ReplicaSet de vários pods em um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). O cluster EKS possui nós em várias Zonas de Disponibilidade. A aplicação gera muitos arquivos pequenos que devem ser acessíveis em todas as instâncias em execução. A empresa precisa fazer backup dos arquivos e mantê-los por 1 ano.\

Qual solução atenderá a esses requisitos e, ao mesmo tempo, oferecerá o desempenho de armazenamento MAIS RÁPIDO?

A. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS) e um destino de montagem para cada sub-rede que contém nós no cluster EKS. Configure o ReplicaSet para montar o sistema de arquivos. Direcione o aplicativo para armazenar arquivos no sistema de arquivos. Configure o AWS Backup para fazer backup e reter cópias dos dados por 1 ano. **Mais votado**

B. Crie um volume do Amazon Elastic Block Store (Amazon EBS). Habilite o recurso Multi-Attach do EBS. Configure o ReplicaSet para montar o volume EBS. Direcione o aplicativo para armazenar arquivos no volume EBS. Configure o AWS Backup para fazer backup e reter cópias dos dados por 1 ano.

C. Crie um bucket do Amazon S3. Configure o ReplicaSet para montar o bucket do S3. Oriente o aplicativo a armazenar arquivos no bucket do S3. Configure o Versionamento do S3 para reter cópias dos dados. Configure uma política de ciclo de vida do S3 para excluir objetos após 1 ano.

D. Configure o ReplicaSet para usar o armazenamento disponível em cada um dos pods de aplicativos em execução para armazenar os arquivos localmente. Use uma ferramenta de terceiros para fazer backup do cluster EKS por 1 ano.

176- Uma empresa administra um centro de atendimento ao cliente que aceita chamadas e envia automaticamente a todos os clientes uma pesquisa de experiência interativa, gerenciada e bidirecional por mensagem de texto. Os aplicativos que dão suporte ao centro de atendimento ao cliente são executados em máquinas que a empresa hospeda em um data center local. O hardware utilizado pela empresa é antigo e o sistema está com problemas de inatividade. A empresa deseja migrar o sistema para a AWS para melhorar a confiabilidade.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional contínua?

A. Use o Amazon Connect para substituir o antigo hardware do call center. Use o Amazon Pinpoint para enviar pesquisas por mensagem de texto aos clientes. **Mais votado**

B. Use o Amazon Connect para substituir o antigo hardware do call center. Use o Amazon Simple Notification Service (Amazon SNS) para enviar pesquisas por mensagem de texto aos clientes.

C. Migre o software do call center para instâncias do Amazon EC2 que estejam em um grupo de Auto Scaling. Use as instâncias do EC2 para enviar pesquisas por mensagem de texto aos clientes.

D. Use o Amazon Pinpoint para substituir o antigo hardware do call center e enviar pesquisas por mensagem de texto aos clientes.

177- Uma empresa está construindo um call center usando o Amazon Connect. A equipe de operações da empresa está definindo uma estratégia de recuperação de desastres (DR) em todas as regiões da AWS. O contact center tem dezenas de fluxos de contato, centenas de usuários e dezenas de números de telefone reivindicados.\

Qual solução fornecerá DR com o MENOR RTO?

A. Crie uma função do AWS Lambda para verificar a disponibilidade da instância do Amazon Connect e enviar uma notificação à equipe de operações em caso de indisponibilidade. Crie uma regra do Amazon EventBridge para invocar a função do Lambda a cada 5 minutos. Após a notificação, instrua a equipe de operações a usar o Console de Gerenciamento da AWS para provisionar uma nova instância do Amazon Connect em uma segunda região. Implante os fluxos de contato, usuários e números de telefone reivindicados usando um modelo do AWS CloudFormation.

B. Provisione uma nova instância do Amazon Connect com todos os usuários existentes em uma segunda região. Crie uma função do AWS Lambda para verificar a disponibilidade da instância do Amazon Connect. Crie uma regra do Amazon EventBridge para invocar a função do Lambda a cada 5 minutos. Em caso de problema, configure a função do Lambda para implantar um modelo do AWS CloudFormation que provisione fluxos de contato e números reivindicados na segunda região.

C. Provisione uma nova instância do Amazon Connect com todos os fluxos de contato existentes e números de telefone reivindicados em uma segunda região. Crie uma verificação de integridade do Amazon Route 53 para a URL da instância do Amazon Connect. Crie um alarme do Amazon CloudWatch para verificações de integridade com falha. Crie uma função do AWS Lambda para implantar um modelo do AWS CloudFormation que provisione todos os usuários. Configure o alarme para invocar a função do Lambda.

D. Provisione uma nova instância do Amazon Connect com todos os usuários e fluxos de contato existentes em uma segunda região. Crie uma verificação de integridade do Amazon Route 53 para a URL da instância do Amazon Connect. Crie um alarme do Amazon CloudWatch para verificações de integridade com falha. Crie uma função do AWS Lambda para implantar um modelo do AWS CloudFormation que provisiona números de telefone reivindicados. Configure o alarme para invocar a função do Lambda. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/18/)

178- Uma empresa executa um aplicativo na AWS. A empresa seleciona dados de diversas fontes diferentes. A empresa usa algoritmos proprietários para realizar transformações e agregações de dados. Após executar os processos de ETL, a empresa armazena os resultados em tabelas do Amazon Redshift. A empresa vende esses dados para outras empresas. A empresa baixa os dados como arquivos das tabelas do Amazon Redshift e os transmite para vários clientes de dados usando FTP. O número de clientes de dados cresceu significativamente. O gerenciamento dos clientes de dados tornou-se difícil.\

A empresa usará o AWS Data Exchange para criar um produto de dados que a empresa possa usar para compartilhar dados com os clientes. A empresa deseja confirmar as identidades dos clientes antes de compartilhar os dados. Os clientes também precisam acessar os dados mais recentes quando a empresa os publica.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Use o AWS Data Exchange para APIs para compartilhar dados com os clientes. Configure a verificação de assinatura. Na conta da AWS da empresa que produz os dados, crie uma integração do serviço de API de dados do Amazon API Gateway com o Amazon Redshift. Exija que os clientes de dados assinem o produto de dados.

B. Na conta AWS da empresa que produz os dados, crie um datashare do AWS Data Exchange conectando-o ao cluster do Redshift. Configure a verificação de assinatura. Exija que os clientes de dados assinem o produto de dados. **Mais votado**

C. Baixe os dados das tabelas do Amazon Redshift para um bucket do Amazon S3 periodicamente. Use o AWS Data Exchange para S3 para compartilhar dados com os clientes. Configure a verificação de assinatura. Exija que os clientes de dados assinem o produto de dados.

D. Publique os dados do Amazon Redshift em um Open Data no AWS Data Exchange. Exija que os clientes assinem o produto de dados no AWS Data Exchange. Na conta da AWS da empresa que produz os dados, anexe políticas baseadas em recursos do IAM às tabelas do Amazon Redshift para permitir acesso apenas a contas da AWS verificadas.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/18/)

179- Um arquiteto de soluções está projetando uma solução para processar eventos. A solução deve ter a capacidade de escalar verticalmente e horizontalmente com base no número de eventos que recebe. Se ocorrer um erro de processamento, o evento deve ser movido para uma fila separada para revisão.\

Qual solução atenderá a esses requisitos?

A. Envie detalhes do evento para um tópico do Amazon Simple Notification Service (Amazon SNS). Configure uma função do AWS Lambda como assinante do tópico do SNS para processar os eventos. Adicione um destino em caso de falha à função. Defina uma fila do Amazon Simple Queue Service (Amazon SQS) como destino.

B. Publicar eventos em uma fila do Amazon Simple Queue Service (Amazon SQS). Criar um grupo de Auto Scaling do Amazon EC2. Configurar o grupo de Auto Scaling para aumentar e diminuir a escala com base na métrica ApproximateAgeOfOldestMessage da fila. Configurar o aplicativo para gravar mensagens com falha em uma fila de mensagens mortas. **Mais votado**

C. Grave eventos em uma tabela do Amazon DynamoDB. Configure um fluxo do DynamoDB para a tabela. Configure o fluxo para invocar uma função do AWS Lambda. Configure a função do Lambda para processar os eventos.

D. Publicar eventos em um barramento de eventos do Amazon EventBndge. Criar e executar uma aplicação em uma instância do Amazon EC2 com um grupo de Auto Scaling que esteja por trás de um Application Load Balancer (ALB). Definir o ALB como destino do barramento de eventos. Configurar o barramento de eventos para repetir eventos. Gravar mensagens em uma fila de mensagens mortas se a aplicação não puder processá-las.

180- Uma empresa opera um mecanismo de processamento na Nuvem AWS. O mecanismo processa dados ambientais de centros logísticos para calcular um índice de sustentabilidade. A empresa possui milhões de dispositivos em centros logísticos espalhados pela Europa. Os dispositivos enviam informações ao mecanismo de processamento por meio de uma API RESTful.\

A API sofre picos de tráfego imprevisíveis. A empresa precisa implementar uma solução para processar todos os dados que os dispositivos enviam ao mecanismo de processamento. A perda de dados é inaceitável.\

Qual solução atenderá a esses requisitos?

A. Crie um Application Load Balancer (ALB) para a API RESTful. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Crie um listener e um grupo de destino para o ALB. Adicione a fila do SQS como destino. Use um contêiner executado no Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização Fargate para processar mensagens na fila.

B. Crie uma API HTTP do Amazon API Gateway que implemente a API RESTful. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Crie uma integração do serviço API Gateway com a fila do SQS. Crie uma função do AWS Lambda para processar mensagens na fila do SQS. **Mais votado**

C. Crie uma API REST do Amazon API Gateway que implemente a API RESTful. Crie uma frota de instâncias do Amazon EC2 em um grupo de Auto Scaling. Crie uma integração de proxy do grupo de Auto Scaling do API Gateway. Use as instâncias do EC2 para processar dados recebidos.

D. Crie uma distribuição do Amazon CloudFront para a API RESTful. Crie um fluxo de dados no Amazon Kinesis Data Streams. Defina o fluxo de dados como a origem da distribuição. Crie uma função do AWS Lambda para consumir e processar dados no fluxo de dados.

181- Uma empresa está projetando sua configuração de rede na Nuvem AWS. A empresa usa o AWS Organizations para gerenciar uma configuração com várias contas. A empresa possui três UOs. Cada UO contém mais de 100 contas AWS. Cada conta possui uma única VPC, e todas as VPCs em cada UO estão na mesma região da AWS.\

Os intervalos CIDR para todas as contas AWS não se sobrepõem. A empresa precisa implementar uma solução na qual as VPCs na mesma UO possam se comunicar entre si, mas não com VPCs em outras UOs.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um conjunto de pilhas do AWS CloudFormation que estabeleça o peering de VPC entre contas em cada UO. Provisione o conjunto de pilhas em cada UO.

B. Em cada UO, crie uma conta de rede dedicada com uma única VPC. Compartilhe essa VPC com todas as outras contas na UO usando o AWS Resource Access Manager (AWS RAM). Crie uma conexão de peering de VPC entre a conta de rede e cada conta na UO.

C. Provisione um gateway de trânsito em uma conta em cada UO. Compartilhe o gateway de trânsito em toda a organização usando o AWS Resource Access Manager (AWS RAM). Crie anexos de VPC de gateway de trânsito para cada VPC. **Mais votado**

D. Em cada UO, crie uma conta de rede dedicada com uma única VPC. Estabeleça uma conexão VPN entre a conta de rede e as demais contas na UO. Use um software de roteamento de terceiros para rotear o tráfego transitivo entre as VPCs.

182- Uma empresa está migrando um aplicativo para a AWS. Ela deseja utilizar serviços totalmente gerenciados o máximo possível durante a migração. A empresa precisa armazenar documentos importantes e de grande porte no aplicativo, atendendo aos seguintes requisitos:\

1\. Os dados devem ser altamente duráveis e disponíveis\
; 2. Os dados devem estar sempre criptografados, tanto em repouso quanto em trânsito\
; 3. A chave de criptografia deve ser gerenciada pela empresa e rotacionada periodicamente.\

Qual das seguintes soluções o arquiteto de soluções deve recomendar?

A. Implante o gateway de armazenamento na AWS no modo de gateway de arquivos. Use a criptografia de volume do Amazon EBS com uma chave KMS da AWS para criptografar os volumes do gateway de armazenamento.

B. Use o Amazon S3 com uma política de bucket para impor HTTPS para conexões com o bucket e para impor criptografia do lado do servidor e AWS KMS para criptografia de objetos. **Mais votado**

C. Use o Amazon DynamoDB com SSL para se conectar ao DynamoDB. Use uma chave KMS da AWS para criptografar objetos do DynamoDB em repouso.

D. Implante instâncias com volumes do Amazon EBS anexados para armazenar esses dados. Use a criptografia de volumes do EBS com uma chave AWS KMS para criptografar os dados.

183- A API pública de uma empresa é executada como tarefas no Amazon Elastic Container Service (Amazon ECS). As tarefas são executadas no AWS Fargate por trás de um Application Load Balancer (ALB) e são configuradas com o Service Auto Scaling para as tarefas com base na utilização da CPU. Este serviço tem funcionado bem há vários meses.\

Recentemente, o desempenho da API caiu e tornou o aplicativo inutilizável. A empresa descobriu que um número significativo de ataques de injeção de SQL havia ocorrido contra a API e que o serviço da API havia atingido seu limite máximo.\

Um arquiteto de soluções precisa implementar uma solução que impeça ataques de injeção de SQL de atingir o serviço da API do ECS. A solução deve permitir tráfego legítimo e maximizar a eficiência operacional.\

Qual solução atende a esses requisitos?

A. Crie uma nova ACL da Web do AWS WAF para monitorar as solicitações HTTP e HTTPS que são encaminhadas para o ALB na frente das tarefas do ECS.

B. Crie uma nova implementação do AWS WAF Bot Control. Adicione uma regra no grupo de regras gerenciadas do AWS WAF Bot Control para monitorar o tráfego e permitir apenas tráfego legítimo para o ALB antes das tarefas do ECS.

C. Crie uma nova ACL da Web do AWS WAF. Adicione uma nova regra que bloqueie solicitações que correspondam ao grupo de regras do banco de dados SQL. Defina a ACL da Web para permitir todo o tráfego restante que não corresponda a essas regras. Anexe a ACL da Web ao ALB antes das tarefas do ECS. **Mais votado**

D. Crie uma nova ACL da Web do AWS WAF. Crie um novo conjunto de IPs vazio no AWS WAF. Adicione uma nova regra à ACL da Web para bloquear solicitações originadas de endereços IP no novo conjunto de IPs. Crie uma função do AWS Lambda que vasculhe os logs da API em busca de endereços IP que enviam ataques de injeção de SQL e adicione esses endereços IP ao conjunto de IPs. Anexe a ACL da Web ao ALB antes das tarefas do ECS.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/19/)

184- Uma empresa ambiental está implantando sensores em grandes cidades de um país para medir a qualidade do ar. Os sensores se conectam ao AWS IoT Core para ingerir leituras de dados de séries temporais. A empresa armazena os dados no Amazon DynamoDB.\

Para a continuidade dos negócios, a empresa precisa ter a capacidade de ingerir e armazenar dados em duas regiões da AWS.\

Qual solução atenderá a esses requisitos?

A. Crie uma política de roteamento de failover de alias do Amazon Route 53 com valores para endpoints de dados do AWS IoT Core em ambas as regiões. Migre dados para tabelas globais do Amazon Aurora.

B. Crie uma configuração de domínio para o AWS IoT Core em cada região. Crie uma política de roteamento baseada em latência do Amazon Route 53. Use endpoints de dados do AWS IoT Core em ambas as regiões como valores. Migre os dados para o Amazon MemoryDB para Redis e configure a replicação entre regiões.

C. Crie uma configuração de domínio para o AWS IoT Core em cada região. Crie uma verificação de integridade do Amazon Route 53 que avalie a integridade da configuração de domínio. Crie uma política de roteamento de failover com valores para o nome de domínio das configurações de domínio do AWS IoT Core. Atualize a tabela do DynamoDB para uma tabela global. **Mais votado**

D. Crie uma política de roteamento baseada em latência do Amazon Route 53. Use endpoints de dados do AWS IoT Core em ambas as regiões como valores. Configure fluxos do DynamoDB e replicação de dados entre regiões.

185- Uma empresa usa o AWS Organizations para uma configuração de múltiplas contas na Nuvem AWS. A equipe financeira da empresa possui um aplicativo de processamento de dados que utiliza o AWS Lambda e o Amazon DynamoDB. A equipe de marketing da empresa deseja acessar os dados armazenados na tabela do DynamoDB.\

A tabela do DynamoDB contém dados confidenciais. A equipe de marketing pode ter acesso apenas a atributos específicos de dados na tabela do DynamoDB. As equipes financeira e de marketing possuem contas AWS separadas.\

O que um arquiteto de soluções deve fazer para fornecer à equipe de marketing o acesso apropriado à tabela do DynamoDB?

A. Crie um SCP para conceder à conta AWS da equipe de marketing acesso aos atributos específicos da tabela do DynamoDB. Anexe o SCP à UO da equipe financeira.

B. Crie uma função do IAM na conta da equipe financeira usando as condições da política do IAM para atributos específicos do DynamoDB (controle de acesso refinado). Estabeleça confiança com a conta da equipe de marketing. Na conta da equipe de marketing, crie uma função do IAM que tenha permissões para assumir a função do IAM na conta da equipe financeira. **Mais votado**

C. Crie uma política de IAM baseada em recursos que inclua condições para atributos específicos do DynamoDB (controle de acesso refinado). Anexe a política à tabela do DynamoDB. Na conta da equipe de marketing, crie uma função de IAM com permissões para acessar a tabela do DynamoDB na conta da equipe de finanças.

D. Crie uma função do IAM na conta da equipe financeira para acessar a tabela do DynamoDB. Use um limite de permissões do IAM para restringir o acesso a atributos específicos. Na conta da equipe de marketing, crie uma função do IAM que tenha permissões para assumir a função do IAM na conta da equipe financeira.

186- Um arquiteto de soluções está criando uma aplicação que armazena objetos em um bucket do Amazon S3. O arquiteto de soluções deve implantar a aplicação em duas regiões da AWS que serão usadas simultaneamente. Os objetos nos dois buckets do S3 devem permanecer sincronizados entre si.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha três.)

A. Crie um ponto de acesso multirregional S3 Altere o aplicativo para se referir ao ponto de acesso multirregional **Mais votado**

B. Configurar a replicação entre regiões (CRR) S3 bidirecional entre os dois buckets S3 **Mais votado**

C. Modifique o aplicativo para armazenar objetos em cada bucket S3

D. Crie uma regra de ciclo de vida S3 para cada bucket S3 para copiar objetos de um bucket S3 para o outro bucket S3

E. Habilitar o controle de versão S3 para cada bucket S3 **Mais votado**

F. Configurar uma notificação de evento para cada bucket S3 para invocar uma função AWS Lambda para copiar objetos de um bucket S3 para o outro bucket S3

187- Uma empresa possui uma plataforma de IoT executada em um ambiente local. A plataforma consiste em um servidor que se conecta a dispositivos de IoT usando o protocolo MQTT. A plataforma coleta dados de telemetria dos dispositivos pelo menos uma vez a cada 5 minutos. A plataforma também armazena metadados do dispositivo em um cluster MongoDB.\

Um aplicativo instalado em uma máquina local executa tarefas periódicas para agregar e transformar os metadados de telemetria e do dispositivo. O aplicativo cria relatórios que os usuários visualizam usando outro aplicativo web executado na mesma máquina local. As tarefas periódicas levam de 120 a 600 segundos para serem executadas. No entanto, o aplicativo web está sempre em execução.\

A empresa está migrando a plataforma para a AWS e precisa reduzir a sobrecarga operacional da pilha.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha três.)

A. Use as funções do AWS Lambda para se conectar aos dispositivos IoT

B. Configurar os dispositivos IoT para publicar no AWS IoT Core **Mais votado**

C. Grave os metadados em um banco de dados MongoDB autogerenciado em uma instância do Amazon EC2

D. Grave os metadados no Amazon DocumentDB (com compatibilidade com MongoDB) **Mais votado**

E. Use máquinas de estado do AWS Step Functions com tarefas do AWS Lambda para preparar os relatórios e gravá-los no Amazon S3. Use o Amazon CloudFront com uma origem S3 para fornecer os relatórios. **Mais votado**

F. Use um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) com instâncias do Amazon EC2 para preparar os relatórios. Use um controlador de entrada no cluster EKS para fornecer os relatórios.

188- Uma empresa global de manufatura planeja migrar a maioria de seus aplicativos para a AWS. No entanto, a empresa está preocupada com os aplicativos que precisam permanecer em um país específico ou no data center local da empresa devido a requisitos regulatórios de dados ou requisitos de latência de milissegundos de um dígito. A empresa também está preocupada com os aplicativos que hospeda em algumas de suas fábricas, onde a infraestrutura de rede é limitada.\

A empresa deseja uma experiência consistente para o desenvolvedor, para que seus desenvolvedores possam criar aplicativos uma vez e implantá-los localmente, na nuvem ou em uma arquitetura híbrida. Os desenvolvedores devem ser capazes de usar as mesmas ferramentas, APIs e serviços com os quais estão familiarizados.\

Qual solução fornecerá uma experiência híbrida consistente para atender a esses requisitos?

A. Migre todos os aplicativos para a região da AWS mais próxima que esteja em conformidade. Configure uma conexão AWS Direct Connect entre o data center local central e a AWS. Implante um gateway Direct Connect.

B. Use dispositivos otimizados para armazenamento AWS Snowball Edge para aplicações que tenham requisitos regulatórios de dados ou requisitos de latência de milissegundos de um dígito. Mantenha os dispositivos no local. Implante o AWS Wavelength para hospedar as cargas de trabalho nas fábricas.

C. Instale o AWS Outposts para os aplicativos que possuem requisitos regulatórios de dados ou requisitos de latência de milissegundos de um dígito. Use dispositivos AWS Snowball Edge otimizados para computação para hospedar as cargas de trabalho nos locais de fábrica. **Mais votado**

D. Migre os aplicativos que possuem requisitos regulatórios de dados ou requisitos de latência de milissegundos de um dígito para uma Zona Local da AWS. Implante o AWS Wavelength para hospedar as cargas de trabalho nos locais de fábrica.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/19/)

189- Uma empresa está atualizando um aplicativo que os clientes usam para fazer pedidos online. O número de ataques ao aplicativo por criminosos aumentou recentemente.\

A empresa hospedará o aplicativo atualizado em um cluster do Amazon Elastic Container Service (Amazon ECS). A empresa usará o Amazon DynamoDB para armazenar dados do aplicativo. Um Application Load Balancer (ALB) público fornecerá aos usuários finais acesso ao aplicativo. A empresa deve prevenir ataques e garantir a continuidade dos negócios com o mínimo de interrupções de serviço durante um ataque em andamento.\

Qual combinação de etapas atenderá a esses requisitos com a MAIOR relação custo-benefício? (Escolha duas.)

A. Crie uma distribuição do Amazon CloudFront com o ALB como origem. Adicione um cabeçalho personalizado e um valor aleatório no domínio do CloudFront. Configure o ALB para encaminhar o tráfego condicionalmente se o cabeçalho e o valor corresponderem. **Mais votado**

B. Implante o aplicativo em duas regiões da AWS. Configure o Amazon Route 53 para rotear para ambas as regiões com pesos iguais.

C. Configurar o dimensionamento automático para tarefas do Amazon ECS Crie um cluster do DynamoDB Accelerator (DAX).

D. Configure o Amazon ElastiCache para reduzir a sobrecarga no DynamoDB.

E. Implante uma ACL da Web do AWS WAF que inclua um grupo de regras apropriado. Associe a ACL da Web à distribuição do Amazon CloudFront. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/19/)

190- Uma empresa executa uma aplicação web na AWS. A aplicação web entrega conteúdo estático de um bucket do Amazon S3 que está por trás de uma distribuição do Amazon CloudFront. A aplicação fornece conteúdo dinâmico usando um Application Load Balancer (ALB) que distribui solicitações para uma frota de instâncias do Amazon EC2 em grupos de Auto Scaling. A aplicação usa uma configuração de nome de domínio no Amazon Route 53.\

Alguns usuários relataram problemas ocasionais ao tentar acessar o site durante os horários de pico. Uma equipe de operações descobriu que o ALB às vezes retornava erros HTTP 503 "Serviço Indisponível". A empresa deseja exibir uma página de mensagem de erro personalizada quando esses erros ocorrerem. A página deve ser exibida imediatamente para esse código de erro.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Configure uma política de roteamento de failover do Route 53. Configure uma verificação de integridade para determinar o status do endpoint ALB e realizar o failover para o endpoint do bucket S3 de failover.

B. Crie uma segunda distribuição do CloudFront e um site estático do S3 para hospedar a página de erro personalizada. Configure uma política de roteamento de failover do Route 53. Use uma configuração ativa-passiva entre as duas distribuições.

C. Crie um grupo de origem do CloudFront com duas origens. Defina o endpoint ALB como a origem primária. Para a origem secundária, defina um bucket do S3 configurado para hospedar um site estático. Configure o failover de origem para a distribuição do CloudFront. Atualize o site estático do S3 para incorporar a página de erro personalizada. **Mais votado**

D. Crie uma função do CloudFront que valide cada código de resposta HTTP retornado pelo ALB. Crie um site estático do S3 em um bucket do S3. Carregue a página de erro personalizada para o bucket do S3 como um failover. Atualize a função para ler o bucket do S3 e fornecer a página de erro aos usuários finais.

191- Uma empresa está planejando migrar uma aplicação para a AWS. A aplicação é executada como um contêiner Docker e utiliza um compartilhamento de arquivos NFS versão 4.\

Um arquiteto de soluções deve projetar uma solução em contêiner segura e escalável que não exija provisionamento ou gerenciamento da infraestrutura subjacente.\

Qual solução atenderá a esses requisitos?

A. Implante os contêineres de aplicação usando o Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização Fargate. Use o Amazon Elastic File System (Amazon EFS) para armazenamento compartilhado. Consulte o ID do sistema de arquivos EFS, o ponto de montagem do contêiner e a função IAM de autorização EFS na definição da tarefa ECS. **Mais votado**

B. Implante os contêineres de aplicação usando o Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização Fargate. Use o Amazon FSx para Lustre para armazenamento compartilhado. Consulte o ID do sistema de arquivos do FSx para Lustre, o ponto de montagem do contêiner e a função do IAM de autorização do FSx para Lustre na definição da tarefa do ECS.

C. Implante os contêineres de aplicação usando o Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização do Amazon EC2 e o dimensionamento automático ativados. Use o Amazon Elastic File System (Amazon EFS) para armazenamento compartilhado. Monte o sistema de arquivos EFS nas instâncias de contêiner do ECS. Adicione a função IAM de autorização do EFS ao perfil da instância do EC2.

D. Implante os contêineres de aplicação usando o Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização do Amazon EC2 e o dimensionamento automático ativados. Use volumes do Amazon Elastic Block Store (Amazon EBS) com Multi-Attach habilitado para armazenamento compartilhado. Anexe os volumes do EBS a instâncias de contêiner do ECS. Adicione a função IAM de autorização do EBS a um perfil de instância do EC2.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/20/)

192- Uma empresa está executando um aplicativo na Nuvem AWS. A lógica de negócios principal está sendo executada em um conjunto de instâncias do Amazon EC2 em um grupo de Auto Scaling. Um Balanceador de Carga de Aplicativos (ALB) distribui o tráfego para as instâncias do EC2. O registro api.example.com do Amazon Route 53 aponta para o ALB.\

A equipe de desenvolvimento da empresa realiza atualizações importantes na lógica de negócios. A empresa tem uma regra que determina que, quando as alterações são implantadas, apenas 10% dos clientes podem receber a nova lógica durante uma janela de testes. Um cliente deve usar a mesma versão da lógica de negócios durante a janela de testes.\

Como a empresa deve implantar as atualizações para atender a esses requisitos?

A. Crie um segundo ALB e implante a nova lógica em um conjunto de instâncias do EC2 em um novo grupo de Dimensionamento Automático. Configure o ALB para distribuir o tráfego para as instâncias do EC2. Atualize o registro do Route 53 para usar roteamento ponderado e aponte o registro para ambos os ALBs.

B. Crie um segundo grupo-alvo referenciado pelo AL. Implante a nova lógica em instâncias do EC2 neste novo grupo-alvo. Atualize a regra do ouvinte do ALB para usar grupos-alvo ponderados. Configure a persistência do grupo-alvo do ALB. **Mais votado**

C. Crie uma nova configuração de inicialização para o grupo de Dimensionamento Automático. Especifique a configuração de inicialização para usar a política AutoScalingRollingUpdate e defina a opção MaxBatchSize como 10. Substitua a configuração de inicialização no grupo de Dimensionamento Automático. Implante as alterações.

D. Crie um segundo grupo de Auto Scaling referenciado pelo ALB. Implante a nova lógica em um conjunto de instâncias do EC2 nesse novo grupo de Auto Scaling. Altere o algoritmo de roteamento do ALB para solicitações menos pendentes (LOR). Configure a persistência da sessão do ALB.

193- Uma grande empresa de educação introduziu recentemente o Amazon Workspaces para fornecer acesso a aplicativos internos em várias universidades. A empresa está armazenando perfis de usuário em um sistema de arquivos Amazon FSx para Windows File Server. O sistema de arquivos é configurado com um alias DNS e conectado a um Active Directory autogerenciado. À medida que mais usuários começam a usar os Workspaces, o tempo de login aumenta a níveis inaceitáveis.\

Uma investigação revela uma degradação no desempenho do sistema de arquivos. A empresa criou o sistema de arquivos em um HDD com uma taxa de transferência de 16 MBps. Um arquiteto de soluções deve melhorar o desempenho do sistema de arquivos durante uma janela de manutenção definida.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos com o MENOR esforço administrativo?

A. Use o AWS Backup para criar um backup pontual do sistema de arquivos. Restaure o backup para um novo sistema de arquivos do FSx for Windows File Server. Selecione SSD como tipo de armazenamento. Selecione 32 MBps como capacidade de transferência. Após a conclusão do processo de backup e restauração, ajuste o alias de DNS conforme necessário. Exclua o sistema de arquivos original.

B. Desconecte os usuários do sistema de arquivos. No console do Amazon FSx, atualize a capacidade de transferência para 32 MBps. Atualize o tipo de armazenamento para SSD. Reconecte os usuários ao sistema de arquivos. **Mais votado**

C. Implante um agente do AWS DataSync em uma nova instância do Amazon EC2. Crie uma tarefa. Configure o sistema de arquivos existente como o local de origem. Configure um novo sistema de arquivos do FSx for Windows File Server com armazenamento SSD e taxa de transferência de 32 MBps como o local de destino. Agende a tarefa. Quando a tarefa for concluída, ajuste o alias de DNS conforme necessário. Exclua o sistema de arquivos original.

D. Habilite cópias de sombra no sistema de arquivos existente usando um comando do Windows PowerShell. Agende o trabalho de cópia de sombra para criar um backup pontual do sistema de arquivos. Opte por restaurar versões anteriores. Crie um novo sistema de arquivos FSx for Windows File Server com armazenamento SSD e 32 MBps de taxa de transferência. Quando o trabalho de cópia for concluído, ajuste o alias de DNS. Exclua o sistema de arquivos original.

194- Uma empresa hospeda um aplicativo na AWS. O aplicativo lê e grava objetos armazenados em um único bucket do Amazon S3. A empresa precisa modificar o aplicativo para implantá-lo em duas regiões da AWS.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Configure uma distribuição do Amazon CloudFront com o bucket do S3 como origem. Implante o aplicativo em uma segunda região. Modifique o aplicativo para usar a distribuição do CloudFront. Use o AWS Global Accelerator para acessar os dados no bucket do S3.

B. Crie um novo bucket S3 em uma segunda região. Configure a Replicação entre Regiões (CRR) bidirecional do S3 entre o bucket S3 original e o novo bucket S3. Configure um Ponto de Acesso Multirregional S3 que utilize ambos os buckets S3. Implante um aplicativo modificado em ambas as regiões. **Mais votado**

C. Crie um novo bucket S3 em uma segunda região. Implante o aplicativo na segunda região. Configure o aplicativo para usar o novo bucket S3. Configure a Replicação entre Regiões (CRR) do bucket S3 original para o novo bucket S3.

D. Configure um endpoint de gateway S3 com o bucket S3 como origem. Implante o aplicativo em uma segunda região. Modifique o aplicativo para usar o novo endpoint de gateway S3. Use o S3 Intelligent-Tiering no bucket S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/20/)

195- Uma empresa de jogos online precisa re-hospedar sua plataforma de jogos na AWS. O aplicativo de jogos da empresa requer processamento de computação de alto desempenho (HPC) e possui uma tabela de classificação que muda frequentemente. Uma instância do Ubuntu otimizada para geração de computação hospeda um aplicativo Node.js para exibição de jogos. O estado do jogo é rastreado em uma instância Redis local.\

A empresa precisa de uma estratégia de migração que otimize o desempenho do aplicativo.\

Qual solução atenderá a esses requisitos?

A. Crie um grupo de Auto Scaling de Instâncias Spot m5.large do Amazon EC2 atrás de um Application Load Balancer. Use um cluster do Amazon ElastlCache para Redis para manter a classificação.

B. Crie um grupo de Auto Scaling de Instâncias Spot c5.large do Amazon EC2 atrás de um Application Load Balancer. Use um cluster do Amazon OpenSearch Service para manter a classificação.

C. Crie um grupo de Auto Scaling de instâncias c5.large do Amazon EC2 On-Demand atrás de um Application Load Balancer. Use um cluster do Amazon ElastiCache para Redis para manter a classificação. **Mais votado**

D. Crie um grupo de Auto Scaling de instâncias m5.large do Amazon EC2 On-Demand por trás de um Application Load Balancer. Use uma tabela do Amazon DynamoDB para manter a tabela de classificação.

196- Um arquiteto de soluções está projetando um aplicativo para aceitar entradas de planilhas de ponto de funcionários em seus dispositivos móveis. As planilhas de ponto serão enviadas semanalmente, com a maioria das entregas ocorrendo às sextas-feiras. Os dados devem ser armazenados em um formato que permita aos administradores de folha de pagamento gerar relatórios mensais. A infraestrutura deve ter alta disponibilidade e escalabilidade para corresponder à taxa de entrada de dados e solicitações de relatórios.\

Qual combinação de etapas atende a esses requisitos, minimizando a sobrecarga operacional? (Escolha duas.)

A. Implante o aplicativo em instâncias sob demanda do Amazon EC2 com balanceamento de carga em várias zonas de disponibilidade. Use o Amazon EC2 Auto Scaling agendado para adicionar capacidade antes do alto volume de envios às sextas-feiras.

B. Implante o aplicativo em um contêiner usando o Amazon Elastic Container Service (Amazon ECS) com balanceamento de carga em várias Zonas de Disponibilidade. Use o Service\
Auto Scaling agendado para adicionar capacidade antes do alto volume de envios às sextas-feiras.

C. Implante o front-end do aplicativo em um bucket do Amazon S3 atendido pelo Amazon CloudFront. Implante o back-end do aplicativo usando o Amazon API Gateway com uma integração de proxy do AWS Lambda. **Mais votado**

D. Armazene os dados de envio do quadro de horários no Amazon Redshift. Use o Amazon QuickSight para gerar os relatórios usando o Amazon Redshift como fonte de dados.

E. Armazene os dados de envio do quadro de horários no Amazon S3. Use o Amazon Athena e o Amazon QuickSight para gerar os relatórios usando o Amazon S3 como fonte de dados. **Mais votado**

197- Uma empresa está armazenando dados confidenciais em um bucket do Amazon S3. A empresa deve registrar todas as atividades de objetos no bucket do S3 e manter os registros por 5 anos. A equipe de segurança da empresa também deve receber uma notificação por e-mail sempre que houver uma tentativa de exclusão de dados no bucket do S3.\

Qual combinação de etapas atenderá a esses requisitos com a MAIOR relação custo-benefício? (Escolha três.)

A. Configure o AWS CloudTrail para registrar eventos de dados do S3. **Mais votado**

B. Configure o registro de acesso do servidor S3 para o bucket S3.

C. Configure o Amazon S3 para enviar eventos de exclusão de objetos ao Amazon Simple Email Service (Amazon SES).

D. Configure o Amazon S3 para enviar eventos de exclusão de objetos para um barramento de eventos do Amazon EventBridge que publica em um tópico do Amazon Simple Notification Service (Amazon SNS). **Mais votado**

E. Configure o Amazon S3 para enviar os logs para o Amazon Timestream com níveis de armazenamento de dados.

F. Configure um novo bucket S3 para armazenar os logs com uma política de ciclo de vida S3. **Mais votado**

198- Uma empresa está construindo um ambiente híbrido que inclui servidores em um data center local e na Nuvem AWS. A empresa implantou instâncias do Amazon EC2 em três VPCs. Cada VPC está em uma região diferente da AWS. A empresa estabeleceu uma conexão AWS Direct Connect com o data center a partir da região mais próxima do data center.\

A empresa precisa que os servidores no data center local tenham acesso às instâncias do EC2 em todas as três VPCs. Os servidores no data center local também devem ter acesso aos serviços públicos da AWS.\

Qual combinação de etapas atenderá a esses requisitos com o MENOR custo? (Escolha duas.)

A. Crie um gateway Direct Connect na região mais próxima do data center. Conecte a conexão Direct Connect ao gateway Direct Connect. Use o gateway Direct Connect para conectar as VPCs nas outras duas regiões. **Mais votado**

B. Configure conexões Direct Connect adicionais do data center local para as outras duas regiões.

C. Crie uma VIF privada. Estabeleça uma conexão VPN Site-to-Site da AWS através da VIF privada com as VPCs nas outras duas regiões.

D. Crie uma VIF pública. Estabeleça uma conexão VPN Site-to-Site da AWS através da VIF pública com as VPCs nas outras duas regiões. **Mais votado**

E. Use o peering de VPC para estabelecer uma conexão entre as VPCs nas regiões. Crie um VIF privado com a conexão Direct Connect existente para se conectar às VPCs peering.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/20/)

199- Uma empresa está usando uma organização no AWS Organizations para gerenciar centenas de contas da AWS. Um arquiteto de soluções está trabalhando em uma solução para fornecer proteção básica para as 10 principais vulnerabilidades de aplicativos web do Open Web Application Security Project (OWASP). O arquiteto de soluções está usando o AWS WAF para todas as distribuições existentes e novas do Amazon CloudFront implantadas na organização.\

Qual combinação de etapas o arquiteto de soluções deve adotar para fornecer a proteção básica? (Escolha três.)

A. Habilite o AWS Config em todas as contas **Mais votado**

B. Habilite o Amazon GuardDuty em todas as contas

C. Habilitar todos os recursos para a organização **Mais votado**

D. Use o AWS Firewall Manager para implantar regras do AWS WAF em todas as contas de todas as distribuições do CloudFront **Mais votado**

E. Use o AWS Shield Advanced para implantar regras do AWS WAF em todas as contas de todas as distribuições do CloudFront

F. Use o AWS Security Hub para implantar regras do AWS WAF em todas as contas de todas as distribuições do CloudFront

200- Um arquiteto de soluções implementou uma solução de identidade federada SAML 2.0 com o provedor de identidade (IdP) local da sua empresa para autenticar o acesso dos usuários ao ambiente da AWS. Quando o arquiteto de soluções testa a autenticação por meio do portal web de identidade federada, o acesso ao ambiente da AWS é concedido. No entanto, quando os usuários de teste tentam se autenticar por meio do portal web de identidade federada, eles não conseguem acessar o ambiente da AWS.\

Quais itens o arquiteto de soluções deve verificar para garantir que a federação de identidades esteja configurada corretamente? (Escolha três.)

A. A política de permissões do usuário do IAM permitiu o uso da federação SAML para esse usuário.

B. As funções do IAM criadas para a política de confiança de usuários federados ou grupos federados definiram o provedor SAML como principal.\
B. Os usuários de teste não estão no grupo AWSFederatedUsers no IdP da empresa. **Mais votado**

C. O portal da Web chama a API AssumeRoleWithSAML do AWS STS com o ARN do provedor SAML, o ARN da função do IAM e a asserção SAML do IdP. **Mais votado**

D. O nome do host DNS do IdP local pode ser acessado a partir das VPCs do ambiente da AWS.

E. O IdP da empresa define asserções SAML que mapeiam corretamente usuários ou grupos na empresa para funções do IAM com as permissões apropriadas. **Mais votado**

201- Um arquiteto de soluções precisa aprimorar um aplicativo hospedado na Nuvem AWS. O aplicativo utiliza uma instância de banco de dados MySQL do Amazon Aurora que está apresentando sobrecarga de conexões. A maioria das operações do aplicativo insere registros no banco de dados. Atualmente, o aplicativo armazena credenciais em um arquivo de configuração baseado em texto.\

O arquiteto de soluções precisa implementar uma solução para que o aplicativo possa lidar com a carga de conexão atual. A solução deve manter as credenciais seguras e fornecer a capacidade de rotacioná-las automaticamente e regularmente.\

Qual solução atenderá a esses requisitos?

A. Implante uma camada de proxy do Amazon RDS. Na frente da instância do banco de dados. Armazene as credenciais de conexão como um segredo no AWS Secrets Manager. **Mais votado**

B. Implante uma camada de proxy do Amazon RDS na frente da instância do banco de dados. Armazene as credenciais de conexão no repositório de parâmetros do AWS Systems Manager.

C. Crie uma réplica do Aurora. Armazene as credenciais de conexão como um segredo no AWS Secrets Manager.

D. Crie uma réplica do Aurora. Armazene as credenciais de conexão no AWS Systems Manager Parameter Store.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/21/)

202- Uma empresa precisa desenvolver uma solução de recuperação de desastres (DR) para seu site de e-commerce. A aplicação web está hospedada em uma frota de instâncias t3.large do Amazon EC2 e utiliza uma instância do Amazon RDS para banco de dados MySQL. As instâncias do EC2 estão em um grupo de Auto Scaling que se estende por várias Zonas de Disponibilidade.\

Em caso de desastre, a aplicação web deve realizar failover para o ambiente secundário com um RPO de 30 segundos e um RTO de 10 minutos.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Use a infraestrutura como código (IaC) para provisionar a nova infraestrutura na região de DR. Crie uma réplica de leitura entre regiões para a instância de banco de dados. Configure um plano de backup no AWS Backup para criar backups entre regiões para as instâncias do EC2 e a instância de banco de dados. Crie uma expressão cron para fazer backup das instâncias do EC2 e da instância de banco de dados a cada 30 segundos para a região de DR. Recupere as instâncias do EC2 a partir do backup mais recente do EC2. Use uma política de roteamento de geolocalização do Amazon Route 53 para fazer failover automático para a região de DR em caso de desastre.

B. Use a infraestrutura como código (IaC) para provisionar a nova infraestrutura na região de DR. Crie uma réplica de leitura entre regiões para a instância de banco de dados. Configure o AWS Elastic Disaster Recovery para replicar continuamente as instâncias do EC2 para a região de DR. Execute as instâncias do EC2 na capacidade mínima na região de DR. Use uma política de roteamento de failover do Amazon Route 53 para realizar o failover automaticamente para a região de DR em caso de desastre. Aumente a capacidade desejada do grupo de Auto Scaling. **Mais votado**

C. Configure um plano de backup no AWS Backup para criar backups entre regiões para as instâncias do EC2 e a instância do banco de dados. Crie uma expressão cron para fazer backup das instâncias do EC2 e da instância do banco de dados a cada 30 segundos para a região de recuperação de desastres. Use a infraestrutura como código (IaC) para provisionar a nova infraestrutura na região de recuperação de desastres. Restaure manualmente os dados de backup em novas instâncias. Use uma política de roteamento simples do Amazon Route 53 para fazer failover automático para a região de recuperação de desastres em caso de desastre.

D. Use a infraestrutura como código (IaC) para provisionar a nova infraestrutura na região de DR. Crie um banco de dados global do Amazon Aurora. Configure o AWS Elastic Disaster Recovery para replicar continuamente as instâncias do EC2 para a região de DR. Execute o grupo de Auto Scaling de instâncias do EC2 em capacidade máxima na região de DR. Use uma política de roteamento de failover do Amazon Route 53 para realizar o failover automático para a região de DR em caso de desastre.

203- Uma empresa está planejando uma migração única de um banco de dados MySQL local para o Amazon Aurora MySQL na região us-east-1. A conexão de internet atual da empresa tem largura de banda limitada. O banco de dados MySQL local tem 60 TB de tamanho. A empresa estima que levará um mês para transferir os dados para a AWS pela conexão de internet atual. A empresa precisa de uma solução de migração que migre o banco de dados mais rapidamente.\

Qual solução migrará o banco de dados no MENOR tempo?

A. Solicite uma conexão AWS Direct Connect de 1 Gbps entre o data center local e a AWS. Use o AWS Database Migration Service (AWS DMS) para migrar o banco de dados MySQL local para o Aurora MySQL.

B. Use o AWS DataSync com a conexão de internet atual para acelerar a transferência de dados entre o data center local e a AWS. Use o AWS Application Migration Service para migrar o banco de dados MySQL local para o Aurora MySQL.

C. Encomende um dispositivo AWS Snowball Edge. Carregue os dados em um bucket do Amazon S3 usando a interface do S3. Use o AWS Database Migration Service (AWS DMS) para migrar os dados do Amazon S3 para o Aurora MySQL. **Mais votado**

D. Solicite um dispositivo AWS Snowball. Carregue os dados em um bucket do Amazon S3 usando o Adaptador S3 para Snowball. Use o AWS Application Migration Service para migrar os dados do Amazon S3 para o Aurora MySQL.

204- Uma empresa possui um aplicativo na Nuvem AWS. O aplicativo é executado em uma frota de 20 instâncias do Amazon EC2. As instâncias do EC2 são persistentes e armazenam dados em vários volumes do Amazon Elastic Block Store (Amazon EBS) anexados.\

A empresa deve manter backups em uma região separada da AWS. A empresa deve ser capaz de recuperar as instâncias do EC2 e suas configurações em até 1 dia útil, com perda de dados equivalente a, no máximo, 1 dia. A empresa possui equipe limitada e precisa de uma solução de backup que otimize a eficiência operacional e os custos. A empresa já criou um modelo do AWS CloudFormation que pode implantar a configuração de rede necessária em uma região secundária.\

Qual solução atenderá a esses requisitos?

A. Crie um segundo modelo do CloudFormation que possa recriar as instâncias do EC2 na região secundária. Execute snapshots diários de vários volumes usando os runbooks do AWS Systems Manager Automation. Copie os snapshots para a região secundária. Em caso de falha, inicie os modelos do CloudFormation, restaure os volumes do EBS a partir dos snapshots e transfira o uso para a região secundária.

B. Use o Amazon Data Lifecycle Manager (Amazon DLM) para criar snapshots diários de vários volumes dos volumes do EBS. Em caso de falha, inicie o modelo do CloudFormation e use o Amazon DLM para restaurar os volumes do EBS e transferir o uso para a região secundária.

C. Use o AWS Backup para criar um plano de backup diário agendado para as instâncias do EC2. Configure a tarefa de backup para copiar os backups para um cofre na região secundária. Em caso de falha, inicie o modelo do CloudFormation, restaure os volumes e as configurações da instância do cofre de backup e transfira o uso para a região secundária. **Mais votado**

D. Implante instâncias do EC2 do mesmo tamanho e configuração na região secundária. Configure o AWS DataSync diariamente para copiar dados da região primária para a região secundária. Em caso de falha, inicie o modelo do CloudFormation e transfira o uso para a região secundária.

205- Uma empresa está projetando um novo site que hospeda conteúdo estático. O site oferecerá aos usuários a capacidade de carregar e baixar arquivos grandes. De acordo com os requisitos da empresa, todos os dados devem ser criptografados em trânsito e em repouso. Um arquiteto de soluções está construindo a solução usando o Amazon S3 e o Amazon CloudFront.\

Qual combinação de etapas atenderá aos requisitos de criptografia? (Escolha três.)

A. Ative a criptografia do lado do servidor S3 para o bucket S3 que o aplicativo web usa. **Mais votado**

B. Adicione um atributo de política de "aws:SecureTransport": "true" para operações de leitura e gravação nas ACLs do S3.

C. Crie uma política de bucket que negue qualquer operação não criptografada no bucket S3 que o aplicativo web usa. **Mais votado**

D. Configure a criptografia em repouso no CloudFront usando a criptografia do lado do servidor com chaves do AWS KMS (SSE-KMS).

E. Configure o redirecionamento de solicitações HTTP para solicitações HTTPS no CloudFront. **Mais votado**

F. Use a opção RequireSSL na criação de URLs pré-assinadas para o bucket S3 que o aplicativo web usa.

206- Uma empresa está implementando uma arquitetura sem servidor usando funções do AWS Lambda que precisam acessar uma instância de banco de dados do Microsoft SQL Server no Amazon RDS. A empresa possui ambientes separados para desenvolvimento e produção, incluindo um clone do sistema de banco de dados.\

Os desenvolvedores da empresa têm permissão para acessar as credenciais do banco de dados de desenvolvimento. No entanto, as credenciais do banco de dados de produção devem ser criptografadas com uma chave que somente os membros do grupo de usuários do IAM da equipe de segurança de TI possam acessar. Essa chave deve ser rotacionada regularmente.\

O que um arquiteto de soluções deve fazer no ambiente de produção para atender a esses requisitos?

A. Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store usando um parâmetro SecureString criptografado por uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Atribua uma função a cada função do Lambda para fornecer acesso ao parâmetro SecureString. Restrinja o acesso ao parâmetro SecureString e à chave gerenciada pelo cliente para que apenas a equipe de segurança de TI possa acessar o parâmetro e a chave.

B. Criptografe as credenciais do banco de dados usando a chave Lambda padrão do AWS Key Management Service (AWS KMS). Armazene as credenciais nas variáveis de ambiente de cada função Lambda. Carregue as credenciais das variáveis de ambiente no código Lambda. Restrinja o acesso à chave KMS para que apenas a equipe de segurança de TI possa acessá-la.

C. Armazene as credenciais do banco de dados nas variáveis de ambiente de cada função do Lambda. Criptografe as variáveis de ambiente usando uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Restrinja o acesso à chave gerenciada pelo cliente para que apenas a equipe de segurança de TI possa acessá-la.

D. Armazene as credenciais do banco de dados no AWS Secrets Manager como um segredo associado a uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Atribua uma função a cada função do Lambda para fornecer acesso ao segredo. Restrinja o acesso ao segredo e à chave gerenciada pelo cliente para que apenas a equipe de segurança de TI possa acessar o segredo e a chave. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/21/)

207- Uma empresa de varejo online está migrando seu aplicativo .NET local legado para a AWS. O aplicativo é executado em servidores web front-end com balanceamento de carga, servidores de aplicativos com balanceamento de carga e um banco de dados Microsoft SQL Server.\

A empresa deseja usar os serviços gerenciados da AWS sempre que possível e não deseja reescrever o aplicativo. Um arquiteto de soluções precisa implementar uma solução para resolver problemas de escalabilidade e minimizar os custos de licenciamento à medida que o aplicativo escala.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Implante instâncias do Amazon EC2 em um grupo de Auto Scaling atrás de um Application Load Balancer para as camadas web e de aplicação. Use o Amazon Aurora PostgreSQL com o Babelfish ativado para reestruturar o banco de dados SQL Server. **Mais votado**

B. Crie imagens de todos os servidores usando o AWS Database Migration Service (AWS DMS). Implante instâncias do Amazon EC2 baseadas nas importações locais. Implante as instâncias em um grupo de Auto Scaling atrás de um Balanceador de Carga de Rede para a camada da Web e para a camada de aplicação. Use o Amazon DynamoDB como camada do banco de dados.

C. Conteinerize a camada de front-end web e a camada de aplicação. Provisione um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). Crie um grupo de Auto Scaling por trás de um Balanceador de Carga de Rede para a camada web e a camada de aplicação. Use o Amazon RDS para SQL Server para hospedar o banco de dados.

D. Separe as funções do aplicativo em funções do AWS Lambda. Use o Amazon API Gateway para a camada de front-end web e a camada de aplicativo. Migre os dados para o Amazon S3. Use o Amazon Athena para consultar os dados.

208- Um provedor de software como serviço (SaaS) expõe APIs por meio de um Application Load Balancer (ALB). O ALB se conecta a um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) implantado na região us-east-1. As APIs expostas contêm o uso de alguns métodos REST não padrão: LINK, UNLINK, LOCK e UNLOCK.\

Usuários fora dos Estados Unidos estão relatando tempos de resposta longos e inconsistentes para essas APIs. Um arquiteto de soluções precisa resolver esse problema com uma solução que minimize a sobrecarga operacional.\

Qual solução atende a esses requisitos?

A. Adicione uma distribuição do Amazon CloudFront. Configure o ALB como origem.

B. Adicione um endpoint de API otimizado para borda do Amazon API Gateway para expor as APIs. Configure o ALB como destino.

C. Adicione um acelerador no AWS Global Accelerator. Configure o ALB como origem. **Mais votado**

D. Implante as APIs em duas regiões adicionais da AWS: eu-west-1 e ap-southeast-2. Adicione registros de roteamento baseados em latência no Amazon Route 53.

209- Uma empresa executa uma aplicação de IoT na Nuvem AWS. A empresa possui milhões de sensores que coletam dados de residências nos Estados Unidos. Os sensores usam o protocolo MQTT para se conectar e enviar dados a um broker MQTT personalizado. O broker MQTT armazena os dados em uma única instância do Amazon EC2. Os sensores se conectam ao broker por meio do domínio iot.example.com. A empresa usa o Amazon Route 53 como seu serviço de DNS. A empresa armazena os dados no Amazon DynamoDB.\

Em diversas ocasiões, a quantidade de dados sobrecarregou o broker MQTT e resultou na perda de dados dos sensores. A empresa precisa aprimorar a confiabilidade da solução.\

Qual solução atenderá a esses requisitos?

A. Crie um Application Load Balancer (ALB) e um grupo de Auto Scaling para o broker MQTT. Use o grupo de Auto Scaling como destino para o ALB. Atualize o registro DNS no Route 53 para um registro de alias. Aponte o registro de alias para o ALB. Use o broker MQTT para armazenar os dados.

B. Configure o AWS IoT Core para receber os dados do sensor. Crie e configure um domínio personalizado para se conectar ao AWS IoT Core. Atualize o registro DNS no Route 53 para apontar para o endpoint AWS IoT Core Data-ATS. Configure uma regra do AWS IoT para armazenar os dados. **Mais votado**

C. Crie um Balanceador de Carga de Rede (NLB). Defina o broker MQTT como alvo. Crie um acelerador AWS Global Accelerator. Defina o NLB como endpoint para o acelerador. Atualize o registro DNS no Route 53 para um registro de resposta multivalor. Defina os endereços IP do Global Accelerator como valores. Use o broker MQTT para armazenar os dados.

D. Configure o AWS IoT Greengrass para receber os dados do sensor. Atualize o registro DNS no Route 53 para apontar para o endpoint do AWS IoT Greengrass. Configure uma regra do AWS IoT para invocar uma função do AWS Lambda para armazenar os dados.

210- Uma empresa possui instâncias do Amazon EC2 baseadas em Linux. Os usuários devem acessar as instâncias via SSH com pares de chaves SSH do EC2. Cada máquina requer um par de chaves EC2 exclusivo.\

A empresa deseja implementar uma política de rotação de chaves que, mediante solicitação, rotacione automaticamente todos os pares de chaves EC2 e mantenha as chaves em um local criptografado e seguro. A empresa aceitará menos de 1 minuto de inatividade durante a rotação de chaves.\

Qual solução atenderá a esses requisitos?

A. Armazene todas as chaves no AWS Secrets Manager. Defina um cronograma de rotação do Secrets Manager para invocar uma função do AWS Lambda e gerar novos pares de chaves. Substitua as chaves públicas em instâncias do EC2. Atualize as chaves privadas no Secrets Manager. **Mais votado**

B. Armazene todas as chaves no Parameter Store, um recurso do AWS Systems Manager, como uma string. Defina uma janela de manutenção do Systems Manager para invocar uma função do AWS Lambda e gerar novos pares de chaves. Substitua as chaves públicas em instâncias do EC2. Atualize as chaves privadas no Parameter Store.

C. Importe os pares de chaves do EC2 para o AWS Key Management Service (AWS KMS). Configure a rotação automática de chaves para esses pares. Crie uma regra agendada do Amazon EventBridge para invocar uma função do AWS Lambda e iniciar a rotação de chaves no AWS KMS.

D. Adicione todas as instâncias do EC2 ao Fleet Manager, um recurso do AWS Systems Manager. Defina uma janela de manutenção do Systems Manager para emitir um documento de Comando de Execução do Systems Manager para gerar novos pares de chaves e rotacionar chaves públicas para todas as instâncias no Fleet Manager.

211- Uma empresa deseja migrar para a AWS. A empresa executa milhares de VMs em um ambiente VMware ESXi. A empresa não possui um banco de dados de gerenciamento de configuração e tem pouco conhecimento sobre a utilização do portfólio VMware.\

Um arquiteto de soluções deve fornecer à empresa um inventário preciso para que ela possa planejar uma migração com boa relação custo-benefício.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Use o AWS Systems Manager Patch Manager para implantar o Migration Evaluator em cada VM. Revise os dados coletados no Amazon QuickSight. Identifique os servidores com alta utilização. Remova os servidores com alta utilização da lista de migração. Importe os dados para o AWS Migration Hub.

B. Exporte o portfólio VMware para um arquivo .csv. Verifique a utilização do disco de cada servidor. Remova os servidores com alta utilização. Exporte os dados para o AWS Application Migration Service. Use o AWS Server Migration Service (AWS SMS) para migrar os servidores restantes.

C. Implante o coletor sem agente do Migration Evaluator no hipervisor ESXi. Revise os dados coletados no Migration Evaluator. Identifique os servidores inativos. Remova os servidores inativos da lista de migração. Importe os dados para o AWS Migration Hub. **Mais votado**

D. Implante o Agente do Serviço de Migração de Aplicativos da AWS em cada VM. Após a coleta dos dados, use o Amazon Redshift para importá-los e analisá-los. Use o Amazon QuickSight para visualização de dados.

212- Uma empresa executa um microsserviço como uma função do AWS Lambda. O microsserviço grava dados em um banco de dados SQL local que suporta um número limitado de conexões simultâneas. Quando o número de invocações da função Lambda é muito alto, o banco de dados trava e causa indisponibilidade do aplicativo. A empresa possui uma conexão AWS Direct Connect entre a VPC da empresa e o data center local. A empresa deseja proteger o banco de dados contra falhas.\

Qual solução atenderá a esses requisitos?

A. Grave os dados em uma fila do Amazon Simple Queue Service (Amazon SQS). Configure a função Lambda para ler da fila e gravar no banco de dados existente. Defina um limite de simultaneidade reservado para a função Lambda que seja menor que o número de conexões suportadas pelo banco de dados. **Mais votado**

B. Crie um novo cluster de banco de dados Amazon Aurora Serverless. Use o AWS DataSync para migrar os dados do banco de dados existente para o Aurora Serverless. Reconfigure a função Lambda para gravar no Aurora.

C. Crie uma instância de banco de dados do Amazon RDS Proxy. Anexe a instância de banco de dados do RDS Proxy à instância de banco de dados do Amazon RDS. Reconfigure a função Lambda para gravar na instância de banco de dados do RDS Proxy.

D. Grave os dados em um tópico do Amazon Simple Notification Service (Amazon SNS). Invoque a função Lambda para gravar no banco de dados existente quando o tópico receber novas mensagens. Configure a simultaneidade provisionada para a função Lambda para que seja igual ao número de conexões que o banco de dados suporta.

213- Uma empresa utiliza uma solução de visualização de dados Grafana executada em uma única instância do Amazon EC2 para monitorar a integridade das cargas de trabalho da AWS. A empresa investiu tempo e esforço na criação de painéis que deseja preservar. Os painéis precisam ter alta disponibilidade e não podem ficar inativos por mais de 10 minutos. A empresa precisa minimizar a manutenção contínua.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Migre para os painéis do Amazon CloudWatch. Recrie os painéis para corresponder aos painéis existentes do Grafana. Use painéis automáticos sempre que possível.

B. Crie um espaço de trabalho do Amazon Managed Grafana. Configure uma nova fonte de dados do Amazon CloudWatch. Exporte os painéis da instância existente do Grafana. Importe os painéis para o novo espaço de trabalho. **Mais votado**

C. Crie uma AMI com o Grafana pré-instalado. Armazene os painéis existentes no Amazon Elastic File System (Amazon EFS). Crie um grupo de Auto Scaling que utilize a nova AMI. Defina o número mínimo, desejado e máximo de instâncias do grupo de Auto Scaling como um. Crie um Application Load Balancer que atenda a pelo menos duas Zonas de Disponibilidade.

D. Configure o AWS Backup para fazer backup da instância do EC2 que executa o Grafana uma vez a cada hora. Restaure a instância do EC2 a partir do snapshot mais recente em uma Zona de Disponibilidade alternativa, quando necessário.

214- Uma empresa precisa migrar seu banco de dados de transações de clientes de suas instalações locais para a AWS. O banco de dados reside em uma instância Oracle DB executada em um servidor Linux. De acordo com um novo requisito de segurança, a empresa deve rotacionar a senha do banco de dados anualmente.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Converta o banco de dados para o Amazon DynamoDB usando a AWS Schema Conversion Tool (AWS SCT). Armazene a senha no AWS Systems Manager Parameter Store. Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda para rotação anual de senhas.

B. Migre o banco de dados para o Amazon RDS para Oracle. Armazene a senha no AWS Secrets Manager. Ative a rotação automática. Configure um cronograma de rotação anual. **Mais votado**

C. Migre o banco de dados para uma instância do Amazon EC2. Use o AWS Systems Manager Parameter Store para manter e rotacionar a string de conexão usando uma função do AWS Lambda anualmente.

D. Migre o banco de dados para o Amazon Neptune usando a AWS Schema Conversion Tool (AWS SCT). Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda para rotação anual de senhas.

215- Um arquiteto de soluções está projetando uma estrutura de conta na AWS para uma empresa composta por várias equipes. Todas as equipes trabalharão na mesma região da AWS. A empresa precisa de uma VPC conectada à rede local. A empresa espera menos de 50 Mbps de tráfego total de e para a rede local.\

Qual combinação de etapas atenderá a esses requisitos com a MELHOR relação custo-benefício? (Escolha duas.)

A. Crie um modelo do AWS CloudFormation que provisione uma VPC e as sub-redes necessárias. Implante o modelo em cada conta da AWS.

B. Crie um modelo do AWS CloudFormation que provisione uma VPC e as sub-redes necessárias. Implante o modelo em uma conta de serviços compartilhados. Compartilhe as sub-redes usando o AWS Resource Access Manager. **Mais votado**

C. Use o AWS Transit Gateway juntamente com uma VPN Site-to-Site da AWS para conectividade com a rede local. Compartilhe o gateway de trânsito usando o AWS Resource Access Manager.

D. Use o AWS Site-to-Site VPN para conectividade com a rede local. **Mais votado**

E. Use o AWS Direct Connect para conectividade com a rede local.

216- Um arquiteto de soluções em uma grande empresa precisa configurar a segurança de rede para o tráfego de saída para a internet de todas as contas da AWS dentro de uma organização no AWS Organizations. A organização possui mais de 100 contas da AWS, e as contas são roteadas entre si usando um AWS Transit Gateway centralizado. Cada conta possui um gateway de internet e um gateway NAT para o tráfego de saída para a internet. A empresa implanta recursos apenas em uma única região da AWS.\

A empresa precisa ter a capacidade de adicionar filtragem baseada em regras gerenciadas centralmente em todo o tráfego de saída para a internet para todas as contas da AWS na organização. O pico de carga do tráfego de saída não excederá 25 Gbps em cada Zona de Disponibilidade.\

Qual solução atende a esses requisitos?

A. Crie uma nova VPC para o tráfego de saída para a internet. Conecte o gateway de trânsito existente à nova VPC. Configure um novo gateway NAT. Crie um grupo de Auto Scaling de instâncias do Amazon EC2 que executem um proxy de internet de código aberto para filtragem baseada em regras em todas as Zonas de Disponibilidade da Região. Modifique todas as rotas padrão para que apontem para o grupo de Auto Scaling do proxy.

B. Crie uma nova VPC para o tráfego de saída para a internet. Conecte o gateway de trânsito existente à nova VPC. Configure um novo gateway NAT. Use um firewall do AWS Network Firewall para filtragem baseada em regras. Crie endpoints do Network Firewall em cada Zona de Disponibilidade. Modifique todas as rotas padrão para que apontem para os endpoints do Network Firewall. **Mais votado**

C. Crie um firewall do Firewall de Rede da AWS para filtragem baseada em regras em cada conta da AWS. Modifique todas as rotas padrão para que apontem para os firewalls do Firewall de Rede em cada conta.

D. Em cada conta da AWS, crie um grupo de Auto Scaling de instâncias do Amazon EC2 otimizadas para rede que executem um proxy de internet de código aberto para filtragem baseada em regras. Modifique todas as rotas padrão para que apontem para o grupo de Auto Scaling do proxy.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/22/)

217- Uma empresa utiliza um balanceador de carga para distribuir tráfego para instâncias do Amazon EC2 em uma única Zona de Disponibilidade. A empresa está preocupada com a segurança e deseja que um arquiteto de soluções reestruture a solução para atender aos seguintes requisitos:\

• As solicitações de entrada devem ser filtradas para detectar ataques de vulnerabilidade comuns.\
• As solicitações rejeitadas devem ser enviadas para um aplicativo de auditoria de terceiros.\
• Todos os recursos devem ter alta disponibilidade.\

Qual solução atende a esses requisitos?

A. Configure um grupo de Auto Scaling Multi-AZ usando a AMI do aplicativo. Crie um Application Load Balancer (ALB) e selecione o grupo de Auto Scaling criado anteriormente como destino. Use o Amazon Inspector para monitorar o tráfego para as instâncias do ALB e do EC2. Crie uma ACL da Web no WAF. Crie um AWS WAF usando a ACL da Web e o ALB. Use uma função do AWS Lambda para enviar com frequência o relatório do Amazon Inspector para o aplicativo de auditoria de terceiros.

B. Configure um Application Load Balancer (ALB) e adicione as instâncias do EC2 como alvos. Crie uma ACL da Web no WAF. Crie um AWS WAF usando a ACL da Web e o nome da ALB e habilite o registro em log com o Amazon CloudWatch Logs. Use uma função do AWS Lambda para enviar os logs com frequência para o aplicativo de auditoria de terceiros.

C. Configure um Application Load Balancer (ALB) juntamente com um grupo de destino, adicionando as instâncias do EC2 como alvos. Crie um Amazon Kinesis Data Firehose com o destino do aplicativo de auditoria de terceiros. Crie uma ACL da Web no WAF. Crie um AWS WAF usando a ACL da Web e o ALB e habilite o registro em log selecionando o Kinesis Data Firehose como destino. Assine as Regras Gerenciadas da AWS no AWS Marketplace, escolhendo o WAF como assinante.

D. Configure um grupo de Auto Scaling Multi-AZ usando a AMI do aplicativo. Crie um Application Load Balancer (ALB) e selecione o grupo de Auto Scaling criado anteriormente como destino. Crie um Amazon Kinesis Data Firehose com o aplicativo de auditoria de terceiros como destino. Crie uma ACL da Web no WAF. Crie um AWS WAF usando a ACL da Web e a ALB e habilite o registro em log selecionando o Kinesis Data Firehose como destino. Assine as Regras Gerenciadas da AWS no AWS Marketplace, escolhendo o WAF como assinante. **Mais votado**

218- Uma empresa está executando uma aplicação na Nuvem AWS. A aplicação consiste em microsserviços executados em uma frota de instâncias do Amazon EC2 em várias Zonas de Disponibilidade, atrás de um Balanceador de Carga de Aplicação. A empresa adicionou recentemente uma nova API REST que foi implementada no Amazon API Gateway. Alguns dos microsserviços mais antigos executados em instâncias do EC2 precisam chamar essa nova API.\

A empresa não deseja que a API seja acessível pela internet pública e não deseja que dados proprietários trafeguem pela internet pública.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma conexão VPN Site-to-Site da AWS entre a VPC e o API Gateway. Use o API Gateway para gerar uma chave de API exclusiva para cada microsserviço. Configure os métodos da API para exigir a chave.

B. Crie um endpoint de interface da VPC para o API Gateway e defina uma política de endpoint para permitir acesso apenas à API específica. Adicione uma política de recursos ao API Gateway para permitir acesso apenas a partir do endpoint da VPC. Altere o tipo de endpoint do API Gateway para privado. **Mais votado**

C. Modifique o API Gateway para usar a autenticação do IAM. Atualize a política do IAM para a função do IAM atribuída às instâncias do EC2 para permitir o acesso ao API Gateway. Mova o API Gateway para uma nova VP. Implante um gateway de trânsito e conecte as VPCs.

D. Crie um acelerador no AWS Global Accelerator e conecte-o ao API Gateway. Atualize a tabela de rotas para todas as sub-redes da VPC com uma rota para o endereço IP do endpoint do Global Accelerator criado. Adicione uma chave de API para cada serviço a ser usada para autenticação.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/22/)

219- Uma empresa configurou toda a sua infraestrutura na AWS. A empresa usa instâncias do Amazon EC2 para hospedar seu site de e-commerce e usa o Amazon S3 para armazenar dados estáticos. Três engenheiros da empresa cuidam da administração e do desenvolvimento da nuvem por meio de uma conta na AWS. Ocasionalmente, um engenheiro altera a configuração de um grupo de segurança do EC2 de outro engenheiro, causando problemas de não conformidade no ambiente.\

Um arquiteto de soluções deve configurar um sistema que rastreie as alterações feitas pelos engenheiros. O sistema deve enviar alertas quando os engenheiros fizerem alterações não compatíveis nas configurações de segurança das instâncias do EC2.\

Qual é a maneira MAIS RÁPIDA para o arquiteto de soluções atender a esses requisitos?

A. Configure organizações da AWS para a empresa. Aplique SCPs para controlar e rastrear alterações não compatíveis no grupo de segurança feitas na conta da AWS.

B. Habilite o AWS CloudTrail para capturar as alterações nos grupos de segurança do EC2. Habilite as regras do Amazon CloudWatch para emitir alertas quando configurações de segurança não compatíveis forem detectadas.

C. Habilite SCPs na conta da AWS para fornecer alertas quando alterações não compatíveis no grupo de segurança forem feitas no ambiente.

D. Habilite o AWS Config nos grupos de segurança do EC2 para rastrear quaisquer alterações não compatíveis. Envie as alterações como alertas por meio de um tópico do Amazon Simple Notification Service (Amazon SNS). **Mais votado**

220- Uma empresa possui sensores de IoT que monitoram padrões de tráfego em uma grande cidade. A empresa deseja ler e coletar dados dos sensores e realizar agregações nesses dados.\

Um arquiteto de soluções projeta uma solução na qual os dispositivos de IoT transmitem para o Amazon Kinesis Data Streams. Vários aplicativos estão lendo o fluxo. No entanto, vários consumidores estão enfrentando limitação de tráfego e, periodicamente, encontram o erro ReadProvisionedThroughputExceeded.\

Quais ações o arquiteto de soluções deve tomar para resolver esse problema? (Escolha três.)

A. Refragmente o fluxo para aumentar o número de fragmentos no fluxo. **Mais votado**

B. Use a Biblioteca Kinesis Producer (KPL). Ajuste a frequência de polling.

C. Use consumidores com o recurso de distribuição aprimorado. **Mais votado**

D. Refragmente o fluxo para reduzir o número de fragmentos no fluxo.

E. Use um mecanismo de repetição de erro e recuo exponencial na lógica do consumidor. **Mais votado**

F. Configure o fluxo para usar particionamento dinâmico.

221- Uma empresa utiliza o AWS Organizations para gerenciar suas contas na AWS. A empresa precisa de uma lista de todas as suas instâncias do Amazon EC2 que apresentam uso de CPU ou memória subutilizados. A empresa também precisa de recomendações sobre como reduzir o tamanho dessas instâncias subutilizadas.\

Qual solução atenderá a esses requisitos com o MENOR esforço?

A. Instale uma ferramenta de monitoramento de CPU e memória do AWS Marketplace em todas as instâncias do EC2. Armazene as descobertas no Amazon S3. Implemente um script Python para identificar instâncias subutilizadas. Consulte as informações de preços das instâncias do EC2 para obter recomendações sobre opções de downsizing.

B. Instale o agente do Amazon CloudWatch em todas as instâncias do EC2 usando o AWS Systems Manager. Recupere as recomendações de otimização de recursos do AWS Cost Explorer na conta de gerenciamento da organização. Use as recomendações para reduzir o tamanho das instâncias subutilizadas em todas as contas da organização. **Mais votado**

C. Instale o agente do Amazon CloudWatch em todas as instâncias do EC2 usando o AWS Systems Manager. Recupere as recomendações de otimização de recursos do AWS Cost Explorer em cada conta da organização. Use as recomendações para reduzir o tamanho das instâncias subutilizadas em todas as contas da organização.

D. Instale o agente do Amazon CloudWatch em todas as instâncias do EC2 usando o AWS Systems Manager. Crie uma função do AWS Lambda para extrair o uso de CPU e memória de todas as instâncias do EC2. Armazene as descobertas como arquivos no Amazon S3. Use o Amazon Athena para encontrar instâncias subutilizadas. Consulte as informações de preços das instâncias do EC2 para obter recomendações sobre opções de downsizing.

222- Uma empresa deseja executar um pacote de software de análise de rede personalizado para inspecionar o tráfego conforme ele sai e entra em uma VPC. A empresa implantou a solução usando o AWS CloudFormation em três instâncias do Amazon EC2 em um grupo de Auto Scaling. Todo o roteamento de rede foi estabelecido para direcionar o tráfego para as instâncias do EC2.\

Sempre que o software de análise para de funcionar, o grupo de Auto Scaling substitui uma instância. As rotas de rede não são atualizadas quando a instância é substituída.\

Qual combinação de etapas resolverá esse problema? (Escolha três.)

A. Crie alarmes com base nas métricas de verificação de status do EC2 que farão com que o grupo de dimensionamento automático substitua a instância com falha.

B. Atualize o modelo do CloudFormation para instalar o agente do Amazon CloudWatch nas instâncias do EC2. Configure o agente do CloudWatch para enviar métricas de processo para o aplicativo. **Mais votado**

C. Atualize o modelo do CloudFormation para instalar o Agente do AWS Systems Manager nas instâncias do EC2. Configure o Agente do Systems Manager para enviar métricas de processo para o aplicativo.

D. Crie um alarme para a métrica personalizada no Amazon CloudWatch para os cenários de falha. Configure o alarme para publicar uma mensagem em um tópico do Amazon Simple Notification Service (Amazon SNS). **Mais votado**

E. Crie uma função do AWS Lambda que responda à mensagem do Amazon Simple Notification Service (Amazon SNS) para desativar a instância. Atualize as rotas de rede para apontar para a instância de substituição. **Mais votado**

F. No modelo CloudFormation, escreva uma condição que atualize as rotas de rede quando uma instância de substituição for iniciada.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/23/)

223- Uma empresa está desenvolvendo um novo aplicativo de vídeo sob demanda baseado em microsserviços. O aplicativo terá 5 milhões de usuários no lançamento e 30 milhões após 6 meses. A empresa implantou o aplicativo no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate. A empresa desenvolveu o aplicativo utilizando serviços ECS que utilizam o protocolo HTTPS.\

Um arquiteto de soluções precisa implementar atualizações no aplicativo usando implantações azul/verde. A solução deve distribuir o tráfego para cada serviço ECS por meio de um balanceador de carga. O aplicativo deve ajustar automaticamente o número de tarefas em resposta a um alarme do Amazon CloudWatch.\

Qual solução atenderá a esses requisitos?

A. Configure os serviços do ECS para usar o tipo de implantação azul/verde e um Balanceador de Carga de Rede. A solicitação aumenta a cota de serviço para tarefas por serviço para atender à demanda.

B. Configure os serviços do ECS para usar o tipo de implantação azul/verde e um balanceador de carga de rede. Implemente o grupo de dimensionamento automático para cada serviço do ECS usando o dimensionador automático de cluster.

C. Configure os serviços do ECS para usar o tipo de implantação azul/verde e um Balanceador de Carga de Aplicação. Implemente um grupo de Dimensionamento Automático para cada serviço do ECS usando o Dimensionador Automático de Cluster.

D. Configure os serviços do ECS para usar o tipo de implantação azul/verde e um Balanceador de Carga de Aplicação. Implemente o Dimensionamento Automático de Serviços para cada serviço do ECS. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/23/)

224- Uma empresa está executando um aplicativo em contêiner na Nuvem AWS. O aplicativo está sendo executado usando o Amazon Elastic Container Service (Amazon ECS) em um conjunto de instâncias do Amazon EC2. As instâncias do EC2 são executadas em um grupo de Auto Scaling.\

A empresa usa o Amazon Elastic Container Registry (Amazon ECR) para armazenar suas imagens de contêiner. Quando uma nova versão da imagem é carregada, ela recebe uma tag exclusiva.\

A empresa precisa de uma solução que inspecione novas versões de imagem em busca de vulnerabilidades e exposições comuns. A solução deve excluir automaticamente novas tags de imagem com resultados de gravidade Crítica ou Alta. A solução também deve notificar a equipe de desenvolvimento quando tal exclusão ocorrer.\

Qual solução atende a esses requisitos?

A. Configure a verificação por push no repositório. Use o Amazon EventBridge para invocar uma máquina de estados do AWS Step Functions quando uma verificação for concluída para imagens com resultados de gravidade Crítica ou Alta. Use a máquina de estados do Step Functions para excluir a tag de imagem dessas imagens e notificar a equipe de desenvolvimento por meio do Amazon Simple Notification Service (Amazon SNS). **Mais votado**

B. Configure a verificação por push no repositório. Configure os resultados da verificação para serem enviados para uma fila do Amazon Simple Queue Service (Amazon SQS). Invoque uma função do AWS Lambda quando uma nova mensagem for adicionada à fila do SQS. Use a função do Lambda para excluir a tag de imagem para imagens com resultados de gravidade Crítica ou Alta. Notifique a equipe de desenvolvimento usando o Amazon Simple Email Service (Amazon SES).

C. Agende uma função do AWS Lambda para iniciar uma varredura manual de imagens a cada hora. Configure o Amazon EventBridge para invocar outra função do Lambda quando uma varredura for concluída. Use a segunda função do Lambda para excluir a tag de imagem para imagens com resultados de gravidade Crítica ou Alta. Notifique a equipe de desenvolvimento usando o Amazon Simple Notification Service (Amazon SNS).

D. Configure a verificação periódica de imagens no repositório. Configure os resultados da verificação para serem adicionados a uma fila do Amazon Simple Queue Service (Amazon SQS). Invoque uma máquina de estados do AWS Step Functions quando uma nova mensagem for adicionada à fila do SQS. Use a máquina de estados do Step Functions para excluir a tag de imagem para imagens com resultados de gravidade Crítica ou Alta. Notifique a equipe de desenvolvimento usando o Amazon Simple Email Service (Amazon SES).

225- Uma empresa executa muitas cargas de trabalho na AWS e usa o AWS Organizations para gerenciar suas contas. As cargas de trabalho são hospedadas no Amazon EC2, AWS Fargate e AWS Lambda. Algumas das cargas de trabalho têm demanda imprevisível. As contas registram alto uso em alguns meses e baixo uso em outros.\

A empresa deseja otimizar seus custos de computação nos próximos 3 anos. Um arquiteto de soluções obtém uma média de 6 meses para cada uma das contas da organização para calcular o uso.\

Qual solução proporcionará a MAIOR economia de custos para todo o uso de computação da organização?

A. Compre Instâncias Reservadas para que a organização corresponda ao tamanho e ao número das instâncias EC2 mais comuns das contas de membros.

B. Adquira um Plano de Economia de Computação para a organização a partir da conta de gerenciamento usando a recomendação no nível da conta de gerenciamento. **Mais votado**

C. Compre Instâncias Reservadas para cada conta de membro que teve alto uso do EC2 de acordo com os dados dos últimos 6 meses.

D. Compre um Plano de Economia de Instância do EC2 para cada conta de membro da conta de gerenciamento com base nos dados de uso do EC2 dos últimos 6 meses.

226- Uma empresa possui centenas de contas na AWS. A empresa utiliza uma organização no AWS Organizations para gerenciar todas as contas. A empresa ativou todos os recursos.\

Uma equipe financeira alocou um orçamento diário para custos na AWS. A equipe financeira deve receber uma notificação por e-mail se os custos da organização na AWS excederem 80% do orçamento alocado. Um arquiteto de soluções precisa implementar uma solução para rastrear os custos e enviar as notificações.\

Qual solução atenderá a esses requisitos?

A. Na conta de gerenciamento da organização, use o AWS Budgets para criar um orçamento com um período diário. Adicione um limite de alerta e defina o valor como 80%. Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe financeira. **Mais votado**

B. Na conta de gerenciamento da organização, configure o recurso de visualização organizacional para o AWS Trusted Advisor. Crie um relatório de visualização organizacional para otimização de custos. Defina um limite de alerta de 80%. Configure as preferências de notificação. Adicione os endereços de e-mail da equipe financeira.

C. Registre a organização no AWS Control Tower. Ative o controle de custos opcional (guardrail). Defina um parâmetro de controle (guardrail) de 80%. Configure as preferências de notificação de controle (guardrail). Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe financeira.

D. Configure as contas de membro para salvar um Relatório de Custos e Uso diário da AWS em um bucket do Amazon S3 na conta de gerenciamento da organização. Use o Amazon EventBridge para agendar uma consulta diária ao Amazon Athena para calcular os custos da organização. Configure o Athena para enviar um alerta do Amazon CloudWatch se os custos totais forem superiores a 80% do orçamento alocado. Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe financeira.

227- Uma empresa fornece serviços de leilão de obras de arte e possui usuários na América do Norte e na Europa. A empresa hospeda sua aplicação em instâncias do Amazon EC2 na região us-east-1. Os artistas enviam fotos de suas obras como arquivos de imagem grandes e de alta resolução de seus celulares para um bucket centralizado do Amazon S3 criado na região us-east-1. Os usuários na Europa estão relatando desempenho lento no upload de suas imagens.\

Como um arquiteto de soluções pode melhorar o desempenho do processo de upload de imagens?

A. Reimplante o aplicativo para usar uploads multipartes do S3.

B. Crie uma distribuição do Amazon CloudFront e aponte para o aplicativo como uma origem personalizada.

C. Configure os buckets para usar o S3 Transfer Acceleration. **Mais votado**

D. Crie um grupo de dimensionamento automático para as instâncias do EC2 e crie uma política de dimensionamento.

228- Uma empresa deseja conteinerizar uma aplicação web multicamadas e movê-la de um data center local para a AWS. A aplicação inclui camadas de aplicação web e banco de dados. A empresa precisa tornar a aplicação tolerante a falhas e escalável. Alguns dados acessados com frequência devem estar sempre disponíveis nos servidores de aplicação. Os servidores web front-end precisam de persistência de sessão e devem ser escaláveis para atender aos aumentos de tráfego.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional contínua?

A. Execute a aplicação no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate. Use o Amazon Elastic File System (Amazon EFS) para dados acessados com frequência entre as camadas web e de aplicação. Armazene os dados da sessão do servidor web front-end no Amazon Simple Queue Service (Amazon SQS).

B. Execute a aplicação no Amazon Elastic Container Service (Amazon ECS) no Amazon EC2. Use o Amazon ElastiCache para Redis para armazenar em cache os dados da sessão do servidor web front-end. Use o Amazon Elastic Block Store (Amazon EBS) com Multi-Attach em instâncias do EC2 distribuídas em várias Zonas de Disponibilidade.

C. Execute a aplicação no Amazon Elastic Kubernetes Service (Amazon EKS). Configure o Amazon EKS para usar grupos de nós gerenciados. Use ReplicaSets para executar os servidores web e as aplicações. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Monte o sistema de arquivos EFS em todos os pods do EKS para armazenar dados de sessão do servidor web front-end.

D. Implante a aplicação no Amazon Elastic Kubernetes Service (Amazon EKS). Configure o Amazon EKS para usar grupos de nós gerenciados. Execute os servidores web e a aplicação como implantações do Kubernetes no cluster EKS. Armazene os dados da sessão do servidor web front-end em uma tabela do Amazon DynamoDB. Crie um volume do Amazon Elastic File System (Amazon EFS) que todas as aplicações montarão no momento da implantação. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/23/)

229- Um arquiteto de soluções está planejando migrar bancos de dados críticos do Microsoft SQL Server para a AWS. Como os bancos de dados são sistemas legados, o arquiteto de soluções os migrará para uma arquitetura de dados moderna. O arquiteto de soluções deve migrar os bancos de dados com tempo de inatividade praticamente zero.\

Qual solução atenderá a esses requisitos?

A. Use o AWS Application Migration Service e a AWS Schema Conversion Tool (AWS SCT). Execute uma atualização local antes da migração. Exporte os dados migrados para o Amazon Aurora Serverless após a transição. Redirecione os aplicativos para o Amazon Aurora.

B. Use o AWS Database Migration Service (AWS DMS) para rehospedar o banco de dados. Defina o Amazon S3 como destino. Configure a replicação de captura de dados alterados (CDC). Quando a origem e o destino estiverem totalmente sincronizados, carregue os dados do Amazon S3 em uma instância de banco de dados do Amazon RDS para Microsoft SQL Server.

C. Use ferramentas nativas de alta disponibilidade do banco de dados. Conecte o sistema de origem a uma instância de banco de dados do Amazon RDS para Microsoft SQL Server. Configure a replicação adequadamente. Quando a replicação de dados for concluída, transfira a carga de trabalho para uma instância de banco de dados do Amazon RDS para Microsoft SQL Server. **Mais votado**

D. Use o AWS Application Migration Service. Rehospede o servidor de banco de dados no Amazon EC2. Quando a replicação de dados estiver concluída, desvincule o banco de dados e mova-o para uma instância do Amazon RDS para Microsoft SQL Server. Reconecte o banco de dados e, em seguida, corte toda a rede.

230- O arquiteto de soluções de uma empresa está analisando os custos de um ambiente multiaplicativo. O ambiente é implantado em várias Zonas de Disponibilidade em uma única Região da AWS. Após uma aquisição recente, a empresa gerencia duas organizações no AWS Organizations. A empresa criou vários aplicativos de provedores de serviços como serviços de endpoint VPC com tecnologia AWS PrivateLink em uma organização. A empresa criou vários aplicativos de consumidores de serviços na outra organização.\

As taxas de transferência de dados são muito mais altas do que a empresa esperava, e o arquiteto de soluções precisa reduzir os custos. O arquiteto de soluções deve recomendar diretrizes para os desenvolvedores seguirem ao implantar serviços. Essas diretrizes devem minimizar as taxas de transferência de dados para todo o ambiente.\

Quais diretrizes atendem a esses requisitos? (Escolha duas.)

A. Use o AWS Resource Access Manager para compartilhar as sub-redes que hospedam os aplicativos do provedor de serviços com outras contas na organização.

B. Coloque os aplicativos do provedor de serviços e os aplicativos do consumidor de serviços em contas da AWS na mesma organização.

C. Desative o balanceamento de carga entre zonas para o Network Load Balancer em todas as implantações de aplicativos do provedor de serviços. **Mais votado**

D. Certifique-se de que os recursos de computação do consumidor de serviço usem o serviço de ponto de extremidade específico da Zona de Disponibilidade usando o nome DNS local do ponto de extremidade. **Mais votado**

E. Crie um Plano de Economia que forneça cobertura adequada para o uso planejado de transferência de dados entre Zonas de Disponibilidade da organização.

231- Uma empresa possui um banco de dados Microsoft SQL Server local que grava uma exportação noturna de 200 GB em um disco local. A empresa deseja mover os backups para um armazenamento em nuvem mais robusto no Amazon S3. A empresa configurou uma conexão AWS Direct Connect de 10 Gbps entre o data center local e a AWS.\

Qual solução atende a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um novo bucket S3. Implante um gateway de arquivos do AWS Storage Gateway na VPC conectada à conexão Direct Connect. Crie um novo compartilhamento de arquivos SMB. Grave exportações noturnas de banco de dados para o novo compartilhamento de arquivos SMB. **Mais votado**

B. Crie um sistema de arquivos Single-AZ do Amazon FSx para Windows File Server na VPC conectada à conexão Direct Connect. Crie um novo compartilhamento de arquivos SMB. Grave exportações noturnas de banco de dados para um compartilhamento de arquivos SMB no sistema de arquivos do Amazon FSx. Habilite backups noturnos.

C. Crie um sistema de arquivos Multi-AZ do Amazon FSx para Windows File Server na VPC conectada à conexão Direct Connect. Crie um novo compartilhamento de arquivos SMB. Grave exportações noturnas de banco de dados para um compartilhamento de arquivos SMB no sistema de arquivos Amazon FSx. Habilite backups noturnos.

D. Crie um novo bucket S3. Implante um gateway de volume do AWS Storage Gateway na VPC conectada à conexão Direct Connect. Crie um novo compartilhamento de arquivos SMB. Grave exportações noturnas do banco de dados para o novo compartilhamento de arquivos SMB no gateway de volume e automatize cópias desses dados para um bucket S3.

232- Uma empresa precisa estabelecer uma conexão entre seu data center local e a AWS. A empresa precisa conectar todas as suas VPCs localizadas em diferentes regiões da AWS com recursos de roteamento transitivo entre as redes VPC. A empresa também precisa reduzir os custos de tráfego de saída da rede, aumentar a taxa de transferência de largura de banda e fornecer uma experiência de rede consistente para os usuários finais.\

Qual solução atenderá a esses requisitos?

A. Crie uma conexão VPN Site-to-Site da AWS entre o data center local e uma nova VPC central. Crie conexões de peering de VPC que iniciem na VPC central e se estendam para todas as outras VPCs.

B. Crie uma conexão AWS Direct Connect entre o data center local e a AWS. Provisione uma VIF de trânsito e conecte-a a um gateway Direct Connect. Conecte o gateway Direct Connect a todas as outras VPCs usando um gateway de trânsito em cada região. **Mais votado**

C. Crie uma conexão VPN Site-to-Site da AWS entre o data center local e uma nova VPU central. Use um gateway de trânsito com roteamento dinâmico. Conecte o gateway de trânsito a todas as outras VPCs.

D. Crie uma conexão AWS Direct Connect entre o data center local e a AWS. Estabeleça uma conexão VPN Site-to-Site da AWS entre todas as VPCs em cada região. Crie conexões de peering de VPC que iniciem na VPC central e cheguem a todas as outras VPCs.

233- Uma empresa está migrando suas cargas de trabalho de desenvolvimento e produção para uma nova organização no AWS Organizations. A empresa criou uma conta de membro separada para desenvolvimento e outra para produção. O faturamento consolidado está vinculado à conta de gerenciamento. Na conta de gerenciamento, um arquiteto de soluções precisa criar um usuário do IAM que possa interromper ou encerrar recursos em ambas as contas de membro.\

Qual solução atenderá a esse requisito?

A. Crie um usuário do IAM e uma função entre contas na conta de gerenciamento. Configure a função entre contas com acesso de privilégios mínimos às contas dos membros.

B. Crie um usuário do IAM em cada conta de membro. Na conta de gerenciamento, crie uma função entre contas com acesso de privilégios mínimos. Conceda aos usuários do IAM acesso à função entre contas usando uma política de confiança.

C. Crie um usuário do IAM na conta de gerenciamento. Nas contas de membro, crie um grupo do IAM com acesso de privilégios mínimos. Adicione o usuário do IAM da conta de gerenciamento a cada grupo do IAM nas contas de membro.

D. Crie um usuário do IAM na conta de gerenciamento. Nas contas de membro, crie funções entre contas com acesso de privilégios mínimos. Conceda ao usuário do IAM acesso às funções usando uma política de confiança.

234- Uma empresa deseja usar a AWS para recuperação de desastres para um aplicativo local. A empresa possui centenas de servidores Windows que executam o aplicativo. Todos os servidores montam um compartilhamento comum.\

A empresa tem um RTO de 15 minutos e um RPO de 5 minutos. A solução deve oferecer suporte a recursos nativos de failover e fallback.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um gateway de arquivos do AWS Storage Gateway. Agende backups diários do servidor Windows. Salve os dados no Amazon S3. Durante um desastre, recupere os servidores locais a partir do backup. Durante o tailback, execute os servidores locais em instâncias do Amazon EC2.

B. Crie um conjunto de modelos do AWS CloudFormation para criar a infraestrutura. Replique todos os dados para o Amazon Elastic File System (Amazon EFS) usando o AWS DataSync. Durante um desastre, use o AWS CodePipeline para implantar os modelos e restaurar os servidores locais. Execute o failback dos dados usando o DataSync.

C. Crie um pipeline do AWS Cloud Development Kit (AWS CDK) para configurar um ambiente ativo-ativo multisite na AWS. Replique os dados para o Amazon S3 usando o comando s3 sync. Durante um desastre, troque os endpoints DNS para apontar para a AWS. Execute o failback dos dados usando o comando s3 sync.

D. Use o AWS Elastic Disaster Recovery para replicar os servidores locais. Replique os dados para um sistema de arquivos do Amazon FSx for Windows File Server usando o AWS DataSync. Monte o sistema de arquivos nos servidores da AWS. Durante um desastre, faça failover dos servidores locais para a AWS. Faça failback para servidores novos ou existentes usando o Elastic Disaster Recovery.

235- Uma empresa construiu um cluster de computação de alto desempenho (HPC) na AWS para uma carga de trabalho fortemente acoplada que gera um grande número de arquivos compartilhados armazenados no Amazon EFS. O cluster apresentava bom desempenho quando o número de instâncias do Amazon EC2 era 100. No entanto, quando a empresa aumentou o tamanho do cluster para 1.000 instâncias do EC2, o desempenho geral ficou bem abaixo das expectativas.\

Qual conjunto de opções de design um arquiteto de soluções deve fazer para obter o desempenho máximo do cluster de HPC? (Escolha três.)

A. Certifique-se de que o cluster HPC seja iniciado dentro de uma única Zona de Disponibilidade. **Mais votado**

B. Inicie as instâncias do EC2 e anexe interfaces de rede elásticas em múltiplos de quatro.

C. Selecione os tipos de instância do EC2 com um Elastic Fabric Adapter (EFA) habilitado. **Mais votado**

D. Certifique-se de que o cluster seja iniciado em várias Zonas de Disponibilidade.

E. Substitua o Amazon EFS por vários volumes do Amazon EBS em uma matriz RAID.

F. Substitua o Amazon EFS pelo Amazon FSx para Lustre.

236- Uma empresa está projetando uma estrutura de organizações da AWS. A empresa deseja padronizar um processo para aplicar tags em toda a organização. A empresa exigirá tags com valores específicos quando um usuário criar um novo recurso. Cada UO da empresa terá valores de tag exclusivos.\

Qual solução atenderá a esses requisitos?

A. Use um SCP para negar a criação de recursos que não tenham as tags necessárias. Crie uma política de tags que inclua os valores de tags que a empresa atribuiu a cada UO. Anexe as políticas de tags às UOs. **Mais votado**

B. Use um SCP para negar a criação de recursos que não tenham as tags necessárias. Crie uma política de tags que inclua os valores de tags que a empresa atribuiu a cada UO. Anexe as políticas de tags à conta de gerenciamento da organização.

C. Use um SCP para permitir a criação de recursos somente quando eles tiverem as tags necessárias. Crie uma política de tags que inclua os valores de tag que a empresa atribuiu a cada UO. Anexe as políticas de tags às UOs.

D. Use um SCP para negar a criação de recursos que não tenham as tags necessárias. Defina a lista de tags. Anexe o SCP às UOs.

237- Uma empresa possui mais de 10.000 sensores que enviam dados para um servidor Apache Kafka local usando o protocolo Message Queuing Telemetry Transport (MQTT). O servidor Kafka local transforma os dados e armazena os resultados como objetos em um bucket do Amazon S3.\

Recentemente, o servidor Kafka travou. A empresa perdeu dados dos sensores enquanto o servidor estava sendo restaurado. Um arquiteto de soluções deve criar um novo design na AWS que seja altamente disponível e escalável para evitar uma ocorrência semelhante.\

Qual solução atenderá a esses requisitos?

A. Inicie duas instâncias do Amazon EC2 para hospedar o servidor Kafka em uma configuração ativa/em espera em duas Zonas de Disponibilidade. Crie um nome de domínio no Amazon Route 53. Crie uma política de failover do Route 53. Roteie os sensores para enviar os dados para o nome de domínio.

B. Migre o servidor Kafka local para o Amazon Managed Streaming for Apache Kafka (Amazon MSK). Crie um Balanceador de Carga de Rede (NLB) que aponte para o broker Amazon MSK. Habilite as verificações de integridade do NLB. Roteie os sensores para enviar os dados ao NLB.

C. Implante o AWS IoT Core e conecte-o a um fluxo de entrega do Amazon Kinesis Data Firehose. Use uma função do AWS Lambda para lidar com a transformação de dados. Roteie os sensores para enviar os dados ao AWS IoT Core. **Mais votado**

D. Implante o AWS IoT Core e inicie uma instância do Amazon EC2 para hospedar o servidor Kafka. Configure o AWS IoT Core para enviar os dados para a instância do EC2. Roteie os sensores para enviar os dados para o AWS IoT Core.

238- Uma empresa começou recentemente a hospedar novas cargas de trabalho de aplicativos na Nuvem AWS. A empresa está usando instâncias do Amazon EC2, sistemas de arquivos do Amazon Elastic File System (Amazon EFS) e instâncias de banco de dados do Amazon RDS.\

Para atender aos requisitos regulatórios e comerciais, a empresa deve fazer as seguintes alterações nos backups de dados:\

• Os backups devem ser mantidos com base em requisitos diários, semanais e mensais personalizados.\
• Os backups devem ser replicados para pelo menos uma outra região da AWS imediatamente após a captura.\
• A solução de backup deve fornecer uma única fonte de status de backup em todo o ambiente da AWS.\
• A solução de backup deve enviar notificações imediatas em caso de falha de qualquer backup de recurso.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha três.)

A. Crie um plano de backup da AWS com uma regra de backup para cada um dos requisitos de retenção. **Mais votado**

B. Configure um plano de backup da AWS para copiar backups para outra região. **Mais votado**

C. Crie uma função do AWS Lambda para replicar backups para outra região e enviar notificações se ocorrer uma falha.

D. Adicione um tópico do Amazon Simple Notification Service (Amazon SNS) ao plano de backup para enviar uma notificação para trabalhos concluídos que tenham qualquer status, exceto BACKUP_JOB_COMPLETED. **Mais votado**

E. Crie uma política de ciclo de vida de snapshot do Amazon Data Lifecycle Manager (Amazon DLM) para cada um dos requisitos de retenção.

F. Configure snapshots do RDS em cada banco de dados.

239- Uma empresa está desenvolvendo um dispositivo de geração de relatórios genéticos que coletará informações genômicas para auxiliar pesquisadores na coleta de grandes amostras de dados de uma população diversa. O dispositivo enviará 8 KB de dados genômicos a cada segundo para uma plataforma de dados que precisará processar e analisar os dados e fornecer as informações de volta aos pesquisadores. A plataforma de dados deve atender aos seguintes requisitos:\

• Fornecer análises quase em tempo real dos dados genômicos recebidos\
• Garantir que os dados sejam flexíveis, paralelos e duráveis\
• Entregar os resultados do processamento a um data warehouse.\

Qual estratégia um arquiteto de soluções deve usar para atender a esses requisitos?

A. Use o Amazon Kinesis Data Firehose para coletar os dados do sensor de entrada, analisar os dados com os clientes Kinesis e salvar os resultados em uma instância do Amazon RDS.

B. Use o Amazon Kinesis Data Streams para coletar os dados de entrada do sensor, analisar os dados com os clientes Kinesis e salvar os resultados em um cluster do Amazon Redshift usando o Amazon EMR. **Mais votado**

C. Use o Amazon S3 para coletar os dados de entrada do dispositivo, analisar os dados do Amazon SQS com o Kinesis e salvar os resultados em um cluster do Amazon Redshift.

D. Use um Amazon API Gateway para colocar solicitações em uma fila do Amazon SQS, analisar os dados com uma função do AWS Lambda e salvar os resultados em um cluster do Amazon Redshift usando o Amazon EMR.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/24/)

240- Um arquiteto de soluções precisa definir uma arquitetura de referência para uma solução para aplicativos de três camadas com camadas de aplicativos web e dados NoSQL. A arquitetura de referência deve atender aos seguintes requisitos:\

• Alta disponibilidade em uma região da AWS\
• Capacidade de failover em 1 minuto para outra região da AWS para recuperação de desastres\
• Fornecer a solução mais eficiente, minimizando o impacto na experiência do usuário.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Use uma política de roteamento ponderada do Amazon Route 53 definida como 100/0 nas duas regiões selecionadas. Defina o Tempo de Vida (TTL) como 1 hora.

B. Use uma política de roteamento de failover do Amazon Route 53 para failover da região primária para a região de recuperação de desastres. Defina o Tempo de Vida (TTL) para 30 segundos. **Mais votado**

C. Use uma tabela global dentro do Amazon DynamoDB para que os dados possam ser acessados nas duas regiões selecionadas. **Mais votado**

D. Faça backup dos dados de uma tabela do Amazon DynamoDB na região primária a cada 60 minutos e, em seguida, grave os dados no Amazon S3. Use a replicação entre regiões do S3 para copiar os dados da região primária para a região de recuperação de desastres. Crie um script para importar os dados para o DynamoDB em um cenário de recuperação de desastres.

E. Implemente um modelo de espera ativa usando grupos de dimensionamento automático para as camadas da Web e de aplicativos em várias Zonas de Disponibilidade nas Regiões. Use Instâncias Reservadas zonais para o número mínimo de servidores e Instâncias Sob Demanda para quaisquer recursos adicionais. **Mais votado**

F. Use grupos de Dimensionamento Automático para as camadas da Web e de aplicativo em várias Zonas de Disponibilidade nas Regiões. Use Instâncias Spot para os recursos necessários.

241- Uma empresa fabrica veículos inteligentes. A empresa utiliza um aplicativo personalizado para coletar dados dos veículos. Os veículos utilizam o protocolo MQTT para se conectar ao aplicativo. A empresa processa os dados em intervalos de 5 minutos. Em seguida, a empresa copia os dados telemáticos dos veículos para um armazenamento local. Aplicativos personalizados analisam esses dados para detectar anomalias.\

O número de veículos que enviam dados cresce constantemente. Veículos mais novos geram altos volumes de dados. A solução de armazenamento local não consegue escalar para picos de tráfego, o que resulta em perda de dados. A empresa precisa modernizar a solução e migrá-la para a AWS para resolver os desafios de escalabilidade.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Use o AWS IoT Greengrass para enviar os dados do veículo para o Amazon Managed Streaming for Apache Kafka (Amazon MSK). Crie um aplicativo Apache Kafka para armazenar os dados no Amazon S3. Use um modelo pré-treinado no Amazon SageMaker para detectar anomalias.

B. Use o AWS IoT Core para receber os dados do veículo. Configure regras para rotear dados para um fluxo de entrega do Amazon Kinesis Data Firehose que os armazena no Amazon S3. Crie um aplicativo do Amazon Kinesis Data Analytics que leia o fluxo de entrega para detectar anomalias. **Mais votado**

C. Use o AWS IoT FleetWise para coletar os dados do veículo. Envie os dados para um fluxo de dados do Amazon Kinesis. Use um fluxo de entrega do Amazon Kinesis Data Firehose para armazenar os dados no Amazon S3. Use as transformações de aprendizado de máquina integradas no AWS Glue para detectar anomalias.

D. Use o Amazon MQ para RabbitMQ para coletar os dados do veículo. Envie os dados para um fluxo de entrega do Amazon Kinesis Data Firehose para armazená-los no Amazon S3. Use o Amazon Lookout for Metrics para detectar anomalias.

242- Durante uma auditoria, uma equipe de segurança descobriu que uma equipe de desenvolvimento estava inserindo chaves de acesso secretas de usuários do IAM em seu código e, em seguida, enviando-as para um repositório do AWS CodeCommit. A equipe de segurança deseja encontrar e corrigir automaticamente instâncias dessa vulnerabilidade de segurança.\

Qual solução garantirá que as credenciais sejam protegidas de forma adequada e automática?

A. Execute um script todas as noites usando o comando Run do AWS Systems Manager para procurar credenciais nas instâncias de desenvolvimento. Se encontradas, use o AWS Secrets Manager para rotacionar as credenciais.

B. Use uma função agendada do AWS Lambda para baixar e escanear o código do aplicativo do CodeCommit. Se as credenciais forem encontradas, gere novas credenciais e armazene-as no AWS KMS.

C. Configure o Amazon Macie para procurar credenciais nos repositórios do CodeCommit. Se as credenciais forem encontradas, acione uma função do AWS Lambda para desabilitá-las e notificar o usuário.

D. Configure um gatilho do CodeCommit para invocar uma função do AWS Lambda e verificar novos envios de código em busca de credenciais. Se as credenciais forem encontradas, desative-as no AWS IAM e notifique o usuário. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/25/)

243- Uma empresa possui um data lake no Amazon S3 que precisa ser acessado por centenas de aplicativos em diversas contas da AWS. A política de segurança da informação da empresa determina que o bucket S3 não deve ser acessado pela internet pública e que cada aplicativo deve ter as permissões mínimas necessárias para funcionar.\

Para atender a esses requisitos, um arquiteto de soluções planeja usar um ponto de acesso S3 restrito a VPCs específicas para cada aplicativo.\

Qual combinação de etapas o arquiteto de soluções deve adotar para implementar essa solução? (Escolha duas.)

A. Crie um ponto de acesso S3 para cada aplicativo na conta AWS proprietária do bucket S3. Configure cada ponto de acesso para ser acessível apenas a partir da VPC do aplicativo. Atualize a política do bucket para exigir acesso de um ponto de acesso. **Mais votado**

B. Crie um endpoint de interface para o Amazon S3 na VPC de cada aplicativo. Configure a política de endpoint para permitir acesso a um ponto de acesso S3. Crie um anexo de gateway VPC para o endpoint S3.

C. Crie um endpoint de gateway para o Amazon S3 na VP de cada aplicativo. Configure a política de endpoint para permitir acesso a um ponto de acesso S3. Especifique a tabela de rotas usada para acessar o ponto de acesso. **Mais votado**

D. Crie um ponto de acesso S3 para cada aplicativo em cada conta da AWS e anexe os pontos de acesso ao bucket S3. Configure cada ponto de acesso para ser acessível apenas a partir da VPC do aplicativo. Atualize a política do bucket para exigir acesso de um ponto de acesso.

E. Crie um endpoint de gateway para o Amazon S3 na VPC do data lake. Anexe uma política de endpoint para permitir acesso ao bucket do S3. Especifique a tabela de rotas usada para acessar o bucket.

244- Uma empresa desenvolveu uma solução híbrida entre seu data center e a AWS. A empresa utiliza instâncias do Amazon VPC e do Amazon EC2 que enviam logs de aplicativos para o Amazon CloudWatch. As instâncias do EC2 leem dados de vários bancos de dados relacionais hospedados localmente.\

A empresa deseja monitorar quais instâncias do EC2 estão conectadas aos bancos de dados quase em tempo real. A empresa já possui uma solução de monitoramento que utiliza o Splunk localmente. Um arquiteto de soluções precisa determinar como enviar o tráfego de rede para o Splunk.\

Como o arquiteto de soluções deve atender a esses requisitos?

A. Habilite os logs de fluxo da VPC e envie-os para o CloudWatch. Crie uma função do AWS Lambda para exportar periodicamente os logs do CloudWatch para um bucket do Amazon S3 usando a função de exportação predefinida. Gere as credenciais ACCESS_KEY e SECRET_KEY da AWS. Configure o Splunk para extrair os logs do bucket do S3 usando essas credenciais.

B. Crie um fluxo de entrega do Amazon Kinesis Data Firehose com o Splunk como destino. Configure uma função de pré-processamento do AWS Lambda com um processador de fluxo do Kinesis Data Firehose que extraia eventos de log individuais de registros enviados por filtros de assinatura do CloudWatch Logs. Habilite os logs de fluxos da VPC e envie-os para o CloudWatch. Crie uma assinatura do CloudWatch Logs que envie eventos de log para o fluxo de entrega do Kinesis Data Firehose. **Mais votado**

C. Peça à empresa para registrar todas as solicitações feitas aos bancos de dados, juntamente com o endereço IP da instância do EC2. Exporte os logs do CloudWatch para um bucket do Amazon S3. Use o Amazon Athena para consultar os logs agrupados por nome de banco de dados. Exporte os resultados do Athena para outro bucket do S3. Invoque uma função do AWS Lambda para enviar automaticamente qualquer novo arquivo inserido no bucket do S3 para o Splunk.

D. Envie os logs do CloudWatch para um fluxo de dados do Amazon Kinesis com o Amazon Kinesis Data Analytics para aplicativos SQL. Configure uma janela deslizante de 1 minuto para coletar os eventos. Crie uma consulta SQL que use o modelo de detecção de anomalias para monitorar quaisquer anomalias no tráfego de rede em tempo quase real. Envie o resultado para um fluxo de entrega do Amazon Kinesis Data Firehose com o Splunk como destino.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/25/)

245- Uma empresa possui cinco equipes de desenvolvimento, cada uma das quais criou cinco contas na AWS para desenvolver e hospedar aplicativos. Para acompanhar os gastos, as equipes de desenvolvimento acessam cada conta mensalmente, registram o custo atual no console de Faturamento e Gerenciamento de Custos da AWS e fornecem as informações à equipe financeira da empresa.\

A empresa possui requisitos de conformidade rigorosos e precisa garantir que os recursos sejam criados apenas em regiões da AWS nos Estados Unidos. No entanto, alguns recursos foram criados em outras regiões.\

Um arquiteto de soluções precisa implementar uma solução que permita à equipe financeira acompanhar e consolidar os gastos de todas as contas. A solução também deve garantir que a empresa possa criar recursos apenas em regiões dos Estados Unidos.\

Qual combinação de etapas atenderá a esses requisitos da maneira MAIS eficiente operacionalmente? (Escolha três.)

A. Crie uma nova conta para servir como conta de gerenciamento. Crie um bucket do Amazon S3 para a equipe financeira. Use os Relatórios de Custo e Uso da AWS para criar relatórios mensais e armazenar os dados no bucket do Amazon S3 da equipe financeira.

B. Crie uma nova conta para servir como conta de gerenciamento. Implante uma organização no AWS Organizations com todos os recursos habilitados. Convide todas as contas existentes para a organização. Certifique-se de que cada conta aceite o convite. **Mais votado**

C. Crie uma UO que inclua todas as equipes de desenvolvimento. Crie um SCP que permita a criação de recursos apenas em regiões localizadas nos Estados Unidos. Aplique o SCP à UO.

D. Crie uma UO que inclua todas as equipes de desenvolvimento. Crie um SCP que proíba a criação de recursos em regiões fora dos Estados Unidos. Aplique o SCP à UO. **Mais votado**

E. Crie uma função do IAM na conta de gerenciamento. Anexe uma política que inclua permissões para visualizar o console de Faturamento e Gerenciamento de Custos. Permita que os usuários da equipe financeira assumam a função. Use o AWS Cost Explorer e o console de Faturamento e Gerenciamento de Custos para analisar custos. **Mais votado**

F. Crie uma função do IAM em cada conta da AWS. Anexe uma política que inclua permissões para visualizar o console de Faturamento e Gerenciamento de Custos. Permita que os usuários da equipe financeira assumam a função.

246- Uma empresa precisa criar e gerenciar várias contas da AWS para diversos departamentos a partir de um local central. A equipe de segurança precisa de acesso somente leitura a todas as contas a partir de sua própria conta da AWS. A empresa usa o AWS Organizations e criou uma conta para a equipe de segurança.\

Como um arquiteto de soluções deve atender a esses requisitos?

A. Use a função do IAM OrganizationAccountAccessRole para criar uma nova política do IAM com acesso somente leitura em cada conta de membro. Estabeleça uma relação de confiança entre a política do IAM em cada conta de membro e a conta de segurança. Peça à equipe de segurança para usar a política do IAM para obter acesso.

B. Use a função do IAM OrganizationAccountAccessRole para criar uma nova função do IAM com acesso somente leitura em cada conta de membro. Estabeleça uma relação de confiança entre a função do IAM em cada conta de membro e a conta de segurança. Peça à equipe de segurança para usar a função do IAM para obter acesso. **Mais votado**

C. Peça à equipe de segurança para usar o AWS Security Token Service (AWS STS) para chamar a API AssumeRole para a função do IAM OrganizationAccountAccessRole na conta de gerenciamento a partir da conta de segurança. Use as credenciais temporárias geradas para obter acesso.

D. Peça à equipe de segurança para usar o AWS Security Token Service (AWS STS) para chamar a API AssumeRole para a função do IAM OrganizationAccountAccessRole na conta de membro a partir da conta de segurança. Use as credenciais temporárias geradas para obter acesso.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/25/)

247- Uma grande empresa executa cargas de trabalho em VPCs implantadas em centenas de contas da AWS. Cada VPC consiste em sub-redes públicas e privadas que abrangem várias Zonas de Disponibilidade. Gateways NAT são implantados nas sub-redes públicas e permitem a conectividade de saída com a internet a partir das sub-redes privadas.\

Um arquiteto de soluções está trabalhando em um projeto hub-and-spoke. Todas as sub-redes privadas nas VPCs spoke devem rotear o tráfego para a internet por meio de uma VPC de saída. O arquiteto de soluções já implantou um gateway NAT em uma VPC de saída em uma conta central da AWS.\

Qual conjunto de etapas adicionais o arquiteto de soluções deve seguir para atender a esses requisitos?

A. Crie conexões de peering entre a VPC de saída e as VPCs spoke. Configure o roteamento necessário para permitir o acesso à internet.

B. Crie um gateway de trânsito e compartilhe-o com as contas AWS existentes. Anexe as VPCs existentes ao gateway de trânsito. Configure o roteamento necessário para permitir o acesso à internet. **Mais votado**

C. Crie um gateway de trânsito em cada conta. Conecte o gateway NAT aos gateways de trânsito. Configure o roteamento necessário para permitir o acesso à internet.

D. Crie uma conexão AWS PrivateLink entre a VPC de saída e as VPCs spoke. Configure o roteamento necessário para permitir o acesso à internet.

248- Uma empresa de educação está executando uma aplicação web usada por estudantes universitários em todo o mundo. A aplicação é executada em um cluster do Amazon Elastic Container Service (Amazon ECS) em um grupo de Auto Scaling, protegido por um Application Load Balancer (ALB). Um administrador de sistema detecta um pico semanal no número de tentativas de login com falha, o que sobrecarrega o serviço de autenticação da aplicação. Todas as tentativas de login com falha se originam de cerca de 500 endereços IP diferentes, que mudam a cada semana. Um arquiteto de soluções deve evitar que as tentativas de login com falha sobrecarreguem o serviço de autenticação.\

Qual solução atende a esses requisitos com a MAIOR eficiência operacional?

A. Use o AWS Firewall Manager para criar um grupo de segurança e uma política de grupo de segurança para negar acesso aos endereços IP.

B. Crie uma ACL da Web do AWS WAF com uma regra baseada em taxa e defina a ação da regra como Bloquear. Conecte a ACL da Web ao ALB. **Mais votado**

C. Use o AWS Firewall Manager para criar um grupo de segurança e uma política de grupo de segurança para permitir acesso somente a intervalos CIDR específicos.

D. Crie uma ACL da Web do AWS WAF com uma regra de correspondência de conjunto de IP e defina a ação da regra como Bloquear. Conecte a ACL da Web ao ALB.

249- Uma empresa opera uma solução de software como serviço (SaaS) local que ingere diversos arquivos diariamente. A empresa fornece vários endpoints SFTP públicos aos seus clientes para facilitar as transferências de arquivos. Os clientes adicionam os endereços IP dos endpoints SFTP à lista de permissões do firewall para tráfego de saída. Alterações nos endereços IP dos endpoints SFTP não são permitidas.\

A empresa deseja migrar a solução SaaS para a AWS e reduzir a sobrecarga operacional do serviço de transferência de arquivos.\

Qual solução atende a esses requisitos?

A. Registre o bloco de endereços IP de propriedade do cliente na conta AWS da empresa. Crie endereços IP elásticos a partir do pool de endereços e atribua-os a um endpoint do AWS Transfer para SFTP. Use o AWS Transfer para armazenar os arquivos no Amazon S3. **Mais votado**

B. Adicione uma sub-rede contendo o bloco de endereços IP de propriedade do cliente a uma VPC. Crie endereços IP elásticos a partir do pool de endereços e atribua-os a um Balanceador de Carga de Aplicação (ALB). Inicie instâncias do EC2 que hospedam serviços FTP em um grupo de Auto Scaling atrás do AL e armazene os arquivos em volumes anexados do Amazon Elastic Block Store (Amazon EBS).

C. Registre o bloco de endereços IP de propriedade do cliente no Amazon Route 53. Crie registros de alias no Route 53 que apontem para um Balanceador de Carga de Rede (NLB). Inicie instâncias do EC2 que hospedam serviços FTP em um grupo de Dimensionamento Automático por trás do NLB. Armazene os arquivos no Amazon S3.

D. Registre o bloco de endereços IP de propriedade do cliente na conta AWS da empresa. Crie endereços IP elásticos a partir do pool de endereços e atribua-os a um endpoint da VPC do Amazon S3. Habilite o suporte a SFTP no bucket S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/25/)

250- Uma empresa possui um novo aplicativo que precisa ser executado em cinco instâncias do Amazon EC2 em uma única região da AWS. O aplicativo requer conexões de rede de alta taxa de transferência e baixa latência entre todas as instâncias do EC2 onde será executado. Não há requisito para que o aplicativo seja tolerante a falhas.\

Qual solução atenderá a esses requisitos?

A. Inicie cinco novas instâncias do EC2 em um grupo de posicionamento de cluster. Certifique-se de que o tipo de instância do EC2 seja compatível com redes avançadas. **Mais votado**

B. Inicie cinco novas instâncias do EC2 em um grupo de Dimensionamento Automático na mesma Zona de Disponibilidade. Anexe uma interface de rede elástica extra a cada instância do EC2.

C. Inicie cinco novas instâncias do EC2 em um grupo de posicionamento de partição. Certifique-se de que o tipo de instância do EC2 seja compatível com rede avançada.

D. Inicie cinco novas instâncias do EC2 em um grupo de posicionamento distribuído. Anexe uma interface de rede elástica extra a cada instância do EC2.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/25/)

251- Uma empresa está criando uma API REST para compartilhar informações com seis de seus parceiros localizados nos Estados Unidos. A empresa criou um endpoint regional do Amazon API Gateway. Cada um dos seis parceiros acessará a API uma vez por dia para publicar os números de vendas diários.\

Após a implantação inicial, a empresa observa 1.000 solicitações por segundo originadas de 500 endereços IP diferentes em todo o mundo. A empresa acredita que esse tráfego é originário de uma botnet e deseja proteger sua API, minimizando custos.\

Qual abordagem a empresa deve adotar para proteger sua API?

A. Crie uma distribuição do Amazon CloudFront com a API como origem. Crie uma ACL da Web do AWS WAF com uma regra para bloquear clientes que enviam mais de cinco solicitações por dia. Associe a ACL da Web à distribuição do CloudFront. Configure o CloudFront com uma identidade de acesso de origem (OAI) e associe-a à distribuição. Configure o API Gateway para garantir que apenas a OAI possa executar o método POST.

B. Crie uma distribuição do Amazon CloudFront com a API como origem. Crie uma ACL da Web do AWS WAF com uma regra para bloquear clientes que enviam mais de cinco solicitações por dia. Associe a ACL da Web à distribuição do CloudFront. Adicione um cabeçalho personalizado à distribuição do CloudFront preenchido com uma chave de API. Configure a API para exigir uma chave de API no método POST.

C. Crie uma ACL da Web do AWS WAF com uma regra para permitir acesso aos endereços IP usados pelos seis parceiros. Associe a ACL da Web à API. Crie uma política de recursos com um limite de solicitações e associe-a à API. Configure a API para exigir uma chave de API no método POST.

D. Crie uma ACL da Web do AWS WAF com uma regra para permitir acesso aos endereços IP usados pelos seis parceiros. Associe a ACL da Web à API. Crie um plano de uso com um limite de solicitações e associe-o à API. Crie uma chave de API e adicione-a ao plano de uso. **Mais votado**

252- Uma empresa utiliza um cluster de banco de dados PostgreSQL do Amazon Aurora para aplicações em uma única região da AWS. A equipe de banco de dados da empresa precisa monitorar toda a atividade de dados em todos os bancos de dados.\

Qual solução atingirá esse objetivo?

A. Configure uma tarefa de captura de dados alterados (CDC) do AWS Database Migration Service (AWS DMS). Especifique o cluster de banco de dados Aurora como origem. Especifique o Amazon Kinesis Data Firehose como destino. Use o Kinesis Data Firehose para carregar os dados em um cluster do Amazon OpenSearch Service para análise posterior.

B. Inicie um fluxo de atividades do banco de dados no cluster do Aurora DB para capturar o fluxo de atividades no Amazon EventBridge. Defina uma função do AWS Lambda como destino para o EventBridge. Programe a função do Lambda para descriptografar as mensagens do EventBridge e publicar todas as atividades do banco de dados no Amazon S3 para análise posterior.

C. Inicie um fluxo de atividades de banco de dados no cluster do Aurora DB para enviar o fluxo de atividades para um fluxo de dados do Amazon Kinesis. Configure o Amazon Kinesis Data Firehose para consumir o fluxo de dados do Kinesis e entregar os dados ao Amazon S3 para análise posterior. **Mais votado**

D. Configure uma tarefa de captura de dados alterados (CDC) do AWS Database Migration Service (AWS DMS). Especifique o cluster de banco de dados Aurora como origem. Especifique o Amazon Kinesis Data Firehose como destino. Use o Kinesis Data Firehose para carregar os dados em um cluster do Amazon Redshift. Execute consultas nos dados do Amazon Redshift para determinar as atividades no banco de dados Aurora.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/26/)

253- Uma empresa de entretenimento lançou recentemente um novo jogo. Para garantir uma boa experiência aos jogadores durante o período de lançamento, a empresa implantou uma quantidade estática de 12 instâncias r6g.16xlarge (otimizadas para memória) do Amazon EC2 por trás de um balanceador de carga de rede. A equipe de operações da empresa utilizou o agente Amazon CloudWatch e uma métrica personalizada para incluir a utilização de memória em sua estratégia de monitoramento.\

A análise das métricas do CloudWatch do período de lançamento mostrou um consumo de cerca de um quarto da CPU e da memória esperadas pela empresa. A demanda inicial pelo jogo diminuiu e se tornou mais variável. A empresa decide usar um grupo de Auto Scaling que monitora o consumo de CPU e memória para escalar dinamicamente a frota de instâncias. Um arquiteto de soluções precisa configurar o grupo de Auto Scaling para atender à demanda da maneira mais econômica possível.\

Qual solução atenderá a esses requisitos?

A. Configure o grupo de Dimensionamento Automático para implantar instâncias c6g.4xlarge (otimizadas para computação). Configure uma capacidade mínima de 3, uma capacidade desejada de 3 e uma capacidade máxima de 12.

B. Configure o grupo de Dimensionamento Automático para implantar instâncias m6g.4xlarge (uso geral). Configure uma capacidade mínima de 3, uma capacidade desejada de 3 e uma capacidade máxima de 12.

C. Configure o grupo de Dimensionamento Automático para implantar instâncias r6g.4xlarge (otimizadas para memória). Configure uma capacidade mínima de 3, uma capacidade desejada de 3 e uma capacidade máxima de 12. **Mais votado**

D. Configure o grupo de Dimensionamento Automático para implantar instâncias r6g.8xlarge (otimizadas para memória). Configure uma capacidade mínima de 2, uma capacidade desejada de 2 e uma capacidade máxima de 6.

254- Uma empresa de serviços financeiros carregou milhões de negociações históricas de ações em uma tabela do Amazon DynamoDB. A tabela utiliza o modo de capacidade sob demanda. Uma vez por dia, à meia-noite, alguns milhões de novos registros são carregados na tabela. A atividade de leitura de aplicativos na tabela ocorre em picos ao longo do dia, e um conjunto limitado de chaves é consultado repetidamente. A empresa precisa reduzir os custos associados ao DynamoDB.\

Qual estratégia um arquiteto de soluções deve recomendar para atender a esse requisito?

A. Implante um cluster do Amazon ElastiCache na frente da tabela do DynamoDB

B. Implante o DynamoDB Accelerator (DAX). Configure o escalonamento automático do DynamoDB. Adquira planos de economia no Cost Explorer.

C. Use o modo de capacidade provisionada. Adquira Planos de Economia no Explorador de Custos.

D. Implante o DynamoDB Accelerator (DAX). Use o modo de capacidade provisionada. Configure o escalonamento automático do DynamoDB.

255- Uma empresa está criando um serviço de registro centralizado em execução no Amazon EC2 que receberá e analisará registros de centenas de contas da AWS. O AWS PrivateLink está sendo usado para fornecer conectividade entre os serviços do cliente e o serviço de registro.\

Em cada conta da AWS com um cliente, um endpoint de interface foi criado para o serviço de registro e está disponível. O serviço de registro em execução em instâncias do EC2 com um Balanceador de Carga de Rede (NLB) está implantado em sub-redes diferentes. Os clientes não conseguem enviar registros usando o endpoint da VPC.\

Qual combinação de etapas um arquiteto de soluções deve seguir para resolver esse problema? (Escolha duas.)

A. Verifique se a NACL está conectada à sub-rede do serviço de registro para permitir comunicações de e para as sub-redes NLB. Verifique se a NACL está conectada à sub-rede NLB para permitir comunicações de e para as sub-redes do serviço de registro em execução em instâncias do EC2. **Mais votado**

B. Verifique se a NACL está anexada às sub-redes do serviço de registro para permitir comunicações de e para as sub-redes do ponto de extremidade da interface. Verifique se a NACL está anexada à sub-rede do ponto de extremidade da interface para permitir comunicações de e para as sub-redes do serviço de registro em execução nas instâncias do EC2.

C. Verifique o grupo de segurança do serviço de registro em execução nas instâncias do EC2 para garantir que ele permita a entrada das sub-redes NLB. **Mais votado**

D. Verifique o grupo de segurança do serviço de registro em execução nas instâncias do EC2 para garantir que ele permita a entrada dos clientes.

E. Verifique o grupo de segurança do NLB para garantir que ele permita a entrada das sub-redes de ponto de extremidade da interface.

256- Uma empresa possui milhões de objetos em um bucket do Amazon S3. Os objetos pertencem à classe de armazenamento S3 Standard. Todos os objetos S3 são acessados com frequência. O número de usuários e aplicativos que acessam os objetos está aumentando rapidamente. Os objetos são criptografados com criptografia do lado do servidor e chaves AWS KMS (SSE-KMS).\

Um arquiteto de soluções analisa a fatura mensal da AWS da empresa e observa que os custos do AWS KMS estão aumentando devido ao alto número de solicitações do Amazon S3. O arquiteto de soluções precisa otimizar os custos com o mínimo de alterações no aplicativo.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um novo bucket S3 com criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C) como tipo de criptografia. Copie os objetos existentes para o novo bucket S3. Especifique SSE-C.

B. Crie um novo bucket S3 com criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3) como tipo de criptografia. Use as Operações em Lote do S3 para copiar os objetos existentes para o novo bucket S3. Especifique SSE-S3. **Mais votado**

C. Use o AWS CloudHSM para armazenar as chaves de criptografia. Crie um novo bucket do S3. Use as Operações em Lote do S3 para copiar os objetos existentes para o novo bucket do S3. Criptografe os objetos usando as chaves do CloudHSM.

D. Use a classe de armazenamento S3 Intelligent-Tiering para o bucket S3. Crie uma configuração de arquivamento S3 Intelligent-Tiering para transferir objetos que não são acessados por 90 dias para o S3 Glacier Deep Archive.

257- Um aplicativo de armazenamento de mídia carrega fotos de usuários no Amazon S3 para processamento pelas funções do AWS Lambda. O estado do aplicativo é armazenado em tabelas do Amazon DynamoDB. Usuários relatam que algumas fotos carregadas não estão sendo processadas corretamente. Os desenvolvedores do aplicativo rastreiam os logs e descobrem que o Lambda está enfrentando problemas no processamento de fotos quando milhares de usuários carregam fotos simultaneamente. Os problemas são resultado dos limites de simultaneidade do Lambda e do desempenho do DynamoDB quando os dados são salvos.\

Qual combinação de ações um arquiteto de soluções deve adotar para aumentar o desempenho e a confiabilidade do aplicativo? (Escolha duas.)

A. Avalie e ajuste as RCUs para as tabelas do DynamoDB.

B. Avalie e ajuste as WCUs para as tabelas do DynamoDB. **Mais votado**

C. Adicione uma camada Amazon ElastiCache para aumentar o desempenho das funções Lambda.

D. Adicione uma fila do Amazon Simple Queue Service (Amazon SQS) e lógica de reprocessamento entre o Amazon S3 e as funções do Lambda. **Mais votado**

E. Use o S3 Transfer Acceleration para fornecer menor latência aos usuários.

258- Uma empresa executa um aplicativo em um data center local. O aplicativo permite que os usuários carreguem arquivos de mídia. Os arquivos persistem em um servidor de arquivos. O aplicativo web tem muitos usuários. O servidor de aplicativos está superutilizado, o que causa falhas ocasionais no upload de dados. A empresa adiciona frequentemente novo armazenamento ao servidor de arquivos. A empresa deseja resolver esses desafios migrando o aplicativo para a AWS.\

Usuários dos Estados Unidos e do Canadá acessam o aplicativo. Somente usuários autenticados devem ter a capacidade de acessar o aplicativo para carregar arquivos. A empresa considerará uma solução que refatore o aplicativo e precisa acelerar o desenvolvimento do aplicativo.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Use o AWS Application Migration Service para migrar o servidor de aplicativos para instâncias do Amazon EC2. Crie um grupo de Auto Scaling para as instâncias do EC2. Use um Application Load Balancer para distribuir as solicitações. Modifique o aplicativo para usar o Amazon S3 para persistir os arquivos. Use o Amazon Cognito para autenticar usuários.

B. Use o AWS Application Migration Service para migrar o servidor de aplicativos para instâncias do Amazon EC2. Crie um grupo de Auto Scaling para as instâncias do EC2. Use um Application Load Balancer para distribuir as solicitações. Configure o AWS IAM Identity Center (AWS Single Sign-On) para permitir que os usuários façam login no aplicativo. Modifique o aplicativo para usar o Amazon S3 para persistir os arquivos.

C. Crie um site estático para uploads de arquivos de mídia. Armazene os ativos estáticos no Amazon S3. Use o AWS AppSync para criar uma API. Use resolvedores do AWS Lambda para fazer upload dos arquivos de mídia para o Amazon S3. Use o Amazon Cognito para autenticar usuários.

D. Use o AWS Amplify para criar um site estático para uploads de arquivos de mídia. Use o Amplify Hosting para disponibilizar o site por meio do Amazon CloudFront. Use o Amazon S3 para armazenar os arquivos de mídia enviados. Use o Amazon Cognito para autenticar usuários. **Mai**

259- Uma empresa possui uma aplicação implantada em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). As instâncias fazem parte de um grupo de Auto Scaling. A aplicação possui cargas de trabalho imprevisíveis e escala horizontal e vertical com frequência. A equipe de desenvolvimento da empresa deseja analisar os logs da aplicação para encontrar maneiras de melhorar o desempenho da aplicação. No entanto, os logs não estão mais disponíveis após o escalonamento horizontal das instâncias.\

Qual solução permitirá que a equipe de desenvolvimento visualize os logs da aplicação após um evento de escalonamento horizontal?

A. Habilite logs de acesso para o ALB. Armazene os logs em um bucket do Amazon S3.

B. Configure as instâncias do EC2 para publicar logs no Amazon CloudWatch Logs usando o agente unificado do CloudWatch. **Mais votado**

C. Modifique o grupo de dimensionamento automático para usar uma política de dimensionamento em etapas.

D. Instrumente o aplicativo com o rastreamento AWS X-Ray.

260- Uma empresa administra um site estático não autenticado ([www.exemplo.com](https://www.exemplo.com)) que inclui um formulário de registro para usuários. O site utiliza o Amazon S3 para hospedagem e o Amazon CloudFront como rede de entrega de conteúdo com o AWS WAF configurado. Quando o formulário de registro é enviado, o site chama um endpoint da API do Amazon API Gateway que invoca uma função do AWS Lambda para processar o payload e encaminhá-lo para uma chamada de API externa.\

Durante os testes, um arquiteto de soluções encontra um erro de compartilhamento de recursos entre origens (CORS). O arquiteto de soluções confirma que a origem da distribuição do CloudFront tem o cabeçalho Access-Control-Allow-Origin definido como [www.exemplo.com](https://www.exemplo.com).\

O que o arquiteto de soluções deve fazer para resolver o erro?

A. Altere a configuração do CORS no bucket S3. Adicione regras para CORS ao elemento AllowedOrigin para [www.example.com](https://www.example.com).

B. Habilite a configuração CORS no AWS WAF. Crie uma regra de ACL da Web na qual o cabeçalho Access-Control-Allow-Origin esteja definido como [www.example.com](https://www.example.com).

C. Habilite a configuração CORS no endpoint da API do API Gateway. Certifique-se de que o endpoint da API esteja configurado para retornar todas as respostas que tenham o cabeçalho Access-Control-Allow-Origin definido como [www.example.com](https://www.example.com). **Mais votado**

D. Habilite a configuração CORS na função Lambda. Certifique-se de que o código de retorno da função tenha o cabeçalho Access-Control-Allow-Origin definido como [www.example.com](https://www.example.com).

261- Uma empresa possui várias contas AWS separadas e não utiliza faturamento ou gerenciamento centralizado. Cada conta AWS hospeda serviços para diferentes departamentos da empresa. A empresa possui um Microsoft Azure Active Directory implantado.\

Um arquiteto de soluções precisa centralizar o faturamento e o gerenciamento das contas AWS da empresa. A empresa deseja começar a usar federação de identidades em vez do gerenciamento manual de usuários. A empresa também deseja usar credenciais temporárias em vez de chaves de acesso de longa duração.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Crie uma nova conta da AWS para servir como conta de gerenciamento. Implante uma organização no AWS Organizations. Convide cada conta da AWS existente para ingressar na organização. Certifique-se de que cada conta aceite o convite. **Mais votado**

B. Configure o endereço de e-mail de cada conta AWS como [aws+@example.com](mailto:aws+@example.com) para que os e-mails de gerenciamento de conta e as faturas sejam enviados para o mesmo lugar.

C. Implante o AWS IAM Identity Center (AWS Single Sign-On) na conta de gerenciamento. Conecte o IAM Identity Center ao Azure Active Directory. Configure o IAM Identity Center para sincronização automática de usuários e grupos. **Mais votado**

D. Implante um diretório do Microsoft AD gerenciado pela AWS na conta de gerenciamento. Compartilhe o diretório com todas as outras contas da organização usando o AWS Resource Access Manager (AWS RAM).

E. Crie conjuntos de permissões do AWS IAM Identity Center (AWS Single Sign-On). Anexe os conjuntos de permissões aos grupos apropriados do IAM Identity Center e às contas da AWS. **Mais votado**

F. Configure o AWS Identity and Access Management (IAM) em cada conta da AWS para usar o AWS Managed Microsoft AD para autenticação e autorização.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

262- Uma empresa deseja gerenciar os custos associados a um grupo de 20 aplicativos pouco usados, mas ainda críticos para os negócios, migrando para a AWS. Os aplicativos são uma mistura de Java e Node.js distribuídos em diferentes clusters de instâncias. A empresa deseja minimizar os custos e, ao mesmo tempo, padronizar usando uma única metodologia de implantação.\

A maioria dos aplicativos faz parte das rotinas de processamento de fim de mês com um pequeno número de usuários simultâneos, mas são executados ocasionalmente em outros horários. O consumo médio de memória dos aplicativos é inferior a 1 GB, embora alguns aplicativos usem até 2,5 GB de memória durante o pico de processamento. O aplicativo mais importante do grupo é um relatório de faturamento escrito em Java que acessa várias fontes de dados e geralmente é executado por várias horas.\

Qual é a solução MAIS econômica?

A. Implante uma função separada do AWS Lambda para cada aplicativo. Use os logs do AWS CloudTrail e os alarmes do Amazon CloudWatch para verificar a conclusão de tarefas críticas.

B. Implante contêineres do Amazon ECS no Amazon EC2 com o Auto Scaling configurado para utilização de memória de 75%. Implante uma tarefa do ECS para cada aplicativo que está sendo migrado com o escalonamento de tarefas do ECS. Monitore serviços e hosts usando o Amazon CloudWatch. **Mais votado**

C. Implante o AWS Elastic Beanstalk para cada aplicação com Auto Scaling para garantir que todas as solicitações tenham recursos suficientes. Monitore cada implantação do AWS Elastic Beanstalk usando alarmes do CloudWatch.

D. Implante um novo cluster de instâncias do Amazon EC2 que co-hospede todos os aplicativos usando o EC2 Auto Scaling e os Application Load Balancers. Escale o tamanho do cluster com base em uma métrica personalizada definida com base na utilização da memória da instância. Adquira reservas de Instâncias Reservadas por 3 anos, equivalentes ao parâmetro GroupMaxSize do grupo de Auto Scaling.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

263- Um arquiteto de soluções precisa revisar o design de um cluster do Amazon EMR que utiliza o Sistema de Arquivos EMR (EMRFS). O cluster executa tarefas críticas para as necessidades do negócio. O cluster executa instâncias sob demanda do Amazon EC2 o tempo todo para todas as tarefas, nós primários e principais. As tarefas do EMR são executadas todas as manhãs, a partir da 1h, e levam 6 horas para serem concluídas. O tempo para concluir o processamento não é uma prioridade, pois os dados só são referenciados no final do dia.\

O arquiteto de soluções deve revisar a arquitetura e sugerir uma solução para minimizar os custos computacionais.\

Qual solução o arquiteto de soluções deve recomendar para atender a esses requisitos?

A. Inicie todos os nós de tarefa, primários e principais em Instâncias Spot em uma frota de instâncias. Encerre o cluster, incluindo todas as instâncias, quando o processamento for concluído.

B. Inicie os nós primários e principais em Instâncias On-Demand. Inicie os nós de tarefa em Instâncias Spot em uma frota de instâncias. Encerre o cluster, incluindo todas as instâncias, quando o processamento for concluído. Adquira Planos de Economia de Computação para cobrir o uso da Instância On-Demand.

C. Continue a iniciar todos os nós nas Instâncias On-Demand. Encerre o cluster, incluindo todas as instâncias, quando o processamento for concluído. Adquira Planos de Economia de Computação para cobrir o uso das Instâncias On-Demand.

D. Inicie os nós primários e principais em Instâncias On-Demand. Inicie os nós de tarefa em Instâncias Spot em uma frota de instâncias. Encerre apenas as instâncias dos nós de tarefa quando o processamento for concluído. Adquira Planos de Economia de Computação para cobrir o uso da Instância On-Demand. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

264- Uma empresa migrou um aplicativo legado para a Nuvem AWS. O aplicativo é executado em três instâncias do Amazon EC2 distribuídas em três Zonas de Disponibilidade. Uma instância do EC2 está em cada Zona de Disponibilidade. As instâncias do EC2 estão sendo executadas em três sub-redes privadas da VPC e configuradas como destinos para um Balanceador de Carga de Aplicativos (ALB) associado a três sub-redes públicas.\

O aplicativo precisa se comunicar com sistemas locais. Somente o tráfego de endereços IP no intervalo de endereços IP da empresa tem permissão para acessar os sistemas locais. A equipe de segurança da empresa está trazendo apenas um endereço IP de seu intervalo de endereços IP interno para a nuvem. A empresa adicionou esse endereço IP à lista de permissões do firewall da empresa. A empresa também criou um endereço IP elástico para esse endereço IP.\

Um arquiteto de soluções precisa criar uma solução que permita que o aplicativo se comunique com os sistemas locais. A solução também deve ser capaz de mitigar falhas automaticamente.\

Qual solução atenderá a esses requisitos?

A. Implante três gateways NAT, um em cada sub-rede pública. Atribua o endereço IP elástico aos gateways NAT. Ative as verificações de integridade para os gateways NAT. Se um gateway NAT falhar na verificação de integridade, recrie-o e atribua o endereço IP elástico ao novo gateway NAT.

B. Substitua o ALB por um Balanceador de Carga de Rede (NLB). Atribua o endereço IP elástico ao NLB. Ative as verificações de integridade do NLB. Em caso de falha na verificação de integridade, reimplante o NLB em sub-redes diferentes.

C. Implante um único gateway NAT em uma sub-rede pública. Atribua o endereço IP elástico ao gateway NAT. Use o Amazon CloudWatch com uma métrica personalizada para monitorar o gateway NAT. Se o gateway NAT não estiver íntegro, invoque uma função do AWS Lambda para criar um novo gateway NAT em uma sub-rede diferente. Atribua o endereço IP elástico ao novo gateway NAT. **Mais votado**

D. Atribua o endereço IP elástico ao ALB. Crie um registro simples do Amazon Route 53 com o endereço IP elástico como valor. Crie uma verificação de integridade do Route 53. Em caso de falha na verificação de integridade, recrie o ALB em sub-redes diferentes.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

265- Uma empresa usa o AWS Organizations para gerenciar mais de 1.000 contas da AWS. A empresa criou uma nova organização de desenvolvedores. Há 540 contas de desenvolvedores que precisam ser movidas para a nova organização. Todas as contas são configuradas com todas as informações necessárias para que cada conta possa ser operada como uma conta independente.\

Qual combinação de etapas um arquiteto de soluções deve seguir para mover todas as contas de desenvolvedores para a nova organização? (Escolha três.)

A. Chame a operação MoveAccount na API Organizações da conta de gerenciamento da organização antiga para migrar as contas de desenvolvedor para a nova organização de desenvolvedor.

B. Da conta de gerenciamento, remova cada conta de desenvolvedor da organização antiga usando a operação RemoveAccountFromOrganization na API de organizações. **Mais votado**

C. De cada conta de desenvolvedor, remova a conta da organização antiga usando a operação RemoveAccountFromOrganization na API de Organizações.

D. Entre na conta de gerenciamento da nova organização do desenvolvedor e crie uma conta de membro de espaço reservado que atue como um destino para a migração da conta do desenvolvedor.

E. Chame a operação InviteAccountToOrganization na API Organizations da conta de gerenciamento da nova organização do desenvolvedor para enviar convites às contas do desenvolvedor. **Mais votado**

F. Peça para cada desenvolvedor fazer login em sua conta e confirmar a adesão à nova organização de desenvolvedores. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

266- Um aplicativo web interativo de uma empresa utiliza uma distribuição do Amazon CloudFront para servir imagens de um bucket do Amazon S3. Ocasionalmente, ferramentas de terceiros ingerem imagens corrompidas no bucket do S3. Essa corrupção de imagem causa uma experiência ruim para o usuário no aplicativo posteriormente. A empresa implementou e testou com sucesso a lógica Python para detectar imagens corrompidas.\

Um arquiteto de soluções deve recomendar uma solução para integrar a lógica de detecção com latência mínima entre a ingestão e o serviço.\

Qual solução atenderá a esses requisitos?

A. Use uma função Lambda@Edge que é invocada por um evento de resposta do visualizador.

B. Use uma função Lambda@Edge que é invocada por um evento de origem-resposta.

C. Use uma notificação de evento S3 que invoca uma função do AWS Lambda. **Mais votado**

D. Use uma notificação de evento S3 que invoca uma máquina de estado do AWS Step Functions.

267- Uma empresa possui um aplicativo executado em instâncias do Amazon EC2 em um grupo de Auto Scaling do Amazon EC2. A empresa utiliza o AWS CodePipeline para implantar o aplicativo. As instâncias executadas no grupo de Auto Scaling mudam constantemente devido a eventos de escalabilidade.\

Ao implantar novas versões do código do aplicativo, a empresa instala o agente do AWS CodeDeploy em todas as novas instâncias do EC2 de destino e as associa ao grupo de implantação do CodeDeploy. O aplicativo está programado para entrar em operação nas próximas 24 horas.\

O que um arquiteto de soluções deve recomendar para automatizar o processo de implantação do aplicativo com a MENOR sobrecarga operacional?

A. Configure o Amazon EventBridge para invocar uma função do AWS Lambda quando uma nova instância do EC2 for iniciada no grupo de Auto Scaling. Codifique a função do Lambda para associar as instâncias do EC2 ao grupo de implantação do CodeDeploy.

B. Escreva um script para suspender as operações de Auto Scaling do Amazon EC2 antes da implantação do novo código. Após a conclusão da implantação, crie uma nova AMI e configure o modelo de inicialização do grupo de Auto Scaling para usar a nova AMI em novas inicializações. Retome as operações de Auto Scaling do Amazon EC2.

C. Crie um novo projeto do AWS CodeBuild que crie uma nova AMI contendo o novo código. Configure o CodeBuild para atualizar o modelo de inicialização do grupo de Auto Scaling para a nova AMI. Execute uma operação de atualização de instância do Amazon EC2 Auto Scaling.

D. Crie uma nova AMI com o agente CodeDeploy instalado. Configure o modelo de inicialização do grupo de Dimensionamento Automático para usar a nova AMI. Associe o grupo de implantação do CodeDeploy ao grupo de Dimensionamento Automático em vez das instâncias do EC2. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

268- Uma empresa possui um site executado em quatro instâncias do Amazon EC2 que estão por trás de um Application Load Balancer (ALB). Quando o ALB detecta que uma instância do EC2 não está mais disponível, um alarme do Amazon CloudWatch entra no estado ALARM. Um membro da equipe de operações da empresa adiciona manualmente uma nova instância do EC2 por trás do ALB.\

Um arquiteto de soluções precisa projetar uma solução de alta disponibilidade que lide automaticamente com a substituição de instâncias do EC2. A empresa precisa minimizar o tempo de inatividade durante a migração para a nova solução.\

Qual conjunto de etapas o arquiteto de soluções deve seguir para atender a esses requisitos?

A. Exclua o ALB existente. Crie um grupo de Dimensionamento Automático configurado para lidar com o tráfego de aplicativos web. Anexe um novo modelo de inicialização ao grupo de Dimensionamento Automático. Crie um novo ALB. Anexe o grupo de Dimensionamento Automático ao novo ALB. Anexe as instâncias EC2 existentes ao grupo de Dimensionamento Automático.

B. Crie um grupo de Dimensionamento Automático configurado para lidar com o tráfego de aplicativos web. Anexe um novo modelo de inicialização ao grupo de Dimensionamento Automático. Anexe o grupo de Dimensionamento Automático ao AL existente. Anexe as instâncias EC2 existentes ao grupo de Dimensionamento Automático. **Mais votado**

C. Exclua o ALB existente e as instâncias do EC2. Crie um grupo de Auto Scaling configurado para lidar com o tráfego de aplicativos web. Anexe um novo modelo de inicialização ao grupo de Auto Scaling. Crie um novo ALB. Anexe o grupo de Auto Scaling ao novo ALB. Aguarde até que o grupo de Auto Scaling inicie o número mínimo de instâncias do EC2.

D. Crie um grupo de Dimensionamento Automático configurado para lidar com o tráfego de aplicativos web. Anexe um novo modelo de inicialização ao grupo de Dimensionamento Automático. Anexe o grupo de Dimensionamento Automático ao ALB existente. Aguarde até que o ALB existente registre as instâncias EC2 existentes no grupo de Dimensionamento Automático.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

269- Uma empresa deseja otimizar os custos de transferência de dados da AWS e os custos de computação entre contas de desenvolvedor dentro da organização da empresa no AWS Organizations. Os desenvolvedores podem configurar VPCs e iniciar instâncias do Amazon EC2 em uma única região da AWS. As instâncias do EC2 recuperam aproximadamente 1 TB de dados por dia do Amazon S3.\

A atividade do desenvolvedor resulta em cobranças mensais excessivas de transferência de dados e de processamento de gateway NAT entre instâncias do EC2 e buckets do S3, além de altos custos de computação. A empresa deseja aplicar proativamente os padrões arquitetônicos aprovados para qualquer instância do EC2 e infraestrutura de VPC que os desenvolvedores implantem nas contas da AWS. A empresa não deseja que essa aplicação afete negativamente a velocidade com que os desenvolvedores podem executar suas tarefas.\

Qual solução atenderá a esses requisitos com a MAIOR relação custo-benefício?

A. Crie SCPs para impedir que os desenvolvedores iniciem tipos de instância EC2 não aprovados. Forneça aos desenvolvedores um modelo do AWS CloudFormation para implantar uma configuração de VPC aprovada com endpoints de interface S3. Defina o escopo das permissões de IAM dos desenvolvedores para que eles possam iniciar recursos de VPC apenas com o CloudFormation.

B. Crie um orçamento diário previsto com o AWS Budgets para monitorar os custos de computação do EC2 e os custos de transferência de dados do S3 entre as contas de desenvolvedor. Quando o custo previsto for 75% do custo real do orçamento, envie um alerta às equipes de desenvolvimento. Se o custo real do orçamento for 100%, crie uma ação orçamentária para encerrar as instâncias do EC2 e a infraestrutura de VPC dos desenvolvedores.

C. Crie um portfólio do AWS Service Catalog que os usuários possam usar para criar uma configuração de VPC aprovada com endpoints de gateway S3 e instâncias EC2 aprovadas. Compartilhe o portfólio com as contas de desenvolvedor. Configure uma restrição de inicialização do AWS Service Catalog para usar uma função do IAM aprovada. Defina o escopo das permissões de IAM dos desenvolvedores para permitir acesso apenas ao AWS Service Catalog. **Mais votado**

D. Crie e implante regras do AWS Config para monitorar a conformidade dos recursos do EC2 e da VPC nas contas de desenvolvedor da AWS. Se os desenvolvedores iniciarem instâncias do EC2 não aprovadas ou criarem VPCs sem endpoints de gateway S3, execute uma ação de correção para encerrar os recursos não aprovados.

270- Uma empresa está se expandindo. Ela planeja separar seus recursos em centenas de contas AWS diferentes em diversas regiões da AWS. Um arquiteto de soluções deve recomendar uma solução que negue acesso a qualquer operação fora de regiões especificamente designadas.\

Qual solução atenderá a esses requisitos?

A. Crie funções do IAM para cada conta. Crie políticas do IAM com permissões condicionais que incluam apenas regiões aprovadas para as contas.

B. Crie uma organização no AWS Organizations. Crie usuários do IAM para cada conta. Anexe uma política a cada usuário para bloquear o acesso a regiões onde uma conta não pode implantar infraestrutura.

C. Inicie uma landing zone da AWS Control Tower. Crie UOs e anexe SCPs que neguem acesso para executar serviços fora das Regiões aprovadas. **Mais votado**

D. Habilite o AWS Security Hub em cada conta. Crie controles para especificar as regiões onde uma conta pode implantar a infraestrutura.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/27/)

271- Uma empresa deseja refatorar seu aplicativo web de pedidos de varejo, que atualmente conta com uma frota de instâncias do Amazon EC2 com balanceamento de carga para hospedagem web, serviços de API de banco de dados e lógica de negócios. A empresa precisa criar uma arquitetura desacoplada e escalável com um mecanismo para reter pedidos com falha, minimizando, ao mesmo tempo, os custos operacionais.\

Qual solução atenderá a esses requisitos?

A. Use o Amazon S3 para hospedagem web com o Amazon API Gateway para serviços de API de banco de dados. Use o Amazon Simple Queue Service (Amazon SQS) para enfileiramento de pedidos. Use o Amazon Elastic Container Service (Amazon ECS) para lógica de negócios com o Amazon SQS long polling para reter pedidos com falha.

B. Use o AWS Elastic Beanstalk para hospedagem web com o Amazon API Gateway para serviços de API de banco de dados. Use o Amazon MQ para enfileiramento de pedidos. Use o AWS Step Functions para lógica de negócios com o Amazon S3 Glacier Deep Archive para reter pedidos com falha.

C. Use o Amazon S3 para hospedagem web com o AWS AppSync para serviços de API de banco de dados. Use o Amazon Simple Queue Service (Amazon SQS) para enfileiramento de pedidos. Use o AWS Lambda para lógica de negócios com uma fila de mensagens mortas do Amazon SQS para reter pedidos com falha. **Mais votado**

D. Use o Amazon Lightsail para hospedagem web com o AWS AppSync para serviços de API de banco de dados. Use o Amazon Simple Email Service (Amazon SES) para enfileiramento de pedidos. Use o Amazon Elastic Kubernetes Service (Amazon EKS) para lógica de negócios com o Amazon OpenSearch Service para reter pedidos com falha.

272- Uma empresa hospeda uma aplicação web na AWS na região us-east-1. Os servidores de aplicação estão distribuídos em três Zonas de Disponibilidade, atrás de um Balanceador de Carga de Aplicação. O banco de dados está hospedado em um banco de dados MySQL em uma instância do Amazon EC2. Um arquiteto de soluções precisa projetar uma solução de recuperação de dados entre regiões usando serviços da AWS com um RTO de menos de 5 minutos e um RPO de menos de 1 minuto. O arquiteto de soluções está implantando servidores de aplicação em us-west-2 e configurou as verificações de integridade do Amazon Route 53 e o failover de DNS para us-west-2.\

Qual etapa adicional o arquiteto de soluções deve realizar?

A. Migre o banco de dados para uma instância do Amazon RDS para MySQL com uma réplica de leitura entre regiões em us-west-2.

B. Migre o banco de dados para um banco de dados global do Amazon Aurora com o primário em us-east-1 e o secundário em us-west-2. **Mais votado**

C. Migre o banco de dados para uma instância do Amazon RDS para MySQL com uma implantação Multi-AZ.

D. Crie um banco de dados MySQL standby em uma instância do Amazon EC2 em us-west-2.

273- Uma empresa está usando o AWS Organizations para gerenciar várias contas. Devido a requisitos regulatórios, a empresa deseja restringir contas de membros específicas a determinadas regiões da AWS, onde eles têm permissão para implantar recursos. Os recursos nas contas devem ser marcados, aplicados com base em um padrão de grupo e gerenciados centralmente com configuração mínima.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma regra do AWS Config nas contas de membros específicas para limitar regiões e aplicar uma política de tags.

B. No console do AWS Billing and Cost Management, na conta de gerenciamento, desabilite Regiões para as contas de membros específicas e aplique uma política de tags na raiz.

C. Associe as contas de membros específicas à raiz. Aplique uma política de tags e um SCP usando condições para limitar as regiões.

D. Associe as contas de membros específicas a uma nova UO. Aplique uma política de tags e um SCP usando condições para limitar as regiões. **M**

274- Uma empresa possui um aplicativo que gera relatórios e os armazena em um bucket do Amazon S3. Quando um usuário acessa o relatório, o aplicativo gera uma URL assinada para permitir que o usuário baixe o relatório. A equipe de segurança da empresa descobriu que os arquivos são públicos e que qualquer pessoa pode baixá-los sem autenticação. A empresa suspendeu a geração de novos relatórios até que o problema seja resolvido.\

Qual conjunto de ações corrigirá imediatamente o problema de segurança sem afetar o fluxo de trabalho normal do aplicativo?

A. Crie uma função do AWS Lambda que aplique uma política de negação de acesso para usuários não autenticados. Crie um evento agendado para invocar a função do Lambda.

B. Revise a verificação de permissões do bucket do AWS Trusted Advisor e implemente as ações recomendadas.

C. Execute um script que coloque uma ACL privada em todos os objetos no bucket.

D. Use o recurso Bloquear acesso público no Amazon S3 para definir a opção IgnorePublicAcIs como TRUE no bucket. **Mais vo**

275- Uma empresa está planejando migrar um banco de dados Amazon RDS for Oracle para uma instância de banco de dados RDS for PostgreSQL em outra conta da AWS. Um arquiteto de soluções precisa elaborar uma estratégia de migração que não exija tempo de inatividade e que minimize o tempo necessário para concluir a migração. A estratégia de migração deve replicar todos os dados existentes e quaisquer novos dados criados durante a migração. O banco de dados de destino deve ser idêntico ao banco de dados de origem ao final do processo de migração.\

Atualmente, todos os aplicativos usam um registro CNAME do Amazon Route 53 como ponto de extremidade para comunicação com a instância de banco de dados RDS for Oracle. A instância de banco de dados RDS for Oracle está em uma sub-rede privada.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Crie uma nova instância de banco de dados RDS para PostgreSQL na conta de destino. Use a AWS Schema Conversion Tool (AWS SCT) para migrar o esquema do banco de dados de origem para o banco de dados de destino. **Mais votado**

B. Use a AWS Schema Conversion Tool (AWS SCT) para criar uma nova instância de banco de dados RDS for PostgreSQL na conta de destino com o esquema e os dados iniciais do banco de dados de origem.

C. Configure o peering de VPC entre as VPCs nas duas contas da AWS para fornecer conectividade a ambas as instâncias de banco de dados a partir da conta de destino. Configure os grupos de segurança anexados a cada instância de banco de dados para permitir o tráfego na porta do banco de dados a partir da VPC na conta de destino. **Mais votado**

D. Permita temporariamente que a instância do banco de dados de origem seja acessível publicamente para fornecer conectividade da VPC na conta de destino. Configure os grupos de segurança anexados a cada instância do banco de dados para permitir o tráfego na porta do banco de dados da VPC na conta de destino.

E. Use o AWS Database Migration Service (AWS DMS) na conta de destino para executar uma migração completa com captura de dados alterados (CDC) do banco de dados de origem para o banco de dados de destino. Após a conclusão da migração, altere o registro CNAME para apontar para o endpoint da instância do banco de dados de destino. **Mais votado**

F. Use o AWS Database Migration Service (AWS DMS) na conta de destino para realizar uma migração de captura de dados alterados (CDC) do banco de dados de origem para o banco de dados de destino. Após a conclusão da migração, altere o registro CNAME para apontar para o endpoint da instância do banco de dados de destino.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/28/)

276- Uma empresa implementou um sistema de pedidos usando uma arquitetura orientada a eventos. Durante os testes iniciais, o sistema parou de processar pedidos. Uma análise mais aprofundada do log revelou que uma mensagem de pedido em uma fila padrão do Amazon Simple Queue Service (Amazon SQS) estava causando um erro no backend e bloqueando todas as mensagens de pedido subsequentes. O tempo limite de visibilidade da fila é definido como 30 segundos e o tempo limite de processamento no backend é definido como 10 segundos. Um arquiteto de soluções precisa analisar mensagens de pedido com falhas e garantir que o sistema continue processando as mensagens subsequentes.\

Qual etapa o arquiteto de soluções deve seguir para atender a esses requisitos?

A. Aumente o tempo limite de processamento do backend para 30 segundos para corresponder ao tempo limite de visibilidade.

B. Reduza o tempo limite de visibilidade da fila para remover automaticamente a mensagem com falha.

C. Configure uma nova fila FIFO do SQS como uma fila de mensagens mortas para isolar as mensagens com falha.

D. Configure uma nova fila padrão SQS como uma fila de mensagens mortas para isolar as mensagens com falha. **Mais votado**

277- Uma empresa automatizou o retreinamento noturno de seus modelos de aprendizado de máquina usando o AWS Step Functions. O fluxo de trabalho consiste em várias etapas que usam o AWS Lambda. Cada etapa pode falhar por vários motivos, e qualquer falha causa uma falha no fluxo de trabalho geral.\

Uma análise revela que o retreinamento falhou várias noites seguidas sem que a empresa percebesse a falha. Um arquiteto de soluções precisa aprimorar o fluxo de trabalho para que notificações sejam enviadas para todos os tipos de falhas no processo de retreinamento.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Crie um tópico do Amazon Simple Notification Service (Amazon SNS) com uma assinatura do tipo "E-mail" que tenha como alvo a lista de e-mail da equipe. **Mais votado**

B. Crie uma tarefa chamada "E-mail" que encaminhe os argumentos de entrada para o tópico do SNS. **Mais votado**

C. Adicione um campo Catch a todos os estados Task, Map e Parallel que tenham uma declaração de "ErrorEquals": \[ "States.ALL" ] e "Next”: "Email". **Mais votado**

D. Adicione um novo endereço de e-mail ao Amazon Simple Email Service (Amazon SES). Verifique o endereço de e-mail.

E. Crie uma tarefa chamada "E-mail" que encaminhe os argumentos de entrada para o endereço de e-mail do SES.

F. Adicione um campo Catch a todos os estados Task, Map e Parallel que tenham uma instrução de "ErrorEquals": \[ "States.Runtime" ] e "Next": "Email".

278- Uma empresa planeja implantar um novo serviço de intranet privada em instâncias do Amazon EC2 dentro de uma VPC. Uma VPN Site-to-Site da AWS conecta a VPC à rede local da empresa. O novo serviço deve se comunicar com os serviços locais existentes. Os serviços locais são acessíveis por meio de nomes de host que residem na zona DNS "company.example". Essa zona DNS é totalmente hospedada localmente e está disponível apenas na rede privada da empresa.\

Um arquiteto de soluções deve garantir que o novo serviço possa resolver nomes de host no domínio "company.example" para integração com os serviços existentes.\

Qual solução atende a esses requisitos?

A. Crie uma zona privada vazia no Amazon Route 53 para company.example. Adicione um registro NS adicional à zona local company.example da empresa que aponte para os servidores de nomes autorizados para a nova zona privada no Route 53.

B. Ative os nomes de host DNS para a VPC. Configure um novo endpoint de saída com o Amazon Route 53 Resolver. Crie uma regra do Resolver para encaminhar solicitações de company.example para os servidores de nomes locais. **Mais votado**

C. Ative os nomes de host DNS para o VP. Configure um novo endpoint de resolução de entrada com o Amazon Route 53 Resolver. Configure o servidor DNS local para encaminhar solicitações de "company.example" para o novo resolvedor.

D. Use o AWS Systems Manager para configurar um documento de execução que instalará um arquivo de hosts contendo os nomes de host necessários. Use uma regra do Amazon EventBridge para executar o documento quando uma instância estiver entrando no estado de execução.

279- Uma empresa usa o AWS CloudFormation para implantar aplicativos em várias VPCs, todas conectadas a um gateway de trânsito. Cada VPC que envia tráfego para a internet pública deve enviá-lo por meio de uma VPC de serviços compartilhados. Cada sub-rede dentro de uma VPC usa a tabela de rotas padrão da VPC, e o tráfego é roteado para o gateway de trânsito. O gateway de trânsito usa sua tabela de rotas padrão para qualquer conexão com a VPC.\

Uma auditoria de segurança revela que uma instância do Amazon EC2 implantada em uma VPC pode se comunicar com uma instância do EC2 implantada em qualquer uma das outras VPCs da empresa. Um arquiteto de soluções precisa limitar o tráfego entre as VPCs. Cada VPC deve ser capaz de se comunicar apenas com um conjunto limitado e predefinido de VPCs autorizadas.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Atualize a ACL de rede de cada sub-rede dentro de uma VPC para permitir tráfego de saída apenas para as VPCs autorizadas. Remova todas as regras de negação, exceto a regra de negação padrão.

B. Atualize todos os grupos de segurança usados em uma VPC para negar tráfego de saída para grupos de segurança usados em VPCs não autorizadas.

C. Crie uma tabela de rotas de gateway de trânsito dedicada para cada anexo de VPC. Roteie o tráfego apenas para as VPCs autorizadas. **Mais votado**

D. Atualize a tabela de rotas principal de cada VPC para rotear o tráfego somente para as VPCs autorizadas por meio do gateway de trânsito.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/28/)

280- Uma empresa possui um aplicativo desktop baseado em Windows que é empacotado e implantado nas máquinas Windows dos usuários. A empresa adquiriu recentemente outra empresa cujos funcionários utilizam principalmente máquinas com sistema operacional Linux. A empresa adquirente decidiu migrar e re-hospedar o aplicativo desktop baseado em Windows para a AWS.\

Todos os funcionários devem ser autenticados antes de usar o aplicativo. A empresa adquirente usa o Active Directory local, mas deseja uma maneira simplificada de gerenciar o acesso ao aplicativo na AWS para todos os funcionários.\

Qual solução re-hospedará o aplicativo na AWS com o MENOR esforço de desenvolvimento?

A. Configurar e provisionar um desktop virtual do Amazon Workspaces para cada funcionário. Implementar autenticação usando pools de identidade do Amazon Cognito. Instruir os funcionários a executar o aplicativo a partir de seus desktops virtuais do Workspaces provisionados.

B. Crie um grupo de Auto Scaling de instâncias do Amazon EC2 baseadas em Windows. Associe cada instância do EC2 ao domínio do Active Directory da empresa. Implemente a autenticação usando o Active Directory em execução no local. Instrua os funcionários a executar o aplicativo usando uma área de trabalho remota do Windows.

C. Use um construtor de imagens do Amazon AppStream 2.0 para criar uma imagem que inclua o aplicativo e as configurações necessárias. Provisione uma frota do AppStream 2.0 On-Demand com políticas dinâmicas de Fleet Auto Scaling para executar a imagem. Implemente a autenticação usando pools de usuários do AppStream 2.0. Instrua os funcionários a acessar o aplicativo iniciando sessões de streaming do AppStream 2.0 baseadas em navegador. **Mais votado**

D. Refatorar e conteinerizar a aplicação para que seja executada como uma aplicação web. Executar a aplicação no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate com políticas de escalonamento por etapas. Implementar a autenticação usando pools de usuários do Amazon Cognito. Instruir os funcionários a executar a aplicação em seus navegadores.

281- Uma empresa está coletando uma grande quantidade de dados de uma frota de dispositivos IoT. Os dados são armazenados como arquivos ORC (Otimizado por Linhas e Colunas) no Hadoop Distributed File System (HDFS) em um cluster persistente do Amazon EMR. A equipe de análise de dados da empresa consulta os dados usando SQL no Apache Presto implantado no mesmo cluster EMR. As consultas examinam grandes quantidades de dados, sempre são executadas por menos de 15 minutos e ocorrem apenas entre 17h e 22h.\

A empresa está preocupada com o alto custo associado à solução atual. Um arquiteto de soluções deve propor a solução mais econômica que permita consultas de dados em SQL.\

Qual solução atenderá a esses requisitos?

A. Armazene dados no Amazon S3. Use o Amazon Redshift Spectrum para consultar dados.

B. Armazene dados no Amazon S3. Use o AWS Glue Data Catalog e o Amazon Athena para consultar dados. **Mais votado**

C. Armazene dados no Sistema de Arquivos EMR (EMRFS). Use o Presto no Amazon EMR para consultar dados.

D. Armazene dados no Amazon Redshift. Use o Amazon Redshift para consultar dados.

282- Uma grande empresa sofreu recentemente um aumento inesperado nos custos do Amazon RDS e do Amazon DynamoDB. A empresa precisa aumentar a visibilidade dos detalhes do AWS Billing and Cost Management. Há várias contas associadas à AWS Organizations, incluindo muitas contas de desenvolvimento e produção. Não há uma estratégia de marcação consistente em toda a organização, mas existem diretrizes em vigor que exigem que toda a infraestrutura seja implantada usando o AWS CloudFormation com marcação consistente. A gerência exige números de centro de custo e números de ID de projeto para todas as tabelas do DynamoDB e instâncias do RDS existentes e futuras.\

Qual estratégia o arquiteto de soluções deve fornecer para atender a esses requisitos?

A. Use o Editor de Tags para marcar recursos existentes. Crie tags de alocação de custos para definir o centro de custos e o ID do projeto e aguarde 24 horas para que as tags sejam propagadas para os recursos existentes.

B. Use uma regra do AWS Config para alertar a equipe financeira sobre recursos não marcados. Crie uma solução centralizada baseada no AWS Lambda para marcar bancos de dados RDS e recursos do DynamoDB não marcados a cada hora, usando uma função entre contas.

C. Use o Editor de Tags para marcar recursos existentes. Crie tags de alocação de custos para definir o centro de custos e o ID do projeto. Use SCPs para restringir a criação de recursos que não tenham o centro de custos e o ID do projeto no recurso. **Mais votado**

D. Crie tags de alocação de custos para definir o centro de custos e o ID do projeto e aguarde 24 horas para que as tags sejam propagadas para os recursos existentes. Atualize as funções federadas existentes para restringir privilégios ao provisionamento de recursos que não incluam o centro de custos e o ID do projeto no recurso.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/29/)

283- Uma empresa deseja enviar dados de seus sistemas locais para buckets do Amazon S3. A empresa criou os buckets do S3 em três contas diferentes. A empresa precisa enviar os dados de forma privada, sem que eles trafeguem pela internet. A empresa não possui conectividade dedicada com a AWS.\

Qual combinação de etapas um arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha duas.)

A. Crie uma conta de rede na Nuvem AWS. Crie uma VPC privada na conta de rede. Configure uma conexão AWS Direct Connect com uma VIF privada entre o ambiente local e a VPC privada. **Mais votado**

B. Estabeleça uma conta de rede na Nuvem AWS. Crie uma VPC privada na conta de rede. Configure uma conexão AWS Direct Connect com uma VIF pública entre o ambiente local e a VPC privada.

C. Crie um ponto de extremidade de interface do Amazon S3 na conta de rede. **Mais votado**

D. Crie um endpoint de gateway do Amazon S3 na conta de rede.

E. Estabeleça uma conta de rede na Nuvem AWS. Crie uma VPC privada na conta de rede. Conecte as VPCs das contas que hospedam os buckets do S3 com a VPC na conta de rede.

284- Uma empresa opera restaurantes de serviço rápido. Os restaurantes seguem um modelo previsível com alto tráfego de vendas por 4 horas diárias. O tráfego de vendas é menor fora desses horários de pico.\

A plataforma de ponto de venda e gerenciamento é implantada na Nuvem AWS e possui um backend baseado no Amazon DynamoDB. A tabela do banco de dados utiliza o modo de throughput provisionado com 100.000 RCUs e 80.000 WCUs para corresponder ao pico de consumo de recursos conhecido.\

A empresa deseja reduzir o custo do DynamoDB e minimizar a sobrecarga operacional da equipe de TI.\

Qual solução atende a esses requisitos com a MELHOR relação custo-benefício?

A. Reduza as RCUs e WCUs provisionadas.

B. Altere a tabela do DynamoDB para usar capacidade sob demanda.

C. Habilite o dimensionamento automático do Dynamo DB para a tabela. **Mais votado**

D. Adquira capacidade reservada por 1 ano, suficiente para cobrir o pico de carga por 4 horas por dia.

285- Uma empresa hospeda um aplicativo de publicação de blog na AWS usando o Amazon API Gateway, o Amazon DynamoDB e o AWS Lambda. Atualmente, o aplicativo não usa chaves de API para autorizar solicitações. O modelo de API é o seguinte:\

GET /posts/{postId}: para obter detalhes da publicação\
GET /users/{userId}: para obter detalhes do usuário\
GET /comments/{commentId}: para obter detalhes dos comentários\

A empresa notou que os usuários estão discutindo ativamente tópicos na seção de comentários e deseja aumentar o engajamento dos usuários, fazendo com que os comentários apareçam em tempo real.\

Qual design deve ser usado para reduzir a latência dos comentários e melhorar a experiência do usuário?

A. Use a API otimizada para borda com o Amazon CloudFront para armazenar em cache as respostas da API.

B. Modifique o código do aplicativo do blog para solicitar GET/comments/{commentId} a cada 10 segundos.

C. Use o AWS AppSync e aproveite os WebSockets para entregar comentários. **Mais votado**

D. Altere o limite de simultaneidade das funções Lambda para reduzir o tempo de resposta da API.

286- Uma empresa gerencia centenas de contas da AWS centralmente em uma organização no AWS Organizations. Recentemente, a empresa começou a permitir que as equipes de produto criem e gerenciem seus próprios pontos de acesso S3 em suas contas. Os pontos de acesso S3 só podem ser acessados dentro de VPCs, não pela internet.\

Qual é a maneira operacional MAIS eficiente de aplicar esse requisito?

A. Defina a política de recursos do ponto de acesso S3 para negar a ação s3:CreateAccessPoint, a menos que a chave de condição s3:AccessPointNetworkOrigin seja avaliada como VPC.

B. Crie um SCP no nível raiz da organização para negar a ação s3:CreateAccessPoint, a menos que a chave de condição s3:AccessPointNetworkOrigin seja avaliada como VPC. **Mais votado**

C. Use o AWS CloudFormation StackSets para criar uma nova política do IAM em cada conta da AWS que permita a ação s3:CreateAccessPoint somente se a chave de condição s3:AccessPointNetworkOrigin for avaliada como VPC.

D. Defina a política do bucket S3 para negar a ação s3:CreateAccessPoint, a menos que a chave de condição s3:AccessPointNetworkOrigin seja avaliada como VPC.

287- Um arquiteto de soluções deve atualizar um ambiente de aplicação no AWS Elastic Beanstalk usando uma metodologia de implantação azul/verde. O arquiteto de soluções cria um ambiente idêntico ao ambiente de aplicação existente e implanta a aplicação no novo ambiente.\

O que deve ser feito em seguida para concluir a atualização?

A. Redirecione para o novo ambiente usando o Amazon Route 53.

B. Selecione a opção Trocar URLs de ambiente. **Mais votado**

C. Substitua a configuração de inicialização do Auto Scaling.

D. Atualize os registros DNS para apontar para o ambiente verde.

288- Uma empresa está desenvolvendo um serviço de imagens na web que permitirá aos usuários enviar e pesquisar fotos aleatórias. No pico de uso, até 10.000 usuários em todo o mundo enviarão suas imagens. Eles então sobreporão texto às imagens enviadas, que serão publicadas no site da empresa.\

Qual design um arquiteto de soluções deve implementar?

A. Armazene as imagens carregadas no Amazon Elastic File System (Amazon EFS). Envie informações de log do aplicativo sobre cada imagem para o Amazon CloudWatch Logs. Crie uma frota de instâncias do Amazon EC2 que usem o CloudWatch Logs para determinar quais imagens precisam ser processadas. Coloque as imagens processadas em outro diretório no Amazon EFS. Habilite o Amazon CloudFront e configure a origem como uma das instâncias do EC2 na frota.

B. Armazene as imagens carregadas em um bucket do Amazon S3 e configure uma notificação de evento do bucket do S3 para enviar uma mensagem ao Amazon Simple Notification Service (Amazon SNS). Crie uma frota de instâncias do Amazon EC2 atrás de um Application Load Balancer (ALB) para extrair mensagens do Amazon SNS, processar as imagens e colocá-las no Amazon Elastic File System (Amazon EFS). Use as métricas do Amazon CloudWatch para o volume de mensagens do SNS para escalar as instâncias do EC2. Habilite o Amazon CloudFront e configure a origem como o ALB na frente das instâncias do EC2.

C. Armazene as imagens carregadas em um bucket do Amazon S3 e configure uma notificação de evento do bucket do S3 para enviar uma mensagem à fila do Amazon Simple Queue Service (Amazon SQS). Crie uma frota de instâncias do Amazon EC2 para extrair mensagens da fila do SQS e processar as imagens, colocando-as em outro bucket do S3. Use as métricas do Amazon CloudWatch para profundidade da fila e dimensione as instâncias do EC2. Habilite o Amazon CloudFront e configure a origem como o bucket do S3 que contém as imagens processadas. **Mais votado**

D. Armazene as imagens carregadas em um volume compartilhado do Amazon Elastic Block Store (Amazon EBS) montado em uma frota de instâncias Spot do Amazon EC2. Crie uma tabela do Amazon DynamoDB que contenha informações sobre cada imagem carregada e se ela foi processada. Use uma regra do Amazon EventBridge para escalar horizontalmente as instâncias do EC2. Habilite o Amazon CloudFront e configure a origem para referenciar um Elastic Load Balancer na frente da frota de instâncias do EC2.

289- Uma empresa implantou seu banco de dados em uma instância do Amazon RDS para MySQL na região us-east-1. A empresa precisa disponibilizar seus dados para clientes na Europa. Os clientes na Europa devem ter acesso aos mesmos dados que os clientes nos Estados Unidos (EUA) e não tolerarão alta latência de aplicativos ou dados desatualizados. Os clientes na Europa e os clientes nos EUA precisam gravar no banco de dados. Ambos os grupos de clientes precisam ver as atualizações um do outro em tempo real.\

Qual solução atenderá a esses requisitos?

A. Crie uma réplica do Amazon Aurora MySQL da instância do banco de dados RDS para MySQL. Pause as gravações do aplicativo na instância do banco de dados RDS. Promova a réplica do Aurora para um cluster de banco de dados autônomo. Reconfigure o aplicativo para usar o banco de dados Aurora e retome as gravações. Adicione eu-west-1 como uma região secundária ao cluster de banco de dados. Habilite o encaminhamento de gravação no cluster de banco de dados. Implante o aplicativo em eu-west-1. Configure o aplicativo para usar o endpoint do Aurora MySQL em eu-west-1. **Mais votado**

B. Adicione uma réplica entre regiões em eu-west-1 para a instância do banco de dados RDS para MySQL. Configure a réplica para replicar consultas de gravação de volta para a instância do banco de dados principal. Implante o aplicativo em eu-west-1. Configure o aplicativo para usar o endpoint RDS para MySQL em eu-west-1.

C. Copie o snapshot mais recente da instância do RDS para MySQL DB para eu-west-1. Crie uma nova instância do RDS para MySQL DB em eu-west-1 a partir do snapshot. Configure a replicação lógica do MySQL de us-east-1 para eu-west-1. Habilite o encaminhamento de gravação no cluster do banco de dados. Implante o aplicativo em eu-wes&1. Configure o aplicativo para usar o endpoint do RDS para MySQL em eu-west-1.

D. Converta a instância do RDS para MySQL em um cluster de banco de dados MySQL do Amazon Aurora. Adicione eu-west-1 como região secundária ao cluster de banco de dados. Habilite o encaminhamento de gravação no cluster de banco de dados. Implante o aplicativo em eu-west-1. Configure o aplicativo para usar o endpoint do Aurora MySQL em eu-west-1.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/29/)

290- Uma empresa está disponibilizando arquivos para seus clientes por meio de um servidor SFTP acessível pela internet. O servidor SFTP está sendo executado em uma única instância do Amazon EC2 com um endereço IP elástico anexado. Os clientes se conectam ao servidor SFTP por meio de seu endereço IP elástico e usam SSH para autenticação. A instância EC2 também possui um grupo de segurança anexado que permite o acesso de todos os endereços IP dos clientes.\

Um arquiteto de soluções deve implementar uma solução para melhorar a disponibilidade, minimizar a complexidade do gerenciamento da infraestrutura e minimizar a interrupção para os clientes que acessam os arquivos. A solução não deve alterar a maneira como os clientes se conectam.\

Qual solução atenderá a esses requisitos?

A. Desassocie o endereço IP elástico da instância do EC2. Crie um bucket do Amazon S3 para ser usado na hospedagem de arquivos SFTP. Crie um servidor AWS Transfer Family. Configure o servidor Transfer Family com um endpoint de acesso público. Associe o endereço IP elástico SFTP ao novo endpoint. Aponte o servidor Transfer Family para o bucket S3. Sincronize todos os arquivos do servidor SFTP com o bucket S3.

B. Desassocie o endereço IP elástico da instância do EC2. Crie um bucket do Amazon S3 para ser usado na hospedagem de arquivos SFTP. Crie um servidor AWS Transfer Family. Configure o servidor Transfer Family com um endpoint hospedado em VPC e com acesso à Internet. Associe o endereço IP elástico SFTP ao novo endpoint. Anexe o grupo de segurança com os endereços IP dos clientes ao novo endpoint. Aponte o servidor Transfer Family para o bucket S3. Sincronize todos os arquivos do servidor SFTP com o bucket S3. **Mais votado**

C. Desassocie o endereço IP elástico da instância do EC2. Crie um novo sistema de arquivos Amazon Elastic File System (Amazon EFS) para ser usado na hospedagem de arquivos SFTP. Crie uma definição de tarefa do AWS Fargate para executar um servidor SFTP. Especifique o sistema de arquivos EFS como uma montagem na definição de tarefa. Crie um serviço Fargate usando a definição de tarefa e coloque um Balanceador de Carga de Rede (NLB) na frente do serviço. Ao configurar o serviço, anexe o grupo de segurança com os endereços IP do cliente às tarefas que executam o servidor SFTP. Associe o endereço IP elástico ao NLB. Sincronize todos os arquivos do servidor SFTP com o bucket do S3.

D. Desassocie o endereço IP elástico da instância do EC2. Crie um volume do Amazon Elastic Block Store (Amazon EBS) com múltiplas conexões para ser usado na hospedagem de arquivos SFTP. Crie um Balanceador de Carga de Rede (NLB) com o endereço IP elástico anexado. Crie um grupo de Dimensionamento Automático com instâncias do EC2 que executam um servidor SFTP. Defina no grupo de Dimensionamento Automático que as instâncias iniciadas devem anexar o novo volume EBS com múltiplas conexões. Configure o grupo de Dimensionamento Automático para adicionar instâncias automaticamente atrás do NLB. Configure o grupo de Dimensionamento Automático para usar o grupo de segurança que permite endereços IP do cliente para as instâncias do EC2 que o grupo de Dimensionamento Automático inicia. Sincronize todos os arquivos do servidor SFTP com o novo volume EBS com múltiplas conexões.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/29/)

291- Uma empresa ingere e processa dados de mercado em streaming. A taxa de dados é constante. Um processo noturno que calcula estatísticas agregadas leva 4 horas para ser concluído. A análise estatística não é crítica para os negócios e os pontos de dados são processados durante a próxima iteração se uma execução específica falhar.\

A arquitetura atual usa um pool de Instâncias Reservadas do Amazon EC2 com reservas de 1 ano. Essas instâncias do EC2 são executadas em tempo integral para ingerir e armazenar os dados de streaming em volumes anexados do Amazon Elastic Block Store (Amazon EBS). Um script agendado inicia Instâncias Sob Demanda do EC2 todas as noites para realizar o processamento noturno. As instâncias acessam os dados armazenados de compartilhamentos NFS nos servidores de ingestão. O script encerra as instâncias quando o processamento é concluído.\

As reservas de Instâncias Reservadas estão expirando. A empresa precisa decidir se deve adquirir novas reservas ou implementar um novo design.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Atualize o processo de ingestão para usar o Amazon Kinesis Data Firehose para salvar dados no Amazon S3. Use um script agendado para iniciar uma frota de instâncias sob demanda do EC2 todas as noites para realizar o processamento em lote dos dados do S3. Configure o script para encerrar as instâncias quando o processamento for concluído.

B. Atualize o processo de ingestão para usar o Amazon Kinesis Data Firehose para salvar dados no Amazon S3. Use o AWS Batch com instâncias Spot para realizar o processamento noturno com um preço Spot máximo de 50% do preço On-Demand. **Mais votado**

C. Atualizar o processo de ingestão para usar uma frota de Instâncias Reservadas do EC2 com reservas de 3 anos por meio de um Balanceador de Carga de Rede. Usar o AWS Batch com Instâncias Spot para realizar o processamento noturno com um preço Spot máximo de 50% do preço On-Demand.

D. Atualize o processo de ingestão para usar o Amazon Kinesis Data Firehose para salvar dados no Amazon Redshift. Use o Amazon EventBridge para agendar uma função do AWS Lambda para ser executada todas as noites e consultar o Amazon Redshift para gerar estatísticas diárias.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/30/)

292- Uma empresa precisa migrar um site SFTP local para a AWS. O site SFTP atualmente é executado em uma VM Linux. Os arquivos enviados são disponibilizados para aplicativos downstream por meio de um compartilhamento NFS.\

Como parte da migração para a AWS, um arquiteto de soluções deve implementar alta disponibilidade. A solução deve fornecer aos fornecedores externos um conjunto de endereços IP públicos estáticos que os fornecedores possam permitir. A empresa configurou uma conexão AWS Direct Connect entre seu data center local e sua VPC.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um servidor AWS Transfer Family. Configure um endpoint VPC voltado para a Internet para o servidor Transfer Family. Especifique um endereço IP elástico para cada sub-rede. Configure o servidor Transfer Family para colocar arquivos em um sistema de arquivos Amazon Elastic File System (Amazon EFS) implantado em várias Zonas de Disponibilidade. Modifique a configuração nos aplicativos downstream que acessam o compartilhamento NFS existente para montar o endpoint EFS. **Mais votado**

B. Crie um servidor AWS Transfer Family. Configure um endpoint acessível publicamente para o servidor Transfer Family. Configure o servidor Transfer Family para colocar arquivos em um sistema de arquivos Amazon Elastic File System (Amazon EFS) implantado em várias Zonas de Disponibilidade. Modifique a configuração nos aplicativos downstream que acessam o compartilhamento NFS existente para montar o endpoint EFS.

C. Use o AWS Application Migration Service para migrar a VM Linux existente para uma instância do Amazon EC2. Atribua um endereço IP elástico à instância do EC2. Monte um sistema de arquivos do Amazon Elastic File System (Amazon EFS) na instância do EC2. Configure o servidor SFTP para colocar os arquivos no sistema de arquivos EFS. Modifique a configuração nos aplicativos downstream que acessam o compartilhamento NFS existente para montar o endpoint EFS.

D. Use o AWS Application Migration Service para migrar a VM Linux existente para um servidor AWS Transfer Family. Configure um endpoint acessível publicamente para o servidor Transfer Family. Configure o servidor Transfer Family para colocar arquivos em um sistema de arquivos Amazon FSx for Lustre implantado em várias Zonas de Disponibilidade. Modifique a configuração nos aplicativos downstream que acessam o compartilhamento NFS existente para montar o endpoint FSx for Lustre.

293- Um arquiteto de soluções tem uma carga de trabalho operacional implantada em instâncias do Amazon EC2 em um grupo de Auto Scaling. A arquitetura da VPC abrange duas Zonas de Disponibilidade (AZ) com uma sub-rede em cada uma, direcionada ao grupo de Auto Scaling. A VPC está conectada a um ambiente local e a conectividade não pode ser interrompida. O tamanho máximo do grupo de Auto Scaling é de 20 instâncias em serviço. O endereçamento IPv4 da VPC é o seguinte:\


CIDR da VPC: 10.0.0.0/23 -\

CIDR da sub-rede AZ1: 10.0.0.0/24 -\

CIDR da sub-rede AZ2: 10.0.1.0/24 -\

Desde a implantação, uma terceira AZ ficou disponível na região. O arquiteto de soluções deseja adotar a nova AZ sem adicionar espaço de endereço IPv4 adicional e sem tempo de inatividade do serviço. Qual solução atenderá a esses requisitos?

A. Atualize o grupo de Dimensionamento Automático para usar apenas a sub-rede AZ2. Exclua e recrie a sub-rede AZ1 usando metade do espaço de endereço anterior. Ajuste o grupo de Dimensionamento Automático para usar também a nova sub-rede AZ1. Quando as instâncias estiverem íntegras, ajuste o grupo de Dimensionamento Automático para usar apenas a sub-rede AZ1. Remova a sub-rede AZ2 atual. Crie uma nova sub-rede AZ2 usando a segunda metade do espaço de endereço da sub-rede AZ1 original. Crie uma nova sub-rede AZ3 usando metade do espaço de endereço da sub-rede AZ2 original e atualize o grupo de Dimensionamento Automático para atingir todas as três novas sub-redes. **Mais votado**

B. Encerre as instâncias do EC2 na sub-rede AZ1. Exclua e recrie a sub-rede AZ1 usando metade do espaço de endereço. Atualize o grupo de Dimensionamento Automático para usar essa nova sub-rede. Repita isso para a segunda AZ. Defina uma nova sub-rede na AZ3 e atualize o grupo de Dimensionamento Automático para atingir as três novas sub-redes.

C. Crie uma nova VPC com o mesmo espaço de endereço IPv4 e defina três sub-redes, uma para cada zona de disponibilidade (AZ). Atualize o grupo de Dimensionamento Automático existente para direcionar as novas sub-redes na nova VPC.

D. Atualize o grupo de Dimensionamento Automático para usar apenas a sub-rede AZ2. Atualize a sub-rede AZ1 para ter metade do espaço de endereço anterior. Ajuste o grupo de Dimensionamento Automático para usar também a sub-rede AZ1 novamente. Quando as instâncias estiverem íntegras, ajuste o grupo de Dimensionamento Automático para usar apenas a sub-rede AZ1. Atualize a sub-rede AZ2 atual e atribua a segunda metade do espaço de endereço da sub-rede AZ1 original. Crie uma nova sub-rede AZ3 usando metade do espaço de endereço da sub-rede AZ2 original e atualize o grupo de Dimensionamento Automático para atingir todas as três novas sub-redes.

294- Uma empresa utiliza uma organização no AWS Organizations para gerenciar suas contas na AWS. A empresa utiliza o AWS CloudFormation para implantar toda a infraestrutura. Uma equipe financeira deseja criar um modelo de chargeback. A equipe financeira solicitou que cada unidade de negócios marcasse recursos usando uma lista predefinida de valores de projeto.\

Ao utilizar o Relatório de Custos e Uso da AWS no AWS Cost Explorer e filtrar por projeto, a equipe notou valores de projeto não compatíveis. A empresa deseja impor o uso de marcas de projeto para novos recursos.\

Qual solução atenderá a esses requisitos com o MENOR esforço?

A. Crie uma política de tags que contenha os valores de tags de projeto permitidos na conta de gerenciamento da organização. Crie um SCP que negue a operação da API cloudformation:CreateStack, a menos que uma tag de projeto seja adicionada. Anexe o SCP a cada UO. **Mais votado**

B. Crie uma política de tags que contenha os valores de tags de projeto permitidos em cada UO. Crie um SCP que negue a operação da API cloudformation:CreateStack, a menos que uma tag de projeto seja adicionada. Anexe o SCP a cada UO.

C. Crie uma política de tags que contenha os valores de tags de projeto permitidos na conta de gerenciamento da AWS. Crie uma política do IAM que negue a operação da API cloudformation:CreateStack, a menos que uma tag de projeto seja adicionada. Atribua a política a cada usuário.

D. Use o AWS Service Catalog para gerenciar as pilhas do CloudFormation como produtos. Use uma biblioteca TagOptions para controlar os valores das tags do projeto. Compartilhe o portfólio com todas as UOs da organização.

295- Uma aplicação é implantada em instâncias do Amazon EC2 executadas em um grupo de Auto Scaling. A configuração do grupo de Auto Scaling utiliza apenas um tipo de instância.\

As métricas de utilização de CPU e memória mostram que as instâncias estão subutilizadas. Um arquiteto de soluções precisa implementar uma solução para reduzir permanentemente o custo do EC2 e aumentar a utilização.\

Qual solução atenderá a esses requisitos com o MENOR número de alterações de configuração no futuro?

A. Liste os tipos de instância que possuem propriedades semelhantes às das instâncias atuais. Modifique a configuração do modelo de inicialização do grupo de Dimensionamento Automático para usar vários tipos de instância da lista.

B. Use as informações sobre a utilização de CPU e memória do aplicativo para selecionar um tipo de instância que atenda aos requisitos. Modifique a configuração do grupo de Dimensionamento Automático adicionando o novo tipo de instância. Remova o tipo de instância atual da configuração.

C. Use as informações sobre a utilização de CPU e memória do aplicativo para especificar os requisitos de CPU e memória em uma nova revisão do modelo de inicialização do grupo de Dimensionamento Automático. Remova o tipo de instância atual da configuração. **Mais votado**

D. Crie um script que selecione os tipos de instância apropriados da API em massa da Lista de Preços da AWS. Use os tipos de instância selecionados para criar uma nova revisão do modelo de inicialização do grupo de Auto Scaling.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/30/)

296- Uma empresa implementa uma aplicação em contêiner usando o Amazon Elastic Container Service (Amazon ECS) e o Amazon API Gateway. Os dados da aplicação são armazenados nos bancos de dados Amazon Aurora e Amazon DynamoDB. A empresa automatiza o provisionamento da infraestrutura usando o AWS CloudFormation. A empresa automatiza a implantação de aplicações usando o AWS CodePipeline.\

Um arquiteto de soluções precisa implementar uma estratégia de recuperação de desastres (DR) que atenda a um RPO de 2 horas e um RTO de 4 horas.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Configure um banco de dados global Aurora e tabelas globais do DynamoDB para replicar os bancos de dados para uma região secundária da AWS. Na região primária e na região secundária, configure uma API do API Gateway com um endpoint regional. Implemente o Amazon CloudFront com failover de origem para rotear o tráfego para a região secundária durante um cenário de recuperação de desastres.

B. Use o AWS Database Migration Service (AWS DMS), o Amazon EventBridge e o AWS Lambda para replicar os bancos de dados Aurora para uma região secundária da AWS. Use o DynamoDB Streams, o EventBridge e o Lambda para replicar os bancos de dados DynamoDB para a região secundária. Na região primária e na região secundária, configure uma API do API Gateway com um endpoint regional. Implemente o roteamento de failover do Amazon Route 53 para alternar o tráfego da região primária para a região secundária.

C. Use o AWS Backup para criar backups dos bancos de dados Aurora e DynamoDB em uma região secundária da AWS. Na região primária e na região secundária, configure uma API do API Gateway com um endpoint regional. Implemente o roteamento de failover do Amazon Route 53 para alternar o tráfego da região primária para a secundária. **Mais votado**

D. Configure um banco de dados global Aurora e tabelas globais do DynamoDB para replicar os bancos de dados para uma região secundária da AWS. Na região primária e na região secundária, configure uma API do API Gateway com um endpoint regional. Implemente o roteamento de failover do Amazon Route 53 para alternar o tráfego da região primária para a região secundária.

297- Uma empresa possui uma aplicação web complexa que utiliza o Amazon CloudFront para escalabilidade e desempenho globais. Com o tempo, os usuários relatam que a aplicação web está ficando lenta.\

A equipe de operações da empresa relata que a taxa de acertos do cache do CloudFront tem caído constantemente. O relatório de métricas de cache indica que as strings de consulta em algumas URLs estão ordenadas de forma inconsistente e são especificadas, às vezes, com letras maiúsculas e minúsculas.\

Qual conjunto de ações o arquiteto de soluções deve tomar para aumentar a taxa de acertos do cache o mais rápido possível?

A. Implante uma função Lambda@Edge para classificar os parâmetros por nome e forçá-los a usar letras minúsculas. Selecione o gatilho de solicitação do visualizador do CloudFront para invocar a função. **Mais votado**

B. Atualize a distribuição do CloudFront para desabilitar o cache com base nos parâmetros da string de consulta.

C. Implante um proxy reverso após o balanceador de carga para pós-processar as URLs emitidas no aplicativo para forçar que as strings de URL sejam em minúsculas.

D. Atualize a distribuição do CloudFront para especificar o processamento de string de consulta sem diferenciação de maiúsculas e minúsculas.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/30/)

298- Uma empresa executa um aplicativo de e-commerce em uma única região da AWS. O aplicativo utiliza um cluster de banco de dados MySQL do Amazon Aurora de cinco nós para armazenar informações sobre clientes e seus pedidos recentes. O cluster de banco de dados recebe um grande número de transações de gravação ao longo do dia.\

A empresa precisa replicar os dados do banco de dados Aurora para outra região para atender aos requisitos de recuperação de desastres. A empresa tem um RPO de 1 hora.\

Qual solução atenderá a esses requisitos com o MENOR custo?

A. Modifique o banco de dados Aurora para que ele se torne um banco de dados global Aurora. Crie um segundo banco de dados Aurora em outra região.

B. Habilite o recurso Backtrack para o banco de dados Aurora. Crie uma função do AWS Lambda que seja executada diariamente para copiar os snapshots do banco de dados para uma região de backup.

C. Use o AWS Database Migration Service (AWS DMS). Crie uma tarefa de captura de dados alterados (CDC) do DMS que replique as alterações em andamento do banco de dados Aurora para um bucket do Amazon S3 em outra região. **Mais votado**

D. Desative os backups automatizados do Aurora. Configure os backups do Aurora com uma frequência de backup de 1 hora. Especifique outra região como região de destino. Selecione o banco de dados Aurora como a atribuição de recurso.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/30/)

299- O arquiteto de soluções de uma empresa está avaliando uma carga de trabalho da AWS implantada há vários anos. A camada de aplicação não possui estado e é executada em uma única instância grande do Amazon EC2, iniciada a partir de uma AMI. A aplicação armazena dados em um banco de dados MySQL executado em uma única instância do EC2.\

A utilização da CPU na instância do EC2 do servidor de aplicações frequentemente atinge 100%, fazendo com que a aplicação pare de responder. A empresa instala patches manualmente nas instâncias. A aplicação de patches já causou tempo de inatividade no passado. A empresa precisa tornar a aplicação altamente disponível.\

Qual solução atenderá a esses requisitos com o MENOR tempo de desenvolvimento?

A. Mova a camada de aplicação para as funções do AWS Lambda na VPC existente. Crie um Application Load Balancer para distribuir o tráfego entre as funções do Lambda. Use o Amazon GuardDuty para escanear as funções do Lambda. Migre o banco de dados para o Amazon DocumentDB (compatível com MongoDB).

B. Altere o tipo de instância do EC2 para um tipo de instância menor, alimentado pelo Graviton. Use a AMI existente para criar um modelo de inicialização para um grupo de Auto Scaling. Crie um Application Load Balancer para distribuir o tráfego entre as instâncias no grupo de Auto Scaling. Configure o grupo de Auto Scaling para escalar com base na utilização da CPU. Migre o banco de dados para o Amazon DynamoDB.

C. Mova a camada de aplicação para contêineres usando o Docker. Execute os contêineres no Amazon Elastic Container Service (Amazon ECS) com instâncias do EC2. Crie um Application Load Balancer para distribuir o tráfego pelo cluster ECS. Configure o cluster ECS para escalar com base na utilização da CPU. Migre o banco de dados para o Amazon Neptune.

D. Crie uma AMI configurada com o AWS Systems Manager Agent (SSM Agent). Use a nova AMI para criar um modelo de inicialização para um grupo de Auto Scaling. Use instâncias menores no grupo de Auto Scaling. Crie um Application Load Balancer para distribuir o tráfego entre as instâncias no grupo de Auto Scaling. Configure o grupo de Auto Scaling para escalar com base na utilização da CPU. Migre o banco de dados para o Amazon Aurora MySQL.

300- Uma empresa está planejando migrar vários aplicativos para a AWS. A empresa não tem um bom entendimento de todo o seu parque de aplicativos. O parque consiste em uma mistura de máquinas físicas e VMs.\

Um aplicativo que a empresa migrará possui muitas dependências sensíveis à latência. A empresa não tem certeza de quais são todas as dependências. No entanto, a empresa sabe que as comunicações de baixa latência usam um protocolo IP personalizado que é executado na porta 1000. A empresa deseja migrar o aplicativo e essas dependências juntos para mover todas as interfaces de baixa latência para a AWS ao mesmo tempo.\

A empresa instalou o AWS Application Discovery Agent e vem coletando dados há vários meses.\

O que a empresa deve fazer para identificar as dependências que precisam ser migradas na mesma fase do aplicativo?

A. Use o AWS Migration Hub e selecione os servidores que hospedam o aplicativo. Visualize o gráfico de rede para encontrar os servidores que interagem com o aplicativo. Ative a exploração de dados no Amazon Athena. Consulte os dados transferidos entre os servidores para identificar os servidores que se comunicam na porta 1000. Retorne ao Migration Hub. Crie um grupo de movimentação com base nas descobertas das consultas do Athena. **Mais votado**

B. Use o AWS Application Migration Service e selecione os servidores que hospedam o aplicativo. Visualize o gráfico de rede para encontrar os servidores que interagem com o aplicativo. Configure o Application Migration Service para iniciar instâncias de teste para todos os servidores que interagem com o aplicativo. Execute testes de aceitação nas instâncias de teste. Se nenhum problema for identificado, crie um grupo de movimentação com base nos servidores testados.

C. Use o AWS Migration Hub e selecione os servidores que hospedam o aplicativo. Ative a exploração de dados no Network Access Analyzer. Use o console do Network Access Analyzer para selecionar os servidores que hospedam o aplicativo. Selecione um Network Access Scope de porta 1000 e anote os servidores correspondentes. Retorne ao Migration Hub. Crie um grupo de movimentação com base nas descobertas do Network Access Analyzer.

D. Use o AWS Migration Hub e selecione os servidores que hospedam o aplicativo. Envie o agente do Amazon CloudWalch para os servidores identificados usando o AWS Application Discovery Agent. Exporte os logs do CloudWatch coletados pelos agentes para o Amazon S3. Use o Amazon Athena para consultar os logs e encontrar servidores que se comunicam na porta 1000. Retorne ao Migration Hub e crie um grupo de movimentação com base nas descobertas das consultas do Athena.

301- Uma empresa está desenvolvendo um aplicativo que será executado em uma função do AWS Lambda. Centenas de clientes usarão o aplicativo. A empresa deseja fornecer a cada cliente uma cota de solicitações para um período específico. As cotas devem corresponder aos padrões de uso dos clientes. Alguns clientes precisam receber uma cota maior por um período menor.\

Qual solução atenderá a esses requisitos?

A. Crie uma API REST do Amazon API Gateway com integração de proxy para invocar a função Lambda. Para cada cliente, configure um plano de uso do API Gateway que inclua uma cota de solicitações apropriada. Crie uma chave de API a partir do plano de uso para cada usuário necessário ao cliente. **Mais votado**

B. Crie uma API HTTP do Amazon API Gateway com integração de proxy para invocar a função Lambda. Para cada cliente, configure um plano de uso do API Gateway que inclua uma cota de solicitações apropriada. Configure a limitação em nível de rota para cada plano de uso. Crie uma chave de API a partir do plano de uso para cada usuário necessário ao cliente.

C. Crie um alias de função Lambda para cada cliente. Inclua um limite de simultaneidade com uma cota de solicitações apropriada. Crie uma URL de função Lambda para cada alias de função. Compartilhe a URL da função Lambda para cada alias com o cliente relevante.

D. Crie um Application Load Balancer (ALB) em uma VPC. Configure a função Lambda como destino para o ALB. Configure uma ACL da Web do AWS WAF para o ALB. Para cada cliente, configure uma regra baseada em regras que inclua uma cota de solicitações apropriada.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/31/)

302- Uma empresa está planejando migrar seu cluster VMware local de 120 VMs para a AWS. As VMs têm diversos sistemas operacionais e diversos pacotes de software personalizados instalados. A empresa também possui um servidor NFS local de 10 TB. A empresa configurou uma conexão AWS Direct Connect de 10 Gbps com a AWS para a migração.\

Qual solução concluirá a migração para a AWS no MENOR tempo?

A. Exporte as VMs locais e copie-as para um bucket do Amazon S3. Use o VM Import/Export para criar AMIs a partir das imagens de VM armazenadas no Amazon S3. Solicite um dispositivo AWS Snowball Edge. Copie os dados do servidor NFS para o dispositivo. Restaure os dados do servidor NFS para uma instância do Amazon EC2 com NFS configurado.

B. Configure o AWS Application Migration Service com uma conexão ao cluster VMware. Crie uma tarefa de replicação para o VMS. Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS). Configure o AWS DataSync para copiar os dados do servidor NFS para o sistema de arquivos EFS pela conexão Direct Connect. **Mais votado**

C. Recrie as VMs na AWS como instâncias do Amazon EC2. Instale todos os pacotes de software necessários. Crie um sistema de arquivos do Amazon FSx para Lustre. Configure o AWS DataSync para copiar os dados do servidor NFS para o sistema de arquivos do FSx para Lustre pela conexão Direct Connect.

D. Encomende dois dispositivos AWS Snowball Edge. Copie as VMs e os dados do servidor NFS para os dispositivos. Execute a Importação/Exportação de VMs após o carregamento dos dados dos dispositivos em um bucket do Amazon S3. Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS). Copie os dados do servidor NFS do Amazon S3 para o sistema de arquivos EFS.

303- Uma empresa de pesquisas online executa seu aplicativo na Nuvem AWS. O aplicativo é distribuído e consiste em microsserviços executados em um cluster do Amazon Elastic Container Service (Amazon ECS) dimensionado automaticamente. O cluster ECS é um destino para um Balanceador de Carga de Aplicativos (ALB). O ALB é uma origem personalizada para uma distribuição do Amazon CloudFront.\

A empresa possui uma pesquisa que contém dados confidenciais. Os dados confidenciais devem ser criptografados ao transitarem pelo aplicativo. O microsserviço de tratamento de dados do aplicativo é o único microsserviço capaz de descriptografar os dados.\

Qual solução atenderá a esses requisitos?

A. Crie uma chave simétrica do AWS Key Management Service (AWS KMS) dedicada ao microsserviço de tratamento de dados. Crie um perfil de criptografia em nível de campo e uma configuração. Associe a chave KMS e a configuração ao comportamento do cache do CloudFront.

B. Crie um par de chaves RSA dedicado ao microsserviço de tratamento de dados. Carregue a chave pública na distribuição do CloudFront. Crie um perfil de criptografia em nível de campo e uma configuração. Adicione a configuração ao comportamento de cache do CloudFront. **Mais votado**

C. Crie uma chave simétrica do AWS Key Management Service (AWS KMS) dedicada ao microsserviço de tratamento de dados. Crie uma função Lambda@Edge. Programe a função para usar a chave KMS para criptografar os dados confidenciais.

D. Crie um par de chaves RSA dedicado ao microsserviço de tratamento de dados. Crie uma função Lambda@Edge. Programe a função para usar a chave privada do par de chaves RSA para criptografar os dados confidenciais.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/31/)

304- Um arquiteto de soluções está definindo a estratégia de DNS para uma VPC existente. A VPC está provisionada para usar o bloco CIDR 10.24.34.0/24. A VPC também usa o Amazon Route 53 Resolver para DNS. Novos requisitos exigem que as consultas DNS usem zonas hospedadas privadas. Além disso, instâncias com endereços IP públicos devem receber nomes de host públicos correspondentes.\

Qual solução atenderá a esses requisitos para garantir que os nomes de domínio sejam resolvidos corretamente na VPC?

A. Crie uma zona hospedada privada. Ative os atributos enableDnsSupport e enableDnsHostnames para a VPC. Atualize o conjunto de opções de DHCP da VPC para incluir domain-name-servers=10.24.34.2.

B. Crie uma zona de hospedagem privada. Associe a zona de hospedagem privada à VPC. Ative os atributos enableDnsSupport e enableDnsHostnames para a VPC. Crie um novo conjunto de opções DHCP para a VPC e configure domain-name-servers=AmazonProvidedDNS. Associe o novo conjunto de opções DHCP à VPC. **Mais votado**

C. Desative o atributo enableDnsSupport para a VP. Ative o atributo enableDnsHostnames para a VPC. Crie um novo conjunto de opções DHCP para a VPC e configure doman-name-servers=10.24.34.2. Associe o novo conjunto de opções DHCP à VPC.

D. Crie uma zona de hospedagem privada. Associe a zona de hospedagem privada à VPC. Ative o atributo enableDnsSupport para a VPC. Desative o atributo enableDnsHostnames para a VPC. Atualize o conjunto de opções de DHCP da VPC para incluir domain-name-servers=AmazonProvidedDNS.

305- Uma empresa de análise de dados possui um cluster do Amazon Redshift composto por vários nós reservados. O cluster está enfrentando picos inesperados de uso porque uma equipe de funcionários está compilando um relatório de análise de auditoria aprofundada. As consultas para gerar o relatório são consultas de leitura complexas e exigem uso intensivo de CPU.\

Os requisitos de negócios exigem que o cluster seja capaz de atender a consultas de leitura e gravação o tempo todo. Um arquiteto de soluções deve desenvolver uma solução que acomode os picos de uso.\

Qual solução atende a esses requisitos com a MELHOR relação custo-benefício?

A. Provisione um cluster do Amazon EMR. Descarregue as tarefas complexas de processamento de dados.

B. Implante uma função do AWS Lambda para adicionar capacidade ao cluster do Amazon Redshift usando uma operação de redimensionamento clássica quando as métricas de CPU do cluster no Amazon CloudWatch atingirem 80%.

C. Implante uma função do AWS Lambda para adicionar capacidade ao cluster do Amazon Redshift usando uma operação de redimensionamento elástico quando as métricas de CPU do cluster no Amazon CloudWatch atingirem 80%.

D. Ative o recurso de dimensionamento de simultaneidade para o cluster do Amazon Redshift.

306- Um centro de pesquisa está migrando para a Nuvem AWS e moveu seu armazenamento de objetos local de 1 PB para um bucket do Amazon S3. Cem cientistas estão usando esse armazenamento de objetos para armazenar seus documentos relacionados ao trabalho. Cada cientista tem uma pasta pessoal no armazenamento de objetos. Todos os cientistas são membros de um único grupo de usuários do IAM.\

O responsável pela conformidade do centro de pesquisa está preocupado com a possibilidade de os cientistas acessarem o trabalho uns dos outros. O centro de pesquisa tem a estrita obrigação de relatar qual cientista acessa quais documentos. A equipe responsável por esses relatórios tem pouca experiência com a AWS e deseja uma solução pronta para uso que minimize a sobrecarga operacional.\

Qual combinação de ações um arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha duas.)

A. Crie uma política de identidade que conceda ao usuário acesso de leitura e gravação. Adicione uma condição que especifique que os caminhos S3 devem ter o prefixo \$(aws:username). Aplique a política ao grupo de usuários do IAM dos cientistas. **Mais votado**

B. Configure uma trilha com o AWS CloudTrail para capturar todos os eventos em nível de objeto no bucket do S3. Armazene a saída da trilha em outro bucket do S3. Use o Amazon Athena para consultar os logs e gerar relatórios. **Mais votado**

C. Habilite o registro de acesso ao servidor S3. Configure outro bucket S3 como destino para entrega de logs. Use o Amazon Athena para consultar os logs e gerar relatórios.

D. Crie uma política de bucket do S3 que conceda acesso de leitura e gravação aos usuários no grupo de usuários do IAM dos cientistas.

E. Configure uma trilha com o AWS CloudTrail para capturar todos os eventos em nível de objeto no bucket do S3 e gravá-los no Amazon CloudWatch. Use o conector do Amazon Athena CloudWatch para consultar os logs e gerar relatórios.

307- Uma empresa usa o AWS Organizations para gerenciar uma estrutura com várias contas. A empresa possui centenas de contas na AWS e espera que o número de contas aumente. A empresa está desenvolvendo um novo aplicativo que usa imagens do Docker. A empresa enviará as imagens do Docker para o Amazon Elastic Container Registry (Amazon ECR). Somente contas dentro da organização da empresa devem ter acesso às imagens.\

A empresa possui um processo de CI/CD executado com frequência. A empresa deseja manter todas as imagens marcadas. No entanto, a empresa deseja manter apenas as cinco imagens não marcadas mais recentes.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um repositório privado no Amazon ECR. Crie uma política de permissões para o repositório que permita apenas as operações de ECR necessárias. Inclua uma condição para permitir as operações de ECR se o valor da chave de condição aws:PrincipalOrglD for igual ao ID da organização da empresa. Adicione uma regra de ciclo de vida ao repositório ECR que exclua todas as imagens não marcadas acima de cinco. **Mais votado**

B. Crie um repositório público no Amazon ECR. Crie uma função do IAM na conta do ECR. Defina permissões para que qualquer conta possa assumir a função se o valor da chave de condição aws:PrincipalOrglD for igual ao ID da organização da empresa. Adicione uma regra de ciclo de vida ao repositório do ECR que exclua todas as imagens não marcadas acima de cinco.

C. Crie um repositório privado no Amazon ECR. Crie uma política de permissões para o repositório que inclua apenas as operações de ECR necessárias. Inclua uma condição para permitir as operações de ECR para todos os IDs de conta na organização. Agende uma regra diária do Amazon EventBridge para invocar uma função do AWS Lambda que exclua todas as imagens não marcadas acima de cinco.

D. Crie um repositório público no Amazon ECR. Configure o Amazon ECR para usar um endpoint de VPC de interface com uma política de endpoint que inclua as permissões necessárias para as imagens que a empresa precisa extrair. Inclua uma condição para permitir as operações do ECR para todos os IDs de conta na organização da empresa. Agende uma regra diária do Amazon EventBridge para invocar uma função do AWS Lambda que exclua todas as imagens não marcadas acima de cinco.

308- Um arquiteto de soluções está revisando o processo de uma empresa para tirar snapshots de instâncias de banco de dados do Amazon RDS. A empresa tira snapshots automáticos todos os dias e os mantém por 7 dias.\

O arquiteto de soluções precisa recomendar uma solução que tire snapshots a cada 6 horas e os mantenha por 30 dias. A empresa usa o AWS Organizations para gerenciar todas as suas contas da AWS. A empresa precisa de uma visão consolidada da integridade dos snapshots do RDS.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Ative o recurso de gerenciamento entre contas no AWS Backup. Crie um plano de backup que especifique a frequência e os requisitos de retenção. Adicione uma tag às instâncias de banco de dados. Aplique o plano de backup usando tags. Use o AWS Backup para monitorar o status dos backups. **Mais votado**

B. Ative o recurso de gerenciamento entre contas no Amazon RDS. Crie uma política global de snapshots que especifique a frequência e os requisitos de retenção. Use o console do RDS na conta de gerenciamento para monitorar o status dos backups.

C. Ative o recurso de gerenciamento entre contas no AWS CloudFormation. Na conta de gerenciamento, implante um conjunto de pilhas do CloudFormation que contenha um plano de backup do AWS Backup que especifique a frequência e os requisitos de retenção. Crie uma função do AWS Lambda na conta de gerenciamento para monitorar o status dos backups. Crie uma regra do Amazon EventBridge em cada conta para executar a função do Lambda conforme uma programação.

D. Configure o AWS Backup em cada conta. Crie uma política de ciclo de vida do Amazon Data Lifecycle Manager que especifique a frequência e os requisitos de retenção. Especifique as instâncias de banco de dados como o recurso de destino. Use o console do Amazon Data Lifecycle Manager em cada conta-membro para monitorar o status dos backups.

309- Uma empresa utiliza o AWS Organizations com uma arquitetura multicontas. A configuração de segurança atual da empresa para a arquitetura de contas inclui SCPs, políticas baseadas em recursos, políticas baseadas em identidade, políticas de confiança e políticas de sessão.\

Um arquiteto de soluções precisa permitir que um usuário do IAM na Conta A assuma uma função na Conta B.\

Qual combinação de etapas o arquiteto de soluções deve seguir para atender a esse requisito? (Escolha três.)

A. Configure o SCP para a Conta A para permitir a ação. **Mais votado**

B. Configure as políticas baseadas em recursos para permitir a ação.

C. Configure a política baseada em identidade no usuário na Conta A para permitir a ação. **Mais votado**

D. Configure a política baseada em identidade no usuário na Conta B para permitir a ação.

E. Configure a política de confiança na função de destino na Conta B para permitir a ação. **Mais votado**

F. Configure a política de sessão para permitir a ação e ser passada programaticamente pela operação da API GetSessionToken.

310- Uma empresa deseja usar o Amazon S3 para fazer backup de sua solução de armazenamento de arquivos local. A solução de armazenamento de arquivos local da empresa oferece suporte a NFS, e a empresa deseja que sua nova solução também ofereça suporte a NFS. A empresa deseja arquivar os arquivos de backup após 5 dias. Se a empresa precisar arquivar os arquivos para recuperação de desastres, ela está disposta a aguardar alguns dias para recuperá-los.\

Qual solução atende a esses requisitos com a MELHOR relação custo-benefício?

A. Implante um gateway de arquivos do AWS Storage Gateway associado a um bucket do S3. Mova os arquivos da solução de armazenamento de arquivos local para o gateway de arquivos. Crie uma regra de ciclo de vida do S3 para mover os arquivos para o S3 Standard-Infrequent Access (S3 Standard-IA) após 5 dias.

B. Implante um gateway de volume do AWS Storage Gateway associado a um bucket do S3. Mova os arquivos da solução de armazenamento de arquivos local para o gateway de volume. Crie uma regra de ciclo de vida do S3 para mover os arquivos para o S3 Glacier Deep Archive após 5 dias.

C. Implante um gateway de fita do AWS Storage Gateway associado a um bucket do S3. Mova os arquivos da solução de armazenamento de arquivos local para o gateway de fita. Crie uma regra de ciclo de vida do S3 para mover os arquivos para o S3 Standard-Infrequent Access (S3 Standard-IA) após 5 dias.

D. Implante um gateway de arquivos do AWS Storage Gateway associado a um bucket do S3. Mova os arquivos da solução de armazenamento de arquivos local para o gateway de arquivos. Crie uma regra de ciclo de vida do S3 para mover os arquivos para o S3 Glacier Deep Archive após 5 dias. **M**

311- Uma empresa executa sua aplicação em instâncias do Amazon EC2 e funções do AWS Lambda. As instâncias do EC2 sofrem uma carga contínua e estável. As funções do Lambda sofrem uma carga variada e imprevisível. A aplicação inclui uma camada de cache que utiliza um cluster do Amazon MemoryDB para Redis.\

Um arquiteto de soluções deve recomendar uma solução para minimizar os custos mensais gerais da empresa.\

Qual solução atenderá a esses requisitos?

A. Adquira um Plano de Economia para instâncias do EC2 para cobrir as instâncias do EC2. Adquira um Plano de Economia para Computação do Lambda para cobrir o consumo mínimo esperado das funções do Lambda. Adquira nós reservados para cobrir os nós de cache do MemoryDB. **Mais votado**

B. Adquira um Compute Savings Plan para cobrir as instâncias do EC2. Adquira a simultaneidade reservada do Lambda para cobrir o uso esperado do Lambda. Adquira nós reservados para cobrir os nós de cache do MemoryDB.

C. Adquira um Compute Savings Plan para cobrir todo o custo esperado das instâncias do EC2, funções do Lambda e nós de cache do MemoryDB.

D. Adquira um Compute Savings Plan para cobrir as instâncias do EC2 e os nós de cache do MemoryDB. Adquira a simultaneidade reservada do Lambda para cobrir o uso esperado do Lambda.

312- Uma empresa está lançando um novo jogo online em instâncias do Amazon EC2. O jogo deve estar disponível globalmente. A empresa planeja executá-lo em três regiões da AWS: us-east-1, eu-west-1 e ap-southeast-1. As tabelas de classificação, o inventário de jogadores e o status dos eventos do jogo devem estar disponíveis em todas as regiões.\

Um arquiteto de soluções deve projetar uma solução que permita que qualquer região seja escalonada para lidar com a carga de todas as regiões. Além disso, os usuários devem se conectar automaticamente à região que oferece a menor latência.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma Frota Spot do EC2. Conecte a Frota Spot a um Balanceador de Carga de Rede (NLB) em cada região. Crie um endereço IP do AWS Global Accelerator que aponte para o NLB. Crie uma entrada de roteamento baseada em latência do Amazon Route 53 para o endereço IP do Global Accelerator. Salve os metadados do jogo em uma instância de banco de dados do Amazon RDS para MySQL em cada região. Configure uma réplica de leitura nas outras regiões.

B. Crie um grupo de Auto Scaling para as instâncias do EC2. Anexe o grupo de Auto Scaling a um Balanceador de Carga de Rede (NLB) em cada região. Para cada região, crie uma entrada do Amazon Route 53 que use roteamento de geoproximidade e aponte para o NLB nessa região. Salve os metadados do jogo em bancos de dados MySQL nas instâncias do EC2 em cada região. Configure a replicação entre as instâncias do EC2 do banco de dados em cada região.

C. Crie um grupo de Auto Scaling para as instâncias do EC2. Anexe o grupo de Auto Scaling a um Balanceador de Carga de Rede (NLB) em cada região. Para cada região, crie uma entrada do Amazon Route 53 que use roteamento baseado em latência e aponte para o NLB nessa região. Salve os metadados do jogo em uma tabela global do Amazon DynamoDB. **Mais votado**

D. Use a Visão Global do EC2. Implante as instâncias do EC2 em cada região. Conecte as instâncias a um Balanceador de Carga de Rede (NLB). Implante um servidor DNS em uma instância do EC2 em cada região. Configure uma lógica personalizada em cada servidor DNS para redirecionar o usuário para a região que oferece a menor latência. Salve os metadados do jogo em um banco de dados global do Amazon Aurora.

313- Uma empresa está implantando uma solução de firewall de terceiros do AWS Marketplace para monitorar e proteger o tráfego que sai dos ambientes AWS da empresa. A empresa deseja implantar esse dispositivo em uma VPC de serviços compartilhados e rotear todo o tráfego de saída para a Internet por meio dos dispositivos.\

Um arquiteto de soluções precisa recomendar um método de implantação que priorize a confiabilidade e minimize o tempo de failover entre dispositivos de firewall em uma única região da AWS. A empresa configurou o roteamento da VPC de serviços compartilhados para outras VPCs.\

Quais etapas o arquiteto de soluções deve recomendar para atender a esses requisitos? (Escolha três.)

A. Implante dois dispositivos de firewall na VPC de serviços compartilhados, cada um em uma Zona de Disponibilidade separada. **Mais votado**

B. Crie um novo Balanceador de Carga de Rede na VPC de serviços compartilhados. Crie um novo grupo de destino e anexe-o ao novo Balanceador de Carga de Rede. Adicione cada uma das instâncias do dispositivo de firewall ao grupo de destino.

C. Crie um novo Gateway Load Balancer no VPC de serviços compartilhados. Crie um novo grupo de destino e anexe-o ao novo Gateway Load Balancer. Adicione cada uma das instâncias do dispositivo de firewall ao grupo de destino. **Mais votado**

D. Crie um endpoint de interface da VPC. Adicione uma rota à tabela de rotas na VPC de serviços compartilhados. Designe o novo endpoint como o próximo salto para o tráfego que entra na VPC de serviços compartilhados vindo de outras VPCs.

E. Implante dois dispositivos de firewall na VPC de serviços compartilhados, cada um na mesma Zona de Disponibilidade.

F. Crie um endpoint do VPC Gateway Load Balancer. Adicione uma rota à tabela de rotas na VPC de serviços compartilhados. Designe o novo endpoint como o próximo salto para o tráfego que entra na VPC de serviços compartilhados vindo de outras VPCs. **M**

314- Um arquiteto de soluções precisa migrar um aplicativo legado local para a AWS. O aplicativo é executado em dois servidores, atrás de um balanceador de carga. O aplicativo requer um arquivo de licença associado ao endereço MAC do adaptador de rede do servidor. O fornecedor do software leva 12 horas para enviar novos arquivos de licença. O aplicativo também usa arquivos de configuração com um endereço IP estático para acessar um servidor de banco de dados; nomes de host não são suportados.\

Considerando esses requisitos, qual combinação de etapas deve ser adotada para implementar uma arquitetura de alta disponibilidade para os servidores de aplicativos na AWS? (Escolha duas.)

A. Crie um pool de ENIs. Solicite os arquivos de licença do fornecedor para o pool e armazene-os no Amazon S3. Crie um script de automação de bootstrap para baixar um arquivo de licença e anexar a ENI correspondente a uma instância do Amazon EC2. **Mais votado**

B. Crie um pool de ENIs. Solicite os arquivos de licença do fornecedor para o pool e armazene os arquivos de licença em uma instância do Amazon EC2. Crie uma AMI a partir da instância e use-a para todas as instâncias futuras do EC2.

C. Crie um script de automação de bootstrap para solicitar um novo arquivo de licença do fornecedor. Quando a resposta for recebida, aplique o arquivo de licença a uma instância do Amazon EC2.

D. Edite o script de automação do bootstrap para ler o endereço IP do servidor de banco de dados do AWS Systems Manager Parameter Store e injete o valor nos arquivos de configuração locais. **Mais votado**

E. Edite uma instância do Amazon EC2 para incluir o endereço IP do servidor de banco de dados nos arquivos de configuração e recrie a AMI a ser usada em todas as instâncias futuras do EC2.

315- Uma empresa executa seu aplicativo de relatórios de vendas em uma região da AWS nos Estados Unidos. O aplicativo usa uma API regional do Amazon API Gateway e funções do AWS Lambda para gerar relatórios sob demanda a partir de dados em um banco de dados Amazon RDS para MySQL. O front-end do aplicativo é hospedado no Amazon S3 e é acessado pelos usuários por meio de uma distribuição do Amazon CloudFront. A empresa usa o Amazon Route 53 como serviço DNS para o domínio. O Route 53 está configurado com uma política de roteamento simples para rotear o tráfego para a API do API Gateway.\

Nos próximos 6 meses, a empresa planeja expandir suas operações para a Europa. Mais de 90% do tráfego do banco de dados é somente leitura. A empresa já implantou uma API do API Gateway e funções do Lambda na nova região.\

Um arquiteto de soluções deve projetar uma solução que minimize a latência para usuários que baixam relatórios.\

Qual solução atenderá a esses requisitos?

A. Use uma tarefa do AWS Database Migration Service (AWS DMS) com carga total para replicar o banco de dados primário da região original para o banco de dados da nova região. Altere o registro do Route 53 para roteamento baseado em latência para se conectar à API do API Gateway.

B. Use uma tarefa do AWS Database Migration Service (AWS DMS) com carga total e captura de dados alterados (CDC) para replicar o banco de dados primário na região original para o banco de dados na nova região. Altere o registro do Route 53 para roteamento de geolocalização para se conectar à API do API Gateway.

C. Configure uma réplica de leitura entre regiões para o banco de dados RDS na nova região. Altere o registro do Route 53 para roteamento baseado em latência para se conectar à API do API Gateway. **Mais votado**

D. Configure uma réplica de leitura entre regiões para o banco de dados RDS na nova região. Altere o registro do Route 53 para roteamento de geolocalização para se conectar à API do API Gateway.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/32/)

316- Uma empresa de software precisa criar ambientes de teste de curta duração para testar solicitações pull como parte de seu processo de desenvolvimento. Cada ambiente de teste consiste em uma única instância do Amazon EC2 que está em um grupo de Auto Scaling.\

Os ambientes de teste devem ser capazes de se comunicar com um servidor central para reportar os resultados dos testes. O servidor central está localizado em um data center local. Um arquiteto de soluções deve implementar uma solução que permita à empresa criar e excluir ambientes de teste sem qualquer intervenção manual. A empresa criou um gateway de trânsito com uma conexão VPN à rede local.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um modelo do AWS CloudFormation que contenha um anexo de gateway de trânsito e as configurações de roteamento relacionadas. Crie um conjunto de pilhas do CloudFormation que inclua esse modelo. Use os StackSets do CloudFormation para implantar uma nova pilha para cada VPC na conta. Implante uma nova VPC para cada ambiente de teste.

B. Crie uma única VPC para os ambientes de teste. Inclua um anexo de gateway de trânsito e as configurações de roteamento relacionadas. Use o AWS CloudFormation para implantar todos os ambientes de teste na VPC. **Mais votado**

C. Crie uma nova UO no AWS Organizations para testes. Crie um modelo do AWS CioudFormation que contenha uma VPC, os recursos de rede necessários, um anexo de gateway de trânsito e as configurações de roteamento relacionadas. Crie um conjunto de pilhas do CloudFormation que inclua esse modelo. Use os CloudFormation StackSets para implantações em cada conta na UO de teste. Crie uma nova conta para cada ambiente de teste.

D. Converta as instâncias EC2 do ambiente de teste em imagens Docker. Use o AWS CloudFormation para configurar um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) em uma nova VPC, crie um anexo de gateway de trânsito e crie configurações de roteamento relacionadas. Use o Kubernetes para gerenciar a implantação e o ciclo de vida dos ambientes de teste.

317- Uma empresa está implantando uma nova API na AWS. A API usa o Amazon API Gateway com um endpoint de API regional e uma função do AWS Lambda para hospedagem. A API recupera dados de uma API de fornecedor externo, armazena dados em uma tabela global do Amazon DynamoDB e recupera dados da tabela global do DynamoDB. A chave de API para a API do fornecedor é armazenada no AWS Secrets Manager e criptografada com uma chave gerenciada pelo cliente no AWS Key Management Service (AWS KMS). A empresa implantou sua própria API em uma única região da AWS.\

Um arquiteto de soluções precisa alterar os componentes da API da empresa para garantir que os componentes possam ser executados em várias regiões em uma configuração ativa-ativa.\

Qual combinação de alterações atenderá a esse requisito com a MENOR sobrecarga operacional? (Escolha três.)

A. Implante a API em várias regiões. Configure o Amazon Route 53 com nomes de domínio personalizados que roteiam o tráfego para cada ponto de extremidade da API regional. Implemente uma política de roteamento de resposta multivalor do Route 53. **Mais votado**

B. Crie uma nova chave KMS multirregional gerenciada pelo cliente. Crie uma nova chave de réplica KMS gerenciada pelo cliente em cada região dentro do escopo. **Mais votado**

C. Replique o segredo existente do Secrets Manager para outras regiões. Para cada segredo replicado da região dentro do escopo, selecione a chave KMS apropriada. **Mais votado**

D. Crie uma nova chave KMS gerenciada pela AWS em cada região dentro do escopo. Converta uma chave existente em uma chave multirregional. Use a chave multirregional em outras regiões.

E. Crie um novo segredo do Secrets Manager em cada região dentro do escopo. Copie o valor do segredo da região existente para o novo segredo em cada região dentro do escopo.

F. Modifique o processo de implantação da função Lambda para repetir a implantação em todas as regiões dentro do escopo. Ative a opção multirregional para a API existente. Selecione a função Lambda implantada em cada região como backend para a API multirregional.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/32/)

318- Uma empresa de varejo online hospeda seu aplicativo web com estado e seu banco de dados MySQL em um data center local em um único servidor. A empresa deseja aumentar sua base de clientes realizando mais campanhas de marketing e promoções. Como preparação, a empresa deseja migrar seu aplicativo e banco de dados para a AWS para aumentar a confiabilidade de sua arquitetura.\

Qual solução deve fornecer o nível MAIS ALTO de confiabilidade?

A. Migre o banco de dados para uma instância MySQL Multi-AZ do Amazon RDS. Implante o aplicativo em um grupo de Auto Scaling em instâncias do Amazon EC2 por trás de um Application Load Balancer. Armazene as sessões no Amazon Neptune.

B. Migre o banco de dados para o Amazon Aurora MySQL. Implante o aplicativo em um grupo de Auto Scaling em instâncias do Amazon EC2 por trás de um Application Load Balancer. Armazene as sessões em um grupo de replicação do Amazon ElastiCache para Redis. **Mais votado**

C. Migre o banco de dados para o Amazon DocumentDB (compatível com MongoDB). Implante o aplicativo em um grupo de Auto Scaling em instâncias do Amazon EC2 por trás de um Balanceador de Carga de Rede. Armazene sessões no Amazon Kinesis Data Firehose.

D. Migre o banco de dados para uma instância Multi-AZ do Amazon RDS MariaDB. Implante o aplicativo em um grupo de Auto Scaling em instâncias do Amazon EC2 por trás de um Application Load Balancer. Armazene sessões no Amazon ElastiCache para Memcached.

319- O arquiteto de soluções de uma empresa precisa fornecer conectividade segura de Área de Trabalho Remota aos usuários de instâncias do Windows do Amazon EC2 hospedadas em uma VPC. A solução deve integrar o gerenciamento centralizado de usuários com o Active Directory local da empresa. A conectividade com a VPC é feita pela internet. A empresa possui hardware que pode ser usado para estabelecer uma conexão VPN Site-to-Site da AWS.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Implante um Active Directory gerenciado usando o AWS Directory Service para Microsoft Active Directory. Estabeleça uma relação de confiança com o Active Directory local. Implante uma instância do EC2 como um bastion host na VPC. Certifique-se de que a instância do EC2 esteja associada ao domínio. Use o bastion host para acessar as instâncias de destino via RDP.

B. Configure o AWS IAM Identity Center (AWS Single Sign-On) para integração com o Active Directory local usando o Conector AD do AWS Directory Service para Microsoft Active Directory. Configure conjuntos de permissões para grupos de usuários para acesso ao AWS Systems Manager. Use o Systems Manager Fleet Manager para acessar as instâncias de destino via RDP. **Mais votado**

C. Implemente uma VPN entre o ambiente local e a VPS de destino. Certifique-se de que as instâncias de destino estejam associadas ao domínio local do Active Directory por meio da conexão VPN. Configure o acesso RDP por meio da VPN. Conecte-se da rede da empresa às instâncias de destino.

D. Implante um Active Directory gerenciado usando o AWS Directory Service para Microsoft Active Directory. Estabeleça uma relação de confiança com o Active Directory local. Implante um Gateway de Área de Trabalho Remota na AWS usando um Início Rápido da AWS. Certifique-se de que o Gateway de Área de Trabalho Remota esteja associado ao domínio. Use o Gateway de Área de Trabalho Remota para acessar as instâncias de destino via RDP.

320- Uma auditoria de conformidade de uma empresa revela que alguns volumes do Amazon Elastic Block Store (Amazon EBS) criados em uma conta da AWS não estavam criptografados. Um arquiteto de soluções precisa implementar uma solução para criptografar todos os novos volumes do EBS em repouso.\

Qual solução atenderá a esse requisito com o MENOR esforço?

A. Crie uma regra do Amazon EventBridge para detectar a criação de volumes EBS não criptografados. Invoque uma função do AWS Lambda para excluir volumes não compatíveis.

B. Use o AWS Audit Manager com criptografia de dados.

C. Crie uma regra de configuração da AWS para detectar a criação de um novo volume EBS. Criptografe o volume usando o AWS Systems Manager Automation.

D. Ative a criptografia do EBS por padrão em todas as regiões da AWS.

321- Uma empresa de pesquisa realiza simulações diárias na Nuvem AWS para atender à alta demanda. As simulações são executadas em centenas de instâncias do Amazon EC2 baseadas no Amazon Linux 2. Ocasionalmente, uma simulação trava e exige que um engenheiro de operações de nuvem resolva o problema conectando-se a uma instância do EC2 via SSH.\

A política da empresa determina que nenhuma instância do EC2 pode usar a mesma chave SSH e que todas as conexões devem ser registradas no AWS CloudTrail.\

Como um arquiteto de soluções pode atender a esses requisitos?

A. Inicie novas instâncias do EC2 e gere uma chave SSH individual para cada instância. Armazene a chave SSH no AWS Secrets Manager. Crie uma nova política do IAM e anexe-a à função do IAM dos engenheiros com uma instrução Allow para a ação GetSecretValue. Instrua os engenheiros a buscar a chave SSH no Secrets Manager ao se conectarem por meio de qualquer cliente SSH.

B. Crie um documento do AWS Systems Manager para executar comandos em instâncias do EC2 e definir uma nova chave SSH exclusiva. Crie uma nova política do IAM e anexe-a à função do IAM dos engenheiros com uma instrução "Permitir" para executar documentos do Systems Manager. Instrua os engenheiros a executar o documento para definir uma chave SSH e se conectar por meio de qualquer cliente SSH.

C. Inicie novas instâncias do EC2 sem configurar nenhuma chave SSH para elas. Configure o EC2 Instance Connect em cada instância. Crie uma nova política do IAM e anexe-a à função do IAM dos engenheiros com uma instrução Allow para a ação SendSSHPublicKey. Instrua os engenheiros a se conectarem à instância usando um cliente SSH baseado em navegador a partir do console do EC2. **Mais votado**

D. Configure o AWS Secrets Manager para armazenar a chave SSH do EC2. Crie uma nova função do AWS Lambda para criar uma nova chave SSH e chamar o Gerenciador de Sessões do AWS Systems Manager para definir a chave SSH na instância do EC2. Configure o Secrets Manager para usar a função Lambda para rotação automática uma vez por dia. Instrua os engenheiros a buscar a chave SSH do Secrets Manager ao se conectarem por meio de qualquer cliente SSH.

322- Uma empresa está migrando aplicativos de mobile banking para execução em instâncias do Amazon EC2 em uma VPC. Os aplicativos de serviços de back-end são executados em um data center local. O data center possui uma conexão AWS Direct Connect com a AWS. Os aplicativos executados na VPC precisam resolver solicitações de DNS para um domínio do Active Directory local executado no data center.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga administrativa?

A. Provisione um conjunto de instâncias do EC2 em duas Zonas de Disponibilidade na VPC como servidores DNS de cache para resolver consultas DNS dos servidores de aplicativos dentro da VPC.

B. Provisione uma zona privada hospedada no Amazon Route 53. Configure registros NS que apontam para servidores DNS locais.

C. Crie endpoints DNS usando o Amazon Route 53 Resolver. Adicione regras de encaminhamento condicional para resolver namespaces DNS entre o data center local e a VPC. **Mais votado**

D. Provisione um novo controlador de domínio do Active Directory na VPC com uma confiança bidirecional entre esse novo domínio e o domínio do Active Directory local.

323- Uma empresa processa dados ambientais. A empresa instalou sensores para fornecer um fluxo contínuo de dados de diferentes áreas de uma cidade. Os dados estão disponíveis no formato JSON.\

A empresa deseja usar uma solução da AWS para enviar os dados para um banco de dados que não requer esquemas fixos para armazenamento. Os dados devem ser enviados em tempo real.\

Qual solução atenderá a esses requisitos?

A. Use o Amazon Kinesis Data Firehose para enviar os dados para o Amazon Redshift.

B. Use o Amazon Kinesis Data Streams para enviar os dados para o Amazon DynamoDB. **Mais votado**

C. Use o Amazon Managed Streaming for Apache Kafka (Amazon MSK) para enviar os dados para o Amazon Aurora.

D. Use o Amazon Kinesis Data Firehose para enviar os dados para o Amazon Keyspaces (para Apache Cassandra).

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/33/)

324- Uma empresa está migrando um aplicativo legado de um data center local para a AWS. O aplicativo usa o MongoDB como banco de dados de chave-valor. De acordo com as diretrizes técnicas da empresa, todas as instâncias do Amazon EC2 devem ser hospedadas em uma sub-rede privada sem conexão com a internet. Além disso, toda a conectividade entre aplicativos e bancos de dados deve ser criptografada. O banco de dados deve ser escalável conforme a demanda.\

Qual solução atenderá a esses requisitos?

A. Crie novas tabelas do Amazon DocumentDB (compatíveis com MongoDB) para o aplicativo com volumes IOPS provisionados. Use o endpoint da instância para se conectar ao Amazon DocumentDB.

B. Crie novas tabelas do Amazon DynamoDB para o aplicativo com capacidade sob demanda. Use um endpoint de VPC de gateway para o DynamoDB para se conectar às tabelas do DynamoDB. **Mais votado**

C. Crie novas tabelas do Amazon DynamoDB para o aplicativo com capacidade sob demanda. Use um endpoint de VPC de interface para DynamoDB para se conectar às tabelas do DynamoDB.

D. Crie novas tabelas do Amazon DocumentDB (compatíveis com MongoDB) para o aplicativo com volumes IOPS provisionados. Use o endpoint do cluster para se conectar ao Amazon DocumentDB.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/33/)

325- Uma empresa está executando uma aplicação em instâncias do Amazon EC2 na Nuvem AWS. A aplicação utiliza um banco de dados MongoDB com um conjunto de réplicas como camada de dados. O banco de dados MongoDB está instalado em sistemas no data center local da empresa e é acessível por meio de uma conexão AWS Direct Connect com o ambiente do data center.\

Um arquiteto de soluções deve migrar o banco de dados MongoDB local para o Amazon DocumentDB (com compatibilidade com o MongoDB).\

Qual estratégia o arquiteto de soluções deve escolher para realizar essa migração?

A. Crie uma frota de instâncias do EC2. Instale o MongoDB Community Edition nas instâncias do EC2 e crie um banco de dados. Configure a replicação síncrona contínua com o banco de dados em execução no data center local.

B. Crie uma instância de replicação do AWS Database Migration Service (AWS DMS). Crie um endpoint de origem para o banco de dados MongoDB local usando a captura de dados alterados (CDC). Crie um endpoint de destino para o banco de dados Amazon DocumentDB. Crie e execute uma tarefa de migração do DMS. **Mais votado**

C. Crie um pipeline de migração de dados usando o AWS Data Pipeline. Defina nós de dados para o banco de dados MongoDB local e o banco de dados Amazon DocumentDB. Crie uma tarefa agendada para executar o pipeline de dados.

D. Crie um endpoint de origem para o banco de dados MongoDB local usando os crawlers do AWS Glue. Configure a replicação assíncrona contínua entre o banco de dados MongoDB e o banco de dados Amazon DocumentDB.

326- Uma empresa está reestruturando seus aplicativos para execução na AWS. A infraestrutura da empresa inclui várias instâncias do Amazon EC2. A equipe de desenvolvimento da empresa precisa de diferentes níveis de acesso. A empresa deseja implementar uma política que exija que todas as instâncias do Windows EC2 sejam associadas a um domínio do Active Directory na AWS. A empresa também deseja implementar processos de segurança aprimorados, como autenticação multifator (MFA). A empresa deseja usar serviços gerenciados da AWS sempre que possível.\

Qual solução atenderá a esses requisitos?

A. Crie um Serviço de Diretório da AWS para a implementação do Microsoft Active Directory. Inicie um Amazon Workspace. Conecte-se e use o Workspace para tarefas de configuração de segurança de domínio.

B. Crie um Serviço de Diretório da AWS para a implementação do Microsoft Active Directory. Inicie uma instância do EC2. Conecte-se e use a instância do EC2 para tarefas de configuração de segurança de domínio. **Mais votado**

C. Crie uma implementação do AWS Directory Service Simple AD. Inicie uma instância do EC2. Conecte-se e use a instância do EC2 para tarefas de configuração de segurança de domínio.

D. Crie uma implementação do AWS Directory Service Simple AD. Inicie um Amazon Workspace. Conecte-se e use o Workspace para tarefas de configuração de segurança de domínio.

327- Uma empresa deseja migrar seu aplicativo local para a AWS. O banco de dados do aplicativo armazena dados estruturados do produto e dados temporários da sessão do usuário. A empresa precisa desacoplar os dados do produto dos dados da sessão do usuário. A empresa também precisa implementar a replicação em outra região da AWS para recuperação de desastres.\

Qual solução atenderá a esses requisitos com o MÁXIMO desempenho?

A. Crie uma instância de banco de dados do Amazon RDS com esquemas separados para hospedar os dados do produto e os dados da sessão do usuário. Configure uma réplica de leitura para a instância de banco de dados em outra região.

B. Crie uma instância de banco de dados do Amazon RDS para hospedar os dados do produto. Configure uma réplica de leitura para a instância de banco de dados em outra região. Crie um armazenamento de dados global no Amazon ElastiCache para o Memcached para hospedar os dados da sessão do usuário.

C. Crie duas tabelas globais do Amazon DynamoDB. Use uma tabela global para hospedar os dados do produto. Use a outra tabela global para hospedar os dados da sessão do usuário. Use o DynamoDB Accelerator (DAX) para armazenamento em cache.

D. Crie uma instância de banco de dados do Amazon RDS para hospedar os dados do produto. Configure uma réplica de leitura para a instância de banco de dados em outra região. Crie uma tabela global do Amazon DynamoDB para hospedar os dados da sessão do usuário. **Mais votado**

328- Uma empresa orquestra uma estrutura de múltiplas contas na AWS usando o AWS Control Tower. A empresa utiliza o AWS Organizations, o AWS Config e o AWS Trusted Advisor. A empresa possui uma UO específica para contas de desenvolvimento que os desenvolvedores usam para experimentar na AWS. A empresa possui centenas de desenvolvedores, e cada desenvolvedor possui uma conta de desenvolvimento individual.\

A empresa deseja otimizar os custos nessas contas de desenvolvimento. As instâncias do Amazon EC2 e do Amazon RDS nessas contas devem ser expansíveis. A empresa deseja proibir o uso de outros serviços que não sejam relevantes.\

O que um arquiteto de soluções deve recomendar para atender a esses requisitos?

A. Crie um SCP personalizado no AWS Organizations para permitir a implantação apenas de instâncias expansíveis e proibir serviços que não sejam relevantes. Aplique o SCP à UO de desenvolvimento.

B. Crie um controle de detecção personalizado (guardrail) na AWS Control Tower. Configure o controle (guardrail) para permitir a implantação apenas de instâncias com capacidade de burst e para proibir serviços que não sejam relevantes. Aplique o controle (guardrail) à UO de desenvolvimento.

C. Crie um controle preventivo personalizado (guardrail) na AWS Control Tower. Configure o controle (guardrail) para permitir a implantação apenas de instâncias expansíveis e para proibir serviços que não sejam relevantes. Aplique o controle (guardrail) à UO de desenvolvimento. **Mais votado**

D. Crie uma regra do AWS Config na conta da AWS Control Tower. Configure a regra do AWS Config para permitir a implantação apenas de instâncias expansíveis e para proibir serviços que não sejam relevantes. Implante a regra do AWS Config na UO de desenvolvimento usando o AWS CloudFormation StackSets.

329- Uma empresa de serviços financeiros executa um aplicativo complexo e multicamadas em instâncias do Amazon EC2 e funções do AWS Lambda. O aplicativo armazena dados temporários no Amazon S3. Os objetos do S3 são válidos por apenas 45 minutos e são excluídos após 24 horas.\

A empresa implanta cada versão do aplicativo iniciando uma pilha do AWS CloudFormation. A pilha cria todos os recursos necessários para executar o aplicativo. Quando a empresa implanta e valida uma nova versão do aplicativo, a empresa exclui a pilha do CloudFormation da versão antiga.\

A empresa tentou recentemente excluir a pilha do CloudFormation de uma versão antiga do aplicativo, mas a operação falhou. Uma análise mostra que o CloudFormation falhou ao excluir um bucket do S3 existente. Um arquiteto de soluções precisa resolver esse problema sem fazer grandes alterações na arquitetura do aplicativo.\

Qual solução atende a esses requisitos?

A. Implemente uma função Lambda que exclua todos os arquivos de um determinado bucket do S3. Integre essa função Lambda como um recurso personalizado na pilha do CloudFormation. Certifique-se de que o recurso personalizado tenha um atributo DependsOn que aponte para o recurso do bucket do S3. **Mais votado**

B. Modifique o modelo do CloudFormation para provisionar um sistema de arquivos do Amazon Elastic File System (Amazon EFS) para armazenar os arquivos temporários nele, em vez de no Amazon S3. Configure as funções do Lambda para serem executadas na mesma VPC que o sistema de arquivos. Monte o sistema de arquivos nas instâncias do EC2 e nas funções do Lambda.

C. Modifique a pilha de informações do CloudForm para criar uma regra de ciclo de vida do S3 que expire todos os objetos 45 minutos após a criação. Adicione um atributo DependsOn que aponte para o recurso do bucket do S3.

D. Modifique a pilha do CloudFormation para anexar um atributo DeletionPolicy com um valor de Delete ao bucket do S3.

330- Uma empresa desenvolveu um jogo para dispositivos móveis. O backend do jogo é executado em diversas máquinas virtuais localizadas em um data center local. A lógica de negócios é exposta usando uma API REST com múltiplas funções. Os dados da sessão do jogador são armazenados em um armazenamento central de arquivos. Os serviços de backend usam chaves de API diferentes para limitação e para distinguir entre tráfego ao vivo e de teste.\

A carga no backend do jogo varia ao longo do dia. Durante os horários de pico, a capacidade do servidor não é suficiente. Também há problemas de latência ao buscar dados da sessão do jogador. A gerência solicitou a um arquiteto de soluções que apresentasse uma arquitetura de nuvem que pudesse lidar com a carga variável do jogo e fornecer acesso aos dados com baixa latência. O modelo de API não deve ser alterado.\

Qual solução atende a esses requisitos?

A. Implemente a API REST usando um Balanceador de Carga de Rede (NLB). Execute a lógica de negócios em uma instância do Amazon EC2 atrás do NLB. Armazene os dados da sessão do jogador no Amazon Aurora Serverless.

B. Implementar a API REST usando um Application Load Balancer (ALB). Executar a lógica de negócios no AWS Lambda. Armazenar dados de sessão do jogador no Amazon DynamoDB com capacidade sob demanda.

C. Implementar a API REST usando o Amazon API Gateway. Executar a lógica de negócios no AWS Lambda. Armazenar dados da sessão do jogador no Amazon DynamoDB com capacidade sob demanda. **Mais votado**

D. Implementar a API REST usando o AWS AppSync. Executar a lógica de negócios no AWS Lambda. Armazenar dados da sessão do jogador no Amazon Aurora Serverless.

331- Uma empresa está migrando um aplicativo para a Nuvem AWS. O aplicativo é executado em um data center local e grava milhares de imagens em um sistema de arquivos NFS montado todas as noites. Após a migração, a empresa hospedará o aplicativo em uma instância do Amazon EC2 com um sistema de arquivos Amazon Elastic File System (Amazon EFS) montado.\

A empresa estabeleceu uma conexão AWS Direct Connect com a AWS. Antes da migração, um arquiteto de soluções deve criar um processo que replicará as imagens locais recém-criadas para o sistema de arquivos EFS.\

Qual é a maneira operacional MAIS eficiente de replicar as imagens?

A. Configure um processo periódico para executar o comando aws s3 sync do sistema de arquivos local para o Amazon S3. Configure uma função do AWS Lambda para processar notificações de eventos do Amazon S3 e copiar as imagens do Amazon S3 para o sistema de arquivos EFS.

B. Implante um gateway de arquivos do AWS Storage Gateway com um ponto de montagem NFS. Monte o sistema de arquivos do gateway de arquivos no servidor local. Configure um processo para copiar periodicamente as imagens para o ponto de montagem.

C. Implante um agente AWS DataSync em um servidor local com acesso ao sistema de arquivos NFS. Envie dados pela conexão Direct Connect para um bucket do S3 usando um VIF público. Configure uma função do AWS Lambda para processar notificações de eventos do Amazon S3 e copiar as imagens do Amazon S3 para o sistema de arquivos EFS.

D. Implante um agente do AWS DataSync em um servidor local com acesso ao sistema de arquivos NFS. Envie dados pela conexão Direct Connect para um endpoint VPC da interface AWS PrivateLink para o Amazon EFS usando um VIF privado. Configure uma tarefa agendada do DataSync para enviar as imagens ao sistema de arquivos EFS a cada 24 horas. **Mais votado**

332- Uma empresa migrou recentemente uma aplicação web de um data center local para a Nuvem AWS. A infraestrutura da aplicação web consiste em uma distribuição do Amazon CloudFront que roteia para um Application Load Balancer (ALB), com o Amazon Elastic Container Service (Amazon ECS) para processar solicitações. Uma auditoria de segurança recente revelou que a aplicação web pode ser acessada usando endpoints do CloudFront e do ALB. No entanto, a empresa exige que a aplicação web seja acessível apenas usando o endpoint do CloudFront.\

Qual solução atenderá a esse requisito com o MENOR esforço?

A. Crie um novo grupo de segurança e anexe-o à distribuição do CloudFront. Atualize a entrada do grupo de segurança ALB para permitir acesso apenas do grupo de segurança do CloudFront.

B. Atualize a entrada do grupo de segurança ALB para permitir acesso somente da lista de prefixos gerenciados do CloudFront com.amazonaws.global.cloudfront.origin-facing. **Mais votado**

C. Crie um endpoint de interface VPC com.amazonaws.region.elasticloadbalancing para o Elastic Load Balancing. Atualize o esquema ALB de voltado para a Internet para interno.

D. Extraia os IPs do CloudFront do documento ip-ranges.json fornecido pela AWS. Atualize a entrada do grupo de segurança ALB para permitir acesso apenas a IPs do CloudFront.

333- Uma empresa hospeda um site de fórum comunitário usando um Application Load Balancer (ALB) e um aplicativo Docker hospedados em um cluster do Amazon ECS. Os dados do site são armazenados no Amazon RDS para MySQL e a imagem do contêiner é armazenada no ECR. A empresa precisa fornecer aos seus clientes um SLA de recuperação de desastres com um RTO de no máximo 24 horas e um RPO de no máximo 8 horas.\

Qual das seguintes soluções é a maneira MAIS econômica de atender aos requisitos?

A. Use o AWS CloudFormation para implantar recursos ALB, EC2, ECS e RDS idênticos em duas regiões. Agende snapshots do RDS a cada 8 horas. Use a replicação multirregional do RDS para atualizar a cópia do banco de dados da região secundária. Em caso de falha, restaure a partir do snapshot mais recente e use uma política de failover de DNS do Amazon Route 53 para redirecionar automaticamente os clientes para o ALB na região secundária.

B. Armazene a imagem do Docker no ECR em duas regiões. Agende snapshots do RDS a cada 8 horas, com snapshots copiados para a região secundária. Em caso de falha, use o AWS CloudFormation para implantar os recursos ALB, EC2, ECS e RDS na região secundária, restaurar a partir do snapshot mais recente e atualizar o registro DNS para apontar para o ALB na região secundária. **Mais votado**

C. Use o AWS CloudFormation para implantar recursos ALB, EC2, ECS e RDS idênticos em uma região secundária. Agende backups do MySQL do RDS de hora em hora para o Amazon S3 e use a replicação entre regiões para replicar os dados para um bucket na região secundária. Em caso de falha, importe a imagem do Docker mais recente para o Amazon ECR na região secundária, implante na instância do EC2, restaure o backup mais recente do MySQL e atualize o registro DNS para apontar para o ALB na região secundária.

D. Implante um ambiente piloto em uma região secundária com um ALB e uma implantação EC2 com recursos mínimos para Docker em um grupo de Auto Scaling da AWS com uma política de escalonamento para aumentar o tamanho da instância e o número de nós. Crie uma réplica de leitura entre regiões dos dados do RDS. Em caso de falha, promova a réplica para primária e atualize o registro DNS para apontar para o ALB na região secundária.

334- Uma empresa está migrando sua infraestrutura para a Nuvem AWS. A empresa precisa cumprir diversos padrões regulatórios para diferentes projetos. A empresa precisa de um ambiente multicontas.\

Um arquiteto de soluções precisa preparar a infraestrutura básica. A solução deve fornecer uma base consistente de gerenciamento e segurança, mas deve permitir flexibilidade para diferentes requisitos de conformidade em diferentes contas AWS. A solução também precisa se integrar ao servidor local existente dos Serviços de Federação do Active Directory (AD FS).\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma organização no AWS Organizations. Crie um único SCP para acesso com privilégios mínimos em todas as contas. Crie uma única UO para todas as contas. Configure um provedor de identidade do IAM para federação com o servidor AD FS local. Configure uma conta de registro central com um processo definido para serviços de geração de registro para enviar eventos de registro para a conta central. Habilite o AWS Config na conta central com pacotes de conformidade para todas as contas.

B. Crie uma organização no AWS Organizations. Habilite a AWS Control Tower na organização. Revise os controles incluídos (guardrails) para SCPs. Verifique o AWS Config para áreas que exigem adições. Adicione UOs conforme necessário. Conecte o AWS IAM Identity Center (AWS Single Sign-On) ao servidor AD FS local. **Mais votado**

C. Crie uma organização no AWS Organizations. Crie SCPs para acesso com privilégios mínimos. Crie uma estrutura de UO e use-a para agrupar contas da AWS. Conecte o AWS IAM Identity Center (AWS Single Sign-On) ao servidor AD FS local. Configure uma conta de registro central com um processo definido para serviços de geração de registro para enviar eventos de registro para a conta central. Habilite o AWS Config na conta central com agregadores e pacotes de conformidade.

D. Crie uma organização no AWS Organizations. Habilite a AWS Control Tower na organização. Revise os controles incluídos (guardrails) para SCPs. Verifique o AWS Config para áreas que exigem adições. Configure um provedor de identidade do IAM para federação com o servidor AD FS local.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/34/)

335- Uma revista online lançará sua última edição este mês. Esta edição será a primeira a ser distribuída globalmente. O site dinâmico da revista atualmente utiliza um Application Load Balancer na camada web, uma frota de instâncias do Amazon EC2 para servidores web e de aplicativos e o Amazon Aurora MySQL. Partes do site incluem conteúdo estático e quase todo o tráfego é somente leitura.\

A revista espera um aumento significativo no tráfego da internet quando a nova edição for lançada. O desempenho ideal é uma das principais prioridades para a semana seguinte ao lançamento.\

Qual combinação de etapas um arquiteto de soluções deve adotar para reduzir os tempos de resposta do sistema para um público global? (Escolha duas.)

A. Use a replicação lógica entre regiões para replicar o banco de dados Aurora MySQL para uma região secundária. Substitua os servidores web pelo Amazon S3. Implante os buckets do S3 no modo de replicação entre regiões.

B. Certifique-se de que as camadas da Web e do aplicativo estejam em grupos de Auto Scaling. Introduza uma conexão AWS Direct Connect. Implante as camadas da Web e do aplicativo em regiões ao redor do mundo.

C. Migre o banco de dados do Amazon Aurora para o Amazon RDS para MySQL. Certifique-se de que todas as três camadas de aplicação – web, aplicação e banco de dados – estejam em sub-redes privadas.

D. Use um banco de dados global Aurora para replicação física entre regiões. Use o Amazon S3 com replicação entre regiões para conteúdo e recursos estáticos. Implante as camadas da Web e de aplicativos em regiões ao redor do mundo. **Mais votado**

E. Introduzir o Amazon Route 53 com roteamento baseado em latência e distribuições do Amazon CloudFront. Garantir que as camadas da Web e do aplicativo estejam em grupos de Auto Scaling. **Mais votado**

336- Uma empresa de jogos online precisa otimizar o custo de suas cargas de trabalho na AWS. A empresa usa uma conta dedicada para hospedar o ambiente de produção para seu aplicativo de jogos online e um aplicativo de análise.\

As instâncias do Amazon EC2 hospedam o aplicativo de jogos e devem estar sempre disponíveis. As instâncias do EC2 funcionam o ano todo. O aplicativo de análise usa dados armazenados no Amazon S3. O aplicativo de análise pode ser interrompido e retomado sem problemas.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Adquira um Plano de Economia de Instâncias EC2 para instâncias de aplicativos de jogos online. Use Instâncias On-Demand para o aplicativo de análise.

B. Adquira um Plano de Economia de Instâncias EC2 para as instâncias de aplicativos de jogos online. Use Instâncias Spot para o aplicativo de análise. **Mais votado**

C. Use Instâncias Spot para o aplicativo de jogos online e o aplicativo de análise. Configure um catálogo no AWS Service Catalog para provisionar serviços com desconto.

D. Use Instâncias On-Demand para o aplicativo de jogos online. Use Instâncias Spot para o aplicativo de análise. Configure um catálogo no AWS Service Catalog para provisionar serviços com desconto.

337- Uma empresa executa aplicativos em centenas de contas de produção da AWS. A empresa utiliza o AWS Organizations com todos os recursos habilitados e possui uma operação de backup centralizada que utiliza o AWS Backup.\

A empresa está preocupada com ataques de ransomware. Para lidar com essa preocupação, a empresa criou uma nova política que exige que todos os backups sejam resilientes a violações de credenciais de usuários privilegiados em qualquer conta de produção.\

Qual combinação de etapas atenderá a esse novo requisito? (Escolha três.)

A. Implemente backup entre contas com cofres do AWS Backup em contas não produtivas designadas. **Mais votado**

B. Adicione um SCP que restrinja a modificação dos cofres do AWS Backup. **Mais votado**

C. Implementar o AWS Backup Vault Lock em modo de conformidade.\
C. Implementar o acesso com privilégios mínimos para a função de serviço do IAM atribuída ao AWS Backup. **Mais votado**

D. Configure a frequência, o ciclo de vida e o período de retenção do backup para garantir que pelo menos um backup sempre exista na camada fria.

E. Configure o AWS Backup para gravar todos os backups em um bucket do Amazon S3 em uma conta não produtiva designada. Certifique-se de que o bucket do S3 tenha o Bloqueio de Objetos do S3 habilitado.

338- Uma empresa precisa agregar logs do Amazon CloudWatch de suas contas da AWS em uma conta de registro central. Os logs coletados devem permanecer na região da AWS de criação. A conta de registro central processará os logs, normalizará os logs para o formato de saída padrão e os transmitirá para uma ferramenta de segurança para processamento adicional.\

Um arquiteto de soluções deve projetar uma solução que possa lidar com um grande volume de dados de registro que precisam ser ingeridos. Menos registros ocorrerão fora do horário comercial normal do que durante o horário comercial normal. A solução de registro deve ser dimensionada com a carga prevista. O arquiteto de soluções decidiu usar um projeto de Torre de Controle da AWS para lidar com o processo de registro de múltiplas contas.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender aos requisitos? (Escolha três.)

A. Crie um fluxo de dados de destino do Amazon Kinesis na conta de registro central. **Mais votado**

B. Crie uma fila de destino do Amazon Simple Queue Service (Amazon SQS) na conta de registro central.

C. Crie uma função do IAM que conceda ao Amazon CloudWatch Logs a permissão para adicionar dados ao fluxo de dados do Amazon Kinesis. Crie uma política de confiança. Especifique a política de confiança na função do IAM. Em cada conta de membro, crie um filtro de assinatura para cada grupo de logs para enviar dados ao fluxo de dados do Kinesis. **Mais votado**

D. Crie uma função do IAM que conceda ao Amazon CloudWatch Logs a permissão para adicionar dados à fila do Amazon Simple Queue Service (Amazon SQS). Crie uma política de confiança. Especifique a política de confiança na função do IAM. Em cada conta de membro, crie um único filtro de assinatura para todos os grupos de logs enviarem dados para a fila do SQS.

E. Crie uma função do AWS Lambda. Programe a função do Lambda para normalizar os logs na conta de registro central e gravá-los na ferramenta de segurança. **Mais votado**

F. Crie uma função do AWS Lambda. Programe a função do Lambda para normalizar os logs nas contas dos membros e gravá-los na ferramenta de segurança.

339- Uma empresa está migrando um aplicativo legado de um data center local para a AWS. O aplicativo consiste em um único servidor de aplicativos e um servidor de banco de dados Microsoft SQL Server. Cada servidor é implantado em uma VM VMware que consome 500 TB de dados em vários volumes conectados.\

A empresa estabeleceu uma conexão AWS Direct Connect de 10 Gbps da região AWS mais próxima ao seu data center local. A conexão Direct Connect não está em uso por outros serviços no momento.\

Qual combinação de etapas um arquiteto de soluções deve seguir para migrar o aplicativo com o MENOR tempo de inatividade? (Escolha duas.)

A. Use uma tarefa de replicação do AWS Server Migration Service (AWS SMS) para migrar a VM do servidor de banco de dados para a AWS.

B. Use VM Import/Export para importar a VM do servidor de aplicativos.

C. Exporte as imagens da VM para um dispositivo otimizado para armazenamento AWS Snowball Edge.

D. Use uma tarefa de replicação do AWS Server Migration Service (AWS SMS) para migrar a VM do servidor de aplicativos para a AWS. **Mais votado**

E. Use uma instância de replicação do AWS Database Migration Service (AWS DMS) para migrar o banco de dados para uma instância de banco de dados do Amazon RDS. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/34/)

340- Uma empresa opera uma frota de servidores locais e uma frota de instâncias do Amazon EC2 em sua organização no AWS Organizations. As contas da AWS da empresa contêm centenas de VPCs. A empresa deseja conectar suas contas da AWS à sua rede local. As conexões VPN Site-to-Site da AWS já estão estabelecidas em uma única conta da AWS. A empresa deseja controlar quais VPCs podem se comunicar com outras VPCs.\

Qual combinação de etapas alcançará esse nível de controle com o MENOR esforço operacional? (Escolha três.)

A. Crie um gateway de trânsito em uma conta da AWS. Compartilhe o gateway de trânsito entre contas usando o AWS Resource Access Manager (AWS RAM). **Mais votado**

B. Configure anexos para todas as VPCs e VPNs. **Mais votado**

C. Configurar tabelas de rotas do gateway de trânsito. Associe as VPCs e VPNs às tabelas de rotas. **Mais votado**

D. Configure o peering de VPC entre as VPCs.

E. Configure anexos entre VPCs e VPNs.

F. Configurar tabelas de rotas nas VPCs e VPNs.

341- Uma empresa precisa otimizar o custo de sua aplicação na AWS. A aplicação utiliza funções do AWS Lambda e contêineres do Amazon Elastic Container Service (Amazon ECS) executados no AWS Fargate. A aplicação exige muita gravação e armazena dados em um banco de dados MySQL do Amazon Aurora.\

A carga na aplicação não é consistente. A aplicação passa por longos períodos sem uso, seguidos por aumentos e diminuições repentinas e significativas no tráfego. O banco de dados é executado em uma instância de banco de dados com otimização de memória que não consegue lidar com a carga.\

Um arquiteto de soluções deve projetar uma solução que possa ser escalável para lidar com as mudanças no tráfego.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Adicione réplicas de leitura adicionais ao banco de dados. Adquira Planos de Economia de Instância e Instâncias Reservadas do RDS.

B. Migre o banco de dados para um cluster Aurora DB com várias instâncias de gravação. Adquira Planos de Economia de Instância.

C. Migre o banco de dados para um banco de dados global Aurora. Adquira planos de economia de computação e instâncias reservadas do RDS.

D. Migre o banco de dados para o Aurora Serverless v1. Adquira Planos de Economia de Computação.

342- Uma empresa migrou um aplicativo para a Nuvem AWS. O aplicativo é executado em duas instâncias do Amazon EC2, atrás de um Balanceador de Carga de Aplicativos (ALB).\
Os dados do aplicativo são armazenados em um banco de dados MySQL, que é executado em uma instância adicional do EC2. O uso do banco de dados pelo aplicativo é intenso em leitura.\

O aplicativo carrega conteúdo estático de volumes do Amazon Elastic Block Store (Amazon EBS) anexados a cada instância do EC2. O conteúdo estático é atualizado com frequência e deve ser copiado para cada volume do EBS.\

A carga no aplicativo muda ao longo do dia. Durante os horários de pico, o aplicativo não consegue lidar com todas as solicitações recebidas. Dados de rastreamento mostram que o banco de dados não consegue lidar com a carga de leitura durante os horários de pico.\

Qual solução aumentará a confiabilidade do aplicativo?

A. Migre a aplicação para um conjunto de funções do AWS Lambda. Defina as funções do Lambda como alvos para o ALB. Crie um novo volume EBS único para o conteúdo estático. Configure as funções do Lambda para ler o novo volume EBS. Migre o banco de dados para um cluster Multi-AZ do Amazon RDS para MySQL.

B. Migre a aplicação para um conjunto de máquinas de estado do AWS Step Functions. Defina as máquinas de estado como alvos para o ALC. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS) para o conteúdo estático. Configure as máquinas de estado para ler o sistema de arquivos EFS. Migre o banco de dados para o Amazon Aurora MySQL Serverless v2 com uma instância de banco de dados de leitura.

C. Conteinerize a aplicação. Migre a aplicação para um cluster do Amazon Elastic Container Service (Amazon ECS). Use o tipo de inicialização do AWS Fargate para as tarefas que hospedam a aplicação. Crie um novo volume EBS único para o conteúdo estático. Monte o novo volume EBS no cluster ECS. Configure o AWS Application Auto Scaling no cluster ECS. Defina o serviço ECS como destino para o ALB. Migre o banco de dados para um cluster de banco de dados Multi-AZ do Amazon RDS para MySQL.

D. Conteinerize a aplicação. Migre a aplicação para um cluster do Amazon Elastic Container Service (Amazon ECS). Use o tipo de inicialização do AWS Fargate para as tarefas que hospedam a aplicação. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS) para o conteúdo estático. Monte o sistema de arquivos EFS em cada contêiner. Configure o AWS Application Auto Scaling no cluster do ECS. Defina o serviço ECS como destino para o ALB. Migre o banco de dados para o Amazon Aurora MySQL Serverless v2 com uma instância de banco de dados do leitor. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/35/)

343- Um arquiteto de soluções quer garantir que apenas usuários ou funções da AWS com permissões adequadas possam acessar um novo endpoint do Amazon API Gateway. O arquiteto de soluções quer ter uma visão completa de cada solicitação para analisar a latência da solicitação e criar mapas de serviço.\

Como o arquiteto de soluções pode projetar o controle de acesso do API Gateway e realizar inspeções de solicitações?

A. Para o método API Gateway, defina a autorização como AWS_IAM. Em seguida, conceda ao usuário ou função do IAM a permissão execute-api:Invoke no recurso da API REST. Habilite o chamador da API a assinar solicitações com a Assinatura da AWS ao acessar o endpoint. Use o AWS X-Ray para rastrear e analisar solicitações do usuário para o API Gateway. **Mais votado**

B. Para o recurso API Gateway, defina CORS como habilitado e retorne apenas o domínio da empresa nos cabeçalhos Access-Control-Allow-Origin. Em seguida, conceda ao usuário ou função do IAM a permissão execute-api:Invoke no recurso REST API. Use o Amazon CloudWatch para rastrear e analisar solicitações de usuários ao API Gateway.

C. Crie uma função do AWS Lambda como autorizador personalizado, peça ao cliente da API para passar a chave e o segredo ao fazer a chamada e, em seguida, use o Lambda para validar o par chave/segredo no sistema IAM. Use o AWS X-Ray para rastrear e analisar as solicitações do usuário ao API Gateway.

D. Crie um certificado de cliente para o API Gateway. Distribua o certificado aos usuários e funções da AWS que precisam acessar o endpoint. Habilite o chamador da API a transmitir o certificado de cliente ao acessar o endpoint. Use o Amazon CloudWatch para rastrear e analisar solicitações de usuários ao API Gateway.

344- Uma empresa utiliza o AWS CodePipeline para o CI/CD de uma aplicação em um grupo de Auto Scaling do Amazon EC2. Todos os recursos da AWS são definidos em modelos do AWS CloudFormation. Os artefatos da aplicação são armazenados em um bucket do Amazon S3 e implantados no grupo de Auto Scaling usando scripts de dados do usuário da instância. À medida que a aplicação se tornou mais complexa, alterações recentes de recursos nos modelos do CloudFormation causaram tempo de inatividade não planejado.\

Como um arquiteto de soluções deve aprimorar o pipeline de CI/CD para reduzir a probabilidade de alterações nos modelos causarem tempo de inatividade?

A. Adapte os scripts de implantação para detectar e relatar condições de erro do CloudFormation ao realizar implantações. Escreva planos de teste para uma equipe de teste executar em um ambiente não produtivo antes de aprovar a alteração para produção.

B. Implemente testes automatizados usando o AWS CodeBuild em um ambiente de teste. Use os conjuntos de alterações do CloudFormation para avaliar as alterações antes da implantação. Use o AWS CodeDeploy para aproveitar os padrões de implantação azul/verde, permitindo avaliações e a capacidade de reverter as alterações, se necessário. **Mais votado**

C. Use plugins para o ambiente de desenvolvimento integrado (IDE) para verificar se há erros nos modelos e use a CLI da AWS para validar se os modelos estão corretos. Adapte o código de implantação para verificar condições de erro e gerar notificações sobre erros. Implante em um ambiente de teste e execute um plano de teste manual antes de aprovar a alteração para produção.

D. Use o AWS CodeDeploy e um padrão de implantação azul/verde com o CloudFormation para substituir os scripts de implantação de dados do usuário. Peça aos operadores que efetuem login nas instâncias em execução e executem um plano de teste manual para verificar se o aplicativo está funcionando conforme o esperado.

345- Uma empresa norte-americana com sede na Costa Leste está implantando uma nova aplicação web em execução no Amazon EC2 na região us-east-1. A aplicação deve escalar dinamicamente para atender à demanda do usuário e manter a resiliência. Além disso, a aplicação deve ter recursos de recuperação de desastres em uma configuração ativa-passiva com a região us-west-1.\

Quais etapas um arquiteto de soluções deve seguir após criar uma VPC na região us-east-1?

A. Crie uma VPC na região us-west-1. Use o peering de VPCs entre regiões para conectar ambas as VPCs. Implante um Balanceador de Carga de Aplicativos (ALB) abrangendo várias Zonas de Disponibilidade (AZs) na VPC na região us-east-1. Implante instâncias do EC2 em várias AZs em cada região como parte de um grupo de Dimensionamento Automático abrangendo ambas as VPCs e atendidas pelo ALB.

B. Implante um Application Load Balancer (ALB) abrangendo várias Zonas de Disponibilidade (AZs) na VPC na região us-east-1. Implante instâncias do EC2 em várias AZs como parte de um grupo de Auto Scaling atendido pelo AL. Implante a mesma solução na região us-west-1. Crie um conjunto de registros do Amazon Route 53 com uma política de roteamento de failover e verificações de integridade habilitadas para fornecer alta disponibilidade em ambas as regiões. **Mais votado**

C. Crie uma VPC na região us-west-1. Use o peering de VPCs entre regiões para conectar ambas as VPCs. Implante um Application Load Balancer (ALB) que abranja ambas as VPCs. Implante instâncias do EC2 em várias Zonas de Disponibilidade como parte de um grupo de Auto Scaling em cada VPC atendida pelo ALB. Crie um registro do Amazon Route 53 que aponte para o ALB.

D. Implante um Application Load Balancer (ALB) abrangendo várias Zonas de Disponibilidade (AZs) na VPC na região us-east-1. Implante instâncias do EC2 em várias AZs como parte de um grupo de Auto Scaling atendido pelo ALB. Implante a mesma solução na região us-west-1. Crie registros separados do Amazon Route 53 em cada região que apontem para o ALB na região. Use as verificações de integridade do Route 53 para fornecer alta disponibilidade em ambas as regiões.

346- Uma empresa possui um aplicativo legado que roda em vários componentes do .NET Framework. Os componentes compartilham o mesmo banco de dados Microsoft SQL Server e se comunicam entre si de forma assíncrona usando o Microsoft Message Queueing (MSMQ).\

A empresa está iniciando uma migração para componentes .NET Core em contêineres e deseja refatorar o aplicativo para rodar na AWS. Os componentes .NET Core exigem orquestração complexa. A empresa precisa ter controle total sobre a rede e a configuração do host. O modelo de banco de dados do aplicativo é fortemente relacional.\

Qual solução atenderá a esses requisitos?

A. Hospede os componentes do INET Core no AWS App Runner. Hospede o banco de dados no Amazon RDS para SQL Server. Use o Amazon EventBiridge para mensagens assíncronas.

B. Hospede os componentes do .NET Core no Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização AWS Fargate. Hospede o banco de dados no Amazon DynamoD. Use o Amazon Simple Notification Service (Amazon SNS) para mensagens assíncronas.

C. Hospede os componentes do .NET Core no AWS Elastic Beanstalk. Hospede o banco de dados no Amazon Aurora PostgreSQL Serverless v2. Use o Amazon Managed Streaming para Apache Kafka (Amazon MSK) para mensagens assíncronas.

D. Hospede os componentes do NET Core no Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização do Amazon EC2. Hospede o banco de dados no Amazon Aurora MySQL Serverless v2. Use o Amazon Simple Queue Service (Amazon SQS) para mensagens assíncronas. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/35/)

347- Um arquiteto de soluções iniciou várias instâncias do Amazon EC2 em um grupo de posicionamento dentro de uma única Zona de Disponibilidade. Devido à carga adicional no sistema, o arquiteto de soluções tenta adicionar novas instâncias ao grupo de posicionamento. No entanto, o arquiteto de soluções recebe um erro de capacidade insuficiente.\

O que o arquiteto de soluções deve fazer para solucionar esse problema?

A. Use um grupo de posicionamento distribuído. Defina um mínimo de oito instâncias para cada Zona de Disponibilidade.

B. Pare e inicie todas as instâncias no grupo de posicionamento. Tente iniciar novamente. **Mais votado**

C. Crie um novo grupo de posicionamento. Mescle o novo grupo de posicionamento com o grupo de posicionamento original.

D. Inicie as instâncias adicionais como Hosts Dedicados nos grupos de posicionamento.

348- Uma empresa utilizou infraestrutura como código (IaC) para provisionar um conjunto de duas instâncias do Amazon EC2. As instâncias permaneceram as mesmas por vários anos.\

Os negócios da empresa cresceram rapidamente nos últimos meses. Em resposta, a equipe de operações da empresa implementou um grupo de Auto Scaling para gerenciar os aumentos repentinos de tráfego. A política da empresa exige a instalação mensal de atualizações de segurança em todos os sistemas operacionais em execução.\

A atualização de segurança mais recente exigiu uma reinicialização. Como resultado, o grupo de Auto Scaling encerrou as instâncias e as substituiu por novas instâncias sem patches.\

Qual combinação de etapas um arquiteto de soluções deve recomendar para evitar a recorrência desse problema? (Escolha duas.)

A. Modifique o grupo de dimensionamento automático definindo a política de atualização para direcionar a configuração de inicialização mais antiga para substituição. **Mais votado**

B. Crie um novo grupo de Dimensionamento Automático antes da próxima manutenção de patch. Durante a janela de manutenção, aplique o patch em ambos os grupos e reinicie as instâncias.

C. Crie um Elastic Load Balancer na frente do grupo de Dimensionamento Automático. Configure o monitoramento para garantir que as verificações de integridade do grupo-alvo retornem íntegras após o grupo de Dimensionamento Automático substituir as instâncias encerradas.

D. Crie scripts de automação para corrigir uma AMI, atualizar a configuração de inicialização e invocar uma atualização de instância de dimensionamento automático. **Mais votado**

E. Crie um Elastic Load Balancer na frente do grupo de Auto Scaling. Configure a proteção contra encerramento nas instâncias.

349- Uma equipe de cientistas de dados está usando instâncias do Amazon SageMaker e APIs do SageMaker para treinar modelos de aprendizado de máquina (ML). As instâncias do SageMaker são implantadas em uma VPC sem acesso à internet. Os conjuntos de dados para treinamento de modelos de ML são armazenados em um bucket do Amazon S3. Os endpoints da VPC de interface fornecem acesso ao Amazon S3 e às APIs do SageMaker.\

Ocasionalmente, os cientistas de dados precisam acessar o repositório Python Package Index (PyPI) para atualizar os pacotes Python que usam como parte de seu fluxo de trabalho. Um arquiteto de soluções deve fornecer acesso ao repositório PyPI, garantindo que as instâncias do SageMaker permaneçam isoladas da internet.\

Qual solução atenderá a esses requisitos?

A. Crie um repositório do AWS CodeCommit para cada pacote que os cientistas de dados precisam acessar. Configure a sincronização de código entre o repositório PyPI e o repositório do CodeCommit. Crie um endpoint VPC para o CodeCommit.

B. Crie um gateway NAT na VPC. Configure as rotas da VPC para permitir acesso à internet com uma ACL de rede que permita acesso apenas ao endpoint do repositório PyPI.

C. Crie uma instância NAT no VPConfigure rotas VPC para permitir acesso à internet. Configure regras de firewall para a instância do notebook SageMaker que permitam acesso apenas ao endpoint do repositório PyPI.

D. Crie um domínio e repositório do AWS CodeArtifact. Adicione uma conexão externa para public:pypi ao repositório do CodeArtifact. Configure o cliente Python para usar o repositório do CodeArtifact. Crie um endpoint VPC para o CodeArtifact. **Mais votado**

350- Um arquiteto de soluções trabalha para uma agência governamental com requisitos rigorosos de recuperação de desastres. Todos os snapshots do Amazon Elastic Block Store (Amazon EBS) precisam ser salvos em pelo menos duas regiões adicionais da AWS. A agência também precisa manter a menor sobrecarga operacional possível.\

Qual solução atende a esses requisitos?

A. Configure uma política no Amazon Data Lifecycle Manager (Amazon DLM) para ser executada uma vez por dia para copiar os snapshots do EBS para as regiões adicionais. **Mais votado**

B. Use o Amazon EventBridge para agendar uma função do AWS Lambda para copiar os snapshots do EBS para as regiões adicionais.

C. Configure o AWS Backup para criar os snapshots do EBS. Configure a replicação entre regiões do Amazon S3 para copiar os snapshots do EBS para as regiões adicionais.

D. Agende o Amazon EC2 Image Builder para ser executado uma vez por dia para criar uma AMI e copiá-la para as regiões adicionais.

351- Uma empresa tem um projeto que está iniciando instâncias do Amazon EC2 maiores do que o necessário. A conta do projeto não pode fazer parte da organização da empresa no AWS Organizations devido a restrições de política que impedem essa atividade de ser realizada fora da TI corporativa. A empresa deseja permitir apenas o lançamento de instâncias do EC2 t3.small por desenvolvedores na conta do projeto. Essas instâncias do EC2 devem ser restritas à região us-east-2.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma nova conta de desenvolvedor. Mova todas as instâncias, usuários e ativos do EC2 para us-east-2. Adicione a conta à organização da empresa no AWS Organizations. Aplique uma política de marcação que indique afinidade regional.

B. Crie um SCP que proíba a inicialização de todas as instâncias do EC2, exceto as instâncias t3.small do EC2 em us-east-2. Anexe o SCP à conta do projeto.

C. Crie e compre uma Instância Reservada EC2 t3.small para cada desenvolvedor em us-east-2. Atribua a cada desenvolvedor uma instância EC2 específica com o nome dele como tag.

D. Crie uma política de IAM que permita o lançamento apenas de instâncias EC2 t3.small em us-east-2. Anexe a política às funções e grupos que os desenvolvedores usam na conta do projeto. **Mais votado**

352- Uma empresa científica precisa processar dados de texto e imagem de um bucket S3 da Amazon. Os dados são coletados de várias estações de radar durante uma fase ao vivo e crítica de tempo de uma missão espacial profunda. As estações de radar carregam os dados para o bucket S3 de origem. Os dados são prefixados pelo número de identificação da estação de radar.\

A empresa criou um bucket S3 de destino em uma segunda conta. Os dados devem ser copiados do bucket S3 de origem para o bucket S3 de destino para atender a um objetivo de conformidade. Essa replicação ocorre por meio do uso de uma regra de replicação S3 para abranger todos os objetos no bucket S3 de origem.\

Uma estação de radar específica é identificada como tendo os dados mais precisos. A replicação de dados nessa estação de radar deve ser monitorada para conclusão dentro de 30 minutos após a estação de radar carregar os objetos para o bucket S3 de origem.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Configure um agente do AWS DataSync para replicar os dados prefixados do bucket S3 de origem para o bucket S3 de destino. Selecione para usar toda a largura de banda disponível na tarefa e monitore-a para garantir que ela esteja no status TRANSFERINDO. Crie uma regra do Amazon EventBridge para iniciar um alerta caso esse status seja alterado.

B. Na segunda conta, crie outro bucket S3 para receber dados da estação de radar com os dados mais precisos. Configure uma nova regra de replicação para esse novo bucket S3 para separar a replicação das outras estações de radar. Monitore o tempo máximo de replicação até o destino. Crie uma regra do Amazon EventBridge para iniciar um alerta quando o tempo exceder o limite desejado.

C. Habilite o Amazon S3 Transfer Acceleration no bucket S3 de origem e configure a estação de radar com os dados mais precisos para usar o novo endpoint. Monitore a métrica TotalRequestLatency do bucket S3 de destino. Crie uma regra do Amazon EventBridge para iniciar um alerta caso esse status seja alterado.

D. Crie uma nova regra de replicação S3 no bucket S3 de origem que filtre as chaves que usam o prefixo da estação de radar com os dados mais precisos. Habilite o Controle de Tempo de Replicação S3 (S3 RTC). Monitore o tempo máximo de replicação até o destino. Crie uma regra do Amazon EventBridge para iniciar um alerta quando o tempo exceder o limite desejado. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/36/)

353- Uma empresa deseja migrar seu data center local para a Nuvem AWS. Isso inclui milhares de servidores Linux e Microsoft Windows virtualizados, armazenamento SAN, aplicativos Java e PHP com MySQL e bancos de dados Oracle. Há muitos serviços dependentes hospedados no mesmo data center ou externamente. A documentação técnica está incompleta e desatualizada. Um arquiteto de soluções precisa entender o ambiente atual e estimar os custos dos recursos de nuvem após a migração.\

Quais ferramentas ou serviços o arquiteto de soluções deve usar para planejar a migração para a nuvem? (Escolha três.)

A. Serviço de descoberta de aplicativos da AWS **Mais votado**

B. SMS da AWS

C. Raio X da AWS

D. Ferramenta de prontidão para adoção da nuvem AWS (CART) **Mais votado**

E. Inspetor da Amazon

F. Hub de Migração da AWS

354- Um arquiteto de soluções está analisando a resiliência de um aplicativo antes do lançamento. O aplicativo é executado em uma instância do Amazon EC2 implantada em uma sub-rede privada de uma VPC. A instância do EC2 é provisionada por um grupo de Auto Scaling com capacidade mínima de 1 e máxima de 1. O aplicativo armazena dados em uma instância de banco de dados do Amazon RDS para MySQL. A VPC possui sub-redes configuradas em três Zonas de Disponibilidade e está configurada com um único gateway NAT.\

O arquiteto de soluções precisa recomendar uma solução para garantir que o aplicativo opere em várias Zonas de Disponibilidade.\

Qual solução atenderá a esse requisito?

A. Implante um gateway NAT adicional nas outras Zonas de Disponibilidade. Atualize as tabelas de rotas com as rotas apropriadas. Modifique a instância do RDS para MySQL DB para uma configuração Multi-AZ. Configure o grupo de Dimensionamento Automático para iniciar as instâncias em todas as Zonas de Disponibilidade. Defina a capacidade mínima e máxima do grupo de Dimensionamento Automático como 3. **Mais votado**

B. Substitua o gateway NAT por um gateway privado virtual. Substitua a instância do RDS para MySQL DB por um cluster do Amazon Aurora MySQL DB. Configure o grupo de Auto Scaling para iniciar instâncias em todas as sub-redes da VPC. Defina a capacidade mínima e máxima do grupo de Auto Scaling como 3.

C. Substitua o gateway NAT por uma instância NAT. Migre a instância do banco de dados RDS para MySQL para uma instância do banco de dados RDS para PostgreSQL. Inicie uma nova instância EC2 nas outras Zonas de Disponibilidade.

D. Implante um gateway NAT adicional nas outras Zonas de Disponibilidade. Atualize as tabelas de rotas com as rotas apropriadas. Modifique a instância do RDS para MySQL DB para ativar backups automáticos e mantê-los por 7 dias. Configure o grupo de Dimensionamento Automático para iniciar instâncias em todas as sub-redes da VPC. Mantenha a capacidade mínima e a capacidade máxima do grupo de Dimensionamento Automático em 1.

355- Uma empresa está planejando migrar seu aplicativo de processamento de transações local para a AWS. O aplicativo é executado em contêineres Docker hospedados em VMs no data center da empresa. Os contêineres Docker têm armazenamento compartilhado onde o aplicativo registra os dados das transações.\

As transações são sensíveis ao tempo. O volume de transações dentro do aplicativo é imprevisível. A empresa precisa implementar uma solução de armazenamento de baixa latência que dimensione automaticamente a taxa de transferência para atender ao aumento da demanda. A empresa não pode desenvolver o aplicativo e não pode continuar administrando o ambiente de hospedagem Docker.\

Como a empresa deve migrar o aplicativo para a AWS para atender a esses requisitos?

A. Migre os contêineres que executam o aplicativo para o Amazon Elastic Kubernetes Service (Amazon EKS). Use o Amazon S3 para armazenar os dados de transação compartilhados pelos contêineres.

B. Migre os contêineres que executam a aplicação para o AWS Fargate para o Amazon Elastic Container Service (Amazon ECS). Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Crie uma definição de tarefa do Fargate. Adicione um volume à definição de tarefa para apontar para o sistema de arquivos EFS. **Mais votado**

C. Migre os contêineres que executam a aplicação para o AWS Fargate para o Amazon Elastic Container Service (Amazon ECS). Crie um volume do Amazon Elastic Block Store (Amazon EBS). Crie uma definição de tarefa do Fargate. Anexe o volume do EBS a cada tarefa em execução.

D. Inicie instâncias do Amazon EC2. Instale o Docker nas instâncias do EC2. Migre os contêineres para as instâncias do EC2. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Adicione um ponto de montagem às instâncias do EC2 para o sistema de arquivos EFS.

356- Uma empresa está planejando migrar para a Nuvem AWS. A empresa hospeda diversos aplicativos em servidores Windows e Linux. Alguns servidores são físicos e outros são virtuais. A empresa utiliza diversos tipos de bancos de dados em seu ambiente local. A empresa não possui um inventário preciso de seus servidores e aplicativos locais.\

A empresa deseja dimensionar corretamente seus recursos durante a migração. Um arquiteto de soluções precisa obter informações sobre as conexões de rede e os relacionamentos entre os aplicativos. O arquiteto de soluções deve avaliar o ambiente atual da empresa e desenvolver um plano de migração.\

Qual solução fornecerá ao arquiteto de soluções as informações necessárias para desenvolver o plano de migração?

A. Use o Migration Evaluator para solicitar uma avaliação do ambiente da AWS. Use o Coletor sem Agente do AWS Application Discovery Service para importar os detalhes para um relatório Quick Insights do Migration Evaluator.

B. Use o AWS Migration Hub e instale o AWS Application Discovery Agent nos servidores. Implante o coletor de dados do aplicativo Migration Hub Strategy Recommendations. Gere um relatório usando o Migration Hub Strategy Recommendations. **Mais votado**

C. Use o AWS Migration Hub e execute o Coletor sem Agente do AWS Application Discovery Service nos servidores. Agrupe os servidores e bancos de dados usando o AWS Application Migration Service. Gere um relatório usando as Recomendações de Estratégia do Migration Hub.

D. Use a ferramenta de importação do AWS Migration Hub para carregar os detalhes do ambiente local da empresa. Gere um relatório usando as Recomendações de Estratégia do Migration Hub.

357- Uma empresa de serviços financeiros vende sua plataforma de software como serviço (SaaS) para conformidade de aplicativos a grandes bancos globais. A plataforma SaaS é executada na AWS e utiliza diversas contas da AWS gerenciadas em uma organização no AWS Organizations. A plataforma SaaS utiliza diversos recursos da AWS globalmente.\

Para conformidade regulatória, todas as chamadas de API para recursos da AWS devem ser auditadas, rastreadas quanto a alterações e armazenadas em um repositório de dados durável e seguro.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie uma nova trilha no AWS CloudTrail. Use um bucket do Amazon S3 existente na conta de gerenciamento da organização para armazenar os logs. Implante a trilha em todas as regiões da AWS. Habilite a exclusão e a criptografia MFA no bucket do S3.

B. Crie uma nova trilha do AWS CloudTrail em cada conta-membro da organização. Crie novos buckets do Amazon S3 para armazenar os logs. Implante a trilha em todas as regiões da AWS. Habilite a exclusão e a criptografia MFA nos buckets do S3.

C. Crie uma nova trilha do AWS CloudTrail na conta de gerenciamento da organização. Crie um novo bucket do Amazon S3 com o versionamento ativado para armazenar os logs. Implante a trilha para todas as contas da organização. Habilite a exclusão e a criptografia MFA no bucket do S3. **Mais votado**

D. Crie uma nova trilha do AWS CloudTrail na conta de gerenciamento da organização. Crie um novo bucket do Amazon S3 para armazenar os logs. Configure o Amazon Simple Notification Service (Amazon SNS) para enviar notificações de entrega de arquivos de log para um sistema de gerenciamento externo que rastreará os logs. Habilite a exclusão e a criptografia MFA no bucket do S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/36/)

358- Uma empresa está implantando um banco de dados distribuído na memória em uma frota de instâncias do Amazon EC2. A frota consiste em um nó primário e oito nós de trabalho. O nó primário é responsável por monitorar a integridade do cluster, aceitar solicitações de usuários, distribuir solicitações de usuários para os nós de trabalho e enviar uma resposta agregada de volta para um cliente. Os nós de trabalho se comunicam entre si para replicar partições de dados.\

A empresa exige a menor latência de rede possível para atingir o desempenho máximo.\

Qual solução atenderá a esses requisitos?

A. Inicie instâncias do EC2 otimizadas para memória em um grupo de posicionamento de partição.

B. Inicie instâncias do EC2 otimizadas para computação em um grupo de posicionamento de partição.

C. Inicie instâncias do EC2 otimizadas para memória em um grupo de posicionamento de cluster. **Mais votado**

D. Inicie instâncias do EC2 otimizadas para computação em um grupo de posicionamento de dispersão.

359- Uma empresa mantém informações on-premises em aproximadamente 1 milhão de arquivos .csv hospedados em uma VM. Os dados têm inicialmente 10 TB de tamanho e crescem a uma taxa de 1 TB a cada semana. A empresa precisa automatizar os backups dos dados para a Nuvem AWS.\

Os backups dos dados devem ocorrer diariamente. A empresa precisa de uma solução que aplique filtros personalizados para fazer backup apenas de um subconjunto dos dados localizados em diretórios de origem designados. A empresa configurou uma conexão AWS Direct Connect.\

Qual solução atenderá aos requisitos de backup com a MENOR sobrecarga operacional?

A. Use a operação da API CopyObject do Amazon S3 com multipart upload para copiar os dados existentes para o Amazon S3. Use a operação da API CopyObject para replicar novos dados para o Amazon S3 diariamente.

B. Crie um plano de backup no AWS Backup para fazer backup dos dados no Amazon S3. Agende o plano de backup para ser executado diariamente.

C. Instale o agente AWS DataSync como uma VM executada no hipervisor local. Configure uma tarefa do DataSync para replicar os dados para o Amazon S3 diariamente. **Mais votado**

D. Use um dispositivo AWS Snowball Edge para o backup inicial. Use o AWS DataSync para backups incrementais diários no Amazon S3.

360- Uma empresa de serviços financeiros possui um produto de gestão de ativos que milhares de clientes utilizam em todo o mundo. Os clientes fornecem feedback sobre o produto por meio de pesquisas. A empresa está desenvolvendo uma nova solução analítica executada no Amazon EMR para analisar os dados dessas pesquisas. As seguintes personas de usuário precisam acessar a solução analítica para executar diferentes ações:\

• Administrador: provisiona o cluster EMR para a equipe de análise com base nos requisitos da equipe\
• Engenheiro de dados: executa scripts ETL para processar, transformar e enriquecer os conjuntos de dados\
• Analista de dados: executa consultas SQL e Hive nos dados.\

Um arquiteto de soluções deve garantir que todas as personas de usuário tenham acesso com privilégios mínimos apenas aos recursos de que precisam. As personas de usuário devem ser capazes de iniciar apenas aplicativos aprovados e autorizados. A solução também deve garantir a marcação de todos os recursos criados pelas personas de usuário.\

Qual solução atenderá a esses requisitos?

A. Crie funções do IAM para cada persona de usuário. Anexe políticas baseadas em identidade para definir quais ações o usuário que assume a função pode executar. Crie uma regra do AWS Config para verificar recursos não compatíveis. Configure a regra para notificar o administrador e corrigir os recursos não compatíveis.

B. Configure a autenticação baseada em Kerberos para clusters EMR na inicialização. Especifique uma configuração de segurança Kerberos, juntamente com as opções Kerberos específicas do cluster.

C. Use o AWS Service Catalog para controlar as versões do Amazon EMR disponíveis para implantação, a configuração do cluster e as permissões para cada persona de usuário. **Mais votado**

D. Inicie o cluster EMR usando o AWS CloudFormation. Anexe políticas baseadas em recursos ao cluster EMR durante a criação do cluster. Crie uma regra AWS. Configure uma regra para verificar clusters e buckets do Amazon S3 não compatíveis. Configure a regra para notificar o administrador e corrigir os recursos não compatíveis.

361- Uma empresa de software como serviço (SaaS) utiliza a AWS para hospedar um serviço alimentado pelo AWS PrivateLink. O serviço consiste em um software proprietário executado em três instâncias do Amazon EC2 por meio de um balanceador de carga de rede (NLB). As instâncias estão em sub-redes privadas em várias zonas de disponibilidade na região eu-west-2. Todos os clientes da empresa estão na região eu-west-2.\

No entanto, a empresa agora adquire um novo cliente na região us-east-1. A empresa cria uma nova VPC e novas sub-redes na região us-east-1. A empresa estabelece o peering de VPCs entre as VPCs nas duas regiões.\

A empresa deseja conceder ao novo cliente acesso ao serviço SaaS, mas não deseja implantar imediatamente novos recursos do EC2 na região us-east-1.\

Qual solução atenderá a esses requisitos?

A. Configure um serviço de endpoint PrivateLink em us-east-1 para usar o NLB existente em eu-west-2. Conceda acesso a contas específicas da AWS para se conectar ao serviço SaaS.

B. Crie um NLB em us-east-1. Crie um grupo de destino de IP que use os endereços IP das instâncias da empresa em eu-west-2 que hospedam o serviço SaaS. Configure um serviço de endpoint PrivateLink que use o NLB em us-east-1. Conceda acesso a contas específicas da AWS para se conectar ao serviço SaaS. **Mais votado**

C. Crie um Application Load Balancer (ALB) na frente das instâncias do EC2 em eu-west-2. Crie um NLB em us-east-1. Associe o NLB em us-east-1 a um grupo de destino de ALB que usa o ALB em eu-west-2. Configure um serviço de endpoint PrivateLink que usa o NLB em us-east-1. Conceda acesso a contas específicas da AWS para se conectar ao serviço SaaS.

D. Use o AWS Resource Access Manager (AWS RAM) para compartilhar as instâncias do EC2 que estão em eu-west-2. Em us-east-1, crie um NLB e um grupo de destino de instância que inclua as instâncias do EC2 compartilhadas de eu-west-2. Configure um serviço de endpoint PrivateLink que use o NLB que está em us-east-1. Conceda acesso a contas específicas da AWS para se conectar ao serviço SaaS.

362- Uma empresa precisa monitorar um número crescente de buckets do Amazon S3 em duas regiões da AWS. A empresa também precisa rastrear a porcentagem de objetos criptografados no Amazon S3. A empresa precisa de um painel para exibir essas informações para as equipes internas de conformidade.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um novo painel com 3 Storage Lens em cada região para rastrear métricas de bucket e criptografia. Agregue os dados dos painéis de ambas as regiões em um único painel no Amazon QuickSight para as equipes de conformidade.

B. Implante uma função do AWS Lambda em cada região para listar o número de buckets e o status de criptografia dos objetos. Armazene esses dados no Amazon S3. Use consultas do Amazon Athena para exibir os dados em um painel personalizado no Amazon QuickSight para as equipes de conformidade.

C. Use o painel padrão do S3 Storage Lens para rastrear métricas de bucket e criptografia. Conceda às equipes de conformidade acesso ao painel diretamente no console do S3. **Mais votado**

D. Crie uma regra do Amazon EventBridge para detectar eventos do AWS CloudTrail na criação de objetos do S3. Configure a regra para invocar uma função do AWS Lambda e registrar métricas de criptografia no Amazon DynamoDB. Use o Amazon QuickSight para exibir as métricas em um painel para as equipes de conformidade.

363- O CISO de uma empresa solicitou a um arquiteto de soluções que reprojetasse as práticas atuais de CI/CD da empresa para garantir que as implantações de patches em seu aplicativo possam ocorrer o mais rápido possível, com o mínimo de tempo de inatividade, caso vulnerabilidades sejam descobertas. A empresa também deve ser capaz de reverter rapidamente uma alteração em caso de erros.\

O aplicativo web é implantado em uma frota de instâncias do Amazon EC2 por trás de um Application Load Balancer. A empresa está usando o GitHub para hospedar o código-fonte do aplicativo e configurou um projeto do AWS CodeBuild para compilá-lo. A empresa também pretende usar o AWS CodePipeline para acionar compilações a partir de confirmações do GitHub usando o projeto CodeBuild existente.\

Qual configuração de CI/CD atende a todos os requisitos?

A. Configurar o CodePipeline com um estágio de implantação usando o AWS CodeDeploy configurado para implantação local. Monitorar o código recém-implantado e, se houver algum problema, enviar outra atualização de código.

B. Configure o CodePipeline com um estágio de implantação usando o AWS CodeDeploy configurado para implantações azul/verde. Monitore o código recém-implantado e, se houver algum problema, acione uma reversão manual usando o CodeDeploy. **Mais votado**

C. Configure o CodePipeline com um estágio de implantação usando o AWS CloudFormation para criar um pipeline para pilhas de teste e produção. Monitore o código recém-implantado e, se houver algum problema, envie outra atualização de código.

D. Configure o CodePipeline com um estágio de implantação usando o AWS OpsWorks e implantações locais. Monitore o código recém-implantado e, se houver algum problema, envie outra atualização de código.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/37/)

364- Uma empresa gerencia várias contas da AWS usando uma organização no AWS Organizations. Diferentes unidades de negócios da empresa executam aplicativos em instâncias do Amazon EC2. Todas as instâncias do EC2 precisam ter uma tag "BusinessUnit" para que a empresa possa rastrear o custo de cada unidade de negócios.\

Uma auditoria recente revelou que algumas instâncias não tinham essa tag. A empresa adicionou manualmente a tag ausente às instâncias.\

O que um arquiteto de soluções deve fazer para impor o requisito de marcação no futuro?

A. Habilite políticas de tags na organização. Crie uma política de tags para a tag BusinessUnit. Certifique-se de que a conformidade com a capitalização da chave da tag esteja desativada. Implemente a política de tags para o tipo de recurso ec2:instance. Anexe a política de tags à raiz da organização.

B. Habilite políticas de tags na organização. Crie uma política de tags para a tag BusinessUnit. Certifique-se de que a conformidade com a capitalização da chave de tag esteja ativada. Implemente a política de tags para o tipo de recurso ec2:instance. Anexe a política de tags à conta de gerenciamento da organização.

C. Crie um SCP e anexe-o à raiz da organização. Inclua a seguinte instrução no SCP:\
**Mais votado**

D. Crie um SCP e anexe-o à conta de gerenciamento da organização. Inclua a seguinte declaração no SCP:

365- Uma empresa está executando uma carga de trabalho que consiste em milhares de instâncias do Amazon EC2. A carga de trabalho está sendo executada em uma VPC que contém várias sub-redes públicas e privadas. As sub-redes públicas têm uma rota de 0.0.0.0/0 para um gateway de internet existente. As sub-redes privadas têm uma rota de 0.0.0.0/0 para um gateway NAT existente.\

Um arquiteto de soluções precisa migrar toda a frota de instâncias do EC2 para usar IPv6. As instâncias do EC2 que estão em sub-redes privadas não devem ser acessíveis pela internet pública.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Atualize a VPC existente e associe um bloco CIDR IPv6 personalizado à VPC e a todas as sub-redes. Atualize todas as tabelas de rotas da VPC e adicione uma rota para ::/0 ao gateway de internet.

B. Atualize a VPC existente e associe um bloco CIDR IPv6 fornecido pela Amazon à VPC e a todas as sub-redes. Atualize as tabelas de rotas da VPC para todas as sub-redes privadas e adicione uma rota para ::/0 ao gateway NAT.

C. Atualize a VPC existente e associe um bloco CIDR IPv6 fornecido pela Amazon à VPC e a todas as sub-redes. Crie um gateway de internet somente de saída. Atualize as tabelas de rotas da VPC para todas as sub-redes privadas e adicione uma rota para ::/0 ao gateway de internet somente de saída. **Mais votado**

D. Atualize a VPC existente e associe um bloco CIDR IPV6 personalizado à VPC e a todas as sub-redes. Crie um novo gateway NAT e habilite o suporte a IPV6. Atualize as tabelas de rotas da VPC para todas as sub-redes privadas e adicione uma rota para ::/0 ao gateway NAT habilitado para IPv6.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/37/)

366- Uma empresa está usando o Amazon API Gateway para implantar uma API REST privada que fornecerá acesso a dados confidenciais. A API deve ser acessível apenas a partir de um aplicativo implantado em uma VPC. A empresa implanta a API com sucesso. No entanto, a API não pode ser acessada a partir de uma instância do Amazon EC2 implantada na VPC.\

Qual solução fornecerá conectividade entre a instância do EC2 e a API?

A. Crie um endpoint de interface da VPC para o API Gateway. Anexe uma política de endpoint que permita ações apigateway:*. Desative a nomenclatura DNS privada para o endpoint da VPC. Configure uma política de recursos da API que permita acesso a partir da VPC. Use o nome DNS do endpoint da VPC para acessar a API.

B. Crie um endpoint de interface da VPC para o API Gateway. Anexe uma política de endpoint que permita a ação execute-api:Invoke. Habilite a nomenclatura DNS privada para o endpoint da VPC. Configure uma política de recursos da API que permita acesso a partir do endpoint da VPC. Use os nomes DNS do endpoint da API para acessar a API. **Mais votado**

C. Crie um Balanceador de Carga de Rede (NLB) e um link de VPC. Configure a integração privada entre o API Gateway e o NLB. Use os nomes DNS do endpoint da API para acessar a API.

D. Crie um Application Load Balancer (ALB) e um VPC Link. Configure a integração privada entre o API Gateway e o ALB. Use o nome DNS do endpoint do ALB para acessar a API.

367- Uma grande empresa de folha de pagamento fundiu-se recentemente com uma pequena empresa de recrutamento e seleção. A empresa unificada agora possui várias unidades de negócios, cada uma com sua própria conta na AWS.\

Um arquiteto de soluções deve garantir que a empresa possa gerenciar centralmente as políticas de faturamento e acesso para todas as contas da AWS. O arquiteto de soluções configura o AWS Organizations enviando um convite para todas as contas de membros da empresa a partir de uma conta de gerenciamento centralizada.\

O que o arquiteto de soluções deve fazer em seguida para atender a esses requisitos?

A. Crie o grupo do IAM "OrganizationAccountAccess" em cada conta de membro. Inclua as funções do IAM necessárias para cada administrador.

B. Crie a política do IAM OrganizationAccountAccessPolicy em cada conta de membro. Conecte as contas de membro à conta de gerenciamento usando o acesso entre contas.

C. Crie a função do IAM OrganizationAccountAccessRole em cada conta de membro. Conceda permissão à conta de gerenciamento para assumir a função do IAM. **Mais votado**

D. Crie a função do IAM OrganizationAccountAccessRole na conta de gerenciamento. Anexe a política gerenciada da AWS AdministratorAccess à função do IAM. Atribua a função do IAM aos administradores em cada conta-membro.

368- Uma empresa possui serviços de aplicação que foram conteinerizados e implantados em várias instâncias do Amazon EC2 com IPs públicos. Um cluster do Apache Kafka foi implantado nas instâncias do EC2. Um banco de dados PostgreSQL foi migrado para o Amazon RDS para PostgreSQL. A empresa espera um aumento significativo nos pedidos em sua plataforma com o lançamento de uma nova versão de seu principal produto.\

Quais mudanças na arquitetura atual reduzirão a sobrecarga operacional e darão suporte ao lançamento do produto?

A. Crie um grupo de Auto Scaling do EC2 por trás de um Application Load Balancer. Crie réplicas de leitura adicionais para a instância do banco de dados. Crie fluxos de dados do Amazon Kinesis e configure os serviços do aplicativo para usá-los. Armazene e disponibilize conteúdo estático diretamente do Amazon S3.

B. Crie um grupo de Auto Scaling do EC2 por trás de um Application Load Balancer. Implante a instância do banco de dados no modo Multi-AZ e habilite o Auto Scaling de armazenamento. Crie fluxos de dados do Amazon Kinesis e configure os serviços de aplicação para usá-los. Armazene e disponibilize conteúdo estático diretamente do Amazon S3.

C. Implante a aplicação em um cluster Kubernetes criado nas instâncias do EC2, atrás de um Application Load Balancer. Implante a instância do banco de dados no modo Multi-AZ e habilite o dimensionamento automático do armazenamento. Crie um cluster do Amazon Managed Streaming para Apache Kafka e configure os serviços da aplicação para usar o cluster. Armazene conteúdo estático no Amazon S3, atrás de uma distribuição do Amazon CloudFront.

D. Implante a aplicação no Amazon Elastic Kubernetes Service (Amazon EKS) com o AWS Fargate e habilite o escalonamento automático por trás de um Application Load Balancer. Crie réplicas de leitura adicionais para a instância do banco de dados. Crie um cluster do Amazon Managed Streaming para Apache Kafka e configure os serviços da aplicação para usar o cluster. Armazene conteúdo estático no Amazon S3 por trás de uma distribuição do Amazon CloudFront. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/37/)

369- Uma empresa hospeda uma VPN em um data center local. Os funcionários atualmente se conectam à VPN para acessar arquivos em seus diretórios pessoais do Windows. Recentemente, houve um grande crescimento no número de funcionários que trabalham remotamente. Como resultado, o uso de largura de banda para conexões com o data center começou a atingir 100% durante o horário comercial.\

A empresa deve projetar uma solução na AWS que suporte o crescimento da força de trabalho remota da empresa, reduza o uso de largura de banda para conexões com o data center e reduza a sobrecarga operacional.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha duas.)

A. Crie um Gateway de Volume do AWS Storage Gateway. Monte um volume do Gateway de Volume no servidor de arquivos local.

B. Migre os diretórios iniciais para o Amazon FSx para Windows File Server. **Mais votado**

C. Migre os diretórios iniciais para o Amazon FSx para Lustre.

D. Migrar usuários remotos para o AWS Client VPN. **Mais votado**

E. Crie uma conexão do AWS Direct Connect do data center local para a AWS.

370- Uma empresa possui várias contas da AWS. Recentemente, uma auditoria de segurança revelou muitos volumes não criptografados do Amazon Elastic Block Store (Amazon EBS) vinculados a instâncias do Amazon EC2.\

Um arquiteto de soluções deve criptografar os volumes não criptografados e garantir que eles sejam detectados automaticamente no futuro. Além disso, a empresa deseja uma solução que possa gerenciar centralmente várias contas da AWS com foco em conformidade e segurança.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha duas.)

A. Crie uma organização no AWS Organizations. Configure a AWS Control Tower e ative os controles altamente recomendados (guardrails). Associe todas as contas à organização. Categorize as contas da AWS em UOs. **Mais votado**

B. Use a CLI da AWS para listar todos os volumes não criptografados em todas as contas da AWS. Execute um script para criptografar todos os volumes não criptografados no local.

C. Crie um snapshot de cada volume não criptografado. Crie um novo volume criptografado a partir do snapshot não criptografado. Desanexe o volume existente e substitua-o pelo volume criptografado. **Mais votado**

D. Crie uma organização no AWS Organizations. Configure a AWS Control Tower e ative os controles obrigatórios (guardrails). Associe todas as contas à organização. Categorize as contas da AWS em UOs.

E. Ative o AWS CloudTrail. Configure uma regra do Amazon EventBridge para detectar e criptografar automaticamente volumes não criptografados.

371- Uma empresa hospeda uma aplicação web de intranet em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). Atualmente, os usuários se autenticam na aplicação em um banco de dados de usuários interno.\

A empresa precisa autenticar os usuários na aplicação usando um diretório existente do AWS Directory Service para Microsoft Active Directory. Todos os usuários com contas no diretório devem ter acesso à aplicação.\

Qual solução atenderá a esses requisitos?

A. Crie um novo cliente de aplicativo no diretório. Crie uma regra de ouvinte para o ALB. Especifique a ação authenticate-oidc para a regra de ouvinte. Configure a regra de ouvinte com o emissor, o ID e o segredo do cliente e os detalhes do endpoint apropriados para o serviço do Active Directory. Configure o novo cliente de aplicativo com a URL de retorno de chamada fornecida pelo ALB.

B. Configurar um pool de usuários do Amazon Cognito. Configure o pool de usuários com um provedor de identidade federado (ldP) que tenha metadados do diretório. Crie um cliente de aplicativo. Associe o cliente de aplicativo ao pool de usuários. Crie uma regra de ouvinte para o ALSpecifique a ação authenticate-cognito para a regra de ouvinte. Configure a regra de ouvinte para usar o pool de usuários e o cliente de aplicativo. **Mais votado**

C. Adicione o diretório como um novo provedor de identidade do IAM (ldP). Crie uma nova função do IAM com o tipo de entidade Federação SAML 2.0. Configure uma política de função que permita acesso ao ALB. Configure a nova função como a função de usuário autenticado padrão para o ldP. Crie uma regra de ouvinte para o ALB. Especifique a ação authenticate-oidc para a regra de ouvinte.

D. Habilite o AWS IAM Identity Center (AWS Single Sign-On). Configure o diretório como um provedor de identidade externo (ldP) que usa SAML. Use o método de provisionamento automático. Crie uma nova função do IAM com o tipo de entidade "federação SAML 2.0". Configure uma política de função que permita acesso ao ALB. Anexe a nova função a todos os grupos. Crie uma regra de ouvinte para o ALB. Especifique a ação "authenticate-cognito" para a regra de ouvinte.

372- Uma empresa possui um website que atende a muitos visitantes. A empresa implanta um serviço de back-end para o website em uma região primária da AWS e em uma região de recuperação de desastres (DR).\

Uma única distribuição do Amazon CloudFront é implantada para o website. A empresa cria um conjunto de registros do Amazon Route 53 com verificações de integridade e uma política de roteamento de failover para o serviço de back-end da região primária. A empresa configura o conjunto de registros do Route 53 como uma origem para a distribuição do CloudFront. A empresa configura outro conjunto de registros que aponta para o endpoint do serviço de back-end na região de DR como um tipo de registro de failover secundário. O TTL para ambos os conjuntos de registros é de 60 segundos.\

Atualmente, o failover leva mais de 1 minuto. Um arquiteto de soluções deve projetar uma solução que forneça o tempo de failover mais rápido.\

Qual solução atingirá esse objetivo?

A. Implante uma distribuição adicional do CloudFront. Crie um novo conjunto de registros de failover do Route 53 com verificações de integridade para ambas as distribuições do CloudFront.

B. Defina o TTL como 4 segundos para os conjuntos de registros existentes do Route 53 que são usados para o serviço de backend em cada região.

C. Crie novos conjuntos de registros para os serviços de back-end usando uma política de roteamento de latência. Use os conjuntos de registros como origem na distribuição do CloudFront.

D. Crie um grupo de origem do CloudFront que inclua duas origens, uma para cada região de serviço de back-end. Configure o failover de origem como um comportamento de cache para a distribuição do CloudFront. **Mais votado**

373- Uma empresa utiliza várias contas da AWS e possui várias equipes de DevOps executando cargas de trabalho de produção e não produção nessas contas. A empresa gostaria de restringir centralmente o acesso a alguns dos serviços da AWS que as equipes de DevOps não utilizam. A empresa decidiu usar as Organizações da AWS e convidou com sucesso todas as contas da AWS para a Organização. Ela gostaria de permitir o acesso aos serviços que estão em uso no momento e negar alguns serviços específicos. Além disso, gostaria de administrar várias contas juntas como uma única unidade.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Use uma estratégia de lista de negação. **Mais votado**

B. Revise o Access Advisor no AWS IAM para determinar os serviços usados recentemente **Mais votado**

C. Revise o relatório do AWS Trusted Advisor para determinar os serviços usados recentemente.

D. Remova o SCP FullAWSAccess padrão.

E. Defina unidades organizacionais (UOs) e coloque as contas de membros nas UOs. **Mais votado**

F. Remova o SCP DenyAWSAccess padrão.

374- Uma empresa de eventos ao vivo está projetando uma solução de escalonamento para seu aplicativo de ingressos na AWS. O aplicativo apresenta altos picos de utilização durante eventos de venda. Cada evento de venda é um evento único e agendado. O aplicativo é executado em instâncias do Amazon EC2 que estão em um grupo de Auto Scaling. O aplicativo usa PostgreSQL para a camada de banco de dados.\

A empresa precisa de uma solução de escalonamento para maximizar a disponibilidade durante os eventos de venda.\

Qual solução atenderá a esses requisitos?

A. Use uma política de escalonamento preditivo para as instâncias do EC2. Hospede o banco de dados em uma instância do Amazon Aurora PostgreSQL Serverless v2 Multi-AZ DB com réplicas de leitura de escalonamento automático. Crie uma máquina de estados do AWS Step Functions para executar funções paralelas do AWS Lambda para pré-aquecer o banco de dados antes de um evento de venda. Crie uma regra do Amazon EventBridge para invocar a máquina de estados.

B. Use uma política de escalonamento agendada para as instâncias do EC2. Hospede o banco de dados em uma instância Mulli-AZ do Amazon RDS para PostgreSQL com réplicas de leitura de escalonamento automático. Crie uma regra do Amazon EventBridge que invoque uma função do AWS Lambda para criar uma réplica de leitura maior antes de um evento de venda. Execute o failover para a réplica de leitura maior. Crie outra regra do EventBridge que invoque outra função do Lambda para reduzir a escala da réplica de leitura após o evento de venda.

C. Use uma política de escalonamento preditivo para as instâncias do EC2. Hospede o banco de dados em uma instância MultiAZ do Amazon RDS para PostgreSQL com réplicas de leitura de escalonamento automático. Crie uma máquina de estados do AWS Step Functions para executar funções paralelas do AWS Lambda para pré-aquecer o banco de dados antes de um evento de venda. Crie uma regra do Amazon EventBridge para invocar a máquina de estados.

D. Use uma política de escalonamento agendada para as instâncias do EC2. Hospede o banco de dados em um cluster de banco de dados Amazon Aurora PostgreSQL Multi-AZ. Crie uma regra do Amazon EventBridge que invoque uma função do AWS Lambda para criar uma réplica do Aurora maior antes de um evento de venda. Faça failover para a réplica do Aurora maior. Crie outra regra do EventBridge que invoque outra função do Lambda para reduzir a escala da réplica do Aurora após o evento de venda. **Mais votado**

375- Uma empresa executa um aplicativo de intranet localmente. A empresa deseja configurar um backup do aplicativo na nuvem. A empresa selecionou o AWS Elastic Disaster Recovery para esta solução.\

A empresa exige que o tráfego de replicação não trafegue pela internet pública. O aplicativo também não deve ser acessível pela internet. A empresa não deseja que esta solução consuma toda a largura de banda de rede disponível porque outros aplicativos exigem largura de banda.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Crie uma VPC que tenha pelo menos duas sub-redes privadas, dois gateways NAT e um gateway privado virtual. **Mais votado**

B. Crie uma VPC que tenha pelo menos duas sub-redes públicas, um gateway privado virtual e um gateway de internet.

C. Crie uma conexão VPN de site para site da AWS entre a rede local e a rede de destino da AWS.

D. Crie uma conexão AWS Direct Connect e um gateway Direct Connect entre a rede local e a rede AWS de destino. **Mais votado**

E. Durante a configuração dos servidores de replicação, selecione a opção para usar endereços IP privados para replicação de dados. **Mais votado**

F. Durante a configuração das definições de inicialização para os servidores de destino, selecione a opção para garantir que o endereço IP privado da instância de recuperação corresponda ao endereço IP privado do servidor de origem.

376- Uma empresa que fornece serviços de armazenamento de imagens deseja implantar uma solução voltada para o cliente na AWS. Milhões de clientes individuais utilizarão a solução. A solução receberá lotes de arquivos de imagem grandes, redimensionará os arquivos e os armazenará em um bucket do Amazon S3 por até 6 meses.\

A solução deve lidar com variações significativas na demanda. A solução também deve ser confiável em escala empresarial e ter a capacidade de reexecutar tarefas de processamento em caso de falha.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Use o AWS Step Functions para processar o evento S3 que ocorre quando um usuário armazena uma imagem. Execute uma função do AWS Lambda que redimensione a imagem no local e substitua o arquivo original no bucket S3. Crie uma política de expiração do ciclo de vida do S3 para expirar todas as imagens armazenadas após 6 meses.

B. Use o Amazon EventBridge para processar o evento S3 que ocorre quando um usuário carrega uma imagem. Execute uma função do AWS Lambda que redimensione a imagem no local e substitua o arquivo original no bucket S3. Crie uma política de expiração do ciclo de vida do S3 para expirar todas as imagens armazenadas após 6 meses.

C. Use as Notificações de Eventos do S3 para invocar uma função do AWS Lambda quando um usuário armazena uma imagem. Use a função do Lambda para redimensionar a imagem no local e armazenar o arquivo original no bucket do S3. Crie uma política de ciclo de vida do S3 para mover todas as imagens armazenadas para o S3 Standard-Infrequent Access (S3 Standard-IA) após 6 meses.

D. Use o Amazon Simple Queue Service (Amazon SQS) para processar o evento S3 que ocorre quando um usuário armazena uma imagem. Execute uma função do AWS Lambda que redimensione a imagem e armazene o arquivo redimensionado em um bucket S3 que usa o S3 Standard-Infrequent Access (S3 Standard-IA). Crie uma política de ciclo de vida S3 para mover todas as imagens armazenadas para o S3 Glacier Deep Archive após 6 meses. **Mais votado**

377- Uma empresa possui uma organização no AWS Organizations que inclui uma conta AWS separada para cada um dos seus departamentos. Equipes de aplicativos de diferentes departamentos desenvolvem e implantam soluções de forma independente.\

A empresa deseja reduzir os custos de computação e gerenciá-los adequadamente entre os departamentos. A empresa também deseja melhorar a visibilidade do faturamento de cada departamento. A empresa não deseja perder flexibilidade operacional ao selecionar recursos de computação.\

Qual solução atenderá a esses requisitos?

A. Use os Orçamentos da AWS para cada departamento. Use o Editor de Tags para aplicar tags aos recursos apropriados. Adquira Planos de Economia para Instâncias do EC2.

B. Configurar as organizações da AWS para usar o faturamento consolidado. Implementar uma estratégia de marcação que identifique os departamentos. Usar SCPs para aplicar marcações aos recursos apropriados. Adquirir Planos de Economia de Instâncias do EC2.

C. Configure as organizações da AWS para usar o faturamento consolidado. Implemente uma estratégia de marcação que identifique os departamentos. Use o Editor de Marcas para aplicar marcas aos recursos apropriados. Adquira Planos de Economia de Computação. **Mais votado**

D. Use os orçamentos da AWS para cada departamento. Use SCPs para aplicar tags aos recursos apropriados. Adquira planos de economia de computação.

378- Uma empresa possui uma aplicação web que carrega fotos e vídeos com segurança para um bucket do Amazon S3. A empresa exige que apenas usuários autenticados tenham permissão para publicar conteúdo. A aplicação gera uma URL pré-assinada que é usada para carregar objetos por meio de uma interface de navegador. A maioria dos usuários relata tempos de upload lentos para objetos maiores que 100 MB.\

O que um arquiteto de soluções pode fazer para melhorar o desempenho desses uploads e, ao mesmo tempo, garantir que apenas usuários autenticados tenham permissão para publicar conteúdo?

A. Configure um Amazon API Gateway com um endpoint de API otimizado para borda que tenha um recurso como proxy de serviço S3. Configure o método PUT para esse recurso para expor a operação PutObject do S3. Proteja o API Gateway usando um autorizador COGNITO_USER_POOLS. Faça com que a interface do navegador use o API Gateway em vez da URL pré-assinada para carregar objetos.

B. Configure um Amazon API Gateway com um endpoint de API regional que tenha um recurso como proxy de serviço S3. Configure o método PUT para esse recurso para expor a operação PutObject do S3. Proteja o API Gateway usando um autorizador do AWS Lambda. Configure a interface do navegador para usar o API Gateway em vez da URL pré-assinada para carregar objetos.

C. Habilite um endpoint do S3 Transfer Acceleration no bucket do S3. Use o endpoint ao gerar a URL pré-assinada. Faça com que a interface do navegador carregue os objetos para essa URL usando a API de upload multipartes do S3. **Mais votado**

D. Configure uma distribuição do Amazon CloudFront para o bucket S3 de destino. Habilite os métodos PUT e POST para o comportamento de cache do CloudFront. Atualize a origem do CloudFront para usar uma identidade de acesso de origem (OAI). Conceda ao usuário OAI 3 permissões PutObject na política de bucket. Faça com que a interface do navegador carregue objetos usando a distribuição do CloudFront.

379- Uma grande empresa está migrando todo o seu portfólio de TI para a AWS. Cada unidade de negócios da empresa possui uma conta independente na AWS que oferece suporte aos ambientes de desenvolvimento e teste. Novas contas para suportar as cargas de trabalho de produção serão necessárias em breve.\

O departamento financeiro precisa de um método centralizado para pagamento, mas precisa manter a visibilidade dos gastos de cada grupo para alocar custos.\

A equipe de segurança precisa de um mecanismo centralizado para controlar o uso do IAM em todas as contas da empresa.\

Qual combinação das seguintes opções atende às necessidades da empresa com o MENOR esforço? (Escolha duas.)

A. Use uma coleção de modelos parametrizados do AWS CloudFormation que definam permissões comuns do IAM que são iniciadas em cada conta. Exija que todas as contas novas e existentes iniciem as pilhas apropriadas para aplicar o modelo de privilégios mínimos.

B. Use o AWS Organizations para criar uma nova organização a partir de uma conta pagadora selecionada e definir uma hierarquia de unidades organizacionais. Convide as contas existentes para ingressar na organização e crie novas contas usando o AWS Organizations. **Mais votado**

C. Exija que cada unidade de negócios utilize suas próprias contas da AWS. Marque cada conta da AWS adequadamente e habilite o Cost Explorer para administrar os chargebacks.

D. Habilite todos os recursos do AWS Organizations e estabeleça políticas de controle de serviço apropriadas que filtrem as permissões do IAM para subcontas. **Mais votado**

E. Consolide todas as contas da AWS da empresa em uma única conta. Use tags para fins de faturamento e o recurso Access Advisor do IAM para aplicar o modelo de privilégios mínimos.

380- Uma empresa possui uma solução que analisa dados meteorológicos de milhares de estações meteorológicas. As estações meteorológicas enviam os dados por meio de uma API REST do Amazon API Gateway que possui uma integração com a função Lambda da AWS. A função Lambda chama um serviço de terceiros para pré-processamento de dados. O serviço de terceiros fica sobrecarregado e falha no pré-processamento, causando perda de dados.\

Um arquiteto de soluções deve aprimorar a resiliência da solução. O arquiteto de soluções deve garantir que nenhum dado seja perdido e que os dados possam ser processados posteriormente, caso ocorram falhas.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma fila do Amazon Simple Queue Service (Amazon SQS). Configure a fila como uma fila de mensagens mortas para a API.

B. Crie duas filas do Amazon Simple Queue Service (Amazon SQS): uma fila primária e uma fila secundária. Configure a fila secundária como a fila de mensagens mortas da fila primária. Atualize a API para usar uma nova integração com a fila primária. Configure a função Lambda como o destino de invocação para a fila primária. **Mais votado**

C. Crie dois barramentos de eventos do Amazon EventBridge: um barramento de eventos primário e um barramento de eventos secundário. Atualize a API para usar uma nova integração com o barramento de eventos primário. Configure uma regra do EventBridge para reagir a todos os eventos no barramento de eventos primário. Especifique a função Lambda como o destino da regra. Configure o barramento de eventos secundário como o destino da falha para a função Lambda.

D. Crie um barramento de eventos personalizado do Amazon EventBridge. Configure o barramento de eventos como o destino de falha para a função Lambda.

381- Uma empresa construiu um site de comércio eletrônico na AWS usando uma arquitetura web de três camadas. O aplicativo é baseado em Java e composto por uma distribuição do Amazon CloudFront, uma camada de servidor web Apache com instâncias do Amazon EC2 em um grupo de Auto Scaling e um banco de dados MySQL Amazon Aurora de backend.\

No mês passado, durante um evento promocional de vendas, usuários relataram erros e timeouts ao adicionar itens aos seus carrinhos de compras. A equipe de operações recuperou os logs criados pelos servidores web e revisou as métricas de desempenho do cluster Aurora DB. Alguns servidores web foram encerrados antes que os logs pudessem ser coletados e as métricas do Aurora não foram suficientes para a análise de desempenho das consultas.\

Qual combinação de etapas o arquiteto de soluções deve adotar para melhorar a visibilidade do desempenho do aplicativo durante eventos de pico de tráfego? (Escolha três.)

A. Configure o cluster do Aurora MySQL DB para publicar logs de consultas e erros lentos no Amazon CloudWatch Logs. **Mais votado**

B. Implemente o AWS X-Ray SDK para rastrear solicitações HTTP de entrada nas instâncias do EC2 e implementar o rastreamento de consultas SQL com o X-Ray SDK para Java. **Mais votado**

C. Configure o cluster do Aurora MySQL DB para transmitir logs de consultas e erros lentos para o Amazon Kinesis.

D. Instale e configure um agente do Amazon CloudWatch Logs nas instâncias do EC2 para enviar os logs do Apache para o CloudWatch Logs. **Mais votado**

E. Habilitar e configurar o AWS CloudTrail para coletar e analisar a atividade do aplicativo do Amazon EC2 e do Aurora

F. Habilite o benchmark de desempenho do cluster Aurora MySQL DB e publique o fluxo no AWS X-Ray.

382- Uma empresa que disponibiliza anúncios de emprego para uma força de trabalho sazonal está observando um aumento no tráfego e na utilização. Os serviços de back-end são executados em um par de instâncias do Amazon EC2, atrás de um Application Load Balancer com o Amazon DynamoDB como datastore. O tráfego de leitura e gravação de aplicativos é lento durante os períodos de pico.\

Qual opção oferece uma arquitetura de aplicativo escalável para lidar com os períodos de pico com o MENOR esforço de desenvolvimento?

A. Migrar os serviços de backend para o AWS Lambda. Aumentar a capacidade de leitura e gravação do DynamoDB.

B. Migre os serviços de backend para o AWS Lambda. Configure o DynamoDB para usar tabelas globais.

C. Use grupos de dimensionamento automático para os serviços de back-end. Use o dimensionamento automático do DynamoDB. **Mais votado**

D. Use grupos de Auto Scaling para os serviços de back-end. Use o Amazon Simple Queue Service (Amazon SQS) e uma função do AWS Lambda para gravar no DynamoDB.

383- Uma empresa está migrando para a nuvem. Ela deseja avaliar as configurações de máquinas virtuais em seu ambiente de data center existente para garantir que possa dimensionar novas instâncias do Amazon EC2 com precisão. A empresa deseja coletar métricas, como CPU, memória e utilização de disco, e precisa de um inventário dos processos em execução em cada instância. A empresa também gostaria de monitorar as conexões de rede para mapear as comunicações entre os servidores.\

Qual delas permitiria a coleta desses dados de forma MAIS econômica?

A. Use o AWS Application Discovery Service e implante o agente de coleta de dados em cada máquina virtual no data center. **Mais votado**

B. Configure o agente do Amazon CloudWatch em todos os servidores do ambiente local e publique métricas no Amazon CloudWatch Logs.

C. Use o AWS Application Discovery Service e habilite a descoberta sem agente no ambiente de virtualização existente.

D. Habilite o AWS Application Discovery Service no AWS Management Console e configure o firewall corporativo para permitir varreduras por meio de uma VPN.

384- Uma empresa fornece um aplicativo de software como serviço (SaaS) executado na Nuvem AWS. O aplicativo é executado em instâncias do Amazon EC2 por meio de um Balanceador de Carga de Rede (NLB). As instâncias estão em um grupo de Auto Scaling e são distribuídas em três Zonas de Disponibilidade em uma única Região da AWS.\

A empresa está implantando o aplicativo em outras Regiões. A empresa deve fornecer endereços IP estáticos do aplicativo aos clientes para que eles possam adicioná-los às listas de permissões. A solução deve rotear automaticamente os clientes para a Região geograficamente mais próxima deles.\

Qual solução atenderá a esses requisitos?

A. Crie uma distribuição do Amazon CloudFront. Crie um grupo de origem do CloudFront. Adicione o NLB para cada região adicional ao grupo de origem. Forneça aos clientes os intervalos de endereços IP dos pontos de presença da distribuição.

B. Crie um acelerador padrão do AWS Global Accelerator. Crie um endpoint de acelerador padrão para o NLB em cada região adicional. Forneça aos clientes o endereço IP do Global Accelerator. **Mais votado**

C. Crie uma distribuição do Amazon CloudFront. Crie uma origem personalizada para o NLB em cada região adicional. Forneça aos clientes os intervalos de endereços IP dos pontos de extremidade da distribuição.

D. Crie um acelerador de roteamento personalizado do AWS Global Accelerator. Crie um listener para o acelerador de roteamento personalizado. Adicione o endereço IP e as portas para o NLB em cada região adicional. Forneça aos clientes o endereço IP do Global Accelerator.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/39/)

385- Uma empresa executa múltiplas cargas de trabalho na Nuvem AWS. A empresa possui unidades separadas para desenvolvimento de software. A empresa utiliza o AWS Organizations e a federação com SAML para conceder permissões aos desenvolvedores para gerenciar recursos em suas contas AWS. Cada unidade de desenvolvimento implanta suas cargas de trabalho de produção em uma conta de produção comum.\

Recentemente, ocorreu um incidente na conta de produção em que membros de uma unidade de desenvolvimento encerraram uma instância do EC2 que pertencia a uma unidade de desenvolvimento diferente. Um arquiteto de soluções deve criar uma solução que impeça que um incidente semelhante aconteça no futuro. A solução também deve permitir que os desenvolvedores gerenciem as instâncias usadas para suas cargas de trabalho.\

Qual estratégia atenderá a esses requisitos?

A. Crie UOs separadas em organizações da AWS para cada unidade de desenvolvimento. Atribua as UOs criadas às contas da AWS da empresa. Crie um SCP separado com uma ação de negação e uma condição StringNotEquals para a tag de recurso DevelopmentUnit que corresponda ao nome da unidade de desenvolvimento. Atribua o SCP à UO correspondente.

B. Passe um atributo para DevelopmentUnit como uma tag de sessão do AWS Security Token Service (AWS STS) durante a federação SAML. Atualize a política do IAM para a função de IAM assumida pelos desenvolvedores com uma ação de negação e uma condição StringNotEquals para a tag de recurso DevelopmentUnit e aws:PrincipalTag/DevelopmentUnit. **Mais votado**

C. Passe um atributo para DevelopmentUnit como uma tag de sessão do AWS Security Token Service (AWS STS) durante a federação SAML. Crie um SCP com uma ação de permissão e uma condição StringEquals para a tag de recurso DevelopmentUnit e aws:PrincipalTag/DevelopmentUnit. Atribua o SCP à UO raiz.

D. Crie políticas de IAM separadas para cada unidade de desenvolvimento. Para cada política de IAM, adicione uma ação de permissão e uma condição StringEquals para a tag de recurso DevelopmentUnit e o nome da unidade de desenvolvimento. Durante a federação SAML, use o AWS Security Token Service (AWS STS) para atribuir a política de IAM e corresponder o nome da unidade de desenvolvimento à função de IAM assumida.

386- Uma empresa está construindo uma plataforma de serviços de infraestrutura para seus usuários. A empresa possui os seguintes requisitos:\

• Fornecer acesso com privilégios mínimos aos usuários ao iniciar a infraestrutura da AWS, para que eles não possam provisionar serviços não aprovados.\
• Usar uma conta central para gerenciar a criação de serviços de infraestrutura.\
• Fornecer a capacidade de distribuir serviços de infraestrutura para várias contas no AWS Organizations.\
• Fornecer a capacidade de aplicar tags em qualquer infraestrutura iniciada pelos usuários.\

Qual combinação de ações usando os serviços da AWS atenderá a esses requisitos? (Escolha três.)

A. Desenvolver serviços de infraestrutura usando modelos do AWS CloudFormation. Adicione os modelos a um bucket central do Amazon S3 e adicione as funções ou usuários do IAM que exigem acesso à política do bucket do S3.

B. Desenvolver serviços de infraestrutura usando modelos do AWS CloudFormation. Carregar cada modelo como um produto do Catálogo de Serviços da AWS para portfólios criados em uma conta central da AWS. Compartilhar esses portfólios com a estrutura de organizações criada para a empresa. **Mais votado**

C. Permitir que as funções do IAM do usuário tenham permissões AWSCloudFormationFullAccess e AmazonS3ReadOnlyAccess. Adicione um SCP de organizações no nível de usuário raiz da conta da AWS para negar todos os serviços, exceto AWS CloudFormation e Amazon S3.

D. Permita que as funções do IAM do usuário tenham apenas permissões ServiceCatalogEndUserAccess. Use um script de automação para importar os portfólios centrais para contas locais da AWS, copiar a TagOption, atribuir acesso aos usuários e aplicar restrições de inicialização. **Mais votado**

E. Use a Biblioteca TagOption do Catálogo de Serviços da AWS para manter uma lista de tags exigidas pela empresa. Aplique a TagOption aos produtos ou portfólios do Catálogo de Serviços da AWS. **Mais votado**

F. Use a propriedade AWS CloudFormation Resource Tags para impor a aplicação de tags a quaisquer modelos do CloudFormation que serão criados para usuários.

387- Uma empresa implanta uma nova aplicação web. Como parte da configuração, a empresa configura o AWS WAF para registrar no Amazon S3 por meio do Amazon Kinesis Data Firehose. A empresa desenvolve uma consulta no Amazon Athena que é executada uma vez por dia para retornar dados de log do AWS WAF das últimas 24 horas. O volume de logs diários é constante. No entanto, com o tempo, a mesma consulta está demorando mais para ser executada.\

Um arquiteto de soluções precisa projetar uma solução que impeça o aumento contínuo do tempo de consulta. A solução deve minimizar a sobrecarga operacional.\

Qual solução atenderá a esses requisitos?

A. Crie uma função do AWS Lambda que consolide os logs do AWS WAF de cada dia em um arquivo de log.

B. Reduza a quantidade de dados digitalizados configurando o AWS WAF para enviar logs para um bucket S3 diferente a cada dia.

C. Atualize a configuração do Kinesis Data Firehose para particionar os dados no Amazon S3 por data e hora. Crie tabelas externas para o Amazon Redshift. Configure o Amazon Redshift Spectrum para consultar a fonte de dados.

D. Modifique a configuração do Kinesis Data Firehose e a definição da tabela do Athena para particionar os dados por data e hora. Altere a consulta do Athena para visualizar as partições relevantes. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/39/)

388- Uma empresa está desenvolvendo uma aplicação web que roda em instâncias do Amazon EC2 em um grupo de Auto Scaling por trás de um Application Load Balancer (ALB) público. Somente usuários de um país específico têm permissão para acessar a aplicação. A empresa precisa ter a capacidade de registrar as solicitações de acesso que foram bloqueadas. A solução deve exigir o mínimo de manutenção possível.\

Qual solução atende a esses requisitos?

A. Crie um IPSet contendo uma lista de intervalos de IP pertencentes ao país especificado. Crie uma ACL da Web do AWS WAF. Configure uma regra para bloquear quaisquer solicitações que não sejam originadas de um intervalo de IP no IPSet. Associe a regra à ACL da Web. Associe a ACL da Web ao ALB.

B. Crie uma ACL da Web do AWS WAF. Configure uma regra para bloquear quaisquer solicitações que não sejam originárias do país especificado. Associe a regra à ACL da Web. Associe a ACL da Web ao ALB. **Mais votado**

C. Configure o AWS Shield para bloquear quaisquer solicitações que não sejam originárias do país especificado. Associe o AWS Shield ao ALB.

D. Crie uma regra de grupo de segurança que permita as portas 80 e 443 de intervalos de IP pertencentes ao país especificado. Associe o grupo de segurança ao ALB.

389- Uma empresa está migrando um aplicativo de uma infraestrutura local para a Nuvem AWS. Durante as reuniões de projeto de migração, a empresa expressou preocupações sobre a disponibilidade e as opções de recuperação para seu servidor de arquivos Windows legado. O servidor de arquivos contém dados confidenciais críticos para os negócios que não podem ser recriados em caso de corrupção ou perda de dados. De acordo com os requisitos de conformidade, os dados não devem trafegar pela internet pública. A empresa deseja migrar para serviços gerenciados da AWS sempre que possível.\

A empresa decide armazenar os dados em um sistema de arquivos Amazon FSx for Windows File Server. Um arquiteto de soluções deve projetar uma solução que copie os dados para outra região da AWS para fins de recuperação de desastres (DR).\

Qual solução atenderá a esses requisitos?

A. Crie um bucket de destino do Amazon S3 na região de recuperação de desastres. Estabeleça a conectividade entre o sistema de arquivos do FSx for Windows File Server na região primária e o bucket do S3 na região de recuperação de desastres usando o Amazon FSx File Gateway. Configure o bucket do S3 como uma fonte de backup contínua no FSx File Gateway.

B. Crie um sistema de arquivos FSx para Windows File Server na região de DR. Estabeleça a conectividade entre a VPC da região primária e a VPC na região de DR usando a VPN Site-to-Site da AWS. Configure o AWS DataSync para se comunicar usando endpoints de VPN.

C. Crie um sistema de arquivos FSx para Windows File Server na região de DR. Estabeleça a conectividade entre a VPC na região primária e a VPC na região de DR usando o peering de VPC. Configure o AWS DataSync para se comunicar usando endpoints de VPC de interface com o AWS PrivateLink. **Mais votado**

D. Crie um sistema de arquivos do FSx for Windows File Server na região de DR. Estabeleça a conectividade entre a VPC na região primária e a VPC na região de DR usando o AWS Transit Gateway em cada região. Use o AWS Transfer Family para copiar arquivos entre o sistema de arquivos do FSx for Windows File Server na região primária e o sistema de arquivos do FSx for Windows File Server na região de DR pela rede de backbone privada da AWS.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/39/)

390- Uma empresa está atualmente na fase de design de um aplicativo que exigirá um RPO de menos de 5 minutos e um RTO de menos de 10 minutos. A equipe de arquitetura de soluções prevê que o banco de dados armazenará aproximadamente 10 TB de dados. Como parte do design, eles buscam uma solução de banco de dados que ofereça à empresa a capacidade de realizar failover para uma região secundária.\

Qual solução atenderá a esses requisitos de negócios com o MENOR custo?

A. Implante um cluster de banco de dados do Amazon Aurora e tire snapshots do cluster a cada 5 minutos. Após a conclusão do snapshot, copie-o para uma região secundária para servir como backup em caso de falha.

B. Implante uma instância do Amazon RDS com uma réplica de leitura entre regiões em uma região secundária. Em caso de falha, promova a réplica de leitura para a região primária. **Mais votado**

C. Implante um cluster de banco de dados do Amazon Aurora na região primária e outro em uma região secundária. Use o AWS DMS para manter a região secundária sincronizada.

D. Implante uma instância do Amazon RDS com uma réplica de leitura na mesma região. Em caso de falha, promova a réplica de leitura para a primária.

391- Uma empresa financeira precisa criar uma conta separada na AWS para um novo aplicativo de carteira digital. A empresa usa o AWS Organizations para gerenciar suas contas. Um arquiteto de soluções usa o usuário do IAM Support1 da conta de gerenciamento para criar uma nova conta de membro com [finance1@example.com](mailto:finance1@example.com) como endereço de e-mail.\

O que o arquiteto de soluções deve fazer para criar usuários do IAM na nova conta de membro?

A. Faça login no Console de Gerenciamento da AWS com as credenciais de usuário root da conta da AWS usando a senha de 64 caracteres do e-mail inicial do AWS Organizations enviado para [finance1@example.com](mailto:finance1@example.com) . Configure os usuários do IAM conforme necessário.

B. Na conta de gerenciamento, troque de função para assumir a função OrganizationAccountAccessRole com o ID da conta do novo membro. Configure os usuários do IAM conforme necessário. **Mais votado**

C. Acesse a página de login do AWS Management Console. Selecione "Entrar usando as credenciais da conta root". Entre usando o endereço de e-mail [finance1@example.com](mailto:finance1@example.com) e a senha root da conta de gerenciamento. Configure os usuários do IAM conforme necessário.

D. Acesse a página de login do AWS Management Console. Faça login usando o ID da conta do novo membro e as credenciais do IAM do Support1. Configure os usuários do IAM conforme necessário.

392- Uma locadora de veículos criou uma API REST sem servidor para fornecer dados ao seu aplicativo móvel. O aplicativo consiste em uma API Amazon API Gateway com um endpoint regional, funções AWS Lambda e um cluster de banco de dados sem servidor Amazon Aurora MySQL. A empresa recentemente disponibilizou a API para aplicativos móveis de parceiros. Isso resultou em um aumento significativo no número de solicitações, causando erros esporádicos de memória do banco de dados.\

A análise do tráfego da API indica que os clientes estão fazendo várias solicitações HTTP GET para as mesmas consultas em um curto período de tempo. O tráfego é concentrado durante o horário comercial, com picos em feriados e outros eventos.\

A empresa precisa aprimorar sua capacidade de suportar o uso adicional, minimizando o aumento de custos associados à solução.\

Qual estratégia atende a esses requisitos?

A. Converta o endpoint regional do API Gateway em um endpoint otimizado para borda. Habilite o cache na fase de produção.

B. Implementar um cache do Amazon ElastiCache para Redis para armazenar os resultados das chamadas ao banco de dados. Modificar as funções do Lambda para usar o cache. **Mais votado**

C. Modifique a configuração do cluster do Aurora Serverless DB para aumentar a quantidade máxima de memória disponível.

D. Habilite a limitação na fase de produção do API Gateway. Defina os valores de taxa e burst para limitar as chamadas recebidas.

393- Uma empresa está migrando um aplicativo local e um banco de dados MySQL para a AWS. O aplicativo processa dados altamente sensíveis, e novos dados são constantemente atualizados no banco de dados. Os dados não devem ser transferidos pela internet. A empresa também deve criptografar os dados em trânsito e em repouso.\

O banco de dados tem 5 TB de tamanho. A empresa já criou o esquema do banco de dados em uma instância do Amazon RDS para MySQL. A empresa configurou uma conexão AWS Direct Connect de 1 Gbps com a AWS. A empresa também configurou uma VIF pública e uma VIF privada. Um arquiteto de soluções precisa projetar uma solução que migre os dados para a AWS com o menor tempo de inatividade possível.\

Qual solução atenderá a esses requisitos?

A. Execute um backup do banco de dados. Copie os arquivos de backup para um dispositivo AWS Snowball Edge Storage Optimized. Importe o backup para o Amazon S3. Use criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3) para criptografia em repouso. Use TLS para criptografia em trânsito. Importe os dados do Amazon S3 para a instância do banco de dados.

B. Use o AWS Database Migration Service (AWS DMS) para migrar os dados para a AWS. Crie uma instância de replicação do DMS em uma sub-rede privada. Crie endpoints VPC para o AWS DMS. Configure uma tarefa do DMS para copiar dados do banco de dados local para a instância do banco de dados usando carga completa mais captura de dados alterados (CDC). Use a chave padrão do AWS Key Management Service (AWS KMS) para criptografia em repouso. Use TLS para criptografia em trânsito. **Mais votado**

C. Execute um backup do banco de dados. Use o AWS DataSync para transferir os arquivos de backup para o Amazon S3. Use criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3) para criptografia em repouso. Use TLS para criptografia em trânsito. Importe os dados do Amazon S3 para a instância do banco de dados.

D. Use o Amazon S3 File Gateway. Configure uma conexão privada com o Amazon S3 usando o AWS PrivateLink. Execute um backup do banco de dados. Copie os arquivos de backup para o Amazon S3. Use criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3) para criptografia em repouso. Use TLS para criptografia em trânsito. Importe os dados do Amazon S3 para a instância do banco de dados.

394- A Accompany está implantando um novo cluster para análise de big data na AWS. O cluster será executado em diversas instâncias do Linux Amazon EC2 distribuídas por diversas Zonas de Disponibilidade.\

Todos os nós do cluster devem ter acesso de leitura e gravação ao armazenamento de arquivos subjacente comum. O armazenamento de arquivos deve ter alta disponibilidade, ser resiliente, compatível com a Portable Operating System Interface (POSIX) e acomodar altos níveis de throughput.\

Qual solução de armazenamento atenderá a esses requisitos?

A. Provisione um compartilhamento de arquivos NFS do gateway de arquivos do AWS Storage Gateway anexado a um bucket do Amazon S3. Monte o compartilhamento de arquivos NFS em cada instância EC2 do cluster.

B. Provisione um novo sistema de arquivos Amazon Elastic File System (Amazon EFS) que utilize o modo de desempenho de uso geral. Monte o sistema de arquivos EFS em cada instância EC2 do cluster.

C. Provisione um novo volume do Amazon Elastic Block Store (Amazon EBS) que use o tipo de volume io2. Anexe o volume EBS a todas as instâncias EC2 no cluster.

D. Provisione um novo sistema de arquivos Amazon Elastic File System (Amazon EFS) que utilize o modo de desempenho Max I/O. Monte o sistema de arquivos EFS em cada instância EC2 do cluster. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/40/)

395- Uma empresa hospeda uma solução de software como serviço (SaaS) na AWS. A solução possui uma API Amazon API Gateway que atende a um endpoint HTTPS. A API utiliza funções do AWS Lambda para computação. As funções do Lambda armazenam dados em um banco de dados Amazon Aurora Serverless v1.\

A empresa utilizou o AWS Serverless Application Model (AWS SAM) para implantar a solução. A solução se estende por várias Zonas de Disponibilidade e não possui um plano de recuperação de desastres (DR).\

Um arquiteto de soluções deve desenvolver uma estratégia de DR que permita recuperar a solução em outra região da AWS. A solução tem um RTO de 5 minutos e um RPO de 1 minuto.\

O que o arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma réplica de leitura do banco de dados Aurora Serverless v1 na região de destino. Use o AWS SAM para criar um runbook para implantar a solução na região de destino. Promova a réplica de leitura para primária em caso de desastre.

B. Altere o banco de dados Aurora Serverless v1 para um banco de dados global Aurora MySQL padrão que se estenda pela região de origem e pela região de destino. Use o AWS SAM para criar um runbook para implantar a solução na região de destino.

C. Crie um cluster de banco de dados Aurora Serverless v1 com várias instâncias de gravação na região de destino. Inicie a solução na região de destino. Configure as duas soluções regionais para funcionarem em uma configuração ativa-passiva.

D. Altere o banco de dados Aurora Serverless v1 para um banco de dados global Aurora MySQL padrão que se estenda pela região de origem e pela região de destino. Inicie a solução na região de destino. Configure as duas soluções regionais para funcionarem em uma configuração ativa-passiva. **Mais vo**

396- Uma empresa possui uma rede de agências de viagens e executa um aplicativo na Nuvem AWS. Os funcionários da empresa usam o aplicativo para pesquisar informações sobre destinos de viagem. O conteúdo dos destinos é atualizado quatro vezes por ano.\

Duas instâncias fixas do Amazon EC2 atendem ao aplicativo. A empresa usa uma zona pública hospedada do Amazon Route 53 com um registro multivalor de travel.example.com que retorna os endereços IP elásticos para as instâncias do EC2. O aplicativo usa o Amazon DynamoDB como seu armazenamento de dados primário. A empresa usa uma instância do Redis auto-hospedada como solução de cache.\

Durante as atualizações de conteúdo, a carga nas instâncias do EC2 e na solução de cache aumenta drasticamente. Esse aumento de carga levou a tempo de inatividade em diversas ocasiões. Um arquiteto de soluções deve atualizar o aplicativo para que ele tenha alta disponibilidade e possa lidar com a carga gerada pelas atualizações de conteúdo.\

Qual solução atenderá a esses requisitos?

A. Configure o DynamoDB Accelerator (DAX) como cache na memória. Atualize o aplicativo para usar o DAX. Crie um grupo de Dimensionamento Automático para as instâncias do EC2. Crie um Balanceador de Carga de Aplicativo (ALB). Defina o grupo de Dimensionamento Automático como destino para o ALB. Atualize o registro do Route 53 para usar uma política de roteamento simples que tenha como alvo o alias DNS do ALB. Configure o escalonamento agendado para as instâncias do EC2 antes das atualizações de conteúdo. **Mais votado**

B. Configure o Amazon ElastiCache para Redis. Atualize o aplicativo para usar o ElastiCache. Crie um grupo de Auto Scaling para as instâncias do EC2. Crie uma distribuição do Amazon CloudFront e defina o grupo de Auto Scaling como origem para a distribuição. Atualize o registro do Route 53 para usar uma política de roteamento simples que tenha como alvo o alias DNS da distribuição do CloudFront. Escale manualmente as instâncias do EC2 antes das atualizações de conteúdo.

C. Configure o Amazon ElastiCache para o Memcached. Atualize a aplicação para usar o ElastiCache. Crie um grupo de Auto Scaling para as instâncias do EC2. Crie um Application Load Balancer (ALB). Defina o grupo de Auto Scaling como destino para o ALB. Atualize o registro do Route 53 para usar uma política de roteamento simples que tenha como alvo o alias DNS do ALB. Configure o escalonamento agendado para a aplicação antes das atualizações de conteúdo.

D. Configure o DynamoDB Accelerator (DAX) como cache na memória. Atualize o aplicativo para usar o DAX. Crie um grupo de Auto Scaling para as instâncias do EC2. Crie uma distribuição do Amazon CloudFront e defina o grupo de Auto Scaling como origem da distribuição. Atualize o registro do Route 53 para usar uma política de roteamento simples que tenha como alvo o alias DNS da distribuição do CloudFront. Escale manualmente as instâncias do EC2 antes das atualizações de conteúdo.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/40/)

397- Uma empresa precisa armazenar e processar dados de imagens que serão enviados de dispositivos móveis usando um aplicativo personalizado. O pico de uso ocorre entre 8h e 17h em dias úteis, com milhares de envios por minuto. O aplicativo raramente é usado em outros horários. O usuário é notificado quando o processamento da imagem é concluído.\

Qual combinação de ações um arquiteto de soluções deve tomar para garantir que o processamento de imagens possa ser dimensionado para lidar com a carga? (Escolha três.)

A. Carregue arquivos do software móvel diretamente para o Amazon S3. Use as notificações de eventos do S3 para criar uma mensagem em uma fila do Amazon MQ.

B. Carregue arquivos do software móvel diretamente para o Amazon S3. Use as notificações de eventos do S3 para criar uma mensagem em uma fila padrão do Amazon Simple Queue Service (Amazon SQS). **Mais votado**

C. Invoque uma função do AWS Lambda para executar o processamento de imagem quando uma mensagem estiver disponível na fila. **Mais votado**

D. Invoque uma tarefa de operações em lote do S3 para executar o processamento de imagem quando uma mensagem estiver disponível na fila.

E. Envie uma notificação push para o aplicativo móvel usando o Amazon Simple Notification Service (Amazon SNS) quando o processamento estiver concluído. **Mais votado**

F. Envie uma notificação push para o aplicativo móvel usando o Amazon Simple Email Service (Amazon SES) quando o processamento estiver concluído.

398- Uma empresa está desenvolvendo uma aplicação na AWS. A aplicação envia logs para um cluster do Amazon OpenSearch Service para análise. Todos os dados devem ser armazenados em uma VPC.\

Alguns dos desenvolvedores da empresa trabalham em casa. Outros trabalham em três escritórios diferentes da empresa. Os desenvolvedores precisam acessar o OpenSearch Service para analisar e visualizar logs diretamente de suas máquinas de desenvolvimento locais.\

Qual solução atenderá a esses requisitos?

A. Configurar e instalar um endpoint de VPN do cliente AWS. Associe o endpoint de VPN do cliente a uma sub-rede na VPC. Configure um portal de autoatendimento de VPN do cliente. Instrua os desenvolvedores a se conectarem usando o cliente para VPN do cliente. **Mais votado**

B. Crie um gateway de trânsito e conecte-o à VPC. Crie uma VPN Site-to-Site da AWS. Crie um anexo ao gateway de trânsito. Instrua os desenvolvedores a se conectarem usando um cliente OpenVPN.

C. Crie um gateway de trânsito e conecte-o ao VPOrquive uma conexão AWS Direct Connect. Configure uma VIF pública na conexão Direct Connect. Associe a VIF pública ao gateway de trânsito. Instrua os desenvolvedores a se conectarem à conexão Direct Connect.

D. Crie e configure um bastion host em uma sub-rede pública da VPC. Configure o grupo de segurança do bastion host para permitir acesso SSH a partir dos intervalos CIDR da empresa. Instrua os desenvolvedores a se conectarem via SSH.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/40/)

399- Uma empresa deseja migrar seu website de um data center local para a AWS. Ao mesmo tempo, deseja migrar o website para uma arquitetura baseada em microsserviços em contêineres para melhorar a disponibilidade e a eficiência de custos. A política de segurança da empresa determina que os privilégios e as permissões de rede devem ser configurados de acordo com as melhores práticas, utilizando o privilégio mínimo.\

Um arquiteto de soluções deve criar uma arquitetura em contêineres que atenda aos requisitos de segurança e que tenha implantado o aplicativo em um cluster do Amazon ECS.\

Quais etapas são necessárias após a implantação para atender aos requisitos? (Escolha duas.)

A. Crie tarefas usando o modo de rede de ponte.

B. Crie tarefas usando o modo de rede awsvpc. **Mais votado**

C. Aplique grupos de segurança a instâncias do Amazon EC2 e use funções do IAM para instâncias do EC2 para acessar outros recursos.

D. Aplique grupos de segurança às tarefas e passe as credenciais do IAM para o contêiner no momento da inicialização para acessar outros recursos.

E. Aplique grupos de segurança às tarefas e use funções do IAM para tarefas para acessar outros recursos.

400- Uma empresa está executando uma aplicação sem servidor que consiste em diversas funções do AWS Lambda e tabelas do Amazon DynamoDB. A empresa criou uma nova funcionalidade que requer que as funções do Lambda acessem um cluster de banco de dados do Amazon Neptune. O cluster de banco de dados do Neptune está localizado em três sub-redes em uma VPC.\

Qual das soluções possíveis permitirá que as funções do Lambda acessem o cluster de banco de dados do Neptune e as tabelas do DynamoDB? (Escolha duas.)

A. Crie três sub-redes públicas na VPC Neptune e roteie o tráfego por meio de um gateway de internet. Hospede as funções Lambda nas três novas sub-redes públicas.

B. Crie três sub-redes privadas na VPC Neptune e roteie o tráfego de internet por meio de um gateway NAT. Hospede as funções Lambda nas três novas sub-redes privadas. **Mais votado**

C. Hospede as funções do Lambda fora do VPAtualize o grupo de segurança do Neptune para permitir o acesso dos intervalos de IP das funções do Lambda.

D. Hospede as funções do Lambda fora da VPC. Crie um endpoint da VPC para o banco de dados Neptune e faça com que as funções do Lambda acessem o Neptune por meio desse endpoint.

E. Crie três sub-redes privadas na VPC Neptune. Hospede as funções do Lambda nas três novas sub-redes isoladas. Crie um endpoint da VPC para o DynamoDB e roteie o tráfego do DynamoDB para o endpoint da VPC. **Mais votado**

401- Uma empresa deseja projetar uma solução de recuperação de desastres (DR) para um aplicativo executado no data center da empresa. O aplicativo grava em um compartilhamento de arquivos SMB e cria uma cópia em um segundo compartilhamento de arquivos. Ambos os compartilhamentos de arquivos estão no data center. O aplicativo usa dois tipos de arquivos: arquivos de metadados e arquivos de imagem.\

A empresa deseja armazenar a cópia na AWS. A empresa precisa usar o SMB para acessar os dados do data center ou da AWS em caso de desastre. A cópia dos dados raramente é acessada, mas deve estar disponível em até 5 minutos.

A. Implante o AWS Outposts com armazenamento Amazon S3. Configure uma instância do Amazon EC2 do Windows no Outposts como um servidor de arquivos.

B. Implante um Amazon FSx File Gateway. Configure um sistema de arquivos Multi-AZ do Amazon FSx para Windows File Server que utilize armazenamento SSD.

C. Implante um Amazon S3 File Gateway. Configure o S3 File Gateway para usar o Amazon S3 Standard-Infrequent Access (S3 Standard-IA) para os arquivos de metadados e para usar o S3 Glacier Deep Archive para os arquivos de imagem.

D. Implante um Amazon S3 File Gateway. Configure o S3 File Gateway para usar o Amazon S3 Standard-Infrequent Access (S3 Standard-IA) para os arquivos de metadados e de imagem. **Mais**

402- Uma empresa está criando uma solução que pode transferir 400 funcionários para um ambiente de trabalho remoto em caso de um desastre inesperado. Os desktops dos usuários possuem uma combinação de sistemas operacionais Windows e Linux. Diversos tipos de software, como navegadores da web e clientes de e-mail, são instalados em cada desktop.\

Um arquiteto de soluções precisa implementar uma solução que possa ser integrada ao Active Directory local da empresa para permitir que os funcionários usem suas credenciais de identidade existentes. A solução deve fornecer autenticação multifator (MFA) e replicar a experiência do usuário dos desktops existentes.\

Qual solução atenderá a esses requisitos?

A. Use o Amazon WorkSpaces para o serviço de desktop em nuvem. Configure uma conexão VPN com a rede local. Crie um Conector do AD e conecte-se ao Active Directory local. Ative a MFA para o Amazon WorkSpaces usando o Console de Gerenciamento da AWS.

B. Use o Amazon AppStream 2.0 como um serviço de streaming de aplicativos. Configure o Desktop View para os funcionários. Configure uma conexão VPN com a rede local. Configure os Serviços de Federação do Active Directory (AD FS) locais. Conecte a rede VPC ao AD FS por meio da conexão VPN.

C. Use o Amazon WorkSpaces para o serviço de desktop em nuvem. Configure uma conexão VPN com a rede local. Crie um conector AD e conecte-se ao Active Directory local. Configure um servidor RADIUS para MFA. **Mais votado**

D. Use o Amazon AppStream 2.0 como um serviço de streaming de aplicativos. Configure os Serviços de Federação do Active Directory no local. Configure a MFA para conceder acesso aos usuários no AppStream 2.0.

403- Uma empresa implantou um contact center Amazon Connect. Os agentes do contact center estão relatando um grande número de chamadas geradas por computador. A empresa está preocupada com os custos e os efeitos na produtividade dessas chamadas. A empresa deseja uma solução que permita aos agentes sinalizar a chamada como spam e bloquear automaticamente os números para que não sejam enviados a um agente no futuro.\

Qual é a solução operacional MAIS eficiente para atender a esses requisitos?

A. Personalize o Painel de Controle de Contatos (CCP) adicionando um botão de chamada de sinalizador que invocará uma função do AWS Lambda que chama a API UpdateContactAttributes. Use uma tabela do Amazon DynamoDB para armazenar os números de spam. Modifique os fluxos de contato para procurar o atributo atualizado e usar uma função do Lambda para ler e gravar na tabela do DynamoDB. **Mais votado**

B. Use uma regra do Contact Lens para Amazon Connect que procure por chamadas de spam. Use uma tabela do Amazon DynamoDB para armazenar os números de spam. Modifique os fluxos de contato para procurar a regra e invocar uma função do AWS Lambda para ler e gravar na tabela do DynamoDB.

C. Use uma tabela do Amazon DynamoDB para armazenar os números de spam. Crie uma conexão rápida para a qual os agentes possam transferir a chamada de spam a partir do Painel de Controle de Contatos (CCP). Modifique o fluxo de contato da conexão rápida para invocar uma função do AWS Lambda para gravar na tabela do DynamoDB.

D. Modifique o fluxo de contato inicial para solicitar a entrada do chamador. Se o agente não receber a entrada, ele deverá marcar o chamador como spam. Use uma tabela do Amazon DynamoDB para armazenar os números de spam. Use uma função do AWS Lambda para ler e gravar na tabela do DynamoDB.

404- Uma empresa instalou sensores para coletar informações sobre parâmetros ambientais, como umidade e luminosidade, em todas as suas fábricas. A empresa precisa transmitir e analisar os dados na Nuvem AWS em tempo real. Se algum dos parâmetros estiver fora dos limites aceitáveis, a equipe de operações da fábrica deve receber uma notificação imediatamente.\

Qual solução atenderá a esses requisitos?

A. Transmita os dados para um fluxo de entrega do Amazon Kinesis Data Firehose. Use o AWS Step Functions para consumir e analisar os dados no fluxo de entrega do Kinesis Data Firehose. Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe de operações.

B. Transmita os dados para um cluster do Amazon Managed Streaming for Apache Kafka (Amazon MSK). Configure um gatilho no Amazon MSK para invocar uma tarefa do AWS Fargate para analisar os dados. Use o Amazon Simple Email Service (Amazon SES) para notificar a equipe de operações.

C. Transmita os dados para um fluxo de dados do Amazon Kinesis. Crie uma função do AWS Lambda para consumir o fluxo de dados do Kinesis e analisá-los. Use o Amazon Simple Notification Service (Amazon SNS) para notificar a equipe de operações. **Mais votado**

D. Transmita os dados para um aplicativo do Amazon Kinesis Data Analytics. Use um serviço automaticamente dimensionado e conteinerizado no Amazon Elastic Container Service (Amazon ECS) para consumir e analisar os dados. Use o Amazon Simple Email Service (Amazon SES) para notificar a equipe de operações.

405- Uma empresa está se preparando para implantar um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) para uma carga de trabalho. A empresa espera que o cluster suporte um número imprevisível de pods sem estado. Muitos dos pods serão criados em um curto período, à medida que a carga de trabalho dimensiona automaticamente o número de réplicas que utiliza.\

Qual solução MAXIMIZARÁ a resiliência dos nós?

A. Use um modelo de inicialização separado para implantar o plano de controle do EKS em um segundo cluster separado dos grupos de nós de carga de trabalho.

B. Atualize os grupos de nós da carga de trabalho. Use um número menor de grupos de nós e instâncias maiores nos grupos de nós.

C. Configure o Kubernetes Cluster Autoscaler para garantir que a capacidade de computação dos grupos de nós de carga de trabalho permaneça subprovisionada.

D. Configure a carga de trabalho para usar restrições de distribuição de topologia baseadas na Zona de Disponibilidade. **Mais votado**

406- Uma empresa precisa implementar um plano de recuperação de desastres (DR) para uma aplicação web. A aplicação é executada em uma única região da AWS.\

A aplicação utiliza microsserviços executados em contêineres. Os contêineres são hospedados no AWS Fargate no Amazon Elastic Container Service (Amazon ECS). A aplicação possui uma instância de banco de dados do Amazon RDS para MySQL como camada de dados e utiliza o Amazon Route 53 para resolução de DNS. Um alarme do Amazon CloudWatch invoca uma regra do Amazon EventBridge se a aplicação apresentar uma falha.\

Um arquiteto de soluções deve projetar uma solução de DR para fornecer recuperação de aplicações para uma região separada. A solução deve minimizar o tempo necessário para a recuperação de uma falha.\

Qual solução atenderá a esses requisitos?

A. Configure um segundo cluster ECS e um serviço ECS no Fargate na região separada. Crie uma função do AWS Lambda para executar as seguintes ações: tirar um snapshot da instância do RDS DB, copiar o snapshot para a região separada, criar uma nova instância do RDS DB a partir do snapshot e atualizar o Route 53 para rotear o tráfego para o segundo cluster ECS. Atualize a regra do EventBridge para adicionar um destino que invocará a função do Lambda.

B. Crie uma função do AWS Lambda que crie um segundo cluster ECS e um serviço ECS na região separada. Configure a função Lambda para executar as seguintes ações: tirar um snapshot da instância do RDS DB, copiar o snapshot para a região separada, criar uma nova instância do RDS DB a partir do snapshot e atualizar o Route 53 para rotear o tráfego para o segundo cluster ECS. Atualize a regra do EventBridge para adicionar um destino que invocará a função Lambda.

C. Configure um segundo cluster ECS e um serviço ECS no Fargate na região separada. Crie uma réplica de leitura entre regiões da instância do RDS DB na região separada. Crie uma função do AWS Lambda para promover a réplica de leitura para o banco de dados primário. Configure a função Lambda para atualizar o Route 53 e rotear o tráfego para o segundo cluster ECS. Atualize a regra do EventBridge para adicionar um destino que invocará a função Lambda. **Mais votado**

D. Configure um segundo cluster ECS e um serviço ECS no Fargate na região separada. Crie um snapshot da instância do RDS DB. Converta o snapshot em uma tabela global do Amazon DynamoDB. Crie uma função do AWS Lambda para atualizar o Route 53 e rotear o tráfego para o segundo cluster ECS. Atualize a regra do EventBridge para adicionar um destino que invocará a função Lambda.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/41/)

407- Uma empresa possui contas na AWS em uma organização no AWS Organizations. A empresa deseja monitorar o uso do Amazon EC2 como uma métrica. A equipe de arquitetura da empresa precisa receber um alerta diário se o uso do EC2 for mais de 10% superior à média de uso do EC2 nos últimos 30 dias.\

Qual solução atenderá a esses requisitos?

A. Configure os Orçamentos da AWS na conta de gerenciamento da organização. Especifique um tipo de uso de horas de execução do EC2. Especifique um período diário. Defina o valor do orçamento como 10% a mais do que o uso médio relatado nos últimos 30 dias no AWS Cost Explorer. Configure um alerta para notificar a equipe de arquitetura se o limite de uso for atingido. **Mais votado**

B. Configure a Detecção de Anomalias de Custo da AWS na conta de gerenciamento da organização. Configure um tipo de monitor de Serviço da AWS. Aplique um filtro do Amazon EC2. Configure uma assinatura de alerta para notificar a equipe de arquitetura se o uso for 10% maior que a média dos últimos 30 dias.

C. Habilite o AWS Trusted Advisor na conta de gerenciamento da organização. Configure um alerta de otimização de custos para notificar a equipe de arquitetura se o uso do EC2 for 10% superior à média de uso relatada nos últimos 30 dias.

D. Configure o Amazon Detective na conta de gerenciamento da organização. Configure um alerta de anomalia de uso do EC2 para notificar a equipe de arquitetura caso o Detective identifique uma anomalia de uso superior a 10%.

408- Uma empresa de e-commerce está reformulando sua infraestrutura de TI e planeja usar os serviços da AWS. O CIO da empresa solicitou a um arquiteto de soluções que projetasse um aplicativo de processamento de pedidos simples, altamente disponível e fracamente acoplado. O aplicativo é responsável por receber e processar pedidos antes de armazená-los em uma tabela do Amazon DynamoDB. O aplicativo tem um padrão de tráfego esporádico e deve ser capaz de escalar durante campanhas de marketing para processar os pedidos com o mínimo de atrasos.\

Qual das seguintes opções é a abordagem MAIS confiável para atender aos requisitos?

A. Receba os pedidos em um banco de dados hospedado no Amazon EC2 e use instâncias do EC2 para processá-los.

B. Receba os pedidos em uma fila do Amazon SQS e invoque uma função do AWS Lambda para processá-los. **Mais votado**

C. Receba os pedidos usando o programa AWS Step Functions e inicie um contêiner do Amazon ECS para processá-los.

D. Receba os pedidos no Amazon Kinesis Data Streams e use instâncias do Amazon EC2 para processá-los.

409- Uma empresa está implantando funções do AWS Lambda que acessam um banco de dados Amazon RDS para PostgreSQL. A empresa precisa executar as funções do Lambda em um ambiente de controle de qualidade e em um ambiente de produção.\

A empresa não deve expor credenciais no código do aplicativo e deve rotacionar as senhas automaticamente.\

Qual solução atenderá a esses requisitos?

A. Armazene as credenciais do banco de dados para ambos os ambientes no AWS Systems Manager Parameter Store. Criptografe as credenciais usando uma chave do AWS Key Management Service (AWS KMS). No código do aplicativo das funções do Lambda, extraia as credenciais do parâmetro do Parameter Store usando o AWS SDK para Python (Boto3). Adicione uma função às funções do Lambda para fornecer acesso ao parâmetro do Parameter Store.

B. Armazene as credenciais do banco de dados para ambos os ambientes no AWS Secrets Manager com entradas de chave distintas para o ambiente de QA e o ambiente de produção. Ative a rotação. Forneça uma referência à chave do Secrets Manager como uma variável de ambiente para as funções do Lambda. **Mais votado**

C. Armazene as credenciais do banco de dados para ambos os ambientes no AWS Key Management Service (AWS KMS). Ative a rotação. Forneça uma referência às credenciais armazenadas no AWS KMS como uma variável de ambiente para as funções do Lambda.

D. Crie buckets S3 separados para o ambiente de QA e o ambiente de produção. Ative a criptografia do lado do servidor com chaves AWS KMS (SSE-KMS) para os buckets S3. Use um padrão de nomenclatura de objetos que permita que o código do aplicativo de cada função do Lambda extraia as credenciais corretas para o ambiente correspondente da função. Conceda à função de execução de cada função do Lambda acesso ao Amazon S3.

410- Uma empresa está usando a AWS Control Tower para gerenciar contas da AWS em uma organização no AWS Organizations. A empresa possui uma UO que contém contas. A empresa deve impedir que instâncias novas ou existentes do Amazon EC2 nas contas da UO obtenham um endereço IP público.\

Qual solução atenderá a esses requisitos?

A. Configure todas as instâncias em cada conta na UO para usar o AWS Systems Manager. Use um runbook do Systems Manager Automation para impedir que endereços IP públicos sejam anexados às instâncias.

B. Implemente o controle proativo da AWS Control Tower para verificar se as instâncias nas contas da UO têm um endereço IP público. Defina a propriedade AssociatePublicIpAddress como False. Anexe o controle proativo à UO.

C. Crie um SCP que impeça a inicialização de instâncias com endereço IP público. Além disso, configure o SCP para impedir a vinculação de um endereço IP público a instâncias existentes. Anexe o SCP à UO. **Mais votado**

D. Crie uma regra personalizada do AWS Config que detecte instâncias com endereço IP público. Configure uma ação de correção que use uma função do AWS Lambda para desvincular os endereços IP públicos das instâncias.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/41/)

411- Uma empresa está implantando uma aplicação web de terceiros na AWS. A aplicação está empacotada como uma imagem Docker. A empresa implantou a imagem Docker como um serviço AWS Fargate no Amazon Elastic Container Service (Amazon ECS). Um Application Load Balancer (ALB) direciona o tráfego para a aplicação.\

A empresa precisa conceder acesso à aplicação pela internet apenas a uma lista específica de usuários. A empresa não pode alterar a aplicação nem integrá-la a um provedor de identidade. Todos os usuários devem ser autenticados por meio de autenticação multifator (MFA).\

Qual solução atenderá a esses requisitos?

A. Crie um pool de usuários no Amazon Cognito. Configure o pool para o aplicativo. Preencha o pool com os usuários necessários. Configure o pool para exigir autenticação multifator (MF). Configure uma regra de listener no ALB para exigir autenticação por meio da interface de usuário hospedada do Amazon Cognito. **Mais votado**

B. Configure os usuários no AWS Identity and Access Management (IAM). Anexe uma política de recursos ao serviço Fargate para exigir que os usuários utilizem MFA. Configure uma regra de ouvinte no ALB para exigir autenticação por meio do IAM.

C. Configure os usuários no AWS Identity and Access Management (IAM). Habilite o AWS IAM Identity Center (AWS Single Sign-On). Configure a proteção de recursos para o ALB. Crie uma regra de proteção de recursos para exigir que os usuários utilizem o MFA.

D. Crie um pool de usuários no AWS Amplify. Configure o pool para o aplicativo. Preencha o pool com os usuários necessários. Configure o pool para exigir MFA. Configure uma regra de ouvinte no ALB para exigir autenticação por meio da interface de usuário hospedada do Amplify.

412- Um arquiteto de soluções está se preparando para implantar uma nova ferramenta de segurança em várias regiões da AWS não utilizadas anteriormente. O arquiteto de soluções implantará a ferramenta usando um conjunto de pilhas do AWS CloudFormation. O modelo do conjunto de pilhas contém uma função do IAM com um nome personalizado. Após a criação do conjunto de pilhas, nenhuma instância de pilha é criada com sucesso.\

O que o arquiteto de soluções deve fazer para implantar as pilhas com sucesso?

A. Habilite as novas Regiões em todas as contas relevantes. Especifique o recurso CAPABILITY_NAMED_IAM durante a criação do conjunto de pilhas. **Mais votado**

B. Use o console de Cotas de Serviço para solicitar um aumento de cota para o número de pilhas do CloudFormation em cada nova Região em todas as contas relevantes. Especifique o recurso CAPABILITY_IAM durante a criação do conjunto de pilhas.

C. Especifique o recurso CAPABILITY_NAMED_IAM e o modelo de permissões SELF_MANAGED durante a criação do conjunto de pilhas.

D. Especifique um ARN de função de administração e o recurso CAPABILITY_IAM durante a criação do conjunto de pilhas.

413- Uma empresa possui um aplicativo que utiliza um cluster de banco de dados PostgreSQL do Amazon Aurora para o banco de dados do aplicativo. O cluster de banco de dados contém uma pequena instância primária e três instâncias de réplica maiores. O aplicativo é executado em uma função do AWS Lambda. O aplicativo estabelece muitas conexões de curta duração com as instâncias de réplica do banco de dados para executar operações somente leitura.\

Durante períodos de alto tráfego, o aplicativo se torna instável e o banco de dados relata que muitas conexões estão sendo estabelecidas. A frequência dos períodos de alto tráfego é imprevisível.\

Qual solução aumentará a confiabilidade do aplicativo?

A. Use o Amazon RDS Proxy para criar um proxy para o cluster de banco de dados. Configure um endpoint somente leitura para o proxy. Atualize a função Lambda para se conectar ao endpoint do proxy. **Mais votado**

B. Aumente a configuração max_connections no grupo de parâmetros do cluster de banco de dados. Reinicialize todas as instâncias no cluster de banco de dados. Atualize a função Lambda para se conectar ao endpoint do cluster de banco de dados.

C. Configure o escalonamento de instâncias para que o cluster de banco de dados ocorra quando a métrica DatabaseConnections estiver próxima da configuração de máximo de conexões. Atualize a função Lambda para se conectar ao endpoint do leitor Aurora.

D. Use o Amazon RDS Proxy para criar um proxy para o cluster de banco de dados. Configure um endpoint somente leitura para a API de Dados do Aurora no proxy. Atualize a função Lambda para se conectar ao endpoint do proxy.

414- Uma empresa de varejo está instalando sensores de IoT em todas as suas lojas no mundo todo. Durante a fabricação de cada sensor, a autoridade certificadora (AC) privada da empresa emite um certificado X.509 que contém um número de série exclusivo. A empresa então implanta cada certificado em seu respectivo sensor.\

Um arquiteto de soluções precisa habilitar os sensores a enviar dados para a AWS após a instalação. Os sensores não devem ser capazes de enviar dados para a AWS até que sejam instalados.\

Qual solução atenderá a esses requisitos?

A. Crie uma função do AWS Lambda que possa validar o número de série. Crie um modelo de provisionamento do AWS IoT Core. Inclua o parâmetro SerialNumber na seção Parameters. Adicione a função do Lambda como um hook de pré-provisionamento. Durante a fabricação, chame a operação da API RegisterThing e especifique o modelo e os parâmetros.

B. Crie uma máquina de estados do AWS Step Functions que possa validar o número de série. Crie um modelo de provisionamento do AWS IoT Core. Inclua o parâmetro SerialNumber na seção Parameters. Especifique a máquina de estados do Step Functions para validar os parâmetros. Chame a operação da API StartThingRegistrationTask durante a instalação.

C. Crie uma função do AWS Lambda que possa validar o número de série. Crie um modelo de provisionamento do AWS IoT Core. Inclua o parâmetro SerialNumber na seção Parameters. Adicione a função do Lambda como um hook de pré-provisionamento. Registre a CA no AWS IoT Core, especifique o modelo de provisionamento e defina o parâmetro allow-auto-registration. **Mais votado**

D. Crie um modelo de provisionamento do AWS IoT Core. Inclua o parâmetro SerialNumber na seção Parâmetros. Inclua a validação de parâmetros no modelo. Provisione um certificado de reivindicação e uma chave privada para cada dispositivo que utiliza a CA. Conceda permissões de serviço do AWS IoT Core para atualizar o AWS IoT Things durante o provisionamento.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/42/)

415- Uma startup migrou recentemente um grande site de comércio eletrônico para a AWS. O site teve um aumento de 70% nas vendas. Engenheiros de software estão usando um repositório privado do GitHub para gerenciar o código. A equipe de DevOps está usando o Jenkins para compilações e testes unitários. Os engenheiros precisam receber notificações sobre compilações incorretas e evitar tempo de inatividade durante as implantações. Os engenheiros também precisam garantir que quaisquer alterações na produção sejam transparentes para os usuários e possam ser revertidas em caso de um problema grave.\

Os engenheiros de software decidiram usar o AWS CodePipeline para gerenciar seu processo de compilação e implantação.\

Qual solução atenderá a esses requisitos?

A. Use websockets do GitHub para acionar o pipeline do CodePipeline. Use o plugin Jenkins para AWS CodeBuild para realizar testes unitários. Envie alertas para um tópico do Amazon SNS sobre quaisquer builds ruins. Implante em uma configuração de implantação local e simultânea usando o AWS CodeDeploy.

B. Use webhooks do GitHub para acionar o pipeline do CodePipeline. Use o plugin Jenkins para AWS CodeBuild para realizar testes unitários. Envie alertas para um tópico do Amazon SNS sobre quaisquer builds ruins. Implante em uma implantação azul/verde usando o AWS CodeDeploy. **Mais votado**

C. Use websockets do GitHub para acionar o pipeline do CodePipeline. Use o AWS X-Ray para testes unitários e análise estática de código. Envie alertas para um tópico do Amazon SNS para qualquer build com problemas. Implante em uma implantação azul/verde usando o AWS CodeDeploy.

D. Use webhooks do GitHub para acionar o pipeline do CodePipeline. Use o AWS X-Ray para testes unitários e análise estática de código. Envie alertas para um tópico do Amazon SNS sobre qualquer build com problemas. Implante em uma configuração de implantação local e simultânea usando o AWS CodeDeploy.

416- Uma empresa de software como serviço (SaaS) desenvolveu um ambiente multilocatário. A empresa utiliza tabelas do Amazon DynamoDB compartilhadas pelos locatários para a camada de armazenamento. A empresa utiliza funções do AWS Lambda para os serviços de aplicação.\

A empresa deseja oferecer um modelo de assinatura em camadas baseado no consumo de recursos de cada locatário. Cada locatário é identificado por um ID de locatário exclusivo, enviado como parte de cada solicitação às funções do Lambda. A empresa criou um Relatório de Custo e Uso da AWS (AWS CUR) em uma conta da AWS. A empresa deseja alocar os custos do DynamoDB a cada locatário para corresponder ao consumo de recursos desse locatário.\

Qual solução fornecerá uma visão granular do custo do DynamoDB para cada locatário com o MENOR esforço operacional?

A. Associe uma nova tag chamada ID do locatário a cada tabela no DynamoDB. Ative a tag como uma tag de alocação de custos no console do AWS Billing and Cost Management. Implante um novo código de função do Lambda para registrar o ID do locatário no Amazon CloudWatch Logs. Use o AWS CUR para separar o custo de consumo do DynamoDB para cada ID do locatário.

B. Configure as funções do Lambda para registrar o ID do locatário e o número de RCUs e WCUs consumidas do DynamoDB para cada transação no Amazon CloudWatch Logs. Implante outra função do Lambda para calcular os custos do locatário usando as unidades de capacidade registradas e o custo total do DynamoDB da API do AWS Cost Explorer. Crie uma regra do Amazon EventBridge para invocar a função de cálculo do Lambda de acordo com uma programação. **Mais votado**

C. Crie uma nova chave de partição que associe itens do DynamoDB a locatários individuais. Implante uma função Lambda para preencher a nova coluna como parte de cada transação. Implante outra função Lambda para calcular os custos do locatário usando o Amazon Athena para calcular o número de itens do locatário do DynamoDB e o custo total do DynamoDB do AWS CUR. Crie uma regra do Amazon EventBridge para invocar a função Lambda de cálculo em uma programação.

D. Implante uma função Lambda para registrar o ID do locatário, o tamanho de cada resposta e a duração da chamada de transação como métricas personalizadas no Amazon CloudWatch Logs. Use o CloudWatch Logs Insights para consultar as métricas personalizadas de cada locatário. Use a Calculadora de Preços da AWS para obter os custos totais do DynamoDB e calcular os custos do locatário.

417- Uma empresa possui um aplicativo que armazena dados em um único bucket do Amazon S3. A empresa precisa manter todos os dados por 1 ano. A equipe de segurança da empresa está preocupada com a possibilidade de um invasor obter acesso à conta da AWS por meio do vazamento de credenciais de longo prazo.\

Qual solução garantirá a proteção de objetos existentes e futuros no bucket do S3?

A. Crie uma nova conta AWS acessível apenas à equipe de segurança por meio de uma função assumida. Crie um bucket S3 na nova conta. Habilite o Versionamento S3 e o Bloqueio de Objetos S3. Configure um período de retenção padrão de 1 ano. Configure a replicação do bucket S3 existente para o novo bucket S3. Crie uma tarefa de Replicação em Lote S3 para copiar todos os dados existentes. **Mais votado**

B. Use a regra gerenciada s3-bucket-versioning-enabled do AWS Config. Configure uma ação de correção automática que use uma função do AWS Lambda para habilitar o Versionamento do S3 e a Exclusão de MFA em recursos não compatíveis. Adicione uma regra de Ciclo de Vida do S3 para excluir objetos após 1 ano.

C. Negue explicitamente a criação de buckets para todos os usuários e funções, exceto para uma função de restrição de inicialização do AWS Service Catalog. Defina um produto do Service Catalog para a criação do bucket do S3 para forçar a ativação do Controle de Versão do S3 e da Exclusão de MFA. Autorize os usuários a iniciar o produto quando precisarem criar um bucket do S3.

D. Habilite o Amazon GuardDuty com o recurso de proteção S3 para a conta e a região da AWS. Adicione uma regra de ciclo de vida S3 para excluir objetos após 1 ano.

418- Uma empresa precisa aprimorar a segurança de seu aplicativo web na AWS. O aplicativo utiliza o Amazon CloudFront com duas origens personalizadas. A primeira origem personalizada encaminha solicitações para uma API HTTP do Amazon API Gateway. A segunda origem personalizada encaminha o tráfego para um Balanceador de Carga de Aplicativos (ALB). O aplicativo integra-se a um provedor de identidade (IdP) OpenID Connect (OIDC) para gerenciamento de usuários.\

Uma auditoria de segurança mostra que um autorizador JSON Web Token (JWT) fornece acesso à API. A auditoria de segurança também mostra que o ALB aceita solicitações de usuários não autenticados.\

Um arquiteto de soluções deve projetar uma solução para garantir que todos os serviços de back-end respondam apenas a usuários autenticados.\

Qual solução atenderá a esse requisito?

A. Configure o ALB para impor autenticação e autorização integrando-o ao IdP. Permita que apenas usuários autenticados acessem os serviços de backend. **Mais votado**

B. Modifique a configuração do CloudFront para usar URLs assinadas. Implemente uma política de assinatura permissiva que permita que qualquer solicitação acesse os serviços de back-end.

C. Crie uma ACL da Web do AWS WAF que filtre solicitações não autenticadas no nível do ALB. Permita que apenas tráfego autenticado chegue aos serviços de back-end.

D. Habilite o AWS CloudTrail para registrar todas as solicitações que chegam ao ALB. Crie uma função do AWS Lambda para analisar os logs e bloquear quaisquer solicitações provenientes de usuários não autenticados.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/42/)

419- Uma empresa cria uma landing zone na AWS Control Tower para gerenciar e governar um ambiente AWS com várias contas. A equipe de segurança da empresa implantará controles preventivos e controles de detecção para monitorar os serviços da AWS em todas as contas. A equipe de segurança precisa de uma visão centralizada do estado de segurança de todas as contas.\

Qual solução atenderá a esses requisitos?

A. Na conta de gerenciamento da AWS Control Tower, use o AWS CloudFormation StackSets para implantar um pacote de conformidade do AWS Config em todas as contas da organização.

B. Habilite o Amazon Detective para a organização no AWS Organizations. Designe uma conta da AWS como administradora delegada do Detective.

C. Na conta de gerenciamento da AWS Control Tower, implante um conjunto de pilhas do AWS CloudFormation que usa a opção de implantação automática para habilitar o Amazon Detective para a organização.

D. Habilite o AWS Security Hub para a organização no AWS Organizations. Designe uma conta da AWS como administradora delegada do Security Hub. **Ma**

420- Uma empresa que desenvolve eletrônicos de consumo com escritórios na Europa e na Ásia possui 60 TB de imagens de software armazenadas em suas instalações na Europa. A empresa deseja transferir as imagens para um bucket do Amazon S3 na região ap-northeast-1. Novas imagens de software são criadas diariamente e precisam ser criptografadas durante o transporte. A empresa precisa de uma solução que não exija desenvolvimento personalizado para transferir automaticamente todas as imagens de software existentes e novas para o Amazon S3.\

Qual é a próxima etapa do processo de transferência?

A. Implante um agente do AWS DataSync e configure uma tarefa para transferir as imagens para o bucket do S3. **Mais votado**

B. Configure o Amazon Kinesis Data Firehose para transferir as imagens usando o S3 Transfer Acceleration.

C. Use um dispositivo AWS Snowball para transferir as imagens com o bucket S3 como destino.

D. Transfira as imagens por meio de uma conexão VPN de site para site usando a API S3 com upload multiparte.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/42/)

421- Uma empresa possui uma aplicação web que utiliza o Amazon API Gateway, o AWS Lambda e o Amazon DynamoDB. Uma campanha de marketing recente aumentou a demanda. Um software de monitoramento relata que muitas solicitações têm tempos de resposta significativamente maiores do que antes da campanha de marketing.\

Um arquiteto de soluções habilitou o Amazon CloudWatch Logs para o API Gateway e observou que erros estão ocorrendo em 20% das solicitações. No CloudWatch, a métrica "Throttles" da função Lambda representa 1% das solicitações e a métrica "Errors" representa 10% das solicitações. Os logs da aplicação indicam que, quando ocorrem erros, há uma chamada para o DynamoDB.\

Que mudança o arquiteto de soluções deve fazer para melhorar os tempos de resposta atuais à medida que a aplicação web se torna mais popular?

A. Aumente o limite de simultaneidade da função Lambda.

B. Implemente o dimensionamento automático do DynamoDB na tabela. **Mais votado**

C. Aumente o limite de aceleração do API Gateway.

D. Recrie a tabela do DynamoDB com um índice primário melhor particionado.

422- Uma empresa possui um aplicativo com front-end web. O aplicativo é executado no data center local da empresa e requer acesso ao armazenamento de arquivos para dados críticos. O aplicativo é executado em três VMs Linux para redundância. A arquitetura inclui um balanceador de carga com roteamento baseado em solicitações HTTP.\

A empresa precisa migrar o aplicativo para a AWS o mais rápido possível. A arquitetura na AWS deve ser altamente disponível.\

Qual solução atenderá a esses requisitos com o MENOR número de alterações na arquitetura?

A. Migre a aplicação para contêineres do Amazon Elastic Container Service (Amazon ECS) que usam o tipo de inicialização Fargate em três Zonas de Disponibilidade. Use o Amazon S3 para fornecer armazenamento de arquivos para todos os três contêineres. Use um Balanceador de Carga de Rede para direcionar o tráfego para os contêineres.

B. Migre a aplicação para instâncias do Amazon EC2 em três Zonas de Disponibilidade. Use o Amazon Elastic File System (Amazon EFS) para armazenamento de arquivos. Monte o armazenamento de arquivos em todas as três instâncias do EC2. Use um Application Load Balancer para direcionar o tráfego para as instâncias do EC2. **Mais votado**

C. Migre a aplicação para contêineres do Amazon Elastic Kubernetes Service (Amazon EKS) que usam o tipo de inicialização Fargate em três Zonas de Disponibilidade. Use o Amazon FSx for Lustre para fornecer armazenamento de arquivos para todos os três contêineres. Use um Balanceador de Carga de Rede para direcionar o tráfego para os contêineres.

D. Migre a aplicação para instâncias do Amazon EC2 em três regiões da AWS. Use o Amazon Elastic Block Store (Amazon EBS) para armazenamento de arquivos. Habilite a Replicação Entre Regiões (CRR) para todas as três instâncias do EC2. Use um Balanceador de Carga de Aplicação para direcionar o tráfego para as instâncias do EC2.

423- Uma empresa está planejando migrar um data center local para a AWS. Atualmente, a empresa hospeda o data center em VMs VMware baseadas em Linux. Um arquiteto de soluções deve coletar informações sobre as dependências de rede entre as VMs. As informações devem estar na forma de um diagrama que detalha os endereços IP, nomes de host e informações de conexão de rede do host.\

Qual solução atenderá a esses requisitos?

A. Use o AWS Application Discovery Service. Selecione uma região da AWS do AWS Migration Hub. Instale o AWS Application Discovery Agent nos servidores locais para coleta de dados. Conceda permissões ao Application Discovery Service para usar os diagramas de rede do Migration Hub. **Mais votado**

B. Use o Coletor sem Agente do AWS Application Discovery Service para coleta de dados do servidor. Exporte os diagramas de rede do AWS Migration Hub no formato .png.

C. Instale o agente do AWS Application Migration Service nos servidores locais para coleta de dados. Use os dados do AWS Migration Hub no Workload Discovery na AWS para gerar diagramas de rede.

D. Instale o agente do AWS Application Migration Service nos servidores locais para coleta de dados. Exporte os dados do AWS Migration Hub em formato .csv para um painel do Amazon CloudWatch para gerar diagramas de rede.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/43/)

424- Uma empresa executa um aplicativo de software como serviço (SaaS) na AWS. O aplicativo consiste em funções do AWS Lambda e um banco de dados Multi-AZ do Amazon RDS para MySQL. Durante eventos de mercado, o aplicativo tem uma carga de trabalho muito maior do que o normal. Os usuários notam tempos de resposta lentos durante os períodos de pico devido ao grande número de conexões com o banco de dados. A empresa precisa melhorar o desempenho e a disponibilidade escaláveis do banco de dados.\

Qual solução atende a esses requisitos?

A. Crie uma ação de alarme do Amazon CloudWatch que acione uma função Lambda para adicionar uma réplica de leitura do Amazon RDS para MySQL quando a utilização de recursos atingir um limite.

B. Migre o banco de dados para o Amazon Aurora e adicione uma réplica de leitura. Adicione um pool de conexões de banco de dados fora da função do manipulador do Lambda.

C. Migre o banco de dados para o Amazon Aurora e adicione uma réplica de leitura. Use registros ponderados do Amazon Route 53.

D. Migre o banco de dados para o Amazon Aurora e adicione uma réplica do Aurora. Configure o Amazon RDS Proxy para gerenciar pools de conexões de banco de dados. **Mais votado**

425- Uma empresa está planejando migrar um aplicativo local para a Nuvem AWS. A empresa iniciará a migração movendo o armazenamento de dados subjacente do aplicativo para a AWS. Os dados do aplicativo são armazenados em um sistema de arquivos compartilhado localmente, e os servidores de aplicativos se conectam a esse sistema por meio do SMB.\

Um arquiteto de soluções deve implementar uma solução que use um bucket do Amazon S3 para armazenamento compartilhado. Até que o aplicativo seja totalmente migrado e o código seja reescrito para usar as APIs nativas do Amazon S3, o aplicativo deve continuar a ter acesso aos dados por meio do SMB. O arquiteto de soluções deve migrar os dados do aplicativo para a AWS em seu novo local, permitindo que o aplicativo local acesse os dados.\

Qual solução atenderá a esses requisitos?

A. Crie um novo sistema de arquivos do Amazon FSx para Windows File Server. Configure o AWS DataSync com um local para o compartilhamento de arquivos local e um local para o novo sistema de arquivos do Amazon FSx. Crie uma nova tarefa do DataSync para copiar os dados do local de compartilhamento de arquivos local para o sistema de arquivos do Amazon FSx.

B. Crie um bucket S3 para o aplicativo. Copie os dados do armazenamento local para o bucket S3.

C. Implante uma VM do AWS Server Migration Service (AWS SMS) no ambiente local. Use o AWS SMS para migrar o servidor de armazenamento de arquivos do local para uma instância do Amazon EC2.

D. Crie um bucket S3 para o aplicativo. Implante um novo gateway de arquivos do AWS Storage Gateway em uma VM local. Crie um novo compartilhamento de arquivos que armazene dados no bucket S3 e esteja associado ao gateway de arquivos. Copie os dados do armazenamento local para o novo endpoint do gateway de arquivos. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/43/)

426- Uma empresa global possui um aplicativo móvel que exibe códigos de barras de ingressos. Os clientes usam os ingressos no aplicativo móvel para participar de eventos ao vivo. Os scanners de eventos leem os códigos de barras dos ingressos e chamam uma API de back-end para validar os dados do código de barras em relação aos dados de um banco de dados. Após a leitura do código de barras, a lógica de back-end grava na tabela única do banco de dados para marcá-lo como usado.\

A empresa precisa implantar o aplicativo na AWS com o nome DNS api.example.com. A empresa hospedará o banco de dados em três regiões da AWS ao redor do mundo.\

Qual solução atenderá a esses requisitos com a MENOR latência?

A. Hospede o banco de dados em clusters globais de banco de dados do Amazon Aurora. Hospede o backend em três clusters do Amazon Elastic Container Service (Amazon ECS) que estejam nas mesmas regiões do banco de dados. Crie um acelerador no AWS Global Accelerator para rotear solicitações para o cluster ECS mais próximo. Crie um registro do Amazon Route 53 que mapeie api.example.com para o endpoint do acelerador.

B. Hospede o banco de dados em clusters globais do Amazon Aurora. Hospede o backend em três clusters do Amazon Elastic Kubernetes Service (Amazon EKS) que estejam nas mesmas regiões do banco de dados. Crie uma distribuição do Amazon CloudFront com os três clusters como origens. Roteie as solicitações para o cluster EKS mais próximo. Crie um registro do Amazon Route 53 que mapeie api.example.com para a distribuição do CloudFront.

C. Hospede o banco de dados nas tabelas globais do Amazon DynamoDB. Crie uma distribuição do Amazon CloudFront. Associe a distribuição do CloudFront a uma função do CloudFront que contenha a lógica de back-end para validar os códigos de barras. Crie um registro do Amazon Route 53 que mapeie api.example.com para a distribuição do CloudFront.

D. Hospede o banco de dados nas tabelas globais do Amazon DynamoDB. Crie uma distribuição do Amazon CloudFront. Associe a distribuição do CloudFront a uma função Lambda@Edge que contém a lógica de back-end para validar os códigos de barras. Crie um registro do Amazon Route 53 que mapeie api.example.com para a distribuição do CloudFront. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/43/)

427- Uma empresa médica está executando uma API REST em um conjunto de instâncias do Amazon EC2. As instâncias do EC2 são executadas em um grupo de Auto Scaling por trás de um Application Load Balancer (ALB). O ALB é executado em três sub-redes públicas e as instâncias do EC2 em três sub-redes privadas. A empresa implantou uma distribuição do Amazon CloudFront que tem o ALB como única origem.\

Qual solução um arquiteto de soluções deve recomendar para aprimorar a segurança da origem?

A. Armazene uma string aleatória no AWS Secrets Manager. Crie uma função do AWS Lambda para rotação automática de segredos. Configure o CloudFront para injetar a string aleatória como um cabeçalho HTTP personalizado para a solicitação de origem. Crie uma regra de ACL da Web do AWS WAF com uma regra de correspondência de string para o cabeçalho personalizado. Associe a ACL da Web ao ALB. **Mais votado**

B. Crie uma regra de ACL da Web do AWS WAF com uma condição de correspondência de IP dos intervalos de endereços IP do serviço CloudFront. Associe a ACL da Web ao ALB. Mova o ALB para as três sub-redes privadas.

C. Armazene uma string aleatória no AWS Systems Manager Parameter Store. Configure a rotação automática do Parameter Store para a string. Configure o CloudFront para injetar a string aleatória como um cabeçalho HTTP personalizado para a solicitação de origem. Inspecione o valor do cabeçalho HTTP personalizado e bloqueie o acesso no ALB.

D. Configurar o AWS Shield Advanced. Crie uma política de grupo de segurança para permitir conexões de intervalos de endereços IP do serviço CloudFront. Adicione a política ao AWS Shield Advanced e anexe-a ao ALB.

428- Para cumprir as regulamentações do setor, um arquiteto de soluções deve projetar uma solução que armazene os dados críticos de uma empresa em diversas regiões públicas da AWS, incluindo os Estados Unidos, onde fica a sede da empresa. O arquiteto de soluções deve fornecer acesso aos dados armazenados na AWS para a rede WAN global da empresa. A equipe de segurança exige que nenhum tráfego que acesse esses dados passe pela internet pública.\

Como o arquiteto de soluções deve projetar uma solução de alta disponibilidade que atenda aos requisitos e seja econômica?

A. Estabeleça conexões do AWS Direct Connect da sede da empresa para todas as regiões da AWS em uso. Use a WAN da empresa para enviar tráfego para a sede e, em seguida, para a respectiva conexão DX para acessar os dados.

B. Estabeleça duas conexões AWS Direct Connect da sede da empresa para uma região da AWS. Use a WAN da empresa para enviar tráfego por uma conexão DX. Use o peering de VPC entre regiões para acessar os dados em outras regiões da AWS.

C. Estabeleça duas conexões AWS Direct Connect da sede da empresa para uma região da AWS. Use a WAN da empresa para enviar tráfego por uma conexão DX. Use uma solução de VPC de trânsito da AWS para acessar dados em outras regiões da AWS.

D. Estabeleça duas conexões AWS Direct Connect da sede da empresa para uma região da AWS. Use a WAN da empresa para enviar tráfego por uma conexão DX. Use o Direct Connect Gateway para acessar dados em outras regiões da AWS. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/43/)

429- Uma empresa desenvolveu um aplicativo que executa o Windows Server em VMs VMware vSphere hospedadas localmente. Os dados do aplicativo são armazenados em um formato proprietário que deve ser lido pelo aplicativo. A empresa provisionou manualmente os servidores e o aplicativo.\

Como parte de seu plano de recuperação de desastres, a empresa deseja hospedar seu aplicativo na AWS temporariamente caso o ambiente local da empresa fique indisponível. A empresa deseja que o aplicativo retorne à hospedagem local após a conclusão de um evento de recuperação de desastres. O RPO é de 5 minutos.\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Configure o AWS DataSync. Replique os dados para volumes do Amazon Elastic Block Store (Amazon EBS). Quando o ambiente local não estiver disponível, use os modelos do AWS CloudFormation para provisionar instâncias do Amazon EC2 e anexar os volumes do EBS.

B. Configurar o AWS Elastic Disaster Recovery. Replique os dados para instâncias de replicação do Amazon EC2 anexadas aos volumes do Amazon Elastic Block Store (Amazon EBS). Quando o ambiente local estiver indisponível, use o Elastic Disaster Recovery para iniciar instâncias do EC2 que utilizam os volumes replicados. **Mais votado**

C. Provisione um gateway de arquivos do AWS Storage Gateway. Replique os dados para um bucket do Amazon S3. Quando o ambiente local estiver indisponível, use o AWS Backup para restaurar os dados para volumes do Amazon Elastic Block Store (Amazon EBS) e iniciar instâncias do Amazon EC2 a partir desses volumes do EBS.

D. Provisione um sistema de arquivos do Amazon FSx para Windows File Server na AWS. Replique os dados para o sistema de arquivos. Quando o ambiente local não estiver disponível, use os modelos do AWS CloudFormation para provisionar instâncias do Amazon EC2 e use os comandos AWS::CloudFormation::Init para montar os compartilhamentos de arquivos do Amazon FSx.

430- Uma empresa executa um aplicativo de coleta de dados de alta disponibilidade no Amazon EC2 na região eu-north-1. O aplicativo coleta dados de dispositivos de usuários finais e grava registros em um fluxo de dados do Amazon Kinesis e em um conjunto de funções do AWS Lambda que processam os registros. A empresa persiste a saída do processamento de registros em um bucket do Amazon S3 na região eu-north-1. A empresa usa os dados do bucket do S3 como fonte de dados para o Amazon Athena.\

A empresa deseja aumentar sua presença global. Um arquiteto de soluções deve iniciar os recursos de coleta de dados nas regiões sa-east-1 e ap-northeast-1. O arquiteto de soluções implanta o aplicativo, o fluxo de dados do Kinesis e as funções do Lambda nas duas novas regiões. O arquiteto de soluções mantém o bucket do S3 na região eu-north-1 para atender a um requisito de centralização da análise de dados.\

Durante os testes da nova configuração, o arquiteto de soluções percebe um atraso significativo na chegada de dados das novas regiões ao bucket do S3.\

Qual solução melhorará MAIS esse tempo de atraso?

A. Em cada uma das duas novas regiões, configure as funções do Lambda para execução em uma VPC. Configure um endpoint de gateway S3 nessa VPC.

B. Ative a Aceleração de Transferência S3 no bucket S3 em eu-north-1. Altere o aplicativo para usar o novo endpoint acelerado S3 quando o aplicativo carregar dados para o bucket S3.

C. Crie um bucket S3 em cada uma das duas novas regiões. Configure o aplicativo em cada nova região para fazer upload para o respectivo bucket S3. Configure a Replicação entre Regiões do S3 para replicar dados para o bucket S3 em eu-north-1. **Mais votado**

D. Aumente os requisitos de memória das funções do Lambda para garantir que elas tenham múltiplos núcleos disponíveis. Use o recurso de upload multipartes quando o aplicativo fizer upload de dados do Lambda para o Amazon S3.

431- Uma empresa fornece um aplicativo Amazon EC2 centralizado hospedado em uma única VPC compartilhada. O aplicativo centralizado deve ser acessível a partir de aplicativos cliente em execução nas VPCs de outras unidades de negócios. O front-end do aplicativo centralizado é configurado com um Balanceador de Carga de Rede (NLB) para escalabilidade.\

Até 10 VPCs de unidade de negócios precisarão ser conectadas à VPC compartilhada. Alguns dos blocos CIDR da VPC da unidade de negócios se sobrepõem à VPC compartilhada e alguns se sobrepõem entre si. A conectividade de rede com o aplicativo centralizado na VPC compartilhada deve ser permitida apenas a partir de VPCs de unidade de negócios autorizadas.\

Qual configuração de rede um arquiteto de soluções deve usar para fornecer conectividade dos aplicativos cliente nas VPCs da unidade de negócios para o aplicativo centralizado na VPC compartilhada?

A. Crie um AWS Transit Gateway. Anexe a VPC compartilhada e as VPCs da unidade de negócios autorizada ao gateway de trânsito. Crie uma única tabela de rotas do gateway de trânsito e associe-a a todas as VPCs anexadas. Permita a propagação automática de rotas dos anexos para a tabela de rotas. Configure as tabelas de roteamento da VPC para enviar tráfego ao gateway de trânsito.

B. Crie um serviço de endpoint de VPC usando o NLB do aplicativo centralizado e ative a opção para exigir a aceitação do endpoint. Crie um endpoint de VPC em cada uma das VPCs da unidade de negócios usando o nome do serviço de endpoint. Aceite solicitações de endpoint autorizadas no console do serviço de endpoint. **Mais votado**

C. Crie uma conexão de peering de VPC de cada VPC da unidade de negócios para a VPC compartilhada. Aceite as conexões de peering de VPC do console da VPC compartilhada. Configure as tabelas de roteamento de VPC para enviar tráfego para a conexão de peering de VPC.

D. Configure um gateway privado virtual para a VPC compartilhada e crie gateways de cliente para cada uma das VPCs de unidades de negócios autorizadas. Estabeleça uma conexão VPN Site-to-Site das VPCs de unidades de negócios para a VPC compartilhada. Configure as tabelas de roteamento da VPC para enviar tráfego para a conexão VPN.

432- Uma empresa deseja migrar seu website para a AWS. O website utiliza microsserviços e é executado em contêineres implantados em um cluster Kubernetes local e autogerenciado. Todos os manifestos que definem as implantações dos contêineres na implantação do Kubernetes estão sob controle de origem.\

Todos os dados do website são armazenados em um banco de dados PostgreSQL. Um repositório de imagens de contêiner de código aberto é executado paralelamente ao ambiente local.\

Um arquiteto de soluções precisa determinar a arquitetura que a empresa usará para o website na AWS.\

Qual solução atenderá a esses requisitos com o MENOR esforço de migração?

A. Crie um serviço AWS App Runner. Conecte o serviço App Runner ao repositório de imagens de contêiner de código aberto. Implante os manifestos locais no serviço App Runner. Crie um banco de dados Amazon RDS para PostgreSQL.

B. Crie um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) com grupos de nós gerenciados. Copie os contêineres de aplicação para um novo repositório do Amazon Elastic Container Registry (Amazon ECR). Implante os manifestos locais no cluster EKS. Crie um cluster de banco de dados PostgreSQL do Amazon Aurora. **Mais votado**

C. Crie um cluster do Amazon Elastic Container Service (Amazon ECS) com um pool de capacidade do Amazon EC2. Copie os contêineres de aplicação para um novo repositório do Amazon Elastic Container Registry (Amazon ECR). Registre cada imagem de contêiner como uma nova definição de tarefa. Configure os serviços do ECS para cada definição de tarefa de forma que correspondam às implantações originais do Kubernetes. Crie um cluster de banco de dados PostgreSQL do Amazon Aurora.

D. Reconstrua o cluster Kubernetes local hospedando-o em instâncias do Amazon EC2. Migre o repositório de imagens de contêiner de código aberto para as instâncias do EC2. Implante os manifestos locais no novo cluster na AWS. Implante um banco de dados PostgreSQL de código aberto no novo cluster.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/44/)

433- Uma empresa utiliza um aplicativo móvel na AWS para realizar concursos online. A empresa seleciona um vencedor aleatoriamente ao final de cada concurso. Os concursos têm duração variável. A empresa não precisa reter dados de um concurso após seu término.\

A empresa utiliza código personalizado hospedado em instâncias do Amazon EC2 para processar os dados do concurso e selecionar um vencedor. As instâncias do EC2 são executadas por trás de um Application Load Balancer e armazenam as inscrições do concurso em instâncias de banco de dados do Amazon RDS. A empresa deve projetar uma nova arquitetura para reduzir o custo de execução dos concursos.\

Qual solução atenderá a esses requisitos com a MAIOR relação custo-benefício?

A. Migre o armazenamento das inscrições do concurso para o Amazon DynamoDB. Crie um cluster do DynamoDB Accelerator (DAX). Reescreva o código para ser executado como contêineres do Amazon Elastic Container Service (Amazon ECS) que usam o tipo de inicialização Fargate. Ao final do concurso, exclua a tabela do DynamoDB.

B. Migre o armazenamento das inscrições do concurso para o Amazon Redshift. Reescreva o código como funções do AWS Lambda. Ao final do concurso, exclua o cluster do Redshift.

C. Adicione um cluster do Amazon ElastiCache para Redis na frente das instâncias do RDS DB para armazenar em cache as inscrições do concurso. Reescreva o código para ser executado como contêineres do Amazon Elastic Container Service (Amazon ECS) que usam o tipo de inicialização Fargate. Defina o atributo TTL do ElastiCache em cada inscrição para expirar cada inscrição ao final do concurso.

D. Migre o armazenamento das inscrições do concurso para o Amazon DynamoDB. Reescreva o código como funções do AWS Lambda. Defina o atributo TTL do DynamoDB em cada inscrição para expirar cada inscrição ao final do concurso. **M**

434- Uma empresa implementou um novo requisito de segurança. De acordo com o novo requisito, a empresa deve verificar todo o tráfego de instâncias corporativas da AWS na VPC da empresa em busca de violações das políticas de segurança da empresa. Como resultado dessas verificações, a empresa pode bloquear o acesso de e para endereços IP específicos.\

Para atender ao novo requisito, a empresa implanta um conjunto de instâncias do Amazon EC2 em sub-redes privadas para servir como proxies transparentes. A empresa instala um software de servidor proxy aprovado nessas instâncias do EC2. A empresa modifica as tabelas de rotas em todas as sub-redes para usar as instâncias do EC2 correspondentes com software proxy como a rota padrão. A empresa também cria grupos de segurança em conformidade com as políticas de segurança e atribui esses grupos de segurança às instâncias do EC2.\

Apesar dessas configurações, o tráfego das instâncias do EC2 em suas sub-redes privadas não está sendo encaminhado corretamente para a internet.\

O que um arquiteto de soluções deve fazer para resolver esse problema?

A. Desabilite as verificações de origem/destino nas instâncias do EC2 que executam o software proxy. **Mais votado**

B. Adicione uma regra ao grupo de segurança atribuído às instâncias EC2 do proxy para permitir todo o tráfego entre instâncias que possuem esse grupo de segurança. Atribua esse grupo de segurança a todas as instâncias EC2 na VPC.

C. Altere as opções de DHCP definidas nas VPCs. Defina as opções do servidor DNS para apontar para os endereços das instâncias EC2 do proxy.

D. Atribua uma interface de rede elástica adicional a cada instância EC2 proxy. Certifique-se de que uma dessas interfaces de rede tenha uma rota para as sub-redes privadas. Certifique-se de que a outra interface de rede tenha uma rota para a internet.

435- Uma empresa está executando sua solução na AWS em uma VPC criada manualmente. A empresa está usando o AWS CloudFormation para provisionar outras partes da infraestrutura. De acordo com um novo requisito, a empresa deve gerenciar toda a infraestrutura de forma automática.\

O que a empresa deve fazer para atender a esse novo requisito com o MENOR esforço?

A. Crie uma nova pilha do AWS Cloud Development Kit (AWS CDK) que provisione rigorosamente os recursos e a configuração da VPC existente. Use o AWS CDK para importar a VPC para a pilha e gerenciá-la.

B. Crie um conjunto de pilhas do CloudFormation que crie a VPC. Use o conjunto de pilhas para importar a VPC para a pilha.

C. Crie um novo modelo do CloudFormation que provisione rigorosamente os recursos e a configuração da VPC existentes. No console do CloudFormation, crie uma nova pilha importando os recursos existentes. **Mais votado**

D. Crie um novo modelo do CloudFormation que crie a VPC. Use a CLI do AWS Serverless Application Model (AWS SAM) para importar a VPC.

436- Uma empresa desenvolveu uma nova versão de um videogame popular e deseja disponibilizá-la para download público. O pacote da nova versão tem aproximadamente 5 GB. A empresa fornece downloads para versões existentes a partir de um site FTP público baseado em Linux, hospedado em um data center local. A empresa espera que a nova versão seja baixada por usuários em todo o mundo. A empresa deseja uma solução que ofereça melhor desempenho de download e baixos custos de transferência, independentemente da localização do usuário.

A. Armazene os arquivos do jogo em volumes do Amazon EBS montados em instâncias do Amazon EC2 dentro de um grupo de Auto Scaling. Configure um serviço FTP nas instâncias do EC2. Use um Application Load Balancer na frente do grupo de Auto Scaling. Publique a URL de download do jogo para que os usuários baixem o pacote.

B. Armazene os arquivos do jogo em volumes do Amazon EFS anexados a instâncias do Amazon EC2 dentro de um grupo de Auto Scaling. Configure um serviço FTP em cada uma das instâncias do EC2. Use um Application Load Balancer na frente do grupo de Auto Scaling. Publique a URL de download do jogo para que os usuários baixem o pacote.

C. Configure o Amazon Route 53 e um bucket do Amazon S3 para hospedagem do site. Carregue os arquivos do jogo para o bucket do S3. Use o Amazon CloudFront para o site. Publique a URL de download do jogo para que os usuários baixem o pacote. **Mais votado**

D. Configurar o Amazon Route 53 e um bucket do Amazon S3 para hospedagem de sites. Carregar os arquivos do jogo para o bucket do S3. Definir o pagamento pelo solicitante para o bucket do S3. Publicar a URL de download do jogo para que os usuários baixem o pacote.

437- Uma empresa executa um aplicativo na nuvem que consiste em um banco de dados e um site. Os usuários podem publicar dados no site, processá-los e enviá-los de volta por e-mail. Os dados são armazenados em um banco de dados MySQL em execução em uma instância do Amazon EC2. O banco de dados está em execução em uma VPC com duas sub-redes privadas. O site está em execução no Apache Tomcat em uma única instância do EC2 em uma VPC diferente com uma sub-rede pública. Há uma única conexão de peering de VPC entre o banco de dados e a VPC do site.\

O site sofreu várias interrupções no último mês devido ao alto tráfego.\

Quais ações um arquiteto de soluções deve tomar para aumentar a confiabilidade do aplicativo? (Escolha três.)

A. Coloque o servidor Tomcat em um grupo de dimensionamento automático com várias instâncias do EC2 atrás de um balanceador de carga de aplicativo. **Mais votado**

B. Provisione uma conexão de peering de VPC adicional.

C. Migre o banco de dados MySQL para o Amazon Aurora com uma réplica do Aurora. **Mais votado**

D. Provisione dois gateways NAT na VPC do banco de dados.

E. Mova o servidor Tomcat para a VPC do banco de dados.

F. Crie uma sub-rede pública adicional em uma Zona de Disponibilidade diferente na VPC do site. **Mais votado**

438- Uma empresa de varejo opera seu aplicativo de comércio eletrônico na AWS. O aplicativo é executado em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). A empresa usa uma instância de banco de dados do Amazon RDS como backend do banco de dados. O Amazon CloudFront está configurado com uma origem que aponta para o ALB. O conteúdo estático é armazenado em cache. O Amazon Route 53 é usado para hospedar todas as zonas públicas.\

Após uma atualização do aplicativo, o ALB ocasionalmente retorna um erro de código de status 502 (Bad Gateway). A causa raiz são cabeçalhos HTTP malformados que são retornados ao ALB. A página da web retorna com sucesso quando um arquiteto de soluções a recarrega imediatamente após a ocorrência do erro.\

Enquanto a empresa trabalha no problema, o arquiteto de soluções precisa fornecer aos visitantes uma página de erro personalizada em vez da página de erro padrão do ALB.\

Qual combinação de etapas atenderá a esse requisito com a MENOR sobrecarga operacional? (Escolha duas.)

A. Crie um bucket do Amazon S3. Configure o bucket do S3 para hospedar uma página da web estática. Carregue as páginas de erro personalizadas para o Amazon S3. **Mais votado**

B. Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda se a resposta de verificação de integridade do ALB Target.FailedHealthChecks for maior que 0. Configure a função do Lambda para modificar a regra de encaminhamento no ALB para apontar para um servidor web acessível publicamente.

C. Modifique os registros existentes do Amazon Route 53 adicionando verificações de integridade. Configure um destino de fallback caso a verificação de integridade falhe. Modifique os registros DNS para que apontem para uma página da web de acesso público.

D. Crie um alarme do Amazon CloudWatch para invocar uma função do AWS Lambda se a resposta de verificação de integridade do ALB Elb.InternalError for maior que 0. Configure a função do Lambda para modificar a regra de encaminhamento no ALB para apontar para um servidor web acessível ao público.

E. Adicione uma resposta de erro personalizada configurando uma página de erro personalizada do CloudFront. Modifique os registros DNS para apontar para uma página da web acessível publicamente. **Mais votado**

439- Uma empresa deseja migrar um cluster de banco de dados MySQL do Amazon Aurora de uma conta AWS existente para uma nova conta AWS na mesma região da AWS. Ambas as contas são membros da mesma organização no AWS Organizations.\

A empresa deve minimizar a interrupção do serviço de banco de dados antes de realizar a transição de DNS para o novo banco de dados.\

Qual estratégia de migração atenderá a esse requisito? (Escolha duas.)

A. Faça um snapshot do banco de dados Aurora existente. Compartilhe o snapshot com a nova conta da AWS. Crie um cluster de banco de dados Aurora na nova conta a partir do snapshot. **Mais votado**

B. Crie um cluster de banco de dados Aurora na nova conta da AWS. Use o AWS Database Migration Service (AWS DMS) para migrar dados entre os dois clusters de banco de dados Aurora. **Mais votado**

C. Use o AWS Backup para compartilhar um backup do banco de dados Aurora da conta AWS existente para a nova conta AWS. Crie um cluster de banco de dados Aurora na nova conta AWS a partir do snapshot.

D. Crie um cluster de banco de dados Aurora na nova conta da AWS. Use o AWS Application Migration Service para migrar dados entre os dois clusters de banco de dados Aurora.

440- Uma empresa de software como serviço (SaaS) fornece uma solução de software de mídia aos clientes. A solução é hospedada em 50 VPCs em várias regiões e contas da AWS. Uma das VPCs é designada como VPC de gerenciamento. Os recursos de computação nas VPCs funcionam de forma independente.\

A empresa desenvolveu um novo recurso que exige que todas as 50 VPCs possam se comunicar entre si. O novo recurso também exige acesso unidirecional da VPC de cada cliente à VPC de gerenciamento da empresa. A VPC de gerenciamento hospeda um recurso de computação que valida licenças para a solução de software de mídia.\

O número de VPCs que a empresa usará para hospedar a solução continuará a aumentar à medida que a solução cresce.\

Qual combinação de etapas fornecerá a conectividade de VPC necessária com a MENOR sobrecarga operacional? (Escolha duas.)

A. Crie um gateway de trânsito. Anexe todas as VPCs e sub-redes relevantes da empresa ao gateway de trânsito. **Mais votado**

B. Crie conexões de peering de VPC entre todas as VPCs da empresa.

C. Crie um Balanceador de Carga de Rede (NLB) que aponte para o recurso computacional para validação da licença. Crie um serviço de endpoint do AWS PrivateLink disponível para o VP de cada cliente. Associe o serviço de endpoint ao NLB. **Mais votado**

D. Crie um dispositivo VPN na VPC de cada cliente. Conecte a VPC de gerenciamento da empresa à VPC de cada cliente usando a VPN Site-to-Site da AWS.

E. Crie uma conexão de peering de VPC entre o VPC de gerenciamento da empresa e o VPC de cada cliente.

441- Uma empresa possui várias linhas de negócios (LOBs) que se acumulam na empresa controladora. A empresa solicitou ao seu arquiteto de soluções que desenvolvesse uma solução com os seguintes requisitos:\
• Produzir uma única fatura da AWS para todas as contas da AWS utilizadas por suas LOBs.\
• Os custos de cada conta LOB devem ser discriminados na fatura.\
• Oferecer a capacidade de restringir serviços e recursos nas contas LOB, conforme definido pela política de governança da empresa.\
• Cada conta LOB deve receber permissões totais de administrador, independentemente da política de governança.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha duas.)

A. Use o AWS Organizations para criar uma organização na conta-mãe para cada LOB. Em seguida, convide cada conta LOB para a organização apropriada.

B. Use o AWS Organizations para criar uma única organização na conta pai. Em seguida, convide a conta AWS de cada LOB para ingressar na organização. **Mais votado**

C. Implemente cotas de serviço para definir os serviços e recursos permitidos e aplique as cotas a cada LOB, conforme apropriado.

D. Crie um SCP que permita apenas serviços e recursos aprovados e, em seguida, aplique a política às contas LOB. **Mais votado**

E. Habilite o faturamento consolidado no console de faturamento da conta pai e vincule as contas LOB.

442- Um arquiteto de soluções implantou uma aplicação web que atende usuários em duas regiões da AWS sob um domínio personalizado. A aplicação utiliza o roteamento baseado em latência do Amazon Route 53. O arquiteto de soluções associou conjuntos de registros ponderados a um par de servidores web em Zonas de Disponibilidade separadas para cada região.\

O arquiteto de soluções executa um cenário de recuperação de desastres. Quando todos os servidores web em uma região são interrompidos, o Route 53 não redireciona automaticamente os usuários para a outra região.\

Quais das seguintes opções são possíveis causas raiz desse problema? (Escolha duas.)

A. O peso da Região onde os servidores web foram parados é maior que o peso da outra Região.

B. Um dos servidores web na região secundária não passou na verificação de integridade HTTP.

C. Conjuntos de registros de recursos de latência não podem ser usados em combinação com conjuntos de registros de recursos ponderados.

D. A configuração para avaliar a integridade do destino não está ativada para o conjunto de registros de recursos de alias de latência associado ao domínio na região onde os servidores web foram interrompidos. **Mais votado**

E. Uma verificação de integridade HTTP não foi configurada para um ou mais conjuntos de registros de recursos ponderados associados aos servidores web parados. **Mais votado**

443- Uma agência de monitoramento de inundações implantou mais de 10.000 sensores de monitoramento do nível de água. Os sensores enviam atualizações contínuas de dados, e cada atualização tem menos de 1 MB. A agência possui uma frota de servidores de aplicativos locais. Esses servidores recebem atualizações dos sensores, convertem os dados brutos em um formato legível por humanos e gravam os resultados em um servidor de banco de dados relacional local. Analistas de dados então usam consultas SQL simples para monitorar os dados.\

A agência deseja aumentar a disponibilidade geral dos aplicativos e reduzir o esforço necessário para executar tarefas de manutenção. Essas tarefas de manutenção, que incluem atualizações e patches nos servidores de aplicativos, causam tempo de inatividade. Enquanto um servidor de aplicativos está inativo, os dados dos sensores são perdidos porque os servidores restantes não conseguem lidar com toda a carga de trabalho.\

A agência deseja uma solução que otimize a sobrecarga operacional e os custos. Um arquiteto de soluções recomenda o uso do AWS IoT Core para coletar os dados dos sensores.\

O que mais o arquiteto de soluções deve recomendar para atender a esses requisitos?

A. Envie os dados do sensor para o Amazon Kinesis Data Firehose. Use uma função do AWS Lambda para ler os dados do Kinesis Data Firehose, convertê-los para o formato .csv e inseri-los em uma instância de banco de dados MySQL do Amazon Aurora. Instrua os analistas de dados a consultar os dados diretamente da instância de banco de dados.

B. Envie os dados do sensor para o Amazon Kinesis Data Firehose. Use uma função do AWS Lambda para ler os dados do Kinesis Data Firehose, convertê-los para o formato Apache Parquet e salvá-los em um bucket do Amazon S3. Instrua os analistas de dados a consultar os dados usando o Amazon Athena. **Mais votado**

C. Envie os dados do sensor para um aplicativo do Amazon Managed Service para Apache Flink (anteriormente conhecido como Amazon Kinesis Data Analytics) para converter os dados para o formato .csv e armazená-los em um bucket do Amazon S3. Importe os dados para uma instância de banco de dados MySQL do Amazon Aurora. Instrua os analistas de dados a consultar os dados diretamente da instância de banco de dados.

D. Envie os dados do sensor para um aplicativo do Amazon Managed Service para Apache Flink (anteriormente conhecido como Amazon Kinesis Data Analytics) para converter os dados para o formato Apache Parquet e armazená-los em um bucket do Amazon S3. Instrua os analistas de dados a consultar os dados usando o Amazon Athena.

444- Uma aplicação web pública de varejo utiliza um Application Load Balancer (ALB) na frente de instâncias do Amazon EC2 executadas em várias Zonas de Disponibilidade (AZs) em uma região apoiada por uma implantação MySQL Multi-AZ do Amazon RDS. As verificações de integridade do grupo-alvo são configuradas para usar HTTP e direcionadas à página do catálogo de produtos. O Auto Scaling é configurado para manter o tamanho da frota web com base na verificação de integridade do ALB.\

Recentemente, a aplicação sofreu uma interrupção. O Auto Scaling substituiu continuamente as instâncias durante a interrupção. Uma investigação subsequente determinou que as métricas do servidor web estavam dentro da faixa normal, mas a camada do banco de dados estava com alta carga, resultando em tempos de resposta de consulta severamente elevados.\

Qual das seguintes alterações, em conjunto, remediaria esses problemas e, ao mesmo tempo, melhoraria os recursos de monitoramento da disponibilidade e da funcionalidade de toda a pilha de aplicativos para crescimento futuro? (Escolha duas.)

A. Configure réplicas de leitura para o Amazon RDS MySQL e use o ponto de extremidade do leitor único no aplicativo Web para reduzir a carga na camada de banco de dados de back-end.

B. Configure a verificação de integridade do grupo-alvo para apontar para uma página HTML simples em vez de uma página de catálogo de produtos, e a verificação de integridade do Amazon Route 53 para a página do produto para avaliar a funcionalidade completa do aplicativo. Configure alarmes do Amazon CloudWatch para notificar os administradores quando o site falhar. **Mais votado**

C. Configure a verificação de integridade do grupo-alvo para usar uma verificação TCP do servidor web Amazon EC2 e a verificação de integridade do Amazon Route 53 na página do produto para avaliar a funcionalidade completa do aplicativo. Configure alarmes do Amazon CloudWatch para notificar os administradores quando o site falhar.

D. Configure um alarme do Amazon CloudWatch para o Amazon RDS com uma ação para recuperar uma instância do RDS danificada e de alta carga na camada do banco de dados.

E. Configure um cluster do Amazon ElastiCache e coloque-o entre o aplicativo Web e as instâncias do RDS MySQL para reduzir a carga na camada do banco de dados de back-end. **Mais votado**

445- Uma empresa possui um data center local e está usando o Kubernetes para desenvolver uma nova solução na AWS. A empresa utiliza clusters do Amazon Elastic Kubernetes Service (Amazon EKS) para seus ambientes de desenvolvimento e teste.\

O plano de controle e o plano de dados do EKS para cargas de trabalho de produção devem residir no local. A empresa precisa de uma solução gerenciada pela AWS para o gerenciamento do Kubernetes.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Instale um servidor AWS Outposts no data center local. Implante o Amazon EKS usando uma configuração de cluster local no servidor Outposts para as cargas de trabalho de produção. **Mais votado**

B. Instalar o Amazon EKS Anywhere no hardware da empresa no data center local. Implantar as cargas de trabalho de produção em um cluster do EKS Anywhere.

C. Instale um servidor AWS Outposts no data center local. Implante o Amazon EKS usando uma configuração de cluster estendida no servidor Outposts para as cargas de trabalho de produção.

D. Instale um servidor AWS Outposts no data center local. Instale o Amazon EKS Anywhere no servidor Outposts. Implante as cargas de trabalho de produção em um cluster EKS Anywhere.

446- Uma empresa utiliza o AWS Organizations para gerenciar seu ambiente de desenvolvimento. Cada equipe de desenvolvimento da empresa possui sua própria conta na AWS. Cada conta possui uma única VPC e blocos CIDR que não se sobrepõem.\

A empresa possui um cluster de banco de dados Amazon Aurora em uma conta de serviços compartilhados. Todas as equipes de desenvolvimento precisam trabalhar com dados ativos do cluster de banco de dados.\

Qual solução fornecerá a conectividade necessária ao cluster de banco de dados com a MENOR sobrecarga operacional?

A. Crie um compartilhamento de recursos do AWS Resource Access Manager (AWS RAM) para o cluster de banco de dados. Compartilhe o cluster de banco de dados com todas as contas de desenvolvimento.

B. Crie um gateway de trânsito na conta de serviços compartilhados. Crie um compartilhamento de recursos do AWS Resource Access Manager (AWS RAM) para o gateway de trânsito. Compartilhe o gateway de trânsito com todas as contas de desenvolvimento. Instrua os desenvolvedores a aceitar o compartilhamento de recursos. Configure a rede. **Mais votado**

C. Crie um Application Load Balancer (ALB) que aponte para o endereço IP do cluster de banco de dados. Crie um serviço de endpoint do AWS PrivateLink que utilize o ALB. Adicione permissões para que cada conta de desenvolvimento se conecte ao serviço de endpoint.

D. Crie uma conexão VPN Site-to-Site da AWS na conta de serviços compartilhados. Configure a rede. Use o software VPN do AWS Marketplace em cada conta de desenvolvimento para se conectar à conexão VPN Site-to-Site.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/45/)

447- Uma empresa utilizou o AWS CloudFormation para criar toda a nova infraestrutura em suas contas de membros da AWS. Os recursos raramente mudam e são dimensionados adequadamente para a carga esperada. A fatura mensal da AWS é consistente.\

Ocasionalmente, um desenvolvedor cria um novo recurso para testes e se esquece de removê-lo quando o teste é concluído. A maioria desses testes dura alguns dias antes que os recursos não sejam mais necessários.\

A empresa deseja automatizar o processo de localização de recursos não utilizados. Um arquiteto de soluções precisa projetar uma solução que determine se o custo na fatura da AWS está aumentando. A solução deve ajudar a identificar os recursos que causam um aumento no custo e deve notificar automaticamente a equipe de operações da empresa.\

Qual solução atenderá a esses requisitos?

A. Ative os alertas de faturamento. Use o AWS Cost Explorer para determinar os custos do mês anterior. Crie um alarme do Amazon CloudWatch para o total estimado de cobranças. Especifique um limite de custo superior aos custos determinados pelo Cost Explorer. Adicione uma notificação para alertar a equipe de operações caso o limite do alarme seja ultrapassado.

B. Ative os alertas de faturamento. Use o AWS Cost Explorer para determinar os custos médios mensais dos últimos 3 meses. Crie um alarme do Amazon CloudWatch para o total estimado de cobranças. Especifique um limite de custo superior aos custos determinados pelo Cost Explorer. Adicione uma notificação para alertar a equipe de operações caso o limite do alarme seja ultrapassado.

C. Use a Detecção de Anomalias de Custo da AWS para criar um monitor de custos com o tipo de monitor Conta Vinculada. Crie uma assinatura para enviar resumos diários de custos da AWS para a equipe de operações. Especifique um limite para a variação de custos.

D. Use a Detecção de Anomalias de Custo da AWS para criar um monitor de custos que tenha um tipo de monitoramento de serviços da AWS. Crie uma assinatura para enviar resumos diários de custos da AWS para a equipe de operações. Especifique um limite para a variação de custos. **Mais votado**

448- Uma empresa está implantando um novo aplicativo baseado na web e precisa de uma solução de armazenamento para os servidores de aplicativos Linux. A empresa deseja criar um local único para atualizações de dados do aplicativo para todas as instâncias. O conjunto de dados ativo terá até 100 GB de tamanho. Um arquiteto de soluções determinou que os picos de operação ocorrerão por 3 horas diárias e exigirão um total de 225 MiBps de taxa de transferência de leitura.\

O arquiteto de soluções deve projetar uma solução Multi-AZ que disponibilize uma cópia dos dados em outra região da AWS para recuperação de desastres (DR). A cópia de DR tem um RPO de menos de 1 hora.\

Qual solução atenderá a esses requisitos?

A. Implantar um novo sistema de arquivos Multi-AZ do Amazon Elastic File System (Amazon EFS). Configurar o sistema de arquivos para 75 MiBps de throughput provisionado. Implementar a replicação para um sistema de arquivos na região de recuperação de desastres. **Mais votado**

B. Implante um novo sistema de arquivos Amazon FSx para Lustre. Configure o modo Bursting Throughput para o sistema de arquivos. Use o AWS Backup para fazer backup do sistema de arquivos na região de recuperação de desastres.

C. Implante um volume SSD de uso geral (gp3) do Amazon Elastic Block Store (Amazon EBS) com taxa de transferência de 225 MiBps. Habilite o Multi-Attach para o volume EBS. Use o AWS Elastic Disaster Recovery para replicar o volume EBS para a região de recuperação de desastres.

D. Implante um sistema de arquivos Amazon FSx para OpenZFS na região de produção e na região de recuperação de desastres. Crie uma tarefa agendada do AWS DataSync para replicar os dados do sistema de arquivos de produção para o sistema de arquivos de recuperação de desastres a cada 10 minutos.

449- Uma empresa precisa coletar dados de um experimento em um local remoto sem conexão com a internet. Durante o experimento, sensores conectados a uma rede local gerarão 6 TB de dados em um formato proprietário ao longo de uma semana. Os sensores podem ser configurados para enviar seus arquivos de dados para um servidor FTP periodicamente, mas não possuem um servidor FTP próprio. Os sensores também não suportam outros protocolos. A empresa precisa coletar os dados centralmente e movê-los para um armazenamento de objetos na Nuvem AWS o mais rápido possível após o experimento.\

Qual solução atenderá a esses requisitos?

A. Solicite um dispositivo AWS Snowball Edge Compute Optimized. Conecte o dispositivo à rede local. Configure o AWS DataSync com um nome de bucket de destino e descarregue os dados via NFS para o dispositivo. Após o experimento, devolva o dispositivo à AWS para que os dados possam ser carregados no Amazon S3.

B. Encomende um dispositivo AWS Snowcone, incluindo uma AMI Amazon Linux 2. Conecte o dispositivo à rede local. Inicie uma instância do Amazon EC2 no dispositivo. Crie um script de shell que baixe periodicamente os dados de cada sensor. Após o experimento, devolva o dispositivo à AWS para que os dados possam ser carregados como um volume do Amazon Elastic Block Store (Amazon EBS).

C. Encomende um dispositivo AWS Snowcone, incluindo uma AMI Amazon Linux 2. Conecte o dispositivo à rede local. Inicie uma instância do Amazon EC2 no dispositivo. Instale e configure um servidor FTP na instância do EC2. Configure os sensores para enviar dados para a instância do EC2. Após o experimento, devolva o dispositivo à AWS para que os dados possam ser carregados no Amazon S3. **Mais votado**

D. Solicite um dispositivo AWS Snowcone. Conecte o dispositivo à rede local. Configure o dispositivo para usar o Amazon FSx. Configure os sensores para enviar dados para o dispositivo. Configure o AWS DataSync no dispositivo para sincronizar os dados enviados com um bucket do Amazon S3. Retorne o dispositivo à AWS para que os dados possam ser carregados como um volume do Amazon Elastic Block Store (Amazon EBS).

450- Uma empresa com várias unidades de negócios está usando o AWS Organizations com todos os recursos habilitados. A empresa implementou uma estrutura de contas na qual cada unidade de negócios tem sua própria conta na AWS. Os administradores de cada conta da AWS precisam visualizar dados detalhados de custo e utilização de suas contas usando o Amazon Athena.\

Cada unidade de negócios pode ter acesso apenas aos seus próprios dados de custo e utilização. As políticas do IAM que regem a capacidade de configurar os Relatórios de Custo e Uso da AWS estão em vigor. Um Relatório de Custo e Uso centralizado que contém todos os dados da organização já está disponível em um bucket do Amazon S3.\

Qual solução atenderá a esses requisitos com a MENOR complexidade operacional?

A. Na conta de gerenciamento da organização, use o AWS Resource Access Manager (AWS RAM) para compartilhar os dados do Relatório de Custo e Uso com cada conta membro.

B. Na conta de gerenciamento da organização, configure um evento do S3 para invocar uma função do AWS Lambda sempre que um novo arquivo chegar ao bucket do S3 que contém o Relatório de Custo e Uso central. Configure a função do Lambda para extrair os dados de cada conta-membro e colocá-los no Amazon S3 sob um prefixo separado. Modifique a política do bucket do S3 para permitir que cada conta-membro acesse seu próprio prefixo. **Mais votado**

C. Em cada conta de membro, acesse o AWS Cost Explorer. Crie um novo relatório contendo informações de custo relevantes para a conta. Salve o relatório no Cost Explorer. Forneça instruções que os administradores da conta possam usar para acessar o relatório salvo.

D. Em cada conta de membro, crie um novo bucket do S3 para armazenar os dados do Relatório de Custo e Uso. Configure um Relatório de Custo e Uso para enviar os dados ao novo bucket do S3.

451- Uma empresa está projetando um ambiente AWS para uma aplicação de manufatura. A aplicação obteve sucesso com os clientes e sua base de usuários aumentou. A empresa conectou o ambiente AWS ao seu data center local por meio de uma conexão AWS Direct Connect de 1 Gbps. A empresa configurou o BGP para a conexão.\

A empresa precisa atualizar a solução de conectividade de rede existente para garantir que ela seja altamente disponível, tolerante a falhas e segura.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Adicione um IP privado dinâmico da VPN Site-to-Site da AWS como caminho secundário para proteger os dados em trânsito e fornecer resiliência para a conexão Direct Connect. Configure o MACsec para criptografar o tráfego dentro da conexão Direct Connect.

B. Provisione outra conexão Direct Connect entre o data center local da empresa e a AWS para aumentar a velocidade de transferência e fornecer resiliência. Configure o MACsec para criptografar o tráfego dentro da conexão Direct Connect.

C. Configurar vários VIFs privados. Balancear a carga de dados entre os VIFs entre o data center local e a AWS para fornecer resiliência.

D. Adicione uma VPN estática de site para site da AWS como um caminho secundário para proteger dados em trânsito e fornecer resiliência para a conexão Direct Connect. **Mais votado**

452- Uma empresa precisa modernizar um aplicativo e migrá-lo para a AWS. O aplicativo armazena dados de perfil de usuário como texto em uma única tabela em um banco de dados MySQL local.\

Após a modernização, os usuários usarão o aplicativo para enviar arquivos de vídeo de até 4 GB. Outros usuários devem poder baixar os arquivos de vídeo do aplicativo. A empresa precisa de uma solução de armazenamento de vídeo que ofereça escalonamento rápido. A solução não deve afetar o desempenho do aplicativo.\

Qual solução atenderá a esses requisitos?

A. Migre o banco de dados para o Amazon Aurora PostgreSQL usando o AWS Database Migration Service (AWS DMS). Armazene os vídeos como strings codificadas em base64 em uma coluna TEXT no banco de dados.

B. Migre o banco de dados para o Amazon DynamoDB usando o AWS Database Migration Service (AWS DMS) com a AWS Schema Conversion Tool (AWS SCT). Armazene os vídeos como objetos no Amazon S3. Armazene a chave S3 no item correspondente do DynamoDB. **Mais votado**

C. Migre o banco de dados para o Amazon Keyspaces (para Apache Cassandra) usando o AWS Database Migration Service (AWS DMS) com a AWS Schema Conversion Tool (AWS SCT). Armazene os vídeos como objetos no Amazon S3. Armazene o identificador de objeto S3 na entrada correspondente do Amazon Keyspaces.

D. Migre o banco de dados para o Amazon DynamoDB usando o AWS Database Migration Service (AWS DMS) com a AWS Schema Conversion Tool (AWS SCT). Armazene os vídeos como strings codificadas em base64 no item correspondente do DynamoDB.

453- Uma empresa armazena e gerencia documentos em um sistema de arquivos Amazon Elastic File System (Amazon EFS). O sistema de arquivos é criptografado com uma chave do AWS Key Management Service (AWS KMS). O sistema de arquivos é montado em uma instância do Amazon EC2 que executa software proprietário.\

A empresa habilitou backups automáticos para o sistema de arquivos. Os backups automáticos usam o plano de backup padrão do AWS Backup.\

Um arquiteto de soluções deve garantir que os documentos excluídos possam ser recuperados em um RPO de 100 minutos.\

Qual solução atenderá a esses requisitos?

A. Crie uma nova função do IAM. Crie um novo plano de backup. Use a nova função do IAM para criar backups. Atualize a política de chave do KMS para permitir que a nova função do IAM use a chave. Implemente um agendamento de backup por hora para o sistema de arquivos. **Mais votado**

B. Crie um novo plano de backup. Atualize a política de chave do KMS para permitir que a função AWSServiceRoleForBackup do IAM use a chave. Implemente uma expressão cron personalizada para executar um backup do sistema de arquivos a cada 30 minutos.

C. Crie uma nova função do IAM. Use o plano de backup existente. Atualize a política de chave do KMS para permitir que a nova função do IAM use a chave. Habilite backups contínuos para recuperação pontual.

D. Use o plano de backup existente. Atualize a política de chave do KMS para permitir que a função do IAM AWSServiceRoleForBackup use a chave. Habilite a Replicação Entre Regiões para o sistema de arquivos.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/46/)

454- Um arquiteto de soluções deve fornecer uma maneira segura para uma equipe de engenheiros de nuvem usar a CLI da AWS para carregar objetos em um bucket do Amazon S3. Cada engenheiro de nuvem possui um usuário do IAM, chaves de acesso do IAM e um dispositivo virtual de autenticação multifator (MFA). Os usuários do IAM dos engenheiros de nuvem estão em um grupo denominado S3-access. Os engenheiros de nuvem devem usar a MFA para executar qualquer ação no Amazon S3.\

Qual solução atenderá a esses requisitos?

A. Anexe uma política ao bucket do S3 para solicitar ao usuário do IAM um código MFA quando ele executar ações no bucket do S3. Use chaves de acesso do IAM com a AWS CLI para chamar o Amazon S3.

B. Atualize a política de confiança do grupo de acesso S3 para exigir que os principais utilizem a MFA quando assumirem o grupo. Use chaves de acesso do IAM com a AWS CLI para chamar o Amazon S3.

C. Anexe uma política ao grupo de acesso S3 para negar todas as ações do S3, a menos que a MFA esteja presente. Use chaves de acesso do IAM com a AWS CLI para chamar o Amazon S3.

D. Anexe uma política ao grupo de acesso S3 para negar todas as ações do S3, a menos que a MFA esteja presente. Solicite credenciais temporárias do AWS Security Token Service (AWS STS). Anexe as credenciais temporárias a um perfil que o Amazon S3 referenciará quando o usuário executar ações no Amazon S3. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/46/)

455- Uma empresa precisa migrar 60 aplicativos legados locais para a AWS. Os aplicativos são baseados no .NET Framework e rodam no Windows.\

A empresa precisa de uma solução que minimize o tempo de migração e não exija alterações no código do aplicativo. A empresa também não deseja gerenciar a infraestrutura.\

Qual solução atenderá a esses requisitos?

A. Refatore os aplicativos e coloque-os em contêineres usando o AWS Toolkit for NET Refactoring. Use o Amazon Elastic Container Service (Amazon ECS) com o tipo de inicialização Fargate para hospedar os aplicativos em contêineres.

B. Use o Assistente de Migração de Aplicativos Web do Windows para migrar os aplicativos para o AWS Elastic Beanstalk. Use o Elastic Beanstalk para implantar e gerenciar os aplicativos. **Mais votado**

C. Use o Assistente de Migração de Aplicativos Web do Windows para migrar os aplicativos para instâncias do Amazon EC2. Use as instâncias do EC2 para implantar e gerenciar os aplicativos.

D. Refatore os aplicativos e coloque-os em contêineres usando o AWS Toolkit for NET Refactoring. Use o Amazon Elastic Kubernetes Service (Amazon EKS) com o tipo de inicialização Fargate para hospedar os aplicativos em contêineres.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/46/)

456- Uma empresa precisa executar grandes trabalhos de processamento em lote com dados armazenados em um bucket do Amazon S3. Os trabalhos realizam simulações. Os resultados dos trabalhos não são sensíveis ao tempo e o processo pode suportar interrupções.\

Cada trabalho precisa processar de 15 a 20 GB de dados quando armazenados no bucket do S3. A empresa armazenará a saída dos trabalhos em um bucket diferente do Amazon S3 para análise posterior.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um pipeline de dados sem servidor. Use o AWS Step Functions para orquestração. Use funções do AWS Lambda com capacidade provisionada para processar os dados.

B. Crie um ambiente de computação em lote da AWS que inclua instâncias spot do Amazon EC2. Especifique a estratégia de alocação SPOT_CAPACITY_OPTIMIZED. **Mais votado**

C. Crie um ambiente de computação em lote da AWS que inclua instâncias sob demanda e instâncias spot do Amazon EC2. Especifique a estratégia de alocação SPOT_CAPACITY_OPTIMIZED para as instâncias spot.

D. Use o Amazon Elastic Kubernetes Service (Amazon EKS) para executar os trabalhos de processamento. Use grupos de nós gerenciados que contenham uma combinação de instâncias sob demanda e instâncias spot do Amazon EC2.

457- Uma empresa possui um aplicativo que analisa e armazena dados de imagens no local. O aplicativo recebe milhões de novos arquivos de imagem todos os dias. Os arquivos têm, em média, 1 MB de tamanho. Os arquivos são analisados em lotes de 1 GB. Quando o aplicativo analisa um lote, ele compacta as imagens. O aplicativo então arquiva as imagens como um único arquivo em um servidor NFS local para armazenamento de longo prazo.\

A empresa possui um ambiente Microsoft Hyper-V local e tem capacidade computacional disponível. A empresa não possui capacidade de armazenamento e deseja arquivar as imagens na AWS. A empresa precisa recuperar os dados arquivados em até 1 semana após a solicitação.\

A empresa possui uma conexão AWS Direct Connect de 10 Gbps entre seu data center local e a AWS. A empresa precisa definir limites de largura de banda e agendar a cópia das imagens arquivadas para a AWS fora do horário comercial.\

Qual solução atenderá a esses requisitos com a MAIOR relação custo-benefício?

A. Implante um agente do AWS DataSync em uma nova instância do Amazon EC2 baseada em GPU. Configure o agente do DataSync para copiar o lote de arquivos do servidor NFS local para o Amazon S3 Glacier Instant Retrieval. Após a cópia bem-sucedida, exclua os dados do armazenamento local.

B. Implante um agente AWS DataSync como uma VM Hyper-V local. Configure o agente DataSync para copiar o lote de arquivos do servidor NFS local para o Amazon S3 Glacier Deep Archive. Após a cópia bem-sucedida, exclua os dados do armazenamento local. **Mais votado**

C. Implante um agente do AWS DataSync em uma nova instância de uso geral do Amazon EC2. Configure o agente do DataSync para copiar o lote de arquivos do servidor NFS local para o Amazon S3 Standard. Após a cópia bem-sucedida, exclua os dados do armazenamento local. Crie uma regra de ciclo de vida do S3 para transferir objetos do S3 Standard para o S3 Glacier Deep Archive após 1 dia.

D. Implante um Gateway de Fita do AWS Storage Gateway localmente no ambiente Hyper-V. Conecte o Gateway de Fita à AWS. Use a criação automática de fitas. Especifique um pool do Amazon S3 Glacier Deep Archive. Ejete a fita após a cópia do lote de imagens.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/46/)

458- Uma empresa deseja registrar indicadores-chave de desempenho (KPIs) de seu aplicativo como parte de uma estratégia de conversão para um esquema de licenciamento baseado em usuário. O aplicativo é multicamadas com uma interface de usuário baseada na web. A empresa salva todos os arquivos de log no Amazon CloudWatch usando o agente do CloudWatch. Todos os logins no aplicativo são salvos em um arquivo de log.\

Como parte do novo esquema de licenciamento, a empresa precisa descobrir quantos usuários únicos cada cliente possui diariamente, semanalmente e mensalmente.\

Qual solução fornecerá essas informações com a MENOR alteração no aplicativo?

A. Configure um filtro de métrica do Amazon CloudWatch Logs que salve cada login bem-sucedido como uma métrica. Configure o nome de usuário e o nome do cliente como dimensões para a métrica. **Mais votado**

B. Altere a lógica do aplicativo para fazer com que cada login bem-sucedido gere uma chamada para o AWS SDK para incrementar uma métrica personalizada que registra as dimensões de nome de usuário e nome de cliente no CloudWatch.

C. Configure o agente do CloudWatch para extrair métricas de login bem-sucedido dos logs. Além disso, configure o agente do CloudWatch para salvar as métricas de login bem-sucedido como uma métrica personalizada que usa o nome de usuário e o nome do cliente como dimensões para a métrica.

D. Configure uma função do AWS Lambda para consumir um fluxo de logs do aplicativo no Amazon CloudWatch Logs. Além disso, configure a função do Lambda para incrementar uma métrica personalizada no CloudWatch que usa o nome de usuário e o nome do cliente como dimensões para a métrica.

459- Uma empresa está usando o GitHub Actions para executar um pipeline de CI/CD que acessa recursos na AWS. A empresa possui um usuário do IAM que utiliza uma chave secreta no pipeline para autenticação na AWS. Uma função do IAM existente com uma política anexada concede as permissões necessárias para implantar recursos.\

A equipe de segurança da empresa implementa um novo requisito que impede que pipelines usem chaves secretas de longa duração. Um arquiteto de soluções deve substituir a chave secreta por uma solução de curta duração.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um provedor de identidade (IdP) SAML 2.0 do IAM no AWS Identity and Access Management (IAM). Crie uma nova função do IAM com a política de confiança apropriada que permita a chamada da API sts:AssumeRole. Anexe a política do IAM existente à nova função do IAM. Atualize o GitHub para usar a autenticação SAML para o pipeline.

B. Crie um provedor de identidade (IdP) do IAM OpenID Connect (OIDC) no AWS Identity and Access Management (IAM). Crie uma nova função do IAM com a política de confiança apropriada que permita a chamada da API sts:AssumeRoleWithWebIdentity do IdP do OIDC do GitHub. Atualize o GitHub para assumir a função para o pipeline. **Mais votado**

C. Crie um pool de identidades do Amazon Cognito. Configure o provedor de autenticação para usar o GitHub. Crie uma nova função do IAM com a política de confiança apropriada que permita a chamada da API sts:AssumeRoleWithWebIdentity do provedor de autenticação do GitHub. Configure o pipeline para usar o Cognito como seu provedor de autenticação.

D. Crie uma âncora de confiança para a Autoridade de Certificação Privada da AWS. Gere um certificado de cliente para usar com o AWS IAM Roles Anywhere. Crie uma nova função do IAM com a política de confiança apropriada que permita a chamada da API sts:AssumeRole. Anexe a política do IAM existente à nova função do IAM. Configure o pipeline para usar a ferramenta auxiliar de credenciais e referenciar a chave pública do certificado de cliente para assumir a nova função do IAM.

460- Uma empresa está executando um processo de rastreamento da web em uma lista de URLs de destino para obter documentos de treinamento para algoritmos de aprendizado de máquina. Uma frota de instâncias t2.micro do Amazon EC2 extrai as URLs de destino de uma fila do Amazon Simple Queue Service (Amazon SQS). As instâncias então gravam o resultado do algoritmo de rastreamento como um arquivo .csv em um volume do Amazon Elastic File System (Amazon EFS). O volume EFS é montado em todas as instâncias da frota.\

Um sistema separado adiciona as URLs à fila do SQS em taxas pouco frequentes. As instâncias rastreiam cada URL em 10 segundos ou menos.\

As métricas indicam que algumas instâncias ficam ociosas quando não há URLs na fila do SQS. Um arquiteto de soluções precisa redesenhar a arquitetura para otimizar custos.\

Qual combinação de etapas atenderá a esses requisitos com a MAIOR relação custo-benefício? (Escolha duas.)

A. Use instâncias m5.8xlarge em vez de instâncias t2.micro para o processo de rastreamento da web. Reduza o número de instâncias na frota em 50%.

B. Converta o processo de rastreamento da web em uma função do AWS Lambda. Configure a função do Lambda para extrair URLs da fila do SQS. **Mais votado**

C. Modifique o processo de rastreamento da web para armazenar resultados no Amazon Neptune.

D. Modifique o processo de rastreamento da web para armazenar resultados em uma instância do Amazon Aurora Serverless MySQL.

E. Modifique o processo de rastreamento da web para armazenar resultados no Amazon S3. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/46/)

461- Uma empresa precisa migrar seu website de um data center local para a AWS. O website consiste em um balanceador de carga, um sistema de gerenciamento de conteúdo (CMS) executado em um sistema operacional Linux e um banco de dados MySQL.\

O CMS requer armazenamento persistente compatível com NFS para um sistema de arquivos. A nova solução na AWS deve ser capaz de escalar de 2 instâncias do Amazon EC2 para 30 instâncias do EC2 em resposta a aumentos imprevisíveis de tráfego. A nova solução também não deve exigir alterações no website e deve evitar a perda de dados.\

Qual solução atenderá a esses requisitos?

A. Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS). Implante o CMS no AWS Elastic Beanstalk com um Application Load Balancer e um grupo de Auto Scaling. Use .ebextensions para montar o sistema de arquivos EFS nas instâncias do EC2. Crie um banco de dados MySQL do Amazon Aurora separado do ambiente do Elastic Beanstalk. **Mais votado**

B. Crie um volume Multi-Attach do Amazon Elastic Block Store (Amazon EBS). Implante o CMS no AWS Elastic Beanstalk com um balanceador de carga de rede e um grupo de Auto Scaling. Use .ebextensions para montar o volume EBS nas instâncias do EC2. Crie um banco de dados Amazon RDS para MySQL no ambiente do Elastic Beanstalk.

C. Crie um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Crie um modelo de inicialização e um grupo de Auto Scaling para iniciar instâncias do EC2 e oferecer suporte ao CMS. Crie um balanceador de carga de rede para distribuir o tráfego. Crie um banco de dados MySQL do Amazon Aurora. Use um gancho de ciclo de vida de escalonamento horizontal do EC2 Auto Scaling para montar o sistema de arquivos do EFS nas instâncias do EC2.

D. Crie um volume Multi-Attach do Amazon Elastic Block Store (Amazon EBS). Crie um modelo de inicialização e um grupo de Auto Scaling para iniciar instâncias do EC2 e oferecer suporte ao CMS. Crie um Application Load Balancer para distribuir o tráfego. Crie um cluster do Amazon ElastiCache for Redis para oferecer suporte ao banco de dados MySQL. Use dados de usuário do EC2 para anexar o volume do EBS às instâncias do EC2.

462- Uma empresa precisa implementar a recuperação de desastres para um aplicativo crítico executado em uma única região da AWS. Os usuários do aplicativo interagem com um front-end web hospedado em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). O aplicativo grava em uma instância de banco de dados do Amazon RDS para MySQL. O aplicativo também gera documentos processados que são armazenados em um bucket do Amazon S3.\

A equipe financeira da empresa consulta diretamente o banco de dados para gerar relatórios. Durante períodos de maior movimento, essas consultas consomem recursos e afetam negativamente o desempenho do aplicativo.\

Um arquiteto de soluções deve projetar uma solução que forneça resiliência durante um desastre. A solução deve minimizar a perda de dados e resolver os problemas de desempenho resultantes das consultas da equipe financeira.\

Qual solução atenderá a esses requisitos?

A. Migre o banco de dados para o Amazon DynamoDB e use as tabelas globais do DynamoDB. Instrua a equipe financeira a consultar uma tabela global em uma região separada. Crie uma função do AWS Lambda para sincronizar periodicamente o conteúdo do bucket S3 original com um novo bucket S3 na região separada. Inicie instâncias do EC2 e crie um ALB na região separada. Configure o aplicativo para apontar para o novo bucket S3.

B. Inicie instâncias adicionais do EC2 que hospedem o aplicativo em uma região separada. Adicione as instâncias adicionais ao AL existente. Na região separada, crie uma réplica de leitura da instância do banco de dados RDS. Instrua a equipe financeira a executar consultas na réplica de leitura. Use a Replicação entre Regiões (CRR) do S3 do bucket S3 original para um novo bucket S3 na região separada. Durante um desastre, promova a réplica de leitura para uma instância de banco de dados autônoma. Configure o aplicativo para apontar para o novo bucket S3 e para a réplica de leitura recém-promovida.

C. Crie uma réplica de leitura da instância do RDS DB em uma região separada. Instrua a equipe financeira a executar consultas na réplica de leitura. Crie AMIs das instâncias do EC2 que hospedam o front-end do aplicativo. Copie as AMIs para a região separada. Use a Replicação entre Regiões (CRR) do S3 do bucket S3 original para um novo bucket S3 na região separada. Durante um desastre, promova a réplica de leitura para uma instância de banco de dados autônoma. Inicie instâncias do EC2 a partir das AMIs e crie um ALB para apresentar o aplicativo aos usuários finais. Configure o aplicativo para apontar para o novo bucket S3. **Mais votado**

D. Crie snapshots de hora em hora da instância do banco de dados RDS. Copie os snapshots para uma região separada. Adicione um cluster do Amazon ElastiCache na frente do banco de dados RDS existente. Crie AMIs das instâncias do EC2 que hospedam o front-end do aplicativo. Copie as AMIs para a região separada. Use a Replicação entre Regiões (CRR) do S3 do bucket S3 original para um novo bucket S3 na região separada. Durante um desastre, restaure o banco de dados a partir do snapshot do RDS mais recente. Inicie instâncias do EC2 a partir das AMIs e crie um ALB para apresentar o aplicativo aos usuários finais. Configure o aplicativo para apontar para o novo bucket S3.

463- Uma empresa possui diversos serviços em execução em seu data center local. O data center está conectado à AWS usando o AWS Direct Connect (DX) e uma VPN IPSec. Os dados do serviço são sensíveis e a conectividade não pode passar pela internet. A empresa deseja expandir para um novo segmento de mercado e começar a oferecer seus serviços a outras empresas que utilizam a AWS.\

Qual solução atenderá a esses requisitos?

A. Crie um VPC Endpoint Service que aceite tráfego TCP, hospede-o atrás de um Network Load Balancer e disponibilize o serviço via DX. **Mais votado**

B. Crie um VPC Endpoint Service que aceite tráfego HTTP ou HTTPS, hospede-o atrás de um Application Load Balancer e disponibilize o serviço no DX.

C. Anexe um gateway de Internet à VPC e garanta que o controle de acesso à rede e as regras do grupo de segurança permitam o tráfego de entrada e saída relevante.

D. Anexe um gateway NAT à VPC e garanta que o controle de acesso à rede e as regras do grupo de segurança permitam o tráfego de entrada e saída relevante.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/47/)

464- Uma empresa usa o AWS Organizations para gerenciar suas contas da AWS. Um arquiteto de soluções deve projetar uma solução na qual apenas funções de administrador tenham permissão para usar ações do IAM. No entanto, o arquiteto de soluções não tem acesso a todas as contas da AWS da empresa.\

Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?

A. Crie um SCP aplicável a todas as contas da AWS para permitir ações do IAM apenas para funções de administrador. Aplique o SCP à UO raiz.

B. Configure o AWS CloudTrail para invocar uma função do AWS Lambda para cada evento relacionado às ações do IAM. Configure a função para negar a ação se o usuário que a invocou não for um administrador.

C. Crie um SCP aplicável a todas as contas da AWS para negar ações do IAM a todos os usuários, exceto aqueles com funções de administrador. Aplique o SCP à UO raiz. **Mais votado**

D. Defina um limite de permissões do IAM que permita ações do IAM. Anexe o limite de permissões a todas as funções de administrador em todas as contas da AWS.

465- Uma empresa utiliza uma organização no AWS Organizations para gerenciar várias contas da AWS. A empresa hospeda alguns aplicativos em uma VPC na conta de serviços compartilhados da empresa.\

A empresa anexou um gateway de trânsito à VPC na conta de serviços compartilhados.\

A empresa está desenvolvendo um novo recurso e criou um ambiente de desenvolvimento que requer acesso aos aplicativos que estão na conta de serviços compartilhados. A empresa pretende excluir e recriar recursos com frequência na conta de desenvolvimento. A empresa também deseja dar à equipe de desenvolvimento a capacidade de recriar a conexão da equipe com a conta de serviços compartilhados, conforme necessário.\

Qual solução atenderá a esses requisitos?

A. Crie um gateway de trânsito na conta de desenvolvimento. Crie uma solicitação de peering do gateway de trânsito para a conta de serviços compartilhados. Configure o gateway de trânsito de serviços compartilhados para aceitar conexões de peering automaticamente.

B. Ative a aceitação automática para o gateway de trânsito na conta de serviços compartilhados. Use o AWS Resource Access Manager (AWS RAM) para compartilhar o recurso do gateway de trânsito na conta de serviços compartilhados com a conta de desenvolvimento. Aceite o recurso na conta de desenvolvimento. Crie um anexo do gateway de trânsito na conta de desenvolvimento. **Mais votado**

C. Ative a aceitação automática para o gateway de trânsito na conta de serviços compartilhados. Crie um endpoint da VPC. Use a política de endpoint para conceder permissões no endpoint da VPC para a conta de desenvolvimento. Configure o serviço de endpoint para aceitar solicitações de conexão automaticamente. Forneça os detalhes do endpoint à equipe de desenvolvimento.

D. Crie uma regra do Amazon EventBridge para invocar uma função do AWS Lambda que aceite o anexo do gateway de trânsito quando a conta de desenvolvimento fizer uma solicitação de anexo. Use o AWS Network Manager para compartilhar o gateway de trânsito na conta de serviços compartilhados com a conta de desenvolvimento. Aceite o gateway de trânsito na conta de desenvolvimento.

466- Uma empresa deseja migrar cargas de trabalho virtuais da Microsoft de um data center local para a AWS. A empresa testou com sucesso algumas cargas de trabalho de exemplo na AWS. A empresa também criou uma conexão VPN Site-to-Site da AWS com uma VPC. Um arquiteto de soluções precisa gerar um relatório de custo total de propriedade (TCO) para a migração de todas as cargas de trabalho do data center.\

O Protocolo Simples de Gerenciamento de Rede (SNMP) foi habilitado em cada VM no data center. A empresa não pode adicionar mais VMs ao data center nem instalar software adicional nas VMs. Os dados de descoberta devem ser importados automaticamente para o AWS Migration Hub.\

Qual solução atenderá a esses requisitos?

A. Use o serviço sem agente do AWS Application Migration Service e as Recomendações de estratégia do AWS Migration Hub para gerar o relatório de TCO.

B. Inicie uma instância do Amazon EC2 no Windows. Instale o coletor sem agente do Migration Evaluator na instância do EC2. Configure o Migration Evaluator para gerar o relatório de TCO. **Mais votado**

C. Inicie uma instância do Amazon EC2 no Windows. Instale o coletor sem agente do Migration Evaluator na instância do EC2. Configure o Migration Hub para gerar o relatório de TCO.

D. Use a ferramenta de Avaliação de Preparação para Migração da AWS dentro da VPC. Configure o Avaliador de Migração para gerar o relatório de TCO.

467- Uma empresa que está desenvolvendo um jogo para dispositivos móveis está disponibilizando ativos de jogo em duas regiões da AWS. Os ativos de jogo são fornecidos por um conjunto de instâncias do Amazon EC2 por trás de um Balanceador de Carga de Aplicação (ALB) em cada região. A empresa exige que os ativos de jogo sejam buscados na região mais próxima. Se os ativos de jogo ficarem indisponíveis na região mais próxima, eles devem ser buscados na outra região.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma distribuição do Amazon CloudFront. Crie um grupo de origem com uma origem para cada ALB. Defina uma das origens como primária.

B. Crie uma verificação de integridade do Amazon Route 53 para cada ALB. Crie um registro de roteamento de failover do Route 53 apontando para os dois ALBs. Defina o valor "Avaliar integridade do destino" como "Sim".

C. Crie duas distribuições do Amazon CloudFront, cada uma com um ALB como origem. Crie um registro de roteamento de failover do Amazon Route 53 apontando para as duas distribuições do CloudFront. Defina o valor "Avaliar integridade do destino" como "Sim".

D. Crie uma verificação de integridade do Amazon Route 53 para cada ALB. Crie um registro de alias de latência do Route 53 apontando para os dois ALBs. Defina o valor "Avaliar integridade do alvo" como "Sim". **Mais votado**

468- Uma empresa implanta cargas de trabalho em várias contas da AWS. Cada conta possui uma VPC com logs de fluxo de VPC publicados em formato de log de texto em um bucket centralizado do Amazon S3. Cada arquivo de log é compactado com compactação gzip. A empresa precisa reter os arquivos de log indefinidamente.\

Um engenheiro de segurança ocasionalmente analisa os logs usando o Amazon Athena para consultar os logs de fluxo de VPC. O desempenho da consulta diminui com o tempo, à medida que o número de logs ingeridos aumenta. Um arquiteto de soluções precisa aprimorar o desempenho da análise de logs e reduzir o espaço de armazenamento usado pelos logs de fluxo de VPC.\

Qual solução atenderá a esses requisitos com a MAIOR melhoria de desempenho?

A. Crie uma função do AWS Lambda para descompactar os arquivos gzip e compactá-los com a compactação bzip2. Assine a função Lambda em uma notificação de evento S3 s3:ObjectCreated:Put para o bucket S3.

B. Habilite a Aceleração de Transferência S3 para o bucket S3. Crie uma configuração de Ciclo de Vida S3 para mover arquivos para a classe de armazenamento S3 Intelligent-Tiering assim que os arquivos forem carregados.

C. Atualize a configuração do log de fluxo da VPC para armazenar os arquivos no formato Apache Parquet. Especifique partições horárias para os arquivos de log. **Mais votado**

D. Crie um novo grupo de trabalho do Athena sem limites de controle de uso de dados. Use o mecanismo Athena versão 2.

469- Uma empresa deseja estabelecer uma conexão dedicada entre sua infraestrutura local e a AWS. A empresa está configurando uma conexão AWS Direct Connect de 1 Gbps com a VPC da sua conta. A arquitetura inclui um gateway de trânsito e um gateway Direct Connect para conectar várias VPCs e a infraestrutura local.\

A empresa deve se conectar aos recursos da VPC por meio de uma VIF de trânsito usando a conexão Direct Connect.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Atualize a conexão Direct Connect de 1 Gbps para 10 Gbps.

B. Anuncie os prefixos de rede local no VIF de trânsito. **Mais votado**

C. Anuncie os prefixos VPC do gateway Direct Connect para a rede local por meio do VIF de trânsito. **Mais votado**

D. Atualize o atributo do modo de criptografia MACsec da conexão Direct Connect para must_encrypt.

E. Associe um par de Nome de Chave de Conexão MACsec/Chave de Associação de Conectividade (CKN/CAK) à conexão Direct Connect.

470- Uma empresa deseja usar o Amazon WorkSpaces em combinação com dispositivos thin client para substituir desktops antigos. Os funcionários usam os desktops para acessar aplicativos que funcionam com dados de ensaios clínicos. A política de segurança corporativa determina que o acesso aos aplicativos deve ser restrito apenas às filiais da empresa. A empresa está considerando adicionar uma filial adicional nos próximos 6 meses.\

Qual solução atende a esses requisitos com MAIOR eficiência operacional?

A. Crie uma regra de grupo de controle de acesso IP com a lista de endereços públicos das filiais. Associe o grupo de controle de acesso IP ao diretório do WorkSpaces. **Mais votado**

B. Use o AWS Firewall Manager para criar uma regra de ACL da Web com um IPSet contendo a lista de endereços públicos das filiais. Associe a ACL da Web ao diretório do WorkSpaces.

C. Use o AWS Certificate Manager (ACM) para emitir certificados de dispositivos confiáveis para as máquinas implantadas nas filiais. Habilite o acesso restrito no diretório do WorkSpaces.

D. Crie uma imagem personalizada do WorkSpace com o Firewall do Windows configurado para restringir o acesso aos endereços públicos das filiais. Use a imagem para implantar os WorkSpaces.

471- Uma empresa utiliza o AWS Organizations. A empresa executa dois dispositivos de firewall em uma conta de rede centralizada. Cada dispositivo de firewall é executado em uma instância do Amazon EC2 altamente disponível configurada manualmente. Um gateway de trânsito conecta a VPC da conta de rede centralizada às VPCs das contas-membro. Cada dispositivo de firewall usa um endereço IP privado estático que é então usado para rotear o tráfego das contas-membro para a internet.\

Durante um incidente recente, um script mal configurado iniciou o encerramento de ambos os dispositivos de firewall. Durante a reconstrução dos dispositivos de firewall, a empresa escreveu um novo script para configurar os dispositivos de firewall na inicialização.\

A empresa deseja modernizar a implantação dos dispositivos de firewall. Os dispositivos de firewall precisam ser escalonáveis horizontalmente para lidar com o aumento do tráfego quando a rede se expande. A empresa deve continuar a usar os dispositivos de firewall para cumprir a política da empresa. O provedor dos dispositivos de firewall confirmou que a versão mais recente do código do firewall funcionará com todos os serviços da AWS.\

Qual combinação de etapas o arquiteto de soluções deve recomendar para atender a esses requisitos com a MAIOR relação custo-benefício? (Escolha três.)

A. Implante um Gateway Load Balancer na conta de rede centralizada. Configure um serviço de endpoint que utilize o AWS PrivateLink. **Mais votado**

B. Implante um balanceador de carga de rede na conta de rede centralizada. Configure um serviço de endpoint que utilize o AWS PrivateLink.

C. Crie um grupo de Dimensionamento Automático e um modelo de inicialização que use o novo script como dados do usuário para configurar os dispositivos de firewall. Crie um grupo de destino que use o tipo de destino da instância. **Mais votado**

D. Crie um grupo de Auto Scaling. Configure uma implantação do AWS Launch Wizard que use o novo script como dados do usuário para configurar os dispositivos de firewall. Crie um grupo de destino que use o tipo de destino IP.

E. Crie endpoints de VPC em cada conta de membro. Atualize as tabelas de rotas para apontar para os endpoints de VPC.

F. Crie endpoints da VPC na conta de rede centralizada. Atualize as tabelas de rotas em cada conta membro para apontar para os endpoints da VPC.

472- Um arquiteto de soluções deve implementar uma arquitetura multirregional para um banco de dados Amazon RDS para PostgreSQL compatível com uma aplicação web. O banco de dados é iniciado a partir de um modelo do AWS CloudFormation que inclui serviços e recursos da AWS presentes nas regiões primária e secundária.\

O banco de dados está configurado para backups automatizados e tem um RTO de 15 minutos e um RPO de 2 horas. A aplicação web está configurada para usar um registro do Amazon Route 53 para rotear o tráfego para o banco de dados.\

Qual combinação de etapas resultará em uma arquitetura de alta disponibilidade que atenda a todos os requisitos? (Escolha duas.)

A. Crie uma réplica de leitura entre regiões do banco de dados na região secundária. Configure uma função do AWS Lambda na região secundária para promover a réplica de leitura durante um evento de failover. **Mais votado**

B. Na região primária, crie uma verificação de integridade no banco de dados que invocará uma função do AWS Lambda quando uma falha for detectada. Programe a função do Lambda para recriar o banco de dados a partir do snapshot mais recente na região secundária e atualizar os registros do host do Route 53 para o banco de dados.

C. Crie uma função do AWS Lambda para copiar o backup automatizado mais recente para a região secundária a cada 2 horas.

D. Crie uma política de roteamento de failover no Route 53 para o registro DNS do banco de dados. Defina os endpoints primário e secundário como endpoints em cada região. **Mais votado**

E. Crie um banco de dados hot standby na região secundária. Use uma função do AWS Lambda para restaurar o banco de dados secundário para o backup automático mais recente do RDS em caso de falha do banco de dados primário.

473- Uma empresa de comércio eletrônico executa uma aplicação na AWS. A aplicação possui uma API do Amazon API Gateway que invoca uma função do AWS Lambda. Os dados são armazenados em uma instância de banco de dados do Amazon RDS para PostgreSQL.\

Durante a mais recente promoção relâmpago da empresa, um aumento repentino nas chamadas de API afetou negativamente o desempenho da aplicação. Um arquiteto de soluções analisou as métricas do Amazon CloudWatch durante esse período e notou um aumento significativo nas invocações do Lambda e nas conexões com o banco de dados. A utilização da CPU também foi alta na instância de banco de dados.\

O que o arquiteto de soluções deve recomendar para otimizar o desempenho da aplicação?

A. Aumente a memória da função Lambda. Modifique a função Lambda para fechar as conexões com o banco de dados quando os dados forem recuperados.

B. Adicione um cluster do Amazon ElastiCache for Redis para armazenar os dados acessados com frequência do banco de dados RDS.

C. Crie um proxy RDS usando o console do Lambda. Modifique a função do Lambda para usar o endpoint do proxy. **Mais votado**

D. Modifique a função Lambda para se conectar ao banco de dados fora do manipulador da função. Verifique se há uma conexão com o banco de dados existente antes de criar uma nova conexão.

474- Uma empresa varejista deseja aprimorar sua arquitetura de aplicativos. Os aplicativos da empresa registram novos pedidos, processam devoluções de mercadorias e fornecem análises. Os aplicativos armazenam dados de varejo em um banco de dados MySQL e em um banco de dados de análise Oracle OLAP. Todos os aplicativos e bancos de dados são hospedados em instâncias do Amazon EC2.\

Cada aplicativo consiste em vários componentes que gerenciam diferentes partes do processo de pedidos. Esses componentes usam dados recebidos de diferentes fontes. Uma tarefa ETL separada é executada semanalmente e copia os dados de cada aplicativo para o banco de dados de análise.\

Um arquiteto de soluções deve redesenhar a arquitetura em uma solução orientada a eventos que utiliza serviços sem servidor. A solução deve fornecer análises atualizadas quase em tempo real.\

Qual solução atenderá a esses requisitos?

A. Migre os aplicativos individuais como microsserviços para contêineres do Amazon Elastic Container Service (Amazon ECS) que usam o AWS Fargate. Mantenha o banco de dados MySQL de varejo no Amazon EC2. Mova o banco de dados de análise para o Amazon Neptune. Use o Amazon Simple Queue Service (Amazon SQS) para enviar todos os dados recebidos para os microsserviços e o banco de dados de análise.

B. Crie um grupo de Auto Scaling para cada aplicativo. Especifique o número necessário de instâncias do EC2 em cada grupo de Auto Scaling. Migre o banco de dados MySQL de varejo e o banco de dados de análise para o Amazon Aurora MySQL. Use o Amazon Simple Notification Service (Amazon SNS) para enviar todos os dados recebidos para as instâncias do EC2 e o banco de dados de análise corretos.

C. Migre os aplicativos individuais como microsserviços para contêineres do Amazon Elastic Kubernetes Service (Amazon EKS) que usam o AWS Fargate. Migre o banco de dados MySQL de varejo para o Amazon Aurora Serverless MySQL. Migre o banco de dados de análise para o Amazon Redshift Serverless. Use o Amazon EventBridge para enviar todos os dados recebidos para os microsserviços e o banco de dados de análise. **Mais votado**

D. Migre os aplicativos individuais como microsserviços para o Amazon AppStream 2.0. Migre o banco de dados MySQL de varejo para o Amazon Aurora MySQL. Migre o banco de dados de análise para o Amazon Redshift Serverless. Use o AWS IoT Core para enviar todos os dados recebidos para os microsserviços e o banco de dados de análise.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/48/)

475- Uma empresa está planejando migrar de um data center local para a Nuvem AWS. A empresa planeja usar várias contas da AWS gerenciadas em uma organização no AWS Organizations. A empresa criará um pequeno número de contas inicialmente e adicionará contas conforme necessário. Um arquiteto de soluções deve projetar uma solução que ative o AWS CloudTrail em todas as contas da AWS.\

Qual é a solução operacional MAIS eficiente que atende a esses requisitos?

A. Crie uma função do AWS Lambda que crie uma nova trilha do CloudTrail em todas as contas da AWS na organização. Invoque a função do Lambda diariamente usando uma ação agendada no Amazon EventBridge.

B. Crie uma nova trilha do CloudTrail na conta de gerenciamento da organização. Configure a trilha para registrar todos os eventos de todas as contas da AWS na organização. **Mais votado**

C. Crie uma nova trilha do CloudTrail em todas as contas da AWS na organização. Crie novas trilhas sempre que uma nova conta for criada. Defina um SCP que impeça a exclusão ou modificação de trilhas. Aplique o SCP à UO raiz.

D. Crie um runbook do AWS Systems Manager Automation que crie uma trilha do CloudTrail em todas as contas da AWS na organização. Invoque a automação usando o Gerenciador de Estados do Systems Manager.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/48/)

476- Uma empresa de desenvolvimento de software possui vários engenheiros trabalhando remotamente. A empresa executa os Serviços de Domínio Active Directory (AD DS) em uma instância do Amazon EC2. A política de segurança da empresa determina que todos os serviços internos não públicos implantados em uma VPC devem ser acessíveis por meio de uma VPN. A autenticação multifator (MFA) deve ser usada para acessar uma VPN.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Crie uma conexão VPN Site-to-Site da AWS. Configure a integração entre uma VPN e o AD DS. Use um cliente do Amazon WorkSpaces com suporte a MFA habilitado para estabelecer uma conexão VPN.

B. Crie um endpoint do AWS Client VPN. Crie um diretório do AD Connector para integração com o AD DS. Habilite o MFA para o AD Connector. Use o AWS Client VPN para estabelecer uma conexão VPN. **Mais votado**

C. Crie várias conexões VPN Site-to-Site da AWS usando o AWS VPN CloudHub. Configure a integração entre o AWS VPN CloudHub e o AD DS. Use o AWS Copilot para estabelecer uma conexão VPN.

D. Crie um endpoint do Amazon WorkLink. Configure a integração entre o Amazon WorkLink e o AD DS. Habilite a MFA no Amazon WorkLink. Use a VPN do cliente AWS para estabelecer uma conexão VPN.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/48/)

477- Uma empresa está executando um aplicativo web de três camadas em um data center local. O frontend é servido por um servidor web Apache, a camada intermediária é um aplicativo Java monolítico e a camada de armazenamento é um banco de dados PostgreSQL.\

Durante uma promoção de marketing recente, os clientes não conseguiram fazer pedidos pelo aplicativo porque ele travou. Uma análise mostrou que todas as três camadas estavam sobrecarregadas. O aplicativo parou de responder e o banco de dados atingiu seu limite de capacidade devido a operações de leitura. A empresa já tem várias promoções semelhantes agendadas para um futuro próximo.\

Um arquiteto de soluções deve desenvolver um plano de migração para a AWS para resolver esses problemas. A solução deve maximizar a escalabilidade e minimizar o esforço operacional.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha três.)

A. Refatore o frontend para que ativos estáticos possam ser hospedados no Amazon S3. Use o Amazon CloudFront para fornecer o frontend aos clientes. Conecte o frontend ao aplicativo Java. **Mais votado**

B. Rehospede o servidor web Apache do frontend em instâncias do Amazon EC2 que estejam em um grupo de Auto Scaling. Use um balanceador de carga na frente do grupo de Auto Scaling. Use o Amazon Elastic File System (Amazon EFS) para hospedar os ativos estáticos de que o servidor web Apache precisa.

C. Rehospedar o aplicativo Java em um ambiente AWS Elastic Beanstalk que inclua dimensionamento automático. **Mais votado**

D. Refatorar a aplicação Java. Desenvolver um contêiner Docker para executar a aplicação Java. Usar o AWS Fargate para hospedar o contêiner.

E. Use o AWS Database Migration Service (AWS DMS) para reestruturar o banco de dados PostgreSQL para um banco de dados Amazon Aurora PostgreSQL. Use o Aurora Auto Scaling para réplicas de leitura. **Mais votado**

F. Rehospede o banco de dados PostgreSQL em uma instância do Amazon EC2 que tenha o dobro de memória do servidor local.

478- Uma empresa está implantando uma nova aplicação na AWS. A aplicação consiste em um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) e um repositório do Amazon Elastic Container Registry (Amazon ECR). O cluster EKS possui um grupo de nós gerenciados pela AWS.\

As diretrizes de segurança da empresa determinam que todos os recursos na AWS devem ser continuamente verificados em busca de vulnerabilidades de segurança.\

Qual solução atenderá a esse requisito com a MENOR sobrecarga operacional?

A. Ative o AWS Security Hub. Configure o Security Hub para verificar os nós EKS e o repositório ECR.

B. Ative o Amazon Inspector para verificar os nós EKS e o repositório ECR. **Mais votado**

C. Inicie uma nova instância do Amazon EC2 e instale uma ferramenta de varredura de vulnerabilidades do AWS Marketplace. Configure a instância do EC2 para varrer os nós EKS. Configure o Amazon ECR para realizar uma varredura básica ao enviar.

D. Instale o agente do Amazon CloudWatch nos nós do EKS. Configure o agente do CloudWatch para varredura contínua. Configure o Amazon ECR para executar uma varredura básica ao enviar.

479- Uma empresa precisa melhorar a confiabilidade de seu aplicativo de emissão de bilhetes. O aplicativo é executado em um cluster do Amazon Elastic Container Service (Amazon ECS). A empresa usa o Amazon CloudFront para servir o aplicativo. Um único serviço ECS do cluster ECS é a origem da distribuição do CloudFront.\

O aplicativo permite que apenas um número específico de usuários ativos entrem em um fluxo de compra de bilhetes. Esses usuários são identificados por um atributo criptografado em seu JSON Web Token (JWT). Todos os outros usuários são redirecionados para um módulo de sala de espera até que haja capacidade disponível para compra.\

O aplicativo está enfrentando altas cargas. O módulo de sala de espera está funcionando conforme o projetado, mas a carga na sala de espera está interrompendo a disponibilidade dos aplicativos.\
Essa interrupção está afetando negativamente as transações de venda de bilhetes do aplicativo.\

Qual solução fornecerá a MAIOR confiabilidade para transações de venda de bilhetes durante períodos de alta carga?

A. Crie um serviço separado no cluster ECS para a sala de espera. Use uma configuração de escalonamento separada. Certifique-se de que o serviço de emissão de tickets utilize as informações do JWT e encaminhe as solicitações adequadamente para o serviço da sala de espera.

B. Mova a aplicação para um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). Divida o módulo da sala de espera em um pod separado do pod de emissão de tíquetes. Torne o pod de emissão de tíquetes parte de um StatefulSet. Certifique-se de que o pod de emissão de tíquetes utilize as informações do JWT e encaminhe as solicitações adequadamente para o pod da sala de espera.

C. Crie um serviço separado no cluster ECS para a sala de espera. Use uma configuração de escalonamento separada. Crie uma função do CloudFront que inspecione as informações do JWT e encaminhe as solicitações adequadamente para o serviço de emissão de tickets ou para o serviço de sala de espera. **Mais votado**

D. Mova o aplicativo para um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). Divida o módulo da sala de espera em um pod separado do pod de emissão de tíquetes. Use o AWS App Mesh provisionando o controlador do App Mesh para o Kubernetes. Habilite a autenticação mTLS e a autenticação serviço a serviço para a comunicação entre o pod de emissão de tíquetes e o pod da sala de espera. Certifique-se de que o pod de emissão de tíquetes utilize as informações do JWT e encaminhe as solicitações adequadamente para o pod da sala de espera.

480- Um arquiteto de soluções está criando um modelo do AWS CloudFormation a partir de um ambiente AWS existente, não produtivo, criado manualmente. O modelo do CloudFormation pode ser destruído e recriado conforme necessário. O ambiente contém uma instância do Amazon EC2. A instância do EC2 tem um perfil de instância que a instância do EC2 usa para assumir uma função em uma conta pai.\

O arquiteto de soluções recria a função em um modelo do CloudFormation e usa o mesmo nome de função. Quando o modelo do CloudFormation é iniciado na conta filha, a instância do EC2 não pode mais assumir a função na conta pai devido a permissões insuficientes.\

O que o arquiteto de soluções deve fazer para resolver esse problema?

A. Na conta pai, edite a política de confiança para a função que a instância EC2 precisa assumir. Certifique-se de que o ARN da função de destino na instrução existente que permite a ação sts:AssumeRole esteja correto. Salve a política de confiança. **Mais votado**

B. Na conta pai, edite a política de confiança para a função que a instância EC2 precisa assumir. Adicione uma instrução que permita a ação sts:AssumeRole para o principal raiz da conta filha. Salve a política de confiança.

C. Atualize a pilha do CloudFormation novamente. Especifique apenas o recurso CAPABILITY_NAMED_IAM.

D. Atualize a pilha do CloudFormation novamente. Especifique os recursos CAPABILITY_IAM e CAPABILITY_NAMED_IAM.

481- O aplicativo web de uma empresa apresenta problemas de confiabilidade. O aplicativo atende clientes em todo o mundo. O aplicativo é executado em uma única instância do Amazon EC2 e realiza operações de leitura intensiva em um banco de dados Amazon RDS para MySQL.\

Durante uma carga alta, o aplicativo para de responder e exige uma reinicialização manual da instância do EC2. Um arquiteto de soluções deve aprimorar a confiabilidade do aplicativo.\

Qual solução atenderá a esse requisito com o MENOR esforço de desenvolvimento?

A. Crie uma distribuição do Amazon CloudFront. Especifique a instância do EC2 como a origem da distribuição. Configure uma implantação Multi-AZ para o banco de dados RDS para MySQL. Use a instância de banco de dados em espera para as operações de leitura intensiva.

B. Execute a aplicação em instâncias do EC2 que estejam em um grupo de Auto Scaling. Coloque as instâncias do EC2 atrás de um balanceador de carga Elastic Load Balancing (ELB). Substitua o serviço de banco de dados pelo Amazon Aurora. Use réplicas do Aurora para as operações de leitura intensiva. **Mais votado**

C. Implante o AWS Global Accelerator. Configure uma implantação Multi-AZ para o banco de dados RDS para MySQL. Use a instância de banco de dados em espera para as operações de leitura intensiva.

D. Migre o aplicativo para as funções do AWS Lambda. Crie réplicas de leitura para o banco de dados RDS para MySQL. Use as réplicas de leitura para as operações de leitura intensiva.

482- Uma empresa precisa usar um servidor habilitado para SFTP da AWS Transfer Family com um bucket do Amazon S3 para receber atualizações de um fornecedor de dados terceirizado. Os dados são criptografados com criptografia Pretty Good Privacy (PGP). A empresa precisa de uma solução que descriptografe os dados automaticamente após o recebimento.\
Um arquiteto de soluções usará um fluxo de trabalho gerenciado da Transfer Family. A empresa criou uma função de serviço do IAM usando uma política do IAM que permite acesso ao AWS Secrets Manager e ao bucket do S3. A relação de confiança da função permite que o serviço de transferência amazonaws.com assuma a função.\

O que o arquiteto de soluções deve fazer em seguida para concluir a solução de descriptografia automática?

A. Armazene a chave pública PGP no Gerenciador de Segredos. Adicione uma etapa nominal no fluxo de trabalho gerenciado pelo Transfer Family para descriptografar arquivos. Configure os parâmetros de criptografia PGP na etapa nominal. Associe o fluxo de trabalho ao servidor do Transfer Family.

B. Armazene a chave privada PGP no Gerenciador de Segredos. Adicione uma etapa de tratamento de exceções no fluxo de trabalho gerenciado do Transfer Family para descriptografar arquivos. Configure os parâmetros de criptografia PGP no manipulador de exceções. Associe o fluxo de trabalho ao usuário SFTP.

C. Armazene a chave privada PGP no Gerenciador de Segredos. Adicione uma etapa nominal no fluxo de trabalho gerenciado pelo Transfer Family para descriptografar arquivos. Configure os parâmetros de descriptografia PGP na etapa nominal. Associe o fluxo de trabalho ao servidor do Transfer Family. **Mais votado**

D. Armazene a chave pública PGP no Gerenciador de Segredos. Adicione uma etapa de tratamento de exceções no fluxo de trabalho gerenciado pelo Transfer Family para descriptografar arquivos. Configure os parâmetros de descriptografia PGP no manipulador de exceções. Associe o fluxo de trabalho ao usuário SFTP.

483- Uma empresa está migrando a infraestrutura de seu jogo multijogador massivo para a AWS. O aplicativo do jogo apresenta um placar onde os jogadores podem ver as classificações em tempo real. O placar requer leituras de microssegundos e latências de gravação de um dígito em milissegundos. Os conjuntos de dados têm tamanho de terabytes de um dígito e devem estar disponíveis para aceitar gravações em menos de um minuto caso ocorra uma falha no nó primário.\

A empresa precisa de uma solução na qual os dados possam persistir para processamento analítico posterior por meio de um pipeline de dados.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

B. Crie um banco de dados Amazon ROS com uma réplica de leitura. Configure o aplicativo para direcionar as gravações para o endpoint de gravação. Configure o aplicativo para direcionar as leituras para o endpoint de leitura.

C. Crie um cluster do Amazon MemoryDB para Redis no modo Muit-AZ Configure o aplicativo para interagir com o nó primário. **Mais votado**

D. Crie vários nós Redis em instâncias do Amazon EC2 distribuídas por diversas Zonas de Disponibilidade. Configure backups para o Amazon S3.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/49/)

484- Uma empresa executa diversos aplicativos na Nuvem AWS. Os aplicativos são específicos para unidades de negócios distintas na empresa. A empresa executa os componentes dos aplicativos em diversas contas da AWS que estão em uma organização no AWS Organizations.\

Cada recurso de nuvem na organização da empresa possui uma tag chamada BusinessUnit. Cada tag já possui o valor apropriado do nome da unidade de negócios.\

A empresa precisa alocar seus custos de nuvem para diferentes unidades de negócios. A empresa também precisa visualizar os custos de nuvem para cada unidade de negócios.\

Qual solução atenderá a esses requisitos?

A. Na conta de gerenciamento da organização, crie uma tag de alocação de custos chamada BusinessUnit. Também na conta de gerenciamento, crie um bucket do Amazon S3 e um Relatório de Custo e Uso da AWS (AWS CUR). Configure o bucket do S3 como destino para o AWS CUR. Na conta de gerenciamento, consulte os dados do AWS CUR usando o Amazon Athena. Use o Amazon QuickSight para visualização. **Mais votado**

B. Em cada conta de membro, crie uma tag de alocação de custos chamada BusinessUnit. Na conta de gerenciamento da organização, crie um bucket do Amazon S3 e um Relatório de Custo e Uso da AWS (AWS CUR). Configure o bucket do S3 como destino para o AWS CUR. Crie um painel do Amazon CloudWatch para visualização.

C. Na conta de gerenciamento da organização, crie uma tag de alocação de custos chamada BusinessUnit. Em cada conta de membro, crie um bucket do Amazon S3 e um Relatório de Custo e Uso da AWS (AWS CUR). Configure cada bucket do S3 como destino para seu respectivo AWS CUR. Na conta de gerenciamento, crie um painel do Amazon CloudWatch para visualização.

D. Em cada conta de membro, crie uma tag de alocação de custos chamada BusinessUnit. Também em cada conta de membro, crie um bucket do Amazon S3 e um Relatório de Custo e Uso da AWS (AWS CUR). Configure cada bucket do S3 como destino para seu respectivo AWS CUR. Na conta de gerenciamento, consulte os dados do AWS CUR usando o Amazon Athena. Use o Amazon QuickSight para visualização.

485- Uma empresa de serviços públicos deseja coletar dados de uso a cada 5 minutos de seus medidores inteligentes para facilitar a medição por tempo de uso. Quando um medidor envia dados para a AWS, eles são enviados para o Amazon API Gateway, processados por uma função do AWS Lambda e armazenados em uma tabela do Amazon DynamoDB. Durante a fase piloto, as funções do Lambda levavam de 3 a 5 segundos para serem concluídas.\

À medida que mais medidores inteligentes são implantados, os engenheiros notam que as funções do Lambda estão levando de 1 a 2 minutos para serem concluídas. A duração das funções também está aumentando à medida que novos tipos de métricas são coletados dos dispositivos. Há muitos erros de ProvisionedThroughputExceededException ao executar operações PUT no DynamoDB, e também há muitos erros de TooManyRequestsException no Lambda.\

Qual combinação de alterações resolverá esses problemas? (Escolha duas.)

A. Aumente as unidades de capacidade de gravação na tabela do DynamoDB. **Mais votado**

B. Aumente a memória disponível para as funções Lambda.

C. Aumente o tamanho da carga útil dos medidores inteligentes para enviar mais dados.

D. Transmita os dados para um fluxo de dados do Amazon Kinesis a partir do API Gateway e processe os dados em lotes. **Mais votado**

E. Coletar dados em uma fila FIFO do Amazon SQS, que aciona uma função Lambda para processar cada mensagem

486- Uma empresa concluiu recentemente com sucesso uma prova de conceito do Amazon WorkSpaces. Um arquiteto de soluções precisa tornar a solução altamente disponível em duas regiões da AWS. O Amazon WorkSpaces está implantado em uma região de failover e uma zona hospedada está implantada no Amazon Route 53.\

O que o arquiteto de soluções deve fazer para configurar a alta disponibilidade da solução?

A. Crie um alias de conexão na região primária e na região de failover. Associe os aliases de conexão a um diretório em cada região. Crie uma política de roteamento de failover do Route 53. Defina "Avaliar integridade do destino" como "Sim". **Mais votado**

B. Crie um alias de conexão na região primária e na região de failover. Associe os aliases de conexão a um diretório na região primária. Crie uma política de roteamento de resposta multivalor do Route 53.

C. Crie um alias de conexão na região primária. Associe o alias de conexão a um diretório na região primária. Crie uma política de roteamento ponderado do Route 53.

D. Crie um alias de conexão na região primária. Associe o alias de conexão a um diretório na região de failover. Crie uma política de roteamento de failover do Route 53. Defina "Avaliar integridade do destino" como "Sim".

487- Uma empresa planeja migrar diversas VMs de um ambiente local para a AWS. A empresa precisa de uma avaliação inicial do ambiente local antes da migração, uma visualização das dependências entre os aplicativos executados nas VMs e um relatório que forneça uma avaliação do ambiente local.\

Para obter essas informações, a empresa iniciou uma solicitação de avaliação do Migration Evaluator. A empresa tem a capacidade de instalar o software coletor em seu ambiente local sem quaisquer restrições.\

Qual solução fornecerá à empresa as informações necessárias com a MENOR sobrecarga operacional?

A. Instale o Agente de Descoberta de Aplicativos da AWS em cada VM local. Após o término do período de coleta de dados, use o AWS Migration Hub para visualizar as dependências do aplicativo. Baixe o relatório de avaliação do Quick Insights no Migration Hub. **Mais votado**

B. Instale o Migration Evaluator Collector em cada VM local. Após o término do período de coleta de dados, use o Migration Evaluator para visualizar as dependências do aplicativo. Baixe e exporte a lista de servidores descobertos do Migration Evaluator. Carregue a lista no Amazon QuickSight. Quando o relatório do QuickSight for gerado, baixe o relatório de avaliação do Quick Insights.

C. Configure o Coletor sem Agente do AWS Application Discovery Service no ambiente local. Após o término do período de coleta de dados, use o AWS Migration Hub para visualizar as dependências do aplicativo. Exporte a lista de servidores descobertos do Application Discovery Service. Carregue a lista no Migration Evaluator. Após a geração do relatório do Migration Evaluator, baixe a avaliação do Quick Insights.

D. Configure o Coletor do Migration Evaluator no ambiente local. Instale o Agente de Descoberta de Aplicativos da AWS em cada VM. Após o término do período de coleta de dados, use o AWS Migration Hub para visualizar as dependências do aplicativo. Baixe o relatório de avaliação do Quick Insights do Migration Evaluator.

488- Uma empresa hospeda sua API principal na AWS usando uma API do Amazon API Gateway e funções do AWS Lambda que contêm a lógica para os métodos da API. Os aplicativos internos da empresa usam a API para funcionalidades principais e lógica de negócios. Os clientes da empresa usam a API para acessar dados de suas contas. Vários clientes também têm acesso a uma API legada que está sendo executada em uma única instância autônoma do Amazon EC2.\

A empresa deseja aumentar a segurança dessas APIs para prevenir ataques de negação de serviço (DoS), verificar vulnerabilidades e proteger contra explorações comuns.\

O que um arquiteto de soluções deve fazer para atender a esses requisitos?

A. Use o AWS WAF para proteger ambas as APIs. Configure o Amazon Inspector para analisar a API legada. Configure o Amazon GuardDuty para monitorar tentativas maliciosas de acesso às APIs.

B. Use o AWS WAF para proteger a API do API Gateway. Configure o Amazon Inspector para analisar ambas as APIs. Configure o Amazon GuardDuty para bloquear tentativas maliciosas de acesso às APIs.

C. Use o AWS WAF para proteger a API do API Gateway. Configure o Amazon Inspector para analisar a API legada. Configure o Amazon GuardDuty para monitorar tentativas maliciosas de acesso às APIs. **Mais votado**

D. Use o AWS WAF para proteger o AP do API Gateway! Configure o Amazon Inspector para proteger a API legada. Configure o Amazon GuardDuty para bloquear tentativas maliciosas de acesso às APIs.

489- Uma empresa está executando uma aplicação de e-commerce sem servidor na AWS. A aplicação utiliza o Amazon API Gateway para invocar funções Java do AWS Lambda. As funções Lambda se conectam a um banco de dados Amazon RDS para MySQL para armazenar dados.\

Durante um evento de vendas recente, um aumento repentino no tráfego da web resultou em baixo desempenho da API e falhas na conexão com o banco de dados. A empresa precisa implementar uma solução para minimizar a latência das funções Lambda e suportar picos de tráfego.\

Qual solução atenderá a esses requisitos com a MENOR quantidade de alterações na aplicação?

A. Atualize o código das funções Lambda para que elas abram a conexão com o banco de dados fora do manipulador de funções. Aumente a simultaneidade provisionada para as funções Lambda.

B. Crie um endpoint do RDS Proxy para o banco de dados. Armazene os segredos do banco de dados no AWS Secrets Manager. Configure as permissões necessárias do IAM. Atualize as funções do Lambda para se conectar ao endpoint do RDS Proxy. Aumente a simultaneidade provisionada para as funções do Lambda. **Mais votado**

C. Crie um grupo de parâmetros personalizado. Aumente o valor do parâmetro max_connections. Associe o grupo de parâmetros personalizado à instância do RDS DB e agende uma reinicialização. Aumente a simultaneidade reservada para as funções Lambda.

D. Crie um endpoint do RDS Proxy para o banco de dados. Armazene os segredos do banco de dados no AWS Secrets Manager. Configure as permissões necessárias do IAM. Atualize as funções do Lambda para se conectar ao endpoint do RDS Proxy. Aumente a simultaneidade reservada para as funções do Lambda.

490- Uma empresa exige que toda a conectividade interna de aplicativos utilize endereços IP privados. Para facilitar essa política, um arquiteto de soluções criou endpoints de interface para se conectar aos serviços públicos da AWS. Durante os testes, o arquiteto de soluções observa que os nomes dos serviços estão sendo resolvidos para endereços IP públicos e que os serviços internos não conseguem se conectar aos endpoints de interface.\

Qual medida o arquiteto de soluções deve tomar para resolver esse problema?

A. Atualize a tabela de rotas de sub-rede com uma rota para o ponto de extremidade da interface.

B. Habilite a opção DNS privado nos atributos da VPC. **Mais votado**

C. Configure o grupo de segurança no ponto de extremidade da interface para permitir a conectividade com os serviços da AWS.

D. Configure uma zona hospedada privada do Amazon Route 53 com um encaminhador condicional para o aplicativo interno.

491- Uma empresa está desenvolvendo uma aplicação sensível à latência. Parte da aplicação inclui diversas funções do AWS Lambda que precisam ser inicializadas o mais rápido possível. As funções do Lambda são escritas em Java e contêm código de inicialização fora dos manipuladores para carregar bibliotecas, inicializar classes e gerar IDs exclusivos.\

Qual solução atenderá ao requisito de desempenho de inicialização com a MAIOR relação custo-benefício?

A. Mova todo o código de inicialização para os manipuladores de cada função do Lambda. Ative o SnapStart do Lambda para cada função do Lambda. Configure o SnapStart para referenciar a versão $LATEST de cada função do Lambda.

B. Publique uma versão de cada função Lambda. Crie um alias para cada função Lambda. Configure cada alias para apontar para sua versão correspondente. Defina uma configuração de simultaneidade provisionada para cada função Lambda para apontar para o alias correspondente.

C. Publique uma versão de cada função Lambda. Defina uma configuração de simultaneidade provisionada para cada função Lambda, apontando para a versão correspondente. Ative o Lambda SnapStar para as versões publicadas das funções Lambda.

D. Atualize as funções do Lambda para adicionar um gancho pré-snapshot. Mova o código que gera IDs exclusivos para os manipuladores. Publique uma versão de cada função do Lambda. Ative o Lambda SnapStart para as versões publicadas das funções do Lambda. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

492- Um arquiteto de soluções está importando uma VM de um ambiente local usando o recurso de importação de VMs do Amazon EC2 do AWS Import/Export. O arquiteto de soluções criou uma AMI e provisionou uma instância do Amazon EC2 baseada nessa AMI. A instância do EC2 é executada dentro de uma sub-rede pública em uma VPC e tem um endereço IP público atribuído. A instância do\

EC2 não aparece como uma instância gerenciada no console do AWS Systems Manager.\

Qual combinação de etapas o arquiteto de soluções deve seguir para solucionar esse problema? (Escolha duas.)

A. Verifique se o Systems Manager Agent está instalado na instância e em execução. **Mais votado**

B. Verifique se a instância recebeu uma função do IAM apropriada para o Systems Manager. **Mais votado**

C. Verifique a existência de um endpoint VPC na VPC.

D. Verifique se o AWS Application Discovery Agent está configurado.

E. Verifique a configuração correta das funções vinculadas ao serviço para o Systems Manager.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

493- Uma empresa está usando o AWS CloudFormation como ferramenta de implantação para todos os aplicativos. Ele prepara todos os binários e modelos de aplicativos em buckets do Amazon S3 com controle de versão habilitado. Os desenvolvedores têm acesso a uma instância do Amazon EC2 que hospeda o ambiente de desenvolvimento integrado (IDE). Os desenvolvedores baixam os binários do aplicativo do Amazon S3 para a instância do EC2, fazem alterações e carregam os binários para um bucket do S3 após executar os testes de unidade localmente. Os desenvolvedores desejam aprimorar o mecanismo de implantação existente e implementar CI/CD usando o AWS CodePipeline.\

Os desenvolvedores têm os seguintes requisitos:\
• Usar o AWS CodeCommit para controle de origem.\
• Automatizar testes de unidade e varredura de segurança.\
• Alertar os desenvolvedores quando os testes de unidade falharem.\
• Ativar e desativar recursos do aplicativo e personalizar a implantação dinamicamente como parte do CI/CD.\
• Solicitar a aprovação do desenvolvedor líder antes de implantar um aplicativo.\

Qual solução atenderá a esses requisitos?

A. Use o AWS CodeBuild para executar testes unitários e varreduras de segurança. Use uma regra do Amazon EventBridge para enviar alertas do Amazon SNS aos desenvolvedores quando os testes unitários falharem. Escreva construções do AWS Cloud Development Kit (AWS CDK) para diferentes recursos da solução e use um arquivo de manifesto para ativar e desativar recursos na aplicação AWS CDK. Use uma etapa de aprovação manual no pipeline para permitir que o desenvolvedor líder aprove as aplicações. **Mais votado**

B. Use o AWS Lambda para executar testes unitários e varreduras de segurança. Use o Lambda em uma etapa subsequente do pipeline para enviar alertas do Amazon SNS aos desenvolvedores quando os testes unitários falharem. Escreva plugins do AWS Amplify para diferentes recursos da solução e utilize prompts do usuário para ativar e desativar recursos. Use o Amazon SES no pipeline para permitir que o desenvolvedor líder aprove os aplicativos.

C. Use o Jenkins para executar testes unitários e varreduras de segurança. Use uma regra do Amazon EventBridge no pipeline para enviar alertas do Amazon SES aos desenvolvedores quando os testes unitários falharem. Use pilhas aninhadas do AWS CloudFormation para diferentes recursos e parâmetros da solução para ativar e desativar recursos. Use o AWS Lambda no pipeline para permitir que o desenvolvedor líder aprove os aplicativos.

D. Use o AWS CodeDeploy para executar testes unitários e varreduras de segurança. Use um alarme do Amazon CloudWatch no pipeline para enviar alertas do Amazon SNS aos desenvolvedores quando os testes unitários falharem. Use imagens do Docker para diferentes recursos da solução e a AWS CLI para ativar e desativar recursos. Use uma etapa de aprovação manual no pipeline para permitir que o desenvolvedor líder aprove os aplicativos.

494- Uma empresa global de comércio eletrônico possui diversos data centers ao redor do mundo. Com o crescimento de seus dados armazenados, a empresa precisa configurar uma solução para fornecer armazenamento escalável para aplicativos de arquivos locais legados. A empresa deve ser capaz de fazer cópias pontuais dos volumes usando o AWS Backup e manter o acesso de baixa latência aos dados acessados com frequência. A empresa também precisa ter volumes de armazenamento que possam ser montados como dispositivos iSCSI (Internet Small Computer System Interface) a partir dos servidores de aplicativos locais da empresa.\

Qual solução atenderá a esses requisitos?

A. Provisione um gateway de fita do AWS Storage Gateway. Configure o gateway de fita para armazenar dados em um bucket do Amazon S3. Implante o AWS Backup para fazer cópias pontuais dos volumes.

B. Provisione um Amazon FSx File Gateway e um Amazon S3 File Gateway. Implante o AWS Backup para fazer cópias pontuais dos dados.

C. Provisione um gateway de volume do AWS Storage Gateway em modo cache. Faça backup dos volumes locais do Storage Gateway com o AWS Backup. **Mais votado**

D. Provisione um gateway de arquivos do AWS Storage Gateway em modo cache. Implante o AWS Backup para fazer cópias pontuais dos volumes.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

495- Uma empresa possui um aplicativo que utiliza o AWS Key Management Service (AWS KMS) para criptografar e descriptografar dados. O aplicativo armazena dados em um bucket do Amazon S3 em uma região da AWS. As políticas de segurança da empresa exigem que os dados sejam criptografados antes de serem inseridos no bucket do S3. O aplicativo deve descriptografar os dados ao ler arquivos do bucket do S3.\

A empresa replica o bucket do S3 para outras regiões. Um arquiteto de soluções deve projetar uma solução para que o aplicativo possa criptografar e descriptografar dados entre regiões. O aplicativo deve usar a mesma chave para descriptografar os dados em cada região.\

Qual solução atenderá a esses requisitos?

A. Crie uma chave primária multirregional do KMS. Use a chave primária multirregional do KMS para criar uma chave de réplica multirregional do KMS em cada região adicional onde o aplicativo estiver em execução. Atualize o código do aplicativo para usar a chave de réplica específica em cada região. **Mais votado**

B. Crie uma nova chave KMS gerenciada pelo cliente em cada região adicional onde o aplicativo estiver em execução. Atualize o código do aplicativo para usar a chave KMS específica em cada região.

C. Use a Autoridade de Certificação Privada da AWS para criar uma nova autoridade de certificação (CA) na região primária. Emita um novo certificado privado da CA para o URL do site do aplicativo. Compartilhe a CA com as regiões adicionais usando o AWS Resource Access Manager (AWS RAM). Atualize o código do aplicativo para usar os certificados de CA compartilhados em cada região.

D. Use o AWS Systems Manager Parameter Store para criar um parâmetro em cada região adicional onde o aplicativo estiver em execução. Exporte o material da chave da chave KMS na região primária. Armazene o material da chave no parâmetro em cada região. Atualize o código do aplicativo para usar os dados da chave do parâmetro em cada região.

496- Uma empresa hospeda um aplicativo que utiliza várias instâncias do Amazon EC2 em um grupo de Auto Scaling por trás de um Application Load Balancer (ALB). Durante a inicialização das instâncias do EC2, elas executam scripts de dados do usuário para baixar conteúdo crítico para o aplicativo de um bucket do Amazon S3.\

As instâncias do EC2 estão sendo iniciadas corretamente. No entanto, após um período, as instâncias do EC2 são encerradas com a seguinte mensagem de erro: "Uma instância foi retirada de serviço em resposta a uma falha na verificação de integridade do sistema ELB". As instâncias do EC2 continuam sendo iniciadas e encerradas devido a eventos de Auto Scaling em um loop infinito.\

A única alteração recente na implantação é que a empresa adicionou uma grande quantidade de conteúdo crítico ao bucket do S3. A empresa não deseja alterar os scripts de dados do usuário em produção.\

O que um arquiteto de soluções deve fazer para que o ambiente de produção possa ser implantado com sucesso?

A. Aumente o tamanho das instâncias do EC2.

B. Aumente o tempo limite de verificação de integridade do ALB.

C. Altere o caminho de verificação de integridade do ALB.

D. Aumente o período de carência da verificação de integridade para o grupo de dimensionamento automático. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

497- Uma empresa precisa migrar alguns bancos de dados Oracle locais para a AWS. A empresa optou por manter alguns dos bancos de dados locais por motivos de conformidade comercial.\

Os bancos de dados locais contêm dados espaciais e executam tarefas cron para manutenção. A empresa precisa se conectar aos sistemas locais diretamente da AWS para consultar dados como uma tabela externa.\

Qual solução atenderá a esses requisitos?

A. Crie tabelas globais do Amazon DynamoDB com o dimensionamento automático habilitado. Use a AWS Schema Conversion Tool (AWS SCT) e o AWS Database Migration Service (AWS DMS) para mover os dados locais para o DynamoDB. Crie uma função do AWS Lambda para mover os dados espaciais para o Amazon S3. Consulte os dados usando o Amazon Athena. Use o Amazon EventBridge para agendar trabalhos no DynamoDB para manutenção. Use o Amazon API Gateway para suporte a tabelas externas.

B. Crie uma instância de banco de dados do Amazon RDS para Microsoft SQL Server. Use a replicação nativa para mover os dados locais para a instância de banco de dados. Use a AWS Schema Conversion Tool (AWS SCT) para modificar o esquema do SQL Server conforme necessário após a replicação. Mova os dados espaciais para o Amazon Redshift. Use procedimentos armazenados para manutenção do sistema. Crie crawlers do AWS Glue para se conectar aos bancos de dados Oracle locais para suporte a tabelas externas.

C. Inicie instâncias do Amazon EC2 para hospedar os bancos de dados Oracle. Coloque as instâncias do EC2 em um grupo de Auto Scaling. Use o AWS Application Migration Service para mover os dados locais para as instâncias do EC2 e para sincronização bidirecional de captura de dados alterados (CDC) em tempo real. Use o suporte nativo a dados espaciais da Oracle. Crie uma função do AWS Lambda para executar tarefas de manutenção como parte de um fluxo de trabalho do AWS Step Functions. Crie um gateway de internet para suporte a tabelas externas.

D. Crie uma instância de banco de dados do Amazon RDS para PostgreSQL. Use a AWS Schema Conversion Tool (AWS SCT) e o AWS Database Migration Service (AWS DMS) para mover os dados do ambiente local para a instância de banco de dados. Use o suporte nativo a dados espaciais do PostgreSQL. Execute tarefas cron na instância de banco de dados para manutenção. Use o AWS Direct Connect para conectar a instância de banco de dados ao ambiente local para suporte a tabelas externas. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

498- A Accompany executa uma aplicação no Amazon EC2 e no AWS Lambda. A aplicação armazena dados temporários no Amazon S3. Os objetos do S3 são excluídos após 24 horas.\

A empresa implanta novas versões da aplicação iniciando pilhas do AWS CloudFormation. As pilhas criam os recursos necessários. Após validar uma nova versão, a empresa exclui a pilha antiga. A exclusão de uma pilha de desenvolvimento antiga falhou recentemente. Um arquiteto de soluções precisa resolver esse problema sem grandes mudanças na arquitetura.\

Qual solução atenderá a esses requisitos?

A. Crie uma função Lambda para excluir objetos de um bucket do S3. Adicione a função Lambda como um recurso personalizado na pilha do CloudFormation com um atributo DependsOn que aponta para o recurso do bucket do S3. **Mais votado**

B. Modifique a pilha do CloudFormation para anexar um atributo DeletionPolicy com um valor de Delete ao bucket do S3.

C. Atualize a pilha do CloudFormation para adicionar um atributo DeletionPolicy com um valor de Snapshot para o recurso do bucket S3

D. Atualize o modelo do CloudFormation para criar um sistema de arquivos Amazon Elastic File System (Amazon EFS) para armazenar arquivos temporários em vez do Amazon S3. Configure as funções do Lambda para serem executadas na mesma VPC que o sistema de arquivos EFS.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/50/)

499- Uma empresa possui um aplicativo que armazena vídeos enviados por usuários em um bucket do Amazon S3 que utiliza o armazenamento S3 Standard. Os usuários acessam os vídeos com frequência nos primeiros 180 dias após o upload. O acesso após 180 dias é raro. Usuários nomeados e anônimos acessam os vídeos.\

A maioria dos vídeos tem mais de 100 MB. Os usuários frequentemente têm baixa conectividade com a internet ao enviar vídeos, resultando em falhas nos uploads. A empresa utiliza uploads multipartes para os vídeos.\

Um arquiteto de soluções precisa otimizar os custos do S3 do aplicativo.\

Qual combinação de ações atenderá a esses requisitos? (Escolha duas.)

A. Configure o bucket S3 para ser um bucket de pagamento do solicitante.

B. Use o S3 Transfer Acceleration para enviar os vídeos para o bucket S3.

C. Crie uma configuração de ciclo de vida do S3 para expirar uploads multipartes incompletos 7 dias após o início. **Mais votado**

D. Crie uma configuração do S3 Lifecycle para fazer a transição de objetos para o S3 Glacier Instant Retrieval após 1 dia.

E. Crie uma configuração de ciclo de vida do S3 para fazer a transição de objetos para o S3 Standard-IA (S3 Standard-IA) após 180 dias.

500- Uma empresa executa um aplicativo web de comércio eletrônico na AWS. O aplicativo web é hospedado como um site estático no Amazon S3 com o Amazon CloudFront para entrega de conteúdo. Uma\
API do Amazon API Gateway invoca funções do AWS Lambda para lidar com solicitações de usuários e processamento de pedidos para o aplicativo web. As funções Lambda armazenam dados em um cluster de banco de dados do Amazon ROS para MySQL que usa instâncias sob demanda. O uso do cluster de banco de dados tem sido consistente nos últimos 12 meses.\

Recentemente, o site sofreu injeções de SQL e tentativas de exploração da web. Os clientes também relatam que o tempo de processamento de pedidos aumentou durante os períodos de pico de uso. Durante esses períodos, as funções Lambda frequentemente têm inicializações a frio. À medida que a empresa cresce, ela precisa garantir escalabilidade e acesso de baixa latência durante picos de tráfego. A empresa também deve otimizar os custos do banco de dados e adicionar proteção contra injeções de SQL e tentativas de exploração da web.\

Qual solução atenderá a esses requisitos?

A. Configure as funções do Lambda para aumentar o tempo limite durante os períodos de pico. Use Instâncias Reservadas do RDS para o banco de dados. Use o CloudFront e assine o AWS Shield Advanced para se proteger contra injeção de SQL e tentativas de exploração da web.

B. Aumentar a memória das funções Lambda, migrar o banco de dados para o Amazon Redshift. Integrar o Amazon Inspector com o CloudFront para proteger contra injeção de SQL e tentativas de exploração da web.

C. Use funções Lambda com simultaneidade provisionada para computação durante períodos de pico. Faça a transição para o Amazon Aurora Serverless para o banco de dados. Use o CloudFront e assine o AWS Shield Advanced para se proteger contra injeção de SQL e tentativas de exploração da web.

D. Use funções Lambda com simultaneidade provisionada para computação durante períodos de pico. Use Instâncias Reservadas do RDS para o banco de dados. Integre o AWS WAF com o CloudFront para proteção contra injeção de SQL e tentativas de exploração da web. **Mais votado**

501- Uma empresa executa uma aplicação web em uma única instância do Amazon EC2. Os usuários finais experimentam um desempenho lento da aplicação durante os períodos de pico de uso, quando a utilização da CPU é consistentemente superior a 95%.\

Um script de dados do usuário instala os pacotes personalizados necessários na instância do EC2. O processo de inicialização da instância leva vários minutos.\

A empresa está criando um grupo de Auto Scaling que possui grupos de instâncias mistos, CPUs variadas e um limite de capacidade máxima. O grupo de Auto Scaling usará um modelo de inicialização para várias opções de configuração. A empresa precisa diminuir a latência da aplicação quando novas instâncias são iniciadas durante o Auto Scaling.\

Qual solução atenderá a esses requisitos?

A. Use uma política de dimensionamento preditivo. Use uma política de manutenção de instância para executar o script de dados do usuário. Defina o tempo de aquecimento padrão da instância como 0 segundos.

B. Use uma política de escalonamento dinâmico. Use ganchos de ciclo de vida para executar o script de dados do usuário. Defina o tempo de aquecimento padrão da instância como 0 segundos.

C. Use uma política de dimensionamento preditivo. Habilite pools quentes para o grupo de dimensionamento automático. Use uma política de manutenção de instância para executar o script de dados do usuário.

D. Use uma política de escalonamento dinâmico. Habilite pools quentes para o grupo de escalonamento automático. Use ganchos de ciclo de vida para executar o script de dados do usuário. **Mais votado**

502- Uma empresa precisa migrar sua frota de bancos de dados locais para o Amazon RDS. Atualmente, a empresa utiliza uma combinação de bancos de dados Microsoft SQL Server, MySQL e Oracle. Alguns bancos de dados possuem esquemas e procedimentos armazenados personalizados.\

Qual combinação de etapas a empresa deve adotar para a migração? (Escolha duas.)

A. Use o Migration Evaluator Quick Insights para analisar os bancos de dados de origem e identificar os procedimentos armazenados que precisam ser migrados.

B. Use o AWS Application Migration Service para analisar os bancos de dados de origem e identificar os procedimentos armazenados que precisam ser migrados.

C. Use a AWS Schema Conversion Tool (AWS SCT) para analisar os bancos de dados de origem em busca de alterações necessárias **Mais votado**

D. Use o AWS Database Migration Service (AWS DMS) para migrar os bancos de dados de origem para o Amazon RDS. **Mais votado**

E. Use o AWS DataSync para migrar os dados dos bancos de dados de origem para o Amazon RDS.

503- Uma empresa está migrando sua plataforma de blog para a AWS. Os servidores locais da empresa se conectam à AWS por meio de uma conexão VPN Site-to-Site da AWS. O conteúdo do blog é atualizado diversas vezes ao dia por vários autores e é disponibilizado a partir de um compartilhamento de arquivos em um servidor de armazenamento conectado à rede (NAS).\

A empresa precisa migrar a plataforma de blog sem atrasar as atualizações de conteúdo. A empresa implantou instâncias do Amazon EC2 em várias Zonas de Disponibilidade para executar a plataforma de blog por trás de um Balanceador de Carga de Aplicação. A empresa também precisa mover 200 TB de dados de arquivo de seus servidores locais para o Amazon S3 o mais rápido possível.\

Qual combinação de paradas atenderá a esses requisitos? (Escolha duas.)

A. Crie uma tarefa cron semanal no Amazon EventBridge. Use a tarefa cron para invocar uma função do AWS Lambda para atualizar as instâncias do EC2 a partir do servidor NAS.

B. Configurar um volume Multi-Attach do Amazon Elastic Block Store (Amazon EBS) para que as instâncias do EC2 compartilhem o acesso ao conteúdo. Escreva o código para sincronizar o volume do EBS com o servidor NAS semanalmente.

C. Monte um sistema de arquivos Amazon Elastic File System (Amazon EFS) nos servidores locais para atuar como servidor NAS. Copie os dados do blog para o sistema de arquivos EFS. Monte o sistema de arquivos EFS nas instâncias C2 para servir o conteúdo. **Mais votado**

D. Encomende um dispositivo otimizado para armazenamento AWS Snowball Edge. Copie os artefatos de dados estáticos para o dispositivo. Envie o dispositivo para a AWS. **Mais votado**

E. Encomende um dispositivo SSD AWS Snowcons. Copie os artefatos de dados estáticos para o dispositivo. Envie o dispositivo para a AWS.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/51/)

504- Uma empresa planeja migrar um aplicativo local legado para a AWS. O aplicativo é um aplicativo web Java executado no Apache Tomcat com um banco de dados PostgreSQL.\

A empresa não tem acesso ao código-fonte, mas pode implantar os arquivos Java Archive (JAR) do aplicativo. O aplicativo tem um tráfego maior no final de cada mês.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Inicie instâncias do Amazon EC2 em várias Zonas de Disponibilidade. Implante o Tomcat e o PostgreSQL em todas as instâncias usando os pontos de montagem do Amazon Elastic File System (Amazon EFS). Use o AWS Step Functions para implantar instâncias adicionais do EC2 e dimensioná-las para aumentar o tráfego.

B. Provisione o Amazon Elastic Kubernetes Service (Amazon EKS) em um grupo de Auto Scaling em várias regiões da AWS. Implante Tomcat e PostgreSQL nas imagens de contêiner. Use um balanceador de carga de rede para escalar e aumentar o tráfego.

C. Refatore a aplicação Java em contêineres baseados em Python. Use funções do AWS Lambda para a lógica da aplicação. Armazene os dados da aplicação em tabelas globais do Amazon DynamoDB. Use o AWS Storage Gateway e a simultaneidade do Lambda para escalar e aumentar o tráfego.

D. Use o AWS Elastic Beanstalk para implantar os servidores Tomcat com escalonamento automático em várias Zonas de Disponibilidade. Armazene os dados do aplicativo em um banco de dados Amazon RDS para PostgreSQL. Implante o Amazon CloudFront e um Application Load Balancer para escalar e aumentar o tráfego. **Mais votado**

505- Uma empresa está migrando sua plataforma de IoT local para a AWS. A plataforma consiste nos seguintes componentes:\

• Um cluster MongoDB como armazenamento de dados para todos os dados de IoT coletados e processados.\
• Um aplicativo que usa o Message Queuing Telemetry Transport (MQTT) para se conectar a dispositivos de IoT a cada 5 minutos para coletar dados.\
• Um aplicativo que executa tarefas periodicamente para gerar relatórios a partir dos dados de IoT. As tarefas levam de 120 a 600 segundos para serem concluídas.\
• Um aplicativo web executado em um servidor web. Os usuários finais usam o aplicativo web para gerar relatórios acessíveis ao público em geral.\

A empresa precisa migrar a plataforma para a AWS para reduzir a sobrecarga operacional e, ao mesmo tempo, manter o desempenho.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha três.)

A. Crie máquinas de estado do AWS Step Functions com tarefas AUS Lambda para preparar os relatórios e gravá-los no Amazon S3. Configure uma distribuição do Amazon CloudFront com origem S3 para servir os relatórios. **Mais votado**

B. Crie uma função do AWS Lambda. Programe a função do Lambda para se conectar aos dispositivos IoT, processar os dados e gravá-los no repositório de dados. Configure uma camada do Lambda para armazenar temporariamente mensagens para processamento.

C. Configure um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) com instâncias do Amazon EC2 para preparar os relatórios. Crie um controlador de entrada no cluster EKS para fornecer os relatórios.

D. Conecte os dispositivos IoT ao AWS IoT Core para publicar mensagens. Crie uma regra do AWS IoT que seja executada quando uma mensagem for recebida. Configure a regra para chamar uma função do AWS Lambda. Programe a função do Lambda para analisar, transformar e armazenar dados de mensagens do dispositivo no repositório de dados. **Mais votado**

E. Migre o cluster do MongoDB para o Amazon DocumentDB (com compatibilidade com o MongoDB). **Mais votado**

F. Migre o cluster do MongoDB para instâncias do Amazon EC2.

506- Uma empresa cria uma API do Amazon API Gateway e a compartilha com uma equipe de desenvolvimento externa. A API utiliza funções do AWS Lambda e é implantada em uma etapa denominada Produção.\

A equipe de desenvolvimento externa é a única consumidora da API. A API sofre aumentos repentinos de uso em momentos específicos, gerando preocupações com o aumento de custos. A empresa precisa limitar custos e uso sem retrabalhar as funções do Lambda.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Configure a API para enviar solicitações às filas do Amazon Simple Queue Service (Amazon SQS) em vez de diretamente para as funções do Lambda. Atualize as funções do Lambda para consumir mensagens das filas e processar as solicitações. Configure as filas para invocar as funções do Lambda quando novas mensagens chegarem.

B. Configure a simultaneidade provisionada para cada função do Lambda. Use o AWS Application Auto Scaling para registrar as funções do Lambda como alvos. Configure cronogramas de escalonamento para aumentar e diminuir a capacidade de acordo com as mudanças no uso da API.

C. Crie uma chave de API do API Gateway e uma ACL da Web regional do AWS WAF. Associe a ACL da Web à fase de produção. Adicione uma regra baseada em taxa à ACL da Web. Na regra, especifique o limite de taxa e uma agregação de solicitação personalizada que use o cabeçalho X-API-Key. Compartilhe a chave de API com a equipe de desenvolvimento externa.

D. Crie uma chave de API e um plano de uso para o API Gateway. Defina limites de limitação e cotas no plano de uso. Associe o plano de uso à fase de produção e à chave de API. Compartilhe a chave de API com a equipe de desenvolvimento externa.

507- Uma empresa de entretenimento hospeda um serviço de venda de ingressos em uma frota de instâncias Linux do Amazon EC2 que estão em um grupo de Auto Scaling. O serviço de venda de ingressos usa um arquivo de preços. O arquivo de preços é armazenado em um bucket do Amazon S3 com armazenamento S3 Standard. Uma solução central de precificação hospedada por terceiros atualiza o arquivo de preços.\

O arquivo de preços é atualizado a cada 1 a 15 minutos e contém milhares de itens. O arquivo de preços é baixado para cada instância do EC2 quando a instância é iniciada.\

As instâncias do EC2 ocasionalmente usam informações de preços desatualizadas, o que pode resultar em cobranças incorretas para os clientes.\

Qual solução resolverá esse problema com a MELHOR relação custo-benefício?

A. Crie uma função do AWS Lambda para atualizar uma tabela do Amazon DynamoDB com novos preços sempre que o arquivo de preços for atualizado. Atualize o serviço de emissão de bilhetes para usar o DynramoDB para consultar preços.

B. Crie uma função do AWS Lambda para atualizar um compartilhamento de arquivos do Amazon Elastic File System (Amazon EFS) com o arquivo de preços sempre que o arquivo for atualizado. Atualize o serviço de emissão de tickets para usar o Amazon EFS para acessar o arquivo de preços.

C. Carregue o Mountpoint para Amazon S3 na AMI das instâncias do EC2. Configure o Mountpoint para Amazon S3 para montar o bucket do S3 que contém o arquivo de preços. Atualize o serviço de emissão de tickets para apontar para o ponto de montagem e o caminho para acessar o objeto \$3. **Mais votado**

D. Crie um volume do Amazon Elastic Block Store (Amazon EBS). Use o EBS Multi-Attach para anexar o volume a cada instância do EC2. Quando uma nova instância do EC2 for iniciada, configure-a para atualizar o arquivo de preços no volume do EBS. Atualize o serviço de emissão de tickets para apontar para a nova fonte local.

508- Uma empresa possui uma aplicação que utiliza instâncias do Amazon EC2 em um grupo de Auto Scaling. O departamento de Garantia de Qualidade (QA) precisa lançar um grande número de ambientes de curta duração para testar a aplicação. Os ambientes da aplicação são atualmente lançados pelo gerente do departamento usando um modelo do AWS CloudFormation. Para lançar a pilha, o gerente usa uma função com permissão para usar as APIs do CloudFormation, EC2 e Auto Scaling. O gerente deseja permitir que os testadores iniciem seus próprios ambientes, mas não deseja conceder permissões amplas a cada usuário.\

Qual configuração atingiria esses objetivos?

A. Carregue o modelo do AWS CloudFormation no Amazon S3. Conceda aos usuários do departamento de QA permissão para assumir a função de gerente e adicione uma política que restrinja as permissões ao modelo e aos recursos que ele cria. Treine os usuários para iniciar o modelo a partir do console do CloudFormation.

B. Crie um produto do AWS Service Catalog a partir do modelo de ambiente. Adicione uma restrição de inicialização ao produto com a função existente. Conceda aos usuários do departamento de QA permissão para usar apenas as APIs do AWS Service Catalog. Treine os usuários para iniciar o modelo a partir do console do AWS Service Catalog. **Mais votado**

C. Carregue o modelo do AWS CloudFormation no Amazon S3. Conceda aos usuários do departamento de QA permissão para usar as APIs do CloudFormation e do S3, com condições que restrinjam as permissões ao modelo e aos recursos que ele cria. Treine os usuários para iniciar o modelo a partir do console do CloudFormation.

D. Crie uma aplicação do AWS Elastic Beanstalk a partir do modelo de ambiente. Conceda aos usuários do departamento de QA permissão para usar apenas as permissões do Elastic Beanstalk. Treine os usuários para iniciar ambientes do Elastic Beanstalk com a CLI do Elastic Beanstalk, passando a função existente para o ambiente como uma função de serviço.

509- Uma empresa está usando uma única região da AWS para seu site de comércio eletrônico. O site inclui uma aplicação web que roda em várias instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). O site também inclui uma tabela do Amazon DynamoDB. Um nome de domínio personalizado no Amazon Route 53 está vinculado ao ALB. A empresa criou um certificado SSL/TLS no AWS Certificate Manager (ACM) e anexou o certificado ao ALB. A empresa não está usando uma rede de entrega de conteúdo como parte de seu projeto.\

A empresa deseja replicar toda a sua pilha de aplicativos em uma segunda região para fornecer recuperação de desastres, planejar o crescimento futuro e fornecer tempo de acesso aprimorado aos usuários. Um arquiteto de soluções precisa implementar uma solução que atinja esses objetivos e minimize a sobrecarga administrativa.\

Qual combinação de etapas o arquiteto de soluções deve adotar para atender a esses requisitos? (Escolha três.)

A. Crie um modelo do AWS CloudFormation para o projeto de infraestrutura atual. Use parâmetros para valores importantes do sistema, incluindo a Região. Use o modelo do CloudFormation para criar a nova infraestrutura na segunda Região. **Mais votado**

B. Use o AWS Management Console para documentar o design da infraestrutura existente na primeira região e para criar a nova infraestrutura na segunda região.

C. Atualize o registro da zona hospedada do Route 53 para que o aplicativo use roteamento ponderado. Envie 50% do tráfego para o ALB em cada região.

D. Atualize o registro da zona hospedada do Route 53 para que o aplicativo use o roteamento baseado em latência. Envie tráfego para o ALB em cada região. **Mais votado**

E. Atualize a configuração da tabela existente do DynamoDB habilitando os Streams do DynamoDB. Adicione a segunda Região para criar uma tabela global. **Mais votado**

F. Crie uma nova tabela do DynamoDB. Habilite os Streams do DynamoDB para a nova tabela. Adicione a segunda Região para criar uma tabela global. Copie os dados da tabela existente do DynamoDB para a nova tabela em uma única operação.

510- Uma empresa deseja criar um único bucket do Amazon S3 para seus cientistas de dados armazenarem documentos relacionados ao trabalho. A empresa usa o AWS IAM Identity Center para autenticar todos os usuários. Um grupo para os cientistas de dados foi criado.\

A empresa deseja dar aos cientistas de dados acesso apenas ao seu próprio trabalho. A empresa também deseja criar relatórios mensais que mostrem quais documentos cada usuário acessou.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Crie um conjunto de permissões personalizado do IAM Identity Center para conceder aos cientistas de dados acesso a um prefixo de bucket do S3 que corresponda à tag de nome de usuário. Use uma política para limitar o acesso a caminhos com a condição \${aws:PrincipalTag/userName}/\*. **Mais votado**

B. Crie uma função do Centro de Identidade do IAM para o grupo de cientistas de dados que tem acesso de leitura e gravação no Amazon S3. Adicione uma política de bucket do S3 que permita acesso à função do Centro de Identidade do IAM.

C. Configure o AWS CloudTrail para registrar eventos de dados do S3 e entregar os logs a um bucket do S3. Use o Amazon Athena para executar consultas nos logs do CloudTrail no Amazon S3 e gerar relatórios. **Mais votado**

D. Configure o AWS CloudTrail para registrar eventos de gerenciamento do S3 no CloudWatch. Use o conector CloudWatch do Amazon Athena para consultar os logs e gerar relatórios.

E. Habilite o registro de acesso do S3 ao Sistema de Arquivos EMR (EMRFS). Use o Amazon S3 Select para consultar registros e gerar relatórios.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/51/)

511- Uma empresa hospeda um aplicativo de processamento de dados em instâncias do Amazon EC2. O aplicativo pesquisa um sistema de arquivos do Amazon Elastic File System (Amazon EFS) em busca de arquivos recém-carregados. Quando um novo arquivo é detectado, o aplicativo extrai dados do arquivo e executa a lógica para selecionar uma imagem de contêiner Docker para processá-lo. O aplicativo inicia a imagem de contêiner apropriada e passa o local do arquivo como parâmetro.\

O processamento de dados realizado pelo contêiner pode levar até 2 horas. Quando o processamento é concluído, o código executado dentro do contêiner grava o arquivo de volta no Amazon EFS e sai.\

A empresa precisa refatorar o aplicativo para eliminar as instâncias do EC2 que estão executando os contêineres.\

Qual solução atenderá a esses requisitos?

A. Crie um cluster do Amazon Elastic Container Service (Amazon ECS). Configure o processamento para ser executado como tarefas do AWS Fargate. Extraia a lógica de seleção de contêiner para ser executada como uma regra do Amazon EventBridge que inicia a tarefa Fargate apropriada. Configure a regra do EventBridge para ser executada quando arquivos forem adicionados ao sistema de arquivos do EFS.

B. Crie um cluster do Amazon Elastic Container Service (Amazon ECS). Configure o processamento para ser executado como tarefas do AWS Fargate. Atualize e conteinerize a lógica de seleção de contêineres para ser executada como um serviço Fargate que inicia a tarefa Fargate apropriada. Configure uma notificação de evento do EFS para invocar o serviço Fargate quando arquivos forem adicionados ao sistema de arquivos do EFS.

C. Crie um cluster do Amazon Elastic Container Service (Amazon ECS). Configure o processamento para ser executado como tarefas do AWS Fargate. Extraia a lógica de seleção de contêineres para ser executada como uma função do AWS Lambda que inicia a tarefa Fargate apropriada. Migre o armazenamento de uploads de arquivos para um bucket do Amazon S3. Atualize o código de processamento para usar o Amazon S3. Configure uma notificação de eventos do S3 para invocar a função do Lambda quando objetos forem criados. **Mais votado**

D. Crie imagens de contêiner do AWS Lambda para o processamento. Configure funções do Lambda para usar as imagens de contêiner. Extraia a lógica de seleção de contêiner para ser executada como uma função Lambda de decisão que invoca a função de processamento do Lambda apropriada. Migre o armazenamento de uploads de arquivos para um bucket do Amazon S3. Atualize o código de processamento para usar o Amazon S3. Configure uma notificação de evento do S3 para invocar a função Lambda de decisão quando objetos forem criados.

512- Uma empresa de mídia possui um repositório 30-T8 de vídeos de notícias digitais. Esses vídeos são armazenados em fita em uma biblioteca de fitas local e referenciados por um sistema de Gerenciamento de Ativos de Mídia (MAM). A empresa deseja enriquecer os metadados desses vídeos de forma automatizada e colocá-los em um catálogo pesquisável usando um recurso de MAM. A empresa deve ser capaz de pesquisar com base nas informações do vídeo, como objetos, elementos de cenário ou rostos de pessoas. Há um catálogo disponível que contém rostos de pessoas que apareceram nos vídeos, incluindo uma imagem de cada pessoa. A empresa gostaria de migrar esses vídeos para a AWS.\

A empresa possui uma conexão AWS Direct Connect de alta velocidade com a AWS e gostaria de mover o conteúdo de vídeo da solução MAM diretamente de seu sistema de arquivos atual.\

Como esses requisitos podem ser atendidos usando a MENOR quantidade de sobrecarga de gerenciamento contínuo e causando a MÍNIMA interrupção no sistema existente?

A. Configure um AWS Storage Gateway, um dispositivo de gateway de arquivos local. Use a solução MAM para extrair os vídeos do arquivo atual e enviá-los para o gateway de arquivos. Use o catálogo de faces para criar uma coleção no Amazon Rekognition. Crie uma função do AWS Lambda que invoque o SDK Javascript do Rekognition para que o Rekognition extraia o vídeo dos arquivos do Amazon S3 que suportam o gateway de arquivos, recupere os metadados necessários e envie os metadados para a solução MAM. **Mais votado**

B. Configure um AWS Storage Gateway e um dispositivo de gateway de fita no local. Use a solução MAM para extrair os vídeos do arquivo atual e enviá-los para o gateway de fita. Use o catálogo de faces para criar uma coleção no Amazon Rekognition. Crie uma função do AWS Lambda que invoque o SDK Javascript do Rekognition para que o Amazon Rekognition processe o vídeo no gateway de fita, recupere os metadados necessários e envie-os para a solução MAM.

C. Configure um fluxo de ingestão de vídeo usando o Amazon Kinesis Video Streams. Use o catálogo de faces para criar uma coleção no Amazon Rekognition. Transmita os vídeos da solução MAM para o Kinesis Video Streams. Configure o Amazon Rekognition para processar os vídeos transmitidos. Em seguida, use um consumidor de fluxo para recuperar os metadados necessários e envie-os para a solução MAM. Configure o fluxo para armazenar os vídeos no Amazon S3.

D. Configure uma instância do Amazon EC2 que execute as bibliotecas OpenCV. Copie os vídeos, imagens e catálogo de faces da biblioteca local para um volume do Amazon EBS montado nesta instância do EC2. Processe os vídeos para recuperar os metadados necessários e envie-os para a solução MAM, enquanto copia os arquivos de vídeo para um bucket do Amazon S3.

513- Uma empresa precisa otimizar o custo de um ambiente AWS que contém várias contas em uma organização no AWS Organizations. A empresa realizou atividades de otimização de custos há 3 anos e adquiriu Instâncias Reservadas Padrão do Amazon EC2 que expiraram recentemente.\

A empresa precisa de instâncias EC2 por mais 3 anos. Além disso, a empresa implantou uma nova carga de trabalho sem servidor.\

Qual estratégia proporcionará à empresa a MAIOR economia de custos?

A. Adquira as mesmas Instâncias Reservadas por um período adicional de 3 anos com pagamento integral à vista. Adquira um Plano de Economia de Computação de 3 anos com pagamento integral à vista na conta de gerenciamento para cobrir quaisquer custos adicionais de computação. **Mais votado**

B. Adquira um Plano Compute Savings de 1 ano sem pagamento inicial em cada conta de membro. Use as recomendações de Planos de Economia no console do AWS Cost Management para escolher o Plano Compute Savings.

C. Adquira um Plano de Economia de Instâncias do EC2 de 3 anos, sem pagamento inicial na conta de gerenciamento, para cobrir os custos do EC2 em cada região da AWS. Adquira um Plano de Economia de Computação de 3 anos, sem pagamento inicial na conta de gerenciamento, para cobrir quaisquer custos adicionais de computação.

D. Adquira um Plano de Economia de Instâncias do EC2 de 3 anos com pagamento antecipado em cada conta de membro. Use as recomendações de Planos de Economia no console de Gerenciamento de Custos da AWS para escolher o Plano de Economia de Instâncias do EC2.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/52/)

514- Uma empresa opera uma plataforma de distribuição de conteúdo estático que atende clientes globalmente. Os clientes consomem conteúdo de suas próprias contas na AWS.\

A empresa distribui seu conteúdo a partir de um bucket do Amazon S3. A empresa carrega o conteúdo de seu ambiente local para o bucket do S3 usando um Gateway de Arquivos do S3.\

A empresa deseja melhorar o desempenho e a confiabilidade da plataforma veiculando conteúdo da região da AWS geograficamente mais próxima dos clientes. A empresa deve rotear os dados locais para o Amazon S3 com latência mínima e sem exposição à internet pública.\

Qual combinação de etapas atenderá a esses requisitos com a MENOR sobrecarga operacional? (Escolha duas.)

A. Implementar pontos de acesso multirregionais S3 **Mais votado**

B. Use a replicação entre regiões (CRR) do S3 para copiar conteúdo para diferentes regiões

C. Crie uma função AWS Lambda que rastreie o roteamento de clientes para regiões

D. Use uma conexão VPN de site para site da AWS para se conectar a um ponto de acesso multirregional.

E. Use o AWS PrivateLink e o AWS Direct Connect para se conectar a um ponto de acesso multirregional. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/52/)

515- Uma empresa está migrando seu data center para a Nuvem AWS e precisa concluir a migração o mais rápido possível. A empresa possui diversos aplicativos em execução em centenas de VMs VMware no data center. Cada VM é configurada com uma pasta compartilhada do Windows que contém arquivos compartilhados. O compartilhamento de arquivos é maior que 100 GB.\

A equipe de conformidade da empresa exige que uma solicitação de alteração seja executada e aprovada para cada instalação e modificação de software em cada VM. A empresa possui uma conexão AWS Direct Connect com 10 GB de largura de banda entre a AWS e o data center.\

Qual conjunto de etapas a empresa deve seguir para concluir a migração no MENOR tempo?

A. Use o VM ImporvExport para criar imagens de cada VM. Use o AWS Application Migration Service para gerenciar e visualizar as imagens. Copie os dados do compartilhamento de arquivos do Windows para um sistema de arquivos Amazon Elastic File System (Amazon EFS). Após a migração, remapeie o compartilhamento de arquivos para o sistema de arquivos EFS.

B. Implante o dispositivo sem agente do AWS Application Discovery Service no VMware vCenter. Revise o portfólio de VMs descobertas no AWS Migration Hub.

C. Implante o dispositivo sem agente do AWS Application Migration Service no VMware vCenter. Copie os dados do compartilhamento de arquivos do Windows para um novo sistema de arquivos do Amazon FSx for Windows File Server. Após a migração, remapeie o compartilhamento de arquivos em cada VM para o sistema de arquivos do FSx for Windows File Server.\
C. Crie e revise um portfólio no AWS Migration Hub. Solicite um dispositivo AWS Snowcone. Implante o AWS Application Migration Service no VMware vCenter e exporte todas as VMs para o dispositivo Snowcone. Copie todos os dados do compartilhamento de arquivos do Windows para o dispositivo Snowcone. Envie o dispositivo Snowcone para a AWS. Use o Application Migration Service para implantar todas as instâncias migradas. **Mais votado**

D. Implante o Agente do AWS Application Discovery Service e o Agente do AWS Application Migration Service diretamente em cada hipervisor VMware. Revise o portfólio no AWS Migration Hub. Copie os dados de compartilhamento de arquivos de cada VM para um novo sistema de arquivos do Amazon FSx for Windows File Server. Após a migração, remapeie o compartilhamento de arquivos em cada VM para o sistema de arquivos do FSx for Windows File Server.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/52/)

516- Uma empresa possui várias contas da AWS em uma organização no AWS Organizations. A empresa precisa armazenar a atividade da conta da AWS e consultar os dados de um local central usando SQL.\

Qual solução atenderá a esses requisitos?

A. Crie uma trilha do AWS CloudTraii em cada conta. Especifique os eventos de gerenciamento do CloudTrail para a trilha. Configure o CloudTrail para enviar os eventos para o Amazon CloudWatch Logs. Configure a observabilidade entre contas do CloudWatch. Consulte os dados no CloudWatch Logs Insights.

B. Use uma conta de administrador delegado para criar um repositório de dados do AWS CloudTrail Lake. Especifique os eventos de gerenciamento do CloudTrail para o repositório de dados. Habilite o repositório de dados para todas as contas da organização. Consulte os dados no CloudTrail Lake. **Mais votado**

C. Use uma conta de administrador delegado para criar uma trilha do AWS CloudTral. Especifique os eventos de gerenciamento do CloudTrail para a trilha. Habilite a trilha para todas as contas da organização. Mantenha todas as outras configurações como padrão. Consulte os dados do CloudTrail na página Histórico de eventos do CloudTrail.

D. Use o AWS CloudFormation StackSets para implantar os armazenamentos de dados do AWS CloudTrail Lake em cada conta. Especifique os eventos de gerenciamento do CloudTrail para os armazenamentos de dados. Mantenha todas as outras configurações como padrão. Consulte os dados no CloudTrail Lake.

517- Uma empresa está usando a AWS para desenvolver e gerenciar seu aplicativo web de produção. O aplicativo inclui uma API HTTP do Amazon API Gateway que invoca uma função do AWS Lambda. A função Lambda processa e armazena dados em um banco de dados.\

A empresa deseja implementar a autorização de usuário para o aplicativo web de forma integrada. A empresa já utiliza um provedor de identidade terceirizado que emite tokens OAuth para os outros aplicativos da empresa.\

Qual solução atenderá a esses requisitos?

A. Integre o provedor de identidade terceirizado da empresa ao API Gateway. Configure um autorizador Lambda do API Gateway para validar tokens do provedor de identidade. Exija o autorizador Lambda em todas as rotas da API. Atualize a aplicação web para obter tokens do provedor de identidade e inclua os tokens no cabeçalho de autorização ao chamar a API HTTP do API Gateway. **Mais votado**

B. Integrar o provedor de identidade terceirizado da empresa com o AWS Directory Service. Configurar o Directory Service como um autorizador do API Gateway para validar tokens do provedor de identidade. Exigir o autorizador do Directory Service em todas as rotas de API. Configurar o AWS IAM Identity Center como um provedor de identidade SAML 2.0. Configurar a aplicação web como uma aplicação SAML 2.0 personalizada.

C. Integre o provedor de identidade terceirizado da empresa ao AWS IAM Identity Center. Configure o API Gateway para usar o IAM Identity Center para autenticação e autorização sem configuração. Atualize o aplicativo web para recuperar tokens do AWS Security Token Service (AWS STS) do IAM Identity Center e inclua os tokens no cabeçalho de autorização ao chamar a API HTTP do API Gateway.

D. Integre o provedor de identidade terceirizado da empresa ao AWS IAM Identity Center. Configure os usuários do IAM com permissões para chamar a API HTTP do API Gateway. Atualize o aplicativo web para extrair os parâmetros de solicitação dos usuários do IAM e inclua os parâmetros no cabeçalho de autorização ao chamar a API HTTP do API Gateway.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/52/)

518- Uma empresa implantou aplicativos em milhares de instâncias do Amazon EC2 em uma conta da AWS. Uma auditoria de segurança descobre que vários volumes não criptografados do Amazon Elastic Block Store (Amazon EBS) estão anexados às instâncias do EC2. A política de segurança da empresa exige que os volumes do EBS sejam criptografados.\

A empresa precisa implementar uma solução automatizada para criptografar os volumes do EBS. A solução também deve impedir que as equipes de desenvolvimento criem volumes do EBS não criptografados.\

Qual solução atenderá a esses requisitos?

A. Configure a regra gerenciada do AWS Config que identifica volumes EBS não criptografados. Configure uma ação de correção automática. Associe um runbook do AWS Systems Manager Automation que inclua as etapas para criar um novo volume EBS criptografado. Crie uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Na política de chaves, inclua uma declaração para proibir a criação de volumes EBS não criptografados.

B. Use o AWS Systems Manager Fleet Manager para criar uma lista de volumes EBS não criptografados. Crie um runbook do Systems Manager Automation que inclua as etapas para criar um novo volume EBS criptografado. Crie um SCP para proibir a criação de volumes EBS não criptografados.

C. Use o AWS Systems Manager Fleet Manager para criar uma lista de volumes EBS não criptografados. Crie um runbook do Systems Manager Automation que inclua as etapas para criar um novo volume EBS criptografado. Modifique a configuração da conta AWS para criptografia EBS para sempre criptografar novos volumes EBS.

D. Configure a regra gerenciada do AWS Config que identifica volumes EBS não criptografados. Configure uma ação de correção automática. Associe um runbook do AWS Systems Manager Automation que inclua as etapas para criar um novo volume EBS criptografado. Modifique a configuração da conta AWS para criptografia EBS para sempre criptografar novos volumes EBS. **Mais votado**

519- Uma empresa está executando uma grande carga de trabalho em contêineres na Nuvem AWS. A carga de trabalho consiste em aproximadamente 100 serviços diferentes. A empresa usa o Amazon Elastic Container Service (Amazon ECS) para orquestrar a carga de trabalho.\

Recentemente, a equipe de desenvolvimento da empresa começou a usar o AWS Fargate em vez de instâncias do Amazon EC2 no cluster ECS. No passado, a carga de trabalho chegou perto de executar o número máximo de instâncias do EC2 disponíveis na conta.\

A empresa está preocupada que a carga de trabalho possa atingir o número máximo de tarefas do ECS permitidas. Um arquiteto de soluções deve implementar uma solução que notifique a equipe de desenvolvimento quando o Fargate atingir 80% do número máximo de tarefas.\

O que o arquiteto de soluções deve fazer para atender a esse requisito?

A. Use o Amazon CloudWatch para monitorar a estatística de Contagem de Amostras para cada serviço no cluster ECS. Defina um alarme para quando a expressão matemática contagem_de_amostras/COTA_DE_SERVIÇO(serviço)*100 for maior que 80. Notifique a equipe de desenvolvimento usando o Amazon Simple Notification Service (Amazon SNS).

B. Use o Amazon CloudWatch para monitorar cotas de serviço publicadas no namespace de métrica AWS/Usage. Defina um alarme para quando a expressão matemática métrica/SERVICE_QUOTA(métrica)\*100 for maior que 80. Notifique a equipe de desenvolvimento usando o Amazon Simple Notification Service (Amazon SNS). **Mais votado**

C. Crie uma função do AWS Lambda para consultar métricas detalhadas do cluster ECS. Quando o número de tarefas Fargate em execução for maior que 80, invoque o Amazon Simple Email Service (Amazon SES) para notificar a equipe de desenvolvimento.

D. Crie uma regra do AWS Config para avaliar se o Fargate SERVICE_QUOTA é maior que 80. Use o Amazon Simple Email Service (Amazon SES) para notificar a equipe de desenvolvimento quando a regra do AWS Config não estiver em conformidade.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/52/)

520- Uma empresa possui diversas funções do AWS Lambda escritas em Python. As funções são implantadas com o tipo de implantação de pacote .zip. As funções usam uma camada Lambda que contém bibliotecas e pacotes comuns em um arquivo .zip. Os pacotes .zip do Lambda e o arquivo .zip da camada Lambda são armazenados em um bucket do Amazon S3.\

A empresa deve implementar a varredura automática das funções do Lambda e da camada Lambda para identificar CVEs. Um subconjunto das funções do Lambda deve receber varreduras de código automatizadas para detectar possíveis vazamentos de dados e outras vulnerabilidades. As varreduras de código devem ocorrer apenas para funções do Lambda selecionadas, não para todas as funções do Lambda.\

Qual combinação de ações atenderá a esses requisitos? (Escolha três.)

A. Ative o Amazon Inspector. Inicie verificações automatizadas de CVE. **Mais votado**

B. Ative a verificação padrão do Lambda e a verificação de código do Lambda no Amazon Inspector. **Mais votado**

C. Habilite o Amazon GuardDuty. Habilite o recurso de proteção Lambda no GuardDuty.

D. Habilite a varredura nas configurações do Monitor das funções do Lambda que precisam de varreduras de código.

E. Marque funções Lambda que não precisam de varreduras de código. Na tag, inclua uma chave de InspectorCodeExclusion e um valor de LambdaCodeScanning. **Mais votado**

F. Use o Amazon Inspector para escanear o bucket 3 que contém os pacotes .zip do Lambda e o arquivo .zip da camada do Lambda para varreduras de código.

521- Uma empresa está mudando a maneira como lida com a aplicação de patches em instâncias do Amazon EC2 em sua conta de aplicativo. Atualmente, a empresa aplica patches em instâncias pela internet usando um gateway NAT em uma VPC na conta de aplicativo.\

A empresa tem instâncias do EC2 configuradas como um repositório de origem de patches em uma VPC privada dedicada em uma conta principal. A empresa deseja usar o AWS Systems Manager Patch Manager e o repositório de origem de patches na conta principal para aplicar patches nas instâncias do EC2 na conta de aplicativo. A empresa deve impedir que todas as instâncias do EC2 na conta de aplicativo acessem a internet.\

As instâncias do EC2 na conta de aplicativo precisam acessar o Amazon S3, onde os dados do aplicativo são armazenados. Essas instâncias do EC2 precisam de conectividade com o Systems Manager e com o repositório de origem de patches na VPC privada na conta principal.\

Qual solução atenderá a esses requisitos?

A. Crie uma ACL de rede que bloqueie o tráfego de saída na porta 80. Associe a ACL de rede a todas as sub-redes na conta do aplicativo. Na conta do aplicativo e na conta principal, implante uma instância do EC2 que execute um servidor VPN personalizado. Crie um túnel VPN para acessar a VPC privada. Atualize a tabela de rotas na conta do aplicativo.

B. Crie VIFs privadas para o Systems Manager e o Amazon S3. Exclua o gateway NAT da VPC na conta do aplicativo. Crie um gateway de trânsito para acessar as instâncias EC2 do repositório de origem de patches na conta principal. Atualize a tabela de rotas na conta principal.

C. Crie endpoints de VPC para o Systems Manager e o Amazon S3. Exclua o gateway NAT da VPC na conta do aplicativo. Crie uma conexão de peering de VPC para acessar as instâncias EC2 do repositório de origem de patches na conta principal. Atualize as tabelas de rotas em ambas as contas. **Mais votado**

D. Crie uma ACL de rede que bloqueie o tráfego de entrada na porta 80. Associe a ACL de rede a todas as sub-redes na conta do aplicativo. Crie um gateway de trânsito para acessar as instâncias EC2 do repositório de origem de patches na conta principal. Atualize as tabelas de rotas em ambas as contas.

522- Uma empresa nos Estados Unidos (EUA) adquiriu uma empresa na Europa. Ambas as empresas utilizam a Nuvem AWS. A empresa americana desenvolveu um novo aplicativo com uma arquitetura de microsserviços. A empresa americana está hospedando o aplicativo em cinco VPCs na região us-east-2. O aplicativo deve ser capaz de acessar recursos em uma VPC na região eu-west-1.\
No entanto, o aplicativo não deve ser capaz de acessar nenhuma outra VPC.\

As VPCs em ambas as regiões não têm intervalos CIDR sobrepostos. Todas as contas já estão consolidadas em uma organização no AWS Organizations.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um gateway de trânsito em eu-west-1. Anexe as VPCs em us-east-2 e a VPC em eu-west-1 ao gateway de trânsito. Crie as entradas de rota necessárias em cada VPC para que o tráfego seja roteado pelo gateway de trânsito.

B. Crie um gateway de trânsito em cada região. Conecte as sub-redes envolvidas ao gateway de trânsito regional. Crie as entradas de rota necessárias nas tabelas de rotas associadas para cada sub-rede, de modo que o tráfego seja roteado pelo gateway de trânsito regional. Faça o peering dos dois gateways de trânsito.

C. Crie uma configuração de conexão de peering de VPC em malha completa entre todas as VPCs. Crie as entradas de rota necessárias em cada VPC para que o tráfego seja roteado pela conexão de peering de VPC.

D. Crie uma conexão de peering de VPC para cada VPC em us-east-2 com a VPC em eu-west-1. Crie as entradas de rota necessárias em cada VPC para que o tráfego seja roteado pela conexão de peering de VPC.

523- Uma empresa de viagens desenvolveu uma aplicação web que utiliza o Amazon Simple Email Service (Amazon SES) para enviar notificações por e-mail aos usuários. A empresa precisa habilitar o registro em log para ajudar a solucionar problemas de entrega de e-mails. A empresa também precisa poder realizar buscas com base em destinatário, assunto e horário de envio.\

Qual combinação de etapas um arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha duas.)

A. Crie um conjunto de configurações do Amazon SES com o Amazon Data Firehose como destino. Escolha enviar logs para um bucket do Amazon S3. **Mais votado**

B. Habilite o registro em log do AWS CloudTrail. Especifique um bucket do Amazon S3 como destino para os logs.

C. Use o Amazon Athena para consultar os logs no bucket do Amazon S3 em busca de destinatário, assunto e hora de envio. **Mais votado**

D. Crie um grupo de logs do Amazon CloudWatch. Configure o Amazon SES para enviar logs ao grupo de logs.

E. Use o Amazon Athena para consultar os logs no Amazon CloudWatch em busca de destinatário, assunto e hora de envio.

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/53/)

534- Uma empresa migrou para a AWS e utiliza o AWS Business Support. A empresa deseja monitorar a relação custo-benefício das instâncias do Amazon EC2 em todas as contas da AWS. As instâncias do EC2 possuem tags para departamento, unidade de negócios e ambiente. As instâncias do EC2 de desenvolvimento têm alto custo, mas baixa utilização.\

A empresa precisa detectar e interromper quaisquer instâncias do EC2 de desenvolvimento subutilizadas. As instâncias são consideradas subutilizadas se tiverem 10% ou menos de utilização média diária da CPU e 5 MB ou menos de E/S de rede em pelo menos 4 dos últimos 14 dias.\

Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?

A. Configure os painéis do Amazon CloudWatch para monitorar a utilização de instâncias do EC2 com base em tags por departamento, unidade de negócios e ambiente. Crie uma regra do Amazon EventBridge que invoque uma função do AWS Lambda para interromper instâncias do EC2 de desenvolvimento subutilizadas.

B. Configure o AWS Systems Manager para rastrear a utilização de instâncias do EC2 e reportar instâncias subutilizadas ao Amazon CloudWatch. Filtre os dados do CloudWatch por tags de departamento, unidade de negócios e ambiente. Crie uma regra do Amazon EventBridge que invoque uma função do AWS Lambda para interromper instâncias do EC2 de desenvolvimento subutilizadas.

C. Crie uma regra do Amazon EventBridge para detectar a baixa utilização de instâncias do EC2 relatada pelo AWS Trusted Advisor. Configure a regra para invocar uma função do AWS Lambda que filtra os dados por tags para departamento, unidade de negócios e ambiente, e interrompe instâncias do EC2 de desenvolvimento subutilizadas. **Mais votado**

D. Crie uma função do AWS Lambda para ser executada diariamente e recuperar dados de utilização de todas as instâncias do EC2. Salve os dados em uma tabela do Amazon DynamoDB. Crie um painel do Amazon QuickSight que use a tabela do DynamoDB como fonte de dados para identificar e interromper instâncias do EC2 de desenvolvimento subutilizadas.

525- Uma empresa está hospedando um aplicativo na AWS para um projeto que será executado pelos próximos 3 anos. O aplicativo consiste em 20 instâncias sob demanda do Amazon EC2 registradas em um grupo de destino para um balanceador de carga de rede (NLB). As instâncias estão distribuídas em duas zonas de disponibilidade. O aplicativo não tem estado e é executado 24 horas por dia, 7 dias por semana.\

A empresa recebe relatórios de usuários que estão enfrentando respostas lentas do aplicativo. As métricas de desempenho mostram que as instâncias estão com 10% de utilização da CPU durante o uso normal do aplicativo. No entanto, a utilização da CPU aumenta para 100% em horários de pico, que normalmente duram algumas horas.\

A empresa precisa de uma nova arquitetura para resolver o problema de respostas lentas do aplicativo.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um grupo de Dimensionamento Automático. Anexe o grupo de Dimensionamento Automático ao grupo-alvo do NLB. Defina a capacidade mínima como 20 e a capacidade desejada como 28. Compre Instâncias Reservadas para 20 instâncias.

B. Crie uma Frota Spot com o tipo de solicitação request. Defina o parâmetro TotalTargetCapacity como 20. Defina o parâmetro DefaultTargetCapacityType como On-Demand. Especifique o NLB ao criar a Frota Spot.

C. Crie uma frota Spot com o tipo de solicitação "manutenção". Defina o parâmetro TotalTargetCapacity como 20. Defina o parâmetro DefaultTargetCapacityType como Spot. Substitua o NLB por um Application Load Balancer.

D. Crie um grupo de Dimensionamento Automático. Anexe o grupo de Dimensionamento Automático ao grupo de destino do NLB. Defina a capacidade mínima como 4 e a máxima como 28. Compre Instâncias Reservadas para quatro instâncias. **Mais votado**

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/53/)

526- A Accompany está desenvolvendo um aplicativo para coletar e transmitir dados de sensores de uma fábrica. O aplicativo usará o AWS IoT Core para enviar dados de centenas de dispositivos para um data lake do Amazon S3. A empresa precisa enriquecer os dados antes de carregá-los no Amazon S3.\

O aplicativo transmitirá os dados do sensor a cada 5 segundos. Novos dados do sensor devem estar disponíveis no Amazon S3 em menos de 30 minutos após a coleta dos dados pelo aplicativo. Nenhum outro aplicativo está processando os dados do sensor do AWS IoT Core.\

Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?

A. Crie um tópico no AWS IoT Core para ingerir os dados do sensor. Crie uma função do AWS Lambda para enriquecer os dados e gravá-los no Amazon S3. Configure uma ação de regra do AWS IoT para invocar a função do Lambda.

B. Use o AWS IoT Core Basic Ingest para ingerir os dados do sensor. Configure uma ação de regra do AWS IoT para gravar os dados no Amazon Kinesis Data Firehose. Defina o intervalo de buffer do Kinesis Data Firehose para 900 segundos. Use o Kinesis Data Firehose para invocar uma função do AWS Lambda para enriquecer os dados. Configure o Kinesis Data Firehose para entregar os dados ao Amazon S3. **Mais votado**

C. Crie um tópico no AWS IoT Core para ingerir os dados do sensor. Configure uma ação de regra do AWS IoT para enviar os dados para uma tabela do Amazon Timestream. Crie uma função do AWS Lambda para ler os dados do Timestream. Configure a função do Lambda para enriquecer os dados e gravá-los no Amazon S3.

D. Use o AWS IoT Core Basic Ingest para ingerir os dados do sensor. Configure uma ação de regra do AWS IoT para gravar os dados no Amazon Kinesis Data Streams. Crie uma função do AWS Lambda para processar os dados do Kinesis Data Streams e enriquecê-los. Chame a operação da API PutObject do S3 a partir da função Lambda para gravar os dados no Amazon S3.

527- Uma empresa está coletando dados de um grande conjunto de dispositivos de IoT. Os dados são armazenados em um data lake do Amazon S3. Cientistas de dados realizam análises em instâncias do Amazon EC2 executadas em duas sub-redes públicas em uma VPC em uma conta AWS separada.\

Os cientistas de dados precisam acessar o data lake a partir das instâncias do EC2. As instâncias do EC2 já têm uma função atribuída com permissões para acessar o Amazon S3.\
De acordo com as políticas da empresa, apenas redes autorizadas têm permissão para acessar os dados de IoT.\

Qual combinação de etapas um arquiteto de soluções deve seguir para atender a esses requisitos? (Escolha duas.)

A. Crie um endpoint de VPC de gateway para o Amazon S3 na VPC dos cientistas de dados.

B. Crie um ponto de acesso S3 na conta AWS dos cientistas de dados para o data lake. **Mais votado**

C. Atualize a função da instância do EC2. Adicione uma política com uma condição que permita a ação s3:GetObject quando o valor da chave de condição s3:DataAccessPointArn for um ARN de ponto de acesso válido.

D. Atualize a tabela de rotas da VPC para rotear o tráfego S3 para um ponto de acesso S3.

E. Adicione uma política de bucket S3 com uma condição que permita a ação s3:GetObject quando o valor da chave de condição s3:DataAccessPointArn for um ARN de ponto de acesso válido. **Mais votado**

528- Uma empresa deseja migrar seu website para a AWS. O website utiliza contêineres implantados em um cluster Kubernetes local e autogerenciado. Todos os dados do website são armazenados em um banco de dados PostgreSQL local.\

A empresa decidiu migrar o cluster Kubernetes local para um cluster do Amazon Elastic Kubernetes Service (Amazon EKS). O cluster EKS usará grupos de nós gerenciados pelo EKS com um número estático de nós. A empresa também migrará o banco de dados local para um banco de dados Amazon RDS para PostgreSQL.\

Um arquiteto de soluções precisa estimar o custo total de propriedade (TCO) dessa carga de trabalho antes da migração.\

Qual solução fornecerá as informações de TCO necessárias?

A. Solicite acesso ao Migration Evaluator. Execute o Coletor do Migration Evaluator e importe os dados. Configure um cenário. Exporte um relatório do Quick Insights do Migration Evaluator. **Mais votado**

B. Inicie o AWS Database Migration Service (AWS DMS) para o banco de dados local. Gere um relatório de avaliação. Crie uma estimativa na Calculadora de Preços da AWS para os custos da migração do EKS.

C. Inicialize o Serviço de Migração de Aplicativos da AWS. Adicione os servidores locais como servidores de origem. Inicie uma instância de teste. Gere um relatório de TCO do Serviço de Migração de Aplicativos.

D. Acesse a página do AWS Cloud Economics Center para avaliar o AWS Cloud Value Framework. Crie um relatório de Custo e Uso da AWS a partir do Cloud Value Framework.

529- Uma empresa de eventos administra uma plataforma de venda de ingressos na AWS. Os clientes da empresa configuram e agendam seus eventos na plataforma. Os eventos resultam em grandes aumentos de tráfego para a plataforma. A empresa sabe a data e a hora dos eventos de cada cliente.\

A empresa administra a plataforma em um cluster do Amazon Elastic Container Service (Amazon ECS). O cluster ECS consiste em instâncias sob demanda do Amazon EC2 que estão em um grupo de Auto Scaling. O grupo de Auto Scaling usa uma política de dimensionamento preditivo.\

O cluster ECS faz solicitações frequentes a um bucket do Amazon S3 para baixar ativos de ingressos. O cluster ECS e o bucket S3 estão na mesma região da AWS e na mesma conta da AWS. O tráfego entre o cluster ECS e o bucket S3 flui por um gateway NAT.\

A empresa precisa otimizar o custo da plataforma sem diminuir sua disponibilidade.\

Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)

A. Crie um endpoint de VPC de gateway para o bucket S3. **Mais votado**

B. Adicione outro provedor de capacidade ECS que utilize um grupo de Dimensionamento Automático de Instâncias Spot. Configure a nova estratégia de provedor de capacidade para ter o mesmo peso da estratégia de provedor de capacidade existente.

C. Crie reservas de capacidade sob demanda para o tipo de instância aplicável para o período das políticas de dimensionamento agendadas.

D. Habilite a aceleração de transferência S3 no bucket S3.

E. Substitua a política de dimensionamento preditivo por políticas de dimensionamento agendadas para os eventos agendados.

[Ocultar solução](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/38/)

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/28/)

[Ocultar solução\
](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/21/)

[Ocultar solução](https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional-sap-c02/view/17/)
