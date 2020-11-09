import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  COUNT_OFFERS: 5
};

ReactDOM.render(
    <App
      countOffers={Settings.COUNT_OFFERS}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
