import { IMaintenance } from "../../../../configs/intarfaces.ts";
import { useNavigate } from "react-router-dom";
import tableStyle from "../../../../../assets/styles/table.module.scss";

interface IProps {
  maintenance: IMaintenance;
}
export default function MaintenanceTable({ maintenance }: IProps) {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(maintenance.id + "/");
  };
  return (
    <tr className={tableStyle.table_string} onClick={handleDetail}>
      <td>{maintenance.machine}</td>
      <td>{maintenance.maintenance_type.name}</td>
      <td>{maintenance.maintenance_date}</td>
      <td>{maintenance.operating_time}</td>
      <td>{maintenance.order_number}</td>
      <td>{maintenance.order_date}</td>
      <td>{maintenance.service_company.name}</td>
    </tr>
  );
}
