import React from 'react'
import { useState } from 'react'

const Next = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  // determine if on the first question or not
  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === length - 1;
  return (
    <div className='container'>
        <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>

    </div>
  )
}

export default Next