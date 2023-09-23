import { ArrayElement } from 'types/user'
import { ACCEPTED_HEX_CODE_STRING } from './getHexCodeSafety'

class HexToRgbError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'HexCodeError'
  }
}

type Rgb = [string, string, string]

export function hexToRgb(hex: string): Rgb
export function hexToRgb(hex: string) {
  if (typeof hex !== 'string') {
    throw new HexToRgbError('hexToRgb 함수의 인자는 문자열이어야 합니다.')
  }
  if (hex[0] === '#') {
    hex = hex.slice(1)
  }
  if ([3, 4, 6, 7].includes(hex.length) === false) {
    throw new HexToRgbError('hexToRgb 함수의 인자는 3,4,6,7 자리여야 합니다.')
  }

  hex = `#${hex}`

  if (
    hex
      .slice(1)
      .split('')
      .every((char) =>
        ACCEPTED_HEX_CODE_STRING.includes(
          char as ArrayElement<typeof ACCEPTED_HEX_CODE_STRING>
        )
      ) === false
  )
    throw new HexToRgbError('hexToRgb 함수의 인자는 16진수여야 합니다.')

  const r = parseInt(hex.slice(1, 3), 16).toString()
  const g = parseInt(hex.slice(3, 5), 16).toString()
  const b = parseInt(hex.slice(5, 7), 16).toString()

  return [r, g, b]
}
