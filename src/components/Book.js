import Badge from "./Badge"
import Loading from "../components/Loading"
import {useState, useEffect } from 'react'
import BookshopCard from "../components/BookshopCard"

async function getBookInfo(ISBN){
    return fetch('https://precios-libros-api-v2.herokuapp.com/books/'+ISBN, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }

async function getBookPrices(ISBN){
    return fetch('https://precios-libros-api-v2.herokuapp.com/books/'+ISBN+"/prices", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }

export default function Book(props) {
    let book = props.book;

    const [error, setError] = useState(false);
    const [isLoadedPrices, setIsLoadedPrices] = useState(false);
    const [isLoadedBook, setIsLoadedBook] = useState(false);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        searchPrices()
      }, []);
    
    function searchPrices(){
        setError(false);
        getBookPrices(book.ISBN)
        .then(res => res.ok ? res.json() : null )
        .then(
            (data) => {
                if(data !== null){
                    setIsLoadedPrices(true);
                    setPrices(data)
                    searchBookInfo()
                }else{
                    setIsLoadedPrices(true);
                    setError(true);
                }
            },
        )
    }
    function searchBookInfo(){
        getBookInfo(book.ISBN)
        .then(res => res.ok ? res.json() : null )
        .then(
            (data) => {
                if(data !== null){
                    setIsLoadedBook(true)
                    book.min_price = data[0].min_price
                }
            },
        )
    }

    return (
    <div>
        <div className="flex items-center justify-center my-8">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                
                <div className="w-213 bg-cover bg-landscape">
                    <img className ="h-full max-w-60" src={book.image_link != null ? book.image_link : require("../assets/covert-not-available.png")} alt=""></img>
                </div>
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-semibold text-2xl">
                        {book.name}
                    </h1>
                    <p className="mt-1 text-gray-700 font-semibold text-sm">
                        Editorial {book.publisher != null ? book.publisher : "Desconocida"}
                    </p>
                    <p class="mt-1 text-gray-600 font-semibold text-sm">
                        Categoría: <br></br>{book.category !== "NOT_DEFINED_CATEGORY" ? book.category : "Desconocida"}
                    </p>
                    {error?  
                        <Badge color="red" text="Sin stock"/>
                    :
                        isLoadedBook?
                            <div className="flex item-center justify-center mt-2">
                                <div>
                                    <p className="text-sm font-semibold text-gray-600">Mejor precio</p>
                                    <Badge color="green" text={"$"+book.min_price}/>
                                </div>
                            </div>
                        :
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Mejor precio</p>
                            <Badge color="green" text={"..."}/>
                        </div>
                    }
                    <p className="text-sm font-semibold text-gray-600">ISBN:{book.ISBN}</p>  
                </div>
            </div>
        </div>
        <div>
            {book.authors.length>0?
            book.authors.map( (author => 
                <p key= {author.id} className="mt-2 text-base font-semibold text-gray-600">{author.name} <br></br></p> 
            )):""}
        </div>
        <div className="container mx-auto grid-cols-1 pt-6 gap-8 mb-6">
            {isLoadedPrices ?
            error || prices.length === 0 ?
            <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
                No pudimos encontrar precios
            </div>:
            prices.map(((prices) => (
                <BookshopCard id={prices.Bookshop} name = {prices.name} text = {prices.link} badge_text = {"$"+prices.price} badge_color="green" link={prices.link}/>
            ))):
            <Loading/>}
        </div>
    </div>
    
)
}

