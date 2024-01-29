import { TopHeader, SecondHeader, Footer } from "../../allPages";

import "../typeOfFood/typeOfFood.scss";

export function TypeOfFood({ className, text }) {
  return (
    <>
      <TopHeader />
      <SecondHeader className={`${className} foodSecondHeader`} text={text} />
      <Footer />
    </>
  );
}
