import {useState } from 'react'
export default function Hero (props) {
  let title1 = props.title1
  let title2 = props.title2
  let title3 = props.title3
  let highlight = props.highlight
  let subtitle1 = props.subtitle1
  let subtitle2 = props.subtitle2
  let placeholder = props.placeholder
  const [searchName, setSearchName]= useState("");

  function changeISBN(event){
    setSearchName(event.target.value)
  }

    return (
      <div className="relative bg-blue-500">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              {title1}
              <br className="hidden md:block" />
               {title2}{' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-green-400" />
                <span className="relative text-teal-900">{highlight}</span>
              </span>
              <br className="hidden md:block" />
              {title3}{' '}
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
                    {subtitle1}
                  </p>
            {placeholder != null ?
              <div>
                  <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                    <input
                      placeholder="ISBN"
                      required
                      type="number"
                      className="flex-grow w-full h-12 px-4 mb-3 text-gray-600  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                      onChange={changeISBN}
                    />
                    <a
                      href={"books/"+searchName}
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-green-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Buscar 
                    </a>
                  </form>
                  <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                    {subtitle2}
                  </p>
              </div>
            : ''
            }
           
           
          </div>
        </div>
      </div>
    );
  };