import { ProductDetail } from "../../../App";
import styles from "./filter.module.scss";

type BrandFilterProps = {
  bikes: ProductDetail[];
  brands: [string, number][];
  setFilterCards: (products: ProductDetail[]) => void;
};

export const BrandFilter: React.FC<BrandFilterProps> = ({
  bikes,
  brands,
  setFilterCards,
}) => {
  const filterBrandBike = (brand: string) => {
    const filteredProducts = bikes.filter((bike) => bike.brand === brand);
    setFilterCards(filteredProducts);
  };

  return (
    <div>
      <ul>
        {brands.map(([brand, count]) => (
          <li
            className={styles.filterDiv}
            key={brand}
            onClick={() => filterBrandBike(brand)}
          >
            <p>{brand}</p>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
