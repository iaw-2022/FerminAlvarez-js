import Badge from "./Badge"
function BookshopCard(props) {
    const name = props.name;
    const text = props.text;
    const badge_color = props.badge_color;
    const badge_text = props.badge_text;
    const link = props.link;
    return (
    <a className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg" href={link}>
        <span
            className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>
        <div className="justify-between sm:flex">
            {badge_color!=null&&badge_text!=null?
                <Badge text = {badge_text} color = {badge_color}/>
            : ""
            }
            <div>
                <h5 className="text-xl font-bold text-gray-900">
                    {name}
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">{text}</p>
            </div>
            

            <div className="flex-shrink-0 hidden ml-3 sm:block">
            <img
                className="object-cover w-16 h-16 rounded-lg shadow-sm"
                src="https://gooliads.com/wp-content/uploads/2021/01/BOOK-DEALERS-STORES.jpg"
                alt=""
            />
            </div>
        </div>

        
        </a>
    )
}

export default BookshopCard
