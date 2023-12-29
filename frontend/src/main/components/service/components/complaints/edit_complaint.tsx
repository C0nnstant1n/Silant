import styles from "../detail.module.scss";
import formStyle from "../../../../../assets/styles/form.module.scss";
import buttonStyle from "../../../../../assets/styles/buttons.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Selector from "../selector.tsx";
import { complaintsApi } from "../../../../../redux/complaints.ts";
import { complaintDict } from "../../../../../configs/variables.ts";
import { IComplaint } from "../../../../../configs/intarfaces.ts";

export default function EditComplaint() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace(/^\D+/g, "");
  // console.log(path)

  const { data } = complaintsApi.useGetComplaintQuery(path + "/");
  const [update, { isSuccess }] = complaintsApi.useUpdateComplaintsMutation();
  const content = [];
  if (data) {
    for (const i in data) {
      i != "id" ? content.push([i, data[i]]) : null;
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const complaint: { [index: string]: any } = {};
    formData.forEach(function (value, key) {
      complaint[key] = value;
    });
    complaint["id"] = path;
    if (data) {
      complaint["machine"] = data.machine.id;
    }

    // console.log(complaint)
    update(complaint as IComplaint);
  };
  return (
    <>
      <form className={formStyle.form} onSubmit={handleUpdate}>
        {content.map((detail) => (
          <div className={styles.detail_wrapper} key={detail[0]}>
            <section className={formStyle.form_section}>
              <p className={formStyle.label}>{complaintDict[detail[0]]}</p>
              {detail[0] == "machine" ? (
                <p>
                  <b>{detail[1].machine_serial_number}</b>
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
            Сохранить
          </button>
          <Link to={"/service/complaints"} className={buttonStyle.button}>
            Отмена
          </Link>
        </div>
      </form>
      <div style={{ display: "none" }}>
        {isSuccess
          ? setTimeout(() => navigate("/service/complaints"), 700)
          : null}
      </div>
    </>
  );
}
