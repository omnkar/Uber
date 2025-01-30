import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";
const UserSignup = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUSer={
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:pass
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUSer);

    if(response.status===201){
      const data=response.data;

      setUser(data.user);
      localStorage.setItem("token",JSON.stringify(data.token));
      navigate("/home");
    }
    
    setEmail("");
    setPass("");
    setFirstName("");
    setLastName("");

    

  };
  return (
    <div className="p-7 flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
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
          <button className="bg-[#111] mb-3 rounded px-4 py-2  border w-full text-lg  text-white font-semibold">
            Sign up
          </button>
          <p className="text-center">
            Already have a account?
            <Link to="/userlogin" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-3 mt-10">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;
