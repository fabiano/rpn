export function plus(stack: Array<number>) {
  if (stack.length < 2) {
    throw new Error(`Invalid number of arguments for the '+' operator`);
  }

  const n2 = stack.pop()!;
  const n1 = stack.pop()!;

  stack.push(n1 + n2);
}

export function minus(stack: Array<number>) {
  if (stack.length < 2) {
    throw new Error(`Invalid number of arguments for the '-' operator`);
  }

  const n2 = stack.pop()!;
  const n1 = stack.pop()!;

  stack.push(n1 - n2);
}

export function multiply(stack: Array<number>) {
  if (stack.length < 2) {
    throw new Error(`Invalid number of arguments for the '*' operator`);
  }

  const n2 = stack.pop()!;
  const n1 = stack.pop()!;

  stack.push(n1 * n2);
}

export function divide(stack: Array<number>) {
  if (stack.length < 2) {
    throw new Error(`Invalid number of arguments for the '/' operator`);
  }

  const n2 = stack.pop()!;
  const n1 = stack.pop()!;

  stack.push(n1 / n2);
}

export function abs(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'abs' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.abs(n));
}

export function acos(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'acos' function`);
  }

  const n = stack.pop()!;

  if (n < -1 || n > 1) {
    stack.push(n);

    throw new RangeError(
      `${n} is out of the supported range (between -1 and 1)`,
    );
  }

  stack.push(Math.acos(n));
}

export function asin(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'asin' function`);
  }

  const n = stack.pop()!;

  if (n < -1 || n > 1) {
    stack.push(n);

    throw new RangeError(
      `${n} is out of the supported range (between -1 and 1)`,
    );
  }

  stack.push(Math.asin(n));
}

export function atan(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'atan' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.atan(n));
}

export function ceil(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'ceil' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.ceil(n));
}

export function cos(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'cos' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.cos(n));
}

export function cosh(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'cosh' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.cosh(n));
}

export function exp(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'exp' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.exp(n));
}

export function fact(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'fact' function`);
  }

  const n = stack.pop()!;

  if (n === 0 || n === 1) {
    stack.push(1);

    return;
  }

  let fact = n;

  for (let i = fact - 1; i >= 1; i--) {
    fact *= i;
  }

  stack.push(fact);
}

export function floor(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'floor' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.floor(n));
}

export function fp(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'fp' function`);
  }

  const n = stack.pop()!;

  stack.push(n - Math.trunc(n));
}

export function ip(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'ip' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.trunc(n));
}

export function ln(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'ln' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.log(n));
}

export function log10(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'log10' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.log10(n));
}

export function log2(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'log2' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.log2(n));
}

export function max(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'max' function`);
  }

  stack.splice(0, stack.length, Math.max(...stack));
}

export function min(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'min' function`);
  }

  stack.splice(0, stack.length, Math.min(...stack));
}

export function pow(stack: Array<number>) {
  if (stack.length < 2) {
    throw new Error(`Invalid number of arguments for the 'pow' function`);
  }

  const exp = stack.pop()!;
  const n = stack.pop()!;

  stack.push(Math.pow(n, exp));
}

export function round(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'round' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.round(n));
}

export function sign(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'sign' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.sign(n));
}

export function sin(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'sin' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.sin(n));
}

export function sinh(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'sinh' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.sinh(n));
}

export function sqrt(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'sqrt' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.sqrt(n));
}

export function tan(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'tan' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.tan(n));
}

export function tanh(stack: Array<number>) {
  if (stack.length < 1) {
    throw new Error(`Invalid number of arguments for the 'tanh' function`);
  }

  const n = stack.pop()!;

  stack.push(Math.tanh(n));
}

export function e(stack: Array<number>) {
  stack.push(Math.E);
}

export function pi(stack: Array<number>) {
  stack.push(Math.PI);
}

export function rand(stack: Array<number>) {
  stack.push(Math.floor(Math.random() * 10) + 1);
}

export default {
  "+": plus,
  "-": minus,
  "*": multiply,
  "/": divide,
  abs,
  acos,
  asin,
  atan,
  ceil,
  cos,
  cosh,
  exp,
  fact,
  floor,
  fp,
  ip,
  ln,
  log10,
  log2,
  max,
  min,
  pow,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  e,
  pi,
  rand,
} as Record<string, Function>;
