import { createContext, useState, useEffect } from 'react';
import React from 'react';
export interface restaurantType {
  reviews: number;
  parkinglot?: boolean;
  phone?: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address?: string;
  isFavorite?: boolean;
  slug?: string;
  email?: string;
  id: string;
  reviewsList: [
    {
      id: number;
      author: string;
      comment: string;
      stars: number;
    }
  ];
}

interface ContextData {
  restaurants: restaurantType[];
  filteredRestaurants: restaurantType[];
  handleFavouriteClick?: (e: React.MouseEvent<HTMLElement>, id: string) => void;
  favourites?: restaurantType[];
  filterByCuisine: (cuisine: string) => any;
  setRestaurants: React.Dispatch<React.SetStateAction<restaurantType[]>>;
}
interface Props {
  children: React.ReactNode;
}
export const Context = createContext({} as ContextData);

export const Provider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<restaurantType[]>([]);
  const [favourites, setFavourites] = useState<restaurantType[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    restaurantType[]
  >([]);
  const handleFavouriteClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    setRestaurants([
      ...restaurants.map((item) => {
        return item.id === id
          ? { ...item, isFavorite: !item.isFavorite }
          : item;
      }),
    ]);
  };
  const filterByCuisine = (cuisine: string) => {
    if (restaurants) {
      setFilteredRestaurants(
        restaurants.filter((rest) => rest.restauranttype === cuisine)
      );
    }
  };
  useEffect(() => {
    setFavourites(restaurants.filter((rest) => rest.isFavorite));
  }, [restaurants]);

  useEffect(() => {
    const localState = localStorage.getItem('localState');
    if (localState) {
      const data: restaurantType[] = JSON.parse(localState);
      setRestaurants(data);
    } else {
      fetch('http://localhost:5001/restaurants')
        .then((res) => res.json())
        .then((data) => {
          setRestaurants(data);
          setFilteredRestaurants(data);
        });
    }
  }, []);
  useEffect(() => {
    if (favourites.length !== 0) {
      localStorage.setItem('localState', JSON.stringify(restaurants));
    } else {
      localStorage.removeItem('localState');
    }
  }, [restaurants, favourites.length]);
  return (
    <Context.Provider
      value={{
        restaurants,
        setRestaurants,
        favourites,
        handleFavouriteClick,
        filterByCuisine,
        filteredRestaurants,
      }}
    >
      {children}
    </Context.Provider>
  );
};
