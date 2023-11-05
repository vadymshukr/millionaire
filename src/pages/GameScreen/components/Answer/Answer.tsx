import React, { PropsWithChildren, useState } from 'react'
import { goToResultScreen } from 'src/components/Router/store'
import { useAppDispatch } from 'src/store'
import classNames from 'classnames/bind'
import { nextStage, savePrize } from 'src/modules/quiz/store'
import styles from './Answer.module.css'

import Background from './assets/background.svg?react'

type Props = {
    isCorrect: boolean
    isFinalQuestion: boolean
    currentPrize: number
    questionKey: string
}

function Answer({
    isCorrect,
    currentPrize,
    isFinalQuestion,
    questionKey,
    children
}: PropsWithChildren<Props>) {
    const dispatch = useAppDispatch()
    const [isSelected, setIsSelected] = useState(false)
    const [isCheckClassAdded, setisCheckClassAdded] = useState(false)
    const cx = classNames.bind(styles)
    const cl = cx(styles.answer, {
        selected: isSelected,
        correct: isCheckClassAdded && isCorrect,
        error: isCheckClassAdded && !isCorrect
    })

    const onAnswerBtnClick = () => {
        setIsSelected(true)
        setTimeout(() => {
            setIsSelected(false)
            setisCheckClassAdded(true)
            setTimeout(() => {
                if (isCorrect) {
                    dispatch(savePrize(currentPrize))
                    if (!isFinalQuestion) {
                        dispatch(nextStage())
                    } else {
                        dispatch(goToResultScreen())
                    }
                } else {
                    dispatch(goToResultScreen())
                }
            }, 1500)
        }, 1500)
    }
    return (
        <div className={cl}>
            <button type='button' onClick={onAnswerBtnClick}>
                <Background className={styles.background} />
                <div className={styles.content}>
                    <span className={styles.key}>{questionKey}</span>
                    <span>{children}</span>
                </div>
            </button>
        </div>
    )
}

export default Answer
