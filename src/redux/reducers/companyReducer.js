import { GET_COMPANY } from "../actions";

const initialState = {
  content: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;
