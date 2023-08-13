import React from 'react'

const quizList = ({ quizzes }) => {
  return (
    <div className='quiz-list'>
        {quizzes.map((quiz, index) => (
            <quizItem key={index} quiz={quiz} />
        ))}
    </div>
  )
}

export default quizList
