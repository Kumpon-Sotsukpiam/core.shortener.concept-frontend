import { atom } from 'recoil'
export const userState = atom({
  key: 'userState',
  default: {
    first_name: null,
    last_name: null,
    email: null,
  },
})

export const linkState = atom({
  key: 'linkState',
  default: [],
})
