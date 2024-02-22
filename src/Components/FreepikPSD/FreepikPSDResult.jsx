import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from '../../Components/Header/Header'
import FreepiksPSDNavbar from "./FreepiksPSDNavbar";

const FreepikPSDResult = () => {
  const { query } = useParams();

  const [psdPhotos, setPSDPhoto] = useState([]);
  const [loader, setLoader] = useState(true);

  const handlePSDResult = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `http://localhost:5000/api/freepikpsd?query=${query}`
      );
      if (!response.ok) {
        return toast.error("Error Fetching Images");
      }

      const data = await response.json();
      console.log(data);
      setPSDPhoto(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  };

  useEffect(() => {
    handlePSDResult();
  }, [query]);

  return (
    <div>
      <Header/>
      <FreepiksPSDNavbar/>
      <div className="flex items-center justify-center flex-wrap gap-3 mt-14 mb-14">
        {psdPhotos.length > 0 ? (
          loader ? (
            Array.from({ length: 30 }).map((_, index) => (
              <div key={index}>
                <Skeleton width={300} height={360} />
              </div>
            ))
          ) : (
            psdPhotos.map((psdphoto) => (
              <Link to={`/SingleDisplayPSD2/${psdphoto?.id}`} onClick={()=> window.scrollTo({
                top : 0,
                behavior : "smooth"
              })}>
              <div className="freepik" key={psdphoto.id}>
                <div>
                  <img src={psdphoto.image.source.url} alt="" className="shadow-lg rounded freepik-image"/>
                </div>
                <div className="overlay5"></div>
              </div>
              </Link>
            ))
          )
        ) : (
          <p>Wait Loading...</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default FreepikPSDResult;
