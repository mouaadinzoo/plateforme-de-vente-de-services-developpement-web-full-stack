import React, { useEffect, useState } from "react";
import Navbar from "../divs/Navbar.js";
import Footer from "../divs/Footer.js";
import { useParams } from "react-router-dom";
import Landingpage from "../Landingpage.js";
import { BiMap } from "react-icons/bi";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { IoIosSquare } from "react-icons/io";
import Slider from "react-slick";
import { useFavorites } from '../divs/FavoriteContext';
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
const Showproduct = () => {
  const { images1, images2, productname, location } = useParams();

  const [bigImgSrc, setBigImgSrc] = useState("/" + images1 + "");
  const { addFavorite } = useFavorites(); // Use the context
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const changeImg = (src) => {
    setBigImgSrc(src);
  };
  const list = [
    {
      title: "Orange",
      img: "/5.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/5.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/5.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/5.jpg",
      price: "$5.30",
    },
  ];
  const handleAddToFavorites = () => {
    addFavorite({ productname, images1, images2, location });
  };

  return (
    <div className="Showproduct ">
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div className="nav-pr">
      
      </div>
      <div className="imagedesc">
        <div className="imagecontainer">
          <div className="showproduct">
            <div className="container.img">
              <div>
                <img
                  className="primg"
                  src="/8.jpg"
                  onClick={() => changeImg("/8.jpg")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src="/5.jpg"
                  onClick={() => changeImg("/5.jpg")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src={"/" + images2 + ""}
                  onClick={() => changeImg("/" + images2 + "")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src="/7.jpg"
                  onClick={() => changeImg("/7.jpg")}
                />
              </div>
            </div>
            <div className="bigimg">
              <img src={bigImgSrc} alt="" className="bigimgprd" />
            </div>
          </div>
        </div>
        <div className="description-cont">
          <div className="product-desc">
            <p>{productname}</p>
          </div>
          <div className="product-location flex">
            <div className=" mr-4">
              <BiMap />
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div className="product-Reviews">
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="product-stars ">
            <div className="flex gap-2 items-center">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" /> (150 Reviews)
            </div>
          </div>
          <div className="reserve">
          <NavLink to={`/Reserve`}><AwesomeButton className="resvbut" type="primary">
              reserve
            </AwesomeButton>
        </NavLink>
            
            <span class="button-space"> </span>
            <AwesomeButton className="likebut" type="primary"  onPress={handleAddToFavorites}>
              {" "}
              <FaHeart />
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="text-left mb-12 flex flex-row "> 
         <div className=" align-middle mt-3 text-[#E5DDD2] ml-20"><IoIosSquare /></div><div><p className=" text-3xl font ml-2 text-[#E5DDD2] font-semibold">Contact the owner</p></div>
      </div>
      <div className="flex justify-center">
      <div className="w-full h-80  bg-[#f4ebdf] flex  ">
        <div>
          {" "}
          <img
            src="/prof.jpg "
            className=" h-56 w-56 rounded-full mt-16 ml-28"
          ></img>
        </div>
        <div className=" mt-24 ml-20 text-left">
          <p className="mb-16 text-2xl">User name</p>
          <p className="mb-4"> Phone number</p>
          <p> Email</p>
        </div>
      </div>
      </div>
      <div className=" ">
      <div className="text-left flex mt-36"> 
        <div className=" align-middle mt-3 text-[#E5DDD2] ml-20"><IoIosSquare /></div><div><p className=" text-3xl font ml-2 text-[#E5DDD2] font-semibold">You may also like</p></div>
      </div>
      <div className="flex justify-center mb-36">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-10/12 mt-20 ">
          {list.map((item, index) => (
            <Card
              className=" mx-5"
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[280px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default Showproduct;
