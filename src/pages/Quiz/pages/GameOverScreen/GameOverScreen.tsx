import React from 'react'
import { useAppDispatch } from '../../../../store/store'
import { resetGame } from '../../reducers/quizReducer'

function GameOverScreen() {
    const dispatch = useAppDispatch()

    const onTryAgainBtnClick = () => {
        dispatch(resetGame())
    }
    return (
        <button type='button' onClick={onTryAgainBtnClick}>
            Try Again
        </button>
    )
}

export default GameOverScreen
