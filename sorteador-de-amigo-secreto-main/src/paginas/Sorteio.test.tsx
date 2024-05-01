import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import Sorteio from "./Sortieo"

jest.mock('../state/hooks/useListaDeParticipantes', ()=>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})
describe('Pagina de sorteio', ()=>{
    const participantes = ['Gabriel', 'Falcão', 'Gamonal']

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('todos os participantes podem exibir seu amigo secreto', ()=>{
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)
        
         const opcoes = screen.queryAllByRole('option')
         expect(opcoes).toHaveLength(participantes.length)
    }) 

   
})