import React from 'react'
import useQuizData from './hooks/useQuizData'

function Quiz() {
    const { currentQuestion } = useQuizData()
    return (
        <>
            <h1>QUIZ</h1>
            {currentQuestion && (
                <>
                    <div>{currentQuestion.question}</div>
                    {currentQuestion.content.map(item => (
                        <div key={item}>{item}</div>
                    ))}
                </>
            )}
        </>
    )
}

export default Quiz
