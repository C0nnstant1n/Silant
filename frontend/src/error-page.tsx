import { useRouteError } from "react-router-dom";

interface IError {
    statusText: string
    message?: string
}

export default function ErrorPage() {
    const error = useRouteError() as IError;

    return (
        <div className='error-page'>
            <h1>Ууупс!!!</h1>
            <p>Извините, что то пошло не так</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}