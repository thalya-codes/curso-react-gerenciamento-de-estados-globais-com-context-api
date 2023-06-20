import { memo } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from './style';
import { Button } from '@mui/material';
import { useCarrinhoContext } from 'common/hooks/useCarrinhoContext';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade = 0
}) {
  const { 
    carrinho, 
    adicionarNovoProduto, 
    lidarComARemocaoDoProduto 
  } = useCarrinhoContext();
  
  const produtoNoCarrinho = carrinho?.find(produto => produto.id === id);

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <Button
            color="secondary"
            onClick={() => lidarComARemocaoDoProduto(id)}
          >
            <DeleteIcon />
          </Button>

          <span>{produtoNoCarrinho?.unidade || unidade}</span>

          <Button onClick={() => adicionarNovoProduto({ id, nome, foto, valor, unidade }, 1)}>
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </Container>
  )
}

export default memo(Produto)