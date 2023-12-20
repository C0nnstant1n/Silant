import styles from "./result.module.scss"
import {useLocation} from "react-router-dom";
import {shmachineApi} from "../../../redux/shmachine.ts";
import TString from "./TString.tsx";
import {IMachine} from "../../../configs/intarfaces.ts";
import {username} from "../../../scripts/get_coockies.ts";

export default function Result(){
    let location = useLocation();
    let params = new URLSearchParams(location.search);

    // console.log(params)
    if (!params.size && !username) {
        return null
    }

    const {data: machine, error, isLoading} = shmachineApi.useGetMachineQuery('')
    console.log(error)
    console.log(machine)
    return(
    (isLoading && !machine) ?
        <div className={styles.search_result__container}>
            <div className={styles.loading}><h3>Загрузка</h3></div>
        </div>
        :
        (
            error && !machine ?
                <div className={styles.search_result__container}>
                    <div className={styles.error}>
                        <h2> An error occurred while loading data </h2>
                        {/*<p>{error.status}</p>*/}
                    </div>
                </div>

                :
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
                <tbody>
                {machine && machine.map((machine: IMachine) => <TString machine={machine} key={machine.id}/>)}
                </tbody>
            </table>
        )
    )
}