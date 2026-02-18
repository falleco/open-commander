#!/bin/bash --login

set -euo pipefail

COMMANDER_ENV_PYTHON_VERSION=${COMMANDER_ENV_PYTHON_VERSION:-}
COMMANDER_ENV_NODE_VERSION=${COMMANDER_ENV_NODE_VERSION:-}
COMMANDER_ENV_RUBY_VERSION=${COMMANDER_ENV_RUBY_VERSION:-}
COMMANDER_ENV_RUST_VERSION=${COMMANDER_ENV_RUST_VERSION:-}
COMMANDER_ENV_GO_VERSION=${COMMANDER_ENV_GO_VERSION:-}
COMMANDER_ENV_SWIFT_VERSION=${COMMANDER_ENV_SWIFT_VERSION:-}
COMMANDER_ENV_PHP_VERSION=${COMMANDER_ENV_PHP_VERSION:-}
COMMANDER_ENV_JAVA_VERSION=${COMMANDER_ENV_JAVA_VERSION:-}

echo "Configuring language runtimes..."

# For Python and Node, always run the install commands so we can install
# global libraries for linting and formatting. This just switches the version.

# For others (e.g. rust), to save some time on bootup we only install other language toolchains
# if the versions differ.

if [ -n "${COMMANDER_ENV_PYTHON_VERSION}" ]; then
    echo "# Python: ${COMMANDER_ENV_PYTHON_VERSION}"
    pyenv global "${COMMANDER_ENV_PYTHON_VERSION}"
    python3 --version
fi

if [ -n "${COMMANDER_ENV_NODE_VERSION}" ]; then
    current=$(node -v | cut -d. -f1)   # ==> v20
    echo "# Node.js: v${COMMANDER_ENV_NODE_VERSION} (default: ${current})"
    if [ "${current}" != "v${COMMANDER_ENV_NODE_VERSION}" ]; then
        nvm alias default "${COMMANDER_ENV_NODE_VERSION}"
        nvm use --save "${COMMANDER_ENV_NODE_VERSION}"
        corepack enable
    fi
fi

if [ -n "${COMMANDER_ENV_RUBY_VERSION}" ]; then
    current=$(ruby -v | cut -d' ' -f2 | cut -d'p' -f1)   # ==> 3.2.3
    echo "# Ruby: ${COMMANDER_ENV_RUBY_VERSION} (default: ${current})"
    if [ "${current}" != "${COMMANDER_ENV_RUBY_VERSION}" ]; then
        mise use --global "ruby@${COMMANDER_ENV_RUBY_VERSION}"
        ruby --version
    fi
fi

if [ -n "${COMMANDER_ENV_RUST_VERSION}" ]; then
    current=$(rustc --version | awk '{print $2}')   # ==> 1.86.0
    echo "# Rust: ${COMMANDER_ENV_RUST_VERSION} (default: ${current})"
    if [ "${current}" != "${COMMANDER_ENV_RUST_VERSION}" ]; then
       rustup default "${COMMANDER_ENV_RUST_VERSION}"
       rustc --version
    fi
fi

if [ -n "${COMMANDER_ENV_GO_VERSION}" ]; then
    current=$(go version | awk '{print $3}')   # ==> go1.23.8
    echo "# Go: go${COMMANDER_ENV_GO_VERSION} (default: ${current})"
    if [ "${current}" != "go${COMMANDER_ENV_GO_VERSION}" ]; then
        mise use --global "go@${COMMANDER_ENV_GO_VERSION}"
        go version
    fi
fi

if [ -n "${COMMANDER_ENV_SWIFT_VERSION}" ]; then
    current=$(swift --version | sed -n 's/^Swift version \([0-9]\+\.[0-9]\+\).*/\1/p')   # ==> 6.2
    echo "# Swift: ${COMMANDER_ENV_SWIFT_VERSION} (default: ${current})"
    if [ "${current}" != "${COMMANDER_ENV_SWIFT_VERSION}" ]; then
        swiftly use "${COMMANDER_ENV_SWIFT_VERSION}"
        swift --version
    fi
fi


if [ -n "${COMMANDER_ENV_PHP_VERSION}" ]; then
    current=$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')
    echo "# PHP: ${COMMANDER_ENV_PHP_VERSION} (default: ${current})"
    if [ "${current}" != "${COMMANDER_ENV_PHP_VERSION}" ]; then
        phpenv global "${COMMANDER_ENV_PHP_VERSION}snapshot"
        php --version
    fi
fi

if [ -n "${COMMANDER_ENV_JAVA_VERSION}" ]; then
    current=$(java -version 2>&1 | awk -F'[ ."]+' '/version/ {print $3}')
    echo "# Java: ${COMMANDER_ENV_JAVA_VERSION} (default: ${current})"
    if [ "${current}" != "${COMMANDER_ENV_JAVA_VERSION}" ]; then
        mise use --global "java@${COMMANDER_ENV_JAVA_VERSION}"
        java -version
    fi
fi