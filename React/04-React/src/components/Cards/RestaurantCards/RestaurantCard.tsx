import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context, restaurantType } from '../../../context/cardContext';

export const RestaurantCard = ({
  image,
  businessname,
  restauranttype,
  reviews,
  reviewsList,
  email,
  phone,
  parkinglot,
  address,
  isFavorite,
  id,
}: restaurantType) => {
  const { handleFavouriteClick, restaurants } = useContext(Context);
  const [avgRating, setAvgRating] = useState<any>();
  const [reviewNumber, setReviewNumber] = useState<number>(reviews);
  useEffect(() => {
    setAvgRating(
      reviewsList &&
        reviewsList.length > 0 &&
        (
          reviewsList.reduce((a, b) => a + b.stars, 0) / reviewsList.length
        ).toFixed(1)
    );
  }, [restaurants]);

  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <i
          className={isFavorite ? 'fas fa-heart fa-3x' : 'far fa-heart fa-3x'}
          onClick={(e) => handleFavouriteClick && handleFavouriteClick(e, id)}
        />

        <img src={image} alt="Restaurant Image" />
        <div className="info-div">
          <h3>{businessname}</h3>
          {restauranttype && <p className="category-txt">{restauranttype}</p>}
          <div className="reviews-content-div">
            <p>{reviews > 0 && `Rating - ${avgRating}`} </p>

            <small> {reviews > 0 && `based on ${reviewNumber} reviews`}</small>
          </div>
          <p>{phone ? phone : null}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <address> {address && address}</address>
          <p>
            {parkinglot ? <p>We have a parking lot waiting for you</p> : null}
          </p>
        </div>
      </div>
    </Link>
  );
};
