import {
  TopHeader,
  SecondHeader,
  Footer,
  RestaurantBody,
} from "../../allPages";

import "../restaurantPage/restaurantPage.scss";
export function RestaurantPage({ ...props }) {
  return (
    <div className={props.restaurantPageClass}>
      <TopHeader cartItems={props.cartItems} isVisible={true} />
      <SecondHeader
        className={`secondHeaderClass ${props.restaurantClass}`}
        {...props}
      />
      <RestaurantBody {...props} />
      <Footer />
    </div>
  );
}
