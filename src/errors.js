export class AgentReadyError extends Error {
  constructor(message, exitCode = 4) {
    super(message);
    this.name = "AgentReadyError";
    this.exitCode = exitCode;
    // Remove the constructor frame from the stack trace when available
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AgentReadyError);
    }
  }
}

export function usageError(message) {
  return new AgentReadyError(message, 2);
}

export function configError(message) {
  return new AgentReadyError(message, 3);
}
