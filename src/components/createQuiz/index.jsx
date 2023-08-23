import React from 'react'
import { useState } from 'react'
import { Quiz } from '../../modals/Quiz';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateQuiz = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    // const [duration, setDuration] = useState(0)
    
    const navigate = useNavigate();
    const addQuiz = (e) =>{
        e.preventDefault()
        e.target.value = "Creating Quiz ..."
        e.target.disabled = true
        // let quizes = localStorage.getItem("QUIZES") ? JSON.parse(localStorage.getItem("QUIZES")) : []
        const newQuiz = new Quiz(title,description)

        axios.post("https://quiz-back-kqit.onrender.com/api/quiz/add", newQuiz)
        .then(response => {
            console.log(response)
            navigate("/question-form")
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Add Quiz"
            e.target.disabled = false
            setTitle("")
            setDescription("")
            // setDuration(0)
        })
        // quizes.push(newQuiz)
        // localStorage.setItem("QUIZES", JSON.stringify(quizes))
        navigate("/question-form")
    }

    const addQuestion = () => {
        let quizes = localStorage.getItem("QUIZES") ? navigate("/question-form") : alert("No existing quizes")
    }
    
    
  return (
    <form action="">
        <input 
            type="text" 
            placeholder='Title of Quiz'
            required
            onChange={(e) => setTitle(e.target.value)}
        />
        <input 
            type="text"
            placeholder='Description'
            required
            onChange={(e) => setDescription(e.target.value)} 
        />
        {/* <input 
            type="number" 
            placeholder='Duration'
            required
            onChange={(e) => setDuration(e.target.value)}
        /> */}
        <input 
            type="button" 
            value="Create Quiz"
            onClick={addQuiz}
        />
        <input
            type='button'
            value="Add Question"
            onClick={addQuestion}
        />

    </form>
  )
}

export default CreateQuiz
