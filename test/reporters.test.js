import { test } from "node:test";
import assert from "node:assert/strict";
import { formatMarkdown, formatSarif, formatText } from "../src/reporters.js";

test("formatSarif emits valid SARIF with rule and location data", () => {
  const sarif = JSON.parse(
    formatSarif({
      root: "/tmp/project",
      scannedAt: "2026-06-02T00:00:00.000Z",
      filesScanned: 1,
      summary: { high: 1, medium: 0, low: 0, info: 0 },
      findings: [
        {
          id: "secret.github_token",
          severity: "high",
          title: "GitHub token-like value is present",
          file: "src/index.js",
          line: 12,
          evidence: "ghp_123...[redacted]",
          recommendation: "Move the token to a secret manager.",
          fingerprint: "abc123def456abc123def456"
        }
      ]
    })
  );

  assert.equal(sarif.version, "2.1.0");
  assert.equal(sarif.runs[0].tool.driver.rules[0].id, "secret.github_token");
  assert.equal(sarif.runs[0].results[0].level, "error");
  assert.equal(sarif.runs[0].results[0].partialFingerprints.primaryLocationLineHash, "abc123def456abc123def456");
  assert.equal(sarif.runs[0].results[0].locations[0].physicalLocation.region.startLine, 12);
});

test("formatText surfaces status, config, threshold, and review report next step", () => {
  const output = formatText({
    root: "/tmp/project",
    scannedAt: "2026-06-02T00:00:00.000Z",
    durationMs: 12,
    filesScanned: 2,
    config: {
      configPath: "/tmp/project/.agentready.json",
      failOn: "medium"
    },
    summary: { high: 0, medium: 1, low: 0, info: 0 },
    findings: [
      {
        id: "package.lifecycle_script",
        severity: "medium",
        title: "Lifecycle script runs during install",
        category: "package",
        file: "package.json",
        evidence: "postinstall",
        recommendation: "Review the script before agent-assisted installs."
      }
    ]
  });

  assert.match(output, /Status: review recommended/);
  assert.match(output, /Config: \/tmp\/project\/\.agentready\.json/);
  assert.match(output, /CI fail threshold: medium/);
  assert.match(output, /Save a markdown report/);
});

test("formatMarkdown surfaces ready status and quickstart next step for defaults", () => {
  const output = formatMarkdown({
    root: "/tmp/project",
    scannedAt: "2026-06-02T00:00:00.000Z",
    durationMs: 12,
    filesScanned: 2,
    config: {
      configPath: null,
      failOn: "medium"
    },
    summary: { high: 0, medium: 0, low: 0, info: 0 },
    findings: []
  });

  assert.match(output, /- Status: ready/);
  assert.match(output, /- Config: `\(defaults\)`/);
  assert.match(output, /Run agentready quickstart \./);
});
