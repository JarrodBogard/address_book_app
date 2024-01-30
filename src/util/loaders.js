import { json } from "react-router-dom";

export const contactsLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw json({ message: "An error occurred." }, { status: 500 });
  }

  return response;
};
