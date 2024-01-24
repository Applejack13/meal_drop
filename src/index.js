import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ReactDOM from "react-dom/client"

import {
  FirstPage,
  OrderPage,
  SuccessOrderPage,
  TypeOfFood,
  RestaurantPage,
  CategoriesPage,
  HOCWrapper,
  AllRestaurants,
} from "./allPages"

import "./index.css"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const WrappedComponent = HOCWrapper(RestaurantPage)
const WrappedFirstPage = HOCWrapper(FirstPage)
const WrappedOrderPage = HOCWrapper(OrderPage)
const WrappedSuccessOrderPage = HOCWrapper(SuccessOrderPage)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<WrappedFirstPage />} />
        <Route path="/allRestaurants" element={<AllRestaurants />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/pizza"
          element={
            <TypeOfFood
              className="pizzaSecondHeader foodSecondHeader"
              text="Pizza"
            />
          }
        />
        <Route
          path="/burgers"
          element={
            <TypeOfFood
              className="burgersSecondHeader foodSecondHeader"
              text="Burgers"
            />
          }
        />
        <Route
          path="/desserts"
          element={
            <TypeOfFood
              className="dessertsSecondHeader foodSecondHeader"
              text="Desserts"
            />
          }
        />
        <Route
          path="/sushi"
          element={
            <TypeOfFood
              className="sushiSecondHeader foodSecondHeader"
              text="Sushi"
            />
          }
        />
        <Route
          path="/asian"
          element={
            <TypeOfFood
              className="asianSecondHeader foodSecondHeader"
              text="Asian"
            />
          }
        />
        <Route
          path="/comfort"
          element={
            <TypeOfFood
              className="comfortSecondHeader foodSecondHeader"
              text="Comfort"
            />
          }
        />
        <Route
          path="/mira"
          element={
            <WrappedComponent
              restaurantClass="mira"
              restaurantName="Mira"
              description="Specialties: Sarma (wine leafs with rice)"
              rating="No reviews yet"
              buttons="Pizza"
            />
          }
        />
        <Route
          path="/kara-fin"
          element={
            <WrappedComponent
              thirdHeaderClassName="thirdHeaderClassName"
              restaurantClass="kara_fin"
              restaurantName="Kara Fin"
              description="Specialties: Sarma (wine leafs with rice)"
              rating="No reviews yet"
              buttons="Burgers"
            />
          }
        />
        <Route
          path="/t-kuyltje"
          element={
            <WrappedComponent
              restaurantClass="t-kuyltje"
              restaurantName="T Kuyltje"
              description="Specialties: Sarma (wine leafs with rice)"
              rating="No reviews yet"
              buttons="Desserts"
            />
          }
        />
        <Route path="/orderPage" element={<WrappedOrderPage />} />
        <Route path="/success" element={<WrappedSuccessOrderPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
