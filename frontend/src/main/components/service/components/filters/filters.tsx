import {machines_filters, complaints_filters, maintenances_filters} from "../../../../../configs/variables.ts";
import Selector from "../selector.tsx";
import {Link, useNavigate} from "react-router-dom";
import {getData} from "../../../../../scripts/create.ts";

interface IProps {
    path:string
}
export default function FilterInputs({path}: IProps){
    // console.log(path)
    // console.log(path.endsWith('info'))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = getData(e)
        let search_params = '?'
        for (let i in formData){
            formData[i] ? search_params += (i + '=' +formData[i] + '&=') : null
        }
        console.log(search_params)
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
            <div>
                <p>Выберите фильтр</p>
                <form method={'action'} onSubmit={handleSubmit}>
                    {dict.map((filter) =>
                        <Selector name={[filter]} key={filter}/>
                    )}
                    <div>
                        <button type={'submit'}>Отфильтровать</button>
                        <Link to={'/service/info'}>Сбросить фильтры</Link>
                    </div>
                </form>
            </div>)
    }

    if (path.endsWith('info')){
        return filterForm(machines_filters)
    }else if(path.endsWith('to')){
        return filterForm(maintenances_filters)
    }else if (path.endsWith('complaints')){
        return filterForm(complaints_filters)
    }
}