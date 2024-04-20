import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import {
  FirstPage,
  OrderPage,
  SuccessOrderPage,
  TypeOfFood,
  RestaurantPage,
  CategoriesPage,
  AllRestaurants,
} from "./allPages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/allRestaurants' element={<AllRestaurants />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route
            path='/pizza'
            element={<TypeOfFood className='pizzaSecondHeader ' text='Pizza' />}
          />
          <Route
            path='/burgers'
            element={
              <TypeOfFood className='burgersSecondHeader ' text='Burgers' />
            }
          />
          <Route
            path='/desserts'
            element={
              <TypeOfFood className='dessertsSecondHeader ' text='Desserts' />
            }
          />
          <Route
            path='/sushi'
            element={<TypeOfFood className='sushiSecondHeader ' text='Sushi' />}
          />
          <Route
            path='/asian'
            element={<TypeOfFood className='asianSecondHeader ' text='Asian' />}
          />
          <Route
            path='/comfort'
            element={
              <TypeOfFood className='comfortSecondHeader ' text='Comfort' />
            }
          />
          <Route
            path='/mira'
            element={
              <RestaurantPage
                restaurantClass='mira'
                restaurantName='Mira'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Pizza'
              />
            }
          />
          <Route
            path='/kara-fin'
            element={
              <RestaurantPage
                thirdHeaderClassName='thirdHeaderClassName'
                restaurantClass='kara_fin'
                restaurantName='Kara Fin'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Burgers'
              />
            }
          />
          <Route
            path='/t-kuyltje'
            element={
              <RestaurantPage
                restaurantClass='t-kuyltje'
                restaurantName='T Kuyltje'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Desserts'
              />
            }
          />
          <Route
            path='/bessarabia'
            element={
              <RestaurantPage
                restaurantClass='bessarabia'
                restaurantName='Bessarabia'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Home food'
              />
            }
          />
          <Route
            path='/hurma'
            element={
              <RestaurantPage
                restaurantClass='hurma'
                restaurantName='Hurma'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Turkish food'
              />
            }
          />
          <Route
            path='/japanese'
            element={
              <RestaurantPage
                restaurantClass='japanese'
                restaurantName='Kioto'
                description='Specialties: Sarma (wine leafs with rice)'
                rating='No reviews yet'
                buttons='Sushi'
              />
            }
          />

          <Route path='/orderPage' element={<OrderPage />} />
          <Route path='/success' element={<SuccessOrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
