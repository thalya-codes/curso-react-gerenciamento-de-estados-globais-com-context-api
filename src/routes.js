import Login  from "./pages/Login/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import UsuarioProvider from "./common/contexts/Usuario";
import { CarrinhoProvider } from "common/contexts/Carrinho";

export default function Router() {
    return (
        <>
            <UsuarioProvider>
                <Routes>
                    <Route path="/" element={ <Login/>}/>
                    <Route path="/feira" element={
                        <CarrinhoProvider>
                            <Feira />
                        </CarrinhoProvider>
                    }/>
                </Routes>                
            </UsuarioProvider> 

            <Routes>       
                <Route path="/carrinho" element={<Carrinho />}/>
            </Routes>
        </>
    )
}