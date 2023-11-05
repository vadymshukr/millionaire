import React, { useEffect } from 'react'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import { goToQuizScreen } from 'src/components/Router/store'
import Title from 'src/components/Title/Title'
import jsonData from 'src/modules/quiz/data/quiz.json'
import { useAppDispatch } from 'src/store'
import handImg from 'src/assets/hand.svg'
import { setQuestions } from 'src/modules/quiz/store'

import styles from './StartScreen.module.css'
import Background from './assets/background.svg?react'

function StartScreen() {
    const dispatch = useAppDispatch()
    const onStartBtnClick = () => {
        dispatch(goToQuizScreen())
    }

    useEffect(() => {
        dispatch(setQuestions(jsonData.data))
    }, [dispatch])
    return (
        <div className={styles.startScreen}>
            <Background className={styles.background} />
            <Container>
                <div className={styles.main}>
                    <div className={styles.media}>
                        <img src={handImg} alt='hand' />
                    </div>
                    <div className={styles.content}>
                        <Title className={styles.title}>Who wants to be a millionaire?</Title>
                        <Button onClick={onStartBtnClick}>Start</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default StartScreen
