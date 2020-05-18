const { stdout } = Deno;

export async function printHelp() {
  const textEncoder = new TextEncoder();

  const output = `
USAGE:

  rpn                    Start the REPL
  rpn [expression]       Evaluate an one-line expression
  rpn --help             Print the help message

EXAMPLES:

  rpn                    => Start the REPL
  rpn 1 2 + 3 + 4 +      => 10
  rpn pi round           => 3`;

  await stdout.write(textEncoder.encode(output));
}
