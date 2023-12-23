import {IComplaint} from "../../../../../configs/intarfaces.ts";
import {useNavigate} from "react-router-dom";
import styles from "../../../search_result/result.module.scss";

interface IProps{
    complaint: IComplaint
}

export default function ComplaintTable({complaint}: IProps){
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(complaint.id +'/' )
    }

    return (
        <>
            <tr className={styles.table_string} onClick={handleDetail}>
            <td>{complaint.machine}</td>
            <td>{complaint.date_refusal}</td>
            <td>{complaint.operating_time}</td>
            <td>{complaint.failure_node}</td>
            <td>{complaint.description}</td>
            <td>{complaint.recovery_method}</td>
            <td>{complaint.spare_parts}</td>
            <td>{complaint.recovery_date}</td>
            <td>{complaint.equipment_downtime}</td>
            <td>{complaint.service_company}</td>
            </tr>
        </>
    )
}