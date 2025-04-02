# === deploy.ps1 (wersja stabilna) ===

function Abort($msg) {
    Write-Host ""
    Write-Host "❌ $msg" -ForegroundColor Red
    exit 1
}

# Sprawdzenie zmian
Write-Host "`n===> Sprawdzanie, czy masz niezacommitowane zmiany..." -ForegroundColor Yellow
$changes = git status --porcelain
if ($changes) {
    Abort "Masz niezapisane zmiany. Zrób 'git commit' albo 'git stash' przed deployem."
}

# Budowanie projektu
Write-Host "`n===> Budowanie projektu (main)..." -ForegroundColor Cyan
git checkout main
if ($LASTEXITCODE -ne 0) { Abort "Nie mogę przełączyć się na 'main'" }

npm install
npm run build
if ($LASTEXITCODE -ne 0) { Abort "Błąd budowania projektu" }

# Kopia builda do folderu tymczasowego
$tempPath = "$env:TEMP\vite-deploy-build"
if (Test-Path $tempPath) {
    Remove-Item $tempPath -Recurse -Force
}
New-Item -ItemType Directory -Path $tempPath | Out-Null
Copy-Item dist/* $tempPath -Recurse -Force

# Przełącz na gh-pages
Write-Host "`n===> Przełączanie na 'gh-pages'..." -ForegroundColor Cyan
git checkout gh-pages
if ($LASTEXITCODE -ne 0) { Abort "Nie mogę przełączyć się na 'gh-pages'" }

# Usuwanie starej zawartości (bez .git)
Write-Host "`n===> Usuwanie starej zawartości z 'gh-pages'..." -ForegroundColor Yellow
Get-ChildItem -Force | Where-Object { $_.Name -notin '.git', '.gitignore' } | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Kopiujemy ręcznie zawartość public/ (np. public/images) do folderu builda
if (Test-Path "./public") {
    Copy-Item "./public/*" $tempPath -Recurse -Force
}

# Wrzucenie nowego builda
Write-Host "`n===> Wrzucanie nowej zawartości..." -ForegroundColor Cyan
Copy-Item "$tempPath/*" . -Recurse -Force

# Commit i push
git add .
git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin gh-pages

# Powrót na main
Write-Host "`n===> Powrót na 'main'..." -ForegroundColor Cyan
git checkout main

Write-Host ""
Write-Host "✅ Deploy gotowy: https://mskrobot.github.io" -ForegroundColor Green
