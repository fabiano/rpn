import { Expression, evaluate } from "../evaluator.ts";

const { stdout } = Deno;

export async function evaluateAndPrint(stack: Expression = []) {
  const textEncoder = new TextEncoder();

  stack = evaluate(stack);

  for (const n of stack) {
    await stdout.write(textEncoder.encode(`${n.toString()} `));
  }
}
