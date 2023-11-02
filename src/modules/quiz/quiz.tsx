import React from 'react'
import GameOverScreen from './components/GameOverScreen/GameOverScreen'
import GameScreen from './components/GameScreen/GameScreen'
import StartScreen from './components/StartScreen/StartScreen'
import useQuizData from './hooks/useQuizData'
import { QuizScreen } from './types/types'

function Quiz() {
    const {
        currentQuestion,
        currentScreen,
        onStartBtnClick,
        onAnswerBtnClick,
        onTryAgainBtnClick
    } = useQuizData()

    switch (currentScreen) {
        case QuizScreen.InGame:
            return (
                <GameScreen currentQuestion={currentQuestion} onAnswerBtnClick={onAnswerBtnClick} />
            )
        case QuizScreen.GameOver:
            return <GameOverScreen onTryAgainBtnClick={onTryAgainBtnClick} />
        default:
            return <StartScreen onStartBtnClick={onStartBtnClick} />
    }
}

export default Quiz
