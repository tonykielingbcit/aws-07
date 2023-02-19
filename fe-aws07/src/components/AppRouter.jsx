import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import NotFound from "./NotFound.jsx";
import About from "./About.jsx";
import GeneralBody from "./GeneralBody.jsx";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/app", element: <App /> },
        { path: "/login", element: <div>LOGIN</div> },
        { path: "/", element: <GeneralBody /> },
        { path: "/getAll", element: <GeneralBody action="getAll"> Get All Items </GeneralBody>},
        { path: "/getOne", element: <GeneralBody action="getOne"> Get One Item </GeneralBody>},
        { path: "/create", element: <GeneralBody action="create"> Create </GeneralBody>},
        { path: "/update", element: <GeneralBody action="update"> Update </GeneralBody>},
        { path: "/delete", element: <GeneralBody action="delete"> Delete </GeneralBody>},
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
