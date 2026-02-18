FROM opencommander/core:latest

ARG USERNAME=commander
ARG CLAUDE_CODE_VERSION=stable
ARG TZ
ARG GIT_DELTA_VERSION=0.18.2

# Ensure UTF-8 + 256-color defaults for TUIs (screen doesn't support truecolor well)
ENV LANG=C.UTF-8
ENV LANGUAGE=en_US:en  
ENV LC_ALL=C.UTF-8
ENV TERM=xterm-256color
ENV TZ="$TZ"
ENV POWERLEVEL9K_DISABLE_GITSTATUS=true

RUN chown -R commander:commander "$HOME/.npm" 

### ENTRYPOINT ###
COPY entrypoint.sh /opt/entrypoint.sh
RUN chmod +x /opt/entrypoint.sh

### TASK EXECUTION SCRIPTS ###
COPY scripts/task-runner.sh /opt/commander/scripts/task-runner.sh
COPY scripts/task-entrypoint.sh /opt/commander/scripts/task-entrypoint.sh
RUN chmod +x /opt/commander/scripts/task-runner.sh /opt/commander/scripts/task-entrypoint.sh

##########
# GitHub #
##########
RUN echo "Installing GitHub CLI..."
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && rm -rf /var/lib/apt/lists/*


RUN apt-get update \
    && apt-get install -y libgtk-3-dev libwebkit2gtk-4.1-dev libayatana-appindicator3-dev librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

# Persist bash history.
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && mkdir /commandhistory \
    && touch /commandhistory/.bash_history \
    && chown -R $USERNAME:$USERNAME /commandhistory

USER $USERNAME
ENV HOME=/home/$USERNAME
WORKDIR $HOME

# Configure tmux: hide status bar, enable mouse for scroll
RUN printf "%s\n%s\n" "set -g status off" "set -g mouse on" > $HOME/.tmux.conf && \
    chown $USERNAME:$USERNAME $HOME/.tmux.conf

# Set the default shell to zsh rather than sh
ENV SHELL=/bin/zsh

# Set the default editor and visual
ENV EDITOR=nano
ENV VISUAL=nano

RUN echo '. "$HOME/.cargo/env"' >> $HOME/.zshrc
RUN echo '. $NVM_DIR/nvm.sh' >> $HOME/.zshrc

# Default powerline10k theme
ARG ZSH_IN_DOCKER_VERSION=1.2.1
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v${ZSH_IN_DOCKER_VERSION}/zsh-in-docker.sh)" -- \
    -p git \
    -a "export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p https://github.com/zsh-users/zsh-history-substring-search \
    -p https://github.com/zsh-users/zsh-syntax-highlighting \
    -p 'history-substring-search' \
    -x

##########
# Claude #
##########
RUN echo "Installing Claude..."
RUN curl -fsSL https://claude.ai/install.sh | bash -s ${CLAUDE_CODE_VERSION}
RUN echo 'export PATH="$HOME/.local/bin:$PATH"' >> $HOME/.zshrc

#########
# CODEX #
#########
RUN echo "Installing Codex..."
RUN bash "$NVM_DIR/install.sh" && \
    bash -lc "source $NVM_DIR/nvm.sh && nvm install 20 && nvm use 20 && npm i -g @openai/codex"

############
# OPENCODE #
############
RUN echo "Installing OpenCode..."
RUN curl -fsSL https://opencode.ai/install | bash

#########
# CURSOR #
#########
RUN echo "Installing Cursor..."
RUN curl https://cursor.com/install -fsS | bash

#############
# GITBUTLER #
#############
RUN echo "Installing GitButler..."
USER root
RUN curl -fsSL -o /tmp/gitbutler.deb https://releases.gitbutler.com/releases/release/0.19.1-2847/linux/aarch64/GitButler_0.19.1_arm64.deb \
    && apt-get update \
    && apt-get install -y /tmp/gitbutler.deb \
    && rm -f /tmp/gitbutler.deb \
    && rm -rf /var/lib/apt/lists/*
USER $USERNAME
RUN git config --global user.name "Open Commander" \
    && git config --global user.email "me@opencommander.dev"
RUN echo 'alias but="gitbutler-tauri"' >> $HOME/.zshrc

WORKDIR /workspace
