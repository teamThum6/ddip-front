import { atom } from 'recoil'

export const userListState = atom<[] | null>({
  key: 'userList',
  default: null,
})
