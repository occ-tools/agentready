# Examples

These examples show the report shapes AgentReady is designed to produce.

## Clean Project

Use this when a repository already has agent boundaries and no active findings.

- [Clean report](examples/clean-report.md)

```bash
agentready scan . --format markdown --output agentready-report.md
```

## Legacy Project

Use this when a repository has existing findings that need human review before
CI enforcement.

- [Legacy report](examples/legacy-report.md)

```bash
agentready scan . --format markdown --group-by category --output agentready-report.md
agentready baseline .
agentready baseline diff .
agentready scan . --baseline .agentready-baseline.json --ci
```

## CI And MCP Project

Use this when the repository has GitHub Actions and MCP configuration that
should be reviewed before AI agents receive tool access.

- [CI and MCP report](examples/ci-mcp-report.md)

```bash
agentready scan . --format markdown --group-by category --max-findings 25 --output agentready-report.md
agentready scan . --format sarif --output agentready.sarif
```

## Runnable Fixtures

Clone the repository and run:

```bash
agentready scan test/fixtures/demo-clean
agentready scan test/fixtures/demo-legacy
agentready scan test/fixtures/demo-ci-mcp
```

