import React from 'react';
import ProductItem, { ProductItemInterface } from './ProductItem';

interface Props {
  relatedItems: ProductItemInterface[];
}
const RelatedProducts: React.FC<Props> = ({ relatedItems }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedItems.map((prod) => (
              <ProductItem prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
