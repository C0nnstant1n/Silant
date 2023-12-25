import {handbooksApi} from "../../../../../redux/handbooks.ts";
import {useLocation} from "react-router-dom";
import styles from "../../../search_result/result.module.scss";


export default function MaintenanceType(){
    const location = useLocation();
    let path = location.pathname.replace(/.+?type./, '')
    // console.log(path)
    const {
        data,
        error,
        isLoading} = handbooksApi.useGetTypeQuery(path)
    // console.log(data, error, isLoading)
    return (
        <>
        {(isLoading && !data) ?
            (<div className={styles.search_result__container}>
                <div className={styles.loading}><h3>Загрузка</h3></div>
            </div>) :
            (error && !data) ?
                (<div>
                    <h2>Ошибка Загрузки</h2>
                </div>):
                    (
                        <div>
                            <h2>{data && data.name}</h2>
                            <p>{data && data.description}</p>

                            <button>Редактировать</button>
                        </div>

            )
        }
        </>
    )
}