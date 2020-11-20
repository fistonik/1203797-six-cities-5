import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: {}
      });
  }

  return state;
};
