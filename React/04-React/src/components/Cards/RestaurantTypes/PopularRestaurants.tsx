import { useContext } from 'react';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from '../RestaurantCards/RestaurantCard';

export const PopularRestaurants = () => {
  const { restaurants } = useContext(Context);

  let sortedFromHighToLow = restaurants.sort((a, b) => b.reviews - a.reviews);
  let topTenRestaurants = sortedFromHighToLow.slice(0, 10);

  return (
    <>
      <div className="title-div">
        <h2>our most popular restaurants</h2>
      </div>
      <div className="all-restaurants-content">
        {topTenRestaurants.map((rest) => (
          <RestaurantCard
            key={uuid()}
            id={rest.id}
            image={rest.image}
            businessname={rest.businessname}
            restauranttype={rest.restauranttype}
            reviews={rest.reviews}
            isFavorite={rest.isFavorite}
            reviewsList={rest.reviewsList}
          />
        ))}
      </div>
    </>
  );
};
