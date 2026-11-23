@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s=Join-Path ([Environment]::GetFolderPath('Desktop')) 'Eco Adventure Brasil.lnk'; if(Test-Path $s){Remove-Item $s -Force}"
if exist "%LOCALAPPDATA%\EcoAdventureBrasil" rmdir /s /q "%LOCALAPPDATA%\EcoAdventureBrasil"
echo Eco Adventure Brasil desinstalado.
pause
