import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/SharedComponents/Login/Login";
import Error from "../components/SharedComponents/Error/Error";
import AllProducts from "../Pages/AllProducts/AllProducts";
import SinglePage from "../Pages/SinglePage/SinglePage";
import Purchase from "../Pages/Purchase/Purchase";
import SignUp from "../components/SharedComponents/SignUp/SignUp";
import AddProducts from "../Pages/AddProducts/AddProducts";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Blog from "../Pages/Blaog/Blog";
import MyFoods from "../Pages/MyFoods/MyFoods";
import MyOrderedFood from "../Pages/MyOrderedFood/MyOrderedFood";
import UpdateForm from "../Pages/UpdateForm/UpdateForm";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () =>
          fetch(
            "https://restaurant-management-server-liard.vercel.app/allProducts"
          ),
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/singleCard/:id",
        element: (
          <PrivateRoute>
            <SinglePage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-liard.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-liard.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "/purchase/:id",
        element: <Purchase></Purchase>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-liard.vercel.app/purchase/${params.id}`
          ),
      },
      {
        path: "/myFoods/:email",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-liard.vercel.app/myFood/${params?.email}`
          ),
      },
      {
        path: "/myOrderedFood/:email",
        element: (
          <PrivateRoute>
            <MyOrderedFood></MyOrderedFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-liard.vercel.app/buy/${params.email}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default Router;
