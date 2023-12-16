import {Form, useActionData, useLocation, useNavigation} from "react-router-dom";
import styles from './login.module.scss';
import {useState} from "react";
import google from "../../../assets/google_button.svg";
import yandex from "../../../assets/yandex_button.svg";


export default function Signin(){
    const location = useLocation();
    // console.log(location);

    const params = new URLSearchParams(location.search);
    let from = params.get("from") || "/";

    const navigation = useNavigation();
    let isLogginIn = navigation.formData?.get("login") != null;
    let actionData = useActionData() as { error: string } | undefined;

    const [loginCheck, setLoginCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);

    return(
        <>
            <div className={styles.authorization}>
                <div className={styles.authorization__form}>
                    <div className={styles.form__top}>
                        <div className={styles.top__container}>
                            <h2>
                                <a className={styles.active_tab} href='#'>
                                    Войти
                                </a>
                            </h2>
                            <hr/>
                        </div>
                        <div className={styles.inactive_tab}>
                            <h2>
                                <a className={styles.inactive_tab} href='#'>
                                    Зарегистрироваться
                                </a>
                            </h2>
                            <hr/>
                        </div>
                    </div>

                    <Form method='post' replace>
                        <input type='hidden' name='redirectTo' value={from} />
                        <label htmlFor='login'>Логин</label>
                        <input
                            id='login'
                            name='login'
                            type='text'
                            required
                            minLength={8}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setLoginCheck(e.target.checkValidity())
                            }
                        />
                        <label htmlFor='password'>Пароль</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            minLength={7}
                            required
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPasswordCheck(e.target.checkValidity())
                            }
                        />
                        <button
                            className={styles.active_button}
                            disabled={!(passwordCheck && loginCheck)}
                            type='submit'
                        >
                            {isLogginIn ? "Вход..." : "Войти"}
                        </button>
                        {actionData && actionData.error ? (
                            <div className={styles.error}>
                                <p style={{ color: "red" }}>{actionData.error}</p>
                            </div>
                        ) : null}
                    </Form>

                    <a href='#'>Восстановить пароль</a>

                    <div className={styles.alternative_signin}>
                        <p>Войти через:</p>
                        <div className={styles.alternative_signin_links}>
                            <img src={google} alt='google' />
                            <img src={yandex} alt='yandex' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}