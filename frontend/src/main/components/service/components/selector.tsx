import { handbooksApi } from "../../../../redux/handbooks.ts";
import {IHandbook, IMachine} from "../../../configs/intarfaces.ts";
import { useState } from "react";
import {summary_dictionary} from "../../../configs/variables.ts";
import {useLocation} from "react-router-dom";
import {machineApi} from "../../../../redux/machine.ts";

interface IProps {
  name: string[];
}
export default function Selector({ name }: IProps) {
  // console.log(name)
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
  const { data: machine } = machineApi.useGetMachinesQuery("");

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
    machine: machine,
  };

  const path = useLocation()

  const [def, setDefault] =
      useState(name.length > 1 ? name[1]: '');


  const handleChange = (event) => {
    setDefault(event.target.value);
    event.preventDefault();
  };
  // console.log(def)

  return (
    <>
      <select required={
        path.pathname.endsWith('info') ? false :
          path.pathname.endsWith('to') ? false :
              !path.pathname.endsWith('complaints')
      }
              value={def} onChange={handleChange} name={name[0]}>
            <option value={''}>{summary_dictionary[name]}</option>
        {dict[name[0]] &&
          dict[name[0]].results.map((res: IHandbook | IMachine) => (
              [name[0]] == 'machine' ? (
                  <option value={res.id} key={res.id}>
                    {res.machine_serial_number}
                  </option>
              ):
              < option value={res.id} key={res.id}>
        {res.name}
          </option>
          ))}
      </select>
    </>
  );
}
