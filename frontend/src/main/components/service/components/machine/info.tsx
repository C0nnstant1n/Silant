import { machineApi } from "../../../../../redux/machine.ts";
import styles from "../detail.module.scss";
import tableStyle from "../../../../../assets/styles/table.module.scss";
import { IMachine } from "../../../../configs/intarfaces.ts";
import MachineTable from "./machine_table.tsx";
import { useLocation } from "react-router-dom";
import { machineDict } from "../../../../configs/variables.ts";
import TableHeaders from "../table_headers.tsx";
import Loading from "../Loading.tsx";
import ErrorPage from "../../../../error.tsx";
import Pagination from "../pagination.tsx";

export default function Info() {
  // console.log(machineDict)
  const path = useLocation();
  // console.log(path.search)
  const {
    data: machine,
    isLoading,
    isError,
    error,
  } = machineApi.useGetMachinesQuery(path.search ? path.search : "");
  // console.log('loading - ', isLoading, 'fetching -',isFetching)
  return (
    <>
      {isLoading && !machine ? (
        <Loading suffix={"big"} />
      ) : isError ? (
        <ErrorPage error={error} />
      ) : machine && !machine.count ? (
        <div className={styles.search_result__container}>
          <div>
            <h2> По вашему запросу нет данных </h2>
          </div>
        </div>
      ) : (
        <>
          <Pagination response={machine} />
          <table className={tableStyle.result_table}>
            <thead>
              <tr>
                <TableHeaders dict={machineDict} />
              </tr>
            </thead>
            <tbody>
              {machine &&
                machine.results.map((machine: IMachine) => (
                  <MachineTable machine={machine} key={machine.id} />
                ))}
            </tbody>
          </table>
          <Pagination response={machine} />
        </>
      )}
    </>
  );
}
