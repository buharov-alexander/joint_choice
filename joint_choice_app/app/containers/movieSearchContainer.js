import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { searchMovies } from '../actions/movieActions';
import SearchForm from '../components/movieSearch/searchForm';
import FoundMovieList from '../components/movieSearch/foundMovieList';
import { TYPPING_TIMEOUT } from '../constants/actionTypes';

function mapStateToProps(state) {
  return {
    foundMovies: state.search.foundMovieList,
    tappingTimeout: state.search.tappingTimeout,
    searchMovieQuery: state.search.searchMovieQuery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchMovies: text => dispatch(searchMovies(text)),
      setTappingTimeout: timeoutId => dispatch({
        type: TYPPING_TIMEOUT,
        payload: timeoutId,
      }),
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class movieSearchContainer extends React.Component {
  static navigationOptions = {
    title: 'Search',
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    foundMovies: PropTypes.object.isRequired,
    tappingTimeout: PropTypes.number.isRequired,
    searchMovieQuery: PropTypes.string.isRequired,
  }

  changeTextInSearchForm = (text) => {
    if (this.props.tappingTimeout) {
      clearTimeout(this.props.tappingTimeout);
    }

    const timeoutId = setTimeout(() => {
      this.props.actions.searchMovies(text);
    }, 800);
    this.props.actions.setTappingTimeout(timeoutId);
  };

  render() {
    return (
      <View >
        <SearchForm
          onChangeText={this.changeTextInSearchForm}
        />
        {
          this.props.tappingTimeout && this.props.searchMovieQuery ?
            <ActivityIndicator size="large" color="#0000ff" />
            :
            <FoundMovieList foundMovies={this.props.foundMovies} />
        }
      </View>
    );
  }
}