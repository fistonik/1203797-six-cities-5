import React from "react";
import PropTypes from "prop-types";
import CityList from "../city-list/city-list";
import OfferList from "../offer-list/offer-list";
import {offersPropTypes} from "../../propTypes";
import Header from "../header/header";
import Map from "../map/map";
import {connect} from "react-redux";
import filterOffers from "../../filterOffers";
import {ActionCreator} from "../../store/action";

const Main = (props) => {
  const {offers, className, onClickCard, city, setCity} = props;

  const offersFiltered = filterOffers(offers, city);

  const onClickCity = (newCity) => (evt) => {
    evt.preventDefault();
    setCity(newCity);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          city={city}
          onClickCity={onClickCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersFiltered.length} places to stay in {city}</b>
              <OfferList
                offers={offersFiltered}
                className={className}
                onClickCard={onClickCard}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offersFiltered}
                className="cities"
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
  onClickCard: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    offers: state.offers
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
