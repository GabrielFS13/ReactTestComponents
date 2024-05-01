import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

export default function Sorteio(){
    const participantes = useListaDeParticipantes()
    return(
        <section>
            <form>
                <select name="participante" id="participanteDaVez">
                    {participantes.map((participante, i) => <option key={i}>{participante}</option>)}
                </select>
            </form>
        </section>
    )
}