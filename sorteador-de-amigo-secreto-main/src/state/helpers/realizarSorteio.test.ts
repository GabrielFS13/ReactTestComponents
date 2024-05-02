import { realizarSorteio } from "./realizarSorteio"

describe("Testa um sorteio", ()=>{
    test('cada participante não sorteie o proprio nome', ()=>{
        const participantes = ['Gabriel', 'Falcão', 'Gamonal', 'Carvalho']

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)

            expect(amigoSecreto).not.toEqual(participante)
        })
    })
}) 