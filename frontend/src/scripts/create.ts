import {BaseSyntheticEvent} from "react";
import {IComplaint, IMachine, IMaintenance} from "../main/configs/intarfaces.ts";

const getData = (e: BaseSyntheticEvent) => {
  // console.log(e.target)
  const formData = new FormData(e.target);
  //здесь можно сделать проверку данных формы
  const data: { [index: string]: string | number } = {};
  formData.forEach(function (value, key) {
    data[key] = value as string;
  });
  // console.log(data)

  if ("date_refusal" in data && "recovery_date" in data) {
    const dr = new Date(data["date_refusal"]);
    const rd = new Date(data["recovery_date"]);
    data["equipment_downtime"] = (+rd - +dr) / 1000 / 3600;
  }

  return data as unknown as IComplaint | IMachine | IMaintenance;
};

export { getData };
