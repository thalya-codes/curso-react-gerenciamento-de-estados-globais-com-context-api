import { memo } from 'react';
import { Container } from './style';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  return (
      <Container>
        <div>
          {/* <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          /> */}
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <Button
            color="secondary"
          >
            <DeleteIcon />
          </Button>
          <Button>
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </Container>
  )
}

export default memo(Produto)