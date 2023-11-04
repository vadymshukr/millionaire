import React from 'react'
import handImg from 'src/assets/hand.svg'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import Title from 'src/components/Title/Title'
import formatCurrency from 'src/pages/Quiz/helpers/formatCurrency'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import styles from './GameOverScreen.module.css'
import { resetGame } from '../../reducers/quizReducer'

function GameOverScreen() {
    const dispatch = useAppDispatch()
    const prize = useAppSelector(state => state.quiz.prize)

    const onTryAgainBtnClick = () => {
        dispatch(resetGame())
    }
    return (
        <div className={styles.gameOverScreen}>
            <Container>
                <div className={styles.main}>
                    <div className={styles.media}>
                        <img src={handImg} alt='hand' />
                    </div>
                    <div className={styles.content}>
                        <span className={styles.score}>Total score:</span>
                        <Title className={styles.title}>{formatCurrency(prize)} earned</Title>
                        <Button onClick={onTryAgainBtnClick}>Try again</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GameOverScreen
