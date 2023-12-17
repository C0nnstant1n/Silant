import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {BACKAND_URL} from "../configs/urls.ts";
import axios from "axios";


async function findAction({ request }: LoaderFunctionArgs) {
    // console.log(request)
    // let formData = await request.formData();
    // let serial_number = formData.get("sn") as string | null;
    const machines = await axios(BACKAND_URL + 'api/machines/').then((response) => response.data)
    console.log(machines)
    return redirect("/result");

}

async function findLoader() {
    console.log('findloader')
    return null;
}

export {findLoader, findAction}