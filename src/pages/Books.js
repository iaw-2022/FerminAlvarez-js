import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/BookCard"
import books from "../sub/Books"

function Books() {
  return (
    <div>
      <Header />
      <div>
        {books.map(((book) => (
            <BookCard book={book}/>
        )))}
      </div>
      
      <Footer />
    </div>
   
  )
}

export default Books