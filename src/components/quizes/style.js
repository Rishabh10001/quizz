import { styled } from "styled-components";

const QuizesStyle = styled.section`
    margin: auto;
    padding: 30px;

    .QuizContainer{
        background-color: #ffff;
        padding: 1.8rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
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
    }
`

export default QuizesStyle