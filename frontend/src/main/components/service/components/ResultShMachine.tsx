import styles from "./detail.module.scss";
import styles2 from '../result.module.scss'
import { useLocation } from "react-router-dom";
import { shmachineApi } from "../../../../redux/shmachine.ts";
import Loading from "./Loading.tsx";
import ErrorPage from "../../../error.tsx";
import Detail from "./detail.tsx";

export default function ResultShMachine() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // console.log(params.get('id'))

  const {
      data,
      error,
      isLoading,
      isError
  } = shmachineApi.useGetMachineQuery(params.get("machine_serial_number"));

  const machine = [];

    if (data) {
        for (const i in data.results[0]) {
            i != "id" ? machine.push([i, data.results[0][i]]) : null;
        }
    }


  return params.size ?
      (isLoading && !machine ? (
          <Loading suffix={"big"}/>
      ) : isError ? <ErrorPage error={error}/> :
      data && !data.count ? (
      <div className={styles2.search_result__container}>
        <div>
          <h2> По вашему запросу нет данных </h2>
        </div>
      </div>
    ) : (
          <div className={styles.detail}>
              {machine
                  ? machine.map((data: string[]) => (
                      <Detail data={data} key={data[0]}/>
                  ))
                  : null}
          </div>
      )
      ) : (
          <div className={styles2.search_result__container}>
              <div>
                  <h3> Начните поиск </h3>
              </div>
          </div>
      );
}
