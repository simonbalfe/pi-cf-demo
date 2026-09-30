/** Returns the current UTC timestamp as a human-readable string. */
export function timestamp(): string {
  return new Date().toUTCString();
}
