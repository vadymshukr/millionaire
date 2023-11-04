import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuizQuestion, QuizScreen } from '../types'

type State = {
    currentScreen: QuizScreen
    currentStage: number
    questions: QuizQuestion[]
    isLoading: boolean
    prize: number
}

const initialState: State = {
    currentStage: 0,
    questions: [],
    isLoading: false,
    currentScreen: QuizScreen.Start,
    prize: 0
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
            return { ...state, currentScreen: QuizScreen.Start, currentStage: 0, prize: 0 }
        },
        savePrize(state, action: PayloadAction<number>) {
            return { ...state, prize: action.payload }
        }
    }
})

export const { setQuestions, startGame, gameOver, nextStage, resetGame, savePrize } =
    quizSlice.actions

export default quizSlice.reducer
