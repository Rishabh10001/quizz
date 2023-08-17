import { styled } from 'styled-components';

const LogIn = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #D6EFFF;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

const SignInContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 40rem;
  padding: 3rem;
  margin: auto;
  border-radius: 1.5rem;
  width: fit-content;
  box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.3);
`;

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignInInput = styled.input`
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SignUpLink = styled.div`
  margin-top: 20px;
`;

const SignUpAnchor = styled.a`
  color: #01386A;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  LogIn,
  Heading,
  SignInContainer,
  SignInForm,
  SignInInput,
  // SignInButton,
  // Button,
  SignUpLink,
  SignUpAnchor,
};
