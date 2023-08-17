import { styled } from 'styled-components';

const LogIn = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #6D9DC5;
`;

const Heading = styled.h2`
  color: #FE654F;
  font-size: 30px;
  text-align: center;
`;

const SignInContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 40rem;
  padding: 5rem;
  margin: auto;
  /* margin-top: 10rem ; */
  border-radius: 0.8rem;
  width: fit-content;
  position: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0.5px 0.5px 0.8px rgba(0, 0, 0, 0.3);
`;

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignInInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SignInButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  SignInButton,
  Button,
  SignUpLink,
  SignUpAnchor,
};
