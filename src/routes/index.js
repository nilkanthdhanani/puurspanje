import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
]
)

export default router;