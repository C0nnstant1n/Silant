import buttonStyle from "../../../../assets/styles/buttons.module.scss";
import buttonStyles from "../../../../assets/styles/buttons.module.scss";
import {Link, useLocation} from "react-router-dom";
import {userApi} from "../../../../redux/user.ts";


export default function ButtonsBlock() {
    const location = useLocation()
    const path = location.pathname.replace(/^\D+/g, "");
    const {data:user} = userApi.useGetUserQuery('')
    console.log(path)

    const info = (name: string) =>{
        return (
            <div className={buttonStyle.buttons_container}>
                <Link to={"/service/create_machine"} className={buttonStyle.button + ' ' + buttonStyles.medium}>
                    {name}
                </Link>
            </div>
        )
    }

    const  create = (name: string) => {
        return (
            <div className={buttonStyle.buttons_container}>
                <button form='create_machine' className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                    {name}
                </button>
                <Link to={"/service/info"} className={buttonStyle.button + ' ' + buttonStyles.medium}>
                    Отмена
                </Link>
            </div>
        )
    }
    const detail = (name:string, text: string) => {
        return (
            <div className={buttonStyle.buttons_container}>
                <Link to={`edit_${name}/${path}`} className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
                    Изменить {text}
                </Link>
                {user && user.group == 'Manager' ?
                    <button className={buttonStyle.button + ' ' + buttonStyles.medium}
                            >
                        Удалить {text}
                    </button> : null
                }
            </div>
        )
    }

    if (user) {
        if (location.pathname.endsWith('/info') && user.group == 'Manager')
            return info('Добавить Машину')

        if (location.pathname.endsWith('/to')) {
            return info("Добавить ТО")
        }
        if (location.pathname.endsWith('/complaints') &&
            (user.group == 'Manager' || user.group == 'service_company')) {
            return info("Добавить Рекламацию")
        }
        if (location.pathname.endsWith('/create_machine') && (user.group == 'Manager')){
            return create('Сохранить Машину')
        }
        if (location.pathname.endsWith('/create_to')){
            return create("Сохранить ТО")
        }
        if (location.pathname.endsWith('/create_complaint') && (user.group == 'Manager' || user.group == 'service_company')){
            return create("Сохранить Рекламацию")
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