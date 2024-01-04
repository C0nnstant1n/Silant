import { maintenanceApi } from "../../../../../redux/maintenance.ts";
import styles from "../../result.module.scss";
import MaintenanceTable from "./maintenance_table.tsx";
import { IMaintenance } from "../../../../configs/intarfaces.ts";
import tableStyle from "../../../../../assets/styles/table.module.scss";
import { useLocation } from "react-router-dom";
import TableHeaders from "../table_headers.tsx";
import { maintenanceDict } from "../../../../configs/variables.ts";
import Loading from "../Loading.tsx";
import ErrorPage from "../../../../error.tsx";

export default function Maintenance() {
  const path = useLocation();

  const {
    data: maintenance,
    isLoading,
    isError,
    error,
  } = maintenanceApi.useGetMaintenanceQuery(path.search ? path.search : "");

  return (
    <>
      {isLoading && !maintenance ? (
        <Loading suffix={"big"} />
      ) : isError ? (
        <ErrorPage error={error} />
      ) : maintenance && !maintenance.count ? (
        <div className={styles.search_result__container}>
          <div>
            <h2> По вашему запросу нет данных </h2>
          </div>
        </div>
      ) : (
        <table className={tableStyle.result_table}>
          <thead>
            <tr>
              <TableHeaders dict={maintenanceDict} />
            </tr>
          </thead>
          <tbody>
            {maintenance &&
              maintenance.results.map((table: IMaintenance) => (
                <MaintenanceTable maintenance={table} key={table.id} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
