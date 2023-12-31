import styles from "../../main.module.scss";
import buttonStyles from "../../../assets/styles/buttons.module.scss";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import { userApi } from "../../../redux/user.ts";
import FilterInputs from "./components/filters.tsx";
import ButtonsBlock from "./components/buttons.tsx";

export default function Service() {
  const { data } = userApi.useGetUserQuery("");
  const location = useLocation();
  let group = "";
  if (data && data.group) {
    switch (data.group) {
      case "Client":
        group = "Клиент";
        break;
      case "Manager":
        group = "Менеджер";
        break;
      case "Service_Organization":
        group = "Сервисная компания";
        break;
      default:
        break;
    }
  }

  // console.log(user)
  return (
    <>
      <section className={styles.main__user_info}>
        <p>{group && group}</p>
        {data && data.company ? (
          <h3>{data.company}</h3>
        ) : (
          <h3>{data && data.username}</h3>
        )}
      </section>
      <section className={styles.main__article}>
        <p>
          Информация о комплектации и технических характеристиках Вашей техники
        </p>
      </section>
      <div className={styles.main_container}>
        <nav className={buttonStyles.buttons_container}>
          <NavLink className={buttonStyles.button + ' ' + buttonStyles.big} to='info'>
            Общая информация
          </NavLink>
          <NavLink className={buttonStyles.button + ' ' + buttonStyles.big} to='to'>
            ТО
          </NavLink>
          <NavLink className={buttonStyles.button + ' ' + buttonStyles.big} to='complaints'>
            Рекламации
          </NavLink>
        </nav>
        <hr/>
        {(location.pathname.endsWith('/info') ||
            location.pathname.endsWith('/to') ||
            location.pathname.endsWith('/complaints')) ?
            <FilterInputs path={location.pathname}/> : null}
        <section className={styles.container_content}>
          <Outlet/>
        </section>
        <ButtonsBlock />
      </div>
    </>
  );
}
