import formStyle from "../../../../../assets/styles/form.module.scss";
import { handbooksApi } from "../../../../../redux/handbooks.ts";
import {IHandbook, IMachine} from "../../../../configs/intarfaces.ts";
import { machineApi } from "../../../../../redux/machine.ts";
import { useNavigate } from "react-router-dom";
import {BaseSyntheticEvent} from "react";
import Loading from "../Loading.tsx";

export default function CreateMachine() {
  const { data: models } = handbooksApi.useGetAllMachineModelQuery("");
  const { data: engines } = handbooksApi.useGetAllEngineQuery("");
  const { data: transmissions } = handbooksApi.useGetAllTransmissionQuery("");
  const { data: drives } = handbooksApi.useGetAllDriveAxleQuery("");
  const { data: steerings } = handbooksApi.useGetAllSteeringAxleQuery("");
  const { data: clients } = handbooksApi.useGetAllClientsQuery("");
  const { data: companies } = handbooksApi.useGetAllOrganizationQuery("");

  const navigate = useNavigate();
  const [
    createMachine,
    { error: createError, isSuccess: createSuccess, isLoading },
  ] = machineApi.useCreateMachineMutation();
  // console.log(createError, createSuccess)
  const handleCreate = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const machine = {};
    data.forEach(function (value, key) {
      machine[key] = value;
    });
    // console.log(machine)
    createMachine(machine as IMachine);
  };

  if (createError) {
    if ("data" in createError) {
      console.log(createError.data);
    }
  }
  // console.log(formStyle)

  return (
    <>
      {isLoading ? <Loading suffix={'big'} /> :
      <form id='create_machine' className={formStyle.form} onSubmit={handleCreate}>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>№ контракта:</p>
          <input required type='textarea' name='supply_contract' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Модель:</p>
          <select name='machine_model'>
            {models &&
              models.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Зав. № машины:</p>
          <input required type='text' name='machine_serial_number' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Модель двигателя:</p>
          <select name='model_engine'>
            {engines &&
              engines.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Зав. № двигателя:</p>
          <input required type='text' name='engine_serial_number' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Модель трансмиссии:</p>
          <select name='model_transmission'>
            {transmissions &&
              transmissions.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Зав. № трансмиссии:</p>
          <input required type='text' name='transmission_serial_number' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Модель ведущего моста:</p>
          <select name='model_drive_axle'>
            {drives &&
              drives.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Зав. № ведущего моста:</p>
          <input required type='text' name='drive_axle_serial_number' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Модель управляемого моста:</p>
          <select name='steering_axle'>
            {steerings &&
              steerings.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Зав. № управляемого моста:</p>
          <input required type='text' name='steering_axle_serial_number' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Дата отгрузки с завода:</p>
          <input required type='date' name='date_shipped_from_factory' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Покупатель:</p>
          <select name='client'>
            {clients &&
              clients.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>
            Грузополучатель (конечный потребитель):
          </p>
          <input required type='text' name='consignee' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Адрес поставки:</p>
          <input required type='text' name='delivery_address' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Комплектация (доп. опции):</p>
          <input required type='text' name='equipment' />
        </section>
        <section className={formStyle.form_section}>
          <p className={formStyle.label}>Сервисная компания:</p>
          <select name='service_company'>
            {companies &&
              companies.results.map((res: IHandbook) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
          </select>
        </section>
      </form>}
      <div style={{ display: "none" }}>
        {createSuccess
          ? setTimeout(() => navigate("/service/info"), 700)
          : null}
      </div>
    </>
  );
}
