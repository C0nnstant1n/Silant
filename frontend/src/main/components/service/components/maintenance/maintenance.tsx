import {maintenanceApi} from "../../../../../redux/maintenance.ts";
import styles from "../../../search_result/result.module.scss";
import MaintenanceTable from "./maintenance_table.tsx";
import {IMaintenance} from "../../../../../configs/intarfaces.ts";
import tableStyle from '../../../../../assets/styles/table.module.scss'
import buttonStyles from "../../../../../assets/styles/buttons.module.scss";
import {Link} from "react-router-dom";
import {userApi} from "../../../../../redux/user.ts";


export default function Maintenance(){
    const {
        data: maintenance,
        isLoading} = maintenanceApi.useGetMaintenanceQuery('')

    const {data: user} = userApi.useGetUserQuery('')

    return(
        <>
            {
                isLoading && !maintenance ?
                    <div className={styles.search_result__container}>
                        <div className={styles.loading}><h3>Загрузка</h3></div>
                    </div>
                            :
                            (maintenance && !maintenance.count ?
                                <div className={styles.search_result__container}>
                                    <div >
                                        <h2> По вашему запросу нет данных </h2>
                                    </div>
                                </div>
                                :
                                <table className={tableStyle.result_table}>
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
            }
            {
                user && user.group === 'Manager' ?
                    <div className={buttonStyles.buttons_container}>
                        <Link className={buttonStyles.button} to={'/service/create_to'}>
                            Добавить ТО</Link>
                    </div>
                    : null
            }
        </>
    )
}