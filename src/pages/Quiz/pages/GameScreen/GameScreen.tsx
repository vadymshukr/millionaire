import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { gameOver, nextStage } from '../../reducers/quizReducer'
import { QuizQuestion } from '../../types'

function GameScreen() {
    const quizData = useAppSelector(state => state.quiz)
    const dispatch = useAppDispatch()

    const { questions, currentStage } = quizData
    const currentQuestion: QuizQuestion = questions[currentStage]

    const onAnswerBtnClick = (i: number) => {
        if (currentQuestion.correct.includes(i)) {
            dispatch(nextStage())
        } else {
            dispatch(gameOver())
        }
    }
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
