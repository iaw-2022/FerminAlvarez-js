import React, { useEffect } from "react"
import {useAuth0} from '@auth0/auth0-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Dropdown from "./Dropdown"

function Avatar({
  className = "",
  image = "",
  size = "base",
  status = "",
  statusBottom = false,
  ...newProps
}) {
  let finalClass = `${className} relative rounded-full`
  if (!image) finalClass += " bg-gray-300 flex items-center justify-center"
  let statusClass = `absolute rounded-full right-0 ${
    statusBottom ? "bottom-0" : "top-0"
  }`
  if (size === "xs") {
    finalClass += " w-4 h-4"
    statusClass += " w-1 h-1"
  } else if (size === "sm") {
    finalClass += " w-8 h-8"
    statusClass += " w-2 h-2"
  } else if (size === "base") {
    finalClass += " w-12 h-12"
    statusClass += " w-4 h-4"
  } else if (size === "lg") {
    finalClass += " w-16 h-16"
    statusClass += " w-5 h-5"
  } else if (size === "xl") {
    finalClass += " w-20 h-20"
    statusClass += " w-6 h-6"
  } else if (size === "2xl") {
    finalClass += " w-24 h-24"
    statusClass += " w-6 h-6"
  }
  if (status === "offline") statusClass += " bg-gray-200"
  else if (status === "online") statusClass += " bg-green-400"
  else if (status === "busy") statusClass += " bg-red-600"

  
  const {loginWithPopup, isLoading, logout, user, isAuthenticated} = useAuth0();
  

  return (
    <div>
        {isLoading?
        <div className={finalClass} {...newProps}>
            <FontAwesomeIcon icon={faUser} />
        </div>
            : isAuthenticated ? (
                <div className={finalClass} {...newProps}>
                    <Dropdown image={user.picture} logout={logout}/>
                </div>
            ) : (
                <button onClick={loginWithPopup} className="inline-flex items-center justify-center w-full h-8 px-2 font-semibold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-green-400 focus:outline-none">Iniciar sesión</button>
            )}
            {status && <div className={statusClass} />}
    </div>
      
  )
}

export default Avatar