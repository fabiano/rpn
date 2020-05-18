import { readLines } from "https://deno.land/std@0.51.0/io/bufio.ts";
import { blue, red, bold } from "https://deno.land/std@0.51.0/fmt/colors.ts";
import { Expression, evaluate } from "../evaluator.ts";

const { stdout, stdin } = Deno;
const textEncoder = new TextEncoder();

export async function startREPL() {
  await stdout.write(textEncoder.encode("Welcome to rpn REPL\n"));

  await stdout.write(
    textEncoder.encode("Type 'exit' to exit or 'help' to get help\n\n"),
  );

  await stdout.write(textEncoder.encode(`${blue(">")} `));

  let stack: Expression = [];

  for await (const line of readLines(stdin)) {
    switch (line.trim()) {
      case "help": {
        await printHelp();

        break;
      }

      case "exit": {
        return;
      }

      case "clr": {
        stack = [];

        break;
      }

      default: {
        const exp = line
          .trim()
          .split(" ")
          .map((part) => {
            const n = Number(part);

            return Number.isNaN(n) ? part : n;
          });

        try {
          stack = evaluate([...stack, ...exp]);
        } catch (error) {
          await stdout.write(textEncoder.encode(`${red(error.message)}\n`));
        }

        break;
      }
    }

    for (const n of stack) {
      await stdout.write(textEncoder.encode(`${bold(n.toString())} `));
    }

    await stdout.write(textEncoder.encode(`${blue(">")} `));
  }
}

async function printHelp() {
  const output = `
Operators

  +          Add
  -          Subtract
  *          Multiply
  /          Divide

Functions

  clr        Clear the stack
  abs        Absolute value
  acos       Arc Cosine
  asin       Arc Sine
  atan       Arc Tangent
  ceil       Ceiling
  cos        Cosine
  cosh       Hyperbolic Cosine
  exp        Exponentiation
  fact       Factorial
  floor      Floor
  fp         Floating part
  ip         Integer part
  ln         Natural Logarithm
  log2       Base 2 logarithm
  log10      Base 10 logarithm
  max        Max
  min        Min
  pow        Raise a number to a power
  round      Round
  sign       Push -1, 1, or 0 depending on the sign
  sin        Sine
  sinh       Hyperbolic Sine
  sqrt       Square Root
  tan        Tangent
  tanh       Hyperbolic tangent

Constants

  e          Push E
  pi         Push PI
  rand       Generate and push a random number

Other

  help       Print the help message
  exit       Exit`;

  await stdout.write(textEncoder.encode(`${output}\n\n`));
}
