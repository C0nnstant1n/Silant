
import styles from "./machine.module.scss";
import {machineDict} from "../../../../../configs/variables.ts";
import {useState} from "react";

export default function Detail({data}){
    const [popup, setPopup] = useState(styles.popup)
    // console.log(popup)
    const handlePopUp = () => {
        popup.search(/popup/) > 0? setPopup(styles.popdown) : setPopup(styles.popup)
        }

    return (
        <div className={styles.detail_wrapper}>
            <section className={styles.detail_section}>
                <p className={styles.label}>{machineDict[data[0]]}</p>
                <div className={styles.data}>
                    {data[1].length > 1 ?
                        <span>{data[1]}</span> :
                        (<>
                            <span>{data[1].name}</span>
                            <button className={styles.popup_button} onClick={handlePopUp}>
                                {
                                    popup.search(/popup/) > 0? '˅' : '˄'
                                }</button>
                        </>)}
                </div>
            </section>
            {data[1].length > 1 ? null : <p className={popup}>{data[1].description}</p>}
        </div>
    )}