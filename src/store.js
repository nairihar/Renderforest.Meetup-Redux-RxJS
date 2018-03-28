import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import 'rxjs'

import pingReducer from './reducers'
import { pingEpic } from './epics'

const epicMiddleware = createEpicMiddleware(pingEpic)

export default createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
)
