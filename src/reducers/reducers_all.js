import { combineReducers } from 'redux'
import growlmessages from './message-growl-reducer.js'
//for example, lets suppose we have another action that triggers deletion of some items
//import deleteitem from './deleteitem-reducer.js'

const appReducers = combineReducers({
  growlmessages//,deleteitem
})

export default appReducers
