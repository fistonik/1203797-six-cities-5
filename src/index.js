import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import {reducer} from "./store/reducer";

const Settings = {
  COUNT_OFFERS: 5
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        countOffers={Settings.COUNT_OFFERS}
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
