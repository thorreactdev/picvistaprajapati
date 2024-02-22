import React from "react";
import AiHeroSectionData from "../../store/AiHeroSectionData";
import { Link } from "react-router-dom";

const AiHeroSection = () => {
  return (
    <div style={{ height: "60vh" }}>
      <div className="main-ai-section flex gap-32 items-center mt-32 px-14">
        <div
          style={{ width: "32%" }}
          className="flex items-center gap-5 flex-col"
        >
          <h1 className="text-3xl font-semibold capitalize text-gray-700">
            {" "}
            Explore resources by style
          </h1>
          <span className="capitalize text-gray-500 font-medium">
            Explore different styles of AI images to express your powerful ideas
            and connect with your audience
          </span>
        </div>
        <div className="ai-image-sec flex gap-3 flex-wrap">
          {AiHeroSectionData.map((aiphotos) => (
            <Link
              to={`/SingleCateory/${encodeURIComponent(
                aiphotos.text.toLowerCase()
              )}`} onClick={()=> window.scrollTo({
                top: 0,
                behavior : "smooth"
              })}
            >
              <div key={aiphotos.id} className="img-container">
                <div>
                  <img src={aiphotos.image} alt="" width={270} />
                </div>
                <div className="overlay-image">
                  <h2 className="text-xl font-medium ">{aiphotos.text}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiHeroSection;
