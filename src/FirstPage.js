import {
  TopHeader,
  Banner,
  OurFavouritePicks,
  AwardWinningBanner,
  Categories,
  Footer,
} from "./allPages";

export function FirstPage() {
  return (
    <div className='FirstPage'>
      <TopHeader isVisible={true} />
      <Banner />
      <OurFavouritePicks />
      <AwardWinningBanner />
      <Categories />
      <Footer />
    </div>
  );
}
