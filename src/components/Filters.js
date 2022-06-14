import {useState } from 'react'
import React from "react"
import Combobox from "./ComboBoxMultiple"
import MinimumDistanceSlider from './Slider';
import Badge from '../components/Badge';

export default function Filters(props) {
  let authors = props.authors;
  let bookshops = props.bookshops;

  function changeAuthorsSelected (value){
    setAuthorsSelecteds(value);
    props.setSelectedAuthors(value);
  }

  function changeBookshopsSelected (value){
    setBookshopsSelecteds(value);
    props.setSelectedBookshops(value);
  }

  function changeMinPriceSelected(min){
    props.booksMinPrice(min)
    setMinPrice(min)
  }

  function changeMaxPriceSelected(max){
    props.booksMaxPrice(max)
    setMaxPrice(max)
  }

  function changeTitle(event){
    props.setSearchName(event.target.value)
  }

  const [authorsSelecteds, setAuthorsSelecteds] = useState([]);
  const [bookshopsSelecteds, setBookshopsSelecteds] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  return (
    <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white my-6">
        <div>
            <h3 className="text-xl mb-4">Búsqueda Avanzada</h3>
            <div className="relative">
                <div className="absolute flex items-center ml-2 h-full">
                    <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                    </svg>
                </div>

                <input type="text" placeholder="Buscar un libro por su nombre..." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" onChange={changeTitle}></input>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
                        {bookshops.length > 0 ? 
                        <Combobox list={bookshops} placeholder="Librerías" selected = {changeBookshopsSelected}/>
                        :""}
                        {authors.length > 0 ? 
                        <Combobox list={authors} placeholder="Autores" selected = {changeAuthorsSelected}/>
                        :""}
                        <MinimumDistanceSlider booksMinPrice = {changeMinPriceSelected} booksMaxPrice = {changeMaxPriceSelected}/>
                    </div>
                    
                </div>

                {bookshopsSelecteds.length>0?
                bookshopsSelecteds.map((bookshop) => (
                    <Badge text={bookshop.name} color={"yellow"} />
                )):""}

                {authorsSelecteds.length>0?
                authorsSelecteds.map((author) => (
                    <Badge text={author.name} color={"blue"} />
                )):""}
                  
                {minPrice == 0 && maxPrice == 10000?
                ""
                : <Badge text={minPrice +  " - " + maxPrice} color="green"/>
                }
            </div>
            <button onClick={props.search}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-green-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Buscar 
            </button>
        </div>
  )
}
