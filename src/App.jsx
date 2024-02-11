import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/Root";

import HomePage from "./pages/Home";
// without loaders/actions //
// import ContactsPage from "./pages/Contacts";

import { addContactsAction } from "./util/actions";
import { getContactsLoader, savedContactsLoader } from "./util/loaders";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: getContactsLoader },
        {
          path: "contacts",
          children: [
            {
              index: true,
              // without loaders/actions //
              // element: <ContactsPage />,
              // with loaders/actions //
              element: <HomePage />,
              loader: savedContactsLoader,
            },
          ],
        },
        { path: "add", action: addContactsAction },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
