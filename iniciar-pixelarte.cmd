@echo off
setlocal
cd /d "%~dp0"
title Pixelarte v1.3 - servidor local

echo.
echo ==============================================
echo   Pixelarte PWA v1.3 - teste local
echo ==============================================
echo.

netstat -ano | findstr /R /C:":8080 .*LISTENING" >nul 2>nul
if %errorlevel%==0 (
  echo A porta 8080 ja esta sendo usada.
  echo.
  echo Provavelmente uma versao anterior do servidor Pixelarte continua aberta.
  echo Feche a janela antiga do servidor com Ctrl+C e execute este arquivo novamente.
  echo.
  echo Isso evita que o PWA carregue os arquivos da versao antiga.
  pause
  exit /b 1
)

echo O Pixelarte v1.3 abrira em http://localhost:8080/?v=1.3
echo Para encerrar o servidor, volte a esta janela e pressione Ctrl+C.
echo.

where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8080/?v=1.3
  py -m http.server 8080 --bind 127.0.0.1
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8080/?v=1.3
  python -m http.server 8080 --bind 127.0.0.1
  goto :eof
)

echo Python nao foi encontrado neste computador.
echo Instale o Python ou publique a pasta em uma hospedagem HTTPS para testar o PWA.
pause
