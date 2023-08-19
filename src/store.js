//import {createStore} from 'redux' // only redux
import {configureStore} from '@reduxjs/toolkit'
//import rootReducer 
import rootReducer from "./reducers/index"
import productSaga from "./saga/productSaga"
import createSagaMiddleware from "redux-saga"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

//const store = createStore(rootReducer) //pass roorReducer // only redux
//const store = configureStore({reducer: rootReducer}) //pass roorReducer // using reduxtoolkit

// mount it on the Store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
}) //pass roorReducer // using reduxtoolkit

// then run the saga
sagaMiddleware.run(productSaga)
export default store