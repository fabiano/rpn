export type Expression = Array<number | string>;

export function evaluate(expression: Expression = []): Array<number> {
  let stack: Array<number> = [];

  for (const valueOrOpFunc of expression) {
    if (typeof valueOrOpFunc === "number") {
      stack.push(valueOrOpFunc);
    }

    if (typeof valueOrOpFunc === "string") {
      const requireStackLengthOf = (n: number) => {
        if (stack.length < n) {
          throw new Error(
            `Invalid number of arguments for the '${valueOrOpFunc}' operator/function`,
          );
        }
      };

      switch (valueOrOpFunc.toLowerCase()) {
        case "+": {
          requireStackLengthOf(2);

          const n2 = stack.pop()!;
          const n1 = stack.pop()!;

          stack.push(n1 + n2);

          break;
        }

        case "-": {
          requireStackLengthOf(2);

          const n2 = stack.pop()!;
          const n1 = stack.pop()!;

          stack.push(n1 - n2);

          break;
        }

        case "*": {
          requireStackLengthOf(2);

          const n2 = stack.pop()!;
          const n1 = stack.pop()!;

          stack.push(n1 * n2);

          break;
        }

        case "/": {
          requireStackLengthOf(2);

          const n2 = stack.pop()!;
          const n1 = stack.pop()!;

          stack.push(n1 / n2);

          break;
        }

        case "abs": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.abs(n));

          break;
        }

        case "acos": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          if (n < -1 || n > 1) {
            stack.push(n);

            throw new RangeError(
              `${n} is out of the supported range (between -1 and 1)`,
            );
          }

          stack.push(Math.acos(n));

          break;
        }

        case "asin": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          if (n < -1 || n > 1) {
            stack.push(n);

            throw new RangeError(
              `${n} is out of the supported range (between -1 and 1)`,
            );
          }

          stack.push(Math.asin(n));

          break;
        }

        case "atan": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.atan(n));

          break;
        }

        case "ceil": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.ceil(n));

          break;
        }

        case "cos": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.cos(n));

          break;
        }

        case "cosh": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.cosh(n));

          break;
        }

        case "exp": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.exp(n));

          break;
        }

        case "fact": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          if (n === 0 || n === 1) {
            stack.push(1);

            break;
          }

          let fact = n;

          for (let i = fact - 1; i >= 1; i--) {
            fact *= i;
          }

          stack.push(fact);

          break;
        }

        case "floor": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.floor(n));

          break;
        }

        case "fp": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(n - Math.trunc(n));

          break;
        }

        case "ip": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.trunc(n));

          break;
        }

        case "ln": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.log(n));

          break;
        }

        case "log10": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.log10(n));

          break;
        }

        case "log2": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.log2(n));

          break;
        }

        case "max": {
          requireStackLengthOf(1);

          stack = [Math.max(...stack)];

          break;
        }

        case "min": {
          requireStackLengthOf(1);

          stack = [Math.min(...stack)];

          break;
        }

        case "pow": {
          requireStackLengthOf(2);

          const exp = stack.pop()!;
          const n = stack.pop()!;

          stack.push(Math.pow(n, exp));

          break;
        }

        case "round": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.round(n));

          break;
        }

        case "sign": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.sign(n));

          break;
        }

        case "sin": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.sin(n));

          break;
        }

        case "sinh": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.sinh(n));

          break;
        }

        case "sqrt": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.sqrt(n));

          break;
        }

        case "tan": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.tan(n));

          break;
        }

        case "tanh": {
          requireStackLengthOf(1);

          const n = stack.pop()!;

          stack.push(Math.tanh(n));

          break;
        }

        case "e": {
          stack.push(Math.E);

          break;
        }

        case "pi": {
          stack.push(Math.PI);

          break;
        }

        case "rand": {
          stack.push(Math.floor(Math.random() * 10) + 1);

          break;
        }

        default:
          throw new Error(
            `The operator/function '${valueOrOpFunc}' is not supported`,
          );
      }
    }
  }

  return stack;
}
