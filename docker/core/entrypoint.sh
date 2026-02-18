#!/bin/bash

echo "=================================="
echo "Welcome to Open Commander Agent!"
echo "=================================="

/opt/commander/setup_universal.sh

echo "Environment ready."

if [ "$#" -gt 0 ]; then
  echo "Executing: $*"
  exec "$@"
fi

echo "Dropping you into a bash shell."
exec bash --login
