#!/usr/bin/env sh
# Starts the Azar Digital storefront on http://localhost:5173 (macOS / Linux).
# First run installs node_modules.
set -e
cd "$(dirname "$0")/frontend"

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js 20.19+ or 22.12+ is required: https://nodejs.org/"
  exit 1
fi

if ! node -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&b>=12)||(a===20&&b>=19)?0:1)"; then
  echo "Node.js $(node -v) is too old. Vite needs 20.19+ or 22.12+: https://nodejs.org/"
  exit 1
fi

if [ ! -x node_modules/.bin/vite ]; then
  echo "Installing frontend dependencies..."
  npm install
fi

echo "Frontend running at http://localhost:5173  (Ctrl+C to stop)"
exec npm run dev -- --port 5173 --strictPort
