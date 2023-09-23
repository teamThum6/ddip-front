import { atom } from 'recoil'

export const locationNameState = atom<string | null>({
  key: 'locationName',
  default: null,
})
