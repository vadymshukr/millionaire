import React, { PropsWithChildren } from 'react'
import styles from './Question.module.css'

function Question({ children }: PropsWithChildren) {
    return <div className={styles.question}>{children}</div>
}

export default Question
