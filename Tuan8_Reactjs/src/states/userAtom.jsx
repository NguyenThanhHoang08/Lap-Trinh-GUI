import { atom } from "recoil";

const userAtom = atom({
    key: 'username',
    default: ""
})

export default userAtom;