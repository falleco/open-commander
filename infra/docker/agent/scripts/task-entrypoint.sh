#!/bin/bash
# Task Execution Entrypoint for Open Commander Agent
# This entrypoint is used when running tasks in non-interactive mode

set -e

echo "===================================="
echo "= Open Commander Task Executor     ="
echo "===================================="

# Run environment setup
/opt/commander/setup_universal.sh

echo "Environment ready for task execution."

# Check if task input is provided
if [ -z "$TASK_INPUT" ] && [ ! -f "/tmp/task-input.json" ]; then
  echo "ERROR: No task input provided."
  echo "Set TASK_INPUT environment variable or mount task file to /tmp/task-input.json"
  exit 1
fi

# If TASK_INPUT is set, write it to file
if [ -n "$TASK_INPUT" ]; then
  echo "$TASK_INPUT" > /tmp/task-input.json
fi

# Validate JSON
if ! jq empty /tmp/task-input.json 2>/dev/null; then
  echo "ERROR: Invalid JSON in task input"
  exit 1
fi

echo "Task input validated."

# Set up API keys from environment if provided
if [ -n "$ANTHROPIC_API_KEY" ]; then
  export ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY"
fi

if [ -n "$OPENAI_API_KEY" ]; then
  export OPENAI_API_KEY="$OPENAI_API_KEY"
fi

# Run the task runner
exec /opt/commander/scripts/task-runner.sh
