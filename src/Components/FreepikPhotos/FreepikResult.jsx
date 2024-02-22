import React, { useEffect, useState } from "react";
// import FreepikSearchInput from "./FreepikSearchInput";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./FreepikResult.css";
import Footer from "../Footer/Footer";
import Skeleton from "react-loading-skeleton";

const FreepikResult = () => {
  const { query } = useParams();
  console.log(query);
  const [images, setImages] = useState([]);
  const[loading , setLoading] = useState(true);
  console.log(images);
  
  useEffect(() => {
    setLoading(true);
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/freepikphotos?query=${query}`);
        if (!response.ok) {
          throw new Error('Error fetching images');
        }
        const data = await response.json();
        console.log(data.data);
        setImages(data.data); // Set the fetched images in the state
      } catch (error) {
        console.error('Error fetching images:', error);
        toast.error('Error fetching images');
        setLoading(false);
      }finally{
        setTimeout(() => {
          setLoading(false);
          
        }, 3000);
      }
    };

    fetchImages();
  }, [query])



  return (
    <div className="bg-gray">
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 pt-7 pb-14 h-full">
        {
          images.length > 0 && 
          <div className="flex flex-wrap items-center justify-center gap-3 ">
            {
              loading ? (
                Array.from({length : 30}).map((_,index)=>(
                  <Skeleton width={300} height={360}/>
                ))
              ) : (
                images.map((item)=>(
                  <Link to={`/SingleDisplayPSD/${item.id}`}>
                  <div className="freepik" key={item.id}>
                    <div className="" key={item.id}>
                      <img src={item.image.source.url} alt="" className="shadow-lg rounded freepik-image" />
                    </div>
                    <div className="overlay5"></div>
                  </div>
                  </Link>
                ))
              )
            }
          </div>
            
        }
      </div>
      <Footer/>
    </div>
  );
};

export default FreepikResult;
