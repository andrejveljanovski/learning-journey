import { ProductDetail } from "../../App";
import { BrandFilter } from "./Filter/BrandFilter";
import { Filter } from "./Filter/Filter";
import { GenderFilter } from "./Filter/GenderFilter";

export const Filters = ({
  bikes,
  setFilterCards,
}: {
  bikes: ProductDetail[];
  setFilterCards: (products: ProductDetail[]) => void;
}) => {
  const maleBikes = bikes.filter((bike) => bike.gender === "MALE");
  const femaleBikes = bikes.filter((bike) => bike.gender === "FEMALE");

  const brandCounts: { [brand: string]: number } = bikes.reduce(
    (accumulator: { [brand: string]: number }, bike) => {
      const { brand } = bike;
      accumulator[brand] = (accumulator[brand] || 0) + 1;
      return accumulator;
    },
    {}
  );

  const brandArrays: [string, number][] = Object.entries(brandCounts);

  return (
    <div style={{ width: "15%" }}>
      <h1>Bikes</h1>
      <h2
        style={{ borderBottom: "1px solid lightgrey", paddingBottom: "16px" }}
      >
        Filter by:
      </h2>

      <Filter
        bikes={bikes}
        listName={"Show all"}
        listNumber={bikes.length}
        setFilterCards={setFilterCards}
      />

      <h2
        style={{ borderBottom: "1px solid lightgrey", paddingBottom: "16px" }}
      >
        Gender
      </h2>
      <GenderFilter
        setFilterCards={setFilterCards}
        bikes={maleBikes}
        femaleBikes={femaleBikes}
        listName={"Male"}
        listNumber={maleBikes.length}
        listNameFemale={"Female"}
        listNumberFemale={femaleBikes.length}
      />

      <h2
        style={{ borderBottom: "1px solid lightgrey", paddingBottom: "16px" }}
      >
        Brand
      </h2>
      <BrandFilter
        bikes={bikes}
        brands={brandArrays}
        setFilterCards={setFilterCards}
      />
    </div>
  );
};
