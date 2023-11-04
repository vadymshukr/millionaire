import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'

import styles from './Button.module.css'

export type Props = {
    className?: string
    onClick: () => void
}

function Button({ children, className, onClick }: PropsWithChildren<Props>) {
    const cx = classNames(styles.button, className)
    return (
        <button type='button' className={cx} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
