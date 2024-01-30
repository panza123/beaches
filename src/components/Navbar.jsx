import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Navbar() {
  const [Nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  function handleNav() {
    setNav(!Nav);
    setLogo(!logo);
  }
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <h1>BEACHES.</h1>
      <ul className="hidden md:flex  ">
        <NavLink className="p-4">Home</NavLink>
        <NavLink className="p-4">Destinations</NavLink>
        <NavLink className="p-4">Travels</NavLink>
        <NavLink className="p-4">view</NavLink>
        <NavLink className="p-4">Book</NavLink>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" />
        <BsPerson />
      </div>

      {/* {hamburger} */}
      <div className="md:hidden cursor-pointer z-10" onClick={handleNav}>
        {!Nav ? (
          <HiOutlineMenuAlt4 size={20} />
        ) : (
          <AiOutlineClose className="text-black" />
        )}
      </div>

      {/* {mobile menu} */}
      <div
        className={
          Nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <h1>BEACHES.</h1>
        <ul className="flex flex-col">
          <NavLink className="p-2 text-2xl border-b " to='/'>Home</NavLink>
          <NavLink className="p-2 text-2xl border-b" >Destinations</NavLink>
          <NavLink className="p-2 text-2xl border-b">Travels</NavLink>
          <NavLink className="p-2 text-2xl border-b">view</NavLink>
          <NavLink className="p-2 text-2xl border-b">Book</NavLink>
        </ul>
        <div className="flex flex-col">
          <button>Search</button>
          <button>Accept</button>
        </div>

        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaGithub className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
}
