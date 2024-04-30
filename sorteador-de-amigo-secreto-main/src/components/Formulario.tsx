import {  useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante"
import { useMsgErro } from "../state/hooks/useMsgErro"

export default function Formulario(){

    const [nome, setNome] = useState('')
    const addParticipante = useAdicionarParticipante()
    const msgError = useMsgErro()

    const FormSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addParticipante(nome)
        setNome('')

    }
    return(
        <form onSubmit={e => FormSubmitEvent(e)}>
            <input type="text"
            placeholder="Insira os nomes dos participantes" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
            autoFocus
            />

            <button disabled={!nome}>Cadastrar</button>
            {msgError && <p role="alert">{msgError}</p>}
        </form>
    )
}