import {maintenanceApi} from "../../../../../redux/maintenance.ts";

import {NavLink, Outlet, useLocation} from "react-router-dom";
import styles from "../../../search_result/result.module.scss";
import styles2 from "./maintenance.module.scss"

export default function MaintenanceDetail(){
    const location = useLocation();
    const path = location.pathname.replace(/^\D+/g, '')
    // console.log(path)
    const {data, error, isLoading} = maintenanceApi.useGetMaintenanceDetailQuery(path)
    // console.log(data)
    return(
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
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Заводской номер:</p>
                                                <p className={styles2.text}>{data && data.machine}</p>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Вид ТО:</p>
                                                <NavLink to={`type/${data && data.maintenance_type.id}`} className={({isActive, isPending})=>
                                                    isPending ? `${styles2.description_link_pending}` : isActive ?
                                                        `${styles2.description_link_active}` : ''}>
                                                    {data && data.maintenance_type.name}</NavLink>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Дата проведения ТО:</p>
                                                <p>{data && data.maintenance_date}</p>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Наработка м/час:</p>
                                                <p>{data && data.operating_time}</p>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>№ Заказ наряда:</p>
                                                <p>{data && data.order_number}</p>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Дата заказ-наряда:</p>
                                                <p>{data && data.order_data}</p>
                                            </section>
                                            <section className={styles2.form_section}>
                                                <p className={styles2.label}>Организация проводившая ТО:</p>
                                                <NavLink to={`company/${data && data.service_company.id}`}
                                                         className={({isActive, isPending})=>
                                                             isPending ? `${styles2.description_link_pending}` : isActive ?
                                                                 `${styles2.description_link}` : ''}
                                                >{data && data.service_company.name}</NavLink>
                                            </section>
                                            <button>Редактировать</button>
                                        </div>
                                        <div className={styles2.detail__spec}>
                                            <Outlet />
                                        </div>
                                    </div>
                                </>)
                    )
            )}
        </>
    )
}