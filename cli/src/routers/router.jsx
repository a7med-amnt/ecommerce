import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/Main";
import Signin from "#pages/signin/Signin";
import Home from "#pages/home/Home";

export default function () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "signin",
                    element: <Signin />
                }
            ]
        }
    ]);
    
    return <RouterProvider router={router} />;
}
