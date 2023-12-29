const machineDict = {
  machine_model: "Модель техники",
  machine_serial_number: "Зав. № машины",
  model_engine: "Модель Двигателя",
  engine_serial_number: "Зав. № Двигателя",
  model_transmission: "Модель трансмиссии (производитель, артикул)",
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
};
const maintenanceDict = [
  ["maintenance_date", "Дата Проведения ТО"],
  ["operating_time", "Наработка, м/час"],
  ["order_number", "№ Заказ-наряда"],
  ["order_date", "Дата Заказ-наряда"],
  ["maintenance_type", "Вид ТО"],
  ["machine", "Зав. № машины"],
  ["service_company", "Организация проводившая ТО"],
];

const complaintDict = {
  id: "number",
  date_refusal: "Дата отказа",
  operating_time: "Наработка, м/час",
  description: "Описание отказа",
  spare_parts: "Используемые запасные части",
  recovery_date: "Дата восстановления",
  equipment_downtime: "Время простоя",
  failure_node: "Узел отказа",
  recovery_method: "Способ восстановления",
  machine: "Зав. № машины",
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

export { machineDict, maintenanceDict, complaintDict, machines_filters,
  complaints_filters, maintenances_filters };
