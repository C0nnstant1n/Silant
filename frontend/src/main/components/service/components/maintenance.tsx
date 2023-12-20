import {maintenanceApi} from "../../../../redux/maintenance.ts";
import styles from "../../search_result/result.module.scss";


export default function Maintenance(){
    const {data: maintenance, error, isLoading} = maintenanceApi.useGetMaintenanceQuery('')
    console.log(maintenance)
    console.log(error)
    console.log(isLoading)
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
                                        <td>Тип ТО</td>
                                        <td>Дата Проведения ТО</td>
                                        <td>Наработка, м/час</td>
                                        <td>№ Заказ-наряда</td>
                                        <td>Сервисная компания</td>
                                        <td>Машина</td>
                                    </tr>
                                    </thead>
                                </table>
                            )
                    )

            }
        </>
    )
}