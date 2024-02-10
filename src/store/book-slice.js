import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  totalContacts: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getContacts: (state, action) => {
      state.contacts = [...action.payload] || [];
      state.totalContacts = action.payload.length || 0;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
