import {machineApi} from "../../../../../redux/machine.ts";
import styles from "../../../search_result/result.module.scss";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import styles2 from "../maintenance/maintenance.module.scss";

export default function MachineDetail(){
    const location = useLocation();
    const path = location.pathname.replace(/^\D+/g, '')
    // console.log(path)
    const {data, error, isLoading} = machineApi.useGetMachineQuery(path)


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
                                                <p className={styles2.label}>Модель:</p>
                                                <p className={styles2.text}>{data && data.machine_model.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Зав. № машины:</p>
                                                <p className={styles2.text}>{data && data.machine_serial_number}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Модель двигателя:</p>
                                                <p className={styles2.text}>{data && data.model_engine.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Зав. № двигателя:</p>
                                                <p className={styles2.text}>{data && data.engine_serial_number}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Модель трансмиссии:</p>
                                                <p className={styles2.text}>{data && data.model_transmission.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Зав. № трансмиссии:</p>
                                                <p className={styles2.text}>{data && data.transmission_serial_number}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Модель ведущего моста:</p>
                                                <p className={styles2.text}>{data && data.model_drive_axle.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Зав. № ведущего:</p>
                                                <p className={styles2.text}>{data && data.drive_axle_serial_number}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Модель управляемого моста:</p>
                                                <p className={styles2.text}>{data && data.steering_axle.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Зав. № управляемого моста:</p>
                                                <p className={styles2.text}>{data && data.steering_axle_serial_number}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Дата отгрузки с завода:</p>
                                                <p className={styles2.text}>{data && data.date_shipped_from_factory}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Покупатель:</p>
                                                <p className={styles2.text}>{data && data.client.name}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Грузополучатель (конечный потребитель):</p>
                                                <p className={styles2.text}>{data && data.consignee}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Адрес поставки:</p>
                                                <p className={styles2.text}>{data && data.delivery_address}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Комплектация (доп. опции):</p>
                                                <p className={styles2.text}>{data && data.equipment}</p>
                                            </section>
                                            <section>
                                                <p className={styles2.label}>Сервисная компания:</p>
                                                <NavLink to={`company/${data && data.service_company.id}`}
                                                         className={({isActive, isPending})=>
                                                             isPending ? `${styles2.description_link_pending}` : isActive ?
                                                                 `${styles2.description_link}` : ''}
                                                >{data && data.service_company.name}</NavLink>
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