import React from 'react'

type Props = {
    onTryAgainBtnClick: () => void
}

function GameOverScreen({ onTryAgainBtnClick }: Props) {
    return (
        <button type='button' onClick={onTryAgainBtnClick}>
            Try Again
        </button>
    )
}

export default GameOverScreen
