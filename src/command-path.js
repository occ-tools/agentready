import path from "node:path";

export function formatCommandPath(root) {
  const relative = path.relative(process.cwd(), root);
  const normalized = relative.replaceAll("\\", "/");
  let value = normalized || ".";

  if (value !== "." && !path.isAbsolute(relative) && !value.startsWith(".")) {
    value = `./${value}`;
  }

  if (/[\s"'$`]/.test(value)) {
    return quoteShellPath(value);
  }

  return value;
}

function quoteShellPath(value) {
  if (process.platform === "win32") {
    // Double quotes work in both cmd.exe and PowerShell; escape embedded double quotes
    return `"${value.replaceAll('"', '""')}"`;
  }

  return `'${value.replaceAll("'", "'\\''")}'`;
}
