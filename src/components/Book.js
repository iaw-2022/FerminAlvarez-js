import Badge from "./Badge"
import Loading from "../components/Loading"
import {useState, useEffect } from 'react'
import BookshopCard from "../components/BookshopCard"

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
    const [isLoaded, setIsLoaded] = useState(false);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        searchPrices()
      }, []);
    
    function searchPrices(){
        setIsLoaded(false);
        setError(false);
        getBookPrices(book.ISBN)
        .then(res => res.ok ? res.json() : null )
        .then(
            (data) => {
                if(data !== null){
                    setIsLoaded(true);
                    setPrices(data)
                }else{
                    setIsLoaded(true);
                    setError(true);
                }
            },
        )
    }

    return (
    <div>
        <div className="flex items-center justify-center my-8">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-213 bg-cover bg-landscape">
                    <img className ="h-60 w-60" src={book.image_link != null ? book.image_link : require("../assets/covert-not-available.png")} alt=""></img>
                </div>
                <div class="w-2/3 p-4">
                    <h1 class="text-gray-900 font-semibold text-2xl">
                        {book.name}
                    </h1>
                    <p class="mt-1 text-gray-700 font-semibold text-sm">
                        Editorial {book.publisher != null ? book.publisher : "Desconocida"}
                    </p>
                    <p class="mt-1 text-gray-600 font-semibold text-sm">
                        Categoría: <br></br>{book.category != null ? book.category : "Desconocida"}
                    </p>
                    {book.min_price != null ?
                        <div class="flex item-center justify-center mt-2">
                            <div>
                                <p class="text-sm font-semibold text-gray-600">Mejor precio</p>
                                <Badge color="green" text={"$"+book.min_price}/>
                            </div>
                        </div>
                        :
                        <Badge color="red" text="Sin stock"/>
                    }  
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
            {isLoaded ? prices.length>0?
            prices.map(((prices) => (
                <BookshopCard id={prices.Bookshop} name = {prices.name} text = {prices.link} badge_text = {"$"+prices.price} badge_color="green" link={prices.link}/>
            ))):"":<Loading/>}
        </div>
    </div>
    
)
}

