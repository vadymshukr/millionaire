import React from 'react'

type Props = {
    onStartBtnClick: () => void
}

function StartScreen({ onStartBtnClick }: Props) {
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
