import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuizQuestion, QuizScreen } from '../types'

type State = {
    currentScreen: QuizScreen
    currentStage: number
    questions: QuizQuestion[]
    isLoading: boolean
}

const initialState: State = {
    currentStage: 0,
    questions: [],
    isLoading: false,
    currentScreen: QuizScreen.Start
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<QuizQuestion[]>) {
            const { payload } = action
            return { ...state, questions: payload }
        },
        startGame(state) {
            return { ...state, currentScreen: QuizScreen.InGame }
        },
        gameOver(state) {
            return { ...state, currentScreen: QuizScreen.GameOver }
        },
        nextStage(state) {
            return { ...state, currentStage: state.currentStage + 1 }
        },
        resetGame(state) {
            return { ...state, currentScreen: QuizScreen.Start, currentStage: 0 }
        }
    }
})

export const { setQuestions, startGame, gameOver, nextStage, resetGame } = quizSlice.actions

export default quizSlice.reducer
