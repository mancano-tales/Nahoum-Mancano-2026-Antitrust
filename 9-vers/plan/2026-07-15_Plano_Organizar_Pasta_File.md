---
tipo: Plano
titulo: "Organizar e renomear a pasta file/ (fontes primárias brutas), com README versionado documentando a estrutura"
status: CONCLUÍDO
criado: "2026-07-15 15:19"
concluido: "2026-07-15 15:31"
agentes:
  orquestrador: "Claude Sonnet 5 (Claude Code, VS Code)"
  executor: "Claude Sonnet 5 (Claude Code, VS Code)"
  auditor: null
autor_humano: "Tales Mançano"
tarefas:
  - { desc: "Ajustar .gitignore para permitir versionar só file/README.md (padrão /file/* + negação), sem trazer nenhum PDF/docx/pptx para o git", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Criar as 6 subpastas de file/ e mover/renomear os 54 arquivos de conteúdo conforme a tabela de mapeamento da Seção 2", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Deletar file/Gerdau-Pains [Laisa-Pains] (1995)/My Drive.lnk (atalho quebrado do Google Drive, sem valor)", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Mover file/sesu.pdf para fora do repositório (não apagar — conteúdo sem relação com o projeto, mas decisão de descarte definitivo é do autor)", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Deletar o zip duplicado na raiz do repositório ([3] Atos de Concentração (CADE)-20260714T171033Z-1-001.zip, 876MB) — decisão do autor: apagar já, sem esperar checkpoint de validação", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Criar file/README.md com o índice da nova estrutura (conteúdo-alvo na Seção 4)", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Atualizar em TODO.md as duas referências a caminhos antigos dos .pptx (item da Flash Talk FAPESP, criado 2026-07-15 14:24) para os novos caminhos em file/presentations/", status: concluido, data: "2026-07-15 15:31" }
  - { desc: "Rodar checagem de contagem/tamanho pós-reorganização (Seção 5) antes de considerar a tarefa concluída", status: concluido, data: "2026-07-15 15:31" }
relacionados: ["2026-07-15_1455_organizar-pasta-file_conversa-claude.md"]
news: []
---

# Plano — Organizar e Renomear a Pasta `file/`

> **Status**: CONCLUÍDO (2026-07-15 15:31) — executado por Claude Sonnet 5 na mesma conversa (o autor pediu para não esperar por outro agente). Ver Seção 6 para o relato de execução.
> **O que é este documento**: roteiro de execução para reorganizar `file/` (971 MB de fontes primárias brutas — processos do CADE, histórico legislativo, entrevistas, literatura de referência, apresentações e rascunhos superados do artigo), hoje uma pasta plana sem estrutura, com nomes de arquivo pouco descritivos e alguns itens sem relação com o projeto. `file/` é inteiramente gitignorada (`/file/` no `.gitignore`) por conter ~1,8 GB combinados com o `.zip` de mesmo conteúdo na raiz — este plano também resolve essa duplicação.
> **Elaborado por**: Claude Sonnet 5 (Claude Code, VS Code), a pedido do autor.
> **Por quê**: Tales não tem familiaridade com o conteúdo de `file/` (não mexe nela há meses) e quer que fique intuitiva de explorar e documentada, sem depender de abrir cada PDF para saber o que é.
> **Como usar**: Este plano é para **outro agente executar** — não é para ser executado nesta mesma conversa. Todas as decisões de design abaixo já foram fechadas com o autor humano numa sessão de `/grill-me` (Seção 1) antes deste plano ser escrito; o executor não precisa (nem deve) reabrir essas decisões, só executar a tabela de mapeamento da Seção 2 e os passos da Seção 3. Os únicos itens em aberto são os marcados `[VERIFY]` (Seção 2.4) — não travam a execução, mas precisam de confirmação humana depois.
> **Regra dura**: nenhum arquivo de conteúdo é apagado por este plano, exceto os dois itens explicitamente listados na Seção 3.2 (`My Drive.lnk` e o `.zip` duplicado) e a remoção de `sesu.pdf` do repositório (movido, não apagado). Tudo mais é `mv`/rename dentro de `file/`.

---

## 1. Decisões já fechadas com o autor (sessão `/grill-me`, 2026-07-15)

| # | Decisão | Escolha do autor |
|---|---|---|
| 1 | Onde documentar a organização, já que `file/` é gitignorada | **README.md versionado dentro de `file/`**, via exceção pontual no `.gitignore` |
| 2 | Idioma de nomes de pastas/arquivos novos | **Inglês** |
| 3 | Apresentações (.pptx) e literatura secundária (Ibrac, Guia CADE, Perfil dos reguladores) | **Ficam dentro de `file/`**, em subpastas próprias por tipo |
| 4 | `My Drive.lnk` (atalho quebrado) e `sesu.pdf` (conteúdo sem relação — regulação de Educação Superior, não antitruste) | `.lnk` **deletado**; `sesu.pdf` **movido para fora do repositório** (não apagado) |
| 5 | Itens de identidade ambígua (anexo com número de processo diferente dentro de Ambev; "Voto AC 58-1995" sem confirmação de caso) | **Renomear com o melhor palpite + marcar `[VERIFY]`** — não travar a reorganização esperando confirmação |
| 6 | Duas cópias de rascunho do artigo dentro de `file/` (redundantes com o `.qmd`, mesma situação já documentada no `CLAUDE.md` para as cópias da raiz do repositório) | **Mover para `file/article-drafts-superseded/`**, sem apagar |
| 7 | O `.zip` duplicado na raiz (876 MB, export do Google Drive, cópia idêntica do `file/` atual — confirmado por `unzip -l`: mesmos 56 arquivos) | **Deletar já**, sem esperar validação — `file/` só é movido/renomeado, nada de conteúdo é destruído no processo em si |

---

## 2. Estrutura-alvo e mapeamento completo de renomeação

### 2.1 Árvore final

```
file/
├── README.md                              [NOVO — versionado, ver Seção 4]
├── cade-proceedings/
│   ├── ambev-antarctica-brahma-1999_AC-08012.005846-1999-12/
│   │   ├── vol-01.pdf … vol-31.pdf        [ver nota de gap no vol-07 — Seção 2.4]
│   │   ├── via-cade-01.pdf
│   │   ├── via-cade-02.pdf
│   │   └── annex_PA-08012.004363-2000-89_vol-04_VERIFY-processo-relacionado.pdf
│   ├── gerdau-pains-laisa-1995_AC-0016-1994/
│   │   ├── vol-01.pdf … vol-04.pdf
│   │   ├── votes_AC-0016-1994.pdf
│   │   └── expert-opinion_elizabeth-farina.pdf
│   └── brahma-miller-1995_AC-0058-1995_VERIFY/
│       ├── vol-01.pdf
│       └── vote_AC-0058-1995_VERIFY.pdf
├── legislative-history/
│   ├── 1993-04-24_exposicao-de-motivos-184_lei-cade.docx
│   ├── 1993-05-13_diario-congresso-nacional.pdf
│   ├── 1994-06-30_anais-camara-deputados.pdf
│   └── diario-congresso-nacional_exposicao-motivos-lei-cade-1994_VERIFY-data.pdf
├── interviews/
│   ├── pedro-malan_psdb_nunca-fui-liberal-ou-neoliberal_VERIFY-data.pdf
│   └── 2002-07-02_pedro-malan_broadcast-psdb.pdf
├── reference-literature/
│   ├── guia-pratico-cade_ciee.pdf
│   ├── revista-ibrac_v7-n6-2000.pdf
│   └── perfil-reguladores-internacionalizacao-bancaria_1995-2014_VERIFY-relevancia.pdf
├── presentations/
│   ├── antitrust-as-industrial-policy_VERIFY-data.pptx
│   └── SBS-2025_antitruste-como-politica-industrial.pptx
└── article-drafts-superseded/
    ├── antitrust-as-industrial-policy_file-root-copy.docx
    └── 2026_antitrust-as-industrial-policy_nahoum-mancano.docx
```

### 2.2 Tabela de mapeamento (caminho atual → caminho novo)

> Regra para o executor: **nenhum dado novo é inventado.** Datas e números de processo abaixo vêm ou do nome de arquivo original, ou de trechos já citados no `.qmd` (ex. "Votos AC 16-1994, p. 947–949"). Onde a informação não existe no nome original nem no `.qmd`, o campo leva `_VERIFY-...` em vez de uma data/identificação inventada.

**`cade-proceedings/ambev-antarctica-brahma-1999_AC-08012.005846-1999-12/`**

| Atual | Novo |
|---|---|
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_1.pdf` | `vol-01.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_2.pdf` | `vol-02.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_3.pdf` | `vol-03.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_4.pdf` | `vol-04.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_5.pdf` | `vol-05.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_6.pdf` | `vol-06.pdf` |
| *(vol. 7 ausente do arquivo original — ver Seção 2.4)* | — |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_8.pdf` | `vol-08.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_9.pdf` | `vol-09.pdf` |
| `Ambev (1999)/AC_N__08012.005846_1999_12_VOL_10.pdf` … `_VOL_31.pdf` | `vol-10.pdf` … `vol-31.pdf` (numeração 1:1, só zero-padding) |
| `Ambev (1999)/AC_N__08012.005846_99_12_VIA_CADE_1.pdf` | `via-cade-01.pdf` |
| `Ambev (1999)/AC_N__08012.005846_99_12_VIA_CADE_2.pdf` | `via-cade-02.pdf` |
| `Ambev (1999)/ANEXO_COPIA_DO_PA_08012.004363_2000_89_VOL_4.pdf` | `annex_PA-08012.004363-2000-89_vol-04_VERIFY-processo-relacionado.pdf` |

Observação: manter `vol-18_confidencial.pdf` em vez de `vol-18.pdf` para o arquivo `AC_N__08012.005846_1999_12_VOL_18_CONFIDENCIAL.pdf` — **não descartar o marcador CONFIDENCIAL** ao renomear.

**`cade-proceedings/gerdau-pains-laisa-1995_AC-0016-1994/`**

| Atual | Novo |
|---|---|
| `Gerdau-Pains [Laisa-Pains] (1995)/[Caso Gerdau-Pains--Laisa] AC_n__0016.1994_VOL_1.pdf` | `vol-01.pdf` |
| `Gerdau-Pains [Laisa-Pains] (1995)/[Caso Gerdau-Pains--Laisa] AC_n__0016_1994_VOL_2.pdf` | `vol-02.pdf` |
| `Gerdau-Pains [Laisa-Pains] (1995)/AC_n__0016.1994_VOL_3.pdf` | `vol-03.pdf` |
| `Gerdau-Pains [Laisa-Pains] (1995)/AC_n__0016_1994_VOL_4.pdf` | `vol-04.pdf` |
| `Votos AC 16-1994.pdf` *(estava solto na raiz de `file/`)* | `votes_AC-0016-1994.pdf` |
| `Parecer Gerdau Elizabeth Farina.pdf` *(estava solto na raiz de `file/`)* | `expert-opinion_elizabeth-farina.pdf` |
| `Gerdau-Pains [Laisa-Pains] (1995)/My Drive.lnk` | **[DELETE]** |

**`cade-proceedings/brahma-miller-1995_AC-0058-1995_VERIFY/`**

| Atual | Novo |
|---|---|
| `Brahma-Miller (1995)/VOL_1.pdf` | `vol-01.pdf` |
| `Voto AC 58-1995.pdf` *(estava solto na raiz de `file/`)* | `vote_AC-0058-1995_VERIFY.pdf` |

**`legislative-history/`**

| Atual | Novo |
|---|---|
| `Exposição de Motivos nº 184, de 24 de abril de 1993, do Senhor Ministro de Estado da Justiça.docx` | `1993-04-24_exposicao-de-motivos-184_lei-cade.docx` |
| `DCD13MAI1993.pdf` | `1993-05-13_diario-congresso-nacional.pdf` |
| `AnaisCD_30_06_1994_p_1_a_88.pdf` | `1994-06-30_anais-camara-deputados.pdf` |
| `Diário do Congresso Nacional - Exposição de Motivos Lei CADE 1994.pdf` | `diario-congresso-nacional_exposicao-motivos-lei-cade-1994_VERIFY-data.pdf` |

**`interviews/`**

| Atual | Novo |
|---|---|
| `Entrevista Pedro Malan psdb.org.br-Nunca fui um liberal ou neoliberal.pdf` | `pedro-malan_psdb_nunca-fui-liberal-ou-neoliberal_VERIFY-data.pdf` |
| `psdb.org.br-Entrevista do Ministro da Fazenda Pedro Malan divulgada na manhã de02072002 pela agência Broadcast.pdf` | `2002-07-02_pedro-malan_broadcast-psdb.pdf` *(data extraída do nome original: "de02072002" = 02/07/2002)* |

**`reference-literature/`**

| Atual | Novo |
|---|---|
| `guia-cade-ciee-cade.pdf` | `guia-pratico-cade_ciee.pdf` |
| `Revista do Ibrac - v. 7 n. 6 (2000).pdf` | `revista-ibrac_v7-n6-2000.pdf` |
| `Perfil dos reguladores e a internacionalização do sistema bancário brasileiro_ há relação_ (1995–2014).pdf` | `perfil-reguladores-internacionalizacao-bancaria_1995-2014_VERIFY-relevancia.pdf` |

**`presentations/`**

| Atual | Novo |
|---|---|
| `Antitrust as Industrial Policy.pptx` | `antitrust-as-industrial-policy_VERIFY-data.pptx` |
| `SBS-2025 Antitruste como Política Industrial.pptx` | `SBS-2025_antitruste-como-politica-industrial.pptx` |

**`article-drafts-superseded/`**

| Atual | Novo |
|---|---|
| `Antitrust as industrial policy.docx` *(raiz de `file/`)* | `antitrust-as-industrial-policy_file-root-copy.docx` |
| `Texto do Artigo/2026 Antitrust as industrial policy - Nahoum & Mançano.docx` | `2026_antitrust-as-industrial-policy_nahoum-mancano.docx` |

**Fora de `cade-proceedings/…/`, ação direta:**

| Atual | Ação |
|---|---|
| `sesu.pdf` | **Mover para fora do repositório** (ex. pasta de Downloads do usuário) — não apagar |
| `[3] Atos de Concentração (CADE)-20260714T171033Z-1-001.zip` *(raiz do repositório, não dentro de `file/`)* | **Deletar** |

### 2.3 Pastas de origem que ficam vazias e devem ser removidas após o move

`Ambev (1999)/`, `Gerdau-Pains [Laisa-Pains] (1995)/`, `Brahma-Miller (1995)/`, `Texto do Artigo/` — remover as 4 pastas antigas depois que todo o conteúdo for movido.

### 2.4 Itens `[VERIFY]` — não travam a execução, mas precisam de confirmação humana depois

1. **Volume 7 ausente** do dossiê Ambev (a sequência salta de VOL_6 para VOL_8) — pode ser uma lacuna real do arquivo baixado do CADE, ou o volume pode existir com outro nome/local. Não inventar nem renumerar para "fechar" a sequência.
2. **`annex_PA-08012.004363-2000-89_...`** — número de processo diferente do resto do dossiê Ambev (`08012.005846/1999-12`). Pode ser um processo relacionado (ex. um dos processos de acompanhamento/execução do caso) ou ter sido arquivado ali por engano. Mantido dentro da pasta Ambev por ora, com o número original preservado no nome.
3. **`vote_AC-0058-1995_VERIFY.pdf`** e a pasta **`brahma-miller-1995_AC-0058-1995_VERIFY/`** — o `.qmd` confirma por número apenas "Votos AC 16-1994" (Gerdau-Pains); a correspondência entre "AC 58-1995" e o caso Brahma-Miller é o palpite mais plausível (mesmo ano, único outro caso de 1995 no acervo) mas não está confirmada em nenhuma fonte já lida.
4. **Datas ausentes** nos itens marcados `_VERIFY-data` (Diário do Congresso sem data exata no nome original; entrevista Malan "nunca fui liberal"; ambas as apresentações `.pptx`) — não inventar data; se o autor souber, corrige depois.
5. **Relevância de `perfil-reguladores-internacionalizacao-bancaria_1995-2014.pdf`** — trata de regulação bancária, não de concentração industrial/antitruste; pode ser material de outro projeto que parou em `file/` por engano, ou referência teórica genuína (ex. sobre tecnocracia regulatória) — confirmar com o autor se deve mesmo ficar em `reference-literature/`.

---

## 3. Passos de execução

### 3.1 Ajuste do `.gitignore` (fazer antes de criar o README)

O padrão atual (`/file/` — ignora a pasta inteira) **não permite** reincluir um arquivo dentro dela via negação — regra do próprio Git (não é possível negar um arquivo cujo diretório-pai já está excluído). Trocar para excluir o *conteúdo*, não a pasta:

```diff
- /file/
+ /file/*
+ !/file/README.md
  *.zip
```

Isso mantém todo PDF/docx/pptx fora do git (cada item dentro de `file/` some pela regra `/file/*`) e versiona só o `README.md`.

### 3.2 Deleções e remoção do repositório

- `file/Gerdau-Pains [Laisa-Pains] (1995)/My Drive.lnk` — apagar.
- `file/sesu.pdf` — mover para fora do repositório (ex. `%USERPROFILE%\Downloads\sesu.pdf`), não apagar.
- `[3] Atos de Concentração (CADE)-20260714T171033Z-1-001.zip` (raiz do repositório) — apagar. Confirmado por `unzip -l` que é cópia idêntica dos 56 arquivos atuais de `file/` antes desta reorganização — nenhum conteúdo exclusivo é perdido.

### 3.3 Criar as subpastas e mover/renomear conforme a Seção 2.2

Usar `git mv`/`mv` por item (não script de regex em massa sem checagem visual) dado o volume de exceções (`_VERIFY`, `_confidencial`, datas extraídas de nomes irregulares). Conferir cada arquivo grande (>20MB) abriu corretamente após o move, não só que o `mv` não retornou erro.

### 3.4 Atualizar referências cruzadas fora de `file/`

- `TODO.md`, item "Preparar e enviar a Flash Talk... FAPESP" (criado 2026-07-15 14:24): atualizar os dois caminhos citados —
  `file/Antitrust as Industrial Policy.pptx` → `file/presentations/antitrust-as-industrial-policy_VERIFY-data.pptx`
  `file/SBS-2025 Antitruste como Política Industrial.pptx` → `file/presentations/SBS-2025_antitruste-como-politica-industrial.pptx`

### 3.5 Governança

- Rodar `Rscript tools/validate-governance.R` antes do commit (Regra 1 do `CLAUDE.md`).
- Registrar entrada em `NEWS.md` (Regra 2) cobrindo: ajuste do `.gitignore`, criação do `README.md`, e a reorganização de `file/` (mesmo sendo gitignorada em si, a mudança de estrutura e a exceção de `.gitignore` são mudanças versionadas).
- Mover a tarefa correspondente de `TODO.md` (se houver, criar uma entrada "Pendente" apontando para este plano antes de iniciar a execução) para "Concluído" ao final, linkando este plano.
- **Não commitar `3-texts/`** — este plano não toca o artigo.

---

## 4. Conteúdo-alvo do `file/README.md`

O executor cria `file/README.md` com o índice abaixo, substituindo os `_VERIFY-...` por valores confirmados assim que o autor resolver os itens da Seção 2.4:

```markdown
# file/ — Fontes Primárias e Material de Apoio (gitignorado, exceto este README)

Esta pasta guarda o material bruto do projeto: processos do CADE, histórico
legislativo, entrevistas, literatura de referência, apresentações e rascunhos
antigos do artigo. Só este README é versionado no git — todo o resto (~970MB)
fica fora do controle de versão (ver `.gitignore`).

## Estrutura

- `cade-proceedings/` — autos e votos dos 3 casos analisados/citados no artigo:
  - `ambev-antarctica-brahma-1999_AC-08012.005846-1999-12/` — caso central do artigo (Seção 5, Ambev)
  - `gerdau-pains-laisa-1995_AC-0016-1994/` — caso central do artigo (Seção 4, Gerdau-Pains)
  - `brahma-miller-1995_AC-0058-1995_VERIFY/` — caso de contexto (Seção 5) — [VERIFY: confirmar número do processo com o autor]
- `legislative-history/` — histórico legislativo da Lei 8.884/94 (Lei CADE): exposições de motivo, Diário/Anais do Congresso.
- `interviews/` — entrevistas com Pedro Malan (Ministro da Fazenda) citadas no artigo.
- `reference-literature/` — literatura secundária de apoio (Guia Prático do CADE, Revista do Ibrac, [VERIFY: relevância de "perfil-reguladores..."]).
- `presentations/` — apresentações produzidas pelos autores sobre o tema (inclui material reaproveitável para a Flash Talk FAPESP — ver TODO.md).
- `article-drafts-superseded/` — cópias antigas do texto do artigo, já incorporadas ao `.qmd` de autoria primária em `3-texts/`; mantidas apenas como histórico, não editar.

## Pendências (itens `[VERIFY]`)

Ver `9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md`, Seção 2.4, para a lista
completa de itens que precisam de confirmação do autor (volume ausente no dossiê
Ambev, número de processo do anexo, identidade do caso "AC 58-1995", datas não
recuperáveis do nome original, relevância de um item de literatura).
```

---

## 5. Verificação pós-execução

- **Contagem de arquivos**: `file/` tinha 56 arquivos antes (confirmado via `find file -type f | wc -l` e batido contra os 56 arquivos do `.zip` via `unzip -l`). Depois: 56 − 1 (`My Drive.lnk` apagado) − 1 (`sesu.pdf` removido) + 1 (`README.md` novo) = **55 arquivos**.
- **Nenhum arquivo de conteúdo (PDF/docx/pptx) deletado** — só renomeado/movido, exceto os 2 itens explícitos da Seção 3.2.
- **Tamanho total de `file/`** deve cair apenas pelo tanto de `sesu.pdf` (16K) + `My Drive.lnk` (4K) — não deve haver queda maior (sinal de perda de arquivo no meio do move).
- **`git status`** deve mostrar só: `.gitignore` modificado, `file/README.md` novo (rastreado), `TODO.md`/`NEWS.md` modificados, o `.zip` da raiz sumindo do `git status` de untracked — nenhum arquivo dentro de `file/` deve aparecer como untracked além do `README.md`.
- Abrir ao menos 1 PDF grande de cada caso (`cade-proceedings/*/vol-01.pdf`) depois do move para confirmar que não corrompeu no processo.

---

## 6. Relato de Execução (2026-07-15 15:31)

Tales pediu para executar o plano imediatamente na mesma conversa ("Pode execultar você!"), em vez de esperar por outro agente como previsto originalmente na Seção "Como usar". Executado passo a passo conforme as Seções 2–5:

- `.gitignore` ajustado exatamente como no diff da Seção 3.1.
- Todos os 54 arquivos de conteúdo movidos/renomeados conforme a Seção 2.2, sem perdas.
- `My Drive.lnk` apagado; `sesu.pdf` movido para a pasta de Downloads do usuário, fora do repositório; zip duplicado da raiz apagado (confirmado 918.532.008 bytes antes de apagar).
- As 4 pastas antigas (`Ambev (1999)/`, `Gerdau-Pains [Laisa-Pains] (1995)/`, `Brahma-Miller (1995)/`, `Texto do Artigo/`) ficaram vazias após o move e foram removidas.
- `file/README.md` criado com o conteúdo-alvo da Seção 4, com pequenos acréscimos (referência ao padrão exato do `.gitignore`, e à observação de que o vol-07 do Ambev está ausente do arquivo original, não perdido na reorganização).
- **Verificação pós-execução**: `find file -type f | wc -l` → **55** (bate com o esperado); `du -sh file` → 971M (igual ao antes, dentro da margem de arredondamento); nenhuma pasta vazia remanescente (`find file -type d -empty` vazio).
- `Rscript tools/validate-governance.R` rodado após as mudanças: auditoria concluída com sucesso, 97 chaves de citação carregadas, 5 planos indexados (4 anteriores + este).
- `TODO.md` atualizado: os 2 caminhos de `.pptx` no item da Flash Talk FAPESP repontados para `file/presentations/...`; item de "Reorganizar file/" movido de Pendente para Concluído.

Nenhum item `[VERIFY]` foi resolvido nesta execução — permanecem como pendência de confirmação do autor, listados no `file/README.md` e na Seção 2.4 acima.
