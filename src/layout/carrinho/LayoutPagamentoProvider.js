import { PagamentoProvider } from "common/contexts/Pagamento"
import { Outlet } from "react-router-dom"

export default function LayoutPagamentoProvider() {
    return (
        <PagamentoProvider>
            <Outlet />
        </PagamentoProvider>
    )
}