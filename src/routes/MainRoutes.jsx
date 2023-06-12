import React from "react";
<<<<<<< HEAD
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import EditProductPage from "../pages/EditProductPage";
=======
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
<<<<<<< HEAD
=======
    ,
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
    {
      link: "/products",
      element: <ProductPage />,
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
<<<<<<< HEAD
    {
      link: "/details/:id",
      element: <ProductDetails />,
      id: 6,
    },
  ];
=======
  ];

>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
