import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {BaseSyntheticEvent} from "react";
import {IComplaint} from "../main/configs/intarfaces.ts";

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
  dict: { [key:string]: IComplaint }
}

interface IPath {
  pathname: string;
  search: string;
  hash: string;
}

const actionOrder = (e: BaseSyntheticEvent, {dict}: IProps, path: IPath, direction: boolean) => {
  // console.log(e.target)
  let value  = ''
  const tar = e.target.innerText
  if (tar.length > 1){
    value = e.target.innerText
  }else {
    value = e.target.previousElementSibling.innerText
  }

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
