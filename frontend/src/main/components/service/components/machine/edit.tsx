import styles from "../detail.module.scss";
import formStyle from "../../../../../assets/styles/form.module.scss";
import buttonStyle from "../../../../../assets/styles/buttons.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { machineApi } from "../../../../../redux/machine.ts";
import { machineDict } from "../../../../configs/variables.ts";
import Selector from "../selector.tsx";
import { IMachine } from "../../../../configs/intarfaces.ts";
import buttonStyles from "../../../../../assets/styles/buttons.module.scss";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)
  const { data } = machineApi.useGetMachineQuery(path);
  const [update, { isSuccess }] = machineApi.useUpdateMachineMutation();

  const content = [];
  if (data) {
    for (const i in data) {
      i != "id" ? content.push([i, data[i]]) : null;
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const machine: { [index: string]: any } = {};
    data.forEach(function (value, key) {
      machine[key] = value;
    });
    machine["id"] = path;
    // console.log(machine)
    update(machine as IMachine);
  };

  return (
    <>
      {content ? (
        <form className={formStyle.form} onSubmit={handleUpdate}>
          {content.map((detail) => (
            <div className={styles.detail_wrapper} key={detail[0]}>
              <section className={formStyle.form_section}>
                <p className={formStyle.label}>{machineDict[detail[0]]}</p>
                {detail[1].length ? (
                  <input
                    name={detail[0]}
                    defaultValue={detail[1]}
                    type='text'
                  />
                ) : (
                  <Selector name={[detail[0], detail[1].id]} />
                )}
              </section>
            </div>
          ))}
          <div className={buttonStyle.buttons_container}>
            <button className={buttonStyle.button + ' ' + buttonStyles.medium} type='submit'>
              Сохранить
            </button>
            <Link to={"/service/info"} className={buttonStyle.button + ' ' + buttonStyles.medium}>
              Отмена
            </Link>
          </div>
        </form>
      ) : null}
      <div style={{ display: "none" }}>
        {isSuccess ? setTimeout(() => navigate("/service/info"), 700) : null}
      </div>
    </>
  );
}
