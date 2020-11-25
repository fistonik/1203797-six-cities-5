import React from "react";
import PropTypes from "prop-types";
import CityList from "../city-list/city-list";
import OfferList from "../offer-list/offer-list";
import {offersPropTypes} from "../../propTypes";
import Header from "../header/header";
import Map from "../map/map";
import {connect} from "react-redux";
import {filterOffers, sortOffers} from "../../operationOffers";
import {ActionCreator} from "../../store/action";
import OfferSort from "../offer-sort/offer-sort";

const Main = (props) => {
  const {
    offers,
    className,
    onClickCard,
    city,
    setCity,
    sort,
    setSort,
    activeOffer,
    setActiveOffer
  } = props;

  const offersFiltered = filterOffers(offers, city);
  const offersSorted = sortOffers(offersFiltered, sort);

  const onClickCity = (newCity) => (evt) => {
    evt.preventDefault();
    setCity(newCity);
  };

  const onChangeSort = (evt) => {
    setSort(evt.target.value);
  };

  const onHoverOffer = (offerId) => {
    setActiveOffer(offerId);
  };

  const onHoverLeaveOffer = () => {
    setActiveOffer(0);
  };


  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!offersSorted.length && `page__main--index-empty` || ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          city={city}
          onClickCity={onClickCity}
        />
        <div className="cities">
          <div className={`cities__places-container ${!offersSorted.length && `cities__places-container--empty` || ``} container`}>
            <section className={`cities__${!offersSorted.length && `no-` || ``}places places`}>
              {offersSorted.length &&
                <>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersSorted.length} places to stay in {city}</b>
                  <OfferSort
                    sort={sort}
                    onChangeSort={onChangeSort}
                  />
                  <OfferList
                    offers={offersSorted}
                    className={className}
                    onClickCard={onClickCard}
                    onHoverOffer={onHoverOffer}
                    onHoverLeaveOffer={onHoverLeaveOffer}
                  />
                </>
              ||
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              }
            </section>
            <div className="cities__right-section">
              {offersSorted.length &&
                <Map
                  offers={offersSorted}
                  className="cities"
                  activeOffer={activeOffer}
                />
              }
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
  setCity: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  activeOffer: PropTypes.number.isRequired,
  setActiveOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    offers: state.offers,
    sort: state.sort,
    activeOffer: state.activeOffer
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
  setSort(sortType) {
    dispatch(ActionCreator.setSort(sortType));
  },
  setActiveOffer(offerId) {
    dispatch(ActionCreator.setActiveOffer(offerId));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
