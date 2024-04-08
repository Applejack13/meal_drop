import { Button } from "../../allPages";

import ladies from "../../images/BothLadies.svg";

import "../banner/banner.scss";

export function Banner() {
  return (
    <div className='banner'>
      <h2>
        Hungry?<span> Find your next meal</span>
      </h2>
      <Button
        text='View all restaurants'
        page='/allRestaurants'
        className='large-dark'
      />
      <div className='images'>
        <img src={ladies} alt='ladies_img' />
      </div>
    </div>
  );
}
