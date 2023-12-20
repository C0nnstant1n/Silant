interface IMachine {
    "id": number,
    "model_equipment": string,
    "machine_serial_number": string,
    "model_engine": string,
    "engine_serial_number": string,
    "model_transmission": string,
    "transmission_serial_number": string,
    "model_drive_axle": string,
    "drive_axle_serial_number": string,
    "steering_axle": string,
    "steering_axle_serial_number": string,
    "date_shipped_from_factory": string,
    "client": string,
    "consignee": string,
    "delivery_address": string,
    "equipment": string,
    "service_company": string,
    supply_contract: string,
}
interface IResponsetMachine {
    count: number,
    next: number | null,
    previous: number|null,
    results: [IMachine]
}
interface IShMachine {
    "id": number,
    "model_equipment": string,
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
interface IResponseShMachine {
    count: number,
    next: number | null,
    previous: number|null,
    results: [IShMachine]
}

interface IResponse {
    count: number,
    next: number | null,
    previous: number|null,
    results: []
}

export type {IResponse, IShMachine, IResponseShMachine, IResponsetMachine, IMachine}