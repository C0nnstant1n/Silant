import { complaintsApi } from "../../../../../redux/complaints.ts";
import styles from "../detail.module.scss";
import { useLocation } from "react-router-dom";
import Detail from "../detail.tsx";
import Loading from "../Loading.tsx";
import {IHandbook, IMachine} from "../../../../configs/intarfaces.ts";

export default function ComplaintDetail() {
  const location = useLocation();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)
  const { data, isLoading } = complaintsApi.useGetComplaintQuery(path);

  const complaint: [string, string | number | IHandbook | IMachine][]  = [['', '']];
  complaint.pop()
  if (data) {
    // console.log(data)
    for (const i in data) {
      i != "id" ? complaint.push([i, data[i]]) : null;
    }
  }
  // console.log(complaint)

  return (
    <>
      {isLoading && !data ? (
        <Loading suffix={"big"} />
      ) : (
        <>
          <div className={styles.detail}>
            {complaint
              ? complaint.map((data) => (
                  <Detail data={data} key={data[0]} />
                ))
              : null}
          </div>
        </>
      )}
    </>
  );
}
