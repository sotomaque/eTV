import React, {Component} from 'react';

import './ShowsList.styles.scss';

class ShowsList extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            shows:[],
            search:'popular'
        };
    }


    getShow = () => {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=c9f3c719e4cce4a021ff37d2e89d43ba")
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    shows: data.results
                })
            })
        
            .then(() => console.log('state', this.state))
            .catch((err)=>{
                console.error(err);
            })
    }
    
    componentDidMount() {
        this.getShow();
    }
    
    render(){
        var baseUrl = "https://image.tmdb.org/t/p/original/";
        
        return (
            <div>
                <div className="title"><h2>Popular Series</h2></div>
                    <div className="row showList">
                        {
                            this.state.shows && this.state.shows
                                .filter((show, index) => index < 9)
                                .map((res, key) =>{
                                    return(
                                        <div className="col-xs-6 col-md-4 showBlock" key={key}>
                                            <div className="panel panel-success">
                                                <div className="panel-body">
                                                    <img alt={res.original_name} src={`${baseUrl}${res.poster_path}`} className="img-responsive"/> 
                                                </div>
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        {res.original_name}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            })
                        }
                    </div>
            </div>
        );
    }
}


export default ShowsList;