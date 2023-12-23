import {IMachine} from "../../../../../configs/intarfaces.ts";
import {useNavigate} from "react-router-dom";
import styles from "../../../search_result/result.module.scss";


interface IProps {
    machine: IMachine
}
export default function MachineTable({machine}:IProps){
        const navigate = useNavigate();
        const handleDetail = () => {
                navigate(machine.id +'/' )
        }
    return (
        <tr className={styles.table_string} onClick={handleDetail}>
            <td>{machine.model_equipment.name}</td>
            <td>{machine.machine_serial_number}</td>
            <td>{machine.model_engine.name}</td>
            <td>{machine.engine_serial_number}</td>
            <td>{machine.model_transmission.name}</td>
            <td>{machine.transmission_serial_number}</td>
            <td>{machine.model_drive_axle.name}</td>
            <td>{machine.drive_axle_serial_number}</td>
            <td>{machine.steering_axle.name}</td>
            <td>{machine.steering_axle_serial_number}</td>
            <td>{machine.supply_contract}</td>
            <td>{machine.date_shipped_from_factory}</td>
            <td>{machine.consignee}</td>
            <td>{machine.delivery_address}</td>
            <td>{machine.equipment}</td>
            <td>{machine.client}</td>
            <td>{machine.service_company.name}</td>
        </tr>
    )
}