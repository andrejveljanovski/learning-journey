import { ProductDetail } from "../../../App";
import styles from "./filter.module.scss";

export const Filter = ({
  setFilterCards,

  bikes,
  listName,
  listNumber,
}: {
  setFilterCards: (products: ProductDetail[]) => void;

  bikes: ProductDetail[];
  listName: string;
  listNumber: number;
}) => {
  const handleShowAll = () => {
    setFilterCards(bikes);
  };

  return (
    <div>
      <ul>
        <li className={styles.filterDiv} onClick={handleShowAll}>
          <p>{listName}</p>
          <span>{listNumber}</span>
        </li>
      </ul>
    </div>
  );
};
