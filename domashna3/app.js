const express = require('express');
const app = express();

app.use(express.json());

let fruits = [
    {id: 1, name: 'orange'},
    {id:2, name: 'apple'},
    {id: 3, name: 'pear'}
];

app
    .get('/fruits', (req, res) => {
        res.send(fruits);
    })
    .delete('/fruits/:id', (req, res) => {
        const filterFruitsArray = fruits.filter(fruit => fruit.id != req.params.id);
        fruits = filterFruitsArray;

        res.send(fruits);
    });
    


app.listen('3005', () => {                  
    console.log('App started on port 3005');
});