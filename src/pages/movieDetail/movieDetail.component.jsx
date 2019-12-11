import React, { Component } from 'react';

import './movieDetail.styles.scss';

class MovieDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movieId: props.match.params.movieId,
            posterPath:'',
            backdropPath: '',
            genres: '',
            title: '',
            overview: '',
            popularity: '',
            releaseDate: '',
            baseUrl: "https://api.themoviedb.org/3/movie/",
            apiKey: "?api_key=c9f3c719e4cce4a021ff37d2e89d43ba",
        }
       
    }

    getMovieDetails = () => {
        
        const apiEndPoint = `${this.state.baseUrl}${this.state.movieId}${this.state.apiKey}`;
        fetch(apiEndPoint)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    posterPath: data.poster_path,
                    backdropPath: data.backdrop_path,
                    genres: data.genres,
                    title: data.original_title,
                    overview:data.overview,
                    popularity: data.popularity,
                    releaseDate: data.release_date
                })
            })
            .catch((err)=>{
                console.error(err);
            })
    }
    
    componentDidMount() {
        this.getMovieDetails();
    }

    render() {
        const base = "https://image.tmdb.org/t/p/original/";
        return (
            <div className="container">
            <main role="main">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mt-4">{this.state.title}</h1>
                        <hr/>
                        <p>Released on {this.state.releaseDate}</p>
                        <hr/>
                        <img className="img-fluid rounded" src={`${base}${this.state.posterPath}`} alt={`${this.state.title}`} />
                        <hr/>
                        <p className="lead">{this.state.overview}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                    {  
                                        this.state.genres && this.state.genres.map((genre, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href="#">{genre.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>     
                    </div>
                </div>
            </main>
            </div>
        )
    }   
}

export default MovieDetail;