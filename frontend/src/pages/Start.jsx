import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://media.istockphoto.com/id/847334914/photo/traffic-light-yellow.webp?a=1&b=1&s=612x612&w=0&k=20&c=HNv5Vv4KfzgHHw7D0mF2c43B4RuaWrp8-bcoTiEcBrI=)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link to="/userlogin" className="flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
