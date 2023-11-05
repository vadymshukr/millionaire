import { createSlice } from '@reduxjs/toolkit'
import { QuizScreen } from 'src/modules/quiz/types'

type State = {
    currentScreen: QuizScreen
}

const initialState: State = {
    currentScreen: QuizScreen.Start
}

const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        goToQuizScreen() {
            return { currentScreen: QuizScreen.InGame }
        },
        goToResultScreen() {
            return { currentScreen: QuizScreen.Result }
        },
        goToStartScreen() {
            return { currentScreen: QuizScreen.Start }
        }
    }
})

export const { goToQuizScreen, goToResultScreen, goToStartScreen } = routerSlice.actions

export default routerSlice.reducer
