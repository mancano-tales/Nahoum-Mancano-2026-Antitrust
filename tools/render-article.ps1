# render-article.ps1
# Renderiza o artigo em html, docx e pdf para render/<formato>/, e arquiva
# uma copia com timestamp de cada render bem-sucedido em
# render/<formato>/archive/, mantendo historico das rodadas.
# Uso: clique direito -> Executar com PowerShell, ou:
#   pwsh tools/render-article.ps1
#   pwsh tools/render-article.ps1 -Formats html,pdf   (so alguns formatos)
#
# Saida isolada em render/ (nao docs/, que e a pagina estatica de governanca
# Agent Covenant, sem relacao com o artigo).
# --output-dir: sobrescreve o output-dir do projeto so para este render, sem
#               tocar no _quarto.yml.
# --no-clean:   nao apaga a subpasta de saida antes de renderizar -- se o
#               render falhar no meio do processo (comum em pdf via LaTeX),
#               o arquivo da rodada anterior continua disponivel em vez de a
#               pasta ficar vazia. (O Quarto sempre grava no mesmo nome de
#               arquivo -- por isso o historico de versoes e feito copiando
#               cada arquivo gerado para archive/ com timestamp.)
# Nota: --output-dir aninha a saida sob o caminho relativo do arquivo-fonte
#       (render/html/3-texts/Article.html, nao render/html/Article.html) --
#       comportamento nativo do Quarto, mantido por decisao do autor.

param(
    [string[]]$Formats = @("html", "docx", "pdf")
)

$root = "C:\Users\Mancano\Documents\MancanoSync\Nahoum-Mancano-2026-Antitrust"
Set-Location $root

$qmd = "3-texts\Nahoum-Mancano-2026-Antitrust-Article.qmd"
$extMap = @{ html = "html"; docx = "docx"; pdf = "pdf" }
$pdfOutput = $null

foreach ($fmt in $Formats) {
    $outDir = "render\$fmt"
    Write-Host ""
    Write-Host "Renderizando $fmt..." -ForegroundColor Cyan

    quarto render $qmd --to $fmt --output-dir $outDir --no-clean

    $ext = $extMap[$fmt]
    $out = Get-ChildItem "$root\$outDir" -Filter "*.$ext" -Recurse -ErrorAction SilentlyContinue |
           Where-Object { $_.DirectoryName -notlike "*\archive*" } |
           Sort-Object LastWriteTime -Descending |
           Select-Object -First 1

    if ($out) {
        $archiveDir = Join-Path $out.DirectoryName "archive"
        if (-not (Test-Path $archiveDir)) {
            New-Item -ItemType Directory -Path $archiveDir -Force | Out-Null
        }
        $timestamp   = Get-Date -Format "yyyy-MM-dd_HHmm"
        $archiveName = "{0}_{1}{2}" -f $timestamp, $out.BaseName, $out.Extension
        Copy-Item $out.FullName -Destination (Join-Path $archiveDir $archiveName) -Force

        $relPath = $out.FullName.Substring($root.Length + 1)
        Write-Host "OK: $relPath  (arquivado em $($archiveDir.Substring($root.Length + 1))\$archiveName)" -ForegroundColor Green

        if ($fmt -eq "pdf") {
            $pdfOutput = $out.FullName
        }
    } else {
        Write-Host "Render de $fmt falhou ou nao gerou arquivo em $outDir." -ForegroundColor Red
    }
}

if ($pdfOutput) {
    Write-Host ""
    Write-Host "Abrindo PDF para revisao: $pdfOutput" -ForegroundColor Green
    Start-Process $pdfOutput
}
