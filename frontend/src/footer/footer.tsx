import styles from './footer.module.scss'
import logo from '../assets/Logotype accent RGB 1.svg'

export default function Footer(){
    return(
        <footer>
            <picture className={styles.footer__logo}>
                <img src={logo} alt="logo"/>
            </picture>
            <nav className={styles.footer__container}>
                <a href="#">+7-8352-20-12-09</a>
                <a href="#">telegram</a>
            </nav>
            <section className={styles.footer__copyright}>
                <p>Мой Силант 2022 ®</p>
            </section>
        </footer>
    )
}