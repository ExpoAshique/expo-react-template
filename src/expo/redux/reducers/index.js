import { combineReducers } from 'redux'
import AppsReducer from './apps'
import settingsReducer from './settings'
import themeReducer from './themes'
import AuthReducer from './auth'
import TableReducer from './table'

const reducers = combineReducers({
  app: AppsReducer,
  auth: AuthReducer,
  settings: settingsReducer,
  theme: themeReducer,
  allTableData: TableReducer,
})

export default reducers
