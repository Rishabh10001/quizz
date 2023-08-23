import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import QuestionForm from "./components/question-form";
import Questions from "./components/questions";
import Header from "./components/header";
import Registration from "./components/signup";
import Login from "./components/login";
import CreateQuiz from "./components/createQuiz";
import { useEffect } from "react";

import Footer from "./components/footer";
import Quizes from "./components/quizes";


// const quizzes = [
//   {
//     name: 'Quiz 1',
//     topic: 'HTML',
//     numQuestions: 10,
//     time: 15
//   }
// ];

const App = () => {

    const [questions, setQuestions] = useState([]);
    const addQuestion = (question) =>{
      setQuestions([...questions,question]);
    };
    useEffect(() => {
      localStorage.setItem("QUESTIONS", JSON.stringify(questions));
    },[questions]);

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/signup" element = {<Registration />} />
        <Route path="/questions" element = {<Questions questions={questions} />} />
        <Route path="/question-form" element = {<QuestionForm  />} />
        <Route path="/create-quiz" element = { <CreateQuiz />} />
        <Route path="/quizes" element = {<Quizes/> }/>
        {/* <Route path="/quiz-list" element = {<quizList quizzes={quizzes} />}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
export default App
