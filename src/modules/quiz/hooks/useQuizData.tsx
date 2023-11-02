import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { setQuestions } from '../reducers/quizReducer'

import jsonData from '../data/quiz.json'
import { QuizQuestion, QuizScreen } from '../types'

type QuizData = {
    currentQuestion: QuizQuestion
    currentScreen: QuizScreen
}

const useQuizData = (): QuizData => {
    const dispatch = useAppDispatch()
    const quizData = useAppSelector(state => state.quiz)
    const { questions, currentStage, currentScreen } = quizData
    const currentQuestion = questions[currentStage]
    useEffect(() => {
        dispatch(setQuestions(jsonData.data))
    }, [])
    return { currentQuestion, currentScreen }
}

export default useQuizData
