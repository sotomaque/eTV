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
        fetch(`https://www.omdbapi.com/?apikey=fa9a7315&s=alien&type=movie`)
            .then((res)=> res.json())
            .then((data)=>{
                this.setState({
                    movies:data.Search
                });
                console.log(this.state.movies)
            }).catch((err)=>{
                console.error(err);
            })
    }
    
    componentDidMount() {
        this.getMovie();
    }
    
    render(){
        return (
            <div>
                <section className="container"><div className="title"><h2>Popular Movies</h2></div>
                    <div className="row movieList display-flex">
                        {
                            this.state.movies.map((res, key) =>{
                                return(
                                    <div className="col-xs-6 col-md-4 movieBlock" key={key}>
                                        <div className="panel panel-success">
                                            <div className="panel-body">
                                                <img alt={res.Title} src={res.Poster} className="img-responsive"/> 
                                            </div>
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    {res.Title}
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