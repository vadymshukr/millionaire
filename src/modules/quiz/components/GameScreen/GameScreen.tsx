import React from 'react'
import { QuizQuestion } from '../../types/types'

type Props = {
    currentQuestion: QuizQuestion
    onAnswerBtnClick: (i: number) => void
}

function GameScreen({ currentQuestion, onAnswerBtnClick }: Props) {
    return (
        <>
            <h1>QUIZ</h1>
            {currentQuestion && (
                <>
                    <div>{currentQuestion.question}</div>
                    {currentQuestion.content.map((item, i) => (
                        <button
                            type='button'
                            key={item}
                            onClick={() => {
                                onAnswerBtnClick(i)
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </>
            )}
        </>
    )
}

export default GameScreen
