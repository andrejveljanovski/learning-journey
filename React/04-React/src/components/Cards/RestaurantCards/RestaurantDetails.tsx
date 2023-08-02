import Slider from '@mui/material/Slider/Slider';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';
import { RestaurantCard } from './RestaurantCard';
import '../RestaurantCardStyle/RestaurantContentStyle.css';
type AddContactFormData = {
  id: number;
  author: string;
  comment: string;
  stars: number;
};

type FormKey = 'author' | 'comment' | 'stars';

export const RestaurantDetails = () => {
  const { id } = useParams();
  const { restaurants, setRestaurants } = useContext(Context);
  const foundRestaurant = restaurants.find((rest) => rest.id === id);
  const INITIAL_STATE: AddContactFormData = {
    id: Math.floor(Math.random() * 100000),
    author: '',
    comment: '',
    stars: 0,
  };
  const [reviewObj, setReviewObj] = useState(INITIAL_STATE);

  const handleFormFieldChange = (e: any, key: FormKey) => {
    setReviewObj({ ...reviewObj, [key]: e.target.value });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reviewObj.author === '' && reviewObj.comment.length < 1) {
      alert('Both Fields are empty');
      return;
    }
    if (reviewObj.comment.length < 1) {
      alert('You have not entered a valid comment');
      return;
    }
    if (reviewObj.author === '') {
      alert('You have not entered a valid author name');
      return;
    }

    if (foundRestaurant) {
      const {
        reviews,
        parkinglot,
        phone,
        image,
        restauranttype,
        businessname,
        address,
        slug,
        email,
        id,
        reviewsList,
      } = foundRestaurant;
      const requestOption = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviews: reviews + 1,
          parkinglot: `${parkinglot}`,
          phone: `${phone}`,
          image: `${image}`,
          restauranttype: `${restauranttype}`,
          businessname: `${businessname}`,
          address: `${address}`,
          slug: `${slug}`,
          email: `${email}`,
          id: reviewsList.length + 1,
          reviewsList: [...foundRestaurant.reviewsList, reviewObj],
        }),
      };
      fetch(`http://localhost:5001/restaurants/${id}`, requestOption)
        .then((res) => res.json())
        .then((data) =>
          setRestaurants([
            ...restaurants.map((item) => {
              return item.id === id ? { ...data } : item;
            }),
          ])
        );

      setReviewObj(INITIAL_STATE);
    }
  };

  return (
    <div className="restaurant-details-content">
      {foundRestaurant && (
        <RestaurantCard
          key={uuid()}
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
      )}
      <div className="title-div">
        <h3>reviews</h3>
      </div>
      <div className="reviews-div">
        {foundRestaurant?.reviewsList &&
          foundRestaurant.reviewsList.map((rev) => (
            <div
              key={`${rev.author}+${rev.id}`}
              id={rev.id.toString()}
              className="review-card"
            >
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
      <div className="title-div">
        <h2>review form</h2>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <textarea
            value={reviewObj.author}
            onChange={(e) => handleFormFieldChange(e, 'author')}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            value={reviewObj.comment}
            onChange={(e) => handleFormFieldChange(e, 'comment')}
            id="comment"
          />
        </div>
        <div>
          <Slider
            onChange={(e) => handleFormFieldChange(e, 'stars')}
            value={reviewObj.stars}
            defaultValue={1}
            step={1}
            marks
            min={1}
            max={5}
          />
        </div>
        <button className="button" type="submit">
          Leave a review
        </button>
      </form>
    </div>
  );
};
