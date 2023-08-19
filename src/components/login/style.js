import styled from 'styled-components';

const LogIn = styled.section`
  margin: auto;
  padding: 20px;
  font-family: Arial,sans-serif;
  background-color: #eee;
  width: fit-content;
  align-items: center;

  h2{
    font-size: 1.5rem;
    text-align: center;
  }

  .SignInContainer{
    background-color: #ffff;
    padding: 1.8rem;
    margin-top: 3rem;
    border-radius: 0.8rem;
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
        border-radius: 4px;
        font-size: 14px;
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

export default LogIn