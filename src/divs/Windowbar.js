import React, { useState, useEffect } from "react";

const Windowbar = () => {
  const images = ["2222.jpg", "jjj.jpg", "3333.jpg"];
  const [bgimg, setbgimg] = useState(images[0]);

  useEffect(() => {
    let currentindex = 0;

    // Function to change background image
    const changebg = () => {
      currentindex = (currentindex + 1) % images.length;
      setbgimg(images[currentindex]);
    };

    // Initial delay before starting the interval
    const initialDelay = 4000; // 4 seconds delay
    const intervalDelay = 4000; // 4 seconds interval

    // Set initial delay before starting interval
    const timeout = setTimeout(() => {
      changebg(); // Change to the next image immediately
      const interval = setInterval(changebg, intervalDelay); // Start the interval
      return () => clearInterval(interval); // Cleanup function
    }, initialDelay);

    return () => clearTimeout(timeout); // Cleanup function
  }, [images]); // useEffect dependency

  return (
    <div className="Windowbar px-4">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div
        className="bo"
        style={{
          backgroundImage: `url(${bgimg})`,
          transition: "background-image 2s ease-in-out", // Define transition
        }}
      >
        <h1 className="hh">
          Let your search<br></br> find its place!
        </h1>
      </div>
    </div>
  );
};

export default Windowbar;
