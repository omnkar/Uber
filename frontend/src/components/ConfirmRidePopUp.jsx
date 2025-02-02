import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState("");
    const submitHandler=()=>{
        e.preventDefault();
    }
  return (
    <div className="">
      <h5
        className="p-1 text-center w-[93%]  absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className=" text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-semibold text-2xl mt-5">
        Confirm this ride to start
      </h3>
      <div className="flex items-center justify-between p-3 mt-4 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h2 className="text-xl font-medium">Onkar Muthe</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lh font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahmadabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lh font-medium">Third wave coffe</h3>
              <p className="text-sm -mt-1 text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
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

        <div className="mt-6 w-full">
          <form action="" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input value={otp} onChange={(e)=>{
                setOtp(e.target.value)
            }}className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full -mt-3" type="text" placeholder="Enter OTP" />
            <Link
              to="/captain-riding"
              onClick={() => {
                props.setConfirmRidePopupPanel(true);
              }}
              className="w-full flex justify-center text-center bg-green-600 text-white font-semibold rounded-2xl p-3 mt-7"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full bg-red-600 text-white font-semibold rounded-2xl p-3 mt-3"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
