const { Outlet } = require("react-router-dom");
const { CarrinhoProvider } = require("common/contexts/Carrinho");

export default function LayoutCarrinhoContext() {
    return (
        <CarrinhoProvider>
            <Outlet />
        </CarrinhoProvider>
    )
}
