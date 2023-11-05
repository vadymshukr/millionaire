import React from 'react'
import BurgerIcon from './assets/burger.svg?react'
import CloseIcon from './assets/close.svg?react'
import styles from './Header.module.css'

type Props = {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (payload: boolean) => void
}

function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: Props) {
    const onBurgerBtnClick = () => {
        setIsMobileMenuOpen(true)
    }
    const onCloseBtnClick = () => {
        setIsMobileMenuOpen(false)
    }
    return (
        <header className={styles.header}>
            {!isMobileMenuOpen ? (
                <button type='button' className={styles.button} onClick={onBurgerBtnClick}>
                    <BurgerIcon />
                </button>
            ) : (
                <button type='button' className={styles.button} onClick={onCloseBtnClick}>
                    <CloseIcon />
                </button>
            )}
        </header>
    )
}

export default Header
