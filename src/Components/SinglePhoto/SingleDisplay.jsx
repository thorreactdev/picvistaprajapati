import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import avatar from "../../assets/avatr-icon-removebg-preview.png";
import "../SinglePhoto/SIngleDisplay.css";
import NewNavbar from "../NewNavbar/NewNavbar";
import { AuthValue } from "../../store/auth";
import DownloadIconWithLoader from "../TypingAnimation/DownloadIconWithLoader";
import Footer from "../Footer/Footer";
import PhotoMightLike from "../PhotoMightLike/PhotoMightLike";

const SingleDisplay = () => {
  const lastsearchquery = localStorage.getItem("lastsearchquery");
  const searchType = localStorage.getItem('searchType');
  console.log(lastsearchquery , searchType);
  const {
    downloadImage,
    fetchPhotoDetails,
    photoDetails,
    loader,
    loader2,
    large2x,
    large,
    medium,
    small,
    portrait,
  } = AuthValue();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchPhotoDetails(id);
  }, [id]);

  return (
    <div onClick={window.scrollTo({
      top: 0, behavior: 'smooth'
    })}>
      <NewNavbar />
      <div className="px-4 mt-4 main-single-div mb-4">
        <div className="flex gap-7">
          {loader ? (
            <div className="skeleton-loader"></div>
          ) : (
            <img
              src={photoDetails.src?.landscape}
              alt={photoDetails.photographer}
              width="1180px"
              style={{ objectFit: "cover" }}
              className="single-image"
            />
          )}

          <div className="mt-4">
            <span className="text-2xl font-medium text-blue-500">
              Download Here
            </span>
            <div className="download-section mt-7">
              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Original</span>
                  <span className="text-sm text-gray-500">Full</span>
                </div>
                <DownloadIconWithLoader
                  onClick={() => downloadImage("original", id)}
                  load={loader2}
                />
              </div>
              <div className="line2"></div>

              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Large2x</span>
                  <span className="text-sm text-gray-500">940 x 650 px</span>
                </div>
                <DownloadIconWithLoader
                  onClick={() => downloadImage("large2x", id)}
                  load={large2x}
                />
              </div>
              <div className="line2"></div>

              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Large</span>
                  <span className="text-sm text-gray-500">650 x 940 px</span>
                </div>
                <DownloadIconWithLoader
                  onClick={() => downloadImage("large", id)}
                  load={large}
                />
              </div>
              <div className="line2"></div>

              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Medium</span>
                  <span className="text-sm text-gray-500">350x 350 px</span>
                </div>

                <DownloadIconWithLoader
                  onClick={() => downloadImage("medium", id)}
                  load={medium}
                />
              </div>
              <div className="line2"></div>

              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Small</span>
                  <span className="text-sm text-gray-500">130 x 130px</span>
                </div>
                <DownloadIconWithLoader
                  onClick={() => downloadImage("small", id)}
                  load={small}
                />
              </div>
              <div className="line2"></div>

              <div className="flex gap-28 justify-between cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span>Portrait</span>
                  <span className="text-sm text-gray-500">1200 x 800 px</span>
                </div>
                <DownloadIconWithLoader
                  onClick={() => downloadImage("portrait", id)}
                  load={portrait}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-7 mt-7 flex justify-between" style={{width : "1190px"}}>
        <div className="flex items-center gap-3">
          <img src={avatar} width="59px" alt="" className="avatar-logo"/>
          <div className="flex flex-col gap-2">
            <span className="text-sm">{photoDetails?.photographer}</span>
            <a href={photoDetails?.photographer_url} target="_blank" rel="noreferrer" className="hover:text-blue-600">
             <span className="text-sm border rounded px-3 py-1 bg-gray-200">Follow</span> 
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <span className="text-sm border rounded px-5 py-3 bg-gray-200 hover:bg-gray-300">Add To Collection</span>
          <div className="flex items-center gap-2 text-sm border rounded px-3 bg-gray-200 hover:bg-gray-300" style={{width : "90px"}}>
            <i className='bx bx-heart text-lg '></i>
            <span className="py-3">{photoDetails?.liked ? "Liked" : "Like"}</span>
          </div>
          <span className="text-sm border rounded px-5 py-3 bg-gray-200 hover:bg-gray-300">Share</span>
          
        </div>
      </div>

      <div className="px-6 text-xl font-semibold">
        <h1 className="mb-7">{photoDetails?.alt}</h1>
      </div>
      <PhotoMightLike lastsearchquery={lastsearchquery} searchType={searchType} />
     
      <Footer/>
    </div>
  );
};

export default SingleDisplay;
