const Big = require("big.js");

/**
 * Calcula (g ^ b) mod p
 * @param g
 * @param b
 * @param p
 * @returns
 */
const calculateKey = (g: number, exp: number, p: number) => {
  let x = Big(g);

  return x.pow(exp).mod(p).toNumber();
};

/**
 * Converte um valor hexadecimal para inteiro
 * @param hex Valor em hexadecimal
 * @returns
 */
const hexToDecimal = (hex: string) => parseInt(hex, 16);
