import React, { useState } from "react";
import logo from "../../assets/logoCream.png";
import google from "../../assets/google.png"
const Authentication = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className=" flex flex-row justify-center items-center text-[#EADAA2] min-h-screen divide-x-4 divide-opacity-80  ">
      <div className="mr-10">
        <img className="min-w-[50%] " src={logo} alt="cadance logo" />
      </div>

      {/* SIGN UP SCREEN  */}
      {!isLogedIn ? (
        <div className=" min-w-[50%] min-h-[500px] ">
          <h1 className=" text-5xl text-[#FFD046] ">Sign Up Screen</h1>
          <div className="flex flex-col justify-center items-center mt-5">
            {/* <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#052A2E] px-2">
                email address
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div> */}
            <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#241E4E] px-2">
                user name
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div>
            <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#241E4E] px-2">
                password
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div>
            <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#241E4E] px-2">
                confirm password
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div>
          </div>
          <button className=" min-w-[300px] mt-5 border rounded-lg text-3xl py-1 hover:bg-[#CE6C47] ">
            SignUp
          </button>

          <div className="relative my-10 w-[65%] mx-auto">
            <hr />
            <p className="absolute top-[-12px] left-[50%] translate-x-[-50%] px-2 bg-[#241E4E]">
              OR
            </p>
          </div>

          <button className="flex items-center justify-center gap-5 px-5 border rounded-lg py-2 text-2xl mx-auto text-[#FFD046] hover:bg-[#CE6C47] ">
            <img
              className="h-8 stroke-black stroke-2 "
              src={google}
              alt="google icon"
            />
            <p>Continue with google </p>
          </button>
        </div>
      ) : (
        <div className=" min-w-[50%] min-h-[500px] ">
          <h1 className=" text-5xl ">Login Screen</h1>
          <div className="flex flex-col justify-center items-center mt-5">
            {/* <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#052A2E] px-2">
                email address
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div> */}
            <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#052A2E] px-2">
                user name
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div>
            <div className="relative mt-5  text-xl max-w-fit">
              <p className=" absolute left-[5%] top-[-25%] text-sm bg-[#052A2E] px-2">
                password
              </p>
              <input
                className="bg-transparent border rounded-lg px-2 py-2 w-[300px] "
                type="text"
              />
            </div>
          </div>
          <button className=" min-w-[300px] mt-5 border rounded-lg text-3xl py-1 hover:bg-[#328486] ">
            Login
          </button>

          <div className="relative my-10 w-[65%] mx-auto">
            <hr />
            <p className="absolute top-[-12px] left-[50%] translate-x-[-50%] px-2 bg-[#052A2E]">
              OR
            </p>
          </div>

          <button className="flex items-center justify-center gap-5 px-5 border rounded-lg py-2 text-2xl mx-auto ">
            <img className="h-8" src={google} alt="google icon" />
            <p>Continue with google </p>
          </button>
        </div>
      )}
    </div>
  );
};
 {
   /* <input type="text" value="userName" />
          <input type="text" value="password" />
          <input type="text" value="confirmPassword" /> */
 }
export default Authentication;
