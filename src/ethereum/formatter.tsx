// AKITA total supply: 100,000,000,000,000 tokens = 100 quadrillions
// AKITA has 18 decimals
const eighteenDecimals = 1e18

const quadrillion = 1e15 * eighteenDecimals
const trillion = 1e12 * eighteenDecimals
const billion = 1e9 * eighteenDecimals
const million = 1e6 * eighteenDecimals
const thousand = 1e3 * eighteenDecimals
const one = eighteenDecimals

const akitaDecimals = 2
const dollarDecimals = 2

function toCompact(balance: number, denominator: number, unit: string, decimals: number) {
  return (balance / denominator).toFixed(decimals).toString() + unit
}

export function toCompactBalance(balance: number) {
  if (balance < 0) return '-1'
  else if (balance - quadrillion > 0) return toCompact(balance, quadrillion, 'Q', akitaDecimals)
  else if (balance - trillion > 0) return toCompact(balance, trillion, 'T', akitaDecimals)
  else if (balance - billion > 0) return toCompact(balance, billion, 'B', akitaDecimals)
  else if (balance - million > 0) return toCompact(balance, million, 'M', akitaDecimals)
  else if (balance - thousand > 0) return toCompact(balance, thousand, 'k', akitaDecimals)
  else return toCompact(balance, one, '', akitaDecimals)
}

// We probably won't see someone with more than a quadrillion dollars worth of AKITA, but who knows what the future holds?
export function toCompactValue(value: number) {
  if (value < 0) return '-1'
  else if (value - quadrillion > 0) return toCompact(value, quadrillion, 'Q', dollarDecimals)
  else if (value - trillion > 0) return toCompact(value, trillion, 'T', dollarDecimals)
  else if (value - billion > 0) return toCompact(value, billion, 'B', dollarDecimals)
  else if (value - million > 0) return toCompact(value, million, 'M', dollarDecimals)
  else if (value - thousand > 0) return toCompact(value, thousand, 'k', dollarDecimals)
  else return toCompact(value, one, '', dollarDecimals)
}
