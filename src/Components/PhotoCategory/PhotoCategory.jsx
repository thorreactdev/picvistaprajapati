import React, { useEffect, useState } from "react";
import "../PhotoCategory/PhotoCategory.css";
import { useParams } from "react-router-dom";
import { AuthValue } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import NewNavbar from "../NewNavbar/NewNavbar";
import Footer from "../Footer/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PhotoCategory = () => {
  const { query } = useParams();
  const { apiKey } = AuthValue();
  const [photoCategory, setPhotoCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const[loader2 , setLoader2] = useState(false);
  console.log(query);

  const categoryInfo = [
    {
      category: "lifestyle, health and wellness",
      heading: "Health, Lifestyle & Wellness photos for your business",
      paragraph:
        "Keep your wellness business alive and kicking thanks to this wide selection of photos related to health and lifestyle. Communicate what you do and the ways in which you can help your customers be as healthy as possible with yoga and meditation courses, alternative therapies, reiki, massages, or your spa services. Add them to your marketing campaign and help people improve their lives!",
    },
    {
      category: "people and emotion",
      heading: "Discover our variety of human emotions photos",
      paragraph:
        "The human face is a magnificent biological masterpiece buried deep within our conscience as something we recognize instantly. The face is so powerful we sometimes see them in everyday objects, a scientific phenomenon called pareidolia. Our emotions are so strong sometimes we don’t even need words to express them. For moments when words just won’t do, perhaps photos of human emotion will hit the spot.",
    },
    {
      category: "education and learning",
      heading: "Enhance your educational presentations with our photos",
      paragraph:
        "It’s a constant battle keeping young students focussed on important educational presentations. They can be dreary at best! So let’s keep the engagement at its peak, introducing stunning, high-resolution photos to your presentations. Finding an image that helps deliver a message, explain a situation, or even make a young audience laugh has never been so easy. Let’s make education fun for both students and teachers.",
    },
    {
      category: "nature",
      heading: "Wonderful Nature photos to give life to your projects",
      paragraph:
        "Do you want to add some natural touches to your projects? Enjoy the magnificence of mother nature and create something as beautiful as a landscape with these resources. Delightful and powerful pictures of animals, mountains, hills, and flora can convey relaxation, peace, tranquility, and serenity. They are great for promoting your company, to advertise your services or for any other purpose.",
    },
    {
      category: "sports",
      heading: "Enjoy the versatility of sports photos",
      paragraph:
        "This collection of images related to sports will be your best asset. The main feature of these photographs is their versatility: use them as part of your website, to design campaigns, as a teaching resource, as a desktop wallpaper, and even as a poster to decorate the walls of your gym. You’ll always find the perfect resource to fulfill your needs.",
    },
    {
      category: "technology and industry" || "technology",
      heading: "Industry and technology photos for your business",
      paragraph:
        "Images are essential for your business, providing an image of success while also providing a clear direction for business goals. However, business sectors such as industry and technology require closer attention. With technology at its peak and climbing ever higher, imagery needs to represent its highly evolved status and also capture the imaginations of a group of people whose IQs are through the roof. This specialist type of imagery is here and available for the very purpose of keeping the most complex minds captivated.",
    },
    {
      category: "bussiness and marketing",
      heading: "The best Business and Marketing photos for your projects",
      paragraph:
        "Photography is the front line of Business and Marketing visual communication, and with so much healthy competition out there, only the best photography available will do. Make your dreamt-up marketing campaign a reality, sourcing perfect images to build a strong connection with your target audience while giving your campaign drive and definition. Let’s unleash your business potential.",
    },
    {
      category: "food and drink",
      heading: "Improve your design with yummy food and beverage photos",
      paragraph:
        "From takeaway menus to larger-than-life billboard campaigns, food photography is the cutting edge of still-life photography, alluring us to quench our thirst or satisfy a craving that perhaps wasn’t even there. These state-of-the-art images will lift your projects to the next level, capturing the attention of followers on social media and potentially sowing the seeds of your food marketing campaigns where there are no limits.",
    },
    {
      category: "background",
      heading: "Immersive Background: Where Stories Unfold",
      paragraph:
        "Backgrounds play a pivotal role across various visual mediums, including design, photography, and digital interfaces. In graphic design, backgrounds serve as the foundation, providing balance and aesthetic appeal. They can be dynamic or subtle, utilizing colors, patterns, and textures to enhance the overall visual experience. In photography, backgrounds frame the main subject, influencing composition and narrative.",
    },
    {
      category: "family",
      heading: "Treasured Moments: Our Family Chronicle",
      paragraph:
        "A family photo is more than just a captured moment; it encapsulates the essence of relationships, shared experiences, and the passage of time. Typically taken during special occasions, gatherings, or even casual moments, family photos serve as tangible memories, preserving the bonds that tie family members together. These visual mementos often feature smiles, laughter, and genuine expressions, reflecting the warmth and love within the family unit. Over the years, a collection of family photos becomes a visual narrative, documenting the growth of individuals, the addition of new members, and the evolution of family dynamics. ",
    },
    {
      category: "technology",
      heading: "Industry and technology photos for your business",
      paragraph:
        "Images are essential for your business, providing an image of success while also providing a clear direction for business goals. However, business sectors such as industry and technology require closer attention. With technology at its peak and climbing ever higher, imagery needs to represent its highly evolved status and also capture the imaginations of a group of people whose IQs are through the roof. This specialist type of imagery is here and available for the very purpose of keeping the most complex minds captivated.",
    },
    {
      category: "artificial intelligence",
      heading: "AI Unleashed: Navigating the Frontiers of Artificial Intelligence",
      paragraph:
        "Artificial Intelligence (AI) represents a transformative force that has permeated various facets of our modern world. At its core, AI involves the development of intelligent machines capable of performing tasks that traditionally required human intelligence. This encompasses a spectrum of technologies, including machine learning, natural language processing, and robotics. Machine learning algorithms, a subset of AI, enable systems to learn from data, recognize patterns, and make informed decisions without explicit programming.",
    },
  ];

  const fetchPhotoByCategory = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&page=${pageNumber}&per_page=50`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setPhotoCategory(data.photos);
        setCurrentPage(pageNumber);
      } else {
        toast.error("Error Fecthing Photo By Category");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleNextPageClick = () => {
    fetchPhotoByCategory((currentPage) => currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      fetchPhotoByCategory((currentPage) => currentPage - 1);
    } else {
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setLoading(true);
  };

  useEffect(() => {
    fetchPhotoByCategory(currentPage);
  }, [apiKey, query ,currentPage]);

  const selectedCategory = categoryInfo.find((item) => item.category === query);
  console.log(selectedCategory);

  return (
    <div className="">
      <NewNavbar />
      <div className="px-8 mb-20">
        {
        loading ?
         (
          <div className="mt-7">
          <div>
          <Skeleton width ={460} height = {20} style={{ marginBottom: 10 }} />
          <Skeleton count={4} width={1200} height={20}/>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-2 mt-12">
            {Array.from({ length: 50 }, (_, index) => (
              <div key={index}>
                <Skeleton width={300} height={300} style={{ marginBottom: 10 }} />
              </div>
            ))}
          </div>
          </div>
        ) : photoCategory.length > 0 ? (
          <div>
            <div className="flex flex-col gap-5 justify-center mt-20 mb-16">
              {selectedCategory ? (
                <div>
                   <h1 className="text-4xl font-bold capitalize mb-7">
                  {selectedCategory?.heading}
                   </h1>
                <span className="text-lg w-5/6 font-medium text-gray-600 ">
                  {selectedCategory?.paragraph}
                </span>
                </div>
               
              ) : (
              null
                
              )}
            </div>

            <div className="flex items-center flex-wrap justify-center gap-2 ">
              {photoCategory.map((categoryPhoto) => {
                return (
                  <>
                    <Link to={`/SinglePhotoPage/${categoryPhoto?.id}`} className="category-items">
                      <div key={categoryPhoto.id} >
                        <img
                          src={categoryPhoto?.src?.portrait}
                          alt={categoryPhoto.alt}
                          className="rounded"
                          width="300px"
                        />
                      </div>
                      <div className="overlay3"></div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <p>No Result Found</p>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 mb-12">
      <button className={`${
                currentPage === 1 ? "hide" : "show"
              } border border-black rounded px-12 py-3 text-black text-lg hover:bg-blue-600 hover:text-white hover:border-transparent transition delay-150 duration-300 ease-in-out`}
      onClick={handlePrevPageClick}
      >
          Previous
        </button>
        <button className="border rounded px-12 py-3 text-lg bg-blue-600 text-white" onClick={handleNextPageClick}>
          Next
        </button> 
      </div>

      <Footer />
    </div>
  );
};

export default PhotoCategory;
