import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMsgErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem
}