
import Badge from "../components/Badge"
import Favorite from "../components/Favorite"
function BookCard(props) {
    const book = props.book;
    return (
        <div className="flex items-center justify-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition  max-w-213 h-80x2">
                    <img className ="w-full h-80 " src={book.image_link != null ? book.image_link : require("../assets/covert-not-available.png")} alt=""></img>
                    <Favorite Favorite ={false}/>
                    <a href={"/books/"+book.ISBN}>
                        <div className="p-5 h-80">
                            <h1 className="text-xl font-bold">{book.name}</h1>
                            <p className="text-sm font-semibold text-gray-600">Editorial {book.publisher != null ? book.publisher : "Desconocida"}</p>
                            {
                            book.authors.map( (author => 
                                <p key= {author.id} className="mt-2 text-base font-semibold text-gray-600">{author.name}</p>
                            ))}
                            <div className="">
                                {book.min_price != null ?
                                    <Badge color="green" text={"$"+book.min_price}/>
                                    :
                                    <Badge color="red" text="Sin stock"/>
                                }
                            </div>
                        </div>
                            
                    </a>
                </div>
        </div>
    )
}

export default BookCard
