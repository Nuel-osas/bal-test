#!/bin/zsh
cd -- "$(dirname -- "$0")"
if [ ! -d node_modules/next ]; then
  npm ci || exit $?
fi
npm run dev
