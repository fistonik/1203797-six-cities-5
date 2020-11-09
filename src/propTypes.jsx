import PropTypes from "prop-types";

const offersPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  raiting: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired
  }).isRequired,
  inside: PropTypes.array.isRequired
};

const reviewsPropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired
};

export {offersPropTypes, reviewsPropTypes};
