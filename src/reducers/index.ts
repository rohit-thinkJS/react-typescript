import { combineReducers } from 'redux'
import {notesReducer} from './notesReducer'

export const rootReducer = combineReducers({
    //import and use the various reducers here
    notes: notesReducer
})

