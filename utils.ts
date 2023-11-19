import bigInt from "big-integer";
const crypto = require("node:crypto");

/**
 * Converte um valor hexadecimal para inteiro
 * @param hex Valor em hexadecimal
 * @returns
 */
export const hex2decimal = (hex: string) => {
  return BigInt("0x" + hex).toString(10);
};

/**
 * Converte um valor decimal para hexadecimal
 * @param decimal Valor em bigInt
 * @returns
 */
export const decimal2hex = (decimal: any) => {
  return decimal.toString(16);
};

/**
 * Converte um valor hexadecimal para binário
 * @param hex Valor em hexadecimal
 * @returns Valor em binário
 */
export const hex2bin = (hex: string) => {
  return parseInt(hex, 16).toString(2).padStart(8, "0");
};

/**
 * Recebe um valor N e gera um número aleatório com esse tamanho
 * @param length Tamanho do número a ser gerado
 * @returns
 */
export const getRandom = (length: number) => {
  return bigInt(
    Math.floor(
      Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
    )
  );
};

/**
 * Calcula (g ^ b) mod p
 * @param g
 * @param b
 * @param p
 * @returns
 */
export const calculateKey = (g: any, exp: any, p: any) => {
  return g.modPow(exp, p);
};

/**
 * Reverte um texto
 * @param str
 * @returns
 */
export const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

/**
 * Decifra a mensagem recebida
 * @param algorithm Algoritmo a ser utilizado
 * @param msg Mensagem a ser decifrada
 * @param key Chave secreta
 * @param iv IV utilizado na encriptação
 * @returns
 */
export const decipherMsg = (
  algorithm: string,
  msg: Buffer,
  key: Buffer,
  iv: Buffer
): string => {
  let decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(msg);
  decrypted += decipher.final();

  return decrypted;
};

/**
 * Cifra uma mensagem
 * @param algorithm Algoritmo a ser utilizado
 * @param msg Mensagem a ser encriptada
 * @param key Chave secreta
 * @returns
 */
export const cipherMsg = (
  algorithm: string,
  msg: string,
  key: Buffer,
  iv: Buffer
): string => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(msg, "utf8", "hex");
  encrypted += cipher.final("hex");

  let final_encrypted = iv.toString("hex") + encrypted;

  return final_encrypted;
};
