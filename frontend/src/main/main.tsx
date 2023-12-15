import styles from './main.module.scss'
import Result from "./components/search_result/Result.tsx";

export default function Main(){
    return(
        <main>
            <section className={styles.main__form}>
                <h2>Проверьте комплектацию и технические характеристики техники Силант</h2>
                <form action="" className={styles.search_form} >
                    <input className={styles.form__input} type="text" placeholder="Заводской номер"/>
                    <button className={styles.form__button}>поиск</button>
                </form>
            </section>
            <hr/>
            <section className={styles.main__article}>
                <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            </section>
            <hr/>
            <section className={styles.main__search_result}>
                <Result />
            </section>
            <hr/>
        </main>
    )
}