import { maintenanceApi } from "../../../../../redux/maintenance.ts";
import formStyle from "../../../../../assets/styles/form.module.scss";
import { IMaintenance } from "../../../../configs/intarfaces.ts";
import buttonStyle from "../../../../../assets/styles/buttons.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../detail.module.scss";
import { maintenanceDict } from "../../../../configs/variables.ts";
import Selector from "../selector.tsx";

export default function EditTO() {
  const location = useLocation();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)

  const [update, { isSuccess: createSuccess }] =
    maintenanceApi.useUpdateMaintenanceMutation();
  const { data: TO } = maintenanceApi.useGetMaintenanceDetailQuery(path);

  const navigate = useNavigate();

  const content = [];
  if (TO) {
    for (const i in TO) {
      i != "id" ? content.push([i, TO[i]]) : null;
    }
  }
  // console.log(content)
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const maintenance: { [index: string]: IMaintenance } = {};
    data.forEach(function (value, key) {
      maintenance[key] = value;
    });
    maintenance["id"] = path;
    if (TO) {
      maintenance["machine"] = TO.machine;
    }
    // console.log(machine)
    update(maintenance as IMaintenance);
  };

  const mapDict: string [][] =[]
  for (const i in maintenanceDict){
    mapDict.push([i, maintenanceDict[i]])
  }

  return (
    <>
      <form className={formStyle.form} onSubmit={handleUpdate}>
        {content.map((detail) => (
          <div className={styles.detail_wrapper} key={detail[0]}>
            <section className={formStyle.form_section}>
              <p className={formStyle.label}>
                {mapDict.map((data) =>
                  data[0] == detail[0] ? data[1] : ""
                )}
              </p>
              {detail[0] == "machine" ? (
                <p>
                  <b>{detail[1]}</b>
                </p>
              ) : detail[1].length || typeof detail[1] == "number" ? (
                <input
                  required={detail[0] != "machine"}
                  name={detail[0]}
                  defaultValue={detail[1]}
                  type={
                    detail[0].search("date") >= 0
                      ? "date"
                      : detail[0] == "operating_time"
                      ? "number"
                      : "text"
                  }
                />
              ) : (
                <Selector name={[detail[0], detail[1].id]} />
              )}
            </section>
          </div>
        ))}
        <div className={buttonStyle.buttons_container}>
          <button className={buttonStyle.button} type='submit'>
            Сохранить ТО
          </button>
          <Link to={"/service/to"} className={buttonStyle.button}>
            Отмена
          </Link>
        </div>
      </form>
      <div style={{ display: "none" }}>
        {createSuccess ? setTimeout(() => navigate("/service/to"), 700) : null}
      </div>
    </>
  );
}
