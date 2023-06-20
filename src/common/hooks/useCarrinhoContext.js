import { CarrinhoContext } from "common/contexts/Carrinho";
import { useContext } from "react";

export function useCarrinhoContext() {
    const [carrinho, setCarrinho] = useContext(CarrinhoContext);

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

    //TODO: Rever os nomes das funções abaixo
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

    return { carrinho, adicionarNovoProduto, lidarComARemocaoDoProduto };
}