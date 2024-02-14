import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Headers/Header";
import Hom from "./pagination/Hom";
import PizzaHistori from "./components/PizzaHistory/PizzaHistori";
import Nothfound from "./pagination/Nothfound";
import Cartitem from "./components/Cartitem";
import { useState } from "react";
import Cart from "./pagination/Cart";
import Pagination from "./components/Pagination";


function App() {

  return (
    <div className="App">
      <div className="big_container">
        <div className="container">
          <Header />

          <div className="big_liner"></div>
          <Routes>
            <Route path="/" element={<Hom/>} />
            <Route path="PizaHistori/:id" element={<PizzaHistori/>}/>
            <Route path="Cart" element={<Cart/>}/>
             <Route path="*" element={<Nothfound/>}/>
             <Route path="pagination" element={<Pagination/>}/>
            
              
           
      
          </Routes>
          
         
        </div>
      </div>
    </div>
  );
}

export default App;
