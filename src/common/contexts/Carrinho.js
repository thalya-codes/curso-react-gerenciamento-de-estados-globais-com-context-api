import { createContext, useState } from "react";
export const CarrinhoContext = createContext([]);

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeDeProdutos, setQuantidadeDeProdutos] = useState(0);

    return (
        <CarrinhoContext.Provider value={{
            carrinho, setCarrinho, 
            quantidadeDeProdutos, setQuantidadeDeProdutos
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}