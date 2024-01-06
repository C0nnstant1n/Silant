interface IDict {
  [index:string]: string
}
const machineDict: IDict = {
  machine_model: "Модель техники",
  machine_serial_number: "Зав. № машины",
  model_engine: "Модель Двигателя",
  engine_serial_number: "Зав. № Двигателя",
  model_transmission: "Модель трансмиссии",
  transmission_serial_number: "Зав. № трансмиссии",
  model_drive_axle: "Модель ведущего моста",
  drive_axle_serial_number: "Зав. № ведущего моста",
  steering_axle: "Модель управляемого моста",
  steering_axle_serial_number: "Зав. № управляемого моста",
  supply_contract: "№ договора поставки",
  date_shipped_from_factory: "Дата отгрузки с завода",
  client: "Клиент",
  delivery_address: "Адрес поставки (эксплуатации)",
  equipment: "Комплектация (доп. опции)",
  consignee: "Грузополучатель (конечный потребитель)",
  service_company: "Сервисная компания",

};
const maintenanceDict: IDict = {
  machine: "Зав. № машины",
  maintenance_type: "Вид ТО",
  maintenance_date: "Дата Проведения ТО",
  operating_time: "Наработка, м/час",
  order_number: "№ Заказ-наряда",
  order_date: "Дата Заказ-наряда",
  service_company: "Организация проводившая ТО",
}


const complaintDict: IDict = {
  machine: "Зав. № машины",
  recovery_date: "Дата восстановления",
  date_refusal: "Дата отказа",
  equipment_downtime: "Время простоя",
  operating_time: "Наработка, м/час",
  failure_node: "Узел отказа",
  description: "Описание отказа",
  recovery_method: "Способ восстановления",
  spare_parts: "Используемые запасные части",
  service_company: "Сервисная компания",
};

const machines_filters = [
    'machine_model',
    'model_engine',
    'model_transmission',
    'model_drive_axle',
    'steering_axle'
]
const complaints_filters = [
  'failure_node',
  'recovery_method',
  'service_company'
]
const maintenances_filters = [
  'maintenance_type',
  'machine',
  'service_company'
]

const summary_dictionary: IDict = {
  machine_model: "Модель техники",
  machine_serial_number: "Зав. № машины",
  model_engine: "Модель Двигателя",
  engine_serial_number: "Зав. № Двигателя",
  model_transmission: "Модель трансмиссии",
  transmission_serial_number: "Зав. № трансмиссии",
  model_drive_axle: "Модель ведущего моста",
  drive_axle_serial_number: "Зав. № ведущего моста",
  steering_axle: "Модель управляемого моста",
  steering_axle_serial_number: "Зав. № управляемого моста",
  date_shipped_from_factory: "Дата отгрузки с завода",
  client: "Клиент",
  consignee: "Грузополучатель (конечный потребитель)",
  delivery_address: "Адрес поставки (эксплуатации)",
  equipment: "Комплектация (доп. опции)",
  service_company: "Сервисная компания",
  supply_contract: "№ договора поставки",
  date_refusal: "Дата отказа",
  recovery_date: "Дата восстановления",
  operating_time: "Наработка, м/час",
  description: "Описание отказа",
  spare_parts: "Используемые запасные части",
  equipment_downtime: "Время простоя",
  failure_node: "Узел отказа",
  recovery_method: "Способ восстановления",
  machine: "Зав. № машины",
  maintenance_date: "Дата Проведения ТО",
  order_number: "№ Заказ-наряда",
  order_date: "Дата Заказ-наряда",
  maintenance_type: "Вид ТО",
}



export { machineDict, maintenanceDict, complaintDict, machines_filters,
  complaints_filters, maintenances_filters, summary_dictionary };
