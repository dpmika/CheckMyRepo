
export const SET_STATUS = 'SET_STATUS'
export const SET_USER = 'SET_USER'
export const SET_REPO = 'SET_REPO'
export const RESET_DATA = 'RESETDATA'
export const SET_ERROR = 'SETERROR'
export const STATUS_CHECK = 'CHECK'
export const STATUS_VALID = 'VALID'
export const STATUS_NOT_VALID = 'NOTVALID'

interface SetStatusAction {
  type: typeof SET_STATUS 
  payload: typeof STATUS_CHECK | typeof STATUS_VALID | typeof STATUS_NOT_VALID
}

interface SetError {
  type: typeof SET_ERROR
  payload: string
}


interface SetUserAction {
  type: typeof SET_USER 
  payload: string
}

interface SetRepoAction {
  type: typeof SET_REPO 
  payload: string
}

export interface StateType {
  status: typeof STATUS_CHECK | typeof  STATUS_NOT_VALID | typeof STATUS_VALID,
  user: string,
  repo: string,
  error: string
}

export interface SetDataAction {
  type: typeof SET_USER |  typeof SET_REPO,
  payload: string
}

export interface ResetDataAction {
  type: typeof RESET_DATA
  payload: null
}



export type stateActionsTypes = SetStatusAction | SetUserAction | SetRepoAction | SetDataAction | SetError | ResetDataAction