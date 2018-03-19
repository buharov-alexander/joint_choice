
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Бойцовский клуб',
    avatar_url: 'https://image.tmdb.org/t/p/w92/hTjHSmQGiaUMyIx3Z25Q1iktCFD.jpg'
  },
  {
    name: 'Унесенные ветром',
    avatar_url: 'https://image.tmdb.org/t/p/w92/ihdfdftLqhItvsUEx0CugJ0WGOc.jpg'
  }
];


export default class App extends React.Component {

  render() {
    return (
      <View >
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Movie', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <List>
          {
            list.map((l, i) => (
              <ListItem
                
                avatar={{ uri: l.avatar_url }}
                key={i}
                title={l.name}
              />
            ))
          }
        </List>
      </View>
    );
  }
}
