
import Badge from "../components/Badge"
function BookCard(props) {
    const book = props.book;
    return (
        <div className="flex items-center justify-center">
            <div className="w-60 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <img className ="h-60 w-60" src={book.image_link != null ? book.image_link : require("../assets/covert-not-available.png")} alt=""></img>
                <div className="p-5 h-80">
                    <h1 className="text-xl font-bold">{book.name}</h1>
                    <p className="text-sm font-semibold text-gray-600">Editorial {book.publisher != null ? book.publisher : "Desconocida"}</p>
                    {book.authors.map( (author => 
                        <p key= {author.id}className="mt-2 text-base font-semibold text-gray-600">{author.name}</p>
                    ))}
                    <div className="">
                        {book.min_price != null ?
                            <Badge color="green" text={"$"+book.min_price}/>
                            :
                            <Badge color="red" text="Sin stock"/>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BookCard
