import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

test('Quando input estiver vazio não pode ser adicionado um novo participante', ()=>{
    render(<RecoilRoot>
        <Formulario />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(botao).toBeDisabled()

})


test('quando input preenchido, tem q adicionar um novo participante', ()=>{
    render(<RecoilRoot>
        <Formulario />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    const botao = screen.getByRole('button')

    fireEvent.change(input, {
        target: {
            value: "Nome de uma pessoa"
        }
    })

    fireEvent.click(botao)

    expect(input).toHaveFocus()
    expect(input).toHaveValue("")
})


test('Nomes duplicados não podem ser adicionados na lista', () =>{
    render(<RecoilRoot>
        <Formulario />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    const botao = screen.getByRole('button')

    fireEvent.change(input, {
        target: {
            value: "Nome de uma pessoa"
        }
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
        target: {
            value: "Nome de uma pessoa"
        }
    })

    fireEvent.click(botao)

    const msgErro = screen.getByRole("alert")

    expect(msgErro.textContent).toBe("Proibido nomes duplicados")

})