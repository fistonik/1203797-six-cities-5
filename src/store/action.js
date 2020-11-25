export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORT: `SET_SORT`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setSort: (sortType) => ({
    type: ActionType.SET_SORT,
    payload: sortType
  }),
  setActiveOffer: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offerId
  })
};
