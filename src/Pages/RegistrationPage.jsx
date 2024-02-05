
import { useState } from "react";
import "../CSS/RegistrationPage.css";
import TypingAnimation from "../Components/TypingAnimation/TypingAnimation";
import freepik_logo from "../assets/freepik-logo-png-transparent.png";
import { GoogleLogin } from "@react-oauth/google"
import { toast } from 'react-toastify';
// import { Link } from "react-router-dom";

function RegistrationPage(){
    const[userDatas , setuserData] = useState({
        firstname :"",
        email :"",
        password : "",
    });

    const handleUserDataChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setuserData({
            ...userDatas, [name]:value
        })
    };

    const sendUserDataToDB = async(e) =>{
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/api/auth/registration",{
            method :"POST",
            headers :{
              'Content-Type' : 'application/json',
            },
            body:JSON.stringify(userDatas)
          });
          const data = await response.json();
          console.log(data);
          if(response.ok){
            setuserData({
              firstname :"",
              email :"",
              password :"",
            })
            toast.success(data.message);
          }else{
            toast.error(data.message);
          }
          
        } catch (error) {
          console.log(error);
          alert("Error");
        }

    };
  return (
    <>
      <div className="main-register flex gap-30">
        {/* left-side-container */}

        <div className="register-left-side flex items-center justify-center opacity-95">
          <div className="left-register-content flex items-center justify-center gap-4 flex-col ">
            <TypingAnimation />
            <img src={freepik_logo} alt="" width="50px" />
            <h1 className="text-blue-500 text-5xl font-extrabold">PICVISTA</h1>
            <h1 className="text-indigo-50 text-6xl font-extrabold">REGISTER HERE</h1>
          </div>
        </div>

        {/* right-side-container */}

        <div className="register-right-side flex ml-40 justify-center flex-col gap-6">
          <div className="w-96 flex flex-col gap-3">
            <h1 className="uppercase font-bold text-3xl">
              Create Your Account
            </h1>
            <span className="font-medium text-gray-500 text-left ">
              Please Note That OTP Verification Is Required For Signup. Your OTP
              Will Only Be Used To Verify Your Identity For Security Purpose
            </span>
          </div>

          {/* Input-fields */}

          <div className="input-field flex flex-col gap-6 w-2/3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                id="FirstName"
                value={userDatas.firstname}
                onChange={handleUserDataChange}
                autoComplete="off"
                className="h-12 px-3 bg-white-50 placeholder-gray-600 focus:border-blue-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                id="Email"
                value={userDatas.email}
                onChange={handleUserDataChange}
                autoComplete="off"
                className="h-12 px-3 placeholder-gray-600 focus:border-blue-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Password">Enter Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="Password"
                value={userDatas.password}
                onChange={handleUserDataChange}
                autoComplete="off"
                className="h-12 px-3 placeholder-gray-600 focus:border-blue-800"
              />
            </div>
          </div>
          <div className="bg-blue-500 w-96 text-center p-3 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out" onClick={sendUserDataToDB}>
            <button className="register-btn text-white text-medium">
              Continue
            </button>
          </div>
          <div className="-mt-4 ml-1">
            <span>
              Already Have An Account ?{" "}
              <a
                href="/Login"
                className="text-blue-500 cursor-pointer hover:text-red-400"
              >
                Log In
              </a>
            </span>
          </div>
          <hr className="w-96" />

          {/* //google-login */}
            <div className="google-login-container w-96">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}  
            />

            </div>
           
        </div>
      </div>
    </>
  );

}

export default RegistrationPage;