import { bookActions } from "./book-slice";

export const fetchInitData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch contacts.");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const data = await fetchData();
      dispatch(bookActions.getInitData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchContactsData = () => {
  return async (dispatch) => {
    const fetchContacts = async () => {
      const response = await fetch(
        "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch contacts.");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const contacts = await fetchContacts();
      dispatch(bookActions.getContacts(contacts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendContactData = (contact) => {
  return async () => {
    const sendContacts = async () => {
      const response = await fetch(
        "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "PUT",
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send contact.");
      }
    };

    try {
      await sendContacts();
    } catch (error) {
      console.log(error);
    }
  };
};
