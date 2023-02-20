import React from "react";


const CropDetails = ({ image, name }) => {
  return (
    <>

      <li className="flex flex-col">
        <h4>{name}</h4>
        <img src={image} alt={name} />
      </li>
    </>
  );
};

export default CropDetails;
