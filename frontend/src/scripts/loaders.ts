import axios from "axios";
import {BACKAND_URL} from "../configs/urls.ts";
import {redirect} from "react-router-dom";

async function protectedLoader() {
    const isAuthenticated = await axios.get<boolean>(BACKAND_URL + "isAuthenticated/", {
            withCredentials: true
        }
    ).then((response)=> response.data)
    console.log(isAuthenticated)
    if (!isAuthenticated) {return redirect('/result')}
    return null
}


async function authenticatedLoader() {
    const isAuthenticated = await axios.get<boolean>(BACKAND_URL + "isAuthenticated/", {
            withCredentials: true
        }
    ).then((response)=> response.data)
    console.log(isAuthenticated)
    if (isAuthenticated) {return redirect('/service')}
    return null
}

export {protectedLoader, authenticatedLoader}
