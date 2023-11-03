import React from 'react'
import { useAppDispatch } from '../../../../store/store'
import { startGame } from '../../reducers/quizReducer'

function StartScreen() {
    const dispatch = useAppDispatch()
    const onStartBtnClick = () => {
        dispatch(startGame())
    }
    return (
        <>
            <h1>START SCREEN</h1>
            <button type='button' onClick={onStartBtnClick}>
                Start
            </button>
        </>
    )
}

export default StartScreen
