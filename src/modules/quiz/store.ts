import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuizQuestion } from 'src/modules/quiz/types'

type State = {
    currentStage: number
    questions: QuizQuestion[]
    isLoading: boolean
    prize: number
}

const initialState: State = {
    currentStage: 0,
    questions: [],
    isLoading: false,
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
        nextStage(state) {
            return { ...state, currentStage: state.currentStage + 1 }
        },
        resetGame(state) {
            return { ...state, currentStage: 0, prize: 0 }
        },
        savePrize(state, action: PayloadAction<number>) {
            return { ...state, prize: action.payload }
        }
    }
})

export const { setQuestions, nextStage, resetGame, savePrize } = quizSlice.actions

export default quizSlice.reducer
