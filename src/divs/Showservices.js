import Navbar from "./Navbar";
import React, { useState } from "react";

import { useParams } from "react-router-dom";
import Landingpage from "../Landingpage.js";
import { BiMap } from "react-icons/bi";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Showservices = () => {
  const { images1, productname, location } = useParams();
  const list = [
    {
      title: "Orange",
      img: `/prof.jpg`,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/prof.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/prof.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/prof.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/prof.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/prof.jpg",
      price: "$8.00",
    },
  ];
  return (
    <div className="Showproduct">
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
      <div className="imagedesc container mx-auto mb-50 ">
        <div className="imagecontainer">
          <div className="showproduct">
            <div className="bigimg bg-white">
              <img src={"/" + images1 + ""} alt="" className="bigimgprd" />
            </div>
          </div>
        </div>
        <div className="description-cont">
          <div className="product-desc">
            <p>{productname}</p>
          </div>
          <div className="product-location">
            <p>
              <div className="flex">
              <div className="mt-2 mr-4"><BiMap /></div>
              <div>{location}</div>
              </div>
            </p>
          </div>
          <div className="product-Reviews">
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="product-stars">
            <div className="flex gap-2 items-center">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" /> (150 Reviews)
            </div>
          </div>
          <div className="reserve">
            <AwesomeButton className="resvbut" type="primary">
              reserve
            </AwesomeButton>
            <span class="button-space"> </span>
            <AwesomeButton className="likebut" type="primary">
              {" "}
              <FaHeart />
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="mt-90">
        <div className="mt-1050 flex justify-center items-center h-screen">
          <div className="gap-12 grid grid-cols-3 sm:grid-cols-3 ml-140 mt-80 w-[87%] place-items-center">
            {list.map((item, index) => (
              <Card
                className="rounded-xl w-[90%] mt-10 bg-[#e4d3c0]  "
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0 rounded-xl  flex justify-start ">
                  <div className=" flex justify-start px-6 py-4">
                    {" "}
                    <Image
                      shadow="sm"
                      alt={item.title}
                      className=" h-[140px] w-[140px] bg-cover bg-center  rounded-full  "
                      src={item.img}
                    />
                  </div>
                </CardBody>
                <CardFooter className="text-small justify-between bg-white">
                  <b className="text-3xl pl-10">{item.title}</b>
                </CardFooter>
                <CardFooter className="text-small justify-between bg-white">
                  <b className="text-base pl-6 p-0">{item.title}</b>
                </CardFooter>
                <CardFooter className="text-small justify-between bg-white">
                  <b className="text-base pl-6 p-0">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showservices;
