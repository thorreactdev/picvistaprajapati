import React from "react";
import PhotosData from "../../store/PhotsData";
import "./PhotoSection.css";
import { Link } from "react-router-dom";

const PhotosSection = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="flex flex-col gap-2 items-center pt-12">
          <h1 className="uppercase text-center text-black font-semibold text-2xl">
            The Right Photo For Every Moment
          </h1>
          <span
            className="capitalize text-lg font-medium"
            style={{ color: "#777777" }}
          >
            Surf categories of professional photos to express your ideas and
            connect with your audience
          </span>
        </div>
        <div className="photos flex gap-8 flex-wrap items-center justify-center">
          {PhotosData.map((photo) => {
            return (
              <Link to={`/PhotoCategory/${encodeURIComponent(photo.text.toLowerCase())}`}>
                <div className="main-photo-div">
                  <img
                    src={photo.image}
                    alt=""
                    width="310px"
                    className="image-card-div"
                  />
                  <div className="overlay"></div>
                  <h1 className="capitalize font-medium text-lg text-center mt-7">
                    {photo.text}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotosSection;
