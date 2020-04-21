import {
  SET_USER,
  SET_STATUS,
  SET_REPO,
  SET_ERROR,
  stateActionsTypes,
  STATUS_CHECK,
  STATUS_VALID,
  STATUS_NOT_VALID,
  RESET_DATA
} from '../types/state.types'


import NetInfo from '@react-native-community/netinfo';
import githubService from '../../services/gtibhub.service'




export const checkRepo = ()  => {

  const deviceIsConnected = async() => {
    const state = await NetInfo.fetch()
    return state.isConnected
  }

  return async (dispatch, getState) => {
      const isConnected = await deviceIsConnected()
      if(!isConnected) {
        dispatch(setError('Check your internet connection'))
        return dispatch(setStatus(STATUS_NOT_VALID))
      }
      const { user, repo } = getState().state
      
      githubService.repoExist(user, repo)
      .then((res) => {
        dispatch(setStatus(STATUS_VALID)) 
      })
      .catch((error) => {
        dispatch(setError(error))
        dispatch(setStatus(STATUS_NOT_VALID))
      })
  }
}

export const setError = (message: string):stateActionsTypes  => {
  return {
    type: SET_ERROR,
    payload: message
  }
}

export const resetData = ():stateActionsTypes  => {
  return {
    type: RESET_DATA,
    payload:null
  }
}

export const setData = (name: string, value:string):stateActionsTypes  => {
  return name === 'user'
  ? setUser(value)
  : setRepo(value)
}

export const setUser = (user:string):stateActionsTypes  => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setRepo = (repo:string):stateActionsTypes  => {
  return {
    type: SET_REPO,
    payload: repo
  }
}

export const setStatus = (status:typeof STATUS_CHECK | typeof STATUS_VALID | typeof STATUS_NOT_VALID):stateActionsTypes  => {
  return {
    type: SET_STATUS,
    payload: status
  }
}

