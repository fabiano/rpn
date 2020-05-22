import functions from "./functions.ts";

export type Expression = Array<number | string>;

export function evaluate(expression: Expression = []): Array<number> {
  let stack: Array<number> = [];

  for (const valueOrFunc of expression) {
    if (typeof valueOrFunc === "number") {
      stack.push(valueOrFunc);
    }

    if (typeof valueOrFunc === "string") {
      if (valueOrFunc in functions) {
        const func = functions[valueOrFunc];

        func(stack);

        continue;
      }

      throw new Error(`The '${valueOrFunc}' function is not supported`);
    }

    throw new Error(`'${valueOrFunc}' type is not supported`);
  }

  return stack;
}
