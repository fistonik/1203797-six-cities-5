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

    this.onHoverOffer = this.onHoverOffer.bind(this);
  }

  onHoverOffer(activeCard) {
    this.setState({
      activeCard
    });
  }

  render() {
    const {offers, className, onClickCard} = this.props;

    const classNameList = `${className}__${className === `near-places` ? `list` : `places`}${className === `cities` ? `-list` : ``}`;

    return (
      <div className={classNameList}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className}
            onHoverOffer={this.onHoverOffer}
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
