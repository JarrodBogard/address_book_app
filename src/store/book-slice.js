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
    //    without loaders/actions    //
    // getInitData: (state, action) => {
    //   state.data = action.payload || [];
    // },
    getContacts: (state, action) => {
      const data = action.payload;
      const contactsArray = [];
      for (const key in data) {
        contactsArray.push({
          fbId: key,
          id: Number(data[key].id),
          name: data[key].name,
          phone: data[key].phone,
          username: data[key].username,
          website: data[key].website,
          email: data[key].email,
          address: {
            street: data[key].address,
            suite: data[key].suite,
            city: data[key].city,
            zipcode: data[key].zipcode,
            geo: { lat: data[key].lat, lng: data[key].lng },
          },
          company: {
            name: data[key].company,
            bs: data[key].bs,
            catchPhrase: data[key].catchPhrase,
          },
        });
      }
      state.contacts = contactsArray || [];
      state.totalContacts = state.contacts.length || 0;

      // state.contacts = action.payload.contacts || []; // without loaders/actions
      // state.totalContacts = action.payload.totalContacts || 0; // without loaders/actions
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
