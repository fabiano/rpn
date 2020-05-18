import {
  assertEquals,
  assertNotEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";

import { evaluate } from "./evaluator.ts";

const { test } = Deno;

test("supports add", () => {
  /* 1 + 2 */
  assertEquals(evaluate([1, 2, "+"]), [3]);
});

test("supports subtract", () => {
  /* 2 - 1 */
  assertEquals(evaluate([2, 1, "-"]), [1]);
});

test("supports multiply", () => {
  /* 3 * 3 */
  assertEquals(evaluate([3, 3, "*"]), [9]);
});

test("supports divide", () => {
  /* 4 / 2 */
  assertEquals(evaluate([4, 2, "/"]), [2]);
});

test("supports absolute value", () => {
  /* 1 abs */
  assertEquals(evaluate([1, "abs"]), [1]);

  /* 2 1 abs */
  assertEquals(evaluate([-1, "abs"]), [1]);
});

test("supports arc cosine", () => {
  /* -1 acos */
  assertEquals(evaluate([-1, "acos"]), [3.141592653589793]);

  /* 0 acos */
  assertEquals(evaluate([0, "acos"]), [1.5707963267948966]);

  /* 0.5 acos */
  assertEquals(evaluate([0.5, "acos"]), [1.0471975511965979]);

  /* 1 acos */
  assertEquals(evaluate([1, "acos"]), [0]);

  /* -1.1 acos */
  assertThrows(
    () => evaluate([-1.1, "acos"]),
    RangeError,
    "is out of the supported range",
  );

  /* 1.1 acos */
  assertThrows(
    () => evaluate([1.1, "acos"]),
    RangeError,
    "is out of the supported range",
  );
});

test("supports arc sine", () => {
  /* -1 asin */
  assertEquals(evaluate([-1, "asin"]), [-1.5707963267948966]);

  /* 0 asin */
  assertEquals(evaluate([0, "asin"]), [0]);

  /* 0.5 asin */
  assertEquals(evaluate([0.5, "asin"]), [0.5235987755982989]);

  /* 1 asin */
  assertEquals(evaluate([1, "asin"]), [1.5707963267948966]);

  /* -1.1 asin */
  assertThrows(
    () => evaluate([-1.1, "asin"]),
    RangeError,
    "is out of the supported range",
  );

  /* 1.1 asin */
  assertThrows(
    () => evaluate([1.1, "asin"]),
    RangeError,
    "is out of the supported range",
  );
});

test("supports arc tangent", () => {
  /* -1 atan */
  assertEquals(evaluate([-1, "atan"]), [-0.7853981633974483]);

  /* 0 atan */
  assertEquals(evaluate([0, "atan"]), [0]);

  /* 1 atan */
  assertEquals(evaluate([1, "atan"]), [0.7853981633974483]);

  /* 2 atan */
  assertEquals(evaluate([2, "atan"]), [1.1071487177940904]);
});

test("supports ceiling", () => {
  /* 0.95 ceil */
  assertEquals(evaluate([0.95, "ceil"]), [1]);
});

test("supports cosine", () => {
  /* 1 cos */
  assertEquals(evaluate([-1, "cos"]), [0.5403023058681398]);

  /* 0 cos */
  assertEquals(evaluate([0, "cos"]), [1]);

  /* 1 cos */
  assertEquals(evaluate([1, "cos"]), [0.5403023058681398]);

  /* 2 cos */
  assertEquals(evaluate([2, "cos"]), [-0.4161468365471424]);
});

test("supports hyperbolic cosine", () => {
  /* -1 cosh */
  assertEquals(evaluate([-1, "cosh"]), [1.5430806348152437]);

  /* 0 cosh */
  assertEquals(evaluate([0, "cosh"]), [1]);

  /* 1 cosh */
  assertEquals(evaluate([1, "cosh"]), [1.5430806348152437]);

  /* 2 cosh */
  assertEquals(evaluate([2, "cosh"]), [3.7621956910836314]);
});

test("supports exponentiation", () => {
  /* 1 exp */
  assertEquals(evaluate([1, "exp"]), [2.718281828459045]);
});

test("supports factorial", () => {
  /* 5 fact */
  assertEquals(evaluate([5, "fact"]), [120]);
});

test("supports floor", () => {
  /* 1.95 floor */
  assertEquals(evaluate([1.95, "floor"]), [1]);
});

test("supports floating part", () => {
  /* 1.5 fp */
  assertEquals(evaluate([1.5, "fp"]), [0.5]);
});

test("supports integer part", () => {
  /* 1.5 ip */
  assertEquals(evaluate([1.5, "ip"]), [1]);
});

test("supports natural logarithm", () => {
  /* 1 ln */
  assertEquals(evaluate([1, "ln"]), [0]);
});

test("supports base 10 logarithm", () => {
  /* 100000 log10 */
  assertEquals(evaluate([100000, "log10"]), [5]);
});

test("supports base 2 logarithm", () => {
  /* 1024 log2 */
  assertEquals(evaluate([1024, "log2"]), [10]);
});

test("supports max", () => {
  /* 1 2 3 max */
  assertEquals(evaluate([1, 2, 3, "max"]), [3]);
});

test("supports min", () => {
  /* 1 2 3 min */
  assertEquals(evaluate([1, 2, 3, "min"]), [1]);
});

test("supports raise a number to a power", () => {
  /* 2 10 pow */
  assertEquals(evaluate([2, 10, "pow"]), [1024]);
});

test("supports round", () => {
  /* 1.49 round */
  assertEquals(evaluate([1.49, "round"]), [1]);

  /* 1.5 round */
  assertEquals(evaluate([1.5, "round"]), [2]);
});

test("supports sign", () => {
  /* 3 sign */
  assertEquals(evaluate([3, "sign"]), [1]);

  /* -3 sign */
  assertEquals(evaluate([-3, "sign"]), [-1]);

  /* 0 sign */
  assertEquals(evaluate([0, "sign"]), [0]);
});

test("supports sine", () => {
  /* -1 sin */
  assertEquals(evaluate([-1, "sin"]), [-0.8414709848078965]);

  /* 0 sin */
  assertEquals(evaluate([0, "sin"]), [0]);

  /* 1 sin */
  assertEquals(evaluate([1, "sin"]), [0.8414709848078965]);

  /* 2 sin */
  assertEquals(evaluate([2, "sin"]), [0.9092974268256817]);
});

test("supports hyperbolic sine", () => {
  /* -1 sinh */
  assertEquals(evaluate([-1, "sinh"]), [-1.1752011936438014]);

  /* 0 sinh */
  assertEquals(evaluate([0, "sinh"]), [0]);

  /* 1 sinh */
  assertEquals(evaluate([1, "sinh"]), [1.1752011936438014]);

  /* 2 sinh */
  assertEquals(evaluate([2, "sinh"]), [3.626860407847019]);
});

test("supports square root", () => {
  /* 9 sqrt */
  assertEquals(evaluate([9, "sqrt"]), [3]);
});

test("supports tangent", () => {
  /* -1 tan */
  assertEquals(evaluate([-1, "tan"]), [-1.5574077246549023]);

  /* 0 tan */
  assertEquals(evaluate([0, "tan"]), [0]);

  /* 1 tan */
  assertEquals(evaluate([1, "tan"]), [1.5574077246549023]);

  /* 2 tan */
  assertEquals(evaluate([2, "tan"]), [-2.185039863261519]);
});

test("supports hyperbolic tangent", () => {
  /* -1 tanh */
  assertEquals(evaluate([-1, "tanh"]), [-0.7615941559557649]);

  /* 0 tanh */
  assertEquals(evaluate([0, "tanh"]), [0]);

  /* 1 tanh */
  assertEquals(evaluate([1, "tanh"]), [0.7615941559557649]);

  /* 2 tanh */
  assertEquals(evaluate([2, "tanh"]), [0.9640275800758169]);
});

test("supports E", () => {
  /* e */
  assertNotEquals(evaluate(["e"]), [0]);
});

test("supports PI", () => {
  /* pi */
  assertNotEquals(evaluate(["pi"]), [0]);
});

test("supports generate a random number", () => {
  /* rand */
  assertNotEquals(evaluate(["rand"]), [0]);
});

test("executes two-number calculations", () => {
  /* 1 + 2 */
  assertEquals(evaluate([1, 2, "+"]), [3]);

  /* 2 - 1 */
  assertEquals(evaluate([2, 1, "-"]), [1]);

  /* 3 * 3 */
  assertEquals(evaluate([3, 3, "*"]), [9]);

  /* 4 / 2 */
  assertEquals(evaluate([4, 2, "/"]), [2]);
});

test("executes series of calculations", () => {
  /* 1 + 2 + 3 + 4 */
  assertEquals(evaluate([1, 2, "+", 3, "+", 4, "+"]), [10]);

  /* 1 + 2 - 3 + 4 */
  assertEquals(evaluate([1, 2, "+", 3, "-", 4, "+"]), [4]);
});

test("executes chain calculations", () => {
  /* (1 * 2) + (3 * 4) */
  assertEquals(evaluate([1, 2, "*", 3, 4, "*", "+"]), [14]);

  /* (1 * 2) + (3 * 4) + (5 * 6) */
  assertEquals(evaluate([1, 2, "*", 3, 4, "*", "+", 5, 6, "*", "+"]), [44]);
});

test("executes calculations with nested parentheses", () => {
  /* 1 + (2 + (3 + (4 + 5))) */
  assertEquals(evaluate([4, 5, "+", 3, "+", 2, "+", 1, "+"]), [15]);

  /* 3 × (4 + (5 × (6 + 7))) */
  assertEquals(evaluate([6, 7, "+", 5, "*", 4, "+", 3, "*"]), [207]);
});
