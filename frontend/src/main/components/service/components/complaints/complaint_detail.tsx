import {complaintsApi} from "../../../../../redux/complaints.ts";
import styles from "../../../search_result/result.module.scss";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import styles2 from "../maintenance/maintenance.module.scss";

export default function ComplaintDetail(){
    const location = useLocation();
    const path = location.pathname.replace(/^\D+/g, '')
    // console.log(path)
    const {data, error, isLoading} = complaintsApi.useGetComplaintQuery(path)


    return (
        <>
        {(
            (isLoading && !data) ? (
            <div className={styles.search_result__container}>
                <div className={styles.loading}><h3>Загрузка</h3></div>
            </div>)
            :
                (error && !data ?
                    (
                    <div className={styles.search_result__container}>
                        <div className={styles.error}>
                            <h2>Ошибка Загрузки</h2>
                        </div>
                    </div>
                    )
                    : (
                            <>
                                <div className={styles2.search_result__detail}>
                                    <div className={styles2.detail__descriptions}>
                                        <section>
                                            <p className={styles2.label}>Заводской номер:

                                            </p>
                                            <p className={styles2.text}>{data && data.machine}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Дата отказа:

                                            </p>
                                            <NavLink to={`type/${data && data}`}
                                                     className={({isActive, isPending}) =>
                                                         isPending ? `${styles2.description_link_pending}` : isActive ?
                                                             `${styles2.description_link_active}` : ''}>
                                                {data && data.date_refusal}</NavLink>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Наработка, м/час:

                                            </p>
                                            <p>{data && data.operating_time}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Узел отказа:

                                            </p>
                                            <p>{data && data.failure_node}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Описание отказа:

                                            </p>
                                            <p>{data && data.description}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Способ восстановления:

                                            </p>
                                            <p>{data && data.recovery_method}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Используемые запасные части:

                                            </p>
                                            <NavLink to={`company/${data && data.spare_parts}`}
                                                     className={({isActive, isPending}) =>
                                                         isPending ? `${styles2.description_link_pending}` : isActive ?
                                                             `${styles2.description_link}` : ''}
                                            >{data && data.spare_parts}</NavLink>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Дата восстановления:

                                            </p>
                                            <p>{data && data.recovery_date}</p>
                                        </section>
                                        <section>
                                            <p className={styles2.label}>Время простоя техники:

                                            </p>
                                            <p>{data && data.equipment_downtime}</p>
                                        </section>
                                        <button>Редактировать</button>

                                    </div>
                                    <div className={styles2.detail__spec}>
                                        <Outlet/>
                                    </div>
                                </div>
                            </>)
                )
        )}
        </>
    )
}