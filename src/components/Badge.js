function getBadgeClass(color){
    switch (color){
        case "green":
            return "inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600"
        case "red":
            return "inline-flex items-center m-2 px-3 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600"
        case "yellow":
            return "inline-flex items-center m-2 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600"
        case "blue":
            return "inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600"
        default:
            return "inline-flex items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
    }
}
function BookCard(props) {
    const text = props.text;
    const color = props.color;

    
    return (
        <span className={getBadgeClass(color) + " cursor-pointer"} >
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
            <span className="ml-1">
             {text}
            </span>
        </span>
    )
}

export default BookCard