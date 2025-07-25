import React from "react";

const Header = () => {
  return (
    <div
  className="
    absolute flex w-full top-0 justify-between items-center z-10
    px-4 sm:px-8 md:px-16 lg:px-32 py-4
    bg-gradient-to-b from-black
  "
>
  <img
    className="w-28 sm:w-32 md:w-40 lg:w-44"
    alt="logo"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
  />

  <button
    className="
      px-3 sm:px-4 py-1 text-sm sm:text-base
      text-white font-semibold
      bg-red-600 hover:bg-red-700 rounded
      transition-colors duration-300 ease-in-out
    "
  >
    Sign in
  </button>
</div>

  );
};

export default Header;
