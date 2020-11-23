import React from "react";
import PropTypes from "prop-types";

const Cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const CityList = (props) => {
  const {city, onClickCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((curCity) => (
            <li key={curCity} className="locations__item">
              <a onClick={onClickCity(curCity)}
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
  onClickCity: PropTypes.func.isRequired
};

export default CityList;
