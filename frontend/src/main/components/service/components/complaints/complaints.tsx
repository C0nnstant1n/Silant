import { IComplaint } from "../../../../configs/intarfaces.ts";
import { complaintsApi } from "../../../../../redux/complaints.ts";
import tableStyles from "../../../../../assets/styles/table.module.scss";
import ComplaintTable from "./complaint_table.tsx";
import {useLocation} from "react-router-dom";
import {complaintDict} from "../../../../configs/variables.ts";
import TableHeaders from "../table_headers.tsx";
import Loading from "../Loading.tsx";
import popup from "../../../../../assets/styles/popup.module.scss";

export default function Complaints() {
  const path = useLocation()

  const { data: complains, isLoading, isFetching } =
    complaintsApi.useGetComplaintsQuery(path.search ? path.search : '');
  // console.log(complains)

  return (
    <>
      {isFetching ?
          <div className={popup.container + ' ' + popup.loading}>
            <div className={popup.reveal_modal}>
              <Loading suffix={'big'} />
            </div>
          </div>
          : null}
      {isLoading && !complains ? (
          <Loading suffix={'big'}/>
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
