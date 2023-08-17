import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Question } from '../../modals/Question';

const QuestionForm = ({addQuestion}) => {

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [answer, setAnswer] = useState(0);
    const [quiz, setQuiz] = useState(null)

    const quizes = JSON.parse(localStorage.getItem("QUIZES"))

    const navigate = useNavigate();
    const add = () =>{
        const indexMatch = quizes.findIndex(q => q.id === quiz.id)
        quizes[indexMatch] = new Question(question, [option1, option2, option3,option4], answer)
        localStorage.setItem("QUIZES", quizes)

        // const newQuestion = {
        //     question,
        //     option1,
        //     option2,
        //     option3,
        //     option4,
        //     answer
        // }
        // addQuestion(newQuestion)
        

        // localStorage.setItem("QUESTIONS1", JSON.stringify({[newQuestion.question] : newQuestion}))
        // localStorage.setItem(newQuestion.question,JSON.stringify(newQuestion));
        // console.log(newQuestion.question);
        navigate("/questions")
    }

  return (
    <div>
      <form action="">
        Enter Question
        <input 
            type="text" 
            placeholder='Enter the question'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Option 1'
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Option 2'
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Option 3'
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Option 4'
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
        />
        <select name="correctAnswer" id="correctAnswer"  onChange={(e) => setAnswer(e.target.value)}>
            <option value="" disabled selected>--Select the correct answer--</option>
            <option value={1}>{option1}</option>
            <option value={2}>{option2}</option>
            <option value={3}>{option3}</option>
            <option value={4}>{option4}</option>
        </select>
        <select onChange={e => setQuiz(e.target.value)}>
            {
                quizes.map(quiz => <option key={quiz.id} value={quiz}>quiz.title</option>)
            }
        </select>
        <input 
            type="button" 
            value='Add Question'
            onClick={add}
        />
      </form>
    </div>
  )
}

export default QuestionForm
