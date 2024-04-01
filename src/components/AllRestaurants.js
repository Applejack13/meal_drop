import {
  ExchangeRates,
  Footer,
  TopHeader,
  // ErrorBoundary,
  // Loading,
} from "../allPages";

export function AllRestaurants() {
  return (
    <div className='allRestaurants'>
      <TopHeader />
      <ExchangeRates />
      {/* <ErrorBoundary />
      <Loading /> */}
      <Footer />
    </div>
  );
}
