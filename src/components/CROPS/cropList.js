import React from "react";
import Banner from "../HOME/Banner";
import CropDetails from "./cropDetails";

const listings = [
  {
    id: 1,
    description: "coffee crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 2,
    description: "coconut & copra crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 3,
    description: "Cashew Nut crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 4,
    description: "Maize crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 5,
    description: "Tur crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 6,
    description: "Cotton crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 7,
    description: "Onion crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 8,
    description: "Tomato crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 9,
    description: "coffee crop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
  {
    id: 1,
    description: "Arecanutcrop",
    image:
      "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
  },
];

const CropList = () => {
  const listingComponent = listings.map((listing) => {
    return (
      <CropDetails
        key={listing.id}
        name={listing.description}
        image={listing.image}
        className="flex flex-col"
      />
    );
  });
  return (
    <>
      <Banner />
      <ul className="card">{listingComponent}</ul>
    </>
  );
};

export default CropList;
