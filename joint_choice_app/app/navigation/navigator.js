import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovieContainer from '../containers/movieListContainer';
import MovieDetailsContainer from '../containers/movieDetailsContainer';

export default Navigator = StackNavigator(
    {
        Movies: {
            screen: MovieContainer,
        },
        MovieDetails: {
            screen: MovieDetailsContainer,
        },
    },
    {
        initialRouteName: 'Movies',
    }
);