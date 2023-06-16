import { atom } from 'recoil';

export const itemState = atom({
  key: 'itemState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: [],
});
