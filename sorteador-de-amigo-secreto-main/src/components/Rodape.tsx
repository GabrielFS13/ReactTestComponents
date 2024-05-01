import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

export default function Rodape(){

    const participantes = useListaDeParticipantes()
    const navegar = useNavigate()

    const iniciar = () =>{
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