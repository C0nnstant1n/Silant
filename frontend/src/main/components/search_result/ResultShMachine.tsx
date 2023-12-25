import styles from "./result.module.scss"
import {useLocation} from "react-router-dom";
import {shmachineApi} from "../../../redux/shmachine.ts";
import TString from "./TString.tsx";
import {IShMachine} from "../../../configs/intarfaces.ts";

export default function ResultShMachine(){
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    // console.log(params.get('id'))

        const {data: machine, error, isLoading} =
            shmachineApi.useGetMachineQuery(params.get('machine_serial_number'))
        // console.log(error)
        // console.log(machine)

    return(
        params.size ? (
            (isLoading && !machine) ?
                <div className={styles.search_result__container}>
                    <div className={styles.loading}><h3>Загрузка</h3></div>
                </div>
                :
                (
                    error && !machine ?
                        (
                            <div className={styles.search_result__container}>
                                <div className={styles.error}>
                                    <h2>Ошибка Загрузки</h2>
                                </div>
                            </div>
                        )
                        :
                        (machine && !machine.count ?
                                <div className={styles.search_result__container}>
                                    <div >
                                        <h2> По вашему запросу нет данных </h2>
                                    </div>
                                </div>
                        :
                        < table className = {styles.result_table} >
                            < thead >
                                < tr >
                                    <td>№ п / п </td>
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
                                </tr>
                            </thead>
                            <tbody>
                                {machine && machine.results.map((machine: IShMachine) => <TString machine={machine} key={machine.id}/>)}
                            </tbody>
                        </table>)
                )
            )
         : (<div className={styles.search_result__container}>
                <div>
                    <h3> Начните поиск </h3>
                </div>
            </div>))
}
