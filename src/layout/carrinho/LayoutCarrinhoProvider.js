const { Outlet } = require("react-router-dom");
const { CarrinhoProvider } = require("common/contexts/Carrinho");

//TODO: Mudar o nome da função para LayoutCarrinhoProvider
export default function LayoutCarrinhoProvider() {
    return (
        <CarrinhoProvider>
            <Outlet />
        </CarrinhoProvider>
    )
}
