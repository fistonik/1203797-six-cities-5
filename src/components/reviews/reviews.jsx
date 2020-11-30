import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";
import {reviewsPropTypes} from "../../propTypes";
import ReviewsForm from "../reviews-form/reviews-form";
import withReviewsFrom from "../../hocs/with-reviews-from/with-reviews-from";

const ReviewsFromWrapped = withReviewsFrom(ReviewsForm);

const Reviews = (props) => {
  const {
    reviews
  } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      <ReviewsFromWrapped />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewsPropTypes).isRequired
  ).isRequired
};

export default Reviews;
