import { useRouteError } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import styles from "./main/main.module.scss";

export default function ErrorPage() {
  const error = useRouteError() as FetchBaseQueryError | SerializedError;
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
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.error}>
          <h1>Ууупс!!!</h1>
          <p>Извините, что то пошло не так</p>
          <div>{error.message}</div>
        </div>
      );
    }
  }
}
