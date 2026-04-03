import Navbar from "./Navbar";
import "../singup.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { FaGoogle } from "react-icons/fa6";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import Signin from "../divs/Signin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { useCookies, cookies, setCookie, removeCookie } from "react-cookie";

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = useState(false);
  const [password1, setPassword1] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  let handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };
    let result = await fetch(
      "http://127.0.0.1:8000/api/register",

      {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        mode: "cors",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    result = await result.json();
    console.log(result);
    let accessToken = result["access_token"];
    let refreshToken = result["refresh_token"];
    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);

    if (result.status == 201) {
      console.log("user Created Succesfully ");
    } else {
      console.log("sorry");
    }
  };
  return (
    <div className="sign">
      <div className="singup ">
        <div className="singup-form h-[687px] bg-[#B3BBBC]  ">
          <link
            href="https://fonts.googleapis.com/css?family=Inter"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Jost"
            rel="stylesheet"
          ></link>
          <div className="caa">
            <h1 className="font-bold text-3xl mb-6">Create an account</h1>
          </div>
          <div className="as flex ">
            <div>
              {" "}
              <p>Already have an account? </p>
            </div>
            <div>
              <NavLink to={`/Signin`}>
                <a className="fc ml-1 ">Sign in</a>
              </NavLink>
            </div>
          </div>
          <div>
            <button type="submit" className="google-button">
              <div className="google">
                <FaGoogle className="google-icon" />
                <div className="google-text">Sign up with google</div>
              </div>
            </button>
          </div>
          <div className="or-with-lign">
            <div className="or-lign">
              <div class="line"></div>
              <div class="text-or">Or</div>
              <div class="line"></div>
            </div>
          </div>
          <div className="boxes">
            <div>
              <p className="input-name">email</p>
              <input
                type="email"
                className="text-sign mb-4  bg-[#ede5dc] rounded-[2px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
            </div>
            <div className="mb-4">
              <p className="input-name">password</p>
              <div className=" ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button
                  onClick={togglePasswordVisibility}
                  className=" eye  bottom-[140px]"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="input-name">password</p>
              <div className=" ">
                <input
                  type={showPassword1 ? "text" : "password"}
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button
                  onClick={togglePasswordVisibility1}
                  className=" eye1  bottom-[140px]"
                >
                  {showPassword1 ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="cont-button">
              <button
                type="submit"
                className="continue-button"
                onClick={() => handleSubmit()}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
export default Singup;
