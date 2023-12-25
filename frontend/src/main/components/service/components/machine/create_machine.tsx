import styles2 from "../maintenance/maintenance.module.scss";
import {handbooksApi} from "../../../../../redux/handbooks.ts";
import {IHandbook} from "../../../../../configs/intarfaces.ts";
import {machineApi} from "../../../../../redux/machine.ts";

export default function CreateMachine(){
    const {data: models} = handbooksApi.useGetAllMachineModelQuery('')
    const {data: engines} = handbooksApi.useGetAllEngineQuery('')
    const {data: transmissions} = handbooksApi.useGetAllTransmissionQuery('')
    const {data: drives} = handbooksApi.useGetAllDriveAxleQuery('')
    const {data: steerings} = handbooksApi.useGetAllSteeringAxleQuery('')
    const {data: clients} = handbooksApi.useGetAllClientsQuery('')
    const {data: companies} = handbooksApi.useGetAllOrganizationQuery('')
    // console.log(engines)
    // let a: IMachine = {}
    const [
        createMachine,
        {error: createError,
            isSuccess: createSucsess}
    ]
        = machineApi.useCreateMachineMutation()
    console.log(createError, createSucsess)
    const handleCreate = async (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        let machine = {}
        data.forEach(function (
            value, key
        ){
            machine[key] = value
            })
        createMachine(machine)
    }
    return (
        <>
            <div className={styles2.search_result__detail}>
                <div className={styles2.detail__descriptions}>
                    <form onSubmit={handleCreate}>
                        <section>
                            <p className={styles2.label}>№ контракта:</p>
                            <input type="text" name='supply_contract'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Модель:</p>
                            <select name="machine_model">
                                {models && models.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Зав. № машины:</p>
                            <input type="text" name='machine_serial_number'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Модель двигателя:</p>
                            <select name="model_engine">
                                {engines && engines.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Зав. № двигателя:</p>
                            <input type="text" name='engine_serial_number'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Модель трансмиссии:</p>
                            <select name="model_transmission">
                                {transmissions && transmissions.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Зав. № трансмиссии:</p>
                            <input type="text" name='transmission_serial_number'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Модель ведущего моста:</p>
                            <select name="model_drive_axle">
                                {drives && drives.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Зав. № ведущего моста:</p>
                            <input type="text" name='drive_axle_serial_number'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Модель управляемого моста:</p>
                            <select name="steering_axle">
                                {steerings && steerings.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Зав. № управляемого моста:</p>
                            <input type="text" name='steering_axle_serial_number'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Дата отгрузки с завода:</p>
                            <input type="date" name='date_shipped_from_factory'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Покупатель:</p>
                            <select name="client">
                                {clients && clients.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <section>
                            <p className={styles2.label}>Грузополучатель (конечный потребитель):</p>
                            <input type="text" name='consignee'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Адрес поставки:</p>
                            <input type="text" name='delivery_address'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Комплектация (доп. опции):</p>
                            <input type="text" name='equipment'/>
                        </section>
                        <section>
                            <p className={styles2.label}>Сервисная компания:</p>
                            <select name="service_company">
                                {companies && companies.results.map((res: IHandbook) =>
                                    <option value={res.id} key={res.id}>{res.name}</option>
                                )}
                            </select>
                        </section>
                        <button type="submit">create</button>
                    </form>
                </div>
            </div>
        </>)
}
