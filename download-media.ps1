param(
    [string]$ListPath = "wix-media-urls.txt",
    [string]$OutputFolder = "junjun-app/src/assets/heavenly-connected"
)

$urls = Get-Content -Path $ListPath | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
if (-not (Test-Path -Path $OutputFolder)) {
    New-Item -ItemType Directory -Path $OutputFolder -Force | Out-Null
}

foreach ($url in $urls) {
    $fileName = Split-Path -Path $url -Leaf
    $destination = Join-Path -Path $OutputFolder -ChildPath $fileName
    Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing
}
