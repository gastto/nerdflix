const express = require('express')

const router = express.Router()
const Movies = require('../model/Movies')


router.get('/', (req,res) => {
    res.end('we are post')
})

router.post('/', async (req,res) => {
    const movie = new Movies({
        title: req.body.title,
        years: req.body.years,
        poster: req.body.poster,
        trailer: req.body.trailer,
        description: req.body.description
    })
    console.log(movie)

    try{
        const savedMovie = await movie.save()
        res.json( savedMovie )

    }catch(err){
        res.json({
            message: err
        })
    }

})

module.exports = router;