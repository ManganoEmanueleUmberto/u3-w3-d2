import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favouritesArray: [],
};

const favouritesReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      console.log(state.favouritesArray);
      return {
        ...state,
        favouritesArray: [...state.favouritesArray, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouritesArray: state.favouritesArray.filter((company) => company._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
