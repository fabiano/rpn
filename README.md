# rpn

A Reverse Polish notation calculator implemented with Deno and TypeScript.

## Installation

Install the [Deno runtime 1.0](https://deno.land/#installation) or newer. Once installed, run the following command:

```bash
deno install -n rpn cli.ts
```

## Usage

```text
USAGE:

  rpn                    Start the REPL
  rpn [expression]       Evaluate an one-line expression
  rpn --help             Print the help message

EXAMPLES:

  rpn                    => Start the REPL
  rpn 1 2 + 3 + 4 +      => 10
  rpn pi round           => 3
```

## Tests

Run the tests with the following command:

```bash
deno test
```
