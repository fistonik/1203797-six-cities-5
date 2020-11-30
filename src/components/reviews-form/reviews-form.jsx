import React from "react";
import PropTypes from "prop-types";

const REAITING_STARS = [
  {
    count: 5,
    title: `prefect`
  },
  {
    count: 4,
    title: `good`
  },
  {
    count: 3,
    title: `not bad`
  },
  {
    count: 2,
    title: `badly`
  },
  {
    count: 1,
    title: `terribly`
  }
];

const ReviewsForm = (props) => {
  const {
    onChange,
    onSubmit
  } = props;

  return (
    <form onSubmit={onSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REAITING_STARS.map((star) => (
          <React.Fragment key={star.count}>
            <input onChange={onChange} className="form__rating-input visually-hidden" name="rating" value={star.count} id={`${star.count}-stars`} type="radio"/>
            <label htmlFor={`${star.count}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea onChange={onChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewsForm;
