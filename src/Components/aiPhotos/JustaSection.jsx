import React from "react";
import smallkid from "../../aiiamgesfold/smallkid.png";

const JustaSection = () => {
  return (
    <div className="mb-14">
      <div className="bg-image-just px-20">
        <div className="flex gap-52 items-center">
          <div className="text-white flex flex-col gap-4  pt-20">
            <span className="text-lg">Bring your own world to life</span>
            <h1 className="text-2xl font-semibold ">
              Craft unique images with the new AI image generator
            </h1>
            <div className="text-white mt-4">
          <button
            className="font-medium px-10 py-3 rounded"
            style={{ backgroundColor: "#4949e7" }}
          >
            Start Creating With Ai
          </button>
        </div>
          </div>
          <div className="pt-4 ml-52">
            <img src={smallkid} alt="" width="230px" height="100px"/>
          </div>
          
        </div>

        
      </div>
    </div>
  );
};

export default JustaSection;
