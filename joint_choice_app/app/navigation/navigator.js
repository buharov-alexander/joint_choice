import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovieContainer from '../containers/movieContainer';
import MovieDetailsContainer from '../containers/movieDetailsContainer';
import {
    MOVIES_SCREEN,
    MOVIE_DETAILS_SCREEN
} from '../constants/screenTypes';

const routeConfigs = {};

routeConfigs[MOVIES_SCREEN] = {
    screen: MovieContainer
};
routeConfigs[MOVIE_DETAILS_SCREEN] = {
    screen: MovieDetailsContainer
};

const stackNavigatorConfig = {
    initialRouteName: MOVIES_SCREEN
};

export default Navigator = StackNavigator(routeConfigs, stackNavigatorConfig);