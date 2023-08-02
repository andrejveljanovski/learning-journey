import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface ProductItemInterface {
  description: string;
  gender: string;
  id: string;
  img: string;
  price: string;
  title: string;
}
interface Props {
  prod: ProductItemInterface;
}
const ProductItem: React.FC<Props> = ({ prod }) => {
  return (
    <a className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
      <div className="block2">
        <div className="block2-pic hov-img0">
          <Image
            src={prod.img}
            alt={prod.title}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Link href={`/shop/${prod.id}`}>
            <a>
              <div className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                View Details
              </div>
            </a>
          </Link>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <div className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
              {prod.title}
            </div>

            <span className="stext-105 cl3">{prod.price}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
