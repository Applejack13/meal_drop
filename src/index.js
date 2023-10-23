import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import FirstPage from "./FirstPage"
import CategoriesPage from "./components/categoriesPage/CategoriesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
