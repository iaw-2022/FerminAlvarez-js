import React from "react"
import Header from "../components/Header"
import BookComponent from "../components/Book"
import Footer from "../components/Footer"
import BookData from "../sub/Book"
import { useParams } from "react-router-dom";

function Book() {
  let {ISBN} = useParams();
  return (
    <div> 
      <Header />
      <BookComponent book={BookData.book} prices={BookData.prices}/>
      <Footer />
    </div>
   
  )
}

export default Book
