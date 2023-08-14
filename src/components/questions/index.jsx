import React from 'react'
import { useNavigate } from 'react-router-dom'

const Questions = ({questions}) => {
const navigate =  useNavigate()
const AddQuestion = () => {
  navigate("/question-form")
}
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
    <input 
      type='button'
      value="Add Question" 
      onClick={ AddQuestion }
    />
    </div>
  )
}

export default Questions
