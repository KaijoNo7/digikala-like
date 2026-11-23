#!/usr/bin/env sh
# Starts the Azar Digital demo API on http://localhost:8000 (macOS / Linux).
# First run creates backend/.venv and installs requirements.txt.
set -e
cd "$(dirname "$0")/backend"

if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  echo "Python 3.9+ is required: https://www.python.org/downloads/"
  exit 1
fi

# Recreate the venv if it is missing or was made on another machine/OS.
if ! .venv/bin/python -c "" >/dev/null 2>&1; then
  echo "Creating virtual environment..."
  "$PY" -m venv --clear .venv
fi

if ! .venv/bin/python -c "import fastapi, uvicorn" >/dev/null 2>&1; then
  echo "Installing backend dependencies..."
  .venv/bin/python -m pip install -r requirements.txt
fi

echo "Backend running at http://localhost:8000  (Ctrl+C to stop)"
exec .venv/bin/python -m uvicorn main:app --port 8000
