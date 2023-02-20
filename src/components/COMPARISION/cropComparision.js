import React from "react";

const CropComparision = () => {
  return (
    <div className="container flex flex-col">
      <button className="basis-1/2 bg-green-400 hover:bg-green-500 text-black font-bold p-4 m-4 md:m-5 border-b-4 border-green-700 hover:border-green-500 rounded-sm">
        Crop Comparision
      </button>
      <div>
        <h4>Price Outlook</h4>
        <p>Monthly price outlook</p>
        <p>Quarterly price outlook</p>
        <p>Seasonal price outlook</p>
      </div>
      <div>
        <h4>Summery & Review</h4>
        <p>Monthly Summery & Review</p>
        <p>Quarterly Summery & Review</p>
        <p>Seasonal Summery & Review</p>
      </div>
      <div>
        <h4>Bull & Bear Factor</h4>
        <p>Monthly Bull & Bear Factor</p>
        <p>Quarterly Bull & Bear Factor</p>
        <p>Seasonal Bull & Bear Factor</p>
      </div>
    </div>
  );
};

export default CropComparision;
