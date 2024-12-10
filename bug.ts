function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); //Type Error, because of type mismatch
console.log(result);