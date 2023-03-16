import { atom } from "jotai";

const state = {
  product: atom(null),
  searchNames: atom(null),
  modalShow: atom(false),
  user: atom(null),
  isLoggedIn: atom(false),
   showMyProfile: atom(false),
  showDiary: atom(false),
};
export default state;
