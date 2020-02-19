import React from 'react';
// import Details from '../Details'
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
                <div className="row m-0 w-100 mx-auto">
                    
                    { this.state.movies.map(movie => 
                        <div className="col-3" key={movie._id}>
                            <div className="card my-5" style={{ boxShadow: "5px 5px 5px black" }}>
                                <div className="card-header p-0">
                                    <img src={ movie.poster } className="img-fluid" alt="" />
                                </div>
                                <div className="card-body">
                                   <p> { movie.title } </p> 
                                   <h6> { movie.years } </h6>

                                   <button href="#" className="btn btn-danger">Mas Info</button>
                                   
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
