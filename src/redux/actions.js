import { SET_FORMDATA } from "./constants";
export const setFormdata = (data) => {
  return {
    type: SET_FORMDATA,
    data: data,
  };
};
