import React, { useContext, useState,useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token=localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
        navigate("/userlogin");
    }
  },[token]);
  return <>{children}</>;
};

export default UserProtectWrapper;
