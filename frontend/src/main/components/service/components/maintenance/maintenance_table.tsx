import {IMainentance} from "../../../../../configs/intarfaces.ts";
import {useNavigate} from "react-router-dom";
import styles from "../../../search_result/result.module.scss";

interface IProps{
    maintenance: IMainentance
}
export default function MaintenanceTable({maintenance}: IProps){
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(maintenance.id +'/' )
    }
    return (
        <tr className={styles.table_string} onClick={handleDetail}>
            <td>{maintenance.machine}</td>
            <td>{maintenance.maintenance_type.name}</td>
            <td>{maintenance.maintenance_date}</td>
            <td>{maintenance.operating_time}</td>
            <td>{maintenance.order_number}</td>
            <td>{maintenance.order_data}</td>
            <td>{maintenance.service_company.name}</td>
        </tr>
    )
}