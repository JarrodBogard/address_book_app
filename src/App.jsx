import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/Root";

import HomePage from "./pages/Home";

import { contactsLoader } from "./util/loaders";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: contactsLoader },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
