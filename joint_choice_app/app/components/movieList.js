import React from 'react';
import { List, ListItem, Header } from 'react-native-elements';
import {
    MOVIE_DETAILS_SCREEN
} from '../constants/screenTypes';

export default MovieList = ({ movies, navigation }) => {
    return (
        <List>
            {
                movies.toList().map(movie => (
                    <ListItem
                        avatar={{ uri: 'http://192.168.1.100:8090/jointchoice/movie/poster/' + movie.id }}
                        key={movie.id}
                        title={movie.title}
                        subtitle={movie.originalTitle}
                        onPress={() => navigation.navigate(MOVIE_DETAILS_SCREEN)}
                    />
                ))
            }
        </List>
    );
};

