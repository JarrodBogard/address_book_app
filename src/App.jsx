import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/Root";

import HomePage from "./pages/Home";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
