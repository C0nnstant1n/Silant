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
  return data;
};

export { getData };
