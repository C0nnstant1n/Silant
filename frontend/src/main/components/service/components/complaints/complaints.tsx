import { IComplaint } from "../../../../configs/intarfaces.ts";
import { complaintsApi } from "../../../../../redux/complaints.ts";
import tableStyles from "../../../../../assets/styles/table.module.scss";
import ComplaintTable from "./complaint_table.tsx";
import {useLocation} from "react-router-dom";
import {complaintDict} from "../../../../configs/variables.ts";
import TableHeaders from "../table_headers.tsx";

export default function Complaints() {
  const path = useLocation()

  const { data: complains, isLoading } =
    complaintsApi.useGetComplaintsQuery(path.search ? path.search: '');
  // console.log(complains)

  return (
    <>
      {isLoading && !complains ? (
        <div className={tableStyles.search_result__container}>
          <div className={tableStyles.loading}>
            <h3>Загрузка</h3>
          </div>
        </div>
      ) : complains && !complains.count ? (
        <div>
          <div>
            <h2> По вашему запросу нет данных </h2>
          </div>
        </div>
      ) : (
        <table className={tableStyles.result_table}>
          <thead>
            <tr>
              <TableHeaders dict={complaintDict}/>
            </tr>
          </thead>
          <tbody>
            {complains &&
              complains.results.map((complaint: IComplaint) => (
                <ComplaintTable complaint={complaint} key={complaint.id} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
