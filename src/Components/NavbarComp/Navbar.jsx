// import freepik_logo from "../../assets/white-freepik-logo.svg";
import "./Navbar.css";
import logo from "../../assets/BSC_IT-removebg-preview.png";
import { AuthValue } from "../../store/auth";
import { Link } from "react-router-dom";
function Navbar() {

  const {isLoggedin} = AuthValue();
  return (
    <>
      <div className="flex justify-between items-center px-7 py-3 relative cursor-pointer">
        <div className="flex gap-12 items-center">
          <img src={logo} alt="" width="210px"/>
          {/* <h1 className="text-white font-extrabold text-3xl">PICV!STA</h1> */}
          <div className="flex gap-8 text-white font-medium text-medium hover:text-black-100">
            <span className="hover:text-gray-300 transition ease-in-out delay-100">Vectors</span>
            <Link to="/"></Link>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">Photos</span>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">Videos</span>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">3D</span>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">AI Images</span>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">Icon</span>
            <span className="hover:text-gray-300 transition ease-in-out delay-100">Fonts</span>
            <Link to="/imagetopdf">
            <span className="hover:text-gray-300 transition ease-in-out delay-100">ImageToPDF</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-6 items-center text-white font-medium text-medium">
          <div className="hover:text-gray-300 transition ease-in-out delay-100">Home</div>
          <div className="hover:text-gray-300 transition ease-in-out delay-100">About</div>

          {
            isLoggedin ? (
              <div className="border-2 border-black-800 rounded px-2 py-1 hover:border-gray-400 transition ease-in-out delay-100">
                  <a href="/Logout">Logout</a>
              </div>
            ):(
            <>
            <div className="hover:text-gray-300 transition ease-in-out delay-100">
                  <a href="/Login">Login</a>
              </div>
              <div className="border-2 border-black-800 rounded px-2 py-1 hover:border-gray-400 transition ease-in-out delay-100">
              <a href="/Register">
                <span className="">Sign up</span>
              </a>
            </div>
            </>
              
            )
          }
          
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
