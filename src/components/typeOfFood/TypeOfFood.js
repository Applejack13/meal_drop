import { TopHeader, SecondHeader, Footer } from "../../allPages";

import "../typeOfFood/typeOfFood.scss";

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
