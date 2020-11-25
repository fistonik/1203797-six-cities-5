import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offers,
  activeOffer: 0,
  sort: `popular`
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_SORT:
      return extend(state, {
        sort: action.payload
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
  }

  return state;
};
