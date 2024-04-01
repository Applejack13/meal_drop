import { TopHeader, SecondHeader, Footer } from "../allPages";

import "../../scss/light-theme/typeOfFood.scss";

export function TypeOfFood({ ...props }) {
  return (
    <>
      <TopHeader />
      <SecondHeader
        className={`${props.className} foodSecondHeader`}
        text={props.text}
      />
      <Footer />
    </>
  );
}
