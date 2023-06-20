import { createContext, useEffect, useState } from "react";
export const CarrinhoContext = createContext([]);

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        console.log('Produtos no carrinho: ', carrinho)
    }, [carrinho])

    return (
        <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
            {children}
        </CarrinhoContext.Provider>
    )
}