import { createContext, useState } from "react";

export const PagamentoContext = createContext();

export function PagamentoProvider({children}) {
    const tiposDePagamento = [
        {
            id: 1,
            nome: "Cartão de crédito",
            juros: 1.3,
        },
        {
            id: 2,
            nome: "Boleto",
            juros: 1,
        },
        {
            id: 3,
            nome: "PIX",
            juros: 1,
        },
        {
            id: 4,
            nome: "Crediário",
            juros: 1.5,
        }
    ];

    const [formaDePagamento, setFormaDePagamento] = useState(tiposDePagamento[0]);

    return (
        <PagamentoContext.Provider value={{
            tiposDePagamento,
            formaDePagamento,
            setFormaDePagamento
        }}>
            {children}
        </PagamentoContext.Provider>
    )
}