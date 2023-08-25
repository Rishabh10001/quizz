import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizesStyle from './style';
import QuizDisplay from '../quizDisplay';

const Quizes = () => {
  const [quizes, setQuizes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  

  useEffect(() => {
    axios.get('https://quizattendace.onrender.com/api/quiz/read')
      .then(res => setQuizes(res.data))
      .catch(error => console.error('Error fetching quizzes:', error));
  }, []);
  

  return (
    <QuizesStyle>
      <div className='QuizContainer'>
        {quizes.map(quiz => (
          <button key={quiz.id} onClick={() => setSelectedQuiz(quiz)}>
            {quiz.title}
          </button>
        ))}
      </div>

      {selectedQuiz && (
        <div className='SelectedQuiz'>   
          <QuizDisplay quizId={selectedQuiz.id}/>                  
        </div>
      )}
    </QuizesStyle>
  );
};

export default Quizes;
