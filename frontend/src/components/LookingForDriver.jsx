import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%]  absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className=" text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-semibold text-2xl mt-5 text-center">
       Looking for a driver
      </h3>
      <div className="flex justify-between items-center flex-col gap-2">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt=""
        />
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
        
      </div>
    </div>
  )
}

export default LookingForDriver