import spinner from "../../../../assets/Spinner-1s-200px.svg";
import styles from "../../../../assets/styles/loading.module.scss";

interface IProps {
  suffix: string;
}
export default function Loading({ suffix }: IProps) {
  let modification = "";
  switch (suffix) {
    case "small":
      modification = styles.small;
      break;
    case "medium":
      modification = styles.medium;
      break;
    case "big":
      modification = styles.big;
      break;
    default:
      break;
  }

  return (
    <div className={styles.loading + " " + modification}>
      <img src={spinner} alt='' />
    </div>
  );
}
