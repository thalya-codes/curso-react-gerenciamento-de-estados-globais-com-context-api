import { useEffect, useState } from 'react';
import { Button,Snackbar, InputLabel, Select, MenuItem } from '@mui/material';
import Alert from '@mui/lab/Alert';
import Produto from 'components/Produto';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { useCarrinhoContext } from 'common/hooks/useCarrinhoContext';
import { useNavigate } from 'react-router-dom';
import usePagamentoContext from 'common/hooks/usePagamentoContext';

function Carrinho() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotalCarrinho } = useCarrinhoContext();
  const { 
    tiposDePagamento, 
    formaDePagamento, 
    selecionarFormaDePagamento
  } = usePagamentoContext();

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)}/>
      <h2>
        Carrinho
      </h2>

      { carrinho.map(produto => (
        <Produto {...produto} key={produto.id}/>
      )) }

      <PagamentoContainer>
        <InputLabel id="label-forma-pagamento"> Forma de Pagamento </InputLabel>
        <Select
          label="Forma de Pagamento"
          labelId="label-forma-pagamento"
          value={formaDePagamento.id}
          onChange={({ target }) => selecionarFormaDePagamento(target.value)}
        >
          {tiposDePagamento.map(pagamento => (
            <MenuItem 
              value={pagamento.id} 
              key={pagamento.id}
            >
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>

      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotalCarrinho}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </Alert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;