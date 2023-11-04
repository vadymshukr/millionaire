import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import styles from './Container.module.css'

type Props = {
    className?: string
}

function Container({ children, className }: PropsWithChildren<Props>) {
    const cx = classNames(styles.container, className)

    return <div className={cx}>{children}</div>
}

export default Container
