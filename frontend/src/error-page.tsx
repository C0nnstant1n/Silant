import { useRouteError } from "react-router-dom";
import styles from './main/main.module.scss'

interface IError {
    statusText: string
    message?: string
}

export default function ErrorPage() {
    const error = useRouteError() as IError;
    // console.log(error)
    return (
        <div className={styles.error_page}>
            <h1>Ууупс!!!</h1>
            <p>Извините, что то пошло не так</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}