import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context/cardContext';

export const SupriseRestaurant = () => {
  const navigate = useNavigate();
  const { restaurants } = useContext(Context);

  const navigateToSupriseRestaurantPage = () => {
    const restaurantIDS = restaurants.map((rest) => rest.id);
    const randomRest =
      restaurantIDS[Math.floor(Math.random() * restaurants.length)];
    navigate(`supriseRestaurant/${randomRest}`);
  };
  return (
    <div className="suprise-content-div">
      <div className="title-div">
        <h3>don't know what to eat?</h3>
      </div>
      <button onClick={navigateToSupriseRestaurantPage} className="button">
        Suprise Me!
      </button>
    </div>
  );
};
