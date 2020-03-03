import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import { incrementSaga} from './buttom/buttom.sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const store = createStore(
    rootReducer, applyMiddleware(...middleware)
)

sagaMiddleware.run(incrementSaga)

export default store