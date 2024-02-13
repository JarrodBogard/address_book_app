import { json } from "react-router-dom";

export const getContactsLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw json({ message: "An error occurred." }, { status: 500 });
  }
  return response;
};

export const savedContactsLoader = async () => {
  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json"
  );

  if (!response.ok) {
    throw json({ message: "Failed to fetch contacts." }, { status: 500 });
  }

  const data = await response.json();

  const contacts = [];

  for (const key in data) {
    // reformatting to correct data object format needed by components //
    contacts.push({
      id: Number(data[key].id),
      name: data[key].name,
      phone: data[key].phone,
      username: data[key].username,
      website: data[key].website,
      email: data[key].email,
      address: {
        street: data[key].address, // reconfigured/renamed from street to address on POST request
        suite: data[key].suite,
        city: data[key].city,
        zipcode: data[key].zipcode,
        geo: { lat: data[key].lat, lng: data[key].lng },
      },
      company: {
        name: data[key].company, // reconfigured/renamed from name to company on POST request
        bs: data[key].bs,
        catchPhrase: data[key].catchPhrase,
      },
    });
  }

  return contacts;
};
