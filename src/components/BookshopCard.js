function BookshopCard(props) {
    const id = props.bookshop.id;
    const name = props.bookshop.name;
    const city = props.bookshop.city;
    const street = props.bookshop.street;
    const number = props.bookshop.number;

    return (
    <a class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg" href={"/bookshops/" + id}>
        <span
            class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="justify-between sm:flex">
            <div>
            <h5 class="text-xl font-bold text-gray-900">
                {name}
            </h5>
            <p class="mt-1 text-xs font-medium text-gray-600">{city}</p>
            </div>

            <div class="flex-shrink-0 hidden ml-3 sm:block">
            <img
                class="object-cover w-16 h-16 rounded-lg shadow-sm"
                src="https://gooliads.com/wp-content/uploads/2021/01/BOOK-DEALERS-STORES.jpg"
                alt=""
            />
            </div>
        </div>

        
        </a>
    )
}

export default BookshopCard
