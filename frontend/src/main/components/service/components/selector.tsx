import {handbooksApi} from "../../../../redux/handbooks.ts";
import {IHandbook} from "../../../../configs/intarfaces.ts";
import {useState} from "react";

interface IProps {
    name: string[],
}
export default function Selector({name}: IProps){
    const {data: models} = handbooksApi.useGetAllMachineModelQuery('')
    const {data: engines} = handbooksApi.useGetAllEngineQuery('')
    const {data: transmissions} = handbooksApi.useGetAllTransmissionQuery('')
    const {data: drives} = handbooksApi.useGetAllDriveAxleQuery('')
    const {data: steerings} = handbooksApi.useGetAllSteeringAxleQuery('')
    const {data: clients} = handbooksApi.useGetAllClientsQuery('')
    const {data: companies} = handbooksApi.useGetAllOrganizationQuery('')
    const {data: maintenance_type} = handbooksApi.useGetAllMaintenanceQuery('')
    const {data: recovery} = handbooksApi.useGetAllRecoveryMethodQuery('')
    const {data: failur} = handbooksApi.useGetAllFailureQuery('')

    const dict= {
        machine_model: models,
        model_engine: engines,
        model_transmission: transmissions,
        model_drive_axle: drives,
        steering_axle: steerings,
        client: clients,
        service_company: companies,
        maintenance_type: maintenance_type,
        recovery_method: recovery,
        failure_node: failur,

    }
    // console.log(name)
    const [def, setDefault] = useState(name[1])
    const handleChange = (event)=> {
        setDefault(event.target.value)
        event.preventDefault()
    }

    return(
        <>
            <select value={def} onChange={handleChange} name={name[0]}>
                {dict[name[0]] && dict[name[0]].results.map((res: IHandbook) =>
                    <option value={res.id} key={res.id}>{res.name}</option>
                )}
            </select>
        </>
    )
}