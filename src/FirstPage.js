import React from "react"
import TopHeader from "./components/topHeader/TopHeader"
import Banner from "./components/banner/Banner"
import OurFavouritePicks from "./components/ourFavouritePicks/OurFavouritePicks"
import AwardWinningBanner from "./components/awardWinningBanner/AwardWinningBanner"
import Categories from "./components/categories/Categories"
import "./index.css"
import Footer from "./components/footer/Footer"

function FirstPage() {
  return (
    <div className="FirstPage">
      <TopHeader />
      <Banner />
      <OurFavouritePicks />
      <AwardWinningBanner />
      <Categories />
      <Footer />
    </div>
  )
}

export default FirstPage
