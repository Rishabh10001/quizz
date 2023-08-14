import React from 'react'

const Questions = ({questions}) => {
  
  return (
    <div>
      {
      questions.map((question) => (
        <div key={question.answer}> 
          {question.question} -- 
          {question.option1} - 
          {question.option2} - 
          {question.option3} - 
          {question.option4} - 
          correct answer {question.answer}
        </div>
      ))
      }
    </div>
  )
}

export default Questions
