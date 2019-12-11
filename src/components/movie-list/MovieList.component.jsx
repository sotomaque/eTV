import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './MovieList.styles.scss';

class MovieList extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            movies:[],
            search:'popular'
        };
    }


    getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=c9f3c719e4cce4a021ff37d2e89d43ba")
            .then((res)=> res.json())
            .then((data) => {
                this.setState({
                    movies: data.results
                })
            })
        
            .then(() => console.log('state', this.state))
            .catch((err)=>{
                console.error(err);
            })
    }
    
    componentDidMount() {
        this.getMovie();
    }
    
    render(){
        var baseUrl = "https://image.tmdb.org/t/p/original/";
        
        return (
            <div>
                <section className="container"><div className="title"><h2>Popular Movies</h2></div>
                    <div className="row movieList display-flex">
                        {
                            this.state.movies && this.state.movies
                                .filter((movie, index) => index < 9)
                                .map((res, key) =>{
                                return(
                                    <div className="col-xs-6 col-md-4 movieBlock" key={key}>
                                        <div className="panel panel-success">
                                            <div className="panel-body">
                                                <img alt={res.original_title} src={`${baseUrl}${res.poster_path}`} className="img-responsive"/> 
                                            </div>
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    {res.original_title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }
}


export default MovieList;