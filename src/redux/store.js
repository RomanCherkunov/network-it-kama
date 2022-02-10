import {combineReducers, createStore} from 'redux'
import authReducer from './auth_reducer';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)



export default store