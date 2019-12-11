import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './MovieList.styles.scss';

class MovieList extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            movies:[]
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
                <div className="title"><h2>Popular Movies</h2></div>
                    <div className="row movieList">
                        {
                            this.state.movies && this.state.movies
                                .filter((movie, index) => index < 9)
                                .map(({original_title, poster_path, id}) => {
                                return(
                                    <div className="col-xs-6 col-md-4 movieBlock" key={id}>
                                        <Link to={`/movies/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                            <div className="panel panel-success">
                                                <div className="panel-body">
                                                    <img alt={original_title} src={`${baseUrl}${poster_path}`} className="img-responsive"/> 
                                                </div>
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        {original_title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        );
    }
}


export default (MovieList);