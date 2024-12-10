function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 0; //Or throw an error
  }
}

let result1 = add(1, 2); // Correct
console.log(result1); // Output: 3

let result2 = addString("1", "2"); // Correct
console.log(result2); //Output: "12"

let result3 = addSafe(1, "2"); //Safe call
console.log(result3); //Output: 0

let result4 = addSafe(1,2); //Safe call
console.log(result4); //Output: 3