interface IUser {
    user: string,
    username: string,
    group?: string,
    company?: string
}
interface IHandbook{
    id: number,
    name: string,
    description: string,
    user?: number
}
interface IMachine {
    id?: number,
    machine_model: IHandbook,
    machine_serial_number: string,
    model_engine: IHandbook,
    engine_serial_number: string,
    model_transmission: IHandbook,
    transmission_serial_number: string,
    model_drive_axle: IHandbook,
    drive_axle_serial_number: string,
    steering_axle: IHandbook,
    steering_axle_serial_number: string,
    date_shipped_from_factory: string,
    client: IHandbook,
    consignee: string,
    delivery_address: string,
    equipment: string,
    service_company: IHandbook,
    supply_contract: string,
}

interface IShMachine {
    "id": number,
    "machine_model": string,
    "machine_serial_number": string,
    "model_engine": string,
    "engine_serial_number": string,
    "model_transmission": string,
    "transmission_serial_number": string,
    "model_drive_axle": string,
    "drive_axle_serial_number": string,
    "steering_axle": string,
    "steering_axle_serial_number": string,
}

interface IMaintenance {
    "id": number,
    "maintenance_date": string,
    "operating_time": string,
    "order_number": number,
    "order_data": string,
    "maintenance_type": IHandbook,
    "machine": string,
    "service_company": IHandbook
}

interface IComplaint {
    "id": number,
    "date_refusal": string,
    "operating_time": number,
    "description": string,
    "spare_parts": string,
    "recovery_date": string,
    "equipment_downtime": number,
    "failure_node": string,
    "recovery_method": string,
    "machine": string,
    "service_company": string
}

interface IResponse {
    count: number,
    next: number | null,
    previous: number|null,
    results: []
}

export type {IResponse, IShMachine, IMachine, IMaintenance, IComplaint,
    IHandbook, IUser}