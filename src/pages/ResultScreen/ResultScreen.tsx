import React from 'react'
import handImg from 'src/assets/hand.svg'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import { goToStartScreen } from 'src/components/Router/store'
import Title from 'src/components/Title/Title'
import formatCurrency from 'src/helpers/formatCurrency'
import { useAppDispatch, useAppSelector } from 'src/store'
import { resetGame } from 'src/modules/quiz/store'
import styles from './ResultScreen.module.css'

function ResultScreen() {
    const dispatch = useAppDispatch()
    const prize = useAppSelector(state => state.quiz.prize)

    const onTryAgainBtnClick = () => {
        dispatch(resetGame())
        dispatch(goToStartScreen())
    }
    return (
        <div className={styles.gameOverScreen}>
            <Container>
                <div className={styles.main}>
                    <div className={styles.media}>
                        <img src={handImg} alt='hand' />
                    </div>
                    <div className={styles.content}>
                        <div>
                            <span className={styles.score}>Total score:</span>
                            <Title className={styles.title}>{formatCurrency(prize)} earned</Title>
                        </div>

                        <Button onClick={onTryAgainBtnClick}>Try again</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ResultScreen
