import { styled } from "styled-components";
const Head = styled.section`
 
  color: black;
  background-color: #1B9AAA;
  width: auto;
  padding: 1%;
  font-size: 32px;
  font-family: monospace ;
  font-weight: 900;
  max-width: auto;
  position: sticky;
  top: 0;
  margin-bottom: 4rem;
  text-align: center;


  .Button{
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: background-color 0.3s ease, transform 0.2s ease;
    background-color: ${({ type }) => type === 'button' ? '#01386A' : '#0169a8'};
    color: #ffffff;

    &:hover {
      background-color: ${({ type }) => type === 'button' ? '#0169a8' : '#01386A'};
      transform: scale(1.05);
    }
  }


`

export default Head


//#177E89