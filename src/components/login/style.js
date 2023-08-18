import styled from 'styled-components';

<<<<<<< HEAD
const LogIn = styled.section`
  margin: 20px;
  padding: 20px;
  font-family: Arial,sans-serif;
  background-color: #eee;
=======
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
  padding: 1.8rem;
  margin: auto;
  border-radius: 1.5rem;
  margin-bottom: 2rem;  
>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3
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
    border-radius: 1rem;
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

      button{
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
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