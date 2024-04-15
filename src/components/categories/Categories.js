import React, { useEffect, useState } from "react";

import { Button, FoodCategory } from "../../allPages";

import img1 from "../../images/food1.png";
import img2 from "../../images/food2.png";
import img3 from "../../images/food3.png";
import img4 from "../../images/food4.png";
import img5 from "../../images/food5.png";
import img6 from "../../images/food6.png";
import "./../categories/categories.scss";

export function Categories() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const wrapper = document.querySelector(".wrapper");
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='categoriesWrapper'>
      <div className='textContainer'>
        <h2>Categories</h2>
        <Button
          text='View all categories'
          page='/categories'
          className='medium-ghost'
        />
      </div>
      <div className='wrapper'>
        <FoodCategory
          img={img1}
          alt='food1'
          title='Pizza'
          link='/pizza'
          className={
            isVisible ? "slide-in-right slide-in-right_1" : "slide-in-right"
          }
        />
        <FoodCategory
          img={img2}
          alt='food1'
          title='Burgers'
          link='/burgers'
          className={
            isVisible ? "slide-in-right slide-in-right_2" : "slide-in-right"
          }
        />
        <FoodCategory
          img={img3}
          alt='food1'
          title='Desserts'
          link='/desserts'
          className={
            isVisible ? "slide-in-right slide-in-right_3" : "slide-in-right"
          }
        />
        <FoodCategory
          img={img4}
          alt='food1'
          title='Sushi'
          link='/sushi'
          className={
            isVisible ? "slide-in-right slide-in-right_4" : "slide-in-right"
          }
        />
        <FoodCategory
          img={img5}
          alt='food1'
          title='Asian'
          link='/asian'
          className={
            isVisible ? "slide-in-right slide-in-right_5" : "slide-in-right"
          }
        />
        <FoodCategory
          img={img6}
          alt='food1'
          title='Comfort food'
          link='/comfort'
          className={
            isVisible ? "slide-in-right slide-in-right_6" : "slide-in-right"
          }
        />
      </div>
    </div>
  );
}
