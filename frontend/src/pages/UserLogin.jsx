
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const [userData,setUserData]=useState({});

    const handleEmailInput=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassInput=(e)=>{
        setPass(e.target.value);
    }
    const submitHandler=(e)=>{
        console.log("in submit handler")
        e.preventDefault();
        setUserData({
            email:email,
            password:pass
        });
        setEmail("");
        setPass("");
    }
  return (
    <div className="p-7  flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-2"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form action="" onSubmit={(e)=>submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            required
            placeholder="email@exampl.com"
            onChange={(e)=>handleEmailInput(e)}
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={pass}
            required
            placeholder="password"
            onChange={(e)=>handlePassInput(e)}
          />
          <button className="bg-[#111] mb-3 rounded px-4 py-2  border w-full text-lg  text-white font-semibold">
            Login
          </button>
          <p className="text-center">New Here?<Link to="/usersignup" className="text-blue-600">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link to="/captainlogin" className="bg-[#10b461] flex items-center justify-center mb-5 mt-40 rounded px-4 py-2 border w-full text-lg  text-white font-semibold">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
