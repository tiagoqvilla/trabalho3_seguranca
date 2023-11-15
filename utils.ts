import bigInt from "big-integer";

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
