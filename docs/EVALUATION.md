# Evaluation

Use this page to decide whether AgentReady is ready for a repository or release.

## Good Fit

AgentReady is useful when a repository is about to grant AI coding agents,
agent-driven CI, or MCP tools access to source code. It is strongest for:

- detecting exposed secrets and sensitive files before agent access
- reviewing risky package, shell, workflow, and MCP configuration surfaces
- adding a CI gate with text, JSON, Markdown, or SARIF output
- managing reviewed legacy findings with baselines, diff, prune, and debt reports

## Poor Fit

AgentReady is not a replacement for:

- secret rotation or incident response
- dependency vulnerability scanning
- static application security testing
- cloud IAM or production environment review
- human approval for destructive agent actions

Use those tools alongside AgentReady when the repository risk profile requires
them.

## Local Market Gate

Before release:

```bash
npm run market:check
```

The market gate runs tests, self-scan, configuration validation, npm package
dry-run, packed-tarball install smoke, Markdown local link checks, public-surface
keyword checks, and whitespace checks.

## External Release Gate

These checks require GitHub and npm settings:

- configure the GitHub `npm` environment
- configure npm Trusted Publishing for `release.yml`
- enable required checks for the full CI matrix
- enable code scanning alerts
- publish through the GitHub `release` workflow
- confirm npm provenance after publication
- confirm AgentReady SARIF appears in GitHub code scanning when findings fail CI

## Dogfood Criteria

Run AgentReady on two or three real repositories before expanding the rule set.
Record only product-relevant evidence:

- high-value findings that users would act on
- false positives that should be tuned down
- missed risks that need new rules
- whether baseline diff, prune, and debt reports are easy to explain
- whether Markdown and SARIF reports are useful in pull request review

Do not add broad new rules without evidence from real repositories. More rules
are only useful when they improve decisions without increasing review noise.
