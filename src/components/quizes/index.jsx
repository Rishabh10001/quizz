import React from 'react'
import QuizesStyle from './style'

const Quizes = () => {
  return (
    <QuizesStyle>
    <div className='QuizContainer'>
        <input
            type='button'
            value="HTML"
        />
        <input
            type='button'
            value='CSS'
        />

    </div>
    </QuizesStyle>
  )
}

export default Quizes
