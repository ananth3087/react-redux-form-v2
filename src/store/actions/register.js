import * as ActionTypes from "../actionTypes";
export const addPersonalDetails = (
  firstName,
  secondName,
  contactNumber,
  email
) => {
  return {
    type: ActionTypes.ADD_PERSONAL_DETAILS,
    payload: { firstName, secondName, contactNumber, email },
  };
};

export const addAddressDetails = (currentAddress, permanentAddress) => {
  return {
    type: ActionTypes.ADD_PERSONAL_DETAILS,
    payload: { currentAddress, permanentAddress },
  };
};

export const addExperienceDetails = (experienceDetails) => {
  return {
    type: ActionTypes.ADD_EXPERIENCE_DETAILS,
    payload: { experienceDetails: experienceDetails },
  };
};
