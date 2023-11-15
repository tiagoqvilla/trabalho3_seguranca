var bigInt = require("big-integer");

import { g, p } from "./constants";
import { decimal2hex, getRandom } from "./utils";

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

let random = getRandom(30);
// Valor de "a" gerado:
// 211455585221899736078994112512
const a = bigInt("211455585221899736078994112512");

// Valor de "A" gerado:
// 108876376526463231483834862911529022657350531110006328274460545484008637042245827620183053860500309870843932410765424020387269591841626154676943069588760995564840912349635675785257377075433408950152451416740712429268663549738715763113123004297620710241990550671375648535769939303599461330942287625470340544974
const A = calculateKey(g, a, p);

// Valor de "A" em hexadecimal:
// 9B0B8C1CD75336F5B37DA260C8E5BB692886396DC17290BC118F2A851C0FAB5B43B6C48A99F6263A7CFC6CE1B29138BCD79BE337E68012E4CD1D08709139D91503B5BD3D9B97E000C6C856877B4D2E97D45E9DF475134AA519081E4EC4D5B6306F7437AAB7591CEA8B18B758F5A4680E558A2CC49273CA013C3AD4E7D538B9CE
const A_HEX = decimal2hex(A.value);
