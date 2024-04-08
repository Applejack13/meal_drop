import { CarouselSlider, CarouselItems } from "../../allPages";

import "./../ourFavouritePicks/ourFavouritePicks.scss";

export function OurFavouritePicks() {
  const customStyles = {
    carouselContainer: "carouselContainer",
    carouselItem: "carouselItem",
    customText: "customText",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='OurFavouritePicks'>
      <div className='OurFavouritePicks__title'>
        <h2>Our favourite picks</h2>
      </div>
      <CarouselSlider
        links={CarouselItems.map((item) => item.link)}
        items={CarouselItems}
        customStyles={customStyles}
        customText={customStyles.customText}
        showDots={false}
        responsive={responsive}
        ssr={false}
        infinite={false}
        customTransition='transform 400ms ease-in-out'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["tablet", "mobile"]}
      />
    </div>
  );
}
