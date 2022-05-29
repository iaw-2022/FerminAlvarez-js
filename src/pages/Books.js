import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/BookCard"
import Filters from "../components/Filters"
import books from "../sub/Books"
import authors from "../sub/Authors"
import categories from "../sub/Categories"
import bookshops from "../sub/Bookshops"
import Hero from "../components/Hero"

function Books() {
  return (
    <div> 
      <Header />
      <Hero title1="Encuentra el libro" title2="que quieras, al" highlight="mejor precio" subtitle1="Puedes realizar una búsqueda más avanzada utilizando los filtros que se encuentran debajo." subtitle2 ="En caso de que el libro no se encuentre, intenta buscando por ISBN" placeholder="ISBN"/>
      <div className="grid place-items-center">
        <Filters authors = {authors} categories = {categories} bookshops = {bookshops}/>
      </div>
      <div className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
        <h1 className="text-3xl">Libros</h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold">1-16 de 148 Libros</span>
          <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
            <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
              <span className="font-medium">
                Más recientes
              </span>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Más recientes</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Más antiguos</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Menor precio</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Mayor precio</button>
            </div>
          </button>
        </div>
        <div className="grid 2xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-6 gap-y-12 w-full mt-6">
          {books.map(((book) => (
              <BookCard book={book}/>
          )))}
        </div>
      </div>

      <Footer />
    </div>
   
  )
}

export default Books
