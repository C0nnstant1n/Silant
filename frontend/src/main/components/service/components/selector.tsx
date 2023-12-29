import { handbooksApi } from "../../../../redux/handbooks.ts";
import { IHandbook } from "../../../../configs/intarfaces.ts";
import { useState } from "react";
import {machineDict} from "../../../../configs/variables.ts";
import {useLocation} from "react-router-dom";

interface IProps {
  name: string[];
}
export default function Selector({ name }: IProps) {
  const { data: models } = handbooksApi.useGetAllMachineModelQuery("");
  const { data: engines } = handbooksApi.useGetAllEngineQuery("");
  const { data: transmissions } = handbooksApi.useGetAllTransmissionQuery("");
  const { data: drives } = handbooksApi.useGetAllDriveAxleQuery("");
  const { data: steerings } = handbooksApi.useGetAllSteeringAxleQuery("");
  const { data: clients } = handbooksApi.useGetAllClientsQuery("");
  const { data: companies } = handbooksApi.useGetAllOrganizationQuery("");
  const { data: maintenance_type } = handbooksApi.useGetAllMaintenanceQuery("");
  const { data: recovery } = handbooksApi.useGetAllRecoveryMethodQuery("");
  const { data: failur } = handbooksApi.useGetAllFailureQuery("");

  const dict = {
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
  };

  const path = useLocation()
  // console.log(path)
  const [def, setDefault] = useState('');
  const handleChange = (event: any) => {
    setDefault(event.target.value);
    event.preventDefault();
  };

  return (
    <>
      <select required={!path.pathname.endsWith('info') ||
          !path.pathname.endsWith('to')|| !path.pathname.endsWith('complaints')}
              value={def} onChange={handleChange} name={name[0]}>
            <option value={''}>{machineDict[name]}</option>
        {dict[name[0]] &&
          dict[name[0]].results.map((res: IHandbook) => (
            <option value={res.id} key={res.id}>
              {res.name}
            </option>
          ))}
      </select>
    </>
  );
}
