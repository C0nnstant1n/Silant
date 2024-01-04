import { maintenanceApi } from "../../../../../redux/maintenance.ts";
import { useLocation } from "react-router-dom";
import styles from "../detail.module.scss";
import popStyles from "../../../../main.module.scss";
import { useState } from "react";
import buttonsStyles from "../../../../../assets/styles/buttons.module.scss";
import Loading from "../Loading.tsx";
import ErrorPage from "../../../../error.tsx";

export default function MaintenanceDetail() {
  const location = useLocation();
  const path = location.pathname.replace(/^\D+/g, "");
  const { data, isLoading, isError, error } =
    maintenanceApi.useGetMaintenanceDetailQuery(path);

  const [popup, setPopup] = useState(popStyles.popup);
  const handlePopUp = () => {
    popup.search(/popup/) > 0
      ? setPopup(popStyles.popdown)
      : setPopup(popStyles.popup);
  };

  const [popup2, setPopup2] = useState(popStyles.popup);
  const handlePopUp2 = () => {
    popup2.search(/popup/) > 0
      ? setPopup2(popStyles.popdown)
      : setPopup2(popStyles.popup);
  };

  return (
    <>
      {isLoading && !data ? (
        <Loading suffix={"big"} />
      ) : isError ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <div className={styles.detail}>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Заводской номер:</p>
                <div className={styles.data}>
                  <span>{data && data.machine}</span>
                </div>
              </section>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Вид ТО:</p>
                <div className={styles.data}>
                  <span>{data && data.maintenance_type.name}</span>
                  <button
                    className={buttonsStyles.popup_button}
                    onClick={handlePopUp}
                  >
                    {popup.search(/popup/) > 0 ? "˅" : "˄"}
                  </button>
                </div>
              </section>
              <div className={popup}>
                <p className={styles.text}>
                  {data && data.maintenance_type.description}
                </p>
              </div>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Дата проведения ТО:</p>
                <div className={styles.data}>
                  <span>{data && data.maintenance_date}</span>
                </div>
              </section>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Наработка м/час:</p>
                <div className={styles.data}>
                  <span>{data && data.operating_time}</span>
                </div>
              </section>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>№ Заказ наряда:</p>
                <div className={styles.data}>
                  <span>{data && data.order_number}</span>
                </div>
              </section>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Дата заказ-наряда:</p>
                <div className={styles.data}>
                  <span>{data && data.order_date}</span>
                </div>
              </section>
            </div>
            <div className={styles.detail_wrapper}>
              <section className={styles.detail_section}>
                <p className={styles.label}>Организация проводившая ТО:</p>
                <div className={styles.data}>
                  <span className={styles.text}>
                    {data && data.service_company.name}
                  </span>
                  <button
                    className={buttonsStyles.popup_button}
                    onClick={handlePopUp2}
                  >
                    {popup.search(/popup/) > 0 ? "˅" : "˄"}
                  </button>
                </div>
              </section>
              <div className={popup2}>
                <p className={styles.text}>
                  {data && data.service_company.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
