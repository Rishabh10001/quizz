import React, { useState } from 'react'

const QuizDisplay = () => {
  const[currentQuestion,setCurrentQuestion] = useState();


  if (currentQuestion !=questions.length-1){
    setCurrentQuestion((prev ) => prev+1)
   }
   else {
    setCurrentQuestion(0)
   }
    


  return (
    <div className='quiz-container'>
      <span className='active-question-no '> { currentQuestion+ 1}</span> <span className='total-question'>/{questions.length}</span>
      
        
      
    </div>
  )
}

export default QuizDisplay
