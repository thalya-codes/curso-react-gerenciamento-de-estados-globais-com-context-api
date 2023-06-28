import { CarrinhoContext } from "common/contexts/Carrinho";
import { useContext, useEffect, useState } from "react";
import usePagamentoContext from "./usePagamentoContext";
import { UsuarioContext } from "common/contexts/Usuario";

export function useCarrinhoContext() {
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  const { carrinho, setCarrinho, quantidadeDeProdutos, setQuantidadeDeProdutos } = 
  useContext(CarrinhoContext);
  const { formaDePagamento } = usePagamentoContext()
  const { saldo, setSaldo } = useContext(UsuarioContext)
  

    useEffect(() => {
      const resultado = carrinho.reduce((acumulador, produto) => acumulador + produto.unidade, 0);
      setQuantidadeDeProdutos(resultado);    
      
    }, [carrinho, setQuantidadeDeProdutos]);

    function atualizarUnidadeDoProduto(id, quantidade) {
      const carrinhoComUnidadeDoProdutoAtualizada = carrinho.map(produto => {
        if (produto.id === id) {
          produto.unidade += quantidade;
        }
  
        return produto;
      });

      setCarrinho([...carrinhoComUnidadeDoProdutoAtualizada]);
    };
  
    function adicionarNovoProduto(produto, quantidade) {
      const produtoJaFoiAdicionado = carrinho.some(({ id }) => id === produto.id);
  
      if (!produtoJaFoiAdicionado) {
        const novoProduto = { ...produto, unidade: 1 };
  
        setCarrinho(produtosAnteriores => [...produtosAnteriores, novoProduto]);
        return;
      }
  
      atualizarUnidadeDoProduto(produto.id, quantidade);
    };

    function calcularValorTotal() {
      const valorTotal = carrinho.reduce((acumulador, produto) =>  (
          acumulador + (produto.valor * produto.unidade) 
      ),0) * formaDePagamento.juros;  

      setValorTotalCarrinho(valorTotal.toFixed(2));
    }

    useEffect(() => {
      calcularValorTotal();
    }, [carrinho, formaDePagamento]);
    
    function removerProduto(id)  {
        setCarrinho((produtosAnteriores) => {
           return produtosAnteriores.filter(produtoAnterior => produtoAnterior.id !== id)
        });
    };
    
    function lidarComARemocaoDoProduto(id) {
        const produtoEncontrado = carrinho.find(produto => produto.id === id);

        if (!produtoEncontrado) return;

        if (produtoEncontrado.unidade > 1 ) {
            atualizarUnidadeDoProduto(id, -1);
            return; 
        }

        removerProduto(id);        
    };

    function efetuarCompra() {
      setCarrinho([]);
      setSaldo(saldo - valorTotalCarrinho);
    }

    return { 
      carrinho, 
      adicionarNovoProduto, 
      lidarComARemocaoDoProduto, 
      quantidadeDeProdutos,
      valorTotalCarrinho,
      efetuarCompra
    };
}