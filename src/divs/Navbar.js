import { FaHeart } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { Badge, Button } from "@nextui-org/react";
import "../index.css";
import Fav from "../divs/Fav.js";
import { useCount } from "../divs/Fav.js";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Navigate } from "react-router-dom"; // Import Redirect component
import { toast } from "react-hot-toast";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useCookies } from "react-cookie"; // Import useCookies

const Navbar = ({
  color,
  backgroundStyle,
  isSignedIn,
  setIsSignedIn,
  username,
}) => {
  console.log("isSignedIn:", isSignedIn); // Add this line
  const count = useCount();
  const [query, setQuery] = useState("");
  const count1 = count;
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate(); // Use navigate hook
  const notify = () => toast.success("logout successful");
  let handleSubmit = async () => {
    console.log("sending request");
    const result = await fetch(
      "http://127.0.0.1:8000/api/search?query=" + query,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await result.json();
    let products = data["products"];
    console.log(products);
    if (result.status == 200) {
      navigate(`/Search`, { state: { products } });
      console.log("good search in ");
      setSearchResults(products);
      
    } else {
      console.log("something went wrong");
    }
  };
  const handleLogout = () => {
    // Perform logout actions here, like removing tokens and updating state
    toast.success("LOGOUT successful");
    removeCookie("access_token");
    setIsSignedIn(false);
    localStorage.setItem("isSignedIn", false);
  };

  return (
    <nav
      className="Navbar "
      style={{ backgroundColor: color, ...backgroundStyle }}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <img className="logo" src="/2.png" alt="winnsibha"></img>

      <div className="elem">
       
        <NavLink to={`/`}>
          <a href="/" className="sa mx-12">
            home
          </a>
        </NavLink>
        <NavLink to={`/Products`}>
          <a href="/" className="sa mx-12">
            products
          </a>
        </NavLink>
        <NavLink to="/Services" className={"sa"}>
          {" "}
          <a href="/" className="sa mx-12 ml-6">
            services
          </a>
        </NavLink>
        {!isSignedIn && (
          <NavLink to="/Singup" className={"sa hover:bg-red-500"}>
            sign up
          </NavLink>
        )}
      </div>
      <div className="likeser">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        ></link>

        <div>
          <form action="">
            <input
              className="input6"
              type="search"
              required
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onSubmit={() => handleSubmit()}
            ></input>
            <i onClick={() => handleSubmit()} class="fa fa-search"></i>
            <a href="javascript:void(0)" id="clear-btn"></a>
          </form>
        </div>
        <div className="ml-2 mr-10">
          {isSignedIn && (
            <div>
              <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      src="profil.jpg"
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    className=" bg-[#B3BBBC] rounded-xl"
                    aria-label="Profile Actions"
                    variant="flat"
                  >
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">
                        <a>Signed in as</a>
                      </p>
                      <p className="font-semibold">{username}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                      <NavLink to={`/Register`}>My Settings</NavLink>
                    </DropdownItem>

                    <DropdownItem key="logout" color="danger">
                      My products
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      <NavLink to={`/Addproduct`}>add products</NavLink>
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          )}
        </div>

        <Badge content={count1} shape="circle" color="red" className="mr-10 ">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <NavLink to={`/Fav`} className="rounded-full bg-transparent">
              <FaHeart size={24} color="white" />
            </NavLink>
          </Button>
        </Badge>
      </div>
    </nav>
  );
};
export default Navbar;
