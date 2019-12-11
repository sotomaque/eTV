import React from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import MovieList from '../../components/movie-list/MovieList.component';
import ShowsList from '../../components/shows-list/ShowsList.component';


import './homepage.styles.scss';

const HomePage = () => (
    <div>
        <main role="main">
            <div className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-3">Banner</h1>
                    <p>Track what you've watched</p>
                    <p>Find your next show</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"><Sidebar /></div>
                    <div className="col-md-10"><MovieList /><ShowsList /></div>
                </div>
            </div>
        </main>
    </div>
);

export default HomePage;