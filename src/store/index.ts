import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import routerReducer from 'src/components/Router/store'
import quizReducer from 'src/modules/quiz/store'

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        router: routerReducer
    }
})
export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
