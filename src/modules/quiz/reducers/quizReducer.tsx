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
        }
    }
})

export const { setQuestions } = quizSlice.actions

export default quizSlice.reducer
