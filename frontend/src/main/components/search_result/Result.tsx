import styles from "./result.module.scss"

export default function Result(){
    return(
        <table className={styles.result_table}>
            <thead>
            <tr>
                <td>№ п/п</td>
                <td>Модель техники</td>
                <td>Зав. № машины</td>
                <td>Модель Двигателя</td>
                <td>Зав. № Двигателя</td>
                <td>Модель трансмиссии (производитель, артикул)</td>
                <td>Зав. № трансмиссии</td>
                <td>Модель ведущего моста</td>
                <td>Зав. № ведущего моста</td>
                <td>Модель управляемого моста</td>
                <td>Зав. № управляемого моста</td>
                <td>Дата отгрузки с завода</td>
                <td>Покупатель</td>
                <td>Грузополучатель</td>
                <td>Адрес поставки (эксплуатации)</td>
                <td>Комплектация (доп. опции)</td>
                <td>Сервисная компания</td>
            </tr>
            </thead>

        </table>
    )
}