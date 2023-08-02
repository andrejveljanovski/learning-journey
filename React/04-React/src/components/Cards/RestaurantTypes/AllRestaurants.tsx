import { useContext } from 'react';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from '../RestaurantCards/RestaurantCard';
import '../RestaurantCardStyle/RestaurantCardStyle.css';
export const AllRestaurants = () => {
  const { restaurants } = useContext(Context);
  return (
    <>
      <div className="title-div">
        <h2>all restaurants</h2>
      </div>
      <div className="all-restaurants-content">
        {restaurants.map((rest) => (
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
