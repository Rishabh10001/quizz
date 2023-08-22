import React from 'react'
import { useState } from 'react'
import { Quiz } from '../../modals/Quiz';
import { useNavigate } from 'react-router-dom';
import CreateQuizStyle from './style';

const CreateQuiz = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0)
    
    const navigate = useNavigate();
    const addQuiz = () =>{
        let quizes = localStorage.getItem("QUIZES") ? JSON.parse(localStorage.getItem("QUIZES")) : []
        const newQuiz = new Quiz(title,description,duration)
        quizes.push(newQuiz)
        localStorage.setItem("QUIZES", JSON.stringify(quizes))
        navigate("/question-form")
    }
    
    
  return (
    <CreateQuizStyle>
    <h2>Create Quiz</h2>
    <div className="createquiz">
    <form action="">
        <input 
            type="text" 
            placeholder='Title of Quiz'
            onChange={(e) => setTitle(e.target.value)}
        />
        <input 
            type="text"
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)} 
            />
        <input 
            type="number" 
            placeholder='Duration'
            onChange={(e) => setDuration(e.target.value)}
            />
        <input 
            type="button" 
            className='Button'
            value="Create Quiz"
            onClick={addQuiz}
            />
    </form>
    </div>
    </CreateQuizStyle>
  )
}

export default CreateQuiz
