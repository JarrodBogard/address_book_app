import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchInitData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    const error = new Error("An error has occurred");
    error.status = response.status;
    error.info = await response.json();
    throw error;
  }

  const responseData = await response.json();

  return responseData;
};

export const fetchContacts = async () => {
  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json"
  );

  if (!response.ok) {
    const error = new Error("Failed to fetch data.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  const contacts = [];

  for (const key in data) {
    // reformatting to correct data object format needed by components //
    contacts.push({
      fbId: key,
      id: Number(data[key].id),
      name: data[key].name,
      phone: data[key].phone,
      username: data[key].username,
      website: data[key].website,
      email: data[key].email,
      address: {
        street: data[key].address.street, // reconfigured/renamed from street to address on POST request
        suite: data[key].address.suite,
        city: data[key].address.city,
        zipcode: data[key].address.zipcode,
        geo: { lat: data[key].address.geo.lat, lng: data[key].address.geo.lng },
      },
      company: {
        name: data[key].company.name, // reconfigured/renamed from name to company on POST request
        bs: data[key].company.bs,
        catchPhrase: data[key].company.catchPhrase,
      },
    });
  }

  return contacts;
};

export const sendContact = async (contactData) => {
  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json",
    {
      method: "POST",
      body: JSON.stringify(contactData),
    }
  );

  if (!response.ok) {
    const error = new Error("An error has occurred");
    error.code = response.status;
    error.info = await response.json();
  }

  console.log("sent");

  const responseData = await response.json();
  return responseData;
  // return null;
};

export const deleteContact = async (id) => {
  console.log(id);
  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts/${id}.json`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const error = new Error("An error occurred");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  console.log(response);

  const responseData = await response.json();
  return responseData;
};
