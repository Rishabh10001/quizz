import React, { useState, useEffect} from 'react'
import axios from 'axios'
import DisplayStyle from './style';

const QuizDisplay = ({quizId}) => {
  // const [quizess,setQuizess] = useState([])

  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0);
  const[selectedOption,setSelectedOption] = useState(null);
  const [quizes , setQuizes] = useState([])

  // axios.get('https://quiz-back-kqit.onrender.com/api/quiz/read')
  // .then(response => {
  //   setQuizess(response.data)
    
  // })
  // .catch(console.log)
  
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
      const indexMatch = quizes.findIndex(q => q.id === quizId)
      setQuestions(quizes[indexMatch].ques)
    }
    
  },[quizes])

const nextQuestion = () => {
  if(currentIdx < questions.length - 1) {
    setCurrentIdx(currentIdx + 1);
    setSelectedOption(null);                   
  }
}

const handleSubmit = () => {
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
    </button>)}
  </div>)}
  
    {currentIdx === questions.length - 1 && (
    <div>
      <button 
        className='Button'
        onClick={handleSubmit}>
          Submit
      </button>
  </div>)}
  </div>
  </DisplayStyle>
  )
}

export default QuizDisplay
