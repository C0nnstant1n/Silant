import {machineApi} from "../../../../../redux/machine.ts";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styles from '../detail.module.scss'
import buttonsStyles from '../../../../../assets/styles/buttons.module.scss'
import React from "react";
import Detail from "../detail.tsx";

export default function MachineDetail(){
    const location = useLocation();
    const navigate = useNavigate()
    const path = location.pathname.replace(/^\D+/g, '')
    // console.log(path)
    const {data, isLoading} = machineApi.useGetMachineQuery(path)
    const [remove, {isSuccess: deleteSuccess}] = machineApi.useDeleteMachineMutation()
    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault()
        data ? remove(data) : null
    }

    const content = []
    if (data){
        for (const i in data){
            i != 'id' ? content.push([i, data[i]]) : null
        }
    }
    const handleEdit = async (e: React.MouseEvent)=>{
        e.preventDefault()
        data ? navigate(`/service/edit/${data.id}`): null
    }

    return (
        <>
            {(
                isLoading && !data ?
                    <div className={styles.search_result__container}>
                        <div className={styles.loading}><h3>Загрузка</h3></div>
                    </div>
                    :
                        <>
                            <div className={styles.search_result__detail}>
                                <div className={styles.detail}>
                                    {content ? content.map((data) =>
                                        <Detail data={data} key={data[0]}/>
                                    ): null}
                                </div>
                                <div className={styles.detail__spec}>
                                    <Outlet/>
                                </div>
                                <div className={buttonsStyles.buttons_container}>
                                    <button className={buttonsStyles.button} onClick={handleEdit}>Редактировать машину</button>
                                    <button className={buttonsStyles.button} onClick={handleDelete}>Удалить машину</button>
                                </div>
                            </div>
                            <div style={{display: "none"}}>{deleteSuccess ?
                                setTimeout(()=>navigate("/service/info"), 1000) : null}</div>
                        </>
            )}
        </>
    )
}