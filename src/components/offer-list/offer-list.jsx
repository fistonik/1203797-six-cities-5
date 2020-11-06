import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offersPropTypes} from "../../propTypes";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: false
    };
  }
  render() {
    const {offers, className, onClickCard} = this.props;
    const onHoverOffer = (id) => {
      this.setState({
        activeCard: id
      });
    };

    return (
      <div className={`${className}__${className === `near-places` ? `list` : `places`}${className === `cities` ? `-list` : ``}`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className}
            onHoverOffer={onHoverOffer}
            onClickCard={onClickCard}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired
};

export default OfferList;
