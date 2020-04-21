//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Highlighter from 'react-native-highlight-words';

const boldWord = [
  'username',
  'repository',
  'internet',
  'connection'
]

// create a component
const ErrorComponent = ({text}) => {
  return (
    <View style={styles.container}>
      <Highlighter
        style={styles.text}
        highlightStyle={styles.bold}
        searchWords={boldWord}
        textToHighlight={text}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container:{
    paddingVertical:30
  },
  text: {
    fontFamily:'OpenSans-regular',
    fontSize:20
  },
  bold: {
    fontSize:20,
    fontFamily:'OpenSans-bold',
  }
});

//make this component available to the app
export default ErrorComponent;
