import { complaintsApi } from "../../../../../redux/complaints.ts";
import styles from "../detail.module.scss";
import { useLocation} from "react-router-dom";
import Detail from "../detail.tsx";
import Loading from "../Loading.tsx";

export default function ComplaintDetail() {
  const location = useLocation();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)
  const { data, isLoading } = complaintsApi.useGetComplaintQuery(path);

  const complaint = [];
  if (data) {
    // console.log(data)
    for (const i in data) {
      i != "id" ? complaint.push([i, data[i]]) : null;
    }
  }

  return (
    <>
      {isLoading && !data ? (
      <Loading suffix={'big'} />
      ) : (
          <>
            <div className={styles.detail}>
                {complaint
                    ? complaint.map((data: string[]) => (
                        <Detail data={data} key={data[0]}/>
                    ))
                    : null}
            </div>
          </>
      )}
    </>
  );
}
