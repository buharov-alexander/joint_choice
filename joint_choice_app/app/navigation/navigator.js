import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovieContainer from '../containers/movieContainer';
import MovieDetailsContainer from '../containers/movieDetailsContainer';
import {
    MOVIES_SCREEN,
    MOVIE_DETAILS_SCREEN
} from '../constants/screenTypes';

const screens = {};

screens[MOVIES_SCREEN] = {
    screen: MovieContainer
};
screens[MOVIE_DETAILS_SCREEN] = {
    screen: MovieDetailsContainer
};

export default Navigator = StackNavigator(
    screens,
    {
        initialRouteName: MOVIES_SCREEN
    }
);