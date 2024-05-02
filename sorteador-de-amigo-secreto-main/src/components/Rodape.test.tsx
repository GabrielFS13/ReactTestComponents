import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

jest.mock('../state/hooks/useListaDeParticipantes', ()=>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})
const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()
jest.mock('react-router-dom', ()=>{
    return{
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../state/hooks/useSorteador', ()=>{
    return{
        useSorteador: () => mockSorteio
    }
})

describe('Onde não existe participantes sulficientes', () => {

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser inciciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})


describe('quando existir participantes suficientes', () => {
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Gabriel', 'Falcão', 'Gamonal'])
    })
    test('a brincadeira pode ser inciciada', () => {
        render(<RecoilRoot> 
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()

    })

    test('a brincadeira foi iniciada', ()=>{
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalled()
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)

    })
})