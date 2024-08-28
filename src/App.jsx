//app.jsx
import React from 'react'; // Importación de React
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de estilos de Bootstrap
import './App.css'; // Importación de estilos personalizados

import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Pizza from "./components/Pizza";

// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <>
      <div className='d-flex flex-colum '>
      <Navbar />
    </div>
    <div className='flex-grow-1'>
      {/*<Home />*/}
      <Pizza />
      {/*<Cart />*/}
  </div>
      <div>  
      <Footer />
      </div>
     </>
  );
};

export default App;
