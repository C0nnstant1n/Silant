import {maintenanceApi} from "../../../../../redux/maintenance.ts";
import styles from "../../../search_result/result.module.scss";
import MaintenanceTable from "./maintenance_table.tsx";
import {IMaintenance} from "../../../../../configs/intarfaces.ts";


export default function Maintenance(){
    const {
        data: maintenance,
        error,
        isLoading} = maintenanceApi.useGetMaintenanceQuery('')

    return(
        <>
            {
                isLoading && !maintenance ?
                    <div className={styles.search_result__container}>
                        <div className={styles.loading}><h3>Загрузка</h3></div>
                    </div>
                    :
                    (
                        error && !maintenance ?
                            (
                                <div className={styles.search_result__container}>
                                    <div className={styles.error}>
                                        <h2>Ошибка Загрузки</h2>
                                    </div>
                                </div>
                            )
                            :
                            (maintenance && !maintenance.count ?
                                <div className={styles.search_result__container}>
                                    <div >
                                        <h2> По вашему запросу нет данных </h2>
                                    </div>
                                </div>
                                :
                                <table className={styles.result_table}>
                                    <thead>
                                    <tr>
                                        <td>Зав. № машины</td>
                                        <td>Вид ТО</td>
                                        <td>Дата Проведения ТО</td>
                                        <td>Наработка, м/час</td>
                                        <td>№ Заказ-наряда</td>
                                        <td>Дата Заказ-наряда</td>
                                        <td>Организация проводившая ТО</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {maintenance && maintenance.results
                                            .map((table: IMaintenance) =>
                                                <MaintenanceTable maintenance={table} key={table.id} />)}
                                    </tbody>
                                </table>
                            )
                    )
            }
        </>
    )
}