import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import {offersPropTypes} from "../../propTypes";
import Header from "../header/header";
import Map from "../map/map";

const Main = (props) => {
  const {countOffers, offers, className, onClickCard} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffers} places to stay in Amsterdam</b>
              <OfferList
                offers={offers}
                className={className}
                onClickCard={onClickCard}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired
};

export default Main;
