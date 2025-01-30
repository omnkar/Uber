import React from "react";

const VehiclePanel = (props) => {
  return (
    <div className="">
      <h5
        className=" text-center w-[93%]  absolute top-0 mt-10"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-semibold text-2xl mt-10">Choose a Vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 p-3 items-center justify-between  rounded-2xl"
      >
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ml-10">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm ml-10">2 mins Away</h5>
          <p className="font-normal text-xs text-gray-600 ml-10">
            Affordable,Compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">&#8377;193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 p-3 items-center justify-between rounded-2xl"
      >
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ml-0">
            Auto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm ml-0">3 mins Away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Motorcycle rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">&#8377;118.12</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 p-3 items-center justify-between  rounded-2xl"
      >
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ml-0">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm ml-0">2 mins Away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable,Compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">&#8377;65.17</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
