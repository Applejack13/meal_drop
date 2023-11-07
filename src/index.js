import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import FirstPage from "./FirstPage"
import CategoriesPage from "./components/categoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TypeOfFood from "./components/typeOfFood/TypeOfFood"
import AllRestaurants from "./components/allRestaurants/AllRestaurants"
import RestaurantPage from "./components/restaurantPage/RestaurantPage"
import { useLocation } from "react-router-dom"
import OrderPage from "./components/orderPage/OrderPage"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
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
          element={
            <RestaurantPage
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
            <RestaurantPage
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
            <RestaurantPage
              restaurantClass="t-kuyltje"
              restaurantName="T Kuyltje"
              description="Specialties: Sarma (wine leafs with rice)"
              rating="No reviews yet"
              buttons="Desserts"
            />
          }
        />
        <Route path="/orderPage" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
