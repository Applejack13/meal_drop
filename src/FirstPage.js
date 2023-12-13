import React from "react"
import TopHeader from "./components/topHeader/TopHeader"
import Banner from "./components/banner/Banner"
import OurFavouritePicks from "./components/ourFavouritePicks/OurFavouritePicks"
import AwardWinningBanner from "./components/awardWinningBanner/AwardWinningBanner"
import Categories from "./components/categories/Categories"
import "./index.css"
import Footer from "./components/footer/Footer"

function FirstPage({
  cartItems,
  addToCart,
  decrement,
  increment,
  setCount,
  count,
}) {
  return (
    <div className="FirstPage">
      <TopHeader isVisible={true} cartItems={cartItems} />
      <Banner />
      <OurFavouritePicks
        cartItems={cartItems}
        addToCart={addToCart}
        decrement={decrement}
        increment={increment}
        setCount={setCount}
        count={count}
      />
      <AwardWinningBanner />
      <Categories />
      <Footer />
    </div>
  )
}

export default FirstPage
