import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import jsonData from './data/quiz.json'
import GameOverScreen from './pages/GameOverScreen/GameOverScreen'
import GameScreen from './pages/GameScreen/GameScreen'
import StartScreen from './pages/StartScreen/StartScreen'
import { setQuestions } from './reducers/quizReducer'
import { QuizScreen } from './types'

function Quiz() {
    const dispatch = useAppDispatch()
    const currentScreen = useAppSelector(state => state.quiz.currentScreen)

    useEffect(() => {
        dispatch(setQuestions(jsonData.data))
    }, [])

    switch (currentScreen) {
        case QuizScreen.InGame:
            return <GameScreen />
        case QuizScreen.GameOver:
            return <GameOverScreen />
        default:
            return <StartScreen />
    }
}

export default Quiz
