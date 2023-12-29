import styles from "./detail.module.scss";
import { machineDict } from "../../../../configs/variables.ts";
import { complaintDict } from "../../../../configs/variables.ts";
import { useState } from "react";

interface IProps {
  data: [[index: string], any];
}

export default function Detail({ data }: IProps) {
  const [popup, setPopup] = useState(styles.popup);

  const dict = Object.assign(machineDict, complaintDict);

  const handlePopUp = () => {
    popup.search(/popup/) > 0
      ? setPopup(styles.popdown)
      : setPopup(styles.popup);
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
              <button className={styles.popup_button} onClick={handlePopUp}>
                {popup.search(/popup/) > 0 ? "˅" : "˄"}
              </button>
            </>
          )}
        </div>
      </section>
      {data[1].length > 1 ? null : (
        <p className={popup}>{data[1].description}</p>
      )}
    </div>
  );
}
