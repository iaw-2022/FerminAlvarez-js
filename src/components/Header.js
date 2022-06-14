import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBook,
  faShop,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import Avatar from "./Avatar"

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedTab] = useState(window.location.pathname)
  return (
    <header>
      <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
        <div className="flex-1 no-underline block h-8">
          <img
            src={require("../assets/logo.png")}
            className="h-full" alt="logo"
          />
        </div>
        <div className="flex-none hidden md:flex md:justify-center md:h-full">
          <a
            href="/books"
            className={"block h-full flex items-center mx-4 px-2 border-b-2 transition-colors duration-300 ease-in-out hover:text-blue-400 " + (selectedTab === '/books' ? 'border-primary-500' : 'border-transparent')}
          >
            <FontAwesomeIcon icon={faBook} className="mr-3" /> Libros
          </a>
          <a
            href="/bookshops"
            className={"block h-full flex items-center mx-4 px-2 border-b-2 transition-colors duration-300 ease-in-out hover:text-blue-400 " + (selectedTab === '/bookshops' ? 'border-primary-500' : 'border-transparent')}
          >
            <FontAwesomeIcon icon={faShop} className="mr-3" /> Librerías
          </a>
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
              <a
                href="/books"
                className={"no-underline px-2 my-2 font-medium hover:text-blue-400"  
                + (selectedTab === '/books' ? 'border-b-2 border-primary-500' : '')}
              >
                <FontAwesomeIcon icon={faBook} className="mr-3" /> Libros
              </a>
              <a
                href="/bookshops"
                className={"no-underline px-2 py-1 my-2 font-medium border-b-2 border-primary-500 hover:text-blue-400"
                + (selectedTab === '/bookshops' ? 'border-b-2 border-primary-500' : '')}
              >
                <FontAwesomeIcon icon={faShop} className="mr-3" /> Librerías
              </a>
              
              <Avatar
                image="https://gustui.s3.amazonaws.com/avatar.png"
                status="online"
                className="cursor-pointer my-2"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header