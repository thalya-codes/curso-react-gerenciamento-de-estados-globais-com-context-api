import { Nav } from './styles';
//import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Badge } from '@mui/material';
import { useCarrinhoContext } from 'common/hooks/useCarrinhoContext';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { quantidadeDeProdutos }  = useCarrinhoContext();
  const navigate = useNavigate();

  return (
    <Nav>
      {/* <Logo /> */}
      <Button
        disabled={quantidadeDeProdutos === 0}
        onClick={() => navigate("/carrinho")}
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