import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://st2.depositphotos.com/1017187/8609/i/450/depositphotos_86094158-stock-photo-coffee-farm-in-manizales-colombia.jpg",
    caption: "Slide 3",
  },
];

const Banner = () => {
  return (
    <div className="">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Banner;
