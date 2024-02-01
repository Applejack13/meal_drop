import {
  TopHeader,
  SecondHeader,
  ThirdHeader,
  Footer,
  RestaurantBody,
} from "../../allPages";

import "../restaurantPage/restaurantPage.scss";
export function RestaurantPage({ ...props }) {
  return (
    <div className={props.restaurantPageClass}>
      <TopHeader cartItems={props.cartItems} isVisible={true} />
      <SecondHeader className={`secondHeaderClass ${props.restaurantClass}`} />
      <ThirdHeader
        thirdHeaderClassName={props.thirdHeaderClassName}
        restaurantName={props.restaurantName}
        description={props.description}
        rating={props.rating}
        buttons={props.buttons}
      />
      <RestaurantBody
        addToCart={props.addToCart}
        count={props.count}
        increment={props.increment}
        decrement={props.decrement}
        setCount={props.setCount}
      />
      <Footer />
    </div>
  );
}
