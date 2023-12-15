import logo from '../assets/Logotype accent RGB 1.svg'
import styles from './header.module.scss'

export default function Header(){
    return(
        <header>
            <picture className={styles.header__logo}>
                <img src={logo} alt="Logo"/>
            </picture>
            <div className={styles.container}>
                <nav className={styles.header__nav}>
                    <a href="#">+7-8352-20-12-09</a>
                    <a href="#">telegram</a>
                </nav>
                <h2>Электронная сервисная книжка "Мой Силант"</h2>
            </div>
            <button className={styles.header__button}>Вход</button>

        </header>
    )
}