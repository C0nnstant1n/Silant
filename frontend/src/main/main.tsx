import styles from './main.module.scss'
import {useLocation, Form, Outlet} from "react-router-dom";

export default function Main(){
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get("sn") || "/";
    // let navigation = useNavigation();


    return(
        <>
            <section className={styles.main__form}>
                <h2>Проверьте комплектацию и технические характеристики техники Силант</h2>
                <Form className={styles.search_form} method="post" replace>
                    <input type="hidden" name="redirectTo" value={from}/>
                    <input className={styles.form__input} type="text" placeholder="Заводской номер" name="sn"/>
                    <button className={styles.form__button}>поиск</button>
                </Form>
            </section>
            <hr/>
            <section className={styles.main__article}>
                <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            </section>
            <hr/>
            <section className={styles.main__search_result}>
                <Outlet />
            </section>
            <hr/>
        </>
    )
}

// function getMachine(){
//
// }