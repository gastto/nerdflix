import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Details from '../Details'
// import './App.css';

function Details({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match)
    })

    const [movie, setMovie] = useState([]);

    const fetchItem = async () => {

        const fetchItems = await fetch(`/api/peliculas/${match.params.id}`)

        const movie = await fetchItem.json();

        console.log(movie)
      
    };

    return (
        <div>
            <p style={{ textShadow: "5px 5px 5px black", fontSize: "50px", color: "white" }}>item</p>
            <div className="row m-0 w-100 mx-auto">
                
  
            </div>
        </div>
        );
    }

  


export default Details;
