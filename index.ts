/**
 * Calcula (g ^ b) mod p
 * @param g
 * @param b
 * @param p
 * @returns
 */
const calculateKey = (g: bigint, exp: bigint, p: bigint) => {
  if (exp === 1) return g;

  return g ** exp;
};

let p = BigInt(1041607122029938459843911326429539139964006065005940226363139);
let g = BigInt(10);

let a = BigInt(123456789012345678901234567890123456789);

let A = calculateKey(g, a, p);
console.log(A);
