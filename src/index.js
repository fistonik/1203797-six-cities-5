import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  COUNT_OFFERS: 5
};

ReactDOM.render(
    <App
      countOffers={Settings.COUNT_OFFERS}
    />,
    document.querySelector(`#root`)
);
