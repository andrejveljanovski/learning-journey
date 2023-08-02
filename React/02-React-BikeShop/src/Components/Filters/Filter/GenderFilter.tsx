import { ProductDetail } from "../../../App";
import styles from "./filter.module.scss";

export const GenderFilter = ({
  setFilterCards,
  bikes,
  femaleBikes,
  listName,
  listNumber,
  listNameFemale,
  listNumberFemale,
}: {
  setFilterCards: (products: ProductDetail[]) => void;
  bikes: ProductDetail[];
  femaleBikes: ProductDetail[];
  listName: string;
  listNumber: number;
  listNameFemale: string;
  listNumberFemale: number;
}) => {
  const filterMaleBikes = () => {
    setFilterCards(bikes);
  };
  const filterFemaleBikes = () => {
    setFilterCards(femaleBikes);
  };
  return (
    <div>
      <ul>
        <li className={styles.filterDiv} onClick={filterMaleBikes}>
          <p>{listName}</p>
          <span>{listNumber}</span>
        </li>
        <li className={styles.filterDiv} onClick={filterFemaleBikes}>
          <p>{listNameFemale}</p>
          <span>{listNumberFemale}</span>
        </li>
      </ul>
    </div>
  );
};
