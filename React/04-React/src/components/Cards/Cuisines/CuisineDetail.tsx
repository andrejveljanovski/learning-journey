import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from '../RestaurantCards/RestaurantCard';

export const CuisineDetail = () => {
  const { restaurants } = useContext(Context);
  const { resttype } = useParams();
  const filteredRestaurans = restaurants.filter((rest) => {
    return rest.restauranttype === resttype;
  });
  return (
    <div className="cuisine-details-content">
      {filteredRestaurans.map((rest) => (
        <RestaurantCard
          key={uuid()}
          id={rest.id}
          isFavorite={rest.isFavorite}
          image={rest.image}
          businessname={rest.businessname}
          restauranttype={rest.restauranttype}
          reviews={rest.reviews}
          reviewsList={rest.reviewsList}
          parkinglot={rest.parkinglot}
          phone={rest.phone}
          address={rest.address}
          email={rest.email}
        />
      ))}
    </div>
  );
};
