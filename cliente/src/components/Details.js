import React from 'react';

class Details extends React.Component {

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
                { this.state.movies.map(movie => 
                    <div key="movie._id">
                        <h1>{ movie.Title }</h1>

                        <div className="row">
                            <div className="col-6">
                                { movie.Trailer }
                            </div>

                            <div className="col-6">
                                { movie.Poster }
                            </div>
                        </div>

                    </div>
                
                )}

                
            </div>
        )
    }
}

export default Details;
