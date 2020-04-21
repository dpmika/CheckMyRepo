//import liraries
import React, { Component, useState, isValidElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Colors from '../../constants/colors'
import HeaderComponents from '../../components/Header'
import { useSelector} from 'react-redux'
import { RootStateType } from '../../store/types/root.types'
import { STATUS_CHECK, STATUS_VALID, STATUS_NOT_VALID } from '../../store/types/state.types'
import { useDispatch } from 'react-redux'
import { setData, setStatus } from '../../store/actions/state.actions'

const DoneScreen = ({ route, navigation }) => {
  const backAction = () => navigation.navigate('Main')

  const onDone = () => {
    backAction()
  }


  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>All done!</Text>
        <Text style={styles.text}>Repository sent.</Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={onDone}>
          <Text style={styles.footerText}> COOL </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal:20

  },
  mainContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    color:Colors.black,
    fontFamily:'OpenSans-bold',
    fontSize:35
  },
  footerContainer:{
    alignSelf:'flex-end',
    paddingBottom:80,
    alignItems:'flex-end'
  },
  footerText: {
    fontSize:25,
    fontFamily:'OpenSans-bold'
  },
});

export default DoneScreen;
