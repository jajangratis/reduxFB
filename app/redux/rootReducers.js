import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import notifReducer from '../notifications/reducers'
import productsReducer from '../products/reducers'
import timelineReducer from '../timeline/reducers'
import friendsreqReducer from '../friendsreq/reducers'
import marketsreqReducer from '../markets/reducers'
import memberReducer from '../members/reducers'



const appReducer = combineReducers({
  nav,
  form: formReducer,
  notifReducer,
  contactsReducer,
  timelineReducer,
  friendsreqReducer,
  marketsreqReducer,
  memberReducer,
})

export default appReducer
