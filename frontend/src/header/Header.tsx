import logo from "../assets/Logotype accent RGB 1.svg";
import styles from "./header.module.scss";
import { userApi } from "../redux/user.ts";

export default function Header() {
  const { data } = userApi.useGetUserQuery("");

  return (
    <header>
      <picture className={styles.header__logo}>
        <img src={logo} alt='Logo' />
      </picture>
      <div className={styles.container}>
        <nav className={styles.header__nav}>
          <a href='#'>+7-8352-20-12-09</a>
          <a href='#'>telegram</a>
        </nav>
        <h2>Электронная сервисная книжка "Мой Силант"</h2>
      </div>
      {data && data.user ? (
        <div className={styles.account}>
          <div className={styles.account__name}>
            <span>{data.user}</span>
            <a
              href='http://127.0.0.1:8000/logout'
              className={styles.account__name_button}
            >
              выход
            </a>
          </div>
        </div>
      ) : (
        <a
          className={styles.header__button}
          href='http://127.0.0.1:8000/accounts/login/'
        >
          Вход
        </a>
      )}
    </header>
  );
}
