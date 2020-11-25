import React from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";

const OfferSort = (props) => {
  const {sort, onChangeSort} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select onChange={onChangeSort} className="places__sorting-type" id="places-sorting" defaultValue={sort}>
        {Object.entries(SortType).map(([sortType, sortName]) => (
          <option key={sortType} className="places__option" value={sortType}>{sortName}</option>
        ))}
      </select>
    </form>
  );
};

OfferSort.propTypes = {
  sort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired
};

export default OfferSort;
