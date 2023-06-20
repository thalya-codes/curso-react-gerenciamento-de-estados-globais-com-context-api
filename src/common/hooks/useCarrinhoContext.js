import { CarrinhoContext } from "common/contexts/Carrinho";
import { useContext } from "react";

export function useCarrinhoContext() {
    const [carrinho, setCarrinho] = useContext(CarrinhoContext);

    function atualizarUnidadeDoProduto(id) {
      return carrinho.map(produto => {
        if (produto.id === id) {
          produto.unidade += 1;
        }
  
        return produto;
      });
    };
  
    function adicionarNovoProduto(produto) {
      const produtoJaFoiAdicionado = carrinho.some(({ id }) => id === produto.id);
  
      if (!produtoJaFoiAdicionado) {
        const novoProduto = { ...produto, unidade: 1 };
  
        setCarrinho(produtosAnteriores => [...produtosAnteriores, novoProduto]);
        return;
      }
  
      setCarrinho([...atualizarUnidadeDoProduto(produto.id)]);
    } ; 

    return { carrinho, adicionarNovoProduto };
}