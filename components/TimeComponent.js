import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';



export default class TimeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.Clock = setInterval(() => this.GetTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Clock);
  }

  GetTime() {
    
    var date, hour, phrase;
    date = new Date();
    hour = date.getHours();

    if (hour < 12) {
      phrase = 'Good Morning';
    } else if (hour >= 12 && hour <=19){
      phrase = 'Good Afternoon';
    } else {
      phrase = 'Good Night';
    }
   
    this.setState({
      message: phrase
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}> {this.state.message} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    fontSize: 26,
    textAlign: 'center',
    color: '#009688',
    marginBottom: 20,
  },
});
