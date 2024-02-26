import { createSlice } from "@reduxjs/toolkit";

import { animals } from "../mocks";

const petSlice = createSlice({
  name: "pet",
  initialState: animals,
  reducers: {
    addPet: (state, action) => {
      return [
        ...state,
        {
          id: Math.random(),
          ...action.payload

        },
      ];
    },
    editPet: (state, action) => {
      let newState = [...state];
      var foundIndex = newState.findIndex((el) => el.id === action.payload.id);
      newState[foundIndex] = action.payload;
      return [...newState];
    },
    removePet: (state, action) => {
      return [...state.filter((el) => el.id !== action.payload)];
    },
  },
});

export const { addPet, editPet, removePet } = petSlice.actions;

export const getPets = (state) => state.pets;

export default petSlice.reducer;
