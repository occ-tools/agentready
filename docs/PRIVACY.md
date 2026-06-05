# Privacy

AgentReady is a local scanner.

By default it does not:

- upload repository contents
- upload findings
- send telemetry
- call external APIs
- store secrets outside files you explicitly write

## Reports Are Still Sensitive

AgentReady redacts known secret values, but reports may include:

- sensitive paths
- filenames
- line numbers
- secret-like key names
- contextual evidence

Treat Markdown, JSON, SARIF, and baseline files as sensitive until reviewed.

`.agentignore` is an agent-boundary file, not a privacy filter for reports.
Use configuration `ignorePaths` for reviewed paths that should not appear in
AgentReady results.

## Baseline Files

Baseline files contain finding metadata and fingerprints. Commit them only after
human review.
