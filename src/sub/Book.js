const book = 
{
        "ISBN": "9788417347291",
        "name": "El Imperio Final / the Final Empire",
        "publisher": null,
        "total_pages": 672,
        "published_at": "2020-01-20T03:00:00.000Z",
        "image_link": "http://books.google.com/books/content?id=i8sUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "category": "NOT_DEFINED_CATEGORY",
        "min_price": 4199,
        "authors": [
            {
                "id": "2",
                "name": "Brandon Sanderson"
            },
            
        ]
};

const prices = 
[
    {
        "ISBN": "9788417347291",
        "Bookshop": "2",
        "name": "Cúspide",
        "price": "4199.00",
        "link": "https://www.cuspide.com/Libro/9788417347291/Nacidos+Bruma+1+-El+Imperio+Final"
    },
    {
        "ISBN": "9788417347291",
        "Bookshop": "3",
        "name": "Cúspide",
        "price": "4199.00",
        "link": "https://www.cuspide.com/Libro/9788417347291/Nacidos+Bruma+1+-El+Imperio+Final"
    },
    {
        "ISBN": "9788417347291",
        "Bookshop": "1",
        "name": "Librería Don Quijote",
        "price": "4199.00",
        "link": "https://www.libreriadonquijote.com.ar/productos/nacidos-de-la-bruma-1-el-imperio-final/"
    }
]

module.exports = {
    book,
    prices
}