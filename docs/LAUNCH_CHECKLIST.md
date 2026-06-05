# Launch Checklist

Use this checklist after local validation is clean and before widening adoption.

## Local Gate

```bash
npm run market:check
```

This must pass before creating a GitHub release. It covers tests, self-scan,
configuration validation, package dry-run, packed-tarball install smoke,
Markdown link checks, public-surface keyword checks, and whitespace checks.

## GitHub Setup

- Protect `main` with the checks listed in [Repository settings](REPOSITORY_SETTINGS.md).
- Enable code scanning alerts.
- Keep force pushes blocked on protected branches and release tags.
- Keep bypass access limited to maintainers who can publish releases.

## npm Setup

- Configure npm Trusted Publishing for the `release.yml` workflow.
- Use the GitHub `npm` environment named in [Repository settings](REPOSITORY_SETTINGS.md).
- Keep environment secrets empty when Trusted Publishing is active.
- Do not add a long-lived npm automation token unless Trusted Publishing is temporarily unavailable.

## First Release

- Confirm `package.json` version is final.
- Create a GitHub release tag that exactly matches `v` plus the package version, such as `v0.1.0`.
- Publish through the GitHub `release` workflow.
- Confirm npm provenance is visible after publication.
- Confirm the npm package installs with `npx agentready version`.
- Confirm AgentReady SARIF appears in GitHub code scanning when a CI scan fails on findings.

## Dogfood

Run AgentReady on two or three real repositories before expanding the rule set.
Record only evidence that changes product decisions:

- findings users would act on
- false positives that should be tuned down
- missed risks that need new rules
- whether baseline diff, prune, and debt reports are easy to explain
- whether Markdown and SARIF reports are useful in pull request review

## Do Not Do Yet

- Do not add broad new rules without dogfood evidence.
- Do not add a policy DSL until real repositories show repeated configuration needs.
- Do not publish from a local workstation unless the GitHub release workflow is unavailable and the release notes explain the exception.
