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
import { BiCategory } from "react-icons/bi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [Location, setLocation] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");

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
      number: number,
      first_name: first_name,
      last_name: last_name,
      Location: Location,
      username: username,
      category: category,
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
        <div className="singup-form h-[920px] bg-[#B3BBBC] mt-40 ">
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
            <div className="flex">
              <div>
                <p className="input-name">first name</p>
                <input
                  type="First name"
                  className="text-sign mb-4 mr-14  bg-[#ede5dc] rounded-[2px] w-4/4"
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                />{" "}
              </div>

              <div>
                <p className="input-name">Last name</p>
                <input
                  type="Last name"
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] w-[305px] ml-02"
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="mb-4">
              <p className="input-name">User Name</p>
              <div className=" ">
                <input
                  type="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button
                  onClick={togglePasswordVisibility}
                  className=" eye  bottom-[140px]"
                ></button>
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="input-name">Email Adress</p>
                <input
                  type="Email Adress"
                  className="text-sign mb-4 mr-14  bg-[#ede5dc] rounded-[2px] w-4/4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>

              <div>
                <p className="input-name">Phone Number</p>
                <input
                  type="Phone Number"
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] w-[305px] ml-02"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="mb-4">
              <p className="input-name">Location</p>
              <div className=" ">
                <input
                  type=" Location"
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button
                  onClick={togglePasswordVisibility1}
                  className=" eye1  bottom-[140px]"
                ></button>
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="input-name">Password</p>
                <input
                  type="Password"
                  className="text-sign mb-4 mr-14  bg-[#ede5dc] rounded-[2px] w-4/4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>

              <div>
                <p className="input-name">confirm password</p>
                <input
                  type="confirm password"
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] w-[305px] ml-02"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="input-name">Category</p>
                <input
                  type="confirm password"
                  className="text-sign mb-4 mr-14  bg-[#ede5dc] rounded-[2px] w-4/4"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />{" "}
              </div>

              <div>
                <p className="input-name">type</p>
                <select
                  id="fruits"
                  name="fruits"
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] w-[305px] ml-02"
                  
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] w-[305px] ml-02"
                  >
                    Select a Category
                  </option>
                  <option value="apple">Products</option>
                  <option value="banana">Services</option>
                </select>
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
export default Register;
