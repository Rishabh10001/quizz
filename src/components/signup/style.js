import styled from 'styled-components';

const SignUp = styled.section`
margin: auto;
padding: 20px;
font-family: Arial,sans-serif;
width: fit-content;
display: flex;
flex-direction: column;
background-color: #eee;

h2{
  font-size: 1.5rem;
  text-align: center;
}

.SignUpContainer{
  background-color: #ffff;
  padding: 1.8rem;
  margin-top: 3rem;
  border-radius: 0.8rem;
  box-shadow: 0,2px,4px rgba(0,0,0,0.3),0,8px,16px rgba(0,0,0,0.3);
  display: flex;

  justify-content: space-evenly ;

  form{
    display: flex;
    flex-direction: column;

    input{
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }

    select{
      margin: 10px 0;
      padding: 2px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      color: #696969;
      appearance: none;
      background: url('https://imgs.search.brave.com/4FBQro2KbFp2g2DAOGVfgdmWhT3QHDuj1sNqKW8sX-Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmVhdGhlci01/LzI0L2Fycm93LWRv/d24tMTI4LnBuZw') no-repeat 98% center;
      background-size: 20px;
    }

    .Button{
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
    }
  }
}
a{
  color: #01386A;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
}

`

export default SignUp

