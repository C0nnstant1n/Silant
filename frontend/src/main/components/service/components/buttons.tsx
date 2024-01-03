import buttonStyle from "../../../../assets/styles/buttons.module.scss";
import buttonStyles from "../../../../assets/styles/buttons.module.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {userApi} from "../../../../redux/user.ts";
import {machineApi} from "../../../../redux/machine.ts";
import {BaseSyntheticEvent, useState} from "react";
import {complaintsApi} from "../../../../redux/complaints.ts";
import {maintenanceApi} from "../../../../redux/maintenance.ts";
import Loading from "./Loading.tsx";
import ErrorPage from "../../../error.tsx";
import popupStyle from '../../../../assets/styles/popup.module.scss'


export default function ButtonsBlock() {
    const location = useLocation()
    const path = location.pathname.replace(/^\D+/g, "");
    const {data:user} = userApi.useGetUserQuery('')
    const navigate =useNavigate()
    const [status, setStatus] = useState(false)
    // console.log(path)

    const [removeMachine, {
        isSuccess: machineDeleteSuccess,
        isLoading: machineLoading,
        isError: isMachineError,
        error: machineError,
        reset: resetMachine }] =
        machineApi.useDeleteMachineMutation();
    const [removeTO, {
        isSuccess: deleteTOSuccess,
        isLoading: maintenanceLoading,
        isError: isMaintenanceError,
        error: maintenanceError,
        reset: resetMaintenance }] =
        maintenanceApi.useDeleteMaintenanceMutation();
    const [removeComplaint, {
        isSuccess: complaintDeleteSuccess,
        isLoading: complaintLoading,
        isError: isComplaintError,
        error: complaintError,
        reset: resetComlaint
        }] =
        complaintsApi.useDeleteComplaintsMutation();

    const handleDelete = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setStatus(true)
        const params = e.target.id.split(',')
        // console.log(params)

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
        let redirectPath = ""
        if (location.pathname.endsWith('to')){
            redirectPath = 'to'
        }else if (location.pathname.endsWith('info')){
            redirectPath = 'info'
        }else if (location.pathname.endsWith('complaint')){
            redirectPath = 'complaints'
        }
        return (
            <div className={buttonStyle.buttons_container}>
                <button form={to} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                    {name}
                </button>

                <Link to={redirectPath} className={buttonStyle.button + ' ' + buttonStyles.medium}>
                    Отмена
                </Link>
            </div>
        )
    }
    const detail = (name:string, text: string) => {
        return (
            <>
                {isMachineError  ?
                <div className={popupStyle.container}>
                    <div className={popupStyle.reveal_modal}>
                        <ErrorPage error={machineError}/>
                        <div className={buttonStyle.buttons_container}>
                            <button className={buttonStyle.button + ' ' + buttonStyles.medium}
                                    onClick={resetMachine}>закрыть
                            </button>
                        </div>

                    </div>
                </div> :
                    isMaintenanceError ?
                        <div className={popupStyle.container}>
                            <div className={popupStyle.reveal_modal}>
                                <ErrorPage error={maintenanceError}/>
                                <button className={buttonStyle.button + ' ' + buttonStyles.medium}
                                        onClick={resetMaintenance}>закрыть
                                </button>
                            </div>
                        </div> :
                        isComplaintError ?
                            <div className={popupStyle.container}>
                                <div className={popupStyle.reveal_modal}>
                                    <ErrorPage error={complaintError}/>
                                    <button className={buttonStyle.button + ' ' + buttonStyles.medium}
                                            onClick={resetComlaint}>закрыть
                                    </button>
                                </div>
                            </div> :

                            <div className={buttonStyle.buttons_container}>
                                {(location.pathname.search('info') > 0)  && (user && user.group == 'Manager')?
                    <Link to={`edit_${name}/${path}`} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                        Изменить {text}
                    </Link> : null }
                {(location.pathname.search('complaints') > 0)  && (user && (user.group == 'Manager' || user.group == 'Service_Organization'))?
                    <Link to={`edit_${name}/${path}`} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                       Изменить {text}
                    </Link> : null}
                {(location.pathname.search('to') < 10) && (location.pathname.search('to') > 0) ?
                    <Link to={`edit_${name}/${path}`} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                        Изменить {text}
                    </Link> : null}
                {user && user.group == 'Manager' ?
                    <button
                        id={`${name},${path}`}
                        className={buttonStyle.button + ' ' + buttonStyles.medium}
                            onClick={handleDelete}>
                        {machineLoading || maintenanceLoading || complaintLoading ?
                            <Loading suffix={'small'}/> : `Удалить ${text}`}
                    </button>: null

                }
                <div style={{ display: "none" }}>
                  {status && machineDeleteSuccess ? redirect(`info`) : null}
                    {status && complaintDeleteSuccess ? redirect(`complaints`) : null}
                    {status && deleteTOSuccess ? redirect(`to`) : null}
                </div>
            </div>}
            </>
        )
    }

    if (user) {
        if (location.pathname.endsWith('/info') && user.group == 'Manager')
            return info('Добавить Машину', "create_machine")

        if (location.pathname.endsWith('/to')) {
            return info("Добавить ТО", 'create_to')
        }
        if (location.pathname.endsWith('/complaints') &&
            (user.group == 'Manager' || user.group == 'Service_Organization')) {
            return info("Добавить Рекламацию", 'create_complaint')
        }
        if (location.pathname.endsWith('/create_machine') && (user.group == 'Manager')){
            return create('Сохранить Машину', 'create_machine')
        }
        if (location.pathname.endsWith('/create_to')){
            return create("Сохранить ТО", 'create_to')
        }
        if (location.pathname.endsWith('/create_complaint') && (user.group == 'Manager' || user.group == 'Service_Organization')){
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