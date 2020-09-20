import * as ActionTypes from "../actionTypes";
const intialState = {
  firstName: null,
  secondName: null,
  contactNumber: null,
  email: null,
  currentAddress: null,
  permanentAddress: null,
  experienceDetails: null,
};

const registerReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSONAL_DETAILS:
    case ActionTypes.ADD_ADDRESS_DETAILS: {
      const payload = action.payload;
      return { ...state, ...payload };
    }
    case ActionTypes.ADD_EXPERIENCE_DETAILS: {
      const payload = action.payload;
      const updatedState = {
        ...state,
        experienceDetails: payload.experienceDetails,
      };
      console.log(updatedState);
      alert(JSON.stringify(updatedState));
      return updatedState;
    }
    default: {
      return state;
    }
  }
};
export default registerReducer;
