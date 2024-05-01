import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaDeParticipantes from "./ListaDeParticipantes"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

jest.mock('../state/hooks/useListaDeParticipantes', ()=>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Uma lista vazia de participantes', ()=>{

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('Deve ser renderizado uma lista sem elementos', ()=>{
        render(<RecoilRoot>
            <ListaDeParticipantes />
        </RecoilRoot>)
    
            //como foi usado o elemento LI no front ele já entende ele como listitem, se fosse usado uma div teria que colocar o 'role' como atributo
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})


describe('Uma lista preenchida de participantes', ()=>{
    const participantes = ['Gabriel', 'Falcão']
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('Deve ser renderizado uma lista com participantes', ()=>{
        render(<RecoilRoot>
            <ListaDeParticipantes />
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})