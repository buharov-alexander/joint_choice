import React from 'react';
import { ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        fetch('http://192.168.1.100:8090/jointchoice/movie')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    movies: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <List>
                {
                    this.state.movies.map((l, i) => (
                        <ListItem
                            avatar={{ uri: 'http://192.168.1.100:8090/jointchoice/movie/poster/' + l.id }}
                            key={i}
                            title={l.title}
                            subtitle={l.originalTitle}
                        />
                    ))
                }
            </List>
        );
    }
}