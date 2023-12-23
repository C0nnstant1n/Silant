import styles from '../../main.module.scss'
import {NavLink, Outlet,} from "react-router-dom";
import {protectedLoader} from "../../../scripts/loaders.ts";
import Info from "./components/machine/info.tsx";
import ErrorPage from "../../../error-page.tsx";
import Complaints from "./components/complaints/complaints.tsx";
import Maintenance from "./components/maintenance/maintenance.tsx";
import ComplaintDetail from "./components/complaints/complaint_detail.tsx";
import MachineDetail from "./components/machine/machine_detail.tsx";
import MaintenanceDetail from "./components/maintenance/maintenance_detail.tsx";
import MaintenanceType from "./components/handbooks/maintenace_type.tsx";
import ServiceOrganisation from "./components/handbooks/service_organisation.tsx";
import {userApi} from "../../../redux/user.ts";

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
        {
            path: `complaints/:complaintId`,
            element: <ComplaintDetail />
        },
        {
            path: 'info/:infoId',
            element: <MachineDetail />,
            children: [
                {
                    path: 'company/:companyID',
                    element: <ServiceOrganisation />
                }
                ]
        },
        {
            path: 'to/:toId',
            element: <MaintenanceDetail />,
            children: [
                {
                    path: 'type/:typeID',
                    element: <MaintenanceType />
                },
                {
                    path: 'company/:companyID',
                    element: <ServiceOrganisation />
                }
            ]
        }
    ]
}


export default function Service(){
    const {data} = userApi.useGetUserQuery('')
    let group = ''
    if (data && data.group){
        switch (data.group){
            case 'Client':
                group = 'Клиент'
                break
            case "Manager":
                group = "Менеджер"
                break
            case 'Service_Organization':
                group = 'Сервисная компания'
                break
            default:
                break
        }
    }

    return(
        <>
            <section className={styles.main__user_info}>
                <p>{group && group}</p>
                {data && data.company ? <h3>{data.company}</h3> : <h3>{data && data.username}</h3>}

            </section>
            <section className={styles.main__article}>
                <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            </section>
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