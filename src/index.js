import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import Container from './experiment/components/Container';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { exp_reducer } from './experiment/reducers';
import { combineReducers } from 'redux';

// einbinden des reducers

const reducer = combineReducers({
    experiment: exp_reducer
});

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
    yield all([
        call(console.log, "root saga started")
    ])
}

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('root'));
registerServiceWorker();
