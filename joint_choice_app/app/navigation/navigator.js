import { StackNavigator } from 'react-navigation';
import MovieContainer from '../containers/movieContainer';
import MovieDetailsContainer from '../containers/movieDetailsContainer';
import MovieSearchContainer from '../containers/movieSearchContainer';
import {
  MOVIES_SCREEN,
  MOVIE_DETAILS_SCREEN,
  MOVIE_SEARCH_SCREEN,
} from '../constants/screenTypes';

const routeConfigs = {};

routeConfigs[MOVIES_SCREEN] = { screen: MovieContainer };
routeConfigs[MOVIE_DETAILS_SCREEN] = { screen: MovieDetailsContainer };
routeConfigs[MOVIE_SEARCH_SCREEN] = { screen: MovieSearchContainer };

const stackNavigatorConfig = { initialRouteName: MOVIES_SCREEN };

export default StackNavigator(routeConfigs, stackNavigatorConfig);
