@echo off
rem Starts the Azar Digital demo API on http://localhost:8000 (Windows).
rem First run creates backend\.venv and installs requirements.txt.
setlocal
cd /d "%~dp0backend"

set "PY="
where py >nul 2>nul && set "PY=py -3"
if not defined PY where python >nul 2>nul && set "PY=python"
if not defined PY (
  echo Python 3.9+ is required: https://www.python.org/downloads/
  goto :fail
)

rem Recreate the venv if it is missing or was made on another machine/OS.
".venv\Scripts\python.exe" -c "" >nul 2>nul
if errorlevel 1 (
  echo Creating virtual environment...
  %PY% -m venv --clear .venv || goto :fail
)

".venv\Scripts\python.exe" -c "import fastapi, uvicorn" >nul 2>nul
if errorlevel 1 (
  echo Installing backend dependencies...
  ".venv\Scripts\python.exe" -m pip install -r requirements.txt || goto :fail
)

echo Backend running at http://localhost:8000  - press Ctrl+C to stop
".venv\Scripts\python.exe" -m uvicorn main:app --port 8000
pause
exit /b 0

:fail
echo.
echo Backend could not start.
pause
exit /b 1
