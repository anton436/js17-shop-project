import React from 'react';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import NotFoundPage from '../pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const MainRoute = () => {
  const PUBLIC_ROTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
    {
      link: '/admin',
      element: <AdminPage />,
      id: 2,
    },
    {
      link: '*',
      element: <NotFoundPage />,
      id: 3,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoute;
