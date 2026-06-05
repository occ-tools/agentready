import { mkdir, mkdtemp } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import assert from "node:assert/strict";
import { formatCommandPath } from "../src/command-path.js";

test("formatCommandPath quotes shell-sensitive paths literally", async () => {
  const previousCwd = process.cwd();
  const root = await mkdtemp(path.join(os.tmpdir(), "agentready-command-path-"));
  const target = path.join(root, "project $HOME `date`");
  await mkdir(target);

  process.chdir(root);
  try {
    const formatted = formatCommandPath(target);

    assert.equal(formatted.startsWith("'"), true);
    assert.equal(formatted.endsWith("'"), true);
    assert.doesNotMatch(formatted, /^"/);
    assert.match(formatted, /\$HOME/);
    assert.match(formatted, /`date`/);
  } finally {
    process.chdir(previousCwd);
  }
});
