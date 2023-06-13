import React from 'react';
import MainRoute from './routes/MainRoute';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;
