const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const express = require("express");
const isEmpty = require('lodash.isempty');
const public = express.static("public")

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json());
api.use(public);

// Inicia servidor
const port = 5000;
api.listen(port, () => console.log(`server started on ${port}`));

const uri = "mongodb://localhost:27017";
const dbName = "nerdflix";
const collectionName = "movies";

const config = { useUnifiedTopology: true };

const client = MongoClient(uri, config);

let collection;

client.connect(err => {
    if (err) throw err;
  
    const db = client.db(dbName);
    collection = db.collection(collectionName);

    // client.close()
});


api.get("/api/peliculas", (req, res) => {

    const movies = [
        {id : 1, firstName : 'Pedro', lastName : 'Alvarez'},
        {id : 2, firstName : 'Andres', lastName : 'Diaz'},
        {id : 3, firstName : 'Alfredo', lastName : 'Gonzales'}
    ]

    res.json(movies)


    // client.connect(err => {
    //     if(err) throw err;
        
    //     const db = client.db(dbName)
    //     const collection = db.collection(collectionName)
        
    //     let query = {}
    //     if ( !isEmpty( _id ) ) {
    //     query = { ...query , _id : ObjectId(_id) }
    // }
        
    //     collection.find(query).toArray((err,result) => {
    //         if(err) throw err;

    //         (async function () { // pasar a AXIOS o node-fetch (axios tiene promesas embebidas, no se utilizan metodos then ni operaciones intermediarias para convertir los datos)

    //             await fetch('http://localhost:8080/api/peliculas');
    //             result.forEach(e => localStorage.setItem("hola",JSON.stringify(e)))

    //         })()
        
    //         response.json(result)
    //     })
    // })    
});

api.post("/api/peliculas", ({ body: pelicula }, response) => {

    client.connect(err => {
        
        collection.insertOne(pelicula, (err, result) => {
        if (err) throw err
        response.json({
            success: true,
            message: "added."
        })
    })
});

})

