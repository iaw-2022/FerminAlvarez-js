import React from "react"
import BookshopCard from "../components/BookshopCard"
import Hero from "../components/Hero"
import {useState, useEffect } from 'react'
import Loading from "../components/Loading"

async function callBookshopsApi(){
  return fetch('https://precios-libros-api-v2.herokuapp.com/bookshops', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}



export default function Bookshops() {
  const [bookshops, setBookshops]= useState(0);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getBookshops()
  }, []);

  function getBookshops(){
    setError(false);
    callBookshopsApi()
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setBookshops(data)
              setIsLoaded(true)
            }else{
              setError(true);
            }
          },
      )
  }

  return (
    <div> 
      <Hero title2="Estas son las " highlight="librerías" title3="de las cuales tenemos precios" subtitle1="Los precios que se obtienen de estas librerías son obtenidos de su sitio web." />
    {   error?
            <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
              Ocurrió un error
            </div>
          :
        isLoaded?
          <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 pt-6 gap-8 mb-6">
              {bookshops.map(((bookshop) => (
                bookshop.city != null ? 
                  <BookshopCard key={bookshop.id} id={bookshop.id} name = {bookshop.name} text = {bookshop.city + " " + bookshop.street + " " + bookshop.number} />:
                  <BookshopCard key={bookshop.id} id={bookshop.id} name = {bookshop.name} text = {""} />
            )))}
          </div>:
        <Loading/>
      }
    </div>
  )
}