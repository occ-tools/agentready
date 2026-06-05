# Changelog

## Unreleased

- Removed internal planning material from the product documentation package.
- Refined generated agent ignore patterns so source files that discuss secret scanning are not hidden by broad filename globs.
- Hardened the GitHub composite action input handling.
- Improved scanner signal for sensitive directories, extensionless secret files, JSON-style secret assignments, MCP environment references, workflow comments, `pull_request_target` trigger forms, and alternate shell script extensions.
- Added GitHub Actions rules for floating external `uses:` references and `pull_request_target` workflows that check out repository code.
- Added MCP checks for authorization forwarding, OAuth client settings, remote servers, private network endpoints, and cloud metadata endpoints.
- Classified IPv6 localhost MCP URLs as private network endpoints.
- Added `baseline diff` and `baseline prune` for reviewed baseline debt management.
- Added report controls for `--max-findings`, `--summary-only`, and `--group-by category`.
- Added scan input-size control through `maxFileBytes` and `--max-file-size`, plus binary-file skip reporting.
- Preserved UTF-16 text scanning when binary sniffing is enabled.
- Improved onboarding command path quoting for shell-sensitive paths.
- Added JSON `nextSteps` for automation and AI-agent callers.
- Added skipped-file statistics and common extensionless project files such as `Dockerfile`, `Makefile`, and `Justfile`.
- Added baseline entry `firstSeenAt` and `lastSeenAt` metadata plus severity summaries in baseline diffs.
- Added read-only `agentready debt` reporting for baseline debt.
- Added scan-result and baseline JSON schemas with contract tests.
- Added optional SARIF upload support to the GitHub composite action.
- Ensured composite action SARIF uploads still run when scan findings fail the CI threshold.
- Added CI matrix, packed-tarball smoke testing, Dependency Review, Scorecard, and npm provenance release workflow.
- Changed the release workflow to use npm Trusted Publishing instead of a long-lived npm token.
- Added a release workflow guard for npm 11.5.1 or newer before publishing.
- Added repository settings guidance for protected branches, release environments, trusted publishing, tags, and code scanning.
- Corrected trusted publisher setup guidance and required check names for the full CI matrix.
- Added runnable demo fixtures for clean, legacy, and CI/MCP projects.
- Added `npm run market:check` as a local market-readiness gate.
- Added a concise evaluation guide for adoption fit, release gates, and dogfood criteria.
- Expanded SARIF output with tool metadata and the complete rule catalog.
- Expanded SARIF output with a `PROJECTROOT` URI base for more stable code-scanning locations.
- Added product examples and sample reports for clean, legacy, and CI/MCP scenarios.
- Tightened CLI and configuration validation for invalid rule filters, invalid failure thresholds, unknown configuration fields, and non-object configuration files.
- Added config schema hints to generated configuration and documented schema metadata.
- Improved command recommendations for non-current target paths and rejected unsupported command-specific options instead of ignoring them.
- Added output-directory creation for scan reports and baseline files.
- Added `.envrc`, `.npmrc`, `.pypirc`, and `.netrc` coverage to sensitive-file scanning and generated agent boundaries.
- Validated baseline file structure before applying suppression.
- Fixed `**/` path pattern handling so root-level files and directories match expected glob behavior.

## 0.1.0

- Initial AgentReady CLI.
- Added local project scanning for secrets, risky scripts, GitHub Actions risks, MCP configuration risks, Python reproducibility issues, and missing agent boundaries.
- Added `scan`, `init`, `doctor`, `baseline`, `list-rules`, `config validate`, and `version` commands.
- Added text, JSON, Markdown, and SARIF reports.
- Added finding fingerprints and baseline suppression.
- Added starter GitHub Actions workflow and composite action support.
