import { complaintsApi } from "../../../../../redux/complaints.ts";
import formStyle from "../../../../../assets/styles/form.module.scss";
import {
  IComplaint,
  IHandbook,
  IMachine,
} from "../../../../configs/intarfaces.ts";
import { getData } from "../../../../../scripts/create.ts";
import { handbooksApi } from "../../../../../redux/handbooks.ts";
import { machineApi } from "../../../../../redux/machine.ts";
import { useNavigate } from "react-router-dom";
import { complaintDict } from "../../../../configs/variables.ts";
import Loading from "../Loading.tsx";

export default function CreateComplaint() {
  const navigate = useNavigate();
  const [create, { isSuccess: createSuccess, isLoading }] =
    complaintsApi.useCreateComplaintsMutation();

  const { data: failure } = handbooksApi.useGetAllFailureQuery("");
  const { data: recovery } = handbooksApi.useGetAllRecoveryMethodQuery("");
  const { data: companies } = handbooksApi.useGetAllOrganizationQuery("");
  const { data: machine } = machineApi.useGetMachinesQuery("");

  const handbooks = {
    failure_node: failure,
    recovery_method: recovery,
    machine: machine,
    service_company: companies,
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    create(getData(event));
  };

  const complaint = [];
  // console.log(data)
  for (const i in complaintDict) {
    i != "id" ? complaint.push([i, complaintDict[i]]) : null;
  }
  // console.log(complaint)

  return (
    <>
      {isLoading ? <Loading suffix={'big'} /> :
      <form id='create_complaint' className={formStyle.form} onSubmit={handleCreate}>
        {complaint.map((data) => (
          <div key={data[0]}>
            {data[0] == "service_company" ||
            data[0] == "failure_node" ||
            data[0] == "recovery_method" ? (
              <section className={formStyle.form_section} key={data[0]}>
                <p className={formStyle.label}>{data[1]}:</p>
                <select name={data[0]}>
                  {handbooks[data[0]] &&
                    handbooks[data[0]].results.map((data: IHandbook) => (
                      <option value={data.id} key={data.name + data.id}>
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
                      <option
                        value={data.id}
                        key={data.machine_serial_number + data.id}
                      >
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
                    data[0].search("date") >= 0
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

      </form>}
      <div style={{ display: "none" }}>
        {createSuccess
          ? setTimeout(() => navigate("/service/complaints"), 700)
          : null}
      </div>
    </>
  );
}
