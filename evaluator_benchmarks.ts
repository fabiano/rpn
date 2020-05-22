import {
  runBenchmarks,
  bench,
} from "https://deno.land/std@0.51.0/testing/bench.ts";

import { evaluate } from "./evaluator.ts";

let n1 = 0, n2 = 0, n3 = 0;

bench({
  name: "two-number calculations",
  runs: 128,

  func(timer): void {
    n1++;

    timer.start();

    evaluate([n1, n1, "+"]);

    timer.stop();
  },
});

bench({
  name: "series of calculations",
  runs: 128,

  func(timer): void {
    n2++;

    timer.start();

    evaluate([n2, n2, "*", n2, n2, "*", "+"]);

    timer.stop();
  },
});

bench({
  name: "calculations with nested parentheses",
  runs: 128,

  func(timer): void {
    n3++;

    timer.start();

    evaluate([n3, n3, "+", n3, "+", n3, "+", n3, "+"]);

    timer.stop();
  },
});

runBenchmarks();
