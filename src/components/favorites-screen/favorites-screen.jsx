import React from "react";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../propTypes";
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";

const FavoritesScreen = (props) => {
  const {offers, className, onClickCard} = props;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <OfferList
                  offers={offers}
                  className={className}
                  onClickCard={onClickCard}
                />
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <OfferList
                  offers={offers}
                  className={className}
                  onClickCard={onClickCard}
                />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired
};

export default FavoritesScreen;
