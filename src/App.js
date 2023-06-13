import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
<<<<<<< HEAD
import MainRoutes from "./components/routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
=======
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b

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
