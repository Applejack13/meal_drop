import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import FirstPage from "./FirstPage"
import CategoriesPage from "./components/categoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TypeOfFood from "./components/typeOfFood/TypeOfFood"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/pizza"
          element={<TypeOfFood className="pizzaSecondHeader" text="Pizza" />}
        />
        <Route
          path="/burgers"
          element={
            <TypeOfFood className="burgersSecondHeader" text="Burgers" />
          }
        />
        <Route
          path="/desserts"
          element={
            <TypeOfFood className="dessertsSecondHeader" text="Desserts" />
          }
        />
        <Route
          path="/sushi"
          element={<TypeOfFood className="sushiSecondHeader" text="Sushi" />}
        />
        <Route
          path="/asian"
          element={<TypeOfFood className="asianSecondHeader" text="Asian" />}
        />
        <Route
          path="/comfort"
          element={
            <TypeOfFood className="comfortSecondHeader" text="Comfort" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
