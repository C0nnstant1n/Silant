import {complaintsApi} from "../../../../../redux/complaints.ts";
import formStyle from "../../../../../assets/styles/form.module.scss";
import {IComplaint, IHandbook, IMachine} from "../../../../../configs/intarfaces.ts";
import buttonStyle from "../../../../../assets/styles/buttons.module.scss";
import {getData} from "../../../../../scripts/create.ts";
import {handbooksApi} from "../../../../../redux/handbooks.ts";
import {machineApi} from "../../../../../redux/machine.ts";
import {Link, useNavigate} from "react-router-dom";
import {complaintDict} from "../../../../../configs/variables.ts";


export default function CreateComplaint(){
    const navigate = useNavigate()
    const [create, {isSuccess: createSuccess}] = complaintsApi.useCreateComplaintsMutation()

    const {data: failure} = handbooksApi.useGetAllFailureQuery('')
    const {data: recovery} = handbooksApi.useGetAllRecoveryMethodQuery('')
    const {data: companies} = handbooksApi.useGetAllOrganizationQuery('')
    const {data: machine} = machineApi.useGetMachinesQuery('')

    const handbooks = {
        failure_node: failure,
        recovery_method: recovery,
        machine: machine,
        service_company: companies,
    }

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        create(getData(event) as IComplaint)
    }

    const complaint= []
        // console.log(data)
    for (const i in complaintDict){
        i != 'id' ? complaint.push([i, complaintDict[i]]) : null
        }
    // console.log(complaint)

    return (
        <>
            <form className={formStyle.form} onSubmit={handleCreate}>
                {complaint.map((data) =>
                    <div key={data[0]}>
                        {

                            data[0] == 'service_company' || data[0] == 'failure_node' || data[0] == 'recovery_method' ?
                                <section className={formStyle.form_section} key={data[0]}>
                                    <p className={formStyle.label}>{data[1]}:</p>
                                    <select name={data[0]}>
                                        {handbooks[data[0]] && handbooks[data[0]].results.map((data: IHandbook) =>
                                            <option value={data.id} key={data.name+data.id}>{data.name}</option>
                                        )}
                                    </select>
                                </section> :
                                data[0] == 'machine' ?
                                    <section className={formStyle.form_section} key={data[0]}>
                                        <p className={formStyle.label}>{data[1]}:</p>
                                        <select name={data[0]}>
                                            {handbooks[data[0]] && handbooks[data[0]].results.map((data: IMachine) =>
                                                    <option value={data.id}
                                                            key={data.machine_serial_number+data.id}>{data.machine_serial_number}</option>
                                            )}
                                        </select>
                                    </section> :
                                    <section className={formStyle.form_section}>
                                        <p className={formStyle.label}>{data[1]}</p>
                                        <input required
                                               type={data[0].search('date') >= 0 ? 'date' :
                                                   data[0] == 'operating_time' ? 'number' : 'text'
                                               }
                                               name={data[0]}/>
                                    </section>
                        }
                    </div>
                )}
                <div className={buttonStyle.buttons_container}>
                    <button className={buttonStyle.button} type="submit">Сохранить рекламацию</button>
                    <Link to={'/service/complaints'} className={buttonStyle.button}>Отмена</Link>
                </div>
            </form>
            <div style={{display: "none"}}>{createSuccess ?
                setTimeout(() => navigate("/service/complaints"), 700) : null}</div>
        </>
    )
}