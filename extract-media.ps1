$doc = Get-Content -Raw -Path "wix-page.html"
$matches = [regex]::Matches($doc, 'https://static\.wixstatic\.com/media/[^"]+')
$urls = @()
foreach ($match in $matches) {
    $value = $match.Value
    $value = $value.Split(',')[0]
    $value = $value.Split(' ')[0]
    $value = $value -replace 'https://static\.wixstatic\.com/media/https://', 'https://'
    if ($value -match '/v1') {
        $value = $value.Split([string[]]@('/v1'), [System.StringSplitOptions]::None)[0]
    }
    $urls += $value
}
$sorted = $urls | Sort-Object -Unique
$sorted | Set-Content -Path "wix-media-urls.txt"
$sorted
