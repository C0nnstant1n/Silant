import {BaseSyntheticEvent} from "react";

const getData = (e: BaseSyntheticEvent) => {
  // console.log(e)
  const formData = new FormData(e.target);
  //здесь можно сделать проверку данных формы
  const data: { [index: string]: string} = {};
  formData.forEach(function (value, key) {
    data[key] = value as string
  });
  // console.log(data)

  if ('date_refusal' in data && 'recovery_date' in data){
    const dr = new Date(data['date_refusal'])
    const rd = new Date(data['recovery_date'])
    const downtime = (rd - dr) / 1000 / 3600
    data['equipment_downtime'] = downtime
    console.log(downtime)
  }

  return data;
};

export { getData };
