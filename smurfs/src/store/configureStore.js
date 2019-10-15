import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import smurfsReducer from '../reducers/smurfs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            smurfState: smurfsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
