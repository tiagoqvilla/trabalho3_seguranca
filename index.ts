var bigInt = require('big-integer')

import { g, p } from './constants'
import {
  calculateKey,
  decimal2hex,
  getRandom,
  hex2bin,
  hex2decimal,
} from './utils'

// ETAPA 1 -----------------------------

// Passo 1:

let random = getRandom(30)
// Valor de "a" gerado:
// 211455585221899736078994112512
const a = bigInt('211455585221899736078994112512')

// Valor de "A" gerado:
// 108876376526463231483834862911529022657350531110006328274460545484008637042245827620183053860500309870843932410765424020387269591841626154676943069588760995564840912349635675785257377075433408950152451416740712429268663549738715763113123004297620710241990550671375648535769939303599461330942287625470340544974
const A = calculateKey(g, a, p)

// Valor de "A" em hexadecimal:
// 9B0B8C1CD75336F5B37DA260C8E5BB692886396DC17290BC118F2A851C0FAB5B43B6C48A99F6263A7CFC6CE1B29138BCD79BE337E68012E4CD1D08709139D91503B5BD3D9B97E000C6C856877B4D2E97D45E9DF475134AA519081E4EC4D5B6306F7437AAB7591CEA8B18B758F5A4680E558A2CC49273CA013C3AD4E7D538B9CE
const A_HEX = decimal2hex(A.value)

// Passo 2:

// Valor de "B" recebido:
// 164F36FE7E9069404C3DE9BEE39E1E8C5093216FF60D2E43A059FAC4F31F883DF89DA4ABA45D2001CEC59741F31FE061DB7142F52E08A30BC1ED615B2FA86BD5DEF8785719FF8BFD25FDD71C5C30B3CD3548FF04E740A6146080F902F6B5348844D47F243700E96A3B7D261AE1C126CB748821399081529AEAB4B06A4EBF9AB9

const B_HEX =
  '164F36FE7E9069404C3DE9BEE39E1E8C5093216FF60D2E43A059FAC4F31F883DF89DA4ABA45D2001CEC59741F31FE061DB7142F52E08A30BC1ED615B2FA86BD5DEF8785719FF8BFD25FDD71C5C30B3CD3548FF04E740A6146080F902F6B5348844D47F243700E96A3B7D261AE1C126CB748821399081529AEAB4B06A4EBF9AB9'

const B = bigInt(hex2decimal(B_HEX))

// Valor de "V" calculado:
// 59187502388984437334016556160357960234346599753237581121116268260934524674095917108707354731816772293811156426982312129281720936150826645638551530424025406619775164847948030899913322943603116622364630236276174320175110404996902661362384836702064434436866375202783125396550528820672173636774983915297705879991
const V = calculateKey(B, a, p)

const hasher = new Bun.CryptoHasher('sha256')
hasher.update(V.toString())
const S = hasher.digest('hex')
