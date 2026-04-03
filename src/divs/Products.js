import React from "react";
import Footer from "./Footer";
import Navbar from "../divs/Navbar.js";
import { IoIosSquare } from "react-icons/io";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
const Products = () => {
  const list = [
    {
      title: "Orange",
      img: "pro7.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "pro7.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "pro7.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "pro7.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "pro7.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "pro7.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "pro7.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "pro7.jpg",
      price: "$12.20",
    },
  ];
  const data = [
    {
      name: `Paris jackit`,
      img1: `cl2-removebg-preview.png`,
      img2: `55.jpg`,
      review: ``,
      description: ``,
      location: `city122`,
      profilname: `mouaad`,
    },
    {
      name: `Messi t-shirt`,
      img1: `6-removebg-preview.png`,
      img2: `66.jpg`,
      review: ``,
      description: ``,
      location: `london`,
      profilname: `mohhamed`,
    },
    {
      name: `Man high sport puma t-shirt`,
      img1: `7-removebg-preview.png`,
      img2: `77.jpg`,
      review: ``,
      description: ``,
      location: `alger`,
      profilname: `leo`,
    },
    {
      name: `Football shoe`,
      img1: `8-removebg-preview.png`,
      img2: `88.jpg`,
      review: ``,
      description: ``,
      location: `mosta`,
      profilname: `luis`,
    },
    {
      name: `Under armor cap`,
      img1: `9-removebg-preview.png`,
      img2: `99.jpg`,
      review: ``,
      description: ``,
      location: `amizour`,
      profilname: `clix`,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="mb-20"> </div>
      <div className="flex ml-10 mt-20 mb-16">
        <div className=" align-middle mt-3 text-[#23414B] ml-20">
          <IoIosSquare />
        </div>
        <div>
          <p className=" text-3xl font ml-2 text-[#23414B] font-semibold">
            Contact the owner
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="  w-11/12 h-[697px] flex justify-betweenm-3">
          <div className=" bg-red-500 w-3/5 h-6/6 m-3">
            <img
              src="Frame1.jpg"
              className="w-full h-full object-cover"
              alt="Product Image"
            />
          </div>
          <div className=" flex-col">
            <div className=" bg-blue-300 h-80 m-3">
              <img
                src="Frame3.png"
                className="w-full h-full object-cover"
                alt="Product Image"
              />
            </div>
            <div className="flex">
              <div className="bg-blue-100 w-[330px] h-[328px] m-3 relative">
                <img
                  src="Frame2.png"
                  className="w-full h-full object-cover"
                  alt="Product Image"
                />
              </div>
              <div className=" bg-blue-500 w-[330px] h-[328px] m-3">
                <img
                  src="Frame4.png"
                  className="w-full h-full object-cover"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-10 mt-20 mb-16">
        <div className=" align-middle mt-3 text-[#23414B] ml-20">
          <IoIosSquare />
        </div>
        <div>
          <p className=" text-3xl font ml-2 text-[#23414B] font-semibold">
            Contact the owner
          </p>
        </div>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-16 h-[1090px] ">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="mb-24 "
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[332px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between flex-col bg-white pb-20">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="cont-card">
        <div className="slider">
          <div className="slider-cont">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="product-card bg-orange-50 ">
                  
                    <NavLink
                      to={`/Showproduct/${d.img1}/${d.img2}/${d.name}/${d.location}`}
                    >
                      <img
                        src={d.img1}
                        className="product-image bg-orange-50  "
                      />
                    </NavLink>
                  
                  <div className="product-details">
                    <h3 className="productname">{d.name}</h3>
                    <div className="seller-info">
                      <div>
                        <img src={d.img1} className="seller-profile-pic" />
                      </div>
                      <div className="seller-details">
                        <p className="profilname">{d.profilname}</p>
                        <span className="profillocation">{d.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="cont-card">
        <div className="slider">
          <div className="slider-cont">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="product-card bg-orange-50 ">
                  <NavLink
                    to={`/Showproduct/${d.img1}/${d.img2}/${d.name}/${d.location}`}
                  >
                    <img
                      src={d.img1}
                      className="product-image bg-orange-50  "
                    />
                  </NavLink>

                  <div className="product-details">
                    <h3 className="productname">{d.name}</h3>
                    <div className="seller-info">
                      <div>
                        <img src={d.img1} className="seller-profile-pic" />
                      </div>
                      <div className="seller-details">
                        <p className="profilname">{d.profilname}</p>
                        <span className="profillocation">{d.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div></div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Products;
