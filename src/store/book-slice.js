import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  contacts: [],
  totalContacts: 0,
  changed: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    // getInitData: (state, action) => {
    //   // without loaders/actions //
    //   state.data = action.payload || [];
    //   state.totalContacts = action.payload.totalContacts || 0;
    // },
    getContacts: (state, action) => {
      state.contacts = action.payload || [];
      state.totalContacts = action.payload.length || 0;
      // state.totalContacts = action.payload.totalContacts || 0;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      state.totalContacts++;
      state.changed = true;
    },
    removeContact: (state, action) => {
      if (state.contacts.length === 0) return;
      // const existingContact = state.contacts.find(contact => contact.id === action.payload)
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.totalContacts--;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
