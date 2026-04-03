import React from "react";
import Footer from "./Footer";
import Navbar from "../divs/Navbar.js";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { TbRectangleVerticalFilled } from "react-icons/tb";
const Services = () => {
    const list = [
        {
          title: "jime",
          img: `/prof.jpg`,
          price: "personal trainer",
        },
        {
          title: "ali",
          img: "/user2.jpg",
          price: "abimal trainer",
        },
        {
          title: "leo",
          img: "/user3.jpg",
          price: "architect",
        },
        {
          title: "mohammed",
          img: "/prof.jpg",
          price: "car fixer",
        },
        {
          title: "aziz",
          img: "/prof.jpg",
          price: "hose cleaner",
        },
        {
          title: "molid",
          img: "/prof.jpg",
          price: "graphic designer",
        },
      ];
  return (
    <>
      

      <div> 
        <div className=" flex justify-between mx-20 my-20">
          <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
          <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card1.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
          <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card2.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
        </div>
        <div className="flex justify-between mx-20 my-20">
        <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card3.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
          <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card4.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
          <div
            className="  w-3/12 h-[430px] rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-end     "
            style={{ backgroundImage: "url(Card6.jpg)" }}
          >
            <div className="inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-1 rounded-3xl">
            <div className=" font-bold text-5xl  text-left ml-8 text-[#E5DDD2]  ">
              Pet
            </div>
            <div className=" font-bold text-5xl  text-left mb-10 ml-8 text-[#E5DDD2] ">
              Services
            </div>
            </div>

          </div>
        </div>
      </div>


      <div className="flex mx-20 my-10 ">
          <div className=" mt-2 text-[#23414B] ">
            <TbRectangleVerticalFilled  />
          </div>
          <div>
          <div className="text-left ml-2 font-bold text-[#23414B] text-xl">this month</div>
          </div>
        </div>
      
      <div className="text-left ml-20 text-5xl mb-20 mt-10 font-bold text-[#23414B]" >Best Visted Accounts</div>


      <div className=" ">
        <div className=" flex justify-center items-center h-screen ">
          <div className="gap-12 grid grid-cols-3 sm:grid-cols-3 ml-140 mt-36 w-[87%] place-items-center">
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
                  <b className="text-base pl-6 p-0">{item.price}</b>
                </CardFooter>
                <CardFooter className="text-small justify-between bg-white">
                  <b className="text-base pl-6 p-0">{item.price}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[250px]">
      <Footer></Footer>
      </div>
    </>
  );
};

export default Services;
