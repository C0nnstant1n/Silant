import {IComplaint} from "../../../../../configs/intarfaces.ts";
import {complaintsApi} from "../../../../../redux/complaints.ts";
import styles from "../../../search_result/result.module.scss";
import ComplaintTable from "./complaint_table.tsx";


export default function Complaints(){
    const {data: complains, error, isLoading} = complaintsApi.useGetComplaintsQuery('')
    // console.log(complains)
    return (
        <>{
            (isLoading && !complains) ?
                <div className={styles.search_result__container}>
                    <div className={styles.loading}><h3>Загрузка</h3></div>
                </div>
                :
                (
                    error && !complains ?
                        (
                            <div className={styles.search_result__container}>
                                <div className={styles.error}>
                                    <h2>Ошибка Загрузки</h2>
                                </div>
                            </div>
                        )
                        :
                        (complains && !complains.count ?
                            <div className={styles.search_result__container}>
                                <div >
                                    <h2> По вашему запросу нет данных </h2>
                                </div>
                            </div>
                            :
                            < table className = {styles.result_table} >
                                < thead >
                                < tr>
                                    <td>Зав. № машины</td>
                                    <td>Дата отказа</td>
                                    <td>Наработка, м/час</td>
                                    <td>Узел отказа</td>
                                    <td>Описание отказа</td>
                                    <td>Способ восстановления</td>
                                    <td>Используемые запасные части</td>
                                    <td>Дата восстановления</td>
                                    <td>Время простоя</td>
                                    <td>Сервисная компания</td>
                                </tr>
                                </thead>
                                <tbody>
                                    {complains && complains.results.map((complaint: IComplaint) => <ComplaintTable complaint={complaint} key={complaint.id}/>)}
                                </tbody>
                            </table>)
                )}
        </>
    )
}