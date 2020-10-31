import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {MoviesList} from "./MoviesList";
import MovieDetail from "./MovieDetail";


export default class MoviesManager extends React.Component {

    render() {
        return (
            <Router>
                <Route
                    exact path={'/'}
                    component={MoviesList}
                />
                <Route
                    exact path={'/movie/:movieId'}
                    render={(props) =>
                        <MovieDetail
                            {...props}
                            movieId={props.match.params.movieId}
                        />
                    }
                />
            </Router>
        )
    }
}

