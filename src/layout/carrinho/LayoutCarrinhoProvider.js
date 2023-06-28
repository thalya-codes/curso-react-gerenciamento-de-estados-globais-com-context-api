const { Outlet } = require("react-router-dom");
const { CarrinhoProvider } = require("common/contexts/Carrinho");

export default function LayoutCarrinhoProvider() {
    return (
        <CarrinhoProvider>
            <Outlet />
        </CarrinhoProvider>
    )
}
