import styles from "./detail.module.scss";
import popStyles from '../../../main.module.scss'
import buttonStyles from '../../../../assets/styles/buttons.module.scss'
import { useState } from "react";
import {summary_dictionary} from "../../../configs/variables.ts";
import {IHandbook} from "../../../configs/intarfaces.ts";

interface IProps {
  data: [string, string | IHandbook];
}

export default function Detail({ data }: IProps) {
  const [popup, setPopup] = useState(popStyles.popdown);
  const dict = summary_dictionary
  // console.log(data)
  const handlePopUp = () => {
    popup.search(/popup/) > 0
      ? setPopup(popStyles.popdown)
      : setPopup(popStyles.popup);
  };

  return (
    <div className={styles.detail_wrapper}>
      <section className={styles.detail_section}>
        <p className={styles.label}>{dict[data[0]]}</p>
        <div className={styles.data}>
          {data[0] == "machine" ? (
            <span>{data[1].machine_serial_number}</span>
          ) : data[1].length || typeof data[1] == "number" ? (
            <span>{data[1]}</span>
          ) : (
            <>
              <span>{data[1].name}</span>
              <button className={buttonStyles.popup_button} onClick={handlePopUp}>
                {popup.search(/popup/) > 0 ? "˅" : "˄"}
              </button>
            </>
          )}
        </div>
      </section>
      {data[1].length || (typeof data[1] == "number") || (data[0] == 'machine') ? null : (
        <p className={popup}>{data[1].description}</p>
      )}
    </div>
  );
}
