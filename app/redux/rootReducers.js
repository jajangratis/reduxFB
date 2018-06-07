import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import notificationsReducer from '../notifications/reducers'
import productsReducer from '../products/reducers'
import timelineReducer from '../timeline/reducers'


const appReducer = combineReducers({
  nav,
  form: formReducer,
  contactsReducer,
  productsReducer,
  timelineReducer,
  notificationsReducer
})

export default appReducer
