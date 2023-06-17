import { Nav } from './styles';
//import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Badge } from '@mui/material';

export default function NavBar() {
  return (
    <Nav>
      {/* <Logo /> */}
      <Button>
        <Badge
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Nav>
  )
}