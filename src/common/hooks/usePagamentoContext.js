import { PagamentoContext } from "common/contexts/Pagamento";
import { useContext } from "react";

export default function usePagamentoContext() {
    const { tiposDePagamento, formaDePagamento, setFormaDePagamento } 
    = useContext(PagamentoContext);
    
    function selecionarFormaDePagamento(id) {
        const formaDePagamentoSelecionada = tiposDePagamento.find(pagamento => (
            pagamento.id === id
        ));

        if (!formaDePagamentoSelecionada) return;
        
        setFormaDePagamento(formaDePagamentoSelecionada);
    }

    return { 
        tiposDePagamento, 
        formaDePagamento, 
        selecionarFormaDePagamento 
    };
}