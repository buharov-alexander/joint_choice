import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { loadMovies } from '../actions/movieActions'
import MovieList from '../components/MovieList'

class MovieContainer extends React.Component {

    componentDidMount() {
        this.props.actions.getMovies();
    }

    render() {
        return (
            <MovieList movies={this.props.movies} />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movie.moviesById
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getMovies: () => {
                dispatch(loadMovies());
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);