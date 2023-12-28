import {machineApi} from "../../../../../redux/machine.ts";
import styles from '../detail.module.scss'
import buttonStyles from  '../../../../../assets/styles/buttons.module.scss'
import tableStyle from '../../../../../assets/styles/table.module.scss'
import {IMachine} from "../../../../../configs/intarfaces.ts";
import MachineTable from "./machine_table.tsx";
import {Link} from "react-router-dom";
import {userApi} from "../../../../../redux/user.ts";

export default function Info(){
    const {data: machine, error,
        isLoading} = machineApi.useGetMachinesQuery('')
    // console.log(error)
    const {data: user} = userApi.useGetUserQuery('')
    return (
        <>{
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
                                    {/*<p>{error.data.detail}</p>*/}
                                </div>
                            </div>
                        )
                        :
                        (machine && !machine.count ?
                            <div className={styles.search_result__container}>
                                <div>
                                    <h2> По вашему запросу нет данных </h2>
                                </div>
                            </div>
                            :
                            < table className={tableStyle.result_table}>
                                < thead>
                                < tr>
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
                                    <td>№ договора поставки</td>
                                    <td>Дата отгрузки с завода</td>
                                    <td>Грузополучатель (конечный потребитель)</td>
                                    <td>Адрес поставки (эксплуатации)</td>
                                    <td>Комплектация (доп. опции)</td>
                                    <td>Клиент</td>
                                    <td>Сервисная компания</td>
                                </tr>
                                </thead>
                                <tbody>
                                {machine && machine.results.map((machine: IMachine) => <MachineTable machine={machine}
                                                                                                     key={machine.id}/>)}
                                </tbody>
                            </table>)
                )}

                {
                    user && user.group === 'Manager' ?
                        <div className={buttonStyles.buttons_container}>
                        <Link className={buttonStyles.button} to={'/service/create_machine'}>
                            Добавить машину</Link>
                        </div>
                        : null
                }

        </>
    )
}