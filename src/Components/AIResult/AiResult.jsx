import React, { useEffect, useState } from "react";
import "./AiResult.css";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AIHero from "../AiHeroInput/AIHero";
import Footer from "../Footer/Footer";
import Skeleton from "react-loading-skeleton";

const AiResult = () => {
  const { query } = useParams();
  console.log(query);

  //state variable declaration
  const [aiPhotos, setaiPhotos] = useState([]);
  const [aiLoader, setaiLoader] = useState(true);

  //functionality declaration

  useEffect(() => {
    setaiLoader(true);
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/freepikai?query=${query}`
        );
        if (!response.ok) {
          throw new Error("Error fetching images");
        }
        const data = await response.json();
        console.log(data.data);
        setaiPhotos(data.data); // Set the fetched images in the state
      } catch (error) {
        console.error("Error fetching images:", error);
        toast.error("Error fetching images");
      } finally {
        setTimeout(() => {
          setaiLoader(false); 
        }, 3000);
      }
    };

    fetchImages();
  }, [query]);

  return (
    <div>
      <div>
        <AIHero />
      </div>
      <div className='mt-12 text-center'>
        <span className='text-xl font-semibold text-gray-500 px-32'>Showing Result For <span className='text-black'>"{query.toLocaleUpperCase()}"</span></span>
        </div>
      <div className="mt-14 mb-14 flex items-center justify-center flex-wrap gap-5">
        {aiPhotos?.length > 0 && aiLoader
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index}>
                <Skeleton width={370} height={370} />
              </div>
            ))
          : aiPhotos?.map((aiphotowala, index) => (
              <div className="main-ai-result" key={index}>
                <Link to={`/SingleDisplayai/${aiphotowala.id}`} onClick={()=> window.scrollTo({
                  top : 0,
                  behavior : 'smooth',
                })}>
                <div key={aiphotowala.id} className="">
                  <img
                    src={aiphotowala?.image?.source?.url}
                    alt=""
                    className="rounded shadow-lg"
                    onLoad={() => setaiLoader(false)}
                  />
                </div>
                </Link>
                <div className="overlay6">
                  <h2 className="text-white font-medium text-lg">{aiphotowala.author.name}</h2>
                </div>
              </div>
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default AiResult;
