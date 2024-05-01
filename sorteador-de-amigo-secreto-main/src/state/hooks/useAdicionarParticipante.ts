import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"
import { useMsgErro } from "./useMsgErro"

export const useAdicionarParticipante = () =>{
    const setLista = useSetRecoilState(listaDeParticipantesState)
    const lista = useRecoilValue(listaDeParticipantesState)
    const setErro = useSetRecoilState(erroState)

    return (nomeParticipante: string) => {
        if(lista.includes(nomeParticipante)){
            setErro("Proibido nomes duplicados")
            setTimeout(()=>{
                setErro('')
            }, 3000)
            return
        }
        return setLista(participantesAntigos => [...participantesAntigos, nomeParticipante])
    }
}