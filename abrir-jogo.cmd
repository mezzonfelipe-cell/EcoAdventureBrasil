@echo off
setlocal
set "GAME=%~dp0index.html"
if not exist "%GAME%" (echo Jogo nao encontrado.& pause& exit /b 1)
for %%B in ("%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe") do (
  if exist %%B (
    start "Eco Adventure Brasil" %%B --app="file:///%GAME:\=/%"
    exit /b 0
  )
)
start "" "%GAME%"
