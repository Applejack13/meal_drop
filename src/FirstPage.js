import {
  TopHeader,
  Banner,
  OurFavouritePicks,
  AwardWinningBanner,
  Categories,
  Footer,
} from "./allPages"

export function FirstPage(props) {
  const { cartItems, addToCart, decrement, increment, setCount, count } = props
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
