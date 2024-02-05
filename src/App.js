// import Footer from "./Components/Footer/Footer";
import ImageToPDF from "./Components/ImageToPDF/ImageToPDF";
import PhotoCategory from "./Components/PhotoCategory/PhotoCategory";
import SingleVideoPage from "./Components/SIngleVideo/SingleVideoPage";
import SearchResult from "./Components/SearchResultComp/SearchResult";
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
          <Route path="/SingleVideoPage/:id" element={<SingleVideoPage/>}/>
          <Route path="/PhotoCategory/:query" element ={<PhotoCategory/>}/>
          <Route path="/imagetopdf" element={<ImageToPDF/>}/>
        </Routes>
        {/* <Footer/> */}
       </Router>
       {/* <RegistrationPage/> */}
    </div>
  );
}

export default App;
