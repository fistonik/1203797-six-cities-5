import React from "react";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../propTypes";

const OfferCard = (props) => {
  const {
    id,
    title,
    type,
    price,
    raiting,
    previewImage,
    isPremium,
    isFavorite
  } = props.offer;

  const {onHoverOffer, className, onClickCard} = props;

  return (
    <article
      className={`${className}__${className === `cities` ? `place-` : ``}card place-card`}
      onMouseEnter={() => onHoverOffer(id)}
      onClick={() => onClickCard()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`${className}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite && `place-card__bookmark-button--active`} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${raiting / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(offersPropTypes).isRequired,
  onHoverOffer: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired
};

export default OfferCard;
