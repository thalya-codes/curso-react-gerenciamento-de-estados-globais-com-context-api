import styled from 'styled-components';
import { FormControl } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 30px;
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const InputContainer = styled(FormControl)`
  .MuiInputLabel-formControl[data-shrink="true"] {
    transform: translate(0px, -9px) scale(0.75);
  };
  .MuiInputLabel-formControl[data-shrink="false"] {
    transform: translate(0px, 16px) scale(1);
  };  
`