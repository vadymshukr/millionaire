import React from 'react'
import getQuestionKey from 'src/pages/Quiz/helpers/getQuestionKey'
import Answer from 'src/pages/Quiz/pages/GameScreen/components/Answer/Answer'
import PrizeItem from 'src/pages/Quiz/pages/GameScreen/components/PrizeItem/PrizeItem'
import Question from 'src/pages/Quiz/pages/GameScreen/components/Question/Question'
import { useAppSelector } from 'src/store/store'
import { QuizQuestion } from '../../types'

import styles from './GameScreen.module.css'

function GameScreen() {
    const quizData = useAppSelector(state => state.quiz)
    const { questions, currentStage } = quizData
    const currentQuestion: QuizQuestion = questions[currentStage]
    const prizes = questions.map(item => item.prize)
    return (
        <div className={styles.gameScreen}>
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
                    <div className={styles.sidebar}>
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
