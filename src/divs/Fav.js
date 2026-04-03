import React, { useState, useEffect, createContext, useContext } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Navbar from "./Navbar";
import { FaShoppingBasket } from "react-icons/fa";
import { useFavorites } from './FavoriteContext'; // Import the context
import { NavLink } from "react-router-dom";


// Create a context to hold the count value
const CountContext = createContext();

// Custom hook to access the count value
export const useCount = () => useContext(CountContext);

const Fav = () => {
  const { favorites } = useFavorites();
  const list = [
    {
      title: "TSHIRT",
      img: "6.jpg",
      price: "",
    },
    {
      title: "vest",
      img: "5.jpg",
      price: "",
    },
    {
      title: "veste",
      img: "6.jpg",
      price: "",
    },
    {
      title: "veste",
      img: "5.jpg",
      price: "",
    },
    {
      title: "veste",
      img: "6.jpg",
      price: "",
    },
    {
      title: "veste",
      img: "5.jpg",
      price: "",
    },
    {
      title: "veste",
      img: "7.jpg",
      price: "",
    },
    {
      title: "veste ",
      img: "pro7.jpg",
      price: "",
    },
    {
      title: "veste ",
      img: "7.jpg",
      price: "",
    },
  ];

  const [count, setCount] = useState(list.length);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  return (
    <CountContext.Provider value={count}>
      <div>
        
        <div className="flex ml-10 mt-20 mb-16">
          <div className="  mt-0 text-[#23414B] ml-20">
          <FaShoppingBasket  className="w-10 h-10"/>

          </div>
          <div>
            <p className=" text-3xl font ml-5 text-[#23414B] font-semibold">
               MY PRODUCTS
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-10/12 ">
          {favorites.map((item, index) =>  (
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                <NavLink
                      to={`/Showproduct/${item.images1}/${item.images2}/${item.productname}/${item.location}`}>
                  
                  <img
                    src={'/' + item.images1}
                    alt={item.productname}
                    className="w-full h-[210px]"
                  />
                  </NavLink>
                </CardBody>
                <CardFooter className="text-small justify-between bg-slate-300">
                  <b>{item.productname}</b>
                  <p className="text-default-500">{item.location}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
       
      </div>
    </CountContext.Provider>
  );
};

export default Fav;
