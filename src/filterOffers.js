const filterOffers = (offers, city) => {
  return offers.filter((offer) => {
    return offer.city.name === city && offer;
  });
};

export default filterOffers;
