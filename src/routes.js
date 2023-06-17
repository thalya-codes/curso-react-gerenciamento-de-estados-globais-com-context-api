import Login  from "./pages/Login/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import UsuarioProvider from "./common/contexts/Usuario";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={
                    <UsuarioProvider>
                        <Login/>
                    </UsuarioProvider>} 
                />

                <Route path="/feira" element={<Feira />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
            </Routes>
        </BrowserRouter>
    )
}