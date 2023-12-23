import styles from './main.module.scss'
import {Form, Outlet, useActionData} from "react-router-dom";


export default function Main(){
    let actionData = useActionData() as { error: string } | undefined;
    return(
        <>
        <section className={styles.main__form}>
            <h2>Проверьте комплектацию и технические характеристики техники Силант</h2>
            <Form className={styles.search_form} method="post" replace>
                <input className={styles.form__input} type="text" placeholder="Заводской номер"
                       name="machine_serial_number"/>
                <button className={styles.form__button}>поиск</button>
            </Form>
            {actionData && actionData.error ? (
                <p style={{color: "red"}}>{actionData.error}</p>
            ) : null}
        </section>
        <hr/>
        <section className={styles.main__article}>
            <p>Информация о комплектации и технических характеристиках Вашей техники</p>
        </section>
        <hr/>
        <div className={styles.result_container}>
            <section className={styles.main__search_result}>
                <Outlet/>
            </section>
        </div>
    <hr/>
</>
)
}
