import { complaintsApi } from "../../../../../redux/complaints.ts";
import styles from "../detail.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Detail from "../detail.tsx";

export default function ComplaintDetail() {
  const location = useLocation();
  const navigate = useNavigate();
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
        <div className={styles.search_result__container}>
          <div className={styles.loading}>
            <h3>Загрузка</h3>
          </div>
        </div>
      ) : (
          <>
            <div className={styles.detail}>
                {complaint
                    ? complaint.map((data: string[]) => (
                        <Detail data={data} key={data[0]}/>
                    ))
                    : null}
            </div>
            <div style={{display: "none"}}>
              {deleteSuccess
                  ? setTimeout(() => navigate("/service/complaints"), 700)
                  : null}
            </div>
          </>
      )}
    </>
  );
}
