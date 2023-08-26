import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DisplayStyle from './style'

const QuizDisplay = () => {

  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption,setSelectedOption] = useState(null);
  const [quizes , setQuizes] = useState([])
  const param = useParams()
  
  useEffect(() => {
    axios.get(`https://quizattendace.onrender.com/api/quiz/read`)         
    .then(response => {
      setQuizes(response.data)  
    })
    .catch(error => console.error('Error fetching quizzes:', error));
      console.log(questions)
  }, []);

  useEffect(() => {
    if(quizes && quizes.length){
      const indexMatch = quizes.findIndex(q => q.id === param.id)
      setQuestions(quizes[indexMatch].ques)      //dount ki ya ha kya pass ho rh ah basically
    }  
  },[quizes])

const nextQuestion = () => {
  if(currentIdx < questions.length - 1) {
    setCurrentIdx(currentIdx + 1);
    setSelectedOption(null);                   
  }
}

const handleSubmit = () =>{
  alert("submit");
}


  
  return (
    <DisplayStyle>
    <div className='quiz-container'>
    
    {questions.length > 0 && currentIdx <= questions.length - 1 && (
      <div>
        <div className='Question'>
          {questions[currentIdx].ques}
        </div>
        {questions[currentIdx].ans.map((option,idx) => (
        <div key={idx}>
          <label>
          <input
            type='radio'
            onChange={() => setSelectedOption(option)}
            checked = {selectedOption === option}
          />
          {option}
          </label>
        </div>)
  )}
  
      {currentIdx < questions.length -1 && (
      <button
        className='Button' 
        onClick={nextQuestion}
        disabled = {!selectedOption}>
          Next
      </button>
      )}
    </div>
    )}
      {currentIdx === questions.length - 1 && (
      <div>
        <button 
          className='Button'
          onClick={handleSubmit}>
            Submit
        </button></div>)}
      </div>
    </DisplayStyle>
  )
}

export default QuizDisplay
