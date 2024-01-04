import { machineApi } from "../../../../../redux/machine.ts";
import { Outlet, useLocation } from "react-router-dom";
import styles from "../detail.module.scss";
import Detail from "../detail.tsx";
import Loading from "../Loading.tsx";
import ErrorPage from "../../../../error.tsx";

export default function MachineDetail() {
  const location = useLocation();
  // const navigate = useNavigate();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)
  const { data, isLoading, isError, error } =
    machineApi.useGetMachineQuery(path);

  const content = [];
  if (data) {
    for (const i in data) {
      i != "id" ? content.push([i, data[i]]) : null;
    }
  }
  return (
    <>
      {isLoading && !data ? (
        <Loading suffix={"big"} />
      ) : isError ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <div className={styles.search_result__detail}>
            <div className={styles.detail}>
              {content
                ? content.map((data) => <Detail data={data} key={data[0]} />)
                : null}
            </div>
            <div className={styles.detail__spec}>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
}
