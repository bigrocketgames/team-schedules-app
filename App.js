import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import store from './redux/store';
import Sports from './containers/sports';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Sports/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
