import { useState } from "react";
import "../CSS/LoginPage.css";
import TypingLoginAnimation from "../Components/TypingAnimation/TypingLoginAnimation";
import freepik_log from "../assets/freepik-logo-png-transparent.png";
import { toast } from "react-toastify";
import { AuthValue } from "../store/auth";
import { useNavigate } from "react-router-dom";
function LoginPage() {

    //navigation declaration of Object

    const navigate = useNavigate();

    //state variable
    const[loginData , setLoginData] = useState({
        email :"",
        password:"",
    });
    const {storeToken , userAUthentication} = AuthValue();

    //changes made in input fields
    function handleLoginDataChange(e){
        let name = e.target.name;
        let value = e.target.value;

        setLoginData({
            ...loginData , [name]:value
        })
    };

    //login user logic
    const handleLoginUser = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/user/login",{
                method : 'POST',
                headers:{
                    "Content-Type":"application/json",
                },

                body:JSON.stringify(loginData)
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setLoginData({
                    email :"",
                    password:"",
                })
                storeToken(data.token);
                userAUthentication(data.token);
                toast.success(data.message);
                
                navigate("/");
                
            }else{
                toast.error(data.message);
            }   
        }catch(error) {
            console.log(error);  
        }

    };



  return (
    <>
      <div className="Login-Main flex gap-24">
        <div className="Login-left-div flex justify-center items-center">
            <div className="Login-Left-content relative flex items-center gap-4 flex-col">
                <div className="flex items-center gap-3">
                <TypingLoginAnimation/>
                {/* <h1 className="text-indigo-50 text-6xl uppercase font-bold">Welcome Back To</h1> */}
                <i className='bx bxs-hand  hand-icon text-blue-800 text-7xl'></i>
                </div>
                <h1 className="text-blue-500 text-5xl font-extrabold">PICVISTA</h1>
                <h1 className="text-indigo-50 text-6xl font-extrabold">LOGIN HERE</h1>
            </div>
        </div>

        <div className="Login-right-side flex justify-center flex-col gap-3 w-1/5 mt-4">
            <div className="flex items-center gap-4">
                <h1 className="uppercase font-bold text-5xl">LOGIN TO</h1>
                <img src={freepik_log} alt="" width="54px" /> 
            </div>
            <span>Please Login Here With Your Registered Email And Password And Get Verified With OTP. Sent On Your Email</span>
           <div className="input-field flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" 
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            required
            value={loginData.email}
            onChange={handleLoginDataChange}
            className="h-12 px-3 bg-white-50 placeholder-gray-600 focus:border-blue-800"
            />

            </div>
            <div className="flex flex-col gap-2">
            <label>Password</label>
            <input type="password" 
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
            required
            value={loginData.password}
            onChange={handleLoginDataChange}
            className="h-12 px-3 bg-white-50 placeholder-gray-600 focus:border-blue-800"
            />

            </div>
           
           </div>
           <div className="bg-blue-500 w-full mt-2 text-center p-3 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out" onClick={handleLoginUser}>
             <button className="login-btn register-btn text-white text-medium">
                Login
             </button>
           </div>
           <div className="-mt-1">
            <span className="text-sm">Don't Have An Account ? <a href="/"  className="text-blue-500 cursor-pointer hover:text-red-400">Create One</a></span>
           </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
