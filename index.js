const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const express = require("express");
const isEmpty = require('lodash.isempty');
const public = express.static("public");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const api = express();



// Inicia servidor
const port = 5000;
api.listen(port, () => console.log(`server started on ${port}`));

// Routes
const moviesRoute = require('./routes/movies')

// Midlewares
api.use(express.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use('/api/movies', moviesRoute)

// const uri = "mongodb://localhost:27017";
// const dbName = "nerdflix";
// const collectionName = "movies";

// const config = { useUnifiedTopology: true };

// const client = MongoClient(uri, config);

mongoose.connect( process.env.DB_CONNECTION || 'mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to DB')
});

// let collection;

// client.connect(err => {
//     if (err) throw err;
  
//     const db = client.db(dbName);
//     collection = db.collection(collectionName);

//     // client.close()
// });





// api.get("/api/peliculas", ({ params: { id: _id } }, res) => {


//     // const movies = [
//     //     {id : 1, Poster : 'https://picsum.photos/id/0/300/300', Title : 'Iron Man', Year : 2008, ficha : 'ironMan'},
//     //     {id : 2, Poster : 'https://picsum.photos/id/1/300/300', Title : 'The Incredible Hulk', Year : 2008, ficha : 'Hulk'},
//     //     {id : 3, Poster : 'https://picsum.photos/id/2/300/300', Title : 'Iron Man II', Year : 2010},
//     //     {id : 3, Poster : 'https://picsum.photos/id/3/300/300', Title : 'Thor', Year : 2011}
//     // ]

//     // res.json(movies)



//     client.connect(err => {
//         if(err) throw err;
        
//         const db = client.db(dbName)
//         const collection = db.collection(collectionName)
        
//         let query = {}
//         if ( !isEmpty( _id ) ) {
//             query = { ...query , _id : ObjectId(_id) }
//         }
        
//         collection.find(query).toArray((err,result) => {
//             if(err) throw err;

//                 res.json(result)

//             })
        
//     })    
// });

// api.post("/api/peliculas", ({ body: pelicula }, response) => {

//     client.connect(err => {
        
//         collection.insertOne(pelicula, (err, result) => {
//         if (err) throw err
//         response.json({
//             success: true,
//             message: "added."
//         })
//     })
// });

// })

