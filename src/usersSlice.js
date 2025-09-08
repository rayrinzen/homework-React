import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Жека" },
  { id: 2, name: "Андрій" },
  { id: 3, name: "Діма" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push({ id: Date.now(), name: action.payload });
    },
    removeUser: (state, action) => {
      return state.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
