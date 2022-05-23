function BookCard(props) {
    const book = props.book;
    return (
        <div className=" flex items-center justify-center">
            <div className="w-60 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <img className ="w-60" src={book.image_link} alt=""></img>
                <div className="p-5">
                <h1 className="text-xl font-bold">{book.name}</h1>
                <p className="text-sm font-semibold text-gray-600">Editorial {book.publisher}</p>
                {book.authors.map( (author => 
                    <p className="mt-2 text-base font-semibold text-gray-600">{author.name}</p>
                ))}
                </div>
            </div>
        </div>
    )
}

export default BookCard