import {machines_filters, complaints_filters, maintenances_filters} from "../../../configs/variables.ts";
import Selector from "./selector.tsx";
import {useNavigate} from "react-router-dom";
import {getData} from "../../../../scripts/create.ts";
import buttonsStyle from '../../../../assets/styles/buttons.module.scss'
import formStyle from '../../../../assets/styles/form.module.scss'
import styles from '../../../main.module.scss'
import buttonStyles from "../../../../assets/styles/buttons.module.scss";
import popupStyle from '../../../main.module.scss'
import {useState} from "react";

interface IProps {
    path:string
}
export default function FilterInputs({path}: IProps){
    // console.log(path)
    // console.log(path.endsWith('info'))
    const navigate = useNavigate()
    const [popup, setPopup] = useState(popupStyle.popdown);

    const handlePopUp = () => {
        popup.search(/popup/) > 0
            ? setPopup(popupStyle.popdown)
            : setPopup(popupStyle.popup);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = getData(e)
        let search_params = '?'
        for (const i in formData){
            formData[i] ? search_params += (i + '=' +formData[i] + '&') : null
        }
        // console.log(search_params)
        !search_params.endsWith('?') ?
            path.endsWith('info') ?
                navigate(`info${search_params}`):
                path.endsWith('to') ?
                    navigate(`to${search_params}`):
                    path.endsWith('complaints') ?
                        navigate(`complaints${search_params}`): null :null
    }

    const filterForm = (dict: string []) => {
        return (
            <div className={formStyle.filters_wrapper}>
                <div className={buttonsStyle.buttons_container}>
                    <p className={styles.filters_header}>Выберите фильтр</p>
                    <button
                        onClick={handlePopUp}
                        className={buttonStyles.popup_button}>
                        {popup.search(/popup/) > 0 ? "˅" : "˄"}
                    </button>
                </div>
                <div className={popup}>
                    <form id='filter' className={formStyle.form} method={'action'} onSubmit={handleSubmit}>

                        {dict.map((filter) =>
                            <div className={formStyle.filters} key={filter}>
                                <div className={formStyle.filters_wrapper}><Selector name={[filter]}/></div>
                            </div>
                        )}
                    </form>
                    <div className={buttonsStyle.buttons_container}>
                        <button form='filter' className={buttonsStyle.button + ' ' + buttonsStyle.small}>Отфильтровать
                        </button>
                        <a className={buttonsStyle.button + ' ' + buttonsStyle.small} href={
                            path.endsWith('info') ? '/service/info' :
                                path.endsWith('to') ? '/service/to' :
                                    path.endsWith('complaints') ? '/service/complaints' : '#'
                        }>Сбросить фильтры</a>
                    </div>
                </div>
                <hr/>
            </div>)
    }

    if (path.endsWith('info')) {
        return filterForm(machines_filters)
    } else if (path.endsWith('to')) {
        return filterForm(maintenances_filters)
    } else if (path.endsWith('complaints')) {
        return filterForm(complaints_filters)
    }
}