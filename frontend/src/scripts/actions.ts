import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {IMachine} from "../main/configs/intarfaces.ts";

async function findAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const serial_number = formData.get("machine_serial_number") as string | null;
  if (!serial_number) {
    return { error: "Введите заводской номер вашего оборудования" };
  }
  return redirect(
    `/result?machine_serial_number=${encodeURIComponent(serial_number)}`
  );
}

interface IProps {
  dict: IMachine
}


const actionOrder = (e, {dict}: IProps, path, direction: boolean) => {
  // console.log(e.target)

  const value = e.target.innerText
  const target = Object.keys(dict).find(key =>
      dict[key] === value)
  if (path.search){
    const index = path.search.indexOf('ordered=');
    if (index > -1){
      // console.log(index)
      const sub_path =  path.search.substring(0, index)
      // console.log(sub_path)
      if (direction){
        path.search = sub_path + "ordered=" + target
      }else {
        path.search = sub_path + "ordered=" + '-' + target
      }

    }else{path.search += 'ordered=' + target}
  }else {
    path.search += '?ordered=' + target
  }

  // console.log(path)
  // console.log(path.search)
  return path.pathname + path.search as string
}

export { findAction, actionOrder };
