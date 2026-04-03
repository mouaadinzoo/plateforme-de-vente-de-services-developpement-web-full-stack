import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import Navbar from "./divs/Navbar.js";
import Windowbar from "./divs/Windowbar";
import Searchbar from "./divs/Searchbar";
import Showservices from "./divs/Showservices";
import Addproduct from "./divs/Addproduct";
import Card from "./divs/Card.js";
import Slider from "react-slick";
import "./card.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast, { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import Showproduct from "./divs/Showproduct.js";
import Landingpage from "../src/Landingpage.js";

import Singup from "./divs/Singup.js";
import Profil from "./divs/Profil.js";
import Signin from "./divs/Signin";
import Fav from "./divs/Fav.js";
import Products from "./divs/Products.js";
import Register from "./divs/Register.js";
import Reserve from "./divs/Reserve.js";
import { CookiesProvider } from "react-cookie";
import Services from "./divs/Services.js";
import Search from "./divs/Search.js";
import { useState } from "react";
import { FavoriteProvider } from './divs/FavoriteContext';




function App() {
  
  const [isSignedIn, setIsSignedIn] = useState();
  const username = localStorage.getItem("username") || "";
  useEffect(() => {
    if (localStorage.getItem("isSignedIn") === "true") {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  },[])
  return (
    <div className="App">
      
      <BrowserRouter>
      <Toaster position="top-center" />
        <div>
          {" "}
          <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} username={username} />
        </div>
        <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="/Showproduct/:images1?/:images2?/:productname?/:location?/:images3?/:images4?/:desc?/"
            element={<Showproduct />}
          />
          <Route path="/Singup" element={<Singup />} />
          <Route
            path="/Showservices/:images1?/:productname?/:location?/:desc?/"
            element={<Showservices />}
          />
          <Route path="/Profil" element={<Profil />} />
          <Route
            path="/Signin"
            element={
              <Signin isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
            }
          />
          <Route path="/Fav/:count?/" element={<Fav />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Search" element={<Search />} />
          
          

        </Routes>
        </FavoriteProvider>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
export default App;
