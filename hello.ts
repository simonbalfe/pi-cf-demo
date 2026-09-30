import { timestamp } from './utils.ts';

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function farewell(name: string): string {
  return `Goodbye, ${name}. See you next time.`;
}

console.log(greet('local Pi, remote files'));
console.log(farewell('local Pi, remote files'));
console.log(`Run at: ${timestamp()}`);
