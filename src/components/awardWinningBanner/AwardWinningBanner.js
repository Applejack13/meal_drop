import { Button } from "../button/Button";

import "./../awardWinningBanner/awardWinningBanner.scss";

export function AwardWinningBanner() {
  return (
    <div className='awardWinningBanner'>
      <div className='awardBanner'>
        <h2 className='gradient'>Award winning </h2>
        <h2 className='gradient'>The best restaurants near you!</h2>
        <Button
          text='Explore the best restaurants'
          page='/categories'
          className='large-dark'
        />
      </div>
      <div className='restaurantsCardsBanner' />
    </div>
  );
}
