import { useContext } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { Context } from '../../../context/cardContext';

export const Cuisines = () => {
  const { restaurants, filterByCuisine } = useContext(Context);
  const Buttons = restaurants.map((rest) => rest.restauranttype);

  const removeDuplicates = (arr: string[]) => {
    return arr.filter(
      (item: string, index: string | number) => arr.indexOf(item) === index
    );
  };
  let reducedButtons = removeDuplicates(Buttons);
  return (
    <div className="cuisines-buttons-div">
      <div className="title-div">
        <h2>cuisines</h2>
      </div>
      <div className="buttons-div">
        {reducedButtons.map((rest: string) => {
          return (
            <Link to={`/cuisinedetail/${rest}`}>
              <button
                key={uuid()}
                onClick={() => {
                  filterByCuisine(rest);
                }}
                className="cuisine-btn"
              >
                {rest}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
