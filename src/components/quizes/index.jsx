import {useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios';

import QuizesStyle from './style'

const Quizes = () => {

  const [quizes, setQuizes] = useState([])
  const [quiz, setQuiz] = useState(quizes[0]);

  useEffect(() => {
      axios.get('https://quizattendace.onrender.com/api/quiz/read')
      .then(res => setQuizes(res.data))
  },[])


  return (
    <QuizesStyle>
    <div className='QuizContainer'>
        {/* <input
            type='button'
            value={ quiz.title }
        /> */}
        {/* <input
            type='button'
            value= {quiz.title}
        /> */}
         <select onChange={e => setQuiz(JSON.parse(e.target.value))}>
            {
                quizes.map(quiz => <option key={quiz.id} value={JSON.stringify(quiz)}>{quiz.title}</option>)
            }
        </select>

    </div>
    </QuizesStyle>
  )
}

export default Quizes
