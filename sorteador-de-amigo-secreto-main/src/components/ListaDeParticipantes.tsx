import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

export default function ListaDeParticipantes(){
    const participantes : String[] = useListaDeParticipantes()

    return(
        <ul>
            {participantes.map((participante, i) => <li key = {i} >{participante}</li>)}
        </ul>
    )
}