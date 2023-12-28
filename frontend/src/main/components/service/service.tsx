import styles from '../../main.module.scss'
import buttonStyles from '../../../assets/styles/buttons.module.scss'
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
import CreateMachine from "./components/machine/create_machine.tsx";
import Edit from "./components/machine/edit.tsx";





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

    // console.log(user)
    return(
        <>
            <section className={styles.main__user_info}>
                <p>{group && group}</p>
                {data && data.company ? <h3>{data.company}</h3> : <h3>{data && data.username}</h3>}

            </section>
            <section className={styles.main__article}>
                <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            </section>
            <div className={styles.main_container}>
                <nav className={buttonStyles.buttons_container}>
                    <NavLink className={buttonStyles.button} to='info'>Общая информация</NavLink>
                    <NavLink className={buttonStyles.button} to='to'>ТО</NavLink>
                    <NavLink className={buttonStyles.button} to='complaints'>Рекламации</NavLink>
                </nav>
                <hr/>
                <section className={styles.container_content}>
                    <Outlet/>
                </section>
            </div>
        </>
    )
}
