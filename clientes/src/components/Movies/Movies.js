import React from 'react';
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
              <ul>
                  { this.state.movies.map(movie => 
                    <li key={movie.id}>{ movie.firstName } { movie.lastName }</li>
                )}
              </ul>
            </div>
          );
    }

  
}

export default Movies;
