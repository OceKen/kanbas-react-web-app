import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Module/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  },
});
export default store;