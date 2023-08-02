import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AllRestaurants } from './components/Cards/RestaurantTypes/AllRestaurants';
import { CuisineDetail } from './components/Cards/Cuisines/CuisineDetail';
import { Cuisines } from './components/Cards/Cuisines/Cuisines';
import { Favorites } from './components/Cards/RestaurantTypes/Favorites';
import { RestaurantDetails } from './components/Cards/RestaurantCards/RestaurantDetails';
import { PopularRestaurants } from './components/Cards/RestaurantTypes/PopularRestaurants';
import { SupriseRestaurant } from './components/Cards/RestaurantTypes/SupriseRestaurant';
import { SupriseRestaurantDetail } from './components/Cards/RestaurantTypes/SupriseRestaurantDetail';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Provider } from './context/cardContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Provider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SupriseRestaurant />
                  <PopularRestaurants />
                  <Cuisines />
                  <AllRestaurants />
                </>
              }
            />
            <Route path="/details/:id" element={<RestaurantDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/cuisinedetail/:resttype"
              element={<CuisineDetail />}
            />
            <Route
              path="/supriseRestaurant/:id"
              element={<SupriseRestaurantDetail />}
            />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
