param(
  [string]$Root = "C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel",
  [switch]$StartServer,
  [int]$Port = 4000
)

$ErrorActionPreference = 'Stop'

$src = Join-Path $Root 'junjun-app\dist\junjun-app'
$current = Join-Path $Root 'deployment\Current'
$archiveRoot = Join-Path $Root 'deployment\Archived'
$serverEntry = Join-Path $current 'server\server.mjs'

if (-not (Test-Path $src)) {
  throw "Build output not found at $src"
}

$portProcesses = @()
try {
  $portProcesses = Get-NetTCPConnection -LocalPort $Port -ErrorAction Stop |
    Select-Object -ExpandProperty OwningProcess -Unique
} catch {
  $portProcesses = @()
}

$matchingProcesses = Get-CimInstance Win32_Process -Filter "name = 'node.exe'" |
  Where-Object { $_.CommandLine -like "*server\\server.mjs*" }

$processIdsToStop = @($portProcesses + ($matchingProcesses | Select-Object -ExpandProperty ProcessId)) |
  Where-Object { $_ } |
  Select-Object -Unique

foreach ($processId in $processIdsToStop) {
  Stop-Process -Id $processId -Force
}

if (Test-Path $current) {
  Remove-Item $current -Recurse -Force
}

New-Item -ItemType Directory -Path $current | Out-Null
Copy-Item (Join-Path $src '*') -Destination $current -Recurse -Force

$timestamp = Get-Date -Format 'yyyy-MM-dd_HH.mm.ss'
$archive = Join-Path $archiveRoot "junjun-app-$timestamp"
Copy-Item $current -Destination $archive -Recurse -Force

$startedPid = $null
if ($StartServer) {
  $startedProcess = Start-Process -FilePath 'node' -ArgumentList $serverEntry -WorkingDirectory $current -PassThru
  $startedPid = $startedProcess.Id
}

Write-Output "CURRENT=$current"
Write-Output "ARCHIVE=$archive"
if ($startedPid) {
  Write-Output "SERVER_PID=$startedPid"
}
