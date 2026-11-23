// MetaError from zmk-studio-ts-client exposes its numeric condition but keeps
// the inherited Error.name ("Error"). Do not rely on error.name === "MetaError".
export function isRpcNotFoundError(error: unknown): boolean {
  return (
    error instanceof Error &&
    (error as Error & { condition?: unknown }).condition === 2
  );
}
