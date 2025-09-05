import { createStore } from "redux";   
import usersReducer from "./reducer"; 

const store = createStore(usersReducer);

export default store; 