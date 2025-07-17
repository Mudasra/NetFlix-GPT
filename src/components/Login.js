import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/PK-en-20250714-TRIFECTA-perspective_3ea31bb5-14e1-41fe-997f-52b7ec8f28e4_large.jpg"
          alt=""
        />
      </div>
      <form autoComplete="on" className=" rounded absolute bg-black bg-opacity-80 flex flex-col p-12  w-3/12 my-36 mx-auto left-0 right-0">
        <h1 className="font-bold text-3xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          autoComplete="name"
          placeholder="Full Name"
          className="bg-[#333333] text-white w-full rounded my-4 p-2"
        />)}
        <input
          type="email"
          autoComplete="email"
          placeholder="Email"
          className="bg-[#333333] text-white w-full rounded my-4 p-2"
        />
        <input
        name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className="bg-[#333333] text-white w-full rounded my-4 p-2"
        />
        <button className="rounded my-6 mb-0 px-6 text-white w-full font-bold py-3 bg-red-600 hover:bg-red-700 transition-colors duration-300 ease-in-out">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <label className="flex items-center mt-3 mb-10 space-x-2 cursor-pointer">
          <input type="checkbox" className="cursor-pointer h-4 w-4 " />
          <span className="text-white">Remember me</span>
        </label>
        <p className="text-sm pt-4 pb-2 text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already Registered"} 
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignInForm ? " Sign Up " : " Sign In "}
          </span>{" "}
          now
        </p>
        <p className="text-sm text-gray-400">
          The page is protected by google CAPTCHA to ensure you are not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
