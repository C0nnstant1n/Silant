import {IMachine} from "../../../../configs/intarfaces.ts";


interface IProps {
    machine: IMachine
}
export default function MachineTable({machine}:IProps){
    return (
        <tr>
            <td>{machine.id}</td>
            <td>{machine.model_equipment}</td>
            <td>{machine.machine_serial_number}</td>
            <td>{machine.model_engine}</td>
            <td>{machine.engine_serial_number}</td>
            <td>{machine.model_transmission}</td>
            <td>{machine.transmission_serial_number}</td>
            <td>{machine.model_drive_axle}</td>
            <td>{machine.drive_axle_serial_number}</td>
            <td>{machine.steering_axle}</td>
            <td>{machine.steering_axle_serial_number}</td>
            <td>{machine.supply_contract}</td>
            <td>{machine.date_shipped_from_factory}</td>
            <td>{machine.consignee}</td>
            <td>{machine.delivery_address}</td>
            <td>{machine.equipment}</td>
            <td>{machine.client}</td>
            <td>{machine.service_company}</td>
        </tr>
    )
}