import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="grid grid-cols-2 gap-8 p-2">
        <button className="basis-1/2 bg-green-400 hover:bg-green-500 text-black font-bold p-4 m-4 md:m-5 border-b-4 border-green-700 hover:border-green-500 rounded">
          Compare
        </button>
        <button className="basis-1/2 bg-green-400 hover:bg-green-500 text-black font-bold p-4 m-4 md:m-5 border-b-4 border-green-700 hover:border-green-500 rounded">
          Insights
        </button>
        <button className="basis-1/2 bg-green-300 hover:bg-green-400 text-black font-bold p-4 m-4 md:m-5 border-b-4 border-green-700 hover:border-green-500 rounded">
          Trends
        </button>
        <button className="basis-1/2 bg-green-300 hover:bg-green-400 text-black font-bold p-4 m-4 md:m-5 border-b-4 border-green-700 hover:border-green-500 rounded">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Home;
