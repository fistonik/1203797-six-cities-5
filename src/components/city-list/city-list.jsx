import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const CityList = (props) => {
  const {city, setCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((curCity) => (
            <li key={curCity} className="locations__item">
              <a onClick={(evt) => {
                evt.preventDefault();
                setCity(curCity);
              }}
              className={`locations__item-link tabs__item ${city === curCity && `tabs__item--active`}`}>
                <span>{curCity}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    city: state.city
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
