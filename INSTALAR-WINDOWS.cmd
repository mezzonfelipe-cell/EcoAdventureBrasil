@echo off
setlocal
chcp 65001 >nul
set "DIR=%LOCALAPPDATA%\EcoAdventureBrasil"
if not exist "%~dp0index.html" (echo ERRO: index.html nao encontrado na pasta.& pause& exit /b 1)
if not exist "%DIR%" mkdir "%DIR%"
copy /Y "%~dp0index.html" "%DIR%\index.html" >nul
if errorlevel 1 (echo ERRO ao copiar o jogo.& pause& exit /b 1)
if exist "%~dp0EcoAdventureBrasil.ico" copy /Y "%~dp0EcoAdventureBrasil.ico" "%DIR%\EcoAdventureBrasil.ico" >nul
copy /Y "%~dp0abrir-jogo.cmd" "%DIR%\abrir-jogo.cmd" >nul
powershell -NoProfile -ExecutionPolicy Bypass -Command "$desktop=[Environment]::GetFolderPath('Desktop'); $shortcut=(New-Object -ComObject WScript.Shell).CreateShortcut((Join-Path $desktop 'Eco Adventure Brasil.lnk')); $shortcut.TargetPath=Join-Path $env:LOCALAPPDATA 'EcoAdventureBrasil\abrir-jogo.cmd'; $shortcut.WorkingDirectory=Join-Path $env:LOCALAPPDATA 'EcoAdventureBrasil'; $shortcut.Description='Jogar Eco Adventure Brasil offline'; $icon=Join-Path $env:LOCALAPPDATA 'EcoAdventureBrasil\EcoAdventureBrasil.ico'; if(Test-Path $icon){$shortcut.IconLocation=$icon}; $shortcut.Save()"
if errorlevel 1 (echo Nao foi possivel criar o atalho.& pause& exit /b 1)
echo Instalacao concluida. Abra o atalho Eco Adventure Brasil na area de trabalho.
pause
