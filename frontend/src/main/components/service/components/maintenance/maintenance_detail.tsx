import { maintenanceApi } from "../../../../../redux/maintenance.ts";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../detail.module.scss";
import React, { useState } from "react";
import buttonsStyles from "../../../../../assets/styles/buttons.module.scss";
import {userApi} from "../../../../../redux/user.ts";

export default function MaintenanceDetail() {
  const location = useLocation();
  const path = location.pathname.replace(/^\D+/g, "");
  const navigate = useNavigate();
  const { data, isLoading } = maintenanceApi.useGetMaintenanceDetailQuery(path);
  const [remove, { isSuccess: deleteSuccess }] =
    maintenanceApi.useDeleteMaintenanceMutation();

  const [popup, setPopup] = useState(styles.popup);
  const handlePopUp = () => {
    popup.search(/popup/) > 0
      ? setPopup(styles.popdown)
      : setPopup(styles.popup);
  };

  const [popup2, setPopup2] = useState(styles.popup);
  const handlePopUp2 = () => {
    popup2.search(/popup/) > 0
      ? setPopup2(styles.popdown)
      : setPopup2(styles.popup);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    data ? remove(data) : null;
  };
  const handleEdit = async (e: React.MouseEvent) => {
    e.preventDefault();
    data ? navigate(`/service/edit_to/${data.id}`) : null;
  };
  const { data: user } = userApi.useGetUserQuery("");
  const groups = ['Manager']

  return (
    <>
      {isLoading && !data ? (
        <div>
          <div className={styles.loading}>
            <h3>Загрузка</h3>
          </div>
        </div>
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
                  <button className={styles.popup_button} onClick={handlePopUp}>
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
                    className={styles.popup_button}
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
            <div className={buttonsStyles.buttons_container}>
              <button className={buttonsStyles.button} onClick={handleEdit}>
                Изменить ТО
              </button>
              {user && groups.includes(user.group) ?
              <button className={buttonsStyles.button} onClick={handleDelete}>
                Удалить TO
              </button> : null}
            </div>
            <div style={{ display: "none" }}>
              {deleteSuccess
                ? setTimeout(() => navigate("/service/to"), 700)
                : null}
            </div>
          </div>
        </>
      )}
    </>
  );
}
