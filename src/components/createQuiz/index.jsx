import React from 'react'
import { useState } from 'react'
import { Quiz } from '../../modals/Quiz';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {

    const [title ,setTitle] = useState("")
    const [description,setDescription ]=useState("");
    const [duration,setDuration] = useState(0)

    const navigate = useNavigate();
    const newQuiz = new Quiz(title,description,duration)
    let quizes = JSON.parse(localStorage.getItem("QUIZES"))
    if(quizes?.length)
    quizes.push(newQuiz)
    else
    quizes = []
    localStorage.setItem("QUIZES", JSON.stringify(quizes))
  return (
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
            placeholder='duration'
            onChange={(e) => setDuration(e.target.value)}
        />
        <input 
            type="button" 
            value="Add Question"
            onClick={() => navigate("/question-form")}
        />
    </form>
  )
}

export default CreateQuiz
