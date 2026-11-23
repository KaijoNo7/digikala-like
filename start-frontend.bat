@echo off
rem Starts the Azar Digital storefront on http://localhost:5173 (Windows).
rem First run installs node_modules.
setlocal
cd /d "%~dp0frontend"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js 20.19+ or 22.12+ is required: https://nodejs.org/
  goto :fail
)

node -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&b>=12)||(a===20&&b>=19)?0:1)"
if errorlevel 1 (
  echo Your Node.js version is too old. Vite needs 20.19+ or 22.12+: https://nodejs.org/
  goto :fail
)

rem npm creates vite.cmd only on Windows; without it, node_modules came from
rem another OS (or is missing), so reinstall cleanly.
if not exist "node_modules\.bin\vite.cmd" (
  if exist node_modules rmdir /s /q node_modules
  echo Installing frontend dependencies...
  call npm install || goto :fail
)

echo Frontend running at http://localhost:5173  - press Ctrl+C to stop
call npm run dev -- --port 5173 --strictPort
pause
exit /b 0

:fail
echo.
echo Frontend could not start.
pause
exit /b 1
