const express = require('express');
const app = express();

app.use(express.json());


let books = [
    {id: 5, title: 'Pirej', author: 'Petre M. Andreevski', language: 'Macedonian'},
    {id: 7, title: 'The Name of the Rose', author: 'Umberto Eco', language: 'Italian'},
    {id: 9, title: 'Anna Karenina', author: 'Leo Tolstoy', language: 'Russian'}
];


app.get('/books', (req, res) => {
    res.send(books);
})
    .get('/books/:id', (req, res) => {
        const book = books.find(book => book.id == req.params.id);
        res.send(book);
        // res.send(book.author);
    })
    .post('/books', (req, res) => {
        books.push(req.body);
        res.send(books);
    })
    .patch('/books/:language', (req, res) => {
        books.forEach(book => {
            if (book.language == req.params.language) {
                if (req.body.author) {
                    book.author = req.body.author
                }
            }
        });

        res.send(books);
    })
    .put('/books/:id', (req, res) => {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id == req.params.id) {
                books[i] = req.body;
            }
        }
        res.send(books);
    })
    .delete('/books/:id', (req, res) => {
        const filterBooks = books.filter(book => book.id != req.params.id);
        books = filterBooks;

        res.send(books);
    });






app.listen('3007', () => {
    console.log('App started on port 3007');
});