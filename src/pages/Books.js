import {useState, useEffect } from 'react'
import BookCard from "../components/BookCard"
import Filters from "../components/Filters"
import Hero from "../components/Hero"
import Loading from "../components/Loading"
import {useAuth0} from '@auth0/auth0-react'

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

function createBody(name, authorsIDS, bookshopsIDS, min_price, max_price){
  if (min_price !== 0 || max_price !== 10000){
    return JSON.stringify(
      {"name": name,
      "authors": authorsIDS,
      "bookshops": bookshopsIDS,
      "min_price": min_price,
      "max_price": max_price
    })
  }else{
    return JSON.stringify(
      {"name": name,
      "authors": authorsIDS,
      "bookshops": bookshopsIDS,
    })
  }
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

      body: createBody(name, authorsIDS, bookshopsIDS, min_price, max_price)
    });
}

async function callAuthorsApi(){
  return fetch('https://precios-libros-api-v2.herokuapp.com/authors', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

async function callBookshopsApi(){
  return fetch('https://precios-libros-api-v2.herokuapp.com/bookshops', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

async function callFavoriteBooks(token){
  return fetch('https://precios-libros-api-v2.herokuapp.com/suscribers', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' +token
    },
  });
}


export default function Books() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookshops, setBookshops] = useState(false);
  const [authors, setAuthors] = useState(false);
  const [minPrice, setMinPrice]= useState(0);
  const [maxPrice, setMaxPrice]= useState(10000);
  const [selectedAuthors, setSelectedAuthors]= useState(0);
  const [selectedBookshops, setSelectedBookshops]= useState(0);
  const [favoritesBooks, setFavoritesBooks]= useState("");
  const [searchName, setSearchName]= useState("");
  const [books, setBooks] = useState([]);
  const [order, setOrder] = useState("Ordenar por:");
  const {getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    search()
    getAuthors()
    getBookshops()
    getToken().then((token) => {
      if(token != null){
        getFavoriteBooks(token)
      }else
        setIsLoaded(true)
      
    })
  }, []);

  
  function search(){
      callBookAPI(minPrice, maxPrice, selectedAuthors, selectedBookshops, searchName)
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setBooks(data)
              if(token != null){
                getFavoriteBooks(token).then(setIsLoaded(true))
              }else
                setIsLoaded(true)
            }else{
              setError(true);
            }
          },
      )
  }

  function getAuthors(){
    setError(false);
      callAuthorsApi()
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setAuthors(data)
            }else{
              setError(true);
            }
          },
      )
  }

  function getBookshops(){
    setError(false);
    callBookshopsApi()
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setBookshops(data)
            }else{
              setError(true);
            }
          },
      )
  }

  function getFavoriteBooks(token){
    setIsLoaded(false)
    callFavoriteBooks(token)
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setFavoritesBooks(data)
              setIsLoaded(true)
            }else
              setIsLoaded(true)
          },
      )
  }

  async function getToken(){
    let token = ""
    try{
      token = await getAccessTokenSilently()
      setToken(token)
      return token
    }catch(err){
      return null
    }
  }
  

  function orderByPriceMin(){
    books.sort((a, b) => a.min_price - b.min_price);
  } 
  
  function orderByPriceMax(){
    books.sort((a, b) => b.min_price - a.min_price);
  }

  function showDropdownOptions() {
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
  }

  function isFavorite(ISBN){
    for (var i = 0; i < favoritesBooks.length; i++) {
      if (favoritesBooks[i].ISBN === ISBN) 
        return true;
    }
    return false;
  }
  
    return (
      <div> 
        <Hero title1="Encuentra el libro" title2="que quieras, al" highlight="mejor precio" subtitle1="Puedes realizar una búsqueda más avanzada utilizando los filtros que se encuentran debajo." subtitle2 ="En caso de que el libro no se encuentre, intenta buscando por ISBN" placeholder="ISBN"/>
        <div className="grid place-items-center">
          {
          <Filters authors = {authors} bookshops = {bookshops} booksMinPrice={setMinPrice} 
          booksMaxPrice={setMaxPrice} search={search} setSelectedAuthors={setSelectedAuthors} setSelectedBookshops={setSelectedBookshops} setSearchName={setSearchName} />
          }
        </div>
        <div className="flex flex-col  p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl">Libros</h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
            <span className="text-sm font-semibold">{!error ? books.length : 0} Libros</span>
              <div className="flex-none p-2">
                  <button onClick={() => showDropdownOptions()} className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600">
                      <span className="select-none">{order}</span>
                      <svg id="arrow-down" className=" w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  /></svg>
                      <svg id="arrow-up" className="hidden w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" /></svg>
                  </button>
                  <div id="options" className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                      <button onClick={() => {orderByPriceMin(); setOrder("Menor precio"); showDropdownOptions()}} className="block px-4 py-2 text-gray-800">Menor precio</button>
                      <button onClick={() => {orderByPriceMax(); setOrder("Mayor precio"); showDropdownOptions()}} className="block px-4 py-2 text-gray-800">Mayor precio</button>
                  </div>
              </div>
          </div>

          {!isLoaded ? <Loading/> 
          : !error ?
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-12 w-full mt-6">
              {books.length>0 ?
              books.map(((book) => (
                <BookCard book={book} key={book.ISBN} token={token} isFavorite = {isFavorite(book.ISBN)}/> ))):""}
            </div>
          : ""
        }
        </div>
      </div>
    )
  }
