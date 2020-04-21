//import liraries
import React, { useEffect, Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


// create a component
const HeaderComponent = ({ title, backAction}) => {

  const backButton = backAction
  ? <TouchableOpacity 
      style={styles.backButton}
      onPress={() => backAction()}>
        <Image source={require('../../assets/back.png')} /> 
      </TouchableOpacity> 
  : null


  return (
    <View style={styles.container}>
      { backButton }
      <Text style={styles.title}>{title ?? 'Title' }</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:150,
    alignItems: 'center'
  },
  title: {
    fontSize:20,
    fontFamily:'OpenSans-bold'
  },
  backButton: {
    marginRight:40
  }
});

//make this component available to the app
export default HeaderComponent;
