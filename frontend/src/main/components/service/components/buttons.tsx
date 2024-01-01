import buttonStyle from "../../../../assets/styles/buttons.module.scss";
import buttonStyles from "../../../../assets/styles/buttons.module.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {userApi} from "../../../../redux/user.ts";
import {machineApi} from "../../../../redux/machine.ts";
import {BaseSyntheticEvent, useState} from "react";
import {complaintsApi} from "../../../../redux/complaints.ts";
import {maintenanceApi} from "../../../../redux/maintenance.ts";
import Loading from "./Loading.tsx";


export default function ButtonsBlock() {
    const location = useLocation()
    const path = location.pathname.replace(/^\D+/g, "");
    const {data:user} = userApi.useGetUserQuery('')
    const navigate =useNavigate()
    const [status, setStatus] = useState(false)
    // console.log(path)

    const [removeMachine, { isSuccess: machineDeleteSuccess, isLoading: machineLoading, }] =
        machineApi.useDeleteMachineMutation();
    const [removeTO, { isSuccess: deleteTOSuccess, isLoading: maintenanceLoading }] =
        maintenanceApi.useDeleteMaintenanceMutation();
    const [removeComplaint, { isSuccess: complaintDeleteSuccess, isLoading: complaintLoading }] =
        complaintsApi.useDeleteComplaintsMutation();

    const handleDelete = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setStatus(true)
        const params = e.target.id.split(',')
        console.log(params)
        switch (params[0]){
            case 'machine':
                removeMachine(params[1]);
                break
            case 'complaint':
                removeComplaint(params[1])
                break
            case 'to':
                removeTO(params[1])
                break
            default:
                break
        }
    };
    const redirect = (to: string) => {
        setStatus(false)
        setTimeout(() => navigate(to), 700)
        return <p>redirect</p>
    }


    const info = (name: string, to:string) =>{
        return (
            <div className={buttonStyle.buttons_container}>
                <Link to={to} className={buttonStyle.button + ' ' + buttonStyles.medium}>
                    {name}
                </Link>
            </div>
        )
    }

    const  create = (name: string, to: string) => {
        return (
            <div className={buttonStyle.buttons_container}>
                <button form={to} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                    {name}
                </button>
                <Link to={location.pathname} className={buttonStyle.button + ' ' + buttonStyles.medium}>
                    Отмена
                </Link>
            </div>
        )
    }
    const detail = (name:string, text: string) => {
        return (
            <div className={buttonStyle.buttons_container}>
                {user.group}
                {user && (user.group == 'Service_Organization' || user && user.group == 'Manager') ?
                <Link to={`edit_${name}/${path}`} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                    {path}Изменить {text}
                </Link>: null}
                {user && user.group == 'Manager' ?
                    <button
                        id={`${name},${path}`}
                        className={buttonStyle.button + ' ' + buttonStyles.medium}
                            onClick={handleDelete}>
                        {machineLoading || maintenanceLoading || complaintLoading ?
                            <Loading suffix={'small'}/> : `Удалить ${text}`}
                    </button> : null
                }
                <div style={{ display: "none" }}>
                  {status && machineDeleteSuccess ? redirect(`info`) : null}
                    {status && complaintDeleteSuccess ? redirect(`complaints`) : null}
                    {status && deleteTOSuccess ? redirect(`to`) : null}
                </div>
            </div>
        )
    }

    if (user) {
        if (location.pathname.endsWith('/info') && user.group == 'Manager')
            return info('Добавить Машину', "create_machine")

        if (location.pathname.endsWith('/to')) {
            return info("Добавить ТО", 'create_to')
        }
        if (location.pathname.endsWith('/complaints') &&
            (user.group == 'Manager' || user.group == 'service_company')) {
            return info("Добавить Рекламацию", 'create_complaint')
        }
        if (location.pathname.endsWith('/create_machine') && (user.group == 'Manager')){
            return create('Сохранить Машину', 'create_machine')
        }
        if (location.pathname.endsWith('/create_to')){
            return create("Сохранить ТО", 'create_to')
        }
        if (location.pathname.endsWith('/create_complaint') && (user.group == 'Manager' || user.group == 'service_company')){
            return create("Сохранить Рекламацию", 'create_complaint')
        }
        if (path && location.pathname.search('info') > 0){
            return detail('machine','Машину')
        }
        if (path && location.pathname.search('to') > 0){
            return detail('to','ТО')
        }
        if (path && location.pathname.search('complaints') > 0){
            return detail('complaint','Рекламацию')
        }
    }
    return null
}