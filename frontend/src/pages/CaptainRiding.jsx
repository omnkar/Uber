import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {
    const [finishRidePanel, setfinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePanel]
      );

  return (
    <div className="h-screen relative">
        
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/captainhome"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-bold"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center relative justify-between bg-yellow-400">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setfinishRidePanel(true);
        }}
      >
        <i className=" text-3xl ri-arrow-up-wide-fill"></i>
      </h5>
        <h4 className='text-xl font-semibold mt-4'>4 KM Away</h4>
        <button  className=" bg-green-600 text-white font-semibold rounded-lg  px-10 p-3 mt-5">Complete Ride</button>
      </div>
     
      <div className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10" ref={finishRidePanelRef}>
        <FinishRide setfinishRidePanel={setfinishRidePanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding