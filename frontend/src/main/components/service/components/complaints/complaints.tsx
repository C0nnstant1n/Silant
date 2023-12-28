import {IComplaint} from "../../../../../configs/intarfaces.ts";
import {complaintsApi} from "../../../../../redux/complaints.ts";
import tableStyles from "../../../../../assets/styles/table.module.scss";
import ComplaintTable from "./complaint_table.tsx";
import buttonStyles from "../../../../../assets/styles/buttons.module.scss";
import {Link} from "react-router-dom";
import {userApi} from "../../../../../redux/user.ts";


export default function Complaints(){
    const {data: complains, isLoading} = complaintsApi.useGetComplaintsQuery('')
    // console.log(complains)
    const {data: user} = userApi.useGetUserQuery('')
    return (
        <>
            {isLoading && !complains ?
                <div className={tableStyles.search_result__container}>
                    <div className={tableStyles.loading}><h3>Загрузка</h3></div>
                </div>
                :
                complains && !complains.count ?
                    <div >
                        <div >
                            <h2> По вашему запросу нет данных </h2>
                        </div>
                    </div>
                    :
                    < table className = {tableStyles.result_table} >
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
                    </table>
            }
            {
                user && user.group === 'Manager' ?
                    <div className={buttonStyles.buttons_container}>
                        <Link className={buttonStyles.button} to={'/service/create_complaint'}>
                            Написать рекламацию</Link>
                    </div>
                    : null
            }
        </>
    )
}