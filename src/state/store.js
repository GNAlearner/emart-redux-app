import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/rootReducer";
import productsSaga from "./actions/productsSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: ()=> [sagaMiddleware]
})

sagaMiddleware.run(productsSaga);
export default store