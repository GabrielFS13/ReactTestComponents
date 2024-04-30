import { atom } from "recoil";

export const listaDeParticipantesState = atom<String[]>({
    key: 'listaDeParticipantesState',
    default: []
})


export const erroState = atom<String>({
    key: "erroState",
    default: ''
})