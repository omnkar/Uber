import React from "react";

const LocationSearchPanel = (props) => {
  //sample arrya for location
  console.log(props);
  const locations = [
    "pict college,pune",
    "Saidham Society,pune",
    "City Pride Satara road,pune",
    "Bharti Vidyapeeth,katraj,pune",
  ];
  return (
    <div>
      {
      locations.map(function (elem,idx) {
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false);
        }} className="flex gap-4 p-3 border-white active:border-black rounded-xl border-2  my-2 items-center justify-start">
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium text-xl">{elem}</h4>
        </div>;
      })
      }

      {/* <div className="flex gap-4 p-3  border-white active:border-black rounded-xl border-2 my-2 items-center justify-start">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium text-xl">24B,near kapooers cafe,pune</h4>
      </div>
      <div className="flex gap-4 p-3  border-white active:border-black rounded-xl border-2 my-2 items-center justify-start">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium text-xl">24B,near kapooers cafe,pune</h4>
      </div>
      <div className="flex gap-4 p-3  border-white active:border-black rounded-xl border-2 my-2 items-center justify-start">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium text-xl">24B,near kapooers cafe,pune</h4>
      </div>
      <div className="flex gap-4 p-3  border-white active:border-black rounded-xl border-2 my-2 items-center justify-start">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium text-xl">24B,near kapooers cafe,pune</h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
