import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const ideaSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    addIdea: (state, action) => {
      state.push(action.payload);
    },
    editIdea: (state, action) => {
      const { id, name, idea } = action.payload;
      const existingIdea = state.find((idea) => idea.id === id);
      if (existingIdea) {
        existingIdea.name = name;
        existingIdea.idea = idea;
      }
    },
    deleteIdea: (state, action) => {
      const { id } = action.payload;
      const existingIdea = state.find((idea) => idea.id === id);
      if (existingIdea) {
        return state.filter((idea) => idea.id !== id);
      }
    },
  },
});

export const { addIdea, editIdea, deleteIdea } = ideaSlice.actions;
export default ideaSlice.reducer;
