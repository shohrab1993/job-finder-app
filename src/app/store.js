import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/jobs/jobsSlice";

const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});

export default store;
