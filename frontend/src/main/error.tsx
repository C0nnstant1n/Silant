import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import styles from "./main.module.scss";

interface IProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

export default function ErrorPage({ error }: IProps) {
  console.log(error);
  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div className={styles.error}>
          <h1>Ууупс!!!</h1>
          <p>
            <i>Извините, что то пошло не так</i>
          </p>
          <div className={styles.errMsg}>{errMsg}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.error}>
          <h1>Ууупс!!!</h1>
          <p>Извините, что то пошло не так</p>
          <div className={styles.errMsg}>{error.message}</div>
        </div>
      );
    }
  }
}
