import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data.map((u) => ({ id: u.id, name: u.name }));
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [
      { id: 1, name: "Жека" },
      { id: 2, name: "Андрій" },
      { id: 3, name: "Діма" },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (name) => {
        const id = nanoid();
        return { payload: { id, name } };
      },
    },
    removeUser: (state, action) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
