import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom", //unique identifier
    default: 0
})