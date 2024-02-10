import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/Root";

import HomePage from "./pages/Home";
import ContactsPage from "./pages/Contacts";

import { addContactsAction } from "./util/actions";
import { contactsLoader } from "./util/loaders";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: contactsLoader },
        {
          path: "contacts",
          children: [{ index: true, element: <ContactsPage /> }],
        },
        { path: "add", action: addContactsAction },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
