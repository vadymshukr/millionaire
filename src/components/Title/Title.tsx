import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'

import styles from './Title.module.css'

type Props = {
    className?: string
}

function Title({ children, className = '' }: PropsWithChildren<Props>) {
    const cx = classNames(styles.title, className)

    return <h1 className={cx}>{children}</h1>
}

export default Title
