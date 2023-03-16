import { atom } from "jotai";

const state = {
  product: atom(null),
  searchNames: atom(null),
  modalShow: atom(false),
  user: atom(null),
  isLoggedIn: atom(false),
  showMyProfile: atom(false),
  showDiary: atom(false),
  totalNut:atom({
    kcal: 0,
    carbohydrates: 0,
    fat: 0,
    proteins: 0,
    fiber: 0,
    sugars: 0,
  })
};
export default state;
