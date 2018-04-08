import React from 'react';
import { List, ListItem } from 'react-native-elements';

export default MovieList = ({ movies }) => {
    return (
        <List>
            {
                Array.from(movies.values()).map(movie => (
                    <ListItem
                        avatar={{ uri: 'http://192.168.1.100:8090/jointchoice/movie/poster/' + movie.id }}
                        key={movie.id}
                        title={movie.title}
                        subtitle={movie.originalTitle}
                    />
                ))
            }
        </List>
    );
};
