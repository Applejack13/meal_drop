import "../categoriesPage/categoriesPage.css"
import { TopHeader } from "../topHeader/TopHeader"
import { SecondHeader } from "../secondHeader/SecondHeader"
import { Footer } from "../footer/Footer"
import { CategoriesBody } from "../categoriesBody/CategoriesBody"

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
