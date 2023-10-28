import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import FirstPage from "./FirstPage"
import CategoriesPage from "./components/categoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TypeOfFood from "./components/typeOfFood/TypeOfFood"
import AllRestaurants from "./components/allRestaurants/AllRestaurants"

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
