import { createSlice } from "@reduxjs/toolkit";
import { adopters } from "../mocks";

const adopterSlice = createSlice({
  name: "adopters",
  initialState: adopters,
  reducers: {
    removeAdopter: (state=[...adopters], action) => {
      return [...state.filter((el) => el.id !== action.payload)];
    },
  }
  
});

export const { removeAdopter } = adopterSlice.actions;

export const getAdopters = (state) => state.adopters;

export default adopterSlice.reducer;
