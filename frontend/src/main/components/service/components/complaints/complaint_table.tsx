import { IComplaint } from "../../../../../configs/intarfaces.ts";
import { useNavigate } from "react-router-dom";
import tableStyles from "../../../../../assets/styles/table.module.scss";

interface IProps {
  complaint: IComplaint;
}

export default function ComplaintTable({ complaint }: IProps) {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(complaint.id + "/");
  };

  return (
    <>
      <tr className={tableStyles.table_string} onClick={handleDetail}>
        <td>{complaint.machine.machine_serial_number}</td>
        <td>{complaint.date_refusal}</td>
        <td>{complaint.operating_time}</td>
        <td>{complaint.failure_node.name}</td>
        <td>{complaint.description}</td>
        <td>{complaint.recovery_method.name}</td>
        <td>{complaint.spare_parts}</td>
        <td>{complaint.recovery_date}</td>
        <td>{complaint.equipment_downtime}</td>
        <td>{complaint.service_company.name}</td>
      </tr>
    </>
  );
}
