import { IShMachine } from "../../configs/intarfaces.ts";
import tableStyle from '../../../assets/styles/table.module.scss'
interface IProps {
  machine: IShMachine;
}
export default function TString({ machine }: IProps) {
  return (
    <tr className={tableStyle.table_string}>
      <td>{machine.id}</td>
      <td>{machine.machine_model}</td>
      <td>{machine.machine_serial_number}</td>
      <td>{machine.model_engine}</td>
      <td>{machine.engine_serial_number}</td>
      <td>{machine.model_transmission}</td>
      <td>{machine.transmission_serial_number}</td>
      <td>{machine.model_drive_axle}</td>
      <td>{machine.drive_axle_serial_number}</td>
      <td>{machine.steering_axle}</td>
      <td>{machine.steering_axle_serial_number}</td>
    </tr>
  );
}
