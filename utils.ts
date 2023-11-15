import bigInt from "big-integer";

/**
 * Converte um valor hexadecimal para inteiro
 * @param hex Valor em hexadecimal
 * @returns
 */
export const hex2decimal = (hex: string) => {
  return BigInt("0x" + hex).toString(10);
};

export const decimal2hex = (decimal: any) => {
  return decimal.toString(16);
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
