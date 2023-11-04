import classNames from 'classnames/bind'
import React from 'react'
import formatCurrency from 'src/pages/Quiz/helpers/formatCurrency'
import styles from './PrizeItem.module.css'
import Background from './assets/background.svg?react'

type Props = {
    isDone: boolean
    isCurrent: boolean
    prize: number
}
function PrizeItem({ isDone, isCurrent, prize }: Props) {
    const cx = classNames.bind(styles)
    const cl = cx(styles.prizeItem, {
        isDone,
        isCurrent
    })

    const formattedValue = formatCurrency(prize)

    return (
        <div className={cl}>
            <div className={styles.line} />
            <div className={styles.main}>
                <Background className={styles.background} />
                <span>{formattedValue}</span>
            </div>
            <div className={styles.line} />
        </div>
    )
}

export default PrizeItem
