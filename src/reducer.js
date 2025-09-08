// import { ADD_USER, REMOVE_USER } from "./actionTypes";

// const initialState = {
//   users: [
//     { id: 1, name: "Жека" },
//     { id: 2, name: "Андрій" },
//     { id: 3, name: "Діма" },
//   ],
// };

// function usersReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_USER:
//       return {
//         users: [...state.users, { id: Date.now(), name: action.payload }],
//       };

//     case REMOVE_USER:
//       return {
//         users: state.users.filter((u) => u.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// }




// export default usersReducer;