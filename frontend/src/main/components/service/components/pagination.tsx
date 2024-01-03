import {Link, useLocation} from "react-router-dom";
import {IResponse} from "../../../configs/intarfaces.ts";
import buttonStyle from '../../../../assets/styles/buttons.module.scss'
import arrow from '../../../../assets/up-1.1s-200px.svg'

interface IProps {
    response: IResponse | undefined
}
export default function Pagination ({response}: IProps){
    const location = useLocation()
    let previous: RegExpMatchArray | null = null
    let next: RegExpMatchArray | null = null
    // console.log(response)
    const pattern = /\?([^#]+)/;
    if (response){
        response.next? next = response.next.match(pattern) : next = null
        response.previous ? previous = response.previous.match(pattern) : previous = null
    }

    return (
        <div className={buttonStyle.buttons_container}>
            {previous ? <Link to={location.pathname + previous[0]}><img className={buttonStyle.arrow_up} src={arrow} alt="Показать предыдущие"/></Link> : null }
            {next ? <Link to={location.pathname + next[0]}><img className={buttonStyle.arrow_down} src={arrow} alt="Показать следущие"/></Link> : null}
        </div>
    )
}