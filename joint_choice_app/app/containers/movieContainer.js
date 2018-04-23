import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { loadMovies } from '../actions/movieActions';
import MovieList from '../components/movieList';

@connect(mapStateToProps, mapDispatchToProps)
export default class MovieContainer extends React.Component {
    static navigationOptions = {
        title: 'Movie',
    };

    componentDidMount() {
        this.props.actions.getMovies();
    }

    render() {
        return (
            <MovieList {...this.props} />
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
