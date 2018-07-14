import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


import TimeComponent from './components/TimeComponent';

import { Card } from 'react-native-elements'; 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card >
          <TimeComponent />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
