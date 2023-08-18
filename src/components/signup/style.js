import styled from 'styled-components';


const SignupContainer = styled.div`
background-color: #ffffff;
padding: 2rem;
margin: auto;
border-radius: 1.5rem;
box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.3),
0rem 0.8rem 1.6rem rgba(0, 0, 0, 0.3);

`;

const Heading2 = styled.h2`
font-size: 1rem;
text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;`;

const StyledSelect = styled.select`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #D6EFFF;
  font-size: 10px;
  color: #01386A;
  appearance: none;
  background: url('https://imgs.search.brave.com/4FBQro2KbFp2g2DAOGVfgdmWhT3QHDuj1sNqKW8sX-Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmVhdGhlci01/LzI0L2Fycm93LWRv/d24tMTI4LnBuZw') no-repeat 98% center;
  background-size: 20px;
  padding-right: 30px;
`;

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: ${({ type }) => type === 'button' ? '#01386A' : '#0169a8'};
  color: #ffffff;

  &:hover {
    background-color: ${({ type }) => type === 'button' ? '#0169a8' : '#01386A'};
    transform: scale(1.05);
  }
`;

export {
  SignupContainer,
  Heading2,
  Form,
  StyledInput,
  StyledButton,
  StyledSelect
};

