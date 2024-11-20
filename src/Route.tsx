import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./rootLayout";
import About from "./pages/About";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:"/hakkimizda",
                element:<About/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)