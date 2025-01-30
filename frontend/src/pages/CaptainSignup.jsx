import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const navigate=useNavigate();
  const {captain,setCaptain}=useContext(CaptainDataContext);

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const submitHandler = async(e) => {
    e.preventDefault();
   const captainData={
    fullname:{
      firstname:firstName,
      lastname:lastName
    },
    email:email,
    password:pass,
    vehicle:{
      color:vehicleColor,
      plate:vehiclePlate,
      capacity:vehicleCapacity,
      vehicleType:vehicleType
    }
   }
   const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

   if(response.status === 201){
    const data=response.data;

    setCaptain(data.captain);
    localStorage.setItem("token",JSON.stringify(data.token));
    navigate("/captainhome");
  }

    setEmail("");
    setPass("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="px-7 py-7 flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdWWJBoBQDG_EdlVliRSL1sj0qgXeks4nzw&s"
          alt="Uber Logo"
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
          <div className="flex gap-3 mb-5">
            <input
              className="bg-[#EEEEEE] border-none  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="bg-[#EEEEEE] border-none w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            className="bg-[#EEEEEE] border-none mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exampl.com"
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            className="bg-[#EEEEEE] border-none mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-3 mb-5">
            <input
              className="bg-[#EEEEEE] border-none w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#EEEEEE] border-none w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-3 mb-5">
            <input
              className="bg-[#EEEEEE] border-none w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
            />
            <select
              className="bg-[#EEEEEE] border-none w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] mb-3 rounded px-4 py-2  border w-full text-lg  text-white font-semibold">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have a account?
            <Link to="/captainlogin" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] text-center leading-tight mt-10 p-3">
          This site is protected by reCAPTCHA and <span className="underline">Google Policy</span> and <span className="underline">Terms of
          Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
