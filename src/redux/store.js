import { configureStore } from "@reduxjs/toolkit";
import formData from "./reducers";
export default configureStore({
  reducer: formData,
});
