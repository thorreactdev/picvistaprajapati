import React from "react";
import "./Hero3.css";
import right from "../../assets/right@2x.png";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <>
      <div className="Hero3-Main flex ">
        <div className="flex flex-col gap-5 pt-20 w-7/12 px-4">
          <h1 className="text-4xl font-semibold w-4/6">
            Transform Your Ideas Into Art With Real-Time AI Generator
          </h1>
          <span className="text-lg font-medium">
            Sketch Any Image with AI real-time generator
          </span>
          <Link to="/aiimages" onClick={()=>{
            window.scrollTo({
              top :0,
              behavior : "smooth"
            })
          }}>
            <div className="cursor-pointer mt-3">
              <button className="bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded">
                Try PICV!STA Ai
              </button>
            </div>
          </Link>
        </div>
        <div className="pt-12 w-1/2">
          <img src={right} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero3;
