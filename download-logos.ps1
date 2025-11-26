# Script to download missing technology logos

$logosPath = "c:\Users\andre\Desktop\inge115_portafolio\public\assets\logos"

# List of logos to download from Simple Icons CDN
$logos = @{
    "php" = "https://cdn.simpleicons.org/php/777BB4"
    "fastapi" = "https://cdn.simpleicons.org/fastapi/009688"
    "nodejs" = "https://cdn.simpleicons.org/nodedotjs/339933"
    "nestjs" = "https://cdn.simpleicons.org/nestjs/E0234E"
    "prisma" = "https://cdn.simpleicons.org/prisma/2D3748"
    "strapi" = "https://cdn.simpleicons.org/strapi/4945FF"
    "graphql" = "https://cdn.simpleicons.org/graphql/E10098"
    "typescript" = "https://cdn.simpleicons.org/typescript/3178C6"
    "astro" = "https://cdn.simpleicons.org/astro/FF5D01"
    "angular" = "https://cdn.simpleicons.org/angular/DD0031"
    "vuejs" = "https://cdn.simpleicons.org/vuedotjs/4FC08D"
    "bootstrap" = "https://cdn.simpleicons.org/bootstrap/7952B3"
    "heroku" = "https://cdn.simpleicons.org/heroku/430098"
    "radixui" = "https://cdn.simpleicons.org/radixui/161618"
    "bulma" = "https://cdn.simpleicons.org/bulma/00D1B2"
    "daisyui" = "https://cdn.simpleicons.org/daisyui/5A0EF8"
    "chakraui" = "https://cdn.simpleicons.org/chakraui/319795"
    "mantine" = "https://cdn.simpleicons.org/mantine/339AF0"
    "postgresql" = "https://cdn.simpleicons.org/postgresql/4169E1"
    "mongodb" = "https://cdn.simpleicons.org/mongodb/47A248"
    "ubuntu" = "https://cdn.simpleicons.org/ubuntu/E95420"
    "vercel" = "https://cdn.simpleicons.org/vercel/000000"
    "netlify" = "https://cdn.simpleicons.org/netlify/00C7B7"
    "dart" = "https://cdn.simpleicons.org/dart/0175C2"
    "flutter" = "https://cdn.simpleicons.org/flutter/02569B"
}

Write-Host "Downloading missing logos..." -ForegroundColor Green

foreach ($logo in $logos.GetEnumerator()) {
    $fileName = "$($logo.Key).svg"
    $filePath = Join-Path $logosPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "  OK $fileName already exists" -ForegroundColor Yellow
    } else {
        try {
            Write-Host "  Downloading $fileName..." -ForegroundColor Cyan
            Invoke-WebRequest -Uri $logo.Value -OutFile $filePath
            Write-Host "  OK Downloaded $fileName" -ForegroundColor Green
        } catch {
            Write-Host "  ERROR Failed to download $fileName" -ForegroundColor Red
        }
    }
}

Write-Host "Done! All logos have been processed." -ForegroundColor Green
