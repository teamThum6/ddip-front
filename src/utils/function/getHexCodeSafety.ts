import { ArrayElement } from 'types/user'

class GetHexCodeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'HexCodeError'
  }
}

export const ACCEPTED_HEX_CODE_STRING = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
] as const

export function getHexCodeSafety(code: string): string
export function getHexCodeSafety(code: string) {
  if (typeof code !== 'string') {
    throw new GetHexCodeError('컬러 코드는 문자열이어야 합니다.')
  }
  if (code[0] === '#') {
    code = code.slice(1)
  }
  if ([3, 4, 6, 7].includes(code.length) === false) {
    throw new GetHexCodeError('컬러 코드는 3,4,6,7 자리여야 합니다.')
  }

  code = `#${code}`

  if (
    code
      .slice(1)
      .split('')
      .every((char) =>
        ACCEPTED_HEX_CODE_STRING.includes(
          char as ArrayElement<typeof ACCEPTED_HEX_CODE_STRING>
        )
      ) === false
  )
    throw new GetHexCodeError('컬러 코드는 16진수여야 합니다.')

  return code
}
