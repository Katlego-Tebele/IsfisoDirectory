# Organize Images for Isifiso-Sakho Carpentry Website

Write-Host "Organizing images for your website..." -ForegroundColor Green

# Copy service images to services folder
Write-Host "`nCopying service images..." -ForegroundColor Yellow
Copy-Item "assets/images/gallery/ceiling.jpg" "assets/images/services/ceiling.jpg" -Force
Copy-Item "assets/images/gallery/kitchen.jpeg" "assets/images/services/kitchen.jpg" -Force
Copy-Item "assets/images/gallery/table.jpeg" "assets/images/services/bar-table.jpg" -Force
Copy-Item "assets/images/gallery/tv.jpeg" "assets/images/services/tv-unit.jpg" -Force
Copy-Item "assets/images/gallery/wardrobe.jpeg" "assets/images/services/wardrobe.jpg" -Force

# Handle floor.webp - convert name only (you may need to convert format manually)
if (Test-Path "assets/images/gallery/floor.webp") {
    Copy-Item "assets/images/gallery/floor.webp" "assets/images/services/flooring.webp" -Force
    Write-Host "Note: floor.webp copied as flooring.webp - consider converting to JPG" -ForegroundColor Cyan
}

# Rename gallery images
Write-Host "`nRenaming gallery images..." -ForegroundColor Yellow
Copy-Item "assets/images/gallery/work1.jpeg" "assets/images/gallery/project-1.jpg" -Force
Copy-Item "assets/images/gallery/work2.jpeg" "assets/images/gallery/project-2.jpg" -Force
Copy-Item "assets/images/gallery/work3.jpeg" "assets/images/gallery/project-3.jpg" -Force
Copy-Item "assets/images/gallery/work4.jpeg" "assets/images/gallery/project-4.jpg" -Force
Copy-Item "assets/images/gallery/work5.jpeg" "assets/images/gallery/project-5.jpg" -Force
Copy-Item "assets/images/gallery/work6.jpeg" "assets/images/gallery/project-6.jpg" -Force

Write-Host "`nDone! Your images are now organized." -ForegroundColor Green
Write-Host "`nService images are in: assets/images/services/" -ForegroundColor Cyan
Write-Host "Gallery images are in: assets/images/gallery/" -ForegroundColor Cyan
Write-Host "`nNext: Open index.html in your browser to see your website!" -ForegroundColor Yellow
