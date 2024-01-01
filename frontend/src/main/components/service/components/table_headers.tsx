import tableStyle from "../../../../assets/styles/table.module.scss";
import buttonStyles from "../../../../assets/styles/buttons.module.scss";
import {BaseSyntheticEvent, useState} from "react";
import {actionOrder} from "../../../../scripts/actions.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {IComplainDict} from "../../../configs/intarfaces.ts";


interface IProps {
    dict: IComplainDict
}

export default function TableHeaders({dict}: IProps){
    const [direction, setDirection] = useState(false)
    const path = useLocation()
    const navigate = useNavigate()
    // console.log(dict)
    const handleOrder = (e: BaseSyntheticEvent) => {
        // console.log(e.target.previousElementSibling)
        setDirection(!direction)
        const to = actionOrder(e, {dict}, path, direction)
        // console.log('to - ', to)
        navigate(to)
    }

    const header = []
    for (const head in dict){
        header.push(
            <td className={tableStyle.table_header} onClick={handleOrder} key={dict[head]}>
                <div className={tableStyle.table_header}>
                    <p>{dict[head]}</p>
                    <button className={buttonStyles.popup_button}>{direction ? "˅" : "˄"}</button>
                </div>
            </td>
        )
    }
    return header
}
