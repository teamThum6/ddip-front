import { atom } from 'recoil'

export const locationNameState = atom<string | null>({
  key: 'locationName',
  default: null,
})

export const latLongState = atom({
  key: 'latLong',
  default: { lat: 0, long: 0 },
})
