import React from "react";
import "../AiImages/Aiimages.css";
import AiPhotos from "../aiPhotos/aiPhotos";
import Footer from "../Footer/Footer";
import Visuals from "../aiPhotos/Visuals";
import JustaSection from "../aiPhotos/JustaSection";
import AiHeroSection from "../../Components/aiPhotos/AiHeroSection";

import AIHero from "../AiHeroInput/AIHero";

const Aiimages = () => {

  return (
    <div>
      <AIHero/>
      <div>
        <AiHeroSection/>
      </div>
      <div>
        <AiPhotos />
      </div>
      <div>
        <Visuals />
      </div>
      <div>
        <JustaSection />
      </div>

      <Footer />
    </div>
  );
};

export default Aiimages;
