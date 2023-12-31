import { maintenanceApi } from "../../../../../redux/maintenance.ts";
import formStyle from "../../../../../assets/styles/form.module.scss";
import { maintenanceDict } from "../../../../configs/variables.ts";
import { handbooksApi } from "../../../../../redux/handbooks.ts";
import {
  IHandbook,
  IMachine,
  IMaintenance,
} from "../../../../configs/intarfaces.ts";
import buttonStyle from "../../../../../assets/styles/buttons.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { machineApi } from "../../../../../redux/machine.ts";
import { getData } from "../../../../../scripts/create.ts";

export default function CreateTO() {
  const [create, { isSuccess: createSuccess }] =
    maintenanceApi.useCreateMaintenanceMutation();

  const { data: companies } = handbooksApi.useGetAllOrganizationQuery("");
  const { data: maintenance } = handbooksApi.useGetAllMaintenanceQuery("");
  const { data: machine } = machineApi.useGetMachinesQuery("");

  const handbooks = {
    service_company: companies,
    machine: machine,
    maintenance_type: maintenance,
  };

  const navigate = useNavigate();

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    create(getData(event) as IMaintenance);
  };
  const mapDict: string [][] =[]
  for (const i in maintenanceDict){
    mapDict.push([i, maintenanceDict[i]])
  }

  return (
    <>
      <form id='create_to' className={formStyle.form} onSubmit={handleCreate}>
        {mapDict.map((data) => (
          <div key={data[0]}>
            {data[0] == "service_company" || data[0] == "maintenance_type" ? (
              <section className={formStyle.form_section} key={data[0]}>
                <p className={formStyle.label}>{data[1]}:</p>
                <select name={data[0]}>
                  {handbooks[data[0]] &&
                    handbooks[data[0]].results.map((data: IHandbook) => (
                      <option value={data.id} key={data.id}>
                        {data.name}
                      </option>
                    ))}
                </select>
              </section>
            ) : data[0] == "machine" ? (
              <section className={formStyle.form_section} key={data[0]}>
                <p className={formStyle.label}>{data[1]}:</p>
                <select name={data[0]}>
                  {handbooks[data[0]] &&
                    handbooks[data[0]].results.map((data: IMachine) => (
                      <option value={data.machine_serial_number} key={data.id}>
                        {data.machine_serial_number}
                      </option>
                    ))}
                </select>
              </section>
            ) : (
              <section className={formStyle.form_section}>
                <p className={formStyle.label}>{data[1]}</p>
                <input
                  required
                  type={
                    data[0].search("date") > 0
                      ? "date"
                      : data[0] == "operating_time"
                      ? "number"
                      : "text"
                  }
                  name={data[0]}
                />
              </section>
            )}
          </div>
        ))}
      </form>
      <div style={{ display: "none" }}>
        {createSuccess ? setTimeout(() => navigate("/service/to"), 700) : null}
      </div>
    </>
  );
}
