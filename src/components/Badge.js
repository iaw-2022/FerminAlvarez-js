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
            <span> {text} </span>
        </span>
    )
}

export default BookCard