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
      console.log(action.payload, "payload(((((((((((((((((((()");
      state.contacts = [...action.payload] || [];
      state.totalContacts = action.payload.length || 0;
      console.log(state.contacts, "state contacts(((((((((((((");
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
