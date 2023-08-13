import React from 'react'

const quizItem = ({ quiz }) => {
  return (
    <div className='quiz-item'>
      <h2>{quiz.name}</h2>
      <p>Topic : {quiz.topic}</p>
      <p>Number of Questions : {quiz.numQuestions} </p>
      <p>Time : {quiz.time} minutes</p>
      <input type = "button" className='start-button' value={"Start Quiz"}/>
    </div>
  )
}

export default quizItem 