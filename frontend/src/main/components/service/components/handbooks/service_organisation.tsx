import { handbooksApi } from "../../../../../redux/handbooks.ts";
import { useLocation } from "react-router-dom";
import styles from "../../../search_result/result.module.scss";

export default function ServiceOrganisation() {
  const location = useLocation();
  const path = location.pathname.replace(/.+?company./, "");
  // console.log(path)
  const { data, error, isLoading } = handbooksApi.useGetOrganisationQuery(path);
  // console.log(data, error, isLoading)
  return (
    <>
      {isLoading && !data ? (
        <div className={styles.search_result__container}>
          <div className={styles.loading}>
            <h3>Загрузка</h3>
          </div>
        </div>
      ) : error && !data ? (
        <div>
          <h2>Ошибка Загрузки</h2>
        </div>
      ) : (
        <div>
          <h2>{data && data.name}</h2>
          <p>{data && data.description}</p>
        </div>
      )}
    </>
  );
}
