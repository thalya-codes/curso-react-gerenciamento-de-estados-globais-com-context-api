import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

export const CarrinhoContext = createContext([]);

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
            {children}
        </CarrinhoContext.Provider>
    )
}