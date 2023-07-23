import { SET_FORMDATA } from "./constants";
const initialState = {
  formData: getFormDataFromLocalStorage() || [
    {
      problems_description: "",
      diagnosed_problem: "",
      physical_trauma: "",
      mental_trauma: "",
      problem_frequency: "",
      problem_timing: "",
      others_problem_timing: "",
      problem_intensity: "",
    },
  ],
};
export default function formData(state = initialState, action) {
  switch (action.type) {
    case SET_FORMDATA:
      saveFormDataToLocalStorage(action.data);
      return { ...state, formData: action.data };
    default:
      return state;
  }
}

// Helper function to retrieve formData from localStorage
function getFormDataFromLocalStorage() {
  const formData = localStorage.getItem("formData");
  return formData ? JSON.parse(formData) : null;
}

// Helper function to save formData to localStorage
function saveFormDataToLocalStorage(formData) {
  localStorage.setItem("formData", JSON.stringify(formData));
}
