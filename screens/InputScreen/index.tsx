//import liraries
import React, { Component, useState, isValidElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Colors from '../../constants/colors'
import HeaderComponents from '../../components/Header'
import { useSelector} from 'react-redux'
import { RootStateType } from '../../store/types/root.types'
import { STATUS_CHECK, STATUS_VALID, STATUS_NOT_VALID } from '../../store/types/state.types'
import { useDispatch } from 'react-redux'
import { setData, setStatus, setError } from '../../store/actions/state.actions'


const MainScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const {label, placeholder, name } = route.params
  const data = useSelector((state:RootStateType ) => state.state[name])
  const [inputData, setInputData] = useState(data)
  const backAction = () => navigation.navigate('Main')


  const onDone = () => {
    dispatch(setStatus(STATUS_CHECK))
    dispatch(setError(''))
    if(inputData !== data) dispatch(setData(name, inputData))
    backAction()
  }

  const handlerInput = value => {
    setInputData(toSlug(value))
  }

  const inputIsValid = () => {
    /// ...validation
    return inputData !== ''
  }

  const toSlug = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '')  
      .replace(/\-\-+/g, '-')
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <HeaderComponents 
          title={label}
          backAction={backAction} />
        <View style={styles.mainContainer}>
          <TextInput
            autoFocus={true}
            value={inputData}
            placeholder={placeholder}
            style={styles.input}
            onChangeText={handlerInput}
            maxLength = {15} />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            disabled={!inputIsValid()}
            onPress={onDone}>
            <Text style={
              [
                styles.footerText,
                inputIsValid() 
                ? { color: Colors.black } 
                : { color: Colors.gray }
              ]}>
                DONE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal:20
  },
  mainContainer:{
    flex:1
  },
  text: {
    fontFamily:'OpenSans-regular',
    fontSize:45
  },
  inputContainer:{
    flexDirection:'row',
    paddingVertical:5
  },
  footerContainer:{
    paddingBottom:80,
    alignItems:'flex-end'
  },
  footerText: {
    fontSize:25,
    fontFamily:'OpenSans-bold'
  },
  input:{
    borderBottomColor: Colors.black,
    borderBottomWidth:2,
    fontSize:26,
    paddingBottom:10,
    fontFamily:'OpenSans-regular'
  }
});

//make this component available to the app
export default MainScreen;
