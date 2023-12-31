import { machineApi } from "../../../../../redux/machine.ts";
import styles from "../detail.module.scss";
import tableStyle from "../../../../../assets/styles/table.module.scss";
import { IMachine } from "../../../../configs/intarfaces.ts";
import MachineTable from "./machine_table.tsx";
import {useLocation} from "react-router-dom";
import {machineDict} from "../../../../configs/variables.ts";
import TableHeaders from "../table_headers.tsx";


export default function Info() {
  const path = useLocation()
  const {
    data: machine,
    isLoading,
  } = machineApi.useGetMachinesQuery(path.search ? path.search: '');
  return (
      <>
        {isLoading && !machine ? (
            <div className={styles.search_result__container}>
              <div className={styles.loading}>
                <h3>Загрузка</h3>
          </div>
        </div>
      ) : machine && !machine.count ? (
        <div className={styles.search_result__container}>
          <div>
            <h2> По вашему запросу нет данных </h2>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
