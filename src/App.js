import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const [next, setNextQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [finish,setFinish] = useState(false)

  
  


  const questions = [
    {questionText:'what is the capital of France?',
      answerOptions:[
        {answerText:'New York', isCorrect:false},
        {answerText:'Paris', isCorrect:true},
        {answerText:'Nigeria', isCorrect:false},
        {answerText:'Tokyo', isCorrect:false}
      ]
    },

    {questionText:'who is the CEO of Tesla',
      answerOptions:[
        {answerText:'jeff Bezos', isCorrect:false},
        {answerText:'Elon Musk', isCorrect:true},
        {answerText:'Umoh Udonwa', isCorrect:false},
        {answerText:'Peter Drury', isCorrect:false}
      ]
    },

    {questionText:'Iphone was created by which company?',
      answerOptions:[
        {answerText:'Apple', isCorrect:true},
        {answerText:'Icon mobile', isCorrect:false},
        {answerText:'computer village', isCorrect:false},
        {answerText:'plaza', isCorrect:false}
      ]
    },

    {questionText:'How any Harry Potter books are there?',
      answerOptions:[
        {answerText:'1', isCorrect:false},
        {answerText:'4', isCorrect:true},
        {answerText:'6', isCorrect:false},
        {answerText:'7', isCorrect:true}
      ]
    },
  ]
  const handleAnswerClick=(isCorrect)=>{
    if(isCorrect===true){
      setScore(score+1)
    }else{
      setScore(score)
    }
    if(next===(questions.length-1)){
      setFinish(true)
    }
    else{
        setNextQuestion(next+1)

    }
    }


  return (
    <div className="container">
          {finish?
              <div>
                your score is {score}/{questions.length}
                {score===questions.length?<h1>Excelente💖</h1> :null}
              </div>
              :
        <div className="quiz">           
            <div className="questions">
              <p>QUESTION 1/{questions.length}</p>
              <p className='question'>{questions[next].questionText}</p>
            </div>

            <div className="options">
              {
                questions[next].answerOptions.map((answer) =>{
                  return (<button onClick={()=>handleAnswerClick(answer.isCorrect)}>{answer.answerText}</button>)
                }

              )}
            </div>
        </div>
}
    </div>
  );
}

export default App;
