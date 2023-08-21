import styled from 'styled-components';

const LogIn = styled.section`
  padding: 20px;
  font-family: Arial,sans-serif;
  background-color: #eee;
  width: fit-content;
  margin:auto;

  h2{
    font-size: 1.5rem;
    text-align: center;
  }

  .SignInContainer{
    background-color: #ffff;
    padding: 1.8rem;
    margin-top: 3rem;
    border-radius: 0.5rem;
    box-shadow: 0,2px,4px rgba(0,0,0,0.3),0,8px,16px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-evenly ;
    
    form{
      // width: auto;
      display: flex;
      flex-direction: column;

      input{
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 14px;
        justify-content:center;
        align-items:center;
      }

      button{
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 14px;
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

export default LogIn