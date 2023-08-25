import React, { useState, useEffect} from 'react'
import axios from 'axios'

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
    <div className='quiz-container'>
    
  {questions.length > 0 && currentIdx <= questions.length - 1 && (<div><h1>{questions[currentIdx].ques}</h1>
  {questions[currentIdx].ans.map((option,idx) => (<div key={idx}><label><input type='radio'
    onChange={() => setSelectedOption(option)}
    checked = {selectedOption === option}
  />{option}</label></div>)
 )}
 
 {currentIdx < questions.length -1 && (<button onClick={nextQuestion} disabled = {!selectedOption}>Next</button>)}
  </div>)}
  
    {currentIdx === questions.length - 1 && (<div><button onClick={handleSubmit}>Submit</button></div>)}
    </div>
  )
}

export default QuizDisplay
