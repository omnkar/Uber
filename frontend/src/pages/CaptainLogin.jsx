import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const {captain,setCaptain}=useContext(CaptainDataContext);
  const navigate=useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPass(e.target.value);
  };
  const submitHandler = async(e) => {
    console.log("in submit handler");
    e.preventDefault();
    
    const captainData={
      email:email,
      password:pass
    }

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);

    if(response.status===200){
      const data=response.data;
      console.log(data.captain);
      setCaptain(data.captain);
      localStorage.setItem("token",JSON.stringify(data.token));
      navigate("/captainhome");
  }
    setEmail("");
    setPass("");
  };
  return (
    <div className="p-7  flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-2"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdWWJBoBQDG_EdlVliRSL1sj0qgXeks4nzw&s"
          alt="Uber Logo"
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            required
            placeholder="email@exampl.com"
            onChange={(e) => handleEmailInput(e)}
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={pass}
            required
            placeholder="password"
            onChange={(e) => handlePassInput(e)}
          />
          <button className="bg-[#111] mb-3 rounded px-4 py-2  border w-full text-lg  text-white font-semibold">
            Login
          </button>
          <p className="text-center">
            Join a fleet?
            <Link to="/captainsignup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/userlogin"
          className="bg-[#d0e22c] flex items-center mt-40 justify-center mb-5 rounded px-4 py-2 border w-full text-lg  text-white font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
