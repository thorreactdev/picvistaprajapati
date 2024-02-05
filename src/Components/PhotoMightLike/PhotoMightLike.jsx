import React, { useEffect, useState } from "react";
import { AuthValue } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../PhotoMightLike/PhotoMightLike.css";

const PhotoMightLike = ({ lastsearchquery, searchType }) => {
  const { apiKey } = AuthValue();
  console.log(apiKey);

  //state variable
  const [relatedPhoto, setRelatedPhoto] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  console.log(relatedPhoto);


  //functionality Logic

  const fetchRelatedPhotoVideo = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/${
          searchType === "videos" ? "videos/search" : "v1/search"
        }?query=${lastsearchquery}&per_page=18&orientation=square`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setRelatedPhoto(data.videos || data.photos);
      } else {
        toast.error("Error Fetching You Might Also Like Section");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToNextGroup = () => {
    setStartIndex((prevIndex) => (prevIndex + 2) % relatedPhoto.length);
  };

  // Function to go to the previous group of images
  const goToPreviousGroup = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 2 + relatedPhoto.length) % relatedPhoto.length
    );
  };






  useEffect(() => {
    if (lastsearchquery) {
      fetchRelatedPhotoVideo();
    }
  }, [lastsearchquery, searchType]);

  return (

    <div className="mt-20">
      <h1 className="px-5 text-3xl font-bold text-blue-600">You Might Also Like</h1>
      <div className="relative overflow-hidden my-7 px-4">
        {relatedPhoto.length > 0 ? (
          <div className="flex items-center">
            <button
              onClick={goToPreviousGroup}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-2xl text-center"
            >
                &lt;
              
            </button>
            <div className="flex space-x-4 overflow-hidden">
              {relatedPhoto.slice(startIndex, startIndex + 6).map((photo) => (
                <div key={photo.id} className="w-1/6">
                  {searchType === "videos" && photo?.video_files ? (
                    <Link to={`/SingleVideoPage/${photo?.video_files[0]?.id}`}>
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        controls
                      >
                        {photo?.video_files.map((videoFile, index) => (
                          <source
                            key={index}
                            src={videoFile?.link}
                            type={videoFile?.file_type}
                          />
                        ))}
                      </video>
                    </Link>
                  ) : (
                    <Link to={`/SinglePhotoPage/${photo.id}`}>
                      <img
                        src={photo.src?.large}
                        alt={photo.alt}
                        className="w-full h-full object-cover rounded"
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={goToNextGroup}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-center text-3xl"
            >
              &gt;
            </button>
          </div>
        ):(
            <p>No Related photos</p>
        )}
      </div>
    </div>








    // <div className="mt-20">
    //   <h1 className="px-5 text-3xl font-bold text-blue-600">You Might Also Like</h1>
    //   <div className="relative overflow-hidden my-7 px-4 w-96">
    //     {relatedPhoto.length > 0 && (
    //       <div className="flex items-center">
    //         <button
    //           onClick={goToPreviousImage}
    //           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
    //         >
    //           Prev
    //         </button>
    //         {searchType === "videos" && relatedPhoto[currentImageIndex]?.video_files ? (
    //           <Link to={`/SingleVideoPage/${relatedPhoto[currentImageIndex]?.video_files[0]?.id}`}>
    //             <video
    //               className="w-full h-full object-cover"
    //               autoPlay
    //               loop
    //               muted
    //               controls
    //             >
    //               {relatedPhoto[currentImageIndex]?.video_files.map((videoFile, index) => (
    //                 <source
    //                   key={index}
    //                   src={videoFile?.link}
    //                   type={videoFile?.file_type}
    //                 />
    //               ))}
    //             </video>
    //           </Link>
    //         ) : (
    //           <Link to={`/SinglePhotoPage/${relatedPhoto[currentImageIndex]?.id}`}>
    //             <img
    //               src={relatedPhoto[currentImageIndex]?.src?.large}
    //               alt={relatedPhoto[currentImageIndex]?.alt}
    //               className="w-full h-full object-cover rounded"
    //             />
    //           </Link>
    //         )}
    //         <button
    //           onClick={goToNextImage}
    //           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
    //         >
    //           Next
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>








    // <div className="mt-20">
    //   <h1 className="px-5 text-3xl font-bold text-blue-600">You Might Also Like</h1>
    //   <div className="flex my-7 px-4  gap-2" style={{Width : "500px"}}>
    //     {relatedPhoto.length > 0 ? (
    //       relatedPhoto.map((photo) => (
    //         <div key={photo.id}>
    //           {searchType === "videos" && photo?.video_files ? (
    //             <Link to={`/SingleVideoPage/${photo?.video_files[0]?.id}`}>
    //               <video width="300" height="300" autoplay loop muted controls>
    //                 {photo?.video_files.map((videoFile, index) => (
    //                   <source
    //                     src={videoFile?.link}
    //                     type={videoFile?.file_type}
    //                     key={index}
    //                   />
    //                 ))}
    //               </video>
    //             </Link>
    //           ) : (
    //             <Link to={`/SinglePhotoPage/${photo.id}`}>
    //               <img
    //                 src={photo.src?.large}
    //                 alt={photo.alt}
    //                 width="350px"
    //                 className="rounded"
    //               />
    //             </Link>
    //           )}
    //         </div>
    //       ))
    //     ) : (
    //       <p>No Result Found</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default PhotoMightLike;
