# Pi Cloudflare Demo

A tiny TypeScript project for testing [Pi](https://github.com/cloudflare/pi) running inside a Cloudflare Container.

## Files

### `hello.ts`
The main entry point. It imports from `utils.ts` and exports two functions:

- **`greet(name)`** — returns `Hello, <name>!`
- **`farewell(name)`** — returns `Goodbye, <name>. See you next time.`

It then logs a greeting, a farewell, and the current UTC timestamp to the console.

### `utils.ts`
A small utility module. Exports:

- **`timestamp()`** — returns the current date/time as a UTC string (e.g. `Wed, 30 Sep 2026 21:23:28 GMT`)

## Running

Requires Node.js 24 or newer (uses native TypeScript support).

```bash
node hello.ts
```

Expected output:
```
Hello, local Pi, remote files!
Goodbye, local Pi, remote files. See you next time.
Run at: <current UTC time>
```
