# AGENTS.md

## Agent Boundaries

- Inspect context before changing files.
- Do not read, print, commit, or store secrets, credentials, private keys, recovery codes, or identity documents.
- Treat .env files, key files, database dumps, and private user content as sensitive.
- Ask before running commands that delete files, install global packages, change git history, push branches, or contact production systems.
- Prefer small, reviewable changes and verify behavior with tests or direct checks.

## Sensitive Paths

- .env
- .env.*
- .envrc
- .npmrc
- .pypirc
- .netrc
- **/*.pem
- **/*.key
- **/*.p12
- **/*.pfx
- secrets/
- credentials/
- **/secrets/**
- **/credentials/**
- **/*secret*.env
- **/*credential*.env
- private/
- backups/
- **/private/**
- **/backups/**
