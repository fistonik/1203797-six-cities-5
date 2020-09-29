import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {countOffers} = props;

  return (
    <Main
      countOffers={countOffers}
    />
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired
};

export default App;
