import "./App.css";
import { CardList } from "./Components/CardList/CardList";
import { Filters } from "./Components/Filters/Filters";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

import { useEffect, useState } from "react";

export type ProductDetail = {
  brand: string;
  gender: string;
  image: string;
  name: string;
  price: number;
};

function App() {
  const [products, setProducts] = useState<ProductDetail[]>([]);

  const [filterCards, setFilterCards] = useState<ProductDetail[]>([]);

  const productsAPI = "https://challenges.brainster.tech/ajax_data/data.json";

  useEffect(() => {
    fetch(productsAPI)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
    setFilterCards;
  });

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "0 auto",
        }}
      >
        <Filters bikes={products} setFilterCards={setFilterCards} />
        <CardList bikes={products} filter={filterCards} />
      </div>
      <Footer />
    </>
  );
}

export default App;
