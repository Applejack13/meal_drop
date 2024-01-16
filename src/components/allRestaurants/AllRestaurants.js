import "../allRestaurants/allRestaurants.css"
import { TopHeader } from "../topHeader/TopHeader"
import { Footer } from "../footer/Footer"
import { ExchangeRates } from "../exchangeRates/ExchangeRates"

export const AllRestaurants = () => {
  return (
    <div className="allRestaurants">
      <TopHeader />
      <ExchangeRates />
      <Footer />
    </div>
  )
}
