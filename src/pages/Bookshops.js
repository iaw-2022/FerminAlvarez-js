import React from "react"
import Header from "../components/Header"
import BookshopCard from "../components/BookshopCard"
import Hero from "../components/Hero"
import bookshops from "../sub/Bookshops"

function Bookshops() {
  return (
    <div> 
      <Header />
      <Hero title2="Estas son las " highlight="librerías" title3="de las cuales tenemos precios" subtitle1="Los precios que se obtienen de estas librerías son obtenidos de su sitio web." />
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 pt-6 gap-8 mb-6">
          {bookshops.map(((bookshop) => (
              bookshop.city != null ? 
                <BookshopCard id={bookshop.id} name = {bookshop.name} text = {bookshop.city + " " + bookshop.street + " " + bookshop.number} />:
                <BookshopCard id={bookshop.id} name = {bookshop.name} text = {""} />
          )))}
        </div>
      
    </div>
  )
}

export default Bookshops
