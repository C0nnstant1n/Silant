interface IUser {
  user: string;
  username: string;
  group?: string;
  company?: string;
}
interface IHandbook {
  id: number;
  name: string;
  description: string;
  user?: number;
}
interface IMachine {
  id?: number;
  machine_model: IHandbook | string;
  machine_serial_number: string;
  model_engine: IHandbook | string;
  engine_serial_number: string;
  model_transmission: IHandbook | string;
  transmission_serial_number: string;
  model_drive_axle: IHandbook | string;
  drive_axle_serial_number: string;
  steering_axle: IHandbook | string;
  steering_axle_serial_number: string;
  date_shipped_from_factory: string;
  client: IHandbook |string;
  consignee: string;
  delivery_address: string;
  equipment: string;
  service_company: IHandbook |string;
  supply_contract: string;
}

interface IShMachine {
  id: number;
  machine_model: string;
  machine_serial_number: string;
  model_engine: string;
  engine_serial_number: string;
  model_transmission: string;
  transmission_serial_number: string;
  model_drive_axle: string;
  drive_axle_serial_number: string;
  steering_axle: string;
  steering_axle_serial_number: string;
}

interface IMaintenance {
  id?: number;
  maintenance_date: string;
  operating_time: string;
  order_number: number;
  order_date: string;
  maintenance_type: IHandbook | string;
  machine: string;
  service_company: IHandbook | string;
}

interface IComplaint {
  id: number;
  recovery_date: string;
  date_refusal: string;
  operating_time: number;
  description: string;
  spare_parts: string;
  equipment_downtime: number;
  failure_node: IHandbook | string;
  recovery_method: IHandbook | string;
  machine: IMachine | string;
  service_company: IHandbook | string;
  [key: string]: string | number | IHandbook | IMachine;
}

interface IResponse {
  "count": number,
  "next": string | null,
  "previous": string | null,
  results: [];
}

interface IComplainDict {
  readonly date_refusal: string;
  readonly machine: string;
  readonly operating_time: string;
  readonly failure_node: string;
  readonly description: string;
  readonly recovery_method: string;
  readonly spare_parts: string;
  readonly recovery_date: string;
  readonly equipment_downtime: string;
  readonly service_company: string;
}

export type {
  IResponse,
  IShMachine,
  IMachine,
  IMaintenance,
  IComplaint,
  IHandbook,
  IUser,
    IComplainDict
};
