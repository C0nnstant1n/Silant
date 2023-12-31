import axios from "axios";
import { BACKAND_URL } from "../main/configs/urls.ts";
import { redirect } from "react-router-dom";
import { IUser } from "../main/configs/intarfaces.ts";

async function protectedLoader() {
  const isAuthenticated = await axios
    .get<boolean | IUser>(BACKAND_URL + "get_user/", {
      withCredentials: true,
    })
    .then((response) => response.data);
  // console.log(isAuthenticated)
  if (!isAuthenticated) {
    return redirect("/result");
  }
  return null;
}

async function authenticatedLoader() {
  const isAuthenticated = await axios
    .get<boolean | IUser>(BACKAND_URL + "get_user/", {
      withCredentials: true,
    })
    .then((response) => response.data);
  // console.log(isAuthenticated)
  if (isAuthenticated) {
    return redirect("/service/info");
  }
  return null;
}

export { protectedLoader, authenticatedLoader };
