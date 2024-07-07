import { createBrowserRouter, Navigate } from "react-router-dom";
import AddRestaurant from "./components/add-restaurant";
import AllRestuarants from "./components/all-restaurants";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
const router = createBrowserRouter([
    { index: true, element: <Navigate to="/login" replace /> },
    {
        path: "/",
        element: <Dashboard />,
        children: [
            { index: true, element: <Navigate to="/add-restaurant" replace /> },
            {
                path: "/add-restaurant",
                element: <AddRestaurant />,
            },
            {
                path: "/all-restaurants",
                element: <AllRestuarants />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    
]);

export default router;