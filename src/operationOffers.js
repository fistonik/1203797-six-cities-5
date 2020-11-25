export const filterOffers = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city && offer;
  });
};

export const sortOffers = (offers, sort) => {
  switch (sort) {
    case `to-high`:
      return [].concat(offers).sort((a, b) => a.price - b.price);
    case `to-low`:
      return [].concat(offers).sort((a, b) => b.price - a.price);
    case `top-rated`:
      return [].concat(offers).sort((a, b) => b.raiting - a.raiting);
    default:
      return offers;
  }
};
