# Landing page + redesign roxo — AWS Approve

Entrega desta etapa: **esboço no Figma** (landing + telas do app). Código fica para depois, a partir do Figma aprovado.

## Tipo, objetivo e CTA

- **Tipo:** Produto/SaaS
- **Objetivo:** a pessoa cria conta e começa um simulado
- **CTA principal:** "Criar conta grátis" → `/cadastro` (repetido no hero, no meio e no fim)
- **CTA secundário:** "Já tenho conta" → `/login`
- **Público:** quem estuda para certificação de nuvem/DevOps (AWS, Google Cloud, GitHub) e quer treinar no formato da prova antes de pagar o exame
- **Suposição a confirmar:** o acesso é gratuito. Se não for, troque o CTA e preencha a seção de preço

## Dados reais usados na copy

- 14 simulados prontos: 8 AWS, 1 Google Cloud, 5 GitHub
- 35 certificações no catálogo (AWS, Google Cloud, Azure, GitHub), com link para o guia oficial
- Modo "Simular prova real": quantidade oficial de questões, cronômetro, questões e alternativas embaralhadas
- Feedback imediato opcional (confirma e vê o gabarito na hora, com explicação quando existir)
- 4 formatos de questão: escolha única, múltipla, ordenação, correspondência
- Pausa e retoma de onde parou; histórico de tentativas; revisão questão a questão

## Seções e copy

### 0. Nav (pílula flutuante)
Logo "AWS Approve" · Simulados · Como funciona · FAQ · [Entrar] · botão pílula "Criar conta"

### 1. Hero
- **Eyebrow:** SIMULADOS DE CERTIFICAÇÃO · AWS · GOOGLE CLOUD · GITHUB
- **Headline (display):** "Entre na prova sabendo como ela é."
- **Subtítulo:** "Simulados no formato oficial, com cronômetro, nota de corte e gabarito na hora. Treine até a aprovação deixar de ser surpresa."
- **CTA circular:** "Criar conta" (círculo com halo, como o "Sign Up" da referência) + link "Já tenho conta"
- **Lateral esquerda (texto curto, estilo referência):** "Onde o estudo vira prática e a prova vira rotina."
- **Rodapé do hero:** "Role para explorar ↓"
- **Imagem:** arte original gerada (figura encapuzada/astronauta segurando um núcleo de luz violeta com fragmentos de questões e ícones de nuvem flutuando). Não reproduz a arte da referência.

### 2. Faixa de provedores (marquee)
AWS · Google Cloud · Microsoft Azure · GitHub — wordmarks em texto, correndo devagar.

### 3. Quem somos / proposta (3 colunas, como "Who We Are?")
- Col. 1 (título): "Por que treinar aqui?"
- Col. 2: "A prova cobra tempo, formato e detalhe. Aqui você pratica as três coisas: questões no estilo oficial, contra o relógio, com a nota de corte da certificação."
- Col. 3: "Comece hoje, de graça." + botão pílula "Criar conta"

### 4. Problema → solução (card 01, como "We're not just a modeling agency")
- **Título:** "NÃO É SÓ UM BANCO DE QUESTÕES"
- **Texto:** "Ler resposta não é o mesmo que fazer prova. O AWS Approve monta o exame com a quantidade oficial de questões, embaralha tudo e corta no tempo certo. Quando acaba, você vê nota, acertos por questão e o que revisar."
- **Imagem:** print da tela de questão sobre fundo roxo
- Número "01"

### 5. Features (grid 2×3, cards escuros com borda fina)
1. **Prova real** — "Quantidade oficial de questões, cronômetro e nota de corte. Ao zerar o tempo, a prova termina."
2. **Gabarito na hora** — "Ative o feedback imediato: confirme a resposta e veja o certo e a explicação na mesma tela."
3. **4 formatos de questão** — "Escolha única, múltipla, ordenação e correspondência, como na prova."
4. **Pause e continue** — "Saiu no meio? A tentativa fica salva e você retoma de onde parou."
5. **Revisão completa** — "Filtre erros e acertos e reveja cada questão depois de terminar."
6. **Catálogo organizado** — "35 certificações por provedor e nível, com link para o guia oficial."

### 6. Como funciona (3 passos, sticky no código)
1. "Crie sua conta" — leva menos de um minuto
2. "Escolha a certificação" — por provedor e nível
3. "Faça o simulado" — modo treino ou prova real

### 7. Simulados disponíveis
- **Título:** "14 simulados prontos. Mais a caminho."
- Chips/cards por provedor: AWS (8), Google Cloud (1), GitHub (5), Azure (em breve)
- Exemplos: AWS Developer Associate · AWS Solutions Architect Professional · AWS Security Specialty · Google Cloud Digital Leader · GitHub Actions · GitHub Copilot

### 8. Prova social
`[PREENCHER]` — depoimentos reais de quem passou. Sem dado real, a seção sai do layout (não inventar).

### 9. FAQ
- "É grátis?" — "Sim. Você cria a conta e faz todos os simulados sem pagar nada."
- "As questões são as da prova oficial?" — "Não. São questões de prática no estilo e nos domínios cobrados pela prova." `[CONFIRMAR]`
- "Funciona no celular?" — "Sim, a prova roda no navegador do celular e do computador."
- "Meu progresso fica salvo?" — "A tentativa em andamento e o histórico ficam salvos neste navegador."
- "Quais certificações vêm a seguir?" — "Novas provas entram aos poucos no catálogo, sem data definida."

### 10. CTA final (como "We Believe Beauty Knows No Boundaries")
- **Headline:** "Sua próxima certificação começa no próximo simulado."
- CTA circular "Criar conta" + "Já tenho conta"

### 11. Footer
AWS Approve · by Gustavo Ribeiro (guhdev.me) · Login · Cadastro · aviso: "Não afiliado à AWS, Google, Microsoft ou GitHub."

## SEO
- **title:** "AWS Approve — Simulados de certificação AWS, Google Cloud e GitHub"
- **description:** "Treine para certificações de nuvem com simulados no formato oficial: cronômetro, nota de corte e gabarito na hora."
- **Open Graph:** imagem 1200×630 com a arte do hero + headline

## Direção visual

Base: `high-end-visual-design` + `frontend-design`. Referência enviada: dark cinematográfico, roxo neon, tipografia display enorme, linhas-guia verticais finas, nav em pílula, CTA circular.

### Paleta (tokens)
| Token | Dark (principal) | Uso |
|---|---|---|
| background | `#07050D` | fundo |
| surface | `#120D1F` | cards, sidebar |
| surface-2 | `#1B1430` | hover, inputs |
| border | `#FFFFFF14` | bordas e linhas-guia |
| foreground | `#F4F1FA` | texto |
| muted | `#A39BB5` | texto secundário |
| primary | `#A855F7` | CTA, foco, seleção |
| primary-glow | `#C084FC` | halos e brilho |
| accent | `#E879F9` | destaques pontuais |
| deep | `#2E1065` | gradientes |
| success | `#34D399` | acerto, aprovado |
| destructive | `#F87171` | erro, reprovado |
| warning | `#FBBF24` | timer acabando |

O tema claro fica para depois, derivado destes tokens (fundo `#F7F5FB`, primary `#7C3AED`).

### Tipografia
- **Display:** Unbounded (geométrica e larga, faz o papel do logo "RAZE"), 64–120px no hero, tracking −2%
- **Texto:** Manrope 16/26
- **Labels/códigos de prova:** JetBrains Mono 12px, caixa alta, tracking 16%
- Detalhe da referência: primeira letra do título maior ("**E**ntre na prova…")

### Layout e detalhes
- Grid de 12 colunas, 1440px, margem 64px; **3 linhas-guia verticais tracejadas** (1px, `#FFFFFF14`) atravessando a página
- Nav em pílula com borda clara e fundo translúcido; botão "Criar conta" em pílula separada à direita
- CTA circular de 140px com 2 anéis de halo (`primary-glow` a 30% e 10%)
- Cards: raio 20px, borda 1px `border`, sem sombra pesada; brilho radial roxo por trás das seções-chave
- Seções com muito ar (160px entre elas)

### App (mesmo sistema, mais contido)
- Sidebar `surface` com item ativo em pílula roxa; header com breadcrumb
- Prova: fundo liso (sem arte e sem glow atrás da questão, para não cansar a leitura), alternativa selecionada com borda `primary` e fundo `primary` a 10%, timer em mono, painel de navegação com bolinhas por status
- Resultado: anel de progresso com a nota, selo APROVADO/REPROVADO, lista por questão
- Login/cadastro: arte do hero desfocada ao fundo, card central de vidro escuro

### Efeitos (aprovados em 2026-11-17)
Só parallax, sem 3D. Biblioteca: `motion` (já instalada).
- **Camadas em profundidade:** arte do hero e do CTA final rolam mais devagar que o texto
- **Parallax de mouse:** arte e CTA circular do hero seguem o cursor de leve (desligado em touch)
- **Sticky em "Como funciona":** a seção fica fixa e destaca o passo 1, 2, 3 conforme a rolagem
- **Reveal ao rolar:** títulos e cards entram com fade + leve subida
- **Marquee:** faixa de provedores corre continuamente
- Fora: zoom no scroll, scroll horizontal
- `prefers-reduced-motion`: tudo estático; no mobile, sem parallax de mouse

### Tema claro
Escuro roxo é o padrão; o toggle continua com uma versão clara derivada (fundo `#F7F5FB`, primary `#7C3AED`).

### Implementação
- Figma: https://www.figma.com/design/e4Hl7WjuvXy44Z2X3VsZ71
- Arte: `public/landing/hero-art.png` (1536×1024, servida otimizada pelo `next/image`)
- `/` mostra a landing para visitantes e redireciona logado para `/certificacoes`

## Telas no Figma
1. Landing (desktop 1440)
2. Landing (mobile 390), só o hero e a primeira dobra
3. Login
4. Cadastro
5. Catálogo: simulados por provedor (sidebar)
6. Prova: questão de escolha única com timer e painel
7. Resultado
8. Revisão
