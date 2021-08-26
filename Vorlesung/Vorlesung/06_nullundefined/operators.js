const undef = undefined;
console.log(undef || 1);

const zero = 0;
console.log(zero || 1); // good or bad?

console.log(zero ?? 1); // solution
console.log(NaN ?? 1); // achtung
console.log("" ?? 1); // achtung
