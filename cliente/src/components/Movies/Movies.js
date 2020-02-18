import React from 'react';
import Details from '../Details'
// import './App.css';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('/api/peliculas')
        .then(res => res.json())
        .then(movies => this.setState({movies}, () => console.log('movies fetched...', movies)));
    }

    render() {
        
        return (
            <div>
                <h1>Peliculas</h1>
                <div className="row m-0 w-100 mx-auto">
                    
                    { this.state.movies.map(movie => 
                        <div className="col-3" key={movie._id}>
                            <div className="card mb-5" style={{ boxShadow: "5px 5px 5px lightgray" }}>
                                <div className="card-header p-0">
                                    <img src={ movie.Poster } className="img-fluid" alt="" />
                                </div>
                                <div className="card-body">
                                   <p> { movie.Title } </p> 
                                   <h6> { movie.Year } </h6>

                                   <button href="#" className="btn btn-danger" onClick="../Details">Mas Info</button>
                                   
                                </div>
                            </div>
                        </div>
                    )}
                        
                </div>
            </div>
          );
    }

  
}

export default Movies;
