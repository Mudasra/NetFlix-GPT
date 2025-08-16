import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlics";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div
      className="
    absolute flex w-full top-0 justify-between items-center z-20
    px-4 sm:px-8 md:px-16 lg:px-32 py-4
    bg-gradient-to-b from-black
  "
    >
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44"
        alt="logo"
        src={LOGO}
      />

      {user && <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <img
          className="w-10 h-10 rounded"
          alt="user profile"
          // src={user?.photoURL}
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        />

        <button
          className="
      px-3 sm:px-4 py-1 text-sm sm:text-base
      text-white font-semibold
      bg-red-600 hover:bg-red-700 rounded
      transition-colors duration-300 ease-in-out
    "
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>}

    </div>
  );
};

export default Header;
