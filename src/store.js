// import { createStore } from "redux";   
// import usersReducer from "./reducer"; 

// const store = createStore(usersReducer);

// export default store; 

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
