

import { 
  stateActionsTypes, 
  SET_STATUS,
  SET_USER,
  SET_REPO,
  SET_ERROR,
  StateType,
  RESET_DATA
} from '../types/state.types'


const initialState:StateType = {
  status: 'CHECK',
  user: '',
  repo: '',
  error: ''
}

const stateReducer = (state:StateType = initialState, action:stateActionsTypes ) => {
  switch(action.type) {
    case SET_STATUS:      
      return { 
        ...state,
        status: action.payload
      }
    case RESET_DATA:      
      return initialState
    case SET_USER:      
      return { 
        ...state,
        user: action.payload
      }
    case SET_REPO:      
      return { 
        ...state,
        repo: action.payload
      }
    case SET_ERROR:      
      return { 
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}


export default stateReducer