import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBook,
  faShop,
  faUserPen,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import Avatar from "./Avatar"

function NavTripleMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
      <button className="flex-1 no-underline block h-8">
        <img
          src={require("../assets/logo.png")}
          className="h-full" alt="logo"
        />
      </button>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        <button
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faBook} className="mr-3" /> Libros
        </button>
        <button
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-black transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faShop} className="mr-3" /> Librerías
        </button>
        <button
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faUserPen} className="mr-3" /> Autores
        </button>
      </div>
      <div className="flex-1 items-center justify-end hidden md:flex">
        <Avatar
          image="https://gustui.s3.amazonaws.com/avatar.png"
          className="cursor-pointer my-2"
        />
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer md:hidden"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <button
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faBook} className="mr-3" /> Libros
            </button>
            <button
              href="#"
              className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faShop} className="mr-3" /> Librerías
            </button>
            <button
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faUserPen} className="mr-3" /> Autores
            </button>
            
            <Avatar
              image="https://gustui.s3.amazonaws.com/avatar.png"
              status="online"
              className="cursor-pointer my-2"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavTripleMenu