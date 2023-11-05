import React, { useState } from 'react'
import Header from 'src/pages/GameScreen/components/Header/Header'
import getQuestionKey from 'src/pages/GameScreen/helpers/getQuestionKey'
import Answer from 'src/pages/GameScreen/components/Answer/Answer'
import PrizeItem from 'src/pages/GameScreen/components/PrizeItem/PrizeItem'
import Question from 'src/pages/GameScreen/components/Question/Question'
import { useAppSelector } from 'src/store'
import { QuizQuestion } from '../../modules/quiz/types'

import styles from './GameScreen.module.css'

function GameScreen() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const quizData = useAppSelector(state => state.quiz)
    const { questions, currentStage } = quizData
    const currentQuestion: QuizQuestion = questions[currentStage]
    const prizes = questions.map(item => item.prize)

    return (
        <div className={styles.gameScreen}>
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
            {currentQuestion && (
                <>
                    <div className={styles.main}>
                        <Question>{currentQuestion.question}</Question>
                        <div className={styles.questions}>
                            {currentQuestion.content.map((item, i) => {
                                return (
                                    <Answer
                                        isCorrect={currentQuestion.correct.includes(i)}
                                        isFinalQuestion={currentStage === questions.length - 1}
                                        questionKey={getQuestionKey(i)}
                                        key={item}
                                        currentPrize={currentQuestion.prize}
                                    >
                                        {item}
                                    </Answer>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`${styles.sidebar} ${isMobileMenuOpen ? styles.active : ''}`}>
                        {prizes.map((prize, i) => (
                            <PrizeItem
                                isDone={i < currentStage}
                                isCurrent={i === currentStage}
                                prize={prize}
                                key={prize}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default GameScreen
