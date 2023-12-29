import { complaintsApi } from "../../../../../redux/complaints.ts";
import styles from "../detail.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import buttonsStyles from "../../../../../assets/styles/buttons.module.scss";
import Detail from "../detail.tsx";
import React from "react";
import {userApi} from "../../../../../redux/user.ts";
export default function ComplaintDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)
  const { data, isLoading } = complaintsApi.useGetComplaintQuery(path);
  const [remove, { isSuccess: deleteSuccess }] =
    complaintsApi.useDeleteComplaintsMutation();

  const { data: user } = userApi.useGetUserQuery("");
  const groups = ['Manager', 'Service_Organization']

  const complaint = [];
  if (data) {
    // console.log(data)
    for (const i in data) {
      i != "id" ? complaint.push([i, data[i]]) : null;
    }
  }

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    data ? remove(data) : null;
  };

  const handleEdit = async (e: React.MouseEvent) => {
    e.preventDefault();
    data ? navigate(`/service/edit_complaint/${data.id}`) : null;
  };

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
            <div className={styles.detail}>
              {complaint
                ? complaint.map((data: string[]) => (
                    <Detail data={data} key={data[0]} />
                  ))
                : null}
            </div>
            {user && groups.includes(user.group) ?
                <div className={buttonsStyles.buttons_container}>
                  <button className={buttonsStyles.button} onClick={handleEdit}>
                    Изменить рекламацию
                  </button>
                  <button className={buttonsStyles.button} onClick={handleDelete}>
                    Удалить рекламацию
                  </button>
                </div>: null}
            <div style={{ display: "none" }}>
              {deleteSuccess
                ? setTimeout(() => navigate("/service/complaints"), 700)
                : null}
            </div>
          </div>
        </>
      )}
    </>
  );
}
