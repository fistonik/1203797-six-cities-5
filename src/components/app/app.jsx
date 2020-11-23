import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import {offersPropTypes, reviewsPropTypes} from "../../propTypes";

const App = (props) => {
  const {countOffers, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <Main
              countOffers={countOffers}
              className="cities"
              onClickCard={() => history.push(`/offer`)}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites"
          render={({history}) => (
            <FavoritesScreen
              offers={offers}
              className="favorites"
              onClickCard={() => history.push(`/offer`)}
            />
          )}>
        </Route>
        <Route exact path="/offer/:id?"
          render={({history}) => (
            <OfferScreen
              offers={offers}
              reviews={reviews}
              onClickCard={() => history.push(`/offer`)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewsPropTypes).isRequired
  ).isRequired
};

export default App;
