import Slider from '@mui/material/Slider/Slider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from '../RestaurantCards/RestaurantCard';
import '../RestaurantCardStyle/RestaurantContentStyle.css';

export const SupriseRestaurantDetail = () => {
  const { id } = useParams();
  const { restaurants } = useContext(Context);
  const foundRestaurant = restaurants.find((rest) => rest.id === id);
  return (
    <div className="restaurant-details-content">
      {foundRestaurant && (
        <>
          <div className="suprise-restaurant-details-title">
            <h1>{foundRestaurant.businessname}</h1>
          </div>
          <RestaurantCard
            id={foundRestaurant.id}
            image={foundRestaurant.image}
            businessname={foundRestaurant.businessname}
            restauranttype={foundRestaurant.restauranttype}
            reviews={foundRestaurant.reviews}
            reviewsList={foundRestaurant.reviewsList}
            parkinglot={foundRestaurant.parkinglot}
            phone={foundRestaurant.phone}
            address={foundRestaurant.address}
            email={foundRestaurant.email}
            isFavorite={foundRestaurant.isFavorite}
          />
        </>
      )}
      {foundRestaurant && foundRestaurant.reviewsList.length > 0 && (
        <>
          <div className="title-div">
            <h3>reviews</h3>
          </div>
          <div className="review-div">
            {foundRestaurant.reviewsList.map((rev) => (
              <div id={rev.id.toString()} className="review-card">
                <p>
                  <span>Author</span> : {rev.author}
                </p>
                <p>
                  <span>Message</span> : {rev.comment}
                </p>
                <p>
                  <span>Stars</span> : {rev.stars}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      {/* TBD whenever a SUPRISE restaurant SHOULD have a review form  */}
      {/* <div className="reviews-div">
        {foundRestaurant &&
          foundRestaurant.reviewsList.length > 0 &&
          foundRestaurant.reviewsList.map((rev) => (
            <div id={rev.id.toString()} className="review-card">
              <p>
                <span>Author</span> : {rev.author}
              </p>
              <p>
                <span>Message</span> : {rev.comment}
              </p>
              <p>
                <span>Stars</span> : {rev.stars}
              </p>
            </div>
          ))}
      </div> */}
      {/* <div className="title-div">
        <h2>review form</h2>
      </div> */}
      {/* <form>
        <div>
          <label htmlFor="name">Name</label>
          <textarea id="name" />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" />
        </div>
        <div>
          <Slider defaultValue={1} step={1} marks min={1} max={5} />
        </div>
        <button className="button" type="submit">
          Leave a review
        </button>
      </form> */}
    </div>
  );
};
