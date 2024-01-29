import "../categoriesPage/categoriesPage.scss";
import {
  TopHeader,
  SecondHeader,
  Footer,
  CategoriesBody,
} from "../../allPages";

export function CategoriesPage() {
  return (
    <div className="categoriesPage">
      <TopHeader />
      <SecondHeader text="Categories" className="secondHeader" />
      <CategoriesBody />
      <Footer />
    </div>
  );
}
