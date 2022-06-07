import {useState, useEffect } from 'react'
import Header from "../components/Header"
import BookCard from "../components/BookCard"
import Filters from "../components/Filters"
import authors from "../sub/Authors"
import categories from "../sub/Categories"
import bookshops from "../sub/Bookshops"
import Hero from "../components/Hero"
import Loading from "../components/Loading"

function mapAuthorsID(selectedAuthors){
  let authorsIDS = []
  if(selectedAuthors.length>0)
    selectedAuthors.map((author) => (
      authorsIDS.push(author.id)
    ))
  return authorsIDS
}

function mapBookshopsID(selectedBookshops){
  let bookshopsIDS = []
  if(selectedBookshops.length>0)
    selectedBookshops.map((author) => (
      bookshopsIDS.push(author.id)
    ))
  return bookshopsIDS
}


async function callBookAPI(min_price, max_price, selectedAuthors, selectedBookshops, name){
    const authorsIDS = mapAuthorsID(selectedAuthors)
    const bookshopsIDS = mapBookshopsID(selectedBookshops)
    return fetch('https://precios-libros-api-v2.herokuapp.com/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {"name": name,
        "authors": authorsIDS,
        "bookshops": bookshopsIDS,
        "min_price": min_price,
        "max_price": max_price
        })
    });
}
export default function Books() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [minPrice, setMinPrice]= useState(0);
  const [maxPrice, setMaxPrice]= useState(10000);
  const [selectedAuthors, setSelectedAuthors]= useState(0);
  const [selectedBookshops, setSelectedBookshops]= useState(0);
  const [searchName, setSearchName]= useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    search()
  }, []);

  function search(){
    setIsLoaded(false);
    setError(false);
      callBookAPI(minPrice, maxPrice, selectedAuthors, selectedBookshops, searchName)
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setIsLoaded(true);
              setBooks(data)
            }else{
              setIsLoaded(true);
              setError(true);
            }
          },
      )
  }
  
    return (
      <div> 
        <Header />
        <Hero title1="Encuentra el libro" title2="que quieras, al" highlight="mejor precio" subtitle1="Puedes realizar una búsqueda más avanzada utilizando los filtros que se encuentran debajo." subtitle2 ="En caso de que el libro no se encuentre, intenta buscando por ISBN" placeholder="ISBN"/>
        <div className="grid place-items-center">
          <Filters authors = {authors} categories = {categories} bookshops = {bookshops} booksMinPrice={setMinPrice} 
          booksMaxPrice={setMaxPrice} search={search} setSelectedAuthors={setSelectedAuthors} setSelectedBookshops={setSelectedBookshops} setSearchName={setSearchName} />
        </div>
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl">Libros</h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
            <span className="text-sm font-semibold">{books.length} Libros</span>
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
                <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="/">Más recientes</a>
                <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="/">Más antiguos</a>
                <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="/">Menor precio</a>
                <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="/">Mayor precio</a>
              </div>
            </button>
          </div>

          {!isLoaded ? <Loading/> : ""}
          {!error ?
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-12 w-full mt-6">
              {books.length>0 ?
              books.map(((book) => (
                  <BookCard book={book} key={book.ISBN}/>
              ))):""}
            </div>
          : ""
        }
        </div>
      </div>
    )
  }
