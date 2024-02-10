import { json } from "react-router-dom";

export const addContactsAction = async ({ request }) => {
  console.log(request.body);
  const formData = await request.formData();
  console.log(formData, "data");
  const contactData = Object.fromEntries(formData);

  console.log(contactData);

  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/contacts.json",
    {
      method: "POST",
      body: JSON.stringify(contactData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Failed to add contact." }, { status: 500 });
  }

  console.log("sent");

  return null;
};
