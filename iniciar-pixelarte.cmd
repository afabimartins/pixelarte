@echo off
setlocal
cd /d "%~dp0"

echo.
echo Pixelarte - servidor local
echo Abra o endereco: http://localhost:8080
echo Para encerrar, feche esta janela ou pressione Ctrl+C.
echo.

start "" "http://localhost:8080"

where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8080
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8080
  goto :eof
)

echo Python nao foi encontrado neste computador.
echo Instale o Python ou inicie outro servidor local na porta 8080.
pause
