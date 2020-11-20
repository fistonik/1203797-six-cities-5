export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: {}
  })
};
