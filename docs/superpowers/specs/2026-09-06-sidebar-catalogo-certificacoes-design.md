# Sidebar + Catálogo de Certificações — Design

Registra o entendimento fechado com o usuário antes da implementação. É desta spec que o plano de implementação argumenta.

## Objetivo

Trocar a home pós-login (hoje um grid solto de cards) por um shell com barra lateral esquerda e duas seções:

Ambas são navegação em dois níveis: um índice de provedores (AWS, GCP, Azure, GitHub ou mais posteriormente) e, ao clicar num provedor, uma página própria com o conteúdo dele ordenado do mais fácil ao mais difícil.

- **Certificações** — o catálogo completo. Todas as certificações do provedor, cada card com dois botões: estudar na documentação oficial e ver o simulado. O botão de simulado é **específico daquela certificação** e leva a `/simulados/{provider}/{certification}`.
- **Simulados** — só o que dá para fazer agora. Mesma forma, mesmos componentes, mas lista apenas as certificações que têm banco de questões.

Abaixo do provedor existe um terceiro nível: a **página do simulado**, em `/simulados/{provider}/{certification}`. Ela é o único caminho para `/exam/{slug}`. Quando a certificação tem banco, mostra o resumo (código, título, tamanho do banco, formato da prova oficial, nota de aprovação, melhor nota) e um botão que abre a configuração do exame. Quando não tem, mostra **"Sem simulados"** e oferece a documentação oficial.

Essa página é o que faz o botão de Certificações carregar informação por certificação em vez de mandar todo mundo para o mesmo lugar, e é o que permite a certificação sem banco ter um destino honesto em vez de um botão morto.

Certificações responde "o que existe e onde eu estudo"; Simulados responde "o que eu posso praticar hoje". As duas convergem na página do simulado, e **só ela lança prova**.

Sendo o mesmo shape, o índice de provedores e o card de certificação são **componentes compartilhados parametrizados**, não duas implementações parecidas: o que muda entre as seções é o predicado de filtro e a presença do botão de estudo.

## Decisões fechadas no brainstorming

| Questão | Decisão |
|---|---|
| O que é "budgets" do pedido original | É **badges** — o catálogo de certificações. Rótulo na UI: "Certificações". |
| Forma do catálogo | Índice com os 4 provedores; clicar num provedor abre **outra página** com as certificações dele. Não é uma lista única. |
| Forma da seção Simulados | **Mesma forma** — índice de provedores + página por provedor. Compartilha os componentes com Certificações. |
| O que diferencia as duas seções | O filtro e o botão de estudo. Certificações lista tudo e tem link para a doc; Simulados lista só quem tem banco. Layout idêntico, destino idêntico. |
| Destino do botão de simulado | `/simulados/{provider}/{certification}` — **específico por certificação**, nunca o mesmo href repetido entre cards. |
| Onde a prova começa | **Só na página do simulado.** Nem Certificações nem a lista do provedor abrem `/exam/[slug]`. |
| Certificação sem banco de questões | Botão **ativo** (não desabilitado) levando à sua página, que mostra "Sem simulados" e oferece a doc oficial. Em Simulados a certificação não aparece na lista. |
| Alcance do shell com sidebar | Catálogo, simulados e página do simulado. `/exam/[slug]` continua em tela cheia — sem navegação durante a prova. |
| Provedor sem nenhum simulado | Em Simulados o card do índice mostra "0 simulados" e a página traz estado vazio com link para o catálogo daquele provedor. Hoje é o caso de GCP, Azure e GitHub. |
| Rota `/hub` | Aposentada, redireciona para `/certificacoes`. |
| Critério de "fácil → difícil" | Nível oficial: Negócios → Fundamental → Associate → Professional/Expert → Specialty; alfabético dentro de cada nível. |
| Apresentação das listas | **Agrupadas por nível**, com cabeçalho e contagem por grupo, nas duas seções. Nível sem itens não aparece. |
| Componente de sidebar | Instalar o `sidebar` do shadcn (registro base-ui), não escrever um custom. |
| Provedores futuros | Quatro hoje, mas a lista cresce. Adicionar provedor tem de ser mudança **só de dado**. |

**Decisão revista durante o brainstorming:** a primeira rodada fechou "botão de simulado desabilitado com badge Em breve". Isso foi superado quando a certificação sem banco ganhou página própria — um botão desabilitado deixaria essa página inalcançável pela UI. O rótulo "Em breve" sobrevive como **badge informativo no card**, para o usuário saber antes de clicar, mas o botão fica ativo.

### Adicionar um provedor no futuro

O teste de que o design aguenta isso: adicionar Oracle Cloud ou Kubernetes deve custar exatamente três coisas, todas em `_data/certifications/`:

1. um membro novo na união `CertificationProvider`;
2. uma entrada em `PROVIDER_META` e em `PROVIDER_ORDER`;
3. um arquivo `_data/certifications/<provedor>.ts` com as certificações.

Nada em `app/`, nada em `components/`. É por isso que os dois índices iteram `PROVIDER_ORDER` em vez de listar provedores à mão, e por que as páginas de provedor e de simulado são rotas dinâmicas e não páginas escritas uma a uma. Uma união exaustiva mais `PROVIDER_META` tipado como `Record<CertificationProvider, ProviderMeta>` faz o TypeScript apontar o que falta quando a união cresce, em vez de deixar o provedor novo sumir silenciosamente de uma tela.

## Fatos verificados neste repo

- Next.js `16.3.4`, React `19.2.8`, App Router em `app/` na raiz, TS `strict`, alias `@/*` → `./*`, Tailwind v4, `bun`.
- Route groups (`(pasta)`) **não entram na URL** — confirmado em `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md`. Rotas de grupos diferentes não podem resolver para o mesmo path.
- `LayoutProps<'/rota'>` é um helper global gerado por `next dev` / `next build` / `next typegen`, indexado pela **rota da URL** (`layout.md`). O root layout atual já usa `LayoutProps<"/">`.
- `types/simulado.ts:56` declara `level: ExamLevel`, mas **nenhum componente lê esse campo** (verificado por grep em `app/`, `components/`, `lib/`). O catálogo pode assumir a ordenação sem conflito e sem migração de dados.
- `_data/index.ts` exporta exatamente **2 simulados**, ambos AWS: `security-especialist` (SCS-C03) e `solutions-architect-professional` (SAP-C02).
- `app/globals.css` já define os tokens `--sidebar-*` (padrão shadcn), mas `components/ui/` tem só `badge, button, card, input, select, switch` — sem `sidebar`.
- `components.json` usa `style: "base-nova"`, `rsc: true`, `iconLibrary: "lucide"`, alias de hooks `@/hooks` (a pasta ainda não existe).
- `/hub` é referenciado em 4 pontos: `app/login/actions.ts:31`, `app/page.tsx:6`, `components/exam/exam-results.tsx:50` e `lib/auth/protected-paths.ts:1` (espelhado no matcher de `proxy.ts`).
- `vitest.config.ts` existe, mas o repo **não tem nenhum arquivo de teste** hoje.
- `components/exam/exam-intro.tsx` **já mostra** código, título, tamanho do banco, formato da prova oficial e nota de aprovação, além dos toggles de configuração e do botão "Iniciar exame". A página do simulado nova não reimplementa a configuração — encaminha para lá.
- `components/exam/exam-runner.tsx` (310 linhas) é um client component com máquina de estados `intro | running | results`. Em `exam-runner.tsx:35-41` ele carrega tentativa salva do `localStorage` e, se existir, **pula direto para `running`**. Consequência: `/exam/{slug}` não é uma tela de introdução confiável — com tentativa em andamento ele cai dentro da prova. É por isso que o resumo do simulado é página própria e não um link direto para `/exam/{slug}` a partir do catálogo.

## Modelo de dados

Um catálogo unificado é a fonte de verdade; as duas páginas são projeções dele.

```ts
// types/certification.ts
export type CertificationProvider = "aws" | "gcp" | "azure" | "github";

export type CertificationTier =
  | "business"
  | "foundational"
  | "associate"
  | "professional"
  | "expert"
  | "specialty";

export interface Certification {
  id: string;            // slug estável e único no catálogo: "aws-sap-c02", "github-actions"
  provider: CertificationProvider;
  code: string;          // "SAP-C02"; string vazia quando o provedor não usa código
  title: string;
  tier: CertificationTier;
  studyUrl: string;      // documentação oficial do provedor
  simuladoSlug?: string; // ausente ⇒ "Em breve"
}
```

`id` é a chave do catálogo (usada como `key` de React e para desempate estável); `code` é o código do exame, que é conteúdo exibido e pode não existir. São campos distintos de propósito — `code` nunca serve como identidade.

O índice de provedores precisa de metadados próprios, porque um provedor é agora uma entidade navegável e não só um campo de filtro:

```ts
export interface ProviderMeta {
  id: CertificationProvider;
  label: string;      // "AWS", "Google Cloud", "Microsoft Azure", "GitHub"
  description: string; // uma linha, para o card do índice
  docsUrl: string;     // hub de certificação do provedor
}
```

`CertificationProvider` faz dupla função: é o valor do campo `provider` **e** o segmento de URL de `/certificacoes/[provider]`. Isso é deliberado — os slugs `aws | gcp | azure | github` já são bons para URL, e um segundo mapa slug↔provedor seria duplicação sem ganho. A validação do param é uma checagem de pertinência contra `PROVIDER_ORDER`; provedor desconhecido chama `notFound()`, que tem retorno `never` e por isso estreita o param para `CertificationProvider` no resto da função.

Uma certificação está **disponível** quando `simuladoSlug` existe *e* resolve em `getSimuladoBySlug`. Um slug que não resolve é bug de dado, não estado normal — o helper de disponibilidade trata os dois casos como indisponível, e um teste garante que todo `simuladoSlug` do catálogo resolve.

`Simulado` continua dono do banco de questões e não é alterado. A ligação é o `simuladoSlug`; título e código aparecem nos dois lugares, mas a **exibição sempre vem do catálogo** — não há segunda fonte de verdade para a UI.

Alternativas descartadas:

- **Estender `Simulado` com `provider`/`status`** e criar ~40 entradas com `questions: []`. Rejeitada: `questions: []` é um estado inválido que o motor de exame inteiro passaria a ter de tolerar, e mistura dado de catálogo com dado de prova.
- **Um módulo independente por provedor**, cada um com sua própria noção de nível. Rejeitada: ordenar e agrupar viraria quatro cópias da mesma lógica.

## Ordenação

`lib/certifications/tier-order.ts` guarda o único lugar que conhece dificuldade:

```
business 0 · foundational 1 · associate 2 · professional 3 · expert 4 · specialty 5
```

`expert` existe para o Azure (AZ-305, AZ-400), que não usa "professional". Como cada página lista um provedor só, ranks de provedores diferentes nunca são comparados entre si — não há necessidade de calibrar "professional da AWS" contra "expert do Azure".

Empate de nível desempata por **`title`**, com `localeCompare("pt-BR")` — não por `code`, que é vazio no GitHub e produziria ordem arbitrária ali. Empate de título desempata por `id`, para a ordenação ser determinística.

`lib/certifications/catalog.ts` expõe funções puras sobre o array: ordenar por nível, filtrar por provedor, filtrar por disponibilidade, contar. Não há função de agrupar — com as duas seções em drill-down, nenhuma tela renderiza mais de um provedor por vez.

Ordem dos provedores: **AWS → GCP → Azure → GitHub**, a ordem em que o usuário os listou. Uma constante só, `PROVIDER_ORDER`, serve os dois índices e a validação de param — as telas não têm como divergir.

O tier `business` foi acrescentado à união durante a implementação, com rank 0. Não estava no desenho: a AWS lançou a certificação `AIB-C01` (AI Business Strategist), que a documentação oficial classifica num nível "Business" fora da escala técnica. Ranqueada antes de `foundational` por ser a que menos exige pré-requisito técnico.

## Rotas

```
app/(app)/layout.tsx                                       shell: sidebar + header
app/(app)/certificacoes/page.tsx                           índice de provedores — catálogo
app/(app)/certificacoes/[provider]/page.tsx                todas as certificações do provedor
app/(app)/simulados/page.tsx                               índice de provedores — contagem
app/(app)/simulados/[provider]/page.tsx                    só as com banco, do provedor
app/(app)/simulados/[provider]/[certification]/page.tsx    resumo do simulado ou "Sem simulados"
app/hub/page.tsx                                           redirect("/certificacoes")
app/exam/[slug]/page.tsx                                   intocado
```

As duas rotas de provedor são simétricas: tipadas com `PageProps<'/certificacoes/[provider]'>` e `PageProps<'/simulados/[provider]'>`, `await props.params` (é Promise nesta versão). Diferem em duas props: o predicado que filtra o catálogo e se o card mostra o botão de estudo. Nenhuma lógica de ordenação ou disponibilidade é reimplementada.

**Correção pós-implementação — não há geração estática.** O desenho previa `generateStaticParams()` nas rotas dinâmicas. Na prática isso é código morto: o layout do route group chama `getSession()`, que lê cookies, e leitura de cookie torna a rota dinâmica por definição. O `next build` confirmou — todas as rotas do app saem como `ƒ (server-rendered on demand)`, com ou sem `generateStaticParams`. Os exports foram removidos em vez de mantidos prometendo algo que não acontece. Página autenticada não é estática; se um dia a autenticação sair do layout, aí a geração estática passa a valer a pena.

A página do simulado usa `PageProps<'/simulados/[provider]/[certification]'>` e valida os **dois** params: provedor fora de `PROVIDER_ORDER`, certificação que não existe, ou certificação que existe mas pertence a outro provedor — os três chamam `notFound()`. O terceiro caso importa: sem ele, `/simulados/gcp/aws-sap-c02` renderizaria uma certificação AWS sob o provedor GCP.

Seu `generateStaticParams()` devolve o catálogo inteiro como pares `{ provider, certification }` — inclusive as sem banco, que são justamente as que renderizam "Sem simulados". Provedor com zero simulados continua tendo todas as suas páginas de certificação geradas; o que ele não tem é entrada na lista de `/simulados/{provider}`.

Ela é a **única rota que resolve `simuladoSlug` para um `Simulado`** e a única que linka para `/exam/{slug}`. As listas acima dela trabalham só com `Certification`; nenhuma precisa carregar banco de questões para se renderizar.

O layout do route group chama `getSession()` uma vez; as páginas herdam a proteção e não repetem a checagem. `proxy.ts` continua fazendo só o check otimista de presença do cookie, e seu matcher passa a cobrir `/certificacoes` (com subrotas) e `/simulados`.

O layout do route group cobre também `/simulados/[provider]/[certification]`, então a sidebar continua visível na página do simulado. A tela cheia começa só em `/exam/[slug]`, onde a prova roda.

O card de provedor no índice mostra contagem — sem isso o índice é só quatro logos e obriga um clique para descobrir se há algo lá dentro. Em Certificações a contagem é "N certificações · M com simulado"; em Simulados é "M simulados". Provedor com zero simulados aparece no índice de Simulados com o card visivelmente vazio, e sua página traz um estado vazio que aponta para `/certificacoes/{provider}` — o usuário vai para onde há conteúdo em vez de bater numa página em branco.

Os cards de `/simulados/{provider}` também apontam para a página do simulado, não direto para `/exam/{slug}`. Custa um clique a mais, e a alternativa seria deixar `/simulados/{provider}/{certification}` inalcançável a partir do seu próprio pai — um nível de URL que existe mas que a listagem pula por cima.

`/hub` vira redirect em vez de ser deletada: quem tiver a URL salva não toma 404. O redirect é rede de segurança, não caminho normal — os 4 pontos que hoje apontam para `/hub` passam a apontar para as rotas novas:

- `app/login/actions.ts` e `app/page.tsx` → `/certificacoes`, a porta de entrada do app;
- `components/exam/exam-results.tsx` → `/simulados`, não `/certificacoes`: quem acabou uma prova quer outra prova, e foi de Simulados que ele veio. O rótulo "Voltar ao hub" deixa de fazer sentido e passa a "Voltar aos simulados";
- `lib/auth/protected-paths.ts` e o matcher de `proxy.ts` → prefixos `/certificacoes` e `/simulados`, cobrindo as subrotas de provedor.

## Componentes

- `components/ui/sidebar.tsx` e dependências, via `shadcn add sidebar`.
- `components/nav/app-sidebar.tsx` — itens vindos de `lib/navigation/items.ts` tipados por `types/navigation.ts`. O item ativo casa por **prefixo** de `usePathname`, não por igualdade: `/certificacoes/aws` tem de acender "Certificações". Igualdade exata deixaria a sidebar sem item ativo em toda página de provedor.
- `components/nav/breadcrumb.tsx` — três níveis agora (`Certificações › AWS › SAP-C02`), recebendo os segmentos prontos da página. Ainda sem o componente do shadcn: renderizar uma lista de `{ label, href }` não justifica a dependência.

As cinco páginas são três telas parametrizadas. Os componentes recebem os caminhos por prop e nada sabem sobre qual seção os renderizou:

- `components/certifications/provider-index.tsx` — o grid de cards de provedor. Recebe `basePath` (`/certificacoes` ou `/simulados`) e uma função de contagem; itera `PROVIDER_ORDER`.
- `components/certifications/provider-card.tsx` — label, descrição, contagem, link para `{basePath}/{id}`.
- `components/certifications/certification-grid.tsx` — a lista de uma página de provedor, **agrupada por nível** (`groupByTier`), com cabeçalho e contagem por grupo, mais o estado vazio. Só renderiza os níveis que aquele provedor tem: AWS chega a cinco grupos, Azure mostra `Expert` onde a AWS mostra `Professional`, e a página de simulados de um provedor mostra apenas os níveis que já têm banco.

  Com o nível virando cabeçalho de grupo, o badge de nível saiu do card — era a mesma informação repetida em cada item — e o *eyebrow* do card passou a mostrar só o código do exame, omitido de vez nos provedores que não usam código.
- `components/certifications/certification-card.tsx` — link para `/simulados/{provider}/{id}`, badge "Em breve" quando não há banco, botão de estudo controlado por prop (presente em Certificações, ausente em Simulados). Absorve o papel do atual `components/hub/simulado-card.tsx`, incluindo a melhor nota via `useSyncExternalStore` sobre `localStorage` — lida só quando há `simuladoSlug`, porque sem slug não há o que consultar.
- `components/simulados/simulado-summary.tsx` — o corpo da página do simulado no estado disponível: código, título, tamanho do banco, formato da prova oficial, nota de aprovação, melhor nota, e o botão que leva a `/exam/{slug}`.
- `components/simulados/no-simulado.tsx` — o estado "Sem simulados": diz que o banco ainda não existe para aquela certificação e oferece o `studyUrl`, em vez de ser uma página em branco.

O card de certificação **não tem acesso a `/exam/`**. Seu href é sempre a página do simulado. Isso torna a regra "só a página do simulado lança prova" estrutural em vez de convenção: nenhum componente de lista sabe montar uma URL de exame, então ninguém quebra a regra por descuido depois.

Não existe `provider-section.tsx`: com as duas seções em drill-down, nenhuma tela precisa mais empilhar vários provedores numa página só.

`components/hub/simulado-card.tsx` é removido junto com `app/hub/page.tsx`; nada mais o importa.

## Testes

Primeiros testes do repo, em Vitest, cobrindo só lógica pura em `lib/certifications/`:

**Lógica de ordenação e filtro**

- ordenação por nível respeita o rank e desempata por título, depois por `id`;
- filtrar por provedor devolve só as certificações daquele provedor;
- filtrar por disponibilidade devolve subconjunto do filtro de provedor — é a diferença inteira entre as duas seções, e a única coisa que, quebrada, faz "Em breve" aparecer em Simulados;
- agrupar por nível devolve os grupos em ordem de dificuldade, omite nível vazio, ordena por título dentro do grupo e **não perde nem duplica** nenhuma certificação — o agrupamento é uma partição, e essa é a parte que quebra em silêncio se um `tier` novo entrar na união sem entrar em `TIER_ORDER`;
- disponibilidade é falsa sem `simuladoSlug` e falsa com slug que não resolve;
- as contagens do card de provedor batem com o tamanho das listas que as páginas de provedor renderizam;
- a resolução de `(provider, certification)` devolve a certificação certa, e devolve nada quando a certificação existe mas é de outro provedor — o caso `/simulados/gcp/aws-sap-c02`, que sem essa checagem renderiza uma certificação AWS sob GCP.

**Invariantes do catálogo** — os que quebram em silêncio quando alguém edita dado, e o motivo real de haver teste aqui:

- todo `simuladoSlug` do catálogo resolve em `_data` (slug com typo não vira "Em breve" fantasma);
- `id` é único em todo o catálogo;
- `PROVIDER_ORDER` cobre exatamente a união `CertificationProvider` — nem provedor a menos (sumiria de todas as telas) nem a mais;
- todo provedor de `PROVIDER_ORDER` tem ao menos uma certificação, senão o índice do catálogo ganha um card que leva a uma página vazia. **Zero simulados é legítimo** e não é testado contra: hoje é o caso de GCP, Azure e GitHub, e é exatamente o que o estado vazio de Simulados existe para cobrir;
- todo `provider` usado nas certificações existe em `PROVIDER_META`.

Esse bloco é o que faz a promessa "adicionar provedor é mudança só de dado" ser verificável em vez de aspiracional: quem adicionar um provedor pela metade recebe uma falha de teste apontando o passo que faltou.

Componentes e layout ficam de fora dos testes automatizados — verificação manual no navegador. O roteiro dessa verificação inclui os caminhos que só aparecem no browser:

- `/certificacoes/naoexiste` e `/simulados/aws/naoexiste` → 404;
- `/simulados/gcp/aws-sap-c02` → 404, não uma certificação AWS sob GCP;
- `/simulados/gcp` → "0 simulados" com saída para o catálogo;
- uma certificação sem banco → página "Sem simulados" com o link de estudo;
- começar uma prova, sair no meio, e voltar por Certificações → a página do simulado tem de aparecer normalmente, sem cair dentro da tentativa salva.

## Fora de escopo

- Escrever novos bancos de questões. Nenhum simulado novo nasce aqui — a entrega é a navegação e o catálogo.
- Sidebar colapsável com persistência, busca ou filtro no catálogo, progresso por certificação.
- Qualquer mudança no motor de exame ou em `types/simulado.ts`. Em particular, **mover `ExamIntro` para a página do simulado não está no escopo**: a configuração continua onde está, e `/exam/[slug]` segue dono das fases `intro | running | results`.

## Riscos e coisas a verificar na implementação

1. **Listas de certificação.** Não serão escritas de memória. Cada provedor é conferido contra a documentação oficial antes do arquivo ser escrito — a AWS aposentou Database, SAP on AWS e Data Analytics Specialty, e um catálogo com exame morto é pior que um catálogo curto. Se um provedor não puder ser verificado, a implementação **para e pergunta** em vez de decidir sozinha: ter os quatro no índice é requisito do usuário, então nem inventar a lista nem remover o provedor do índice é uma escolha que cabe a mim. Certificação individual em dúvida fica de fora e é reportada.
2. **Nível do GitHub.** O GitHub não publica níveis oficiais. O mapeamento para `CertificationTier` é uma decisão editorial nossa, e fica documentada em comentário no próprio arquivo de dados.
3. **`LayoutProps` em route group.** O helper é indexado por rota de URL, e `app/(app)/layout.tsx` não corresponde a uma única rota. A implementação tipa `children` explicitamente como `React.ReactNode` e só troca por `LayoutProps` se `next typegen` provar que existe uma variante válida.
4. **`shadcn add sidebar` no registro base-ui.** O projeto usa `style: "base-nova"`. O comando puxa dependências novas (sheet, tooltip, separator, skeleton, hook `use-mobile`) e cria a pasta `hooks/`. Se o registro não servir `sidebar` nesse estilo, isso volta ao usuário como decisão — não vira um custom silencioso.
5. **Resumo do simulado repete campos de `ExamIntro`.** Código, título, tamanho do banco, formato oficial e nota de aprovação passam a aparecer em duas telas seguidas — a página do simulado e, um clique depois, o intro do exame. Não é duplicação de verdade (as duas leem o mesmo objeto `Simulado` via `getPassingScore`), mas é repetição visual, e quem clicar "Configurar e iniciar" vai reler o que acabou de ler. A alternativa era mover `ExamIntro` para cá e deixar `/exam/[slug]` só como runner; foi descartada nesta rodada para não refatorar a máquina de estados de `exam-runner.tsx`. Se a repetição incomodar na verificação visual, o resumo encolhe para título + melhor nota + botão, e o detalhe fica só no intro.
6. **Duas telas de "vazio" com significados diferentes.** `/simulados/{provider}` vazio quer dizer "este provedor ainda não tem nenhum simulado"; `/simulados/{provider}/{cert}` sem banco quer dizer "esta certificação ainda não tem". São mensagens parecidas em telas vizinhas, e é fácil escrevê-las de um jeito que confunda. Os textos precisam nomear o escopo explicitamente — o provedor numa, a certificação na outra.

## Notas de implementação

Coisas que só apareceram ao construir, registradas para quem ler o diff depois.

### O catálogo, e o quanto cada provedor está verificado

| Provedor | Itens | Confiança |
|---|---|---|
| AWS | 13 | **Canônica.** Índice oficial de exam guides, lido por completo. |
| Google Cloud | 10 | **Subconjunto verificado.** Cada entrada tem página oficial confirmada; a lista pode não ser exaustiva. |
| Azure | 7 | **Subconjunto verificado.** Idem. |
| GitHub | 5 | **Nomes verificados** na doc oficial. Sem códigos, sem níveis oficiais, e uma única URL de estudo para as cinco. |

O que a verificação pegou e a memória teria errado:

- "SysOps Administrator" virou **CloudOps Engineer**, e o exame atual é **SOA-C03**, não SOA-C02.
- **AZ-500** (Azure Security Engineer) foi aposentado em **2026-08-31**, seis dias antes desta implementação. **AZ-204** em 2026-07-31. Os dois estariam no catálogo se escritos de memória.
- ML Specialty (MLS-C01) não existe mais; o caminho de ML agora é MLA-C01 → **MLA-C02**.
- Existem certificações AWS novas fora da escala técnica tradicional: **AIB-C01** (Business) e **AIP-C01** (Generative AI Developer – Professional).
- **SAP-C02 será substituído pelo SAP-C03**: inscrições abrem 2026-10-27, último dia do C02 é 2026-11-17. O simulado do repo ainda é válido, mas tem prazo.
- ANS-C01 se aposenta em 2026-12-31.

Os arquivos em `_data/certifications/` carregam a data e a fonte da verificação em comentário, mais o que ficou de fora e por quê. É a única coisa ali que um nome de variável não expressa.

### `PageTransition` saiu do root layout

O root layout envolvia tudo num `PageTransition` com `key={pathname}`. Mantido ali, a sidebar inteira sairia e voltaria animada a cada clique de navegação — nav persistente piscando. Foi movido para dentro de `app/(app)/layout.tsx`, envolvendo só `{children}`.

O login e o exame não perderam nada: `app/login/page.tsx` e `ExamIntro`/`ExamRunner` já têm animações `motion` próprias, e o `PageTransition` do root era redundante para eles.

### O que o `shadcn add sidebar` fez de errado

Registro porque vai acontecer de novo em qualquer `shadcn add` neste projeto:

1. **Prompt bloqueante.** `--yes` não cobre "sobrescrever arquivo existente". Travou em `button.tsx` e não escreveu nada. Resolvido com `yes n | bunx --bun shadcn@latest add sidebar --yes`, que recusa todos os overwrites — `button.tsx` e `input.tsx` foram preservados com a customização de marca do projeto.
2. **Dependência espúria.** Escreveu `import { cn } from "cn"` nos cinco arquivos novos em vez de `"@/lib/utils"`, e por isso instalou um pacote `cn@0.2.6` do npm que nada tem a ver com o helper local. O pacote foi removido e os cinco imports corrigidos.
3. **Código que não passa no lint do projeto.** O `hooks/use-mobile.ts` gerado chama `setState` dentro de um `useEffect`, o que a regra `react-hooks/set-state-in-effect` rejeita. Reescrito com `useSyncExternalStore`, que já é o idioma do repo em `theme-toggle.tsx`.

`SidebarProvider` **não** embrulha `TooltipProvider`, e `SidebarMenuButton` só monta tooltip se receber a prop `tooltip`. Como sidebar colapsável está fora de escopo, nenhum tooltip é passado e o root layout não precisou de provider novo.

### O resumo do simulado não recebe o `Simulado`

`SimuladoSummary` é client component e recebe **campos escalares** (`bankSize`, `examQuestionCount`, `examDurationMinutes`, `passingScore`), não o objeto `Simulado`. Passar o objeto serializaria o banco de questões inteiro no payload RSC — 75 a 85 questões com enunciado, alternativas e explicação, por página aberta. O antigo `components/hub/simulado-card.tsx` recebia o objeto inteiro; essa regressão não foi herdada.

### Verificação executada

`bunx tsc --noEmit` limpo, `bun run lint` limpo, `bun run test` com 26 testes passando, `bun run build` concluído.

Rotas exercitadas contra o dev server com cookie de sessão real:

| Caminho | Resultado |
|---|---|
| `/certificacoes` sem cookie | 307 → `/login` |
| `/certificacoes`, `/simulados` | 200, quatro provedores com contagem |
| `/certificacoes/aws` | 200, 13 cards, 11 "Em breve", 13 links de estudo |
| `/simulados/aws` | 200, SAP-C02 e SCS-C03 nessa ordem |
| `/simulados/gcp` | 200, estado vazio com saída para o catálogo |
| `/simulados/aws/aws-sap-c02` | 200, resumo 75 questões / 180 min / 75% e link para `/exam/…` |
| `/simulados/aws/aws-clf-c02` | 200, "Sem simulados" com link da doc |
| `/certificacoes/naoexiste`, `/simulados/aws/naoexiste` | 404 |
| **`/simulados/gcp/aws-sap-c02`** | **404** — o cruzamento provedor/certificação previsto no desenho |
| `/hub` | 307 → `/certificacoes` |

Ordem conferida em `/certificacoes/aws`: AIB-C01 → AIF-C01, CLF-C02 → SOA-C03, DEA-C01, DVA-C02, MLA-C02, SAA-C03 → DOP-C02, AIP-C01, SAP-C02 → ANS-C01, SCS-C03.

Não verificado: aparência em viewport móvel e o drawer da sidebar, que precisam de olho humano.

### Agrupamento por nível (pedido depois da primeira implementação)

As listas passaram a ser agrupadas por nível, com cabeçalho e contagem, nas duas seções. `TIER_ORDER` virou a **única** fonte da ordem de dificuldade: `tierRank` derivou de `indexOf` nele, em vez de um segundo mapa de ranks que poderia divergir da ordem de exibição.

Conferido no navegador: AWS rende cinco grupos (Negócios → Fundamental → Associate → Professional → Specialty), GCP e GitHub três, Azure três terminando em Expert, e `/simulados/aws` só dois (Professional, Specialty) — os níveis dos dois simulados que existem.
