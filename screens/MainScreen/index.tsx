//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'
import HeaderComponent from '../../components/Header'
import { useSelector} from 'react-redux'
import { RootStateType } from '../../store/types/root.types'
import { STATUS_CHECK, STATUS_VALID, STATUS_NOT_VALID } from '../../store/types/state.types'
import {useDispatch} from 'react-redux'
import { checkRepo, resetData } from '../../store/actions/state.actions'
import ErrorComponent from '../../components/Error';
import pushmoreService from '../../services/pushmore.service'


const inputs = {
  user: {
    name: 'user',
    label: 'USER',
    placeholder: 'Type your github username',
  },
  repo: {
    name: 'repo',
    label: 'REPOSITORY',
    placeholder: 'Type your repository name',
  }
}

const MainScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const status = useSelector((state:RootStateType ) => state.state.status)
  const user = useSelector((state:RootStateType ) => state.state.user)
  const repo = useSelector((state:RootStateType ) => state.state.repo)
  const error = useSelector((state:RootStateType ) => state.state.error)

  const dataToInput = (type) => {
    // ....any actions
    return { ...inputs[type] }
  }

  const inputsIsValid = () => {
    /// ...validation
    return (user !== '' && repo !== '')
  }

  const checkRepoHandler = async() => {
    await dispatch(checkRepo())
  }

  const statusIdValid = () => {
    return status === STATUS_VALID
  }

  const statusNotValid = () => {
    return status === STATUS_NOT_VALID
  }

  const statusStyle = () => {
    if(status === STATUS_VALID) return {backgroundColor:Colors.green}
    if(status === STATUS_NOT_VALID) return {backgroundColor:Colors.red}
    if(status === STATUS_CHECK) return {backgroundColor:Colors.white}
  }

  const sendRepo = async () => {
    const repoUrl = `https://github.com/${user}/${repo}`
    const sender = "Michael Di Pietro"
    try {
      const res = await pushmoreService.sendRepo({
        repoUrl,
        sender 
      })
      dispatch(resetData())
      navigation.navigate('Done')
    } catch(error) {
      console.log('error', error)
    }
    
  }



   return (
    <View style={[
      styles.container,
      statusStyle()
    ]}>
      <HeaderComponent
        backAction={false}
        title="Set the repository address" />
      <View style={styles.mainContainer}>
        <Text style={styles.text}>github.com</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>/</Text>
          <TouchableOpacity
            onPress={ () => navigation.navigate('Input', dataToInput('user')) }>
              <Text style={{...styles.text, color:Colors.gray}}>{user || 'user'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>/</Text>
          <TouchableOpacity
            onPress={ () => navigation.navigate('Input', dataToInput('repo')) }>
              <Text style={{...styles.text, color:Colors.gray}}>{repo || 'repo'}</Text>
          </TouchableOpacity>
        </View>
        { statusNotValid() ? <ErrorComponent text={error} /> : null }
      </View>
      
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={!inputsIsValid()}
          onPress={ statusIdValid() ? sendRepo : checkRepoHandler}>
          <Text style={[
            styles.footerText,
            inputsIsValid()
            ? { color: Colors.black } 
            : { color: Colors.gray }
          ]}>
            {statusIdValid() ? 'SEND': 'CHECK' }
          </Text>
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
  mainContainer:{
    flex:1
  },
  text: {
    fontFamily:'OpenSans-regular',
    fontSize:40
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
  }
});

//make this component available to the app
export default MainScreen;
