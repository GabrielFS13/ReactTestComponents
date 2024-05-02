import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../state/hooks/useSorteador"

export default function Rodape(){

    const participantes = useListaDeParticipantes()
    const navegar = useNavigate()
    const sortear = useSorteador()
    const iniciar = () =>{
        sortear()
        navegar('/sorteio')
    }
    return(
        <footer>
            <button 
            disabled= {participantes.length < 3}
            onClick={iniciar}
            >Iniciar Brincadeira</button>
        </footer>
    )
}