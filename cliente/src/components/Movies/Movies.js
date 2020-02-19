import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Details from '../Details'
// import './App.css';

function Movies() {

    useEffect(() => {
        fetchItems();
    })

    const [movies, setMovies] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('/api/peliculas');

            const movies = await data.json();
            // console.log(movies)
            setMovies(movies)

    };

//     constructor() {
//         super();
//         this.state = {
//             movies: []
//         }
//     }

//     componentDidMount() {
//         fetch('/api/peliculas')
//         .then(res => res.json())
//         .then(movies => this.setState({movies}, () => console.log('movies fetched...', movies)));
//     }

        return (
            <div>
                <p style={{ textShadow: "5px 5px 5px black", fontSize: "50px", color: "white" }}>ULTIMOS ESTRENOS</p>
                <div className="row m-0 w-100 mx-auto">
                    
                    { movies.map(movie => 
                        <div className="col-3" key={movie._id}>
                            
                            <div className="card-group h-100">
                                <div className="card my-5" style={{ boxShadow: "5px 5px 5px black" }}>
                                    <div className="card-header p-0">
                                        <img src={ movie.poster } className="img-fluid" alt="" />
                                    </div>
                                    <div className="card-body h-100" style={{ gridTemplateColumns: "60px", gridTemplateRows: "90px 90px 90px"}}>
                                    
                                        <p className="m-1"> { movie.title } </p> 
                                        <h6 className="m-1"> { movie.years } </h6>

                                        
                                        <Link to={`/movie/${movie._id}`}>
                                            <button type="button" href="#" className="btn btn-danger">Mas Info</button>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                        
                </div>
            </div>
          );
    }

  


export default Movies;
