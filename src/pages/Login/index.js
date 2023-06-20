import { useNavigate } from 'react-router-dom';
import { Container, Titulo, InputContainer } from './styles';
import { Button, Input, InputLabel, InputAdornment } from '@mui/material';
import { UsuarioContext } from '../../common/contexts/Usuario';
import { useContext } from 'react';

function Login() {
  const { nome, setNome, saldo,setSaldo } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/feira")
  }
  
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>

      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
        value={saldo}
        onChange={(evento) => setSaldo(evento.target.value)}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={nome.length < 4}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;