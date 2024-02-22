// import Footer from "./Components/Footer/Footer";
import AiResult from "./Components/AIResult/AiResult";
import Aiimages from "./Components/AiImages/Aiimages";
import FreepikPSDResult from "./Components/FreepikPSD/FreepikPSDResult";
import FreepikPSDmain from "./Components/FreepikPSD/FreepikPSDmain";
import FreepikSinglePSD from "./Components/FreepikPSD/FreepikSinglePSD";
import FreepikInputSearchBar from "./Components/FreepikPhotos/FreepikInputSearchBar";
import FreepikResult from "./Components/FreepikPhotos/FreepikResult";
import ImageToPDF from "./Components/ImageToPDF/ImageToPDF";
import PhotoCategory from "./Components/PhotoCategory/PhotoCategory";
import SIngleDisplayAIPage from "./Components/SIngleDIsplayAi/SIngleDisplayAIPage";
// import SingleVideoPage from "./Components/SIngleVideo/SingleVideoPage";
import SearchResult from "./Components/SearchResultComp/SearchResult";
import SingleCategory from "./Components/SingleCategory/SingleCategory";
import SingleDisplaycategory from "./Components/SingleCategory/SingleDisplaycategory";
import SinglePSDdisplay from "./Components/SinglePSD/SinglePSDdisplay";
import SingleDisplay from "./Components/SinglePhoto/SingleDisplay";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Logout from "./Pages/Logout";
import RegistrationPage from "./Pages/RegistrationPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/SearchResult/:searchType/:query" element={<SearchResult/>}/>
          <Route path='/Register' element={<RegistrationPage />}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path="/SinglePhotoPage/:id" element={<SingleDisplay/>}/>
          {/* <Route path="/SingleVideoPage/:id" element={<SingleVideoPage/>}/> */}
          <Route path="/PhotoCategory/:query" element ={<PhotoCategory/>}/>
          <Route path="/imagetopdf" element={<ImageToPDF/>}/>
          <Route path="/aiimages" element={<Aiimages/>}/>
          <Route path="/aiimages/:query" element={<AiResult/>}/>
          <Route path="/freepikvector" element={<FreepikInputSearchBar/>}/>
          <Route path="/freepikvector/:query" element={<FreepikResult/>}/>
          <Route path="/freepikpsd" element={<FreepikPSDmain/>}/>
          <Route path="/freepikpsd/:query" element={<FreepikPSDResult/>}/>
          <Route path="/SingleDisplayPSD/:id" element={<SinglePSDdisplay/>}/>
          <Route path="/SingleDisplayai/:id" element={<SIngleDisplayAIPage/>}/>
          <Route path="/SingleCateory/:query" element={<SingleCategory/>}/>
          <Route path="/SingleDisplayPhoto/:id" element={<SingleDisplaycategory/>}/>
          <Route path="/SingleDisplayPSD2/:id" element={<FreepikSinglePSD/>}/>
        </Routes>
        {/* <Footer/> */}
       </Router>
       {/* <RegistrationPage/> */}
    </div>
  );
}

export default App;
