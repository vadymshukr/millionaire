import React from 'react'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import Title from 'src/components/Title/Title'
import { useAppDispatch } from 'src/store/store'
import handImg from 'src/assets/hand.svg'
import { startGame } from '../../reducers/quizReducer'

import styles from './StartScreen.module.css'
import Background from './assets/background.svg?react'

function StartScreen() {
    const dispatch = useAppDispatch()
    const onStartBtnClick = () => {
        dispatch(startGame())
    }
    console.log('test')
    return (
        <div className={styles.startScreen}>
            <Background className={styles.background} />
            <Container>
                <div className={styles.main}>
                    <div className={styles.media}>
                        <img src={handImg} alt='hand' />
                    </div>
                    <div className={styles.content}>
                        <Title>Who wants to be a millionaire?</Title>
                        <Button onClick={onStartBtnClick}>Start</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default StartScreen
