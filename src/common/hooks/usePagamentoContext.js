import { PagamentoContext } from "common/contexts/Pagamento";
import { useContext } from "react";

//Papel deste: Lidar com as formas de pagamento
// consumir o valor total no carrinho e aplicar os devidos juros
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