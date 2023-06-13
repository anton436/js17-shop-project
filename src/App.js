import React from 'react';
import MainRoute from './routes/MainRoute';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
