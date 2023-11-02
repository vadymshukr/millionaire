import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { gameOver, nextStage, resetGame, setQuestions, startGame } from '../reducers/quizReducer'

import jsonData from '../data/quiz.json'
import { QuizQuestion, QuizScreen } from '../types/types'

type QuizData = {
    currentQuestion: QuizQuestion
    currentScreen: QuizScreen
    onStartBtnClick: () => void
    onAnswerBtnClick: (i: number) => void
    onTryAgainBtnClick: () => void
}

const useQuizData = (): QuizData => {
    const dispatch = useAppDispatch()
    const quizData = useAppSelector(state => state.quiz)
    const { questions, currentStage, currentScreen } = quizData
    const currentQuestion: QuizQuestion = questions[currentStage]
    useEffect(() => {
        dispatch(setQuestions(jsonData.data))
    }, [])

    const onStartBtnClick = () => {
        dispatch(startGame())
    }

    const onAnswerBtnClick = (i: number) => {
        if (currentQuestion.correct.includes(i)) {
            dispatch(nextStage())
        } else {
            dispatch(gameOver())
        }
    }

    const onTryAgainBtnClick = () => {
        dispatch(resetGame())
    }

    return { currentQuestion, currentScreen, onStartBtnClick, onAnswerBtnClick, onTryAgainBtnClick }
}

export default useQuizData
