import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../Header/Header';
import AiNavbar from '../SIngleDIsplayAi/AiNavbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const SingleDisplaycategory = () => {
    const { id } = useParams();
    console.log(id);
  
    const [singlePhoto, setSinglePhoto] =React.useState(null);
    const [loader, setLoader] = React.useState(false);
    console.log(singlePhoto);

    const fetchSingleAiPhoto = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            `http://localhost:5000/api/singleaiphoto?id=${id}`
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setSinglePhoto(data.data);
          } else {
            return toast.error("Error Fetching Images");
          }
        } catch (error) {
          console.log(error);
          setLoader(false);
        }finally{
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        }
      };
    
      useEffect(() => {
        fetchSingleAiPhoto();
      }, [id]);

    

    const downloadImage = async () => {
        try {
            const link = document.createElement('a');
            link.href = singlePhoto.preview.url; // Directly use the image URL
            link.setAttribute('download', `freepik_image_${id}.jpg`);
            document.body.appendChild(link);
            link.click();
            // link.parentNode.removeChild(link);
        } catch (error) {
            console.log(error);
            toast.error("Error Downloading Image");
        }
    };


  return (
    <div>
      <Header />
      <AiNavbar />
      <div className="px-4">
        <div className="flex gap-12">
          <div>
            <img
              src={singlePhoto?.preview?.url}
              alt=""
              className="single-ai-image"
            />
          </div>
          <div className="mt-52 flex flex-col gap-5">
            <span className="text-3xl font-semibold mb-7">Download Here</span>
            <span
              className="flex items-center justify-center ml-20 cursor-pointer animate-bounce"
              style={{
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <i className="bx bx-down-arrow-alt text-5xl "></i>
            </span>
            <div className="mt-7">
              <button className="bg-blue-600 px-20 py-5 text-lg text-white" onClick={downloadImage}>
                DownLoad
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-4 mb-3 flex justify-between cursor-pointer"
          style={{ width: "1160px" }}
        >
          <div className="flex gap-2 items-center">
            <img
              src={singlePhoto?.author?.avatar}
              alt=""
              className="author-photo"
            />
            <div className="flex flex-col gap">
              <span className="font-medium uppercase">
                {singlePhoto?.author?.name}
              </span>
              <span className="text-sm text-gray-500 font-medium capitalize">
                {singlePhoto?.author?.assets} assests
              </span>
            </div>
            <span className="ml-3 border bg-gray-200 font-medium px-3 py-2 rounded text-sm">
              Follow
            </span>
          </div>

          <div className="flex gap-3 items-center cursor-pointer">
            <span className="text-sm font-medium bg-gray-200 px-5 py-2 rounded">
              Add To Collection
            </span>
            <span className="text-sm font-medium bg-gray-200 px-5  py-2 rounded">
              Like
            </span>
            <span className="text-sm font-medium bg-gray-200 px-5 py-2 rounded">
              Share
            </span>
          </div>
        </div>

        <div>
          <h1 className="font-medium text-lg capitalize pl-2 text-gray-700">
            {singlePhoto?.name}
          </h1>
        </div>

        <div className="w-full mt-7 mb-14">
          <h1 className="text-2xl font-semibold mt-3 mb-3">
            You Might Also Like
          </h1>
          <div className="flex items-center  related-photo">
            <div className="flex items-center justify-center gap-3">
              {loader ? (
                Array.from({length : 5}).map((_,index)=>(
                  <div key={index}>
                    <Skeleton width={300} height={300} />
                  </div>
                ))
              ) : (
                singlePhoto?.related_resources?.suggested?.slice(0,5).map((related, index) => (
                    <Link to={`/SingleDisplayai/${related?.id}`} onClick={()=> window.scrollTo({
                        top : 0,
                        behavior : 'smooth'
                        
                    })}>
                      <div key={related.id}>
                        <img
                          src={related.preview.url}
                          alt=""
                          className="shadow-lg rounded"
                            style={{width : "340px" , height : "300px"}}
                         
                        />
                      </div>
                    </Link>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleDisplaycategory