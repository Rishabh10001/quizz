import React from 'react'
import { useState } from 'react'
import { Quiz } from '../../modals/Quiz';

const CreateQuiz = () => {

    const [title ,setTitle] = useState("")
    const [description,setDescription ]=useState("");
    const [duration,setDuration] = useState(0)

    const newQuiz = new Quiz(title,description,duration)
    const quizes = JSON.parse(localStorage.getItem("QUIZES"))
    quizes.push(newQuiz)
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
    </form>
  )
}

export default CreateQuiz
