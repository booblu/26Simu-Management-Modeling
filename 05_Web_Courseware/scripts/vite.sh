#!/bin/sh
set -eu

if command -v node >/dev/null 2>&1; then
  NODE_BIN="$(command -v node)"
else
  NODE_BIN="${NODE:-/Users/brook/Library/pnpm/node}"
fi

if [ ! -x "$NODE_BIN" ]; then
  echo "Node executable not found. Set NODE or fix PATH before running this project." >&2
  exit 1
fi

export PATH="$(dirname "$NODE_BIN"):$PATH"

exec "$NODE_BIN" ./node_modules/vite/bin/vite.js "$@"
