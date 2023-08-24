import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuizDisplay = () => {3
  // const [quizess,setQuizess] = useState([])
  //const [questions, setQuestions] = useState([])

  // axios.get('https://quiz-back-kqit.onrender.com/api/quiz/read')
  // .then(response => {
  //   setQuizess(response.data)
    
  // })
  // .catch(console.log)

    
 
  // {QuizDisplay}


  return (
    <div className='quiz-container'>
      {/* <span className='active-question-no '> { currentQuestion+ 1}</span> <span className='total-question'>/{questions.length}</span> */}
      
      {/* quizess.map(quiz => {if(quiz.id==="quiz-1"){
    const questions =quiz.ques
    console.log("Questions:" + questions);
}}
  ) */}
      
    </div>
  )
}

export default QuizDisplay
