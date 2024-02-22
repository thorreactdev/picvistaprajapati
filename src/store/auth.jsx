import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { Navigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 


  //normal variable declaration
  const apiKey = "LxIZK1kWvDEiUjrOd8iRoD0cgnaSRUHpNpTwhY0pqsm0zJpKWLIszsx5";

  //state varible declaration
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [photoDetails, setPhotoDetails] = useState(null);
  const [loader, setLoader] = useState(true);
  const[videoDetails , setVideoDetails] = useState(null);

  console.log(videoDetails);

  //loaderstate
  const [loader2, setLoader2] = useState(false);
  const [large2x, setLarge2x] = useState(false);
  const [large, setLarge] = useState(false);
  const [medium, setMedium] = useState(false);
  const [small, setSmall] = useState(false);
  const [portrait, setPortrait] = useState(false);

  console.log(token);

  const isLoggedin = !!token;

  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //check if the token is expired or not if expired show toast message and logout the user
  


  //Logout user function
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };


  //function to check user authentication
  const userAUthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/userdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setUser(data[0]);
      }else{
        const decoded = jwtDecode(token);
        console.log(decoded);
        if(decoded.exp < Date.now() / 1000){
          toast.error("Token Expired Please Login");
          LogoutUser();
          <Navigate to="/Login"/>
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //photo fetch logic

  const fetchPhotoDetails = async (id) => {
    try {
      setLoader(true);
      const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        headers: {
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      console.log("single", data);
      if (response.ok) {
        setPhotoDetails(data);
      } else {
        toast.error("Error Fetching the Data");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  //downlaod Image logic

  const downloadImage = async (dimension, id) => {
    try {
      let url;
      switch (dimension) {
        case "original":
          setLoader2(true);
          url = photoDetails.src?.original;
          break;
        case "large2x":
          setLarge2x(true);
          url = photoDetails.src?.large2x;
          break;
        case "large":
          setLarge(true);
          url = photoDetails.src?.large;
          break;
        case "medium":
          setMedium(true);
          url = photoDetails.src?.medium;
          break;
        case "small":
          setSmall(true);
          url = photoDetails.src?.small;
          break;
        case "portrait":
          setPortrait(true);
          url = photoDetails.src?.portrait;
          break;
        // Add cases for other dimensions

        default:
          // Handle unsupported dimension
          return;
      }

      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      console.log(window.URL.createObjectURL(blob));

      // Specify the correct file name with extension
      link.download = `photo_${id}_${dimension}.jpeg`;

      // Specify the content type
      const contentType = response.headers.get("content-type") || "image/jpeg";
      link.type = contentType;

      link.click();
      toast.success("Image Downloaded Sucessfully");
      setLoader2(false);
      setLarge2x(false);
      setLarge(false);
      setMedium(false);
      setSmall(false);
      setPortrait(false);
    } catch (error) {
      console.error("Error downloading image", error);
      setLoader2(false);
    } finally {
      setLoader2(false);
      setLarge2x(false);
      setLarge(false);
      setMedium(false);
      setSmall(false);
      setPortrait(false);
    }
  };


  const videoDownLoadLogic = async(id) =>{
    try {
        const response = await fetch(`https://api.pexels.com/videos/videos/${id}`,{
            headers : {
                Authorization: apiKey,
            }
        });
        console.log(response);
        console.log(response.status);
        const data = await response.json();

        console.log("video data" , data);
        if(response.ok){
            setVideoDetails(data);
        }else{
            toast.error("Error Fetching Video");
        }
        
    } catch (error) {
        console.log(error); 
    }
  };

  useEffect(() => {
    userAUthentication();

  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        user,
        LogoutUser,
        storeToken,
        userAUthentication,
        downloadImage,
        fetchPhotoDetails,
        photoDetails,
        loader,
        loader2,
        large2x,
        large,
        medium,
        small,
        portrait,
        videoDownLoadLogic,
        videoDetails,
        apiKey ,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthValue = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("Outside of The Provider");
  }
  return AuthContextValue;
};
