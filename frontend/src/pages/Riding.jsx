import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full">
           <i className="ri-home-5-line text-lg font-bold"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Onkar</h2>
            <h4 className="text-xl font-semibold -mt-2 -mb-1">MH 20 BN 1982</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col gap-2">
          <div className="w-full mt-5">
           
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lh font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahmadabad
              </p>
            </div>
          </div>
            <div className="flex items-center gap-5 p-3 ">
              <i className="ri-bank-card-2-fill text-lg"></i>
              <div>
                <h3 className="text-lh font-medium">&#8377;193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold rounded-2xl p-2 mt-5">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
