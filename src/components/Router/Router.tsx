import React from 'react'
import GameScreen from 'src/pages/GameScreen/GameScreen'
import ResultScreen from 'src/pages/ResultScreen/ResultScreen'
import StartScreen from 'src/pages/StartScreen/StartScreen'
import { QuizScreen } from 'src/modules/quiz/types'
import { useAppSelector } from 'src/store'

function Router() {
    const currentScreen = useAppSelector(state => state.router.currentScreen)

    switch (currentScreen) {
        case QuizScreen.InGame:
            return <GameScreen />
        case QuizScreen.Result:
            return <ResultScreen />
        default:
            return <StartScreen />
    }
}

export default Router
