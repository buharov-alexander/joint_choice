import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { loadMovies } from '../actions/movieActions';
import MovieDetails from '../components/movieDetails';

class MovieDetailsContainer extends React.Component {
    static navigationOptions = {
        title: 'Movie Details',
    };

    render() {
        return (
            <MovieDetails {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movie.moviesById
    }
}


export default connect(mapStateToProps)(MovieDetailsContainer);