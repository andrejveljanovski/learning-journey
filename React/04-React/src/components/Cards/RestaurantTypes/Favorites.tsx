import { useContext } from 'react';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from '../RestaurantCards/RestaurantCard';

export const Favorites = () => {
  const { favourites } = useContext(Context);

  return (
    <div className="favorites-restaurant-content">
      {favourites &&
        favourites.length > 0 &&
        favourites.map((rest) => (
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
  );
};
