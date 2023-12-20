import styles from '../../main.module.scss'
import {NavLink, Outlet,} from "react-router-dom";
import {protectedLoader} from "../../../scripts/loaders.ts";
import Info from "./components/info.tsx";
import ErrorPage from "../../../error-page.tsx";
import Complaints from "./components/complaints.tsx";
import Maintenance from "./components/maintenance.tsx";

const service =  {
    path: 'service',
    loader: protectedLoader,
    element: <Service />,
    children: [
        {
            path: 'info',
            element: <Info />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'to',
            element: <Maintenance />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'complaints',
            element: <Complaints />,
            errorElement: <ErrorPage />,
        },
    ]
}


export default function Service(){


    return(
        <>
            <section className={styles.main__client_info}>

            </section>
            <hr/>
            <section className={styles.main__article}>
                <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            </section>
            <hr/>
            <div className={styles.result_container}>
                <nav className={styles.search__buttons}>
                    <NavLink to='info'>Общая информация</NavLink>
                    <NavLink to='to'>ТО</NavLink>
                    <NavLink to='complaints'>Рекламации</NavLink>
                </nav>
                <hr/>
                <section className={styles.main__search_result}>
                    <Outlet/>
                </section>
            </div>
        </>
    )
}

export {service}