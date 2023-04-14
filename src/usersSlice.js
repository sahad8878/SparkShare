import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.ideas !== action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((user) => user.ideas === action.payload.ideas);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;