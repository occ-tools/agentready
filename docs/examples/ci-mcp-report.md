# AgentReady Security Report

## Summary

- Root: `/workspace/tooling-repo`
- Generated: 2026-06-03T00:00:00.000Z
- Duration: 96ms
- Files scanned: 74
- Status: action required
- Config: `/workspace/tooling-repo/.agentready.json`
- CI fail threshold: medium
- Findings displayed: 5 of 8

| Severity | Count |
| --- | ---: |
| high | 2 |
| medium | 5 |
| low | 1 |
| info | 0 |

## Top Risks

- **HIGH** `.github/workflows/agent.yml:7` pull_request_target workflow checks out repository code
- **HIGH** `mcp.json:14` MCP configuration references a cloud metadata endpoint
- **MEDIUM** `.github/workflows/agent.yml:8` GitHub Actions uses a floating external action or reusable workflow reference
- **MEDIUM** `.github/workflows/agent.yml:13` GitHub Actions grants contents write permission
- **MEDIUM** `mcp.json:8` MCP configuration references a remote server URL

## Findings By Category

### github-actions

#### pull_request_target workflow checks out repository code

- Rule: `github_actions.pull_request_target_checkout`
- Severity: high
- Category: github-actions
- Location: `.github/workflows/agent.yml:7`
- Evidence: uses: actions/checkout@v6
- Recommendation: Avoid checking out pull request code in pull_request_target workflows, or restrict checkout to trusted refs with no secrets.

#### GitHub Actions uses a floating external action or reusable workflow reference

- Rule: `github_actions.unpinned_action`
- Severity: medium
- Category: github-actions
- Location: `.github/workflows/agent.yml:8`
- Evidence: uses: owner/deploy-action@main
- Recommendation: Use a full commit SHA or reviewed release tag instead of a branch or missing ref.

#### GitHub Actions grants contents write permission

- Rule: `github_actions.write_permission`
- Severity: medium
- Category: github-actions
- Location: `.github/workflows/agent.yml:13`
- Evidence: contents: write
- Recommendation: Use least-privilege permissions and grant write access only to jobs that require it.

### mcp

#### MCP configuration references a cloud metadata endpoint

- Rule: `mcp.metadata_endpoint`
- Severity: high
- Category: mcp
- Location: `mcp.json:14`
- Evidence: http://169.254.169.254
- Recommendation: Remove metadata endpoint access from MCP configuration and review whether credentials may be exposed.

#### MCP configuration references a remote server URL

- Rule: `mcp.remote_url`
- Severity: medium
- Category: mcp
- Location: `mcp.json:8`
- Evidence: https://mcp.example.com
- Recommendation: Review remote MCP servers before exposing agent tools or repository context.

_3 finding(s) hidden by the current report limit._

## Next Steps

- Fix high severity findings before giving an AI agent broad repository access.
- Review medium severity findings and decide whether to fix, baseline, or explicitly configure exceptions.
- Save a markdown report with agentready scan . --format markdown --output agentready-report.md for review.
- For legacy projects, create a reviewed baseline with agentready baseline . --output .agentready-baseline.json.
