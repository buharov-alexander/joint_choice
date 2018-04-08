import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import MovieContainer from '../containers/MovieContainer';

const Content = () => (
    <View >
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Movie', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <MovieContainer />
    </View>
);

export default Content;