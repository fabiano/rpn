import { parse } from "https://deno.land/std@0.51.0/flags/mod.ts";
import { red } from "https://deno.land/std@0.51.0/fmt/colors.ts";
import { printHelp } from "./cli/help.ts";
import { evaluateAndPrint } from "./cli/evaluate.ts";
import { startREPL } from "./cli/repl.ts";

const { args, exit, stdout } = Deno;
const textEncoder = new TextEncoder();

if (import.meta.main) {
  const parsedArgs = parse(args);

  try {
    if (parsedArgs.help) {
      await printHelp();

      exit(0);
    }

    if (parsedArgs._.length > 0) {
      await evaluateAndPrint(parsedArgs._);

      exit(0);
    }

    await startREPL();

    exit(0);
  } catch (error) {
    await stdout.write(textEncoder.encode(`${red(error.message)}\n`));

    exit(1);
  }
}
