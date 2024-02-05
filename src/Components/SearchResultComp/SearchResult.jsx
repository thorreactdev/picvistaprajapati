import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../SearchResultComp/SearchResult.css";
import NewNavbar from "../NewNavbar/NewNavbar";
import pug from "../../assets/pug-dog-isolated-white-background-removebg-preview.png";
import Footer from "../Footer/Footer";

const SearchResult = () => {
  const apiKey = "LxIZK1kWvDEiUjrOd8iRoD0cgnaSRUHpNpTwhY0pqsm0zJpKWLIszsx5";

  //extract query value from the url
  const { query, searchType } = useParams();


  //state variable
  const [photos1, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalresult, setTotalResult] = useState(0);
  console.log(photos1);


  //functionality declare here

  const handleResult = async (pageNumber) => {
    setLoading(true);
    // https://api.pexels.com/v1/search?${searchType === "photos"}&query=${query}&page=${pageNumber}&per_page=40&orientation=square

    try {
      const response = await fetch(
        `https://api.pexels.com/${
          searchType === "videos" ? "videos/search" : "v1/search"
        }?query=${query}&page=${pageNumber}&per_page=30&orientation=square`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        setPhotos(data.videos || data.photos);
        setCurrentPage(pageNumber);
        setTotalResult(data.total_results);
        // setLoading(false);
      } else {
        alert("error in fetching");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPageClick = () => {
    handleResult((currentPage) => currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      handleResult((currentPage) => currentPage - 1);
    } else {
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setLoading(true);
  };

  const formatResult = (totalresult) => {
    if (totalresult < 1000) {
      return totalresult;
    } else if (totalresult < 1000000) {
      return `${(totalresult / 1000).toFixed(1)}k+`;
    } else {
      return `${(totalresult / 1000000).toFixed(1)}M+`;
    }
  };

  useEffect(() => {
    handleResult(currentPage);
    localStorage.setItem("lastsearchquery" , query);
    localStorage.setItem("searchType" , searchType);
  }, [query, apiKey, currentPage, searchType]);

  return (
    <div>
      <NewNavbar />
      <div className="my-7">
        {photos1.length > 0 && (
          <div className="px-8">
            <h1 className="text-2xl capitalize mb-4 font-semibold">
              <span className="text-gray-600">Showing Result For </span>"{query}
              "
            </h1>
            <div className="flex items-center">
              <span className="bg-black text-white py-3 px-7 mb-4 border rounded">
                {searchType === "videos" ? "Videos" : "Photos"}{" "}
                {formatResult(totalresult)}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 px-5 items-center justify-center">
          {loading ? (
            Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className="skeleton-item"></div>
            ))
          ) : photos1.length > 0 ? (
            photos1.map((media) => (
              <div key={media.id} className="main-photo flex">
                {searchType === "videos" &&
                media?.video_files &&
                media?.video_files.length > 0 ? (
                  
                  <Link to={`/SingleVideoPage/${media?.video_files[0]?.id}`}>
                  <video width="300" height="300" autoplay loop muted controls> 
                    {media?.video_files.map((videoFile, index) => (
                      <source
                        src={videoFile?.link}
                        type={videoFile?.file_type}
                        key={index}
                      /> 
                      ))}
                  </video>
                      </Link>
                  
                 
                ) : (
                  <Link to={`/SinglePhotoPage/${media.id}`}>
                    <img
                      src={media.src?.large}
                      alt={media.alt}
                      width="300px"
                      className="rounded"
                     
                    />
                  </Link>
                )}
                <div className="overlay1"></div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-6 items-center mb-52 mt-7">
              <span className="text-2xl font-semibold">
                We couldn't find anything for "{query}" with your filters. Try
                to refine your search.
              </span>
              <img src={pug} alt="" width="400px" />
            </div>
          )}
        </div>

        {photos1.length > 0 && (
          <div className="flex items-center justify-center mt-12 mb-12 gap-12">
            <button
              onClick={handlePrevPageClick}
              className={`${
                currentPage === 1 ? "hide" : "show"
              } border border-black rounded px-12 py-3 text-black text-lg hover:bg-blue-600 hover:text-white hover:border-transparent transition delay-150 duration-300 ease-in-out`}
            >
              {loading ? "Loading..." : "Previous Page"}
            </button>
            <button
              className="border-transparent rounded px-12 py-3 bg-blue-600 text-white text-lg hover:bg-blue-700 transition delay-150 duration-300 ease-in-out animate"
              onClick={handleNextPageClick}
            >
              {loading ? "Loading..." : "Next"}
            </button>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
