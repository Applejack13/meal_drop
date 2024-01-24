import "../categoriesPage/categoriesPage.css"
import { TopHeader, SecondHeader, Footer, CategoriesBody } from "../../allPages"

export function CategoriesPage() {
  return (
    <div className="categoriesPage">
      <TopHeader />
      <SecondHeader text="Categories" className="secondHeader" />
      <CategoriesBody />
      <Footer />
    </div>
  )
}
