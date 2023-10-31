import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import FirstPage from "./FirstPage"
import CategoriesPage from "./components/categoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TypeOfFood from "./components/typeOfFood/TypeOfFood"
import AllRestaurants from "./components/allRestaurants/AllRestaurants"
import RestaurantPage from "./components/restaurantPage/RestaurantPage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
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
          element={<RestaurantPage restaurantClass=" mira " />}
        />
        <Route
          path="/kara-fin"
          element={<RestaurantPage restaurantClass=" kara_fin " />}
        />
        <Route
          path="/t-kuyltje"
          element={<RestaurantPage restaurantClass=" t-kuyltje " />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
