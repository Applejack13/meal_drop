import {
  TopHeader,
  Banner,
  OurFavouritePicks,
  AwardWinningBanner,
  Categories,
  Footer,
} from "./allPages";

export function FirstPage(props) {
  const { cartItems, addToCart } = props;
  return (
    <div className='FirstPage'>
      <TopHeader isVisible={true} cartItems={cartItems} />
      <Banner />
      <OurFavouritePicks cartItems={cartItems} addToCart={addToCart} />
      <AwardWinningBanner />
      <Categories />
      <Footer />
    </div>
  );
}
