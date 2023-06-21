import { Nav } from './styles';
//import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Badge } from '@mui/material';
import { useCarrinhoContext } from 'common/hooks/useCarrinhoContext';

export default function NavBar() {
  const { quantidadeDeProdutos }  = useCarrinhoContext();

  return (
    <Nav>
      {/* <Logo /> */}
      <Button
        disabled={quantidadeDeProdutos === 0}
      >
        <Badge
          color="primary"
          badgeContent={quantidadeDeProdutos}
        >
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Nav>
  )
}