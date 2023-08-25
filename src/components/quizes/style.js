import { styled } from "styled-components";

const QuizesStyle = styled.section`
    margin: auto;
    padding: 30px;

    .QuizContainer{
        background-color: #ffff;
        padding: 3rem;
        margin: 3rem;
        border-radius: 0.8rem;
        display: flex;
        justify-content: space-evenly ;
        @media screen and (max-width :769px){
            width: fit-content !important;
            height:fit-content!important;
            align-items: center;
            text-align:center;
            font-size:.5em;
            }

            .Button{
                margin: 30px;
                padding: 10px 20px;
                border: none;
                border-radius:4px;
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
`

export default QuizesStyle