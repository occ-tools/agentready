# AgentReady Security Report

## Summary

- Root: `/workspace/legacy-app`
- Generated: 2026-06-03T00:00:00.000Z
- Duration: 87ms
- Files scanned: 118
- Status: review recommended
- Config: `/workspace/legacy-app/.agentready.json`
- CI fail threshold: medium

| Severity | Count |
| --- | ---: |
| high | 0 |
| medium | 1 |
| low | 1 |
| info | 1 |

## Top Risks

- **MEDIUM** `package.json:8` Package lifecycle script detected: postinstall
- **LOW** `(project)` .agentignore is missing
- **INFO** `(project)` AGENTS.md is missing

## Findings By Category

### agent-boundaries

#### .agentignore is missing

- Rule: `agent.missing_agentignore`
- Severity: low
- Category: agent-boundaries
- Evidence: No .agentignore file was found at the project root.
- Recommendation: Run agentready init and add sensitive paths that agents should avoid.

#### AGENTS.md is missing

- Rule: `agent.missing_agents_md`
- Severity: info
- Category: agent-boundaries
- Evidence: No AGENTS.md file was found at the project root.
- Recommendation: Run agentready init to document safe operating boundaries for AI coding agents.

### package

#### Package lifecycle script detected: postinstall

- Rule: `package.lifecycle_script`
- Severity: medium
- Category: package
- Location: `package.json:8`
- Evidence: postinstall: node setup.js
- Recommendation: Review lifecycle scripts before allowing agents or CI to install dependencies automatically.

## Next Steps

- Review medium severity findings and decide whether to fix, baseline, or explicitly configure exceptions.
- Save a markdown report with agentready scan . --format markdown --output agentready-report.md for review.
- For legacy projects, create a reviewed baseline with agentready baseline . --output .agentready-baseline.json.

