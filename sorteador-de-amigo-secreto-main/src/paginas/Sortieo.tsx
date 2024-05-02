import { useState } from "react"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

export default function Sorteio() {
    const participantes = useListaDeParticipantes()
    const [nome, setNome] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const resultado = useResultadoSorteio()
    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (resultado.has(nome)) {
            setAmigoSecreto(resultado.get(nome)!)
        }
    }
    return (
        <section>
            <form onSubmit={e => sortear(e)}>
                <select
                    required
                    name="participante"
                    id="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                >
                    {participantes.map((participante, i) => <option key={i}>{participante}</option>)}
                </select>
                <button>
                    Sortear
                </button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}