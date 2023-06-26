import Login  from "pages/Login/index";
import { Routes, Route } from "react-router-dom";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import UsuarioProvider from "common/contexts/Usuario";
import LayoutCarrinhoProvider from "layout/carrinho/LayoutCarrinhoProvider";
import LayoutPagamentoProvider from "layout/carrinho/LayoutPagamentoProvider";

export default function Router() {
    return (
        <>
            <UsuarioProvider>
                <Routes>
                    <Route path="/" element={ <Login/>}/>
                    {/*graças ao Outlet contido no componente  CarrinhoContextLayout
                       todo o conteúdo passa dentro da rota pai será
                       injetado no lugar onde está o Outlet, que neste caso,
                       será injetado dentro do Provider
                    */}
                    <Route element={<LayoutCarrinhoProvider />}>
                        <Route element={<LayoutPagamentoProvider />}>
                            <Route path="/feira" element={<Feira/>}/>
                            <Route path="/carrinho" element={<Carrinho/>}/>
                        </Route>
                    </Route>      
                </Routes>                
            </UsuarioProvider> 
        </>
    )
}