import React from "react"
import Header from "../components/Header"
import BookComponent from "../components/Book"
import Loading from "../components/Loading"
import { useParams } from "react-router-dom";
import {useState, useEffect } from 'react'


async function getBook(ISBN){
  return fetch('https://precios-libros-api-v2.herokuapp.com/books/'+ISBN, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}




export default function Book() {
  let {ISBN} = useParams();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [book, setBook] = useState([]);

  useEffect(() => {
    searchBook()
  }, []);

  function searchBook(){
    setIsLoaded(false);
    setError(false);
    getBook(ISBN)
      .then(res => res.ok ? res.json() : null )
      .then(
          (data) => {
            if(data !== null){
              setBook(data)
              setIsLoaded(true)
            }else{
              setError(true);
            }
          },
      )
  }

  return (
    <div> 
      <Header />
      {error? 
        <div class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
            No pudimos encontrar el libro
        </div>
      :isLoaded? 
        <BookComponent book={book[0]}/> 
      : <Loading/>  }
      
    </div>
   
  )
}
