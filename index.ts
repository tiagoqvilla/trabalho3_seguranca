import { a, g, p } from "./constants";
import { getRandom, hex2decimal } from "./utils";

/**
 * Calcula (g ^ b) mod p
 * @param g
 * @param b
 * @param p
 * @returns
 */
const calculateKey = (g: any, exp: any, p: any) => {
  return g.modPow(exp, p);
};

let hex = hex2decimal(
  "B10B8F96A080E01DDE92DE5EAE5D54EC52C99FBCFB06A3C69A6A9DCA52D23B616073E28675A23D189838EF1E2EE652C013ECB4AEA906112324975C3CD49B83BFACCBDD7D90C4BD7098488E9C219A73724EFFD6FAE5644738FAA31A4FF55BCCC0A151AF5F0DC8B4BD45BF37DF365C1A65E68CFDA76D4DA708DF1FB2BC2E4A4371"
);

let random = getRandom(30);
console.log(random.value);

console.log("168127093564022880245217492992".length);

let res = calculateKey(g, a, p);
// console.log(res.value);
