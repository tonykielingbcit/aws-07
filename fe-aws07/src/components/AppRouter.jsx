import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import GeneralBody from "./GeneralBody.jsx";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound />,
      // errorElement: <Layout> <GeneralBody error="Page has not been found" /> </Layout>,
      children: [
        { path: "/about", element: <GeneralBody about="about" />},
        { path: "/app", element: <App /> },
        { path: "/", element: <GeneralBody /> },
        { path: "/getAll", element: <GeneralBody action="getAll"> </GeneralBody>},
        { path: "/getOne", element: <GeneralBody action="getOne"> </GeneralBody>},
        { path: "/getOne/:itemIdParam", element: <GeneralBody action="getOne"> </GeneralBody>},
        { path: "/create", element: <GeneralBody action="create"> </GeneralBody>},
        { path: "/update", element: <GeneralBody action="update"> </GeneralBody>},
        { path: "/delete", element: <GeneralBody action="delete"> </GeneralBody>},
        { path: "*", element: <GeneralBody error="Page has not been found"> </GeneralBody>},
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
