import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";


const Footer = () => {
  const handleClick = () => {
    // Define the function you want to call here
  };

  return (
    <div>
      <div className="part1 text-center bg-gray-300 text-gray-800">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <div className="mt-10">
        <h3 className="pb-5 pt-10 font-semibold ">
          Do you want to expose your Products or services?
        </h3>
        </div>
        <NavLink to={`/Register`}><button className="accountbutton" onClick={handleClick}>
          CREATE AN ACCOUNT
        </button>
        </NavLink>
      </div>

      <div className="part2 bg-gray-900 flex text-white pt-8">
        
        <div className="list ">
          <div className=" w-full">
            <img
              className="logo2 w-24 h-24 ml-4 mt-5"
              src="/22.png"
              alt="winnsibha"
            />
          </div>
          <div className=" text-left">
            <p className="underlogo pl-8 pr-10 mt-1">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="flex justify-between mt-7 w-3/12 ml-8 text-2xl">
            <a href="https://www.facebook.com/groups/533642211092349" className=" rounded-full"><TiSocialFacebook /></a>
            <a  href="https://www.instagram.com/win_nsibha_mostaganem/" className=" rounded-full"><IoLogoTwitter /></a>
            <a  href="https://twitter.com/Cobratate" className=" rounded-lg"><FiInstagram /></a>

          </div>
        </div>

        <div className="list flex">
          <ul>
            <li className="titles font-semibold">Company</li>
            <li className="endinfo">home</li>
            <li className="endinfo">products</li>
            <li className="endinfo">services</li>
          </ul>
        </div>

        <div className="list flex">
          <ul>
            <li className="titles font-semibold">contact</li>
            <li className="endinfo">Why Win Nsibha?</li>
            <li className="endinfo">Partner with us</li>
            <li className="endinfo">FAQ's</li>
            <li className="endinfo">Blog</li>
          </ul>
        </div>

        <div className="list flex">
          <ul>
            <li className="titles font-semibold">Meet Us</li>
            <li className="endinfo">+00 92 1234 56789</li>
            <li className="endinfo">info@travlog.com</li>
            <li className="endinfo">205. R Street, New York</li>
            <li className="endinfo">BD23200</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
