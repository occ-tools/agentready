#!/usr/bin/env node

import { runCli } from "../src/cli.js";

runCli(process.argv.slice(2)).catch((error) => {
  // For known AgentReadyErrors, only print the message (no stack noise).
  // For unexpected errors (exit code 4), print the full stack to aid debugging.
  if (error?.exitCode && error.exitCode !== 4) {
    console.error(error.message);
  } else {
    console.error(error?.stack || error?.message || String(error));
  }
  process.exit(error?.exitCode || 4);
});
